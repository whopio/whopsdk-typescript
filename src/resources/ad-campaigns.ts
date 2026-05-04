// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Ad campaigns
 */
export class AdCampaigns extends APIResource {
  /**
   * Creates a new ad campaign for a product.
   *
   * Required permissions:
   *
   * - `ad_campaign:create`
   * - `access_pass:basic:read`
   * - `company:balance:read`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   config: {},
   *   platform: 'meta',
   *   title: 'title',
   * });
   * ```
   */
  create(body: AdCampaignCreateParams, options?: RequestOptions): APIPromise<AdCampaignCreateResponse> {
    return this._client.post('/ad_campaigns', { body, ...options });
  }

  /**
   * Retrieves a single ad campaign by its unique identifier.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   * - `access_pass:basic:read`
   * - `company:balance:read`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.retrieve(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AdCampaignRetrieveResponse> {
    return this._client.get(path`/ad_campaigns/${id}`, options);
  }

  /**
   * Updates an existing ad campaign.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `access_pass:basic:read`
   * - `company:balance:read`
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.update(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: AdCampaignUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaignUpdateResponse> {
    return this._client.patch(path`/ad_campaigns/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of ad campaigns for a company, with optional filtering
   * by status, and creation date.
   *
   * Required permissions:
   *
   * - `ad_campaign:basic:read`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const adCampaignListResponse of client.adCampaigns.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AdCampaignListParams,
    options?: RequestOptions,
  ): PagePromise<AdCampaignListResponsesCursorPage, AdCampaignListResponse> {
    return this._client.getAPIList('/ad_campaigns', CursorPage<AdCampaignListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Pauses an ad campaign, optionally until a specific date.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `access_pass:basic:read`
   * - `company:balance:read`
   *
   * @example
   * ```ts
   * const response = await client.adCampaigns.pause(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  pause(id: string, options?: RequestOptions): APIPromise<AdCampaignPauseResponse> {
    return this._client.post(path`/ad_campaigns/${id}/pause`, options);
  }

  /**
   * Resumes a paused ad campaign.
   *
   * Required permissions:
   *
   * - `ad_campaign:update`
   * - `access_pass:basic:read`
   * - `company:balance:read`
   *
   * @example
   * ```ts
   * const response = await client.adCampaigns.unpause(
   *   'adcamp_xxxxxxxxxxx',
   * );
   * ```
   */
  unpause(id: string, options?: RequestOptions): APIPromise<AdCampaignUnpauseResponse> {
    return this._client.post(path`/ad_campaigns/${id}/unpause`, options);
  }
}

