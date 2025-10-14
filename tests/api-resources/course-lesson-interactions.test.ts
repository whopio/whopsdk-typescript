// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource courseLessonInteractions', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.courseLessonInteractions.retrieve('crsli_xxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.courseLessonInteractions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.courseLessonInteractions.list(
        {
          after: 'after',
          before: 'before',
          completed: true,
          course_id: 'cors_xxxxxxxxxxxxx',
          first: 42,
          last: 42,
          lesson_id: 'lesn_xxxxxxxxxxxxx',
          user_id: 'user_xxxxxxxxxxxxx',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
