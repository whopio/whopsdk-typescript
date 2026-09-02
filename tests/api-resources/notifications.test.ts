// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notifications', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.notifications.create({
      content: 'Drop off at 4180 Burnet Rd. Plan on two days for the full coating.',
      title: 'Your ceramic coating is booked',
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
    const response = await client.notifications.create({
      content: 'Drop off at 4180 Burnet Rd. Plan on two days for the full coating.',
      title: 'Your ceramic coating is booked',
      account_id: 'biz_xxxxxxxxxxxxxx',
      experience_id: 'exp_xxxxxxxxxxxxxx',
      icon_user_id: 'user_xxxxxxxxxxxxxx',
      rest_path: '/bookings/upcoming',
      subtitle: 'Tuesday 9:00 AM, Bay 2',
      user_ids: ['user_xxxxxxxxxxxxxx'],
      'Api-Version-Date': '2026-09-02',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });
});
