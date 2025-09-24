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
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'object',
        properties: {
          collection_method: {
            type: 'string',
            enum: ['send_invoice', 'charge_automatically'],
          },
          due_date: {
            type: 'integer',
          },
          plan: {
            type: 'object',
            properties: {
              ach_payments: {
                type: 'boolean',
              },
              base_currency: {
                type: 'string',
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
              billing_period: {
                type: 'integer',
              },
              card_payments: {
                type: 'boolean',
              },
              coinbase_commerce_accepted: {
                type: 'boolean',
              },
              custom_fields: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    field_type: {
                      type: 'string',
                      enum: ['text'],
                    },
                    name: {
                      type: 'string',
                    },
                    id: {
                      type: 'string',
                    },
                    order: {
                      type: 'integer',
                    },
                    placeholder: {
                      type: 'string',
                    },
                    required: {
                      type: 'boolean',
                    },
                  },
                  required: ['field_type', 'name'],
                },
              },
              description: {
                type: 'string',
              },
              expiration_days: {
                type: 'integer',
              },
              initial_price: {
                type: 'object',
                additionalProperties: true,
              },
              internal_notes: {
                type: 'string',
              },
              offer_cancel_discount: {
                type: 'boolean',
              },
              paypal_accepted: {
                type: 'boolean',
              },
              plan_type: {
                type: 'string',
                enum: ['renewal', 'one_time'],
              },
              platform_balance_accepted: {
                type: 'boolean',
              },
              redirect_url: {
                type: 'string',
              },
              release_method: {
                type: 'string',
                enum: ['buy_now', 'waitlist', 'raffle'],
              },
              release_method_settings: {
                type: 'object',
                properties: {
                  expires_at: {
                    type: 'integer',
                  },
                  max_entries: {
                    type: 'integer',
                  },
                  nft_weighted_entries: {
                    type: 'boolean',
                  },
                  starts_at: {
                    type: 'integer',
                  },
                },
              },
              renewal_price: {
                type: 'object',
                additionalProperties: true,
              },
              requirements: {
                type: 'object',
                additionalProperties: true,
              },
              split_pay_required_payments: {
                type: 'integer',
              },
              splitit_accepted: {
                type: 'boolean',
              },
              stock: {
                type: 'integer',
              },
              trial_period_days: {
                type: 'integer',
              },
              unlimited_stock: {
                type: 'boolean',
              },
              visibility: {
                type: 'string',
                enum: ['visible', 'hidden', 'archived', 'quick_link'],
              },
            },
          },
          access_pass: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
              },
              product_tax_code_id: {
                type: 'string',
              },
            },
            required: ['title'],
          },
          access_pass_id: {
            type: 'string',
          },
          charge_buyer_fee: {
            type: 'boolean',
          },
          client_mutation_id: {
            type: 'string',
          },
          customer_name: {
            type: 'string',
          },
          email_address: {
            type: 'string',
          },
          member_id: {
            type: 'string',
          },
          payment_token_id: {
            type: 'string',
          },
        },
        required: ['collection_method', 'due_date', 'plan'],
      },
    },
    required: ['input'],
  },
  annotations: {},
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.invoices.create(body));
};

export default { metadata, tool, handler };
