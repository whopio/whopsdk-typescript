// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/entries/{id}',
  operationId: 'retrieveEntry',
};

export const tool: Tool = {
  name: 'retrieve_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an entry by ID\n\nRequired permissions:\n - `plan:waitlist:read`\n - `member:email:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entry',\n  $defs: {\n    entry: {\n      type: 'object',\n      description: 'An object representing an entry in a waitlist.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The internal ID of the entry.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'When the entry was created.'\n        },\n        custom_field_responses: {\n          type: 'array',\n          description: 'Responses collected from the user when submitting their entry.',\n          items: {\n            type: 'object',\n            description: 'The response from a custom field on checkout',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the custom field item'\n              },\n              answer: {\n                type: 'string',\n                description: 'The response a user gave to the specific question or field.'\n              },\n              question: {\n                type: 'string',\n                description: 'The question asked by the custom field'\n              }\n            },\n            required: [              'id',\n              'answer',\n              'question'\n            ]\n          }\n        },\n        plan: {\n          type: 'object',\n          description: 'The waitlist plan the entry if for.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the plan.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        product: {\n          type: 'object',\n          description: 'The access pass tied to this entry, if there is one.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the public product.'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the product. Use for Whop 4.0.'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        status: {\n          $ref: '#/$defs/entry_status'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who created the entry.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            email: {\n              type: 'string',\n              description: 'The email of the user'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'custom_field_responses',\n        'plan',\n        'product',\n        'status',\n        'user'\n      ]\n    },\n    entry_status: {\n      type: 'string',\n      description: 'The status of an entry to a waitlist.',\n      enum: [        'drafted',\n        'pending',\n        'approved',\n        'denied',\n        'any'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.entries.retrieve(id)));
};

export default { metadata, tool, handler };
