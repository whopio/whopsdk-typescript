// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whopsdk from 'whopsdk';

const client = new Whopsdk({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutConfigurations', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.checkoutConfigurations.create(
        {
          affiliate_code: 'affiliate_code',
          metadata: { foo: 'bar' },
          plan: {
            company_id: 'biz_xxxxxxxxxxxxxx',
            billing_period: 42,
            currency: 'usd',
            custom_fields: [
              {
                field_type: 'text',
                name: 'name',
                id: 'id',
                order: 42,
                placeholder: 'placeholder',
                required: true,
              },
            ],
            description: 'description',
            expiration_days: 42,
            force_create_new_plan: true,
            image: { id: 'id', direct_upload_id: 'direct_upload_id' },
            initial_price: 6.9,
            internal_notes: 'internal_notes',
            override_tax_type: 'inclusive',
            plan_type: 'renewal',
            product_id: 'prod_xxxxxxxxxxxxx',
            release_method: 'buy_now',
            renewal_price: 6.9,
            title: 'title',
            trial_period_days: 42,
            visibility: 'visible',
          },
          plan_id: 'plan_xxxxxxxxxxxxx',
          redirect_url: 'redirect_url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whopsdk.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.checkoutConfigurations.retrieve('ch_xxxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.checkoutConfigurations.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.checkoutConfigurations.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      direction: 'asc',
      first: 42,
      last: 42,
      plan_id: 'plan_xxxxxxxxxxxxx',
    });
  });
});
