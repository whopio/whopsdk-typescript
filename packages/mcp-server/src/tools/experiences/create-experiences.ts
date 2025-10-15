// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'experiences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/experiences',
  operationId: 'createExperience',
};

export const tool: Tool = {
  name: 'create_experiences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequired permissions:\n - `experience:create`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/experience',\n  $defs: {\n    experience: {\n      type: 'object',\n      description: 'An object representing an experience belonging to a company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique ID representing this experience'\n        },\n        app: {\n          type: 'object',\n          description: 'The experience interface for this experience.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the app'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the app'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        company: {\n          type: 'object',\n          description: 'The company that owns this experience.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            },\n            route: {\n              type: 'string',\n              description: 'The slug/route of the company on the Whop site.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the company.'\n            }\n          },\n          required: [            'id',\n            'route',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The timestamp of when this experience was created.'\n        },\n        name: {\n          type: 'string',\n          description: 'The written name of the description.'\n        },\n        order: {\n          type: 'string',\n          description: 'The order of the experience in the section'\n        },\n        products: {\n          type: 'array',\n          description: 'The access passes that are associated with this experience. This should not be used unless you are trying to list all access passes the experience has, for some reason. You probably don\\'t want to use this though and should be using accessPass.',\n          items: {\n            type: 'object',\n            description: 'An object representing a (sanitized) access pass.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The internal ID of the public product.'\n              },\n              route: {\n                type: 'string',\n                description: 'The route of the product.'\n              },\n              title: {\n                type: 'string',\n                description: 'The title of the product. Use for Whop 4.0.'\n              }\n            },\n            required: [              'id',\n              'route',\n              'title'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'app',\n        'company',\n        'created_at',\n        'name',\n        'order',\n        'products'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        type: 'string',
        description: 'The ID of the app to create the experience for',
      },
      company_id: {
        type: 'string',
        description: 'The ID of the company to create the experience for',
      },
      name: {
        type: 'string',
        description: 'The name of the experience',
      },
      section_id: {
        type: 'string',
        description: 'The ID of the section to create the experience in',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['app_id', 'company_id'],
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.experiences.create(body)));
};

export default { metadata, tool, handler };
