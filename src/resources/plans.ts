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
   * Create a new Plan
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
   * Retrieves a plan by ID
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
   * Update an existing Plan
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
   * Lists plans for a company
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
   * Delete an existing Plan
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
 * A plan defines pricing and billing terms for a product. Each product can have
 * multiple plans representing different pricing options, such as one-time
 * payments, recurring subscriptions, or free trials.
 */
export interface PlanListResponse {
  /**
   * The unique identifier for the plan.
   */
  id: string;

  /**
   * The interval in days at which the plan charges (renewal plans).
   */
  billing_period: number | null;

  /**
   * The company for the plan.
   */
  company: PlanListResponse.Company | null;

  /**
   * The datetime the plan was created.
   */
  created_at: string;

  /**
   * The respective currency identifier for the plan.
   */
  currency: Shared.Currency;

  /**
   * The description of the plan.
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
   * A personal description or notes section for the business.
   */
  internal_notes: string | null;

  /**
   * The invoice associated with this plan.
   */
  invoice: PlanListResponse.Invoice | null;

  /**
   * The number of members for the plan.
   */
  member_count: number | null;

  /**
   * The explicit payment method configuration for the plan, if any.
   */
  payment_method_configuration: PlanListResponse.PaymentMethodConfiguration | null;

  /**
   * Indicates if the plan is a one time payment or recurring.
   */
  plan_type: Shared.PlanType;

  /**
   * The product that this plan belongs to.
   */
  product: PlanListResponse.Product | null;

  /**
   * The direct link to purchase the product.
   */
  purchase_url: string;

  /**
   * This is the release method the business uses to sell this plan.
   */
  release_method: Shared.ReleaseMethod;

  /**
   * The recurring price charged every billing_period in the plan's base_currency
   * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
   */
  renewal_price: number;

  /**
   * The number of payments required before pausing the subscription.
   */
  split_pay_required_payments: number | null;

  /**
   * The number of units available for purchase. Only displayed to authorized actors
   */
  stock: number | null;

  /**
   * The title of the plan. This will be visible on the product page to customers.
   */
  title: string | null;

  /**
   * The number of free trial days added before a renewal plan.
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
   * Shows or hides the plan from public/business view.
   */
  visibility: Shared.Visibility;
}

export namespace PlanListResponse {
  /**
   * The company for the plan.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * The invoice associated with this plan.
   */
  export interface Invoice {
    /**
     * The unique identifier for the invoice.
     */
    id: string;
  }

  /**
   * The explicit payment method configuration for the plan, if any.
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
   * The product that this plan belongs to.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
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
   * The company the plan should be created for.
   */
  company_id: string;

  /**
   * The product the plan is related to.
   */
  product_id: string;

  /**
   * The interval in days at which the plan charges (renewal plans).
   */
  billing_period?: number | null;

  /**
   * The available currencies on the platform
   */
  currency?: Shared.Currency | null;

  /**
   * An array of custom field objects.
   */
  custom_fields?: Array<PlanCreateParams.CustomField> | null;

  /**
   * The description of the plan.
   */
  description?: string | null;

  /**
   * The interval at which the plan expires and revokes access (expiration plans).
   */
  expiration_days?: number | null;

  /**
   * An image for the plan. This will be visible on the product page to customers.
   */
  image?: PlanCreateParams.Image | null;

  /**
   * An additional amount charged upon first purchase. Use only if a one time payment
   * OR you want to charge an additional amount on top of the renewal price. Provided
   * as a number in the specified currency. Eg: 10.43 for $10.43
   */
  initial_price?: number | null;

  /**
   * A personal description or notes section for the business.
   */
  internal_notes?: string | null;

  /**
   * Whether this plan uses legacy payment method controls
   */
  legacy_payment_method_controls?: boolean | null;

  /**
   * Whether or not the tax is included in a plan's price (or if it hasn't been set
   * up)
   */
  override_tax_type?: Shared.TaxType | null;

