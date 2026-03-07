// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Memberships
 */
export class Memberships extends APIResource {
  /**
   * Retrieves the details of an existing membership.
   *
   * Required permissions:
   *
   * - `member:basic:read`
   * - `member:email:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.get(path`/memberships/${id}`, options);
  }

  /**
   * Update a membership's metadata or other mutable properties.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   */
  update(
    id: string,
    body: MembershipUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    return this._client.patch(path`/memberships/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of memberships, with optional filtering by product,
   * plan, status, and user.
   *
   * Required permissions:
   *
   * - `member:basic:read`
   * - `member:email:read`
   */
  list(
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembershipListResponsesCursorPage, MembershipListResponse> {
    return this._client.getAPIList('/memberships', CursorPage<MembershipListResponse>, { query, ...options });
  }

  /**
   * Cancel a membership either immediately or at the end of the current billing
   * period. Immediate cancellation revokes access right away.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   */
  cancel(
    id: string,
    body: MembershipCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/cancel`, { body, ...options });
  }

  /**
   * Pause a membership's recurring payments. The customer retains access but will
   * not be charged until the membership is resumed.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   */
  pause(
    id: string,
    body: MembershipPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/pause`, { body, ...options });
  }

  /**
   * Resume a previously paused membership's recurring payments. Billing resumes on
   * the next cycle.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   */
  resume(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/resume`, options);
  }

  /**
   * Reverse a pending cancellation for a membership that was scheduled to cancel at
   * period end.
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:email:read`
   * - `member:basic:read`
   */
  uncancel(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/uncancel`, options);
  }
}

export type MembershipListResponsesCursorPage = CursorPage<MembershipListResponse>;

/**
 * The different reasons a user can choose for why they are canceling their
 * membership.
 */
export type CancelOptions =
  | 'too_expensive'
  | 'switching'
  | 'missing_features'
  | 'technical_issues'
  | 'bad_experience'
  | 'other'
  | 'testing';

/**
 * A membership represents an active relationship between a user and a product. It
 * tracks the user's access, billing status, and renewal schedule.
 */
export interface MembershipListResponse {
  /**
   * The unique identifier for the membership.
   */
  id: string;

  /**
   * Whether this membership is set to cancel at the end of the current billing
   * cycle. Only applies to memberships with a recurring plan.
   */
  cancel_at_period_end: boolean;

  /**
   * The different reasons a user can choose for why they are canceling their
   * membership.
   */
  cancel_option: CancelOptions | null;

  /**
   * The time the customer initiated cancellation of this membership. As a Unix
   * timestamp. Null if the membership has not been canceled.
   */
  canceled_at: string | null;

  /**
   * Free-text explanation provided by the customer when canceling. Null if the
   * customer did not provide a reason.
   */
  cancellation_reason: string | null;

  /**
   * The company this membership belongs to.
   */
  company: MembershipListResponse.Company;

  /**
   * The datetime the membership was created.
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Shared.Currency | null;

  /**
   * The time the user first joined the company associated with this membership. As a
   * Unix timestamp. Null if the member record does not exist.
   */
  joined_at: string | null;

  /**
   * The software license key associated with this membership. Only present if the
   * product includes a Whop Software Licensing experience. Null otherwise.
   */
  license_key: string | null;

  /**
   * The URL where the customer can view and manage this membership, including
   * cancellation and plan changes. Null if no member record exists.
   */
  manage_url: string | null;

  /**
   * The member record linking the user to the company for this membership. Null if
   * the member record has not been created yet.
   */
  member: MembershipListResponse.Member | null;

  /**
   * Custom key-value pairs for the membership (commonly used for software licensing,
   * e.g., HWID). Max 50 keys, 500 chars per key, 5000 chars per value.
   */
  metadata: { [key: string]: unknown };

  /**
   * Whether recurring payment collection for this membership is temporarily paused
   * by the company.
   */
  payment_collection_paused: boolean;

  /**
   * The plan the customer purchased to create this membership.
   */
  plan: MembershipListResponse.Plan;

  /**
   * The product this membership grants access to.
   */
  product: MembershipListResponse.Product;

  /**
   * The promotional code currently applied to this membership's billing. Null if no
   * promo code is active.
   */
  promo_code: MembershipListResponse.PromoCode | null;

  /**
   * The end of the current billing period for this recurring membership. As a Unix
   * timestamp. Null if the membership is not recurring.
   */
  renewal_period_end: string | null;

  /**
   * The start of the current billing period for this recurring membership. As a Unix
   * timestamp. Null if the membership is not recurring.
   */
  renewal_period_start: string | null;

  /**
   * The current lifecycle status of the membership (e.g., active, trialing,
   * past_due, canceled, expired, completed).
   */
  status: Shared.MembershipStatus;

  /**
   * The datetime the membership was last updated.
   */
  updated_at: string;

  /**
   * The user who owns this membership. Null if the user account has been deleted.
   */
  user: MembershipListResponse.User | null;
}

export namespace MembershipListResponse {
  /**
   * The company this membership belongs to.
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
   * The member record linking the user to the company for this membership. Null if
   * the member record has not been created yet.
   */
  export interface Member {
    /**
     * The unique identifier for the member.
     */
    id: string;
  }

  /**
   * The plan the customer purchased to create this membership.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product this membership grants access to.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The promotional code currently applied to this membership's billing. Null if no
   * promo code is active.
   */
  export interface PromoCode {
    /**
     * The unique identifier for the promo code.
     */
    id: string;
  }

  /**
   * The user who owns this membership. Null if the user account has been deleted.
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

export interface MembershipUpdateParams {
  /**
   * A JSON object of key-value pairs to store on the membership. Replaces any
   * existing metadata.
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface MembershipListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter to only memberships matching these cancellation reasons.
   */
  cancel_options?: Array<CancelOptions> | null;

  /**
   * The unique identifier of the company to list memberships for. Required when
   * using an API key.
   */
  company_id?: string | null;

  /**
   * Only return memberships created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return memberships created before this timestamp.
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
   * Which columns can be used to sort.
   */
  order?: 'id' | 'created_at' | 'status' | 'canceled_at' | 'date_joined' | 'total_spend' | null;

  /**
   * Filter to only memberships belonging to these plan identifiers.
   */
  plan_ids?: Array<string> | null;

  /**
   * Filter to only memberships belonging to these product identifiers.
   */
  product_ids?: Array<string> | null;

  /**
   * Filter to only memberships that used these promo code identifiers.
   */
  promo_code_ids?: Array<string> | null;

  /**
   * Filter to only memberships matching these statuses.
   */
  statuses?: Array<Shared.MembershipStatus> | null;

  /**
   * Filter to only memberships belonging to these user identifiers.
   */
  user_ids?: Array<string> | null;
}

export interface MembershipCancelParams {
  /**
   * The mode of cancellation for a membership
   */
  cancellation_mode?: 'at_period_end' | 'immediate' | null;
}

export interface MembershipPauseParams {
  /**
   * Whether to void any outstanding past-due payments on this membership, preventing
   * future collection attempts.
   */
  void_payments?: boolean | null;
}

export declare namespace Memberships {
  export {
    type CancelOptions as CancelOptions,
    type MembershipListResponse as MembershipListResponse,
    type MembershipListResponsesCursorPage as MembershipListResponsesCursorPage,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
    type MembershipCancelParams as MembershipCancelParams,
    type MembershipPauseParams as MembershipPauseParams,
  };
}
