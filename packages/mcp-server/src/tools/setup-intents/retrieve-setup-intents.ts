// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'setup_intents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/setup_intents/{id}',
  operationId: 'retrieveSetupIntent',
};

export const tool: Tool = {
  name: 'retrieve_setup_intents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a Setup Intent by ID\n\nRequired permissions:\n - `payment:setup_intent:read`\n - `member:basic:read`\n - `member:email:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/setup_intent',\n  $defs: {\n    setup_intent: {\n      type: 'object',\n      description: 'An object representing a setup intent, which is a flow for allowing a customer to add a payment method to their account without making a purchase.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The setup intent ID'\n        },\n        checkout_configuration: {\n          type: 'object',\n          description: 'The checkout configuration associated with the setup intent',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the checkout configuration'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        company: {\n          type: 'object',\n          description: 'The company of the setup intent',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'The datetime the payment was created',\n          format: 'date-time'\n        },\n        error_message: {\n          type: 'string',\n          description: 'The error message, if any.'\n        },\n        member: {\n          type: 'object',\n          description: 'The member connected to the setup intent',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the member'\n            },\n            user: {\n              type: 'object',\n              description: 'The user for this member, if any.',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The internal ID of the user account.'\n                },\n                email: {\n                  type: 'string',\n                  description: 'The digital mailing address of the user.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The user\\'s full name.'\n                },\n                username: {\n                  type: 'string',\n                  description: 'The whop username.'\n                }\n              },\n              required: [                'id',\n                'email',\n                'name',\n                'username'\n              ]\n            }\n          },\n          required: [            'id',\n            'user'\n          ]\n        },\n        metadata: {\n          type: 'object',\n          description: 'The metadata associated with the setup intent',\n          additionalProperties: true\n        },\n        payment_token: {\n          type: 'object',\n          description: 'The payment token created during the setup, if available.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the payment token'\n            },\n            card: {\n              type: 'object',\n              description: 'The card data associated with the payment token, if its a debit or credit card token.',\n              properties: {\n                brand: {\n                  $ref: '#/$defs/card_brands'\n                },\n                exp_month: {\n                  type: 'integer',\n                  description: 'Card expiration month, like 03 for March.'\n                },\n                exp_year: {\n                  type: 'integer',\n                  description: 'Card expiration year, like 27 for 2027.'\n                },\n                last4: {\n                  type: 'string',\n                  description: 'Last four digits of the card.'\n                }\n              },\n              required: [                'brand',\n                'exp_month',\n                'exp_year',\n                'last4'\n              ]\n            },\n            created_at: {\n              type: 'string',\n              description: 'The date and time the payment token was created',\n              format: 'date-time'\n            },\n            payment_method_type: {\n              $ref: '#/$defs/payment_method_types'\n            }\n          },\n          required: [            'id',\n            'card',\n            'created_at',\n            'payment_method_type'\n          ]\n        },\n        status: {\n          $ref: '#/$defs/setup_intent_status'\n        }\n      },\n      required: [        'id',\n        'checkout_configuration',\n        'company',\n        'created_at',\n        'error_message',\n        'member',\n        'metadata',\n        'payment_token',\n        'status'\n      ]\n    },\n    card_brands: {\n      type: 'string',\n      description: 'Possible card brands that a payment token can have',\n      enum: [        'mastercard',\n        'visa',\n        'amex',\n        'discover',\n        'unionpay',\n        'jcb',\n        'diners',\n        'link',\n        'troy',\n        'visadankort',\n        'visabancontact',\n        'china_union_pay',\n        'rupay',\n        'jcbrupay',\n        'elo',\n        'maestro',\n        'unknown'\n      ]\n    },\n    payment_method_types: {\n      type: 'string',\n      description: 'The different types of payment methods that can be used.',\n      enum: [        'acss_debit',\n        'affirm',\n        'afterpay_clearpay',\n        'alipay',\n        'alma',\n        'amazon_pay',\n        'apple_pay',\n        'au_becs_debit',\n        'bacs_debit',\n        'bancontact',\n        'billie',\n        'blik',\n        'boleto',\n        'card',\n        'cashapp',\n        'crypto',\n        'eps',\n        'fpx',\n        'giropay',\n        'google_pay',\n        'grabpay',\n        'ideal',\n        'kakao_pay',\n        'klarna',\n        'konbini',\n        'kr_card',\n        'link',\n        'mobilepay',\n        'multibanco',\n        'naver_pay',\n        'nz_bank_account',\n        'oxxo',\n        'p24',\n        'pay_by_bank',\n        'payco',\n        'paynow',\n        'pix',\n        'promptpay',\n        'revolut_pay',\n        'samsung_pay',\n        'satispay',\n        'sepa_debit',\n        'sofort',\n        'swish',\n        'twint',\n        'us_bank_account',\n        'wechat_pay',\n        'zip',\n        'bizum',\n        'capchase_pay',\n        'kriya',\n        'mondu',\n        'ng_wallet',\n        'paypay',\n        'sequra',\n        'scalapay',\n        'vipps',\n        'custom',\n        'customer_balance',\n        'gopay',\n        'mb_way',\n        'ng_bank',\n        'ng_bank_transfer',\n        'ng_card',\n        'ng_market',\n        'ng_ussd',\n        'paypal',\n        'payto',\n        'qris',\n        'rechnung',\n        'south_korea_market',\n        'kr_market',\n        'shopeepay',\n        'upi',\n        'sunbit',\n        'netbanking',\n        'id_bank_transfer',\n        'demo_pay',\n        'shop_pay',\n        'sezzle',\n        'coinbase',\n        'splitit',\n        'platform_balance',\n        'apple',\n        'venmo',\n        'unknown'\n      ]\n    },\n    setup_intent_status: {\n      type: 'string',\n      description: 'The status of the setup intent.',\n      enum: [        'processing',\n        'succeeded',\n        'canceled',\n        'requires_action'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.setupIntents.retrieve(id)));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
