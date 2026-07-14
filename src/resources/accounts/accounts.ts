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
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/accounts', { body, ...options });
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
   * High-level business category for the account.
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
   * Account industry group.
   */
  industry_group: string | null;

  /**
   * Specific industry vertical for the account.
   */
  industry_type: string | null;

  /**
   * Prefix used for account invoices.
   */
  invoice_prefix: string | null;

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
   * The email address of the account owner. Required for business account API key
   * requests.
   */
  email?: string;

  /**
   * Arbitrary key/value metadata to store on the account.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The display name of the account. Defaults to `metadata.external_id` or the
   * owner's email when omitted.
   */
  title?: string;
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
   * High-level business category for the account.
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
   * Account industry group.
   */
  industry_group?: string | null;

  /**
   * Specific industry vertical for the account.
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

Accounts.Preferences = Preferences;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountSocialLink as AccountSocialLink,
    type AccountRecommendActionsResponse as AccountRecommendActionsResponse,
    type AccountsCursorPage as AccountsCursorPage,
    type AccountListParams as AccountListParams,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
  };

  export {
    Preferences as Preferences,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
