// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'forum_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/forum_posts',
  operationId: 'listForumPost',
};

export const tool: Tool = {
  name: 'list_forum_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists forum posts\n\nRequired permissions:\n - `forum:read`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for ForumPost.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        $ref: '#/$defs/forum_post_list_response'\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    forum_post_list_response: {\n      type: 'object',\n      description: 'Represents a post in forum',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        comment_count: {\n          type: 'integer',\n          description: 'The amount of comments on this post'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the forum post in Markdown format'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp when the post was created',\n          format: 'date-time'\n        },\n        is_edited: {\n          type: 'boolean',\n          description: 'Whether the forum post has been edited'\n        },\n        is_pinned: {\n          type: 'boolean',\n          description: 'Whether this forum post is pinned'\n        },\n        is_poster_admin: {\n          type: 'boolean',\n          description: 'Whether the user that sent the post is an admin of the company'\n        },\n        like_count: {\n          type: 'integer',\n          description: 'The number of likes this post has received'\n        },\n        parent_id: {\n          type: 'string',\n          description: 'The ID of the parent forum post, if applicable'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the forum post'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp when the post was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who created this forum post',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        view_count: {\n          type: 'integer',\n          description: 'The number of times this message has been viewed'\n        }\n      },\n      required: [        'id',\n        'comment_count',\n        'content',\n        'created_at',\n        'is_edited',\n        'is_pinned',\n        'is_poster_admin',\n        'like_count',\n        'parent_id',\n        'title',\n        'updated_at',\n        'user',\n        'view_count'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      experience_id: {
        type: 'string',
        description: 'The ID of the experience to list forum posts for',
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
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      parent_id: {
        type: 'string',
        description: 'The ID of the parent post to list forum post comments for',
      },
      pinned: {
        type: 'boolean',
        description: 'Set to true to only return pinned posts',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['experience_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.forumPosts.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
