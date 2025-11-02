// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Updates a course\n\nRequired permissions:\n - `courses:update`',
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
            title: 'AttachmentInputWithDirectUploadId',
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
            title: 'AttachmentInputWithId',
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.courses.update(id, body));
};

export default { metadata, tool, handler };
