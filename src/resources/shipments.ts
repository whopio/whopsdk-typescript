// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Shipments
 */
export class Shipments extends APIResource {
  /**
   * Create a new shipment with a tracking code for a specific payment within a
   * company.
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
   * Retrieves the details of an existing shipment.
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
   * Returns a paginated list of shipments, with optional filtering by payment,
   * company, or user.
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
 * A physical shipment associated with a payment, including carrier details and
 * tracking information.
 */
export interface ShipmentListResponse {
  /**
   * The unique identifier for the shipment.
   */
  id: string;

  /**
   * The shipping carrier responsible for delivering this shipment.
   */
  carrier: Shared.ShipmentCarrier;

  /**
   * The datetime the shipment was created.
   */
  created_at: string;

  /**
   * The estimated delivery date for this shipment. Null if the carrier has not
   * provided an estimate.
   */
  delivery_estimate: string | null;

  /**
   * The payment associated with this shipment. Null if the payment has been deleted
   * or is inaccessible.
   */
  payment: ShipmentListResponse.Payment | null;

  /**
   * The shipping service level used for this shipment. Null if the carrier does not
   * specify a service tier.
   */
  service: string | null;

  /**
   * The current delivery status of this shipment.
   */
  status: Shared.ShipmentStatus;

  /**
   * The substatus of a shipment
   */
  substatus: Shared.ShipmentSubstatus | null;

  /**
   * The carrier-assigned tracking number used to look up shipment progress.
   */
  tracking_code: string;

  /**
   * The datetime the shipment was last updated.
   */
  updated_at: string;
}

export namespace ShipmentListResponse {
  /**
   * The payment associated with this shipment. Null if the payment has been deleted
   * or is inaccessible.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }
}

export interface ShipmentCreateParams {
  /**
   * The unique identifier of the company to create the shipment for, starting with
   * 'biz\_'.
   */
  company_id: string;

  /**
   * The unique identifier of the payment to associate the shipment with.
   */
  payment_id: string;

  /**
   * The carrier tracking code for the shipment, such as a USPS, UPS, or FedEx
   * tracking number.
   */
  tracking_code: string;
}

export interface ShipmentListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter shipments to only those belonging to this company.
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
   * Filter shipments to only those associated with this specific payment.
   */
  payment_id?: string | null;

  /**
   * Filter shipments to only those for this specific user.
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
