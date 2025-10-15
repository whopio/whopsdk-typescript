// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists course lesson interactions\n\nRequired permissions:\n - `course_lesson_interaction:read`\n - `courses:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for LessonInteraction.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/course_lesson_interaction_list_item'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    course_lesson_interaction_list_item: {\n      type: 'object',\n      description: 'A lesson interaction tracking user progress in courses',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the lesson interaction'\n        },\n        completed: {\n          type: 'boolean',\n          description: 'Whether the lesson has been completed by the user'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'When the interaction was created'\n        },\n        lesson: {\n          type: 'object',\n          description: 'The lesson this interaction is for',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the lesson'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the lesson'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        user: {\n          type: 'object',\n          description: 'The user who interacted with the lesson',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'completed',\n        'created_at',\n        'lesson',\n        'user'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
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
      completed: {
        type: 'boolean',
        description: 'Whether the lesson has been completed by the user',
      },
      course_id: {
        type: 'string',
        description: 'The ID of the course to list course lesson interactions for',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      lesson_id: {
        type: 'string',
        description: 'The ID of the lesson to list course lesson interactions for',
      },
      user_id: {
        type: 'string',
        description: 'The ID of the user to list course lesson interactions for',
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
  const response = await client.courseLessonInteractions.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
