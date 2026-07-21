// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * An Account represents a person or business on Whop that can have its own profile, wallet, and account-scoped settings. Use accounts for customers, creators, merchants, sellers, or connected businesses your integration supports.
 *
 * Use the Accounts API to create accounts, list accounts visible to your credentials, retrieve or update an account, and retrieve the account associated with the current API key.
 */
export class Preferences extends APIResource {
  /**
   * Retrieves the account's preferences: a singleton settings document keyed by
   * preference name.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<PreferenceRetrieveResponse> {
    return this._client.get(path`/accounts/${accountID}/preferences`, options);
  }

  /**
   * Updates the account's preferences. Each top-level key present in the body is
   * replaced as a whole; omitted keys are left untouched. `ads_payment_methods`
   * always requires a `primary` entry. `backup` is optional and any pairing is
   * allowed — two cards, `card`+`platform_balance`, or a single method — so a
   * card-only advertiser can fund ads without a platform balance. The `primary` and
   * `backup` must be different sources. A `platform_balance` entry may omit `id` to
   * use the account's default Whop balance. Configuring a `card` requires a user
   * token; account API keys can set up platform-balance billing only.
   */
  update(
    accountID: string,
    body: PreferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceUpdateResponse> {
    return this._client.patch(path`/accounts/${accountID}/preferences`, { body, ...options });
  }
}

export interface PreferenceRetrieveResponse {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails. `null` until ads billing has been
   * configured.
   */
  ads_payment_methods: PreferenceRetrieveResponse.AdsPaymentMethods | null;

  /**
   * Lowercase ISO currency code, such as `usd` or `eur`, used to display ad spend
   * and stats. Defaults to `usd`.
   */
  ads_reporting_currency: string;

  /**
   * IANA timezone (e.g. `America/New_York`) used to interpret campaign start/end
   * times and to bucket reports. Defaults to `America/New_York` until explicitly
   * overridden.
   */
  ads_scheduling_timezone: string;

  /**
   * Whether incoming funds are automatically moved to the account's cards balance.
   * `false` when the account has no cards balance.
   */
  cards_auto_top_up: boolean;
}

export namespace PreferenceRetrieveResponse {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails. `null` until ads billing has been
   * configured.
   */
  export interface AdsPaymentMethods {
    backup: AdsPaymentMethods.Backup | null;

    primary: AdsPaymentMethods.Primary | null;
  }

  export namespace AdsPaymentMethods {
    export interface Backup {
      /**
       * The funding source ID: a Whop balance (`ldgr_`) for `platform_balance`, or a
       * payment method (`payt_`) for `card`.
       */
      id: string;

      /**
       * The funding source kind: a Whop balance or a saved card.
       */
      type: 'platform_balance' | 'card';

      /**
       * Card brand, present for `card` entries.
       */
      card_brand?: string | null;

      /**
       * Expiration month, present for `card` entries.
       */
      exp_month?: number | null;

      /**
       * Expiration year, present for `card` entries.
       */
      exp_year?: number | null;

      /**
       * Balance owner icon URL, present for `platform_balance` entries.
       */
      icon_url?: string | null;

      /**
       * Last four digits, present for `card` entries.
       */
      last4?: string | null;

      /**
       * Balance name, present for company `platform_balance` entries (null for a
       * personal balance).
       */
      title?: string | null;
    }

    export interface Primary {
      /**
       * The funding source ID: a Whop balance (`ldgr_`) for `platform_balance`, or a
       * payment method (`payt_`) for `card`.
       */
      id: string;

      /**
       * The funding source kind: a Whop balance or a saved card.
       */
      type: 'platform_balance' | 'card';

      /**
       * Card brand, present for `card` entries.
       */
      card_brand?: string | null;

      /**
       * Expiration month, present for `card` entries.
       */
      exp_month?: number | null;

      /**
       * Expiration year, present for `card` entries.
       */
      exp_year?: number | null;

      /**
       * Balance owner icon URL, present for `platform_balance` entries.
       */
      icon_url?: string | null;

      /**
       * Last four digits, present for `card` entries.
       */
      last4?: string | null;

      /**
       * Balance name, present for company `platform_balance` entries (null for a
       * personal balance).
       */
      title?: string | null;
    }
  }
}

export interface PreferenceUpdateResponse {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails. `null` until ads billing has been
   * configured.
   */
  ads_payment_methods: PreferenceUpdateResponse.AdsPaymentMethods | null;

  /**
   * Lowercase ISO currency code, such as `usd` or `eur`, used to display ad spend
   * and stats. Defaults to `usd`.
   */
  ads_reporting_currency: string;

