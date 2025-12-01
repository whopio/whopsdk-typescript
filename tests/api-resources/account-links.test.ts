// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountLinks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accountLinks.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      refresh_url: 'refresh_url',
      return_url: 'return_url',
      use_case: 'account_onboarding',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.accountLinks.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      refresh_url: 'refresh_url',
      return_url: 'return_url',
      use_case: 'account_onboarding',
    });
  });
});
