// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

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
    anyOf: [
      {
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
            type: 'string',
            description: 'The date the invoice is due, if applicable.',
            format: 'date-time',
          },
          member_id: {
            type: 'string',
            description:
              'The member ID to create this invoice for. Include this if you want to create an invoice for an existing member. If you do not have a member ID, you must provide an email_address and customer_name.',
          },
          plan: {
            type: 'object',
            description: 'The properties of the plan to create for this invoice.',
            properties: {
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
              initial_price: {
                type: 'number',
                description:
                  'An additional amount charged upon first purchase. Use only if a one time payment OR you want to charge an additional amount on top of the renewal price. Provided as a number in dollars. Eg: 10.43 for $10.43',
              },
              internal_notes: {
                type: 'string',
                description: 'A personal description or notes section for the business.',
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
          },
          product: {
            type: 'object',
            description:
              'The properties of the product to create for this invoice. Include this if you want to create an invoice for a new product.',
            properties: {
              title: {
                type: 'string',
                description: 'The title of the product.',
              },
              product_tax_code_id: {
                type: 'string',
                description: 'The ID of the product tax code to apply to this product.',
              },
            },
            required: ['title'],
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
          payment_token_id: {
            type: 'string',
            description:
              'The payment token ID to use for this invoice. If using charge_automatically, you must provide a payment_token.',
          },
        },
        required: ['collection_method', 'company_id', 'due_date', 'member_id', 'plan', 'product'],
      },
      {
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
            type: 'string',
            description: 'The date the invoice is due, if applicable.',
            format: 'date-time',
          },
          email_address: {
            type: 'string',
            description:
              'The email address to create this invoice for. This is required if you want to create an invoice for a user who does not have a member of your company yet.',
          },
          plan: {
            type: 'object',
            description: 'The properties of the plan to create for this invoice.',
            properties: {
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
              initial_price: {
                type: 'number',
                description:
                  'An additional amount charged upon first purchase. Use only if a one time payment OR you want to charge an additional amount on top of the renewal price. Provided as a number in dollars. Eg: 10.43 for $10.43',
              },
              internal_notes: {
                type: 'string',
                description: 'A personal description or notes section for the business.',
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
          },
          product: {
            type: 'object',
            description:
              'The properties of the product to create for this invoice. Include this if you want to create an invoice for a new product.',
            properties: {
              title: {
                type: 'string',
                description: 'The title of the product.',
              },
              product_tax_code_id: {
                type: 'string',
                description: 'The ID of the product tax code to apply to this product.',
              },
            },
            required: ['title'],
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
          payment_token_id: {
            type: 'string',
            description:
              'The payment token ID to use for this invoice. If using charge_automatically, you must provide a payment_token.',
          },
        },
        required: ['collection_method', 'company_id', 'due_date', 'email_address', 'plan', 'product'],
      },
      {
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
            type: 'string',
            description: 'The date the invoice is due, if applicable.',
            format: 'date-time',
          },
          member_id: {
            type: 'string',
            description:
              'The member ID to create this invoice for. Include this if you want to create an invoice for an existing member. If you do not have a member ID, you must provide an email_address and customer_name.',
          },
          plan: {
            type: 'object',
            description: 'The properties of the plan to create for this invoice.',
            properties: {
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
              initial_price: {
                type: 'number',
                description:
                  'An additional amount charged upon first purchase. Use only if a one time payment OR you want to charge an additional amount on top of the renewal price. Provided as a number in dollars. Eg: 10.43 for $10.43',
              },
              internal_notes: {
                type: 'string',
                description: 'A personal description or notes section for the business.',
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
          },
          product_id: {
            type: 'string',
            description:
              'The product ID to create this invoice for. Include this if you want to create an invoice for an existing product.',
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
          payment_token_id: {
            type: 'string',
            description:
              'The payment token ID to use for this invoice. If using charge_automatically, you must provide a payment_token.',
          },
        },
        required: ['collection_method', 'company_id', 'due_date', 'member_id', 'plan', 'product_id'],
      },
      {
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
            type: 'string',
            description: 'The date the invoice is due, if applicable.',
            format: 'date-time',
          },
          email_address: {
            type: 'string',
            description:
              'The email address to create this invoice for. This is required if you want to create an invoice for a user who does not have a member of your company yet.',
          },
          plan: {
            type: 'object',
            description: 'The properties of the plan to create for this invoice.',
            properties: {
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
              initial_price: {
                type: 'number',
                description:
                  'An additional amount charged upon first purchase. Use only if a one time payment OR you want to charge an additional amount on top of the renewal price. Provided as a number in dollars. Eg: 10.43 for $10.43',
              },
              internal_notes: {
                type: 'string',
                description: 'A personal description or notes section for the business.',
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
          },
          product_id: {
            type: 'string',
            description:
              'The product ID to create this invoice for. Include this if you want to create an invoice for an existing product.',
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
          payment_token_id: {
            type: 'string',
            description:
              'The payment token ID to use for this invoice. If using charge_automatically, you must provide a payment_token.',
          },
        },
        required: ['collection_method', 'company_id', 'due_date', 'email_address', 'plan', 'product_id'],
      },
    ],
    $defs: {
      collection_method: {
        type: 'string',
        description: 'The method of collection for an invoice.',
        enum: ['send_invoice', 'charge_automatically'],
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
  try {
    return asTextContentResult(await client.invoices.create(body));
  } catch (error) {
    if (error instanceof Whop.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
