// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/products',
  operationId: 'listProduct',
};

export const tool: Tool = {
  name: 'list_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists products for a company\n\nRequired permissions:\n - `access_pass:basic:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicAccessPass.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/product_list_item'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    product_list_item: {\n      type: 'object',\n      description: 'An object representing a (sanitized) access pass.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the public product.'\n        },\n        business_type: {\n          $ref: '#/$defs/business_types'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the product was created.',\n          format: 'date-time'\n        },\n        external_identifier: {\n          type: 'string',\n          description: 'A unique identifier used to create or update products. When provided on product creation endpoints, we’ll look up an existing product by this identifier — if it exists, we’ll update it; if not, we’ll create a new one.'\n        },\n        headline: {\n          type: 'string',\n          description: 'The headline of the product.'\n        },\n        industry_type: {\n          $ref: '#/$defs/industry_types'\n        },\n        member_count: {\n          type: 'integer',\n          description: 'The number of active users for this product.'\n        },\n        published_reviews_count: {\n          type: 'integer',\n          description: 'The number of reviews that have been published for the product.'\n        },\n        route: {\n          type: 'string',\n          description: 'The route of the product.'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the product. Use for Whop 4.0.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the product was updated.',\n          format: 'date-time'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'Whether this product is Whop verified.'\n        },\n        visibility: {\n          $ref: '#/$defs/visibility'\n        }\n      },\n      required: [        'id',\n        'business_type',\n        'created_at',\n        'external_identifier',\n        'headline',\n        'industry_type',\n        'member_count',\n        'published_reviews_count',\n        'route',\n        'title',\n        'updated_at',\n        'verified',\n        'visibility'\n      ]\n    },\n    business_types: {\n      type: 'string',\n      description: 'The different business types a company can be.',\n      enum: [        'education_program',\n        'coaching',\n        'software',\n        'paid_group',\n        'newsletter',\n        'agency',\n        'physical_products',\n        'brick_and_mortar',\n        'events',\n        'coaching_and_courses',\n        'other',\n        'saas',\n        'course',\n        'community'\n      ]\n    },\n    industry_types: {\n      type: 'string',\n      description: 'The different industry types a company can be in.',\n      enum: [        'trading',\n        'sports_betting',\n        'reselling',\n        'fitness',\n        'amazon_fba',\n        'real_estate',\n        'kindle_book_publishing',\n        'dating',\n        'agencies',\n        'health_and_wellness',\n        'social_media',\n        'sales',\n        'business',\n        'ecommerce',\n        'video_games',\n        'home_services',\n        'ai',\n        'public_speaking',\n        'personal_finance',\n        'careers',\n        'travel',\n        'clipping',\n        'spirituality',\n        'vas',\n        'personal_development',\n        'software',\n        'other',\n        'marketing_agency',\n        'sales_agency',\n        'ai_agency',\n        'design_agency',\n        'coaching_agency',\n        'development_agency',\n        'recruiting_agency',\n        'customer_support_agency',\n        'clipping_agency',\n        'clothing',\n        'supplements',\n        'beauty_and_personal_care',\n        'fitness_gear',\n        'accessories',\n        'home_goods',\n        'electronics_and_gadgets',\n        'food_and_beverages',\n        'gym',\n        'restaurant',\n        'retail_store',\n        'coffee_shop',\n        'salon_spa',\n        'medical_dentist_office',\n        'hotel_lodging',\n        'auto_repair_shop',\n        'masterminds',\n        'webinars',\n        'bootcamps',\n        'convention',\n        'concerts',\n        'meetups',\n        'parties'\n      ]\n    },\n    visibility: {\n      type: 'string',\n      description: 'Visibility of a resource',\n      enum: [        'visible',\n        'hidden',\n        'archived',\n        'quick_link'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to filter products by',
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
      order: {
        type: 'string',
        description: 'The ways a relation of AccessPasses can be ordered',
        enum: ['active_memberships_count', 'created_at', 'usd_gmv', 'usd_gmv_30_days'],
      },
      product_types: {
        type: 'array',
        description: 'The type of products to filter by',
        items: {
          $ref: '#/$defs/access_pass_type',
        },
      },
      visibilities: {
        type: 'array',
        description: 'The visibility of the products to filter by',
        items: {
          $ref: '#/$defs/visibility_filter',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id'],
    $defs: {
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
      access_pass_type: {
        type: 'string',
        description: 'The different types an access pass can be.',
        enum: ['regular', 'app', 'experience_upsell', 'api_only'],
      },
      visibility_filter: {
        type: 'string',
        description: 'The different levels of visibility for resources',
        enum: ['visible', 'hidden', 'archived', 'quick_link', 'all', 'not_quick_link', 'not_archived'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.products.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
