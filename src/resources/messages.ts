// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Retrieves a message
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/messages/${id}`, options);
  }

  /**
   * Lists messages inside a channel
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  list(
    query: MessageListParams,
    options?: RequestOptions,
  ): PagePromise<MessageListResponsesCursorPage, MessageListResponse | null> {
    return this._client.getAPIList('/messages', CursorPage<MessageListResponse | null>, {
      query,
      ...options,
    });
  }
}

export type MessageListResponsesCursorPage = CursorPage<MessageListResponse | null>;

/**
 * Represents a message in a DM channel
 */
export interface MessageRetrieveResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The content of the message in Markdown format
   */
  content: string | null;

  /**
   * Whether the message has been edited
   */
  is_edited: boolean;

  /**
   * Whether this message is pinned
   */
  is_pinned: boolean;

  /**
   * The type of post
   */
  message_type: Shared.DmsPostTypes;

  /**
   * The poll for this message
   */
  poll: MessageRetrieveResponse.Poll | null;

  /**
   * The reaction counts for this message
   */
  poll_votes: Array<MessageRetrieveResponse.PollVote>;

  /**
   * The reaction counts for this message
   */
  reaction_counts: Array<MessageRetrieveResponse.ReactionCount>;

  /**
   * The ID of the message this is replying to, if applicable
   */
  replying_to_message_id: string | null;

  /**
   * The user who sent this message
   */
  user: MessageRetrieveResponse.User;

  /**
   * The number of times this message has been viewed
   */
  view_count: number | null;
}

export namespace MessageRetrieveResponse {
  /**
   * The poll for this message
   */
  export interface Poll {
    /**
     * The options for the poll
     */
    options: Array<Poll.Option> | null;
  }

  export namespace Poll {
    /**
     * Represents a single poll option
     */
    export interface Option {
      /**
       * The ID of the poll option
       */
      id: string;

      /**
       * The text of the poll option
       */
      text: string;
    }
  }

  /**
   * Represents a reaction count for a feed post
   */
  export interface PollVote {
    /**
     * The number of users who reacted
     */
    count: number;

    /**
     * The reaction that was used
     */
    option_id: string | null;
  }

  /**
   * Represents a reaction count for a feed post
   */
  export interface ReactionCount {
    /**
     * The number of users who reacted
     */
    count: number;

    /**
     * The emoji that was used in shortcode format (:heart:)
     */
    emoji: string | null;
  }

  /**
   * The user who sent this message
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

/**
 * Represents a message in a DM channel
 */
export interface MessageListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The content of the message in Markdown format
   */
  content: string | null;

  /**
   * Whether the message has been edited
   */
  is_edited: boolean;

  /**
   * Whether this message is pinned
   */
  is_pinned: boolean;

  /**
   * The type of post
   */
  message_type: Shared.DmsPostTypes;

  /**
   * The poll for this message
   */
  poll: MessageListResponse.Poll | null;

  /**
   * The reaction counts for this message
   */
  poll_votes: Array<MessageListResponse.PollVote>;

  /**
   * The reaction counts for this message
   */
  reaction_counts: Array<MessageListResponse.ReactionCount>;

  /**
   * The ID of the message this is replying to, if applicable
   */
  replying_to_message_id: string | null;

  /**
   * The user who sent this message
   */
  user: MessageListResponse.User;

  /**
   * The number of times this message has been viewed
   */
  view_count: number | null;
}

export namespace MessageListResponse {
  /**
   * The poll for this message
   */
  export interface Poll {
    /**
     * The options for the poll
     */
    options: Array<Poll.Option> | null;
  }

  export namespace Poll {
    /**
     * Represents a single poll option
     */
    export interface Option {
      /**
       * The ID of the poll option
       */
      id: string;

      /**
       * The text of the poll option
       */
      text: string;
    }
  }

  /**
   * Represents a reaction count for a feed post
   */
  export interface PollVote {
    /**
     * The number of users who reacted
     */
    count: number;

    /**
     * The reaction that was used
     */
    option_id: string | null;
  }

  /**
   * Represents a reaction count for a feed post
   */
  export interface ReactionCount {
    /**
     * The number of users who reacted
     */
    count: number;

    /**
     * The emoji that was used in shortcode format (:heart:)
     */
    emoji: string | null;
  }

  /**
   * The user who sent this message
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

export interface MessageListParams extends CursorPageParams {
  /**
   * The ID of the channel or the experience ID to list messages for
   */
  channel_id: string;

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

export declare namespace Messages {
  export {
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageListResponsesCursorPage as MessageListResponsesCursorPage,
    type MessageListParams as MessageListParams,
  };
}
