// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create a new company. Pass parent_company_id to create a connected account under
   * a platform, or omit it to create a company for the current user.
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
   * Retrieve a single company by its unique identifier or route slug.
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
   * List companies. When parent_company_id is provided, lists connected accounts
   * under that platform. When omitted, lists companies the current user has access
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
   * A promotional pitch written by the company creator, displayed to potential
   * customers on the store page.
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
   * The total number of users who currently hold active memberships across all of
   * this company's products.
   */
  member_count: number;

  /**
   * A key-value JSON object of custom metadata for this company, managed by the
   * platform that created the account.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The user who owns and has full administrative control over this company.
   */
  owner_user: CompanyListResponse.OwnerUser;

  /**
   * The total number of published customer reviews across all products for this
   * company.
   */
  published_reviews_count: number;

  /**
   * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
   */
  route: string;

  /**
   * Whether Whop sends transactional emails (receipts, updates) to customers on
   * behalf of this company.
   */
  send_customer_emails: boolean;

  /**
   * The display name of the company shown to customers.
   */
  title: string;

  /**
   * The datetime the company was last updated.
   */
  updated_at: string;

  /**
   * Whether this company has been verified by Whop's trust and safety team.
   */
  verified: boolean;
}

export namespace CompanyListResponse {
  /**
   * The company's logo.
   */
  export interface Logo {
    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The user who owns and has full administrative control over this company.
   */
  export interface OwnerUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

export interface CompanyCreateParams {
  /**
   * The display name of the company shown to customers.
   */
  title: string;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * A promotional pitch displayed to potential customers on the company's store
   * page.
   */
  description?: string | null;

  /**
   * The email address of the user who will own the connected account. Required when
   * parent_company_id is provided.
   */
  email?: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
   */
  logo?: CompanyCreateParams.Logo | null;

  /**
   * A key-value JSON object of custom metadata to store on the company.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The unique identifier of the parent platform company. When provided, creates a
   * connected account under that platform. Omit to create a company for the current
   * user.
   */
  parent_company_id?: string | null;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this company.
   * Only applies when creating a connected account.
   */
  send_customer_emails?: boolean | null;
}

export namespace CompanyCreateParams {
  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
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
   * The company's banner image. Accepts PNG or JPEG format.
   */
  banner_image?: CompanyUpdateParams.BannerImage | null;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * A promotional pitch displayed to potential customers on the company's store
   * page.
   */
  description?: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
   */
  logo?: CompanyUpdateParams.Logo | null;

  /**
   * Whether Whop sends transactional emails (receipts, renewals, cancelations) to
   * customers on behalf of this company.
   */
  send_customer_emails?: boolean | null;

  /**
   * The display name of the company shown to customers.
   */
  title?: string | null;
}

export namespace CompanyUpdateParams {
  /**
   * The company's banner image. Accepts PNG or JPEG format.
   */
  export interface BannerImage {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
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
   * Only return companies created after this datetime.
   */
  created_after?: string | null;

  /**
   * Only return companies created before this datetime.
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
   * The unique identifier of the parent platform company. When provided, lists
   * connected accounts under that platform. Omit to list the current user's own
   * companies.
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
