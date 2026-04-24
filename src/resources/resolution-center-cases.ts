// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Resolution center cases
 */
export class ResolutionCenterCases extends APIResource {
  /**
   * Retrieves the details of an existing resolution center case.
   *
   * Required permissions:
   *
   * - `payment:resolution_center_case:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ResolutionCenterCaseRetrieveResponse> {
    return this._client.get(path`/resolution_center_cases/${id}`, options);
  }

  /**
   * Returns a paginated list of resolution center cases, with optional filtering by
   * company, status, and creation date.
   *
   * Required permissions:
   *
   * - `payment:resolution_center_case:read`
   */
  list(query: ResolutionCenterCaseListParams | null | undefined = {}, options?: RequestOptions): PagePromise<ResolutionCenterCaseListResponsesCursorPage, ResolutionCenterCaseListResponse> {
    return this._client.getAPIList('/resolution_center_cases', CursorPage<ResolutionCenterCaseListResponse>, { query, ...options });
  }
}

export type ResolutionCenterCaseListResponsesCursorPage = CursorPage<ResolutionCenterCaseListResponse>

/**
 * The types of responses a customer can make to a resolution.
 */
export type ResolutionCenterCaseCustomerResponse = 'respond' | 'appeal' | 'withdraw'

/**
 * The different types of issues a resolution can be
 */
export type ResolutionCenterCaseIssueType = 'forgot_to_cancel' | 'item_not_received' | 'significantly_not_as_described' | 'unauthorized_transaction' | 'product_unacceptable'

/**
 * The types of responses a merchant can make to a resolution.
 */
export type ResolutionCenterCaseMerchantResponse = 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'

/**
 * The types of responses the platform can make to a resolution.
 */
export type ResolutionCenterCasePlatformResponse = 'request_buyer_info' | 'request_merchant_info' | 'merchant_wins' | 'platform_refund' | 'merchant_refund'

/**
 * The statuses a resolution object can have
 */
export type ResolutionCenterCaseStatus = 'merchant_response_needed' | 'customer_response_needed' | 'merchant_info_needed' | 'customer_info_needed' | 'under_platform_review' | 'customer_won' | 'merchant_won' | 'customer_withdrew'

/**
 * A resolution center case is a dispute or support case between a user and a
 * company, tracking the issue, status, and outcome.
 */
export interface ResolutionCenterCaseRetrieveResponse {
  /**
   * The unique identifier for the resolution.
   */
  id: string;

  /**
   * The company involved in this resolution case. Null if the company no longer
   * exists.
   */
  company: ResolutionCenterCaseRetrieveResponse.Company | null;

  /**
   * The datetime the resolution was created.
   */
  created_at: string;

  /**
   * Whether the customer has filed an appeal after the initial resolution decision.
   */
  customer_appealed: boolean;

  /**
   * The list of actions currently available to the customer.
   */
  customer_response_actions: Array<ResolutionCenterCaseCustomerResponse>;

  /**
   * The deadline by which the next response is required. Null if no deadline is
   * currently active. As a Unix timestamp.
   */
  due_date: string | null;

  /**
   * The category of the dispute.
   */
  issue: ResolutionCenterCaseIssueType;

  /**
   * The membership record associated with the disputed payment. Null if the
   * membership no longer exists.
   */
  member: ResolutionCenterCaseRetrieveResponse.Member | null;

  /**
   * Whether the merchant has filed an appeal after the initial resolution decision.
   */
  merchant_appealed: boolean;

  /**
   * The list of actions currently available to the merchant.
   */
  merchant_response_actions: Array<ResolutionCenterCaseMerchantResponse>;

  /**
   * The payment record that is the subject of this resolution case.
   */
  payment: ResolutionCenterCaseRetrieveResponse.Payment;

  /**
   * The list of actions currently available to the Whop platform for moderating this
   * resolution.
   */
  platform_response_actions: Array<ResolutionCenterCasePlatformResponse>;

  /**
   * The most recent 50 messages, actions, and status changes that have occurred
   * during this resolution case.
   */
  resolution_events: Array<ResolutionCenterCaseRetrieveResponse.ResolutionEvent>;

  /**
   * The current status of the resolution case, indicating which party needs to
   * respond or if the case is closed.
   */
  status: ResolutionCenterCaseStatus;

  /**
   * The datetime the resolution was last updated.
   */
  updated_at: string;

  /**
   * The customer (buyer) who filed this resolution case.
   */
  user: ResolutionCenterCaseRetrieveResponse.User;
}

export namespace ResolutionCenterCaseRetrieveResponse {
  /**
   * The company involved in this resolution case. Null if the company no longer
   * exists.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The membership record associated with the disputed payment. Null if the
   * membership no longer exists.
   */
  export interface Member {
    /**
     * The unique identifier for the extra public member.
     */
    id: string;
  }

