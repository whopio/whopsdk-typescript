// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'reviews',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/reviews/{id}',
  operationId: 'retrieveReview',
};

export const tool: Tool = {
  name: 'retrieve_reviews',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a review by its ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/review_retrieve_response',\n  $defs: {\n    review_retrieve_response: {\n      type: 'object',\n      description: 'An object representing a user review of a company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the review.'\n        },\n        attachments: {\n          type: 'array',\n          description: 'The attachments attached to the review.',\n          items: {\n            type: 'object',\n            description: 'Represents an image attachment',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the attachment'\n              },\n              content_type: {\n                type: 'string',\n                description: 'The attachment\\'s content type (e.g., image/jpg, video/mp4)'\n              },\n              filename: {\n                type: 'string',\n                description: 'The name of the file'\n              },\n              url: {\n                type: 'string',\n                description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n              }\n            },\n            required: [              'id',\n              'content_type',\n              'filename',\n              'url'\n            ]\n          }\n        },\n        company: {\n          type: 'object',\n          description: 'The company the review is for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            },\n            route: {\n              type: 'string',\n              description: 'The slug/route of the company on the Whop site.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the company.'\n            }\n          },\n          required: [            'id',\n            'route',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the review was created.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the review.'\n        },\n        joined_at: {\n          type: 'string',\n          description: 'The timestamp of when the user joined the product.',\n          format: 'date-time'\n        },\n        paid_for_product: {\n          type: 'boolean',\n          description: 'Whether or not the user paid for the product. If null, the payment status is unknown.'\n        },\n        product: {\n          type: 'object',\n          description: 'The product the review is for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        published_at: {\n          type: 'string',\n          description: 'The timestamp of when the review was published.',\n          format: 'date-time'\n        },\n        stars: {\n          type: 'integer',\n          description: 'The number of stars the user gave the product.'\n        },\n        status: {\n          $ref: '#/$defs/review_status'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the review.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when the review was last updated.',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user account that performed the action.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'attachments',\n        'company',\n        'created_at',\n        'description',\n        'joined_at',\n        'paid_for_product',\n        'product',\n        'published_at',\n        'stars',\n        'status',\n        'title',\n        'updated_at',\n        'user'\n      ]\n    },\n    review_status: {\n      type: 'string',\n      description: 'The statuses a review can have',\n      enum: [        'pending',\n        'published',\n        'removed'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.reviews.retrieve(id)));
};

export default { metadata, tool, handler };
