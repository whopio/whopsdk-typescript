// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'forum_posts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/forum_posts/{id}',
  operationId: 'retrieveForumPost',
};

export const tool: Tool = {
  name: 'retrieve_forum_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a forum post by ID\n\nRequired permissions:\n - `forum:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/forum_post',\n  $defs: {\n    forum_post: {\n      type: 'object',\n      description: 'Represents a post in forum',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        comment_count: {\n          type: 'integer',\n          description: 'The amount of comments on this post'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the forum post in Markdown format'\n        },\n        is_edited: {\n          type: 'boolean',\n          description: 'Whether the forum post has been edited'\n        },\n        is_pinned: {\n          type: 'boolean',\n          description: 'Whether this forum post is pinned'\n        },\n        is_poster_admin: {\n          type: 'boolean',\n          description: 'Whether the user that sent the post is an admin of the company'\n        },\n        like_count: {\n          type: 'integer',\n          description: 'The number of likes this post has received'\n        },\n        parent_id: {\n          type: 'string',\n          description: 'The ID of the parent forum post, if applicable'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the forum post'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who created this forum post',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        view_count: {\n          type: 'integer',\n          description: 'The number of times this message has been viewed'\n        }\n      },\n      required: [        'id',\n        'comment_count',\n        'content',\n        'is_edited',\n        'is_pinned',\n        'is_poster_admin',\n        'like_count',\n        'parent_id',\n        'title',\n        'user',\n        'view_count'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.forumPosts.retrieve(id)));
};

export default { metadata, tool, handler };
