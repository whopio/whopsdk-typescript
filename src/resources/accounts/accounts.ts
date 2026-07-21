// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import {
  PreferenceRetrieveResponse,
  PreferenceUpdateParams,
  PreferenceUpdateResponse,
  Preferences,
} from './preferences';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * An Account represents a person or business on Whop that can have its own profile, wallet, and account-scoped settings. Use accounts for customers, creators, merchants, sellers, or connected businesses your integration supports.
 *
 * Use the Accounts API to create accounts, list accounts visible to your credentials, retrieve or update an account, and retrieve the account associated with the current API key.
 */
export class Accounts extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);

  /**
   * Lists accounts visible to the credential. User tokens return the user's business
   * accounts; business account API keys return the requesting business account and
   * its connected accounts.
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountsCursorPage, Account> {
    return this._client.getAPIList('/accounts', CursorPage<Account>, { query, ...options });
  }

  /**
   * Creates an account. User tokens create business accounts; business account API
   * keys create connected accounts. Tax fields (`tax_remitted_by`,
   * `product_tax_code_id`, `business_address`, `tax_identifiers`) are configured
   * with Update Account, not at creation.
   */
  create(params: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/accounts', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the business account associated with the current business account API
   * key.
   */
  me(options?: RequestOptions): APIPromise<Account> {
    return this._client.get('/accounts/me', options);
  }

  /**
   * Retrieves a single account visible to the credential, including its crypto
   * wallet.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/accounts/${accountID}`, options);
  }

  /**
   * Updates an account. User tokens can update business accounts; business account
   * API keys can update connected accounts.
   */
  update(accountID: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch(path`/accounts/${accountID}`, { body, ...options });
  }

  /**
   * Lists the recommended actions computed for the account — the same set embedded
   * on the account resource, served on their own so a caller can fetch just the
   * recommendations.
   */
  recommendActions(accountID: string, options?: RequestOptions): APIPromise<AccountRecommendActionsResponse> {
    return this._client.get(path`/accounts/${accountID}/recommend_actions`, options);
  }

  /**
   * Starts an LLC formation for a business account. On submission, the application
   * is validated and the response returns a hosted checkout URL. Once paid, the
   * filing is submitted. Track progress through the account's
   * [`llc_formation`](/api-reference/beta/accounts/retrieve-account) field on
   * Retrieve Account.
   */
  registerLlc(
    accountID: string,
    params: AccountRegisterLlcParams,
    options?: RequestOptions,
  ): APIPromise<AccountRegisterLlcResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/accounts/${accountID}/llc`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type AccountsCursorPage = CursorPage<Account>;

export interface Account {
  /**
   * Account ID, prefixed `biz_`.
   */
  id: string;

  balances: Array<Account.Balance>;

  /**
   * Account banner image URL.
   */
  banner_image_url: string | null;

  /**
   * Account business address used to calculate tax, with `line1`, `line2`, `city`,
   * `state`, `postal_code`, and `country`. `null` when no address is set.
   */
  business_address: unknown | null;

  /**
   * High-level business category for the account. See the
   * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
   * for valid values.
   */
  business_type: string | null;

  /**
   * Payment rails enabled for this account, each `active`, `inactive`, or `pending`
   * (onboarding or review in progress). Computed only on `retrieve` and `me` for
   * callers with `company:balance:read` scope; `null` otherwise.
   */
  capabilities: Account.Capabilities | null;

  /**
   * Country where the account is located.
   */
  country: string | null;

  /**
   * When the account was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Account promotional description.
   */
  description: string | null;

  /**
   * Account owner email address.
   */
  email: string | null;

  home_preferences: Array<string>;

  /**
   * Account industry group. See the
   * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
   * for valid values.
   */
  industry_group: string | null;

  /**
   * Specific industry vertical for the account. See the
   * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
   * for valid values.
   */
  industry_type: string | null;

  /**
   * Prefix used for account invoices.
   */
  invoice_prefix: string | null;

  /**
   * LLC formation state for the account, managed through
   * [Register LLC](/api-reference/beta/accounts/register-llc). A `draft` `status`
   * until the formation checkout is paid, then filing progress with downloadable
   * documents and signatures awaiting action. Empty when the formation state is
   * temporarily unavailable.
   */
  llc_formation: Account.LlcFormation;

  /**
   * Account logo image URL.
   */
  logo_url: string | null;

  /**
   * Arbitrary key/value metadata supplied at account creation.
   */
  metadata: unknown;

  /**
   * Type of onboarding the account has completed.
   */
  onboarding_type: string | null;

  /**
   * Account Open Graph image URL.
   */
  opengraph_image_url: string | null;

  /**
   * Account Open Graph image variant.
   */
  opengraph_image_variant: string | null;

  /**
   * Business type details when business_type is `other`.
   */
  other_business_description: string | null;

  /**
   * Industry details when industry_type is `other`.
   */
  other_industry_description: string | null;

  /**
   * Parent account ID for connected accounts.
   */
  parent_account_id: string | null;

  /**
   * Payment health controls currently applied to the account. Computed only on
   * `retrieve` and `me` for callers with `company:balance:read` scope; `null`
   * otherwise.
   */
  payment_controls: Account.PaymentControls | null;

  /**
   * Tax classification code applied by default to the account's products, with `id`,
   * `name`, and `product_type`. `null` when no default is set.
   */
  product_tax_code: unknown | null;

  /**
   * @deprecated DEPRECATED: Use the `GET /accounts/{account_id}/recommend_actions`
   * endpoint instead.
   */
  recommended_actions: Array<Account.RecommendedAction> | null;

  /**
   * Whether authorized users must enable two-factor authentication.
   */
  require_2fa: boolean;

  required_actions: Array<Account.RequiredAction> | null;

  /**
   * Account public route identifier.
   */
  route: string;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this account.
   */
  send_customer_emails: boolean;

  /**
   * Whether the account appears in joined whops on other accounts.
   */
  show_joined_whops: boolean;

  /**
   * Whether reviews are displayed on direct-to-consumer product pages.
   */
  show_reviews_dtc: boolean;

  /**
   * Whether the account shows users in the user directory.
   */
  show_user_directory: boolean;

  social_links: Array<AccountSocialLink>;

  /**
   * Whether the account can operate on Whop: `active` or `suspended`. Computed only
   * on `retrieve` and `me`; `null` otherwise.
   */
  status: string | null;

  /**
   * Account store page display configuration.
   */
  store_page_config: unknown;

  /**
   * Target audience for this account.
   */
  target_audience: string | null;

  tax_collection_enabled_states: Array<string>;

  /**
   * Account tax/VAT registrations, each with `id`, `tax_id_type`, and
   * `tax_id_value`. Empty when none are set.
   */
  tax_identifiers: Array<unknown>;

  /**
   * Who calculates and remits tax for the account: `whop` (Whop calculates and
   * remits), `self` (Whop calculates; the account collects and remits), or `none`
   * (neither; the account is responsible). `null` until the account enrolls in the
   * Whop tax service.
   */
  tax_remitted_by: string | null;

  /**
   * Account display name.
   */
  title: string;

  /**
   * Account lifetime sales, normalized to USD. Computed only on `retrieve` and `me`
   * for callers with `stats:read` scope; `null` otherwise.
   */
  total_earned_usd: number | null;

  /**
   * Total USD value across balances with known exchange rates. Computed only on
   * single-account reads (`retrieve` and `me`); `null` on list responses, writes,
   * missing balance-read permission, or unavailable balance source.
   */
  total_usd: string | null;

  /**
   * Whether the account uses its logo as the fallback Open Graph image.
   */
  use_logo_as_opengraph_image_fallback: boolean;

  /**
   * Account identity verification status for the `individual` (KYC) and `business`
   * (KYB) profiles. Each is `null` until created, otherwise a `status` of
   * `not_started`, `pending`, `approved`, or `rejected`.
   */
  verification: unknown;

  /**
   * Account primary crypto wallet, or `null` if none has been provisioned.
   */
  wallet: Account.Wallet | null;
}

export namespace Account {
  /**
   * Account holdings, each with USD value. Empty when `total_usd` is `null`.
   */
  export interface Balance {
    /**
     * Total amount held in native units, as a decimal string.
     */
    balance: string;

    /**
     * Balance split into available, pending, and reserve amounts, as native-unit
     * decimal strings. On-chain crypto is entirely available; good_funds and fiat cash
     * can have pending or reserve portions.
     */
    breakdown: unknown;

    /**
     * Holding icon URL.
     */
    icon_url: string | null;

    /**
     * The holding's display name
     */
    name: string;

    /**
     * USD price per unit, or `null` when no exchange rate is available.
     */
    price_usd: number | null;

    /**
     * Holding display symbol, such as `USDT`, `cbBTC`, or `EUR`.
     */
    symbol: string;

    /**
     * Holding USD value, or `null` when no exchange rate is available.
     */
    value_usd: string | null;
  }

  /**
   * Payment rails enabled for this account, each `active`, `inactive`, or `pending`
   * (onboarding or review in progress). Computed only on `retrieve` and `me` for
   * callers with `company:balance:read` scope; `null` otherwise.
   */
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

  /**
   * LLC formation state for the account, managed through
   * [Register LLC](/api-reference/beta/accounts/register-llc). A `draft` `status`
   * until the formation checkout is paid, then filing progress with downloadable
   * documents and signatures awaiting action. Empty when the formation state is
   * temporarily unavailable.
   */
  export interface LlcFormation {
    documents?: Array<LlcFormation.Document>;

    /**
     * Whether the company's EIN has been issued by the IRS. Present once `status`
     * leaves `draft`.
     */
    ein_registered?: boolean;

    /**
     * Registered company name including the entity ending, for example `Acme, LLC`.
     * Present once `status` leaves `draft`.
     */
    legal_name?: string | null;

    /**
     * IRS forms still awaiting a founder's signature, each with a hosted signing URL.
     * Present once `status` leaves `draft`; empty when nothing needs signing.
     */
    signatures?: LlcFormation.Signatures;

    /**
     * Whether the state formation filing is complete. Present once `status` leaves
     * `draft`.
     */
    state_registered?: boolean;

    status?: 'draft' | 'processing' | 'filed' | 'rejected' | 'completed';

    [k: string]: unknown;
  }

  export namespace LlcFormation {
    /**
     * Formation documents available for download, such as the Articles of Organization
     * and the EIN confirmation letter. Present once `status` leaves `draft`.
     */
    export interface Document {
      /**
       * Document ID, prefixed `file_`.
       */
      id: string;

      /**
       * Human-readable document name, such as `Articles of Organization`.
       */
      name: string;

      /**
       * Document category: `articles_of_organization`, `operating_agreement`,
       * `ein_letter`, `signed_ss4`, `signed_form8821`, or `mail` for postal
       * correspondence received on the company's behalf.
       */
      type: string;

      /**
       * CDN URL for downloading the document.
       */
      url: string;
    }

    /**
     * IRS forms still awaiting a founder's signature, each with a hosted signing URL.
     * Present once `status` leaves `draft`; empty when nothing needs signing.
     */
    export interface Signatures {
      /**
       * Signature state for IRS Form 8821, the tax information authorization. Present
       * only while the form still needs the founder's action.
       */
      form8821?: Signatures.Form8821;

      /**
       * Signature state for IRS Form SS-4, the EIN application. Present only while the
       * form still needs the founder's action.
       */
      ss4?: Signatures.Ss4;

      [k: string]: unknown;
    }

    export namespace Signatures {
      /**
       * Signature state for IRS Form 8821, the tax information authorization. Present
       * only while the form still needs the founder's action.
       */
      export interface Form8821 {
        /**
         * `pending` when a signing session is ready for the founder; `unknown` when the
         * signature state could not be determined.
         */
        status: 'pending' | 'unknown';

        /**
         * When the signing URL expires, as an ISO 8601 timestamp. Present while `status`
         * is `pending`.
         */
        expires_at?: string;

        /**
         * Hosted signing URL where the founder completes the form. Present while `status`
         * is `pending`.
         */
        url?: string;
      }

      /**
       * Signature state for IRS Form SS-4, the EIN application. Present only while the
       * form still needs the founder's action.
       */
      export interface Ss4 {
        /**
         * `pending` when a signing session is ready for the founder; `unknown` when the
         * signature state could not be determined.
         */
        status: 'pending' | 'unknown';

        /**
         * When the signing URL expires, as an ISO 8601 timestamp. Present while `status`
         * is `pending`.
         */
        expires_at?: string;

        /**
         * Hosted signing URL where the founder completes the form. Present while `status`
         * is `pending`.
         */
        url?: string;
      }
    }
  }

  /**
   * Payment health controls currently applied to the account. Computed only on
   * `retrieve` and `me` for callers with `company:balance:read` scope; `null`
   * otherwise.
   */
  export interface PaymentControls {
    /**
     * Automatic refund settings for pre-chargeback dispute alerts.
     */
    dispute_alert_auto_refund: PaymentControls.DisputeAlertAutoRefund;

    /**
     * Fee charged for each dispute alert in USD. `null` when unavailable.
     */
    dispute_alert_fee_usd: number | null;

    /**
     * Whether payment health controls explicitly disable financing. This is
     * independent of financing approval in `capabilities.accept_bnpl_payments`.
     */
    financing_disabled: boolean;

    /**
     * Additional processing fee percentage for high-risk processing. Currently `0` for
     * all accounts.
     */
    high_risk_processing_fee_percentage: number;

    /**
     * Additional days payments remain pending before becoming available.
     */
    pending_balance_delay_days: number;

    /**
     * Reserve currently applied to incoming payment volume.
     */
    reserve: PaymentControls.Reserve;

    /**
     * Automatic refund settings for resolution center cases.
     */
    resolution_center_auto_refund: PaymentControls.ResolutionCenterAutoRefund;
  }

  export namespace PaymentControls {
    /**
     * Automatic refund settings for pre-chargeback dispute alerts.
     */
    export interface DisputeAlertAutoRefund {
      /**
       * Whether the account owner is prevented from changing this threshold.
       */
      locked: boolean;

      /**
       * Maximum dispute alert amount automatically refunded in USD. `null` when
       * automatic refunds are disabled.
       */
      threshold_usd: number | null;
    }

    /**
     * Reserve currently applied to incoming payment volume.
     */
    export interface Reserve {
      /**
       * Number of days reserved funds are held before release.
       */
      hold_period_days: number;

      /**
       * Percentage of incoming payment volume held in reserve. `null` when no reserve is
       * applied.
       */
      percentage: number | null;
    }

    /**
     * Automatic refund settings for resolution center cases.
     */
    export interface ResolutionCenterAutoRefund {
      /**
       * Maximum card-funded resolution center case amount automatically refunded in USD.
       * `null` when automatic refunds are disabled for cards.
       */
      card_threshold_usd: number | null;

      /**
       * Maximum financing-funded resolution center case amount automatically refunded in
       * USD. `null` when automatic refunds are disabled for financing.
       */
      financing_threshold_usd: number | null;

      /**
       * Whether the account owner is prevented from changing these thresholds.
       */
      locked: boolean;

      /**
       * Maximum PayPal-funded resolution center case amount automatically refunded in
       * USD. `null` when automatic refunds are disabled for PayPal.
       */
      paypal_threshold_usd: number | null;
    }
  }

  /**
   * Deprecated: use the `GET /accounts/{account_id}/recommend_actions` endpoint
   * instead. Optional actions that unlock capabilities or grow the account, same
   * shape as `required_actions`. Computed only on `retrieve` and `me`; `null`
   * otherwise.
   */
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

  /**
   * Actions the account owner must take to unblock capabilities like payouts and
   * card spend, ordered by display priority. Computed only on `retrieve` and `me`
   * for callers with `company:balance:read` scope; `null` otherwise.
   */
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

  /**
   * Account primary crypto wallet, or `null` if none has been provisioned.
   */
  export interface Wallet {
    /**
     * Wallet ID, prefixed `wallet_`.
     */
    id: string;

    /**
     * The on-chain address of the wallet
     */
    address: string;

    /**
     * The blockchain network the wallet lives on
     */
    network: 'solana' | 'ethereum' | 'bitcoin';
  }
}

export interface AccountSocialLink {
  /**
   * The ID of the social link
   */
  id: string;

  /**
   * The optional display title for the social link
   */
  title: string | null;

  /**
   * The social link URL
   */
  url: string;

  /**
   * The social platform for this link
   */
  website:
    | 'x'
    | 'instagram'
    | 'facebook'
    | 'tiktok'
    | 'youtube'
    | 'linkedin'
    | 'twitch'
    | 'website'
    | 'custom';
}

export interface AccountRecommendActionsResponse {
  data: Array<AccountRecommendActionsResponse.Data>;
}

export namespace AccountRecommendActionsResponse {
  export interface Data {
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
}

export interface AccountRegisterLlcResponse {
  /**
   * Checkout session ID, prefixed `ch_`.
   */
  checkout_session_id: string;

  /**
   * Hosted checkout URL. Send the buyer here to pay for the formation; the filing is
   * submitted once payment completes.
   */
  checkout_url: string;

  /**
   * Always `usd`.
   */
  currency: string;

  /**
   * Total due at checkout in USD cents.
   */
  total: number;
}

export interface AccountListParams extends CursorPageParams {
  /**
   * A cursor; returns accounts before this position.
   */
  before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of accounts to return (default 10, max 50).
   */
  first?: number;

  /**
   * The number of accounts to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort accounts by.
   */
  order?: 'created_at';
}

export interface AccountCreateParams {
  /**
   * Body param: The ISO 3166-1 alpha-2 country code where the account's business is
   * located (e.g. `US`). Defaults to the parent account's country for connected
   * accounts.
   */
  country?: string;

  /**
   * Body param: The email address of the account owner. Required for business
   * account API key requests.
   */
  email?: string;

  /**
   * Body param: Arbitrary key/value metadata to store on the account.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: The display name of the account. Defaults to `metadata.external_id`
   * or the owner's email when omitted.
   */
  title?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface AccountUpdateParams {
  /**
   * Whether prospective affiliates must submit an application before promoting this
   * account.
   */
  affiliate_application_required?: boolean;

  /**
   * Guidelines shown to affiliates promoting this account.
   */
  affiliate_instructions?: string | null;

  /**
   * Attachment input for the account banner image.
   */
  banner_image?: { [key: string]: unknown } | null;

  /**
   * Account business address used to calculate tax. A complete address in a
   * supported country is required when `tax_remitted_by` is `self`.
   */
  business_address?: AccountUpdateParams.BusinessAddress;

  /**
   * High-level business category for the account. See the
   * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
   * for valid values.
   */
  business_type?: string | null;

  /**
   * Country where the account is located.
   */
  country?: string | null;

  /**
   * Account promotional description.
   */
  description?: string | null;

  /**
   * The ID of the product to feature for affiliates. Pass `null` to clear.
   */
  featured_affiliate_product_id?: string | null;

  /**
   * Public account home page preferences.
   */
  home_preferences?: Array<string>;

  /**
   * Account industry group. See the
   * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
   * for valid values.
   */
  industry_group?: string | null;

  /**
   * Specific industry vertical for the account. See the
   * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary)
   * for valid values.
   */
  industry_type?: string | null;

  /**
   * Prefix used for account invoices.
   */
  invoice_prefix?: string | null;

  /**
   * Attachment input for the account logo.
   */
  logo?: { [key: string]: unknown } | null;

  /**
   * Arbitrary key/value metadata to store on the account.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The type of onboarding the account has completed.
   */
  onboarding_type?: string | null;

  /**
   * Attachment input for the account Open Graph image.
   */
  opengraph_image?: { [key: string]: unknown } | null;

  /**
   * The account Open Graph image variant.
   */
  opengraph_image_variant?: string | null;

  /**
   * The description of the business type when business_type is other.
   */
  other_business_description?: string | null;

  /**
   * The description of the industry type when industry_type is other.
   */
  other_industry_description?: string | null;

  /**
   * ID of the tax classification code applied by default to the account's products.
   * See the available
   * [product categories](https://docs.numeral.com/essentials/product-categories).
   */
  product_tax_code_id?: string | null;

  /**
   * Whether the account requires authorized users to have two-factor authentication
   * enabled.
   */
  require_2fa?: boolean;

  /**
   * The unique URL slug for the account.
   */
  route?: string | null;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this account.
   */
  send_customer_emails?: boolean;

  /**
   * Whether the account appears in joined whops on other accounts.
   */
  show_joined_whops?: boolean;

  /**
   * Whether reviews are displayed on direct-to-consumer product pages.
   */
  show_reviews_dtc?: boolean;

  /**
   * Whether the account shows users in the user directory.
   */
  show_user_directory?: boolean;

  /**
   * The full list of social links to display for the account.
   */
  social_links?: Array<{ [key: string]: unknown }>;

  /**
   * Account store page display configuration.
   */
  store_page_config?: { [key: string]: unknown } | null;

  /**
   * The target audience for this account.
   */
  target_audience?: string | null;

  /**
   * US state codes (50 states plus `DC`) where the account collects tax. Replaces
   * the full set on update. Only settable when `tax_remitted_by` is `self`.
   */
  tax_collection_enabled_states?: Array<
    | 'AL'
    | 'AK'
    | 'AZ'
    | 'AR'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DE'
    | 'DC'
    | 'FL'
    | 'GA'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VA'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY'
  >;

  /**
   * Account tax/VAT registrations to add or update. When `tax_remitted_by` is
   * `self`, tax is calculated and collected only in the countries where the account
   * holds a registration.
   */
  tax_identifiers?: Array<AccountUpdateParams.TaxIdentifier>;

  /**
   * Who calculates and remits tax for the account: `whop` (Whop calculates and
   * remits), `self` (Whop calculates; the account collects and remits), or `none`
   * (neither; the account is responsible). `self` requires a `business_address` in a
   * supported country.
   */
  tax_remitted_by?: 'whop' | 'self' | 'none';

  /**
   * The display name of the account.
   */
  title?: string | null;

  /**
   * Whether the account uses its logo as the fallback Open Graph image.
   */
  use_logo_as_opengraph_image_fallback?: boolean;
}

export namespace AccountUpdateParams {
  /**
   * Account business address used to calculate tax. A complete address in a
   * supported country is required when `tax_remitted_by` is `self`.
   */
  export interface BusinessAddress {
    /**
     * City name.
     */
    city?: string | null;

    /**
     * Two-letter ISO 3166-1 country code, for example `US`, `DE`, or `GB`.
     */
    country?: string;

    /**
     * First line of the street address.
     */
    line1?: string;

    /**
     * Second line of the street address.
     */
    line2?: string | null;

    /**
     * Postal or ZIP code.
     */
    postal_code?: string | null;

    /**
     * State, province, or region code, for example `CA`.
     */
    state?: string | null;
  }

  export interface TaxIdentifier {
    /**
     * Tax ID type, for example `eu_vat`, `gb_vat`, or `us_ein`.
     */
    tax_id_type:
      | 'ad_nrt'
      | 'ao_tin'
      | 'ar_cuit'
      | 'al_tin'
      | 'am_tin'
      | 'aw_tin'
      | 'au_abn'
      | 'au_arn'
      | 'eu_vat'
      | 'az_tin'
      | 'bs_tin'
      | 'bh_vat'
      | 'bd_bin'
      | 'bb_tin'
      | 'by_tin'
      | 'bj_ifu'
      | 'bo_tin'
      | 'ba_tin'
      | 'br_cnpj'
      | 'br_cpf'
      | 'bg_uic'
      | 'bf_ifu'
      | 'kh_tin'
      | 'cm_niu'
      | 'ca_bn'
      | 'ca_gst_hst'
      | 'ca_pst_bc'
      | 'ca_pst_mb'
      | 'ca_pst_sk'
      | 'ca_qst'
      | 'cv_nif'
      | 'cl_tin'
      | 'cn_tin'
      | 'co_nit'
      | 'cd_nif'
      | 'cr_tin'
      | 'hr_oib'
      | 'do_rcn'
      | 'ec_ruc'
      | 'eg_tin'
      | 'sv_nit'
      | 'et_tin'
      | 'eu_oss_vat'
      | 'ge_vat'
      | 'gh_tin'
      | 'de_stn'
      | 'gb_vat'
      | 'gn_nif'
      | 'hk_br'
      | 'hu_tin'
      | 'is_vat'
      | 'in_gst'
      | 'id_npwp'
      | 'il_vat'
      | 'jp_cn'
      | 'jp_rn'
      | 'jp_trn'
      | 'kz_bin'
      | 'ke_pin'
      | 'kg_tin'
      | 'la_tin'
      | 'li_uid'
      | 'li_vat'
      | 'my_frp'
      | 'my_itn'
      | 'my_sst'
      | 'mr_nif'
      | 'mx_rfc'
      | 'md_vat'
      | 'me_pib'
      | 'ma_vat'
      | 'np_pan'
      | 'nz_gst'
      | 'ng_tin'
      | 'mk_vat'
      | 'no_vat'
      | 'no_voec'
      | 'om_vat'
      | 'pe_ruc'
      | 'ph_tin'
      | 'ro_tin'
      | 'ru_inn'
      | 'ru_kpp'
      | 'sa_vat'
      | 'sn_ninea'
      | 'rs_pib'
      | 'sg_gst'
      | 'sg_uen'
      | 'si_tin'
      | 'za_vat'
      | 'kr_brn'
      | 'es_cif'
      | 'ch_uid'
      | 'ch_vat'
      | 'tw_vat'
      | 'tj_tin'
      | 'tz_vat'
      | 'th_vat'
      | 'tr_tin'
      | 'ug_tin'
      | 'ua_vat'
      | 'ae_trn'
      | 'us_ein'
      | 'uy_ruc'
      | 'uz_tin'
      | 'uz_vat'
      | 've_rif'
      | 'vn_tin'
      | 'zm_tin'
      | 'zw_tin'
      | 'sr_fin';

    /**
     * Tax ID value, for example `DE123456789`.
     */
    tax_id_value: string;
  }
}

export interface AccountRegisterLlcParams {
  /**
   * Body param: The company to form.
   */
  business_info: AccountRegisterLlcParams.BusinessInfo;

  /**
   * Body param: The company's founders. Exactly one must be marked `is_primary` —
   * the responsible party for the filing.
   */
  founders: Array<AccountRegisterLlcParams.Founder>;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AccountRegisterLlcParams {
  /**
   * The company to form.
   */
  export interface BusinessInfo {
    /**
     * High-level business category, from the Whop business taxonomy. Valid values are
     * listed on
     * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary).
     */
    business_type: string;

    /**
     * Two-letter code of the US state (or `DC`) to form the LLC in.
     */
    formation_state:
      | 'AL'
      | 'AK'
      | 'AZ'
      | 'AR'
      | 'CA'
      | 'CO'
      | 'CT'
      | 'DE'
      | 'DC'
      | 'FL'
      | 'GA'
      | 'HI'
      | 'ID'
      | 'IL'
      | 'IN'
      | 'IA'
      | 'KS'
      | 'KY'
      | 'LA'
      | 'ME'
      | 'MD'
      | 'MA'
      | 'MI'
      | 'MN'
      | 'MS'
      | 'MO'
      | 'MT'
      | 'NE'
      | 'NV'
      | 'NH'
      | 'NJ'
      | 'NM'
      | 'NY'
      | 'NC'
      | 'ND'
      | 'OH'
      | 'OK'
      | 'OR'
      | 'PA'
      | 'RI'
      | 'SC'
      | 'SD'
      | 'TN'
      | 'TX'
      | 'UT'
      | 'VT'
      | 'VA'
      | 'WA'
      | 'WV'
      | 'WI'
      | 'WY';

    /**
     * Industry group, from the Whop business taxonomy. Valid values are listed on
     * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary).
     */
    industry_group: string;

    /**
     * Specific industry vertical, from the Whop business taxonomy. Valid values are
     * listed on
     * [business types and industries glossary](/api-reference/beta/accounts/account#business-types-and-industries-glossary).
     */
    industry_type: string;

    /**
     * Legal name for the new company.
     */
    legal_name: string;

    /**
     * Company mailing address. Required unless `use_registered_agent` is `true`.
     */
    address?: BusinessInfo.Address;

    /**
     * Legal entity ending appended to `legal_name`. Defaults to `LLC`; unrecognized
     * values fall back to `LLC`.
     */
    entity_suffix?: 'LLC' | 'L.L.C' | 'L.L.C.' | 'Limited Liability Company';

    /**
     * Request expedited EIN processing for an additional fee. Available only when no
     * founder supplies an SSN.
     */
    expedite_ein?: boolean;

    /**
     * Business phone number in E.164 format, for example `+12125550100`. Required
     * unless `use_registered_agent` is `true`.
     */
    phone?: string;

    /**
     * Use the registered agent's address as the company address instead of `address`.
     */
    use_registered_agent?: boolean;

    /**
     * Company website URL.
     */
    website?: string;
  }

  export namespace BusinessInfo {
    /**
     * Company mailing address. Required unless `use_registered_agent` is `true`.
     */
    export interface Address {
      city: string;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`.
       */
      country: string;

      /**
       * First line of the street address.
       */
      line1: string;

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * State or region code, for example `CA`.
       */
      state: string;

      /**
       * Second line of the street address.
       */
      line2?: string;
    }
  }

  export interface Founder {
    /**
     * Founder's personal address.
     */
    address: Founder.Address;

    email: string;

    first_name: string;

    /**
     * Marks the responsible party for the filing. Exactly one founder must be primary.
     */
    is_primary: boolean;

    last_name: string;

    /**
     * The founder's ownership share: greater than `0`, at most `100`. Shares across
     * founders must total `100`.
     */
    ownership_percentage: number;

    /**
     * Phone number in E.164 format, for example `+12125550100`.
     */
    phone: string;

    /**
     * Formatted as `YYYY-MM-DD`.
     */
    date_of_birth?: string;

    /**
     * The founder's US Social Security Number. Leave empty if the founder is not a US
     * resident. Non-US founders can request expedited EIN processing via the
     * `expedite_ein` option in `business_info`.
     */
    ssn?: string;
  }

  export namespace Founder {
    /**
     * Founder's personal address.
     */
    export interface Address {
      city: string;

      /**
       * Two-letter ISO 3166-1 country code, for example `US`.
       */
      country: string;

      /**
       * First line of the street address.
       */
      line1: string;

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * State or region code, for example `CA`.
       */
      state: string;

      /**
       * Second line of the street address.
       */
      line2?: string;
    }
  }
}

Accounts.Preferences = Preferences;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountSocialLink as AccountSocialLink,
    type AccountRecommendActionsResponse as AccountRecommendActionsResponse,
    type AccountRegisterLlcResponse as AccountRegisterLlcResponse,
    type AccountsCursorPage as AccountsCursorPage,
    type AccountListParams as AccountListParams,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountRegisterLlcParams as AccountRegisterLlcParams,
  };

  export {
    Preferences as Preferences,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
