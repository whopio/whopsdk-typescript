// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_lessons',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/course_lessons',
  operationId: 'createCourseLesson',
};

export const tool: Tool = {
  name: 'create_course_lessons',
  description: 'Creates a new course lesson\n\nRequired permissions:\n - `courses:update`',
  inputSchema: {
    type: 'object',
    properties: {
      chapter_id: {
        type: 'string',
        description: 'The ID of the chapter to create the lesson in',
      },
      lesson_type: {
        $ref: '#/$defs/lesson_types',
      },
      content: {
        type: 'string',
        description: 'The content of the lesson',
      },
      days_from_course_start_until_unlock: {
        type: 'integer',
        description: 'Days from course start until unlock',
      },
      embed_id: {
        type: 'string',
        description: 'ID for the embed (YouTube video ID or Loom share ID)',
      },
      embed_type: {
        $ref: '#/$defs/embed_type',
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
        description: 'The thumbnail for the lesson in png, jpeg, or gif format',
      },
      title: {
        type: 'string',
        description: 'The title of the lesson',
      },
    },
    required: ['chapter_id', 'lesson_type'],
    $defs: {
      lesson_types: {
        type: 'string',
        description: 'The available types for a lesson',
        enum: ['text', 'video', 'pdf', 'multi', 'quiz', 'knowledge_check'],
      },
      embed_type: {
        type: 'string',
        description: 'The type of embed for a lesson',
        enum: ['youtube', 'loom'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.courseLessons.create(body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
