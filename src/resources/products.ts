// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Retrieves a product by ID or route
   *
   * Required permissions:
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Product | null> {
    return this._client.get(path`/products/${id}`, options);
  }

  /**
   * Lists products for a company
   *
   * Required permissions:
   *
   * - `access_pass:basic:read`
   */
  list(
    query: ProductListParams,
    options?: RequestOptions,
  ): PagePromise<ProductListItemsCursorPage, Shared.ProductListItem | null> {
    return this._client.getAPIList('/products', CursorPage<Shared.ProductListItem | null>, {
      query,
      ...options,
    });
  }
}

export type ProductListItemsCursorPage = CursorPage<Shared.ProductListItem | null>;

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
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The different types an access pass can be.
   */
  product_type?: 'regular' | 'app' | 'experience_upsell' | 'api_only' | null;
}

export declare namespace Products {
  export {
    type ProductListItemsCursorPage as ProductListItemsCursorPage,
    type ProductListParams as ProductListParams,
  };
}
