// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AIChats extends APIResource {
  /**
   * Create a new AI chat thread and send the first message to the AI agent.
   *
   * Required permissions:
   *
   * - `ai_chat:create`
   */
  create(body: AIChatCreateParams, options?: RequestOptions): APIPromise<AIChat> {
    return this._client.post('/ai_chats', { body, ...options });
  }

  /**
   * Retrieves the details of an existing AI chat.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AIChat> {
    return this._client.get(path`/ai_chats/${id}`, options);
  }

  /**
   * Update an AI chat's title or associated company context.
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
   * Returns a paginated list of AI chat threads for the current authenticated user.
   */
  list(
    query: AIChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AIChatListResponsesCursorPage, AIChatListResponse> {
    return this._client.getAPIList('/ai_chats', CursorPage<AIChatListResponse>, { query, ...options });
  }

  /**
   * Delete an AI chat thread so it no longer appears in the user's chat list.
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
 * An AI-powered chat conversation belonging to a user, with optional scheduled
 * automation.
 */
export interface AIChat {
  /**
   * The unique identifier for the ai chat.
   */
  id: string;

  /**
   * The total number of tokens consumed across all messages in this conversation.
   */
  blended_token_usage: string;

  /**
   * The datetime the ai chat was created.
   */
  created_at: string;

  /**
   * The timestamp of the most recent message in this conversation. Null if no
   * messages have been sent yet.
   */
  last_message_at: string | null;

  /**
   * The total number of messages exchanged in this conversation.
   */
  message_count: number;

  /**
   * A short descriptive title for this AI chat conversation. Null if no title has
   * been set.
   */
  title: string | null;

  /**
   * The datetime the ai chat was last updated.
   */
  updated_at: string;

  /**
   * The user who owns this AI chat conversation.
   */
  user: AIChat.User;
}

export namespace AIChat {
  /**
   * The user who owns this AI chat conversation.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;
  }
}

/**
 * An AI-powered chat conversation belonging to a user, with optional scheduled
 * automation.
 */
export interface AIChatListResponse {
  /**
   * The unique identifier for the ai chat.
   */
  id: string;

  /**
   * The total number of tokens consumed across all messages in this conversation.
   */
  blended_token_usage: string;

  /**
   * The datetime the ai chat was created.
   */
  created_at: string;

  /**
   * The timestamp of the most recent message in this conversation. Null if no
   * messages have been sent yet.
   */
  last_message_at: string | null;

  /**
   * The total number of messages exchanged in this conversation.
   */
  message_count: number;

  /**
   * A short descriptive title for this AI chat conversation. Null if no title has
   * been set.
   */
  title: string | null;

  /**
   * The datetime the ai chat was last updated.
   */
  updated_at: string;

  /**
   * The user who owns this AI chat conversation.
   */
  user: AIChatListResponse.User;
}

export namespace AIChatListResponse {
  /**
   * The user who owns this AI chat conversation.
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
   * The text content of the first message to send to the AI agent.
   */
  message_text: string;

  /**
   * The unique identifier of the company to set as context for the AI chat (e.g.,
   * "biz_XXXXX").
   */
  current_company_id?: string | null;

  /**
   * A list of previously uploaded file attachments to include with the first
   * message.
   */
  message_attachments?: Array<AIChatCreateParams.MessageAttachment> | null;

  /**
   * The source of an AI chat message
   */
  message_source?: 'manual' | 'suggestion' | 'link' | null;

  /**
   * An optional display title for the AI chat thread (e.g., "Help with billing").
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
   * The unique identifier of the company to set as context for the AI chat (e.g.,
   * "biz_XXXXX").
   */
  current_company_id?: string | null;

  /**
   * The new display title for the AI chat thread (e.g., "Help with billing").
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
