import { Webhook, WebhookVerificationError } from "standardwebhooks";

/**
 * Verify the Standard Webhooks signature Whop sends on every webhook delivery.
 *
 * This is the verification half of the `client.webhooks.unwrap` the Stainless-generated
 * `@whop/sdk` shipped through 0.0.42. Fern generates from OpenAPI paths and `unwrap` was
 * never a path, so the generated client has no equivalent. It is a standalone function
 * rather than a method on the client so that nothing generated has to be patched: it
 * depends only on `standardwebhooks`, never on generated client code, so it survives the
 * client being replaced.
 *
 * It does NOT coerce the parsed body into a typed event model, which the Stainless
 * version did through a union of 42 of them. Fern generates no webhook event models —
 * `Whop.WebhookEvent` is the enum of event *names* a webhook subscribes to, not a payload
 * type — so there is nothing to coerce into.
 */
export interface UnwrapWebhookOptions {
    /**
     * The request headers. Only `webhook-id`, `webhook-timestamp` and `webhook-signature`
     * are read, and the lookup is case-insensitive.
     */
    headers: Record<string, string>;
    /**
     * The endpoint's signing secret, exactly as Whop shows it — a `ws_`-prefixed string.
     * Pass it verbatim; do not strip the prefix and do not pre-encode it.
     */
    key: string | undefined;
}

export const MISSING_KEY_MESSAGE =
    "Cannot verify a webhook without a key. Pass the endpoint's signing secret as `key`.";

/**
 * Base64-encode the secret so `Webhook` derives the key Whop actually signs with.
 *
 * Whop's backend HMACs with the *literal bytes* of the secret it issued
 * (`WebhooksManager::SignWebhook` passes `webhook.webhook_secret` straight to
 * `OpenSSL::HMAC`). `standardwebhooks`' `Webhook` instead base64-decodes whatever it is
 * handed to derive its key, so handing it the secret raw derives the wrong key — and,
 * because its decoder is strict, a `ws_` secret does not even fail as a verification
 * error: `_` is outside the base64 alphabet, so the constructor throws
 * `Base64Coder: incorrect characters for decoding`. Encoding here cancels that decode
 * out, leaving exactly the bytes the backend signed with.
 *
 * The whole secret is encoded, prefix included, because the backend never strips a prefix
 * either. That also disarms the library's own `whsec_` stripping: base64 output cannot
 * begin with `whsec_`, since `_` is not in the base64 alphabet.
 *
 * `TextEncoder`/`btoa` rather than `Buffer` so this holds outside Node too — the secret is
 * encoded as UTF-8, not latin1, which `btoa` alone would get wrong for a non-ASCII secret.
 */
function hmacKey(key: string): string {
    const bytes = new TextEncoder().encode(key);
    let binary = "";
    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }
    return btoa(binary);
}

/**
 * Verifies `payload` against the signature headers and returns the parsed body.
 *
 * @param payload The raw, unmodified request body. Verifying a re-serialized body fails:
 * the signature covers the exact bytes sent. In Next.js that is `await request.text()`,
 * never `await request.json()`.
 * @throws {Error} when `key` is missing or empty.
 * @throws {WebhookVerificationError} when a signature header is missing or malformed, the
 * timestamp is outside the tolerance window, or no signature matches.
 *
 * `TEvent` is an unchecked assertion on the parsed body, not a validated shape — nothing
 * here checks the payload against it.
 */
export function unwrapWebhook<TEvent = Record<string, unknown>>(
    payload: string,
    { headers, key }: UnwrapWebhookOptions,
): TEvent {
    if (!key) {
        throw new Error(MISSING_KEY_MESSAGE);
    }

    return new Webhook(hmacKey(key)).verify(payload, headers) as TEvent;
}

export { WebhookVerificationError };
