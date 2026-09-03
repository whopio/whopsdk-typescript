// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Refund is one reversal of a payment, full or partial. Refunds are issued with `POST /payments/{id}/refund`; this resource is the record of each one — how much moved, through which provider, and where it stands (`pending`, `succeeded`, `failed`).
 *
 * List a payment's refunds with `?payment_id=`, or every refund an account issued with `?account_id=`. `amount` is stated in the payment's settlement currency so it nets against the payment's `total`; `original_amount` is what the processor moved.
 */
export class Refunds extends APIResource {
  /**
   * Returns one refund.
   */
  retrieve(
    id: string,
    params: RefundRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RefundRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/refunds/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists refunds, newest first. Without filters this is every refund the caller can
   * read; narrow it to one payment with `payment_id`, one account with `account_id`,
   * or one buyer with `user_id`.
   */
  list(
    params: RefundListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RefundListResponsesCursorPage, RefundListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/refunds', CursorPage<RefundListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type RefundListResponsesCursorPage = CursorPage<RefundListResponse>;

/**
 * The different payment providers.
 */
export type PaymentProvider =
  | 'stripe'
  | 'coinbase'
  | 'paypal'
  | 'apple'
  | 'sezzle'
  | 'splitit'
  | 'platform_balance'
  | 'multi_psp'
  | 'adyen'
  | 'claritypay'
  | 'flex_pay'
  | 'checkout_dot_com'
  | 'airwallex'
  | 'coinflow'
  | 'sequra'
  | 'dlocal'
  | 'masspay'
  | 'braintree';

/**
 * The status of the refund reference.
 */
export type RefundReferenceStatus = 'available' | 'pending' | 'unavailable';

/**
 * The type of refund reference that was made available by the payment provider.
 */
export type RefundReferenceType =
  | 'acquirer_reference_number'
  | 'retrieval_reference_number'
  | 'system_trace_audit_number';

/**
 * The different statuses for a Refund object
 */
export type RefundStatus = 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled';

export interface RefundRetrieveResponse {
  /**
   * Refund ID, prefixed `rf_`.
   */
  id: string;

  /**
   * The account that issued the refund, prefixed `biz_`.
   */
  account_id: string | null;

  /**
   * The refunded amount as it settled, in the payment's settlement currency, so
   * pages of refunds net against the payment's `refunded_amount`. Converted at the
   * rate in force when the refund was issued, not the payment's original rate. Null
   * only when no exchange rate is recorded for a legacy multi-currency payment.
   */
  amount: RefundRetrieveResponse.Amount | null;

  /**
   * When the refund was requested, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * The provider's own explanation of the failure, or null.
   */
  failure_message: string | null;

  /**
   * Why the refund failed, normalized across providers. Null unless the refund
   * failed or was canceled.
   */
  failure_reason:
    | 'bank_declined'
    | 'expired_or_canceled_card'
    | 'lost_or_stolen_card'
    | 'insufficient_funds'
    | 'charge_disputed'
    | 'not_refundable'
    | 'merchant_request'
    | 'unknown'
    | null;

  /**
   * The refunded amount in the currency the processor moved.
   */
  original_amount: RefundRetrieveResponse.OriginalAmount;

  /**
   * The payment this refund reverses, prefixed `pay_`.
   */
  payment_id: string;

  /**
   * The payment provider that processed the refund, such as `paypal` or `coinbase`.
   */
  provider: string;

  /**
   * When the provider created the refund, as an ISO 8601 timestamp.
   */
  provider_created_at: string | null;

  /**
   * Why the refund was issued, when recorded.
   */
  reason: 'duplicate' | 'fraudulent' | 'requested_by_customer' | 'expired_uncaptured_charge' | null;

  /**
   * Whether a banking-network tracking reference is available for this refund.
   */
  reference_status: 'available' | 'pending' | 'unavailable' | null;

  /**
   * The kind of tracking reference, such as an acquirer reference number.
   */
  reference_type:
    | 'acquirer_reference_number'
    | 'retrieval_reference_number'
    | 'system_trace_audit_number'
    | null;

  /**
   * The tracking reference the buyer's bank can trace the refund by.
   */
  reference_value: string | null;

  /**
   * Where the refund stands with the processor: `pending`, `requires_action`,
   * `succeeded`, `failed`, or `canceled`.
   */
  status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled';

  /**
   * When the refund last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * True when the card network initiated the refund through Rapid Dispute
   * Resolution.
   */
  visa_rdr: boolean;
}

export namespace RefundRetrieveResponse {
  /**
   * The refunded amount as it settled, in the payment's settlement currency, so
   * pages of refunds net against the payment's `refunded_amount`. Converted at the
   * rate in force when the refund was issued, not the payment's original rate. Null
   * only when no exchange rate is recorded for a legacy multi-currency payment.
   */
  export interface Amount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The refunded amount in the currency the processor moved.
   */
  export interface OriginalAmount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }
}

export interface RefundListResponse {
  /**
   * Refund ID, prefixed `rf_`.
   */
  id: string;

  /**
   * The account that issued the refund, prefixed `biz_`.
   */
  account_id: string | null;

  /**
   * The refunded amount as it settled, in the payment's settlement currency, so
   * pages of refunds net against the payment's `refunded_amount`. Converted at the
   * rate in force when the refund was issued, not the payment's original rate. Null
   * only when no exchange rate is recorded for a legacy multi-currency payment.
   */
  amount: RefundListResponse.Amount | null;

  /**
   * When the refund was requested, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * The provider's own explanation of the failure, or null.
   */
  failure_message: string | null;

  /**
   * Why the refund failed, normalized across providers. Null unless the refund
   * failed or was canceled.
   */
  failure_reason:
    | 'bank_declined'
    | 'expired_or_canceled_card'
    | 'lost_or_stolen_card'
    | 'insufficient_funds'
    | 'charge_disputed'
    | 'not_refundable'
    | 'merchant_request'
    | 'unknown'
    | null;

  /**
   * The refunded amount in the currency the processor moved.
   */
  original_amount: RefundListResponse.OriginalAmount;

  /**
   * The payment this refund reverses, prefixed `pay_`.
   */
  payment_id: string;

  /**
   * The payment provider that processed the refund, such as `paypal` or `coinbase`.
   */
  provider: string;

  /**
   * When the provider created the refund, as an ISO 8601 timestamp.
   */
  provider_created_at: string | null;

  /**
   * Why the refund was issued, when recorded.
   */
  reason: 'duplicate' | 'fraudulent' | 'requested_by_customer' | 'expired_uncaptured_charge' | null;

  /**
   * Whether a banking-network tracking reference is available for this refund.
   */
  reference_status: 'available' | 'pending' | 'unavailable' | null;

  /**
   * The kind of tracking reference, such as an acquirer reference number.
   */
  reference_type:
    | 'acquirer_reference_number'
    | 'retrieval_reference_number'
    | 'system_trace_audit_number'
    | null;

  /**
   * The tracking reference the buyer's bank can trace the refund by.
   */
  reference_value: string | null;

  /**
   * Where the refund stands with the processor: `pending`, `requires_action`,
   * `succeeded`, `failed`, or `canceled`.
   */
  status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled';

  /**
   * When the refund last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * True when the card network initiated the refund through Rapid Dispute
   * Resolution.
   */
  visa_rdr: boolean;
}

export namespace RefundListResponse {
  /**
   * The refunded amount as it settled, in the payment's settlement currency, so
   * pages of refunds net against the payment's `refunded_amount`. Converted at the
   * rate in force when the refund was issued, not the payment's original rate. Null
   * only when no exchange rate is recorded for a legacy multi-currency payment.
   */
  export interface Amount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The refunded amount in the currency the processor moved.
   */
  export interface OriginalAmount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }
}

export interface RefundRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface RefundListParams extends CursorPageParams {
  /**
   * Query param: Only refunds issued by this account, prefixed `biz_`.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns refunds before this position.
   */
  before?: string;

  /**
   * Query param: Only refunds requested after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only refunds requested before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of refunds to return.
   */
  first?: number;

  /**
   * Query param: The number of refunds to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort by.
   */
  order?: 'created_at';

  /**
   * Query param: Only refunds of this payment, prefixed `pay_`.
   */
  payment_id?: string;

  /**
   * Query param: Only refunds to this buyer, prefixed `user_`.
   */
  user_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Refunds {
  export {
    type PaymentProvider as PaymentProvider,
    type RefundReferenceStatus as RefundReferenceStatus,
    type RefundReferenceType as RefundReferenceType,
    type RefundStatus as RefundStatus,
    type RefundRetrieveResponse as RefundRetrieveResponse,
    type RefundListResponse as RefundListResponse,
    type RefundListResponsesCursorPage as RefundListResponsesCursorPage,
    type RefundRetrieveParams as RefundRetrieveParams,
    type RefundListParams as RefundListParams,
  };
}
