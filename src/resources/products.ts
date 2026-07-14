// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ProductListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Product is a digital good or service sold on Whop. Products may contain plans for pricing and/or experiences for content delivery.
 *
 * Use the Products API to create products, list products visible to your credentials, retrieve product details, update product metadata or merchandising fields, and delete products that should no longer be sold.
 */
export class Products extends APIResource {
  /**
   * Returns a paginated list of products belonging to a company.
   */
  list(
    query: ProductListParams,
    options?: RequestOptions,
  ): PagePromise<ProductListItemsCursorPage, Shared.ProductListItem> {
    return this._client.getAPIList('/products', CursorPage<Shared.ProductListItem>, { query, ...options });
  }

  /**
   * Retrieves the details of an existing product. This endpoint is publicly
   * accessible.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.get(path`/products/${id}`, options);
  }

  /**
   * Creates a new product for a company.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Updates an existing product.
   */
  update(id: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.patch(path`/products/${id}`, { body, ...options });
  }

  /**
   * Deletes a product. Only products with no memberships, entries, reviews, or
   * invoices can be deleted.
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/products/${id}`, options);
  }
}

export type ProductDeleteResponse = boolean;

export interface ProductListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list products for.
   */
  company_id: string;

  /**
   * Filter to only products matching these types.
   */
  access_pass_types?: Array<string>;

  /**
   * A cursor; returns products before this position.
   */
  before?: string;

  /**
   * The sort direction for results. Defaults to descending.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of products to return (default and max 100).
   */
  first?: number;

  /**
   * The number of products to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort results by. Defaults to created_at.
   */
  order?: string;

  /**
   * Filter to only products matching these visibility states.
   */
  visibilities?: Array<string>;
}

export interface ProductCreateParams {
  /**
   * The display name of the product. Maximum 80 characters.
   */
  title: string;

  /**
   * Whether to collect a shipping address at checkout.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The unique identifier of the company to create this product for.
   */
  company_id?: string;

  /**
   * The call-to-action button label.
   */
  custom_cta?: string | null;

  /**
   * A URL the call-to-action button links to.
   */
  custom_cta_url?: string | null;

  /**
   * Custom bank statement descriptor. Must start with WHOP\*.
   */
  custom_statement_descriptor?: string | null;

  /**
   * A written description displayed on the product page.
   */
  description?: string | null;

  /**
   * The commission rate affiliates earn.
   */
  global_affiliate_percentage?: number | null;

  /**
   * The enrollment status in the global affiliate program.
   */
  global_affiliate_status?: string;

  /**
   * A short marketing headline for the product page.
   */
  headline?: string | null;

  /**
   * The commission rate members earn.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The enrollment status in the member affiliate program.
   */
  member_affiliate_status?: string;

  /**
   * Custom key-value pairs to store on the product.
   */
  metadata?: unknown | null;

  /**
   * The unique identifier of the tax classification code. See the available
   * [product categories](https://docs.numeral.com/essentials/product-categories).
   */
  product_tax_code_id?: string | null;

  /**
   * A URL to redirect the customer to after purchase.
   */
  redirect_purchase_url?: string | null;

  /**
   * The URL slug for the product's public link.
   */
  route?: string | null;

  /**
   * Whether to send an automated welcome message via support chat when a user joins
   * this product. Defaults to true.
   */
  send_welcome_message?: boolean | null;

  /**
   * Whether the product is visible to customers.
   */
  visibility?: string;
}

export interface ProductUpdateParams {
  /**
   * A written description displayed on the product page.
   */
  description?: string | null;

  /**
   * A short marketing headline for the product page.
   */
  headline?: string | null;

  /**
   * Custom key-value pairs to store on the product.
   */
  metadata?: unknown | null;

  /**
   * The unique identifier of the tax classification code. See the available
   * [product categories](https://docs.numeral.com/essentials/product-categories).
   */
  product_tax_code_id?: string | null;

  /**
   * Whether to send an automated welcome message via support chat when a user joins
   * this product.
   */
  send_welcome_message?: boolean | null;

  /**
   * The display name of the product.
   */
  title?: string;

  /**
   * Whether the product is visible to customers.
   */
  visibility?: string;
}

export declare namespace Products {
  export {
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductListParams as ProductListParams,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
  };
}

export { type ProductListItemsCursorPage };
