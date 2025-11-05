// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/messages/{id}',
  operationId: 'updateMessage',
};

export const tool: Tool = {
  name: 'update_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing message\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/message',\n  $defs: {\n    message: {\n      type: 'object',\n      description: 'Represents a message in a DM channel',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the resource.'\n        },\n        content: {\n          type: 'string',\n          description: 'The content of the message in Markdown format'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp when the post was created',\n          format: 'date-time'\n        },\n        is_edited: {\n          type: 'boolean',\n          description: 'Whether the message has been edited'\n        },\n        is_pinned: {\n          type: 'boolean',\n          description: 'Whether this message is pinned'\n        },\n        message_type: {\n          $ref: '#/$defs/dms_post_types'\n        },\n        poll: {\n          type: 'object',\n          description: 'The poll for this message',\n          properties: {\n            options: {\n              type: 'array',\n              description: 'The options for the poll',\n              items: {\n                type: 'object',\n                description: 'Represents a single poll option',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'The ID of the poll option'\n                  },\n                  text: {\n                    type: 'string',\n                    description: 'The text of the poll option'\n                  }\n                },\n                required: [                  'id',\n                  'text'\n                ]\n              }\n            }\n          },\n          required: [            'options'\n          ]\n        },\n        poll_votes: {\n          type: 'array',\n          description: 'The reaction counts for this message',\n          items: {\n            type: 'object',\n            description: 'Represents a reaction count for a feed post',\n            properties: {\n              count: {\n                type: 'integer',\n                description: 'The number of users who reacted'\n              },\n              option_id: {\n                type: 'string',\n                description: 'The reaction that was used'\n              }\n            },\n            required: [              'count',\n              'option_id'\n            ]\n          }\n        },\n        reaction_counts: {\n          type: 'array',\n          description: 'The reaction counts for this message',\n          items: {\n            type: 'object',\n            description: 'Represents a reaction count for a feed post',\n            properties: {\n              count: {\n                type: 'integer',\n                description: 'The number of users who reacted'\n              },\n              emoji: {\n                type: 'string',\n                description: 'The emoji that was used in shortcode format (:heart:)'\n              }\n            },\n            required: [              'count',\n              'emoji'\n            ]\n          }\n        },\n        replying_to_message_id: {\n          type: 'string',\n          description: 'The ID of the message this is replying to, if applicable'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp when the post was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'object',\n          description: 'The user who sent this message',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The internal ID of the user.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the user from their Whop account.'\n            },\n            username: {\n              type: 'string',\n              description: 'The username of the user from their Whop account.'\n            }\n          },\n          required: [            'id',\n            'name',\n            'username'\n          ]\n        },\n        view_count: {\n          type: 'integer',\n          description: 'The number of times this message has been viewed'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'is_edited',\n        'is_pinned',\n        'message_type',\n        'poll',\n        'poll_votes',\n        'reaction_counts',\n        'replying_to_message_id',\n        'updated_at',\n        'user',\n        'view_count'\n      ]\n    },\n    dms_post_types: {\n      type: 'string',\n      description: 'The types of post',\n      enum: [        'regular',\n        'system',\n        'automated'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      attachments: {
        type: 'array',
        description: 'The attachments for this message',
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
        description: 'The content of the message in Markdown format',
      },
      is_pinned: {
        type: 'boolean',
        description: 'Whether this message is pinned',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.messages.update(id, body)));
};

export default { metadata, tool, handler };
