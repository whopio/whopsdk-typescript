// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stats', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.stats.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.stats.retrieve('metric', { from: '2019-12-27', to: '2019-12-27' });
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
    const response = await client.stats.retrieve('metric', {
      from: '2019-12-27',
      to: '2019-12-27',
      access_level: 'access_level',
      account_id: 'account_id',
      ad_campaign_ids: ['string'],
      ad_group_ids: ['string'],
      ad_ids: ['string'],
      breakdown_by: 'breakdown_by',
      card_network: 'card_network',
      category: 'category',
      convert_to: 'convert_to',
      currency: 'currency',
      fee_type: 'fee_type',
      interval: 'hour',
      most_recent_action: 'most_recent_action',
      payment_method: 'payment_method',
      product: 'product',
      referred_user_id: 'referred_user_id',
      segment: 'segment',
      snapshot_window: '30d',
      source: 'source',
      status: 'status',
      time_zone: 'time_zone',
    });
  });
});
