// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Entries
 */
export class Entries extends APIResource {
  /**
   * Retrieves the details of an existing waitlist entry.
   *
   * Required permissions:
   *
   * - `plan:waitlist:read`
   * - `member:email:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Entry> {
    return this._client.get(path`/entries/${id}`, options);
  }

  /**
   * Returns a paginated list of waitlist entries for a company, with optional
   * filtering by product, plan, status, and creation date.
   *
   * Required permissions:
   *
   * - `plan:waitlist:read`
   * - `member:email:read`
   */
  list(
    query: EntryListParams,
    options?: RequestOptions,
  ): PagePromise<EntryListResponsesCursorPage, EntryListResponse> {
    return this._client.getAPIList('/entries', CursorPage<EntryListResponse>, { query, ...options });
  }

  /**
   * Approve a pending waitlist entry, triggering the checkout process to grant the
   * user access to the plan.
   *
   * Required permissions:
   *
   * - `plan:waitlist:manage`
   */
  approve(id: string, options?: RequestOptions): APIPromise<EntryApproveResponse> {
    return this._client.post(path`/entries/${id}/approve`, options);
  }

  /**
   * Deny a pending waitlist entry, preventing the user from gaining access to the
   * plan.
   *
   * Required permissions:
   *
   * - `plan:waitlist:manage`
   * - `plan:basic:read`
   * - `member:email:read`
   */
  deny(id: string, options?: RequestOptions): APIPromise<Shared.Entry> {
    return this._client.post(path`/entries/${id}/deny`, options);
  }
}

export type EntryListResponsesCursorPage = CursorPage<EntryListResponse>;

/**
 * An entry represents a user's signup for a waitlisted plan.
 */
export interface EntryListResponse {
  /**
   * The unique identifier for the entry.
   */
  id: string;

  /**
   * The datetime the entry was created.
   */
  created_at: string | null;

  /**
   * The waitlisted plan that this entry is a signup for.
   */
  plan: EntryListResponse.Plan | null;

  /**
   * The product associated with this entry's waitlisted plan. Null if the plan is
   * not tied to a product.
   */
  product: EntryListResponse.Product | null;

  /**
   * The current status of the waitlist entry (e.g., drafted, pending, approved,
   * denied).
   */
  status: Shared.EntryStatus;

  /**
   * The user who submitted this waitlist entry.
   */
  user: EntryListResponse.User;
}

export namespace EntryListResponse {
  /**
   * The waitlisted plan that this entry is a signup for.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product associated with this entry's waitlisted plan. Null if the plan is
   * not tied to a product.
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
   * The user who submitted this waitlist entry.
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
 * An object representing an asynchronous job.
 */
export interface EntryApproveResponse {
  /**
   * The ID of the job.
   */
  job_id: string;
}

export interface EntryListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list waitlist entries for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return entries created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return entries created before this timestamp.
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
   * Which columns can be used to sort.
   */
  order?: 'id' | 'created_at' | null;

  /**
   * Filter entries to only those for specific plans.
   */
  plan_ids?: Array<string> | null;

  /**
   * Filter entries to only those for specific products.
   */
  product_ids?: Array<string> | null;

  /**
   * Filter entries by their current status.
   */
  statuses?: Array<Shared.EntryStatus> | null;
}

export declare namespace Entries {
  export {
    type EntryListResponse as EntryListResponse,
    type EntryApproveResponse as EntryApproveResponse,
    type EntryListResponsesCursorPage as EntryListResponsesCursorPage,
    type EntryListParams as EntryListParams,
  };
}
