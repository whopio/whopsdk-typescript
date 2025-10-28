// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Retrieves a membership by ID or license key
   *
   * Required permissions:
   *
   * - `member:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.get(path`/memberships/${id}`, options);
  }

  /**
   * Update a membership
   *
   * Required permissions:
   *
   * - `member:manage`
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
   * Lists memberships
   *
   * Required permissions:
   *
   * - `member:basic:read`
   */
  list(
    query: MembershipListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembershipListResponsesCursorPage, MembershipListResponse> {
    return this._client.getAPIList('/memberships', CursorPage<MembershipListResponse>, { query, ...options });
  }

  /**
   * Cancels a membership either immediately or at the end of the current billing
   * period
   *
   * Required permissions:
   *
   * - `member:manage`
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
   * Pauses a membership's payments
   *
   * Required permissions:
   *
   * - `member:manage`
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
   * Resumes a membership's payments
   *
   * Required permissions:
   *
   * - `member:manage`
   * - `member:basic:read`
   */
  resume(id: string, options?: RequestOptions): APIPromise<Shared.Membership> {
    return this._client.post(path`/memberships/${id}/resume`, options);
  }
}

export type MembershipListResponsesCursorPage = CursorPage<MembershipListResponse>;

/**
 * A membership represents a purchase between a User and a Company for a specific
 * Product.
 */
export interface MembershipListResponse {
  /**
   * The ID of the membership
   */
  id: string;

  /**
   * Whether this Membership is set to cancel at the end of the current billing
   * cycle. Only applies for memberships that have a renewal plan.
   */
  cancel_at_period_end: boolean;

  /**
   * The epoch timestamp of when the customer initiated a cancellation.
   */
  canceled_at: string | null;

  /**
   * The reason that the member canceled the membership (filled out by the member).
   */
  cancellation_reason: string | null;

  /**
   * The Company this Membership belongs to.
   */
  company: MembershipListResponse.Company;

  /**
   * The timestamp, in seconds, that this Membership was created at.
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Shared.Currency | null;

  /**
   * The license key for this Membership. This is only present if the membership
   * grants access to an instance of the Whop Software app.
   */
  license_key: string | null;

  /**
   * The URL for the customer to manage their membership.
   */
  manage_url: string | null;

  /**
   * The Member that this Membership belongs to.
   */
  member: MembershipListResponse.Member | null;

  /**
   * A JSON object used to store software licensing information. Ex. HWID
   */
  metadata: { [key: string]: unknown };

  /**
   * Whether the membership's payments are currently paused.
   */
  payment_collection_paused: boolean;

  /**
   * The Plan this Membership is for.
   */
  plan: MembershipListResponse.Plan;

  /**
   * The Product this Membership grants access to.
   */
  product: MembershipListResponse.Product;

  /**
   * The Promo Code that is currently applied to this Membership.
   */
  promo_code: MembershipListResponse.PromoCode | null;

  /**
   * The timestamp in seconds at which the current billing cycle for this
   * subscription ends. Only applies for memberships that have a renewal plan.
   */
  renewal_period_end: string | null;

  /**
   * The timestamp in seconds at which the current billing cycle for this
   * subscription start. Only applies for memberships that have a renewal plan.
   */
  renewal_period_start: string | null;

  /**
   * The status of the membership.
   */
  status: Shared.MembershipStatus;

  /**
   * A timestamp of when the membership was last updated
   */
  updated_at: string;

  /**
   * The user this membership belongs to
   */
  user: MembershipListResponse.User | null;
}

export namespace MembershipListResponse {
  /**
   * The Company this Membership belongs to.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * The Member that this Membership belongs to.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;
  }

  /**
   * The Plan this Membership is for.
   */
  export interface Plan {
    /**
     * The internal ID of the plan.
     */
    id: string;
  }

  /**
   * The Product this Membership grants access to.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The Promo Code that is currently applied to this Membership.
   */
  export interface PromoCode {
    /**
     * The ID of the promo.
     */
    id: string;
  }

  /**
   * The user this membership belongs to
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

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

export interface MembershipUpdateParams {
  /**
   * The metadata to update the membership with.
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface MembershipListParams extends CursorPageParams {
  /**
   * The access pass IDs to filter the memberships by
   */
  access_pass_ids?: Array<string> | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The cancel options to filter the memberships by
   */
  cancel_options?: Array<
    | 'too_expensive'
    | 'switching'
    | 'missing_features'
    | 'technical_issues'
    | 'bad_experience'
    | 'other'
    | 'testing'
  > | null;

  /**
   * The ID of the company to list memberships for
   */
  company_id?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
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
   * The plan IDs to filter the memberships by
   */
  plan_ids?: Array<string> | null;

  /**
   * The promo code IDs to filter the memberships by
   */
  promo_code_ids?: Array<string> | null;

  /**
   * The membership status to filter the memberships by
   */
  statuses?: Array<Shared.MembershipStatus> | null;

  /**
   * Only return memberships from these whop user ids
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
   * Whether to void past_due payments associated with the membership to prevent
   * future payment attempts.
   */
  void_payments?: boolean | null;
}

export declare namespace Memberships {
  export {
    type MembershipListResponse as MembershipListResponse,
    type MembershipListResponsesCursorPage as MembershipListResponsesCursorPage,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
    type MembershipCancelParams as MembershipCancelParams,
    type MembershipPauseParams as MembershipPauseParams,
  };
}
