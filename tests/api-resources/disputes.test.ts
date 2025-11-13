// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource disputes', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.disputes.retrieve('dspt_xxxxxxxxxxxxx');
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
    const responsePromise = client.disputes.list({ company_id: 'biz_xxxxxxxxxxxxxx' });
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
    const response = await client.disputes.list({
      company_id: 'biz_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      direction: 'asc',
      first: 42,
      last: 42,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('updateEvidence: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.disputes.updateEvidence(
        'dspt_xxxxxxxxxxxxx',
        {
          access_activity_log: 'access_activity_log',
          billing_address: 'billing_address',
          cancellation_policy_attachment: { direct_upload_id: 'direct_upload_id' },
          cancellation_policy_disclosure: 'cancellation_policy_disclosure',
          customer_communication_attachment: { direct_upload_id: 'direct_upload_id' },
          customer_email_address: 'customer_email_address',
          customer_name: 'customer_name',
          notes: 'notes',
          product_description: 'product_description',
          refund_policy_attachment: { direct_upload_id: 'direct_upload_id' },
          refund_policy_disclosure: 'refund_policy_disclosure',
          refund_refusal_explanation: 'refund_refusal_explanation',
          service_date: 'service_date',
          uncategorized_attachment: { direct_upload_id: 'direct_upload_id' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
