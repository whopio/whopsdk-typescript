// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entries extends APIResource {
  /**
   * Retrieves an entry by ID
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
   * Lists entries for a company
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
   * Approve an entry
   *
   * Required permissions:
   *
   * - `plan:waitlist:manage`
   */
  approve(id: string, options?: RequestOptions): APIPromise<EntryApproveResponse> {
    return this._client.post(path`/entries/${id}/approve`, options);
  }

  /**
   * Deny an entry
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
 * An object representing an entry in a waitlist.
 */
export interface EntryListResponse {
  /**
   * The internal ID of the entry.
   */
  id: string;

  /**
   * When the entry was created.
   */
  created_at: string | null;

  /**
   * The waitlist plan the entry if for.
   */
  plan: EntryListResponse.Plan | null;

  /**
   * The access pass tied to this entry, if there is one.
   */
  product: EntryListResponse.Product | null;

  /**
   * The status of the entry.
   */
  status: Shared.EntryStatus;

  /**
   * The user who created the entry.
   */
  user: EntryListResponse.User;
}

export namespace EntryListResponse {
  /**
   * The waitlist plan the entry if for.
   */
  export interface Plan {
    /**
     * The internal ID of the plan.
     */
    id: string;
  }

  /**
   * The access pass tied to this entry, if there is one.
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
   * The user who created the entry.
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
   * The ID of the company
   */
  company_id: string;

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

  /**
   * Which columns can be used to sort.
   */
  order?: 'id' | 'created_at' | null;

  /**
   * The plan IDs to filter the entries by
   */
  plan_ids?: Array<string> | null;

  /**
   * The product IDs to filter the entries by
   */
  product_ids?: Array<string> | null;

  /**
   * The statuses to filter the entries by
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
