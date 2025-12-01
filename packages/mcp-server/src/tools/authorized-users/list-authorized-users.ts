// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'authorized_users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/authorized_users',
  operationId: 'listAuthorizedUser',
};

export const tool: Tool = {
  name: 'list_authorized_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists authorized users\n\nRequired permissions:\n - `company:authorized_user:read`\n - `member:email:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for AuthorizedUser.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/authorized_user_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    authorized_user_list_response: {\n      type: 'object',\n      description: 'A user who has elevated security privileges for a company',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique ID representing the authorized user object.'\n        },\n        role: {\n          $ref: '#/$defs/authorized_user_roles'\n        },\n        user: {\n          type: 'object',\n          description: 'The user associated with the authorized user.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            email: {\n              type: 'string',\n              description: 'The email of the user'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'role',\n        'user'\n      ]\n    },\n    authorized_user_roles: {\n      type: 'string',\n      description: 'Possible roles an authorized user can have',\n      enum: [        'owner',\n        'admin',\n        'sales_manager',\n        'moderator',\n        'app_manager',\n        'support',\n        'manager'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to list authorized users for',
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
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      role: {
        $ref: '#/$defs/authorized_user_roles',
      },
      user_id: {
        type: 'string',
        description: 'Filter by the user ID to check if the user is an authorized user',
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
      authorized_user_roles: {
        type: 'string',
        description: 'Possible roles an authorized user can have',
        enum: ['owner', 'admin', 'sales_manager', 'moderator', 'app_manager', 'support', 'manager'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.authorizedUsers.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
