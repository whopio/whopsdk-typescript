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
   * Create a new pricing plan for a product. The plan defines the billing interval,
   * price, and availability for customers.
   *
   * @example
   * ```ts
   * const plan = await client.plans.create();
   * ```
   */
  create(params: PlanCreateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/plans', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
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
  retrieve(
    id: string,
    params: PlanRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Plan> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/plans/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
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
  update(id: string, params: PlanUpdateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/plans/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of plans. Omit `account_id` and pass `product_ids` to
   * list a product's public buyable plans.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const planListResponse of client.plans.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanListResponsesCursorPage, PlanListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/plans', CursorPage<PlanListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
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
  delete(
    id: string,
    params: PlanDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanDeleteResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.delete(path`/plans/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
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
  account: PlanListResponse.Account | null;

  /**
   * Whether adaptive pricing is enabled for this plan. Raw setting — does not check
   * processor compatibility or feature flags.
   */
  adaptive_pricing_enabled: boolean;

  /**
   * Number of days between recurring charges, such as 30 for monthly or 365 for
   * annual. `null` for one-time plans.
   */
  billing_period: number | null;

  /**
   * Billing intervals the cancellation discount applies to (`0` forever, `1` first
   * payment, or a month count). `null` when none is offered or the actor lacks the
   * `plan:basic:read` scope.
   */
  cancel_discount_intervals: number | null;

  /**
   * Cancellation discount as a whole-number percentage. `null` when none is offered
   * or the actor lacks the `plan:basic:read` scope.
   */
  cancel_discount_percentage: number | null;

  /**
   * Plan-level checkout styling (`background_color`, `button_color`, `font_family`,
   * `border_style`); `null` inherits the account default.
   */
  checkout_styling: unknown | null;

  /**
   * When the plan was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code for this plan's prices.
   */
  currency: string;

  custom_fields: Array<PlanListResponse.CustomField>;

  /**
   * Customer-visible plan description. Maximum 1000 characters. `null` if no
   * description is set.
   */
  description: string | null;

  /**
   * Access duration in days for expiration-based plans, such as 365 for a one-year
   * pass. `null` for plans without an expiration.
   */
  expiration_days: number | null;

  /**
   * Human-readable price for display (currency + interval), e.g. "$10 / month".
   */
  formatted_price: string;

  /**
   * Pricing-tier image (`url`, `blurhash`) shown on the product page; `null` when no
   * image is set.
   */
  image: unknown | null;

  /**
   * Initial purchase price in plan currency.
   */
  initial_price: number;

  /**
   * Private notes not shown to customers. `null` unless the actor has the
   * `plan:basic:read` scope on the plan's account.
   */
  internal_notes: string | null;

  /**
   * Invoice this plan was generated for; `null` unless created for an invoice.
   */
  invoice: unknown | null;

  /**
   * Active memberships through this plan. `null` unless the actor has the
   * `plan:basic:read` scope on the plan's account.
   */
  member_count: number | null;

  /**
   * Custom key-value pairs stored on the plan. Included in webhook payloads for
   * payment and membership events. Maximum 50 keys, 100 characters per key, 500
   * characters per value. The reserved keys `custom_cta` and `custom_cta_url`, when
   * set, override the product's checkout call to action for this plan.
   */
  metadata: unknown | null;

  /**
   * Whether a cancellation discount is offered. `null` unless the actor has the
   * `plan:basic:read` scope on the plan's account.
   */
  offer_cancel_discount: boolean | null;

  /**
   * Payment method configuration (`enabled`, `disabled`,
   * `include_platform_defaults`); `null` when plan uses default settings.
   */
  payment_method_configuration: unknown | null;

  /**
   * Billing model for this plan.
   */
  plan_type: 'renewal' | 'one_time';

  /**
   * Product this plan belongs to; `null` for standalone plans.
   */
  product: unknown | null;

  /**
   * URL where customers can purchase this plan directly.
   */
  purchase_url: string;

  /**
   * Sales method for this plan.
   */
  release_method: 'buy_now' | 'waitlist';

  /**
   * Recurring price charged every billing period.
   */
  renewal_price: number;

  /**
   * Installment payments required before the subscription pauses. Must be greater
   * than 1. `null` if split pay is not configured.
   */
  split_pay_required_payments: number | null;

  /**
   * Units available for purchase. `null` unless the actor has the `plan:basic:read`
   * scope on the plan's account.
   */
  stock: number | null;

  /**
   * Original initial price shown with a strikethrough, in the plan's currency.
   * `null` when no strikethrough is set.
   */
  strike_through_initial_price: number | null;

  /**
   * Original renewal price shown with a strikethrough, in the plan's currency.
   * `null` when no strikethrough is set.
   */
  strike_through_renewal_price: number | null;

  /**
   * 3D Secure behavior for this plan; `null` inherits the account default.
   */
  three_ds_level: 'mandate_challenge' | 'frictionless' | null;

  /**
   * Plan display name shown to customers. Maximum 30 characters. `null` if no title
   * has been set.
   */
  title: string | null;

  /**
   * Free trial days before the first renewal charge. `null` if no trial is
   * configured or the user has already used a trial for this plan.
   */
  trial_period_days: number | null;

  /**
   * Whether the plan has unlimited stock. When `true`, the `stock` field is ignored;
   * waitlist plans always report `true`.
   */
  unlimited_stock: boolean;

  /**
   * When the plan was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Controls where this plan can be seen. When `hidden`, the plan is reachable only
   * by its direct link.
   */
  visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
}

export namespace PlanListResponse {
  /**
   * Account that sells this plan; `null` for standalone invoice plans.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Custom input fields collected on the checkout form.
   */
  export interface CustomField {
    /**
     * Custom field ID, prefixed `field_`.
     */
    id: string;

    /**
     * Custom field input type.
     */
    field_type: 'text';

    /**
     * Field label shown to customer at checkout.
     */
    name: string;

    /**
     * Field position on checkout form.
     */
    order: number;

    /**
     * Placeholder text shown in the empty field. `null` if none is set.
     */
    placeholder: string | null;

    /**
     * Whether the customer must complete this field to check out.
     */
    required: boolean;
  }
}

export interface PlanDeleteResponse {
  /**
   * ID of the deleted plan.
   */
  id: string;

  /**
   * Always true.
   */
  deleted: boolean;
}

export interface PlanCreateParams {
  /**
   * Body param: The unique identifier of the account to create this plan for.
   * Required when authenticating as a user; an account API key supplies its own
   * account.
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
   * Body param: Custom key-value pairs to store on the plan. Included in webhook
   * payloads for payment and membership events. Max 50 keys, 100 chars per key, 500
   * chars per string value. The reserved keys `custom_cta` (a checkout
   * call-to-action button label — one of the product custom CTA values, e.g.
   * `subscribe`, `get_offer`) and `custom_cta_url` (a URL the button links to; web
   * or `tel:`) override the product's call to action for this plan and are validated
   * on save.
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
   * Body param: Sales method for this plan.
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
  three_ds_level?: 'mandate_challenge' | 'frictionless' | null;

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
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

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

export interface PlanRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PlanUpdateParams {
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
   * Body param: How many renewals the retention discount applies to. Required when
   * `offer_cancel_discount` is true.
   */
  cancel_discount_intervals?: number | null;

  /**
   * Body param: Percentage taken off each discounted renewal. Required when
   * `offer_cancel_discount` is true.
   */
  cancel_discount_percentage?: number | null;

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
  custom_fields?: Array<PlanUpdateParams.CustomField> | null;

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
  image?: PlanUpdateParams.Image | null;

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
   * Body param: Custom key-value pairs to store on the plan. Included in webhook
   * payloads for payment and membership events. Max 50 keys, 100 chars per key, 500
   * chars per string value. The reserved keys `custom_cta` (a checkout
   * call-to-action button label — one of the product custom CTA values, e.g.
   * `subscribe`, `get_offer`) and `custom_cta_url` (a URL the button links to; web
   * or `tel:`) override the product's call to action for this plan and are validated
   * on save.
   */
  metadata?: unknown | null;

  /**
   * Body param: Whether to offer a retention discount when a customer attempts to
   * cancel.
   */
  offer_cancel_discount?: boolean | null;

  /**
   * Body param: Override the default tax classification for this specific plan.
   */
  override_tax_type?: string;

  /**
   * Body param: Explicit payment method configuration for the plan. When not
   * provided, the account's defaults apply.
   */
  payment_method_configuration?: PlanUpdateParams.PaymentMethodConfiguration | null;

  /**
   * Body param: Sales method for this plan.
   */
  release_method?: string;

  /**
   * Body param: The amount charged each billing period for recurring plans, in the
   * plan's currency.
   */
  renewal_price?: number | null;

  /**
   * Body param: The maximum number of units available for purchase. Ignored when
   * unlimited_stock is true.
   */
  stock?: number | null;

  /**
   * Body param: A comparison price displayed with a strikethrough for the initial
   * price.
   */
  strike_through_initial_price?: number | null;

  /**
   * Body param: A comparison price displayed with a strikethrough for the renewal
   * price.
   */
  strike_through_renewal_price?: number | null;

  /**
   * Body param: 3D Secure behavior for this plan. Send `null` to inherit the account
   * default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless' | null;

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
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
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

export interface PlanListParams extends CursorPageParams {
  /**
   * Query param: The unique identifier of the account to list plans for. Required
   * unless `product_ids` is provided for a public product-plan read.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns plans before this position.
   */
  before?: string;

  /**
   * Query param: Only return plans created after this timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only return plans created before this timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction for results. Defaults to descending.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of plans to return (default and max 100).
   */
  first?: number;

  /**
   * Query param: The number of plans to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort results by. Defaults to created_at.
   */
  order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expiration_days';

  /**
   * Query param: Filter to only plans matching these billing types.
   */
  plan_types?: Array<string>;

  /**
   * Query param: Filter to only plans belonging to these product identifiers. When
   * `account_id` is omitted, this is required and the response is publicly readable:
   * only visible, non-invoice plans are returned.
   */
  product_ids?: Array<string>;

  /**
   * Query param: Filter to only plans matching these release methods.
   */
  release_methods?: Array<string>;

  /**
   * Query param: Filter to only plans matching these visibility states.
   */
  visibilities?: Array<string>;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface PlanDeleteParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Plans {
  export {
    type CheckoutFont as CheckoutFont,
    type CheckoutShape as CheckoutShape,
    type PlanListResponse as PlanListResponse,
    type PlanDeleteResponse as PlanDeleteResponse,
    type PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanDeleteParams as PlanDeleteParams,
  };
}