export type AdCampaignListResponsesCursorPage = CursorPage<AdCampaignListResponse>;

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignCreateResponse {
  /**
   * The unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Available budget in dollars, capped at daily budget minus today's spend for
   * daily campaigns
   */
  available_budget: number;

  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  billing_ledger_account: AdCampaignCreateResponse.BillingLedgerAccount | null;

  /**
   * Number of clicks
   */
  clicks_count: number;

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  config: AdCampaignCreateResponse.Config | null;

  /**
   * The datetime the ad campaign was created.
   */
  created_at: string;

  /**
   * The user who created the campaign
   */
  created_by_user: AdCampaignCreateResponse.CreatedByUser;

  /**
   * Effective daily budget in dollars — sum of ad group budgets when set, otherwise
   * campaign-level daily budget
   */
  daily_budget: number | null;

  /**
   * Number of impressions (views)
   */
  impressions_count: number;

  /**
   * If temporarily paused, the timestamp when the campaign will auto-resume
   */
  paused_until: string | null;

  /**
   * The payment method used for daily billing (null if using platform balance)
   */
  payment_method:
    | AdCampaignCreateResponse.BasePaymentMethod
    | null
    | AdCampaignCreateResponse.CardPaymentMethod
    | null
    | AdCampaignCreateResponse.UsBankAccountPaymentMethod
    | null
    | AdCampaignCreateResponse.CashappPaymentMethod
    | null
    | AdCampaignCreateResponse.IdealPaymentMethod
    | null
    | AdCampaignCreateResponse.SepaDebitPaymentMethod
    | null;

  /**
   * The platforms where an ad campaign can run.
   */
  platform: 'meta' | 'tiktok' | null;

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  product: AdCampaignCreateResponse.Product | null;

  /**
   * Number of purchases
   */
  purchases_count: number;

  /**
   * Remaining balance in dollars
   */
  remaining_balance: number;

  /**
   * Return on Ad Spend (ROAS) percentage - revenue generated divided by ad spend
   */
  return_on_ad_spend: number;

  /**
   * Total revenue generated from users who converted through this campaign
   */
  revenue: number;

  /**
   * Current status of the campaign (active, paused, or inactive)
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged';

  /**
   * Array of ISO3166 country codes for territory targeting
   */
  target_country_codes: Array<string>;

  /**
   * The title of the ad campaign
   */
  title: string;

  /**
   * Amount spent today in dollars
   */
  todays_spend: number;

  /**
   * Total credits added to the campaign in dollars
   */
  total_credits: number;

  /**
   * Total amount spent on conversions in dollars
   */
  total_spend: number;

  /**
   * The datetime the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignCreateResponse {
  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  export interface BillingLedgerAccount {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;
  }

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time: string | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status: 'active' | 'paused' | null;
  }

  /**
   * The user who created the campaign
   */
  export interface CreatedByUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignRetrieveResponse {
  /**
   * The unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Available budget in dollars, capped at daily budget minus today's spend for
   * daily campaigns
   */
  available_budget: number;

  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  billing_ledger_account: AdCampaignRetrieveResponse.BillingLedgerAccount | null;

  /**
   * Number of clicks
   */
  clicks_count: number;

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  config: AdCampaignRetrieveResponse.Config | null;

  /**
   * The datetime the ad campaign was created.
   */
  created_at: string;

  /**
   * The user who created the campaign
   */
  created_by_user: AdCampaignRetrieveResponse.CreatedByUser;

  /**
   * Effective daily budget in dollars — sum of ad group budgets when set, otherwise
   * campaign-level daily budget
   */
  daily_budget: number | null;

  /**
   * Number of impressions (views)
   */
  impressions_count: number;

  /**
   * If temporarily paused, the timestamp when the campaign will auto-resume
   */
  paused_until: string | null;

  /**
   * The payment method used for daily billing (null if using platform balance)
   */
  payment_method:
    | AdCampaignRetrieveResponse.BasePaymentMethod
    | null
    | AdCampaignRetrieveResponse.CardPaymentMethod
    | null
    | AdCampaignRetrieveResponse.UsBankAccountPaymentMethod
    | null
    | AdCampaignRetrieveResponse.CashappPaymentMethod
    | null
    | AdCampaignRetrieveResponse.IdealPaymentMethod
    | null
    | AdCampaignRetrieveResponse.SepaDebitPaymentMethod
    | null;

  /**
   * The platforms where an ad campaign can run.
   */
  platform: 'meta' | 'tiktok' | null;

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  product: AdCampaignRetrieveResponse.Product | null;

  /**
   * Number of purchases
   */
  purchases_count: number;

  /**
   * Remaining balance in dollars
   */
  remaining_balance: number;

  /**
   * Return on Ad Spend (ROAS) percentage - revenue generated divided by ad spend
   */
  return_on_ad_spend: number;

  /**
   * Total revenue generated from users who converted through this campaign
   */
  revenue: number;

  /**
   * Current status of the campaign (active, paused, or inactive)
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged';

  /**
   * Array of ISO3166 country codes for territory targeting
   */
  target_country_codes: Array<string>;

  /**
   * The title of the ad campaign
   */
  title: string;

  /**
   * Amount spent today in dollars
   */
  todays_spend: number;

  /**
   * Total credits added to the campaign in dollars
   */
  total_credits: number;

  /**
   * Total amount spent on conversions in dollars
   */
  total_spend: number;

  /**
   * The datetime the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignRetrieveResponse {
  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  export interface BillingLedgerAccount {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;
  }

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time: string | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status: 'active' | 'paused' | null;
  }

  /**
   * The user who created the campaign
   */
  export interface CreatedByUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignUpdateResponse {
  /**
   * The unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Available budget in dollars, capped at daily budget minus today's spend for
   * daily campaigns
   */
  available_budget: number;

  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  billing_ledger_account: AdCampaignUpdateResponse.BillingLedgerAccount | null;

  /**
   * Number of clicks
   */
  clicks_count: number;

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  config: AdCampaignUpdateResponse.Config | null;

  /**
   * The datetime the ad campaign was created.
   */
  created_at: string;

  /**
   * The user who created the campaign
   */
  created_by_user: AdCampaignUpdateResponse.CreatedByUser;

  /**
   * Effective daily budget in dollars — sum of ad group budgets when set, otherwise
   * campaign-level daily budget
   */
  daily_budget: number | null;

  /**
   * Number of impressions (views)
   */
  impressions_count: number;

  /**
   * If temporarily paused, the timestamp when the campaign will auto-resume
   */
  paused_until: string | null;

  /**
   * The payment method used for daily billing (null if using platform balance)
   */
  payment_method:
    | AdCampaignUpdateResponse.BasePaymentMethod
    | null
    | AdCampaignUpdateResponse.CardPaymentMethod
    | null
    | AdCampaignUpdateResponse.UsBankAccountPaymentMethod
    | null
    | AdCampaignUpdateResponse.CashappPaymentMethod
    | null
    | AdCampaignUpdateResponse.IdealPaymentMethod
    | null
    | AdCampaignUpdateResponse.SepaDebitPaymentMethod
    | null;

  /**
   * The platforms where an ad campaign can run.
   */
  platform: 'meta' | 'tiktok' | null;

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  product: AdCampaignUpdateResponse.Product | null;

  /**
   * Number of purchases
   */
  purchases_count: number;

  /**
   * Remaining balance in dollars
   */
  remaining_balance: number;

  /**
   * Return on Ad Spend (ROAS) percentage - revenue generated divided by ad spend
   */
  return_on_ad_spend: number;

  /**
   * Total revenue generated from users who converted through this campaign
   */
  revenue: number;

  /**
   * Current status of the campaign (active, paused, or inactive)
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged';

  /**
   * Array of ISO3166 country codes for territory targeting
   */
  target_country_codes: Array<string>;

  /**
   * The title of the ad campaign
   */
  title: string;

  /**
   * Amount spent today in dollars
   */
  todays_spend: number;

  /**
   * Total credits added to the campaign in dollars
   */
  total_credits: number;

  /**
   * Total amount spent on conversions in dollars
   */
  total_spend: number;

  /**
   * The datetime the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignUpdateResponse {
  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  export interface BillingLedgerAccount {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;
  }

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time: string | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status: 'active' | 'paused' | null;
  }

  /**
   * The user who created the campaign
   */
  export interface CreatedByUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignListResponse {
  /**
   * The unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Available budget in dollars, capped at daily budget minus today's spend for
   * daily campaigns
   */
  available_budget: number;

  /**
   * Number of clicks
   */
  clicks_count: number;

  /**
   * The datetime the ad campaign was created.
   */
  created_at: string;

  /**
   * Effective daily budget in dollars — sum of ad group budgets when set, otherwise
   * campaign-level daily budget
   */
  daily_budget: number | null;

  /**
   * Number of impressions (views)
   */
  impressions_count: number;

  /**
   * If temporarily paused, the timestamp when the campaign will auto-resume
   */
  paused_until: string | null;

  /**
   * The platforms where an ad campaign can run.
   */
  platform: 'meta' | 'tiktok' | null;

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  product: AdCampaignListResponse.Product | null;

  /**
   * Number of purchases
   */
  purchases_count: number;

  /**
   * Remaining balance in dollars
   */
  remaining_balance: number;

  /**
   * Return on Ad Spend (ROAS) percentage - revenue generated divided by ad spend
   */
  return_on_ad_spend: number;

  /**
   * Total revenue generated from users who converted through this campaign
   */
  revenue: number;

  /**
   * Current status of the campaign (active, paused, or inactive)
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged';

  /**
   * Array of ISO3166 country codes for territory targeting
   */
  target_country_codes: Array<string>;

  /**
   * The title of the ad campaign
   */
  title: string;

  /**
   * Amount spent today in dollars
   */
  todays_spend: number;

  /**
   * Total credits added to the campaign in dollars
   */
  total_credits: number;

  /**
   * Total amount spent on conversions in dollars
   */
  total_spend: number;

  /**
   * The datetime the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignListResponse {
  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignPauseResponse {
  /**
   * The unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Available budget in dollars, capped at daily budget minus today's spend for
   * daily campaigns
   */
  available_budget: number;

  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  billing_ledger_account: AdCampaignPauseResponse.BillingLedgerAccount | null;

  /**
   * Number of clicks
   */
  clicks_count: number;

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  config: AdCampaignPauseResponse.Config | null;

  /**
   * The datetime the ad campaign was created.
   */
  created_at: string;

  /**
   * The user who created the campaign
   */
  created_by_user: AdCampaignPauseResponse.CreatedByUser;

  /**
   * Effective daily budget in dollars — sum of ad group budgets when set, otherwise
   * campaign-level daily budget
   */
  daily_budget: number | null;

  /**
   * Number of impressions (views)
   */
  impressions_count: number;

  /**
   * If temporarily paused, the timestamp when the campaign will auto-resume
   */
  paused_until: string | null;

  /**
   * The payment method used for daily billing (null if using platform balance)
   */
  payment_method:
    | AdCampaignPauseResponse.BasePaymentMethod
    | null
    | AdCampaignPauseResponse.CardPaymentMethod
    | null
    | AdCampaignPauseResponse.UsBankAccountPaymentMethod
    | null
    | AdCampaignPauseResponse.CashappPaymentMethod
    | null
    | AdCampaignPauseResponse.IdealPaymentMethod
    | null
    | AdCampaignPauseResponse.SepaDebitPaymentMethod
    | null;

  /**
   * The platforms where an ad campaign can run.
   */
  platform: 'meta' | 'tiktok' | null;

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  product: AdCampaignPauseResponse.Product | null;

  /**
   * Number of purchases
   */
  purchases_count: number;

  /**
   * Remaining balance in dollars
   */
  remaining_balance: number;

  /**
   * Return on Ad Spend (ROAS) percentage - revenue generated divided by ad spend
   */
  return_on_ad_spend: number;

  /**
   * Total revenue generated from users who converted through this campaign
   */
  revenue: number;

  /**
   * Current status of the campaign (active, paused, or inactive)
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged';

  /**
   * Array of ISO3166 country codes for territory targeting
   */
  target_country_codes: Array<string>;

  /**
   * The title of the ad campaign
   */
  title: string;

  /**
   * Amount spent today in dollars
   */
  todays_spend: number;

  /**
   * Total credits added to the campaign in dollars
   */
  total_credits: number;

  /**
   * Total amount spent on conversions in dollars
   */
  total_spend: number;

  /**
   * The datetime the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignPauseResponse {
  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  export interface BillingLedgerAccount {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;
  }

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time: string | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status: 'active' | 'paused' | null;
  }

  /**
   * The user who created the campaign
   */
  export interface CreatedByUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * An advertising campaign running on an external platform or within Whop.
 */
export interface AdCampaignUnpauseResponse {
  /**
   * The unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Available budget in dollars, capped at daily budget minus today's spend for
   * daily campaigns
   */
  available_budget: number;

  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  billing_ledger_account: AdCampaignUnpauseResponse.BillingLedgerAccount | null;

  /**
   * Number of clicks
   */
  clicks_count: number;

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  config: AdCampaignUnpauseResponse.Config | null;

  /**
   * The datetime the ad campaign was created.
   */
  created_at: string;

  /**
   * The user who created the campaign
   */
  created_by_user: AdCampaignUnpauseResponse.CreatedByUser;

  /**
   * Effective daily budget in dollars — sum of ad group budgets when set, otherwise
   * campaign-level daily budget
   */
  daily_budget: number | null;

  /**
   * Number of impressions (views)
   */
  impressions_count: number;

  /**
   * If temporarily paused, the timestamp when the campaign will auto-resume
   */
  paused_until: string | null;

  /**
   * The payment method used for daily billing (null if using platform balance)
   */
  payment_method:
    | AdCampaignUnpauseResponse.BasePaymentMethod
    | null
    | AdCampaignUnpauseResponse.CardPaymentMethod
    | null
    | AdCampaignUnpauseResponse.UsBankAccountPaymentMethod
    | null
    | AdCampaignUnpauseResponse.CashappPaymentMethod
    | null
    | AdCampaignUnpauseResponse.IdealPaymentMethod
    | null
    | AdCampaignUnpauseResponse.SepaDebitPaymentMethod
    | null;

  /**
   * The platforms where an ad campaign can run.
   */
  platform: 'meta' | 'tiktok' | null;

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  product: AdCampaignUnpauseResponse.Product | null;

  /**
   * Number of purchases
   */
  purchases_count: number;

  /**
   * Remaining balance in dollars
   */
  remaining_balance: number;

  /**
   * Return on Ad Spend (ROAS) percentage - revenue generated divided by ad spend
   */
  return_on_ad_spend: number;

  /**
   * Total revenue generated from users who converted through this campaign
   */
  revenue: number;

  /**
   * Current status of the campaign (active, paused, or inactive)
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged';

  /**
   * Array of ISO3166 country codes for territory targeting
   */
  target_country_codes: Array<string>;

  /**
   * The title of the ad campaign
   */
  title: string;

  /**
   * Amount spent today in dollars
   */
  todays_spend: number;

  /**
   * Total credits added to the campaign in dollars
   */
  total_credits: number;

  /**
   * Total amount spent on conversions in dollars
   */
  total_spend: number;

  /**
   * The datetime the ad campaign was last updated.
   */
  updated_at: string;
}

export namespace AdCampaignUnpauseResponse {
  /**
   * The ledger account being charged for platform balance billing (null if using
   * card)
   */
  export interface BillingLedgerAccount {
    /**
     * The unique identifier for the ledger account.
     */
    id: string;
  }

  /**
   * Meta campaign configuration (objective, budget, bidding, etc.). Null for
   * non-Meta campaigns — use `tiktokConfig` for TikTok.
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time: string | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status: 'active' | 'paused' | null;
  }

  /**
   * The user who created the campaign
   */
  export interface CreatedByUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A saved payment method with no type-specific details available.
   */
  export interface BasePaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'BasePaymentMethod';
  }

  /**
   * A saved card payment method, including brand, last four digits, and expiration
   * details.
   */
  export interface CardPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    card: CardPaymentMethod.Card;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CardPaymentMethod';
  }

  export namespace CardPaymentMethod {
    /**
     * The card-specific details for this payment method, including brand, last four
     * digits, and expiration.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * A saved US bank account payment method, including bank name, last four digits,
   * and account type.
   */
  export interface UsBankAccountPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'UsBankAccountPaymentMethod';

    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
  }

  export namespace UsBankAccountPaymentMethod {
    /**
     * The bank account-specific details for this payment method, including bank name
     * and last four digits.
     */
    export interface UsBankAccount {
      /**
       * The type of bank account (e.g., checking, savings).
       */
      account_type: string;

      /**
       * The name of the financial institution holding the account.
       */
      bank_name: string;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;
    }
  }

  /**
   * A saved Cash App payment method, including the buyer's cashtag and unique
   * identifier.
   */
  export interface CashappPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    cashapp: CashappPaymentMethod.Cashapp;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'CashappPaymentMethod';
  }

  export namespace CashappPaymentMethod {
    /**
     * The Cash App-specific details for this payment method, including cashtag and
     * buyer ID.
     */
    export interface Cashapp {
      /**
       * The unique and immutable identifier assigned by Cash App to the buyer. Null if
       * not available.
       */
      buyer_id: string | null;

      /**
       * The public cashtag handle of the buyer on Cash App. Null if not available.
       */
      cashtag: string | null;
    }
  }

  /**
   * A saved iDEAL payment method, including the customer's bank name and BIC code.
   */
  export interface IdealPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    ideal: IdealPaymentMethod.Ideal;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The typename of this object
     */
    typename: 'IdealPaymentMethod';
  }

  export namespace IdealPaymentMethod {
    /**
     * The iDEAL-specific details for this payment method, including bank name and BIC.
     */
    export interface Ideal {
      /**
       * The name of the customer's bank used for the iDEAL transaction. Null if not
       * available.
       */
      bank: string | null;

      /**
       * The Bank Identifier Code (BIC/SWIFT) of the customer's bank. Null if not
       * available.
       */
      bic: string | null;
    }
  }

  /**
   * A saved SEPA Direct Debit payment method, including the bank code, country, and
   * last four IBAN digits.
   */
  export interface SepaDebitPaymentMethod {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * The time of the event in ISO 8601 UTC format with millisecond precision
     */
    created_at: string;

    /**
     * The type of payment instrument stored on file (e.g., card, us_bank_account,
     * cashapp, ideal, sepa_debit).
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;

    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    sepa_debit: SepaDebitPaymentMethod.SepaDebit;

    /**
     * The typename of this object
     */
    typename: 'SepaDebitPaymentMethod';
  }

  export namespace SepaDebitPaymentMethod {
    /**
     * The SEPA Direct Debit-specific details for this payment method, including bank
     * code and last four IBAN digits.
     */
    export interface SepaDebit {
      /**
       * The bank code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      bank_code: string | null;

      /**
       * The branch code of the financial institution associated with this SEPA account.
       * Null if not available.
       */
      branch_code: string | null;

      /**
       * The two-letter ISO country code where the bank account is located. Null if not
       * available.
       */
      country: string | null;

      /**
       * The last four digits of the IBAN associated with this SEPA account. Null if not
       * available.
       */
      last4: string | null;
    }
  }

  /**
   * The access pass being promoted. Null for campaigns that don't target a specific
   * product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

export interface AdCampaignCreateParams {
  /**
   * The company ID to create this ad campaign for.
   */
  company_id: string;

  /**
   * Unified campaign configuration (conversion goal, budget, bidding, etc.).
   */
  config: AdCampaignCreateParams.Config;

  /**
   * The ad platform to run on (e.g., meta, tiktok).
   */
  platform: 'meta' | 'tiktok';

  /**
   * The title of the ad campaign. Must be max 100 characters.
   */
  title: string;

  /**
   * Array of creative set IDs to link to this campaign.
   */
  ad_creative_set_ids?: Array<string> | null;

  /**
   * Budget amount in dollars.
   */
  budget?: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type?: 'daily' | 'lifetime' | null;

  /**
   * Daily budget in dollars (minimum $5). Required unless lifetime_budget is set in
   * config.
   */
  daily_budget?: number | null;

  /**
   * The unique identifier of the product to promote.
   */
  product_id?: string | null;

  /**
   * Array of ISO3166 country codes for territory targeting.
   */
  target_country_codes?: Array<string> | null;
}

