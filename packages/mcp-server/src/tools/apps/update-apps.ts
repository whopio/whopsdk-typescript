// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/apps/{id}',
  operationId: 'updateApp',
};

export const tool: Tool = {
  name: 'update_apps',
  description:
    'Update an existing App\n\nRequired permissions:\n - `developer:update_app`\n - `developer:manage_api_key`',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      app_store_description: {
        type: 'string',
        description: 'The description of the app for the app store in-depth app view.',
      },
      app_type: {
        $ref: '#/$defs/app_type',
      },
      base_url: {
        type: 'string',
        description: 'The base production url of the app',
      },
      dashboard_path: {
        type: 'string',
        description: 'The path for the dashboard view of the app',
      },
      description: {
        type: 'string',
        description: 'The description of the app',
      },
      discover_path: {
        type: 'string',
        description: 'The path for the discover view of the app',
      },
      experience_path: {
        type: 'string',
        description: 'The path for the hub view of the app',
      },
      icon: {
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
        description: 'The icon for the app',
      },
      name: {
        type: 'string',
        description: 'The name of the app',
      },
      required_scopes: {
        type: 'array',
        description: 'The scopes that the app will request off of users when a user installs the app.',
        items: {
          type: 'string',
          description: 'These are the scopes an app can request on behalf of a user',
          enum: ['read_user'],
        },
      },
      status: {
        $ref: '#/$defs/app_statuses',
      },
    },
    required: ['id'],
    $defs: {
      app_type: {
        type: 'string',
        description: 'The type of end-user an app is built for',
        enum: ['b2b_app', 'b2c_app', 'company_app', 'component'],
      },
      app_statuses: {
        type: 'string',
        description: 'The status of an experience interface',
        enum: ['live', 'unlisted', 'hidden'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Whop, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.update(id, body));
};

export default { metadata, tool, handler };
