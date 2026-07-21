// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.list();
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
      client.events.list(
        {
          account_id: 'account_id',
          after: 'after',
          before: 'before',
          first: 0,
          from: '2019-12-27T18:11:19.117Z',
          identifier: 'identifier',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.events.create({
      account_id: 'account_id',
      event_name: 'course_completed',
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
    const response = await client.events.create({
      account_id: 'account_id',
      event_name: 'course_completed',
      action_source: 'email',
      context: {
        ad_campaign_id: 'ad_campaign_id',
        ad_id: 'ad_id',
        ad_set_id: 'ad_set_id',
        fbc: 'fbc',
        fbclid: 'fbclid',
        fbp: 'fbp',
        fingerprint: 'fingerprint',
        fingerprint_confidence: 6.9,
        ga: 'ga',
        gbraid: 'gbraid',
        gclid: 'gclid',
        ig_sid: 'ig_sid',
        ip_address: 'ip_address',
        language: 'language',
        li_fat_id: 'li_fat_id',
        msclkid: 'msclkid',
        rdt_cid: 'rdt_cid',
        sccid: 'sccid',
        screen_resolution: 'screen_resolution',
        timezone: 'timezone',
        ttclid: 'ttclid',
        ttp: 'ttp',
        twclid: 'twclid',
        user_agent: 'user_agent',
        utm_campaign: 'utm_campaign',
        utm_content: 'utm_content',
        utm_id: 'utm_id',
        utm_medium: 'utm_medium',
        utm_source: 'utm_source',
        utm_term: 'utm_term',
        wbraid: 'wbraid',
      },
      currency: 'usd',
      custom_name: 'custom_name',
      duration: 42,
      event_id: 'evnt_xxxxxxxxxxxxx',
      event_time: '2023-12-01T05:00:00.401Z',
      plan_id: 'plan_xxxxxxxxxxxxx',
      product_id: 'prod_xxxxxxxxxxxxx',
      referrer_url: 'referrer_url',
      resumed: true,
      source: 'source',
      title: 'title',
      url: 'url',
      user: {
        anonymous_id: 'anonymous_id',
        birthdate: '1990-01-15',
        city: 'city',
        country: 'country',
        email: 'email',
        external_id: 'external_id',
        first_name: 'first_name',
        gender: 'male',
        last_name: 'last_name',
        linked_anonymous_id: 'linked_anonymous_id',
        linked_wuid: 'linked_wuid',
        member_id: 'mber_xxxxxxxxxxxxx',
        membership_id: 'mem_xxxxxxxxxxxxxx',
        name: 'name',
        phone: 'phone',
        postal_code: 'postal_code',
        state: 'state',
        user_id: 'user_xxxxxxxxxxxxx',
        username: 'username',
      },
      value: 6.9,
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });
});
