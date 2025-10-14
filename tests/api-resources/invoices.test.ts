// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whopsdk from 'whopsdk';

const client = new Whopsdk({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      collection_method: 'send_invoice',
      company_id: 'biz_xxxxxxxxxxxxxx',
      due_date: 1701406800,
      plan: {},
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
    const response = await client.invoices.create({
      collection_method: 'send_invoice',
      company_id: 'biz_xxxxxxxxxxxxxx',
      due_date: 1701406800,
      plan: {
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
        description: 'description',
        expiration_days: 42,
        initial_price: 6.9,
        internal_notes: 'internal_notes',
        plan_type: 'renewal',
        release_method: 'buy_now',
        renewal_price: 6.9,
        trial_period_days: 42,
        visibility: 'visible',
      },
      charge_buyer_fee: true,
      customer_name: 'customer_name',
      email_address: 'email_address',
      member_id: 'mber_xxxxxxxxxxxxx',
      payment_token_id: 'payt_xxxxxxxxxxxxx',
      product: { title: 'title', product_tax_code_id: 'ptc_xxxxxxxxxxxxxx' },
      product_id: 'prod_xxxxxxxxxxxxx',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.invoices.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
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
    const response = await client.invoices.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      direction: 'asc',
      filters: { access_pass_ids: ['string'], collection_methods: ['send_invoice'], statuses: ['open'] },
      first: 42,
      last: 42,
      order: 'id',
    });
  });

  // Prism tests are disabled
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
