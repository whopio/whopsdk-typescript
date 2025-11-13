// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_lessons',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/course_lessons',
  operationId: 'listCourseLesson',
};

export const tool: Tool = {
  name: 'list_course_lessons',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists lessons for a course or chapter\n\nRequired permissions:\n - `courses:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for Lesson.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/course_lesson_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    course_lesson_list_response: {\n      type: 'object',\n      description: 'A lesson from the courses app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the lesson'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the lesson'\n        },\n        days_from_course_start_until_unlock: {\n          type: 'integer',\n          description: 'Number of days from course start until the lesson is unlocked'\n        },\n        embed_id: {\n          type: 'string',\n          description: 'ID for the embed (YouTube video ID or Loom share ID)'\n        },\n        embed_type: {\n          $ref: '#/$defs/embed_type'\n        },\n        lesson_type: {\n          $ref: '#/$defs/lesson_types'\n        },\n        order: {\n          type: 'integer',\n          description: 'The order of the lesson within its chapter'\n        },\n        thumbnail: {\n          type: 'object',\n          description: 'The thumbnail for the lesson',\n          properties: {\n            url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            }\n          },\n          required: [            'url'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the lesson'\n        },\n        visibility: {\n          $ref: '#/$defs/lesson_visibilities'\n        }\n      },\n      required: [        'id',\n        'content',\n        'days_from_course_start_until_unlock',\n        'embed_id',\n        'embed_type',\n        'lesson_type',\n        'order',\n        'thumbnail',\n        'title',\n        'visibility'\n      ]\n    },\n    embed_type: {\n      type: 'string',\n      description: 'The type of embed for a lesson',\n      enum: [        'youtube',\n        'loom'\n      ]\n    },\n    lesson_types: {\n      type: 'string',\n      description: 'The available types for a lesson',\n      enum: [        'text',\n        'video',\n        'pdf',\n        'multi',\n        'quiz',\n        'knowledge_check'\n      ]\n    },\n    lesson_visibilities: {\n      type: 'string',\n      description: 'The available visibilities for a lesson. Determines how / whether a lesson is visible to users.',\n      enum: [        'visible',\n        'hidden'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      chapter_id: {
        type: 'string',
        description: 'The ID of the chapter (returns lessons only for this chapter)',
      },
      course_id: {
        type: 'string',
        description: 'The ID of the course (returns all lessons across all chapters)',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.courseLessons.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
