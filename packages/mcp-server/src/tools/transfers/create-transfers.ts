// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'transfers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/transfers',
  operationId: 'createTransfer',
};

export const tool: Tool = {
  name: 'create_transfers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new transfer between ledger accounts\n\nRequired permissions:\n - `payout:transfer_funds`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transfer',\n  $defs: {\n    transfer: {\n      type: 'object',\n      description: 'Credit Transaction Transfer',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the credit transaction transfer'\n        },\n        amount: {\n          type: 'number',\n          description: 'The amount of the credit transaction transfer'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The timestamp when the credit transaction transfer was created'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        destination: {\n          anyOf: [            {\n              type: 'object',\n              title: 'User',\n              description: 'An object representing a (sanitized) user of the site.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The internal ID of the user.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The name of the user from their Whop account.'\n                },\n                typename: {\n                  type: 'string',\n                  description: 'The typename of this object',\n                  enum: [                    'User'\n                  ]\n                },\n                username: {\n                  type: 'string',\n                  description: 'The username of the user from their Whop account.'\n                }\n              },\n              required: [                'id',\n                'name',\n                'typename',\n                'username'\n              ]\n            },\n            {\n              type: 'object',\n              title: 'Company',\n              description: 'An object representing a (sanitized) company.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The ID (tag) of the company.'\n                },\n                route: {\n                  type: 'string',\n                  description: 'The slug/route of the company on the Whop site.'\n                },\n                title: {\n                  type: 'string',\n                  description: 'The title of the company.'\n                },\n                typename: {\n                  type: 'string',\n                  description: 'The typename of this object',\n                  enum: [                    'Company'\n                  ]\n                }\n              },\n              required: [                'id',\n                'route',\n                'title',\n                'typename'\n              ]\n            }\n          ],\n          description: 'The recipient of the credit transaction transfer'\n        },\n        destination_ledger_account_id: {\n          type: 'string',\n          description: 'The ID of the destination ledger account'\n        },\n        fee_amount: {\n          type: 'number',\n          description: 'The decimal fee of the credit transaction transfer'\n        },\n        notes: {\n          type: 'string',\n          description: 'The notes of the credit transaction transfer'\n        },\n        origin: {\n          anyOf: [            {\n              type: 'object',\n              title: 'User',\n              description: 'An object representing a (sanitized) user of the site.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The internal ID of the user.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The name of the user from their Whop account.'\n                },\n                typename: {\n                  type: 'string',\n                  description: 'The typename of this object',\n                  enum: [                    'User'\n                  ]\n                },\n                username: {\n                  type: 'string',\n                  description: 'The username of the user from their Whop account.'\n                }\n              },\n              required: [                'id',\n                'name',\n                'typename',\n                'username'\n              ]\n            },\n            {\n              type: 'object',\n              title: 'Company',\n              description: 'An object representing a (sanitized) company.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The ID (tag) of the company.'\n                },\n                route: {\n                  type: 'string',\n                  description: 'The slug/route of the company on the Whop site.'\n                },\n                title: {\n                  type: 'string',\n                  description: 'The title of the company.'\n                },\n                typename: {\n                  type: 'string',\n                  description: 'The typename of this object',\n                  enum: [                    'Company'\n                  ]\n                }\n              },\n              required: [                'id',\n                'route',\n                'title',\n                'typename'\n              ]\n            }\n          ],\n          description: 'The sender of the credit transaction transfer'\n        },\n        origin_ledger_account_id: {\n          type: 'string',\n          description: 'The ID of the origin ledger account'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created_at',\n        'currency',\n        'destination',\n        'destination_ledger_account_id',\n        'fee_amount',\n        'notes',\n        'origin',\n        'origin_ledger_account_id'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'number',
        description: 'The amount to withdraw',
      },
      currency: {
        $ref: '#/$defs/currency',
      },
      destination_id: {
        type: 'string',
        description:
          'The ID of the destination account which will receive the funds (either a User ID, Company ID, or LedgerAccount ID)',
      },
      origin_id: {
        type: 'string',
        description:
          'The ID of the origin account which will send the funds (either a User ID, Company ID, or LedgerAccount ID)',
      },
      idempotence_key: {
        type: 'string',
        description: 'A unique key to ensure idempotence. Use a UUID or similar.',
      },
      notes: {
        type: 'string',
        description: 'Notes for the transfer. Maximum of 50 characters.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['amount', 'currency', 'destination_id', 'origin_id'],
    $defs: {
      currency: {
        type: 'string',
        description: 'The available currencies on the platform',
        enum: [
          'usd',
          'sgd',
          'inr',
          'aud',
          'brl',
          'cad',
          'dkk',
          'eur',
          'nok',
          'gbp',
          'sek',
          'chf',
          'hkd',
          'huf',
          'jpy',
          'mxn',
          'myr',
          'pln',
          'czk',
          'nzd',
          'aed',
          'eth',
          'ape',
          'cop',
          'ron',
          'thb',
          'bgn',
          'idr',
          'dop',
          'php',
          'try',
          'krw',
          'twd',
          'vnd',
          'pkr',
          'clp',
          'uyu',
          'ars',
          'zar',
          'dzd',
          'tnd',
          'mad',
          'kes',
          'kwd',
          'jod',
          'all',
          'xcd',
          'amd',
          'bsd',
          'bhd',
          'bob',
          'bam',
          'khr',
          'crc',
          'xof',
          'egp',
          'etb',
          'gmd',
          'ghs',
          'gtq',
          'gyd',
          'ils',
          'jmd',
          'mop',
          'mga',
          'mur',
          'mdl',
          'mnt',
          'nad',
          'ngn',
          'mkd',
          'omr',
          'pyg',
          'pen',
          'qar',
          'rwf',
          'sar',
          'rsd',
          'lkr',
          'tzs',
          'ttd',
          'uzs',
          'rub',
          'btc',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.transfers.create(body)));
};

export default { metadata, tool, handler };
