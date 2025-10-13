// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ChatChannels extends APIResource {
  /**
   * Retrieves a chat channel
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
   * Updates a chat channel
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
   * Lists chat channels inside a company
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
 * Represents a Chat feed
 */
export interface ChatChannelListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Whether or not media is banned in this chat
   */
  ban_media: boolean;

  /**
   * Whether or not URLs are banned in this chat
   */
  ban_urls: boolean;

  /**
   * List of banned words in this chat
   */
  banned_words: Array<string>;

  /**
   * The experience for this chat
   */
  experience: ChatChannelListResponse.Experience;

  /**
   * The number of seconds a user needs to wait before posting again, if any
   */
  user_posts_cooldown_seconds: number | null;

  /**
   * Who can post on this chat
   */
  who_can_post: Shared.WhoCanPost;

  /**
   * Who can react on this chat
   */
  who_can_react: Shared.WhoCanReact;
}

export namespace ChatChannelListResponse {
  /**
   * The experience for this chat
   */
  export interface Experience {
    /**
     * The unique ID representing this experience
     */
    id: string;

    /**
     * The written name of the description.
     */
    name: string;
  }
}

export interface ChatChannelUpdateParams {
  /**
   * Whether media uploads are banned in this chat
   */
  ban_media?: boolean | null;

  /**
   * Whether URLs are banned in this chat
   */
  ban_urls?: boolean | null;

  /**
   * List of banned words for this chat
   */
  banned_words?: Array<string> | null;

  /**
   * The cooldown period in seconds between user posts
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
   * The ID of the company to list chat channels for
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
   * If provided, only chat channels connected to this product are returned
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
