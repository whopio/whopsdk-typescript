// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'checkout_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/checkout_configurations',
  operationId: 'createCheckoutConfiguration',
};

export const tool: Tool = {
  name: 'create_checkout_configurations',
  description:
    'Creates a new checkout configuration\n\nRequired permissions:\n - `checkout_configuration:create`\n - `plan:create`\n - `access_pass:create`\n - `access_pass:update`\n - `checkout_configuration:basic:read`',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          plan: {
            type: 'object',
            description: 'Pass this object to create a new plan for this checkout configuration',
            properties: {
              company_id: {
                type: 'string',
                description: 'The company the plan should be created for.',
              },
              currency: {
                $ref: '#/$defs/currency',
              },
              billing_period: {
                type: 'integer',
                description: 'The interval at which the plan charges (renewal plans).',
              },
              custom_fields: {
                type: 'array',
                description: 'An array of custom field objects.',
                items: {
                  type: 'object',
                  properties: {
                    field_type: {
                      type: 'string',
                      description: 'The type of the custom field.',
                      enum: ['text'],
                    },
                    name: {
                      type: 'string',
                      description: 'The name of the custom field.',
                    },
                    id: {
                      type: 'string',
                      description: 'The ID of the custom field (if being updated)',
                    },
                    order: {
                      type: 'integer',
                      description: 'The order of the field.',
                    },
                    placeholder: {
                      type: 'string',
                      description: 'The placeholder value of the field.',
                    },
                    required: {
                      type: 'boolean',
                      description: 'Whether or not the field is required.',
                    },
                  },
                  required: ['field_type', 'name'],
                },
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
              image: {
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
                description: 'An image for the plan. This will be visible on the product page to customers.',
              },
              initial_price: {
                type: 'number',
                description: 'An additional amount charged upon first purchase.',
              },
              internal_notes: {
                type: 'string',
                description: 'A personal description or notes section for the business.',
              },
              override_tax_type: {
                $ref: '#/$defs/tax_type',
              },
              payment_method_configuration: {
                type: 'object',
                description:
                  "The explicit payment method configuration for the plan. If not provided, the platform or company's defaults will apply.",
                properties: {
                  disabled: {
                    type: 'array',
                    description:
                      'An array of payment method identifiers that are explicitly disabled. Only applies if the include_platform_defaults is true.',
                    items: {
                      $ref: '#/$defs/payment_method_types',
                    },
                  },
                  enabled: {
                    type: 'array',
                    description:
                      'An array of payment method identifiers that are explicitly enabled. This means these payment methods will be shown on checkout. Example use case is to only enable a specific payment method like cashapp, or extending the platform defaults with additional methods.',
                    items: {
                      $ref: '#/$defs/payment_method_types',
                    },
                  },
                  include_platform_defaults: {
                    type: 'boolean',
                    description:
                      "Whether Whop's platform default payment method enablement settings are included in this configuration. The full list of default payment methods can be found in the documentation at docs.whop.com/payments.",
                  },
                },
                required: ['disabled', 'enabled', 'include_platform_defaults'],
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
              release_method: {
                $ref: '#/$defs/release_method',
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
            required: ['company_id', 'currency'],
          },
          affiliate_code: {
            type: 'string',
            description: 'The affiliate code to use for the checkout configuration',
          },
          metadata: {
            type: 'object',
            description: 'The metadata to use for the checkout configuration',
            additionalProperties: true,
          },
          mode: {
            type: 'string',
            description: 'The different modes a checkout can be set to.',
            enum: ['payment', 'setup'],
          },
          payment_method_configuration: {
            type: 'object',
            description:
              "This currently only works for configurations made in 'setup' mode. The explicit payment method configuration for the checkout session. If not provided, the platform or company's defaults will apply.",
            properties: {
              disabled: {
                type: 'array',
                description:
                  'An array of payment method identifiers that are explicitly disabled. Only applies if the include_platform_defaults is true.',
                items: {
                  $ref: '#/$defs/payment_method_types',
                },
              },
              enabled: {
                type: 'array',
                description:
                  'An array of payment method identifiers that are explicitly enabled. This means these payment methods will be shown on checkout. Example use case is to only enable a specific payment method like cashapp, or extending the platform defaults with additional methods.',
                items: {
                  $ref: '#/$defs/payment_method_types',
                },
              },
              include_platform_defaults: {
                type: 'boolean',
                description:
                  "Whether Whop's platform default payment method enablement settings are included in this configuration. The full list of default payment methods can be found in the documentation at docs.whop.com/payments.",
              },
            },
            required: ['disabled', 'enabled', 'include_platform_defaults'],
          },
          redirect_url: {
            type: 'string',
            description: 'The URL to redirect the user to after the checkout configuration is created',
          },
        },
        required: ['plan'],
      },
      {
        type: 'object',
        properties: {
          plan_id: {
            type: 'string',
            description: 'The ID of the plan to use for the checkout configuration',
          },
          affiliate_code: {
            type: 'string',
            description: 'The affiliate code to use for the checkout configuration',
          },
          metadata: {
            type: 'object',
            description: 'The metadata to use for the checkout configuration',
            additionalProperties: true,
          },
          mode: {
            type: 'string',
            description: 'The different modes a checkout can be set to.',
            enum: ['payment', 'setup'],
          },
          payment_method_configuration: {
            type: 'object',
            description:
              "This currently only works for configurations made in 'setup' mode. The explicit payment method configuration for the checkout session. If not provided, the platform or company's defaults will apply.",
            properties: {
              disabled: {
                type: 'array',
                description:
                  'An array of payment method identifiers that are explicitly disabled. Only applies if the include_platform_defaults is true.',
                items: {
                  $ref: '#/$defs/payment_method_types',
                },
              },
              enabled: {
                type: 'array',
                description:
                  'An array of payment method identifiers that are explicitly enabled. This means these payment methods will be shown on checkout. Example use case is to only enable a specific payment method like cashapp, or extending the platform defaults with additional methods.',
                items: {
                  $ref: '#/$defs/payment_method_types',
                },
              },
              include_platform_defaults: {
                type: 'boolean',
                description:
                  "Whether Whop's platform default payment method enablement settings are included in this configuration. The full list of default payment methods can be found in the documentation at docs.whop.com/payments.",
              },
            },
            required: ['disabled', 'enabled', 'include_platform_defaults'],
          },
          redirect_url: {
            type: 'string',
            description: 'The URL to redirect the user to after the checkout configuration is created',
          },
        },
        required: ['plan_id'],
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
      tax_type: {
        type: 'string',
        description: "Whether or not the tax is included in a plan's price (or if it hasn't been set up)",
        enum: ['inclusive', 'exclusive', 'unspecified'],
      },
      payment_method_types: {
        type: 'string',
        description: 'The different types of payment methods that can be used.',
        enum: [
          'acss_debit',
          'affirm',
          'afterpay_clearpay',
          'alipay',
          'alma',
          'amazon_pay',
          'apple_pay',
          'au_becs_debit',
          'bacs_debit',
          'bancontact',
          'billie',
          'blik',
          'boleto',
          'card',
          'cashapp',
          'crypto',
          'eps',
          'fpx',
          'giropay',
          'google_pay',
          'grabpay',
          'ideal',
          'kakao_pay',
          'klarna',
          'konbini',
          'kr_card',
          'link',
          'mobilepay',
          'multibanco',
          'naver_pay',
          'nz_bank_account',
          'oxxo',
          'p24',
          'pay_by_bank',
          'payco',
          'paynow',
          'pix',
          'promptpay',
          'revolut_pay',
          'samsung_pay',
          'satispay',
          'sepa_debit',
          'sofort',
          'swish',
          'twint',
          'us_bank_account',
          'wechat_pay',
          'zip',
          'bizum',
          'capchase_pay',
          'kriya',
          'mondu',
          'ng_wallet',
          'paypay',
          'sequra',
          'scalapay',
          'vipps',
          'custom',
          'customer_balance',
          'gopay',
          'mb_way',
          'ng_bank',
          'ng_bank_transfer',
          'ng_card',
          'ng_market',
          'ng_ussd',
          'paypal',
          'payto',
          'qris',
          'rechnung',
          'south_korea_market',
          'kr_market',
          'shopeepay',
          'upi',
          'sunbit',
          'netbanking',
          'id_bank_transfer',
          'demo_pay',
          'shop_pay',
          'sezzle',
          'coinbase',
          'splitit',
          'platform_balance',
          'apple',
          'unknown',
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
      release_method: {
        type: 'string',
        description: 'The methods of how a plan can be released.',
        enum: ['buy_now', 'waitlist'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.checkoutConfigurations.create(body));
};

export default { metadata, tool, handler };
