// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create a new company. Pass parent_company_id to create a sub-company under a
   * platform, or omit it to create a company for the current user.
   *
   * Required permissions:
   *
   * - `company:create`
   * - `company:basic:read`
   */
  create(body: CompanyCreateParams, options?: RequestOptions): APIPromise<Shared.Company> {
    return this._client.post('/companies', { body, ...options });
  }

  /**
   * Retrieves an company by ID or its url route
   *
   * Required permissions:
   *
   * - `company:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Company> {
    return this._client.get(path`/companies/${id}`, options);
  }

  /**
   * Update an existing company. Either a regular company, platform company, or one
   * of a platform's connected accounts
   *
   * Required permissions:
   *
   * - `company:update`
   * - `company:basic:read`
   */
  update(
    id: string,
    body: CompanyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Company> {
    return this._client.patch(path`/companies/${id}`, { body, ...options });
  }

  /**
   * Lists companies. When parent_company_id is provided, lists connected accounts
   * under that company. When omitted, lists companies the current user has access
   * to.
   *
   * Required permissions:
   *
   * - `company:basic:read`
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompanyListResponsesCursorPage, CompanyListResponse> {
    return this._client.getAPIList('/companies', CursorPage<CompanyListResponse>, { query, ...options });
  }
}

export type CompanyListResponsesCursorPage = CursorPage<CompanyListResponse>;

/**
 * A company is a seller on Whop. Companies own products, manage members, and
 * receive payouts.
 */
export interface CompanyListResponse {
  /**
   * The unique identifier for the company.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: Shared.BusinessTypes | null;

  /**
   * The datetime the company was created.
   */
  created_at: string;

  /**
   * The creator pitch for the company.
   */
  description: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: Shared.IndustryTypes | null;

  /**
   * The company's logo.
   */
  logo: CompanyListResponse.Logo | null;

  /**
   * The number of members in the company.
   */
  member_count: number;

  /**
   * A key-value store of data for the account, created/updated by the platform that
   * made the account.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The user who owns this company
   */
  owner_user: CompanyListResponse.OwnerUser;

  /**
   * The number of reviews that have been published for the company.
   */
  published_reviews_count: number;

  /**
   * The slug/route of the company on the Whop site.
   */
  route: string;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this company.
   */
  send_customer_emails: boolean;

  /**
   * The title of the company.
   */
  title: string;

  /**
   * The datetime the company was last updated.
   */
  updated_at: string;

  /**
   * If the company is Whop Verified
   */
  verified: boolean;
}

export namespace CompanyListResponse {
  /**
   * The company's logo.
   */
  export interface Logo {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
  }

  /**
   * The user who owns this company
   */
  export interface OwnerUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

export interface CompanyCreateParams {
  /**
   * The name of the company being created.
   */
  title: string;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * A description of what the company offers or does.
   */
  description?: string | null;

  /**
   * The email of the user who the sub-company will belong to. Required when
   * parent_company_id is provided.
   */
  email?: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The logo for the company in png, jpeg, or gif format
   */
  logo?: CompanyCreateParams.Logo | null;

  /**
   * Additional metadata for the company
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The company ID of the platform creating this sub-company. If omitted, the
   * company is created for the current user.
   */
  parent_company_id?: string | null;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this company.
   * Only used when parent_company_id is provided.
   */
  send_customer_emails?: boolean | null;
}

export namespace CompanyCreateParams {
  /**
   * The logo for the company in png, jpeg, or gif format
   */
  export interface Logo {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CompanyUpdateParams {
  /**
   * The banner image for the company in png or jpeg format
   */
  banner_image?: CompanyUpdateParams.BannerImage | null;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * A description of what the company offers or does.
   */
  description?: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The logo for the company in png, jpeg, or gif format
   */
  logo?: CompanyUpdateParams.Logo | null;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this company.
   * Includes: order confirmations, payment failures, refund notifications, upcoming
   * renewals, and membership cancelations/expirations. When disabled, the platform
   * is responsible for handling these communications.
   */
  send_customer_emails?: boolean | null;

  /**
   * The title of the company
   */
  title?: string | null;
}

export namespace CompanyUpdateParams {
  /**
   * The banner image for the company in png or jpeg format
   */
  export interface BannerImage {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The logo for the company in png, jpeg, or gif format
   */
  export interface Logo {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CompanyListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The ID of the parent company to list connected accounts for. Omit to list the
   * current user's own companies.
   */
  parent_company_id?: string | null;
}

export declare namespace Companies {
  export {
    type CompanyListResponse as CompanyListResponse,
    type CompanyListResponsesCursorPage as CompanyListResponsesCursorPage,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
  };
}
