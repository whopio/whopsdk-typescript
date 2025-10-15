// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_lesson_interactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/course_lesson_interactions/{id}',
  operationId: 'retrieveCourseLessonInteraction',
};

export const tool: Tool = {
  name: 'retrieve_course_lesson_interactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a course lesson interaction by ID\n\nRequired permissions:\n - `course_lesson_interaction:read`\n - `courses:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course_lesson_interaction',\n  $defs: {\n    course_lesson_interaction: {\n      type: 'object',\n      description: 'A lesson interaction tracking user progress in courses',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the lesson interaction'\n        },\n        completed: {\n          type: 'boolean',\n          description: 'Whether the lesson has been completed by the user'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the interaction was created',\n          format: 'date-time'\n        },\n        lesson: {\n          type: 'object',\n          description: 'The lesson this interaction is for',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the lesson'\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the lesson'\n            }\n          },\n          required: [            'id',\n            'title'\n          ]\n        },\n        user: {\n          type: 'object',\n          description: 'The user who interacted with the lesson',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'completed',\n        'created_at',\n        'lesson',\n        'user'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.courseLessonInteractions.retrieve(id)),
  );
};

export default { metadata, tool, handler };
