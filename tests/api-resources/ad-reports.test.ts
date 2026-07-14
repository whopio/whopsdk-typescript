// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adReports', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.adReports.retrieve({
      from: '2023-12-01T05:00:00.401Z',
      to: '2023-12-01T05:00:00.401Z',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.adReports.retrieve({
      from: '2023-12-01T05:00:00.401Z',
      to: '2023-12-01T05:00:00.401Z',
      ad_campaign_ids: ['string'],
      ad_group_ids: ['string'],
      ad_ids: ['string'],
      breakdown: 'campaign',
      company_id: 'biz_xxxxxxxxxxxxxx',
      currency: 'currency',
      granularity: 'hourly',
    });
  });
});
