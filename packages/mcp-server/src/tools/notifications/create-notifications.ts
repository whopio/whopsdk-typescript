// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/notifications',
  operationId: 'createNotification',
};

export const tool: Tool = {
  name: 'create_notifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nQueues a notification to be sent to users in an experience or company team\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/notification_create_response',\n  $defs: {\n    notification_create_response: {\n      type: 'object',\n      description: 'Response from queuing a notification',\n      properties: {\n        success: {\n          type: 'boolean',\n          description: 'Whether the notification was successfully queued for delivery'\n        }\n      },\n      required: [        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          company_id: {
            type: 'string',
            description:
              'The id of the company to target. Only team members of this company will receive the notification. When clicked will take the user to your dashboard app view.',
          },
          content: {
            type: 'string',
            description: 'The content of the notification',
          },
          title: {
            type: 'string',
            description: 'The title of the notification',
          },
          icon_user_id: {
            type: 'string',
            description:
              'Optional: ID of a Whop user whose profile picture will be used as the notification icon. If not provided, defaults to the experience or company avatar.',
          },
          rest_path: {
            type: 'string',
            description:
              'The rest path to append to the generated deep link that opens your app. Use [restPath] in your app path in the dashboard to read this parameter.',
          },
          subtitle: {
            type: 'string',
            description: 'The subtitle of the notification',
          },
          user_ids: {
            type: 'array',
            description:
              'If provided, this will only send to these users if they are also in the main scope (experience or company)',
            items: {
              type: 'string',
              description:
                'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
            },
          },
        },
        required: ['company_id', 'content', 'title'],
      },
      {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'The content of the notification',
          },
          experience_id: {
            type: 'string',
            description:
              'The id of the experience to target. All users with access to this experience (customers and admins) will receive the notification. When clicked, open your experience view.',
          },
          title: {
            type: 'string',
            description: 'The title of the notification',
          },
          icon_user_id: {
            type: 'string',
            description:
              'Optional: ID of a Whop user whose profile picture will be used as the notification icon. If not provided, defaults to the experience or company avatar.',
          },
          rest_path: {
            type: 'string',
            description:
              'The rest path to append to the generated deep link that opens your app. Use [restPath] in your app path in the dashboard to read this parameter.',
          },
          subtitle: {
            type: 'string',
            description: 'The subtitle of the notification',
          },
          user_ids: {
            type: 'array',
            description:
              'If provided, this will only send to these users if they are also in the main scope (experience or company)',
            items: {
              type: 'string',
              description:
                'Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.',
            },
          },
        },
        required: ['content', 'experience_id', 'title'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.notifications.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
