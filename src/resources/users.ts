// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SocialAccountsAPI from './social-accounts';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A User represents a person on Whop. Users have a public profile and can buy products, join accounts, and access experiences.
 *
 * Use the Users API to search for users, retrieve or update profiles, and check whether a user has access to an account, product, or experience.
 */
export class Users extends APIResource {
  /**
   * Retrieves the authenticated user — the self view of the user object. Same shape
   * as `GET /users/{id}`, with the self-only fields populated: `email` (email-read
   * scope), `staff` (Whop staff only, staff-read scope), `balance` and
   * `earnings_usd` (balance-read scope), the opt-in `balance_history`, and every
   * linked social account.
   */
  me(query: UserMeParams | null | undefined = {}, options?: RequestOptions): APIPromise<User> {
    return this._client.get('/users/me', { query, ...options });
  }

  /**
   * Retrieves a user's public profile by user\_ tag or username, including linked
   * social accounts — reading your own profile returns every linked account, other
   * profiles only what is public on Whop (the primary Discord and the X account).
   * Self-only fields (`email`, `staff`, `balance`) are always `null` here; use
   * `GET /users/me` to read them.
   */
  retrieve(
    id: string,
    query: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<User> {
    return this._client.get(path`/users/${id}`, { query, ...options });
  }

  /**
   * Checks whether a user has access to an account, product, or experience the
   * caller can reach.
   */
  checkAccess(
    resourceID: string,
    params: UserCheckAccessParams,
    options?: RequestOptions,
  ): APIPromise<UserCheckAccessResponse> {
    const { id } = params;
    return this._client.get(path`/users/${id}/access/${resourceID}`, options);
  }

  /**
   * Updates a user. A user token updates their own global profile; an API key
   * updates the user's account-specific profile override (account_id required).
   */
  update(id: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/users/${id}`, { query: { account_id }, body, ...options });
  }

  /**
   * Updates the authenticated user's global profile, or their profile override for
   * an account when account_id is given. Not available to API keys.
   */
  updateMe(params: UserUpdateMeParams, options?: RequestOptions): APIPromise<User> {
    const { account_id, ...body } = params;
    return this._client.patch('/users/me', { query: { account_id }, body, ...options });
  }

  /**
   * Search for users by name or username, ranked by social proximity to the
   * authenticated user. Returns the user's most recently followed users when no
   * query is given.
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersCursorPage, User> {
    return this._client.getAPIList('/users', CursorPage<User>, { query, ...options });
  }

  /**
   * Lists the recommended actions computed for the user: personal suggestions (e.g.
   * start a business or become an affiliate) pooled with the highest-impact actions
   * across the accounts the user owns. Business actions are tagged with their
   * `account_id`/`account_name`; personal actions leave those `null`. Self-only:
   * `id` must be `me` or the authenticated user's own tag/username.
   */
  recommendActions(id: string, options?: RequestOptions): APIPromise<UserRecommendActionsResponse> {
    return this._client.get(path`/users/${id}/recommend_actions`, options);
  }
}

export type UsersCursorPage = CursorPage<User>;

export interface User {
  /**
   * User ID, prefixed `user_`.
   */
  id: string;

  /**
   * The user's balance: personal cash + crypto + in-flight treasury deposits, plus
   * account balances for accounts they own. Computed only on `GET /users/me`
   * self-view for callers with balance-read scope; `null` otherwise.
   */
  balance: UserBalance | null;

  /**
   * The user's cumulative wallet balance over time (USD `{ t, v }` points plus
   * last/min/max), for the balance chart. Opt in with `include_balance_history=true`
   * on `GET /users/me`; populated only for callers with balance-read scope and
   * `null` otherwise. A user with no wallet activity returns an empty series.
   */
  balance_history: User.BalanceHistory | null;

  /**
   * The user's biography
   */
  bio: string | null;

  /**
   * When the user was created, as an ISO 8601 timestamp
   */
  created_at: string;

  /**
   * The user's gross USD income over time. Populated only on single-user self reads
   * for callers with balance-read scope; `null` otherwise.
   */
  earnings_usd: User.EarningsUsd | null;

  /**
   * The user's email address. Populated only on `GET /users/me` self-view for
   * callers with email-read scope; `null` otherwise, or while the account has no
   * confirmed email yet.
   */
  email: string | null;

  /**
   * The user's display name
   */
  name: string | null;

  /**
   * The user's profile picture, an object with a url
   */
  profile_picture: unknown | null;

  social_accounts: Array<SocialAccountsAPI.SocialAccount>;

  /**
   * Whop staff access flags. Populated only on `GET /users/me` self-view for callers
   * with staff-read scope; `null` there for every user who is not Whop staff, and
   * always `null` elsewhere.
   */
  staff: User.Staff | null;

  /**
   * The user's unique username
   */
  username: string;

  /**
   * Identity verification status for the user's `individual` (KYC) and `business`
   * (KYB) profiles. Each is `null` until created, otherwise a `status` of
   * `not_started`, `pending`, `approved`, or `rejected`.
   */
  verification: unknown;

  /**
   * When the user became an enrolled Whop Partner, as an ISO 8601 timestamp. `null`
   * if never enrolled.
   */
  whop_partner_enabled_at: string | null;
}

export namespace User {
  /**
   * The user's cumulative wallet balance over time (USD `{ t, v }` points plus
   * last/min/max), for the balance chart. Opt in with `include_balance_history=true`
   * on `GET /users/me`; populated only for callers with balance-read scope and
   * `null` otherwise. A user with no wallet activity returns an empty series.
   */
  export interface BalanceHistory {
    data: Array<BalanceHistory.Data>;

    /**
     * Value of the most recent point, in USD.
     */
    last: number;

    /**
     * Maximum value across the window, in USD.
     */
    max: number;

    /**
     * Minimum value across the window, in USD.
     */
    min: number;
  }

  export namespace BalanceHistory {
    /**
     * Cumulative balance points over the requested window, oldest first.
     */
    export interface Data {
      /**
       * Point timestamp, in Unix seconds.
       */
      t: number;

      /**
       * Cumulative wallet balance at this point, in USD.
       */
      v: number;
    }
  }

  /**
   * The user's gross USD income over time. Populated only on single-user self reads
   * for callers with balance-read scope; `null` otherwise.
   */
  export interface EarningsUsd {
    /**
     * The first time the user earned gross income, as an ISO 8601 timestamp.
     */
    first_earned_at: string | null;

    /**
     * Gross income from accounts the user owns or is owner-authorized on.
     */
    owned_accounts: EarningsUsd.OwnedAccounts;

    /**
     * Gross income from the user's personal wallet.
     */
    personal: EarningsUsd.Personal;

    /**
     * Gross income from the user's personal wallet plus accounts they own or are
     * owner-authorized on.
     */
    total: EarningsUsd.Total;
  }

  export namespace EarningsUsd {
    /**
     * Gross income from accounts the user owns or is owner-authorized on.
     */
    export interface OwnedAccounts {
      /**
       * Gross income in USD over the last 24 hours.
       */
      last_24_hours: string;

      /**
       * Gross income in USD over the last 30 days.
       */
      last_30_days: string;

      /**
       * Gross income in USD over the last 7 days.
       */
      last_7_days: string;

      /**
       * All-time gross income in USD.
       */
      lifetime: string;
    }

    /**
     * Gross income from the user's personal wallet.
     */
    export interface Personal {
      /**
       * Gross income in USD over the last 24 hours.
       */
      last_24_hours: string;

      /**
       * Gross income in USD over the last 30 days.
       */
      last_30_days: string;

      /**
       * Gross income in USD over the last 7 days.
       */
      last_7_days: string;

      /**
       * All-time gross income in USD.
       */
      lifetime: string;
    }

    /**
     * Gross income from the user's personal wallet plus accounts they own or are
     * owner-authorized on.
     */
    export interface Total {
      /**
       * Gross income in USD over the last 24 hours.
       */
      last_24_hours: string;

      /**
       * Gross income in USD over the last 30 days.
       */
      last_30_days: string;

      /**
       * Gross income in USD over the last 7 days.
       */
      last_7_days: string;

      /**
       * All-time gross income in USD.
       */
      lifetime: string;
    }
  }

  /**
   * Whop staff access flags. Populated only on `GET /users/me` self-view for callers
   * with staff-read scope; `null` there for every user who is not Whop staff, and
   * always `null` elsewhere.
   */
  export interface Staff {
    /**
     * Whether the user holds the admin staff role with a valid second factor.
     */
    admin: boolean;

    /**
     * Whether the user can open Whop-internal investigation tooling right now: a
     * qualifying staff role plus their investigation toggle switched on.
     */
    investigation_access: boolean;

    /**
     * Whether the user holds the manager staff role with a valid second factor.
     */
    manager: boolean;

    /**
     * Whether the user holds the support staff role with a valid second factor.
     */
    support: boolean;
  }
}

export interface UserBalance {
  businesses: Array<UserBalance.Business>;

  /**
   * Combined USD balance across every account the user owns.
   */
  businesses_total_usd: string;

  cash: Array<UserBalance.Cash>;

  /**
   * Fiat cash in USD, including pending and reserve.
   */
  cash_usd: string;

  crypto: Array<UserBalance.Crypto>;

  /**
   * Crypto holdings in USD.
   */
  crypto_usd: string;

  /**
   * Pending funds in USD: fiat pending + in-flight treasury deposits.
   */
  pending_usd: string;

  /**
   * The user's personal balance in USD: cash (available + pending + reserve) +
   * crypto + in-flight treasury deposits. Excludes account balances (see
   * businesses_total_usd).
   */
  total_usd: string;

  /**
   * Balance-to-wallet USDT0 withdrawals still in flight, in USD.
   */
  treasury_pending_usd: string;
}

export namespace UserBalance {
  /**
   * Account balances for accounts the user owns, highest balance first. Excludes
   * accounts with no balance.
   */
  export interface Business {
    /**
     * The account ID, which looks like biz\_******\*******.
     */
    id: string;

    /**
     * The account's total balance in USD.
     */
    balance_usd: string;

    /**
     * The account's logo URL.
     */
    logo_url: string | null;

    /**
     * The account's display name.
     */
    name: string | null;
  }

  /**
   * Per-currency fiat cash balances.
   */
  export interface Cash {
    /**
     * Available balance in the native currency.
     */
    balance: number;

    /**
     * Available balance converted to USD.
     */
    balance_usd: number;

    /**
     * Lowercase ISO currency code, such as `usd` or `eur`.
     */
    currency: string;

    /**
     * Pending balance converted to USD.
     */
    pending_balance_usd: number;

    /**
     * Reserved balance converted to USD.
     */
    reserve_balance_usd: number;

    /**
     * Withdrawable amount in the native currency.
     */
    total_withdrawable_balance: number;
  }

  /**
   * Per-token crypto holdings in the ledger's own wallet.
   */
  export interface Crypto {
    /**
     * Amount held in native token units, as a decimal string.
     */
    balance: string;

    /**
     * Token icon URL.
     */
    icon_url: string | null;

    /**
     * The token's display name.
     */
    name: string | null;

    /**
     * USD price per token, or `null` when unknown.
     */
    price_usd: number | null;

    /**
     * Token display symbol, such as `USDT`, `XAUT`, or `cbBTC`.
     */
    symbol: string;

    /**
     * Holding USD value.
     */
    value_usd: number;
  }
}

export interface UserCheckAccessResponse {
  access_level: 'no_access' | 'admin' | 'customer';

  has_access: boolean;
}

export interface UserRecommendActionsResponse {
  data: Array<UserRecommendActionsResponse.Data>;
}

export namespace UserRecommendActionsResponse {
  export interface Data {
    /**
     * The account (`biz_`) a business recommendation is for, or `null` for personal
     * recommendations
     */
    account_id: string | null;

    /**
     * The account's display name, or `null`
     */
    account_name: string | null;

    /**
     * The recommendation; new values may be added, so handle unknown actions
     * gracefully
     */
    action:
      | 'create_business'
      | 'become_affiliate'
      | 'become_whop_partner'
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
}

export interface UserMeParams {
  /**
   * When set, returns your account-specific profile overrides for this account.
   */
  account_id?: string;

  /**
   * Balance-history window start, ISO 8601 date or datetime. Defaults to 30 days
   * ago. Only used with `include_balance_history`.
   */
  from?: string;

  /**
   * Also compute your balance history (opt-in; runs a heavier query). Ignored for
   * callers without balance-read scope.
   */
  include_balance_history?: boolean;

  /**
   * Balance-history point granularity. Defaults to `day`. Only used with
   * `include_balance_history`.
   */
  interval?: 'hour' | 'day' | 'week' | 'month';

  /**
   * IANA time zone the balance-history points are bucketed in. Defaults to `UTC`.
   * Only used with `include_balance_history`.
   */
  time_zone?: string;

  /**
   * Balance-history window end, ISO 8601 date or datetime. Defaults to now. Only
   * used with `include_balance_history`.
   */
  to?: string;
}

export interface UserRetrieveParams {
  /**
   * When set, returns the user's account-specific profile overrides for this
   * account.
   */
  account_id?: string;
}

export interface UserCheckAccessParams {
  /**
   * The user\_ tag or username to check access for.
   */
  id: string;
}

export interface UserUpdateParams {
  /**
   * Query param: The account whose profile override to update. Required for API key
   * callers.
   */
  account_id?: string;

  /**
   * Body param
   */
  bio?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  profile_picture?: UserUpdateParams.ProfilePicture;

  /**
   * Body param
   */
  username?: string;
}

export namespace UserUpdateParams {
  export interface ProfilePicture {
    id?: string;

    direct_upload_id?: string;
  }
}

export interface UserUpdateMeParams {
  /**
   * Query param: When set, updates the authenticated user's profile override for
   * this account instead of their global profile.
   */
  account_id?: string;

  /**
   * Body param
   */
  bio?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  profile_picture?: UserUpdateMeParams.ProfilePicture;

  /**
   * Body param
   */
  username?: string;
}

export namespace UserUpdateMeParams {
  export interface ProfilePicture {
    id?: string;

    direct_upload_id?: string;
  }
}

export interface UserListParams extends CursorPageParams {
  /**
   * A cursor; returns users before this position.
   */
  before?: string;

  /**
   * The number of users to return (max 50).
   */
  first?: number;

  /**
   * The number of users to return from the end of the range.
   */
  last?: number;

  /**
   * A search term to filter users by name or username.
   */
  query?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserBalance as UserBalance,
    type UserCheckAccessResponse as UserCheckAccessResponse,
    type UserRecommendActionsResponse as UserRecommendActionsResponse,
    type UsersCursorPage as UsersCursorPage,
    type UserMeParams as UserMeParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserCheckAccessParams as UserCheckAccessParams,
    type UserUpdateParams as UserUpdateParams,
    type UserUpdateMeParams as UserUpdateMeParams,
    type UserListParams as UserListParams,
  };
}
