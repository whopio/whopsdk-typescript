// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'support_channels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/support_channels',
  operationId: 'createSupportChannel',
};

export const tool: Tool = {
  name: 'create_support_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new support channel for a user in a company. If one already exists, it will return the existing one.\n\nRequired permissions:\n - `support_chat:create`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/support_channel',\n  $defs: {\n    support_channel: {\n      type: 'object',\n      description: 'Represents a DM channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        company_id: {\n          type: 'string',\n          description: 'The bot ID if this is a support chat'\n        },\n        custom_name: {\n          type: 'string',\n          description: 'The custom name of the DM channel, if any'\n        },\n        customer_user: {\n          type: 'object',\n          description: 'The customer user if this is a support chat',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        last_message_at: {\n          type: 'string',\n          description: 'When the last message was sent',\n          format: 'date-time'\n        },\n        resolved_at: {\n          type: 'string',\n          description: 'When the support ticket was resolved (null if unresolved)',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'company_id',\n        'custom_name',\n        'customer_user',\n        'last_message_at',\n        'resolved_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to create the support chat in',
      },
      user_id: {
        type: 'string',
        description: 'The ID of the user to create the support chat for',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id', 'user_id'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.supportChannels.create(body)));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
