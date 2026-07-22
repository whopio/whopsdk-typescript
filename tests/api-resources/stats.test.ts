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
    const responsePromise = client.stats.retrieve('metric', { from: 'from', to: 'to' });
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
      from: 'from',
      to: 'to',
      access_level: 'access_level',
      account_id: 'account_id',
      ad_campaign_ids: ['string'],
      ad_group_ids: ['string'],
      ad_ids: ['string'],
      breakdown_by: 'breakdown_by',
      card_network: 'card_network',
      category: 'category',
      convert_to: 'convert_to',
      country_code: 'country_code',
      currency: 'currency',
      custom_name: 'custom_name',
      device_type: 'device_type',
      dispute_reason: 'dispute_reason',
      event_name: 'event_name',
      event_type: 'page_view',
      fee_type: 'fee_type',
      hostname: 'hostname',
      interval: 'minute',
      merchant: 'merchant',
      most_recent_action: 'most_recent_action',
      page: 'page',
      payment_method: 'payment_method',
      product: 'product',
      referred_user_id: 'referred_user_id',
      segment: 'segment',
      snapshot_window: '7d',
      source: 'source',
      status: 'status',
      time_zone: 'time_zone',
    });
  });
});
