// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Support channels
 */
export class SupportChannels extends APIResource {
  /**
   * Open a new support channel between a company team member and a customer. Returns
   * the existing channel if one already exists for that user.
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
   * Retrieves the details of an existing support channel.
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
   * Returns a paginated list of support channels for a specific company, with
   * optional filtering by resolution status and custom sorting.
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
 * A messaging channel that can be a one-on-one DM, group chat, company support
 * conversation, or platform-level direct message.
 */
export interface SupportChannelListResponse {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The unique identifier of the company associated with this channel. Null if this
   * is not a support or company-scoped conversation.
   */
  company_id: string | null;

  /**
   * A custom display name assigned to this channel by the user. Null if no custom
   * name has been set.
   */
  custom_name: string | null;

  /**
   * The customer who initiated this support conversation. Null if this is not a
   * support chat.
   */
  customer_user: SupportChannelListResponse.CustomerUser | null;

  /**
   * The timestamp when the most recent message was sent in this channel. Null if no
   * messages have been sent.
   */
  last_message_at: string | null;

  /**
   * The timestamp when the linked support ticket was marked as resolved. Null if
   * unresolved or not a support chat.
   */
  resolved_at: string | null;
}

export namespace SupportChannelListResponse {
  /**
   * The customer who initiated this support conversation. Null if this is not a
   * support chat.
   */
  export interface CustomerUser {
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

export interface SupportChannelCreateParams {
  /**
   * The unique identifier of the company to create the support channel in.
   */
  company_id: string;

  /**
   * The user ID (e.g. 'user_xxxxx') or username of the customer to open a support
   * channel for.
   */
  user_id: string;

  /**
   * Optional custom display name for the support channel.
   */
  custom_name?: string | null;
}

export interface SupportChannelListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list support channels for.
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
   * Whether to filter by open or resolved support channels. Set to true to only
   * return channels awaiting a response, or false for resolved channels.
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
