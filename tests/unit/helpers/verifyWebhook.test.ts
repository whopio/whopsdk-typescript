import { createHmac } from "node:crypto";
import { readFileSync } from "node:fs";
import { WebhookVerificationError } from "standardwebhooks";
import { unwrapWebhook } from "../../../src/helpers/index.js";

// The format WebhooksManager::Create issues: "ws_" + SecureRandom.hex(32).
const KEY = `ws_${"3f2a".repeat(16)}`;
const OTHER_KEY = `ws_${"c17b".repeat(16)}`;
const PAYLOAD = '{"id":"evt_123","event":"payment.succeeded","data":{"id":"pay_123"}}';

/**
 * Reproduces backend/app/services/webhooks_manager/sign_webhook.rb — deliberately not the
 * library under test. Signing and verifying with the same library is self-consistent and
 * proved nothing: it agreed with itself while rejecting every genuine Whop delivery.
 *
 *   payload   = "#{id}.#{timestamp}.#{body_json}"
 *   raw_sig   = OpenSSL::HMAC.digest("sha256", secret, payload)
 *   signature = Base64.strict_encode64(raw_sig)
 *   header    = "v1,#{signature}"
 */
function backendSignature(payload: string | Buffer, key: string, id: string, timestamp: string): string {
    const body = typeof payload === "string" ? Buffer.from(payload, "utf8") : payload;
    const signed = Buffer.concat([Buffer.from(`${id}.${timestamp}.`, "utf8"), body]);
    return createHmac("sha256", key).update(signed).digest("base64");
}

interface SignatureHeaders extends Record<string, string> {
    "webhook-id": string;
    "webhook-timestamp": string;
    "webhook-signature": string;
}

function signedHeaders({
    payload = PAYLOAD,
    key = KEY,
    id = "msg_2Xa9",
    at = new Date(),
}: {
    payload?: string | Buffer;
    key?: string;
    id?: string;
    at?: Date;
} = {}): SignatureHeaders {
    const timestamp = String(Math.floor(at.getTime() / 1000));
    return {
        "webhook-id": id,
        "webhook-timestamp": timestamp,
        "webhook-signature": `v1,${backendSignature(payload, key, id, timestamp)}`,
    };
}

