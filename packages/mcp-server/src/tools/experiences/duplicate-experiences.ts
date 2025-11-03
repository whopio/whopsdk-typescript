// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'experiences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/experiences/{id}/duplicate',
  operationId: 'duplicateExperience',
};

export const tool: Tool = {
  name: 'duplicate_experiences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDuplicates an existing experience. The name will be copied, unless provided. The new experience will be attached to the same products as the original experience.\nIf duplicating a Forum or Chat experience, the new experience will have the same settings as the original experience, e.g. who can post, who can comment, etc.\nNo content, e.g. posts, messages, lessons from within the original experience will be copied.\n\n\nRequired permissions:\n - `experience:create`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/experience',\n  $defs: {\n    experience: {\n      type: 'object',\n      description: 'An object representing an experience belonging to a company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique ID representing this experience'\n        },\n        app: {\n          type: 'object',\n          description: 'The experience interface for this experience.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the app'\n            },\n            icon: {\n              type: 'object',\n              description: 'The icon for the app. This icon is shown on discovery, on the product page, on checkout, and as a default icon for the experiences.',\n              properties: {\n                url: {\n                  type: 'string',\n                  description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n                }\n              },\n              required: [                'url'\n              ]\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the app'\n            }\n          },\n          required: [            'id',\n            'icon',\n            'name'\n          ]\n        },\n        company: {\n          type: 'object',\n          description: 'The company that owns this experience.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            },\n            route: {\n              type: 'string',\n              description: 'The slug/route of the company on the Whop site.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the company.'\n            }\n          },\n          required: [            'id',\n            'route',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when this experience was created.',\n          format: 'date-time'\n        },\n        image: {\n          type: 'object',\n          description: 'The logo for the experience.',\n          properties: {\n            url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            }\n          },\n          required: [            'url'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'The written name of the description.'\n        },\n        order: {\n          type: 'string',\n          description: 'The order of the experience in the section'\n        },\n        products: {\n          type: 'array',\n          description: 'The products that this experience is attached to. This defines which set of customers have access and can view this experience. If empty, this experience is only visible to authorized users of the company',\n          items: {\n            type: 'object',\n            description: 'Represents a product on whop. Use products to sell anything on the platform.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The internal ID of the public product.'\n              },\n              route: {\n                type: 'string',\n                description: 'The route of the product.'\n              },\n              title: {\n                type: 'string',\n                description: 'The title of the product. Use for Whop 4.0.'\n              }\n            },\n            required: [              'id',\n              'route',\n              'title'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'app',\n        'company',\n        'created_at',\n        'image',\n        'name',\n        'order',\n        'products'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The name of the new experience',
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
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.experiences.duplicate(id, body)));
};

export default { metadata, tool, handler };
