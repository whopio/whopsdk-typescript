// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_students',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/course_students/{id}',
  operationId: 'retrieveCourseStudent',
};

export const tool: Tool = {
  name: 'retrieve_course_students',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a course student by interaction ID\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/course_student_retrieve_response',\n  $defs: {\n    course_student_retrieve_response: {\n      type: 'object',\n      description: 'A course student (enrollment of a student in a course)',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the course student. Looks like crsi_XXX'\n        },\n        completed_lessons_count: {\n          type: 'integer',\n          description: 'The number of lessons the student has completed'\n        },\n        completion_rate: {\n          type: 'number',\n          description: 'The percentage of lessons completed (0-100)'\n        },\n        course: {\n          type: 'object',\n          description: 'The course the student is enrolled in',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the course. Looks like cors_XXX'\n            },\n            experience: {\n              type: 'object',\n              description: 'The experience that the course belongs to',\n              properties: {\n                id: {\n                  type: 'string',\n                  description: 'The unique ID representing this experience'\n                }\n              },\n              required: [                'id'\n              ]\n            },\n            title: {\n              type: 'string',\n              description: 'The title of the course'\n            }\n          },\n          required: [            'id',\n            'experience',\n            'title'\n          ]\n        },\n        first_interaction_at: {\n          type: 'string',\n          description: 'When the student first interacted with the course',\n          format: 'date-time'\n        },\n        last_interaction_at: {\n          type: 'string',\n          description: 'When the student last interacted with the course',\n          format: 'date-time'\n        },\n        total_lessons_count: {\n          type: 'integer',\n          description: 'The total number of lessons the student has access to'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who is enrolled in the course',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'completed_lessons_count',\n        'completion_rate',\n        'course',\n        'first_interaction_at',\n        'last_interaction_at',\n        'total_lessons_count',\n        'user'\n      ]\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.courseStudents.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
