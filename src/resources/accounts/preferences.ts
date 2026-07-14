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
   * always requires a `primary` entry. `backup` is optional when the primary is
   * `platform_balance` — omitting it removes any configured card — while a `card`
   * primary requires a `platform_balance` backup. A `platform_balance` entry may
   * omit `id` to use the account's default Whop balance. Changing which funding
   * sources are configured requires a user token, while account API keys may only
   * swap `primary` and `backup`.
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
    }
  }
}

export interface PreferenceUpdateParams {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails.
   */
  ads_payment_methods?: PreferenceUpdateParams.AdsPaymentMethods;
}

export namespace PreferenceUpdateParams {
  /**
   * How the account pays for Whop Ads spend. `primary` is charged first; `backup`
   * covers the charge when the primary fails.
   */
  export interface AdsPaymentMethods {
    primary: AdsPaymentMethods.Primary;

    /**
     * Optional when the primary is `platform_balance`; omitting it removes any
     * configured card. Required (as `platform_balance`) when the primary is `card`.
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
     * Optional when the primary is `platform_balance`; omitting it removes any
     * configured card. Required (as `platform_balance`) when the primary is `card`.
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
