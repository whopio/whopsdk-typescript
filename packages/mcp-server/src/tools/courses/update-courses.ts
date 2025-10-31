// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'courses',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/courses/{id}',
  operationId: 'updateCourse',
};

export const tool: Tool = {
  name: 'update_courses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a course\n\nRequired permissions:\n - `courses:update`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course',\n  $defs: {\n    course: {\n      type: 'object',\n      description: 'A course from the courses app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the course. Looks like cors_XXX'\n        },\n        certificate_after_completion_enabled: {\n          type: 'boolean',\n          description: 'Whether the course will award its students a PDF certificate after completing all lessons'\n        },\n        chapters: {\n          type: 'array',\n          description: 'The chapters in this course',\n          items: {\n            type: 'object',\n            description: 'A chapter from the courses app',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the chapter. Looks like chap_XXX'\n              },\n              lessons: {\n                type: 'array',\n                description: 'The lessons in this chapter',\n                items: {\n                  type: 'object',\n                  description: 'A lesson from the courses app',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'The ID of the lesson'\n                    },\n                    lesson_type: {\n                      $ref: '#/$defs/lesson_types'\n                    },\n                    order: {\n                      type: 'integer',\n                      description: 'The order of the lesson within its chapter'\n                    },\n                    title: {\n                      type: 'string',\n                      description: 'The title of the lesson'\n                    }\n                  },\n                  required: [                    'id',\n                    'lesson_type',\n                    'order',\n                    'title'\n                  ]\n                }\n              },\n              order: {\n                type: 'integer',\n                description: 'The order of the chapter within its course'\n              },\n              title: {\n                type: 'string',\n                description: 'The title of the chapter'\n              }\n            },\n            required: [              'id',\n              'lessons',\n              'order',\n              'title'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the course was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'A short description of the course'\n        },\n        language: {\n          $ref: '#/$defs/languages'\n        },\n        require_completing_lessons_in_order: {\n          type: 'boolean',\n          description: 'Whether the course requires students to complete the previous lesson before moving on to the next one'\n        },\n        tagline: {\n          type: 'string',\n          description: 'A short tagline for the course. It is displayed under the course title in the UI'\n        },\n        thumbnail: {\n          type: 'object',\n          description: 'The thumbnail for the course',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the attachment'\n            },\n            content_type: {\n              type: 'string',\n              description: 'The attachment\\'s content type (e.g., image/jpg, video/mp4)'\n            },\n            filename: {\n              type: 'string',\n              description: 'The name of the file'\n            },\n            optimized_url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            },\n            source_url: {\n              type: 'string',\n              description: 'The original URL of the attachment, such as a direct link to S3. This should never be displayed on the client and always passed to an Imgproxy transformer.'\n            }\n          },\n          required: [            'id',\n            'content_type',\n            'filename',\n            'optimized_url',\n            'source_url'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the course'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when the course was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'certificate_after_completion_enabled',\n        'chapters',\n        'created_at',\n        'description',\n        'language',\n        'require_completing_lessons_in_order',\n        'tagline',\n        'thumbnail',\n        'title',\n        'updated_at'\n      ]\n    },\n    lesson_types: {\n      type: 'string',\n      description: 'The available types for a lesson',\n      enum: [        'text',\n        'video',\n        'pdf',\n        'multi',\n        'quiz',\n        'knowledge_check'\n      ]\n    },\n    languages: {\n      type: 'string',\n      description: 'The available languages for a course',\n      enum: [        'en',\n        'es',\n        'it',\n        'pt',\n        'de',\n        'fr',\n        'pl',\n        'ru',\n        'nl',\n        'ca',\n        'tr',\n        'sv',\n        'uk',\n        'no',\n        'fi',\n        'sk',\n        'el',\n        'cs',\n        'hr',\n        'da',\n        'ro',\n        'bg'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      certificate_after_completion_enabled: {
        type: 'boolean',
        description:
          'Whether the course will award its students a PDF certificate after completing all lessons',
      },
      chapters: {
        type: 'array',
        description: 'The chapters and lessons to update',
        items: {
          type: 'object',
          description: 'Input for updating a chapter while updating a course',
          properties: {
            id: {
              type: 'string',
              description: 'The ID of the chapter to update',
            },
            order: {
              type: 'integer',
              description: 'The order of the chapter within its course',
            },
            title: {
              type: 'string',
              description: 'The title of the chapter',
            },
            lessons: {
              type: 'array',
              description: 'The lessons to update within this chapter',
              items: {
                type: 'object',
                description: 'Input for updating a lesson while updating a course',
                properties: {
                  id: {
                    type: 'string',
                    description: 'The ID of the lesson to update',
                  },
                  chapter_id: {
                    type: 'string',
                    description: 'The ID of the chapter this lesson belongs to (for moving between chapters)',
                  },
                  order: {
                    type: 'integer',
                    description: 'The order of the lesson within its chapter',
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the lesson',
                  },
                },
                required: ['id', 'chapter_id', 'order', 'title'],
              },
            },
          },
          required: ['id', 'order', 'title'],
        },
      },
      cover_image: {
        type: 'string',
        description: 'The cover image URL of the course',
      },
      description: {
        type: 'string',
        description: 'A short description of the course',
      },
      language: {
        $ref: '#/$defs/languages',
      },
      require_completing_lessons_in_order: {
        type: 'boolean',
        description:
          'Whether the course requires students to complete the previous lesson before moving on to the next one',
      },
      tagline: {
        type: 'string',
        description: 'A short tagline for the course',
      },
      thumbnail: {
        anyOf: [
          {
            type: 'object',
            description: 'Input for an attachment',
            properties: {
              direct_upload_id: {
                type: 'string',
                description:
                  'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
              },
            },
            required: ['direct_upload_id'],
          },
          {
            type: 'object',
            description: 'Input for an attachment',
            properties: {
              id: {
                type: 'string',
                description:
                  "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
              },
            },
            required: ['id'],
          },
        ],
        description: 'The thumbnail for the course in png, jpeg, or gif format',
      },
      title: {
        type: 'string',
        description: 'The title of the course',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
    $defs: {
      languages: {
        type: 'string',
        description: 'The available languages for a course',
        enum: [
          'en',
          'es',
          'it',
          'pt',
          'de',
          'fr',
          'pl',
          'ru',
          'nl',
          'ca',
          'tr',
          'sv',
          'uk',
          'no',
          'fi',
          'sk',
          'el',
          'cs',
          'hr',
          'da',
          'ro',
          'bg',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.courses.update(id, body)));
};

export default { metadata, tool, handler };
