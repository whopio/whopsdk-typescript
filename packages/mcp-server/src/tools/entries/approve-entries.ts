// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'whopsdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'whopsdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whopsdk from 'whopsdk';

export const metadata: Metadata = {
  resource: 'entries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/entries/{id}/approve',
  operationId: 'approveEntry',
};

export const tool: Tool = {
  name: 'approve_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nApprove an entry\n\nRequired permissions:\n - `plan:waitlist:manage`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entry_approve_response',\n  $defs: {\n    entry_approve_response: {\n      type: 'object',\n      description: 'An object representing an asynchronous job.',\n      properties: {\n        job_id: {\n          type: 'string',\n          description: 'The ID of the job.'\n        }\n      },\n      required: [        'job_id'\n      ]\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: Whopsdk, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.entries.approve(id)));
};

export default { metadata, tool, handler };
