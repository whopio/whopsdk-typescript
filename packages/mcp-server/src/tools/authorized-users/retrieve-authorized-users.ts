// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'authorized_users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/authorized_users/{id}',
  operationId: 'retrieveAuthorizedUser',
};

export const tool: Tool = {
  name: 'retrieve_authorized_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a authorized user by ID\n\nRequired permissions:\n - `company:authorized_user:read`\n - `member:email:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/authorized_user_retrieve_response',\n  $defs: {\n    authorized_user_retrieve_response: {\n      type: 'object',\n      description: 'A user who has elevated security privileges for a company',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique ID representing the authorized user object.'\n        },\n        role: {\n          $ref: '#/$defs/authorized_user_roles'\n        },\n        user: {\n          type: 'object',\n          description: 'The user associated with the authorized user.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            email: {\n              type: 'string',\n              description: 'The email of the user'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'role',\n        'user'\n      ]\n    },\n    authorized_user_roles: {\n      type: 'string',\n      description: 'Possible roles an authorized user can have',\n      enum: [        'owner',\n        'admin',\n        'sales_manager',\n        'moderator',\n        'app_manager',\n        'support',\n        'manager'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.authorizedUsers.retrieve(id)));
};

export default { metadata, tool, handler };
