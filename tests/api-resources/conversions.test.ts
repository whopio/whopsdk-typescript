// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversions.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      event_name: 'lead',
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
    const response = await client.conversions.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      event_name: 'lead',
      action_source: 'email',
      context: {
        ad_campaign_id: 'ad_campaign_id',
        ad_id: 'ad_id',
        ad_set_id: 'ad_set_id',
        fbclid: 'fbclid',
        fbp: 'fbp',
        ga: 'ga',
        gclid: 'gclid',
        ig_sid: 'ig_sid',
        ip_address: 'ip_address',
        ttclid: 'ttclid',
        ttp: 'ttp',
        user_agent: 'user_agent',
        utm_campaign: 'utm_campaign',
        utm_content: 'utm_content',
        utm_id: 'utm_id',
        utm_medium: 'utm_medium',
        utm_source: 'utm_source',
        utm_term: 'utm_term',
      },
      currency: 'usd',
      custom_name: 'custom_name',
      event_id: 'evnt_xxxxxxxxxxxxx',
      event_time: '2023-12-01T05:00:00.401Z',
      plan_id: 'plan_xxxxxxxxxxxxx',
      product_id: 'prod_xxxxxxxxxxxxx',
      referrer_url: 'referrer_url',
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
    });
  });
});
