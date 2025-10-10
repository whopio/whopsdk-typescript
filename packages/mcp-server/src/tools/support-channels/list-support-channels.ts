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
  httpPath: '/support_channels',
  operationId: 'listSupportChannel',
};

export const tool: Tool = {
  name: 'list_support_channels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists chat channels inside a company\n\nRequired permissions:\n - `support_chat:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for DmsFeed.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/support_channel_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    support_channel_list_response: {\n      type: 'object',\n      description: 'Represents a DM channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        company_id: {\n          type: 'string',\n          description: 'The bot ID if this is a support chat'\n        },\n        custom_name: {\n          type: 'string',\n          description: 'The custom name of the DM channel, if any'\n        },\n        customer_user: {\n          type: 'object',\n          description: 'The customer user if this is a support chat',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        last_message_at: {\n          type: 'integer',\n          description: 'When the last message was sent'\n        },\n        resolved_at: {\n          type: 'integer',\n          description: 'When the support ticket was resolved (null if unresolved)'\n        }\n      },\n      required: [        'id',\n        'company_id',\n        'custom_name',\n        'customer_user',\n        'last_message_at',\n        'resolved_at'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
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
      open: {
        type: 'boolean',
        description:
          'Filter for tickets where customer sent the last message (needs response) AND not resolved. Set to true to only return open channels, false to only return resolved channels.',
      },
      order: {
        type: 'string',
        description: 'Sort options for message channels',
        enum: ['created_at', 'last_post_sent_at'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id'],
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

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.supportChannels.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
