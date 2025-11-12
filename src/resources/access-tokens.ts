// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccessTokens extends APIResource {
  /**
   * Creates an access token for a user to access a specific resource. These access
   * tokens are designed to be used with Whop's embedded components.
   *
   * @example
   * ```ts
   * const accessToken = await client.accessTokens.create({
   *   scoped_actions: ['string'],
   *   target_resource_id: 'target_resource_id',
   *   target_resource_type: 'company',
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

export interface AccessTokenCreateParams {
  /**
   * Array of desired scoped actions for the access token. If sent as an empty array,
   * all permissions from the API key making the request will be available on the
   * token. If sending an explicit list, they must be a subset of the API keys's
   * existing permissions. Otherwise, an error will be raised.
   */
  scoped_actions: Array<string>;

  /**
   * The ID of the target resource (Company, User, etc.) for which the access token
   * is being created.
   */
  target_resource_id: string;

  /**
   * The type of the target resource (company, user, product, experience, etc.).
   */
  target_resource_type: 'company' | 'product' | 'experience' | 'app' | 'user';

  /**
   * The expiration timestamp for the access token. If not provided, a default
   * expiration time of 1 hour will be used. The expiration can be set to a maximum
   * of 3 hours from the current time.
   */
  expires_at?: string | null;
}

export declare namespace AccessTokens {
  export {
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };
}