  /**
   * The payment record that is the subject of this resolution case.
   */
  export interface Payment {
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
     * The time at which this payment was successfully collected. Null if the payment
     * has not yet succeeded. As a Unix timestamp.
     */
    paid_at: string | null;

    /**
     * The payment amount before taxes and discounts are applied. In the currency
     * specified by the currency field.
     */
    subtotal: number | null;

    /**
     * The total amount charged to the customer for this payment, including taxes and
     * after any discounts. In the currency specified by the currency field.
     */
    total: number;
  }

  /**
   * A resolution event is a message or action within a resolution case, such as a
   * response, escalation, or status change.
   */
  export interface ResolutionEvent {
    /**
     * The unique identifier for the resolution event.
     */
    id: string;

    /**
     * The type of action recorded in this event.
     */
    action: 'created' | 'responded' | 'accepted' | 'denied' | 'appealed' | 'withdrew' | 'requested_more_info' | 'escalated' | 'dispute_opened' | 'dispute_customer_won' | 'dispute_merchant_won';

    /**
     * The datetime the resolution event was created.
     */
    created_at: string;

    /**
     * The message body or additional context provided with this resolution event. Null
     * if no details were included.
     */
    details: string | null;

    /**
     * The party who performed this action.
     */
    reporter_type: 'merchant' | 'customer' | 'platform' | 'system';
  }

  /**
   * The customer (buyer) who filed this resolution case.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

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

/**
 * A resolution center case is a dispute or support case between a user and a
 * company, tracking the issue, status, and outcome.
 */
export interface ResolutionCenterCaseListResponse {
  /**
   * The unique identifier for the resolution.
   */
  id: string;

  /**
   * The company involved in this resolution case. Null if the company no longer
   * exists.
   */
  company: ResolutionCenterCaseListResponse.Company | null;

  /**
   * The datetime the resolution was created.
   */
  created_at: string;

  /**
   * Whether the customer has filed an appeal after the initial resolution decision.
   */
  customer_appealed: boolean;

  /**
   * The list of actions currently available to the customer.
   */
  customer_response_actions: Array<ResolutionCenterCaseCustomerResponse>;

  /**
   * The deadline by which the next response is required. Null if no deadline is
   * currently active. As a Unix timestamp.
   */
  due_date: string | null;

  /**
   * The category of the dispute.
   */
  issue: ResolutionCenterCaseIssueType;

  /**
   * Whether the merchant has filed an appeal after the initial resolution decision.
   */
  merchant_appealed: boolean;

  /**
   * The list of actions currently available to the merchant.
   */
  merchant_response_actions: Array<ResolutionCenterCaseMerchantResponse>;

  /**
   * The payment record that is the subject of this resolution case.
   */
  payment: ResolutionCenterCaseListResponse.Payment;

  /**
   * The current status of the resolution case, indicating which party needs to
   * respond or if the case is closed.
   */
  status: ResolutionCenterCaseStatus;

  /**
   * The datetime the resolution was last updated.
   */
  updated_at: string;

  /**
   * The customer (buyer) who filed this resolution case.
   */
  user: ResolutionCenterCaseListResponse.User;
}

export namespace ResolutionCenterCaseListResponse {
  /**
   * The company involved in this resolution case. Null if the company no longer
   * exists.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The payment record that is the subject of this resolution case.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }

  /**
   * The customer (buyer) who filed this resolution case.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

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

export interface ResolutionCenterCaseListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of the company to list resolution center cases for.
   */
  company_id?: string | null;

  /**
   * Only return cases created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return cases created before this timestamp.
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

  /**
   * Filter by resolution center case status.
   */
  statuses?: Array<ResolutionCenterCaseStatus> | null;
}

export declare namespace ResolutionCenterCases {
  export {
    type ResolutionCenterCaseCustomerResponse as ResolutionCenterCaseCustomerResponse,
    type ResolutionCenterCaseIssueType as ResolutionCenterCaseIssueType,
    type ResolutionCenterCaseMerchantResponse as ResolutionCenterCaseMerchantResponse,
    type ResolutionCenterCasePlatformResponse as ResolutionCenterCasePlatformResponse,
    type ResolutionCenterCaseStatus as ResolutionCenterCaseStatus,
    type ResolutionCenterCaseRetrieveResponse as ResolutionCenterCaseRetrieveResponse,
    type ResolutionCenterCaseListResponse as ResolutionCenterCaseListResponse,
    type ResolutionCenterCaseListResponsesCursorPage as ResolutionCenterCaseListResponsesCursorPage,
    type ResolutionCenterCaseListParams as ResolutionCenterCaseListParams
  };
}
