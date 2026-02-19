// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Plans extends APIResource {
  /**
   * Create a new pricing plan for a product. The plan defines the billing interval,
   * price, and availability for customers.
   *
   * Required permissions:
   *
   * - `plan:create`
   * - `access_pass:basic:read`
   * - `plan:basic:read`
   *
   * @example
   * ```ts
   * const plan = await client.plans.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   product_id: 'prod_xxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: PlanCreateParams, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.post('/plans', { body, ...options });
  }

  /**
   * Retrieves the details of an existing plan.
   *
   * Required permissions:
   *
   * - `plan:basic:read`
   *
   * @example
   * ```ts
   * const plan = await client.plans.retrieve(
   *   'plan_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Plan> {
    return this._client.get(path`/plans/${id}`, options);
  }

  /**
   * Update a plan's pricing, billing interval, visibility, stock, and other
   * settings.
   *
   * Required permissions:
   *
   * - `plan:update`
   * - `access_pass:basic:read`
   * - `plan:basic:read`
   *
   * @example
   * ```ts
   * const plan = await client.plans.update(
   *   'plan_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: PlanUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Plan> {
    return this._client.patch(path`/plans/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of plans belonging to a company, with optional
   * filtering by visibility, type, release method, and product.
   *
   * Required permissions:
   *
   * - `plan:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const planListResponse of client.plans.list({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
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
   * Permanently delete a plan from a product. Existing memberships on this plan will
   * not be affected.
   *
   * Required permissions:
   *
   * - `plan:delete`
   *
   * @example
   * ```ts
   * const plan = await client.plans.delete(
   *   'plan_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PlanDeleteResponse> {
    return this._client.delete(path`/plans/${id}`, options);
  }
}

export type PlanListResponsesCursorPage = CursorPage<PlanListResponse>;

/**
 * A plan defines pricing and billing terms for a checkout. Plans can optionally
 * belong to a product, where they represent different pricing options such as
 * one-time payments, recurring subscriptions, or free trials.
 */
export interface PlanListResponse {
  /**
   * The unique identifier for the plan.
   */
  id: string;

  /**
   * The number of days between each recurring charge. Null for one-time plans. For
   * example, 30 for monthly or 365 for annual billing.
   */
  billing_period: number | null;

  /**
   * The company that sells this plan. Null for standalone invoice plans not linked
   * to a company.
   */
  company: PlanListResponse.Company | null;

  /**
   * The datetime the plan was created.
   */
  created_at: string;

  /**
   * The currency used for all prices on this plan (e.g., 'usd', 'eur'). All monetary
   * amounts on the plan are denominated in this currency.
   */
  currency: Shared.Currency;

  /**
   * A text description of the plan visible to customers. Maximum 500 characters.
   * Null if no description is set.
   */
  description: string | null;

  /**
   * The number of days until the membership expires (for expiration-based plans).
   * For example, 365 for a one-year access pass.
   */
  expiration_days: number | null;

  /**
   * The initial purchase price in the plan's base_currency (e.g., 49.99 for $49.99).
   * For one-time plans, this is the full price. For renewal plans, this is charged
   * on top of the first renewal_price.
   */
  initial_price: number;

  /**
   * Private notes visible only to the company owner and team members. Not shown to
   * customers. Null if no notes have been added.
   */
  internal_notes: string | null;

  /**
   * The invoice this plan was generated for. Null if the plan was not created for a
   * specific invoice.
   */
  invoice: PlanListResponse.Invoice | null;

  /**
   * The number of users who currently hold an active membership through this plan.
   * Only visible to authorized team members.
   */
  member_count: number | null;

  /**
   * The explicit payment method configuration specifying which payment methods are
   * enabled or disabled for this plan. Null if the plan uses default settings.
   */
  payment_method_configuration: PlanListResponse.PaymentMethodConfiguration | null;

  /**
   * The billing model for this plan: 'renewal' for recurring subscriptions or
   * 'one_time' for single payments.
   */
  plan_type: Shared.PlanType;

  /**
   * The product that this plan belongs to. Null for standalone one-off purchases not
   * linked to a product.
   */
  product: PlanListResponse.Product | null;

  /**
   * The full URL where customers can purchase this plan directly, bypassing the
   * product page.
   */
  purchase_url: string;

  /**
   * The method used to sell this plan: 'buy_now' for immediate purchase or
   * 'waitlist' for waitlist-based access.
   */
  release_method: Shared.ReleaseMethod;

  /**
   * The recurring price charged every billing_period in the plan's base_currency
   * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
   */
  renewal_price: number;

  /**
   * The total number of installment payments required before the subscription
   * pauses. Null if split pay is not configured. Must be greater than 1.
   */
  split_pay_required_payments: number | null;

  /**
   * The number of units available for purchase. Only visible to authorized team
   * members. Null if the requester lacks permission.
   */
  stock: number | null;

