// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Account links
 */
export class AccountLinks extends APIResource {
  /**
   * Generate a URL that directs a sub-merchant to their account portal, such as the
   * hosted payouts dashboard or the KYC onboarding flow.
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
 * A temporary, time-limited URL that grants a user access to an external account
 * management page.
 */
export interface AccountLinkCreateResponse {
  /**
   * The timestamp after which this account link URL is no longer valid.
   */
  expires_at: string;

  /**
   * The temporary URL to redirect the user to for account access. Expires at the
   * time specified by expires_at.
   */
  url: string;
}

export interface AccountLinkCreateParams {
  /**
   * The unique identifier of the company to generate the link for, starting with
   * 'biz\_'. Must be a sub-merchant of the API key's company.
   */
  company_id: string;

  /**
   * The URL to redirect the user to if the session expires and needs to be
   * re-authenticated, such as 'https://example.com/refresh'.
   */
  refresh_url: string;

  /**
   * The URL to redirect the user to when they want to return to your site, such as
   * 'https://example.com/return'.
   */
  return_url: string;

  /**
   * The purpose of the account link, such as hosted payouts portal or hosted KYC
   * onboarding.
   */
  use_case: 'account_onboarding' | 'payouts_portal';
}

export declare namespace AccountLinks {
  export {
    type AccountLinkCreateResponse as AccountLinkCreateResponse,
    type AccountLinkCreateParams as AccountLinkCreateParams,
  };
}
