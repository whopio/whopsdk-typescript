import { afterEach, beforeEach, describe, expect, it, type MockInstance, vi } from "vitest";
import {
    DEFAULT_OIDC_AUDIENCE,
    githubActionsIdentityToken,
    googleCloudIdentityToken,
    OidcTokenError,
    oidcToken,
} from "../../../src/helpers/index.js";
import { WhopClient } from "../../../src/index.js";

const ROLE_ID = "aurl_xxxxxxxxxxxxx";

function jsonResponse(status: number, body: unknown, headers: Record<string, string> = {}): Response {
    return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...headers } });
}

const NOW = new Date("2026-10-23T12:00:00Z");

function secondsFromNow(seconds: number): Date {
    return new Date(NOW.getTime() + seconds * 1000);
}

function failingFetch(response: () => Response) {
    return vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) => response());
}

const unavailable = () => jsonResponse(503, { error: { message: "Unavailable." } });

const networkRateLimited = (headers: Record<string, string>) => () =>
    jsonResponse(429, { message: "You are being rate limited" }, headers);

const trustRateLimited = () =>
    jsonResponse(429, {
        error: {
            type: "rate_limited",
            message: "Too many token exchanges for this trust. Try again in a minute.",
            code: "oidc_exchange_rate_limited",
        },
    });

function exchangeFetch(...tokens: string[]) {
    const queue = [...tokens];
    return vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) =>
        jsonResponse(200, { access_token: queue.shift(), token_type: "Bearer", expires_in: 3600 }),
    );
}

function renewalFetch(...renewals: Array<() => Response>) {
    const queue = [() => jsonResponse(200, { access_token: "whop-token-1", expires_in: 3600 }), ...renewals];
    const last = renewals[renewals.length - 1];
    return vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) => (queue.shift() ?? last)());
}

function rejectOnAbort(signal: AbortSignal | null | undefined, reject: (reason: unknown) => void) {
    signal?.addEventListener("abort", () => reject(signal.reason));
}

async function stalledResponse(_url: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    return new Promise((_resolve, reject) => rejectOnAbort(init?.signal, reject));
}

async function stalledBody(_url: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const body = new ReadableStream({
        start(controller) {
            rejectOnAbort(init?.signal, (reason) => controller.error(reason));
        },
    });
    return new Response(body, { status: 200, headers: { "Content-Type": "application/json" } });
}

