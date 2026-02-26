// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Send a new message in an experience chat, DM, or group chat channel. Supports
   * text content, attachments, polls, and replies.
   *
   * Required permissions:
   *
   * - `chat:message:create`
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<Shared.Message> {
    return this._client.post('/messages', { body, ...options });
  }

  /**
   * Retrieves the details of an existing message.
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Message> {
    return this._client.get(path`/messages/${id}`, options);
  }

  /**
   * Edit the content, attachments, or pinned status of an existing message in an
   * experience chat, DM, or group chat channel.
   */
  update(
    id: string,
    body: MessageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Message> {
    return this._client.patch(path`/messages/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of messages within a specific experience chat, DM, or
   * group chat channel, sorted by creation time.
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  list(
    query: MessageListParams,
    options?: RequestOptions,
  ): PagePromise<MessageListResponsesCursorPage, MessageListResponse> {
    return this._client.getAPIList('/messages', CursorPage<MessageListResponse>, { query, ...options });
  }

  /**
   * Permanently delete a message from an experience chat, DM, or group chat channel.
   * Only the message author or a channel admin can delete a message.
   *
   * Required permissions:
   *
   * - `chat:message:create`
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessageDeleteResponse> {
    return this._client.delete(path`/messages/${id}`, options);
  }
}

export type MessageListResponsesCursorPage = CursorPage<MessageListResponse>;

/**
 * A message sent within an experience chat, direct message, or group chat.
 */
export interface MessageListResponse {
  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  id: string;

  /**
   * The message content formatted as Markdown. Null if the message has no text
   * content.
   */
  content: string | null;

  /**
   * The timestamp when this message was originally created.
   */
  created_at: string;

  /**
   * Whether the message content has been edited after it was originally sent.
   */
  is_edited: boolean;

  /**
   * Whether this message is pinned to the top of the channel for easy access.
   */
  is_pinned: boolean;

  /**
   * A list of user IDs that are explicitly mentioned in this message.
   */
  mentions: Array<string>;

  /**
   * Whether the message includes an @everyone mention that notifies all channel
   * members.
   */
  mentions_everyone: boolean;

  /**
   * The classification of this message: regular, system, or automated.
   */
  message_type: Shared.DmsPostTypes;

  /**
   * A poll attached to this message. Null if the message does not contain a poll.
   */
  poll: MessageListResponse.Poll | null;

  /**
   * Aggregated reaction counts on this message, filtered to a specific reaction
   * type.
   */
  poll_votes: Array<MessageListResponse.PollVote>;

  /**
   * Aggregated reaction counts on this message, filtered to a specific reaction
   * type.
   */
  reaction_counts: Array<MessageListResponse.ReactionCount>;

  /**
   * The unique identifier of the message this post is replying to. Null if this is
   * not a reply.
   */
  replying_to_message_id: string | null;

  /**
   * The timestamp when this message was last modified.
   */
  updated_at: string;

  /**
   * The user who authored this message.
   */
  user: MessageListResponse.User;

  /**
   * The number of unique views this message has received. Null if view tracking is
   * not enabled for this channel.
   */
  view_count: number | null;
}

export namespace MessageListResponse {
  /**
   * A poll attached to this message. Null if the message does not contain a poll.
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
       * The unique identifier for the poll option.
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
   * The user who authored this message.
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
export type MessageDeleteResponse = boolean;

export interface MessageCreateParams {
  /**
   * The unique identifier of the channel or experience to send the message in. For
   * example, 'exp_xxxxx' or 'feed_xxxxx'.
   */
  channel_id: string;

  /**
   * The body of the message in Markdown format. For example, 'Hello **world**'.
   */
  content: string;

  /**
   * A list of file attachments to include with the message, such as images or
   * videos.
   */
  attachments?: Array<MessageCreateParams.Attachment> | null;

  /**
   * Automatically detect URLs in the message and generate link previews.
   */
  auto_detect_links?: boolean | null;

  /**
   * A poll to attach to this message, allowing recipients to vote on options.
   */
  poll?: MessageCreateParams.Poll | null;

  /**
   * The unique identifier of the message this is replying to, creating a threaded
   * reply.
   */
  replying_to_message_id?: string | null;
}

export namespace MessageCreateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * A poll to attach to this message, allowing recipients to vote on options.
   */
  export interface Poll {
    /**
     * The options for the poll. Must have sequential IDs starting from 1
     */
    options: Array<Poll.Option>;
  }

  export namespace Poll {
    /**
     * Input type for a single poll option
     */
    export interface Option {
      /**
       * Sequential ID for the poll option (starting from '1')
       */
      id: string;

      /**
       * The text of the poll option
       */
      text: string;
    }
  }
}

export interface MessageUpdateParams {
  /**
   * A replacement list of file attachments for this message, such as images or
   * videos.
   */
  attachments?: Array<MessageUpdateParams.Attachment> | null;

  /**
   * The updated body of the message in Markdown format. For example, 'Hello
   * **world**'.
   */
  content?: string | null;

  /**
   * Whether this message should be pinned to the top of the channel.
   */
  is_pinned?: boolean | null;
}

export namespace MessageUpdateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface MessageListParams extends CursorPageParams {
  /**
   * The unique identifier of the channel or experience to list messages for.
   */
  channel_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

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
    type MessageListResponse as MessageListResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageListResponsesCursorPage as MessageListResponsesCursorPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
  };
}
