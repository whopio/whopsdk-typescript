// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adGroups', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.adGroups.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adGroups.list(
        {
          account_id: 'account_id',
          ad_campaign_id: 'ad_campaign_id',
          after: 'after',
          before: 'before',
          created_after: 'created_after',
          created_before: 'created_before',
          direction: 'asc',
          first: 100,
          last: 100,
          order: 'created_at',
          query: 'query',
          stats_from: 'stats_from',
          stats_to: 'stats_to',
          status: 'active',
          time_zone: 'time_zone',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.adGroups.create({ ad_campaign_id: 'ad_campaign_id' });
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
    const response = await client.adGroups.create({
      ad_campaign_id: 'ad_campaign_id',
      audiences: { exclude: ['string'], include: ['string'] },
      bid_type: 'minimum_cost',
      budget_amount: 0,
      budget_type: 'daily',
      conversion_event: 'purchase',
      conversion_location: 'website',
      demographics: {
        automatic: true,
        gender: 'all',
        maximum_age: 0,
        minimum_age: 0,
      },
      desired_cost_per_result: 0,
      detailed_targeting: {
        behaviors: [{ id: 'id', name: 'name' }],
        demographics: [
          {
            id: 'id',
            type: 'life_events',
            name: 'name',
          },
        ],
        interests: [{ id: 'id', name: 'name' }],
      },
      devices: {
        operating_systems: [{ os: 'ios', minimum_version: 'minimum_version' }],
        platforms: ['mobile'],
      },
      dynamic_creative: true,
      ends_at: 'ends_at',
      frequency_cap: { maximum_impressions: 0, per_days: 0 },
      languages: ['string'],
      message_apps: ['messenger'],
      minimum_daily_spend: 0,
      optimization_goal: 'conversions',
      placements: 'automatic',
      regions: {
        exclude: {
          cities: [{ key: 'key', name: 'name' }],
          countries: ['string'],
          country_groups: ['string'],
          custom_locations: [
            {
              latitude: 0,
              longitude: 0,
              radius: 0,
              distance_unit: 'mile',
              name: 'name',
            },
          ],
          regions: ['string'],
          zips: ['string'],
        },
        include: {
          cities: [{ key: 'key', name: 'name' }],
          countries: ['string'],
          country_groups: ['string'],
          custom_locations: [
            {
              latitude: 0,
              longitude: 0,
              radius: 0,
              distance_unit: 'mile',
              name: 'name',
            },
          ],
          regions: ['string'],
          zips: ['string'],
        },
      },
      starts_at: 'starts_at',
      status: 'active',
      title: 'title',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.adGroups.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adGroups.retrieve(
        'id',
        {
          stats_from: 'stats_from',
          stats_to: 'stats_to',
          time_zone: 'time_zone',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.adGroups.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.adGroups.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pause', async () => {
    const responsePromise = client.adGroups.pause('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pause: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adGroups.pause(
        'id',
        { 'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('unpause', async () => {
    const responsePromise = client.adGroups.unpause('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unpause: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adGroups.unpause(
        'id',
        { 'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('searchTargetingOptions: only required params', async () => {
    const responsePromise = client.adGroups.searchTargetingOptions({ platform: 'meta' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchTargetingOptions: required and optional params', async () => {
    const response = await client.adGroups.searchTargetingOptions({
      platform: 'meta',
      account_id: 'account_id',
      country: 'country',
      limit: 500,
      location_types: ['country'],
      query: 'query',
      types: ['interests'],
    });
  });

  // Mock server tests are disabled
  test.skip('estimateReach: only required params', async () => {
    const responsePromise = client.adGroups.estimateReach({ platform: 'meta' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('estimateReach: required and optional params', async () => {
    const response = await client.adGroups.estimateReach({
      platform: 'meta',
      account_id: 'account_id',
      audiences: { exclude: ['string'], include: ['string'] },
      demographics: {
        automatic: true,
        gender: 'all',
        maximum_age: 0,
        minimum_age: 0,
      },
      detailed_targeting: {
        behaviors: [{ id: 'id', name: 'name' }],
        demographics: [
          {
            id: 'id',
            type: 'life_events',
            name: 'name',
          },
        ],
        interests: [{ id: 'id', name: 'name' }],
      },
      devices: {
        operating_systems: [{ os: 'ios', minimum_version: 'minimum_version' }],
        platforms: ['mobile'],
      },
      languages: ['string'],
      regions: {
        exclude: {
          cities: [{ key: 'key', name: 'name' }],
          countries: ['string'],
          country_groups: ['string'],
          custom_locations: [
            {
              latitude: 0,
              longitude: 0,
              radius: 0,
              distance_unit: 'mile',
              name: 'name',
            },
          ],
          regions: ['string'],
          zips: ['string'],
        },
        include: {
          cities: [{ key: 'key', name: 'name' }],
          countries: ['string'],
          country_groups: ['string'],
          custom_locations: [
            {
              latitude: 0,
              longitude: 0,
              radius: 0,
              distance_unit: 'mile',
              name: 'name',
            },
          ],
          regions: ['string'],
          zips: ['string'],
        },
      },
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });
});
