// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Reviews extends APIResource {
  /**
   * Retrieve a review by its ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReviewRetrieveResponse> {
    return this._client.get(path`/reviews/${id}`, options);
  }

  /**
   * List all reviews
   */
  list(
    query: ReviewListParams,
    options?: RequestOptions,
  ): PagePromise<ReviewListResponsesCursorPage, ReviewListResponse> {
    return this._client.getAPIList('/reviews', CursorPage<ReviewListResponse>, { query, ...options });
  }
}

export type ReviewListResponsesCursorPage = CursorPage<ReviewListResponse>;

/**
 * The statuses a review can have
 */
export type ReviewStatus = 'pending' | 'published' | 'removed';

/**
 * An object representing a user review of a company.
 */
export interface ReviewRetrieveResponse {
  /**
   * The internal ID of the review.
   */
  id: string;

  /**
   * The attachments attached to the review.
   */
  attachments: Array<ReviewRetrieveResponse.Attachment>;

  /**
   * The company the review is for.
   */
  company: ReviewRetrieveResponse.Company;

  /**
   * The timestamp of when the review was created.
   */
  created_at: string;

  /**
   * The description of the review.
   */
  description: string | null;

  /**
   * The timestamp of when the user joined the product.
   */
  joined_at: string | null;

  /**
   * Whether or not the user paid for the product. If null, the payment status is
   * unknown.
   */
  paid_for_product: boolean | null;

  /**
   * The product the review is for.
   */
  product: ReviewRetrieveResponse.Product;

  /**
   * The timestamp of when the review was published.
   */
  published_at: string | null;

  /**
   * The number of stars the user gave the product.
   */
  stars: number;

  /**
   * The status of the review.
   */
  status: ReviewStatus;

  /**
   * The title of the review.
   */
  title: string | null;

  /**
   * The timestamp of when the review was last updated.
   */
  updated_at: string;

  /**
   * The user account that performed the action.
   */
  user: ReviewRetrieveResponse.User;
}

export namespace ReviewRetrieveResponse {
  /**
   * Represents an image attachment
   */
  export interface Attachment {
    /**
     * The ID of the attachment
     */
    id: string;

    /**
     * The attachment's content type (e.g., image/jpg, video/mp4)
     */
    content_type: string | null;

    /**
     * The name of the file
     */
    filename: string | null;

    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
  }

  /**
   * The company the review is for.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * The product the review is for.
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

  /**
   * The user account that performed the action.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * An object representing a user review of a company.
 */
export interface ReviewListResponse {
  /**
   * The internal ID of the review.
   */
  id: string;

  /**
   * The attachments attached to the review.
   */
  attachments: Array<ReviewListResponse.Attachment>;

  /**
   * The timestamp of when the review was created.
   */
  created_at: string;

  /**
   * The description of the review.
   */
  description: string | null;

  /**
   * The timestamp of when the user joined the product.
   */
  joined_at: string | null;

  /**
   * Whether or not the user paid for the product. If null, the payment status is
   * unknown.
   */
  paid_for_product: boolean | null;

  /**
   * The timestamp of when the review was published.
   */
  published_at: string | null;

  /**
   * The number of stars the user gave the product.
   */
  stars: number;

  /**
   * The status of the review.
   */
  status: ReviewStatus;

  /**
   * The title of the review.
   */
  title: string | null;

  /**
   * The timestamp of when the review was last updated.
   */
  updated_at: string;

  /**
   * The user account that performed the action.
   */
  user: ReviewListResponse.User;
}

export namespace ReviewListResponse {
  /**
   * Represents an image attachment
   */
  export interface Attachment {
    /**
     * The ID of the attachment
     */
    id: string;

    /**
     * The attachment's content type (e.g., image/jpg, video/mp4)
     */
    content_type: string | null;

    /**
     * The name of the file
     */
    filename: string | null;

    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
  }

  /**
   * The user account that performed the action.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

export interface ReviewListParams extends CursorPageParams {
  /**
   * The ID of the product
   */
  product_id: string;

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
   * The maximum star rating of the review (inclusive)
   */
  max_stars?: number | null;

  /**
   * The minimum star rating of the review (inclusive)
   */
  min_stars?: number | null;
}

export declare namespace Reviews {
  export {
    type ReviewStatus as ReviewStatus,
    type ReviewRetrieveResponse as ReviewRetrieveResponse,
    type ReviewListResponse as ReviewListResponse,
    type ReviewListResponsesCursorPage as ReviewListResponsesCursorPage,
    type ReviewListParams as ReviewListParams,
  };
}
