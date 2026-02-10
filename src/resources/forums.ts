// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Forums extends APIResource {
  /**
   * Retrieves the details of an existing forum.
   *
   * Required permissions:
   *
   * - `forum:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Forum> {
    return this._client.get(path`/forums/${id}`, options);
  }

  /**
   * Update moderation and notification settings for a forum, such as who can post,
   * who can comment, and email notification preferences.
   *
   * Required permissions:
   *
   * - `forum:moderate`
   */
  update(
    id: string,
    body: ForumUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Forum> {
    return this._client.patch(path`/forums/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of forums within a specific company, with optional
   * filtering by product.
   *
   * Required permissions:
   *
   * - `forum:read`
   */
  list(
    query: ForumListParams,
    options?: RequestOptions,
  ): PagePromise<ForumListResponsesCursorPage, ForumListResponse> {
    return this._client.getAPIList('/forums', CursorPage<ForumListResponse>, { query, ...options });
  }
}

export type ForumListResponsesCursorPage = CursorPage<ForumListResponse>;

/**
 * A discussion forum where members can create posts, comment, and react, belonging
 * to an experience.
 */
export interface ForumListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The email notification setting that controls which posts trigger email alerts.
   * One of: all_admin_posts, only_weekly_summary, none.
   */
  email_notification_preference: Shared.EmailNotificationPreferences;

  /**
   * The parent experience that this forum belongs to.
   */
  experience: ForumListResponse.Experience;

  /**
   * The permission level controlling who can comment on posts. One of: everyone,
   * admins.
   */
  who_can_comment: Shared.WhoCanCommentTypes;

  /**
   * The permission level controlling who can create new posts. One of: everyone,
   * admins.
   */
  who_can_post: Shared.WhoCanPostTypes;
}

export namespace ForumListResponse {
  /**
   * The parent experience that this forum belongs to.
   */
  export interface Experience {
    /**
     * The unique identifier for the experience.
     */
    id: string;

    /**
     * The display name of this experience shown to users in the product navigation.
     * Maximum 255 characters.
     */
    name: string;
  }
}

export interface ForumUpdateParams {
  /**
   * Email notification preference option for a forum feed
   */
  email_notification_preference?: Shared.EmailNotificationPreferences | null;

  /**
   * Who can comment on a forum feed
   */
  who_can_comment?: Shared.WhoCanCommentTypes | null;

  /**
   * Who can post on a forum feed
   */
  who_can_post?: Shared.WhoCanPostTypes | null;
}

export interface ForumListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list forums for.
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
   * The unique identifier of a product to filter by. When set, only forums connected
   * to this product are returned.
   */
  product_id?: string | null;
}

export declare namespace Forums {
  export {
    type ForumListResponse as ForumListResponse,
    type ForumListResponsesCursorPage as ForumListResponsesCursorPage,
    type ForumUpdateParams as ForumUpdateParams,
    type ForumListParams as ForumListParams,
  };
}
