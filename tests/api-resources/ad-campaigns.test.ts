// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adCampaigns', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.adCampaigns.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      config: {},
      platform: 'meta',
      title: 'title',
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
    const response = await client.adCampaigns.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      config: {
        bid_amount: 42,
        bid_strategy: 'lowest_cost',
        budget_optimization: true,
        end_time: 'end_time',
        lifetime_budget: 42,
        objective: 'awareness',
        special_categories: ['string'],
        start_time: 'start_time',
        status: 'active',
      },
      platform: 'meta',
      title: 'title',
      ad_creative_set_ids: ['string'],
      budget: 6.9,
      budget_type: 'daily',
      daily_budget: 6.9,
      product_id: 'prod_xxxxxxxxxxxxx',
      target_country_codes: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.adCampaigns.retrieve('adcamp_xxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.adCampaigns.update('adcamp_xxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adCampaigns.update(
        'adcamp_xxxxxxxxxxx',
        {
          ad_creative_set_ids: ['string'],
          budget: 6.9,
          budget_type: 'daily',
          config: {
            bid_amount: 42,
            bid_strategy: 'lowest_cost',
            budget_optimization: true,
            end_time: 'end_time',
            lifetime_budget: 42,
            objective: 'awareness',
            special_categories: ['string'],
            start_time: 'start_time',
            status: 'active',
          },
          daily_budget: 6.9,
          product_id: 'prod_xxxxxxxxxxxxx',
          target_country_codes: ['string'],
          title: 'title',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.adCampaigns.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
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
    const response = await client.adCampaigns.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      created_after: '2023-12-01T05:00:00.401Z',
      created_before: '2023-12-01T05:00:00.401Z',
      first: 42,
      last: 42,
      query: 'query',
      status: 'active',
    });
  });

  // Mock server tests are disabled
  test.skip('pause', async () => {
    const responsePromise = client.adCampaigns.pause('adcamp_xxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unpause', async () => {
    const responsePromise = client.adCampaigns.unpause('adcamp_xxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
