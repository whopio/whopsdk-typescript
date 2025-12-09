// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payment_methods',
  operationId: 'listPaymentMethod',
};

export const tool: Tool = {
  name: 'list_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nA payment method is a stored representation of how a customer intends to pay, such as a card, bank account, or digital wallet. It holds the necessary billing details and can be attached to a member for future one-time or recurring charges. This lets you reuse the same payment credentials across multiple payments.\n\nRequired permissions:\n - `member:payment_methods:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PaymentToken.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/payment_method_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    payment_method_list_response: {\n      type: 'object',\n      description: 'A stored payment method used to process payments. This could be a credit/debit card, bank account, PayPal wallet, etc.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the payment method'\n        },\n        bank: {\n          type: 'object',\n          description: 'The bank account data associated with the payment method, if it\\'s a bank account.',\n          properties: {\n            account_type: {\n              type: 'string',\n              description: 'The type of account'\n            },\n            bank_name: {\n              type: 'string',\n              description: 'The name of the bank'\n            },\n            last4: {\n              type: 'string',\n              description: 'The last 4 digits of the account number'\n            }\n          },\n          required: [            'account_type',\n            'bank_name',\n            'last4'\n          ]\n        },\n        card: {\n          type: 'object',\n          description: 'The card data associated with the payment method, if its a debit or credit card.',\n          properties: {\n            brand: {\n              $ref: '#/$defs/card_brands'\n            },\n            exp_month: {\n              type: 'integer',\n              description: 'Card expiration month, like 03 for March.'\n            },\n            exp_year: {\n              type: 'integer',\n              description: 'Card expiration year, like 27 for 2027.'\n            },\n            last4: {\n              type: 'string',\n              description: 'Last four digits of the card.'\n            }\n          },\n          required: [            'brand',\n            'exp_month',\n            'exp_year',\n            'last4'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'The date and time the payment method was created',\n          format: 'date-time'\n        },\n        payment_method_type: {\n          $ref: '#/$defs/payment_method_types'\n        }\n      },\n      required: [        'id',\n        'bank',\n        'card',\n        'created_at',\n        'payment_method_type'\n      ]\n    },\n    card_brands: {\n      type: 'string',\n      description: 'Possible card brands that a payment token can have',\n      enum: [        'mastercard',\n        'visa',\n        'amex',\n        'discover',\n        'unionpay',\n        'jcb',\n        'diners',\n        'link',\n        'troy',\n        'visadankort',\n        'visabancontact',\n        'china_union_pay',\n        'rupay',\n        'jcbrupay',\n        'elo',\n        'maestro',\n        'unknown'\n      ]\n    },\n    payment_method_types: {\n      type: 'string',\n      description: 'The different types of payment methods that can be used.',\n      enum: [        'acss_debit',\n        'affirm',\n        'afterpay_clearpay',\n        'alipay',\n        'alma',\n        'amazon_pay',\n        'apple_pay',\n        'au_becs_debit',\n        'bacs_debit',\n        'bancontact',\n        'billie',\n        'blik',\n        'boleto',\n        'card',\n        'cashapp',\n        'crypto',\n        'eps',\n        'fpx',\n        'giropay',\n        'google_pay',\n        'grabpay',\n        'ideal',\n        'kakao_pay',\n        'klarna',\n        'konbini',\n        'kr_card',\n        'link',\n        'mobilepay',\n        'multibanco',\n        'naver_pay',\n        'nz_bank_account',\n        'oxxo',\n        'p24',\n        'pay_by_bank',\n        'payco',\n        'paynow',\n        'pix',\n        'promptpay',\n        'revolut_pay',\n        'samsung_pay',\n        'satispay',\n        'sepa_debit',\n        'sofort',\n        'swish',\n        'twint',\n        'us_bank_account',\n        'wechat_pay',\n        'zip',\n        'bizum',\n        'capchase_pay',\n        'kriya',\n        'mondu',\n        'ng_wallet',\n        'paypay',\n        'sequra',\n        'scalapay',\n        'vipps',\n        'custom',\n        'customer_balance',\n        'gopay',\n        'mb_way',\n        'ng_bank',\n        'ng_bank_transfer',\n        'ng_card',\n        'ng_market',\n        'ng_ussd',\n        'paypal',\n        'payto',\n        'qris',\n        'rechnung',\n        'south_korea_market',\n        'kr_market',\n        'shopeepay',\n        'upi',\n        'sunbit',\n        'netbanking',\n        'id_bank_transfer',\n        'demo_pay',\n        'shop_pay',\n        'sezzle',\n        'coinbase',\n        'splitit',\n        'platform_balance',\n        'apple',\n        'venmo',\n        'unknown'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      member_id: {
        type: 'string',
        description: 'The ID of the Member to list payment methods for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      created_after: {
        type: 'string',
        description: 'The minimum creation date to filter by',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'The maximum creation date to filter by',
        format: 'date-time',
      },
      direction: {
        $ref: '#/$defs/direction',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['member_id'],
    $defs: {
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.paymentMethods.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
