// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EarningsAPI from './earnings';
import { EarningListParams, EarningListResponse, EarningListResponsesCursorPage, Earnings } from './earnings';
import { APIPromise } from '../../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The Partners API covers your Whop partner activity: the users you referred onto Whop, the businesses you referred and the earnings generated from their processing volume, and the partner leaderboard.
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
}

export type BusinessListResponsesCursorPage = CursorPage<BusinessListResponse>;

export interface BusinessRetrieveResponse {
  /**
   * Partner business ID.
   */
  id: string;

  /**
   * Referred account.
   */
  account: BusinessRetrieveResponse.Account | null;

  /**
   * When the partner business was created.
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

  object: 'partner_business';

  /**
   * The owner of the referred business.
   */
  owner: BusinessRetrieveResponse.Owner | null;

  /**
   * The referrer's commission rate for each income source, expressed as a fraction
   * (0.3 = 30%).
   */
  payout_percentages: BusinessRetrieveResponse.PayoutPercentages;

  /**
   * When the referral expires.
   */
  referral_expires_at: string | null;

  /**
   * When the referral became active.
   */
  referral_started_at: string | null;

  /**
   * The second-tier partner who earns on this business (referred the first-tier
   * partner). Null if there is no active second-tier partner.
   */
  second_tier_partner: BusinessRetrieveResponse.SecondTierPartner | null;

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
        | 'launch_draft_campaign'
        | 'increase_ad_budget'
        | 'refresh_ad_creatives'
        | 'fix_ad_billing'
        | 'exclude_customers_from_ads'
        | 'retarget_abandoned_checkouts'
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
       * Estimated impact from 0-100, or `null` when not ranked
       */
      impact_score: number | null;

      /**
       * Why this action was recommended, or `null`
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
        | 'connect_fulfillment_tracker'
        | 'setup_apple_pay_domains';

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

  /**
   * The referrer's commission rate for each income source, expressed as a fraction
   * (0.3 = 30%).
   */
  export interface PayoutPercentages {
    /**
     * Share of the referred business's Whop Ads spend.
     */
    ad_spend: number | null;

    /**
     * Share of Whop's profit from card interchange.
     */
    card_interchange: number | null;

    /**
     * Share of Whop's profit from product sales.
     */
    sales: number;

    /**
     * Share of Whop's profit from platform balance transfers.
     */
    transfer: number | null;
  }

  /**
   * The second-tier partner who earns on this business (referred the first-tier
   * partner). Null if there is no active second-tier partner.
   */
  export interface SecondTierPartner {
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
    profile_picture: SecondTierPartner.ProfilePicture;

    /**
     * The user's unique username.
     */
    username: string;
  }

  export namespace SecondTierPartner {
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
   * Partner business ID.
   */
  id: string;

  /**
   * Referred account.
   */
  account: BusinessListResponse.Account | null;

  /**
   * When the partner business was created.
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

  object: 'partner_business';

  /**
   * The owner of the referred business.
   */
  owner: BusinessListResponse.Owner | null;

  /**
   * The referrer's commission rate for each income source, expressed as a fraction
   * (0.3 = 30%).
   */
  payout_percentages: BusinessListResponse.PayoutPercentages;

  /**
   * When the referral expires.
   */
  referral_expires_at: string | null;

  /**
   * When the referral became active.
   */
  referral_started_at: string | null;

  /**
   * The second-tier partner who earns on this business (referred the first-tier
   * partner). Null if there is no active second-tier partner.
   */
  second_tier_partner: BusinessListResponse.SecondTierPartner | null;

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

  /**
   * The referrer's commission rate for each income source, expressed as a fraction
   * (0.3 = 30%).
   */
  export interface PayoutPercentages {
    /**
     * Share of the referred business's Whop Ads spend.
     */
    ad_spend: number | null;

    /**
     * Share of Whop's profit from card interchange.
     */
    card_interchange: number | null;

    /**
     * Share of Whop's profit from product sales.
     */
    sales: number;

    /**
     * Share of Whop's profit from platform balance transfers.
     */
    transfer: number | null;
  }

  /**
   * The second-tier partner who earns on this business (referred the first-tier
   * partner). Null if there is no active second-tier partner.
   */
  export interface SecondTierPartner {
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
    profile_picture: SecondTierPartner.ProfilePicture;

    /**
     * The user's unique username.
     */
    username: string;
  }

  export namespace SecondTierPartner {
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

export interface BusinessListParams extends CursorPageParams {
  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only return partner businesses created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return partner businesses created before this timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of partner businesses to return from the start of the window.
   */
  first?: number;

  /**
   * When true, only businesses with pending or completed earnings paid to the
   * caller.
   */
  has_earnings?: boolean;

  /**
   * Number of partner businesses to return from the end of the window.
   */
  last?: number;

  /**
   * The field to sort partner businesses by.
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

Businesses.Earnings = Earnings;

export declare namespace Businesses {
  export {
    type BusinessRetrieveResponse as BusinessRetrieveResponse,
    type BusinessListResponse as BusinessListResponse,
    type BusinessListResponsesCursorPage as BusinessListResponsesCursorPage,
    type BusinessListParams as BusinessListParams,
  };

  export {
    Earnings as Earnings,
    type EarningListResponse as EarningListResponse,
    type EarningListResponsesCursorPage as EarningListResponsesCursorPage,
    type EarningListParams as EarningListParams,
  };
}
