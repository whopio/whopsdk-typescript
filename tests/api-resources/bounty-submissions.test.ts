// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bountySubmissions', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.bountySubmissions.list();
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
      client.bountySubmissions.list(
        {
          account_id: 'account_id',
          after: 'after',
          before: 'before',
          bounty_id: 'bounty_id',
          created_after: 'created_after',
          created_before: 'created_before',
          direction: 'asc',
          first: 100,
          last: 100,
          order: 'created_at',
          status: 'in_progress',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.bountySubmissions.create({ bounty_id: 'bounty_id' });
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
    const response = await client.bountySubmissions.create({
      bounty_id: 'bounty_id',
      affiliate_code: 'affiliate_code',
      deliverable: {
        type: 'content_url',
        caption: 'caption',
        file_ids: ['string'],
        urls: ['string'],
      },
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });
});
