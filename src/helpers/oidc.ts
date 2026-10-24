/**
 * Authenticate the client with your cloud provider's OIDC identity token instead of an API key.
 *
 * `oidcToken` returns a function the client's `token` option accepts. The client calls it before
 * each request; it exchanges an identity token for a short-lived Whop access token, reuses that
 * token until shortly before it expires, and then exchanges a fresh identity token. Nothing about
 * it depends on generated client code, so it survives the client being regenerated.
 *
 * ```ts
 * import { WhopClient } from "@whop/sdk";
 * import { githubActionsIdentityToken, oidcToken } from "@whop/sdk/helpers";
 *
 * const whop = new WhopClient({
 *     token: oidcToken({ roleId: "aurl_xxxxxxxxxxxxx", identityToken: githubActionsIdentityToken() }),
 * });
 * ```
 */

/** The audience the built-in identity token sources request, and the one to set on your trust. */
export const DEFAULT_OIDC_AUDIENCE = "https://api.whop.com";

const DEFAULT_BASE_URL = "https://api.whop.com/api/v1";
const GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
const ID_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:id_token";
const RENEW_BEFORE_EXPIRY_MS = 60_000;
const HTTP_TIMEOUT_MS = 10_000;
const GOOGLE_METADATA_IDENTITY_URL =
    "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity";

export interface OidcTokenOptions {
    /** The role to assume, prefixed `aurl_`. A trust linked to this role must accept the identity token. */
    roleId: string;
    /**
     * Returns an identity token from your cloud provider. It is called again for every exchange, so
     * return a fresh token rather than a stored one.
     */
    identityToken: () => string | Promise<string>;
    /** The API's base URL, for example `https://sandbox-api.whop.com/api/v1`. Defaults to production. */
    baseUrl?: string;
    /**
     * A custom fetch implementation. Defaults to the global `fetch`. Each request carries a `signal` that
     * aborts it after 10 seconds.
     */
    fetch?: typeof fetch;
}

export interface IdentityTokenOptions {
    /** The audience to request. It must equal the audience on your trust. Defaults to `https://api.whop.com`. */
    audience?: string;
    /**
     * A custom fetch implementation. Defaults to the global `fetch`. Each request carries a `signal` that
     * aborts it after 10 seconds.
     */
    fetch?: typeof fetch;
}

/** The exchange or the identity token request failed. `code` is the API's error code when it sent one. */
export class OidcTokenError extends Error {
    readonly status: number | undefined;
    readonly code: string | undefined;

    constructor(message: string, { status, code }: { status?: number; code?: string } = {}) {
        super(message);
        this.name = "OidcTokenError";
        this.status = status;
        this.code = code;
    }
}

/**
 * A `token` for the client that exchanges your provider's identity token for a Whop access token,
 * and renews it before it expires. Concurrent requests share one exchange.
 */
export function oidcToken(options: OidcTokenOptions): () => Promise<string> {
    if (!options.roleId) {
        throw new OidcTokenError("Pass the role to assume as `roleId`.");
    }

    let current: { token: string; renewAt: number } | undefined;
    let pending: Promise<string> | undefined;

    return () => {
        if (current !== undefined && Date.now() < current.renewAt) {
            return Promise.resolve(current.token);
        }
        pending ??= exchange(options)
            .then((exchanged) => {
                current = exchanged;
                return exchanged.token;
            })
            .finally(() => {
                pending = undefined;
            });
        return pending;
    };
}

/**
 * Reads the job's identity token from GitHub Actions. The job needs `permissions: id-token: write`.
 */
export function githubActionsIdentityToken(options: IdentityTokenOptions = {}): () => Promise<string> {
    return async () => {
        const requestUrl = environmentVariable("ACTIONS_ID_TOKEN_REQUEST_URL");
        const requestToken = environmentVariable("ACTIONS_ID_TOKEN_REQUEST_TOKEN");
        if (!requestUrl || !requestToken) {
            throw new OidcTokenError(
                "GitHub Actions did not provide an identity token. Give the job `permissions: id-token: write`.",
            );
        }

        const url = new URL(requestUrl);
        url.searchParams.set("audience", options.audience ?? DEFAULT_OIDC_AUDIENCE);
        return withTimeout("The GitHub Actions identity token request", async (signal) => {
            const response = await (options.fetch ?? fetch)(url, {
                headers: { Authorization: `Bearer ${requestToken}` },
                signal,
            });
            if (!response.ok) {
                throw new OidcTokenError(`GitHub Actions refused the identity token request with ${response.status}.`, {
                    status: response.status,
                });
            }
            const body = (await response.json()) as { value?: unknown };
            if (typeof body.value !== "string") {
                throw new OidcTokenError("GitHub Actions returned no identity token.");
            }
            return body.value;
        });
    };
}

/**
 * Reads the identity token of the service account the workload runs as from the Google Cloud metadata
 * server, on Cloud Run, Cloud Functions, Compute Engine, or GKE with Workload Identity.
 */
export function googleCloudIdentityToken(options: IdentityTokenOptions = {}): () => Promise<string> {
    return async () => {
        const url = new URL(GOOGLE_METADATA_IDENTITY_URL);
        url.searchParams.set("audience", options.audience ?? DEFAULT_OIDC_AUDIENCE);
        return withTimeout("The identity token request to the Google Cloud metadata server", async (signal) => {
            const response = await (options.fetch ?? fetch)(url, { headers: { "Metadata-Flavor": "Google" }, signal });
            if (!response.ok) {
                throw new OidcTokenError(
                    `The Google Cloud metadata server refused the identity token request with ${response.status}.`,
                    {
                        status: response.status,
                    },
                );
            }
            return (await response.text()).trim();
        });
    };
}

async function exchange(options: OidcTokenOptions): Promise<{ token: string; renewAt: number }> {
    const subjectToken = await options.identityToken();
    const baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    return withTimeout("The token exchange", async (signal) => {
        const response = await (options.fetch ?? fetch)(`${baseUrl}/access_tokens/exchange`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                grant_type: GRANT_TYPE,
                subject_token_type: ID_TOKEN_TYPE,
                subject_token: subjectToken,
                role_id: options.roleId,
            }),
            signal,
        });
        const body = (await response.json().catch(() => undefined)) as
            | { access_token?: unknown; expires_in?: unknown; error?: { message?: string; code?: string } }
            | undefined;

        if (!response.ok) {
            throw new OidcTokenError(body?.error?.message ?? `The token exchange failed with ${response.status}.`, {
                status: response.status,
                code: body?.error?.code,
            });
        }
        if (typeof body?.access_token !== "string" || typeof body.expires_in !== "number") {
            throw new OidcTokenError("The token exchange returned no access token.", { status: response.status });
        }
        return { token: body.access_token, renewAt: Date.now() + body.expires_in * 1000 - RENEW_BEFORE_EXPIRY_MS };
    });
}

async function withTimeout<T>(request: string, send: (signal: AbortSignal) => Promise<T>): Promise<T> {
    const signal = AbortSignal.timeout(HTTP_TIMEOUT_MS);
    try {
        return await send(signal);
    } catch (error) {
        if (signal.aborted) {
            throw new OidcTokenError(`${request} timed out after ${HTTP_TIMEOUT_MS / 1000} seconds.`);
        }
        throw error;
    }
}

function environmentVariable(name: string): string | undefined {
    return typeof process === "undefined" ? undefined : process.env[name];
}
