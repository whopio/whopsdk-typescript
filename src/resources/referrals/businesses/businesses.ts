// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EarningsAPI from './earnings';
import { EarningListParams, EarningListResponse, EarningListResponsesCursorPage, Earnings } from './earnings';
import { APIPromise } from '../../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The Referrals API covers your Whop partner activity: the users you referred onto Whop, the businesses you referred and the earnings generated from their processing volume, and the partner leaderboard.
 *
 * Use it to enroll as a Whop partner, list the users you referred, list your referred businesses and review their earnings, and see the partner leaderboard.
 */
export class Businesses extends APIResource {
  earnings: EarningsAPI.Earnings = new EarningsAPI.Earnings(this._client);

  /**
   * Lists the businesses the authenticated user referred onto Whop, most recent
   * first.
   */
  list(
    query: BusinessListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BusinessListResponsesCursorPage, BusinessListResponse> {
    return this._client.getAPIList('/partners/businesses', CursorPage<BusinessListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a single referred business and its referral terms.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BusinessRetrieveResponse> {
    return this._client.get(path`/partners/businesses/${id}`, options);
  }

  /**
   * Ranks referrers by business referral earnings — all-time by default, or over the
   * current day, month, year, or trailing 30 days — and includes the caller's own
   * standing.
   */
  leaderboard(
    query: BusinessLeaderboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessLeaderboardResponse> {
    return this._client.get('/partners/leaderboard', { query, ...options });
  }
}

export type BusinessListResponsesCursorPage = CursorPage<BusinessListResponse>;

export interface BusinessRetrieveResponse {
  /**
   * Business referral ID.
   */
  id: string;

  /**
   * Referred account.
   */
  account: BusinessRetrieveResponse.Account | null;

  /**
   * When the business referral was created.
   */
  created_at: string;

  earnings_usd: BusinessRetrieveResponse.EarningsUsd;

  /**
   * The partner who referred the business owner onto Whop (first tier). Null if
   * there is no active first-tier partner.
   */
  first_tier_partner: BusinessRetrieveResponse.FirstTierPartner | null;

  /**
   * Which tier the caller earns on for this business: `first` (they referred the
   * owner) or `second` (they referred the first-tier partner).
   */
  my_partner_tier: 'first' | 'second';

  object: 'business_referral';

  /**
   * The owner of the referred business.
   */
  owner: BusinessRetrieveResponse.Owner | null;

  /**
   * Referrer's share of Whop gross profit, as a fraction (0.3 = 30%). Second-tier
   * referrals earn a flat 0.1.
   */
  payout_percentage: number;

  /**
   * When the referral expires.
   */
  referral_expires_at: string | null;

  /**
   * When the referral became active.
   */
  referral_started_at: string | null;

  /**
   * Current referral status.
   */
  status: 'active' | 'removed';

  volume_usd: BusinessRetrieveResponse.VolumeUsd;
}

export namespace BusinessRetrieveResponse {
  /**
   * Referred account.
   */
  export interface Account {
    /**
     * Referred account ID.
     */
    id: string;

    capabilities: Account.Capabilities | null;

    /**
     * Referred account logo URL.
     */
    logo_url: string | null;

    /**
     * Optional actions that unlock capabilities or grow the referred account.
     */
    recommended_actions: Array<Account.RecommendedAction> | null;

    /**
     * Actions the referred account owner must take to unblock capabilities.
     */
    required_actions: Array<Account.RequiredAction> | null;

    /**
     * Referred account route.
     */
    route: string;

    /**
     * Referred account display name.
     */
    title: string;
  }

  export namespace Account {
    export interface Capabilities {
      /**
       * Bank payins: debits, transfers, and local bank rails
       */
      accept_bank_payments: 'active' | 'inactive' | 'pending';

      /**
       * Buy-now-pay-later payins; requires approval
       */
      accept_bnpl_payments: 'active' | 'inactive' | 'pending';

      /**
       * Card payins, including Apple Pay and Google Pay
       */
      accept_card_payments: 'active' | 'inactive' | 'pending';

      /**
       * Deposits by bank wire or ACH to the account's virtual bank account
       */
      bank_deposit: 'active' | 'inactive' | 'pending';

      /**
       * Balance top-ups by charging a stored payment method
       */
      card_deposit: 'active' | 'inactive' | 'pending';

      /**
       * Issuing Whop cards; requires card application approval
       */
      card_issuing: 'active' | 'inactive' | 'pending';

      /**
       * On-chain deposits to the account's crypto wallet
       */
      crypto_deposit: 'active' | 'inactive' | 'pending';

      /**
       * On-chain payouts to a crypto wallet
       */
      crypto_payout: 'active' | 'inactive' | 'pending';

      /**
       * Instant payouts to an eligible payout destination
       */
      instant_payout: 'active' | 'inactive' | 'pending';

      /**
       * Standard payouts to an external payout destination
       */
      standard_payout: 'active' | 'inactive' | 'pending';

      /**
       * Transfers to other accounts
       */
      transfer: 'active' | 'inactive' | 'pending';
    }

    export interface RecommendedAction {
      /**
       * The recommendation; new values may be added, so handle unknown actions
       * gracefully
       */
      action:
        | 'theme_business'
        | 'create_product'
        | 'create_plan'
        | 'verify_identity'
        | 'connect_affiliate_program'
        | 'create_promotion'
        | 'setup_tracking_pixel'
        | 'migrate_from_stripe'
        | 'accept_first_payment'
        | 'launch_first_ad'
        | 'invite_team_member'
        | 'enable_tax_collection'
        | 'create_card'
        | 'join_whop_university'
        | 'apply_for_financing';

      blocked_capabilities: Array<string>;

      /**
       * The URL the call-to-action links to
       */
      cta: string;

      /**
       * Button label
       */
      cta_label: string;

      /**
       * Supporting copy, or empty
       */
      description: string;

      /**
       * Illustration icon URL, or `null`
       */
      icon_url: string | null;

      /**
       * Estimated revenue impact from 0-100, comparable across accounts, or `null` when
       * not ranked
       */
      impact_score: number | null;

      /**
       * Why this action was recommended for this account, or `null`
       */
      reasoning: string | null;

      /**
       * Always optional — never blocking
       */
      status: 'optional';

      /**
       * Headline for the recommendation
       */
      title: string;
    }

    export interface RequiredAction {
      /**
       * What the holder must do; new values may be added, so handle unknown actions
       * gracefully
       */
      action:
        | 'deposit_funds'
        | 'submit_information_request'
        | 'verify_identity'
        | 'connect_fulfillment_tracker';

      blocked_capabilities: Array<string>;

      /**
       * The URL the call-to-action links to, or null when there is no button
       */
      cta: string | null;

      /**
       * Button label, or empty when there is no button
       */
      cta_label: string;

      /**
       * Supporting copy, or empty
       */
      description: string;

      /**
       * The URL of the action's illustration icon, or null if it has none
       */
      icon_url: string | null;

      /**
       * required (act now) or pending (under review)
       */
      status: 'required' | 'pending';

      /**
       * Headline for the action
       */
      title: string;
    }
  }

  export interface EarningsUsd {
    /**
     * Commission already paid out, in USD.
     */
    completed: string;

    /**
     * Commission scheduled but not yet paid, in USD.
     */
    pending: string;

    /**
     * Pending + completed commission, in USD.
     */
    total: string;
  }

  /**
   * The partner who referred the business owner onto Whop (first tier). Null if
   * there is no active first-tier partner.
   */
  export interface FirstTierPartner {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * The user's display name.
     */
    name: string | null;

    /**
     * The user's profile picture.
     */
    profile_picture: FirstTierPartner.ProfilePicture;

    /**
     * The user's unique username.
     */
    username: string;
  }

  export namespace FirstTierPartner {
    /**
     * The user's profile picture.
     */
    export interface ProfilePicture {
      /**
       * The user's profile picture URL.
       */
      url: string;
    }
  }

  /**
   * The owner of the referred business.
   */
  export interface Owner {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * The user's display name.
     */
    name: string | null;

    /**
     * The user's profile picture.
     */
    profile_picture: Owner.ProfilePicture;

    /**
     * The user's unique username.
     */
    username: string;
  }

  export namespace Owner {
    /**
     * The user's profile picture.
     */
    export interface ProfilePicture {
      /**
       * The user's profile picture URL.
       */
      url: string;
    }
  }

  export interface VolumeUsd {
    /**
     * Credited GMV (awaiting_settlement + settled); excludes canceled and reversed, in
     * USD.
     */
    attributed: string;

    /**
     * GMV awaiting settlement (commission not yet computed), in USD.
     */
    awaiting_settlement: string;

    /**
     * GMV of pending + completed payments, in USD.
     */
    settled: string;
  }
}

export interface BusinessListResponse {
  /**
   * Business referral ID.
   */
  id: string;

  /**
   * Referred account.
   */
  account: BusinessListResponse.Account | null;

  /**
   * When the business referral was created.
   */
  created_at: string;

  earnings_usd: BusinessListResponse.EarningsUsd;

  /**
   * The partner who referred the business owner onto Whop (first tier). Null if
   * there is no active first-tier partner.
   */
  first_tier_partner: BusinessListResponse.FirstTierPartner | null;

  /**
   * Which tier the caller earns on for this business: `first` (they referred the
   * owner) or `second` (they referred the first-tier partner).
   */
  my_partner_tier: 'first' | 'second';

  object: 'business_referral';

  /**
   * The owner of the referred business.
   */
  owner: BusinessListResponse.Owner | null;

  /**
   * Referrer's share of Whop gross profit, as a fraction (0.3 = 30%). Second-tier
   * referrals earn a flat 0.1.
   */
  payout_percentage: number;

  /**
   * When the referral expires.
   */
  referral_expires_at: string | null;

  /**
   * When the referral became active.
   */
  referral_started_at: string | null;

  /**
   * Current referral status.
   */
  status: 'active' | 'removed';

  volume_usd: BusinessListResponse.VolumeUsd;
}

export namespace BusinessListResponse {
  /**
   * Referred account.
   */
  export interface Account {
    /**
     * Referred account ID.
     */
    id: string;

    /**
     * Referred account logo URL.
     */
    logo_url: string | null;

    /**
     * Referred account route.
     */
    route: string;

    /**
     * Referred account display name.
     */
    title: string;
  }

  export interface EarningsUsd {
    /**
     * Commission already paid out, in USD.
     */
    completed: string;

    /**
     * Commission scheduled but not yet paid, in USD.
     */
    pending: string;

    /**
     * Pending + completed commission, in USD.
     */
    total: string;
  }

  /**
   * The partner who referred the business owner onto Whop (first tier). Null if
   * there is no active first-tier partner.
   */
  export interface FirstTierPartner {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * The user's display name.
     */
    name: string | null;

    /**
     * The user's profile picture.
     */
    profile_picture: FirstTierPartner.ProfilePicture;

    /**
     * The user's unique username.
     */
    username: string;
  }

  export namespace FirstTierPartner {
    /**
     * The user's profile picture.
     */
    export interface ProfilePicture {
      /**
       * The user's profile picture URL.
       */
      url: string;
    }
  }

  /**
   * The owner of the referred business.
   */
  export interface Owner {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * The user's display name.
     */
    name: string | null;

    /**
     * The user's profile picture.
     */
    profile_picture: Owner.ProfilePicture;

    /**
     * The user's unique username.
     */
    username: string;
  }

  export namespace Owner {
    /**
     * The user's profile picture.
     */
    export interface ProfilePicture {
      /**
       * The user's profile picture URL.
       */
      url: string;
    }
  }

  export interface VolumeUsd {
    /**
     * Credited GMV (awaiting_settlement + settled); excludes canceled and reversed, in
     * USD.
     */
    attributed: string;

    /**
     * GMV awaiting settlement (commission not yet computed), in USD.
     */
    awaiting_settlement: string;

    /**
     * GMV of pending + completed payments, in USD.
     */
    settled: string;
  }
}

export interface BusinessLeaderboardResponse {
  /**
   * The top referrers by total earnings, best first.
   */
  leaders: Array<BusinessLeaderboardResponse.Leader>;

  /**
   * The caller's own standing; null when the caller has no referral earnings.
   */
  me: BusinessLeaderboardResponse.Me | null;
}

export namespace BusinessLeaderboardResponse {
  export interface Leader {
    /**
     * When the referrer's earliest business referral became active.
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
     * When the referrer's earliest business referral became active.
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

export interface BusinessListParams extends CursorPageParams {
  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only return business referrals created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return business referrals created before this timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of business referrals to return from the start of the window.
   */
  first?: number;

  /**
   * When true, only businesses with pending or completed earnings paid to the
   * caller.
   */
  has_earnings?: boolean;

  /**
   * Number of business referrals to return from the end of the window.
   */
  last?: number;

  /**
   * The field to sort business referrals by.
   */
  order?:
    | 'created_at'
    | 'referral_started_at'
    | 'referral_expires_at'
    | 'payout_percentage'
    | 'volume_usd'
    | 'earnings_usd';

  /**
   * Filter to referrals attributed to this user. For first-tier referrals, this is
   * the referred account owner; for second-tier referrals, this is the partner you
   * recruited.
   */
  referred_user_id?: string;

  /**
   * Filter by the referred user's exact username. Ignored when `referred_user_id` is
   * present.
   */
  referred_username?: string;

  /**
   * Filter by referral status.
   */
  status?: 'active' | 'removed';

  /**
   * Filter to only first-tier referrals or only second-tier referrals.
   */
  tier?: 'first' | 'second';
}

export interface BusinessLeaderboardParams {
  /**
   * Time window for the rankings. `day`, `month`, and `year` count earnings since
   * the start of the current calendar day, month, or year; `last_30_days` counts
   * earnings over the trailing 30 days; `all_time` ranks lifetime earnings.
   */
  period?: 'day' | 'month' | 'year' | 'last_30_days' | 'all_time';
}

Businesses.Earnings = Earnings;

export declare namespace Businesses {
  export {
    type BusinessRetrieveResponse as BusinessRetrieveResponse,
    type BusinessListResponse as BusinessListResponse,
    type BusinessLeaderboardResponse as BusinessLeaderboardResponse,
    type BusinessListResponsesCursorPage as BusinessListResponsesCursorPage,
    type BusinessListParams as BusinessListParams,
    type BusinessLeaderboardParams as BusinessLeaderboardParams,
  };

  export {
    Earnings as Earnings,
    type EarningListResponse as EarningListResponse,
    type EarningListResponsesCursorPage as EarningListResponsesCursorPage,
    type EarningListParams as EarningListParams,
  };
}
