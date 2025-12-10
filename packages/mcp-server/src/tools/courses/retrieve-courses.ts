// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'courses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/courses/{id}',
  operationId: 'retrieveCourse',
};

export const tool: Tool = {
  name: 'retrieve_courses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a course by ID\n\nRequired permissions:\n - `courses:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course',\n  $defs: {\n    course: {\n      type: 'object',\n      description: 'A course from the courses app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the course. Looks like cors_XXX'\n        },\n        certificate_after_completion_enabled: {\n          type: 'boolean',\n          description: 'Whether the course will award its students a PDF certificate after completing all lessons'\n        },\n        chapters: {\n          type: 'array',\n          description: 'The chapters in this course',\n          items: {\n            type: 'object',\n            description: 'A chapter from the courses app',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the chapter. Looks like chap_XXX'\n              },\n              lessons: {\n                type: 'array',\n                description: 'The lessons in this chapter',\n                items: {\n                  type: 'object',\n                  description: 'A lesson from the courses app',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'The ID of the lesson'\n                    },\n                    lesson_type: {\n                      $ref: '#/$defs/lesson_types'\n                    },\n                    order: {\n                      type: 'integer',\n                      description: 'The order of the lesson within its chapter'\n                    },\n                    thumbnail: {\n                      type: 'object',\n                      description: 'The thumbnail for the lesson',\n                      properties: {\n                        url: {\n                          type: 'string',\n                          description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n                        }\n                      },\n                      required: [                        'url'\n                      ]\n                    },\n                    title: {\n                      type: 'string',\n                      description: 'The title of the lesson'\n                    },\n                    video_asset: {\n                      type: 'object',\n                      description: 'The associated Mux asset for video lessons',\n                      properties: {\n                        duration_seconds: {\n                          type: 'integer',\n                          description: 'The duration of the video in seconds'\n                        },\n                        signed_thumbnail_playback_token: {\n                          type: 'string',\n                          description: 'The signed thumbnail playback token of the Mux asset'\n                        }\n                      },\n                      required: [                        'duration_seconds',\n                        'signed_thumbnail_playback_token'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'lesson_type',\n                    'order',\n                    'thumbnail',\n                    'title',\n                    'video_asset'\n                  ]\n                }\n              },\n              order: {\n                type: 'integer',\n                description: 'The order of the chapter within its course'\n              },\n              title: {\n                type: 'string',\n                description: 'The title of the chapter'\n              }\n            },\n            required: [              'id',\n              'lessons',\n              'order',\n              'title'\n            ]\n          }\n        },\n        cover_image: {\n          type: 'string',\n          description: 'The URL of the course\\'s cover image, which is shown in course preview cards'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the course was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'A short description of the course'\n        },\n        language: {\n          $ref: '#/$defs/languages'\n        },\n        order: {\n          type: 'string',\n          description: 'The order of the course within its experience'\n        },\n        require_completing_lessons_in_order: {\n          type: 'boolean',\n          description: 'Whether the course requires students to complete the previous lesson before moving on to the next one'\n        },\n        tagline: {\n          type: 'string',\n          description: 'A short tagline for the course. It is displayed under the course title in the UI'\n        },\n        thumbnail: {\n          type: 'object',\n          description: 'The thumbnail for the course',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the attachment'\n            },\n            content_type: {\n              type: 'string',\n              description: 'The attachment\\'s content type (e.g., image/jpg, video/mp4)'\n            },\n            filename: {\n              type: 'string',\n              description: 'The name of the file'\n            },\n            optimized_url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            },\n            source_url: {\n              type: 'string',\n              description: 'The original URL of the attachment, such as a direct link to S3. This should never be displayed on the client and always passed to an Imgproxy transformer.'\n            }\n          },\n          required: [            'id',\n            'content_type',\n            'filename',\n            'optimized_url',\n            'source_url'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the course'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when the course was last updated',\n          format: 'date-time'\n        },\n        visibility: {\n          $ref: '#/$defs/course_visibilities'\n        }\n      },\n      required: [        'id',\n        'certificate_after_completion_enabled',\n        'chapters',\n        'cover_image',\n        'created_at',\n        'description',\n        'language',\n        'order',\n        'require_completing_lessons_in_order',\n        'tagline',\n        'thumbnail',\n        'title',\n        'updated_at',\n        'visibility'\n      ]\n    },\n    lesson_types: {\n      type: 'string',\n      description: 'The available types for a lesson',\n      enum: [        'text',\n        'video',\n        'pdf',\n        'multi',\n        'quiz',\n        'knowledge_check'\n      ]\n    },\n    languages: {\n      type: 'string',\n      description: 'The available languages for a course',\n      enum: [        'en',\n        'es',\n        'it',\n        'pt',\n        'de',\n        'fr',\n        'pl',\n        'ru',\n        'nl',\n        'ca',\n        'tr',\n        'sv',\n        'uk',\n        'no',\n        'fi',\n        'sk',\n        'el',\n        'cs',\n        'hr',\n        'da',\n        'ro',\n        'bg'\n      ]\n    },\n    course_visibilities: {\n      type: 'string',\n      description: 'The available visibilities for a course. Determines how / whether a course is visible to users.',\n      enum: [        'visible',\n        'hidden'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.courses.retrieve(id)));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
