// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccountLinks extends APIResource {
  /**
   * Generates a url that a user can be directed to in order to access their
   * sub-merchant account. For example, they can visit the hosted payouts portal or
   * the hosted KYC onboarding flow.
   *
   * @example
   * ```ts
   * const accountLink = await client.accountLinks.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   refresh_url: 'refresh_url',
   *   return_url: 'return_url',
   *   use_case: 'account_onboarding',
   * });
   * ```
   */
  create(body: AccountLinkCreateParams, options?: RequestOptions): APIPromise<AccountLinkCreateResponse> {
    return this._client.post('/account_links', { body, ...options });
  }
}

/**
 * An object representing a url that a user can be directed to to access their
 * account.
 */
export interface AccountLinkCreateResponse {
  /**
   * The expiration timestamp of the url.
   */
  expires_at: string;

  /**
   * The URL to navigate the user to.
   */
  url: string;
}

export interface AccountLinkCreateParams {
  /**
   * The ID of the Company to generate the url for. The company must be a
   * sub-merchant of the API key's company.
   */
  company_id: string;

  /**
   * The URL to redirect to if the session expires and needs to be re-authenticated
   * due to the token expiring.
   */
  refresh_url: string;

  /**
   * The URL to redirect to when the customer wants to return to your site.
   */
  return_url: string;

  /**
   * The use case for which the link will be used.
   */
  use_case: 'account_onboarding' | 'payouts_portal';
}

export declare namespace AccountLinks {
  export {
    type AccountLinkCreateResponse as AccountLinkCreateResponse,
    type AccountLinkCreateParams as AccountLinkCreateParams,
  };
}
