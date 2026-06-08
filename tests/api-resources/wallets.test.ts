// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wallets', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.wallets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('balance: only required params', async () => {
    const responsePromise = client.wallets.balance({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('balance: required and optional params', async () => {
    const response = await client.wallets.balance({ account_id: 'account_id' });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.wallets.send({
      account_id: 'account_id',
      amount: 'amount',
      to: 'to',
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
  test.skip('send: required and optional params', async () => {
    const response = await client.wallets.send({
      account_id: 'account_id',
      amount: 'amount',
      to: 'to',
    });
  });

  // Mock server tests are disabled
  test.skip('createWithdrawal: only required params', async () => {
    const responsePromise = client.wallets.createWithdrawal({
      account_id: 'account_id',
      amount: 'amount',
      payout_method_id: 'payout_method_id',
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
  test.skip('createWithdrawal: required and optional params', async () => {
    const response = await client.wallets.createWithdrawal({
      account_id: 'account_id',
      amount: 'amount',
      payout_method_id: 'payout_method_id',
      asset: 'asset',
    });
  });
});
