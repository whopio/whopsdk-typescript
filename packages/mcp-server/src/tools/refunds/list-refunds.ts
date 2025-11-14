// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'refunds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/refunds',
  operationId: 'listRefund',
};

export const tool: Tool = {
  name: 'list_refunds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists Refunds for a payment.\n\nRequired permissions:\n - `payment:basic:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for Refund.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/refund_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    refund_list_response: {\n      type: 'object',\n      description: 'An object representing a refund made on a payment.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the refund.'\n        },\n        amount: {\n          type: 'number',\n          description: 'The amount of the refund.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The time the refund was created.',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        payment: {\n          type: 'object',\n          description: 'The payment associated with the refund.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The payment ID'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        provider: {\n          $ref: '#/$defs/payment_provider'\n        },\n        provider_created_at: {\n          type: 'string',\n          description: 'The time the refund was created by the provider.',\n          format: 'date-time'\n        },\n        reference_status: {\n          $ref: '#/$defs/refund_reference_status'\n        },\n        reference_type: {\n          $ref: '#/$defs/refund_reference_type'\n        },\n        reference_value: {\n          type: 'string',\n          description: 'The value of the reference.'\n        },\n        status: {\n          $ref: '#/$defs/refund_status'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'currency',\n        'payment',\n        'provider',\n        'provider_created_at',\n        'reference_status',\n        'reference_type',\n        'reference_value',\n        'status'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc',\n        'cny'\n      ]\n    },\n    payment_provider: {\n      type: 'string',\n      description: 'The different payment providers.',\n      enum: [        'stripe',\n        'coinbase',\n        'paypal',\n        'apple',\n        'sezzle',\n        'splitit',\n        'platform_balance',\n        'multi_psp'\n      ]\n    },\n    refund_reference_status: {\n      type: 'string',\n      description: 'The status of the refund reference.',\n      enum: [        'available',\n        'pending',\n        'unavailable'\n      ]\n    },\n    refund_reference_type: {\n      type: 'string',\n      description: 'The type of refund reference that was made available by the payment provider.',\n      enum: [        'acquirer_reference_number',\n        'retrieval_reference_number',\n        'system_trace_audit_number'\n      ]\n    },\n    refund_status: {\n      type: 'string',\n      description: 'The different statuses for a Refund object',\n      enum: [        'pending',\n        'requires_action',\n        'succeeded',\n        'failed',\n        'canceled'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      payment_id: {
        type: 'string',
        description: 'The ID of the payment to list refunds for',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['payment_id'],
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
  const response = await client.refunds.list(body).asResponse();
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
