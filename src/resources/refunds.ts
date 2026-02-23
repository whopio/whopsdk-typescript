// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Refunds extends APIResource {
  /**
   * Retrieves the details of an existing refund.
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RefundRetrieveResponse> {
    return this._client.get(path`/refunds/${id}`, options);
  }

  /**
   * Returns a paginated list of refunds for a specific payment, with optional
   * filtering by creation date.
   *
   * Required permissions:
   *
   * - `payment:basic:read`
   */
  list(
    query: RefundListParams,
    options?: RequestOptions,
  ): PagePromise<RefundListResponsesCursorPage, RefundListResponse> {
    return this._client.getAPIList('/refunds', CursorPage<RefundListResponse>, { query, ...options });
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
  | 'checkout_dot_com'
  | 'airwallex';

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

/**
 * A refund represents a full or partial reversal of a payment, including the
 * amount, status, and payment provider.
 */
export interface RefundRetrieveResponse {
  /**
   * The unique identifier for the refund.
   */
  id: string;

  /**
   * The refunded amount as a decimal in the specified currency, such as 10.43 for
   * $10.43 USD.
   */
  amount: number;

  /**
   * The datetime the refund was created.
   */
  created_at: string;

  /**
   * The three-letter ISO currency code for the refunded amount.
   */
  currency: Shared.Currency;

  /**
   * The original payment that this refund was issued against. Null if the payment is
   * no longer available.
   */
  payment: RefundRetrieveResponse.Payment | null;

  /**
   * The payment provider that processed the refund.
   */
  provider: PaymentProvider;

  /**
   * The timestamp when the refund was created in the payment provider's system. Null
   * if not available from the provider.
   */
  provider_created_at: string | null;

  /**
   * The status of the refund reference.
   */
  reference_status: RefundReferenceStatus | null;

  /**
   * The type of refund reference that was made available by the payment provider.
   */
  reference_type: RefundReferenceType | null;

  /**
   * The tracking reference value from the payment processor, used to trace the
   * refund through banking networks. Null if no reference was provided.
   */
  reference_value: string | null;

  /**
   * The current processing status of the refund, such as pending, succeeded, or
   * failed.
   */
  status: RefundStatus;
}

export namespace RefundRetrieveResponse {
  /**
   * The original payment that this refund was issued against. Null if the payment is
   * no longer available.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;

    /**
     * The reason why a specific payment was billed
     */
    billing_reason: PaymentsAPI.BillingReasons | null;

    /**
     * Possible card brands that a payment token can have
     */
    card_brand: PaymentsAPI.CardBrands | null;

    /**
     * The last four digits of the card used to make this payment. Null if the payment
     * was not made with a card.
     */
    card_last4: string | null;

    /**
     * The datetime the payment was created.
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
     * The member attached to this payment.
     */
    member: Payment.Member | null;

    /**
     * The membership attached to this payment.
     */
    membership: Payment.Membership | null;

    /**
     * The time at which this payment was successfully collected. Null if the payment
     * has not yet succeeded. As a Unix timestamp.
     */
    paid_at: string | null;

    /**
     * The different types of payment methods that can be used.
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

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
    user: Payment.User | null;
  }

  export namespace Payment {
    /**
     * The member attached to this payment.
     */
    export interface Member {
      /**
       * The unique identifier for the company member.
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
       * The unique identifier for the membership.
       */
      id: string;

      /**
       * The state of the membership.
       */
      status: Shared.MembershipStatus;
    }

    /**
     * The user that made this payment.
     */
    export interface User {
      /**
       * The unique identifier for the user.
       */
      id: string;

      /**
       * The user's email address. Requires the member:email:read permission to access.
       * Null if not authorized.
       */
      email: string | null;

      /**
       * The user's display name shown on their public profile.
       */
      name: string | null;

      /**
       * The user's unique username shown on their public profile.
       */
      username: string;
    }
  }
}

/**
 * A refund represents a full or partial reversal of a payment, including the
 * amount, status, and payment provider.
 */
export interface RefundListResponse {
  /**
   * The unique identifier for the refund.
   */
  id: string;

  /**
   * The refunded amount as a decimal in the specified currency, such as 10.43 for
   * $10.43 USD.
   */
  amount: number;

  /**
   * The datetime the refund was created.
   */
  created_at: string;

  /**
   * The three-letter ISO currency code for the refunded amount.
   */
  currency: Shared.Currency;

  /**
   * The original payment that this refund was issued against. Null if the payment is
   * no longer available.
   */
  payment: RefundListResponse.Payment | null;

  /**
   * The payment provider that processed the refund.
   */
  provider: PaymentProvider;

  /**
   * The timestamp when the refund was created in the payment provider's system. Null
   * if not available from the provider.
   */
  provider_created_at: string | null;

  /**
   * The status of the refund reference.
   */
  reference_status: RefundReferenceStatus | null;

  /**
   * The type of refund reference that was made available by the payment provider.
   */
  reference_type: RefundReferenceType | null;

  /**
   * The tracking reference value from the payment processor, used to trace the
   * refund through banking networks. Null if no reference was provided.
   */
  reference_value: string | null;

  /**
   * The current processing status of the refund, such as pending, succeeded, or
   * failed.
   */
  status: RefundStatus;
}

export namespace RefundListResponse {
  /**
   * The original payment that this refund was issued against. Null if the payment is
   * no longer available.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }
}

export interface RefundListParams extends CursorPageParams {
  /**
   * The unique identifier of the payment to list refunds for.
   */
  payment_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return refunds created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return refunds created before this timestamp.
   */
  created_before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
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
    type RefundListParams as RefundListParams,
  };
}
