// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/companies/{id}',
  operationId: 'retrieveCompany',
};

export const tool: Tool = {
  name: 'retrieve_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an company by ID or its url route\n\nRequired permissions:\n - `company:basic:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company',\n  $defs: {\n    company: {\n      type: 'object',\n      description: 'An object representing a (sanitized) company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID (tag) of the company.'\n        },\n        business_type: {\n          $ref: '#/$defs/business_types'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'When the company was created (signed up)'\n        },\n        industry_type: {\n          $ref: '#/$defs/industry_types'\n        },\n        member_count: {\n          type: 'integer',\n          description: 'The number of members in the company.'\n        },\n        owner_user: {\n          type: 'object',\n          description: 'The user who owns this company',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        published_reviews_count: {\n          type: 'integer',\n          description: 'The number of reviews that have been published for the company.'\n        },\n        route: {\n          type: 'string',\n          description: 'The slug/route of the company on the Whop site.'\n        },\n        social_links: {\n          type: 'array',\n          description: 'The social media accounts of the company',\n          items: {\n            type: 'object',\n            description: 'A social link attached to a resource on the site.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID'\n              },\n              url: {\n                type: 'string',\n                description: 'The URL'\n              },\n              website: {\n                type: 'string',\n                description: 'The website',\n                enum: [                  'x',\n                  'instagram',\n                  'facebook',\n                  'tiktok',\n                  'youtube',\n                  'linkedin',\n                  'twitch',\n                  'website'\n                ]\n              }\n            },\n            required: [              'id',\n              'url',\n              'website'\n            ]\n          }\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the company.'\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'The time the company was last updated.'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'If the company is Whop Verified'\n        }\n      },\n      required: [        'id',\n        'business_type',\n        'created_at',\n        'industry_type',\n        'member_count',\n        'owner_user',\n        'published_reviews_count',\n        'route',\n        'social_links',\n        'title',\n        'updated_at',\n        'verified'\n      ]\n    },\n    business_types: {\n      type: 'string',\n      description: 'The different business types a company can be.',\n      enum: [        'education_program',\n        'coaching',\n        'software',\n        'paid_group',\n        'newsletter',\n        'agency',\n        'physical_products',\n        'brick_and_mortar',\n        'events',\n        'coaching_and_courses',\n        'other',\n        'saas',\n        'course',\n        'community'\n      ]\n    },\n    industry_types: {\n      type: 'string',\n      description: 'The different industry types a company can be in.',\n      enum: [        'trading',\n        'sports_betting',\n        'reselling',\n        'fitness',\n        'amazon_fba',\n        'real_estate',\n        'kindle_book_publishing',\n        'dating',\n        'agencies',\n        'health_and_wellness',\n        'social_media',\n        'sales',\n        'business',\n        'ecommerce',\n        'video_games',\n        'home_services',\n        'ai',\n        'public_speaking',\n        'personal_finance',\n        'careers',\n        'travel',\n        'clipping',\n        'spirituality',\n        'vas',\n        'personal_development',\n        'software',\n        'other',\n        'marketing_agency',\n        'sales_agency',\n        'ai_agency',\n        'design_agency',\n        'coaching_agency',\n        'development_agency',\n        'recruiting_agency',\n        'customer_support_agency',\n        'clipping_agency',\n        'clothing',\n        'supplements',\n        'beauty_and_personal_care',\n        'fitness_gear',\n        'accessories',\n        'home_goods',\n        'electronics_and_gadgets',\n        'food_and_beverages',\n        'gym',\n        'restaurant',\n        'retail_store',\n        'coffee_shop',\n        'salon_spa',\n        'medical_dentist_office',\n        'hotel_lodging',\n        'auto_repair_shop',\n        'masterminds',\n        'webinars',\n        'bootcamps',\n        'convention',\n        'concerts',\n        'meetups',\n        'parties'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.companies.retrieve(id)));
};

export default { metadata, tool, handler };
