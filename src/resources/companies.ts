// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create a new sub company for your platform
   *
   * Required permissions:
   *
   * - `company:create_child`
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
   * Lists companies the current user has access to
   *
   * Required permissions:
   *
   * - `company:basic:read`
   */
  list(
    query: CompanyListParams,
    options?: RequestOptions,
  ): PagePromise<CompanyListResponsesCursorPage, CompanyListResponse> {
    return this._client.getAPIList('/companies', CursorPage<CompanyListResponse>, { query, ...options });
  }
}

export type CompanyListResponsesCursorPage = CursorPage<CompanyListResponse>;

/**
 * An object representing a (sanitized) company.
 */
export interface CompanyListResponse {
  /**
   * The ID (tag) of the company.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: Shared.BusinessTypes | null;

  /**
   * When the company was created (signed up)
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
   * The title of the company.
   */
  title: string;

  /**
   * The time the company was last updated.
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
     * The internal ID of the user.
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
   * The email of the user who the company will belong to.
   */
  email: string;

  /**
   * The company ID of the platform creating this company.
   */
  parent_company_id: string;

  /**
   * The name of the company being created.
   */
  title: string;

  /**
   * Additional metadata for the account
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface CompanyListParams extends CursorPageParams {
  /**
   * The ID of the parent company to list sub companies for
   */
  parent_company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

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
}

export declare namespace Companies {
  export {
    type CompanyListResponse as CompanyListResponse,
    type CompanyListResponsesCursorPage as CompanyListResponsesCursorPage,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyListParams as CompanyListParams,
  };
}
