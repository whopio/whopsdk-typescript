// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/products/{id}',
  operationId: 'updateProduct',
};

export const tool: Tool = {
  name: 'update_products',
  description:
    'Updates an existing Product\n\nRequired permissions:\n - `access_pass:update`\n - `access_pass:basic:read`',
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
        description: 'A banner image for the product in png, jpeg format',
      },
      business_type: {
        $ref: '#/$defs/business_types',
      },
      collect_shipping_address: {
        type: 'boolean',
        description: 'Whether or not to collect shipping information at checkout from the customer.',
      },
      custom_cta: {
        $ref: '#/$defs/custom_cta',
      },
      custom_cta_url: {
        type: 'string',
        description: 'The custom call to action URL for the product.',
      },
      custom_statement_descriptor: {
        type: 'string',
        description:
          'The custom statement descriptor for the product i.e. WHOP*SPORTS, must be between 5 and 22 characters, contain at least one letter, and not contain any of the following characters: <, >, \\, \', "',
      },
      description: {
        type: 'string',
        description: 'A written description of the product.',
      },
      global_affiliate_percentage: {
        type: 'number',
        description: 'The percentage of the revenue that goes to the global affiliate program.',
      },
      global_affiliate_status: {
        $ref: '#/$defs/global_affiliate_status',
      },
      headline: {
        type: 'string',
        description: 'The headline of the product.',
      },
      industry_type: {
        $ref: '#/$defs/industry_types',
      },
      member_affiliate_percentage: {
        type: 'number',
        description: 'The percentage of the revenue that goes to the member affiliate program.',
      },
      member_affiliate_status: {
        $ref: '#/$defs/global_affiliate_status',
      },
      product_tax_code_id: {
        type: 'string',
        description: 'The ID of the product tax code to apply to this product.',
      },
      redirect_purchase_url: {
        type: 'string',
        description: 'The URL to redirect the customer to after a purchase.',
      },
      route: {
        type: 'string',
        description: 'The route of the product.',
      },
      store_page_config: {
        type: 'object',
        description: "Configuration for a product on the company's store page.",
        properties: {
          custom_cta: {
            type: 'string',
            description: "Custom call-to-action text for the product's store page.",
          },
          show_price: {
            type: 'boolean',
            description: "Whether or not to show the price on the product's store page.",
          },
        },
      },
      title: {
        type: 'string',
        description: 'The title of the product.',
      },
      visibility: {
        $ref: '#/$defs/visibility',
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
      custom_cta: {
        type: 'string',
        description: 'The different types of custom CTAs that can be selected.',
        enum: [
          'get_access',
          'join',
          'order_now',
          'shop_now',
          'call_now',
          'donate_now',
          'contact_us',
          'sign_up',
          'subscribe',
          'purchase',
          'get_offer',
          'apply_now',
          'complete_order',
        ],
      },
      global_affiliate_status: {
        type: 'string',
        description: 'The different statuses of the global affiliate program for a product.',
        enum: ['enabled', 'disabled'],
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
      visibility: {
        type: 'string',
        description: 'Visibility of a resource',
        enum: ['visible', 'hidden', 'archived', 'quick_link'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.products.update(id, body));
};

export default { metadata, tool, handler };
