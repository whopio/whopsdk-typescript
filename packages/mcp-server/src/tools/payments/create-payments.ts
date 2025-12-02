// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments',
  operationId: 'createPayment',
};

export const tool: Tool = {
  name: 'create_payments',
  description:
    'Creates a payment. This endpoint will respond with a payment object immediately, but the payment is processed asynchronously in the background. Use webhooks to be notified when the payment succeeds or fails.\n\nRequired permissions:\n - `payment:charge`\n - `plan:create`\n - `access_pass:create`\n - `access_pass:update`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          company_id: {
            type: 'string',
            description: 'The ID of the company to create the payment for.',
          },
          member_id: {
            type: 'string',
            description: 'The ID of the member to create the payment for.',
          },
          payment_token_id: {
            type: 'string',
            description:
              'The ID of the payment token to use for the payment. It must be connected to the Member being charged.',
          },
          plan: {
            type: 'object',
            description: 'Pass this object to create a new plan for this payment',
            properties: {
              currency: {
                $ref: '#/$defs/currency',
              },
              billing_period: {
                type: 'integer',
                description: 'The interval at which the plan charges (renewal plans).',
              },
              description: {
                type: 'string',
                description: 'The description of the plan.',
              },
              expiration_days: {
                type: 'integer',
                description: 'The interval at which the plan charges (expiration plans).',
              },
              force_create_new_plan: {
                type: 'boolean',
                description:
                  'Whether to force the creation of a new plan even if one with the same attributes already exists.',
              },
              initial_price: {
                type: 'number',
                description: 'An additional amount charged upon first purchase.',
              },
              internal_notes: {
                type: 'string',
                description: 'A personal description or notes section for the business.',
              },
              plan_type: {
                $ref: '#/$defs/plan_type',
              },
              product: {
                type: 'object',
                description:
                  'Pass this object to create a new product for this plan. We will use the product external identifier to find or create an existing product.',
                properties: {
                  external_identifier: {
                    type: 'string',
                    description:
                      'A unique ID used to find or create a product. When provided during creation, we will look for an existing product with this external identifier — if found, it will be updated; otherwise, a new product will be created.',
                  },
                  title: {
                    type: 'string',
                    description: 'The title of the product.',
                  },
                  business_type: {
                    $ref: '#/$defs/business_types',
                  },
                  collect_shipping_address: {
                    type: 'boolean',
                    description:
                      'Whether or not to collect shipping information at checkout from the customer.',
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
                  visibility: {
                    $ref: '#/$defs/visibility',
                  },
                },
                required: ['external_identifier', 'title'],
              },
              product_id: {
                type: 'string',
                description: 'The product the plan is related to. Either this or product is required.',
              },
              renewal_price: {
                type: 'number',
                description: 'The amount the customer is charged every billing period.',
              },
              title: {
                type: 'string',
                description: 'The title of the plan. This will be visible on the product page to customers.',
              },
              trial_period_days: {
                type: 'integer',
                description: 'The number of free trial days added before a renewal plan.',
              },
              visibility: {
                $ref: '#/$defs/visibility',
              },
            },
            required: ['currency'],
          },
        },
        required: ['company_id', 'member_id', 'payment_token_id', 'plan'],
      },
      {
        type: 'object',
        properties: {
          company_id: {
            type: 'string',
            description: 'The ID of the company to create the payment for.',
          },
          member_id: {
            type: 'string',
            description: 'The ID of the member to create the payment for.',
          },
          payment_token_id: {
            type: 'string',
            description:
              'The ID of the payment token to use for the payment. It must be connected to the Member being charged.',
          },
          plan_id: {
            type: 'string',
            description: 'An ID of an existing plan to use for the payment.',
          },
        },
        required: ['company_id', 'member_id', 'payment_token_id', 'plan_id'],
      },
    ],
    $defs: {
      currency: {
        type: 'string',
        description: 'The available currencies on the platform',
        enum: [
          'usd',
          'sgd',
          'inr',
          'aud',
          'brl',
          'cad',
          'dkk',
          'eur',
          'nok',
          'gbp',
          'sek',
          'chf',
          'hkd',
          'huf',
          'jpy',
          'mxn',
          'myr',
          'pln',
          'czk',
          'nzd',
          'aed',
          'eth',
          'ape',
          'cop',
          'ron',
          'thb',
          'bgn',
          'idr',
          'dop',
          'php',
          'try',
          'krw',
          'twd',
          'vnd',
          'pkr',
          'clp',
          'uyu',
          'ars',
          'zar',
          'dzd',
          'tnd',
          'mad',
          'kes',
          'kwd',
          'jod',
          'all',
          'xcd',
          'amd',
          'bsd',
          'bhd',
          'bob',
          'bam',
          'khr',
          'crc',
          'xof',
          'egp',
          'etb',
          'gmd',
          'ghs',
          'gtq',
          'gyd',
          'ils',
          'jmd',
          'mop',
          'mga',
          'mur',
          'mdl',
          'mnt',
          'nad',
          'ngn',
          'mkd',
          'omr',
          'pyg',
          'pen',
          'qar',
          'rwf',
          'sar',
          'rsd',
          'lkr',
          'tzs',
          'ttd',
          'uzs',
          'rub',
          'btc',
          'cny',
        ],
      },
      plan_type: {
        type: 'string',
        description: 'The type of plan that can be attached to a product',
        enum: ['renewal', 'one_time'],
      },
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
  const body = args as any;
  try {
    return asTextContentResult(await client.payments.create(body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
