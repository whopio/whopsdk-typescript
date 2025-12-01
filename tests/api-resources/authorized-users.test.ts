// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authorizedUsers', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.authorizedUsers.retrieve('ausr_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.authorizedUsers.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.authorizedUsers.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      created_after: '2023-12-01T05:00:00.401Z',
      created_before: '2023-12-01T05:00:00.401Z',
      first: 42,
      last: 42,
      role: 'owner',
      user_id: 'user_xxxxxxxxxxxxx',
    });
  });
});
