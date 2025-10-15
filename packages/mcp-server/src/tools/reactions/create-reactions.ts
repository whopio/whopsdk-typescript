// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'reactions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/reactions',
  operationId: 'createReaction',
};

export const tool: Tool = {
  name: 'create_reactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new reaction\n\nRequired permissions:\n - `chat:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/reaction',\n  $defs: {\n    reaction: {\n      type: 'object',\n      description: 'Represents a reaction to a feed post',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        emoji: {\n          type: 'string',\n          description: 'The emoji that was used in shortcode format (:heart:)'\n        },\n        resource_id: {\n          type: 'string',\n          description: 'The ID of the post this reaction belongs to'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who reacted to the post',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'emoji',\n        'resource_id',\n        'user'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      resource_id: {
        type: 'string',
        description: 'The ID of the post or message to react to.',
      },
      emoji: {
        type: 'string',
        description:
          "The emoji to react with (e.g., :heart: or '😀'). It will be ignored in forums, as everything will be :heart:",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['resource_id'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.reactions.create(body)));
};

export default { metadata, tool, handler };
