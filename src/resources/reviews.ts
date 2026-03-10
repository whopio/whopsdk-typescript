// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Reviews
 */
export class Reviews extends APIResource {
  /**
   * Retrieves the details of an existing review.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReviewRetrieveResponse> {
    return this._client.get(path`/reviews/${id}`, options);
  }

  /**
   * Returns a paginated list of customer reviews for a specific product, with
   * optional filtering by star rating and creation date.
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
 * A user-submitted review of a company, including a star rating and optional text
 * feedback.
 */
export interface ReviewRetrieveResponse {
  /**
   * The unique identifier for the review.
   */
  id: string;

  /**
   * A list of files and media attached to the review.
   */
  attachments: Array<ReviewRetrieveResponse.Attachment>;

  /**
   * The company that this review was written for.
   */
  company: ReviewRetrieveResponse.Company;

  /**
   * The datetime the review was created.
   */
  created_at: string;

  /**
   * The body text of the review containing the user's detailed feedback. Returns an
   * empty string if no description was provided.
   */
  description: string | null;

  /**
   * The timestamp of when the reviewer first joined the product. Null if unknown.
   */
  joined_at: string | null;

  /**
   * Whether the reviewer paid for the product. Null if the payment status is
   * unknown.
   */
  paid_for_product: boolean | null;

  /**
   * The product that this review was written for.
   */
  product: ReviewRetrieveResponse.Product;

  /**
   * The timestamp of when the review was published. Null if the review has not been
   * published yet.
   */
  published_at: string | null;

  /**
   * The star rating given by the reviewer, from 1 to 5.
   */
  stars: number;

  /**
   * The current moderation status of the review.
   */
  status: ReviewStatus;

  /**
   * A short summary title for the review. Null if the reviewer did not provide one.
   */
  title: string | null;

  /**
   * The datetime the review was last updated.
   */
  updated_at: string;

  /**
   * The user account of the person who wrote this review.
   */
  user: ReviewRetrieveResponse.User;
}

export namespace ReviewRetrieveResponse {
  /**
   * Represents an image attachment
   */
  export interface Attachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
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
   * The company that this review was written for.
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
   * The product that this review was written for.
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
   * The user account of the person who wrote this review.
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
 * A user-submitted review of a company, including a star rating and optional text
 * feedback.
 */
export interface ReviewListResponse {
  /**
   * The unique identifier for the review.
   */
  id: string;

  /**
   * A list of files and media attached to the review.
   */
  attachments: Array<ReviewListResponse.Attachment>;

  /**
   * The datetime the review was created.
   */
  created_at: string;

  /**
   * The body text of the review containing the user's detailed feedback. Returns an
   * empty string if no description was provided.
   */
  description: string | null;

  /**
   * The timestamp of when the reviewer first joined the product. Null if unknown.
   */
  joined_at: string | null;

  /**
   * Whether the reviewer paid for the product. Null if the payment status is
   * unknown.
   */
  paid_for_product: boolean | null;

  /**
   * The timestamp of when the review was published. Null if the review has not been
   * published yet.
   */
  published_at: string | null;

  /**
   * The star rating given by the reviewer, from 1 to 5.
   */
  stars: number;

  /**
   * The current moderation status of the review.
   */
  status: ReviewStatus;

  /**
   * A short summary title for the review. Null if the reviewer did not provide one.
   */
  title: string | null;

  /**
   * The datetime the review was last updated.
   */
  updated_at: string;

  /**
   * The user account of the person who wrote this review.
   */
  user: ReviewListResponse.User;
}

export namespace ReviewListResponse {
  /**
   * Represents an image attachment
   */
  export interface Attachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
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
   * The user account of the person who wrote this review.
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
   * The unique identifier of the product to list reviews for.
   */
  product_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return reviews created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return reviews created before this timestamp.
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
   * The maximum star rating to include in results, from 1 to 5 inclusive.
   */
  max_stars?: number | null;

  /**
   * The minimum star rating to include in results, from 1 to 5 inclusive.
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
