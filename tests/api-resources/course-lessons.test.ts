// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  appID: 'app_xxxxxxxxxxxxxx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource courseLessons', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.courseLessons.create({
      chapter_id: 'chap_xxxxxxxxxxxxx',
      lesson_type: 'text',
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
    const response = await client.courseLessons.create({
      chapter_id: 'chap_xxxxxxxxxxxxx',
      lesson_type: 'text',
      content: 'content',
      days_from_course_start_until_unlock: 42,
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.courseLessons.retrieve('lesn_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.courseLessons.update('lesn_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.courseLessons.update(
        'lesn_xxxxxxxxxxxxx',
        {
          assessment_completion_requirement: { minimum_grade_percent: 6.9, minimum_questions_correct: 42 },
          assessment_questions: [
            {
              correct_answer: 'correct_answer',
              question_text: 'question_text',
              question_type: 'short_answer',
              id: 'id',
              image: { id: 'id', direct_upload_id: 'direct_upload_id' },
              options: [{ is_correct: true, option_text: 'option_text', id: 'id' }],
            },
          ],
          attachments: [{ id: 'id', direct_upload_id: 'direct_upload_id' }],
          content: 'content',
          days_from_course_start_until_unlock: 42,
          lesson_type: 'text',
          main_pdf: { id: 'id', direct_upload_id: 'direct_upload_id' },
          max_attempts: 42,
          mux_asset_id: 'mux_xxxxxxxxxxxxxx',
          title: 'title',
          visibility: 'visible',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.courseLessons.list();
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
      client.courseLessons.list(
        {
          after: 'after',
          before: 'before',
          chapter_id: 'chap_xxxxxxxxxxxxx',
          course_id: 'cors_xxxxxxxxxxxxx',
          first: 42,
          last: 42,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.courseLessons.delete('lesn_xxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
