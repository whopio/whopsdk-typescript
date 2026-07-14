// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Plans extends APIResource {
  /**
   * Returns a paginated list of plans belonging to a company, with optional
   * filtering by visibility, type, release method, and product.
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
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.post('/plans', { body, ...options });
  }

  /**
   * Retrieves the details of an existing plan.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.get(path`/plans/${id}`, options);
  }

  /**
   * Update a plan's pricing, billing interval, visibility, stock, and other
   * settings.
   */
  update(id: string, body: PlanUpdateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.patch(path`/plans/${id}`, { body, ...options });
  }

  /**
   * Permanently delete a plan from a product. Existing memberships on this plan will
   * not be affected.
   */
  delete(id: string, options?: RequestOptions): APIPromise<PlanDeleteResponse> {
    return this._client.delete(path`/plans/${id}`, options);
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
   * The ID of the plan, which will look like plan\_******\*******
   */
  id: string;

  /**
   * Whether this plan accepts local currency payments via adaptive pricing
   */
  adaptive_pricing_enabled: boolean;

  /**
   * The number of days between recurring charges. Null for one-time plans
   */
  billing_period: number | null;

  /**
   * The company that sells this plan, an object with an id and title. Null for
   * standalone invoice plans
   */
  company: unknown | null;

  /**
   * When the plan was created, as an ISO 8601 timestamp
   */
  created_at: string;

  /**
   * The three-letter ISO currency code all prices on this plan are denominated in
   */
  currency: string;

  /**
   * A text description of the plan visible to customers
   */
  description: string | null;

  /**
   * The number of days until the membership expires, for expiration-based plans
   */
  expiration_days: number | null;

  /**
   * The initial purchase price in the plan's currency
   */
  initial_price: number;

  /**
   * Private notes visible only to authorized team members
   */
  internal_notes: string | null;

  /**
   * The invoice this plan was generated for, an object with an id. Null unless the
   * plan was created for an invoice
   */
  invoice: unknown | null;

  /**
   * The number of active memberships on this plan. Only visible to authorized team
   * members
   */
  member_count: number | null;

  /**
   * Custom key-value pairs stored on the plan
   */
  metadata: unknown | null;

  /**
   * The explicit payment method configuration for the plan, an object with enabled,
   * disabled and include_platform_defaults. Null if the plan uses default settings
   */
  payment_method_configuration: unknown | null;

  /**
   * The billing model for this plan: 'renewal' for recurring subscriptions or
   * 'one_time' for single payments
   */
  plan_type: string;

  /**
   * The product this plan belongs to, an object with an id and title. Null for
   * standalone plans
   */
  product: unknown | null;

  /**
   * The full URL where customers can purchase this plan directly
   */
  purchase_url: string;

  /**
   * The method used to sell this plan, e.g. 'buy_now' or 'waitlist'
   */
  release_method: string;

  /**
   * The recurring price charged every billing period in the plan's currency
   */
  renewal_price: number;

  /**
   * The number of installment payments required before the subscription pauses
   */
  split_pay_required_payments: number | null;

  /**
   * The number of units available for purchase. Only visible to authorized team
   * members
   */
  stock: number | null;

  /**
   * The 3D Secure behavior for this plan. Null means the plan inherits the account
   * default
   */
  three_ds_level: string | null;

  /**
   * The display name of the plan shown to customers
   */
  title: string | null;

  /**
   * The number of free trial days before the first charge on a recurring plan
   */
  trial_period_days: number | null;

  /**
   * Whether the plan has unlimited stock
   */
  unlimited_stock: boolean;

  /**
   * When the plan was last updated, as an ISO 8601 timestamp
   */
  updated_at: string;

  /**
   * Whether the plan is visible to customers or hidden from public view
   */
  visibility: string;
}

/**
 * Always true on success.
 */
export type PlanDeleteResponse = boolean;

