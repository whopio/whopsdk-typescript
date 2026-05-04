// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Bounties
 */
export class Bounties extends APIResource {
  /**
   * Create a new workforce bounty by funding a dedicated bounty pool.
   *
   * Required permissions:
   *
   * - `bounty:create`
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.create({
   *   base_unit_amount: 6.9,
   *   currency: 'usd',
   *   description: 'description',
   *   title: 'title',
   * });
   * ```
   */
  create(body: BountyCreateParams, options?: RequestOptions): APIPromise<BountyCreateResponse> {
    return this._client.post('/bounties', { body, ...options });
  }

  /**
   * Retrieves a workforce bounty for the current authenticated user.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.retrieve(
   *   'bnty_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BountyRetrieveResponse> {
    return this._client.get(path`/bounties/${id}`, options);
  }

  /**
   * Returns a paginated list of workforce bounties. When experienceId is provided,
   * returns bounties scoped to that experience. When omitted, returns bounties with
   * no experience.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bountyListResponse of client.bounties.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BountyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BountyListResponsesCursorPage, BountyListResponse> {
    return this._client.getAPIList('/bounties', CursorPage<BountyListResponse>, { query, ...options });
  }
}

export type BountyListResponsesCursorPage = CursorPage<BountyListResponse>;

/**
 * A privately accessible bounty.
 */
export interface BountyCreateResponse {
  /**
   * The unique identifier for the bounty.
   */
  id: string;

  /**
   * The underlying bounty implementation type.
   */
  bounty_type: 'classic' | 'user_funded' | 'workforce';

  /**
   * The datetime the bounty was created.
   */
  created_at: string;

  /**
   * The currency used for the bounty funds.
   */
  currency: Shared.Currency;

  /**
   * The description of the bounty.
   */
  description: string;

  /**
   * The current lifecycle status of the bounty.
   */
  status: 'published' | 'archived';

  /**
   * The title of the bounty.
   */
  title: string;

  /**
   * The total amount currently funded in the bounty pool for payout.
   */
  total_available: number;

  /**
   * The total amount paid out for this bounty.
   */
  total_paid: number;

  /**
   * The datetime the bounty was last updated.
   */
  updated_at: string;

  /**
   * The number of watcher votes required before the submission can resolve.
   */
  vote_threshold: number;
}

/**
 * A privately accessible bounty.
 */
export interface BountyRetrieveResponse {
  /**
   * The unique identifier for the bounty.
   */
  id: string;

  /**
   * The underlying bounty implementation type.
   */
  bounty_type: 'classic' | 'user_funded' | 'workforce';

  /**
   * The datetime the bounty was created.
   */
  created_at: string;

  /**
   * The currency used for the bounty funds.
   */
  currency: Shared.Currency;

  /**
   * The description of the bounty.
   */
  description: string;

  /**
   * The current lifecycle status of the bounty.
   */
  status: 'published' | 'archived';

  /**
   * The title of the bounty.
   */
  title: string;

  /**
   * The total amount currently funded in the bounty pool for payout.
   */
  total_available: number;

  /**
   * The total amount paid out for this bounty.
   */
  total_paid: number;

  /**
   * The datetime the bounty was last updated.
   */
  updated_at: string;

  /**
   * The number of watcher votes required before the submission can resolve.
   */
  vote_threshold: number;
}

/**
 * A privately accessible bounty.
 */
export interface BountyListResponse {
  /**
   * The unique identifier for the bounty.
   */
  id: string;

  /**
   * The underlying bounty implementation type.
   */
  bounty_type: 'classic' | 'user_funded' | 'workforce';

  /**
   * The datetime the bounty was created.
   */
  created_at: string;

  /**
   * The currency used for the bounty funds.
   */
  currency: Shared.Currency;

  /**
   * The description of the bounty.
   */
  description: string;

  /**
   * The current lifecycle status of the bounty.
   */
  status: 'published' | 'archived';

  /**
   * The title of the bounty.
   */
  title: string;

  /**
   * The total amount currently funded in the bounty pool for payout.
   */
  total_available: number;

  /**
   * The total amount paid out for this bounty.
   */
  total_paid: number;

  /**
   * The datetime the bounty was last updated.
   */
  updated_at: string;

  /**
   * The number of watcher votes required before the submission can resolve.
   */
  vote_threshold: number;
}

export interface BountyCreateParams {
  /**
   * The amount paid to each approved submission. The total bounty pool funded is
   * this amount times accepted_submissions_limit.
   */
  base_unit_amount: number;

  /**
   * The currency for the bounty pool funding amount.
   */
  currency: Shared.Currency;

  /**
   * The description of the bounty.
   */
  description: string;

  /**
   * The title of the bounty.
   */
  title: string;

  /**
   * The number of submissions that can be approved before the bounty closes.
   * Defaults to 1.
   */
  accepted_submissions_limit?: number | null;

  /**
   * The ISO3166 country codes where this bounty should be visible. Empty means
   * globally visible.
   */
  allowed_country_codes?: Array<string> | null;

  /**
   * An optional experience to scope the bounty to.
   */
  experience_id?: string | null;

  /**
   * The user (user*\*) or company (biz*\*) tag whose balance funds this bounty pool.
   * Defaults to the requester's personal balance when omitted. The requester must be
   * the user themself or an owner/admin of the company.
   */
  origin_account_id?: string | null;
}

export interface BountyListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * The experience to list bounties for. When omitted, returns bounties with no
   * experience.
   */
  experience_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The available bounty statuses to choose from.
   */
  status?: 'published' | 'archived' | null;
}

export declare namespace Bounties {
  export {
    type BountyCreateResponse as BountyCreateResponse,
    type BountyRetrieveResponse as BountyRetrieveResponse,
    type BountyListResponse as BountyListResponse,
    type BountyListResponsesCursorPage as BountyListResponsesCursorPage,
    type BountyCreateParams as BountyCreateParams,
    type BountyListParams as BountyListParams,
  };
}
