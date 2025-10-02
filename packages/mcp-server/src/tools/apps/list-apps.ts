// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/apps',
  operationId: 'listApp',
};

export const tool: Tool = {
  name: 'list_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of apps\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The connection type for PublicApp.',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'A list of nodes.',\n      items: {\n        type: 'object',\n        description: 'An object representing an app',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The ID of the app'\n          },\n          base_url: {\n            type: 'string',\n            description: 'The base url of the app'\n          },\n          dashboard_path: {\n            type: 'string',\n            description: 'The path part for a specific view of the app. This is the template part of the url after the base domain. Eg: /experiences/[experienceId]'\n          },\n          description: {\n            type: 'string',\n            description: 'The description of the app'\n          },\n          discover_path: {\n            type: 'string',\n            description: 'The path part for a specific view of the app. This is the template part of the url after the base domain. Eg: /experiences/[experienceId]'\n          },\n          domain_id: {\n            type: 'string',\n            description: 'The unique part of the proxied domain for this app. Used to generate the base url used to display the app inside the whop platform. Refers to the id part in the final url: https://{domain_id}.apps.whop.com'\n          },\n          experience_path: {\n            type: 'string',\n            description: 'The path part for a specific view of the app. This is the template part of the url after the base domain. Eg: /experiences/[experienceId]'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the app'\n          },\n          status: {\n            $ref: '#/$defs/app_statuses'\n          },\n          verified: {\n            type: 'boolean',\n            description: 'Whether this app has been verified by Whop. Verified apps are endorsed by whop and are shown in the \\'featured apps\\' section of the app store.'\n          }\n        },\n        required: [          'id',\n          'base_url',\n          'dashboard_path',\n          'description',\n          'discover_path',\n          'domain_id',\n          'experience_path',\n          'name',\n          'status',\n          'verified'\n        ]\n      }\n    },\n    page_info: {\n      $ref: '#/$defs/page_info'\n    }\n  },\n  required: [    'data',\n    'page_info'\n  ],\n  $defs: {\n    app_statuses: {\n      type: 'string',\n      description: 'The status of an experience interface',\n      enum: [        'live',\n        'unlisted',\n        'hidden'\n      ]\n    },\n    page_info: {\n      type: 'object',\n      description: 'Information about pagination in a connection.',\n      properties: {\n        end_cursor: {\n          type: 'string',\n          description: 'When paginating forwards, the cursor to continue.'\n        },\n        has_next_page: {\n          type: 'boolean',\n          description: 'When paginating forwards, are there more items?'\n        },\n        has_previous_page: {\n          type: 'boolean',\n          description: 'When paginating backwards, are there more items?'\n        },\n        start_cursor: {\n          type: 'string',\n          description: 'When paginating backwards, the cursor to continue.'\n        }\n      },\n      required: [        'end_cursor',\n        'has_next_page',\n        'has_previous_page',\n        'start_cursor'\n      ]\n    }\n  }\n}\n```",
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
        description: 'The ID of the company to filter apps by',
      },
      direction: {
        $ref: '#/$defs/direction',
      },
      first: {
        type: 'integer',
        description: 'Returns the first _n_ elements from the list.',
      },
      last: {
        type: 'integer',
        description: 'Returns the last _n_ elements from the list.',
      },
      order: {
        type: 'string',
        description: 'The order to fetch the apps in for discovery.',
        enum: [
          'discoverable_at',
          'total_installs_last_30_days',
          'time_spent',
          'time_spent_last_24_hours',
          'daily_active_users',
        ],
      },
      query: {
        type: 'string',
        description: 'The query to search for apps by name.',
      },
      verified_apps_only: {
        type: 'boolean',
        description:
          "If true, you will only get apps that are verified by Whop. Use this to populate a 'featured apps' section on the app store.",
      },
      view_type: {
        type: 'string',
        description: 'The different types of an app view',
        enum: ['hub', 'discover', 'dash', 'dashboard', 'analytics'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      direction: {
        type: 'string',
        description: 'The direction of the sort.',
        enum: ['asc', 'desc'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.apps.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
