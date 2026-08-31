// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ShipmentsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Shipment attaches a carrier tracking number to a payment and follows the package from label creation to delivery, exposing the current delivery status and a customer-facing tracking URL.
 *
 * Use the Shipments API to list an account's shipments, retrieve one by its id or the payment it fulfills, attach a tracking number to a payment, and update the tracking number on an existing shipment.
 */
export class Shipments extends APIResource {
  /**
   * Attaches a carrier tracking number to a payment and begins tracking it.
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.create({
   *   payment_id: 'pay_xxxxxxxxxxxxxx',
   *   tracking_number: '1Z999AA10123456784',
   * });
   * ```
   */
  create(params: ShipmentCreateParams, options?: RequestOptions): APIPromise<Shared.Shipment> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/shipments', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a shipment by its id, or by the payment id it fulfills.
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: ShipmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Shipment> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/shipments/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of shipments for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const shipment of client.shipments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShipmentsCursorPage, Shared.Shipment> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/shipments', CursorPage<Shared.Shipment>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ShipmentCreateParams {
  /**
   * Body param: The payment to attach the shipment to, prefixed `pay_`.
   */
  payment_id: string;

  /**
   * Body param: The carrier-assigned tracking number.
   */
  tracking_number: string;

  /**
   * Body param: The unique identifier of the account, prefixed `biz_`.
   */
  account_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface ShipmentRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface ShipmentListParams extends CursorPageParams {
  /**
   * Query param: The account to list shipments for. Defaults to the acting account.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns shipments before this position.
   */
  before?: string;

  /**
   * Query param: Return shipments created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Return shipments created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of shipments to return.
   */
  first?: number;

  /**
   * Query param: The number of shipments to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort by.
   */
  order?: 'created_at';

  /**
   * Query param: Only shipments fulfilling these payments, each prefixed `pay_`.
   * Repeat the parameter to pass several, up to 100 per request — one paginated list
   * covers all of them.
   */
  payment_id?: Array<string>;

  /**
   * Query param: Filter to shipments with this delivery status.
   */
  status?:
    | 'unknown'
    | 'pre_transit'
    | 'in_transit'
    | 'out_for_delivery'
    | 'delivered'
    | 'available_for_pickup'
    | 'return_to_sender'
    | 'failure'
    | 'cancelled'
    | 'error';

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Shipments {
  export {
    type ShipmentCreateParams as ShipmentCreateParams,
    type ShipmentRetrieveParams as ShipmentRetrieveParams,
    type ShipmentListParams as ShipmentListParams,
  };
}

export { type ShipmentsCursorPage };
