// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payment_methods/{id}',
  operationId: 'retrievePaymentMethod',
};

export const tool: Tool = {
  name: 'retrieve_payment_methods',
  description:
    'A payment method is a stored representation of how a customer intends to pay, such as a card, bank account, or digital wallet. It holds the necessary billing details and can be attached to a member for future one-time or recurring charges. This lets you reuse the same payment credentials across multiple payments.\n\nRequired permissions:\n - `member:payment_methods:read`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      member_id: {
        type: 'string',
        description: 'The ID of the Member associated with the PaymentMethod',
      },
    },
    required: ['id', 'member_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.paymentMethods.retrieve(id, body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
