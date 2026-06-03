// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WalletsAPI from './wallets';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Lists accounts visible to the credential. User tokens return the user's business
   * accounts; business account API keys return the requesting business account and
   * its connected accounts.
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/accounts', { query, ...options });
  }

  /**
   * Creates an account. User tokens create business accounts; business account API
   * keys create connected accounts.
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Retrieves the business account associated with the current business account API
   * key.
   */
  me(options?: RequestOptions): APIPromise<Account> {
    return this._client.get('/accounts/me', options);
  }

  /**
   * Retrieves a single account visible to the credential, including its crypto
   * wallet.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/accounts/${accountID}`, options);
  }

  /**
   * Updates an account. User tokens can update business accounts; business account
   * API keys can update connected accounts.
   */
  update(accountID: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch(path`/accounts/${accountID}`, { body, ...options });
  }
}

export interface Account {
  /**
   * The ID of the account, which will look like biz\_******\*******
   */
  id: string;

  /**
   * The URL of the account banner image
   */
  banner_image_url: string | null;

  /**
   * The high-level business category for the account
   */
  business_type: string | null;

  /**
   * When the account was created, as an ISO 8601 timestamp
   */
  created_at: string;

  /**
   * A promotional description for the account
   */
  description: string | null;

  /**
   * The email address of the account owner
   */
  email: string | null;

  /**
   * The industry group the account belongs to
   */
  industry_group: string | null;

  /**
   * The specific industry vertical the account operates in
   */
  industry_type: string | null;

  /**
   * The URL of the account logo image
   */
  logo_url: string | null;

  /**
   * Arbitrary key/value metadata supplied when the account was created
   */
  metadata: unknown;

  /**
   * The parent account ID for connected accounts
   */
  parent_account_id: string | null;

  /**
   * The account's public route identifier
   */
  route: string;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this account
   */
  send_customer_emails: boolean;

  social_links: Array<AccountSocialLink>;

  /**
   * The target audience for this account
   */
  target_audience: string | null;

  /**
   * The display name of the account
   */
  title: string;

  /**
   * The account's primary crypto wallet, or null if none has been provisioned
   */
  wallet: WalletsAPI.AccountWallet | null;
}

export interface AccountSocialLink {
  /**
   * The ID of the social link
   */
  id: string;

  /**
   * The optional display title for the social link
   */
  title: string | null;

  /**
   * The social link URL
   */
  url: string;

  /**
   * The social platform for this link
   */
  website:
    | 'x'
    | 'instagram'
    | 'facebook'
    | 'tiktok'
    | 'youtube'
    | 'linkedin'
    | 'twitch'
    | 'website'
    | 'custom';
}

export interface AccountListResponse {
  accounts: Array<Account>;

  pagination: AccountListResponse.Pagination;
}

export namespace AccountListResponse {
  export interface Pagination {
    /**
     * Current page number
     */
    current_page: number;

    /**
     * Next page number
     */
    next_page: number | null;

    /**
     * Previous page number
     */
    prev_page: number | null;

    /**
     * Total number of records
     */
    total_count: number;

    /**
     * Total number of pages
     */
    total_pages: number;
  }
}

export interface AccountListParams {
  /**
   * The page number to retrieve
   */
  page?: number;

  /**
   * The number of resources to return per page. There is a limit of 50 results per
   * page.
   */
  per?: number;
}

export interface AccountCreateParams {
  /**
   * The email address of the account owner. Required for business account API key
   * requests.
   */
  email?: string;

  /**
   * Arbitrary key/value metadata to store on the account.
   */
  metadata?: { [key: string]: unknown };
}

export interface AccountUpdateParams {
  /**
   * Whether prospective affiliates must submit an application before promoting this
   * account.
   */
  affiliate_application_required?: boolean;

  /**
   * Guidelines shown to affiliates promoting this account.
   */
  affiliate_instructions?: string | null;

  /**
   * Attachment input for the account banner image.
   */
  banner_image?: { [key: string]: unknown } | null;

  /**
   * The high-level business category for the account.
   */
  business_type?: string | null;

  /**
   * A promotional description for the account.
   */
  description?: string | null;

  /**
   * The ID of the product to feature for affiliates. Pass null to clear.
   */
  featured_affiliate_product_id?: string | null;

  /**
   * The industry group the account belongs to.
   */
  industry_group?: string | null;

  /**
   * The specific industry vertical the account operates in.
   */
  industry_type?: string | null;

  /**
   * Attachment input for the account logo.
   */
  logo?: { [key: string]: unknown } | null;

  /**
   * Arbitrary key/value metadata to store on the account.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The unique URL slug for the account.
   */
  route?: string | null;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this account.
   */
  send_customer_emails?: boolean;

  /**
   * The full list of social links to display for the account.
   */
  social_links?: Array<{ [key: string]: unknown }>;

  /**
   * The target audience for this account.
   */
  target_audience?: string | null;

  /**
   * The display name of the account.
   */
  title?: string | null;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountSocialLink as AccountSocialLink,
    type AccountListResponse as AccountListResponse,
    type AccountListParams as AccountListParams,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
