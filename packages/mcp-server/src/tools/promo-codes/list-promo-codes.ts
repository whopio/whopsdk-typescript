// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'promo_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/promo_codes',
  operationId: 'listPromoCode',
};

export const tool: Tool = {
  name: 'list_promo_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists promo codes for a company\n\nRequired permissions:\n - `promo_code:basic:read`\n - `access_pass:basic:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PromoCode.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/promo_code_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    promo_code_list_response: {\n      type: 'object',\n      description: 'An object representing a promo code for a plan.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the promo.'\n        },\n        amount_off: {\n          type: 'number',\n          description: 'The amount off (% or flat amount) for the promo.'\n        },\n        churned_users_only: {\n          type: 'boolean',\n          description: 'Restricts promo use to only users who have churned from the company before.'\n        },\n        code: {\n          type: 'string',\n          description: 'The specific code used to apply the promo at checkout.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the promo was created.',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        duration: {\n          $ref: '#/$defs/promo_duration'\n        },\n        existing_memberships_only: {\n          type: 'boolean',\n          description: 'Restricts promo use to only be applied to already purchased memberships.'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'The date/time of when the promo expires.',\n          format: 'date-time'\n        },\n        new_users_only: {\n          type: 'boolean',\n          description: 'Restricts promo use to only users who have never purchased from the company before.'\n        },\n        one_per_customer: {\n          type: 'boolean',\n          description: 'Restricts promo use to only be applied once per customer.'\n        },\n        product: {\n          type: 'object',\n          description: 'The access pass associated with the promo code.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        promo_duration_months: {\n          type: 'integer',\n          description: 'The number of months the promo is applied for.'\n        },\n        promo_type: {\n          $ref: '#/$defs/promo_type'\n        },\n        status: {\n          $ref: '#/$defs/promo_code_status'\n        },\n        stock: {\n          type: 'integer',\n          description: 'The quantity limit on the number of uses.'\n        },\n        unlimited_stock: {\n          type: 'boolean',\n          description: 'Whether or not the promo code has unlimited stock.'\n        },\n        uses: {\n          type: 'integer',\n          description: 'The amount of times the promo codes has been used.'\n        }\n      },\n      required: [        'id',\n        'amount_off',\n        'churned_users_only',\n        'code',\n        'created_at',\n        'currency',\n        'duration',\n        'existing_memberships_only',\n        'expires_at',\n        'new_users_only',\n        'one_per_customer',\n        'product',\n        'promo_duration_months',\n        'promo_type',\n        'status',\n        'stock',\n        'unlimited_stock',\n        'uses'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    },\n    promo_duration: {\n      type: 'string',\n      description: 'The duration setting for the promo code',\n      enum: [        'forever',\n        'once',\n        'repeating'\n      ]\n    },\n    promo_type: {\n      type: 'string',\n      description: 'The type of promo code used to discount a plan',\n      enum: [        'percentage',\n        'flat_amount'\n      ]\n    },\n    promo_code_status: {\n      type: 'string',\n      description: 'Statuses for promo codes',\n      enum: [        'active',\n        'inactive',\n        'archived'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list promo codes for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      plan_ids: {
        type: 'array',
        description: 'Filter promo codes by plan ID(s)',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      product_ids: {
        type: 'array',
        description: 'Filter promo codes by product ID(s)',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      status: {
        $ref: '#/$defs/promo_code_status',
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
      promo_code_status: {
        type: 'string',
        description: 'Statuses for promo codes',
        enum: ['active', 'inactive', 'archived'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.promoCodes.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
