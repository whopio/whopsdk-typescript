// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
  created_at: number;

  /**
   * The name of the user from their Whop account.
   */
  name: string | null;

  /**
   * The username of the user from their Whop account.
   */
  username: string;
}

export declare namespace Users {
  export { type UserRetrieveResponse as UserRetrieveResponse };
}
