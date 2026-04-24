// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource overrides', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.affiliates.overrides.create('aff_xxxxxxxxxxxxxx', {
    id: 'id',
    commission_value: 6.9,
    override_type: 'standard',
    plan_id: 'plan_xxxxxxxxxxxxx',
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
    const response = await client.affiliates.overrides.create('aff_xxxxxxxxxxxxxx', {
    id: 'id',
    commission_value: 6.9,
    override_type: 'standard',
    plan_id: 'plan_xxxxxxxxxxxxx',
    applies_to_payments: 'first_payment',
    commission_type: 'percentage',
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.affiliates.overrides.retrieve('override_id', { id: 'aff_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.affiliates.overrides.retrieve('override_id', { id: 'aff_xxxxxxxxxxxxxx' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.affiliates.overrides.update('override_id', { id: 'aff_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.affiliates.overrides.update('override_id', {
    id: 'aff_xxxxxxxxxxxxxx',
    applies_to_payments: 'first_payment',
    commission_type: 'percentage',
    commission_value: 6.9,
    revenue_basis: 'pre_fees',
  });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.affiliates.overrides.list('aff_xxxxxxxxxxxxxx');
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
    await expect(client.affiliates.overrides.list('aff_xxxxxxxxxxxxxx', {
    after: 'after',
    before: 'before',
    first: 42,
    last: 42,
    override_type: 'standard',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.affiliates.overrides.delete('override_id', { id: 'aff_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.affiliates.overrides.delete('override_id', { id: 'aff_xxxxxxxxxxxxxx' });
  });
});
