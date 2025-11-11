// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'promo_codes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/promo_codes',
  operationId: 'createPromoCode',
};

export const tool: Tool = {
  name: 'create_promo_codes',
  description:
    'Create a new promo code for a product or plan\n\nRequired permissions:\n - `promo_code:create`\n - `access_pass:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      amount_off: {
        type: 'number',
        description: 'The amount off (% or flat amount) for the promo.',
      },
      base_currency: {
        $ref: '#/$defs/currency',
      },
      code: {
        type: 'string',
        description: 'The specific code used to apply the promo at checkout.',
      },
      company_id: {
        type: 'string',
        description: 'The id of the company to create the promo code for.',
      },
      new_users_only: {
        type: 'boolean',
        description: 'Restricts promo use to only users who have never purchased from the company before.',
      },
      promo_duration_months: {
        type: 'integer',
        description: 'The number of months this promo code is applied and valid for.',
      },
      promo_type: {
        $ref: '#/$defs/promo_type',
      },
      churned_users_only: {
        type: 'boolean',
        description: 'Restricts promo use to only users who have churned from the company before.',
      },
      existing_memberships_only: {
        type: 'boolean',
        description: 'Whether this promo code is for existing memberships only (cancelations)',
      },
      expires_at: {
        type: 'string',
        description: 'The date/time of when the promo expires.',
        format: 'date-time',
      },
      one_per_customer: {
        type: 'boolean',
        description: 'Restricts promo use to only be applied once per customer.',
      },
      plan_ids: {
        type: 'array',
        description:
          'The IDs of the plans that the promo code applies to. If product_id is provided, it will only apply to plans attached to that product',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      product_id: {
        type: 'string',
        description:
          'The product to lock the promo code to, if any. If provided will filter out any plan ids not attached to this product',
      },
      stock: {
        type: 'integer',
        description: 'The quantity limit on the number of uses.',
      },
      unlimited_stock: {
        type: 'boolean',
        description: 'Whether or not the promo code should have unlimited stock.',
      },
    },
    required: [
      'amount_off',
      'base_currency',
      'code',
      'company_id',
      'new_users_only',
      'promo_duration_months',
      'promo_type',
    ],
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
      promo_type: {
        type: 'string',
        description: 'The type of promo code used to discount a plan',
        enum: ['percentage', 'flat_amount'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.promoCodes.create(body));
};

export default { metadata, tool, handler };
