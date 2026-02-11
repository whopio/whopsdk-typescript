// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ForumPosts extends APIResource {
  /**
   * Create a new forum post or comment within an experience. Supports text content,
   * attachments, polls, paywalling, and pinning. Pass experience_id 'public' with a
   * company_id to post to a company's public forum.
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
   * Retrieves the details of an existing forum post.
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
   * Edit the content, attachments, pinned status, or visibility of an existing forum
   * post or comment.
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
   * Returns a paginated list of forum posts within a specific experience, with
   * optional filtering by parent post or pinned status.
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
 * The visibility types for forum posts
 */
export type ForumPostVisibilityType = 'members_only' | 'globally_visible';

/**
 * A post or comment in a forum feed, supporting rich text, attachments, polls, and
 * reactions.
 */
export interface ForumPostListResponse {
  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  id: string;

  /**
   * The total number of direct comments on this post.
   */
  comment_count: number;

  /**
   * The body of the forum post in Markdown format. Null if the post is paywalled and
   * the current user does not have access.
   */
  content: string | null;

  /**
   * The time this post was created, as a Unix timestamp.
   */
  created_at: string;

  /**
   * Whether this post has been edited after its initial creation.
   */
  is_edited: boolean;

  /**
   * Whether this post is pinned to the top of the forum feed.
   */
  is_pinned: boolean;

  /**
   * Whether the author of this post is an admin of the company that owns the forum.
   */
  is_poster_admin: boolean;

  /**
   * The total number of like reactions this post has received.
   */
  like_count: number | null;

  /**
   * The unique identifier of the parent post. Null if this is a top-level post.
   */
  parent_id: string | null;

  /**
   * The headline of the forum post. Null if the post has no title.
   */
  title: string | null;

  /**
   * The time this post was last updated, as a Unix timestamp.
   */
  updated_at: string;

  /**
   * The user who authored this forum post.
   */
  user: ForumPostListResponse.User;

  /**
   * The total number of times this post has been viewed by users.
   */
  view_count: number | null;
}

export namespace ForumPostListResponse {
  /**
   * The user who authored this forum post.
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

export interface ForumPostCreateParams {
  /**
   * The unique identifier of the experience to create this post in. For example,
   * 'exp_xxxxx'. Pass 'public' along with company_id to automatically use the
   * company's public forum.
   */
  experience_id: string;

  /**
   * A list of file attachments to include with the post, such as images or videos.
   */
  attachments?: Array<ForumPostCreateParams.Attachment> | null;

  /**
   * The unique identifier of the company whose public forum to post in. Required
   * when experience_id is 'public'. For example, 'biz_xxxxx'.
   */
  company_id?: string | null;

  /**
   * The main body of the post in Markdown format. For example, 'Check out this
   * **update**'. Hidden if the post is paywalled and the viewer has not purchased
   * access.
   */
  content?: string | null;

  /**
   * Whether to send this post as a mention notification to all users in the
   * experience who have mentions enabled.
   */
  is_mention?: boolean | null;

  /**
   * The unique identifier of the parent post to comment on. Omit this field to
   * create a top-level post.
   */
  parent_id?: string | null;

  /**
   * The price to unlock this post in the specified paywall currency. For example,
   * 5.00 for $5.00. When set, users must purchase access to view the post content.
   */
  paywall_amount?: number | null;

  /**
   * The available currencies on the platform
   */
  paywall_currency?: Shared.Currency | null;

  /**
   * Whether this post should be pinned to the top of the forum.
   */
  pinned?: boolean | null;

  /**
   * A poll to attach to this post, allowing members to vote on options.
   */
  poll?: ForumPostCreateParams.Poll | null;

  /**
   * The title of the post, displayed prominently at the top. Required for paywalled
   * posts as it remains visible to non-purchasers.
   */
  title?: string | null;

  /**
   * The visibility types for forum posts
   */
  visibility?: ForumPostVisibilityType | null;
}

export namespace ForumPostCreateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A poll to attach to this post, allowing members to vote on options.
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
   * A replacement list of file attachments for this post, such as images or videos.
   */
  attachments?: Array<ForumPostUpdateParams.Attachment> | null;

  /**
   * The updated body of the post in Markdown format. For example, 'Check out this
   * **update**'. Hidden if the post is paywalled and the viewer has not purchased
   * access.
   */
  content?: string | null;

  /**
   * Whether this post should be pinned to the top of the forum. Only top-level posts
   * can be pinned, not comments.
   */
  is_pinned?: boolean | null;

  /**
   * The updated title of the post, displayed prominently at the top. Required for
   * paywalled posts as it remains visible to non-purchasers.
   */
  title?: string | null;

  /**
   * The visibility types for forum posts
   */
  visibility?: ForumPostVisibilityType | null;
}

export namespace ForumPostUpdateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface ForumPostListParams extends CursorPageParams {
  /**
   * The unique identifier of the experience to list forum posts for.
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
   * The unique identifier of a parent post to list comments for. When set, returns
   * replies to that post.
   */
  parent_id?: string | null;

  /**
   * Whether to filter for only pinned posts. Set to true to return only pinned
   * posts.
   */
  pinned?: boolean | null;
}

export declare namespace ForumPosts {
  export {
    type ForumPostVisibilityType as ForumPostVisibilityType,
    type ForumPostListResponse as ForumPostListResponse,
    type ForumPostListResponsesCursorPage as ForumPostListResponsesCursorPage,
    type ForumPostCreateParams as ForumPostCreateParams,
    type ForumPostUpdateParams as ForumPostUpdateParams,
    type ForumPostListParams as ForumPostListParams,
  };
}
