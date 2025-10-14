// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payments/{id}',
  operationId: 'retrievePayment',
};

export const tool: Tool = {
  name: 'retrieve_payments',
  description:
    'Retrieves a payment by ID\n\nRequired permissions:\n - `payment:basic:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`',
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
  return asTextContentResult(await client.payments.retrieve(id));
};

export default { metadata, tool, handler };
