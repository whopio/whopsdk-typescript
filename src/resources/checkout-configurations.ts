// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckoutConfigurations extends APIResource {
  /**
   * Creates a new checkout configuration
   *
   * Required permissions:
   *
   * - `checkout_configuration:create`
   * - `plan:create`
   * - `access_pass:create`
   * - `access_pass:update`
   *
   * @example
   * ```ts
   * const checkoutConfiguration =
   *   await client.checkoutConfigurations.create();
   * ```
   */
  create(
    body: CheckoutConfigurationCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.CheckoutConfiguration> {
    return this._client.post('/checkout_configurations', { body, ...options });
  }

  /**
   * Retrieves a checkout configuration by ID
   *
   * Required permissions:
   *
   * - `checkout_configuration:basic:read`
   *
   * @example
   * ```ts
   * const checkoutConfiguration =
   *   await client.checkoutConfigurations.retrieve(
   *     'ch_xxxxxxxxxxxxxxx',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.CheckoutConfiguration> {
    return this._client.get(path`/checkout_configurations/${id}`, options);
  }

  /**
   * Lists checkout configurations
   *
   * Required permissions:
   *
   * - `checkout_configuration:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkoutConfigurationListResponse of client.checkoutConfigurations.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CheckoutConfigurationListParams,
    options?: RequestOptions,
  ): PagePromise<CheckoutConfigurationListResponsesCursorPage, CheckoutConfigurationListResponse> {
    return this._client.getAPIList(
      '/checkout_configurations',
      CursorPage<CheckoutConfigurationListResponse>,
      { query, ...options },
    );
  }
}

export type CheckoutConfigurationListResponsesCursorPage = CursorPage<CheckoutConfigurationListResponse>;

/**
 * A checkout configuration object.
 *         Can be used to create a reusable custom configuration for a checkout, including attaching plans, affiliates and custom metadata to the checkout.
 *         This configuration can be re-used by multiple users.
 *         All successful payments and memberships resulting from a checkout will contain the passed metadata.
 */
export interface CheckoutConfigurationListResponse {
  /**
   * The ID of the checkout configuration
   */
  id: string;

  /**
   * The affiliate code to use for the checkout configuration
   */
  affiliate_code: string | null;

  /**
   * The ID of the company to use for the checkout configuration
   */
  company_id: string;

  /**
   * The metadata to use for the checkout configuration
   */
  metadata: { [key: string]: unknown };

  /**
   * The plan to use for the checkout configuration
   */
  plan: CheckoutConfigurationListResponse.Plan;

  /**
   * A URL you can send to customers to complete a checkout. It looks like
   * `/checkout/plan_xxxx?session={id}`
   */
  purchase_url: string;

  /**
   * The URL to redirect the user to after the checkout configuration is created
   */
  redirect_url: string | null;
}

export namespace CheckoutConfigurationListResponse {
  /**
   * The plan to use for the checkout configuration
   */
  export interface Plan {
    /**
     * The internal ID of the plan.
     */
    id: string;

    /**
     * The interval at which the plan charges (renewal plans).
     */
    billing_period: number | null;

    /**
     * The respective currency identifier for the plan.
     */
    currency: Shared.Currency;

    /**
     * The interval at which the plan charges (expiration plans).
     */
    expiration_days: number | null;

    /**
     * The price a person has to pay for a plan on the initial purchase.
     */
    initial_price: number;

    /**
     * Indicates if the plan is a one time payment or recurring.
     */
    plan_type: Shared.PlanType;

    /**
     * This is the release method the business uses to sell this plan.
     */
    release_method: Shared.ReleaseMethod;

    /**
     * The price a person has to pay for a plan on the renewal purchase.
     */
    renewal_price: number;

    /**
     * The number of free trial days added before a renewal plan.
     */
    trial_period_days: number | null;

    /**
     * Shows or hides the plan from public/business view.
     */
    visibility: Shared.Visibility;
  }
}

export interface CheckoutConfigurationCreateParams {
  /**
   * The affiliate code to use for the checkout configuration
   */
  affiliate_code?: string | null;

  /**
   * The metadata to use for the checkout configuration
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Pass this object to create a new plan for this checkout configuration
   */
  plan?: CheckoutConfigurationCreateParams.Plan | null;

  /**
   * The ID of the plan to use for the checkout configuration
   */
  plan_id?: string | null;

  /**
   * The URL to redirect the user to after the checkout configuration is created
   */
  redirect_url?: string | null;
}

export namespace CheckoutConfigurationCreateParams {
  /**
   * Pass this object to create a new plan for this checkout configuration
   */
  export interface Plan {
    /**
     * The company the plan should be created for.
     */
    company_id: string;

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
    custom_fields?: Array<Plan.CustomField> | null;

    /**
     * The description of the plan.
     */
    description?: string | null;

    /**
     * The interval at which the plan charges (expiration plans).
     */
    expiration_days?: number | null;

    /**
     * Whether to force the creation of a new plan even if one with the same attributes
     * already exists.
     */
    force_create_new_plan?: boolean | null;

    /**
     * An image for the plan. This will be visible on the product page to customers.
     */
    image?: Plan.Image | null;

    /**
     * An additional amount charged upon first purchase.
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
     * Pass this object to create a new product for this plan. We will use the product
     * external identifier to find or create an existing product.
     */
    product?: Plan.Product | null;

    /**
     * The product the plan is related to. Either this or product is required.
     */
    product_id?: string | null;

    /**
     * The methods of how a plan can be released.
     */
    release_method?: Shared.ReleaseMethod | null;

    /**
     * The amount the customer is charged every billing period.
     */
    renewal_price?: number | null;

    /**
     * The title of the plan. This will be visible on the product page to customers.
     */
    title?: string | null;

    /**
     * The number of free trial days added before a renewal plan.
     */
    trial_period_days?: number | null;

    /**
     * Visibility of a resource
     */
    visibility?: Shared.Visibility | null;
  }

  export namespace Plan {
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

    /**
     * Pass this object to create a new product for this plan. We will use the product
     * external identifier to find or create an existing product.
     */
    export interface Product {
      /**
       * A unique ID used to find or create a product. When provided during creation, we
       * will look for an existing product with this external identifier — if found, it
       * will be updated; otherwise, a new product will be created.
       */
      external_identifier: string;

      /**
       * The title of the product.
       */
      title: string;

      /**
       * The different business types a company can be.
       */
      business_type?: Shared.BusinessTypes | null;

      /**
       * Whether or not to collect shipping information at checkout from the customer.
       */
      collect_shipping_address?: boolean | null;

      /**
       * The custom statement descriptor for the product i.e. WHOP\*SPORTS, must be
       * between 5 and 22 characters, contain at least one letter, and not contain any of
       * the following characters: <, >, \, ', "
       */
      custom_statement_descriptor?: string | null;

      /**
       * A written description of the product.
       */
      description?: string | null;

      /**
       * The percentage of the revenue that goes to the global affiliate program.
       */
      global_affiliate_percentage?: number | null;

      /**
       * The different statuses of the global affiliate program for an access pass.
       */
      global_affiliate_status?: Shared.GlobalAffiliateStatus | null;

      /**
       * The headline of the product.
       */
      headline?: string | null;

      /**
       * The different industry types a company can be in.
       */
      industry_type?: Shared.IndustryTypes | null;

      /**
       * The ID of the product tax code to apply to this product.
       */
      product_tax_code_id?: string | null;

      /**
       * The URL to redirect the customer to after a purchase.
       */
      redirect_purchase_url?: string | null;

      /**
       * The route of the product.
       */
      route?: string | null;

      /**
       * Visibility of a resource
       */
      visibility?: Shared.Visibility | null;
    }
  }
}

export interface CheckoutConfigurationListParams extends CursorPageParams {
  /**
   * The ID of the company to list checkout configurations for
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
   * The ID of the plan to filter checkout configurations by
   */
  plan_id?: string | null;
}

export declare namespace CheckoutConfigurations {
  export {
    type CheckoutConfigurationListResponse as CheckoutConfigurationListResponse,
    type CheckoutConfigurationListResponsesCursorPage as CheckoutConfigurationListResponsesCursorPage,
    type CheckoutConfigurationCreateParams as CheckoutConfigurationCreateParams,
    type CheckoutConfigurationListParams as CheckoutConfigurationListParams,
  };
}
