// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_lessons',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/course_lessons/{id}',
  operationId: 'updateCourseLesson',
};

export const tool: Tool = {
  name: 'update_course_lessons',
  description: 'Updates a course lesson\n\nRequired permissions:\n - `courses:update`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      assessment_completion_requirement: {
        type: 'object',
        description: 'Completion requirements for quiz/knowledge check lessons',
        properties: {
          minimum_grade_percent: {
            type: 'number',
            description:
              'The minimum grade percentage required to pass (0-100). Cannot be set together with minimum_questions_correct.',
          },
          minimum_questions_correct: {
            type: 'integer',
            description:
              'The minimum number of questions that must be answered correctly. Cannot be set together with minimum_grade_percent.',
          },
        },
      },
      assessment_questions: {
        type: 'array',
        description:
          'Assessment questions for quiz/knowledge check lessons. Replaces all existing questions.',
        items: {
          type: 'object',
          description: 'Input for creating or updating an assessment question',
          properties: {
            correct_answer: {
              type: 'string',
              description: 'The correct answer for the question. Used for short answer questions',
            },
            question_text: {
              type: 'string',
              description: 'The text of the question',
            },
            question_type: {
              $ref: '#/$defs/assessment_question_types',
            },
            id: {
              type: 'string',
              description:
                'The ID of an existing question. If provided, the question will be updated. If not provided, a new question will be created.',
            },
            image: {
              type: 'object',
              description: 'Optional image attachment for the question',
              properties: {
                id: {
                  type: 'string',
                  description:
                    "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
                },
                direct_upload_id: {
                  type: 'string',
                  description:
                    'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
                },
              },
            },
            options: {
              type: 'array',
              description: 'The answer options for multiple choice/select questions',
              items: {
                type: 'object',
                description: 'Input for creating or updating an assessment question option',
                properties: {
                  is_correct: {
                    type: 'boolean',
                    description: 'Whether this option is a correct answer',
                  },
                  option_text: {
                    type: 'string',
                    description: 'The text of the answer option',
                  },
                  id: {
                    type: 'string',
                    description:
                      'The ID of an existing option. If provided, the option will be updated. If not provided, a new option will be created.',
                  },
                },
                required: ['is_correct', 'option_text'],
              },
            },
          },
          required: ['correct_answer', 'question_text', 'question_type'],
        },
      },
      attachments: {
        type: 'array',
        description:
          'General attachments for the lesson (PDFs, files, etc). Replaces all existing attachments.',
        items: {
          type: 'object',
          description: 'Input for an attachment',
          properties: {
            id: {
              type: 'string',
              description:
                "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
            },
            direct_upload_id: {
              type: 'string',
              description:
                'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
            },
          },
        },
      },
      content: {
        type: 'string',
        description: 'The content of the lesson',
      },
      days_from_course_start_until_unlock: {
        type: 'integer',
        description: 'Days from course start until unlock',
      },
      lesson_type: {
        $ref: '#/$defs/lesson_types',
      },
      main_pdf: {
        type: 'object',
        description: 'The main PDF file for this lesson',
        properties: {
          id: {
            type: 'string',
            description:
              "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
          },
          direct_upload_id: {
            type: 'string',
            description:
              'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
          },
        },
      },
      max_attempts: {
        type: 'integer',
        description: 'Maximum number of attempts allowed for assessments',
      },
      mux_asset_id: {
        type: 'string',
        description: 'The ID of the Mux asset to attach to this lesson for video lessons',
      },
      title: {
        type: 'string',
        description: 'The title of the lesson',
      },
      visibility: {
        $ref: '#/$defs/lesson_visibilities',
      },
    },
    required: ['id'],
    $defs: {
      assessment_question_types: {
        type: 'string',
        description: 'The available types for an assessment question',
        enum: ['short_answer', 'true_false', 'multiple_choice', 'multiple_select'],
      },
      lesson_types: {
        type: 'string',
        description: 'The available types for a lesson',
        enum: ['text', 'video', 'pdf', 'multi', 'quiz', 'knowledge_check'],
      },
      lesson_visibilities: {
        type: 'string',
        description:
          'The available visibilities for a lesson. Determines how / whether a lesson is visible to users.',
        enum: ['visible', 'hidden'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.courseLessons.update(id, body));
};

export default { metadata, tool, handler };
