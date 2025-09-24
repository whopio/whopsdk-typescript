// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/invoices',
  operationId: 'listInvoice',
};

export const tool: Tool = {
  name: 'list_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'integer'\n          },\n          current_plan: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              base_currency: {\n                type: 'string',\n                enum: [                  'usd',\n                  'sgd',\n                  'inr',\n                  'aud',\n                  'brl',\n                  'cad',\n                  'dkk',\n                  'eur',\n                  'nok',\n                  'gbp',\n                  'sek',\n                  'chf',\n                  'hkd',\n                  'huf',\n                  'jpy',\n                  'mxn',\n                  'myr',\n                  'pln',\n                  'czk',\n                  'nzd',\n                  'aed',\n                  'eth',\n                  'ape',\n                  'cop',\n                  'ron',\n                  'thb',\n                  'bgn',\n                  'idr',\n                  'dop',\n                  'php',\n                  'try',\n                  'krw',\n                  'twd',\n                  'vnd',\n                  'pkr',\n                  'clp',\n                  'uyu',\n                  'ars',\n                  'zar',\n                  'dzd',\n                  'tnd',\n                  'mad',\n                  'kes',\n                  'kwd',\n                  'jod',\n                  'all',\n                  'xcd',\n                  'amd',\n                  'bsd',\n                  'bhd',\n                  'bob',\n                  'bam',\n                  'khr',\n                  'crc',\n                  'xof',\n                  'egp',\n                  'etb',\n                  'gmd',\n                  'ghs',\n                  'gtq',\n                  'gyd',\n                  'ils',\n                  'jmd',\n                  'mop',\n                  'mga',\n                  'mur',\n                  'mdl',\n                  'mnt',\n                  'nad',\n                  'ngn',\n                  'mkd',\n                  'omr',\n                  'pyg',\n                  'pen',\n                  'qar',\n                  'rwf',\n                  'sar',\n                  'rsd',\n                  'lkr',\n                  'tzs',\n                  'ttd',\n                  'uzs',\n                  'rub',\n                  'btc'\n                ]\n              },\n              formatted_price: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'base_currency',\n              'formatted_price'\n            ]\n          },\n          due_date: {\n            type: 'integer'\n          },\n          email_address: {\n            type: 'string'\n          },\n          fetch_invoice_token: {\n            type: 'string'\n          },\n          member: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              email: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              username: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'email',\n              'name',\n              'username'\n            ]\n          },\n          number: {\n            type: 'string'\n          },\n          status: {\n            type: 'string',\n            enum: [              'open',\n              'paid',\n              'past_due',\n              'void'\n            ]\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'current_plan',\n          'due_date',\n          'email_address',\n          'fetch_invoice_token',\n          'member',\n          'number',\n          'status'\n        ]\n      }\n    },\n    page_info: {\n      type: 'object',\n      properties: {\n        end_cursor: {\n          type: 'string'\n        },\n        has_next_page: {\n          type: 'boolean'\n        },\n        has_previous_page: {\n          type: 'boolean'\n        },\n        start_cursor: {\n          type: 'string'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
      },
      after: {
        type: 'string',
      },
      before: {
        type: 'string',
      },
      direction: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      filters: {
        type: 'object',
        properties: {
          access_pass_ids: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          collection_methods: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['send_invoice', 'charge_automatically'],
            },
          },
          statuses: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['open', 'paid', 'past_due', 'void'],
            },
          },
        },
      },
      first: {
        type: 'integer',
      },
      last: {
        type: 'integer',
      },
      order: {
        type: 'string',
        enum: ['id', 'created_at', 'due_date'],
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

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.list(body)));
};

export default { metadata, tool, handler };
