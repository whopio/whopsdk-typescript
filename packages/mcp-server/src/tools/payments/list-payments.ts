// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payments',
  operationId: 'listPayment',
};

export const tool: Tool = {
  name: 'list_payments',
  description:
    'Lists payments\n\nRequired permissions:\n - `payment:basic:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list payments for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      billing_reasons: {
        type: 'array',
        description: 'The billing reason for the payment',
        items: {
          type: 'string',
          description: 'The reason why a specific payment was billed',
          enum: [
            'subscription_create',
            'subscription_cycle',
            'subscription_update',
            'one_time',
            'manual',
            'subscription',
          ],
        },
      },
      created_after: {
        type: 'integer',
        description: 'The minimum creation date to filter by',
      },
      created_before: {
        type: 'integer',
        description: 'The maximum creation date to filter by',
      },
      currencies: {
        type: 'array',
        description: 'The currency of the payment.',
        items: {
          $ref: '#/$defs/currency',
        },
      },
      direction: {
        $ref: '#/$defs/direction',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      include_free: {
        type: 'boolean',
        description: 'Whether to include free payments.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      order: {
        type: 'string',
        description: 'The order to sort the results by.',
        enum: ['final_amount', 'created_at', 'paid_at'],
      },
      plan_ids: {
        type: 'array',
        description: 'A specific plan.',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      product_ids: {
        type: 'array',
        description: 'A specific product.',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      statuses: {
        type: 'array',
        description: 'The status of the payment.',
        items: {
          $ref: '#/$defs/receipt_status',
        },
      },
      substatuses: {
        type: 'array',
        description: 'The substatus of the payment.',
        items: {
          $ref: '#/$defs/friendly_receipt_status',
        },
      },
    },
    required: ['company_id'],
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
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
      receipt_status: {
        type: 'string',
        description: 'The status of a receipt',
        enum: ['draft', 'open', 'paid', 'pending', 'uncollectible', 'unresolved', 'void'],
      },
      friendly_receipt_status: {
        type: 'string',
        description: 'The friendly status of a receipt',
        enum: [
          'auto_refunded',
          'refunded',
          'partially_refunded',
          'dispute_warning',
          'open_resolution',
          'open_dispute',
          'failed',
          'price_too_low',
          'succeeded',
          'drafted',
          'uncollectible',
          'unresolved',
          'past_due',
          'pending',
          'incomplete',
          'canceled',
        ],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.payments.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
