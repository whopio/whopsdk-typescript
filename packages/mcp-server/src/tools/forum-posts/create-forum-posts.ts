// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'forum_posts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/forum_posts',
  operationId: 'createForumPost',
};

export const tool: Tool = {
  name: 'create_forum_posts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new forum post\n\nRequired permissions:\n - `forum:post:create`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/forum_post',\n  $defs: {\n    forum_post: {\n      type: 'object',\n      description: 'Represents a post in forum',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        comment_count: {\n          type: 'integer',\n          description: 'The amount of comments on this post'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the forum post in Markdown format'\n        },\n        is_edited: {\n          type: 'boolean',\n          description: 'Whether the forum post has been edited'\n        },\n        is_pinned: {\n          type: 'boolean',\n          description: 'Whether this forum post is pinned'\n        },\n        is_poster_admin: {\n          type: 'boolean',\n          description: 'Whether the user that sent the post is an admin of the company'\n        },\n        like_count: {\n          type: 'integer',\n          description: 'The number of likes this post has received'\n        },\n        parent_id: {\n          type: 'string',\n          description: 'The ID of the parent forum post, if applicable'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the forum post'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who created this forum post',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        view_count: {\n          type: 'integer',\n          description: 'The number of times this message has been viewed'\n        }\n      },\n      required: [        'id',\n        'comment_count',\n        'content',\n        'is_edited',\n        'is_pinned',\n        'is_poster_admin',\n        'like_count',\n        'parent_id',\n        'title',\n        'user',\n        'view_count'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      experience_id: {
        type: 'string',
        description: 'The experience to create this post in',
      },
      attachments: {
        type: 'array',
        description: 'The attachments for this post',
        items: {
          type: 'object',
          description: 'Input for an attachment',
          properties: {
            id: {
              type: 'string',
              description:
                "The ID of an existing attachment object. Use this when updating a resource and keeping a subset of the attachments. Don't use this unless you know what you're doing.",
            },
            direct_upload_id: {
              type: 'string',
              description:
                'This ID should be used the first time you upload an attachment. It is the ID of the direct upload that was created when uploading the file to S3 via the mediaDirectUpload mutation.',
            },
          },
        },
      },
      content: {
        type: 'string',
        description:
          "This is the main body of the post in Markdown format. Hidden if paywalled and user hasn't purchased access to it.",
      },
      is_mention: {
        type: 'boolean',
        description:
          "This is used to determine if the post should be sent as a 'mention' notification to all of the users who are in the experience. This means that anyone with 'mentions' enabled will receive a notification about this post.",
      },
      parent_id: {
        type: 'string',
        description:
          "The ID of the parent post. Set it to the ID of the post you want to comment on or don't include it if its a top level post.",
      },
      paywall_amount: {
        type: 'number',
        description:
          'The amount to paywall this post by. A paywalled post requires the user to purchase it in order to view its content.',
      },
      paywall_currency: {
        $ref: '#/$defs/currency',
      },
      pinned: {
        type: 'boolean',
        description: 'Whether the post should be pinned',
      },
      poll: {
        type: 'object',
        description: 'The poll for this post',
        properties: {
          options: {
            type: 'array',
            description: 'The options for the poll. Must have sequential IDs starting from 1',
            items: {
              type: 'object',
              description: 'Input type for a single poll option',
              properties: {
                id: {
                  type: 'string',
                  description: "Sequential ID for the poll option (starting from '1')",
                },
                text: {
                  type: 'string',
                  description: 'The text of the poll option',
                },
              },
              required: ['id', 'text'],
            },
          },
        },
        required: ['options'],
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
    required: ['experience_id'],
    $defs: {
      currency: {
        type: 'string',
        description: 'The available currencies on the platform',
        enum: [
          'usd',
          'sgd',
          'inr',
          'aud',
          'brl',
          'cad',
          'dkk',
          'eur',
          'nok',
          'gbp',
          'sek',
          'chf',
          'hkd',
          'huf',
          'jpy',
          'mxn',
          'myr',
          'pln',
          'czk',
          'nzd',
          'aed',
          'eth',
          'ape',
          'cop',
          'ron',
          'thb',
          'bgn',
          'idr',
          'dop',
          'php',
          'try',
          'krw',
          'twd',
          'vnd',
          'pkr',
          'clp',
          'uyu',
          'ars',
          'zar',
          'dzd',
          'tnd',
          'mad',
          'kes',
          'kwd',
          'jod',
          'all',
          'xcd',
          'amd',
          'bsd',
          'bhd',
          'bob',
          'bam',
          'khr',
          'crc',
          'xof',
          'egp',
          'etb',
          'gmd',
          'ghs',
          'gtq',
          'gyd',
          'ils',
          'jmd',
          'mop',
          'mga',
          'mur',
          'mdl',
          'mnt',
          'nad',
          'ngn',
          'mkd',
          'omr',
          'pyg',
          'pen',
          'qar',
          'rwf',
          'sar',
          'rsd',
          'lkr',
          'tzs',
          'ttd',
          'uzs',
          'rub',
          'btc',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.forumPosts.create(body)));
};

export default { metadata, tool, handler };
