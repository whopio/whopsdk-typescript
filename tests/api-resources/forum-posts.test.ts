// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource forumPosts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.forumPosts.create({ experience_id: 'exp_xxxxxxxxxxxxxx' });
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
    const response = await client.forumPosts.create({
      experience_id: 'exp_xxxxxxxxxxxxxx',
      attachments: [{ id: 'id' }],
      company_id: 'biz_xxxxxxxxxxxxxx',
      content: 'content',
      is_mention: true,
      parent_id: 'parent_id',
      paywall_amount: 6.9,
      paywall_currency: 'usd',
      pinned: true,
      poll: { options: [{ id: 'id', text: 'text' }] },
      title: 'title',
      visibility: 'members_only',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.forumPosts.retrieve('id');
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
    const responsePromise = client.forumPosts.update('id');
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
    await expect(
      client.forumPosts.update(
        'id',
        {
          attachments: [{ id: 'id' }],
          content: 'content',
          is_pinned: true,
          title: 'title',
          visibility: 'members_only',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.forumPosts.list({ experience_id: 'exp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.forumPosts.list({
      experience_id: 'exp_xxxxxxxxxxxxxx',
      after: 'after',
      before: 'before',
      first: 42,
      last: 42,
      parent_id: 'parent_id',
      pinned: true,
    });
  });
});
