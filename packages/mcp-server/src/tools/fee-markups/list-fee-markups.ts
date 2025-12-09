// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'fee_markups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fee_markups',
  operationId: 'listFeeMarkup',
};

export const tool: Tool = {
  name: 'list_fee_markups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists fee markups for a company.\n\nRequired permissions:\n - `company:update_child_fees`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for FeeMarkup.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/fee_markup_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    fee_markup_list_response: {\n      type: 'object',\n      description: 'Represents a fee markup configuration for a company',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the fee markup.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this fee markup was created.',\n          format: 'date-time'\n        },\n        fee_type: {\n          $ref: '#/$defs/fee_markup_type'\n        },\n        fixed_fee_usd: {\n          type: 'number',\n          description: 'The fixed fee in USD to charge (0-50).'\n        },\n        notes: {\n          type: 'string',\n          description: 'Internal notes about this fee markup.'\n        },\n        percentage_fee: {\n          type: 'number',\n          description: 'The percentage fee to charge (0-25).'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this fee markup was last updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'fee_type',\n        'fixed_fee_usd',\n        'notes',\n        'percentage_fee',\n        'updated_at'\n      ]\n    },\n    fee_markup_type: {\n      type: 'string',\n      description: 'The types of fee markups that can be configured',\n      enum: [        'crypto_withdrawal_markup',\n        'rtp_withdrawal_markup',\n        'next_day_bank_withdrawal_markup',\n        'bank_wire_withdrawal_markup',\n        'digital_wallet_withdrawal_markup'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description:
          'The ID (tag) of the company you want to list the fee markups for. If you pass your platform account, you will get the platform default markups.',
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
  const response = await client.feeMarkups.list(body).asResponse();
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
