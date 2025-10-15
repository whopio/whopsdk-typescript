// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'ledger_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ledger_accounts/{id}',
  operationId: 'retrieveLedgerAccount',
};

export const tool: Tool = {
  name: 'retrieve_ledger_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a ledger account by ID\n\nRequired permissions:\n - `company:balance:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ledger_account_retrieve_response',\n  $defs: {\n    ledger_account_retrieve_response: {\n      type: 'object',\n      description: 'Represents a LedgerAccount.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the LedgerAccount.'\n        },\n        balances: {\n          type: 'array',\n          description: 'The balances associated with the account.',\n          items: {\n            type: 'object',\n            description: 'A cached balance for a LedgerAccount in respect to a currency.',\n            properties: {\n              balance: {\n                type: 'number',\n                description: 'The amount of the balance.'\n              },\n              currency: {\n                $ref: '#/$defs/currency'\n              },\n              pending_balance: {\n                type: 'number',\n                description: 'The amount of the balance that is pending.'\n              },\n              reserve_balance: {\n                type: 'number',\n                description: 'The amount of the balance that is reserved.'\n              }\n            },\n            required: [              'balance',\n              'currency',\n              'pending_balance',\n              'reserve_balance'\n            ]\n          }\n        },\n        ledger_account_audit_status: {\n          type: 'string',\n          description: 'The different statuses a LedgerAccountAudit can be',\n          enum: [            'reserves_imposed',\n            'requested_more_information'\n          ]\n        },\n        ledger_type: {\n          type: 'string',\n          description: 'The type of ledger account.',\n          enum: [            'primary',\n            'pool'\n          ]\n        },\n        owner: {\n          anyOf: [            {\n              type: 'object',\n              title: 'User',\n              description: 'An object representing a (sanitized) user of the site.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The internal ID of the user.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The name of the user from their Whop account.'\n                },\n                typename: {\n                  type: 'string',\n                  description: 'The typename of this object',\n                  enum: [                    'User'\n                  ]\n                },\n                username: {\n                  type: 'string',\n                  description: 'The username of the user from their Whop account.'\n                }\n              },\n              required: [                'id',\n                'name',\n                'typename',\n                'username'\n              ]\n            },\n            {\n              type: 'object',\n              title: 'Company',\n              description: 'An object representing a (sanitized) company.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The ID (tag) of the company.'\n                },\n                route: {\n                  type: 'string',\n                  description: 'The slug/route of the company on the Whop site.'\n                },\n                title: {\n                  type: 'string',\n                  description: 'The title of the company.'\n                },\n                typename: {\n                  type: 'string',\n                  description: 'The typename of this object',\n                  enum: [                    'Company'\n                  ]\n                }\n              },\n              required: [                'id',\n                'route',\n                'title',\n                'typename'\n              ]\n            }\n          ],\n          description: 'The owner of the ledger account.'\n        },\n        payments_approval_status: {\n          type: 'string',\n          description: 'The different approval statuses an account can have.',\n          enum: [            'pending',\n            'approved',\n            'monitoring',\n            'rejected'\n          ]\n        },\n        transfer_fee: {\n          type: 'number',\n          description: 'The fee for transfers, if applicable.'\n        }\n      },\n      required: [        'id',\n        'balances',\n        'ledger_account_audit_status',\n        'ledger_type',\n        'owner',\n        'payments_approval_status',\n        'transfer_fee'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    }\n  }\n}\n```",
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

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ledgerAccounts.retrieve(id)));
};

export default { metadata, tool, handler };
