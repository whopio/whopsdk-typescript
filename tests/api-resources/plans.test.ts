// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whopsdk from 'whopsdk';

const client = new Whopsdk({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plans', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.plans.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      product_id: 'prod_xxxxxxxxxxxxx',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.plans.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      product_id: 'prod_xxxxxxxxxxxxx',
      billing_period: 42,
      currency: 'usd',
      custom_fields: [
        { field_type: 'text', name: 'name', id: 'id', order: 42, placeholder: 'placeholder', required: true },
      ],
      description: 'description',
      expiration_days: 42,
      image: { id: 'id', direct_upload_id: 'direct_upload_id' },
      initial_price: 6.9,
      internal_notes: 'internal_notes',
      override_tax_type: 'inclusive',
      plan_type: 'renewal',
      release_method: 'buy_now',
      renewal_price: 6.9,
      title: 'title',
      trial_period_days: 42,
      visibility: 'visible',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.plans.retrieve('plan_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.plans.update('plan_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.plans.update(
        'plan_xxxxxxxxxxxxx',
        {
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
          image: { id: 'id', direct_upload_id: 'direct_upload_id' },
          initial_price: 6.9,
          internal_notes: 'internal_notes',
          offer_cancel_discount: true,
          override_tax_type: 'inclusive',
          renewal_price: 6.9,
          title: 'title',
          trial_period_days: 42,
          visibility: 'visible',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whopsdk.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.plans.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
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
    const response = await client.plans.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      direction: 'asc',
      first: 42,
      last: 42,
      order: 'id',
      plan_types: ['renewal'],
      product_ids: ['string'],
      release_methods: ['buy_now'],
      visibilities: ['visible'],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.plans.delete('plan_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
