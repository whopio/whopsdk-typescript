// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bounties', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.bounties.list();
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
      client.bounties.list(
        {
          account_id: 'account_id',
          after: 'after',
          before: 'before',
          created_after: 'created_after',
          created_before: 'created_before',
          direction: 'asc',
          first: 100,
          last: 100,
          order: 'created_at',
          query: 'query',
          status: 'scheduled',
          user_id: 'user_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.bounties.create({
      description: 'description',
      gross_reward_amount: 0,
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
    const response = await client.bounties.create({
      description: 'description',
      gross_reward_amount: 0,
      title: 'title',
      accepted_submissions_limit: 0,
      account_id: 'account_id',
      allowed_country_codes: ['string'],
      business_goal_type: 'clipping',
      capture_spec: {
        bitrate_target_mbps: 0,
        embed_camera_metadata: true,
        min_clip_duration_seconds: 0,
        stabilization_mode: 'off',
      },
      experience_id: 'experience_id',
      frequency: 'weekly',
      publish_at: 'publish_at',
      publish_at_timezone: 'publish_at_timezone',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.bounties.retrieve('id');
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
    const responsePromise = client.bounties.update('id');
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
      client.bounties.update(
        'id',
        {
          accepted_submissions_limit: 0,
          allowed_country_codes: ['string'],
          business_goal_type: 'clipping',
          description: 'description',
          frequency: 'once',
          gross_reward_amount: 0,
          publish_at: 'publish_at',
          publish_at_timezone: 'publish_at_timezone',
          title: 'title',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
