// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BusinessesAPI from './businesses/businesses';
import {
  BusinessListParams,
  BusinessListResponse,
  BusinessListResponsesCursorPage,
  BusinessRetrieveResponse,
  Businesses,
} from './businesses/businesses';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The Partners API covers your Whop partner activity: the users you referred onto Whop, the businesses you referred and the earnings generated from their processing volume, and the partner leaderboard.
 *
 * Use it to enroll as a Whop partner, list the users you referred, list your referred businesses and review their earnings, and see the partner leaderboard.
 */
export class Partners extends APIResource {
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);

  /**
   * Lists the users the caller referred onto Whop (newest first), each with the
   * second-tier earnings the caller has made from that user's businesses.
   */
  referredUsers(
    query: PartnerReferredUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartnerReferredUsersResponse> {
    return this._client.get('/partners/referred_users', { query, ...options });
  }

  /**
   * Enrolls the calling user in the Whop partner program, making their partner
   * businesses eligible for earnings. Idempotent — enrolling again keeps the
   * original enrollment time.
   */
  create(
    params: PartnerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartnerCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post('/partners', {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Ranks referrers by partner business earnings — all-time by default, or over the
   * current day, month, year, or trailing 30 days. Authentication is optional:
   * authenticated callers also get their own standing, anonymous callers get the
   * rankings alone.
   */
  leaderboard(
    query: PartnerLeaderboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartnerLeaderboardResponse> {
    return this._client.get('/partners/leaderboard', { query, ...options });
  }
}

export interface PartnerCreateResponse {
  /**
   * The caller's referral link — businesses that sign up through it are attributed
   * to the caller.
   */
  referral_link: string;

  /**
   * When the caller became a Whop partner.
   */
  whop_partner_enabled_at: string;
}

export interface PartnerLeaderboardResponse {
  /**
   * The top referrers by total earnings, best first.
   */
  leaders: Array<PartnerLeaderboardResponse.Leader>;

  /**
   * The caller's own standing; null when the caller has no referral earnings.
   */
  me: PartnerLeaderboardResponse.Me | null;
}

export namespace PartnerLeaderboardResponse {
  export interface Leader {
    /**
     * When the referrer's earliest partner business became active.
     */
    first_referral_started_at: string;

    /**
     * 1-based leaderboard position.
     */
    rank: number;

    /**
     * The referrer's pending + completed earnings across all referred businesses, in
     * USD.
     */
    total_earnings_usd: string;

    /**
     * Credited GMV across all the referrer's referred businesses, in USD.
     */
    total_volume_usd: string;

    /**
     * The ranked referrer. Identity fields (id, name, username, profile_picture) are
     * returned only on the caller's own entry; other referrers expose coarse location
     * only.
     */
    user: Leader.User | null;
  }

  export namespace Leader {
    /**
     * The ranked referrer. Identity fields (id, name, username, profile_picture) are
     * returned only on the caller's own entry; other referrers expose coarse location
     * only.
     */
    export interface User {
      /**
       * The city where the referrer is located, derived from their IP address. Null if
       * location sharing is disabled.
       */
      city: string | null;

      /**
       * The country where the referrer is located, derived from their IP address. Null
       * if location sharing is disabled.
       */
      country: string | null;

      /**
       * User ID, prefixed `user_`. Present only on the caller's own entry.
       */
      id?: string;

      /**
       * The user's display name. Present only on the caller's own entry.
       */
      name?: string | null;

      /**
       * The user's profile picture. Present only on the caller's own entry.
       */
      profile_picture?: User.ProfilePicture;

      /**
       * The user's unique username. Present only on the caller's own entry.
       */
      username?: string;
    }

    export namespace User {
      /**
       * The user's profile picture. Present only on the caller's own entry.
       */
      export interface ProfilePicture {
        /**
         * The user's profile picture URL.
         */
        url: string;
      }
    }
  }

  /**
   * The caller's own standing; null when the caller has no referral earnings.
   */
  export interface Me {
    /**
     * When the referrer's earliest partner business became active.
     */
    first_referral_started_at: string;

    /**
     * 1-based leaderboard position.
     */
    rank: number;

    /**
     * The referrer's pending + completed earnings across all referred businesses, in
     * USD.
     */
    total_earnings_usd: string;

    /**
     * Credited GMV across all the referrer's referred businesses, in USD.
     */
    total_volume_usd: string;

    /**
     * The ranked referrer. Identity fields (id, name, username, profile_picture) are
     * returned only on the caller's own entry; other referrers expose coarse location
     * only.
     */
    user: Me.User | null;
  }

  export namespace Me {
    /**
     * The ranked referrer. Identity fields (id, name, username, profile_picture) are
     * returned only on the caller's own entry; other referrers expose coarse location
     * only.
     */
    export interface User {
      /**
       * The city where the referrer is located, derived from their IP address. Null if
       * location sharing is disabled.
       */
      city: string | null;

      /**
       * The country where the referrer is located, derived from their IP address. Null
       * if location sharing is disabled.
       */
      country: string | null;

      /**
       * User ID, prefixed `user_`. Present only on the caller's own entry.
       */
      id?: string;

      /**
       * The user's display name. Present only on the caller's own entry.
       */
      name?: string | null;

      /**
       * The user's profile picture. Present only on the caller's own entry.
       */
      profile_picture?: User.ProfilePicture;

      /**
       * The user's unique username. Present only on the caller's own entry.
       */
      username?: string;
    }

    export namespace User {
      /**
       * The user's profile picture. Present only on the caller's own entry.
       */
      export interface ProfilePicture {
        /**
         * The user's profile picture URL.
         */
        url: string;
      }
    }
  }
}

export interface PartnerReferredUsersResponse {
  data: Array<PartnerReferredUsersResponse.Data>;

  page_info: PartnerReferredUsersResponse.PageInfo;
}

export namespace PartnerReferredUsersResponse {
  export interface Data {
    total_earnings_usd: string;

    total_volume_usd: string;

    user: Data.User;
  }

  export namespace Data {
    export interface User {
      id: string;

      username: string;

      city?: string | null;

      country?: string | null;

      name?: string | null;

      profile_picture?: User.ProfilePicture;
    }

    export namespace User {
      export interface ProfilePicture {
        url?: string | null;
      }
    }
  }

  export interface PageInfo {
    end_cursor: string | null;

    has_next_page: boolean;

    has_previous_page: boolean;

    start_cursor: string | null;
  }
}

export interface PartnerReferredUsersParams {
  /**
   * Cursor to fetch the page after (from page_info.end_cursor).
   */
  after?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Number of referred users to return from the start of the window.
   */
  first?: number;

  /**
   * When true, only referred users who brought at least one business onto Whop.
   */
  has_businesses?: boolean;

  /**
   * When true, only referred users with at least one business that has generated
   * earnings.
   */
  has_earning_businesses?: boolean;

  /**
   * Number of referred users to return from the end of the window.
   */
  last?: number;
}

export interface PartnerCreateParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface PartnerLeaderboardParams {
  /**
   * Time window for the rankings. `day`, `month`, and `year` count earnings since
   * the start of the current calendar day, month, or year; `last_30_days` counts
   * earnings over the trailing 30 days; `all_time` ranks lifetime earnings.
   */
  period?: 'day' | 'month' | 'year' | 'last_30_days' | 'all_time';
}

Partners.Businesses = Businesses;

export declare namespace Partners {
  export {
    type PartnerCreateResponse as PartnerCreateResponse,
    type PartnerLeaderboardResponse as PartnerLeaderboardResponse,
    type PartnerReferredUsersResponse as PartnerReferredUsersResponse,
    type PartnerReferredUsersParams as PartnerReferredUsersParams,
    type PartnerCreateParams as PartnerCreateParams,
    type PartnerLeaderboardParams as PartnerLeaderboardParams,
  };

  export {
    Businesses as Businesses,
    type BusinessRetrieveResponse as BusinessRetrieveResponse,
    type BusinessListResponse as BusinessListResponse,
    type BusinessListResponsesCursorPage as BusinessListResponsesCursorPage,
    type BusinessListParams as BusinessListParams,
  };
}
