// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'course_students',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/course_students',
  operationId: 'listCourseStudent',
};

export const tool: Tool = {
  name: 'list_course_students',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists students for a course\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for CourseStudentType.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/course_student_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    course_student_list_response: {\n      type: 'object',\n      description: 'A course student (enrollment of a student in a course)',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the course student. Looks like crsi_XXX'\n        },\n        completed_lessons_count: {\n          type: 'integer',\n          description: 'The number of lessons the student has completed'\n        },\n        completion_rate: {\n          type: 'number',\n          description: 'The percentage of lessons completed (0-100)'\n        },\n        first_interaction_at: {\n          type: 'string',\n          description: 'When the student first interacted with the course',\n          format: 'date-time'\n        },\n        last_interaction_at: {\n          type: 'string',\n          description: 'When the student last interacted with the course',\n          format: 'date-time'\n        },\n        total_lessons_count: {\n          type: 'integer',\n          description: 'The total number of lessons the student has access to'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who is enrolled in the course',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        }\n      },\n      required: [        'id',\n        'completed_lessons_count',\n        'completion_rate',\n        'first_interaction_at',\n        'last_interaction_at',\n        'total_lessons_count',\n        'user'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      course_id: {
        type: 'string',
        description: 'The ID of the course',
      },
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      keyword: {
        type: 'string',
        description: 'Filter students by name - returns students whose names match the keyword',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['course_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.courseStudents.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
