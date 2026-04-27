// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Reactions
 */
export class Reactions extends APIResource {
  /**
   * Add an emoji reaction or poll vote to a message or forum post. In forums, the
   * reaction is always a like.
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  create(body: ReactionCreateParams, options?: RequestOptions): APIPromise<Shared.Reaction> {
    return this._client.post('/reactions', { body, ...options });
  }

  /**
   * Retrieves the details of an existing reaction.
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Reaction> {
    return this._client.get(path`/reactions/${id}`, options);
  }

  /**
   * Returns a paginated list of emoji reactions on a specific message or forum post,
   * sorted by most recent.
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  list(
    query: ReactionListParams,
    options?: RequestOptions,
  ): PagePromise<ReactionListResponsesCursorPage, ReactionListResponse> {
    return this._client.getAPIList('/reactions', CursorPage<ReactionListResponse>, { query, ...options });
  }

  /**
   * Remove an emoji reaction from a message or forum post. Only the reaction author
   * or a channel admin can remove a reaction.
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  delete(
    id: string,
    params: ReactionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReactionDeleteResponse> {
    const { emoji } = params ?? {};
    return this._client.delete(path`/reactions/${id}`, { query: { emoji }, ...options });
  }
}

export type ReactionListResponsesCursorPage = CursorPage<ReactionListResponse>;

/**
 * A single reaction left by a user on a feed post, such as a like or emoji.
 */
export interface ReactionListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The emoji used for this reaction in shortcode format. Null if the reaction type
   * is not emoji.
   */
  emoji: string | null;

  /**
   * The unique identifier of the post this reaction was left on.
   */
  resource_id: string;

  /**
   * The user who left this reaction on the post.
   */
  user: ReactionListResponse.User;
}

export namespace ReactionListResponse {
  /**
   * The user who left this reaction on the post.
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
 * Represents `true` or `false` values.
 */
export type ReactionDeleteResponse = boolean;

export interface ReactionCreateParams {
  /**
   * The unique identifier of the message or forum post to react to.
   */
  resource_id: string;

  /**
   * The emoji to react with, in shortcode or unicode format. For example, ':heart:'
   * or a unicode emoji. Ignored in forums where reactions are always likes.
   */
  emoji?: string | null;

  /**
   * The unique identifier of a poll option to vote for. Only valid when the target
   * message or post contains a poll.
   */
  poll_option_id?: string | null;
}

export interface ReactionListParams extends CursorPageParams {
  /**
   * The unique identifier of the message or forum post to list reactions for.
   */
  resource_id: string;

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
}

export interface ReactionDeleteParams {
  /**
   * The emoji to remove, in shortcode or unicode format. For example, ':heart:' or a
   * unicode emoji. Required when the id refers to a message or post instead of a
   * reaction.
   */
  emoji?: string | null;
}

export declare namespace Reactions {
  export {
    type ReactionListResponse as ReactionListResponse,
    type ReactionDeleteResponse as ReactionDeleteResponse,
    type ReactionListResponsesCursorPage as ReactionListResponsesCursorPage,
    type ReactionCreateParams as ReactionCreateParams,
    type ReactionListParams as ReactionListParams,
    type ReactionDeleteParams as ReactionDeleteParams,
  };
}
