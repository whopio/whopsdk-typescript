// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    checkout_job_id: {\n      type: 'string'\n    },\n    invoice: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'integer'\n        },\n        current_plan: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            base_currency: {\n              type: 'string',\n              enum: [                'usd',\n                'sgd',\n                'inr',\n                'aud',\n                'brl',\n                'cad',\n                'dkk',\n                'eur',\n                'nok',\n                'gbp',\n                'sek',\n                'chf',\n                'hkd',\n                'huf',\n                'jpy',\n                'mxn',\n                'myr',\n                'pln',\n                'czk',\n                'nzd',\n                'aed',\n                'eth',\n                'ape',\n                'cop',\n                'ron',\n                'thb',\n                'bgn',\n                'idr',\n                'dop',\n                'php',\n                'try',\n                'krw',\n                'twd',\n                'vnd',\n                'pkr',\n                'clp',\n                'uyu',\n                'ars',\n                'zar',\n                'dzd',\n                'tnd',\n                'mad',\n                'kes',\n                'kwd',\n                'jod',\n                'all',\n                'xcd',\n                'amd',\n                'bsd',\n                'bhd',\n                'bob',\n                'bam',\n                'khr',\n                'crc',\n                'xof',\n                'egp',\n                'etb',\n                'gmd',\n                'ghs',\n                'gtq',\n                'gyd',\n                'ils',\n                'jmd',\n                'mop',\n                'mga',\n                'mur',\n                'mdl',\n                'mnt',\n                'nad',\n                'ngn',\n                'mkd',\n                'omr',\n                'pyg',\n                'pen',\n                'qar',\n                'rwf',\n                'sar',\n                'rsd',\n                'lkr',\n                'tzs',\n                'ttd',\n                'uzs',\n                'rub',\n                'btc'\n              ]\n            },\n            formatted_price: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'base_currency',\n            'formatted_price'\n          ]\n        },\n        due_date: {\n          type: 'integer'\n        },\n        email_address: {\n          type: 'string'\n        },\n        fetch_invoice_token: {\n          type: 'string'\n        },\n        member: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            email: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            username: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        },\n        number: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'open',\n            'paid',\n            'past_due',\n            'void'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'current_plan',\n        'due_date',\n        'email_address',\n        'fetch_invoice_token',\n        'member',\n        'number',\n        'status'\n      ]\n    }\n  },\n  required: [    'checkout_job_id',\n    'invoice'\n  ]\n}\n```",
  inputSchema: {
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
            type: 'number',
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
            type: 'number',
          },
          requirements: {
            type: 'object',
            properties: {
              custom_password: {
                type: 'string',
              },
              email_required: {
                type: 'string',
                enum: [true],
              },
              ownership_of_access_passes: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['collection_method', 'due_date', 'plan'],
  },
  annotations: {},
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.create(body)));
};

export default { metadata, tool, handler };
