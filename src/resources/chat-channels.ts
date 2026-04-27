// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Chat channels
 */
export class ChatChannels extends APIResource {
  /**
   * Retrieves the details of an existing chat channel.
   *
   * Required permissions:
   *
   * - `chat:read`
   *
   * @example
   * ```ts
   * const chatChannel = await client.chatChannels.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.ChatChannel> {
    return this._client.get(path`/chat_channels/${id}`, options);
  }

  /**
   * Update moderation settings for a chat channel, such as who can post, banned
   * words, and media restrictions.
   *
   * Required permissions:
   *
   * - `chat:moderate`
   *
   * @example
   * ```ts
   * const chatChannel = await client.chatChannels.update('id');
   * ```
   */
  update(
    id: string,
    body: ChatChannelUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.ChatChannel> {
    return this._client.patch(path`/chat_channels/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of chat channels within a specific company, with
   * optional filtering by product.
   *
   * Required permissions:
   *
   * - `chat:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const chatChannelListResponse of client.chatChannels.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ChatChannelListParams,
    options?: RequestOptions,
  ): PagePromise<ChatChannelListResponsesCursorPage, ChatChannelListResponse> {
    return this._client.getAPIList('/chat_channels', CursorPage<ChatChannelListResponse>, {
      query,
      ...options,
    });
  }
}

export type ChatChannelListResponsesCursorPage = CursorPage<ChatChannelListResponse>;

/**
 * A real-time chat feed attached to an experience, with configurable moderation
 * and posting permissions.
 */
export interface ChatChannelListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Whether media uploads such as images and videos are blocked in this chat.
   */
  ban_media: boolean;

  /**
   * Whether URL links are blocked from being posted in this chat.
   */
  ban_urls: boolean;

  /**
   * A list of words that are automatically filtered from messages in this chat.
   */
  banned_words: Array<string>;

  /**
   * The experience this chat feed is attached to.
   */
  experience: ChatChannelListResponse.Experience;

  /**
   * The minimum number of seconds a user must wait between consecutive messages.
   * Null if no cooldown is enforced.
   */
  user_posts_cooldown_seconds: number | null;

  /**
   * The permission level controlling which users can send messages in this chat.
   */
  who_can_post: Shared.WhoCanPost;

  /**
   * The permission level controlling which users can add reactions in this chat.
   */
  who_can_react: Shared.WhoCanReact;
}

export namespace ChatChannelListResponse {
  /**
   * The experience this chat feed is attached to.
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

export interface ChatChannelUpdateParams {
  /**
   * Whether media uploads such as images and videos are banned in this chat channel.
   */
  ban_media?: boolean | null;

  /**
   * Whether URLs and links are banned from being posted in this chat channel.
   */
  ban_urls?: boolean | null;

  /**
   * A list of words that are automatically blocked from messages in this chat
   * channel. For example, ['spam', 'scam'].
   */
  banned_words?: Array<string> | null;

  /**
   * The minimum number of seconds a user must wait between sending messages in this
   * chat channel.
   */
  user_posts_cooldown_seconds?: number | null;

  /**
   * Who can post on a chat feed
   */
  who_can_post?: Shared.WhoCanPost | null;

  /**
   * Who can react on a chat feed
   */
  who_can_react?: Shared.WhoCanReact | null;
}

export interface ChatChannelListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list chat channels for.
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
   * The unique identifier of a product to filter by. When set, only chat channels
   * connected to this product are returned.
   */
  product_id?: string | null;
}

export declare namespace ChatChannels {
  export {
    type ChatChannelListResponse as ChatChannelListResponse,
    type ChatChannelListResponsesCursorPage as ChatChannelListResponsesCursorPage,
    type ChatChannelUpdateParams as ChatChannelUpdateParams,
    type ChatChannelListParams as ChatChannelListParams,
  };
}
