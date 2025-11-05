// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'forum_posts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/forum_posts/{id}',
  operationId: 'updateForumPost',
};

export const tool: Tool = {
  name: 'update_forum_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing forum post\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/forum_post',\n  $defs: {\n    forum_post: {\n      type: 'object',\n      description: 'Represents a post in forum',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the resource.'\n        },\n        comment_count: {\n          type: 'integer',\n          description: 'The amount of comments on this post'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the forum post in Markdown format'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp when the post was created',\n          format: 'date-time'\n        },\n        is_edited: {\n          type: 'boolean',\n          description: 'Whether the forum post has been edited'\n        },\n        is_pinned: {\n          type: 'boolean',\n          description: 'Whether this forum post is pinned'\n        },\n        is_poster_admin: {\n          type: 'boolean',\n          description: 'Whether the user that sent the post is an admin of the company'\n        },\n        like_count: {\n          type: 'integer',\n          description: 'The number of likes this post has received'\n        },\n        parent_id: {\n          type: 'string',\n          description: 'The ID of the parent forum post, if applicable'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the forum post'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp when the post was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who created this forum post',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        view_count: {\n          type: 'integer',\n          description: 'The number of times this message has been viewed'\n        }\n      },\n      required: [        'id',\n        'comment_count',\n        'content',\n        'created_at',\n        'is_edited',\n        'is_pinned',\n        'is_poster_admin',\n        'like_count',\n        'parent_id',\n        'title',\n        'updated_at',\n        'user',\n        'view_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      attachments: {
        type: 'array',
        description: 'The attachments for this post',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'AttachmentInputWithDirectUploadId',
              description: 'Input for an attachment',
              properties: {
                direct_upload_id: {
                  type: 'string',
                  description:
                    'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
                },
              },
              required: ['direct_upload_id'],
            },
            {
              type: 'object',
              title: 'AttachmentInputWithId',
              description: 'Input for an attachment',
              properties: {
                id: {
                  type: 'string',
                  description:
                    "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
                },
              },
              required: ['id'],
            },
          ],
          description: 'Input for an attachment',
        },
      },
      content: {
        type: 'string',
        description:
          "This is the main body of the post in Markdown format. Hidden if paywalled and user hasn't purchased access to it.",
      },
      is_pinned: {
        type: 'boolean',
        description: 'Whether the post is pinned. You can only pin a top level posts (not comments).',
      },
      title: {
        type: 'string',
        description: 'The title of the post. Only visible if paywalled.',
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
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.forumPosts.update(id, body)));
};

export default { metadata, tool, handler };
