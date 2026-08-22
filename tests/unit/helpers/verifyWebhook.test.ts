import { readFileSync } from "node:fs";
import { Webhook, WebhookVerificationError } from "standardwebhooks";
import { unwrapWebhook } from "../../../src/helpers/index.js";

const KEY = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";
const OTHER_KEY = "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD";
const PAYLOAD = '{"id":"evt_123","event":"payment.succeeded","data":{"id":"pay_123"}}';

function signedHeaders({
    payload = PAYLOAD,
    key = KEY,
    id = "msg_2Xa9",
    at = new Date(),
}: {
    payload?: string;
    key?: string;
    id?: string;
    at?: Date;
} = {}): Record<string, string> {
    return {
        "webhook-id": id,
        "webhook-timestamp": String(Math.floor(at.getTime() / 1000)),
        "webhook-signature": new Webhook(key).sign(id, at, payload),
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

    it("accepts a key without the whsec_ prefix", () => {
        const bare = KEY.slice("whsec_".length);

        expect(unwrapWebhook<{ id: string }>(PAYLOAD, { headers: signedHeaders({ key: bare }), key: bare }).id).toBe(
            "evt_123",
        );
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
