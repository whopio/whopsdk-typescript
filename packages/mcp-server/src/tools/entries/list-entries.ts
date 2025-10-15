// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/entries',
  operationId: 'listEntry',
};

export const tool: Tool = {
  name: 'list_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists entries for a company\n\nRequired permissions:\n - `plan:waitlist:read`\n - `member:email:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicEntry.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/entry_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    entry_list_response: {\n      type: 'object',\n      description: 'An object representing an entry in a waitlist.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the entry.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the entry was created.',\n          format: 'date-time'\n        },\n        plan: {\n          type: 'object',\n          description: 'The waitlist plan the entry if for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        product: {\n          type: 'object',\n          description: 'The access pass tied to this entry, if there is one.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        status: {\n          $ref: '#/$defs/entry_status'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who created the entry.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            email: {\n              type: 'string',\n              description: 'The email of the user'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'plan',\n        'product',\n        'status',\n        'user'\n      ]\n    },\n    entry_status: {\n      type: 'string',\n      description: 'The status of an entry to a waitlist.',\n      enum: [        'drafted',\n        'pending',\n        'approved',\n        'denied',\n        'any'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company',
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
        description: 'Which columns can be used to sort.',
        enum: ['id', 'created_at'],
      },
      plan_ids: {
        type: 'array',
        description: 'The plan IDs to filter the entries by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      product_ids: {
        type: 'array',
        description: 'The product IDs to filter the entries by',
        items: {
          type: 'string',
          description:
            'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
        },
      },
      statuses: {
        type: 'array',
        description: 'The statuses to filter the entries by',
        items: {
          $ref: '#/$defs/entry_status',
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
      entry_status: {
        type: 'string',
        description: 'The status of an entry to a waitlist.',
        enum: ['drafted', 'pending', 'approved', 'denied', 'any'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.entries.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
