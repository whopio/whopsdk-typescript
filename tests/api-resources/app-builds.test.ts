// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appBuilds', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appBuilds.create({
      attachment: { id: 'id' },
      checksum: 'checksum',
      platform: 'ios',
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
    const response = await client.appBuilds.create({
      attachment: { id: 'id' },
      checksum: 'checksum',
      platform: 'ios',
      ai_prompt_id: 'prmt_xxxxxxxxxxxxx',
      app_id: 'app_xxxxxxxxxxxxxx',
      supported_app_view_types: ['hub'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appBuilds.retrieve('apbu_xxxxxxxxxxxxx');
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
    const responsePromise = client.appBuilds.list({ app_id: 'app_xxxxxxxxxxxxxx' });
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
    const response = await client.appBuilds.list({
      app_id: 'app_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      created_after: '2023-12-01T05:00:00.401Z',
      created_before: '2023-12-01T05:00:00.401Z',
      first: 42,
      last: 42,
      platform: 'ios',
      status: 'draft',
    });
  });

  // Mock server tests are disabled
  test.skip('promote', async () => {
    const responsePromise = client.appBuilds.promote('apbu_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
