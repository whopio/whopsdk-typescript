// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
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
}
