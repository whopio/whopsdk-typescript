// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.accounts.list();
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
      client.accounts.list(
        {
          after: 'after',
          before: 'before',
          direction: 'asc',
          first: 0,
          last: 0,
          order: 'created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.accounts.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('me', async () => {
    const responsePromise = client.accounts.me();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.accounts.retrieve('account_id');
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
    const responsePromise = client.accounts.update('account_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('recommendActions', async () => {
    const responsePromise = client.accounts.recommendActions('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('registerLlc: only required params', async () => {
    const responsePromise = client.accounts.registerLlc('account_id', {
      business_info: {
        business_type: 'business_type',
        formation_state: 'AL',
        industry_group: 'industry_group',
        industry_type: 'industry_type',
        legal_name: 'legal_name',
      },
      founders: [
        {
          address: {
            city: 'city',
            country: 'country',
            line1: 'line1',
            postal_code: 'postal_code',
            state: 'state',
          },
          email: 'email',
          first_name: 'first_name',
          is_primary: true,
          last_name: 'last_name',
          ownership_percentage: 0,
          phone: 'phone',
        },
      ],
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
  test.skip('registerLlc: required and optional params', async () => {
    const response = await client.accounts.registerLlc('account_id', {
      business_info: {
        business_type: 'business_type',
        formation_state: 'AL',
        industry_group: 'industry_group',
        industry_type: 'industry_type',
        legal_name: 'legal_name',
        address: {
          city: 'city',
          country: 'country',
          line1: 'line1',
          postal_code: 'postal_code',
          state: 'state',
          line2: 'line2',
        },
        entity_suffix: 'LLC',
        expedite_ein: true,
        phone: 'phone',
        use_registered_agent: true,
        website: 'website',
      },
      founders: [
        {
          address: {
            city: 'city',
            country: 'country',
            line1: 'line1',
            postal_code: 'postal_code',
            state: 'state',
            line2: 'line2',
          },
          email: 'email',
          first_name: 'first_name',
          is_primary: true,
          last_name: 'last_name',
          ownership_percentage: 0,
          phone: 'phone',
          date_of_birth: 'date_of_birth',
          ssn: 'ssn',
        },
      ],
      'Idempotency-Key': 'd9105228-4a08-46b1-8b91-42fed586d383',
    });
  });
});
