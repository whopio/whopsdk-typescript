// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource identityProfiles', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.identityProfiles.list();
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
      client.identityProfiles.list(
        {
          after: 'after',
          before: 'before',
          company_id: 'biz_xxxxxxxxxxxxxx',
          first: 42,
          last: 42,
          profile_type: 'individual',
          status: 'not_started',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.identityProfiles.retrieve('idpf_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.identityProfiles.create({
      kind: 'individual',
      ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
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
    const response = await client.identityProfiles.create({
      kind: 'individual',
      ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
      address_city: 'address_city',
      address_line1: 'address_line1',
      address_postal_code: 'address_postal_code',
      address_state: 'address_state',
      country: 'country',
      date_of_birth: 'date_of_birth',
      first_name: 'first_name',
      last_name: 'last_name',
      phone: 'phone',
      restart: true,
    });
  });

  // Mock server tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.identityProfiles.attach('identity_profile_id', {
      ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
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
  test.skip('attach: required and optional params', async () => {
    const response = await client.identityProfiles.attach('identity_profile_id', {
      ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
    });
  });

  // Mock server tests are disabled
  test.skip('unlink: only required params', async () => {
    const responsePromise = client.identityProfiles.unlink('idpf_xxxxxxxxxxxxx', {
      ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
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
  test.skip('unlink: required and optional params', async () => {
    const response = await client.identityProfiles.unlink('idpf_xxxxxxxxxxxxx', {
      ledger_account_id: 'ldgr_xxxxxxxxxxxxx',
    });
  });

  // Mock server tests are disabled
  test.skip('listVerifications', async () => {
    const responsePromise = client.identityProfiles.listVerifications('idpf_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listVerifications: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.identityProfiles.listVerifications(
        'idpf_xxxxxxxxxxxxx',
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
});
