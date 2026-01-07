// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Leads extends APIResource {
  /**
   * Creates a new lead
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
  create(body: LeadCreateParams, options?: RequestOptions): APIPromise<LeadCreateResponse> {
    return this._client.post('/leads', { body, ...options });
  }

  /**
   * Retrieves a lead by ID
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
  retrieve(id: string, options?: RequestOptions): APIPromise<LeadRetrieveResponse> {
    return this._client.get(path`/leads/${id}`, options);
  }

  /**
   * Updates a lead
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
  ): APIPromise<LeadUpdateResponse> {
    return this._client.patch(path`/leads/${id}`, { body, ...options });
  }

  /**
   * Lists leads for a company
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
 * An object representing a lead (someone who is interested in a whop).
 */
export interface LeadCreateResponse {
  /**
   * The ID of the lead.
   */
  id: string;

  /**
   * The timestamp of when the lead was created.
   */
  created_at: string;

  /**
   * The converted member, if any.
   */
  member: LeadCreateResponse.Member | null;

  /**
   * Custom metadata for the lead.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The access pass the lead is interested in, if available.
   */
  product: LeadCreateResponse.Product | null;

  /**
   * The referrer URL that brought this lead.
   */
  referrer: string | null;

  /**
   * The timestamp of when the lead was last updated.
   */
  updated_at: string;

  /**
   * The user who is the lead.
   */
  user: LeadCreateResponse.User;
}

export namespace LeadCreateResponse {
  /**
   * The converted member, if any.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;
  }

  /**
   * The access pass the lead is interested in, if available.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The user who is the lead.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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

/**
 * An object representing a lead (someone who is interested in a whop).
 */
export interface LeadRetrieveResponse {
  /**
   * The ID of the lead.
   */
  id: string;

  /**
   * The timestamp of when the lead was created.
   */
  created_at: string;

  /**
   * The converted member, if any.
   */
  member: LeadRetrieveResponse.Member | null;

  /**
   * Custom metadata for the lead.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The access pass the lead is interested in, if available.
   */
  product: LeadRetrieveResponse.Product | null;

  /**
   * The referrer URL that brought this lead.
   */
  referrer: string | null;

  /**
   * The timestamp of when the lead was last updated.
   */
  updated_at: string;

  /**
   * The user who is the lead.
   */
  user: LeadRetrieveResponse.User;
}

export namespace LeadRetrieveResponse {
  /**
   * The converted member, if any.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;
  }

  /**
   * The access pass the lead is interested in, if available.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The user who is the lead.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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

/**
 * An object representing a lead (someone who is interested in a whop).
 */
export interface LeadUpdateResponse {
  /**
   * The ID of the lead.
   */
  id: string;

  /**
   * The timestamp of when the lead was created.
   */
  created_at: string;

  /**
   * The converted member, if any.
   */
  member: LeadUpdateResponse.Member | null;

  /**
   * Custom metadata for the lead.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The access pass the lead is interested in, if available.
   */
  product: LeadUpdateResponse.Product | null;

  /**
   * The referrer URL that brought this lead.
   */
  referrer: string | null;

  /**
   * The timestamp of when the lead was last updated.
   */
  updated_at: string;

  /**
   * The user who is the lead.
   */
  user: LeadUpdateResponse.User;
}

export namespace LeadUpdateResponse {
  /**
   * The converted member, if any.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;
  }

  /**
   * The access pass the lead is interested in, if available.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The user who is the lead.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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

/**
 * An object representing a lead (someone who is interested in a whop).
 */
export interface LeadListResponse {
  /**
   * The ID of the lead.
   */
  id: string;

  /**
   * The timestamp of when the lead was created.
   */
  created_at: string;

  /**
   * The converted member, if any.
   */
  member: LeadListResponse.Member | null;

  /**
   * Custom metadata for the lead.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The access pass the lead is interested in, if available.
   */
  product: LeadListResponse.Product | null;

  /**
   * The referrer URL that brought this lead.
   */
  referrer: string | null;

  /**
   * The timestamp of when the lead was last updated.
   */
  updated_at: string;

  /**
   * The user who is the lead.
   */
  user: LeadListResponse.User;
}

export namespace LeadListResponse {
  /**
   * The converted member, if any.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;
  }

  /**
   * The access pass the lead is interested in, if available.
   */
  export interface Product {
    /**
     * The internal ID of the public product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The user who is the lead.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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

export interface LeadCreateParams {
  /**
   * The ID of the company to create a lead for.
   */
  company_id: string;

  /**
   * Custom metadata for the lead.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The ID of the product the lead is interested in.
   */
  product_id?: string | null;

  /**
   * The url referrer of the lead, if any.
   */
  referrer?: string | null;

  /**
   * The ID of the user to create a lead for. If the request is made by a user, that
   * user will be used.
   */
  user_id?: string | null;
}

export interface LeadUpdateParams {
  /**
   * Custom metadata for the lead.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The url referrer of the lead.
   */
  referrer?: string | null;
}

export interface LeadListParams extends CursorPageParams {
  /**
   * The ID of the company to list leads for
   */
  company_id: string;

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
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The product IDs to filter the leads by
   */
  product_ids?: Array<string> | null;
}

export declare namespace Leads {
  export {
    type LeadCreateResponse as LeadCreateResponse,
    type LeadRetrieveResponse as LeadRetrieveResponse,
    type LeadUpdateResponse as LeadUpdateResponse,
    type LeadListResponse as LeadListResponse,
    type LeadListResponsesCursorPage as LeadListResponsesCursorPage,
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
  };
}
