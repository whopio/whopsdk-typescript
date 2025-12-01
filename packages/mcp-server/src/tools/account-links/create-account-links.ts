// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'account_links',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/account_links',
  operationId: 'createAccountLink',
};

export const tool: Tool = {
  name: 'create_account_links',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a url that a user can be directed to in order to access their sub-merchant account. For example, they can visit the hosted payouts portal or the hosted KYC onboarding flow.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_link_create_response',\n  $defs: {\n    account_link_create_response: {\n      type: 'object',\n      description: 'An object representing a url that a user can be directed to to access their account.',\n      properties: {\n        expires_at: {\n          type: 'string',\n          description: 'The expiration timestamp of the url.',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          description: 'The URL to navigate the user to.'\n        }\n      },\n      required: [        'expires_at',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description:
          "The ID of the Company to generate the url for. The company must be a sub-merchant of the API key's company.",
      },
      refresh_url: {
        type: 'string',
        description:
          'The URL to redirect to if the session expires and needs to be re-authenticated due to the token expiring.',
      },
      return_url: {
        type: 'string',
        description: 'The URL to redirect to when the customer wants to return to your site.',
      },
      use_case: {
        type: 'string',
        description: 'The use case for which the link will be used.',
        enum: ['account_onboarding', 'payouts_portal'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id', 'refresh_url', 'return_url', 'use_case'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.accountLinks.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