  /**
   * The display name of the plan shown to customers on the product page and at
   * checkout. Maximum 30 characters. Null if no title has been set.
   */
  title: string | null;

  /**
   * The number of free trial days before the first charge on a renewal plan. Null if
   * no trial is configured or the current user has already used a trial for this
   * plan.
   */
  trial_period_days: number | null;

  /**
   * When true, the plan has unlimited stock (stock field is ignored). When false,
   * purchases are limited by the stock field.
   */
  unlimited_stock: boolean;

  /**
   * The datetime the plan was last updated.
   */
  updated_at: string;

  /**
   * Controls whether the plan is visible to customers. When set to 'hidden', the
   * plan is only accessible via direct link.
   */
  visibility: Shared.Visibility;
}

export namespace PlanListResponse {
  /**
   * The company that sells this plan. Null for standalone invoice plans not linked
   * to a company.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The invoice this plan was generated for. Null if the plan was not created for a
   * specific invoice.
   */
  export interface Invoice {
    /**
     * The unique identifier for the invoice.
     */
    id: string;
  }

  /**
   * The explicit payment method configuration specifying which payment methods are
   * enabled or disabled for this plan. Null if the plan uses default settings.
   */
  export interface PaymentMethodConfiguration {
    /**
     * An array of payment method identifiers that are explicitly disabled. Only
     * applies if the include_platform_defaults is true.
     */
    disabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * An array of payment method identifiers that are explicitly enabled. This means
     * these payment methods will be shown on checkout. Example use case is to only
     * enable a specific payment method like cashapp, or extending the platform
     * defaults with additional methods.
     */
    enabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * Whether Whop's platform default payment method enablement settings are included
     * in this configuration. The full list of default payment methods can be found in
     * the documentation at docs.whop.com/payments.
     */
    include_platform_defaults: boolean;
  }

  /**
   * The product that this plan belongs to. Null for standalone one-off purchases not
   * linked to a product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type PlanDeleteResponse = boolean;

export interface PlanCreateParams {
  /**
   * The unique identifier of the company to create this plan for.
   */
  company_id: string;

  /**
   * The unique identifier of the product to attach this plan to.
   */
  product_id: string;

  /**
   * The number of days between recurring charges. For example, 30 for monthly or 365
   * for yearly.
   */
  billing_period?: number | null;

  /**
   * The available currencies on the platform
   */
  currency?: Shared.Currency | null;

  /**
   * An array of custom field definitions to collect from customers at checkout.
   */
  custom_fields?: Array<PlanCreateParams.CustomField> | null;

  /**
   * A text description of the plan displayed to customers on the product page.
   */
  description?: string | null;

  /**
   * The number of days until the membership expires and access is revoked. Used for
   * expiration-based plans.
   */
  expiration_days?: number | null;

  /**
   * An image displayed on the product page to represent this plan.
   */
  image?: PlanCreateParams.Image | null;

  /**
   * The amount charged on the first purchase. For one-time plans, this is the full
   * price. For recurring plans, this is an additional charge on top of the renewal
   * price. Provided in the plan's currency (e.g., 10.43 for $10.43).
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
   * Whether or not the tax is included in a plan's price (or if it hasn't been set
   * up)
   */
  override_tax_type?: Shared.TaxType | null;

  /**
   * Explicit payment method configuration for the plan. When not provided, the
   * company's defaults apply.
   */
  payment_method_configuration?: PlanCreateParams.PaymentMethodConfiguration | null;

  /**
   * The type of plan that can be attached to a product
   */
  plan_type?: Shared.PlanType | null;

  /**
   * The methods of how a plan can be released.
   */
  release_method?: Shared.ReleaseMethod | null;

  /**
   * The amount charged each billing period for recurring plans. Provided in the
   * plan's currency (e.g., 10.43 for $10.43).
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
   * The display name of the plan shown to customers on the product page.
   */
  title?: string | null;

  /**
   * The number of free trial days before the first charge on a recurring plan.
   */
  trial_period_days?: number | null;

  /**
   * Whether the plan has unlimited stock. When true, the stock field is ignored.
   * Defaults to true.
   */
  unlimited_stock?: boolean | null;

  /**
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace PlanCreateParams {
  export interface CustomField {
    /**
     * The type of the custom field.
     */
    field_type: 'text';

    /**
     * The name of the custom field.
     */
    name: string;

    /**
     * The ID of the custom field (if being updated)
     */
    id?: string | null;

    /**
     * The order of the field.
     */
    order?: number | null;

    /**
     * The placeholder value of the field.
     */
    placeholder?: string | null;

