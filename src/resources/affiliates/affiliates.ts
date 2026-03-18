// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OverridesAPI from './overrides';
import {
  AffiliateAppliesToPayments,
  AffiliateAppliesToProducts,
  AffiliateOverrideRoles,
  AffiliatePayoutTypes,
  AffiliateRevenueBases,
  OverrideCreateParams,
  OverrideCreateResponse,
  OverrideDeleteParams,
  OverrideDeleteResponse,
  OverrideListParams,
  OverrideListResponse,
  OverrideListResponsesCursorPage,
  OverrideRetrieveParams,
  OverrideRetrieveResponse,
  OverrideUpdateParams,
  OverrideUpdateResponse,
  Overrides,
} from './overrides';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Affiliates
 */
export class Affiliates extends APIResource {
  overrides: OverridesAPI.Overrides = new OverridesAPI.Overrides(this._client);

  /**
   * Creates or finds an affiliate for a company and user.
   *
   * Required permissions:
   *
   * - `affiliate:create`
   *
   * @example
   * ```ts
   * const affiliate = await client.affiliates.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   user_identifier: 'user_identifier',
   * });
   * ```
   */
  create(body: AffiliateCreateParams, options?: RequestOptions): APIPromise<Affiliate> {
    return this._client.post('/affiliates', { body, ...options });
  }

  /**
   * Retrieves the details of an existing affiliate.
   *
   * Required permissions:
   *
   * - `affiliate:basic:read`
   *
   * @example
   * ```ts
   * const affiliate = await client.affiliates.retrieve(
   *   'aff_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Affiliate> {
    return this._client.get(path`/affiliates/${id}`, options);
  }

  /**
   * Returns a paginated list of affiliates for the actor in context, with optional
   * filtering by status, search, and sorting.
   *
   * Required permissions:
   *
   * - `affiliate:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const affiliateListResponse of client.affiliates.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AffiliateListParams,
    options?: RequestOptions,
  ): PagePromise<AffiliateListResponsesCursorPage, AffiliateListResponse> {
    return this._client.getAPIList('/affiliates', CursorPage<AffiliateListResponse>, { query, ...options });
  }

  /**
   * Archives an existing Affiliate
   *
   * Required permissions:
   *
   * - `affiliate:update`
   *
   * @example
   * ```ts
   * const response = await client.affiliates.archive(
   *   'aff_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  archive(id: string, options?: RequestOptions): APIPromise<AffiliateArchiveResponse> {
    return this._client.post(path`/affiliates/${id}/archive`, options);
  }

  /**
   * Unarchives an existing Affiliate
   *
   * Required permissions:
   *
   * - `affiliate:update`
   *
   * @example
   * ```ts
   * const response = await client.affiliates.unarchive(
   *   'aff_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<AffiliateUnarchiveResponse> {
    return this._client.post(path`/affiliates/${id}/unarchive`, options);
  }
}

export type AffiliateListResponsesCursorPage = CursorPage<AffiliateListResponse>;

/**
 * An affiliate of a company or a global affiliate
 */
export interface Affiliate {
  /**
   * The unique identifier for the affiliate.
   */
  id: string;

  /**
   * The total active members of the affiliate
   */
  active_members_count: number;

  /**
   * The company attached to this affiliate
   */
  company: Affiliate.Company;

  /**
   * The datetime the affiliate was created.
   */
  created_at: string;

  /**
   * How many referrals have remained since they joined as members
   */
  customer_retention_rate: string;

  /**
   * A rolling 90-day retention rate for this affiliate
   */
  customer_retention_rate_ninety_days: string;

  /**
   * The total MRR of the affiliate
   */
  monthly_recurring_revenue_usd: string;

  /**
   * Statuses for resources
   */
  status: Status | null;

  /**
   * The total count of all overrides for this affiliate
   */
  total_overrides_count: number;

  /**
   * The total earnings of the affiliate from the users they referred
   */
  total_referral_earnings_usd: string;

  /**
   * The total referrals of the affiliate
   */
  total_referrals_count: number;

  /**
   * The total revenue of the affiliate from their referrals
   */
  total_revenue_usd: string;

  /**
   * The datetime the affiliate was last updated.
   */
  updated_at: string;

  /**
   * The user attached to this affiliate
   */
  user: Affiliate.User;
}

export namespace Affiliate {
  /**
   * The company attached to this affiliate
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The user attached to this affiliate
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The display name set on the user's Whop profile. Null if the user has not set a
     * name.
     */
    name: string | null;

