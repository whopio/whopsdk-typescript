// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'checkout_configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/checkout_configurations/{id}',
  operationId: 'retrieveCheckoutConfiguration',
};

export const tool: Tool = {
  name: 'retrieve_checkout_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a checkout configuration by ID\n\nRequired permissions:\n - `checkout_configuration:basic:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/checkout_configuration',\n  $defs: {\n    checkout_configuration: {\n      type: 'object',\n      description: '\\n        A checkout configuration object.\\n        Can be used to create a reusable custom configuration for a checkout, including attaching plans, affiliates and custom metadata to the checkout.\\n        This configuration can be re-used by multiple users.\\n        All successful payments and memberships resulting from a checkout will contain the passed metadata.\\n      ',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the checkout configuration'\n        },\n        affiliate_code: {\n          type: 'string',\n          description: 'The affiliate code to use for the checkout configuration'\n        },\n        company_id: {\n          type: 'string',\n          description: 'The ID of the company to use for the checkout configuration'\n        },\n        metadata: {\n          type: 'object',\n          description: 'The metadata to use for the checkout configuration',\n          additionalProperties: true\n        },\n        plan: {\n          type: 'object',\n          description: 'The plan to use for the checkout configuration',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            },\n            billing_period: {\n              type: 'integer',\n              description: 'The interval at which the plan charges (renewal plans).'\n            },\n            currency: {\n              $ref: '#/$defs/currency'\n            },\n            expiration_days: {\n              type: 'integer',\n              description: 'The interval at which the plan charges (expiration plans).'\n            },\n            initial_price: {\n              type: 'number',\n              description: 'The price a person has to pay for a plan on the initial purchase.'\n            },\n            plan_type: {\n              $ref: '#/$defs/plan_type'\n            },\n            release_method: {\n              $ref: '#/$defs/release_method'\n            },\n            renewal_price: {\n              type: 'number',\n              description: 'The price a person has to pay for a plan on the renewal purchase.'\n            },\n            trial_period_days: {\n              type: 'integer',\n              description: 'The number of free trial days added before a renewal plan.'\n            },\n            visibility: {\n              $ref: '#/$defs/visibility'\n            }\n          },\n          required: [            'id',\n            'billing_period',\n            'currency',\n            'expiration_days',\n            'initial_price',\n            'plan_type',\n            'release_method',\n            'renewal_price',\n            'trial_period_days',\n            'visibility'\n          ]\n        },\n        purchase_url: {\n          type: 'string',\n          description: 'A URL you can send to customers to complete a checkout. It looks like `/checkout/plan_xxxx?session={id}`'\n        },\n        redirect_url: {\n          type: 'string',\n          description: 'The URL to redirect the user to after the checkout configuration is created'\n        }\n      },\n      required: [        'id',\n        'affiliate_code',\n        'company_id',\n        'metadata',\n        'plan',\n        'purchase_url',\n        'redirect_url'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    },\n    plan_type: {\n      type: 'string',\n      description: 'The type of plan that can be attached to a product',\n      enum: [        'renewal',\n        'one_time'\n      ]\n    },\n    release_method: {\n      type: 'string',\n      description: 'The methods of how a plan can be released.',\n      enum: [        'buy_now',\n        'waitlist'\n      ]\n    },\n    visibility: {\n      type: 'string',\n      description: 'Visibility of a resource',\n      enum: [        'visible',\n        'hidden',\n        'archived',\n        'quick_link'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.checkoutConfigurations.retrieve(id)));
};

export default { metadata, tool, handler };
