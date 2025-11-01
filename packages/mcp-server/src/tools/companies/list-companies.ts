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
  httpPath: '/companies',
  operationId: 'listCompany',
};

export const tool: Tool = {
  name: 'list_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists companies the current user has access to\n\nRequired permissions:\n - `company:basic:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicCompany.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/company_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    company_list_response: {\n      type: 'object',\n      description: 'An object representing a (sanitized) company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID (tag) of the company.'\n        },\n        business_type: {\n          $ref: '#/$defs/business_types'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the company was created (signed up)',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The creator pitch for the company.'\n        },\n        industry_type: {\n          $ref: '#/$defs/industry_types'\n        },\n        logo: {\n          type: 'object',\n          description: 'The company\\'s logo.',\n          properties: {\n            url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            }\n          },\n          required: [            'url'\n          ]\n        },\n        member_count: {\n          type: 'integer',\n          description: 'The number of members in the company.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'A key-value store of data for the account, created/updated by the platform that made the account.',\n          additionalProperties: true\n        },\n        owner_user: {\n          type: 'object',\n          description: 'The user who owns this company',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        published_reviews_count: {\n          type: 'integer',\n          description: 'The number of reviews that have been published for the company.'\n        },\n        route: {\n          type: 'string',\n          description: 'The slug/route of the company on the Whop site.'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the company.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The time the company was last updated.',\n          format: 'date-time'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'If the company is Whop Verified'\n        }\n      },\n      required: [        'id',\n        'business_type',\n        'created_at',\n        'description',\n        'industry_type',\n        'logo',\n        'member_count',\n        'metadata',\n        'owner_user',\n        'published_reviews_count',\n        'route',\n        'title',\n        'updated_at',\n        'verified'\n      ]\n    },\n    business_types: {\n      type: 'string',\n      description: 'The different business types a company can be.',\n      enum: [        'education_program',\n        'coaching',\n        'software',\n        'paid_group',\n        'newsletter',\n        'agency',\n        'physical_products',\n        'brick_and_mortar',\n        'events',\n        'coaching_and_courses',\n        'other',\n        'saas',\n        'course',\n        'community'\n      ]\n    },\n    industry_types: {\n      type: 'string',\n      description: 'The different industry types a company can be in.',\n      enum: [        'trading',\n        'sports_betting',\n        'reselling',\n        'fitness',\n        'amazon_fba',\n        'real_estate',\n        'kindle_book_publishing',\n        'dating',\n        'agencies',\n        'health_and_wellness',\n        'social_media',\n        'sales',\n        'business',\n        'ecommerce',\n        'video_games',\n        'home_services',\n        'ai',\n        'public_speaking',\n        'personal_finance',\n        'careers',\n        'travel',\n        'clipping',\n        'spirituality',\n        'vas',\n        'personal_development',\n        'software',\n        'other',\n        'marketing_agency',\n        'sales_agency',\n        'ai_agency',\n        'design_agency',\n        'coaching_agency',\n        'development_agency',\n        'recruiting_agency',\n        'customer_support_agency',\n        'clipping_agency',\n        'clothing',\n        'supplements',\n        'beauty_and_personal_care',\n        'fitness_gear',\n        'accessories',\n        'home_goods',\n        'electronics_and_gadgets',\n        'food_and_beverages',\n        'gym',\n        'restaurant',\n        'retail_store',\n        'coffee_shop',\n        'salon_spa',\n        'medical_dentist_office',\n        'hotel_lodging',\n        'auto_repair_shop',\n        'masterminds',\n        'webinars',\n        'bootcamps',\n        'convention',\n        'concerts',\n        'meetups',\n        'parties'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      parent_company_id: {
        type: 'string',
        description: 'The ID of the parent company to list sub companies for',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
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
    required: ['parent_company_id'],
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
  const response = await client.companies.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
