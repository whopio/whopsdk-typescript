// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AuthorizedUsers extends APIResource {
  /**
   * Retrieves a authorized user by ID
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
   * Lists authorized users
   *
   * Required permissions:
   *
   * - `company:authorized_user:read`
   * - `member:email:read`
   */
  list(
    query: AuthorizedUserListParams,
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
 * A user who has elevated security privileges for a company
 */
export interface AuthorizedUserRetrieveResponse {
  /**
   * A unique ID representing the authorized user object.
   */
  id: string;

  /**
   * The role of the authorized user in the company.
   */
  role: Shared.AuthorizedUserRoles;

  /**
   * The user associated with the authorized user.
   */
  user: AuthorizedUserRetrieveResponse.User;
}

export namespace AuthorizedUserRetrieveResponse {
  /**
   * The user associated with the authorized user.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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

/**
 * A user who has elevated security privileges for a company
 */
export interface AuthorizedUserListResponse {
  /**
   * A unique ID representing the authorized user object.
   */
  id: string;

  /**
   * The role of the authorized user in the company.
   */
  role: Shared.AuthorizedUserRoles;

  /**
   * The user associated with the authorized user.
   */
  user: AuthorizedUserListResponse.User;
}

export namespace AuthorizedUserListResponse {
  /**
   * The user associated with the authorized user.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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

export interface AuthorizedUserListParams extends CursorPageParams {
  /**
   * The ID of the company to list authorized users for
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

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
   * Filter by the user ID to check if the user is an authorized user
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
