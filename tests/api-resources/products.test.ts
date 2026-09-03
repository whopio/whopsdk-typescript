// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({ title: 'Interior Deep Clean' });
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
    const response = await client.products.create({
      title: 'Interior Deep Clean',
      account_id: 'biz_xxxxxxxxxxxxxx',
      collect_shipping_address: false,
      custom_cta: 'order_now',
      custom_cta_url: 'https://shinetime.example/book',
      custom_statement_descriptor: 'WHOP*SHINETIME',
      description: 'Full interior extraction, leather conditioning, and an ozone odor treatment.',
      global_affiliate_percentage: 10,
      global_affiliate_status: 'enabled',
      headline: 'Steam, shampoo, and odor removal in one visit',
      labels: ['interior'],
      member_affiliate_percentage: 5,
      member_affiliate_status: 'enabled',
      metadata: { bay: '1', duration_hours: '4' },
      product_tax_code_id: 'ptc_xxxxxxxxxxxxxx',
      redirect_purchase_url: 'https://shinetime.example/thanks',
      route: 'interior-deep-clean',
      send_welcome_message: true,
      visibility: 'visible',
      'Api-Version-Date': '2026-09-02-2',
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve('id');
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
      client.products.retrieve(
        'id',
        { 'Api-Version-Date': '2026-09-02-2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.products.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.products.list();
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
      client.products.list(
        {
          access_pass_types: ['regular'],
          account_id: 'account_id',
          after: 'after',
          before: 'before',
          created_after: 'created_after',
          created_before: 'created_before',
          direction: 'asc',
          first: 0,
          labels: ['string'],
          last: 0,
          marketplace_category_route: 'marketplace_category_route',
          order: 'order',
          plan_types: ['renewal'],
          price_maximum: 0,
          price_minimum: 0,
          query: 'query',
          visibilities: ['visible'],
          'Api-Version-Date': '2026-09-02-2',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.products.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.delete(
        'id',
        { 'Api-Version-Date': '2026-09-02-2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
