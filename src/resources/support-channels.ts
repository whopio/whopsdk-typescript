// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SupportChannels extends APIResource {
  /**
   * Create a new support channel for a user in a company. If one already exists, it
   * will return the existing one.
   *
   * Required permissions:
   *
   * - `support_chat:create`
   *
   * @example
   * ```ts
   * const supportChannel = await client.supportChannels.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   user_id: 'user_xxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: SupportChannelCreateParams, options?: RequestOptions): APIPromise<Shared.SupportChannel> {
    return this._client.post('/support_channels', { body, ...options });
  }

  /**
   * Retrieves a support channel
   *
   * Required permissions:
   *
   * - `support_chat:read`
   *
   * @example
   * ```ts
   * const supportChannel =
   *   await client.supportChannels.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.SupportChannel> {
    return this._client.get(path`/support_channels/${id}`, options);
  }

  /**
   * Lists chat channels inside a company
   *
   * Required permissions:
   *
   * - `support_chat:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const supportChannelListResponse of client.supportChannels.list(
   *   { company_id: 'biz_xxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SupportChannelListParams,
    options?: RequestOptions,
  ): PagePromise<SupportChannelListResponsesCursorPage, SupportChannelListResponse> {
    return this._client.getAPIList('/support_channels', CursorPage<SupportChannelListResponse>, {
      query,
      ...options,
    });
  }
}

export type SupportChannelListResponsesCursorPage = CursorPage<SupportChannelListResponse>;

/**
 * Represents a DM channel
 */
export interface SupportChannelListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The bot ID if this is a support chat
   */
  company_id: string | null;

  /**
   * The custom name of the DM channel, if any
   */
  custom_name: string | null;

  /**
   * The customer user if this is a support chat
   */
  customer_user: SupportChannelListResponse.CustomerUser | null;

  /**
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * When the support ticket was resolved (null if unresolved)
   */
  resolved_at: string | null;
}

export namespace SupportChannelListResponse {
  /**
   * The customer user if this is a support chat
   */
  export interface CustomerUser {
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

export interface SupportChannelCreateParams {
  /**
   * The ID of the company to create the support chat in
   */
  company_id: string;

  /**
   * The ID of the user to create the support chat for
   */
  user_id: string;
}

export interface SupportChannelListParams extends CursorPageParams {
  /**
   * The ID of the company to list chat channels for
   */
  company_id: string;

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

  /**
   * Filter for tickets where customer sent the last message (needs response) AND not
   * resolved. Set to true to only return open channels, false to only return
   * resolved channels.
   */
  open?: boolean | null;

  /**
   * Sort options for message channels
   */
  order?: 'created_at' | 'last_post_sent_at' | null;
}

export declare namespace SupportChannels {
  export {
    type SupportChannelListResponse as SupportChannelListResponse,
    type SupportChannelListResponsesCursorPage as SupportChannelListResponsesCursorPage,
    type SupportChannelCreateParams as SupportChannelCreateParams,
    type SupportChannelListParams as SupportChannelListParams,
  };
}