export namespace AdCampaignCreateParams {
  /**
   * Unified campaign configuration (conversion goal, budget, bidding, etc.).
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount?: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy?: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization?: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time?: string | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    lifetime_budget?: number | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective?: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories?: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time?: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status?: 'active' | 'paused' | null;
  }
}

export interface AdCampaignUpdateParams {
  /**
   * Array of creative set IDs to link to this campaign.
   */
  ad_creative_set_ids?: Array<string> | null;

  /**
   * Budget amount in dollars.
   */
  budget?: number | null;

  /**
   * The budget type for an ad campaign or ad group.
   */
  budget_type?: 'daily' | 'lifetime' | null;

  /**
   * Unified campaign configuration (conversion goal, budget, bidding, etc.).
   */
  config?: AdCampaignUpdateParams.Config | null;

  /**
   * Daily budget in dollars (minimum $5).
   */
  daily_budget?: number | null;

  /**
   * The unique identifier of the product (access pass) to promote.
   */
  product_id?: string | null;

  /**
   * Array of ISO3166 country codes for territory targeting.
   */
  target_country_codes?: Array<string> | null;

  /**
   * The title of the ad campaign. Must be max 100 characters.
   */
  title?: string | null;
}

export namespace AdCampaignUpdateParams {
  /**
   * Unified campaign configuration (conversion goal, budget, bidding, etc.).
   */
  export interface Config {
    /**
     * Bid cap amount in cents. Only used when bid_strategy is bid_cap.
     */
    bid_amount?: number | null;

