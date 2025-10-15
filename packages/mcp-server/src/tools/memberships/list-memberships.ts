// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/memberships',
  operationId: 'listMembership',
};

export const tool: Tool = {
  name: 'list_memberships',
  description: 'Lists memberships\n\nRequired permissions:\n - `member:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list memberships for',
      },
      access_pass_ids: {
        type: 'array',
        description: 'The access pass IDs to filter the memberships by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      cancel_options: {
        type: 'array',
        description: 'The cancel options to filter the memberships by',
        items: {
          type: 'string',
          description: 'The different reasons a user can choose for why they are canceling their membership.',
          enum: [
            'too_expensive',
            'switching',
            'missing_features',
            'technical_issues',
            'bad_experience',
            'other',
            'testing',
          ],
        },
      },
      created_after: {
        type: 'string',
        description: 'The minimum creation date to filter by',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'The maximum creation date to filter by',
        format: 'date-time',
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
        description: 'Which columns can be used to sort.',
        enum: ['id', 'created_at', 'status', 'canceled_at', 'date_joined', 'total_spend'],
      },
      plan_ids: {
        type: 'array',
        description: 'The plan IDs to filter the memberships by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      promo_code_ids: {
        type: 'array',
        description: 'The promo code IDs to filter the memberships by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      statuses: {
        type: 'array',
        description: 'The membership status to filter the memberships by',
        items: {
          $ref: '#/$defs/membership_status',
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
      membership_status: {
        type: 'string',
        description: 'The status of a membership',
        enum: ['trialing', 'active', 'past_due', 'completed', 'canceled', 'expired', 'unresolved', 'drafted'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.memberships.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
