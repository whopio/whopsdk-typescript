/**
 * Authenticate the client with your cloud provider's OIDC identity token instead of an API key.
 *
 * `oidcToken` returns a function the client's `token` option accepts. The client calls it before
 * each request; it exchanges an identity token for a short-lived Whop access token, reuses that
 * token until a random point 2 to 10 minutes before it expires, so processes that started together
 * don't renew together, and then exchanges a fresh identity token. If that renewal fails, it keeps
 * using the current token while it has more than 30 seconds left and tries again after a backoff.
 * Nothing about it depends on generated client code, so it survives the client being regenerated.
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
const RENEW_LEAD_MIN_MS = 2 * 60_000;
const RENEW_LEAD_MAX_MS = 10 * 60_000;
const EXPIRY_MARGIN_MS = 30_000;
const FIRST_BACKOFF_MS = 2_000;
const MAX_BACKOFF_MS = 60_000;
const JITTER_FACTOR = 0.2;
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
    /**
     * When `oidcToken`'s function will exchange again. Until then it returns the current access token
     * while that has more than 30 seconds left, and this error once it doesn't. Every error the
     * function returns has it.
     */
    readonly retryAt: Date | undefined;
    /** The error that failed the exchange when it wasn't an `OidcTokenError`, such as a network error. */
    readonly cause?: unknown;

    constructor(
        message: string,
        { status, code, retryAt, cause }: { status?: number; code?: string; retryAt?: Date; cause?: unknown } = {},
    ) {
        super(message);
        this.name = "OidcTokenError";
        this.status = status;
        this.code = code;
        this.retryAt = retryAt;
        if (cause !== undefined) {
            this.cause = cause;
        }
    }
}

/**
 * A `token` for the client that exchanges your provider's identity token for a Whop access token,
 * and renews it before it expires. Concurrent requests share one exchange and its result.
 *
 * After a failed exchange, it doesn't exchange again until the error's `retryAt`: the time the API
 * sent in `Retry-After` or `RateLimit-Reset`, up to a minute away, or otherwise 2 seconds, doubling
 * with each failure in a row up to a minute. Until then requests get the current access token while
 * it has more than 30 seconds left, and the error once it doesn't.
 */
export function oidcToken(options: OidcTokenOptions): () => Promise<string> {
    if (!options.roleId) {
        throw new OidcTokenError("Pass the role to assume as `roleId`.");
    }

    let current: AccessToken | undefined;
    let pending: Promise<string> | undefined;
    let failure: Failure | undefined;

    const validToken = (): string | undefined =>
        current !== undefined && Date.now() < current.expiresAt - EXPIRY_MARGIN_MS ? current.token : undefined;

    return () => {
        const now = Date.now();
        if (current !== undefined && now < current.renewAt) {
            return Promise.resolve(current.token);
        }
        if (failure !== undefined && now < failure.retryAt) {
            const token = validToken();
            return token === undefined ? Promise.reject(failure.error) : Promise.resolve(token);
        }
        pending ??= exchange(options)
            .then(
                (exchanged) => {
                    current = exchanged;
                    failure = undefined;
                    return exchanged.token;
                },
                (error: unknown) => {
                    const failed = failureOf(error, (failure?.count ?? 0) + 1);
                    failure = failed;
                    const token = validToken();
                    if (token === undefined) {
                        throw failed.error;
                    }
                    return token;
                },
            )
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

interface AccessToken {
    token: string;
    renewAt: number;
    expiresAt: number;
}

interface Failure {
    error: OidcTokenError;
    retryAt: number;
    count: number;
}

async function exchange(options: OidcTokenOptions): Promise<AccessToken> {
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
                retryAt: retryAtFromHeaders(response.headers),
            });
        }
        if (typeof body?.access_token !== "string" || typeof body.expires_in !== "number") {
            throw new OidcTokenError("The token exchange returned no access token.", { status: response.status });
        }
        return accessToken(body.access_token, body.expires_in * 1000);
    });
}

function accessToken(token: string, lifetimeMs: number): AccessToken {
    const lead = RENEW_LEAD_MIN_MS + Math.random() * (RENEW_LEAD_MAX_MS - RENEW_LEAD_MIN_MS);
    const expiresAt = Date.now() + lifetimeMs;
    return { token, renewAt: expiresAt - Math.min(lead, lifetimeMs / 2), expiresAt };
}

function failureOf(error: unknown, count: number): Failure {
    if (error instanceof OidcTokenError && error.retryAt !== undefined) {
        return { error, retryAt: error.retryAt.getTime(), count };
    }
    const backoff = Math.min(FIRST_BACKOFF_MS * 2 ** (count - 1), MAX_BACKOFF_MS);
    const retryAt = new Date(Date.now() + backoff * (1 + (Math.random() - 0.5) * JITTER_FACTOR));
    const cached =
        error instanceof OidcTokenError
            ? new OidcTokenError(error.message, { status: error.status, code: error.code, retryAt })
            : new OidcTokenError(error instanceof Error ? error.message : String(error), { retryAt, cause: error });
    return { error: cached, retryAt: retryAt.getTime(), count };
}

function retryAtFromHeaders(headers: Headers): Date | undefined {
    const delay = [retryAfterDelay(headers.get("Retry-After")), resetDelay(headers.get("RateLimit-Reset"))].find(
        (candidate) => candidate > 0,
    );
    return delay === undefined ? undefined : new Date(Date.now() + Math.min(delay, MAX_BACKOFF_MS));
}

function retryAfterDelay(value: string | null): number {
    if (value === null) {
        return Number.NaN;
    }
    const seconds = Number(value);
    return Number.isNaN(seconds) ? Date.parse(value) - Date.now() : seconds * 1000;
}

function resetDelay(epochSeconds: string | null): number {
    return epochSeconds === null ? Number.NaN : Number(epochSeconds) * 1000 - Date.now();
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
