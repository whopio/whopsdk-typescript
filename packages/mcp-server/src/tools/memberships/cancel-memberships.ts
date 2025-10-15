// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/memberships/{id}/cancel',
  operationId: 'cancelMembership',
};

export const tool: Tool = {
  name: 'cancel_memberships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCancels a membership either immediately or at the end of the current billing period\n\nRequired permissions:\n - `member:manage`\n - `member:basic:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/membership',\n  $defs: {\n    membership: {\n      type: 'object',\n      description: 'A membership represents a purchase between a User and a Company for a specific Product.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the membership'\n        },\n        cancel_at_period_end: {\n          type: 'boolean',\n          description: 'Whether this Membership is set to cancel at the end of the current billing cycle. Only applies for memberships that have a renewal plan.'\n        },\n        canceled_at: {\n          type: 'string',\n          description: 'The epoch timestamp of when the customer initiated a cancellation.',\n          format: 'date-time'\n        },\n        cancellation_reason: {\n          type: 'string',\n          description: 'The reason that the member canceled the membership (filled out by the member).'\n        },\n        company: {\n          type: 'object',\n          description: 'The Company this Membership belongs to.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the company.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp, in seconds, that this Membership was created at.',\n          format: 'date-time'\n        },\n        currency: {\n          $ref: '#/$defs/currency'\n        },\n        license_key: {\n          type: 'string',\n          description: 'The license key for this Membership. This is only present if the membership grants access to an instance of the Whop Software app.'\n        },\n        manage_url: {\n          type: 'string',\n          description: 'The URL for the customer to manage their membership.'\n        },\n        member: {\n          type: 'object',\n          description: 'The Member that this Membership belongs to.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the member'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        metadata: {\n          type: 'object',\n          description: 'A JSON object used to store software licensing information. Ex. HWID',\n          additionalProperties: true\n        },\n        payment_collection_paused: {\n          type: 'boolean',\n          description: 'Whether the membership\\'s payments are currently paused.'\n        },\n        plan: {\n          type: 'object',\n          description: 'The Plan this Membership is for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        promo_code: {\n          type: 'object',\n          description: 'The Promo Code that is currently applied to this Membership.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the promo.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        renewal_period_end: {\n          type: 'string',\n          description: 'The timestamp in seconds at which the current billing cycle for this subscription ends. Only applies for memberships that have a renewal plan.',\n          format: 'date-time'\n        },\n        renewal_period_start: {\n          type: 'string',\n          description: 'The timestamp in seconds at which the current billing cycle for this subscription start. Only applies for memberships that have a renewal plan.',\n          format: 'date-time'\n        },\n        status: {\n          $ref: '#/$defs/membership_status'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'A timestamp of when the membership was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user this membership belongs to',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'cancel_at_period_end',\n        'canceled_at',\n        'cancellation_reason',\n        'company',\n        'created_at',\n        'currency',\n        'license_key',\n        'manage_url',\n        'member',\n        'metadata',\n        'payment_collection_paused',\n        'plan',\n        'promo_code',\n        'renewal_period_end',\n        'renewal_period_start',\n        'status',\n        'updated_at',\n        'user'\n      ]\n    },\n    currency: {\n      type: 'string',\n      description: 'The available currencies on the platform',\n      enum: [        'usd',\n        'sgd',\n        'inr',\n        'aud',\n        'brl',\n        'cad',\n        'dkk',\n        'eur',\n        'nok',\n        'gbp',\n        'sek',\n        'chf',\n        'hkd',\n        'huf',\n        'jpy',\n        'mxn',\n        'myr',\n        'pln',\n        'czk',\n        'nzd',\n        'aed',\n        'eth',\n        'ape',\n        'cop',\n        'ron',\n        'thb',\n        'bgn',\n        'idr',\n        'dop',\n        'php',\n        'try',\n        'krw',\n        'twd',\n        'vnd',\n        'pkr',\n        'clp',\n        'uyu',\n        'ars',\n        'zar',\n        'dzd',\n        'tnd',\n        'mad',\n        'kes',\n        'kwd',\n        'jod',\n        'all',\n        'xcd',\n        'amd',\n        'bsd',\n        'bhd',\n        'bob',\n        'bam',\n        'khr',\n        'crc',\n        'xof',\n        'egp',\n        'etb',\n        'gmd',\n        'ghs',\n        'gtq',\n        'gyd',\n        'ils',\n        'jmd',\n        'mop',\n        'mga',\n        'mur',\n        'mdl',\n        'mnt',\n        'nad',\n        'ngn',\n        'mkd',\n        'omr',\n        'pyg',\n        'pen',\n        'qar',\n        'rwf',\n        'sar',\n        'rsd',\n        'lkr',\n        'tzs',\n        'ttd',\n        'uzs',\n        'rub',\n        'btc'\n      ]\n    },\n    membership_status: {\n      type: 'string',\n      description: 'The status of a membership',\n      enum: [        'trialing',\n        'active',\n        'past_due',\n        'completed',\n        'canceled',\n        'expired',\n        'unresolved',\n        'drafted'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      cancellation_mode: {
        type: 'string',
        description: 'The mode of cancellation for a membership',
        enum: ['at_period_end', 'immediate'],
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
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.memberships.cancel(id, body)));
};

export default { metadata, tool, handler };
