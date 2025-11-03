// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

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
  description: 'Lists plans for a company\n\nRequired permissions:\n - `plan:basic:read`',
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
        description: 'The type of plan that can be attached to a product',
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
  const body = args as any;
  const response = await client.plans.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
