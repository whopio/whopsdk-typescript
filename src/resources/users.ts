// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieve a single user by their unique identifier or username.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Check whether a user has access to a specific resource, and return their access
   * level.
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
   * Update the currently authenticated user's profile.
   *
   * Required permissions:
   *
   * - `user:profile:update`
   */
  updateProfile(
    body: UserUpdateProfileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<User> {
    return this._client.patch('/users/me', { body, ...options });
  }
}

/**
 * A user account on Whop. Contains profile information, identity details, and
 * social connections.
 */
export interface User {
  /**
   * The unique identifier for the user.
   */
  id: string;

  /**
   * A short biography written by the user, displayed on their public profile.
   */
  bio: string | null;

  /**
   * The datetime the user was created.
   */
  created_at: string;

  /**
   * The user's display name shown on their public profile.
   */
  name: string | null;

  /**
   * The user's profile picture attachment with URL, content type, and file metadata.
   * Null if using a legacy profile picture.
   */
  profile_picture: User.ProfilePicture | null;

  /**
   * The user's unique username shown on their public profile.
   */
  username: string;
}

export namespace User {
  /**
   * The user's profile picture attachment with URL, content type, and file metadata.
   * Null if using a legacy profile picture.
   */
  export interface ProfilePicture {
    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
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
  /**
   * The unique identifier or username of the user.
   */
  id: string;
}

export interface UserUpdateProfileParams {
  /**
   * A short biography displayed on the user's public profile.
   */
  bio?: string | null;

  /**
   * The user's display name shown on their public profile. Maximum 100 characters.
   */
  name?: string | null;

  /**
   * The user's profile picture image attachment.
   */
  profile_picture?: UserUpdateProfileParams.ProfilePicture | null;

  /**
   * The user's unique username. Alphanumeric characters and hyphens only. Maximum 42
   * characters.
   */
  username?: string | null;
}

export namespace UserUpdateProfileParams {
  /**
   * The user's profile picture image attachment.
   */
  export interface ProfilePicture {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export declare namespace Users {
  export {
    type User as User,
    type UserCheckAccessResponse as UserCheckAccessResponse,
    type UserCheckAccessParams as UserCheckAccessParams,
    type UserUpdateProfileParams as UserUpdateProfileParams,
  };
}
