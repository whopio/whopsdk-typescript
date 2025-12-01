// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'disputes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/disputes/{id}/update_evidence',
  operationId: 'updateEvidenceDispute',
};

export const tool: Tool = {
  name: 'update_evidence_disputes',
  description:
    'Update a dispute with evidence data to attempt to win the dispute.\n\nRequired permissions:\n - `payment:dispute`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      access_activity_log: {
        type: 'string',
        description: 'An IP access log for the user from Whop.',
      },
      billing_address: {
        type: 'string',
        description: 'The billing address of the user from their payment details.',
      },
      cancellation_policy_attachment: {
        anyOf: [
          {
            type: 'object',
            title: 'AttachmentInputWithDirectUploadId',
            description: 'Input for an attachment',
            properties: {
              direct_upload_id: {
                type: 'string',
                description:
                  'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
              },
            },
            required: ['direct_upload_id'],
          },
          {
            type: 'object',
            title: 'AttachmentInputWithId',
            description: 'Input for an attachment',
            properties: {
              id: {
                type: 'string',
                description:
                  "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
              },
            },
            required: ['id'],
          },
        ],
        description: 'A file containing the cancellation policy from the company.',
      },
      cancellation_policy_disclosure: {
        type: 'string',
        description: 'A cancellation policy disclosure from the company.',
      },
      customer_communication_attachment: {
        anyOf: [
          {
            type: 'object',
            title: 'AttachmentInputWithDirectUploadId',
            description: 'Input for an attachment',
            properties: {
              direct_upload_id: {
                type: 'string',
                description:
                  'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
              },
            },
            required: ['direct_upload_id'],
          },
          {
            type: 'object',
            title: 'AttachmentInputWithId',
            description: 'Input for an attachment',
            properties: {
              id: {
                type: 'string',
                description:
                  "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
              },
            },
            required: ['id'],
          },
        ],
        description: 'A file containing the customer communication from the company (An image).',
      },
      customer_email_address: {
        type: 'string',
        description: 'The email of the customer from their payment details.',
      },
      customer_name: {
        type: 'string',
        description: 'The name of the customer from their payment details.',
      },
      notes: {
        type: 'string',
        description: 'Additional notes the company chooses to submit regarding the dispute.',
      },
      product_description: {
        type: 'string',
        description: 'The description of the product from the company.',
      },
      refund_policy_attachment: {
        anyOf: [
          {
            type: 'object',
            title: 'AttachmentInputWithDirectUploadId',
            description: 'Input for an attachment',
            properties: {
              direct_upload_id: {
                type: 'string',
                description:
                  'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
              },
            },
            required: ['direct_upload_id'],
          },
          {
            type: 'object',
            title: 'AttachmentInputWithId',
            description: 'Input for an attachment',
            properties: {
              id: {
                type: 'string',
                description:
                  "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
              },
            },
            required: ['id'],
          },
        ],
        description: 'A file containing the refund policy from the company.',
      },
      refund_policy_disclosure: {
        type: 'string',
        description: 'A refund policy disclosure from the company.',
      },
      refund_refusal_explanation: {
        type: 'string',
        description: 'A description on why the refund is being refused by the company.',
      },
      service_date: {
        type: 'string',
        description: 'When the product was delivered by the company.',
      },
      uncategorized_attachment: {
        anyOf: [
          {
            type: 'object',
            title: 'AttachmentInputWithDirectUploadId',
            description: 'Input for an attachment',
            properties: {
              direct_upload_id: {
                type: 'string',
                description:
                  'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
              },
            },
            required: ['direct_upload_id'],
          },
          {
            type: 'object',
            title: 'AttachmentInputWithId',
            description: 'Input for an attachment',
            properties: {
              id: {
                type: 'string',
                description:
                  "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
              },
            },
            required: ['id'],
          },
        ],
        description: 'A file that does not fit in the other categories.',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.disputes.updateEvidence(id, body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