describe("oidcToken", () => {
    beforeEach(() => {
        vi.useFakeTimers({ toFake: ["Date"] });
        vi.setSystemTime(NOW);
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
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

    it("reuses the access token until shortly before it expires, then exchanges a fresh identity token", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        const fetch = exchangeFetch("whop-token-1", "whop-token-2");
        const identityToken = vi.fn().mockReturnValueOnce("id-token-1").mockReturnValueOnce("id-token-2");
        const token = oidcToken({ roleId: ROLE_ID, identityToken, fetch });

        await expect(token()).resolves.toBe("whop-token-1");
        vi.setSystemTime(secondsFromNow(58 * 60 - 1));
        await expect(token()).resolves.toBe("whop-token-1");
        expect(fetch).toHaveBeenCalledTimes(1);

        vi.setSystemTime(secondsFromNow(58 * 60));
        await expect(token()).resolves.toBe("whop-token-2");
        expect(identityToken).toHaveBeenCalledTimes(2);
        expect(JSON.parse(String(fetch.mock.calls[1][1]?.body)).subject_token).toBe("id-token-2");
    });

    it.each([
        { random: 0, renewsAfterSeconds: 58 * 60 },
        { random: 0.5, renewsAfterSeconds: 54 * 60 },
        { random: 0.999, renewsAfterSeconds: 50 * 60 + 0.48 },
    ])("renews at a random point 2 to 10 minutes before expiry (random $random)", async ({
        random,
        renewsAfterSeconds,
    }) => {
        vi.spyOn(Math, "random").mockReturnValue(random);
        const fetch = exchangeFetch("whop-token-1", "whop-token-2");
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await token();
        vi.setSystemTime(secondsFromNow(renewsAfterSeconds - 0.001));
        await expect(token()).resolves.toBe("whop-token-1");
        vi.setSystemTime(secondsFromNow(renewsAfterSeconds));
        await expect(token()).resolves.toBe("whop-token-2");
    });

    it("renews a short-lived token no earlier than halfway through its life", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.999);
        const fetch = vi
            .fn()
            .mockResolvedValueOnce(jsonResponse(200, { access_token: "whop-token-1", expires_in: 300 }))
            .mockResolvedValueOnce(jsonResponse(200, { access_token: "whop-token-2", expires_in: 300 }));
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await token();
        vi.setSystemTime(secondsFromNow(149.999));
        await expect(token()).resolves.toBe("whop-token-1");
        vi.setSystemTime(secondsFromNow(150));
        await expect(token()).resolves.toBe("whop-token-2");
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

    it("gives concurrent requests the one error of the exchange they share", async () => {
        const fetch = failingFetch(unavailable);
        const token = oidcToken({ roleId: ROLE_ID, identityToken: async () => "id-token", fetch });

        const [first, second, third] = await Promise.all(
            [token(), token(), token()].map((call) => call.catch((caught: unknown) => caught)),
        );

        expect(first).toBeInstanceOf(OidcTokenError);
        expect(second).toBe(first);
        expect(third).toBe(first);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("surfaces the API's error message and code with when it will exchange again, and exchanges then", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
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
            retryAt: secondsFromNow(2),
        });

        vi.setSystemTime(secondsFromNow(2));
        await expect(token()).resolves.toBe("whop-token-1");
    });

    it.each([
        {
            source: "the exchange request",
            cause: new TypeError("fetch failed"),
            options: (cause: Error) => ({ identityToken: () => "id-token", fetch: vi.fn().mockRejectedValue(cause) }),
        },
        {
            source: "the identity token source",
            cause: new Error("No identity token is available."),
            options: (cause: Error) => ({
                identityToken: () => Promise.reject(cause),
                fetch: exchangeFetch("whop-token-1"),
            }),
        },
    ])("wraps an error from $source in an OidcTokenError with retryAt, keeping it as the cause", async ({
        cause,
        options,
    }) => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
        const token = oidcToken({ roleId: ROLE_ID, ...options(cause) });

        const error = await token().catch((caught: unknown) => caught);

        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({ message: cause.message, status: undefined, retryAt: secondsFromNow(2) });
        expect((error as OidcTokenError).cause).toBe(cause);
        await expect(token()).rejects.toBe(error);
    });

    it("returns the failed exchange's error without exchanging again until the backoff ends", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
        const fetch = failingFetch(() => jsonResponse(500, { error: { message: "Something went wrong." } }));
        const identityToken = vi.fn(() => "id-token");
        const token = oidcToken({ roleId: ROLE_ID, identityToken, fetch });

        const error = await token().catch((caught: unknown) => caught);
        for (let call = 0; call < 9; call++) {
            await expect(token()).rejects.toBe(error);
        }
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(identityToken).toHaveBeenCalledTimes(1);

        vi.setSystemTime(secondsFromNow(1.999));
        await expect(token()).rejects.toBe(error);
        expect(fetch).toHaveBeenCalledTimes(1);

        vi.setSystemTime(secondsFromNow(2));
        await expect(token()).rejects.toBeInstanceOf(OidcTokenError);
        expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("doubles the backoff from 2 seconds with each failure in a row up to a minute, and starts over after a success", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
        let succeed = false;
        const fetch = vi.fn(async (_url: RequestInfo | URL, _init?: RequestInit) =>
            succeed ? jsonResponse(200, { access_token: "whop-token-1", expires_in: 3600 }) : unavailable(),
        );
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await token().catch(() => undefined);
        let elapsed = 0;
        for (const backoff of [2, 4, 8, 16, 32, 60, 60]) {
            vi.setSystemTime(secondsFromNow(elapsed + backoff - 0.001));
            await expect(token()).rejects.toMatchObject({ retryAt: secondsFromNow(elapsed + backoff) });
            const exchanges = fetch.mock.calls.length;
            vi.setSystemTime(secondsFromNow(elapsed + backoff));
            await token().catch(() => undefined);
            expect(fetch.mock.calls.length).toBe(exchanges + 1);
            elapsed += backoff;
        }

        succeed = true;
        elapsed += 60;
        vi.setSystemTime(secondsFromNow(elapsed));
        await expect(token()).resolves.toBe("whop-token-1");

        succeed = false;
        elapsed += 54 * 60;
        vi.setSystemTime(secondsFromNow(elapsed));
        await token();
        const exchanges = fetch.mock.calls.length;
        vi.setSystemTime(secondsFromNow(elapsed + 1.999));
        await token();
        expect(fetch.mock.calls.length).toBe(exchanges);
        vi.setSystemTime(secondsFromNow(elapsed + 2));
        await token();
        expect(fetch.mock.calls.length).toBe(exchanges + 1);
    });

    it.each([
        { random: 0, seconds: 1.8 },
        { random: 0.5, seconds: 2 },
        { random: 0.999, seconds: 2.1996 },
    ])("spreads the backoff by up to 10% either way (random $random)", async ({ random, seconds }) => {
        vi.spyOn(Math, "random").mockReturnValue(random);
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch: failingFetch(unavailable) });

        await expect(token()).rejects.toMatchObject({ retryAt: secondsFromNow(seconds) });
    });

    it("waits until the network rate limit's RateLimit-Reset before exchanging again", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.999);
        const reset = secondsFromNow(45);
        const fetch = failingFetch(networkRateLimited({ "RateLimit-Reset": String(reset.getTime() / 1000) }));
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        const error = await token().catch((caught: unknown) => caught);
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({ status: 429, code: undefined, retryAt: reset });

        vi.setSystemTime(secondsFromNow(44.999));
        await expect(token()).rejects.toBe(error);
        expect(fetch).toHaveBeenCalledTimes(1);

        vi.setSystemTime(reset);
        await token().catch(() => undefined);
        expect(fetch).toHaveBeenCalledTimes(2);
    });

    it.each([
        { retryAfter: "30", seconds: 30 },
        { retryAfter: "Fri, 23 Oct 2026 12:00:20 GMT", seconds: 20 },
    ])("prefers Retry-After ($retryAfter) over RateLimit-Reset", async ({ retryAfter, seconds }) => {
        vi.spyOn(Math, "random").mockReturnValue(0.999);
        const fetch = failingFetch(
            networkRateLimited({
                "Retry-After": retryAfter,
                "RateLimit-Reset": String(secondsFromNow(45).getTime() / 1000),
            }),
        );
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await expect(token()).rejects.toMatchObject({ retryAt: secondsFromNow(seconds) });
    });

    it.each([
        { header: "Retry-After", value: "600" },
        { header: "RateLimit-Reset", value: String(secondsFromNow(600).getTime() / 1000) },
    ])("waits no longer than a minute when $header is further out", async ({ header, value }) => {
        vi.spyOn(Math, "random").mockReturnValue(0.999);
        const fetch = failingFetch(networkRateLimited({ [header]: value }));
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await expect(token()).rejects.toMatchObject({ retryAt: secondsFromNow(60) });
    });

    it("backs off from 2 seconds after a rate limit that says nothing about when to retry", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
        const token = oidcToken({
            roleId: ROLE_ID,
            identityToken: () => "id-token",
            fetch: failingFetch(trustRateLimited),
        });

        await expect(token()).rejects.toMatchObject({
            status: 429,
            code: "oidc_exchange_rate_limited",
            retryAt: secondsFromNow(2),
        });
    });

    it("keeps returning the current token when its renewal fails, and renews again after the backoff", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        const fetch = renewalFetch(unavailable, () =>
            jsonResponse(200, { access_token: "whop-token-2", expires_in: 3600 }),
        );
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await token();
        vi.setSystemTime(secondsFromNow(58 * 60));
        await expect(token()).resolves.toBe("whop-token-1");
        expect(fetch).toHaveBeenCalledTimes(2);

        vi.setSystemTime(secondsFromNow(58 * 60 + 1.799));
        await expect(token()).resolves.toBe("whop-token-1");
        expect(fetch).toHaveBeenCalledTimes(2);

        vi.setSystemTime(secondsFromNow(58 * 60 + 1.8));
        await expect(token()).resolves.toBe("whop-token-2");
        expect(fetch).toHaveBeenCalledTimes(3);
    });

    it("fails with the last renewal's error and its retryAt once the token is 30 seconds from expiring", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        const fetch = renewalFetch(networkRateLimited({ "Retry-After": "60" }));
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await token();
        vi.setSystemTime(secondsFromNow(58 * 60));
        await expect(token()).resolves.toBe("whop-token-1");
        vi.setSystemTime(secondsFromNow(58 * 60 + 59.999));
        await expect(token()).resolves.toBe("whop-token-1");
        expect(fetch).toHaveBeenCalledTimes(2);

        vi.setSystemTime(secondsFromNow(59 * 60));
        await expect(token()).resolves.toBe("whop-token-1");
        expect(fetch).toHaveBeenCalledTimes(3);
        vi.setSystemTime(secondsFromNow(59 * 60 + 29.999));
        await expect(token()).resolves.toBe("whop-token-1");

        vi.setSystemTime(secondsFromNow(59 * 60 + 30));
        const error = await token().catch((caught: unknown) => caught);
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({ status: 429, retryAt: secondsFromNow(60 * 60) });
        expect(fetch).toHaveBeenCalledTimes(3);
    });

    it("fails a renewal that starts within 30 seconds of expiry with its error", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0.5);
        const fetch = renewalFetch(unavailable);
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        await token();
        vi.setSystemTime(secondsFromNow(59 * 60 + 30));

        await expect(token()).rejects.toMatchObject({ status: 503, retryAt: secondsFromNow(59 * 60 + 32) });
    });

    it("gives concurrent requests the current token when the renewal they share fails", async () => {
        vi.spyOn(Math, "random").mockReturnValue(0);
        const fetch = renewalFetch(unavailable);
        const token = oidcToken({ roleId: ROLE_ID, identityToken: async () => "id-token", fetch });

        await token();
        vi.setSystemTime(secondsFromNow(58 * 60));

        await expect(Promise.all([token(), token(), token()])).resolves.toEqual([
            "whop-token-1",
            "whop-token-1",
            "whop-token-1",
        ]);
        expect(fetch).toHaveBeenCalledTimes(2);
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

        await whop.users.retrieve({ id: "user_xxxxxxxxxxxxx" });

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

describe("request timeouts", () => {
    let timeout: MockInstance<typeof AbortSignal.timeout>;

    beforeEach(() => {
        const abortSignalTimeout = AbortSignal.timeout.bind(AbortSignal);
        timeout = vi.spyOn(AbortSignal, "timeout").mockImplementation(() => abortSignalTimeout(1));
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
        vi.unstubAllEnvs();
    });

    it("gives up on a stalled exchange after 10 seconds, and retries once the backoff ends", async () => {
        vi.useFakeTimers({ toFake: ["Date"] });
        vi.setSystemTime(NOW);
        const fetch = vi
            .fn()
            .mockImplementationOnce(stalledResponse)
            .mockResolvedValueOnce(jsonResponse(200, { access_token: "whop-token-1", expires_in: 3600 }));
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch });

        const error = await token().catch((caught: unknown) => caught);
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({
            status: undefined,
            code: undefined,
            message: "The token exchange timed out after 10 seconds.",
        });
        expect(timeout).toHaveBeenCalledWith(10_000);

        vi.setSystemTime(secondsFromNow(2.2));
        await expect(token()).resolves.toBe("whop-token-1");
    });

    it("gives up on a token exchange whose response body stalls", async () => {
        const token = oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch: vi.fn(stalledBody) });

        const error = await token().catch((caught: unknown) => caught);
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({ status: undefined, message: "The token exchange timed out after 10 seconds." });
    });

    it("fails the client's request instead of waiting on a stalled exchange", async () => {
        const fetch = vi.fn(stalledResponse);
        const whop = new WhopClient({
            token: oidcToken({ roleId: ROLE_ID, identityToken: () => "id-token", fetch }),
            fetch,
            maxRetries: 0,
        });

        await expect(whop.users.retrieve({ id: "user_xxxxxxxxxxxxx" })).rejects.toBeInstanceOf(OidcTokenError);
    });

    it("gives up on a GitHub Actions identity token request that does not respond within 10 seconds", async () => {
        vi.stubEnv("ACTIONS_ID_TOKEN_REQUEST_URL", "https://pipelines.actions.githubusercontent.com/abc/idtoken");
        vi.stubEnv("ACTIONS_ID_TOKEN_REQUEST_TOKEN", "request-token");

        const error = await githubActionsIdentityToken({ fetch: vi.fn(stalledBody) })().catch(
            (caught: unknown) => caught,
        );
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({
            status: undefined,
            message: "The GitHub Actions identity token request timed out after 10 seconds.",
        });
        expect(timeout).toHaveBeenCalledWith(10_000);
    });

    it("gives up on a Google Cloud metadata server that does not respond within 10 seconds", async () => {
        const error = await googleCloudIdentityToken({ fetch: vi.fn(stalledResponse) })().catch(
            (caught: unknown) => caught,
        );
        expect(error).toBeInstanceOf(OidcTokenError);
        expect(error).toMatchObject({
            status: undefined,
            message: "The identity token request to the Google Cloud metadata server timed out after 10 seconds.",
        });
        expect(timeout).toHaveBeenCalledWith(10_000);
    });
});
