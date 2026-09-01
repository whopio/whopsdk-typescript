// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource promoCodes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.promoCodes.create({
      account_id: 'biz_xxxxxxxxxxxxxx',
      amount_off: 25,
      base_currency: 'usd',
      code: 'AFFILIATE25',
      new_users_only: true,
      promo_duration_months: 3,
      promo_type: 'percentage',
    });
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
    const response = await client.promoCodes.create({
      account_id: 'biz_xxxxxxxxxxxxxx',
      amount_off: 25,
      base_currency: 'usd',
      code: 'AFFILIATE25',
      new_users_only: true,
      promo_duration_months: 3,
      promo_type: 'percentage',
      churned_users_only: false,
      existing_memberships_only: false,
      expires_at: '2026-01-01T12:00:00.000Z',
      one_per_customer: true,
      plan_ids: ['plan_xxxxxxxxxxxxxx'],
      product_id: 'prod_xxxxxxxxxxxxxx',
      stock: 200,
      unlimited_stock: false,
      'Api-Version-Date': '2026-08-31',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.promoCodes.retrieve('id');
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
      client.promoCodes.retrieve(
        'id',
        { 'Api-Version-Date': '2026-08-31' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.promoCodes.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.promoCodes.list({
      account_id: 'account_id',
      after: 'after',
      before: 'before',
      created_after: '2019-12-27T18:11:19.117Z',
      created_before: '2019-12-27T18:11:19.117Z',
      direction: 'asc',
      first: 100,
      last: 100,
      order: 'created_at',
      plan_ids: ['plan_xxxxxxxxxxxxxx'],
      product_ids: ['prod_xxxxxxxxxxxxxx'],
      status: 'active',
      'Api-Version-Date': '2026-08-31',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.promoCodes.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.promoCodes.delete(
        'id',
        { 'Api-Version-Date': '2026-08-31' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
