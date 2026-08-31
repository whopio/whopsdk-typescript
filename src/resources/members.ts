// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Member is one buyer's relationship with an account — one record per customer regardless of how many memberships they hold. It carries relationship-level state: whether they have joined or left, their access level (`customer`, `admin`, or `no_access`), when they joined, and when they last opened the account's content.
 *
 * Use the Members API to list an account's members with filtering by access level, status, join date, and name or username search, and to retrieve a single member. Member rows are created and maintained by the membership lifecycle; to grant or revoke access, work with memberships instead.
 */
export class Members extends APIResource {
  /**
   * Retrieves a member by ID. Accessible to the account and to the member's own
   * user.
   */
  retrieve(
    id: string,
    params: MemberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/members/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the members of an account. A member is one buyer's relationship with the
   * account, regardless of how many memberships they hold.
   */
  list(
    params: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MemberListResponsesCursorPage, MemberListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/members', CursorPage<MemberListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type MemberListResponsesCursorPage = CursorPage<MemberListResponse>;

export interface MemberRetrieveResponse {
  /**
   * Member ID, prefixed `mber_`.
   */
  id: string;

  /**
   * What the member can reach on the account: `customer` for paying members, `admin`
   * for team members, `no_access` once every grant has lapsed.
   */
  access_level: 'no_access' | 'admin' | 'customer';

  /**
   * The account this member belongs to, prefixed `biz_`.
   */
  account_id: string;

  /**
   * When the member record was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * When the member first joined the account, as an ISO 8601 timestamp.
   */
  joined_at: string;

  /**
   * When the member last opened the account's content, as an ISO 8601 timestamp.
   * `null` if they never have.
   */
  last_accessed_at: string | null;

  /**
   * The member's phone number, or `null`. Their account number when they have shared
   * one with this seller; otherwise the most recent number collected (or verified)
   * at checkout.
   */
  phone_number: string | null;

  /**
   * `joined` while the member is part of the account, `left` after they leave.
   */
  status: 'joined' | 'left';

  /**
   * The member's current token balance for this account, computed from token
   * transactions.
   */
  token_balance: number;

  /**
   * The user behind this member. `null` when the buyer is another business rather
   * than a person.
   */
  user: MemberRetrieveResponse.User | null;
}

export namespace MemberRetrieveResponse {
  /**
   * The user behind this member. `null` when the buyer is another business rather
   * than a person.
   */
  export interface User {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    profile_picture: User.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace User {
    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    export interface ProfilePicture {
      /**
       * Avatar image URL. Always present — a generated placeholder when the user set no
       * picture.
       */
      url: string;
    }
  }
}

export interface MemberListResponse {
  /**
   * Member ID, prefixed `mber_`.
   */
  id: string;

  /**
   * What the member can reach on the account: `customer` for paying members, `admin`
   * for team members, `no_access` once every grant has lapsed.
   */
  access_level: 'no_access' | 'admin' | 'customer';

  /**
   * The account this member belongs to, prefixed `biz_`.
   */
  account_id: string;

  /**
   * When the member record was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * When the member first joined the account, as an ISO 8601 timestamp.
   */
  joined_at: string;

  /**
   * When the member last opened the account's content, as an ISO 8601 timestamp.
   * `null` if they never have.
   */
  last_accessed_at: string | null;

  /**
   * The member's phone number, or `null`. Their account number when they have shared
   * one with this seller; otherwise the most recent number collected (or verified)
   * at checkout.
   */
  phone_number: string | null;

  /**
   * `joined` while the member is part of the account, `left` after they leave.
   */
  status: 'joined' | 'left';

  /**
   * The member's current token balance for this account, computed from token
   * transactions.
   */
  token_balance: number;

  /**
   * The user behind this member. `null` when the buyer is another business rather
   * than a person.
   */
  user: MemberListResponse.User | null;
}

export namespace MemberListResponse {
  /**
   * The user behind this member. `null` when the buyer is another business rather
   * than a person.
   */
  export interface User {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    profile_picture: User.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace User {
    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    export interface ProfilePicture {
      /**
       * Avatar image URL. Always present — a generated placeholder when the user set no
       * picture.
       */
      url: string;
    }
  }
}

export interface MemberRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface MemberListParams extends CursorPageParams {
  /**
   * Query param: Filter by what the member can reach on the account.
   */
  access_level?: 'no_access' | 'admin' | 'customer';

  /**
   * Query param: The account to list members for (`biz_` tag). Defaults to the
   * account the credential acts as.
   */
  account_id?: string;

  /**
   * Query param: Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Query param: Only members who joined after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only members who joined before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Number of members to return from the start of the window.
   */
  first?: number;

  /**
   * Query param: Number of members to return from the end of the window.
   */
  last?: number;

  /**
   * Query param: Sort field.
   */
  order?: 'created_at' | 'joined_at' | 'last_accessed_at' | 'usd_total_spent';

  /**
   * Query param: Search members by name or username. An exact email address also
   * matches when the credential holds the member:email:read scope.
   */
  query?: string;

  /**
   * Query param: Filter by whether the member is still part of the account.
   */
  status?: 'joined' | 'left';

  /**
   * Query param: Only return members whose users match these `user_` identifiers.
   */
  user_ids?: Array<string>;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Members {
  export {
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberListResponse as MemberListResponse,
    type MemberListResponsesCursorPage as MemberListResponsesCursorPage,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberListParams as MemberListParams,
  };
}
