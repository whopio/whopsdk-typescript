// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments/{id}/refund',
  operationId: 'refundPayment',
};

export const tool: Tool = {
  name: 'refund_payments',
  description:
    'Refunds a payment\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      partial_amount: {
        type: 'number',
        description: 'An amount if the refund is supposed to be partial.',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.payments.refund(id, body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
