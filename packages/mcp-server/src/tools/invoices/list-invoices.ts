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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists invoices\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for Invoice.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/invoice_list_item'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    invoice_list_item: {\n      type: 'object',\n      description: 'A statement that defines an amount due by a customer.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the invoice.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The date the invoice was created.'\n        },\n        current_plan: {\n          type: 'object',\n          description: 'The plan that the invoice was created for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            },\n            currency: {\n              $ref: '#/$defs/currency'\n            },\n            formatted_price: {\n              type: 'string',\n              description: 'The formatted price (including currency) for the plan.'\n            }\n          },\n          required: [            'id',\n            'currency',\n            'formatted_price'\n          ]\n        },\n        due_date: {\n          type: 'integer',\n          description: 'The date the invoice is due.'\n        },\n        email_address: {\n          type: 'string',\n          description: 'The email address that the invoice was created for.'\n        },\n        fetch_invoice_token: {\n          type: 'string',\n          description: 'The token to fetch the invoice.'\n        },\n        number: {\n          type: 'string',\n          description: 'The number of the invoice.'\n        },\n        status: {\n          $ref: '#/$defs/invoice_status'\n        },\n        user: {\n          type: 'object',\n          description: 'The user that the invoice was created for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'current_plan',\n        'due_date',\n        'email_address',\n        'fetch_invoice_token',\n        'number',\n        'status',\n        'user'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    },\n    invoice_status: {\n      type: 'string',\n      description: 'The different statuses an invoice can be in',\n      enum: [        'open',\n        'paid',\n        'past_due',\n        'void'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list invoices for',
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
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
      filters: {
        type: 'object',
        description: 'The filters to apply to the invoices',
        properties: {
          access_pass_ids: {
            type: 'array',
            description: 'The access pass IDs to filter the invoices by',
            items: {
              type: 'string',
              description:
                'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
            },
          },
          collection_methods: {
            type: 'array',
            description: 'The collection methods to filter the invoices by',
            items: {
              $ref: '#/$defs/collection_method',
            },
          },
          statuses: {
            type: 'array',
            description: 'The statuses to filter the invoices by',
            items: {
              $ref: '#/$defs/invoice_status',
            },
          },
        },
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
    $defs: {
      collection_method: {
        type: 'string',
        description: 'The method of collection for an invoice.',
        enum: ['send_invoice', 'charge_automatically'],
      },
      invoice_status: {
        type: 'string',
        description: 'The different statuses an invoice can be in',
        enum: ['open', 'paid', 'past_due', 'void'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.invoices.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
