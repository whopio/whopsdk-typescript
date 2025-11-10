// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'disputes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/disputes/{id}/submit_evidence',
  operationId: 'submitEvidenceDispute',
};

export const tool: Tool = {
  name: 'submit_evidence_disputes',
  description:
    'Submit a payment dispute to the payment processor for review. Once submitted, no further edits can be made.\n\nRequired permissions:\n - `payment:dispute`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
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
  return asTextContentResult(await client.disputes.submitEvidence(id));
};

export default { metadata, tool, handler };