  /**
   * IANA timezone (e.g. `America/New_York`) used to interpret campaign start/end
   * times and to bucket reports. Defaults to `America/New_York` until explicitly
   * overridden.
   */
  ads_scheduling_timezone: string;

  /**
   * Whether incoming funds are automatically moved to the account's cards balance.
   * `false` when the account has no cards balance.
   */
  cards_auto_top_up: boolean;
}

export namespace PreferenceUpdateResponse {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails. `null` until ads billing has been
   * configured.
   */
  export interface AdsPaymentMethods {
    backup: AdsPaymentMethods.Backup | null;

    primary: AdsPaymentMethods.Primary | null;
  }

  export namespace AdsPaymentMethods {
    export interface Backup {
      /**
       * The funding source ID: a Whop balance (`ldgr_`) for `platform_balance`, or a
       * payment method (`payt_`) for `card`.
       */
      id: string;

      /**
       * The funding source kind: a Whop balance or a saved card.
       */
      type: 'platform_balance' | 'card';

      /**
       * Card brand, present for `card` entries.
       */
      card_brand?: string | null;

      /**
       * Expiration month, present for `card` entries.
       */
      exp_month?: number | null;

      /**
       * Expiration year, present for `card` entries.
       */
      exp_year?: number | null;

      /**
       * Balance owner icon URL, present for `platform_balance` entries.
       */
      icon_url?: string | null;

      /**
       * Last four digits, present for `card` entries.
       */
      last4?: string | null;

      /**
       * Balance name, present for company `platform_balance` entries (null for a
       * personal balance).
       */
      title?: string | null;
    }

    export interface Primary {
      /**
       * The funding source ID: a Whop balance (`ldgr_`) for `platform_balance`, or a
       * payment method (`payt_`) for `card`.
       */
      id: string;

      /**
       * The funding source kind: a Whop balance or a saved card.
       */
      type: 'platform_balance' | 'card';

      /**
       * Card brand, present for `card` entries.
       */
      card_brand?: string | null;

      /**
       * Expiration month, present for `card` entries.
       */
      exp_month?: number | null;

      /**
       * Expiration year, present for `card` entries.
       */
      exp_year?: number | null;

      /**
       * Balance owner icon URL, present for `platform_balance` entries.
       */
      icon_url?: string | null;

      /**
       * Last four digits, present for `card` entries.
       */
      last4?: string | null;

      /**
       * Balance name, present for company `platform_balance` entries (null for a
       * personal balance).
       */
      title?: string | null;
    }
  }
}

export interface PreferenceUpdateParams {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails.
   */
  ads_payment_methods?: PreferenceUpdateParams.AdsPaymentMethods;

  /**
   * Lowercase ISO currency code, such as `usd` or `eur`, used to display ad spend
   * and stats. Defaults to `usd`.
   */
  ads_reporting_currency?: string;

  /**
   * IANA timezone (e.g. `America/New_York`) used to interpret campaign start/end
   * times and to bucket reports. Cannot be cleared once set — pass a new value to
   * change it.
   */
  ads_scheduling_timezone?: string;

  /**
   * Whether incoming funds are automatically moved to the account's cards balance.
   * Requires a cards balance on the account.
   */
  cards_auto_top_up?: boolean;
}

export namespace PreferenceUpdateParams {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails.
   */
  export interface AdsPaymentMethods {
    primary: AdsPaymentMethods.Primary;

    /**
     * Optional second method charged if the primary fails. Any pairing is allowed (two
     * cards, card+balance, balance+card); omit it to run on a single method. Must
     * differ from the primary.
     */
    backup?: AdsPaymentMethods.Backup;
  }

  export namespace AdsPaymentMethods {
    export interface Primary {
      /**
       * The funding source kind.
       */
      type: 'platform_balance' | 'card';

      /**
       * The funding source ID: a Whop balance (`ldgr_`) for `platform_balance`, or a
       * payment method (`payt_`) for `card`. Optional for `platform_balance` — defaults
       * to the account's default Whop balance. Required for `card`.
       */
      id?: string;
    }

    /**
     * Optional second method charged if the primary fails. Any pairing is allowed (two
     * cards, card+balance, balance+card); omit it to run on a single method. Must
     * differ from the primary.
     */
    export interface Backup {
      /**
       * The funding source kind.
       */
      type: 'platform_balance' | 'card';

      /**
       * The funding source ID: a Whop balance (`ldgr_`) for `platform_balance`, or a
       * payment method (`payt_`) for `card`. Optional for `platform_balance` — defaults
       * to the account's default Whop balance. Required for `card`.
       */
      id?: string;
    }
  }
}

export declare namespace Preferences {
  export {
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
