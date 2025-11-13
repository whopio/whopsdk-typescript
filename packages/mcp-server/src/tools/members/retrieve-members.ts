// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/members/{id}',
  operationId: 'retrieveMember',
};

export const tool: Tool = {
  name: 'retrieve_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a member of a company by ID\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n - `member:phone:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/member_retrieve_response',\n  $defs: {\n    member_retrieve_response: {\n      type: 'object',\n      description: 'An object representing a connection between a creator and a user/company_buyer. This type should only be made visible to the user/company_buyer who is a part of the connection.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the member'\n        },\n        access_level: {\n          $ref: '#/$defs/access_level'\n        },\n        company: {\n          type: 'object',\n          description: 'The company for the member.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the company'\n            },\n            route: {\n              type: 'string',\n              description: 'The slug/route of the company on the Whop site.'\n            },\n            title: {\n              type: 'string',\n              description: 'The written name of the company.'\n            }\n          },\n          required: [            'id',\n            'route',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the member was created',\n          format: 'date-time'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'When the member joined the company',\n          format: 'date-time'\n        },\n        most_recent_action: {\n          $ref: '#/$defs/member_most_recent_actions'\n        },\n        most_recent_action_at: {\n          type: 'string',\n          description: 'The time for the most recent action, if applicable.',\n          format: 'date-time'\n        },\n        phone: {\n          type: 'string',\n          description: 'The phone number for the member, if available.'\n        },\n        status: {\n          $ref: '#/$defs/member_statuses'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when this member was last updated',\n          format: 'date-time'\n        },\n        usd_total_spent: {\n          type: 'number',\n          description: 'How much money this customer has spent on the company\\'s products and plans'\n        },\n        user: {\n          type: 'object',\n          description: 'The user for this member, if any.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user account.'\n            },\n            email: {\n              type: 'string',\n              description: 'The digital mailing address of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The user\\'s full name.'\n            },\n            username: {\n              type: 'string',\n              description: 'The whop username.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'access_level',\n        'company',\n        'created_at',\n        'joined_at',\n        'most_recent_action',\n        'most_recent_action_at',\n        'phone',\n        'status',\n        'updated_at',\n        'usd_total_spent',\n        'user'\n      ]\n    },\n    access_level: {\n      type: 'string',\n      description: 'The access level a given user (or company) has to a product or company.',\n      enum: [        'no_access',\n        'admin',\n        'customer'\n      ]\n    },\n    member_most_recent_actions: {\n      type: 'string',\n      description: 'The different most recent actions a member can have.',\n      enum: [        'canceling',\n        'churned',\n        'finished_split_pay',\n        'paused',\n        'paid_subscriber',\n        'paid_once',\n        'expiring',\n        'joined',\n        'drafted',\n        'left',\n        'trialing',\n        'pending_entry',\n        'renewing',\n        'past_due'\n      ]\n    },\n    member_statuses: {\n      type: 'string',\n      description: 'The different statuses a Member can have.',\n      enum: [        'drafted',\n        'joined',\n        'left'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.members.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
