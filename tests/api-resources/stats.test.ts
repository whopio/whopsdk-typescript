// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stats', () => {
  // Mock server tests are disabled
  test.skip('describe', async () => {
    const responsePromise = client.stats.describe();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('describe: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stats.describe(
        {
          company_id: 'biz_xxxxxxxxxxxxxx',
          resource: 'resource',
          user_id: 'user_xxxxxxxxxxxxx',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('queryMetric: only required params', async () => {
    const responsePromise = client.stats.queryMetric({ resource: 'resource' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('queryMetric: required and optional params', async () => {
    const response = await client.stats.queryMetric({
      resource: 'resource',
      breakdowns: ['string'],
      company_id: 'biz_xxxxxxxxxxxxxx',
      filters: { foo: 'bar' },
      from: '2023-12-01T05:00:00.401Z',
      granularity: 'granularity',
      time_zone: 'time_zone',
      to: '2023-12-01T05:00:00.401Z',
      user_id: 'user_xxxxxxxxxxxxx',
    });
  });

  // Mock server tests are disabled
  test.skip('queryRaw: only required params', async () => {
    const responsePromise = client.stats.queryRaw({ resource: 'resource' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('queryRaw: required and optional params', async () => {
    const response = await client.stats.queryRaw({
      resource: 'resource',
      company_id: 'biz_xxxxxxxxxxxxxx',
      cursor: 'cursor',
      from: '2023-12-01T05:00:00.401Z',
      limit: 42,
      sort: 'sort',
      sort_direction: 'asc',
      to: '2023-12-01T05:00:00.401Z',
      user_id: 'user_xxxxxxxxxxxxx',
    });
  });

  // Mock server tests are disabled
  test.skip('runSql: only required params', async () => {
    const responsePromise = client.stats.runSql({ resource: 'resource', sql: 'sql' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('runSql: required and optional params', async () => {
    const response = await client.stats.runSql({
      resource: 'resource',
      sql: 'sql',
      company_id: 'biz_xxxxxxxxxxxxxx',
      cursor: 'cursor',
      from: '2023-12-01T05:00:00.401Z',
      limit: 42,
      sort: 'sort',
      sort_direction: 'asc',
      to: '2023-12-01T05:00:00.401Z',
      user_id: 'user_xxxxxxxxxxxxx',
    });
  });
});
