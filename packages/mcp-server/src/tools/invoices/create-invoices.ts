// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invoices',
  operationId: 'createInvoice',
};

export const tool: Tool = {
  name: 'create_invoices',
  description: 'Creates an invoice\n\nRequired permissions:\n - `invoice:create`\n - `plan:basic:read`',
  inputSchema: {
    type: 'object',
    properties: {
      collection_method: {
        $ref: '#/$defs/collection_method',
      },
      company_id: {
        type: 'string',
        description: 'The company ID to create this invoice for.',
      },
      due_date: {
        type: 'integer',
        description: 'The date the invoice is due, if applicable.',
      },
      plan: {
        type: 'object',
        description: 'The properties of the plan to create for this invoice.',
        properties: {
          ach_payments: {
            type: 'boolean',
            description: 'Whether or not ACH payments are accepted',
          },
          base_currency: {
            $ref: '#/$defs/currency',
          },
          billing_period: {
            type: 'integer',
            description: 'The interval at which the plan charges (renewal plans).',
          },
          card_payments: {
            type: 'boolean',
            description: 'Whether or not card payments are accepted',
          },
          coinbase_commerce_accepted: {
            type: 'boolean',
            description: "Marks whether coinbase commerce payments are/aren't accepted.",
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
          initial_price: {
            type: 'number',
            description: 'An additional amount charged upon first purchase.',
          },
          internal_notes: {
            type: 'string',
            description: 'A personal description or notes section for the business.',
          },
          offer_cancel_discount: {
            type: 'boolean',
            description: 'Whether or not to offer a discount to cancel a subscription.',
          },
          paypal_accepted: {
            type: 'boolean',
            description: "Marks whether paypal payments are/aren't accepted.",
          },
          plan_type: {
            type: 'string',
            description: 'The type of plan that can be attached to an access pass',
            enum: ['renewal', 'one_time'],
          },
          platform_balance_accepted: {
            type: 'boolean',
            description: "Marks whether platform balance payments are/aren't accepted.",
          },
          redirect_url: {
            type: 'string',
            description: 'The URL to redirect the customer to after purchase.',
          },
          release_method: {
            type: 'string',
            description: 'The methods of how a plan can be released (including raffles and waitlists).',
            enum: ['buy_now', 'waitlist', 'raffle'],
          },
          release_method_settings: {
            type: 'object',
            description: 'Configurable settings on how this plan is released.',
            properties: {
              expires_at: {
                type: 'integer',
                description: 'When the raffle will expire',
              },
              max_entries: {
                type: 'integer',
                description: 'The maximum number of entries allowed for the raffle or waitlist',
              },
              nft_weighted_entries: {
                type: 'boolean',
                description:
                  'If this is enabled, the raffle will get entries based off of how many NFTs the user owns',
              },
              starts_at: {
                type: 'integer',
                description: 'When the raffle will start',
              },
            },
          },
          renewal_price: {
            type: 'number',
            description: 'The amount the customer is charged every billing period.',
          },
          split_pay_required_payments: {
            type: 'integer',
            description: 'The number of payments required before pausing the subscription.',
          },
          splitit_accepted: {
            type: 'boolean',
            description:
              "Marks whether payments using splitit, a payment processor, are/aren't accepted for the plan.",
          },
          stock: {
            type: 'integer',
            description: 'The number of units available for purchase.',
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
            type: 'string',
            description: 'Visibility of a resource',
            enum: ['visible', 'hidden', 'archived', 'quick_link'],
          },
        },
      },
      charge_buyer_fee: {
        type: 'boolean',
        description: 'Whether or not to charge the customer a buyer fee.',
      },
      customer_name: {
        type: 'string',
        description:
          'The name of the customer to create this invoice for. This is required if you want to create an invoice for a customer who does not have a member of your company yet.',
      },
      email_address: {
        type: 'string',
        description:
          'The email address to create this invoice for. This is required if you want to create an invoice for a user who does not have a member of your company yet.',
      },
      member_id: {
        type: 'string',
        description:
          'The member ID to create this invoice for. Include this if you want to create an invoice for an existing member. If you do not have a member ID, you must provide an email_address and customer_name.',
      },
      payment_token_id: {
        type: 'string',
        description:
          'The payment token ID to use for this invoice. If using charge_automatically, you must provide a payment_token.',
      },
      product: {
        type: 'object',
        description:
          'The properties of the access pass to create for this invoice. Include this if you want to create an invoice for a new product.',
        properties: {
          title: {
            type: 'string',
            description: 'The title of the access pass.',
          },
          product_tax_code_id: {
            type: 'string',
            description: 'The ID of the product tax code to apply to this access pass.',
          },
        },
        required: ['title'],
      },
      product_id: {
        type: 'string',
        description:
          'The access pass ID to create this invoice for. Include this if you want to create an invoice for an existing product.',
      },
    },
    required: ['collection_method', 'company_id', 'due_date', 'plan'],
    $defs: {
      collection_method: {
        type: 'string',
        description: 'The method of collection for an invoice.',
        enum: ['send_invoice', 'charge_automatically'],
      },
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
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.invoices.create(body));
};

export default { metadata, tool, handler };
