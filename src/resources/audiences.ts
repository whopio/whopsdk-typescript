// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AudiencesAPI from './audiences';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
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
   * Creates an audience. Default (`audience_type` omitted or `custom`): creates one
   * audience from an uploaded customer identity CSV file (`name`, `column_mapping`,
   * and `file_id` required) and starts processing it; responds with the audience
   * object. With `audience_type: lookalike`: creates a ladder of Meta lookalike
   * audiences from an existing ready custom audience (`source_audience_id`, `count`,
   * and `percentage` required) — `count` equal similarity bands slicing the top
   * `percentage`% (3 audiences at 6% = 0–2%, 2–4%, 4–6%), each returned as its own
   * audience in a `{ data: [...] }` envelope.
   */
  create(params: AudienceCreateParams, options?: RequestOptions): APIPromise<AudienceCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/audiences', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
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
   * `custom` = uploaded customer list; `lookalike` = Meta lookalike built from a
   * custom audience.
   */
  audience_type: 'custom' | 'lookalike';

  /**
   * When the audience was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Processing error message. `null` unless processing is partial or failed.
   */
  error_message: string | null;

  /**
   * For lookalikes: the upper bound of the similarity band as a fraction (0.02 = top
   * 2%). `null` for custom audiences.
   */
  lookalike_ratio: number | null;

  /**
   * For lookalikes: the lower bound of the similarity band as a fraction. `null` for
   * custom audiences and first-tier lookalikes.
   */
  lookalike_starting_ratio: number | null;

  match_rates: Array<Audience.MatchRate>;

  /**
   * Rows successfully uploaded to connected ad accounts. Always 0 for lookalikes.
   */
  matched_rows: number;

  /**
   * Audience display name.
   */
  name: string;

  platform_audience_ids: Array<string>;

  /**
   * Rows processed from the uploaded CSV. Always 0 for lookalikes.
   */
  processed_rows: number;

  /**
   * Processing progress from 0 to 100.
   */
  progress_percent: number;

  /**
   * For lookalikes: the audience this lookalike was built from. `null` for custom
   * audiences.
   */
  source_audience_id: string | null;

  /**
   * Current state of the audience import. `syncing` means Whop is sending matched
   * rows to connected ad accounts. When status is `partial` or `failed`,
   * `error_message` explains what went wrong.
   */
  status: 'pending' | 'processing' | 'syncing' | 'ready' | 'partial' | 'failed';

  /**
   * Total rows detected in the uploaded CSV. Always 0 for lookalikes.
   */
  total_rows: number;

  /**
   * When the audience was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export namespace Audience {
  /**
   * Estimated match rates by ad platform. Empty when the audience was not sent to a
   * supported platform.
   */
  export interface MatchRate {
    /**
     * Lower bound of the estimated match rate percentage. `null` until available.
     */
    lower_bound: number | null;

    /**
     * The ad platform that provided the match-rate estimate.
     */
    platform: 'meta';

    /**
     * Availability of the estimated match rate.
     */
    status: 'calculating' | 'available' | 'unavailable' | null;

    /**
     * Upper bound of the estimated match rate percentage. `null` until available.
     */
    upper_bound: number | null;
  }
}

export type AudienceCreateResponse = Audience | AudienceCreateResponse.Data;

export namespace AudienceCreateResponse {
  export interface Data {
    data: Array<AudiencesAPI.Audience>;
  }
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
   * Filter by audience type: `custom` (uploaded lists) or `lookalike`.
   */
  audience_type?: 'custom' | 'lookalike';

  /**
   * Number of audiences to return. Defaults to 20; maximum 100.
   */
  first?: number;
}

export interface AudienceCreateParams {
  /**
   * Body param: Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Body param: What to create. Defaults to `custom` (CSV upload).
   */
  audience_type?: 'custom' | 'lookalike';

  /**
   * Body param: Custom audiences only. Maps supported identity fields to CSV column
   * headers. Map at least one of `email` or `phone`.
   */
  column_mapping?: AudienceCreateParams.ColumnMapping;

  /**
   * Body param: Lookalikes only. Number of lookalike audiences to create (1–6).
   */
  count?: number;

  /**
   * Body param: Custom audiences only. The uploaded customer CSV — a file id
   * (`file_...`) returned by `POST /files`.
   */
  file_id?: string;

  /**
   * Body param: Audience display name. Required for custom audiences; lookalike
   * names are generated from the source audience.
   */
  name?: string;

  /**
   * Body param: Lookalikes only. Total similarity reach as a whole percent (1–20),
   * sliced evenly across `count` — must be divisible by `count`.
   */
  percentage?: number;

  /**
   * Body param: Lookalikes only. The ready custom audience (`adaud_`) to build from;
   * it needs at least 100 matched people.
   */
  source_audience_id?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AudienceCreateParams {
  /**
   * Custom audiences only. Maps supported identity fields to CSV column headers. Map
   * at least one of `email` or `phone`.
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
    type AudienceCreateResponse as AudienceCreateResponse,
    type AudienceDeleteResponse as AudienceDeleteResponse,
    type AudiencesCursorPage as AudiencesCursorPage,
    type AudienceListParams as AudienceListParams,
    type AudienceCreateParams as AudienceCreateParams,
  };
}
