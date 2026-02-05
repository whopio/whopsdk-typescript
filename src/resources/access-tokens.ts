// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccessTokens extends APIResource {
  /**
   * Create a short-lived access token to authenticate API requests. When using API
   * key authentication, provide company_id or user_id. When using OAuth
   * authentication, the user is derived from the token. This token should be used
   * with Whop's web and mobile embedded components.
   *
   * @example
   * ```ts
   * const accessToken = await client.accessTokens.create();
   * ```
   */
  create(
    body: AccessTokenCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccessTokenCreateResponse> {
    return this._client.post('/access_tokens', { body, ...options });
  }
}

/**
 * An object representing an access token used for authenticating API requests.
 */
export interface AccessTokenCreateResponse {
  /**
   * The JWT access token string.
   */
  token: string;

  /**
   * The expiration timestamp of the access token.
   */
  expires_at: string;
}

export interface AccessTokenCreateParams {
  /**
   * The ID of the Company to generate the token for. The API key must have
   * permission to access this Company, such as the being the company the API key
   * belongs to or a sub-merchant of it
   */
  company_id?: string | null;

  /**
   * The expiration timestamp for the access token. If not provided, a default
   * expiration time of 1 hour will be used. The expiration can be set to a maximum
   * of 3 hours from the current time.
   */
  expires_at?: string | null;

  /**
   * Array of desired scoped actions for the access token. If sent as an empty array
   * or not provided, all permissions from the authenticating credential (API key or
   * OAuth token) will be available on the token. If sending an explicit list, they
   * must be a subset of the credential's existing permissions. Otherwise, an error
   * will be raised.
   */
  scoped_actions?: Array<string> | null;

  /**
   * The ID of the User to generate the token for. The API key must have permission
   * to access this User.
   */
  user_id?: string | null;
}

export declare namespace AccessTokens {
  export {
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