    /**
     * Whether or not the field is required.
     */
    required?: boolean | null;
  }

  /**
   * An image displayed on the product page to represent this plan.
   */
  export interface Image {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * Explicit payment method configuration for the plan. When not provided, the
   * company's defaults apply.
   */
  export interface PaymentMethodConfiguration {
    /**
     * An array of payment method identifiers that are explicitly disabled. Only
     * applies if the include_platform_defaults is true.
     */
    disabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * An array of payment method identifiers that are explicitly enabled. This means
     * these payment methods will be shown on checkout. Example use case is to only
     * enable a specific payment method like cashapp, or extending the platform
     * defaults with additional methods.
     */
    enabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * Whether Whop's platform default payment method enablement settings are included
     * in this configuration. The full list of default payment methods can be found in
     * the documentation at docs.whop.com/payments.
     */
    include_platform_defaults: boolean;
  }
}

export interface PlanUpdateParams {
  /**
   * The number of days between recurring charges. For example, 30 for monthly or 365
   * for yearly.
   */
  billing_period?: number | null;

  /**
   * The available currencies on the platform
   */
  currency?: Shared.Currency | null;

  /**
   * An array of custom field definitions to collect from customers at checkout.
   */
  custom_fields?: Array<PlanUpdateParams.CustomField> | null;

  /**
   * A text description of the plan displayed to customers on the product page.
   */
  description?: string | null;

  /**
   * The number of days until the membership expires and access is revoked. For
   * example, 365 for one-year access.
   */
  expiration_days?: number | null;

  /**
   * An image displayed on the product page to represent this plan.
   */
  image?: PlanUpdateParams.Image | null;

  /**
   * The amount charged on the first purchase. Provided in the plan's currency (e.g.,
   * 10.43 for $10.43).
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
   * Whether to offer a retention discount when a customer attempts to cancel.
   */
  offer_cancel_discount?: boolean | null;

  /**
   * Whether or not the tax is included in a plan's price (or if it hasn't been set
   * up)
   */
  override_tax_type?: Shared.TaxType | null;

  /**
   * Explicit payment method configuration for the plan. Sending null removes any
   * custom configuration.
   */
  payment_method_configuration?: PlanUpdateParams.PaymentMethodConfiguration | null;

  /**
   * The amount charged each billing period for recurring plans. Provided in the
   * plan's currency (e.g., 10.43 for $10.43).
   */
  renewal_price?: number | null;

  /**
   * The maximum number of units available for purchase. Ignored when unlimited_stock
   * is true.
   */
  stock?: number | null;

  /**
   * A comparison price displayed with a strikethrough for the initial price.
   * Provided in the plan's currency (e.g., 19.99 for $19.99).
   */
  strike_through_initial_price?: number | null;

  /**
   * A comparison price displayed with a strikethrough for the renewal price.
   * Provided in the plan's currency (e.g., 19.99 for $19.99).
   */
  strike_through_renewal_price?: number | null;

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
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace PlanUpdateParams {
  export interface CustomField {
    /**
     * The type of the custom field.
     */
    field_type: 'text';

    /**
     * The name of the custom field.
     */
    name: string;

    /**
     * The ID of the custom field (if being updated)
     */
    id?: string | null;

    /**
     * The order of the field.
     */
    order?: number | null;

    /**
     * The placeholder value of the field.
     */
    placeholder?: string | null;

    /**
     * Whether or not the field is required.
     */
    required?: boolean | null;
  }

  /**
   * An image displayed on the product page to represent this plan.
   */
  export interface Image {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * Explicit payment method configuration for the plan. Sending null removes any
   * custom configuration.
   */
  export interface PaymentMethodConfiguration {
    /**
     * An array of payment method identifiers that are explicitly disabled. Only
     * applies if the include_platform_defaults is true.
     */
    disabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * An array of payment method identifiers that are explicitly enabled. This means
     * these payment methods will be shown on checkout. Example use case is to only
     * enable a specific payment method like cashapp, or extending the platform
     * defaults with additional methods.
     */
    enabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * Whether Whop's platform default payment method enablement settings are included
     * in this configuration. The full list of default payment methods can be found in
     * the documentation at docs.whop.com/payments.
     */
    include_platform_defaults: boolean;
  }
}

export interface PlanListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list plans for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return plans created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return plans created before this timestamp.
   */
  created_before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The ways a relation of Plans can be ordered
   */
  order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expires_at' | null;

  /**
   * Filter to only plans matching these billing types.
   */
  plan_types?: Array<Shared.PlanType> | null;

  /**
   * Filter to only plans belonging to these product identifiers.
   */
  product_ids?: Array<string> | null;

  /**
   * Filter to only plans matching these release methods.
   */
  release_methods?: Array<Shared.ReleaseMethod> | null;

  /**
   * Filter to only plans matching these visibility states.
   */
  visibilities?: Array<Shared.VisibilityFilter> | null;
}

export declare namespace Plans {
  export {
    type PlanListResponse as PlanListResponse,
    type PlanDeleteResponse as PlanDeleteResponse,
    type PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };
}
