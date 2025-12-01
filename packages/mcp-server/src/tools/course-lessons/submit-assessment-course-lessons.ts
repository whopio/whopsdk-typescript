// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_lessons',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/course_lessons/{lesson_id}/submit_assessment',
  operationId: 'submitAssessmentCourseLesson',
};

export const tool: Tool = {
  name: 'submit_assessment_course_lessons',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmits answers for a course assessment\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course_lesson_submit_assessment_response',\n  $defs: {\n    course_lesson_submit_assessment_response: {\n      type: 'object',\n      description: 'The result of a user\\'s assessment attempt',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the assessment result'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the assessment was taken',\n          format: 'date-time'\n        },\n        lesson: {\n          type: 'object',\n          description: 'The lesson this assessment result is for',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the lesson'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the lesson'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        result_correct: {\n          type: 'integer',\n          description: 'The number of correct answers'\n        },\n        result_grade: {\n          type: 'number',\n          description: 'The grade achieved on the assessment'\n        },\n        result_graded_questions: {\n          type: 'object',\n          description: 'Array of graded questions with details',\n          additionalProperties: true\n        },\n        result_passing_grade: {\n          type: 'boolean',\n          description: 'Whether the user achieved a passing grade'\n        },\n        result_question_count: {\n          type: 'integer',\n          description: 'The total number of questions in the assessment'\n        },\n        score_percent: {\n          type: 'number',\n          description: 'The percentage score achieved on the assessment'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the assessment result was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who took the assessment',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'lesson',\n        'result_correct',\n        'result_grade',\n        'result_graded_questions',\n        'result_passing_grade',\n        'result_question_count',\n        'score_percent',\n        'updated_at',\n        'user'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      lesson_id: {
        type: 'string',
      },
      answers: {
        type: 'array',
        description: 'The answers to the assessment questions',
        items: {
          type: 'object',
          description: "Input for a single question's answer in an assessment submission",
          properties: {
            question_id: {
              type: 'string',
              description: 'The ID of the question being answered',
            },
            answer_text: {
              type: 'string',
              description: 'The text answer provided by the user (for short answer questions)',
            },
            selected_option_ids: {
              type: 'array',
              description: 'The IDs of the selected options (for multiple choice/select questions)',
              items: {
                type: 'string',
                description:
                  'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
              },
            },
          },
          required: ['question_id'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['lesson_id', 'answers'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { lesson_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.courseLessons.submitAssessment(lesson_id, body)),
    );
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
