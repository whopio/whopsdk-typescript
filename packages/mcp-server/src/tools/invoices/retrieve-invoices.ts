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
  httpPath: '/invoices/{id}',
  operationId: 'retrieveInvoice',
};

export const tool: Tool = {
  name: 'retrieve_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an invoice by ID or token\n\nRequired permissions:\n - `invoice:basic:read`\n - `plan:basic:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice',\n  $defs: {\n    invoice: {\n      type: 'object',\n      description: 'A statement that defines an amount due by a customer.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the invoice.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The date the invoice was created.'\n        },\n        current_plan: {\n          type: 'object',\n          description: 'The plan that the invoice was created for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            },\n            currency: {\n              $ref: '#/$defs/currency'\n            },\n            formatted_price: {\n              type: 'string',\n              description: 'The formatted price (including currency) for the plan.'\n            }\n          },\n          required: [            'id',\n            'currency',\n            'formatted_price'\n          ]\n        },\n        due_date: {\n          type: 'integer',\n          description: 'The date the invoice is due.'\n        },\n        email_address: {\n          type: 'string',\n          description: 'The email address that the invoice was created for.'\n        },\n        fetch_invoice_token: {\n          type: 'string',\n          description: 'The token to fetch the invoice.'\n        },\n        number: {\n          type: 'string',\n          description: 'The number of the invoice.'\n        },\n        status: {\n          $ref: '#/$defs/invoice_status'\n        },\n        user: {\n          type: 'object',\n          description: 'The user that the invoice was created for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'current_plan',\n        'due_date',\n        'email_address',\n        'fetch_invoice_token',\n        'number',\n        'status',\n        'user'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    },\n    invoice_status: {\n      type: 'string',\n      description: 'The different statuses an invoice can be in',\n      enum: [        'open',\n        'paid',\n        'past_due',\n        'void'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.retrieve(id)));
};

export default { metadata, tool, handler };
