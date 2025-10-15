// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'chat_channels',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/chat_channels',
  operationId: 'listChatChannel',
};

export const tool: Tool = {
  name: 'list_chat_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists chat channels inside a company\n\nRequired permissions:\n - `chat:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for ChatFeed.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/chat_channel_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    chat_channel_list_response: {\n      type: 'object',\n      description: 'Represents a Chat feed',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        ban_media: {\n          type: 'boolean',\n          description: 'Whether or not media is banned in this chat'\n        },\n        ban_urls: {\n          type: 'boolean',\n          description: 'Whether or not URLs are banned in this chat'\n        },\n        banned_words: {\n          type: 'array',\n          description: 'List of banned words in this chat',\n          items: {\n            type: 'string',\n            description: 'Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.'\n          }\n        },\n        experience: {\n          type: 'object',\n          description: 'The experience for this chat',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique ID representing this experience'\n            },\n            name: {\n              type: 'string',\n              description: 'The written name of the description.'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        user_posts_cooldown_seconds: {\n          type: 'integer',\n          description: 'The number of seconds a user needs to wait before posting again, if any'\n        },\n        who_can_post: {\n          $ref: '#/$defs/who_can_post'\n        },\n        who_can_react: {\n          $ref: '#/$defs/who_can_react'\n        }\n      },\n      required: [        'id',\n        'ban_media',\n        'ban_urls',\n        'banned_words',\n        'experience',\n        'user_posts_cooldown_seconds',\n        'who_can_post',\n        'who_can_react'\n      ]\n    },\n    who_can_post: {\n      type: 'string',\n      description: 'Who can post on a chat feed',\n      enum: [        'everyone',\n        'admins'\n      ]\n    },\n    who_can_react: {\n      type: 'string',\n      description: 'Who can react on a chat feed',\n      enum: [        'everyone',\n        'no_one'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list chat channels for',
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
        description: 'If provided, only chat channels connected to this product are returned',
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
  const response = await client.chatChannels.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
