// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_chapters',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/course_chapters/{id}',
  operationId: 'retrieveCourseChapter',
};

export const tool: Tool = {
  name: 'retrieve_course_chapters',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a course chapter by ID\n\nRequired permissions:\n - `courses:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course_chapter',\n  $defs: {\n    course_chapter: {\n      type: 'object',\n      description: 'A chapter from the courses app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the chapter. Looks like chap_XXX'\n        },\n        lessons: {\n          type: 'array',\n          description: 'The lessons in this chapter',\n          items: {\n            type: 'object',\n            description: 'A lesson from the courses app',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of the lesson'\n              },\n              order: {\n                type: 'integer',\n                description: 'The order of the lesson within its chapter'\n              },\n              title: {\n                type: 'string',\n                description: 'The title of the lesson'\n              }\n            },\n            required: [              'id',\n              'order',\n              'title'\n            ]\n          }\n        },\n        order: {\n          type: 'integer',\n          description: 'The order of the chapter within its course'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the chapter'\n        }\n      },\n      required: [        'id',\n        'lessons',\n        'order',\n        'title'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.courseChapters.retrieve(id)));
};

export default { metadata, tool, handler };
