// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'access_passes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/access_passes/{id}',
  operationId: 'retrieveAccessPass',
};

export const tool: Tool = {
  name: 'retrieve_access_passes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an access pass by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/access_pass',\n  $defs: {\n    access_pass: {\n      type: 'object',\n      description: 'An object representing a (sanitized) access pass.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the public access pass.'\n        },\n        business_type: {\n          $ref: '#/$defs/business_types'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'When the access pass was created.'\n        },\n        industry_type: {\n          $ref: '#/$defs/industry_types'\n        },\n        member_count: {\n          type: 'integer',\n          description: 'The number of active users for this access pass.'\n        },\n        owner_user: {\n          type: 'object',\n          description: 'The user that owns the access pass (company owner).',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        published_reviews_count: {\n          type: 'integer',\n          description: 'The number of reviews that have been published for the access pass.'\n        },\n        route: {\n          type: 'string',\n          description: 'The route of the access pass.'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the access pass. Use for Whop 4.0.'\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'When the access pass was updated.'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'Whether this product is Whop verified.'\n        }\n      },\n      required: [        'id',\n        'business_type',\n        'created_at',\n        'industry_type',\n        'member_count',\n        'owner_user',\n        'published_reviews_count',\n        'route',\n        'title',\n        'updated_at',\n        'verified'\n      ]\n    },\n    business_types: {\n      type: 'string',\n      description: 'The different business types a company can be.',\n      enum: [        'education_program',\n        'coaching',\n        'software',\n        'paid_group',\n        'newsletter',\n        'agency',\n        'physical_products',\n        'brick_and_mortar',\n        'events',\n        'coaching_and_courses',\n        'other',\n        'saas',\n        'course',\n        'community'\n      ]\n    },\n    industry_types: {\n      type: 'string',\n      description: 'The different industry types a company can be in.',\n      enum: [        'trading',\n        'sports_betting',\n        'reselling',\n        'fitness',\n        'amazon_fba',\n        'real_estate',\n        'kindle_book_publishing',\n        'dating',\n        'agencies',\n        'health_and_wellness',\n        'social_media',\n        'sales',\n        'business',\n        'ecommerce',\n        'video_games',\n        'home_services',\n        'ai',\n        'public_speaking',\n        'personal_finance',\n        'careers',\n        'travel',\n        'clipping',\n        'spirituality',\n        'vas',\n        'personal_development',\n        'software',\n        'other',\n        'marketing_agency',\n        'sales_agency',\n        'ai_agency',\n        'design_agency',\n        'coaching_agency',\n        'development_agency',\n        'recruiting_agency',\n        'customer_support_agency',\n        'clipping_agency',\n        'clothing',\n        'supplements',\n        'beauty_and_personal_care',\n        'fitness_gear',\n        'accessories',\n        'home_goods',\n        'electronics_and_gadgets',\n        'food_and_beverages',\n        'gym',\n        'restaurant',\n        'retail_store',\n        'coffee_shop',\n        'salon_spa',\n        'medical_dentist_office',\n        'hotel_lodging',\n        'auto_repair_shop',\n        'masterminds',\n        'webinars',\n        'bootcamps',\n        'convention',\n        'concerts',\n        'meetups',\n        'parties'\n      ]\n    }\n  }\n}\n```",
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

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.accessPasses.retrieve(id)));
};

export default { metadata, tool, handler };