export interface PlanListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list plans for.
   */
  company_id: string;

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
  order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expires_at';

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
   * The unique identifier of the product to attach this plan to.
   */
  product_id: string;

  /**
   * Whether this plan accepts local currency payments via adaptive pricing.
   */
  adaptive_pricing_enabled?: boolean | null;

  /**
   * The number of days between recurring charges. For example, 30 for monthly or 365
   * for yearly.
   */
  billing_period?: number | null;

  /**
   * Checkout styling overrides for this plan.
   */
  checkout_styling?: unknown | null;

  /**
   * The unique identifier of the company to create this plan for. Defaults to the
   * caller's company.
   */
  company_id?: string;

  /**
   * The three-letter ISO currency code for the plan's pricing. Defaults to USD.
   */
  currency?: string;

  /**
   * An array of custom field definitions to collect from customers at checkout.
   * Omitting this field clears existing custom fields.
   */
  custom_fields?: Array<PlanCreateParams.CustomField> | null;

  /**
   * A text description of the plan displayed to customers on the product page.
   */
  description?: string | null;

  /**
   * The number of days until the membership expires and access is revoked.
   */
  expiration_days?: number | null;

  /**
   * An image displayed on the product page to represent this plan.
   */
  image?: PlanCreateParams.Image | null;

  /**
   * The amount charged on the first purchase, in the plan's currency (e.g., 10.43
   * for $10.43).
   */
  initial_price?: number | null;

  /**
   * Private notes visible only to the business owner. Not shown to customers.
   */
  internal_notes?: string | null;

  /**
   * Whether this plan uses legacy payment method controls.
   */
  legacy_payment_method_controls?: boolean | null;

  /**
   * Custom key-value pairs to store on the plan. Included in webhook payloads for
   * payment and membership events.
   */
  metadata?: unknown | null;

  /**
   * Override the default tax classification for this specific plan.
   */
  override_tax_type?: string;

  /**
   * Explicit payment method configuration for the plan. When not provided, the
   * company's defaults apply.
   */
  payment_method_configuration?: PlanCreateParams.PaymentMethodConfiguration | null;

  /**
   * The billing type of the plan, such as one_time or renewal.
   */
  plan_type?: string;

  /**
   * The method used to sell this plan (e.g., buy_now, waitlist).
   */
  release_method?: string;

  /**
   * The amount charged each billing period for recurring plans, in the plan's
   * currency.
   */
  renewal_price?: number | null;

  /**
   * The number of installment payments required before the subscription pauses.
   */
  split_pay_required_payments?: number | null;

  /**
   * The maximum number of units available for purchase. Ignored when unlimited_stock
   * is true.
   */
  stock?: number | null;

  /**
   * The 3D Secure behavior for this plan. Send null to inherit the account default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless';

  /**
   * The display name of the plan shown to customers on the product page.
   */
  title?: string | null;

  /**
   * The number of free trial days before the first charge on a recurring plan.
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
   * company's defaults apply.
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
   * The number of days between recurring charges. For example, 30 for monthly or 365
   * for yearly.
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
   * The number of days until the membership expires and access is revoked.
   */
  expiration_days?: number | null;

  /**
   * An image displayed on the product page to represent this plan.
   */
  image?: PlanUpdateParams.Image | null;

  /**
   * The amount charged on the first purchase, in the plan's currency (e.g., 10.43
   * for $10.43).
   */
  initial_price?: number | null;

  /**
   * Private notes visible only to the business owner. Not shown to customers.
   */
  internal_notes?: string | null;

  /**
   * Whether this plan uses legacy payment method controls.
   */
  legacy_payment_method_controls?: boolean | null;

  /**
   * Custom key-value pairs to store on the plan. Included in webhook payloads for
   * payment and membership events.
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
   * company's defaults apply.
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
   * The 3D Secure behavior for this plan. Send null to inherit the account default.
   */
  three_ds_level?: 'mandate_challenge' | 'frictionless';

  /**
   * The display name of the plan shown to customers on the product page.
   */
  title?: string | null;

  /**
   * The number of free trial days before the first charge on a recurring plan.
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
   * company's defaults apply.
   */
  export interface PaymentMethodConfiguration {
    disabled?: Array<string>;

    enabled?: Array<string>;

    include_platform_defaults?: boolean;
  }
}

export declare namespace Plans {
  export {
    type CheckoutFont as CheckoutFont,
    type CheckoutShape as CheckoutShape,
    type PlanListResponse as PlanListResponse,
    type PlanDeleteResponse as PlanDeleteResponse,
    type PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    type PlanListParams as PlanListParams,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
  };
}
