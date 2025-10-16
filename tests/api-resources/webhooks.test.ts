// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Webhook } from 'standardwebhooks';

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test.skip('unwrap', async () => {
    const key = 'whsec_c2VjcmV0Cg==';
    const payload =
      '{"id":"msg_xxxxxxxxxxxxxxxxxxxxxxxx","api_version":"v1","data":{"id":"inv_xxxxxxxxxxxxxx","created_at":"2023-12-01T05:00:00.401Z","current_plan":{"id":"plan_xxxxxxxxxxxxx","currency":"usd","formatted_price":"formatted_price"},"due_date":"2023-12-01T05:00:00.401Z","email_address":"email_address","fetch_invoice_token":"fetch_invoice_token","number":"number","status":"open","user":{"id":"user_xxxxxxxxxxxxx","name":"name","username":"username"}},"timestamp":"2025-01-01T00:00:00.000Z","type":"invoice.created"}';
    const msgID = '1';
    const timestamp = new Date();
    const wh = new Webhook(key);
    const signature = wh.sign(msgID, timestamp, payload);
    const headers: Record<string, string> = {
      'webhook-signature': signature,
      'webhook-id': msgID,
      'webhook-timestamp': String(Math.floor(timestamp.getTime() / 1000)),
    };
    client.webhooks.unwrap(payload, { headers, key });
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.webhooks.unwrap(payload, { headers, key: wrongKey });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-signature': badSig }, key });
    }).toThrow('No matching signature found');
    expect(() => {
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-timestamp': '5' }, key });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-id': 'wrong' }, key });
    }).toThrow('No matching signature found');
  });
});
