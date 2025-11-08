// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'access_tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/access_tokens',
  operationId: 'createAccessToken',
};

export const tool: Tool = {
  name: 'create_access_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates an access token for a user to access a specific resource. These access tokens are designed to be used with Whop's embedded components.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/access_token_create_response',\n  $defs: {\n    access_token_create_response: {\n      type: 'object',\n      description: 'An object representing an access token used for authenticating API requests.',\n      properties: {\n        token: {\n          type: 'string',\n          description: 'The JWT access token string.'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'The expiration timestamp of the access token.',\n          format: 'date-time'\n        }\n      },\n      required: [        'token',\n        'expires_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      scoped_actions: {
        type: 'array',
        description:
          "Array of desired scoped actions for the access token. This list must be a subset of the API keys's existing permissions. Otherwise, an error will be raised.",
        items: {
          type: 'string',
          description:
            'Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.',
        },
      },
      target_resource_id: {
        type: 'string',
        description:
          'The ID of the target resource (Company, User, etc.) for which the access token is being created.',
      },
      target_resource_type: {
        type: 'string',
        description: 'The type of the target resource (company, user, product, experience, etc.).',
        enum: ['company', 'product', 'experience', 'app', 'user'],
      },
      expires_at: {
        type: 'string',
        description:
          'The expiration timestamp for the access token. If not provided, a default expiration time of 1 hour will be used. The expiration can be set to a maximum of 3 hours from the current time.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['scoped_actions', 'target_resource_id', 'target_resource_type'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.accessTokens.create(body)));
};

export default { metadata, tool, handler };
