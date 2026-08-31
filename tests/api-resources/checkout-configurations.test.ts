// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutConfigurations', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.checkoutConfigurations.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.checkoutConfigurations.create(
        {
          account_id: 'biz_xxxxxxxxxxxxxx',
          affiliate_code: 'tanyacole',
          currency: 'usd',
          metadata: { booking_source: 'front_desk' },
          mode: 'payment',
          payment_method_configuration: {
            disabled: ['paypal'],
            enabled: ['card'],
            include_platform_defaults: true,
          },
          plan: {
            account_id: 'biz_xxxxxxxxxxxxxx',
            billing_period: 30,
            currency: 'usd',
            description: 'Two hand washes a month, interior vacuum, and a quarterly sealant top-up.',
            expiration_days: 365,
            force_create_new_plan: true,
            initial_price: 249,
            metadata: { bay: '2' },
            override_tax_type: 'inclusive',
            payment_method_configuration: {
              disabled: ['paypal'],
              enabled: ['card'],
              include_platform_defaults: true,
            },
            plan_type: 'one_time',
            product_id: 'prod_xxxxxxxxxxxxxx',
            release_method: 'buy_now',
            renewal_price: 59,
            stock: 25,
            three_ds_level: 'frictionless',
            title: 'Ceramic Coating — Full Vehicle',
            trial_period_days: 7,
            unlimited_stock: false,
            visibility: 'visible',
          },
          plan_id: 'plan_xxxxxxxxxxxxx',
          redirect_url: 'https://shinetime.example/thanks',
          three_ds_level: 'frictionless',
          'Api-Version-Date': '2026-08-25-2',
          'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.checkoutConfigurations.retrieve('id');
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
      client.checkoutConfigurations.retrieve(
        'id',
        { 'Api-Version-Date': '2026-08-25-2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.checkoutConfigurations.list({ account_id: 'account_id' });
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
    const response = await client.checkoutConfigurations.list({
      account_id: 'account_id',
      after: 'after',
      created_after: 'created_after',
      created_before: 'created_before',
      direction: 'asc',
      first: 0,
      order: 'created_at',
      plan_id: 'plan_id',
      'Api-Version-Date': '2026-08-25-2',
    });
  });
});
