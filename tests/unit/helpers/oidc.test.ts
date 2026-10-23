import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
    DEFAULT_OIDC_AUDIENCE,
    githubActionsIdentityToken,
    googleCloudIdentityToken,
    OidcTokenError,
    oidcToken,
} from "../../../src/helpers/index.js";
import { WhopClient } from "../../../src/index.js";

const ROLE_ID = "aurl_xxxxxxxxxxxxx";

function jsonResponse(status: number, body: unknown): Response {
    return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

function exchangeFetch(...tokens: string[]) {
    const queue = [...tokens];
    return vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) =>
        jsonResponse(200, { access_token: queue.shift(), token_type: "Bearer", expires_in: 3600 }),
    );
}

describe("oidcToken", () => {
    beforeEach(() => {
        vi.useFakeTimers({ toFake: ["Date"] });
        vi.setSystemTime(new Date("2026-10-23T12:00:00Z"));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("exchanges the identity token for an access token assuming the role", async () => {
        const fetch = exchangeFetch("whop-token-1");
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await expect(token()).resolves.toBe("whop-token-1");

        const [url, init] = fetch.mock.calls[0];
        expect(url).toBe("https://api.whop.com/api/v1/access_tokens/exchange");
        expect(init?.method).toBe("POST");
        expect(JSON.parse(String(init?.body))).toEqual({
            grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
            subject_token_type: "urn:ietf:params:oauth:token-type:id_token",
            subject_token: "id-token",
            role_id: ROLE_ID,
        });
    });

    it("sends the exchange to the base URL it is given", async () => {
        const fetch = exchangeFetch("whop-token-1");

        await oidcToken({
            roleId: ROLE_ID,
            identityToken: () => "id-token",
            baseUrl: "https://sandbox-api.whop.com/api/v1/",
            fetch,
        })();

        expect(fetch.mock.calls[0][0]).toBe("https://sandbox-api.whop.com/api/v1/access_tokens/exchange");
    });

    it("reuses the access token until a minute before it expires, then exchanges a fresh identity token", async () => {
        const fetch = exchangeFetch("whop-token-1", "whop-token-2");
        const identityToken = vi.fn().mockReturnValueOnce("id-token-1").mockReturnValueOnce("id-token-2");
        const token = oidcToken({ roleId: ROLE_ID, identityToken, fetch });

        await expect(token()).resolves.toBe("whop-token-1");
        vi.advanceTimersByTime(58 * 60 * 1000);
        await expect(token()).resolves.toBe("whop-token-1");
        expect(fetch).toHaveBeenCalledTimes(1);

        vi.advanceTimersByTime(2 * 60 * 1000);
        await expect(token()).resolves.toBe("whop-token-2");
        expect(identityToken).toHaveBeenCalledTimes(2);
        expect(JSON.parse(String(fetch.mock.calls[1][1]?.body)).subject_token).toBe("id-token-2");
    });

    it("shares one exchange between concurrent requests", async () => {
        const fetch = exchangeFetch("whop-token-1");
        const token = oidcToken({ roleId: ROLE_ID, identityToken: async () => "id-token", fetch });

        await expect(Promise.all([token(), token(), token()])).resolves.toEqual([
            "whop-token-1",
            "whop-token-1",
            "whop-token-1",
        ]);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("surfaces the API's error message and code, and retries on the next request", async () => {
        const fetch = vi
            .fn()
            .mockResolvedValueOnce(
                jsonResponse(400, {
                    error: {
                        type: "bad_request",
                        message: "No trust linked to this role accepts this token.",
                        code: "oidc_exchange_no_match",
                    },
                }),
            )
            .mockResolvedValueOnce(jsonResponse(200, { access_token: "whop-token-1", expires_in: 3600 }));
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        const error = await token().catch((caught: unknown) => caught);
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({
            status: 400,
            code: "oidc_exchange_no_match",
            message: "No trust linked to this role accepts this token.",
        });

        await expect(token()).resolves.toBe("whop-token-1");
    });

    it("requires a role", () => {
        expect(() => oidcToken({ roleId: "", identityToken: () => "id-token" })).toThrow(OidcTokenError);
    });

    it("authenticates the client's requests with the exchanged token", async () => {
        const fetch = vi.fn(async (url: RequestInfo | URL, _init?: RequestInit) =>
            String(url).endsWith("/access_tokens/exchange")
                ? jsonResponse(200, { access_token: "whop-token-1", expires_in: 3600 })
                : jsonResponse(200, { id: "user_xxxxxxxxxxxxx" }),
        );
        const whop = new WhopClient({
            token: oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch }),
            fetch,
            maxRetries: 0,
        });

        await whop.users.retrieve("user_xxxxxxxxxxxxx");

        const apiCall = fetch.mock.calls.find(([url]) => String(url).includes("/users/"));
        expect(new Headers(apiCall?.[1]?.headers).get("Authorization")).toBe("Bearer whop-token-1");
    });
});

describe("githubActionsIdentityToken", () => {
    afterEach(() => {
        vi.unstubAllEnvs();
    });

    it("requests the job's identity token for the Whop audience", async () => {
        vi.stubEnv(
            "ACTIONS_ID_TOKEN_REQUEST_URL",
            "https://pipelines.actions.githubusercontent.com/abc/idtoken?api-version=2.0",
        );
        vi.stubEnv("ACTIONS_ID_TOKEN_REQUEST_TOKEN", "request-token");
        const fetch = vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) =>
            jsonResponse(200, { value: "github-id-token" }),
        );

        await expect(githubActionsIdentityToken({ fetch })()).resolves.toBe("github-id-token");

        const [url, init] = fetch.mock.calls[0];
        const requested = new URL(String(url));
        expect(requested.searchParams.get("audience")).toBe(DEFAULT_OIDC_AUDIENCE);
        expect(requested.searchParams.get("api-version")).toBe("2.0");
        expect(new Headers(init?.headers).get("Authorization")).toBe("Bearer request-token");
    });

    it("explains the missing permission when the job cannot request a token", async () => {
        vi.stubEnv("ACTIONS_ID_TOKEN_REQUEST_URL", "");
        vi.stubEnv("ACTIONS_ID_TOKEN_REQUEST_TOKEN", "");

        await expect(githubActionsIdentityToken()()).rejects.toThrow(/id-token: write/);
    });
});

describe("googleCloudIdentityToken", () => {
    it("asks the metadata server for the service account's identity token", async () => {
        const fetch = vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) => new Response("google-id-token\n"));

        await expect(googleCloudIdentityToken({ audience: "https://example.com", fetch })()).resolves.toBe(
            "google-id-token",
        );

        const [url, init] = fetch.mock.calls[0];
        expect(String(url)).toBe(
            "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=https%3A%2F%2Fexample.com",
        );
        expect(new Headers(init?.headers).get("Metadata-Flavor")).toBe("Google");
    });
});
