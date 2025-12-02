// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'withdrawals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/withdrawals',
  operationId: 'listWithdrawal',
};

export const tool: Tool = {
  name: 'list_withdrawals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists withdrawals\n\nRequired permissions:\n - `payout:withdrawal:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicWithdrawal.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/withdrawal_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    withdrawal_list_response: {\n      type: 'object',\n      description: 'A withdrawal request.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Internal ID of the withdrawal request.'\n        },\n        amount: {\n          type: 'number',\n          description: 'How much money was attempted to be withdrawn, in a float type.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the withdrawal request was created.',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        fee_amount: {\n          type: 'number',\n          description: 'The fee amount that was charged for the withdrawal. This is in the same currency as the withdrawal amount.'\n        },\n        fee_type: {\n          $ref: '#/$defs/withdrawal_fee_types'\n        },\n        speed: {\n          $ref: '#/$defs/withdrawal_speeds'\n        },\n        status: {\n          $ref: '#/$defs/withdrawal_status'\n        },\n        withdrawal_type: {\n          $ref: '#/$defs/withdrawal_types'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'currency',\n        'fee_amount',\n        'fee_type',\n        'speed',\n        'status',\n        'withdrawal_type'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc',\n        'cny'\n      ]\n    },\n    withdrawal_fee_types: {\n      type: 'string',\n      description: 'The different fee types for a withdrawal.',\n      enum: [        'exclusive',\n        'inclusive'\n      ]\n    },\n    withdrawal_speeds: {\n      type: 'string',\n      description: 'The different speeds of withdrawals',\n      enum: [        'standard',\n        'instant'\n      ]\n    },\n    withdrawal_status: {\n      type: 'string',\n      description: 'The status of a withdrawal request',\n      enum: [        'requested',\n        'awaiting_payment',\n        'in_transit',\n        'completed',\n        'failed',\n        'canceled',\n        'denied'\n      ]\n    },\n    withdrawal_types: {\n      type: 'string',\n      description: 'The types of withdrawals',\n      enum: [        'regular',\n        'clawback'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list withdrawals for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      created_after: {
        type: 'string',
        description: 'The minimum creation date to filter by',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'The maximum creation date to filter by',
        format: 'date-time',
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

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.withdrawals.list(body).asResponse();
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
