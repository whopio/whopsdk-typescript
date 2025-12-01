// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

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
    'Creates a new transfer between ledger accounts\n\nRequired permissions:\n - `payout:transfer_funds`',
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
      metadata: {
        type: 'object',
        description: 'A hash of metadata to attach to the transfer.',
        additionalProperties: true,
      },
      notes: {
        type: 'string',
        description: 'Notes for the transfer. Maximum of 50 characters.',
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
          'cny',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.transfers.create(body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
