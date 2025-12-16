// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/companies/{id}',
  operationId: 'updateCompany',
};

export const tool: Tool = {
  name: 'update_companies',
  description:
    "Update an existing company. Either a regular company, platform company, or one of a platform's connected accounts\n\nRequired permissions:\n - `company:update`\n - `company:basic:read`",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      banner_image: {
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
        description: 'The banner image for the company in png or jpeg format',
      },
      business_type: {
        $ref: '#/$defs/business_types',
      },
      industry_type: {
        $ref: '#/$defs/industry_types',
      },
      logo: {
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
        description: 'The logo for the company in png, jpeg, or gif format',
      },
      send_customer_emails: {
        type: 'boolean',
        description:
          'Whether Whop sends transactional emails to customers on behalf of this company. Includes: order confirmations, payment failures, refund notifications, upcoming renewals, and membership cancelations/expirations. When disabled, the platform is responsible for handling these communications.',
      },
      title: {
        type: 'string',
        description: 'The title of the company',
      },
    },
    required: ['id'],
    $defs: {
      business_types: {
        type: 'string',
        description: 'The different business types a company can be.',
        enum: [
          'education_program',
          'coaching',
          'software',
          'paid_group',
          'newsletter',
          'agency',
          'physical_products',
          'brick_and_mortar',
          'events',
          'coaching_and_courses',
          'other',
          'saas',
          'course',
          'community',
        ],
      },
      industry_types: {
        type: 'string',
        description: 'The different industry types a company can be in.',
        enum: [
          'trading',
          'sports_betting',
          'reselling',
          'fitness',
          'amazon_fba',
          'real_estate',
          'kindle_book_publishing',
          'dating',
          'agencies',
          'health_and_wellness',
          'social_media',
          'sales',
          'business',
          'ecommerce',
          'video_games',
          'home_services',
          'ai',
          'public_speaking',
          'personal_finance',
          'careers',
          'travel',
          'clipping',
          'spirituality',
          'vas',
          'personal_development',
          'software',
          'other',
          'marketing_agency',
          'sales_agency',
          'ai_agency',
          'design_agency',
          'coaching_agency',
          'development_agency',
          'recruiting_agency',
          'customer_support_agency',
          'clipping_agency',
          'clothing',
          'supplements',
          'beauty_and_personal_care',
          'fitness_gear',
          'accessories',
          'home_goods',
          'electronics_and_gadgets',
          'food_and_beverages',
          'gym',
          'restaurant',
          'retail_store',
          'coffee_shop',
          'salon_spa',
          'medical_dentist_office',
          'hotel_lodging',
          'auto_repair_shop',
          'masterminds',
          'webinars',
          'bootcamps',
          'convention',
          'concerts',
          'meetups',
          'parties',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.companies.update(id, body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
