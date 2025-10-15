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
  httpPath: '/chat_channels/{id}',
  operationId: 'retrieveChatChannel',
};

export const tool: Tool = {
  name: 'retrieve_chat_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a chat channel\n\nRequired permissions:\n - `chat:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/chat_channel',\n  $defs: {\n    chat_channel: {\n      type: 'object',\n      description: 'Represents a Chat feed',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        ban_media: {\n          type: 'boolean',\n          description: 'Whether or not media is banned in this chat'\n        },\n        ban_urls: {\n          type: 'boolean',\n          description: 'Whether or not URLs are banned in this chat'\n        },\n        banned_words: {\n          type: 'array',\n          description: 'List of banned words in this chat',\n          items: {\n            type: 'string',\n            description: 'Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.'\n          }\n        },\n        experience: {\n          type: 'object',\n          description: 'The experience for this chat',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique ID representing this experience'\n            },\n            name: {\n              type: 'string',\n              description: 'The written name of the description.'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        user_posts_cooldown_seconds: {\n          type: 'integer',\n          description: 'The number of seconds a user needs to wait before posting again, if any'\n        },\n        who_can_post: {\n          $ref: '#/$defs/who_can_post'\n        },\n        who_can_react: {\n          $ref: '#/$defs/who_can_react'\n        }\n      },\n      required: [        'id',\n        'ban_media',\n        'ban_urls',\n        'banned_words',\n        'experience',\n        'user_posts_cooldown_seconds',\n        'who_can_post',\n        'who_can_react'\n      ]\n    },\n    who_can_post: {\n      type: 'string',\n      description: 'Who can post on a chat feed',\n      enum: [        'everyone',\n        'admins'\n      ]\n    },\n    who_can_react: {\n      type: 'string',\n      description: 'Who can react on a chat feed',\n      enum: [        'everyone',\n        'no_one'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.chatChannels.retrieve(id)));
};

export default { metadata, tool, handler };
