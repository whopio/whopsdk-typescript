// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.payments.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      member_id: 'mber_xxxxxxxxxxxxx',
      payment_method_id: 'pmt_xxxxxxxxxxxxxx',
      plan: { currency: 'usd' },
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
    const response = await client.payments.create({
      company_id: 'biz_xxxxxxxxxxxxxx',
      member_id: 'mber_xxxxxxxxxxxxx',
      payment_method_id: 'pmt_xxxxxxxxxxxxxx',
      plan: {
        currency: 'usd',
        billing_period: 42,
        description: 'description',
        expiration_days: 42,
        force_create_new_plan: true,
        initial_price: 6.9,
        internal_notes: 'internal_notes',
        plan_type: 'renewal',
        product: {
          external_identifier: 'external_identifier',
          title: 'title',
          business_type: 'education_program',
          collect_shipping_address: true,
          custom_statement_descriptor: 'custom_statement_descriptor',
          description: 'description',
          global_affiliate_percentage: 6.9,
          global_affiliate_status: 'enabled',
          headline: 'headline',
          industry_group: 'academic_and_test_prep',
          industry_type: 'trading',
          product_tax_code_id: 'ptc_xxxxxxxxxxxxxx',
          redirect_purchase_url: 'redirect_purchase_url',
          route: 'route',
          visibility: 'visible',
        },
        product_id: 'prod_xxxxxxxxxxxxx',
        renewal_price: 6.9,
        title: 'title',
        trial_period_days: 42,
        visibility: 'visible',
      },
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.payments.retrieve('pay_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.payments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.list(
        {
          after: 'after',
          before: 'before',
          billing_reasons: ['subscription_create'],
          company_id: 'biz_xxxxxxxxxxxxxx',
          created_after: '2023-12-01T05:00:00.401Z',
          created_before: '2023-12-01T05:00:00.401Z',
          currencies: ['usd'],
          direction: 'asc',
          first: 42,
          include_free: true,
          last: 42,
          order: 'final_amount',
          plan_ids: ['string'],
          product_ids: ['string'],
          query: 'query',
          statuses: ['draft'],
          substatuses: ['succeeded'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFees', async () => {
    const responsePromise = client.payments.listFees('pay_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFees: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.listFees(
        'pay_xxxxxxxxxxxxxx',
        {
          after: 'after',
          before: 'before',
          first: 42,
          last: 42,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('refund', async () => {
    const responsePromise = client.payments.refund('pay_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('refund: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.refund(
        'pay_xxxxxxxxxxxxxx',
        { partial_amount: 6.9 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retry', async () => {
    const responsePromise = client.payments.retry('pay_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('void', async () => {
    const responsePromise = client.payments.void('pay_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
