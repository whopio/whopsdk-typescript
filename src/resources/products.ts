// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ProductListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Product is a digital good or service sold on Whop. Products may contain plans for pricing and/or experiences for content delivery.
 *
 * Use the Products API to search the public marketplace, list an account's products, retrieve a product, and create, update, or delete products.
 */
export class Products extends APIResource {
  /**
   * Creates a new product for an account.
   *
   * @example
   * ```ts
   * const product = await client.products.create({
   *   title: 'Interior Deep Clean',
   * });
   * ```
   */
  create(params: ProductCreateParams, options?: RequestOptions): APIPromise<Shared.Product> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/products', {
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
   * Retrieves a product. Public — no credentials.
   *
   * @example
   * ```ts
   * const product = await client.products.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Product> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/products/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an existing product.
   *
   * @example
   * ```ts
   * const product = await client.products.update('id');
   * ```
   */
  update(id: string, params: ProductUpdateParams, options?: RequestOptions): APIPromise<Shared.Product> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/products/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of products. Omit `account_id` to search the public
   * marketplace.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const productListItem of client.products.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListItemsCursorPage, Shared.ProductListItem> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/products', CursorPage<Shared.ProductListItem>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deletes a product. Only products with no memberships, entries, reviews, or
   * invoices can be deleted.
   *
   * @example
   * ```ts
   * const product = await client.products.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ProductDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductDeleteResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.delete(path`/products/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ProductDeleteResponse {
  /**
   * ID of the deleted product.
   */
  id: string;

  /**
   * Always true.
   */
  deleted: boolean;
}

export interface ProductCreateParams {
  /**
   * Body param: The display name of the product. Maximum 80 characters.
   */
  title: string;

  /**
   * Body param: The unique identifier of the account to create this product for.
   */
  account_id?: string;

  /**
   * Body param: Whether to collect a shipping address at checkout.
   */
  collect_shipping_address?: boolean | null;

  /**
   * Body param: The call-to-action button label.
   */
  custom_cta?:
    | 'get_access'
    | 'join'
    | 'order_now'
    | 'shop_now'
    | 'call_now'
    | 'donate_now'
    | 'contact_us'
    | 'sign_up'
    | 'subscribe'
    | 'purchase'
    | 'get_offer'
    | 'apply_now'
    | 'complete_order'
    | null;

  /**
   * Body param: A URL the call-to-action button links to.
   */
  custom_cta_url?: string | null;

  /**
   * Body param: Custom bank statement descriptor. Must start with WHOP\*.
   */
  custom_statement_descriptor?: string | null;

  /**
   * Body param: A written description displayed on the product page.
   */
  description?: string | null;

  /**
   * Body param: The commission rate affiliates earn.
   */
  global_affiliate_percentage?: number | null;

  /**
   * Body param: The enrollment status in the global affiliate program.
   */
  global_affiliate_status?: 'enabled' | 'disabled';

  /**
   * Body param: A short marketing headline for the product page.
   */
  headline?: string | null;

  /**
   * Body param: Labels used to group products into collections. Stored lowercased
   * and de-duplicated. Maximum 20 labels, 50 characters each.
   */
  labels?: Array<string> | null;

  /**
   * Body param: The commission rate members earn.
   */
  member_affiliate_percentage?: number | null;

  /**
   * Body param: The enrollment status in the member affiliate program.
   */
  member_affiliate_status?: 'enabled' | 'disabled';

  /**
   * Body param: Custom key-value pairs to store on the product.
   */
  metadata?: unknown | null;

  /**
   * Body param: The unique identifier of the tax classification code. See the
   * available
   * [product categories](https://docs.numeral.com/essentials/product-categories).
   */
  product_tax_code_id?: string | null;

  /**
   * Body param: A URL to redirect the customer to after purchase.
   */
  redirect_purchase_url?: string | null;

  /**
   * Body param: The URL slug for the product's public link.
   */
  route?: string | null;

  /**
   * Body param: Whether to send an automated welcome message via support chat when a
   * user joins this product. Defaults to true.
   */
  send_welcome_message?: boolean | null;

  /**
   * Body param: Whether the product is visible to customers.
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

export interface ProductRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface ProductUpdateParams {
  /**
   * Body param: A wide image for the product, shown on the product page and on
   * listing cards. Pass `{ id }` for an existing attachment or
   * `{ direct_upload_id }` for a completed direct upload; `null` removes it.
   */
  banner_image?: ProductUpdateParams.BannerImage | null;

  /**
   * Body param: A written description displayed on the product page.
   */
  description?: string | null;

  /**
   * Body param: A short marketing headline for the product page.
   */
  headline?: string | null;

  /**
   * Body param: Labels used to group products into collections. Replaces the
   * existing labels. Send an empty array to clear them.
   */
  labels?: Array<string> | null;

  /**
   * Body param: Custom key-value pairs to store on the product.
   */
  metadata?: unknown | null;

  /**
   * Body param: The unique identifier of the tax classification code. See the
   * available
   * [product categories](https://docs.numeral.com/essentials/product-categories).
   */
  product_tax_code_id?: string | null;

  /**
   * Body param: Whether to send an automated welcome message via support chat when a
   * user joins this product.
   */
  send_welcome_message?: boolean | null;

  /**
   * Body param: The display name of the product.
   */
  title?: string;

  /**
   * Body param: Whether the product is visible to customers.
   */
  visibility?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export namespace ProductUpdateParams {
  /**
   * A wide image for the product, shown on the product page and on listing cards.
   * Pass `{ id }` for an existing attachment or `{ direct_upload_id }` for a
   * completed direct upload; `null` removes it.
   */
  export interface BannerImage {
    /**
     * The tag of an already-uploaded attachment.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }
}

export interface ProductListParams extends CursorPageParams {
  /**
   * Query param: Filter to only products matching these types.
   */
  access_pass_types?: Array<string>;

  /**
   * Query param: The unique identifier of the account to list products for. Omit to
   * search the public marketplace.
   */
  account_id?: string;

  /**
   * Query param: A cursor; returns products before this position.
   */
  before?: string;

  /**
   * Query param: Only return products created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only return products created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction for results. Defaults to descending.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of products to return (default and max 100).
   */
  first?: number;

  /**
   * Query param: Filter to only products carrying all of these labels. Labels are
   * matched lowercased.
   */
  labels?: Array<string>;

  /**
   * Query param: The number of products to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: Only return marketplace products assigned to this category route,
   * such as `trading`.
   */
  marketplace_category_route?: string;

  /**
   * Query param: The field to sort results by. Account lists default to
   * `created_at`. Marketplace lists default to `discoverable_at` and accept
   * `created_at` or `discoverable_at`. Cannot be combined with `query`.
   */
  order?: string;

  /**
   * Query param: Filter to products with a buyable plan of these billing models,
   * such as `one_time` or `renewal`.
   */
  plan_types?: Array<'renewal' | 'one_time'>;

  /**
   * Query param: Only return products whose advertised buyable plan has a displayed
   * price of at most this amount. Recurring plans use renewal price.
   */
  price_maximum?: number;

  /**
   * Query param: Only return products whose advertised buyable plan has a displayed
   * price of at least this amount. Recurring plans use renewal price.
   */
  price_minimum?: number;

  /**
   * Query param: Ranked search against product title and headline. Omit to browse by
   * recency.
   */
  query?: string;

  /**
   * Query param: Filter to only products matching these visibility states. Ignored
   * on the public marketplace list, which only returns visible products.
   */
  visibilities?: Array<string>;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface ProductDeleteParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Products {
  export {
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };
}

export { type ProductListItemsCursorPage };
