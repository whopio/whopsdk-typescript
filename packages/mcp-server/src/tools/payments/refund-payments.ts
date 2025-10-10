// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

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
        description: 'refund_payment | An amount if the refund is supposed to be partial.',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.payments.refund(id, body));
};

export default { metadata, tool, handler };
