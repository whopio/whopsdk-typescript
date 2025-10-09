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
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ChatChannelRetrieveResponse> {
    return this._client.get(path`/chat_channels/${id}`, options);
  }

  /**
   * Lists chat channels inside a company
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  list(
    query: ChatChannelListParams,
    options?: RequestOptions,
  ): PagePromise<ChatChannelListResponsesCursorPage, ChatChannelListResponse | null> {
    return this._client.getAPIList('/chat_channels', CursorPage<ChatChannelListResponse | null>, {
      query,
      ...options,
    });
  }
}

export type ChatChannelListResponsesCursorPage = CursorPage<ChatChannelListResponse | null>;

/**
 * Represents a Chat feed
 */
export interface ChatChannelRetrieveResponse {
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
   * The experience for this chat
   */
  experience: ChatChannelRetrieveResponse.Experience;

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

export namespace ChatChannelRetrieveResponse {
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
    type ChatChannelRetrieveResponse as ChatChannelRetrieveResponse,
    type ChatChannelListResponse as ChatChannelListResponse,
    type ChatChannelListResponsesCursorPage as ChatChannelListResponsesCursorPage,
    type ChatChannelListParams as ChatChannelListParams,
  };
}
