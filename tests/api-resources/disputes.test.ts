// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource disputes', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.disputes.retrieve('id');
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
      client.disputes.retrieve(
        'id',
        { 'Api-Version-Date': '2026-09-02-2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.disputes.list();
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
      client.disputes.list(
        {
          account_id: 'account_id',
          after: 'after',
          before: 'before',
          created_after: 'created_after',
          created_before: 'created_before',
          currency: 'currency',
          direction: 'asc',
          first: 0,
          last: 0,
          order: 'created_at',
          status: ['needs_response'],
          'Api-Version-Date': '2026-09-02-2',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('submitEvidence', async () => {
    const responsePromise = client.disputes.submitEvidence('dspt_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateEvidence', async () => {
    const responsePromise = client.disputes.updateEvidence('dspt_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateEvidence: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.disputes.updateEvidence(
        'dspt_xxxxxxxxxxxxx',
        {
          access_activity_log: 'access_activity_log',
          billing_address: 'billing_address',
          cancellation_policy_attachment: { id: 'id' },
          cancellation_policy_disclosure: 'cancellation_policy_disclosure',
          customer_communication_attachment: { id: 'id' },
          customer_email_address: 'customer_email_address',
          customer_name: 'customer_name',
          notes: 'notes',
          product_description: 'product_description',
          refund_policy_attachment: { id: 'id' },
          refund_policy_disclosure: 'refund_policy_disclosure',
          refund_refusal_explanation: 'refund_refusal_explanation',
          service_date: 'service_date',
          uncategorized_attachment: { id: 'id' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
