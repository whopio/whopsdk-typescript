// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource financialActivity', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.financialActivity.list();
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
      client.financialActivity.list(
        {
          account_id: 'account_id',
          available_after: '2019-12-27',
          available_before: '2019-12-27',
          currency: 'currency',
          cursor: 'cursor',
          include_owned_accounts: true,
          limit: 100,
          line_types: ['string'],
          posted_after: '2019-12-27T18:11:19.117Z',
          posted_before: '2019-12-27T18:11:19.117Z',
          user_id: 'user_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
