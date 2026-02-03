// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DmChannels extends APIResource {
  /**
   * Creates a DM channel
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
   * Retrieves a DM channel
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
   * Updates a DM channel
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
   * Lists DM channels for the current user
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
   * Deletes a DM channel
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
 * Represents a DM channel
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
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * The custom name of the DM channel, if any
   */
  name: string | null;
}

/**
 * Represents a DM channel
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
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * The custom name of the DM channel, if any
   */
  name: string | null;
}

/**
 * Represents `true` or `false` values.
 */
export type DmChannelDeleteResponse = boolean;

export interface DmChannelCreateParams {
  /**
   * The user ids to create a DM with. Can be email, username or user_id (tag)
   */
  with_user_ids: Array<string>;

  /**
   * The ID of the company to scope this DM channel to.
   */
  company_id?: string | null;

  /**
   * The custom name for the DM channel
   */
  custom_name?: string | null;
}

export interface DmChannelUpdateParams {
  /**
   * The custom name for the DM channel
   */
  custom_name?: string | null;
}

export interface DmChannelListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter DM channels scoped to a specific company
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
