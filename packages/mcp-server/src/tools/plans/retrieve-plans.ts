// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/plans/{id}',
  operationId: 'retrievePlan',
};

export const tool: Tool = {
  name: 'retrieve_plans',
  description: 'Retrieves a plan by ID\n\nRequired permissions:\n - `plan:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.plans.retrieve(id));
};

export default { metadata, tool, handler };
