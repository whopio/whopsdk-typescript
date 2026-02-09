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
   * The unique identifier for the review.
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
   * The datetime the review was created.
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
   * The datetime the review was last updated.
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
     * The unique identifier of the attachment.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The company the review is for.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
     */
    route: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The product the review is for.
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

  /**
   * The user account that performed the action.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

/**
 * An object representing a user review of a company.
 */
export interface ReviewListResponse {
  /**
   * The unique identifier for the review.
   */
  id: string;

  /**
   * The attachments attached to the review.
   */
  attachments: Array<ReviewListResponse.Attachment>;

  /**
   * The datetime the review was created.
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
   * The datetime the review was last updated.
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
     * The unique identifier of the attachment.
     */
    id: string;

    /**
     * The MIME type of the uploaded file (e.g., image/jpeg, video/mp4, audio/mpeg).
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The user account that performed the action.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
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
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

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
