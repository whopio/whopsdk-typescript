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
   * Creates a new Product
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
   * Retrieves a product by ID or route
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
   * Updates an existing Product
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
   * Lists products for a company
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
   * Deletes an existing Product
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
   * The ID of the company to create the product for.
   */
  company_id: string;

  /**
   * The title of the product.
   */
  title: string;

  /**
   * The different types an access pass can be.
   */
  access_pass_type?: Shared.AccessPassType | null;

  /**
   * A banner image for the product in png, jpeg format
   */
  banner_image?: ProductCreateParams.BannerImage | null;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * Whether or not to collect shipping information at checkout from the customer.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The different types of custom CTAs that can be selected.
   */
  custom_cta?: Shared.CustomCta | null;

  /**
   * The custom call to action URL for the product.
   */
  custom_cta_url?: string | null;

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
   * An array of experience IDs that this pass has
   */
  experience_ids?: Array<string> | null;

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
   * The percentage of the revenue that goes to the member affiliate program.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for an access pass.
   */
  member_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * The details to assign an autogenerated plan.
   */
  plan_options?: ProductCreateParams.PlanOptions | null;

  /**
   * The product highlights for the product.
   */
  product_highlights?: Array<ProductCreateParams.ProductHighlight> | null;

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

export namespace ProductCreateParams {
  /**
   * A banner image for the product in png, jpeg format
   */
  export interface BannerImage {
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
   * The details to assign an autogenerated plan.
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
     * An additional amount charged upon first purchase.
     */
    initial_price?: number | null;

    /**
     * The type of plan that can be attached to an access pass
     */
    plan_type?: Shared.PlanType | null;

    /**
     * The methods of how a plan can be released.
     */
    release_method?: Shared.ReleaseMethod | null;

    /**
     * The amount the customer is charged every billing period.
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
   * A banner image for the product in png, jpeg format
   */
  banner_image?: ProductUpdateParams.BannerImage | null;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * Whether or not to collect shipping information at checkout from the customer.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The different types of custom CTAs that can be selected.
   */
  custom_cta?: Shared.CustomCta | null;

  /**
   * The custom call to action URL for the product.
   */
  custom_cta_url?: string | null;

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
   * The percentage of the revenue that goes to the member affiliate program.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for an access pass.
   */
  member_affiliate_status?: Shared.GlobalAffiliateStatus | null;

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
   * The title of the product.
   */
  title?: string | null;

  /**
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace ProductUpdateParams {
  /**
   * A banner image for the product in png, jpeg format
   */
  export interface BannerImage {
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

export interface ProductListParams extends CursorPageParams {
  /**
   * The ID of the company to filter products by
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
   * The ways a relation of AccessPasses can be ordered
   */
  order?: 'active_memberships_count' | 'created_at' | 'usd_gmv' | 'usd_gmv_30_days' | null;

  /**
   * The type of products to filter by
   */
  product_types?: Array<Shared.AccessPassType> | null;

  /**
   * The visibility of the products to filter by
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
