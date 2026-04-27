// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Access tokens
 */
export class AccessTokens extends APIResource {
  /**
   * Create a short-lived access token for authenticating API requests. When using
   * API key authentication, provide company_id or user_id. When using OAuth, the
   * user is derived from the token. Use this token with Whop's web and mobile
   * embedded components.
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
 * A short-lived access token used to authenticate API requests on behalf of a
 * user.
 */
export interface AccessTokenCreateResponse {
  /**
   * The signed JWT access token string to include in API request Authorization
   * headers.
   */
  token: string;

  /**
   * The timestamp after which this access token is no longer valid and must be
   * refreshed.
   */
  expires_at: string;
}

export interface AccessTokenCreateParams {
  /**
   * The unique identifier of the company to generate the token for, starting with
   * 'biz\_'. The API key must have permission to access this company.
   */
  company_id?: string | null;

  /**
   * The expiration timestamp for the access token. Defaults to 1 hour from now, with
   * a maximum of 3 hours.
   */
  expires_at?: string | null;

  /**
   * An array of permission scopes to grant to the access token. If empty or omitted,
   * all permissions from the authenticating credential are inherited. Must be a
   * subset of the credential's permissions.
   */
  scoped_actions?: Array<string> | null;

  /**
   * The unique identifier of the user to generate the token for, starting with
   * 'user\_'. The API key must have permission to access this user.
   */
  user_id?: string | null;
}

export declare namespace AccessTokens {
  export {
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
