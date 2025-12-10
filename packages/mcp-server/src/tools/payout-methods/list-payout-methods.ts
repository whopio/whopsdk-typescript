// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payout_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payout_methods',
  operationId: 'listPayoutMethod',
};

export const tool: Tool = {
  name: 'list_payout_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists payout destinations for a company\n\nRequired permissions:\n - `payout:destination:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PayoutToken.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/payout_method_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    payout_method_list_response: {\n      type: 'object',\n      description: 'An object representing an user\\'s setup payout destination.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the payout token'\n        },\n        currency: {\n          type: 'string',\n          description: 'The currency code of the payout destination. This is the currency that payouts will be made in for this token.'\n        },\n        destination: {\n          type: 'object',\n          description: 'The payout destination associated with the payout token',\n          properties: {\n            category: {\n              type: 'string',\n              description: 'The category of the payout destination',\n              enum: [                'crypto',\n                'rtp',\n                'next_day_bank',\n                'bank_wire',\n                'digital_wallet',\n                'unknown'\n              ]\n            },\n            country_code: {\n              type: 'string',\n              description: 'The country code of the payout destination'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the payer associated with the payout destination'\n            }\n          },\n          required: [            'category',\n            'country_code',\n            'name'\n          ]\n        },\n        nickname: {\n          type: 'string',\n          description: 'An optional nickname for the payout token to help the user identify it. This is not used by the provider and is only for the user\\'s reference.'\n        }\n      },\n      required: [        'id',\n        'currency',\n        'destination',\n        'nickname'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The company ID to list payout methods for.',
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
  const response = await client.payoutMethods.list(body).asResponse();
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
