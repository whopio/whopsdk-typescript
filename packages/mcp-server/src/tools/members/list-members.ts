// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/members',
  operationId: 'listMember',
};

export const tool: Tool = {
  name: 'list_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the members of a company\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n - `member:phone:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for CompanyMember.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/member_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    member_list_response: {\n      type: 'object',\n      description: 'An object representing a connection between a creator and a user/company_buyer. This type should only be made visible to the user/company_buyer who is a part of the connection.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the member'\n        },\n        access_level: {\n          $ref: '#/$defs/access_level'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the member was created',\n          format: 'date-time'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'When the member joined the company',\n          format: 'date-time'\n        },\n        most_recent_action: {\n          $ref: '#/$defs/member_most_recent_actions'\n        },\n        most_recent_action_at: {\n          type: 'string',\n          description: 'The time for the most recent action, if applicable.',\n          format: 'date-time'\n        },\n        phone: {\n          type: 'string',\n          description: 'The phone number for the member, if available.'\n        },\n        status: {\n          $ref: '#/$defs/member_statuses'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when this member was last updated',\n          format: 'date-time'\n        },\n        usd_total_spent: {\n          type: 'number',\n          description: 'How much money this customer has spent on the company\\'s products and plans'\n        },\n        user: {\n          type: 'object',\n          description: 'The user for this member, if any.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user account.'\n            },\n            email: {\n              type: 'string',\n              description: 'The digital mailing address of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The user\\'s full name.'\n            },\n            username: {\n              type: 'string',\n              description: 'The whop username.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'access_level',\n        'created_at',\n        'joined_at',\n        'most_recent_action',\n        'most_recent_action_at',\n        'phone',\n        'status',\n        'updated_at',\n        'usd_total_spent',\n        'user'\n      ]\n    },\n    access_level: {\n      type: 'string',\n      description: 'The access level a given user (or company) has to an access pass or company.',\n      enum: [        'no_access',\n        'admin',\n        'customer'\n      ]\n    },\n    member_most_recent_actions: {\n      type: 'string',\n      description: 'The different most recent actions a member can have.',\n      enum: [        'canceling',\n        'churned',\n        'finished_split_pay',\n        'paused',\n        'paid_subscriber',\n        'paid_once',\n        'expiring',\n        'joined',\n        'drafted',\n        'left',\n        'trialing',\n        'pending_entry',\n        'renewing',\n        'past_due'\n      ]\n    },\n    member_statuses: {\n      type: 'string',\n      description: 'The different statuses a Member can have.',\n      enum: [        'drafted',\n        'joined',\n        'left'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list members for',
      },
      access_level: {
        $ref: '#/$defs/access_level',
      },
      access_pass_ids: {
        type: 'array',
        description: 'The access pass IDs to filter the members by',
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
      most_recent_actions: {
        type: 'array',
        description: 'The most recent actions to filter the members by',
        items: {
          $ref: '#/$defs/member_most_recent_actions',
        },
      },
      order: {
        type: 'string',
        description: 'Which columns can be used to sort.',
        enum: ['id', 'usd_total_spent', 'created_at', 'joined_at', 'most_recent_action'],
      },
      plan_ids: {
        type: 'array',
        description: 'The plan IDs to filter the members by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      promo_code_ids: {
        type: 'array',
        description: 'The promo code IDs to filter the members by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      query: {
        type: 'string',
        description:
          'The name, username, or email to filter the members by. The email filter will only apply if the current actor has the `member:email:read` permission.',
      },
      statuses: {
        type: 'array',
        description: 'The statuses to filter the members by',
        items: {
          $ref: '#/$defs/member_statuses',
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
      access_level: {
        type: 'string',
        description: 'The access level a given user (or company) has to an access pass or company.',
        enum: ['no_access', 'admin', 'customer'],
      },
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
      member_most_recent_actions: {
        type: 'string',
        description: 'The different most recent actions a member can have.',
        enum: [
          'canceling',
          'churned',
          'finished_split_pay',
          'paused',
          'paid_subscriber',
          'paid_once',
          'expiring',
          'joined',
          'drafted',
          'left',
          'trialing',
          'pending_entry',
          'renewing',
          'past_due',
        ],
      },
      member_statuses: {
        type: 'string',
        description: 'The different statuses a Member can have.',
        enum: ['drafted', 'joined', 'left'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.members.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
