// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{id}',
  operationId: 'retrieveUser',
};

export const tool: Tool = {
  name: 'retrieve_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a user by ID or username\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_retrieve_response',\n  $defs: {\n    user_retrieve_response: {\n      type: 'object',\n      description: 'An object representing a (sanitized) user of the site.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the user.'\n        },\n        bio: {\n          type: 'string',\n          description: 'The user\\'s bio'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the user was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the user from their Whop account.'\n        },\n        profile_picture: {\n          type: 'object',\n          description: 'The user\\'s profile picture',\n          properties: {\n            url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            }\n          },\n          required: [            'url'\n          ]\n        },\n        username: {\n          type: 'string',\n          description: 'The username of the user from their Whop account.'\n        }\n      },\n      required: [        'id',\n        'bio',\n        'created_at',\n        'name',\n        'profile_picture',\n        'username'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.users.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
