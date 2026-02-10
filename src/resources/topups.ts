// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Topups extends APIResource {
  /**
   * Add funds to a company's platform balance by charging a stored payment method.
   * Top-ups have no fees or taxes and do not count as revenue.
   *
   * Required permissions:
   *
   * - `payment:charge`
   *
   * @example
   * ```ts
   * const topup = await client.topups.create({
   *   amount: 6.9,
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   currency: 'usd',
   *   payment_method_id: 'pmt_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: TopupCreateParams, options?: RequestOptions): APIPromise<TopupCreateResponse> {
    return this._client.post('/topups', { body, ...options });
  }
}

/**
 * A payment represents a completed or attempted charge for a membership. Payments
 * track the amount, status, currency, and payment method used.
 */
export interface TopupCreateResponse {
  /**
   * The unique identifier for the payment.
   */
  id: string;

  /**
   * The datetime the payment was created.
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Shared.Currency | null;

  /**
   * If the payment failed, the reason for the failure.
   */
  failure_message: string | null;

  /**
   * The time at which this payment was successfully collected. Null if the payment
   * has not yet succeeded. As a Unix timestamp.
   */
  paid_at: string | null;

  /**
   * The status of a receipt
   */
  status: Shared.ReceiptStatus | null;

  /**
   * The total to show to the creator (excluding buyer fees).
   */
  total: number | null;
}

export interface TopupCreateParams {
  /**
   * The amount to add to the balance in the specified currency. For example, 50.00
   * for $50.00 USD.
   */
  amount: number;

  /**
   * The unique identifier of the company to add funds to, starting with 'biz\_'.
   */
  company_id: string;

  /**
   * The currency for the top-up amount, such as 'usd'.
   */
  currency: Shared.Currency;

  /**
   * The unique identifier of the stored payment method to charge for the top-up.
   */
  payment_method_id: string;
}

export declare namespace Topups {
  export { type TopupCreateResponse as TopupCreateResponse, type TopupCreateParams as TopupCreateParams };
}
