// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource invoices', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
    collection_method: 'send_invoice',
    company_id: 'biz_xxxxxxxxxxxxxx',
    plan: {},
    product: { title: 'title' },
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
    const response = await client.invoices.create({
    collection_method: 'send_invoice',
    company_id: 'biz_xxxxxxxxxxxxxx',
    plan: {
    billing_period: 42,
    custom_fields: [{
    field_type: 'text',
    name: 'name',
    id: 'id',
    order: 42,
    placeholder: 'placeholder',
    required: true,
  }],
    description: 'description',
    expiration_days: 42,
    initial_price: 6.9,
    internal_notes: 'internal_notes',
    legacy_payment_method_controls: true,
    payment_method_configuration: {
    disabled: ['acss_debit'],
    enabled: ['acss_debit'],
    include_platform_defaults: true,
  },
    plan_type: 'renewal',
    release_method: 'buy_now',
    renewal_price: 6.9,
    stock: 42,
    trial_period_days: 42,
    unlimited_stock: true,
    visibility: 'visible',
  },
    product: { title: 'title', product_tax_code_id: 'ptc_xxxxxxxxxxxxxx' },
    automatically_finalizes_at: '2023-12-01T05:00:00.401Z',
    billing_address: {
    city: 'city',
    country: 'country',
    line1: 'line1',
    line2: 'line2',
    name: 'name',
    phone: 'phone',
    postal_code: 'postal_code',
    state: 'state',
    tax_id_type: 'ad_nrt',
    tax_id_value: 'tax_id_value',
  },
    charge_buyer_fee: true,
    customer_name: 'customer_name',
    due_date: '2023-12-01T05:00:00.401Z',
    email_address: 'email_address',
    line_items: [{
    label: 'label',
    unit_price: 6.9,
    quantity: 6.9,
  }],
    mailing_address_id: 'ma_xxxxxxxxxxxxxxx',
    member_id: 'mber_xxxxxxxxxxxxx',
    payment_method_id: 'pmt_xxxxxxxxxxxxxx',
    payment_token_id: 'payt_xxxxxxxxxxxxx',
    save_as_draft: true,
    subscription_billing_anchor_at: '2023-12-01T05:00:00.401Z',
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.invoices.retrieve('inv_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.invoices.update('inv_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.invoices.update('inv_xxxxxxxxxxxxxx', {
    automatically_finalizes_at: '2023-12-01T05:00:00.401Z',
    billing_address: {
    city: 'city',
    country: 'country',
    line1: 'line1',
    line2: 'line2',
    name: 'name',
    phone: 'phone',
    postal_code: 'postal_code',
    state: 'state',
    tax_id_type: 'ad_nrt',
    tax_id_value: 'tax_id_value',
  },
    charge_buyer_fee: true,
    collection_method: 'send_invoice',
    customer_name: 'customer_name',
    due_date: '2023-12-01T05:00:00.401Z',
    email_address: 'email_address',
    line_items: [{
    label: 'label',
    unit_price: 6.9,
    quantity: 6.9,
  }],
    mailing_address_id: 'ma_xxxxxxxxxxxxxxx',
    member_id: 'mber_xxxxxxxxxxxxx',
    payment_method_id: 'pmt_xxxxxxxxxxxxxx',
    plan: {
    billing_period: 42,
    custom_fields: [{
    field_type: 'text',
    name: 'name',
    id: 'id',
    order: 42,
    placeholder: 'placeholder',
    required: true,
  }],
    description: 'description',
    expiration_days: 42,
    initial_price: 6.9,
    internal_notes: 'internal_notes',
    legacy_payment_method_controls: true,
    payment_method_configuration: {
    disabled: ['acss_debit'],
    enabled: ['acss_debit'],
    include_platform_defaults: true,
  },
    plan_type: 'renewal',
    release_method: 'buy_now',
    renewal_price: 6.9,
    stock: 42,
    trial_period_days: 42,
    unlimited_stock: true,
    visibility: 'visible',
  },
    subscription_billing_anchor_at: '2023-12-01T05:00:00.401Z',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.invoices.list();
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
    await expect(client.invoices.list({
    after: 'after',
    before: 'before',
    collection_methods: ['send_invoice'],
    company_id: 'biz_xxxxxxxxxxxxxx',
    created_after: '2023-12-01T05:00:00.401Z',
    created_before: '2023-12-01T05:00:00.401Z',
    direction: 'asc',
    first: 42,
    last: 42,
    order: 'id',
    product_ids: ['string'],
    statuses: ['draft'],
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.invoices.delete('inv_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('markPaid', async () => {
    const responsePromise = client.invoices.markPaid('inv_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('markUncollectible', async () => {
    const responsePromise = client.invoices.markUncollectible('inv_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('void', async () => {
    const responsePromise = client.invoices.void('inv_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
