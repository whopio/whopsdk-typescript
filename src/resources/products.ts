// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ProductListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Create a new product for a company.
   *
   * Required permissions:
   *
   * - `access_pass:create`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const product = await client.products.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   title: 'title',
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Retrieve a single product by its unique identifier or route slug.
   *
   * Required permissions:
   *
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const product = await client.products.retrieve(
   *   'prod_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.get(path`/products/${id}`, options);
  }

  /**
   * Update an existing product.
   *
   * Required permissions:
   *
   * - `access_pass:update`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const product = await client.products.update(
   *   'prod_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: ProductUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Product> {
    return this._client.patch(path`/products/${id}`, { body, ...options });
  }

  /**
   * List products belonging to a company, with optional filtering and sorting.
   *
   * Required permissions:
   *
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const productListItem of client.products.list({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ProductListParams,
    options?: RequestOptions,
  ): PagePromise<ProductListItemsCursorPage, Shared.ProductListItem> {
    return this._client.getAPIList('/products', CursorPage<Shared.ProductListItem>, { query, ...options });
  }

  /**
   * Delete a product by its unique identifier.
   *
   * Required permissions:
   *
   * - `access_pass:delete`
   *
   * @example
   * ```ts
   * const product = await client.products.delete(
   *   'prod_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/products/${id}`, options);
  }
}

/**
 * Represents `true` or `false` values.
 */
export type ProductDeleteResponse = boolean;

export interface ProductCreateParams {
  /**
   * The unique identifier of the company to create this product for.
   */
  company_id: string;

  /**
   * The display name of the product. Maximum 40 characters.
   */
  title: string;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * Whether the checkout flow collects a shipping address from the customer.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The different types of custom CTAs that can be selected.
   */
  custom_cta?: Shared.CustomCta | null;

  /**
   * A URL that the call-to-action button links to instead of the default checkout
   * flow.
   */
  custom_cta_url?: string | null;

  /**
   * A custom text label that appears on the customer's bank statement. Must be 5-22
   * characters, contain at least one letter, and not contain <, >, \, ', or "
   * characters.
   */
  custom_statement_descriptor?: string | null;

  /**
   * A written description of the product displayed on its product page.
   */
  description?: string | null;

  /**
   * The unique identifiers of experiences to connect to this product.
   */
  experience_ids?: Array<string> | null;

  /**
   * The commission rate as a percentage that affiliates earn through the global
   * affiliate program.
   */
  global_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  global_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * A short marketing headline displayed prominently on the product page.
   */
  headline?: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The commission rate as a percentage that members earn through the member
   * affiliate program.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  member_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * Configuration for an automatically generated plan to attach to this product.
   */
  plan_options?: ProductCreateParams.PlanOptions | null;

  /**
   * Key features and benefits to display on the product page.
   */
  product_highlights?: Array<ProductCreateParams.ProductHighlight> | null;

  /**
   * The unique identifier of the tax classification code to apply to this product.
   */
  product_tax_code_id?: string | null;

  /**
   * A URL to redirect the customer to after completing a purchase.
   */
  redirect_purchase_url?: string | null;

  /**
   * The URL slug for the product's public link.
   */
  route?: string | null;

  /**
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace ProductCreateParams {
  /**
   * Configuration for an automatically generated plan to attach to this product.
   */
  export interface PlanOptions {
    /**
     * The available currencies on the platform
     */
    base_currency?: Shared.Currency | null;

    /**
     * The interval at which the plan charges (renewal plans).
     */
    billing_period?: number | null;

    /**
     * An array of custom field objects.
     */
    custom_fields?: Array<PlanOptions.CustomField> | null;

    /**
     * An additional amount charged upon first purchase. Provided as a number in the
     * specified currency. Eg: 10.43 for $10.43 USD.
     */
    initial_price?: number | null;

    /**
     * The type of plan that can be attached to a product
     */
    plan_type?: Shared.PlanType | null;

    /**
     * The methods of how a plan can be released.
     */
    release_method?: Shared.ReleaseMethod | null;

    /**
     * The amount the customer is charged every billing period. Provided as a number in
     * the specified currency. Eg: 10.43 for $10.43 USD.
     */
    renewal_price?: number | null;

    /**
     * Visibility of a resource
     */
    visibility?: Shared.Visibility | null;
  }

  export namespace PlanOptions {
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
  }

  /**
   * Input for creating a product highlight
   */
  export interface ProductHighlight {
    /**
     * Text to display to describe the product highlight (max length 250 for
     * qualification or benefits, 170 for who this is for, 140 for pricing features).
     */
    content: string;

    /**
     * The type of this highlight.
     */
    highlight_type: 'qualification' | 'benefit' | 'who_this_is_for' | 'pricing_feature';

    /**
     * The title of the product highlight, if applicable.
     */
    title?: string | null;
  }
}

export interface ProductUpdateParams {
  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * Whether the checkout flow collects a shipping address from the customer.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The different types of custom CTAs that can be selected.
   */
  custom_cta?: Shared.CustomCta | null;

  /**
   * A URL that the call-to-action button links to instead of the default checkout
   * flow.
   */
  custom_cta_url?: string | null;

  /**
   * A custom text label that appears on the customer's bank statement. Must be 5-22
   * characters, contain at least one letter, and not contain <, >, \, ', or "
   * characters.
   */
  custom_statement_descriptor?: string | null;

  /**
   * A written description of the product displayed on its product page.
   */
  description?: string | null;

  /**
   * The commission rate as a percentage that affiliates earn through the global
   * affiliate program.
   */
  global_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  global_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * A short marketing headline displayed prominently on the product page.
   */
  headline?: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The commission rate as a percentage that members earn through the member
   * affiliate program.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  member_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * The unique identifier of the tax classification code to apply to this product.
   */
  product_tax_code_id?: string | null;

  /**
   * A URL to redirect the customer to after completing a purchase.
   */
  redirect_purchase_url?: string | null;

  /**
   * The URL slug for the product's public link.
   */
  route?: string | null;

  /**
   * Layout and display configuration for this product on the company's store page.
   */
  store_page_config?: ProductUpdateParams.StorePageConfig | null;

  /**
   * The display name of the product. Maximum 40 characters.
   */
  title?: string | null;

  /**
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace ProductUpdateParams {
  /**
   * Layout and display configuration for this product on the company's store page.
   */
  export interface StorePageConfig {
    /**
     * Custom call-to-action text for the product's store page.
     */
    custom_cta?: string | null;

    /**
     * Whether or not to show the price on the product's store page.
     */
    show_price?: boolean | null;
  }
}

export interface ProductListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list products for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return products created after this datetime.
   */
  created_after?: string | null;

  /**
   * Only return products created before this datetime.
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
   * The ways a relation of AccessPasses can be ordered
   */
  order?: 'active_memberships_count' | 'created_at' | 'usd_gmv' | 'usd_gmv_30_days' | null;

  /**
   * Filter to only products matching these type classifications.
   */
  product_types?: Array<Shared.AccessPassType> | null;

  /**
   * Filter to only products matching these visibility states.
   */
  visibilities?: Array<Shared.VisibilityFilter> | null;
}

export declare namespace Products {
  export {
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}

export { type ProductListItemsCursorPage };
