// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessTokens', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accessTokens.create({
      scoped_actions: ['string'],
      target_resource_id: 'target_resource_id',
      target_resource_type: 'company',
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
    const response = await client.accessTokens.create({
      scoped_actions: ['string'],
      target_resource_id: 'target_resource_id',
      target_resource_type: 'company',
      expires_at: '2023-12-01T05:00:00.401Z',
    });
  });
});
