// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bounties', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.bounties.create({
      description:
        'Record one continuous pass of a full interior detail, dash to trunk, on a customer vehicle.',
      gross_reward_amount: 40,
      title: 'Record interior detailing passes',
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
      description:
        'Record one continuous pass of a full interior detail, dash to trunk, on a customer vehicle.',
      gross_reward_amount: 40,
      title: 'Record interior detailing passes',
      accepted_submissions_limit: 3,
      accepted_submissions_per_user_limit: 2,
      account_id: 'biz_xxxxxxxxxxxxxx',
      allowed_country_codes: ['US'],
      business_goal_type: 'clipping',
      capture_spec: {
        bitrate_target_mbps: 12,
        embed_camera_metadata: true,
        frame_gap_tolerance_ms: 2000,
        min_clip_duration_seconds: 120,
        min_total_verified_duration_seconds: 14400,
        stabilization_mode: 'off',
      },
      experience_id: 'exp_xxxxxxxxxxxxxx',
      frequency: 'weekly',
      publish_at: '2026-01-01T12:00:00.000Z',
      publish_at_timezone: 'America/Chicago',
      'Api-Version-Date': '2026-09-02-2',
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
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bounties.retrieve(
        'id',
        { 'Api-Version-Date': '2026-09-02-2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

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
          business_goal_type: 'clipping',
          country: 'country',
          created_after: 'created_after',
          created_before: 'created_before',
          direction: 'asc',
          experience_id: 'experience_id',
          first: 100,
          last: 100,
          order: 'created_at',
          query: 'query',
          status: 'scheduled',
          user_id: 'user_id',
          'Api-Version-Date': '2026-09-02-2',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
