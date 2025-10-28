// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ForumPosts extends APIResource {
  /**
   * Create a new forum post
   *
   * Required permissions:
   *
   * - `forum:post:create`
   *
   * @example
   * ```ts
   * const forumPost = await client.forumPosts.create({
   *   experience_id: 'exp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: ForumPostCreateParams, options?: RequestOptions): APIPromise<Shared.ForumPost> {
    return this._client.post('/forum_posts', { body, ...options });
  }

  /**
   * Retrieves a forum post by ID
   *
   * Required permissions:
   *
   * - `forum:read`
   *
   * @example
   * ```ts
   * const forumPost = await client.forumPosts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.ForumPost> {
    return this._client.get(path`/forum_posts/${id}`, options);
  }

  /**
   * Update an existing forum post
   *
   * @example
   * ```ts
   * const forumPost = await client.forumPosts.update('id');
   * ```
   */
  update(
    id: string,
    body: ForumPostUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.ForumPost> {
    return this._client.patch(path`/forum_posts/${id}`, { body, ...options });
  }

  /**
   * Lists forum posts
   *
   * Required permissions:
   *
   * - `forum:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const forumPostListResponse of client.forumPosts.list(
   *   { experience_id: 'exp_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ForumPostListParams,
    options?: RequestOptions,
  ): PagePromise<ForumPostListResponsesCursorPage, ForumPostListResponse> {
    return this._client.getAPIList('/forum_posts', CursorPage<ForumPostListResponse>, { query, ...options });
  }
}

export type ForumPostListResponsesCursorPage = CursorPage<ForumPostListResponse>;

/**
 * Represents a post in forum
 */
export interface ForumPostListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The amount of comments on this post
   */
  comment_count: number;

  /**
   * The content of the forum post in Markdown format
   */
  content: string | null;

  /**
   * The timestamp when the post was created
   */
  created_at: string;

  /**
   * Whether the forum post has been edited
   */
  is_edited: boolean;

  /**
   * Whether this forum post is pinned
   */
  is_pinned: boolean;

  /**
   * Whether the user that sent the post is an admin of the company
   */
  is_poster_admin: boolean;

  /**
   * The number of likes this post has received
   */
  like_count: number | null;

  /**
   * The ID of the parent forum post, if applicable
   */
  parent_id: string | null;

  /**
   * The title of the forum post
   */
  title: string | null;

  /**
   * The timestamp when the post was last updated
   */
  updated_at: string;

  /**
   * The user who created this forum post
   */
  user: ForumPostListResponse.User;

  /**
   * The number of times this message has been viewed
   */
  view_count: number | null;
}

export namespace ForumPostListResponse {
  /**
   * The user who created this forum post
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

export interface ForumPostCreateParams {
  /**
   * The experience to create this post in
   */
  experience_id: string;

  /**
   * The attachments for this post
   */
  attachments?: Array<ForumPostCreateParams.Attachment> | null;

  /**
   * This is the main body of the post in Markdown format. Hidden if paywalled and
   * user hasn't purchased access to it.
   */
  content?: string | null;

  /**
   * This is used to determine if the post should be sent as a 'mention' notification
   * to all of the users who are in the experience. This means that anyone with
   * 'mentions' enabled will receive a notification about this post.
   */
  is_mention?: boolean | null;

  /**
   * The ID of the parent post. Set it to the ID of the post you want to comment on
   * or don't include it if its a top level post.
   */
  parent_id?: string | null;

  /**
   * The amount to paywall this post by. A paywalled post requires the user to
   * purchase it in order to view its content.
   */
  paywall_amount?: number | null;

  /**
   * The available currencies on the platform
   */
  paywall_currency?: Shared.Currency | null;

  /**
   * Whether the post should be pinned
   */
  pinned?: boolean | null;

  /**
   * The poll for this post
   */
  poll?: ForumPostCreateParams.Poll | null;

  /**
   * The title of the post. Only visible if paywalled.
   */
  title?: string | null;
}

export namespace ForumPostCreateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
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
   * The poll for this post
   */
  export interface Poll {
    /**
     * The options for the poll. Must have sequential IDs starting from 1
     */
    options: Array<Poll.Option>;
  }

  export namespace Poll {
    /**
     * Input type for a single poll option
     */
    export interface Option {
      /**
       * Sequential ID for the poll option (starting from '1')
       */
      id: string;

      /**
       * The text of the poll option
       */
      text: string;
    }
  }
}

export interface ForumPostUpdateParams {
  /**
   * The attachments for this post
   */
  attachments?: Array<ForumPostUpdateParams.Attachment> | null;

  /**
   * This is the main body of the post in Markdown format. Hidden if paywalled and
   * user hasn't purchased access to it.
   */
  content?: string | null;

  /**
   * Whether the post is pinned. You can only pin a top level posts (not comments).
   */
  is_pinned?: boolean | null;

  /**
   * The title of the post. Only visible if paywalled.
   */
  title?: string | null;
}

export namespace ForumPostUpdateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
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

export interface ForumPostListParams extends CursorPageParams {
  /**
   * The ID of the experience to list forum posts for
   */
  experience_id: string;

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
   * The ID of the parent post to list forum post comments for
   */
  parent_id?: string | null;

  /**
   * Set to true to only return pinned posts
   */
  pinned?: boolean | null;
}

export declare namespace ForumPosts {
  export {
    type ForumPostListResponse as ForumPostListResponse,
    type ForumPostListResponsesCursorPage as ForumPostListResponsesCursorPage,
    type ForumPostCreateParams as ForumPostCreateParams,
    type ForumPostUpdateParams as ForumPostUpdateParams,
    type ForumPostListParams as ForumPostListParams,
  };
}
