// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companies', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.companies.create({ title: 'title' });
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
    const response = await client.companies.create({
      title: 'title',
      business_type: 'education_program',
      description: 'description',
      email: 'email',
      industry_group: 'academic_and_test_prep',
      industry_type: 'trading',
      logo: { id: 'id' },
      metadata: { foo: 'bar' },
      parent_company_id: 'parent_company_id',
      send_customer_emails: true,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.companies.retrieve('biz_xxxxxxxxxxxxxx');
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
    const responsePromise = client.companies.update('biz_xxxxxxxxxxxxxx');
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
      client.companies.update(
        'biz_xxxxxxxxxxxxxx',
        {
          banner_image: { id: 'id' },
          business_type: 'education_program',
          description: 'description',
          industry_group: 'academic_and_test_prep',
          industry_type: 'trading',
          logo: { id: 'id' },
          route: 'route',
          send_customer_emails: true,
          target_audience: 'target_audience',
          title: 'title',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.companies.list();
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
      client.companies.list(
        {
          after: 'after',
          before: 'before',
          created_after: '2023-12-01T05:00:00.401Z',
          created_before: '2023-12-01T05:00:00.401Z',
          direction: 'asc',
          first: 42,
          last: 42,
          parent_company_id: 'parent_company_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
