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
  create(body: AIChatCreateParams, options?: RequestOptions): APIPromise<AIChat> {
    return this._client.post('/ai_chats', { body, ...options });
  }

  /**
   * Fetches a single AI chat by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AIChat> {
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
  ): APIPromise<AIChat> {
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
export interface AIChat {
  /**
   * The unique identifier for the ai chat.
   */
  id: string;

  /**
   * The total number of tokens used in the chat
   */
  blended_token_usage: string;

  /**
   * The datetime the ai chat was created.
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
   * The datetime the ai chat was last updated.
   */
  updated_at: string;

  /**
   * The user who owns the AI chat
   */
  user: AIChat.User;
}

export namespace AIChat {
  /**
   * The user who owns the AI chat
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;
  }
}

/**
 * An AI chat conversation belonging to a user
 */
export interface AIChatListResponse {
  /**
   * The unique identifier for the ai chat.
   */
  id: string;

  /**
   * The total number of tokens used in the chat
   */
  blended_token_usage: string;

  /**
   * The datetime the ai chat was created.
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
   * The datetime the ai chat was last updated.
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
     * The unique identifier for the user.
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
   * The text content of the first message sent in the chat
   */
  message_text: string;

  /**
   * The ID of the company to set as the current company in context for the AI chat
   */
  current_company_id?: string | null;

  /**
   * The IDs of existing uploaded attachments to include in the first message to the
   * agent
   */
  message_attachments?: Array<AIChatCreateParams.MessageAttachment> | null;

  /**
   * The title of the AI chat
   */
  title?: string | null;
}

export namespace AIChatCreateParams {
  /**
   * Input for an attachment
   */
  export interface MessageAttachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface AIChatUpdateParams {
  /**
   * The ID of the company to set as the current company in context for the AI chat
   */
  current_company_id?: string | null;

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
    type AIChat as AIChat,
    type AIChatListResponse as AIChatListResponse,
    type AIChatDeleteResponse as AIChatDeleteResponse,
    type AIChatListResponsesCursorPage as AIChatListResponsesCursorPage,
    type AIChatCreateParams as AIChatCreateParams,
    type AIChatUpdateParams as AIChatUpdateParams,
    type AIChatListParams as AIChatListParams,
  };
}
