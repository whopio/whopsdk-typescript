// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companyTokenTransactions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.companyTokenTransactions.create({
      amount: 6.9,
      company_id: 'biz_xxxxxxxxxxxxxx',
      destination_user_id: 'destination_user_id',
      transaction_type: 'transfer',
      user_id: 'user_xxxxxxxxxxxxx',
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
    const response = await client.companyTokenTransactions.create({
      amount: 6.9,
      company_id: 'biz_xxxxxxxxxxxxxx',
      destination_user_id: 'destination_user_id',
      transaction_type: 'transfer',
      user_id: 'user_xxxxxxxxxxxxx',
      description: 'description',
      idempotency_key: 'idempotency_key',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.companyTokenTransactions.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.companyTokenTransactions.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
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
    const response = await client.companyTokenTransactions.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      first: 42,
      last: 42,
      transaction_type: 'add',
      user_id: 'user_xxxxxxxxxxxxx',
    });
  });
});
