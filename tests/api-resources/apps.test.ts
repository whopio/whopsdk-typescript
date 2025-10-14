// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whopsdk from 'whopsdk';

const client = new Whopsdk({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.apps.create({ company_id: 'biz_xxxxxxxxxxxxxx', name: 'name' });
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
    const response = await client.apps.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      name: 'name',
      base_url: 'base_url',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.apps.retrieve('app_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.apps.update('app_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.update(
        'app_xxxxxxxxxxxxxx',
        {
          app_store_description: 'app_store_description',
          base_url: 'https://example.com/path',
          dashboard_path: 'dashboard_path',
          description: 'description',
          discover_path: 'discover_path',
          experience_path: 'experience_path',
          icon: { id: 'id', direct_upload_id: 'direct_upload_id' },
          name: 'name',
          required_scopes: ['read_user'],
          status: 'live',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whopsdk.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.apps.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.list(
        {
          after: 'after',
          before: 'before',
          company_id: 'biz_xxxxxxxxxxxxxx',
          direction: 'asc',
          first: 42,
          last: 42,
          order: 'discoverable_at',
          query: 'query',
          verified_apps_only: true,
          view_type: 'hub',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whopsdk.NotFoundError);
  });
});
