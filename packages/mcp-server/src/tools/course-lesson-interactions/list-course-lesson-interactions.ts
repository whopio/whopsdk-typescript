// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'course_lesson_interactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/course_lesson_interactions',
  operationId: 'listCourseLessonInteraction',
};

export const tool: Tool = {
  name: 'list_course_lesson_interactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          completed: {\n            type: 'boolean'\n          },\n          created_at: {\n            type: 'integer'\n          },\n          lesson: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'title'\n            ]\n          },\n          user: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              username: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'name',\n              'username'\n            ]\n          }\n        },\n        required: [          'id',\n          'completed',\n          'created_at',\n          'lesson',\n          'user'\n        ]\n      }\n    },\n    page_info: {\n      type: 'object',\n      properties: {\n        end_cursor: {\n          type: 'string'\n        },\n        has_next_page: {\n          type: 'boolean'\n        },\n        has_previous_page: {\n          type: 'boolean'\n        },\n        start_cursor: {\n          type: 'string'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
      },
      before: {
        type: 'string',
      },
      completed: {
        type: 'boolean',
      },
      course_id: {
        type: 'string',
      },
      first: {
        type: 'integer',
      },
      last: {
        type: 'integer',
      },
      lesson_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
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

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.courseLessonInteractions.list(body)));
};

export default { metadata, tool, handler };
