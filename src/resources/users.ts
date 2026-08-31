// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A User represents a person on Whop. Users have a public profile and can buy products, join accounts, and access experiences.
 *
 * Use the Users API to search for users, retrieve or update profiles, and check whether a user has access to an account, product, or experience.
 */
export class Users extends APIResource {
  /**
   * Retrieves a user by `user_` tag or username, or the authenticated user with the
   * reserved id `me`. Profiles include linked social accounts — reading your own
   * profile returns every linked account, other profiles only what is public on Whop
   * (the primary Discord and the X account). The self-only fields are populated only
   * when the id is `me`: `email` (email-read scope), `staff` (Whop staff only,
   * staff-read scope), `balance` and `earnings_usd` (balance-read scope), and the
   * opt-in `balance_history`. They are always `null` when addressing a user by tag
   * or username.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<User> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.get(path`/users/${id}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates a user, addressed by `user_` tag, username, or the reserved id `me` for
   * the authenticated user. A user token updates their own global profile; an API
   * key updates the user's account-specific profile override (account_id required).
   *
   * @example
   * ```ts
   * const user = await client.users.update('id');
   * ```
   */
  update(id: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    const { account_id, 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/users/${id}`, {
      query: { account_id },
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Search for users by name or username, ranked by social proximity to the
   * authenticated user. Returns the user's most recently followed users when no
   * query is given.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const user of client.users.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersCursorPage, User> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/users', CursorPage<User>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Checks whether a user has access to an account, product, or experience the
   * caller can reach.
   *
   * @example
   * ```ts
   * const response = await client.users.checkAccess(
   *   'resource_id',
   *   { id: 'id' },
   * );
   * ```
   */
  checkAccess(
    resourceID: string,
    params: UserCheckAccessParams,
    options?: RequestOptions,
  ): APIPromise<UserCheckAccessResponse> {
    const { id, 'Api-Version-Date': apiVersionDate } = params;
    return this._client.get(path`/users/${id}/access/${resourceID}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
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
   * account balances for accounts they own. Computed only on the self view
   * (retrieved with the reserved id `me`) for callers with balance-read scope;
   * `null` otherwise.
   */
  balance: User.Balance | null;

  /**
   * The user's cumulative wallet balance over time (USD `{ t, v }` points plus
   * last/min/max), for the balance chart. Opt in with `include_balance_history=true`
   * when retrieving yourself with the reserved id `me`; populated only for callers
   * with balance-read scope and `null` otherwise. A user with no wallet activity
   * returns an empty series.
   */
  balance_history: User.BalanceHistory | null;

  /**
   * The user's profile banner wrapper. `null` when the user has no banner.
   */
  banner: User.Banner | null;

  /**
   * The user's biography
   */
  bio: string | null;

  /**
   * When the user was created, as an ISO 8601 timestamp
   */
  created_at: string;

  /**
   * The user's gross USD income over time, including a Partner commission breakdown.
   * Populated only on single-user self reads for callers with balance-read scope;
   * `null` otherwise.
   */
  earnings_usd: User.EarningsUsd | null;

  /**
   * The user's email address. Populated only on the self view (retrieved with the
   * reserved id `me`) for callers with email-read scope; `null` otherwise, or while
   * the account has no confirmed email yet.
   */
  email: string | null;

  /**
   * The user's display name
   */
  name: string | null;

  /**
   * Avatar wrapper; its `url` is always present, using a generated placeholder when
   * the user set no picture.
   */
  profile_picture: User.ProfilePicture;

  social_accounts: Array<User.SocialAccount>;

  /**
   * Whop staff access flags. Populated only on the self view (retrieved with the
   * reserved id `me`) for callers with staff-read scope; `null` there for every user
   * who is not Whop staff, and always `null` elsewhere.
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
   * The user's balance: personal cash + crypto + in-flight treasury deposits, plus
   * account balances for accounts they own. Computed only on the self view
   * (retrieved with the reserved id `me`) for callers with balance-read scope;
   * `null` otherwise.
   */
  export interface Balance {
    businesses: Array<Balance.Business>;

    /**
     * Combined USD balance across every account the user owns.
     */
    businesses_total_usd: string;

    cash: Array<Balance.Cash>;

    /**
     * Fiat cash in USD, including pending, in-transit, and reserve.
     */
    cash_usd: string;

    crypto: Array<Balance.Crypto>;

    /**
     * Crypto holdings in USD.
     */
    crypto_usd: string;

    /**
     * Fiat pending and in-transit balances, plus in-flight treasury deposits, in USD.
     */
    pending_usd: string;

    /**
     * The user's personal balance in USD: cash (available + pending + in-transit +
     * reserve) + crypto + in-flight treasury deposits. Excludes account balances (see
     * businesses_total_usd).
     */
    total_usd: string;

    /**
     * Balance-to-wallet USDT0 payouts still in flight, in USD.
     */
    treasury_pending_usd: string;
  }

  export namespace Balance {
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
       * Balance moving to the user's own wallet or card, converted to USD.
       */
      in_transit_balance_usd: number;

      /**
       * Pending balance converted to USD.
       */
      pending_balance_usd: number;

      /**
       * USD price per native currency unit, or `null` when no exchange rate is
       * available.
       */
      price_usd: number | null;

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
       * Balance split into available, pending, in-transit, and reserve amounts, as
       * native-unit decimal strings. Transfers between the user's own wallet and card
       * are reported in `in_transit` until they arrive.
       */
      breakdown: Crypto.Breakdown;

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

    export namespace Crypto {
      /**
       * Balance split into available, pending, in-transit, and reserve amounts, as
       * native-unit decimal strings. Transfers between the user's own wallet and card
       * are reported in `in_transit` until they arrive.
       */
      export interface Breakdown {
        /**
         * Amount you can spend, send, or withdraw now, in native units, as a decimal
         * string.
         */
        available: string;

        /**
         * Amount moving between the account's own destinations, such as a treasury sweep
         * to its crypto wallet or a card top-up. In native units, as a decimal string.
         */
        in_transit: string;

        /**
         * Amount from recent payments still settling, in native units, as a decimal
         * string.
         */
        pending: string;

        pending_settlements: Array<Breakdown.PendingSettlement>;

        /**
         * Amount held back, in native units, as a decimal string. Retrieve the account's
         * reserves for why it is held and when it unlocks.
         */
        reserve: string;
      }

      export namespace Breakdown {
        /**
         * When the pending amount is expected to settle, one entry per day, earliest
         * first. Money with no scheduled settlement day, such as a transfer in flight, is
         * left out — so these can sum to less than `pending`, never more.
         */
        export interface PendingSettlement {
          /**
           * Amount expected that day, in native units, as a decimal string.
           */
          amount: string;

          /**
           * The day this money is expected to finish settling, as an ISO 8601 date.
           */
          date: string;
        }
      }
    }
  }

  /**
   * The user's cumulative wallet balance over time (USD `{ t, v }` points plus
   * last/min/max), for the balance chart. Opt in with `include_balance_history=true`
   * when retrieving yourself with the reserved id `me`; populated only for callers
   * with balance-read scope and `null` otherwise. A user with no wallet activity
   * returns an empty series.
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
   * The user's profile banner wrapper. `null` when the user has no banner.
   */
  export interface Banner {
    /**
     * Profile banner image URL.
     */
    url: string;
  }

  /**
   * The user's gross USD income over time, including a Partner commission breakdown.
   * Populated only on single-user self reads for callers with balance-read scope;
   * `null` otherwise.
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
     * Partner commissions posted to the user's wallet. Pending Partner payouts are
     * excluded until they post; later reversals do not reduce gross income.
     */
    partners: EarningsUsd.Partners;

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
     * Partner commissions posted to the user's wallet. Pending Partner payouts are
     * excluded until they post; later reversals do not reduce gross income.
     */
    export interface Partners {
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
   * Avatar wrapper; its `url` is always present, using a generated placeholder when
   * the user set no picture.
   */
  export interface ProfilePicture {
    /**
     * Avatar image URL. Always present — a generated placeholder when the user set no
     * picture.
     */
    url: string;
  }

  /**
   * Social accounts linked to the user (Discord, X/Twitter, Telegram), oldest first.
   * Reading your own profile returns every linked account; other profiles only
   * include what is public on Whop (the primary Discord and the X account). Empty
   * when none are linked.
   */
  export interface SocialAccount {
    /**
     * Unique identifier for the social account.
     */
    id: string;

    /**
     * Why this social account currently can't be used for advertising — a failed share
     * or a Meta-side restriction. Null when the account is healthy.
     */
    error: string | null;

    /**
     * The platform-specific ID for this social account.
     */
    external_id: string | null;

    /**
     * The display name of the social account on the platform.
     */
    name: string | null;

    /**
     * The social account this one belongs to on the platform, such as the Facebook
     * page that owns an Instagram account. Null when the social account stands on its
     * own.
     */
    parent_social_account: SocialAccount.ParentSocialAccount | null;

    /**
     * The platform the social account exists on.
     */
    platform: 'x' | 'instagram' | 'youtube' | 'tiktok' | 'facebook' | 'discord' | 'telegram';

    /**
     * The URL where the profile picture of the social account can be accessed.
     */
    profile_picture_url: string | null;

    scopes: Array<string>;

    /**
     * The URL where the social account can be accessed on the platform. Null while a
     * Whop-owned page is still being provisioned.
     */
    url: string | null;

    /**
     * The username of the social account on the platform. Null while a Whop-owned page
     * is still being provisioned.
     */
    username: string | null;

    /**
     * Whether the social account is verified on the platform.
     */
    verified: boolean;
  }

  export namespace SocialAccount {
    /**
     * The social account this one belongs to on the platform, such as the Facebook
     * page that owns an Instagram account. Null when the social account stands on its
     * own.
     */
    export interface ParentSocialAccount {
      /**
       * Social account ID, prefixed `sacc_`.
       */
      id: string;

      /**
       * The platform-specific ID for the parent social account.
       */
      external_id: string | null;

      /**
       * The display name of the parent social account on the platform.
       */
      name: string | null;

      /**
       * The platform the parent social account exists on.
       */
      platform: 'x' | 'instagram' | 'youtube' | 'tiktok' | 'facebook' | 'discord' | 'telegram';

      /**
       * The URL where the profile picture of the parent social account can be accessed.
       */
      profile_picture_url: string | null;

      /**
       * The username of the parent social account on the platform.
       */
      username: string | null;

      /**
       * Whether the parent social account is verified on the platform.
       */
      verified: boolean;
    }
  }

  /**
   * Whop staff access flags. Populated only on the self view (retrieved with the
   * reserved id `me`) for callers with staff-read scope; `null` there for every user
   * who is not Whop staff, and always `null` elsewhere.
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

export interface UserCheckAccessResponse {
  access_level: 'no_access' | 'admin' | 'customer';

  has_access: boolean;
}

export interface UserRetrieveParams {
  /**
   * Query param: When set, returns the user's account-specific profile overrides for
   * this account.
   */
  account_id?: string;

  /**
   * Query param: Balance-history window start, ISO 8601 date or datetime. Defaults
   * to 30 days ago. Only used with `include_balance_history`.
   */
  from?: string;

  /**
   * Query param: Also compute your balance history (opt-in; runs a heavier query).
   * Only applies when the id is `me`; ignored for callers without balance-read
   * scope.
   */
  include_balance_history?: boolean;

  /**
   * Query param: Balance-history point granularity. Defaults to `day`. Only used
   * with `include_balance_history`.
   */
  interval?: 'hour' | 'day' | 'week' | 'month';

  /**
   * Query param: IANA time zone the balance-history points are bucketed in. Defaults
   * to `UTC`. Only used with `include_balance_history`.
   */
  time_zone?: string;

  /**
   * Query param: Balance-history window end, ISO 8601 date or datetime. Defaults to
   * now. Only used with `include_balance_history`.
   */
  to?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
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
  banner?: UserUpdateParams.Banner | null;

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

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export namespace UserUpdateParams {
  export interface Banner {
    id?: string;

    direct_upload_id?: string;
  }

  export interface ProfilePicture {
    id?: string;

    direct_upload_id?: string;
  }
}

export interface UserListParams extends CursorPageParams {
  /**
   * Query param: A cursor; returns users before this position.
   */
  before?: string;

  /**
   * Query param: The number of users to return (max 50).
   */
  first?: number;

  /**
   * Query param: The number of users to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: A search term to filter users by name or username.
   */
  query?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface UserCheckAccessParams {
  /**
   * Path param: The user\_ tag or username to check access for.
   */
  id: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserCheckAccessResponse as UserCheckAccessResponse,
    type UsersCursorPage as UsersCursorPage,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserCheckAccessParams as UserCheckAccessParams,
  };
}
