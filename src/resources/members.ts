// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Member is one buyer's relationship with an account — a single row per customer regardless of how many memberships they hold. It carries the relationship-level state: whether they have joined or left, what they can reach (`customer`, `admin`, or `no_access`), when they joined, and when they last opened the account's content.
 *
 * Use the Members API to list an account's members with filtering by access level, status, join date, and name or username search, and to retrieve a single member. Member rows are created and maintained by the membership lifecycle; to grant or revoke access, work with memberships instead.
 */
export class Members extends APIResource {
  /**
   * Lists the members of an account. A member is one buyer's relationship with the
   * account, regardless of how many memberships they hold.
   */
  list(
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MembersCursorPage, Member> {
    return this._client.getAPIList('/members', CursorPage<Member>, { query, ...options });
  }

  /**
   * Retrieves a member by ID. Accessible to the account and to the member's own
   * user.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Member> {
    return this._client.get(path`/members/${id}`, options);
  }
}

export type MembersCursorPage = CursorPage<Member>;

export interface Member {
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
   * `joined` while the member is part of the account, `left` after they leave.
   */
  status: 'joined' | 'left';

  /**
   * The user behind this member. `null` when the buyer is another business rather
   * than a person.
   */
  user: Member.User | null;
}

export namespace Member {
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

export interface MemberListParams extends CursorPageParams {
  /**
   * Filter by what the member can reach on the account.
   */
  access_level?: 'no_access' | 'admin' | 'customer';

  /**
   * The account to list members for (`biz_` tag). Defaults to the account the
   * credential acts as.
   */
  account_id?: string;

  /**
   * Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Only members who joined after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only members who joined before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of members to return from the start of the window.
   */
  first?: number;

  /**
   * Number of members to return from the end of the window.
   */
  last?: number;

  /**
   * Sort field.
   */
  order?: 'created_at' | 'joined_at' | 'last_accessed_at' | 'usd_total_spent';

  /**
   * Search members by name or username. An exact email address also matches when the
   * credential holds the member:email:read scope.
   */
  query?: string;

  /**
   * Filter by whether the member is still part of the account.
   */
  status?: 'joined' | 'left';
}

export declare namespace Members {
  export {
    type Member as Member,
    type MembersCursorPage as MembersCursorPage,
    type MemberListParams as MemberListParams,
  };
}
