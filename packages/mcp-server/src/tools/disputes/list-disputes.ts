// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'disputes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/disputes',
  operationId: 'listDispute',
};

export const tool: Tool = {
  name: 'list_disputes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists disputes the current actor has access to\n\nRequired permissions:\n - `payment:dispute:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for Dispute.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/dispute_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    dispute_list_response: {\n      type: 'object',\n      description: 'An object representing a dispute against a company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the dispute.'\n        },\n        amount: {\n          type: 'number',\n          description: 'The amount of the dispute (formatted).'\n        },\n        company: {\n          type: 'object',\n          description: 'The company the dispute is against.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the company'\n            },\n            title: {\n              type: 'string',\n              description: 'The written name of the company.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'When it was made.',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Whether or not the dispute data can be edited.'\n        },\n        needs_response_by: {\n          type: 'string',\n          description: 'The last date the dispute is allow to be submitted by.',\n          format: 'date-time'\n        },\n        payment: {\n          type: 'object',\n          description: 'The payment that got disputed',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The payment ID'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        plan: {\n          type: 'object',\n          description: 'The plan that got disputed',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        product: {\n          type: 'object',\n          description: 'The product that got disputed',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        reason: {\n          type: 'string',\n          description: 'The reason for the dispute'\n        },\n        status: {\n          $ref: '#/$defs/dispute_statuses'\n        },\n        visa_rdr: {\n          type: 'boolean',\n          description: 'Whether or not the dispute is a Visa Rapid Dispute Resolution.'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'company',\n        'created_at',\n        'currency',\n        'editable',\n        'needs_response_by',\n        'payment',\n        'plan',\n        'product',\n        'reason',\n        'status',\n        'visa_rdr'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc',\n        'cny'\n      ]\n    },\n    dispute_statuses: {\n      type: 'string',\n      description: 'The possible statuses of a dispute',\n      enum: [        'warning_needs_response',\n        'warning_under_review',\n        'warning_closed',\n        'needs_response',\n        'under_review',\n        'won',\n        'lost',\n        'closed',\n        'other'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list disputes for',
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
  const response = await client.disputes.list(body).asResponse();
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
