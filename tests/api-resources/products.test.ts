// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({ company_id: 'biz_xxxxxxxxxxxxxx', title: 'title' });
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
    const response = await client.products.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      title: 'title',
      business_type: 'education_program',
      collect_shipping_address: true,
      custom_cta: 'get_access',
      custom_cta_url: 'custom_cta_url',
      custom_statement_descriptor: 'custom_statement_descriptor',
      description: 'description',
      experience_ids: ['string'],
      global_affiliate_percentage: 6.9,
      global_affiliate_status: 'enabled',
      headline: 'headline',
      industry_type: 'trading',
      member_affiliate_percentage: 6.9,
      member_affiliate_status: 'enabled',
      plan_options: {
        base_currency: 'usd',
        billing_period: 42,
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
        initial_price: 6.9,
        plan_type: 'renewal',
        release_method: 'buy_now',
        renewal_price: 6.9,
        visibility: 'visible',
      },
      product_highlights: [{ content: 'content', highlight_type: 'qualification', title: 'title' }],
      product_tax_code_id: 'ptc_xxxxxxxxxxxxxx',
      redirect_purchase_url: 'redirect_purchase_url',
      route: 'route',
      visibility: 'visible',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve('prod_xxxxxxxxxxxxx');
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
    const responsePromise = client.products.update('prod_xxxxxxxxxxxxx');
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
      client.products.update(
        'prod_xxxxxxxxxxxxx',
        {
          business_type: 'education_program',
          collect_shipping_address: true,
          custom_cta: 'get_access',
          custom_cta_url: 'custom_cta_url',
          custom_statement_descriptor: 'custom_statement_descriptor',
          description: 'description',
          global_affiliate_percentage: 6.9,
          global_affiliate_status: 'enabled',
          headline: 'headline',
          industry_type: 'trading',
          member_affiliate_percentage: 6.9,
          member_affiliate_status: 'enabled',
          product_tax_code_id: 'ptc_xxxxxxxxxxxxxx',
          redirect_purchase_url: 'redirect_purchase_url',
          route: 'route',
          store_page_config: { custom_cta: 'custom_cta', show_price: true },
          title: 'title',
          visibility: 'visible',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.products.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
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
    const response = await client.products.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      created_after: '2023-12-01T05:00:00.401Z',
      created_before: '2023-12-01T05:00:00.401Z',
      direction: 'asc',
      first: 42,
      last: 42,
      order: 'active_memberships_count',
      product_types: ['regular'],
      visibilities: ['visible'],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.products.delete('prod_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
