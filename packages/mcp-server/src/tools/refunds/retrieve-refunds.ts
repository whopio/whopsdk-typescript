// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'refunds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/refunds/{id}',
  operationId: 'retrieveRefund',
};

export const tool: Tool = {
  name: 'retrieve_refunds',
  description:
    'Retrieves a Refund by ID\n\nRequired permissions:\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
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
  try {
    return asTextContentResult(await client.refunds.retrieve(id));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
