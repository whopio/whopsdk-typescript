// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'promo_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/promo_codes/{id}',
  operationId: 'retrievePromoCode',
};

export const tool: Tool = {
  name: 'retrieve_promo_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a promo code by ID\n\nRequired permissions:\n - `promo_code:basic:read`\n - `access_pass:basic:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/promo_code',\n  $defs: {\n    promo_code: {\n      type: 'object',\n      description: 'An object representing a promo code for a plan.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the promo.'\n        },\n        amount_off: {\n          type: 'number',\n          description: 'The amount off (% or flat amount) for the promo.'\n        },\n        churned_users_only: {\n          type: 'boolean',\n          description: 'Restricts promo use to only users who have churned from the company before.'\n        },\n        code: {\n          type: 'string',\n          description: 'The specific code used to apply the promo at checkout.'\n        },\n        company: {\n          type: 'object',\n          description: 'The company for the promo code.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the company'\n            },\n            title: {\n              type: 'string',\n              description: 'The written name of the company.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the promo was created.',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        duration: {\n          $ref: '#/$defs/promo_duration'\n        },\n        existing_memberships_only: {\n          type: 'boolean',\n          description: 'Restricts promo use to only be applied to already purchased memberships.'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'The date/time of when the promo expires.',\n          format: 'date-time'\n        },\n        new_users_only: {\n          type: 'boolean',\n          description: 'Restricts promo use to only users who have never purchased from the company before.'\n        },\n        one_per_customer: {\n          type: 'boolean',\n          description: 'Restricts promo use to only be applied once per customer.'\n        },\n        product: {\n          type: 'object',\n          description: 'The product this promo code applies to',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        promo_duration_months: {\n          type: 'integer',\n          description: 'The number of months the promo is applied for.'\n        },\n        promo_type: {\n          $ref: '#/$defs/promo_type'\n        },\n        status: {\n          $ref: '#/$defs/promo_code_status'\n        },\n        stock: {\n          type: 'integer',\n          description: 'The quantity limit on the number of uses.'\n        },\n        unlimited_stock: {\n          type: 'boolean',\n          description: 'Whether or not the promo code has unlimited stock.'\n        },\n        uses: {\n          type: 'integer',\n          description: 'The amount of times the promo codes has been used.'\n        }\n      },\n      required: [        'id',\n        'amount_off',\n        'churned_users_only',\n        'code',\n        'company',\n        'created_at',\n        'currency',\n        'duration',\n        'existing_memberships_only',\n        'expires_at',\n        'new_users_only',\n        'one_per_customer',\n        'product',\n        'promo_duration_months',\n        'promo_type',\n        'status',\n        'stock',\n        'unlimited_stock',\n        'uses'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc',\n        'cny'\n      ]\n    },\n    promo_duration: {\n      type: 'string',\n      description: 'The duration setting for the promo code',\n      enum: [        'forever',\n        'once',\n        'repeating'\n      ]\n    },\n    promo_type: {\n      type: 'string',\n      description: 'The type of promo code used to discount a plan',\n      enum: [        'percentage',\n        'flat_amount'\n      ]\n    },\n    promo_code_status: {\n      type: 'string',\n      description: 'Statuses for promo codes',\n      enum: [        'active',\n        'inactive',\n        'archived'\n      ]\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.promoCodes.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
