// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AIChats extends APIResource {
  /**
   * Creates a new AI chat
   *
   * Required permissions:
   *
   * - `ai_chat:create`
   */
  create(
    body: AIChatCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIChatCreateResponse> {
    return this._client.post('/ai_chats', { body, ...options });
  }

  /**
   * Fetches a single AI chat by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AIChatRetrieveResponse> {
    return this._client.get(path`/ai_chats/${id}`, options);
  }

  /**
   * Updates an AI chat
   *
   * Required permissions:
   *
   * - `ai_chat:update`
   */
  update(
    id: string,
    body: AIChatUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AIChatUpdateResponse> {
    return this._client.patch(path`/ai_chats/${id}`, { body, ...options });
  }

  /**
   * Fetches all AI chats for the current user
   */
  list(
    query: AIChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AIChatListResponsesCursorPage, AIChatListResponse> {
    return this._client.getAPIList('/ai_chats', CursorPage<AIChatListResponse>, { query, ...options });
  }

  /**
   * Deletes an AI chat
   *
   * Required permissions:
   *
   * - `ai_chat:delete`
   */
  delete(id: string, options?: RequestOptions): APIPromise<AIChatDeleteResponse> {
    return this._client.delete(path`/ai_chats/${id}`, options);
  }
}

export type AIChatListResponsesCursorPage = CursorPage<AIChatListResponse>;

/**
 * An AI chat conversation belonging to a user
 */
export interface AIChatCreateResponse {
  /**
   * The unique identifier for the AI chat
   */
  id: string;

  /**
   * The total number of tokens used in the chat
   */
  blended_token_usage: string;

  /**
   * When the AI chat was created
   */
  created_at: string;

  /**
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * The number of messages in the chat
   */
  message_count: number;

  /**
   * The title of the AI chat
   */
  title: string | null;

  /**
   * When the AI chat was last updated
   */
  updated_at: string;

  /**
   * The user who owns the AI chat
   */
  user: AIChatCreateResponse.User;
}

export namespace AIChatCreateResponse {
  /**
   * The user who owns the AI chat
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;
  }
}

/**
 * An AI chat conversation belonging to a user
 */
export interface AIChatRetrieveResponse {
  /**
   * The unique identifier for the AI chat
   */
  id: string;

  /**
   * The total number of tokens used in the chat
   */
  blended_token_usage: string;

  /**
   * When the AI chat was created
   */
  created_at: string;

  /**
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * The number of messages in the chat
   */
  message_count: number;

  /**
   * The title of the AI chat
   */
  title: string | null;

  /**
   * When the AI chat was last updated
   */
  updated_at: string;

  /**
   * The user who owns the AI chat
   */
  user: AIChatRetrieveResponse.User;
}

export namespace AIChatRetrieveResponse {
  /**
   * The user who owns the AI chat
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;
  }
}

/**
 * An AI chat conversation belonging to a user
 */
export interface AIChatUpdateResponse {
  /**
   * The unique identifier for the AI chat
   */
  id: string;

  /**
   * The total number of tokens used in the chat
   */
  blended_token_usage: string;

  /**
   * When the AI chat was created
   */
  created_at: string;

  /**
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * The number of messages in the chat
   */
  message_count: number;

  /**
   * The title of the AI chat
   */
  title: string | null;

  /**
   * When the AI chat was last updated
   */
  updated_at: string;

  /**
   * The user who owns the AI chat
   */
  user: AIChatUpdateResponse.User;
}

export namespace AIChatUpdateResponse {
  /**
   * The user who owns the AI chat
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;
  }
}

/**
 * An AI chat conversation belonging to a user
 */
export interface AIChatListResponse {
  /**
   * The unique identifier for the AI chat
   */
  id: string;

  /**
   * The total number of tokens used in the chat
   */
  blended_token_usage: string;

  /**
   * When the AI chat was created
   */
  created_at: string;

  /**
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * The number of messages in the chat
   */
  message_count: number;

  /**
   * The title of the AI chat
   */
  title: string | null;

  /**
   * When the AI chat was last updated
   */
  updated_at: string;

  /**
   * The user who owns the AI chat
   */
  user: AIChatListResponse.User;
}

export namespace AIChatListResponse {
  /**
   * The user who owns the AI chat
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type AIChatDeleteResponse = boolean;

export interface AIChatCreateParams {
  /**
   * The title of the AI chat
   */
  title?: string | null;
}

export interface AIChatUpdateParams {
  /**
   * The new title for the AI chat
   */
  title?: string | null;
}

export interface AIChatListParams extends CursorPageParams {
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

export declare namespace AIChats {
  export {
    type AIChatCreateResponse as AIChatCreateResponse,
    type AIChatRetrieveResponse as AIChatRetrieveResponse,
    type AIChatUpdateResponse as AIChatUpdateResponse,
    type AIChatListResponse as AIChatListResponse,
    type AIChatDeleteResponse as AIChatDeleteResponse,
    type AIChatListResponsesCursorPage as AIChatListResponsesCursorPage,
    type AIChatCreateParams as AIChatCreateParams,
    type AIChatUpdateParams as AIChatUpdateParams,
    type AIChatListParams as AIChatListParams,
  };
}
