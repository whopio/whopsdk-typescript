// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/plans',
  operationId: 'listPlan',
};

export const tool: Tool = {
  name: 'list_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists plans for a company\n\nRequired permissions:\n - `plan:basic:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicPlan.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/plan_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    plan_list_response: {\n      type: 'object',\n      description: 'An object representing a (sanitized) plan of an access pass.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the plan.'\n        },\n        billing_period: {\n          type: 'integer',\n          description: 'The interval at which the plan charges (renewal plans).'\n        },\n        company: {\n          type: 'object',\n          description: 'The company for the plan.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the company.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'integer',\n          description: 'When the plan was created.'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the plan.'\n        },\n        expiration_days: {\n          type: 'integer',\n          description: 'The interval at which the plan charges (expiration plans).'\n        },\n        initial_price: {\n          type: 'number',\n          description: 'The price a person has to pay for a plan on the initial purchase.'\n        },\n        internal_notes: {\n          type: 'string',\n          description: 'A personal description or notes section for the business.'\n        },\n        invoice: {\n          type: 'object',\n          description: 'The invoice associated with this plan.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the invoice.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        member_count: {\n          type: 'integer',\n          description: 'The number of members for the plan.'\n        },\n        plan_type: {\n          $ref: '#/$defs/plan_type'\n        },\n        product: {\n          type: 'object',\n          description: 'The access pass for the plan.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        purchase_url: {\n          type: 'string',\n          description: 'The direct link to purchase the product.'\n        },\n        release_method: {\n          $ref: '#/$defs/release_method'\n        },\n        renewal_price: {\n          type: 'number',\n          description: 'The price a person has to pay for a plan on the renewal purchase.'\n        },\n        trial_period_days: {\n          type: 'integer',\n          description: 'The number of free trial days added before a renewal plan.'\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'When the plan was last updated.'\n        },\n        visibility: {\n          $ref: '#/$defs/visibility'\n        }\n      },\n      required: [        'id',\n        'billing_period',\n        'company',\n        'created_at',\n        'currency',\n        'description',\n        'expiration_days',\n        'initial_price',\n        'internal_notes',\n        'invoice',\n        'member_count',\n        'plan_type',\n        'product',\n        'purchase_url',\n        'release_method',\n        'renewal_price',\n        'trial_period_days',\n        'updated_at',\n        'visibility'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    },\n    plan_type: {\n      type: 'string',\n      description: 'The type of plan that can be attached to an access pass',\n      enum: [        'renewal',\n        'one_time'\n      ]\n    },\n    release_method: {\n      type: 'string',\n      description: 'The methods of how a plan can be released.',\n      enum: [        'buy_now',\n        'waitlist'\n      ]\n    },\n    visibility: {\n      type: 'string',\n      description: 'Visibility of a resource',\n      enum: [        'visible',\n        'hidden',\n        'archived',\n        'quick_link'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company',
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
        $ref: '#/$defs/direction',
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
        description: 'The ways a relation of Plans can be ordered',
        enum: ['id', 'active_members_count', 'created_at', 'internal_notes', 'expires_at'],
      },
      plan_types: {
        type: 'array',
        description: 'The plan type to filter the plans by',
        items: {
          $ref: '#/$defs/plan_type',
        },
      },
      product_ids: {
        type: 'array',
        description: 'The product IDs to filter the plans by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      release_methods: {
        type: 'array',
        description: 'The release method to filter the plans by',
        items: {
          $ref: '#/$defs/release_method',
        },
      },
      visibilities: {
        type: 'array',
        description: 'The visibility to filter the plans by',
        items: {
          $ref: '#/$defs/visibility_filter',
        },
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
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
      plan_type: {
        type: 'string',
        description: 'The type of plan that can be attached to an access pass',
        enum: ['renewal', 'one_time'],
      },
      release_method: {
        type: 'string',
        description: 'The methods of how a plan can be released.',
        enum: ['buy_now', 'waitlist'],
      },
      visibility_filter: {
        type: 'string',
        description: 'The different levels of visibility for resources',
        enum: ['visible', 'hidden', 'archived', 'quick_link', 'all', 'not_quick_link', 'not_archived'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.plans.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
