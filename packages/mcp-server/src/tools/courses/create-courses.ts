// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

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
  description: 'Creates a new course module in an experience\n\nRequired permissions:\n - `courses:update`',
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
      certificate_after_completion_enabled: {
        type: 'boolean',
        description:
          'Whether the course will award its students a PDF certificate after completing all lessons',
      },
      cover_image: {
        type: 'string',
        description: 'The cover image URL of the course',
      },
      order: {
        type: 'string',
        description:
          'The decimal order position of the course within its experience. If not provided, it will be set to the next sequential order. Use fractional values (e.g., 1.5) to place between existing courses.',
      },
      require_completing_lessons_in_order: {
        type: 'boolean',
        description:
          'Whether the course requires students to complete the previous lesson before moving on to the next one',
      },
      tagline: {
        type: 'string',
        description: 'The tagline of the course',
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
      visibility: {
        $ref: '#/$defs/course_visibilities',
      },
    },
    required: ['experience_id', 'title'],
    $defs: {
      course_visibilities: {
        type: 'string',
        description:
          'The available visibilities for a course. Determines how / whether a course is visible to users.',
        enum: ['visible', 'hidden'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.courses.create(body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
