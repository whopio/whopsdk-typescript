// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'forums',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/forums/{id}',
  operationId: 'updateForum',
};

export const tool: Tool = {
  name: 'update_forums',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a forum\n\nRequired permissions:\n - `forum:moderate`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/forum',\n  $defs: {\n    forum: {\n      type: 'object',\n      description: 'Represents a forum feed',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the entity'\n        },\n        email_notification_preference: {\n          $ref: '#/$defs/email_notification_preferences'\n        },\n        experience: {\n          type: 'object',\n          description: 'The experience for this forum',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique ID representing this experience'\n            },\n            name: {\n              type: 'string',\n              description: 'The written name of the description.'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        who_can_comment: {\n          $ref: '#/$defs/who_can_comment_types'\n        },\n        who_can_post: {\n          $ref: '#/$defs/who_can_post_types'\n        }\n      },\n      required: [        'id',\n        'email_notification_preference',\n        'experience',\n        'who_can_comment',\n        'who_can_post'\n      ]\n    },\n    email_notification_preferences: {\n      type: 'string',\n      description: 'Email notification preference option for a forum feed',\n      enum: [        'all_admin_posts',\n        'only_weekly_summary',\n        'none'\n      ]\n    },\n    who_can_comment_types: {\n      type: 'string',\n      description: 'Who can comment on a forum feed',\n      enum: [        'everyone',\n        'admins'\n      ]\n    },\n    who_can_post_types: {\n      type: 'string',\n      description: 'Who can post on a forum feed',\n      enum: [        'everyone',\n        'admins'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      email_notification_preference: {
        $ref: '#/$defs/email_notification_preferences',
      },
      who_can_comment: {
        $ref: '#/$defs/who_can_comment_types',
      },
      who_can_post: {
        $ref: '#/$defs/who_can_post_types',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
    $defs: {
      email_notification_preferences: {
        type: 'string',
        description: 'Email notification preference option for a forum feed',
        enum: ['all_admin_posts', 'only_weekly_summary', 'none'],
      },
      who_can_comment_types: {
        type: 'string',
        description: 'Who can comment on a forum feed',
        enum: ['everyone', 'admins'],
      },
      who_can_post_types: {
        type: 'string',
        description: 'Who can post on a forum feed',
        enum: ['everyone', 'admins'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.forums.update(id, body)));
  } catch (error) {
    if (error instanceof Whop.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