    /**
     * The bidding strategy used to optimize spend for this campaign.
     */
    bid_strategy?: 'lowest_cost' | 'bid_cap' | 'cost_cap' | null;

    /**
     * Whether campaign budget optimization (CBO) is enabled, allowing the platform to
     * distribute budget across ad groups.
     */
    budget_optimization?: boolean | null;

    /**
     * The scheduled end time of the campaign (ISO8601).
     */
    end_time?: string | null;

    /**
     * Represents non-fractional signed whole numeric values. Int can represent values
     * between -(2^31) and 2^31 - 1.
     */
    lifetime_budget?: number | null;

    /**
     * The campaign objective that determines how Meta optimizes delivery.
     */
    objective?: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

    /**
     * Special ad categories required by the platform (e.g., housing, employment,
     * credit).
     */
    special_categories?: Array<string> | null;

    /**
     * The scheduled start time of the campaign (ISO8601).
     */
    start_time?: string | null;

    /**
     * The campaign status as set by the advertiser (active or paused).
     */
    status?: 'active' | 'paused' | null;
  }
}

export interface AdCampaignListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list ad campaigns for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return ad campaigns created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return ad campaigns created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * Case-insensitive substring match against the campaign title.
   */
  query?: string | null;

  /**
   * The status of an ad campaign.
   */
  status?:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged'
    | null;
}

export declare namespace AdCampaigns {
  export {
    type AdCampaignCreateResponse as AdCampaignCreateResponse,
    type AdCampaignRetrieveResponse as AdCampaignRetrieveResponse,
    type AdCampaignUpdateResponse as AdCampaignUpdateResponse,
    type AdCampaignListResponse as AdCampaignListResponse,
    type AdCampaignPauseResponse as AdCampaignPauseResponse,
    type AdCampaignUnpauseResponse as AdCampaignUnpauseResponse,
    type AdCampaignListResponsesCursorPage as AdCampaignListResponsesCursorPage,
    type AdCampaignCreateParams as AdCampaignCreateParams,
    type AdCampaignUpdateParams as AdCampaignUpdateParams,
    type AdCampaignListParams as AdCampaignListParams,
  };
}
