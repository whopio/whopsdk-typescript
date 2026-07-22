// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Team Member is a member of an account's team: the link between a user and an account, carrying the role that controls what they can do. Roles are either system roles (like `admin` or `moderator`) or `custom` roles managed from the dashboard.
 *
 * Use the Team Members API to list an account's team, add a user to the team with a system role, change a member's role, and remove members. Adding a user who has not yet accepted sends an invitation instead.
 */
export class TeamMembers extends APIResource {
  /**
   * Lists an account's team members, including pending invites (`status: "pending"`,
   * `ausri_` ids; `user` is `null` for invites sent to an email with no Whop account
   * yet). For accepted members, `email` requires the
   * `company:authorized_user:email:read` scope and is `null` otherwise.
   */
  list(
    query: TeamMemberListParams,
    options?: RequestOptions,
  ): PagePromise<TeamMembersCursorPage, TeamMember> {
    return this._client.getAPIList('/team_members', CursorPage<TeamMember>, { query, ...options });
  }

  /**
   * Retrieves a team member by ID. `email` requires the
   * `company:authorized_user:email:read` scope and is `null` otherwise.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TeamMember> {
    return this._client.get(path`/team_members/${id}`, options);
  }

  /**
   * Adds a user to an account's team with a system role. If the user has not yet
   * accepted, an invitation is sent instead and the response is `202` with
   * `{ "object": "team_member_invite", "invitation_sent": true }`. If the user
   * already has a pending invite, the request fails with a `400`. Custom roles
   * cannot be granted via the API.
   */
  create(params: TeamMemberCreateParams, options?: RequestOptions): APIPromise<TeamMember> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/team_members', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Changes a team member's system role. Requires a user session — account API keys
   * cannot change member roles. The account owner's role cannot be changed, and you
   * cannot change your own role.
   */
  update(id: string, body: TeamMemberUpdateParams, options?: RequestOptions): APIPromise<TeamMember> {
    return this._client.patch(path`/team_members/${id}`, { body, ...options });
  }

  /**
   * Removes a team member from the account, or revokes a pending invite when given
   * an `ausri_` ID. A user session may delete its own membership to leave the team
   * without the delete scope. The account owner cannot be removed.
   */
  delete(id: string, options?: RequestOptions): APIPromise<TeamMemberDeleteResponse> {
    return this._client.delete(path`/team_members/${id}`, options);
  }
}

export type TeamMembersCursorPage = CursorPage<TeamMember>;

export interface TeamMember {
  /**
   * Team member ID — `ausr_` for accepted members, `ausri_` for pending invites.
   */
  id: string;

  /**
   * The account this membership belongs to, prefixed `biz_`.
   */
  account_id: string;

  /**
   * When the member joined or the invite was sent, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * The member's email address. For accepted members, `null` unless the caller holds
   * the email read scope; for invites, the invited address.
   */
  email: string | null;

  /**
   * Whether this member is an agent (app-controlled account) rather than a human
   * team member. Always `false` for invites.
   */
  is_agent: boolean;

  /**
   * The member's role on the account. `custom` means a bespoke dashboard-managed
   * role; the API can read but not grant it.
   */
  role:
    | 'owner'
    | 'admin'
    | 'sales_manager'
    | 'moderator'
    | 'advertiser'
    | 'app_manager'
    | 'support'
    | 'manager'
    | 'custom';

  /**
   * `joined` for accepted members, `pending` while the invite is pending.
   */
  status: 'joined' | 'pending';

  /**
   * When the membership was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * The user behind this team membership. `null` for an invite sent to an email with
   * no Whop account yet.
   */
  user: TeamMember.User | null;
}

export namespace TeamMember {
  /**
   * The user behind this team membership. `null` for an invite sent to an email with
   * no Whop account yet.
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

export interface TeamMemberDeleteResponse {
  success: boolean;
}

export interface TeamMemberListParams extends CursorPageParams {
  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Only return members added after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only return members added before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Sort direction. Defaults to `desc`.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of members to return. Defaults to 20; maximum 100.
   */
  first?: number;

  /**
   * Field used to sort members.
   */
  order?: 'created_at';

  /**
   * Only return members with this role. `custom` matches members on a
   * dashboard-managed custom role.
   */
  role?:
    | 'owner'
    | 'admin'
    | 'sales_manager'
    | 'moderator'
    | 'advertiser'
    | 'app_manager'
    | 'support'
    | 'manager'
    | 'custom';

  /**
   * Only return members with this status: `joined` (accepted members) or `pending`
   * (pending invites). Both are returned by default.
   */
  status?: 'joined' | 'pending';

  /**
   * Only return the membership for this user ID, prefixed `user_`.
   */
  user_id?: string;
}

export interface TeamMemberCreateParams {
  /**
   * Body param: Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Body param: The system role to grant.
   */
  role: 'owner' | 'admin' | 'sales_manager' | 'moderator' | 'advertiser';

  /**
   * Body param: The user to add to the team, prefixed `user_`.
   */
  user_id: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface TeamMemberUpdateParams {
  /**
   * The system role to grant.
   */
  role: 'owner' | 'admin' | 'sales_manager' | 'moderator' | 'advertiser';
}

export declare namespace TeamMembers {
  export {
    type TeamMember as TeamMember,
    type TeamMemberDeleteResponse as TeamMemberDeleteResponse,
    type TeamMembersCursorPage as TeamMembersCursorPage,
    type TeamMemberListParams as TeamMemberListParams,
    type TeamMemberCreateParams as TeamMemberCreateParams,
    type TeamMemberUpdateParams as TeamMemberUpdateParams,
  };
}
