// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Dm channels
 */
export class DmChannels extends APIResource {
  /**
   * Create a new DM channel between two or more users, optionally scoped to a
   * specific company. Returns the existing channel if one already exists.
   *
   * @example
   * ```ts
   * const dmChannel = await client.dmChannels.create({
   *   with_user_ids: ['string'],
   * });
   * ```
   */
  create(body: DmChannelCreateParams, options?: RequestOptions): APIPromise<DmChannel> {
    return this._client.post('/dm_channels', { body, ...options });
  }

  /**
   * Retrieves the details of an existing DM channel.
   *
   * Required permissions:
   *
   * - `dms:read`
   *
   * @example
   * ```ts
   * const dmChannel = await client.dmChannels.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DmChannel> {
    return this._client.get(path`/dm_channels/${id}`, options);
  }

  /**
   * Update the settings of an existing DM channel, such as its display name. Only an
   * admin of the channel can perform this action.
   *
   * Required permissions:
   *
   * - `dms:channel:manage`
   *
   * @example
   * ```ts
   * const dmChannel = await client.dmChannels.update('id');
   * ```
   */
  update(
    id: string,
    body: DmChannelUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DmChannel> {
    return this._client.patch(path`/dm_channels/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of DM channels for the currently authenticated user,
   * sorted by most recently active.
   *
   * Required permissions:
   *
   * - `dms:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dmChannelListResponse of client.dmChannels.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DmChannelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DmChannelListResponsesCursorPage, DmChannelListResponse> {
    return this._client.getAPIList('/dm_channels', CursorPage<DmChannelListResponse>, { query, ...options });
  }

  /**
   * Permanently delete a DM channel and all of its messages. Only an admin of the
   * channel can perform this action.
   *
   * Required permissions:
   *
   * - `dms:channel:manage`
   *
   * @example
   * ```ts
   * const dmChannel = await client.dmChannels.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DmChannelDeleteResponse> {
    return this._client.delete(path`/dm_channels/${id}`, options);
  }
}

export type DmChannelListResponsesCursorPage = CursorPage<DmChannelListResponse>;

/**
 * A messaging channel that can be a one-on-one DM, group chat, company support
 * conversation, or platform-level direct message.
 */
export interface DmChannel {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The time the entity was created (in milliseconds since Unix epoch)
   */
  created_at: string;

  /**
   * The timestamp when the most recent message was sent in this channel. Null if no
   * messages have been sent.
   */
  last_message_at: string | null;

  /**
   * A custom display name assigned to this channel by the user. Null if no custom
   * name has been set.
   */
  name: string | null;
}

/**
 * A messaging channel that can be a one-on-one DM, group chat, company support
 * conversation, or platform-level direct message.
 */
export interface DmChannelListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The time the entity was created (in milliseconds since Unix epoch)
   */
  created_at: string;

  /**
   * The timestamp when the most recent message was sent in this channel. Null if no
   * messages have been sent.
   */
  last_message_at: string | null;

  /**
   * A custom display name assigned to this channel by the user. Null if no custom
   * name has been set.
   */
  name: string | null;
}

/**
 * Represents `true` or `false` values.
 */
export type DmChannelDeleteResponse = boolean;

export interface DmChannelCreateParams {
  /**
   * The list of user identifiers to include in the DM channel. Each entry can be an
   * email, username, or user ID (e.g. 'user_xxxxx').
   */
  with_user_ids: Array<string>;

  /**
   * The unique identifier of the company to scope this DM channel to. When set, the
   * channel is visible only within that company context.
   */
  company_id?: string | null;

  /**
   * A custom display name for the DM channel. For example, 'Project Discussion'.
   */
  custom_name?: string | null;
}

export interface DmChannelUpdateParams {
  /**
   * A new custom display name for the DM channel. For example, 'Project Discussion'.
   */
  custom_name?: string | null;
}

export interface DmChannelListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of a company to filter DM channels by. Only returns
   * channels scoped to this company.
   */
  company_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace DmChannels {
  export {
    type DmChannel as DmChannel,
    type DmChannelListResponse as DmChannelListResponse,
    type DmChannelDeleteResponse as DmChannelDeleteResponse,
    type DmChannelListResponsesCursorPage as DmChannelListResponsesCursorPage,
    type DmChannelCreateParams as DmChannelCreateParams,
    type DmChannelUpdateParams as DmChannelUpdateParams,
    type DmChannelListParams as DmChannelListParams,
  };
}
