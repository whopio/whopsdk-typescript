// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'experiences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/experiences',
  operationId: 'listExperience',
};

export const tool: Tool = {
  name: 'list_experiences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists experiences for a company\n\nRequired permissions:\n - `experience:hidden_experience:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicExperience.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/experience_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    experience_list_response: {\n      type: 'object',\n      description: 'An object representing an experience belonging to a company.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique ID representing this experience'\n        },\n        app: {\n          type: 'object',\n          description: 'The experience interface for this experience.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the app'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the app'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        company: {\n          type: 'object',\n          description: 'The company that owns this experience.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID (tag) of the company.'\n            },\n            route: {\n              type: 'string',\n              description: 'The slug/route of the company on the Whop site.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the company.'\n            }\n          },\n          required: [            'id',\n            'route',\n            'title'\n          ]\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The timestamp of when this experience was created.'\n        },\n        name: {\n          type: 'string',\n          description: 'The written name of the description.'\n        },\n        order: {\n          type: 'string',\n          description: 'The order of the experience in the section'\n        }\n      },\n      required: [        'id',\n        'app',\n        'company',\n        'created_at',\n        'name',\n        'order'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to filter experiences by',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      app_id: {
        type: 'string',
        description: 'The ID of the app to filter experiences by',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      product_id: {
        type: 'string',
        description: 'The ID of the product to filter experiences by',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.experiences.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
