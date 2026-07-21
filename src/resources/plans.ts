// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Plan defines how customers buy a product. It controls pricing, billing cadence, availability, tax behavior, checkout fields, and purchase visibility.
 *
 * Use the Plans API to create plans for products, list existing plans, retrieve or update plan configuration, calculate tax for checkout, and delete plans that should no longer be offered.
 */
export class Plans extends APIResource {
  /**
   * Returns a paginated list of plans belonging to an account, with optional
   * filtering by visibility, type, release method, and product.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const planListResponse of client.plans.list({
   *   account_id: 'account_id',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PlanListParams,
    options?: RequestOptions,
  ): PagePromise<PlanListResponsesCursorPage, PlanListResponse> {
    return this._client.getAPIList('/plans', CursorPage<PlanListResponse>, { query, ...options });
  }

  /**
   * Create a new pricing plan for a product. The plan defines the billing interval,
   * price, and availability for customers.
   *
   * @example
   * ```ts
   * const plan = await client.plans.create();
   * ```
   */
  create(params: PlanCreateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/plans', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the details of an existing plan.
   *
   * @example
   * ```ts
   * const plan = await client.plans.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.get(path`/plans/${id}`, options);
  }

  /**
   * Update a plan's pricing, billing interval, visibility, stock, and other
   * settings.
   *
   * @example
   * ```ts
   * const plan = await client.plans.update('id');
   * ```
   */
  update(id: string, body: PlanUpdateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.patch(path`/plans/${id}`, { body, ...options });
  }

  /**
   * Permanently delete a plan from a product. Existing memberships on this plan will
   * not be affected.
   *
   * @example
   * ```ts
   * const plan = await client.plans.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PlanDeleteResponse> {
    return this._client.delete(path`/plans/${id}`, options);
  }

  /**
   * Previews tax for a plan before checkout, based on the buyer's location.
   *
   * @example
   * ```ts
   * const response = await client.plans.calculateTax('id');
   * ```
   */
  calculateTax(
    id: string,
    params: PlanCalculateTaxParams,
    options?: RequestOptions,
  ): APIPromise<PlanCalculateTaxResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/plans/${id}/calculate_tax`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type PlanListResponsesCursorPage = CursorPage<PlanListResponse>;

/**
 * The different font families available for checkout pages.
 */
export type CheckoutFont = 'system' | 'roboto' | 'open_sans';

/**
 * The different border-radius styles available for checkout pages.
 */
export type CheckoutShape = 'rounded' | 'pill' | 'rectangular';

export interface PlanListResponse {
  /**
   * Plan ID, prefixed `plan_`.
   */
  id: string;

  /**
   * Account that sells this plan; `null` for standalone invoice plans.
   */
  account: unknown | null;

  /**
   * Whether this plan accepts local currency payments via adaptive pricing.
   */
  adaptive_pricing_enabled: boolean;

  /**
   * Recurring billing interval in days, such as 30 for monthly or 365 for annual.
   * `null` for one-time plans.
   */
  billing_period: number | null;

  /**
   * When the plan was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code for this plan's prices.
   */
  currency: string;

  /**
   * Customer-visible plan description.
   */
  description: string | null;

  /**
   * Access duration in days for expiration-based plans.
   */
  expiration_days: number | null;

  /**
   * Initial purchase price in plan currency.
   */
  initial_price: number;

  /**
   * Private notes visible only to authorized team members.
   */
  internal_notes: string | null;

  /**
   * Invoice this plan was generated for; `null` unless created for an invoice.
   */
  invoice: unknown | null;

  /**
   * Active memberships through this plan, when visible to the requester.
   */
  member_count: number | null;

  /**
   * Custom key-value pairs stored on the plan.
   */
  metadata: unknown | null;

  /**
   * Payment method configuration (`enabled`, `disabled`,
   * `include_platform_defaults`); `null` when plan uses default settings.
   */
  payment_method_configuration: unknown | null;

  /**
   * Billing model for this plan: `renewal` (recurring) or `one_time` (single
   * payment).
   */
  plan_type: string;

  /**
   * Product this plan belongs to; `null` for standalone plans.
   */
  product: unknown | null;

  /**
   * URL where customers can purchase this plan directly.
   */
  purchase_url: string;

  /**
   * Sales method for this plan, such as `buy_now` or `waitlist`.
   */
  release_method: string;

  /**
   * Recurring price charged every billing period.
   */
  renewal_price: number;

  /**
   * Installment payments required before the subscription pauses.
   */
  split_pay_required_payments: number | null;

  /**
   * Units available for purchase, when visible to the requester.
   */
  stock: number | null;

  /**
   * 3D Secure behavior for this plan; `null` inherits account default.
   */
  three_ds_level: string | null;

  /**
   * Plan display name shown to customers.
   */
  title: string | null;

  /**
   * Free trial days before the first renewal charge. `null` if no trial is
   * configured or the user has already used a trial for this plan.
   */
  trial_period_days: number | null;

  /**
   * Whether the plan has unlimited stock.
   */
  unlimited_stock: boolean;

  /**
   * When the plan was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Whether the plan is visible to customers or hidden from public view.
   */
  visibility: string;
}

/**
 * Always true on success.
 */
export type PlanDeleteResponse = boolean;

export interface PlanCalculateTaxResponse {
  /**
   * Three-letter ISO 4217 currency code for the returned amounts.
   */
  currency: string;

  /**
   * Whether Whop calculated tax for this preview. `not_calculated` means no tax
   * could be determined, so `tax_amount` is 0 and `total` equals `subtotal`.
   */
  status: 'calculated' | 'not_calculated';

  /**
   * Plan price in the currency's smallest unit, for example cents. For exclusive
   * tax, this is the pre-tax amount; for inclusive tax, it already includes tax and
   * equals the total.
   */
  subtotal: number;

  /**
   * Calculated tax amount in the currency's smallest unit. For exclusive tax, this
   * is added on top of the subtotal; for inclusive tax, it is the portion of the
   * subtotal that is tax.
   */
  tax_amount: number;

  /**
   * Whether tax is added on top of the plan price or already included in it for this
   * buyer's location.
   */
  tax_behavior: 'exclusive' | 'inclusive';

  /**
   * Amount the buyer would pay in the currency's smallest unit.
   */
  total: number;
}

export interface PlanListParams extends CursorPageParams {
  /**
   * The unique identifier of the account to list plans for.
   */
  account_id: string;

  /**
   * A cursor; returns plans before this position.
   */
  before?: string;

  /**
   * Only return plans created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return plans created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction for results. Defaults to descending.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of plans to return (default and max 100).
   */
  first?: number;

  /**
   * The number of plans to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort results by. Defaults to created_at.
   */
  order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expiration_days';

  /**
   * Filter to only plans matching these billing types.
   */
  plan_types?: Array<string>;

  /**
   * Filter to only plans belonging to these product identifiers.
   */
  product_ids?: Array<string>;

  /**
   * Filter to only plans matching these release methods.
   */
  release_methods?: Array<string>;

  /**
   * Filter to only plans matching these visibility states.
   */
  visibilities?: Array<string>;
}

export interface PlanCreateParams {
  /**
   * Body param: The unique identifier of the account to create this plan for.
   * Defaults to the caller's account.
   */
  account_id?: string;

  /**
   * Body param: Whether this plan accepts local currency payments via adaptive
   * pricing.
   */
  adaptive_pricing_enabled?: boolean | null;

  /**
   * Body param: Recurring billing interval in days, such as 30 for monthly or 365
   * for annual.
   */
  billing_period?: number | null;

  /**
   * Body param: Checkout styling overrides for this plan.
   */
  checkout_styling?: unknown | null;

  /**
   * Body param: The three-letter ISO currency code for the plan's pricing. Defaults
   * to USD.
   */
  currency?: string;

  /**
   * Body param: An array of custom field definitions to collect from customers at
   * checkout. Omitting this field clears existing custom fields.
   */
  custom_fields?: Array<PlanCreateParams.CustomField> | null;

  /**
   * Body param: A text description of the plan displayed to customers on the product
   * page.
   */
  description?: string | null;

  /**
   * Body param: Access duration in days before the membership expires.
   */
  expiration_days?: number | null;

  /**
   * Body param: An image displayed on the product page to represent this plan.
   */
  image?: PlanCreateParams.Image | null;

  /**
   * Body param: Initial amount charged in the plan's currency, e.g. 10.43 for
   * $10.43.
   */
  initial_price?: number | null;

  /**
   * Body param: Private notes visible only to the account owner. Not shown to
   * customers.
   */
  internal_notes?: string | null;

  /**
   * Body param: Whether this plan uses legacy payment method controls.
   */
  legacy_payment_method_controls?: boolean | null;

  /**
   * Body param: Custom key-value pairs to store on the plan. Included in webhook
   * payloads for payment and membership events. Max 50 keys, 100 chars per key, 500
   * chars per string value.
   */
  metadata?: unknown | null;

  /**
   * Body param: Override the default tax classification for this specific plan.
   */
  override_tax_type?: string;

  /**
   * Body param: Explicit payment method configuration for the plan. When not
   * provided, the account's defaults apply.
   */
  payment_method_configuration?: PlanCreateParams.PaymentMethodConfiguration | null;

  /**
   * Body param: Plan billing type, such as `one_time` or `renewal`.
   */
  plan_type?: string;

  /**
   * Body param: The unique identifier of the product to attach this plan to.
   */
  product_id?: string;

  /**
   * Body param: Sales method for this plan, such as `buy_now` or `waitlist`.
   */
  release_method?: string;

  /**
   * Body param: The amount charged each billing period for recurring plans, in the
   * plan's currency.
   */
  renewal_price?: number | null;

  /**
   * Body param: Installment payments required before the subscription pauses.
   */
  split_pay_required_payments?: number | null;

  /**
   * Body param: The maximum number of units available for purchase. Ignored when
   * unlimited_stock is true.
   */
  stock?: number | null;

  /**
   * Body param: 3D Secure behavior for this plan. Send `null` to inherit the account
   * default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless';

  /**
   * Body param: The display name of the plan shown to customers on the product page.
   */
  title?: string | null;

  /**
   * Body param: Free trial duration before the first recurring charge.
   */
  trial_period_days?: number | null;

  /**
   * Body param: Whether the plan has unlimited stock. When true, the stock field is
   * ignored.
   */
  unlimited_stock?: boolean | null;

  /**
   * Body param: Whether the plan is visible to customers or hidden from public view.
   */
  visibility?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace PlanCreateParams {
  export interface CustomField {
    /**
     * The ID of the custom field (if being updated).
     */
    id?: string;

    /**
     * The type of the custom field.
     */
    field_type?: 'text';

    /**
     * The name of the custom field.
     */
    name?: string;

    /**
     * The order of the field.
     */
    order?: number;

    /**
     * An example response displayed in the input field.
     */
    placeholder?: string | null;

    /**
     * Whether or not the field is required.
     */
    required?: boolean;
  }

  /**
   * An image displayed on the product page to represent this plan.
   */
  export interface Image {
    id?: string;

    direct_upload_id?: string;
  }

  /**
   * Explicit payment method configuration for the plan. When not provided, the
   * account's defaults apply.
   */
  export interface PaymentMethodConfiguration {
    disabled?: Array<string>;

    enabled?: Array<string>;

    include_platform_defaults?: boolean;
  }
}

export interface PlanUpdateParams {
  /**
   * Whether this plan accepts local currency payments via adaptive pricing.
   */
  adaptive_pricing_enabled?: boolean | null;

  /**
   * Recurring billing interval in days, such as 30 for monthly or 365 for annual.
   */
  billing_period?: number | null;

  /**
   * Checkout styling overrides for this plan.
   */
  checkout_styling?: unknown | null;

  /**
   * The three-letter ISO currency code for the plan's pricing. Defaults to USD.
   */
  currency?: string;

  /**
   * An array of custom field definitions to collect from customers at checkout.
   * Omitting this field clears existing custom fields.
   */
  custom_fields?: Array<PlanUpdateParams.CustomField> | null;

  /**
   * A text description of the plan displayed to customers on the product page.
   */
  description?: string | null;

  /**
   * Access duration in days before the membership expires.
   */
  expiration_days?: number | null;

  /**
   * An image displayed on the product page to represent this plan.
   */
  image?: PlanUpdateParams.Image | null;

  /**
   * Initial amount charged in the plan's currency, e.g. 10.43 for $10.43.
   */
  initial_price?: number | null;

  /**
   * Private notes visible only to the account owner. Not shown to customers.
   */
  internal_notes?: string | null;

  /**
   * Whether this plan uses legacy payment method controls.
   */
  legacy_payment_method_controls?: boolean | null;

  /**
   * Custom key-value pairs to store on the plan. Included in webhook payloads for
   * payment and membership events. Max 50 keys, 100 chars per key, 500 chars per
   * string value.
   */
  metadata?: unknown | null;

  /**
   * Whether to offer a retention discount when a customer attempts to cancel.
   */
  offer_cancel_discount?: boolean | null;

  /**
   * Override the default tax classification for this specific plan.
   */
  override_tax_type?: string;

  /**
   * Explicit payment method configuration for the plan. When not provided, the
   * account's defaults apply.
   */
  payment_method_configuration?: PlanUpdateParams.PaymentMethodConfiguration | null;

  /**
   * The amount charged each billing period for recurring plans, in the plan's
   * currency.
   */
  renewal_price?: number | null;

  /**
   * The maximum number of units available for purchase. Ignored when unlimited_stock
   * is true.
   */
  stock?: number | null;

  /**
   * A comparison price displayed with a strikethrough for the initial price.
   */
  strike_through_initial_price?: number | null;

  /**
   * A comparison price displayed with a strikethrough for the renewal price.
   */
  strike_through_renewal_price?: number | null;

  /**
   * 3D Secure behavior for this plan. Send `null` to inherit the account default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless';

  /**
   * The display name of the plan shown to customers on the product page.
   */
  title?: string | null;

  /**
   * Free trial duration before the first recurring charge.
   */
  trial_period_days?: number | null;

  /**
   * Whether the plan has unlimited stock. When true, the stock field is ignored.
   */
  unlimited_stock?: boolean | null;

  /**
   * Whether the plan is visible to customers or hidden from public view.
   */
  visibility?: string;
}

export namespace PlanUpdateParams {
  export interface CustomField {
    /**
     * The ID of the custom field (if being updated).
     */
    id?: string;

    /**
     * The type of the custom field.
     */
    field_type?: 'text';

    /**
     * The name of the custom field.
     */
    name?: string;

    /**
     * The order of the field.
     */
    order?: number;

    /**
     * An example response displayed in the input field.
     */
    placeholder?: string | null;

    /**
     * Whether or not the field is required.
     */
    required?: boolean;
  }

  /**
   * An image displayed on the product page to represent this plan.
   */
  export interface Image {
    id?: string;

    direct_upload_id?: string;
  }

  /**
   * Explicit payment method configuration for the plan. When not provided, the
   * account's defaults apply.
   */
  export interface PaymentMethodConfiguration {
    disabled?: Array<string>;

    enabled?: Array<string>;

    include_platform_defaults?: boolean;
  }
}

export interface PlanCalculateTaxParams {
  /**
   * Body param: Buyer billing address used for tax calculation. Provide either
   * `address.country` or `ip_address`; include state and postal code when available
   * for more accurate results.
   */
  address?: PlanCalculateTaxParams.Address | null;

  /**
   * Body param: Buyer IP address used to infer location when no billing address is
   * provided.
   */
  ip_address?: string;

  /**
   * Body param: Optional buyer tax ID for B2B exemptions. At most one entry is
   * supported.
   */
  tax_ids?: Array<PlanCalculateTaxParams.TaxID> | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace PlanCalculateTaxParams {
  /**
   * Buyer billing address used for tax calculation. Provide either `address.country`
   * or `ip_address`; include state and postal code when available for more accurate
   * results.
   */
  export interface Address {
    /**
     * ISO 3166-1 alpha-2 country code, such as `US`, `DE`, or `GB`.
     */
    country: string;

    /**
     * City name.
     */
    city?: string | null;

    /**
     * First line of the street address.
     */
    line1?: string | null;

    /**
     * Second line of the street address.
     */
    line2?: string | null;

    /**
     * Postal or ZIP code.
     */
    postal_code?: string | null;

    /**
     * State, province, or region code, such as `CA`.
     */
    state?: string | null;
  }

  export interface TaxID {
    /**
     * Tax ID type, such as `eu_vat` for an EU VAT number.
     */
    type?:
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
    value?: string;
  }
}

export declare namespace Plans {
  export {
    type CheckoutFont as CheckoutFont,
    type CheckoutShape as CheckoutShape,
    type PlanListResponse as PlanListResponse,
    type PlanDeleteResponse as PlanDeleteResponse,
    type PlanCalculateTaxResponse as PlanCalculateTaxResponse,
    type PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    type PlanListParams as PlanListParams,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanCalculateTaxParams as PlanCalculateTaxParams,
  };
}
