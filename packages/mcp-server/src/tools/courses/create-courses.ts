// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'courses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/courses',
  operationId: 'createCourse',
};

export const tool: Tool = {
  name: 'create_courses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new course module in an experience\n\nRequired permissions:\n - `courses:update`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course',\n  $defs: {\n    course: {\n      type: 'object',\n      description: 'A course from the courses app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the course. Looks like cors_XXX'\n        },\n        certificate_after_completion_enabled: {\n          type: 'boolean',\n          description: 'Whether the course will award its students a PDF certificate after completing all lessons'\n        },\n        chapters: {\n          type: 'array',\n          description: 'The chapters in this course',\n          items: {\n            type: 'object',\n            description: 'A chapter from the courses app',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the chapter. Looks like chap_XXX'\n              },\n              lessons: {\n                type: 'array',\n                description: 'The lessons in this chapter',\n                items: {\n                  type: 'object',\n                  description: 'A lesson from the courses app',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'The ID of the lesson'\n                    },\n                    lesson_type: {\n                      $ref: '#/$defs/lesson_types'\n                    },\n                    order: {\n                      type: 'integer',\n                      description: 'The order of the lesson within its chapter'\n                    },\n                    title: {\n                      type: 'string',\n                      description: 'The title of the lesson'\n                    }\n                  },\n                  required: [                    'id',\n                    'lesson_type',\n                    'order',\n                    'title'\n                  ]\n                }\n              },\n              order: {\n                type: 'integer',\n                description: 'The order of the chapter within its course'\n              },\n              title: {\n                type: 'string',\n                description: 'The title of the chapter'\n              }\n            },\n            required: [              'id',\n              'lessons',\n              'order',\n              'title'\n            ]\n          }\n        },\n        description: {\n          type: 'string',\n          description: 'A short description of the course'\n        },\n        language: {\n          $ref: '#/$defs/languages'\n        },\n        require_completing_lessons_in_order: {\n          type: 'boolean',\n          description: 'Whether the course requires students to complete the previous lesson before moving on to the next one'\n        },\n        tagline: {\n          type: 'string',\n          description: 'A short tagline for the course. It is displayed under the course title in the UI'\n        },\n        thumbnail: {\n          type: 'object',\n          description: 'The thumbnail for the course',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the attachment'\n            },\n            content_type: {\n              type: 'string',\n              description: 'The attachment\\'s content type (e.g., image/jpg, video/mp4)'\n            },\n            filename: {\n              type: 'string',\n              description: 'The name of the file'\n            },\n            optimized_url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            },\n            source_url: {\n              type: 'string',\n              description: 'The original URL of the attachment, such as a direct link to S3. This should never be displayed on the client and always passed to an Imgproxy transformer.'\n            }\n          },\n          required: [            'id',\n            'content_type',\n            'filename',\n            'optimized_url',\n            'source_url'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the course'\n        }\n      },\n      required: [        'id',\n        'certificate_after_completion_enabled',\n        'chapters',\n        'description',\n        'language',\n        'require_completing_lessons_in_order',\n        'tagline',\n        'thumbnail',\n        'title'\n      ]\n    },\n    lesson_types: {\n      type: 'string',\n      description: 'The available types for a lesson',\n      enum: [        'text',\n        'video',\n        'pdf',\n        'multi',\n        'quiz',\n        'knowledge_check'\n      ]\n    },\n    languages: {\n      type: 'string',\n      description: 'The available languages for a course',\n      enum: [        'en',\n        'es',\n        'it',\n        'pt',\n        'de',\n        'fr',\n        'pl',\n        'ru',\n        'nl',\n        'ca',\n        'tr',\n        'sv',\n        'uk',\n        'no',\n        'fi',\n        'sk',\n        'el',\n        'cs',\n        'hr',\n        'da',\n        'ro',\n        'bg'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      experience_id: {
        type: 'string',
        description: 'The ID of the experience to create the course in',
      },
      title: {
        type: 'string',
        description: 'The title of the course',
      },
      cover_image: {
        type: 'string',
        description: 'The cover image URL of the course',
      },
      tagline: {
        type: 'string',
        description: 'The tagline of the course',
      },
      thumbnail: {
        type: 'object',
        description: 'The thumbnail for the course in png, jpeg, or gif format',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['experience_id', 'title'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.courses.create(body)));
};

export default { metadata, tool, handler };
