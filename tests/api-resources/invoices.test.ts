// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whopsdk from 'whopsdk';

const client = new Whopsdk({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      input: { collection_method: 'send_invoice', due_date: 0, plan: {} },
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
      input: {
        collection_method: 'send_invoice',
        due_date: 0,
        plan: {
          ach_payments: true,
          base_currency: 'usd',
          billing_period: 0,
          card_payments: true,
          coinbase_commerce_accepted: true,
          custom_fields: [
            {
              field_type: 'text',
              name: 'name',
              id: 'id',
              order: 0,
              placeholder: 'placeholder',
              required: true,
            },
          ],
          description: 'description',
          expiration_days: 0,
          initial_price: {},
          internal_notes: 'internal_notes',
          offer_cancel_discount: true,
          paypal_accepted: true,
          plan_type: 'renewal',
          platform_balance_accepted: true,
          redirect_url: 'redirect_url',
          release_method: 'buy_now',
          release_method_settings: {
            expires_at: 0,
            max_entries: 0,
            nft_weighted_entries: true,
            starts_at: 0,
          },
          renewal_price: {},
          requirements: {},
          split_pay_required_payments: 0,
          splitit_accepted: true,
          stock: 0,
          trial_period_days: 0,
          unlimited_stock: true,
          visibility: 'visible',
        },
        access_pass: { title: 'title', product_tax_code_id: 'product_tax_code_id' },
        access_pass_id: 'access_pass_id',
        charge_buyer_fee: true,
        client_mutation_id: 'client_mutation_id',
        customer_name: 'customer_name',
        email_address: 'email_address',
        member_id: 'member_id',
        payment_token_id: 'payment_token_id',
      },
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.invoices.list({ company_id: 'company_id' });
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
      company_id: 'company_id',
      after: 'after',
      before: 'before',
      direction: 'asc',
      filters: { access_pass_ids: ['string'], collection_methods: ['send_invoice'], statuses: ['open'] },
      first: 0,
      last: 0,
      order: 'id',
    });
  });
});
