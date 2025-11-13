// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'transfers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/transfers',
  operationId: 'listTransfer',
};

export const tool: Tool = {
  name: 'list_transfers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists transfers\n\nRequired permissions:\n - `payout:transfer:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for CreditTransactionTransfer.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/transfer_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    transfer_list_response: {\n      type: 'object',\n      description: 'Credit Transaction Transfer',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the credit transaction transfer'\n        },\n        amount: {\n          type: 'number',\n          description: 'The amount of the credit transaction transfer'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp when the credit transaction transfer was created',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        destination_ledger_account_id: {\n          type: 'string',\n          description: 'The ID of the destination ledger account'\n        },\n        fee_amount: {\n          type: 'number',\n          description: 'The decimal fee of the credit transaction transfer'\n        },\n        metadata: {\n          type: 'object',\n          description: 'A hash of metadata attached to the transfer',\n          additionalProperties: true\n        },\n        notes: {\n          type: 'string',\n          description: 'The notes of the credit transaction transfer'\n        },\n        origin_ledger_account_id: {\n          type: 'string',\n          description: 'The ID of the origin ledger account'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'currency',\n        'destination_ledger_account_id',\n        'fee_amount',\n        'metadata',\n        'notes',\n        'origin_ledger_account_id'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc',\n        'cny'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      destination_id: {
        type: 'string',
        description:
          'Filter transfers to only those that were sent to this destination account. (user_xxx, biz_xxx, ldgr_xxx)',
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
      order: {
        type: 'string',
        description: 'Which columns can be used to sort.',
        enum: ['amount', 'created_at'],
      },
      origin_id: {
        type: 'string',
        description:
          'Filter transfers to only those that were sent from this origin account. (user_xxx, biz_xxx, ldgr_xxx)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
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
  const response = await client.transfers.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
