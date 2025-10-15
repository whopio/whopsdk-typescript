// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments/{id}/retry',
  operationId: 'retryPayment',
};

export const tool: Tool = {
  name: 'retry_payments',
  description:
    'Retries a payment\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.payments.retry(id));
};

export default { metadata, tool, handler };
