// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transfers', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.transfers.create({ amount: 25, origin_id: 'biz_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.transfers.create({
      amount: 25,
      origin_id: 'biz_xxxxxxxxxxxxxx',
      currency: 'usd',
      destination_id: 'user_xxxxxxxxxxxxxx',
      expires_at: '2026-01-01T12:00:00.000Z',
      feed_id: 'feed_shineclub',
      feed_type: 'chat_feed',
      idempotence_key: 'shine-supplies-restock-118',
      metadata: { order_id: 'bar' },
      notes: 'Refund for the rescheduled interior detail',
      redeemable_count: 3,
      type: 'wallet_send',
      'Api-Version-Date': '2026-09-02-2',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transfers.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transfers.retrieve(
        'id',
        { 'Api-Version-Date': '2026-09-02-2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.transfers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transfers.list(
        {
          after: 'after',
          before: 'before',
          created_after: 'created_after',
          created_before: 'created_before',
          destination_id: 'destination_id',
          direction: 'asc',
          first: 50,
          last: 50,
          order: 'created_at',
          origin_id: 'origin_id',
          'Api-Version-Date': '2026-09-02-2',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
