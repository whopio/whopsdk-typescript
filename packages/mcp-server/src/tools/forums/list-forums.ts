// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'forums',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/forums',
  operationId: 'listForum',
};

export const tool: Tool = {
  name: 'list_forums',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists forums inside a company\n\nRequired permissions:\n - `forum:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for ForumFeed.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/forum_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    forum_list_response: {\n      type: 'object',\n      description: 'Represents a forum feed',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        email_notification_preference: {\n          $ref: '#/$defs/email_notification_preferences'\n        },\n        experience: {\n          type: 'object',\n          description: 'The experience for this forum',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique ID representing this experience'\n            },\n            name: {\n              type: 'string',\n              description: 'The written name of the description.'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        who_can_comment: {\n          $ref: '#/$defs/who_can_comment_types'\n        },\n        who_can_post: {\n          $ref: '#/$defs/who_can_post_types'\n        }\n      },\n      required: [        'id',\n        'email_notification_preference',\n        'experience',\n        'who_can_comment',\n        'who_can_post'\n      ]\n    },\n    email_notification_preferences: {\n      type: 'string',\n      description: 'Email notification preference option for a forum feed',\n      enum: [        'all_admin_posts',\n        'only_weekly_summary',\n        'none'\n      ]\n    },\n    who_can_comment_types: {\n      type: 'string',\n      description: 'Who can comment on a forum feed',\n      enum: [        'everyone',\n        'admins'\n      ]\n    },\n    who_can_post_types: {\n      type: 'string',\n      description: 'Who can post on a forum feed',\n      enum: [        'everyone',\n        'admins'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list forums for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      product_id: {
        type: 'string',
        description: 'If provided, only forums connected to this product are returned',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.forums.list(body).asResponse();
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
