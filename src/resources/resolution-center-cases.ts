// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Resolution Center Case is opened by a buyer when something is wrong with a purchase — an unwanted renewal, an item that never arrived, or a charge they don't recognize. It is the step before a chargeback: the two sides work it out directly, and Whop decides the case if they can't. Each case carries a reason, a status naming which side it is waiting on, a timeline of events, and the actions available to whoever is reading it.
 *
 * Use the Resolution Center Cases API from either side: as the buyer, open a case, reply, appeal a decision, or withdraw it; as the merchant, accept it (refunding the payment), deny it, or ask the buyer for more information. Both sides read the same case, page its timeline, and summarize the cases they can see.
 */
export class ResolutionCenterCases extends APIResource {
  /**
   * Retrieves a single resolution center case with its full event timeline.
   */
  retrieve(
    id: string,
    params: ResolutionCenterCaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResolutionCenterCaseRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/resolution_center_cases/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists resolution center cases. Without `account_id` you get every case you can
   * read — the ones you opened as a buyer and every account you are a team member
   * of; the filters narrow that list.
   */
  list(
    params: ResolutionCenterCaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ResolutionCenterCaseListResponsesCursorPage, ResolutionCenterCaseListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/resolution_center_cases', CursorPage<ResolutionCenterCaseListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type ResolutionCenterCaseListResponsesCursorPage = CursorPage<ResolutionCenterCaseListResponse>;

/**
 * The types of responses a customer can make to a resolution.
 */
export type ResolutionCenterCaseCustomerResponse = 'respond' | 'appeal' | 'withdraw';

/**
 * The different types of issues a resolution can be
 */
export type ResolutionCenterCaseIssueType =
  | 'forgot_to_cancel'
  | 'item_not_received'
  | 'significantly_not_as_described'
  | 'unauthorized_transaction'
  | 'product_unacceptable';

/**
 * The types of responses a merchant can make to a resolution.
 */
export type ResolutionCenterCaseMerchantResponse =
  | 'accept'
  | 'deny'
  | 'request_more_info'
  | 'appeal'
  | 'respond';

/**
 * The types of responses the platform can make to a resolution.
 */
export type ResolutionCenterCasePlatformResponse =
  | 'request_buyer_info'
  | 'request_merchant_info'
  | 'merchant_wins'
  | 'merchant_refund';

/**
 * The statuses a resolution object can have
 */
export type ResolutionCenterCaseStatus =
  | 'merchant_response_needed'
  | 'customer_response_needed'
  | 'merchant_info_needed'
  | 'customer_info_needed'
  | 'under_platform_review'
  | 'customer_won'
  | 'merchant_won'
  | 'customer_withdrew';

export interface ResolutionCenterCaseRetrieveResponse {
  /**
   * Resolution center case ID, prefixed `reso_`.
   */
  id: string;

  /**
   * The account the case was filed against.
   */
  account: ResolutionCenterCaseRetrieveResponse.Account | null;

  /**
   * The amount in question, in whole units of `currency`.
   */
  amount: number;

  available_actions: Array<'accept' | 'deny' | 'request_info' | 'reply' | 'appeal' | 'withdraw'>;

  /**
   * The customer who opened the case.
   */
  buyer: ResolutionCenterCaseRetrieveResponse.Buyer;

  /**
   * When the case was opened, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code of the amount.
   */
  currency: string | null;

  /**
   * Whether the customer has appealed a decision on this case.
   */
  customer_appealed: boolean;

  /**
   * Whether Whop is involved — either reviewing the case, or waiting on the side
   * named by `status` for something it asked for while reviewing.
   */
  escalated: boolean;

  /**
   * Who prevailed on the claim. `null` until the case closes. Read `refund` for
   * whether any money actually moved.
   */
  outcome: 'customer_won' | 'merchant_won' | 'withdrawn' | null;

  /**
   * The payment the case was opened against.
   */
  payment: ResolutionCenterCaseRetrieveResponse.Payment;

  /**
   * The plan the payment was made on, prefixed `plan_`.
   */
  plan_id: string | null;

  /**
   * The product the payment was for, prefixed `prod_`.
   */
  product_id: string | null;

  /**
   * What the customer says went wrong. Shares the `/disputes` vocabulary, so a case
   * that later becomes a chargeback reports the same complaint.
   */
  reason:
    | 'fraudulent'
    | 'product_not_received'
    | 'not_as_described'
    | 'product_unacceptable'
    | 'subscription_canceled';

  /**
   * Whether money moved and off whose balance: `none`, `merchant`, or `platform`
   * (Whop refunded the customer and the merchant kept the funds). Independent of
   * `outcome` — a case the merchant won can still carry a platform refund. `null`
   * while the case is open, and on older closed cases that predate this being
   * recorded.
   */
  refund: 'none' | 'merchant' | 'platform' | null;

  /**
   * When the next response is due, as an ISO 8601 timestamp.
   */
  response_due_at: string | null;

  /**
   * Who the case is waiting on. `awaiting_merchant` and `awaiting_customer` name the
   * side that owes a response, `under_review` means Whop is deciding, and `closed`
   * means it is settled — read `outcome` for how.
   */
  status: 'awaiting_merchant' | 'awaiting_customer' | 'under_review' | 'closed';

  /**
   * When the case was last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export namespace ResolutionCenterCaseRetrieveResponse {
  /**
   * The account the case was filed against.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * The customer who opened the case.
   */
  export interface Buyer {
    /**
     * The customer's email address. Requires the `member:email:read` scope; `null`
     * without it.
     */
    email: string | null;

    /**
     * The customer's member row on the account, prefixed `mem_`.
     */
    member_id: string | null;

    /**
     * The customer's display name.
     */
    name: string | null;

    /**
     * The customer's user ID, prefixed `user_`.
     */
    user_id: string | null;

    /**
     * The customer's Whop username.
     */
    username: string | null;
  }

  /**
   * The payment the case was opened against.
   */
  export interface Payment {
    /**
     * Payment ID, prefixed `pay_`.
     */
    id: string;

    /**
     * Card brand, when the customer paid by card.
     */
    card_brand: string | null;

    /**
     * Last four digits of the card, when the customer paid by card.
     */
    card_last4: string | null;

    /**
     * When the payment was made, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * How the customer paid, such as `card` or `paypal`.
     */
    payment_method_type: string | null;
  }
}

export interface ResolutionCenterCaseListResponse {
  /**
   * Resolution center case ID, prefixed `reso_`.
   */
  id: string;

  /**
   * The account the case was filed against.
   */
  account: ResolutionCenterCaseListResponse.Account | null;

  /**
   * The amount in question, in whole units of `currency`.
   */
  amount: number;

  available_actions: Array<'accept' | 'deny' | 'request_info' | 'reply' | 'appeal' | 'withdraw'>;

  /**
   * The customer who opened the case.
   */
  buyer: ResolutionCenterCaseListResponse.Buyer;

  /**
   * When the case was opened, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code of the amount.
   */
  currency: string | null;

  /**
   * Whether the customer has appealed a decision on this case.
   */
  customer_appealed: boolean;

  /**
   * Whether Whop is involved — either reviewing the case, or waiting on the side
   * named by `status` for something it asked for while reviewing.
   */
  escalated: boolean;

  /**
   * Who prevailed on the claim. `null` until the case closes. Read `refund` for
   * whether any money actually moved.
   */
  outcome: 'customer_won' | 'merchant_won' | 'withdrawn' | null;

  /**
   * The payment the case was opened against.
   */
  payment: ResolutionCenterCaseListResponse.Payment;

  /**
   * The plan the payment was made on, prefixed `plan_`.
   */
  plan_id: string | null;

  /**
   * The product the payment was for, prefixed `prod_`.
   */
  product_id: string | null;

  /**
   * What the customer says went wrong. Shares the `/disputes` vocabulary, so a case
   * that later becomes a chargeback reports the same complaint.
   */
  reason:
    | 'fraudulent'
    | 'product_not_received'
    | 'not_as_described'
    | 'product_unacceptable'
    | 'subscription_canceled';

  /**
   * Whether money moved and off whose balance: `none`, `merchant`, or `platform`
   * (Whop refunded the customer and the merchant kept the funds). Independent of
   * `outcome` — a case the merchant won can still carry a platform refund. `null`
   * while the case is open, and on older closed cases that predate this being
   * recorded.
   */
  refund: 'none' | 'merchant' | 'platform' | null;

  /**
   * When the next response is due, as an ISO 8601 timestamp.
   */
  response_due_at: string | null;

  /**
   * Who the case is waiting on. `awaiting_merchant` and `awaiting_customer` name the
   * side that owes a response, `under_review` means Whop is deciding, and `closed`
   * means it is settled — read `outcome` for how.
   */
  status: 'awaiting_merchant' | 'awaiting_customer' | 'under_review' | 'closed';

  /**
   * When the case was last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export namespace ResolutionCenterCaseListResponse {
  /**
   * The account the case was filed against.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * The customer who opened the case.
   */
  export interface Buyer {
    /**
     * The customer's email address. Requires the `member:email:read` scope; `null`
     * without it.
     */
    email: string | null;

    /**
     * The customer's member row on the account, prefixed `mem_`.
     */
    member_id: string | null;

    /**
     * The customer's display name.
     */
    name: string | null;

    /**
     * The customer's user ID, prefixed `user_`.
     */
    user_id: string | null;

    /**
     * The customer's Whop username.
     */
    username: string | null;
  }

  /**
   * The payment the case was opened against.
   */
  export interface Payment {
    /**
     * Payment ID, prefixed `pay_`.
     */
    id: string;

    /**
     * Card brand, when the customer paid by card.
     */
    card_brand: string | null;

    /**
     * Last four digits of the card, when the customer paid by card.
     */
    card_last4: string | null;

    /**
     * When the payment was made, as an ISO 8601 timestamp.
     */
    created_at: string;

    /**
     * How the customer paid, such as `card` or `paypal`.
     */
    payment_method_type: string | null;
  }
}

export interface ResolutionCenterCaseRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface ResolutionCenterCaseListParams extends CursorPageParams {
  /**
   * Query param: Only cases filed against this account (`biz_` tag). With read
   * access to the account this lists its whole queue; without, only the cases you
   * opened against it.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns cases before this position.
   */
  before?: string;

  /**
   * Query param: Only cases created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only cases created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of cases to return (default 20, max 100).
   */
  first?: number;

  /**
   * Query param: The number of cases to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort cases by.
   */
  order?: 'created_at' | 'response_due_at';

  /**
   * Query param: Only closed cases that ended these ways. Repeat the parameter to
   * pass several.
   */
  outcome?: Array<'customer_won' | 'merchant_won' | 'withdrawn'>;

  /**
   * Query param: Only cases opened for these reasons. Repeat the parameter to pass
   * several.
   */
  reason?: Array<
    | 'fraudulent'
    | 'product_not_received'
    | 'not_as_described'
    | 'product_unacceptable'
    | 'subscription_canceled'
  >;

  /**
   * Query param: Only cases in these statuses. Repeat the parameter to pass several
   * — one paginated list covers all of them.
   */
  status?: Array<'awaiting_merchant' | 'awaiting_customer' | 'under_review' | 'closed'>;

  /**
   * Query param: Only cases opened by this customer — a `user_` tag, or `me` for the
   * calling user. It narrows what you can already read, so `me` lists the cases you
   * opened without the ones on accounts you are a team member of.
   */
  user_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
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
    type ResolutionCenterCaseRetrieveParams as ResolutionCenterCaseRetrieveParams,
    type ResolutionCenterCaseListParams as ResolutionCenterCaseListParams,
  };
}
