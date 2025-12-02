// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messages',
  operationId: 'listMessage',
};

export const tool: Tool = {
  name: 'list_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists messages inside a channel\n\nRequired permissions:\n - `chat:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for DmsPost.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/message_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    message_list_response: {\n      type: 'object',\n      description: 'Represents a message in a DM channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the resource.'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the message in Markdown format'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp when the post was created',\n          format: 'date-time'\n        },\n        is_edited: {\n          type: 'boolean',\n          description: 'Whether the message has been edited'\n        },\n        is_pinned: {\n          type: 'boolean',\n          description: 'Whether this message is pinned'\n        },\n        message_type: {\n          $ref: '#/$defs/dms_post_types'\n        },\n        poll: {\n          type: 'object',\n          description: 'The poll for this message',\n          properties: {\n            options: {\n              type: 'array',\n              description: 'The options for the poll',\n              items: {\n                type: 'object',\n                description: 'Represents a single poll option',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'The ID of the poll option'\n                  },\n                  text: {\n                    type: 'string',\n                    description: 'The text of the poll option'\n                  }\n                },\n                required: [                  'id',\n                  'text'\n                ]\n              }\n            }\n          },\n          required: [            'options'\n          ]\n        },\n        poll_votes: {\n          type: 'array',\n          description: 'The reaction counts for this message',\n          items: {\n            type: 'object',\n            description: 'Represents a reaction count for a feed post',\n            properties: {\n              count: {\n                type: 'integer',\n                description: 'The number of users who reacted'\n              },\n              option_id: {\n                type: 'string',\n                description: 'The reaction that was used'\n              }\n            },\n            required: [              'count',\n              'option_id'\n            ]\n          }\n        },\n        reaction_counts: {\n          type: 'array',\n          description: 'The reaction counts for this message',\n          items: {\n            type: 'object',\n            description: 'Represents a reaction count for a feed post',\n            properties: {\n              count: {\n                type: 'integer',\n                description: 'The number of users who reacted'\n              },\n              emoji: {\n                type: 'string',\n                description: 'The emoji that was used in shortcode format (:heart:)'\n              }\n            },\n            required: [              'count',\n              'emoji'\n            ]\n          }\n        },\n        replying_to_message_id: {\n          type: 'string',\n          description: 'The ID of the message this is replying to, if applicable'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp when the post was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who sent this message',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        view_count: {\n          type: 'integer',\n          description: 'The number of times this message has been viewed'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'is_edited',\n        'is_pinned',\n        'message_type',\n        'poll',\n        'poll_votes',\n        'reaction_counts',\n        'replying_to_message_id',\n        'updated_at',\n        'user',\n        'view_count'\n      ]\n    },\n    dms_post_types: {\n      type: 'string',\n      description: 'The types of post',\n      enum: [        'regular',\n        'system',\n        'automated'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      channel_id: {
        type: 'string',
        description: 'The ID of the channel or the experience ID to list messages for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      direction: {
        $ref: '#/$defs/direction',
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
    required: ['channel_id'],
    $defs: {
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.messages.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
