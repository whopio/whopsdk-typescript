// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Retrieves a payment by ID
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.retrieve(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.get(path`/payments/${id}`, options);
  }

  /**
   * Lists payments
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const paymentListResponse of client.payments.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PaymentListParams,
    options?: RequestOptions,
  ): PagePromise<PaymentListResponsesCursorPage, PaymentListResponse> {
    return this._client.getAPIList('/payments', CursorPage<PaymentListResponse>, { query, ...options });
  }

  /**
   * Refunds a payment
   *
   * Required permissions:
   *
   * - `payment:manage`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.refund(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  refund(
    id: string,
    body: PaymentRefundParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Payment> {
    return this._client.post(path`/payments/${id}/refund`, { body, ...options });
  }

  /**
   * Retries a payment
   *
   * Required permissions:
   *
   * - `payment:manage`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.retry(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retry(id: string, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.post(path`/payments/${id}/retry`, options);
  }

  /**
   * Voids a payment
   *
   * Required permissions:
   *
   * - `payment:manage`
   * - `plan:basic:read`
   * - `access_pass:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `promo_code:basic:read`
   *
   * @example
   * ```ts
   * const payment = await client.payments.void(
   *   'pay_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  void(id: string, options?: RequestOptions): APIPromise<Shared.Payment> {
    return this._client.post(path`/payments/${id}/void`, options);
  }
}

export type PaymentListResponsesCursorPage = CursorPage<PaymentListResponse>;

/**
 * An object representing a receipt for a membership.
 */
export interface PaymentListResponse {
  /**
   * The payment ID
   */
  id: string;

  /**
   * How much the payment is for after fees
   */
  amount_after_fees: number;

  /**
   * Whether this payment was auto refunded or not
   */
  auto_refunded: boolean;

  /**
   * The address of the user who made the payment.
   */
  billing_address: PaymentListResponse.BillingAddress | null;

  /**
   * The billing reason
   */
  billing_reason: string | null;

  /**
   * The type of card used as the payment method.
   */
  card_brand: string | null;

  /**
   * The last 4 digits of the card used to make the payment.
   */
  card_last4: string | null;

  /**
   * The company for the payment.
   */
  company: PaymentListResponse.Company | null;

  /**
   * The datetime the payment was created
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Shared.Currency | null;

  /**
   * When an alert came in that this transaction will be disputed
   */
  dispute_alerted_at: string | null;

  /**
   * If the payment failed, the reason for the failure.
   */
  failure_message: string | null;

  /**
   * The time of the last payment attempt.
   */
  last_payment_attempt: string | null;

  /**
   * The member attached to this payment.
   */
  member: PaymentListResponse.Member | null;

  /**
   * The membership attached to this payment.
   */
  membership: PaymentListResponse.Membership | null;

  /**
   * The datetime the payment was paid
   */
  paid_at: string | null;

  /**
   * Returns the type of payment method used for the payment, if available. Ex.
   * klarna, affirm, card, cashapp
   */
  payment_method_type: string | null;

  /**
   * The plan attached to this payment.
   */
  plan: PaymentListResponse.Plan | null;

  /**
   * The access pass attached to this payment.
   */
  product: PaymentListResponse.Product | null;

  /**
   * The promo code used for this payment.
   */
  promo_code: PaymentListResponse.PromoCode | null;

  /**
   * Whether the payment can be refunded.
   */
  refundable: boolean;

  /**
   * The payment refund amount(if applicable).
   */
  refunded_amount: number | null;

  /**
   * When the payment was refunded (if applicable).
   */
  refunded_at: string | null;

  /**
   * Whether the payment can be retried.
   */
  retryable: boolean;

  /**
   * The status of a receipt
   */
  status: Shared.ReceiptStatus | null;

  /**
   * The friendly status of the payment.
   */
  substatus: Shared.FriendlyReceiptStatus;

  /**
   * The subtotal to show to the creator (excluding buyer fees).
   */
  subtotal: number | null;

  /**
   * The total to show to the creator (excluding buyer fees).
   */
  total: number | null;

  /**
   * The total in USD to show to the creator (excluding buyer fees).
   */
  usd_total: number | null;

  /**
   * The user that made this payment.
   */
  user: PaymentListResponse.User | null;

  /**
   * Whether the payment can be voided.
   */
  voidable: boolean;
}

export namespace PaymentListResponse {
  /**
   * The address of the user who made the payment.
   */
  export interface BillingAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The name of the customer.
     */
    name: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * The company for the payment.
   */
  export interface Company {
    /**
     * The ID of the company
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The member attached to this payment.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;

    /**
     * The phone number for the member, if available.
     */
    phone: string | null;
  }

  /**
   * The membership attached to this payment.
   */
  export interface Membership {
    /**
     * The internal ID of the membership.
     */
    id: string;

    /**
     * The state of the membership.
     */
    status: Shared.MembershipStatus;
  }

  /**
   * The plan attached to this payment.
   */
  export interface Plan {
    /**
     * The internal ID of the plan.
     */
    id: string;
  }

  /**
   * The access pass attached to this payment.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
     */
    id: string;

    /**
     * The route of the product.
     */
    route: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The promo code used for this payment.
   */
  export interface PromoCode {
    /**
     * The ID of the promo.
     */
    id: string;

    /**
     * The amount off (% or flat amount) for the promo.
     */
    amount_off: number;

    /**
     * The monetary currency of the promo code.
     */
    base_currency: Shared.Currency;

    /**
     * The specific code used to apply the promo at checkout.
     */
    code: string | null;

    /**
     * The number of billing cycles the promo is applied for.
     */
    number_of_intervals: number | null;

    /**
     * The type (% or flat amount) of the promo.
     */
    promo_type: Shared.PromoType;
  }

  /**
   * The user that made this payment.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

export interface PaymentListParams extends CursorPageParams {
  /**
   * The ID of the company to list payments for
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The billing reason for the payment
   */
  billing_reasons?: Array<
    | 'subscription_create'
    | 'subscription_cycle'
    | 'subscription_update'
    | 'one_time'
    | 'manual'
    | 'subscription'
  > | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

  /**
   * The currency of the payment.
   */
  currencies?: Array<Shared.Currency> | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Whether to include free payments.
   */
  include_free?: boolean | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The order to sort the results by.
   */
  order?: 'final_amount' | 'created_at' | 'paid_at' | null;

  /**
   * A specific plan.
   */
  plan_ids?: Array<string> | null;

  /**
   * A specific product.
   */
  product_ids?: Array<string> | null;

  /**
   * The status of the payment.
   */
  statuses?: Array<Shared.ReceiptStatus> | null;

  /**
   * The substatus of the payment.
   */
  substatuses?: Array<Shared.FriendlyReceiptStatus> | null;
}

export interface PaymentRefundParams {
  /**
   * An amount if the refund is supposed to be partial.
   */
  partial_amount?: number | null;
}

export declare namespace Payments {
  export {
    type PaymentListResponse as PaymentListResponse,
    type PaymentListResponsesCursorPage as PaymentListResponsesCursorPage,
    type PaymentListParams as PaymentListParams,
    type PaymentRefundParams as PaymentRefundParams,
  };
}
