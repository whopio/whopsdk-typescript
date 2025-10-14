// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@whop/mcp/filtering';
import { Metadata, asTextContentResult } from '@whop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Whop from '@whop/sdk';

export const metadata: Metadata = {
  resource: 'shipments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/shipments/{id}',
  operationId: 'retrieveShipment',
};

export const tool: Tool = {
  name: 'retrieve_shipments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a shipment by ID\n\nRequired permissions:\n - `shipment:basic:read`\n - `payment:basic:read`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/shipment',\n  $defs: {\n    shipment: {\n      type: 'object',\n      description: 'A shipment',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the shipment'\n        },\n        carrier: {\n          $ref: '#/$defs/shipment_carrier'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The date and time the shipment was created'\n        },\n        delivery_estimate: {\n          type: 'integer',\n          description: 'The delivery estimate of the shipment'\n        },\n        payment: {\n          type: 'object',\n          description: 'The payment of the shipment',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The payment ID'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        service: {\n          type: 'string',\n          description: 'The service of the shipment'\n        },\n        status: {\n          $ref: '#/$defs/shipment_status'\n        },\n        substatus: {\n          $ref: '#/$defs/shipment_substatus'\n        },\n        tracking_code: {\n          type: 'string',\n          description: 'The tracking code of the shipment'\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'The date and time the shipment was last updated'\n        }\n      },\n      required: [        'id',\n        'carrier',\n        'created_at',\n        'delivery_estimate',\n        'payment',\n        'service',\n        'status',\n        'substatus',\n        'tracking_code',\n        'updated_at'\n      ]\n    },\n    shipment_carrier: {\n      type: 'string',\n      description: 'The carrier of a shipment',\n      enum: [        'accurate',\n        'amazon_mws',\n        'amazon_shipping',\n        'apc',\n        'asendia_usa',\n        'australia_post',\n        'axlehire_v3',\n        'better_trucks',\n        'canada_post',\n        'canpar',\n        'columbus_last_mile',\n        'chronopost',\n        'cloud_sort',\n        'courier_express',\n        'couriers_please',\n        'cs_logistics',\n        'dai_post',\n        'deutsche_post_uk',\n        'deutsche_post',\n        'dhl_ecommerce_asia',\n        'dhl_ecs',\n        'dhl_express',\n        'dhl_paket',\n        'door_dash',\n        'dpd_nl',\n        'dpd_uk',\n        'dpd',\n        'epost_global',\n        'estafeta',\n        'evri',\n        'fastway',\n        'fedex_cross_border',\n        'fedex_default',\n        'fedex_mailview',\n        'fedex_smartpost',\n        'fedex',\n        'first_choice',\n        'first_mile',\n        'flexport',\n        'gio',\n        'gio_express',\n        'gso',\n        'hailify',\n        'henry',\n        'interlink_express',\n        'jet',\n        'kuroneko_yamato',\n        'la_post',\n        'lasership_v2',\n        'loomis_express',\n        'lso',\n        'ontrac',\n        'optima',\n        'osm_worldwide',\n        'parcelforce',\n        'parcll',\n        'passport_global',\n        'post_nl',\n        'purolator',\n        'quick',\n        'royal_mail',\n        'omni_parcel',\n        'sendle',\n        'sf_express',\n        'smart_kargo',\n        'sonic',\n        'spee_dee',\n        'swyft',\n        'tforce',\n        'uds',\n        'ups_iparcel',\n        'ups_mail_innovations',\n        'ups',\n        'usps',\n        'veho',\n        'yanwen'\n      ]\n    },\n    shipment_status: {\n      type: 'string',\n      description: 'The status of a shipment',\n      enum: [        'unknown',\n        'pre_transit',\n        'in_transit',\n        'out_for_delivery',\n        'delivered',\n        'available_for_pickup',\n        'return_to_sender',\n        'failure',\n        'cancelled',\n        'error'\n      ]\n    },\n    shipment_substatus: {\n      type: 'string',\n      description: 'The substatus of a shipment',\n      enum: [        'address_correction',\n        'arrived_at_destination',\n        'arrived_at_facility',\n        'arrived_at_pickup_location',\n        'awaiting_information',\n        'substatus_cancelled',\n        'damaged',\n        'delayed',\n        'delivery_exception',\n        'departed_facility',\n        'departed_origin_facility',\n        'expired',\n        'substatus_failure',\n        'held',\n        'substatus_in_transit',\n        'label_created',\n        'lost',\n        'missorted',\n        'substatus_out_for_delivery',\n        'received_at_destination_facility',\n        'received_at_origin_facility',\n        'refused',\n        'return',\n        'status_update',\n        'transferred_to_destination_carrier',\n        'transit_exception',\n        'substatus_unknown',\n        'weather_delay'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.shipments.retrieve(id)));
};

export default { metadata, tool, handler };
