// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Shipments extends APIResource {
  /**
   * Creates a new shipment
   *
   * Required permissions:
   *
   * - `shipment:create`
   * - `payment:basic:read`
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   payment_id: 'pay_xxxxxxxxxxxxxx',
   *   tracking_code: 'tracking_code',
   * });
   * ```
   */
  create(body: ShipmentCreateParams, options?: RequestOptions): APIPromise<Shared.Shipment> {
    return this._client.post('/shipments', { body, ...options });
  }

  /**
   * Retrieves a shipment by ID
   *
   * Required permissions:
   *
   * - `shipment:basic:read`
   * - `payment:basic:read`
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.retrieve(
   *   'ship_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Shipment> {
    return this._client.get(path`/shipments/${id}`, options);
  }

  /**
   * Lists shipments for a payment
   *
   * Required permissions:
   *
   * - `shipment:basic:read`
   * - `payment:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const shipmentListResponse of client.shipments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShipmentListResponsesCursorPage, ShipmentListResponse> {
    return this._client.getAPIList('/shipments', CursorPage<ShipmentListResponse>, { query, ...options });
  }
}

export type ShipmentListResponsesCursorPage = CursorPage<ShipmentListResponse>;

/**
 * A shipment
 */
export interface ShipmentListResponse {
  /**
   * The ID of the shipment
   */
  id: string;

  /**
   * The carrier of the shipment
   */
  carrier: Shared.ShipmentCarrier;

  /**
   * The date and time the shipment was created
   */
  created_at: string;

  /**
   * The delivery estimate of the shipment
   */
  delivery_estimate: string | null;

  /**
   * The payment of the shipment
   */
  payment: ShipmentListResponse.Payment;

  /**
   * The service of the shipment
   */
  service: string | null;

  /**
   * The status of the shipment
   */
  status: Shared.ShipmentStatus;

  /**
   * The substatus of a shipment
   */
  substatus: Shared.ShipmentSubstatus | null;

  /**
   * The tracking code of the shipment
   */
  tracking_code: string;

  /**
   * The date and time the shipment was last updated
   */
  updated_at: string;
}

export namespace ShipmentListResponse {
  /**
   * The payment of the shipment
   */
  export interface Payment {
    /**
     * The payment ID
     */
    id: string;
  }
}

export interface ShipmentCreateParams {
  /**
   * The ID of the company to create the shipment for
   */
  company_id: string;

  /**
   * The ID of the payment to create the shipment for
   */
  payment_id: string;

  /**
   * The tracking code for the shipment
   */
  tracking_code: string;
}

export interface ShipmentListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The ID of the company
   */
  company_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The ID of the payment
   */
  payment_id?: string | null;

  /**
   * The ID of the user
   */
  user_id?: string | null;
}

export declare namespace Shipments {
  export {
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentListResponsesCursorPage as ShipmentListResponsesCursorPage,
    type ShipmentCreateParams as ShipmentCreateParams,
    type ShipmentListParams as ShipmentListParams,
  };
}