  /**
   * The explicit payment method configuration for the plan. If not provided, the
   * platform or company's defaults will apply.
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
   * The amount the customer is charged every billing period. Use only if a recurring
   * payment. Provided as a number in the specified currency. Eg: 10.43 for $10.43
   */
  renewal_price?: number | null;

  /**
   * The number of payments required before pausing the subscription.
   */
  split_pay_required_payments?: number | null;

  /**
   * The number of units available for purchase.
   */
  stock?: number | null;

  /**
   * The title of the plan. This will be visible on the product page to customers.
   */
  title?: string | null;

  /**
   * The number of free trial days added before a renewal plan.
   */
  trial_period_days?: number | null;

  /**
   * When true, the plan has unlimited stock (stock field is ignored). When false,
   * purchases are limited by the stock field.
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
   * An image for the plan. This will be visible on the product page to customers.
   */
  export interface Image {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The explicit payment method configuration for the plan. If not provided, the
   * platform or company's defaults will apply.
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
   * The interval in days at which the plan charges (renewal plans).
   */
  billing_period?: number | null;

  /**
   * The available currencies on the platform
   */
  currency?: Shared.Currency | null;

  /**
   * An array of custom field objects.
   */
  custom_fields?: Array<PlanUpdateParams.CustomField> | null;

  /**
   * The description of the plan.
   */
  description?: string | null;

  /**
   * The number of days until the membership expires (for expiration-based plans).
   * For example, 365 for a one-year access pass.
   */
  expiration_days?: number | null;

  /**
   * An image for the plan. This will be visible on the product page to customers.
   */
  image?: PlanUpdateParams.Image | null;

  /**
   * An additional amount charged upon first purchase. Provided as a number in the
   * specified currency. Eg: 10.43 for $10.43 USD.
   */
  initial_price?: number | null;

  /**
   * A personal description or notes section for the business.
   */
  internal_notes?: string | null;

  /**
   * Whether this plan uses legacy payment method controls
   */
  legacy_payment_method_controls?: boolean | null;

  /**
   * Whether or not to offer a discount to cancel a subscription.
   */
  offer_cancel_discount?: boolean | null;

  /**
   * Whether or not the tax is included in a plan's price (or if it hasn't been set
   * up)
   */
  override_tax_type?: Shared.TaxType | null;

  /**
   * The explicit payment method configuration for the plan. If sent as null, the
   * custom configuration will be removed.
   */
  payment_method_configuration?: PlanUpdateParams.PaymentMethodConfiguration | null;

  /**
   * The amount the customer is charged every billing period. Provided as a number in
   * the specified currency. Eg: 10.43 for $10.43 USD.
   */
  renewal_price?: number | null;

  /**
   * The number of units available for purchase.
   */
  stock?: number | null;

  /**
   * The price to display with a strikethrough for the initial price. Provided as a
   * number in the specified currency. Eg: 19.99 for $19.99
   */
  strike_through_initial_price?: number | null;

  /**
   * The price to display with a strikethrough for the renewal price. Provided as a
   * number in the specified currency. Eg: 19.99 for $19.99
   */
  strike_through_renewal_price?: number | null;

  /**
   * The title of the plan. This will be visible on the product page to customers.
   */
  title?: string | null;

  /**
   * The number of free trial days added before a renewal plan.
   */
  trial_period_days?: number | null;

  /**
   * When true, the plan has unlimited stock (stock field is ignored). When false,
   * purchases are limited by the stock field.
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
   * An image for the plan. This will be visible on the product page to customers.
   */
  export interface Image {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The explicit payment method configuration for the plan. If sent as null, the
   * custom configuration will be removed.
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
   * The ID of the company
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
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
   * The plan type to filter the plans by
   */
  plan_types?: Array<Shared.PlanType> | null;

  /**
   * The product IDs to filter the plans by
   */
  product_ids?: Array<string> | null;

  /**
   * The release method to filter the plans by
   */
  release_methods?: Array<Shared.ReleaseMethod> | null;

  /**
   * The visibility to filter the plans by
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
