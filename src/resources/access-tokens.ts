// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccessTokens extends APIResource {
  /**
   * Create a short-lived access token to authenticate API requests on behalf of a
   * Company or User. This token should be used with Whop's web and mobile embedded
   * components. You must provide either a company_id or a user_id argument, but not
   * both.
   *
   * @example
   * ```ts
   * const accessToken = await client.accessTokens.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: AccessTokenCreateParams, options?: RequestOptions): APIPromise<AccessTokenCreateResponse> {
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

export type AccessTokenCreateParams =
  | AccessTokenCreateParams.CreateAccessTokenInputWithCompanyID
  | AccessTokenCreateParams.CreateAccessTokenInputWithUserID;

export declare namespace AccessTokenCreateParams {
  export interface CreateAccessTokenInputWithCompanyID {
    /**
     * The ID of the Company to generate the token for. The API key must have
     * permission to access this Company, such as the being the company the API key
     * belongs to or a sub-merchant of it
     */
    company_id: string;

    /**
     * The expiration timestamp for the access token. If not provided, a default
     * expiration time of 1 hour will be used. The expiration can be set to a maximum
     * of 3 hours from the current time.
     */
    expires_at?: string | null;

    /**
     * Array of desired scoped actions for the access token. If sent as an empty array
     * or not provided, all permissions from the API key making the request will be
     * available on the token. If sending an explicit list, they must be a subset of
     * the API keys's existing permissions. Otherwise, an error will be raised.
     */
    scoped_actions?: Array<string> | null;
  }

  export interface CreateAccessTokenInputWithUserID {
    /**
     * The ID of the User to generate the token for. The API key must have permission
     * to access this User.
     */
    user_id: string;

    /**
     * The expiration timestamp for the access token. If not provided, a default
     * expiration time of 1 hour will be used. The expiration can be set to a maximum
     * of 3 hours from the current time.
     */
    expires_at?: string | null;

    /**
     * Array of desired scoped actions for the access token. If sent as an empty array
     * or not provided, all permissions from the API key making the request will be
     * available on the token. If sending an explicit list, they must be a subset of
     * the API keys's existing permissions. Otherwise, an error will be raised.
     */
    scoped_actions?: Array<string> | null;
  }
}

export declare namespace AccessTokens {
  export {
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