    /**
     * The unique username chosen by the user for their Whop profile. Null if the user
     * has not set a username.
     */
    username: string | null;
  }
}

/**
 * Statuses for resources
 */
export type Status = 'active' | 'archived' | 'deleted';

/**
 * An affiliate of a company or a global affiliate
 */
export interface AffiliateListResponse {
  /**
   * The unique identifier for the affiliate.
   */
  id: string;

  /**
   * The total active members of the affiliate
   */
  active_members_count: number;

  /**
   * The company attached to this affiliate
   */
  company: AffiliateListResponse.Company;

  /**
   * The datetime the affiliate was created.
   */
  created_at: string;

  /**
   * How many referrals have remained since they joined as members
   */
  customer_retention_rate: string;

  /**
   * A rolling 90-day retention rate for this affiliate
   */
  customer_retention_rate_ninety_days: string;

  /**
   * The total MRR of the affiliate
   */
  monthly_recurring_revenue_usd: string;

  /**
   * Statuses for resources
   */
  status: Status | null;

  /**
   * The total count of all overrides for this affiliate
   */
  total_overrides_count: number;

  /**
   * The total earnings of the affiliate from the users they referred
   */
  total_referral_earnings_usd: string;

  /**
   * The total referrals of the affiliate
   */
  total_referrals_count: number;

  /**
   * The total revenue of the affiliate from their referrals
   */
  total_revenue_usd: string;

  /**
   * The datetime the affiliate was last updated.
   */
  updated_at: string;

  /**
   * The user attached to this affiliate
   */
  user: AffiliateListResponse.User;
}

export namespace AffiliateListResponse {
  /**
   * The company attached to this affiliate
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The user attached to this affiliate
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The display name set on the user's Whop profile. Null if the user has not set a
     * name.
     */
    name: string | null;

    /**
     * The unique username chosen by the user for their Whop profile. Null if the user
     * has not set a username.
     */
    username: string | null;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type AffiliateArchiveResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type AffiliateUnarchiveResponse = boolean;

export interface AffiliateCreateParams {
  /**
   * The ID of the company to create the affiliate for.
   */
  company_id: string;

  /**
   * The user identifier (username, email, user ID, or Discord ID).
   */
  user_identifier: string;
}

export interface AffiliateListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list affiliates for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

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
  order?: 'id' | 'created_at' | 'cached_total_referrals' | 'cached_total_rewards' | null;

  /**
   * Search affiliates by username.
   */
  query?: string | null;

  /**
   * Statuses for resources
   */
  status?: Status | null;
}

Affiliates.Overrides = Overrides;

export declare namespace Affiliates {
  export {
    type Affiliate as Affiliate,
    type Status as Status,
    type AffiliateListResponse as AffiliateListResponse,
    type AffiliateArchiveResponse as AffiliateArchiveResponse,
    type AffiliateUnarchiveResponse as AffiliateUnarchiveResponse,
    type AffiliateListResponsesCursorPage as AffiliateListResponsesCursorPage,
    type AffiliateCreateParams as AffiliateCreateParams,
    type AffiliateListParams as AffiliateListParams,
  };

  export {
    Overrides as Overrides,
    type AffiliateAppliesToPayments as AffiliateAppliesToPayments,
    type AffiliateAppliesToProducts as AffiliateAppliesToProducts,
    type AffiliateOverrideRoles as AffiliateOverrideRoles,
    type AffiliatePayoutTypes as AffiliatePayoutTypes,
    type AffiliateRevenueBases as AffiliateRevenueBases,
    type OverrideCreateResponse as OverrideCreateResponse,
    type OverrideRetrieveResponse as OverrideRetrieveResponse,
    type OverrideUpdateResponse as OverrideUpdateResponse,
    type OverrideListResponse as OverrideListResponse,
    type OverrideDeleteResponse as OverrideDeleteResponse,
    type OverrideListResponsesCursorPage as OverrideListResponsesCursorPage,
    type OverrideCreateParams as OverrideCreateParams,
    type OverrideRetrieveParams as OverrideRetrieveParams,
    type OverrideUpdateParams as OverrideUpdateParams,
    type OverrideListParams as OverrideListParams,
    type OverrideDeleteParams as OverrideDeleteParams,
  };
}
