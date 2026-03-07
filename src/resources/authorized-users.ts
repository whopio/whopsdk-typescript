// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Authorized users
 */
export class AuthorizedUsers extends APIResource {
  /**
   * Retrieves the details of an existing authorized user.
   *
   * Required permissions:
   *
   * - `company:authorized_user:read`
   * - `member:email:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AuthorizedUserRetrieveResponse> {
    return this._client.get(path`/authorized_users/${id}`, options);
  }

  /**
   * Returns a paginated list of authorized team members for a company, with optional
   * filtering by user, role, and creation date.
   *
   * Required permissions:
   *
   * - `company:authorized_user:read`
   * - `member:email:read`
   */
  list(
    query: AuthorizedUserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuthorizedUserListResponsesCursorPage, AuthorizedUserListResponse> {
    return this._client.getAPIList('/authorized_users', CursorPage<AuthorizedUserListResponse>, {
      query,
      ...options,
    });
  }
}

export type AuthorizedUserListResponsesCursorPage = CursorPage<AuthorizedUserListResponse>;

/**
 * A user who has been granted administrative access to manage a company's
 * dashboard and settings.
 */
export interface AuthorizedUserRetrieveResponse {
  /**
   * The unique identifier for the authorized user.
   */
  id: string;

  /**
   * The company this authorized user has access to.
   */
  company: AuthorizedUserRetrieveResponse.Company;

  /**
   * The permission role assigned to this authorized user within the company.
   */
  role: Shared.AuthorizedUserRoles;

  /**
   * The user account linked to this authorized user record.
   */
  user: AuthorizedUserRetrieveResponse.User;
}

export namespace AuthorizedUserRetrieveResponse {
  /**
   * The company this authorized user has access to.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The user account linked to this authorized user record.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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
 * A user who has been granted administrative access to manage a company's
 * dashboard and settings.
 */
export interface AuthorizedUserListResponse {
  /**
   * The unique identifier for the authorized user.
   */
  id: string;

  /**
   * The company this authorized user has access to.
   */
  company: AuthorizedUserListResponse.Company;

  /**
   * The permission role assigned to this authorized user within the company.
   */
  role: Shared.AuthorizedUserRoles;

  /**
   * The user account linked to this authorized user record.
   */
  user: AuthorizedUserListResponse.User;
}

export namespace AuthorizedUserListResponse {
  /**
   * The company this authorized user has access to.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The user account linked to this authorized user record.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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

export interface AuthorizedUserListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The unique identifier of the company to list authorized users for.
   */
  company_id?: string | null;

  /**
   * Only return authorized users created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return authorized users created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * Possible roles an authorized user can have
   */
  role?: Shared.AuthorizedUserRoles | null;

  /**
   * Filter results to a specific user to check if they are an authorized team
   * member.
   */
  user_id?: string | null;
}

export declare namespace AuthorizedUsers {
  export {
    type AuthorizedUserRetrieveResponse as AuthorizedUserRetrieveResponse,
    type AuthorizedUserListResponse as AuthorizedUserListResponse,
    type AuthorizedUserListResponsesCursorPage as AuthorizedUserListResponsesCursorPage,
    type AuthorizedUserListParams as AuthorizedUserListParams,
  };
}
