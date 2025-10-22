// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieves a user by ID or username
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Check if a user has access (and their access level) to a resource
   */
  checkAccess(
    resourceID: string,
    params: UserCheckAccessParams,
    options?: RequestOptions,
  ): APIPromise<UserCheckAccessResponse> {
    const { id } = params;
    return this._client.get(path`/users/${id}/access/${resourceID}`, options);
  }
}

/**
 * An object representing a (sanitized) user of the site.
 */
export interface UserRetrieveResponse {
  /**
   * The internal ID of the user.
   */
  id: string;

  /**
   * The user's bio
   */
  bio: string | null;

  /**
   * When the user was created.
   */
  created_at: string;

  /**
   * The name of the user from their Whop account.
   */
  name: string | null;

  /**
   * The user's profile picture
   */
  profile_picture: UserRetrieveResponse.ProfilePicture | null;

  /**
   * The username of the user from their Whop account.
   */
  username: string;
}

export namespace UserRetrieveResponse {
  /**
   * The user's profile picture
   */
  export interface ProfilePicture {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
  }
}

/**
 * The result of a has access check for the developer API
 */
export interface UserCheckAccessResponse {
  /**
   * The permission level of the user
   */
  access_level: Shared.AccessLevel;

  /**
   * Whether the user has access to the resource
   */
  has_access: boolean;
}

export interface UserCheckAccessParams {
  id: string;
}

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserCheckAccessResponse as UserCheckAccessResponse,
    type UserCheckAccessParams as UserCheckAccessParams,
  };
}
