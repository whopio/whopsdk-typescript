// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutConfigurations', () => {
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
    });
  });

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
          affiliate_code: 'affiliate_code',
          currency: 'currency',
          metadata: {},
          mode: 'payment',
          payment_method_configuration: {
            disabled: ['string'],
            enabled: ['string'],
            include_platform_defaults: true,
          },
          plan: {
            account_id: 'account_id',
            billing_period: 0,
            currency: 'currency',
            description: 'description',
            expiration_days: 0,
            force_create_new_plan: true,
            initial_price: 0,
            metadata: {},
            override_tax_type: 'override_tax_type',
            payment_method_configuration: {
              disabled: ['string'],
              enabled: ['string'],
              include_platform_defaults: true,
            },
            plan_type: 'plan_type',
            product_id: 'product_id',
            release_method: 'release_method',
            renewal_price: 0,
            stock: 0,
            title: 'title',
            trial_period_days: 0,
            unlimited_stock: true,
            visibility: 'visibility',
          },
          plan_id: 'plan_xxxxxxxxxxxxx',
          redirect_url: 'redirect_url',
          three_ds_level: 'three_ds_level',
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
  test.skip('delete', async () => {
    const responsePromise = client.checkoutConfigurations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
