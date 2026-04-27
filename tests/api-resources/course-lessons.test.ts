// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource courseLessons', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.courseLessons.create({
      chapter_id: 'chap_xxxxxxxxxxxxx',
      lesson_type: 'text',
      content: 'content',
      days_from_course_start_until_unlock: 42,
      embed_id: 'embed_id',
      embed_type: 'youtube',
      thumbnail: { id: 'id' },
      title: 'title',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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
              image: { id: 'id' },
              options: [
                {
                  is_correct: true,
                  option_text: 'option_text',
                  id: 'id',
                },
              ],
            },
          ],
          attachments: [{ id: 'id' }],
          content: 'content',
          days_from_course_start_until_unlock: 42,
          embed_id: 'embed_id',
          embed_type: 'youtube',
          lesson_type: 'text',
          main_pdf: { id: 'id' },
          max_attempts: 42,
          mux_asset_id: 'mux_xxxxxxxxxxxxxx',
          thumbnail: { id: 'id' },
          title: 'title',
          visibility: 'visible',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('markAsCompleted', async () => {
    const responsePromise = client.courseLessons.markAsCompleted('lesson_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('start', async () => {
    const responsePromise = client.courseLessons.start('lesson_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitAssessment: only required params', async () => {
    const responsePromise = client.courseLessons.submitAssessment('lesson_id', {
      answers: [{ question_id: 'question_id' }],
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
  test.skip('submitAssessment: required and optional params', async () => {
    const response = await client.courseLessons.submitAssessment('lesson_id', {
      answers: [
        {
          question_id: 'question_id',
          answer_text: 'answer_text',
          selected_option_ids: ['string'],
        },
      ],
    });
  });
});
