// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DisputesAPI from './disputes';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Dispute alerts
 */
export class DisputeAlerts extends APIResource {
  /**
   * Retrieves the details of an existing dispute alert.
   *
   * Required permissions:
   *
   * - `payment:dispute_alert:read`
   * - `payment:basic:read`
   * - `member:email:read`
   * - `member:basic:read`
   * - `member:phone:read`
   * - `payment:dispute:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DisputeAlertRetrieveResponse> {
    return this._client.get(path`/dispute_alerts/${id}`, options);
  }

  /**
   * Returns a paginated list of dispute alerts for a company, with optional
   * filtering by creation date.
   *
   * Required permissions:
   *
   * - `payment:dispute_alert:read`
   * - `payment:basic:read`
   * - `payment:dispute:read`
   */
  list(
    query: DisputeAlertListParams,
    options?: RequestOptions,
  ): PagePromise<DisputeAlertListResponsesCursorPage, DisputeAlertListResponse> {
    return this._client.getAPIList('/dispute_alerts', CursorPage<DisputeAlertListResponse>, {
      query,
      ...options,
    });
  }
}

export type DisputeAlertListResponsesCursorPage = CursorPage<DisputeAlertListResponse>;

/**
 * The type of dispute alert.
 */
export type DisputeAlertType = 'dispute' | 'dispute_rdr' | 'fraud';

/**
 * A dispute alert represents an early warning notification from a payment
 * processor about a potential dispute or chargeback.
 */
export interface DisputeAlertRetrieveResponse {
  /**
   * The unique identifier of the dispute alert.
   */
  id: string;

  /**
   * The type of the dispute alert.
   */
  alert_type: DisputeAlertType;

  /**
   * The alerted amount in the specified currency.
   */
  amount: number;

  /**
   * Whether this alert incurs a charge.
   */
  charge_for_alert: boolean;

  /**
   * The time the dispute alert was created.
   */
  created_at: string;

  /**
   * The three-letter ISO currency code for the alerted amount.
   */
  currency: Shared.Currency;

  /**
   * The dispute associated with the dispute alert.
   */
  dispute: DisputeAlertRetrieveResponse.Dispute | null;

  /**
   * The payment associated with the dispute alert.
   */
  payment: DisputeAlertRetrieveResponse.Payment | null;

  /**
   * The date of the original transaction.
   */
  transaction_date: string | null;
}

export namespace DisputeAlertRetrieveResponse {
  /**
   * The dispute associated with the dispute alert.
   */
  export interface Dispute {
    /**
     * The unique identifier for the dispute.
     */
    id: string;

    /**
     * The disputed amount in the specified currency, formatted as a decimal.
     */
    amount: number;

    /**
     * The datetime the dispute was created.
     */
    created_at: string | null;

    /**
     * The three-letter ISO currency code for the disputed amount.
     */
    currency: Shared.Currency;

    /**
     * A human-readable reason for the dispute.
     */
    reason: string | null;

    /**
     * The current status of the dispute lifecycle, such as needs_response,
     * under_review, won, or lost.
     */
    status: DisputesAPI.DisputeStatuses;
  }

  /**
   * The payment associated with the dispute alert.
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
 * A dispute alert represents an early warning notification from a payment
 * processor about a potential dispute or chargeback.
 */
export interface DisputeAlertListResponse {
  /**
   * The unique identifier of the dispute alert.
   */
  id: string;

  /**
   * The type of the dispute alert.
   */
  alert_type: DisputeAlertType;

  /**
   * The alerted amount in the specified currency.
   */
  amount: number;

  /**
   * Whether this alert incurs a charge.
   */
  charge_for_alert: boolean;

  /**
   * The time the dispute alert was created.
   */
  created_at: string;

  /**
   * The three-letter ISO currency code for the alerted amount.
   */
  currency: Shared.Currency;

  /**
   * The dispute associated with the dispute alert.
   */
  dispute: DisputeAlertListResponse.Dispute | null;

  /**
   * The payment associated with the dispute alert.
   */
  payment: DisputeAlertListResponse.Payment | null;

  /**
   * The date of the original transaction.
   */
  transaction_date: string | null;
}

export namespace DisputeAlertListResponse {
  /**
   * The dispute associated with the dispute alert.
   */
  export interface Dispute {
    /**
     * The unique identifier for the dispute.
     */
    id: string;
  }

  /**
   * The payment associated with the dispute alert.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }
}

export interface DisputeAlertListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list dispute alerts for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return dispute alerts created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return dispute alerts created before this timestamp.
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

export declare namespace DisputeAlerts {
  export {
    type DisputeAlertType as DisputeAlertType,
    type DisputeAlertRetrieveResponse as DisputeAlertRetrieveResponse,
    type DisputeAlertListResponse as DisputeAlertListResponse,
    type DisputeAlertListResponsesCursorPage as DisputeAlertListResponsesCursorPage,
    type DisputeAlertListParams as DisputeAlertListParams,
  };
}
