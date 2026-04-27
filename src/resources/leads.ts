// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Leads
 */
export class Leads extends APIResource {
  /**
   * Record a new lead for a company, capturing a potential customer's interest in a
   * specific product.
   *
   * Required permissions:
   *
   * - `lead:manage`
   * - `member:email:read`
   * - `access_pass:basic:read`
   * - `member:basic:read`
   *
   * @example
   * ```ts
   * const lead = await client.leads.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: LeadCreateParams, options?: RequestOptions): APIPromise<Lead> {
    return this._client.post('/leads', { body, ...options });
  }

  /**
   * Retrieves the details of an existing lead.
   *
   * Required permissions:
   *
   * - `lead:basic:read`
   * - `member:email:read`
   * - `access_pass:basic:read`
   * - `member:basic:read`
   *
   * @example
   * ```ts
   * const lead = await client.leads.retrieve(
   *   'lead_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Lead> {
    return this._client.get(path`/leads/${id}`, options);
  }

  /**
   * Update the metadata or referrer information on an existing lead record.
   *
   * Required permissions:
   *
   * - `lead:manage`
   * - `member:email:read`
   * - `access_pass:basic:read`
   * - `member:basic:read`
   *
   * @example
   * ```ts
   * const lead = await client.leads.update(
   *   'lead_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: LeadUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Lead> {
    return this._client.patch(path`/leads/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of leads for a company, with optional filtering by
   * product and creation date.
   *
   * Required permissions:
   *
   * - `lead:basic:read`
   * - `member:email:read`
   * - `access_pass:basic:read`
   * - `member:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const leadListResponse of client.leads.list({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LeadListParams,
    options?: RequestOptions,
  ): PagePromise<LeadListResponsesCursorPage, LeadListResponse> {
    return this._client.getAPIList('/leads', CursorPage<LeadListResponse>, { query, ...options });
  }
}

export type LeadListResponsesCursorPage = CursorPage<LeadListResponse>;

/**
 * A prospective customer who has expressed interest in a company or product but
 * has not yet purchased.
 */
export interface Lead {
  /**
   * The unique identifier for the lead.
   */
  id: string;

  /**
   * The datetime the lead was created.
   */
  created_at: string;

  /**
   * The company member record if this lead has converted into a paying customer.
   * Null if the lead has not converted.
   */
  member: Lead.Member | null;

  /**
   * Custom key-value pairs attached to this lead. Null if no metadata was provided.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The product the lead expressed interest in. Null if the lead is not associated
   * with a specific product.
   */
  product: Lead.Product | null;

  /**
   * The URL of the page that referred this lead to the company. Null if no referrer
   * was captured.
   */
  referrer: string | null;

  /**
   * The datetime the lead was last updated.
   */
  updated_at: string;

  /**
   * The user account associated with this lead.
   */
  user: Lead.User;
}

export namespace Lead {
  /**
   * The company member record if this lead has converted into a paying customer.
   * Null if the lead has not converted.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The product the lead expressed interest in. Null if the lead is not associated
   * with a specific product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The user account associated with this lead.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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

/**
 * A prospective customer who has expressed interest in a company or product but
 * has not yet purchased.
 */
export interface LeadListResponse {
  /**
   * The unique identifier for the lead.
   */
  id: string;

  /**
   * The datetime the lead was created.
   */
  created_at: string;

  /**
   * The company member record if this lead has converted into a paying customer.
   * Null if the lead has not converted.
   */
  member: LeadListResponse.Member | null;

  /**
   * Custom key-value pairs attached to this lead. Null if no metadata was provided.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The product the lead expressed interest in. Null if the lead is not associated
   * with a specific product.
   */
  product: LeadListResponse.Product | null;

  /**
   * The URL of the page that referred this lead to the company. Null if no referrer
   * was captured.
   */
  referrer: string | null;

  /**
   * The datetime the lead was last updated.
   */
  updated_at: string;

  /**
   * The user account associated with this lead.
   */
  user: LeadListResponse.User;
}

export namespace LeadListResponse {
  /**
   * The company member record if this lead has converted into a paying customer.
   * Null if the lead has not converted.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The product the lead expressed interest in. Null if the lead is not associated
   * with a specific product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The user account associated with this lead.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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

export interface LeadCreateParams {
  /**
   * The unique identifier of the company to create the lead for, starting with
   * 'biz\_'.
   */
  company_id: string;

  /**
   * A JSON object of custom metadata to attach to the lead for tracking purposes.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The unique identifier of the product the lead is interested in, starting with
   * 'prod\_'.
   */
  product_id?: string | null;

  /**
   * The referral URL that brought the lead to the company, such as
   * 'https://example.com/landing'.
   */
  referrer?: string | null;

  /**
   * The unique identifier of the user to record as the lead. If authenticated as a
   * user, that user is used automatically.
   */
  user_id?: string | null;
}

export interface LeadUpdateParams {
  /**
   * A JSON object of custom metadata to set on the lead, replacing any existing
   * metadata.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The updated referral URL for the lead, such as 'https://example.com/landing'.
   */
  referrer?: string | null;
}

export interface LeadListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list leads for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return leads created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return leads created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * Filter leads to only those associated with these specific product identifiers.
   */
  product_ids?: Array<string> | null;
}

export declare namespace Leads {
  export {
    type Lead as Lead,
    type LeadListResponse as LeadListResponse,
    type LeadListResponsesCursorPage as LeadListResponsesCursorPage,
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
  };
}