describe("unwrapWebhook", () => {
    it("returns the parsed body for a valid signature", () => {
        expect(unwrapWebhook(PAYLOAD, { headers: signedHeaders(), key: KEY })).toEqual({
            id: "evt_123",
            event: "payment.succeeded",
            data: { id: "pay_123" },
        });
    });

    it("accepts headers whose names are capitalized", () => {
        const headers = Object.fromEntries(
            Object.entries(signedHeaders()).map(([name, value]) => [
                name.replace(/(^|-)([a-z])/g, (_, sep: string, char: string) => sep + char.toUpperCase()),
                value,
            ]),
        );

        expect(unwrapWebhook<{ id: string }>(PAYLOAD, { headers, key: KEY }).id).toBe("evt_123");
    });

    it("signs over the exact bytes of the body", () => {
        const payload = Buffer.from('{"id":"evt_123","note":"a\\u00e9b","emoji":"\u{1F600}"}', "utf8");
        const headers = signedHeaders({ payload });

        const signed = Buffer.concat([
            Buffer.from(`${headers["webhook-id"]}.${headers["webhook-timestamp"]}.`, "utf8"),
            payload,
        ]);
        const expected = createHmac("sha256", KEY).update(signed).digest("base64");

        expect(headers["webhook-signature"]).toBe(`v1,${expected}`);
        expect(unwrapWebhook<{ id: string }>(payload.toString("utf8"), { headers, key: KEY }).id).toBe("evt_123");
    });

    it("uses the secret verbatim without stripping a prefix", () => {
        // The backend HMACs the stored secret as-is, so a secret and that same secret minus
        // a prefix are two different keys. Stripping either one would silently derive the
        // wrong key.
        const prefixed = `whsec_${"9d4e".repeat(16)}`;
        const bare = prefixed.slice("whsec_".length);

        expect(
            unwrapWebhook<{ id: string }>(PAYLOAD, { headers: signedHeaders({ key: prefixed }), key: prefixed }).id,
        ).toBe("evt_123");
        expect(() => unwrapWebhook(PAYLOAD, { headers: signedHeaders({ key: prefixed }), key: bare })).toThrow(
            WebhookVerificationError,
        );
    });

    it.each([
        (valid: string, filler: string) => `v1,${filler} ${valid}`,
        (valid: string, filler: string) => `${valid} v1,${filler}`,
        (valid: string, filler: string) => `v0,${filler} ${valid} v2,${filler}`,
    ])("accepts a valid v1 entry in a multi-signature header (%#)", (build) => {
        const headers = signedHeaders();
        const value = build(headers["webhook-signature"], "A".repeat(44));

        expect(
            unwrapWebhook<{ id: string }>(PAYLOAD, { headers: { ...headers, "webhook-signature": value }, key: KEY })
                .id,
        ).toBe("evt_123");
    });

    // The nonce-bound scheme from https://github.com/whopio/whop/pull/23394:
    // base64(HMAC(secret, "v1n.<id>.<timestamp>.<nonce>.<body>")), appended after the v1
    // entry. That PR is closed and no deployed sender emits it — WebhooksManager::SignWebhook
    // on main writes a single "v1,<sig>" entry — so the helper ignores v1n rather than
    // verifying it. These pin that ignoring it stays harmless if the scheme ever ships: the
    // v1 entry it travels beside is still the one that authenticates the delivery.
    const nonceSignature = (id: string, timestamp: string, nonce: string) =>
        createHmac("sha256", KEY).update(`v1n.${id}.${timestamp}.${nonce}.${PAYLOAD}`, "utf8").digest("base64");

    it("ignores a v1n entry and verifies the v1 entry beside it", () => {
        const headers = signedHeaders();
        const nonce = "nonce_zRq4";
        const v1n = nonceSignature(headers["webhook-id"], headers["webhook-timestamp"], nonce);

        expect(
            unwrapWebhook<{ id: string }>(PAYLOAD, {
                headers: {
                    ...headers,
                    "webhook-nonce": nonce,
                    "webhook-signature": `${headers["webhook-signature"]} v1n,${v1n}`,
                },
                key: KEY,
            }).id,
        ).toBe("evt_123");
    });

    it("rejects a header carrying only a v1n entry", () => {
        const headers = signedHeaders();
        const v1n = nonceSignature(headers["webhook-id"], headers["webhook-timestamp"], "nonce_zRq4");

        expect(() =>
            unwrapWebhook(PAYLOAD, { headers: { ...headers, "webhook-signature": `v1n,${v1n}` }, key: KEY }),
        ).toThrow(WebhookVerificationError);
    });

    it("rejects a tampered payload", () => {
        expect(() =>
            unwrapWebhook(PAYLOAD.replace("pay_123", "pay_456"), { headers: signedHeaders(), key: KEY }),
        ).toThrow(WebhookVerificationError);
    });

    it("rejects a payload reserialized with the same content", () => {
        const reserialized = JSON.stringify(JSON.parse(PAYLOAD), null, 2);

        expect(reserialized).not.toBe(PAYLOAD);
        expect(JSON.parse(reserialized)).toEqual(JSON.parse(PAYLOAD));
        expect(() => unwrapWebhook(reserialized, { headers: signedHeaders(), key: KEY })).toThrow(
            WebhookVerificationError,
        );
    });

    it("rejects a signature made with a different key", () => {
        expect(() => unwrapWebhook(PAYLOAD, { headers: signedHeaders({ key: OTHER_KEY }), key: KEY })).toThrow(
            WebhookVerificationError,
        );
    });

    it("rejects a signature bound to a different message id", () => {
        const headers = { ...signedHeaders({ id: "msg_original" }), "webhook-id": "msg_replaced" };

        expect(() => unwrapWebhook(PAYLOAD, { headers, key: KEY })).toThrow(WebhookVerificationError);
    });

    it("rejects a signature bound to a different timestamp", () => {
        const now = new Date();
        const headers = {
            ...signedHeaders({ at: now }),
            "webhook-timestamp": String(Math.floor(now.getTime() / 1000) - 60),
        };

        expect(() => unwrapWebhook(PAYLOAD, { headers, key: KEY })).toThrow(WebhookVerificationError);
    });

    it.each([-10, 10])("rejects a timestamp %d minutes outside the tolerance window", (minutes) => {
        const at = new Date(Date.now() + minutes * 60_000);

        expect(() => unwrapWebhook(PAYLOAD, { headers: signedHeaders({ at }), key: KEY })).toThrow(
            WebhookVerificationError,
        );
    });

    it.each(["webhook-id", "webhook-timestamp", "webhook-signature"])("rejects a missing %s header", (dropped) => {
        const headers = { ...signedHeaders() };
        delete headers[dropped];

        expect(() => unwrapWebhook(PAYLOAD, { headers, key: KEY })).toThrow(WebhookVerificationError);
    });

    it.each([
        "not-a-signature",
        "v1,",
        "v1,!!!!",
        "v2,abc",
        "",
        "v1,a,b",
        `v1,${"A".repeat(44)}`,
    ])("rejects the malformed signature header %j", (signature) => {
        const headers = { ...signedHeaders(), "webhook-signature": signature };

        expect(() => unwrapWebhook(PAYLOAD, { headers, key: KEY })).toThrow(WebhookVerificationError);
    });

    it.each(["not-a-timestamp", "", "1e999"])("rejects the unparsable timestamp %j", (timestamp) => {
        const headers = { ...signedHeaders(), "webhook-timestamp": timestamp };

        expect(() => unwrapWebhook(PAYLOAD, { headers, key: KEY })).toThrow(WebhookVerificationError);
    });

    it.each([undefined, ""])("raises a clear error when the key is %j", (key) => {
        expect(() => unwrapWebhook(PAYLOAD, { headers: signedHeaders(), key })).toThrow(/without a key/);
    });

    it("raises before verifying when the key is missing", () => {
        expect(() => unwrapWebhook(PAYLOAD, { headers: {}, key: undefined })).toThrow(/without a key/);
    });
});

describe("packaging", () => {
    // src/helpers is kept by .fernignore, but package.json is generated: the dependency and
    // the ./helpers subpath export are re-emitted from extraDependencies and packageJson in
    // the typescript config in whop-monorepo sdks/fern/generators.yml. Without them the
    // helper is either unreachable from the published package or fails to resolve its
    // import at runtime.
    const packageJson = JSON.parse(readFileSync(new URL("../../../package.json", import.meta.url), "utf8"));

    it("declares standardwebhooks as a dependency", () => {
        expect(packageJson.dependencies?.standardwebhooks).toBeTruthy();
    });

    it("exports ./helpers from the published package", () => {
        expect(packageJson.exports?.["./helpers"]).toEqual({
            import: {
                types: "./dist/esm/helpers/index.d.mts",
                default: "./dist/esm/helpers/index.mjs",
            },
            require: {
                types: "./dist/cjs/helpers/index.d.ts",
                default: "./dist/cjs/helpers/index.js",
            },
            default: "./dist/cjs/helpers/index.js",
        });
    });
});
