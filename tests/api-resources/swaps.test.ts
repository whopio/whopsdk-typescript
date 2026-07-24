// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource swaps', () => {
  // Mock server tests are disabled
  test.skip('createQuote: only required params', async () => {
    const responsePromise = client.swaps.createQuote({
      amount: 'amount',
      from_token: 'from_token',
      to_token: 'to_token',
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
  test.skip('createQuote: required and optional params', async () => {
    const response = await client.swaps.createQuote({
      amount: 'amount',
      from_token: 'from_token',
      to_token: 'to_token',
      from_address: 'from_address',
      from_chain: 'string',
      metadata: { foo: 'bar' },
      slippage_bps: 0,
      to_address: 'to_address',
      to_chain: 'string',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.swaps.create({
      account_id: 'account_id',
      from_token: 'from_token',
      to_token: 'to_token',
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
    const response = await client.swaps.create({
      account_id: 'account_id',
      from_token: 'from_token',
      to_token: 'to_token',
      amount: 'amount',
      from_chain: 'string',
      slippage_bps: 0,
      to_chain: 'string',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.swaps.list({ account_id: 'account_id' });
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
    const response = await client.swaps.list({ account_id: 'account_id' });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.swaps.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
