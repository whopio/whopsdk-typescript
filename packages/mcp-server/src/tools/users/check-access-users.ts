// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{id}/access/{resource_id}',
  operationId: 'checkAccess',
};

export const tool: Tool = {
  name: 'check_access_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck if a user has access (and their access level) to a resource\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_check_access_response',\n  $defs: {\n    user_check_access_response: {\n      type: 'object',\n      description: 'The result of a has access check for the developer API',\n      properties: {\n        access_level: {\n          type: 'string',\n          description: 'The permission level of the user',\n          enum: [            'no_access',\n            'admin',\n            'customer'\n          ]\n        },\n        has_access: {\n          type: 'boolean',\n          description: 'Whether the user has access to the resource'\n        }\n      },\n      required: [        'access_level',\n        'has_access'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      resource_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'resource_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { resource_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.checkAccess(resource_id, body)));
};

export default { metadata, tool, handler };
