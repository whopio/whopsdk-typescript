// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'support_channels',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/support_channels/{id}',
  operationId: 'retrieveSupportChannel',
};

export const tool: Tool = {
  name: 'retrieve_support_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a support channel\n\nRequired permissions:\n - `support_chat:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/support_channel',\n  $defs: {\n    support_channel: {\n      type: 'object',\n      description: 'Represents a DM channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        company_id: {\n          type: 'string',\n          description: 'The bot ID if this is a support chat'\n        },\n        custom_name: {\n          type: 'string',\n          description: 'The custom name of the DM channel, if any'\n        },\n        customer_user: {\n          type: 'object',\n          description: 'The customer user if this is a support chat',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        last_message_at: {\n          type: 'integer',\n          description: 'When the last message was sent'\n        },\n        resolved_at: {\n          type: 'integer',\n          description: 'When the support ticket was resolved (null if unresolved)'\n        }\n      },\n      required: [        'id',\n        'company_id',\n        'custom_name',\n        'customer_user',\n        'last_message_at',\n        'resolved_at'\n      ]\n    }\n  }\n}\n```",
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

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.supportChannels.retrieve(id)));
};

export default { metadata, tool, handler };
