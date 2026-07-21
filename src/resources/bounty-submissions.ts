// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

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
   * Submits work to a workforce bounty. Include a `deliverable` payload matching the
   * bounty's accepted deliverable type: `content_url` for link-based bounties,
   * `media` for upload-based bounties. The submission lands directly in review.
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
}

export type BountySubmissionsCursorPage = CursorPage<BountySubmission>;

export interface BountySubmission {
  /**
   * Submission ID, prefixed `btys_`.
   */
  id: string;

  /**
   * The bounty the work was submitted to, prefixed `bnty_`.
   */
  bounty_id: string;

  /**
   * Written proof the worker submitted with their work.
   */
  content: string | null;

  /**
   * When the submission was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Deliverable shape the worker submitted. `content_url` is links to posted
   * content; `media` is uploaded files. `null` on submissions authored before
   * deliverable types existed.
   */
  deliverable_type: 'content_url' | 'media' | null;

  deliverable_urls: Array<string> | null;

  /**
   * Why the submission was denied, when a presentable reason exists. Always `null`
   * unless `status` is `denied`.
   */
  denial_reason: string | null;

  /**
   * When the submission was approved or denied, as an ISO 8601 timestamp. `null`
   * until then.
   */
  resolved_at: string | null;

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
    type: 'content_url' | 'media';

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
}

export declare namespace BountySubmissions {
  export {
    type BountySubmission as BountySubmission,
    type BountySubmissionsCursorPage as BountySubmissionsCursorPage,
    type BountySubmissionListParams as BountySubmissionListParams,
    type BountySubmissionCreateParams as BountySubmissionCreateParams,
  };
}
