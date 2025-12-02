// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'courses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/courses',
  operationId: 'listCourse',
};

export const tool: Tool = {
  name: 'list_courses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists courses for an experience or company\n\nRequired permissions:\n - `courses:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for Course.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/course_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    course_list_response: {\n      type: 'object',\n      description: 'A course from the courses app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the course. Looks like cors_XXX'\n        },\n        certificate_after_completion_enabled: {\n          type: 'boolean',\n          description: 'Whether the course will award its students a PDF certificate after completing all lessons'\n        },\n        cover_image: {\n          type: 'string',\n          description: 'The URL of the course\\'s cover image, which is shown in course preview cards'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the course was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'A short description of the course'\n        },\n        language: {\n          $ref: '#/$defs/languages'\n        },\n        order: {\n          type: 'string',\n          description: 'The order of the course within its experience'\n        },\n        require_completing_lessons_in_order: {\n          type: 'boolean',\n          description: 'Whether the course requires students to complete the previous lesson before moving on to the next one'\n        },\n        tagline: {\n          type: 'string',\n          description: 'A short tagline for the course. It is displayed under the course title in the UI'\n        },\n        thumbnail: {\n          type: 'object',\n          description: 'The thumbnail for the course',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of the attachment'\n            },\n            content_type: {\n              type: 'string',\n              description: 'The attachment\\'s content type (e.g., image/jpg, video/mp4)'\n            },\n            filename: {\n              type: 'string',\n              description: 'The name of the file'\n            },\n            optimized_url: {\n              type: 'string',\n              description: 'This is the URL you use to render optimized attachments on the client. This should be used for apps.'\n            },\n            source_url: {\n              type: 'string',\n              description: 'The original URL of the attachment, such as a direct link to S3. This should never be displayed on the client and always passed to an Imgproxy transformer.'\n            }\n          },\n          required: [            'id',\n            'content_type',\n            'filename',\n            'optimized_url',\n            'source_url'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the course'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when the course was last updated',\n          format: 'date-time'\n        },\n        visibility: {\n          $ref: '#/$defs/course_visibilities'\n        }\n      },\n      required: [        'id',\n        'certificate_after_completion_enabled',\n        'cover_image',\n        'created_at',\n        'description',\n        'language',\n        'order',\n        'require_completing_lessons_in_order',\n        'tagline',\n        'thumbnail',\n        'title',\n        'updated_at',\n        'visibility'\n      ]\n    },\n    languages: {\n      type: 'string',\n      description: 'The available languages for a course',\n      enum: [        'en',\n        'es',\n        'it',\n        'pt',\n        'de',\n        'fr',\n        'pl',\n        'ru',\n        'nl',\n        'ca',\n        'tr',\n        'sv',\n        'uk',\n        'no',\n        'fi',\n        'sk',\n        'el',\n        'cs',\n        'hr',\n        'da',\n        'ro',\n        'bg'\n      ]\n    },\n    course_visibilities: {\n      type: 'string',\n      description: 'The available visibilities for a course. Determines how / whether a course is visible to users.',\n      enum: [        'visible',\n        'hidden'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description: 'Returns the elements in the list that come after the specified cursor.',
      },
      before: {
        type: 'string',
        description: 'Returns the elements in the list that come before the specified cursor.',
      },
      company_id: {
        type: 'string',
        description: 'The ID of the company',
      },
      experience_id: {
        type: 'string',
        description: 'The ID of the experience',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.courses.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
