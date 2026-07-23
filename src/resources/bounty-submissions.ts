// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Bounty Submission is one worker's attempt on a bounty. It starts as an in-progress attempt, enters the review queue when proof is submitted, and ends approved (paid from the bounty's escrowed pool) or denied.
 *
 * Use the Bounty Submissions API to submit proof of completed work to a bounty, list the submissions you authored, and review the submissions on your bounties — across every bounty or narrowed to one.
 */
export class BountySubmissions extends APIResource {
  /**
   * Lists bounty submissions visible to the credential — for a user token, the
   * submissions they authored plus those on bounties they posted; for an account API
   * key, the submissions on the account's bounties.
   */
  list(
    query: BountySubmissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BountySubmissionsCursorPage, BountySubmission> {
    return this._client.getAPIList('/bounty_submissions', CursorPage<BountySubmission>, {
      query,
      ...options,
    });
  }

  /**
   * Creates a submission on a workforce bounty. For `content_url` and `media`
   * bounties, include the matching `deliverable` payload and the submission goes
   * straight to review — create is the only step. For `data_capture` bounties, omit
   * the deliverable: this starts a claimed attempt whose proof accumulates
   * server-side, and the separate submit endpoint sends it to review once complete.
   * Requires a user credential — account API keys cannot author submissions.
   */
  create(params: BountySubmissionCreateParams, options?: RequestOptions): APIPromise<BountySubmission> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/bounty_submissions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves one bounty submission the credential can see — one the caller
   * authored, or one on a bounty they posted or their account owns.
   */
  retrieve(bountySubmissionID: string, options?: RequestOptions): APIPromise<BountySubmission> {
    return this._client.get(path`/bounty_submissions/${bountySubmissionID}`, options);
  }

  /**
   * Cancels the caller's own active attempt on a bounty and discards any accumulated
   * capture clips. Only the worker who started the attempt can cancel it — account
   * API keys cannot.
   */
  delete(bountySubmissionID: string, options?: RequestOptions): APIPromise<BountySubmissionDeleteResponse> {
    return this._client.delete(path`/bounty_submissions/${bountySubmissionID}`, options);
  }

  /**
   * Submits a claimed attempt for review once its server-accumulated proof is ready.
   * A data capture attempt needs enough validated clip time to meet the bounty's
   * required capture duration. Only the worker who started the attempt can submit it
   * — account API keys cannot.
   */
  submit(
    bountySubmissionID: string,
    params: BountySubmissionSubmitParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BountySubmission> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/bounty_submissions/${bountySubmissionID}/submit`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type BountySubmissionsCursorPage = CursorPage<BountySubmission>;

export interface BountyCaptureClip {
  /**
   * Capture clip ID, prefixed `bclip_`.
   */
  id: string;

  /**
   * The bounty submission (attempt) this clip belongs to, prefixed `btys_`.
   */
  bounty_submission_id: string;

  /**
   * When the clip was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Server-validated clip duration in whole seconds. `null` until validation
   * completes.
   */
  duration_seconds: number | null;

  /**
   * Stable validation failure code. `null` unless `status` is `failed`.
   */
  failure_code: string | null;

  /**
   * Human-readable validation failure reason. `null` unless `status` is `failed`.
   */
  failure_message: string | null;

  /**
   * Temporary signed URL for the video frame timestamp log. Returned only on
   * single-clip reads for an authorized viewer; `null` on list responses or until
   * the artifact is attached.
   */
  frames_url: string | null;

  /**
   * Temporary signed URL for the IMU (accelerometer + gyroscope) log. Returned only
   * on single-clip reads for an authorized viewer; `null` on list responses or until
   * the artifact is attached.
   */
  imu_url: string | null;

  /**
   * Temporary signed URL for the capture manifest. Returned only on single-clip
   * reads for an authorized viewer; `null` on list responses or until the artifact
   * is attached.
   */
  manifest_url: string | null;

  /**
   * When server-side validation completed successfully, as an ISO 8601 timestamp.
   * `null` until then.
   */
  ready_at: string | null;

  /**
   * The clip's stable order within the attempt, starting at 1.
   */
  sequence: number;

  /**
   * Recording and validation state. `recording` is still capturing; `verifying` is
   * running server-side validation; `ready` passed validation and counts toward the
   * verified-duration payout gate; `failed` did not validate.
   */
  status: 'recording' | 'verifying' | 'ready' | 'failed';

  /**
   * When the clip was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Temporary signed URL for the synchronized MP4 video. Returned only on
   * single-clip reads for an authorized viewer; `null` on list responses or until
   * the artifact is attached.
   */
  video_url: string | null;
}

export interface BountySubmission {
  /**
   * Submission ID, prefixed `btys_`.
   */
  id: string;

  /**
   * The bounty the work was submitted to, prefixed `bnty_`.
   */
  bounty_id: string;

  capture_clips: Array<BountyCaptureClip> | null;

  /**
   * The vendor filename stem `Country_City_Site_Station_Operator`, derived from the
   * capture metadata. `null` until every component is present.
   */
  capture_filename: string | null;

  /**
   * Number of verified capture clips accepted for this submission so far. `0` for
   * submissions whose deliverable doesn't accumulate clips.
   */
  captured_clip_count: number;

  /**
   * Total verified duration of accepted capture clips, in whole seconds. `0` for
   * submissions whose deliverable doesn't accumulate clips.
   */
  captured_duration_seconds: number;

  /**
   * Capture metadata: city the footage was recorded in. `null` unless capture
   * metadata was provided.
   */
  city: string | null;

  /**
   * Written proof the worker submitted with their work.
   */
  content: string | null;

  /**
   * Capture metadata: country the footage was recorded in. `null` unless capture
   * metadata was provided.
   */
  country: string | null;

  /**
   * When the submission was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Which of the bounty's `accepted_deliverable_types` this submission used. Branch
   * on it to read the work: `content_url` and `media` carry `deliverable_urls`;
   * `data_capture` carries `capture_clips`. `null` on submissions authored before
   * deliverable types existed.
   */
  deliverable_type: 'content_url' | 'media' | 'data_capture' | null;

  deliverable_urls: Array<string> | null;

  /**
   * Why the submission was denied, when a presentable reason exists. Always `null`
   * unless `status` is `denied`.
   */
  denial_reason: string | null;

  /**
   * Capture metadata: device the footage was recorded on. `null` unless capture
   * metadata was provided.
   */
  device: string | null;

  /**
   * Capture metadata: horizontal field of view in degrees. `null` when not reported.
   */
  fov: number | null;

  /**
   * Capture metadata: identifier of the person who recorded the footage. `null`
   * unless capture metadata was provided.
   */
  operator: string | null;

  /**
   * When the submission was approved or denied, as an ISO 8601 timestamp. `null`
   * until then.
   */
  resolved_at: string | null;

  /**
   * Capture metadata: site or venue the footage was recorded at. `null` unless
   * capture metadata was provided.
   */
  site: string | null;

  /**
   * Capture metadata: station or position within the site. `null` unless capture
   * metadata was provided.
   */
  station: string | null;

  /**
   * Lifecycle state. `in_progress` submissions are active attempts that have not
   * submitted proof yet; `submitted` submissions await review; `approved`
   * submissions were accepted and paid; `denied` submissions were rejected.
   */
  status: 'in_progress' | 'submitted' | 'approved' | 'denied';

  /**
   * When proof was submitted for review, as an ISO 8601 timestamp. `null` while the
   * attempt is in progress.
   */
  submitted_at: string | null;

  /**
   * When the submission was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * User who submitted the work.
   */
  worker: BountySubmission.Worker;
}

export namespace BountySubmission {
  /**
   * User who submitted the work.
   */
  export interface Worker {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    profile_picture: Worker.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace Worker {
    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    export interface ProfilePicture {
      /**
       * Avatar image URL. Always present — a generated placeholder when the user set no
       * picture.
       */
      url: string;
    }
  }
}

export interface BountySubmissionDeleteResponse {
  /**
   * ID of the cancelled submission.
   */
  id: string;

  /**
   * Always true.
   */
  deleted: boolean;
}

export interface BountySubmissionListParams extends CursorPageParams {
  /**
   * Scope the list to submissions on this account's bounties (`biz_` tag). Requires
   * read access to the account.
   */
  account_id?: string;

  /**
   * Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Only submissions on this bounty (`bnty_` tag).
   */
  bounty_id?: string;

  /**
   * Only submissions created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only submissions created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of submissions to return from the start of the window.
   */
  first?: number;

  /**
   * Number of submissions to return from the end of the window.
   */
  last?: number;

  /**
   * Sort field.
   */
  order?: 'created_at';

  /**
   * Filter by lifecycle state.
   */
  status?: 'in_progress' | 'submitted' | 'approved' | 'denied';
}

export interface BountySubmissionCreateParams {
  /**
   * Body param: The bounty to submit to (`bnty_` tag).
   */
  bounty_id: string;

  /**
   * Body param: Affiliate code crediting the referrer, when the worker arrived
   * through one.
   */
  affiliate_code?: string | null;

  /**
   * Body param: The submitted work, matching one of the bounty's accepted
   * deliverable types.
   */
  deliverable?: BountySubmissionCreateParams.Deliverable | null;

  /**
   * Body param: Optional capture metadata describing where and how the footage was
   * recorded. Persisted on the submission. On a `data_capture` bounty every field
   * except `fov` is required whenever metadata is provided.
   */
  metadata?: BountySubmissionCreateParams.Metadata | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace BountySubmissionCreateParams {
  /**
   * The submitted work, matching one of the bounty's accepted deliverable types.
   */
  export interface Deliverable {
    /**
     * Deliverable shape. Must be accepted by the bounty's goal type.
     */
    type: 'content_url' | 'media' | 'data_capture';

    /**
     * Optional written context shown to reviewers.
     */
    caption?: string | null;

    /**
     * Uploaded file IDs. Required when `type` is `media`.
     */
    file_ids?: Array<string>;

    /**
     * The posted content links, up to 10. Required when `type` is `content_url`.
     */
    urls?: Array<string>;
  }

  /**
   * Optional capture metadata describing where and how the footage was recorded.
   * Persisted on the submission. On a `data_capture` bounty every field except `fov`
   * is required whenever metadata is provided.
   */
  export interface Metadata {
    /**
     * City the footage was recorded in.
     */
    city?: string | null;

    /**
     * Country the footage was recorded in.
     */
    country?: string | null;

    /**
     * Device the footage was recorded on.
     */
    device?: string | null;

    /**
     * Horizontal field of view in degrees.
     */
    fov?: number | null;

    /**
     * Identifier of the person who recorded the footage.
     */
    operator?: string | null;

    /**
     * Site or venue the footage was recorded at.
     */
    site?: string | null;

    /**
     * Station or position within the site.
     */
    station?: string | null;
  }
}

export interface BountySubmissionSubmitParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace BountySubmissions {
  export {
    type BountyCaptureClip as BountyCaptureClip,
    type BountySubmission as BountySubmission,
    type BountySubmissionDeleteResponse as BountySubmissionDeleteResponse,
    type BountySubmissionsCursorPage as BountySubmissionsCursorPage,
    type BountySubmissionListParams as BountySubmissionListParams,
    type BountySubmissionCreateParams as BountySubmissionCreateParams,
    type BountySubmissionSubmitParams as BountySubmissionSubmitParams,
  };
}
