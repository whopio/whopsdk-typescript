// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
 * An object representing a (sanitized) plan of an access pass.
 */
export interface PlanListResponse {
  /**
   * The internal ID of the plan.
   */
  id: string;

  /**
   * The interval at which the plan charges (renewal plans).
   */
  billing_period: number | null;

  /**
   * The company for the plan.
   */
  company: PlanListResponse.Company | null;

  /**
   * When the plan was created.
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
   * The interval at which the plan charges (expiration plans).
   */
  expiration_days: number | null;

  /**
   * The price a person has to pay for a plan on the initial purchase.
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
   * Indicates if the plan is a one time payment or recurring.
   */
  plan_type: Shared.PlanType;

  /**
   * The access pass for the plan.
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
   * The price a person has to pay for a plan on the renewal purchase.
   */
  renewal_price: number;

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
   * Limits/doesn't limit the number of units available for purchase.
   */
  unlimited_stock: boolean;

  /**
   * When the plan was last updated.
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
     * The ID (tag) of the company.
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
     * The ID of the invoice.
     */
    id: string;
  }

  /**
   * The access pass for the plan.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
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
   * The interval at which the plan charges (expiration plans).
   */
  expiration_days?: number | null;

  /**
   * An image for the plan. This will be visible on the product page to customers.
   */
  image?: PlanCreateParams.Image | null;

  /**
   * An additional amount charged upon first purchase. Use only if a one time payment
   * OR you want to charge an additional amount on top of the renewal price. Provided
   * as a number in dollars. Eg: 10.43 for $10.43
   */
  initial_price?: number | null;

  /**
   * A personal description or notes section for the business.
   */
  internal_notes?: string | null;

  /**
   * Whether or not the tax is included in a plan's price (or if it hasn't been set
   * up)
   */
  override_tax_type?: Shared.TaxType | null;

  /**
   * The type of plan that can be attached to an access pass
   */
  plan_type?: Shared.PlanType | null;

  /**
   * The methods of how a plan can be released.
   */
  release_method?: Shared.ReleaseMethod | null;

  /**
   * The amount the customer is charged every billing period. Use only if a recurring
   * payment. Provided as a number in dollars. Eg: 10.43 for $10.43
   */
  renewal_price?: number | null;

  /**
   * The number of units available for purchase.
   */
  stock?: number | null;

  /**
   * The price to display with a strikethrough for the initial price. Provided as a
   * number in dollars. Eg: 19.99 for $19.99
   */
  strike_through_initial_price?: number | null;

  /**
   * The price to display with a strikethrough for the renewal price. Provided as a
   * number in dollars. Eg: 19.99 for $19.99
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
   * Limits/doesn't limit the number of units available for purchase.
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
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
  }
}

export interface PlanUpdateParams {
  /**
   * The interval at which the plan charges (renewal plans).
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
   * The interval at which the plan charges (expiration plans).
   */
  expiration_days?: number | null;

  /**
   * An image for the plan. This will be visible on the product page to customers.
   */
  image?: PlanUpdateParams.Image | null;

  /**
   * An additional amount charged upon first purchase.
   */
  initial_price?: number | null;

  /**
   * A personal description or notes section for the business.
   */
  internal_notes?: string | null;

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
   * The amount the customer is charged every billing period.
   */
  renewal_price?: number | null;

  /**
   * The number of units available for purchase.
   */
  stock?: number | null;

  /**
   * The price to display with a strikethrough for the initial price. Provided as a
   * number in dollars. Eg: 19.99 for $19.99
   */
  strike_through_initial_price?: number | null;

  /**
   * The price to display with a strikethrough for the renewal price. Provided as a
   * number in dollars. Eg: 19.99 for $19.99
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
   * Limits/doesn't limit the number of units available for purchase.
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
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
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
