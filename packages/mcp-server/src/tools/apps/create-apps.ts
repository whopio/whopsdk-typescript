// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/apps',
  operationId: 'createApp',
};

export const tool: Tool = {
  name: 'create_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new App\n\nRequired permissions:\n - `developer:create_app`\n - `developer:manage_api_key`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app',\n  $defs: {\n    app: {\n      type: 'object',\n      description: 'An object representing an app',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the app'\n        },\n        api_key: {\n          type: 'object',\n          description: 'The API key for the app',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The ID of this API key'\n            },\n            token: {\n              type: 'string',\n              description: 'This is the API key used to authenticate requests'\n            },\n            created_at: {\n              type: 'integer',\n              description: 'When this API key was created at'\n            }\n          },\n          required: [            'id',\n            'token',\n            'created_at'\n          ]\n        },\n        base_url: {\n          type: 'string',\n          description: 'The base url of the app'\n        },\n        dashboard_path: {\n          type: 'string',\n          description: 'The path part for a specific view of the app. This is the template part of the url after the base domain. Eg: /experiences/[experienceId]'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the app'\n        },\n        discover_path: {\n          type: 'string',\n          description: 'The path part for a specific view of the app. This is the template part of the url after the base domain. Eg: /experiences/[experienceId]'\n        },\n        domain_id: {\n          type: 'string',\n          description: 'The unique part of the proxied domain for this app. Used to generate the base url used to display the app inside the whop platform. Refers to the id part in the final url: https://{domain_id}.apps.whop.com'\n        },\n        experience_path: {\n          type: 'string',\n          description: 'The path part for a specific view of the app. This is the template part of the url after the base domain. Eg: /experiences/[experienceId]'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the app'\n        },\n        requested_permissions: {\n          type: 'array',\n          description: 'The set of permissions that an app requests to be granted when a user installs the app.',\n          items: {\n            type: 'object',\n            description: 'A permission that the app requests from the admin of a company during the oauth flow.',\n            properties: {\n              is_required: {\n                type: 'boolean',\n                description: 'Whether the action is required for the app to function.'\n              },\n              justification: {\n                type: 'string',\n                description: 'The reason for requesting the action.'\n              },\n              permission_action: {\n                type: 'object',\n                description: 'The action that the app will request off of users when a user installs the app.',\n                properties: {\n                  action: {\n                    type: 'string',\n                    description: 'The identifier of the action.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The human readable name of the action.'\n                  }\n                },\n                required: [                  'action',\n                  'name'\n                ]\n              }\n            },\n            required: [              'is_required',\n              'justification',\n              'permission_action'\n            ]\n          }\n        },\n        stats: {\n          type: 'object',\n          description: 'A collection of stats for the app.',\n          properties: {\n            dau: {\n              type: 'integer',\n              description: 'This is the number of users that have spent time in this app in the last 24 hours.'\n            },\n            mau: {\n              type: 'integer',\n              description: 'This is the number of users that have spent time in this app in the last 28 days.'\n            },\n            time_spent_last24_hours: {\n              type: 'integer',\n              description: 'This how much time, in seconds, users have spent in this app in the last 24 hours.'\n            },\n            wau: {\n              type: 'integer',\n              description: 'This is the number of users that have spent time in this app in the last 7 days.'\n            }\n          },\n          required: [            'dau',\n            'mau',\n            'time_spent_last24_hours',\n            'wau'\n          ]\n        },\n        status: {\n          $ref: '#/$defs/app_statuses'\n        },\n        verified: {\n          type: 'boolean',\n          description: 'Whether this app has been verified by Whop. Verified apps are endorsed by whop and are shown in the \\'featured apps\\' section of the app store.'\n        }\n      },\n      required: [        'id',\n        'api_key',\n        'base_url',\n        'dashboard_path',\n        'description',\n        'discover_path',\n        'domain_id',\n        'experience_path',\n        'name',\n        'requested_permissions',\n        'stats',\n        'status',\n        'verified'\n      ]\n    },\n    app_statuses: {\n      type: 'string',\n      description: 'The status of an experience interface',\n      enum: [        'live',\n        'unlisted',\n        'hidden'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
        description: 'The ID of the company to create the app for',
      },
      name: {
        type: 'string',
        description: 'The name of the app to be created',
      },
      base_url: {
        type: 'string',
        description: 'The base URL of the app to be created',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.apps.create(body)));
};

export default { metadata, tool, handler };
