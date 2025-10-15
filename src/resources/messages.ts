// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Creates a new message
   *
   * Required permissions:
   *
   * - `chat:message:create`
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<Shared.Message> {
    return this._client.post('/messages', { body, ...options });
  }

  /**
   * Retrieves a message
   *
   * Required permissions:
   *
   * - `chat:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Message> {
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
  ): PagePromise<MessageListResponsesCursorPage, MessageListResponse> {
    return this._client.getAPIList('/messages', CursorPage<MessageListResponse>, { query, ...options });
  }
}

export type MessageListResponsesCursorPage = CursorPage<MessageListResponse>;

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
   * The timestamp when the post was created
   */
  created_at: string;

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
   * The timestamp when the post was last updated
   */
  updated_at: string;

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

export interface MessageCreateParams {
  /**
   * The ID of the channel or experience to send to.
   */
  channel_id: string;

  /**
   * The content of the message in Markdown format.
   */
  content: string;

  /**
   * The attachments for this message, such as videos or images.
   */
  attachments?: Array<MessageCreateParams.Attachment> | null;

  /**
   * The poll for this message
   */
  poll?: MessageCreateParams.Poll | null;
}

export namespace MessageCreateParams {
  /**
   * Input for an attachment
   */
  export interface Attachment {
    /**
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
  }

  /**
   * The poll for this message
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
    type MessageListResponsesCursorPage as MessageListResponsesCursorPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
