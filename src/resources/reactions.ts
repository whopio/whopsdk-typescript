// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Reactions extends APIResource {
  /**
   * Creates a new reaction
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  create(body: ReactionCreateParams, options?: RequestOptions): APIPromise<Shared.Reaction> {
    return this._client.post('/reactions', { body, ...options });
  }

  /**
   * Retrieves a reaction
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Reaction> {
    return this._client.get(path`/reactions/${id}`, options);
  }

  /**
   * Lists reactions for a post or a message
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
}

export type ReactionListResponsesCursorPage = CursorPage<ReactionListResponse>;

/**
 * Represents a reaction to a feed post
 */
export interface ReactionListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The emoji that was used in shortcode format (:heart:)
   */
  emoji: string | null;

  /**
   * The ID of the post this reaction belongs to
   */
  resource_id: string;

  /**
   * The user who reacted to the post
   */
  user: ReactionListResponse.User;
}

export namespace ReactionListResponse {
  /**
   * The user who reacted to the post
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

export interface ReactionCreateParams {
  /**
   * The ID of the post or message to react to.
   */
  resource_id: string;

  /**
   * The emoji to react with (e.g., :heart: or '😀'). It will be ignored in forums,
   * as everything will be :heart:
   */
  emoji?: string | null;
}

export interface ReactionListParams extends CursorPageParams {
  /**
   * The ID of the post or message to list reactions for
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

export declare namespace Reactions {
  export {
    type ReactionListResponse as ReactionListResponse,
    type ReactionListResponsesCursorPage as ReactionListResponsesCursorPage,
    type ReactionCreateParams as ReactionCreateParams,
    type ReactionListParams as ReactionListParams,
  };
}
