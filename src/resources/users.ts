// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieves a user's public profile by user\_ tag, username, or 'me'.
   */
  retrieve(
    id: string,
    query: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<User> {
    return this._client.get(path`/users/${id}`, { query, ...options });
  }

  /**
   * Checks whether a user has access to a company, product, or experience the caller
   * can reach.
   */
  checkAccess(
    resourceID: string,
    params: UserCheckAccessParams,
    options?: RequestOptions,
  ): APIPromise<UserCheckAccessResponse> {
    const { id } = params;
    return this._client.get(path`/users/${id}/access/${resourceID}`, options);
  }

  /**
   * Updates a user. A user token updates their own global profile; an API key
   * updates the user's account-specific profile override (account_id required).
   */
  update(id: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/users/${id}`, { query: { account_id }, body, ...options });
  }

  /**
   * Updates the authenticated user's global profile, or their profile override for
   * an account when account_id is given. Not available to API keys.
   */
  updateMe(params: UserUpdateMeParams, options?: RequestOptions): APIPromise<User> {
    const { account_id, ...body } = params;
    return this._client.patch('/users/me', { query: { account_id }, body, ...options });
  }

  /**
   * Search for users by name or username, ranked by social proximity to the
   * authenticated user. Returns the user's most recently followed users when no
   * query is given.
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UsersCursorPage, User> {
    return this._client.getAPIList('/users', CursorPage<User>, { query, ...options });
  }
}

export type UsersCursorPage = CursorPage<User>;

export interface User {
  /**
   * The ID of the user, which will look like user\_******\*******
   */
  id: string;

  /**
   * The user's biography
   */
  bio: string | null;

  /**
   * When the user was created, as an ISO 8601 timestamp
   */
  created_at: string;

  /**
   * The user's display name
   */
  name: string | null;

  /**
   * The user's profile picture, an object with a url
   */
  profile_picture: unknown | null;

  /**
   * The user's unique username
   */
  username: string;
}

export interface UserCheckAccessResponse {
  access_level: 'no_access' | 'admin' | 'customer';

  has_access: boolean;
}

export interface UserRetrieveParams {
  /**
   * When set, returns the user's account-specific profile overrides for this
   * account.
   */
  account_id?: string;
}

export interface UserCheckAccessParams {
  /**
   * The user\_ tag or username to check access for.
   */
  id: string;
}

export interface UserCheckAccessParams {
  /**
   * The unique identifier or username of the user.
   */
  id: string;
}

export interface UserUpdateParams {
  /**
   * Query param: The account whose profile override to update. Required for API key
   * callers.
   */
  account_id?: string;

  /**
   * Body param
   */
  bio?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  profile_picture?: UserUpdateParams.ProfilePicture;

  /**
   * Body param
   */
  username?: string;
}

export namespace UserUpdateParams {
  export interface ProfilePicture {
    id?: string;

    direct_upload_id?: string;
  }
}

export interface UserUpdateMeParams {
  /**
   * Query param: When set, updates the authenticated user's profile override for
   * this account instead of their global profile.
   */
  account_id?: string;

  /**
   * Body param
   */
  bio?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  profile_picture?: UserUpdateMeParams.ProfilePicture;

  /**
   * Body param
   */
  username?: string;
}

export namespace UserUpdateMeParams {
  export interface ProfilePicture {
    id?: string;

    direct_upload_id?: string;
  }
}

export interface UserListParams extends CursorPageParams {
  /**
   * A cursor; returns users before this position.
   */
  before?: string;

  /**
   * The number of users to return (max 50).
   */
  first?: number;

  /**
   * The number of users to return from the end of the range.
   */
  last?: number;

  /**
   * A search term to filter users by name or username.
   */
  query?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserCheckAccessResponse as UserCheckAccessResponse,
    type UsersCursorPage as UsersCursorPage,
    type UserRetrieveParams as UserRetrieveParams,
    type UserCheckAccessParams as UserCheckAccessParams,
    type UserUpdateParams as UserUpdateParams,
    type UserUpdateMeParams as UserUpdateMeParams,
    type UserListParams as UserListParams,
  };
}
