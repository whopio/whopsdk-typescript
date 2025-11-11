// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'plans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/plans',
  operationId: 'createPlan',
};

export const tool: Tool = {
  name: 'create_plans',
  description:
    'Create a new Plan\n\nRequired permissions:\n - `plan:create`\n - `access_pass:basic:read`\n - `plan:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The company the plan should be created for.',
      },
      product_id: {
        type: 'string',
        description: 'The product the plan is related to.',
      },
      billing_period: {
        type: 'integer',
        description: 'The interval in days at which the plan charges (renewal plans).',
      },
      currency: {
        $ref: '#/$defs/currency',
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
        description:
          'An additional amount charged upon first purchase. Use only if a one time payment OR you want to charge an additional amount on top of the renewal price. Provided as a number in dollars. Eg: 10.43 for $10.43',
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
      release_method: {
        $ref: '#/$defs/release_method',
      },
      renewal_price: {
        type: 'number',
        description:
          'The amount the customer is charged every billing period. Use only if a recurring payment. Provided as a number in dollars. Eg: 10.43 for $10.43',
      },
      stock: {
        type: 'integer',
        description: 'The number of units available for purchase.',
      },
      strike_through_initial_price: {
        type: 'number',
        description:
          'The price to display with a strikethrough for the initial price. Provided as a number in dollars. Eg: 19.99 for $19.99',
      },
      strike_through_renewal_price: {
        type: 'number',
        description:
          'The price to display with a strikethrough for the renewal price. Provided as a number in dollars. Eg: 19.99 for $19.99',
      },
      title: {
        type: 'string',
        description: 'The title of the plan. This will be visible on the product page to customers.',
      },
      trial_period_days: {
        type: 'integer',
        description: 'The number of free trial days added before a renewal plan.',
      },
      unlimited_stock: {
        type: 'boolean',
        description: "Limits/doesn't limit the number of units available for purchase.",
      },
      visibility: {
        $ref: '#/$defs/visibility',
      },
    },
    required: ['company_id', 'product_id'],
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
      release_method: {
        type: 'string',
        description: 'The methods of how a plan can be released.',
        enum: ['buy_now', 'waitlist'],
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
  return asTextContentResult(await client.plans.create(body));
};

export default { metadata, tool, handler };
