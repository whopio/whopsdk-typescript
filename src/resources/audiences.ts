// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An Audience represents a customer list uploaded to Whop for ad targeting. Audiences belong to an account and sync to supported ad platforms as custom audiences.
 *
 * Use the Audiences API to create audiences from CSV uploads, monitor processing status, and list or delete audiences for an account. Created audiences are usable for targeting after processing reaches `ready` or `partial`.
 */
export class Audiences extends APIResource {
  /**
   * Lists uploaded customer-list audiences for an account. Pass `audience_id` to
   * return a specific audience.
   */
  list(query: AudienceListParams, options?: RequestOptions): PagePromise<AudiencesCursorPage, Audience> {
    return this._client.getAPIList('/audiences', CursorPage<Audience>, { query, ...options });
  }

  /**
   * Creates an audience from an uploaded customer identity CSV file and starts
   * processing it.
   */
  create(body: AudienceCreateParams, options?: RequestOptions): APIPromise<Audience> {
    return this._client.post('/audiences', { body, ...options });
  }

  /**
   * Deletes an audience so it is no longer available for targeting.
   */
  delete(audienceID: string, options?: RequestOptions): APIPromise<AudienceDeleteResponse> {
    return this._client.delete(path`/audiences/${audienceID}`, options);
  }
}

export type AudiencesCursorPage = CursorPage<Audience>;

export interface Audience {
  /**
   * Audience ID, prefixed `adaud_`.
   */
  id: string;

  /**
   * Unix timestamp when the audience was created.
   */
  created_at: number;

  /**
   * Processing error message. `null` unless processing is partial or failed.
   */
  error_message: string | null;

  /**
   * Rows successfully uploaded to connected ad accounts.
   */
  matched_rows: number;

  /**
   * Audience display name.
   */
  name: string;

  platform_audience_ids: Array<string>;

  /**
   * Rows processed from the uploaded CSV.
   */
  processed_rows: number;

  /**
   * Processing progress from 0 to 100.
   */
  progress_percent: number;

  /**
   * Current state of the audience import. `syncing` means Whop is sending matched
   * rows to connected ad accounts. When status is `partial` or `failed`,
   * `error_message` explains what went wrong.
   */
  status: 'pending' | 'processing' | 'syncing' | 'ready' | 'partial' | 'failed';

  /**
   * Total rows detected in the uploaded CSV.
   */
  total_rows: number;

  /**
   * Unix timestamp when the audience was last updated.
   */
  updated_at: number;
}

export interface AudienceDeleteResponse {
  success: boolean;
}

export interface AudienceListParams extends CursorPageParams {
  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Audience ID, prefixed `adaud_`, used to filter the response to one audience.
   */
  audience_id?: string;

  /**
   * Number of audiences to return. Defaults to 20; maximum 100.
   */
  first?: number;
}

export interface AudienceCreateParams {
  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Maps supported identity fields to CSV column headers. Map at least one of
   * `email` or `phone`.
   */
  column_mapping: AudienceCreateParams.ColumnMapping;

  /**
   * Direct upload ID from the standard media upload endpoint.
   */
  file_id: string;

  /**
   * Audience display name.
   */
  name: string;
}

export namespace AudienceCreateParams {
  /**
   * Maps supported identity fields to CSV column headers. Map at least one of
   * `email` or `phone`.
   */
  export interface ColumnMapping {
    /**
     * CSV header for ISO 3166-1 alpha-2 country codes, such as `US`.
     */
    country?: string;

    /**
     * CSV header for email addresses.
     */
    email?: string;

    /**
     * CSV header for first names.
     */
    first_name?: string;

    /**
     * CSV header for last names.
     */
    last_name?: string;

    /**
     * CSV header for phone numbers.
     */
    phone?: string;
  }
}

export declare namespace Audiences {
  export {
    type Audience as Audience,
    type AudienceDeleteResponse as AudienceDeleteResponse,
    type AudiencesCursorPage as AudiencesCursorPage,
    type AudienceListParams as AudienceListParams,
    type AudienceCreateParams as AudienceCreateParams,
  };
}
