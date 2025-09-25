// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessPasses extends APIResource {
  /**
   * Retrieves an access pass by ID or route
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.AccessPass> {
    return this._client.get(path`/access_passes/${id}`, options);
  }

  /**
   * Lists access passes for a company
   */
  list(
    query: AccessPassListParams,
    options?: RequestOptions,
  ): PagePromise<AccessPassListItemsCursorPage, Shared.AccessPassListItem | null> {
    return this._client.getAPIList('/access_passes', CursorPage<Shared.AccessPassListItem | null>, {
      query,
      ...options,
    });
  }
}

export type AccessPassListItemsCursorPage = CursorPage<Shared.AccessPassListItem | null>;

export interface AccessPassListParams extends CursorPageParams {
  /**
   * The ID of the company to filter access passes by
   */
  company_id: string;

  /**
   * The type of access passes to filter by
   */
  access_pass_type?: 'regular' | 'app' | 'experience_upsell' | 'api_only' | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace AccessPasses {
  export {
    type AccessPassListItemsCursorPage as AccessPassListItemsCursorPage,
    type AccessPassListParams as AccessPassListParams,
  };
}
