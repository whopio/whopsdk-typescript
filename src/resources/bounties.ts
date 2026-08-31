// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Bounty is a paid task posted by an account or user. The reward is held in escrow when the bounty publishes, workers submit proof of completed work, and each accepted submission is paid out until every winner slot fills.
 *
 * Use the Bounties API to create and publish a bounty, list an account's bounties for reporting or dashboards, list the bounties a user can work or has participated in, and retrieve a single bounty by ID.
 */
export class Bounties extends APIResource {
  /**
   * Creates a bounty and escrows its reward pool. Publishes immediately, or as a
   * scheduled draft when you set `publish_at`.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.create({
   *   description:
   *     'Record one continuous pass of a full interior detail, dash to trunk, on a customer vehicle.',
   *   gross_reward_amount: 40,
   *   title: 'Record interior detailing passes',
   * });
   * ```
   */
  create(params: BountyCreateParams, options?: RequestOptions): APIPromise<BountyCreateResponse> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/bounties', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a bounty by ID. Authentication is optional: a request with no
   * credential reads the bounty when it is publicly visible — published or
   * completed, and not restricted to a private experience's members. Bounties
   * outside the caller's scope, and bounties not publicly visible to an anonymous
   * caller, return `404`.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: BountyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BountyRetrieveResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.get(path`/bounties/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists bounties visible to the credential — for an account API key, the account's
   * bounties including scheduled drafts; for a user token, the bounties the user can
   * see and work.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bountyListResponse of client.bounties.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: BountyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BountyListResponsesCursorPage, BountyListResponse> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/bounties', CursorPage<BountyListResponse>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type BountyListResponsesCursorPage = CursorPage<BountyListResponse>;

export interface BountyCreateResponse {
  /**
   * Bounty ID, prefixed `bnty_`.
   */
  id: string;

  accepted_deliverable_types: Array<'content_url' | 'media' | 'data_capture'>;

  /**
   * Submissions accepted so far.
   */
  accepted_submissions_count: number;

  /**
   * Number of submissions that can be accepted (winner slots).
   */
  accepted_submissions_limit: number;

  /**
   * How many winner slots one worker can win. Defaults to `1`. Wins plus proofs
   * awaiting review never exceed this number, and a worker runs one attempt at a
   * time. Cannot exceed `accepted_submissions_limit`.
   */
  accepted_submissions_per_user_limit: number;

  active_proof_livestream_feeds: Array<BountyCreateResponse.ActiveProofLivestreamFeed>;

  /**
   * What a referrer earns per accepted submission when the worker arrived through
   * their affiliate link, in whole currency units, at the standard platform fee
   * rate. Taken out of the worker's post-fee reward rather than added on top. `0`
   * when the bounty pays no affiliate share, including bounties tied to no account,
   * which cannot record a referral.
   */
  affiliate_share_amount: number;

  allowed_country_codes: Array<string>;

  /**
   * Submissions delivered and waiting on review. A subset of
   * `unresolved_submissions_count`, which also counts attempts still in progress.
   */
  awaiting_review_submissions_count: number;

  /**
   * Total gross budget committed to the bounty: `gross_reward_amount` times
   * `accepted_submissions_limit`.
   */
  budget_amount: number;

  /**
   * What the poster wants the work to achieve, declared once at create. `null` for
   * bounties created before the taxonomy rolled out.
   */
  business_goal_type:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'data_capture'
    | 'other'
    | null;

  /**
   * When cancellation was requested, as an ISO 8601 timestamp. On a `closed` bounty
   * this means the cancel is pending: submissions are stopped and the bounty cancels
   * once in-flight submissions resolve. On a `canceled` bounty it records when the
   * cancellation was requested. `null` when no cancellation was ever requested.
   */
  cancel_requested_at: string | null;

  /**
   * The technical contract footage must be recorded against. Present only on
   * `data_capture` bounties; `null` for every other goal type.
   */
  capture_spec: BountyCreateResponse.CaptureSpec | null;

  /**
   * When the bounty was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency for all amounts on the bounty, as a lowercase ISO 4217 code.
   */
  currency:
    | 'usd'
    | 'sgd'
    | 'inr'
    | 'aud'
    | 'brl'
    | 'cad'
    | 'dkk'
    | 'eur'
    | 'nok'
    | 'gbp'
    | 'sek'
    | 'chf'
    | 'hkd'
    | 'huf'
    | 'jpy'
    | 'mxn'
    | 'myr'
    | 'pln'
    | 'czk'
    | 'nzd'
    | 'aed'
    | 'cop'
    | 'ron'
    | 'thb'
    | 'bgn'
    | 'idr'
    | 'dop'
    | 'php'
    | 'try'
    | 'krw'
    | 'twd'
    | 'vnd'
    | 'pkr'
    | 'clp'
    | 'uyu'
    | 'ars'
    | 'zar'
    | 'dzd'
    | 'tnd'
    | 'mad'
    | 'kes'
    | 'kwd'
    | 'jod'
    | 'all'
    | 'xcd'
    | 'amd'
    | 'bsd'
    | 'bhd'
    | 'bob'
    | 'bam'
    | 'khr'
    | 'crc'
    | 'xof'
    | 'egp'
    | 'etb'
    | 'gmd'
    | 'ghs'
    | 'gtq'
    | 'gyd'
    | 'ils'
    | 'jmd'
    | 'mop'
    | 'mga'
    | 'mur'
    | 'mdl'
    | 'mnt'
    | 'nad'
    | 'ngn'
    | 'mkd'
    | 'omr'
    | 'pyg'
    | 'pen'
    | 'qar'
    | 'rwf'
    | 'sar'
    | 'rsd'
    | 'lkr'
    | 'tzs'
    | 'ttd'
    | 'uzs'
    | 'rub'
    | 'cny'
    | 'kzt'
    | 'awg';

  /**
   * Submissions reviewed and turned down.
   */
  denied_submissions_count: number;

  /**
   * Full task instructions shown to workers.
   */
  description: string;

  /**
   * Experience the bounty's discussion thread lives in, prefixed `exp_`. Read this —
   * not `experience_id` — to open the thread: a platform-wide bounty has no hosting
   * experience of its own but its discussion still lives in one.
   */
  discussion_experience_id: string | null;

  /**
   * Forum feed containing the bounty's discussion thread. `null` for a bounty with
   * no forum post.
   */
  discussion_feed_id: string | null;

  /**
   * Forum post anchoring the bounty's discussion thread. Read together with
   * `discussion_experience_id` to address the thread. `null` for a bounty with no
   * forum post.
   */
  discussion_post_id: string | null;

  /**
   * Experience the bounty is hosted in, prefixed `exp_`. `null` for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: BountyCreateResponse.FundingAccount | null;

  /**
   * Gross amount paid out from the bounty pool across accepted submissions — worker
   * payouts, platform fees, and affiliate shares together. Tips and reviewer rewards
   * are excluded.
   */
  gross_paid_out_amount: number;

  /**
   * Gross bounty-pool amount allocated per accepted submission, in whole currency
   * units.
   */
  gross_reward_amount: number;

  /**
   * Account hosting the bounty's forum — the one whose `route` and `experience_id`
   * address its discussion thread, and where its submissions dashboard lives. `null`
   * for a platform-wide bounty with no host. May differ from `funding_account`.
   */
  hosting_account: BountyCreateResponse.HostingAccount | null;

  /**
   * Total verified footage a submission must accumulate before it can be submitted,
   * in seconds. Always a whole number of hours. Present only on `data_capture`
   * bounties — it is what `net_reward_amount` pays for, so rate displays divide by
   * it. `null` for every other goal type.
   */
  min_total_verified_duration_seconds: number | null;

  /**
   * What a worker is quoted per accepted submission after the platform fee, in whole
   * currency units. The exact post-fee figure, at the standard platform fee rate — a
   * worker who locked a different rate, or who arrived through an affiliate link, is
   * paid a different amount.
   */
  net_reward_amount: number;

  /**
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  poster: BountyCreateResponse.Poster;

  /**
   * How often the schedule creates a new bounty. Each occurrence is a separate
   * bounty; the original is not republished.
   */
  scheduled_frequency: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly' | null;

  /**
   * When a scheduled bounty will publish, as an ISO 8601 timestamp. `null` once
   * published, for bounties that were never scheduled, and for terminally failed
   * drafts parked for manual rescheduling.
   */
  scheduled_publish_at: string | null;

  /**
   * Unfilled winner capacity: `accepted_submissions_limit` minus
   * `accepted_submissions_count`, clamped to zero. Not on its own a signal that the
   * bounty accepts new claims — read `status` for that: only an `open` bounty takes
   * new submissions.
   */
  spots_remaining: number;

  /**
   * Lifecycle state. `scheduled` bounties are unpublished drafts, visible to their
   * poster and the account's authorized managers; `open` bounties accept new
   * submissions; `closed` bounties are live but no longer accept new submissions;
   * `completed` bounties paid out every winner slot; `canceled` bounties ended
   * before filling their slots.
   */
  status: 'scheduled' | 'open' | 'closed' | 'completed' | 'canceled';

  /**
   * When new submissions stopped being accepted, as an ISO 8601 timestamp. Set when
   * a cancellation is requested on a bounty with work in flight, so in-flight
   * submissions can resolve before the bounty cancels. `null` when submissions were
   * never stopped — including completed bounties that simply filled every winner
   * slot.
   */
  submissions_closed_at: string | null;

  /**
   * Short name of the task shown to workers.
   */
  title: string;

  /**
   * Submissions still awaiting an outcome: in progress or pending review.
   */
  unresolved_submissions_count: number;

  /**
   * When the bounty was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * How many winner slots the authenticated user has already won on this bounty.
   * Read against `accepted_submissions_per_user_limit` to show a worker their
   * remaining allowance. `0` when the request has no authenticated user.
   */
  viewer_accepted_submissions_count: number;
}

export namespace BountyCreateResponse {
  /**
   * Proof livestreams live on this bounty right now, newest first — workers
   * streaming their attempts. Empty when nothing is live.
   */
  export interface ActiveProofLivestreamFeed {
    /**
     * Livestream feed ID.
     */
    id: string;

    /**
     * User hosting the proof livestream — the worker streaming their attempt. `null`
     * if the host account no longer exists.
     */
    host: ActiveProofLivestreamFeed.Host | null;

    /**
     * Display title for the proof livestream.
     */
    title: string;
  }

  export namespace ActiveProofLivestreamFeed {
    /**
     * User hosting the proof livestream — the worker streaming their attempt. `null`
     * if the host account no longer exists.
     */
    export interface Host {
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
      profile_picture: Host.ProfilePicture;

      /**
       * Public username.
       */
      username: string;
    }

    export namespace Host {
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

  /**
   * The technical contract footage must be recorded against. Present only on
   * `data_capture` bounties; `null` for every other goal type.
   */
  export interface CaptureSpec {
    /**
     * The naming convention for uploaded files, built from the required metadata
     * fields.
     */
    filename_pattern: string;

    /**
     * Inertial measurement unit (IMU) recording requirements.
     */
    imu: CaptureSpec.Imu;

    /**
     * Schema version the client must stamp on the capture manifest it uploads.
     */
    manifest_schema_version: number;

    /**
     * Minimum length of a single clip, in seconds.
     */
    min_clip_duration_seconds: number;

    /**
     * Total verified footage a submission must accumulate across all its clips before
     * it can be submitted, in seconds. Always a whole number of hours.
     */
    min_total_verified_duration_seconds: number;

    required_metadata_fields: Array<string>;

    /**
     * Whether each clip must be one uninterrupted recording rather than stitched
     * segments.
     */
    single_continuous_take: boolean;

    /**
     * Video recording requirements.
     */
    video: CaptureSpec.Video;
  }

  export namespace CaptureSpec {
    /**
     * Inertial measurement unit (IMU) recording requirements.
     */
    export interface Imu {
      /**
       * Units for the device-motion channels, as a compact key=unit string.
       */
      device_motion_units: string;

      /**
       * Units for the magnetometer channel.
       */
      magnetometer_units: string;

      /**
       * Minimum sustained IMU sample rate in hertz for a clip to pass validation.
       */
      min_rate_hz: number;

      /**
       * Target IMU sample rate in hertz.
       */
      target_rate_hz: number;

      /**
       * Minimum IMU sample rate in hertz tolerated during the warmup window.
       */
      warmup_min_rate_hz: number;

      /**
       * Startup window, in nanoseconds, during which the relaxed warmup rate applies.
       */
      warmup_ns: number;
    }

    /**
     * Video recording requirements.
     */
    export interface Video {
      /**
       * Maximum acceptable average bitrate, in megabits per second.
       */
      bitrate_ceiling_mbps: number;

      /**
       * Minimum acceptable average bitrate, in megabits per second.
       */
      bitrate_floor_mbps: number;

      /**
       * Recommended average bitrate to encode at, in megabits per second.
       */
      bitrate_target_mbps: number;

      /**
       * Which physical lens to record with.
       */
      camera_lens: string;

      codecs: Array<string>;

      /**
       * Whether the client must also write the camera make and model into the video
       * container's metadata. When `false`, the capture manifest and export CSV are the
       * metadata carrier.
       */
      embed_camera_metadata: boolean;

      /**
       * Target capture frame rate.
       */
      fps: number;

      /**
       * Longest stall between consecutive frames a clip may contain before the client
       * rejects it, in milliseconds. Every frame is timestamped in the frame log, so a
       * stall stays alignable downstream — this bounds how broken a capture may be, not
       * how evenly it must be paced.
       */
      frame_gap_tolerance_ms: number;

      /**
       * Required frame height in pixels — recorded footage must match exactly.
       */
      height: number;

      /**
       * Minimum acceptable horizontal field of view, in degrees.
       */
      min_fov_degrees: number;

      /**
       * Device orientation to record in.
       */
      orientation: string;

      /**
       * Preferred horizontal field of view, in degrees.
       */
      preferred_fov_degrees: number;

      /**
       * How the client must configure video stabilization: `off` disables EIS so raw
       * motion is preserved for pose extraction, `on` requires it, `any` leaves the
       * device default.
       */
      stabilization_mode: 'off' | 'on' | 'any';

      /**
       * Whether hardware/software stabilization must be enabled. True exactly when
       * stabilization_mode is `on`.
       */
      stabilization_required: boolean;

      /**
       * Required frame width in pixels — recorded footage must match exactly.
       */
      width: number;
    }
  }

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  export interface FundingAccount {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Account hosting the bounty's forum — the one whose `route` and `experience_id`
   * address its discussion thread, and where its submissions dashboard lives. `null`
   * for a platform-wide bounty with no host. May differ from `funding_account`.
   */
  export interface HostingAccount {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account logo image URL. `null` when the account has not set one.
     */
    logo_url: string | null;

    /**
     * Account public route identifier — the `whop.com/{route}` storefront path.
     */
    route: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  export interface Poster {
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
    profile_picture: Poster.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace Poster {
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

export interface BountyRetrieveResponse {
  /**
   * Bounty ID, prefixed `bnty_`.
   */
  id: string;

  accepted_deliverable_types: Array<'content_url' | 'media' | 'data_capture'>;

  /**
   * Submissions accepted so far.
   */
  accepted_submissions_count: number;

  /**
   * Number of submissions that can be accepted (winner slots).
   */
  accepted_submissions_limit: number;

  /**
   * How many winner slots one worker can win. Defaults to `1`. Wins plus proofs
   * awaiting review never exceed this number, and a worker runs one attempt at a
   * time. Cannot exceed `accepted_submissions_limit`.
   */
  accepted_submissions_per_user_limit: number;

  active_proof_livestream_feeds: Array<BountyRetrieveResponse.ActiveProofLivestreamFeed>;

  /**
   * What a referrer earns per accepted submission when the worker arrived through
   * their affiliate link, in whole currency units, at the standard platform fee
   * rate. Taken out of the worker's post-fee reward rather than added on top. `0`
   * when the bounty pays no affiliate share, including bounties tied to no account,
   * which cannot record a referral.
   */
  affiliate_share_amount: number;

  allowed_country_codes: Array<string>;

  /**
   * Submissions delivered and waiting on review. A subset of
   * `unresolved_submissions_count`, which also counts attempts still in progress.
   */
  awaiting_review_submissions_count: number;

  /**
   * Total gross budget committed to the bounty: `gross_reward_amount` times
   * `accepted_submissions_limit`.
   */
  budget_amount: number;

  /**
   * What the poster wants the work to achieve, declared once at create. `null` for
   * bounties created before the taxonomy rolled out.
   */
  business_goal_type:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'data_capture'
    | 'other'
    | null;

  /**
   * When cancellation was requested, as an ISO 8601 timestamp. On a `closed` bounty
   * this means the cancel is pending: submissions are stopped and the bounty cancels
   * once in-flight submissions resolve. On a `canceled` bounty it records when the
   * cancellation was requested. `null` when no cancellation was ever requested.
   */
  cancel_requested_at: string | null;

  /**
   * The technical contract footage must be recorded against. Present only on
   * `data_capture` bounties; `null` for every other goal type.
   */
  capture_spec: BountyRetrieveResponse.CaptureSpec | null;

  /**
   * When the bounty was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency for all amounts on the bounty, as a lowercase ISO 4217 code.
   */
  currency:
    | 'usd'
    | 'sgd'
    | 'inr'
    | 'aud'
    | 'brl'
    | 'cad'
    | 'dkk'
    | 'eur'
    | 'nok'
    | 'gbp'
    | 'sek'
    | 'chf'
    | 'hkd'
    | 'huf'
    | 'jpy'
    | 'mxn'
    | 'myr'
    | 'pln'
    | 'czk'
    | 'nzd'
    | 'aed'
    | 'cop'
    | 'ron'
    | 'thb'
    | 'bgn'
    | 'idr'
    | 'dop'
    | 'php'
    | 'try'
    | 'krw'
    | 'twd'
    | 'vnd'
    | 'pkr'
    | 'clp'
    | 'uyu'
    | 'ars'
    | 'zar'
    | 'dzd'
    | 'tnd'
    | 'mad'
    | 'kes'
    | 'kwd'
    | 'jod'
    | 'all'
    | 'xcd'
    | 'amd'
    | 'bsd'
    | 'bhd'
    | 'bob'
    | 'bam'
    | 'khr'
    | 'crc'
    | 'xof'
    | 'egp'
    | 'etb'
    | 'gmd'
    | 'ghs'
    | 'gtq'
    | 'gyd'
    | 'ils'
    | 'jmd'
    | 'mop'
    | 'mga'
    | 'mur'
    | 'mdl'
    | 'mnt'
    | 'nad'
    | 'ngn'
    | 'mkd'
    | 'omr'
    | 'pyg'
    | 'pen'
    | 'qar'
    | 'rwf'
    | 'sar'
    | 'rsd'
    | 'lkr'
    | 'tzs'
    | 'ttd'
    | 'uzs'
    | 'rub'
    | 'cny'
    | 'kzt'
    | 'awg';

  /**
   * Submissions reviewed and turned down.
   */
  denied_submissions_count: number;

  /**
   * Full task instructions shown to workers.
   */
  description: string;

  /**
   * Experience the bounty's discussion thread lives in, prefixed `exp_`. Read this —
   * not `experience_id` — to open the thread: a platform-wide bounty has no hosting
   * experience of its own but its discussion still lives in one.
   */
  discussion_experience_id: string | null;

  /**
   * Forum feed containing the bounty's discussion thread. `null` for a bounty with
   * no forum post.
   */
  discussion_feed_id: string | null;

  /**
   * Forum post anchoring the bounty's discussion thread. Read together with
   * `discussion_experience_id` to address the thread. `null` for a bounty with no
   * forum post.
   */
  discussion_post_id: string | null;

  /**
   * Experience the bounty is hosted in, prefixed `exp_`. `null` for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: BountyRetrieveResponse.FundingAccount | null;

  /**
   * Gross amount paid out from the bounty pool across accepted submissions — worker
   * payouts, platform fees, and affiliate shares together. Tips and reviewer rewards
   * are excluded.
   */
  gross_paid_out_amount: number;

  /**
   * Gross bounty-pool amount allocated per accepted submission, in whole currency
   * units.
   */
  gross_reward_amount: number;

  /**
   * Account hosting the bounty's forum — the one whose `route` and `experience_id`
   * address its discussion thread, and where its submissions dashboard lives. `null`
   * for a platform-wide bounty with no host. May differ from `funding_account`.
   */
  hosting_account: BountyRetrieveResponse.HostingAccount | null;

  /**
   * Total verified footage a submission must accumulate before it can be submitted,
   * in seconds. Always a whole number of hours. Present only on `data_capture`
   * bounties — it is what `net_reward_amount` pays for, so rate displays divide by
   * it. `null` for every other goal type.
   */
  min_total_verified_duration_seconds: number | null;

  /**
   * What a worker is quoted per accepted submission after the platform fee, in whole
   * currency units. The exact post-fee figure, at the standard platform fee rate — a
   * worker who locked a different rate, or who arrived through an affiliate link, is
   * paid a different amount.
   */
  net_reward_amount: number;

  /**
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  poster: BountyRetrieveResponse.Poster;

  /**
   * How often the schedule creates a new bounty. Each occurrence is a separate
   * bounty; the original is not republished.
   */
  scheduled_frequency: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly' | null;

  /**
   * When a scheduled bounty will publish, as an ISO 8601 timestamp. `null` once
   * published, for bounties that were never scheduled, and for terminally failed
   * drafts parked for manual rescheduling.
   */
  scheduled_publish_at: string | null;

  /**
   * Unfilled winner capacity: `accepted_submissions_limit` minus
   * `accepted_submissions_count`, clamped to zero. Not on its own a signal that the
   * bounty accepts new claims — read `status` for that: only an `open` bounty takes
   * new submissions.
   */
  spots_remaining: number;

  /**
   * Lifecycle state. `scheduled` bounties are unpublished drafts, visible to their
   * poster and the account's authorized managers; `open` bounties accept new
   * submissions; `closed` bounties are live but no longer accept new submissions;
   * `completed` bounties paid out every winner slot; `canceled` bounties ended
   * before filling their slots.
   */
  status: 'scheduled' | 'open' | 'closed' | 'completed' | 'canceled';

  /**
   * When new submissions stopped being accepted, as an ISO 8601 timestamp. Set when
   * a cancellation is requested on a bounty with work in flight, so in-flight
   * submissions can resolve before the bounty cancels. `null` when submissions were
   * never stopped — including completed bounties that simply filled every winner
   * slot.
   */
  submissions_closed_at: string | null;

  /**
   * Short name of the task shown to workers.
   */
  title: string;

  /**
   * Submissions still awaiting an outcome: in progress or pending review.
   */
  unresolved_submissions_count: number;

  /**
   * When the bounty was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * How many winner slots the authenticated user has already won on this bounty.
   * Read against `accepted_submissions_per_user_limit` to show a worker their
   * remaining allowance. `0` when the request has no authenticated user.
   */
  viewer_accepted_submissions_count: number;
}

export namespace BountyRetrieveResponse {
  /**
   * Proof livestreams live on this bounty right now, newest first — workers
   * streaming their attempts. Empty when nothing is live.
   */
  export interface ActiveProofLivestreamFeed {
    /**
     * Livestream feed ID.
     */
    id: string;

    /**
     * User hosting the proof livestream — the worker streaming their attempt. `null`
     * if the host account no longer exists.
     */
    host: ActiveProofLivestreamFeed.Host | null;

    /**
     * Display title for the proof livestream.
     */
    title: string;
  }

  export namespace ActiveProofLivestreamFeed {
    /**
     * User hosting the proof livestream — the worker streaming their attempt. `null`
     * if the host account no longer exists.
     */
    export interface Host {
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
      profile_picture: Host.ProfilePicture;

      /**
       * Public username.
       */
      username: string;
    }

    export namespace Host {
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

  /**
   * The technical contract footage must be recorded against. Present only on
   * `data_capture` bounties; `null` for every other goal type.
   */
  export interface CaptureSpec {
    /**
     * The naming convention for uploaded files, built from the required metadata
     * fields.
     */
    filename_pattern: string;

    /**
     * Inertial measurement unit (IMU) recording requirements.
     */
    imu: CaptureSpec.Imu;

    /**
     * Schema version the client must stamp on the capture manifest it uploads.
     */
    manifest_schema_version: number;

    /**
     * Minimum length of a single clip, in seconds.
     */
    min_clip_duration_seconds: number;

    /**
     * Total verified footage a submission must accumulate across all its clips before
     * it can be submitted, in seconds. Always a whole number of hours.
     */
    min_total_verified_duration_seconds: number;

    required_metadata_fields: Array<string>;

    /**
     * Whether each clip must be one uninterrupted recording rather than stitched
     * segments.
     */
    single_continuous_take: boolean;

    /**
     * Video recording requirements.
     */
    video: CaptureSpec.Video;
  }

  export namespace CaptureSpec {
    /**
     * Inertial measurement unit (IMU) recording requirements.
     */
    export interface Imu {
      /**
       * Units for the device-motion channels, as a compact key=unit string.
       */
      device_motion_units: string;

      /**
       * Units for the magnetometer channel.
       */
      magnetometer_units: string;

      /**
       * Minimum sustained IMU sample rate in hertz for a clip to pass validation.
       */
      min_rate_hz: number;

      /**
       * Target IMU sample rate in hertz.
       */
      target_rate_hz: number;

      /**
       * Minimum IMU sample rate in hertz tolerated during the warmup window.
       */
      warmup_min_rate_hz: number;

      /**
       * Startup window, in nanoseconds, during which the relaxed warmup rate applies.
       */
      warmup_ns: number;
    }

    /**
     * Video recording requirements.
     */
    export interface Video {
      /**
       * Maximum acceptable average bitrate, in megabits per second.
       */
      bitrate_ceiling_mbps: number;

      /**
       * Minimum acceptable average bitrate, in megabits per second.
       */
      bitrate_floor_mbps: number;

      /**
       * Recommended average bitrate to encode at, in megabits per second.
       */
      bitrate_target_mbps: number;

      /**
       * Which physical lens to record with.
       */
      camera_lens: string;

      codecs: Array<string>;

      /**
       * Whether the client must also write the camera make and model into the video
       * container's metadata. When `false`, the capture manifest and export CSV are the
       * metadata carrier.
       */
      embed_camera_metadata: boolean;

      /**
       * Target capture frame rate.
       */
      fps: number;

      /**
       * Longest stall between consecutive frames a clip may contain before the client
       * rejects it, in milliseconds. Every frame is timestamped in the frame log, so a
       * stall stays alignable downstream — this bounds how broken a capture may be, not
       * how evenly it must be paced.
       */
      frame_gap_tolerance_ms: number;

      /**
       * Required frame height in pixels — recorded footage must match exactly.
       */
      height: number;

      /**
       * Minimum acceptable horizontal field of view, in degrees.
       */
      min_fov_degrees: number;

      /**
       * Device orientation to record in.
       */
      orientation: string;

      /**
       * Preferred horizontal field of view, in degrees.
       */
      preferred_fov_degrees: number;

      /**
       * How the client must configure video stabilization: `off` disables EIS so raw
       * motion is preserved for pose extraction, `on` requires it, `any` leaves the
       * device default.
       */
      stabilization_mode: 'off' | 'on' | 'any';

      /**
       * Whether hardware/software stabilization must be enabled. True exactly when
       * stabilization_mode is `on`.
       */
      stabilization_required: boolean;

      /**
       * Required frame width in pixels — recorded footage must match exactly.
       */
      width: number;
    }
  }

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  export interface FundingAccount {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Account hosting the bounty's forum — the one whose `route` and `experience_id`
   * address its discussion thread, and where its submissions dashboard lives. `null`
   * for a platform-wide bounty with no host. May differ from `funding_account`.
   */
  export interface HostingAccount {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account logo image URL. `null` when the account has not set one.
     */
    logo_url: string | null;

    /**
     * Account public route identifier — the `whop.com/{route}` storefront path.
     */
    route: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  export interface Poster {
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
    profile_picture: Poster.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace Poster {
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

export interface BountyListResponse {
  /**
   * Bounty ID, prefixed `bnty_`.
   */
  id: string;

  accepted_deliverable_types: Array<'content_url' | 'media' | 'data_capture'>;

  /**
   * Submissions accepted so far.
   */
  accepted_submissions_count: number;

  /**
   * Number of submissions that can be accepted (winner slots).
   */
  accepted_submissions_limit: number;

  /**
   * How many winner slots one worker can win. Defaults to `1`. Wins plus proofs
   * awaiting review never exceed this number, and a worker runs one attempt at a
   * time. Cannot exceed `accepted_submissions_limit`.
   */
  accepted_submissions_per_user_limit: number;

  /**
   * What a referrer earns per accepted submission when the worker arrived through
   * their affiliate link, in whole currency units, at the standard platform fee
   * rate. Taken out of the worker's post-fee reward rather than added on top. `0`
   * when the bounty pays no affiliate share, including bounties tied to no account,
   * which cannot record a referral.
   */
  affiliate_share_amount: number;

  allowed_country_codes: Array<string>;

  /**
   * Total gross budget committed to the bounty: `gross_reward_amount` times
   * `accepted_submissions_limit`.
   */
  budget_amount: number;

  /**
   * What the poster wants the work to achieve, declared once at create. `null` for
   * bounties created before the taxonomy rolled out.
   */
  business_goal_type:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'data_capture'
    | 'other'
    | null;

  /**
   * When cancellation was requested, as an ISO 8601 timestamp. On a `closed` bounty
   * this means the cancel is pending: submissions are stopped and the bounty cancels
   * once in-flight submissions resolve. On a `canceled` bounty it records when the
   * cancellation was requested. `null` when no cancellation was ever requested.
   */
  cancel_requested_at: string | null;

  /**
   * When the bounty was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency for all amounts on the bounty, as a lowercase ISO 4217 code.
   */
  currency: string;

  /**
   * Full task instructions shown to workers.
   */
  description: string;

  /**
   * Experience the bounty's discussion thread lives in, prefixed `exp_`. Read this —
   * not `experience_id` — to open the thread: a platform-wide bounty has no hosting
   * experience of its own but its discussion still lives in one.
   */
  discussion_experience_id: string | null;

  /**
   * Forum feed containing the bounty's discussion thread. `null` for a bounty with
   * no forum post.
   */
  discussion_feed_id: string | null;

  /**
   * Forum post anchoring the bounty's discussion thread. Read together with
   * `discussion_experience_id` to address the thread. `null` for a bounty with no
   * forum post.
   */
  discussion_post_id: string | null;

  /**
   * Experience the bounty is hosted in, prefixed `exp_`. `null` for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: BountyListResponse.FundingAccount | null;

  /**
   * Gross amount paid out from the bounty pool across accepted submissions — worker
   * payouts, platform fees, and affiliate shares together. Tips and reviewer rewards
   * are excluded.
   */
  gross_paid_out_amount: number;

  /**
   * Gross bounty-pool amount allocated per accepted submission, in whole currency
   * units.
   */
  gross_reward_amount: number;

  /**
   * Account hosting the bounty's forum — the one whose `route` and `experience_id`
   * address its discussion thread, and where its submissions dashboard lives. `null`
   * for a platform-wide bounty with no host. May differ from `funding_account`.
   */
  hosting_account: BountyListResponse.HostingAccount | null;

  /**
   * Total verified footage a submission must accumulate before it can be submitted,
   * in seconds. Always a whole number of hours. Present only on `data_capture`
   * bounties — it is what `net_reward_amount` pays for, so rate displays divide by
   * it. `null` for every other goal type.
   */
  min_total_verified_duration_seconds: number | null;

  /**
   * What a worker is quoted per accepted submission after the platform fee, in whole
   * currency units. The exact post-fee figure, at the standard platform fee rate — a
   * worker who locked a different rate, or who arrived through an affiliate link, is
   * paid a different amount.
   */
  net_reward_amount: number;

  /**
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  poster: BountyListResponse.Poster;

  /**
   * How often the schedule creates a new bounty. Each occurrence is a separate
   * bounty; the original is not republished.
   */
  scheduled_frequency: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly' | null;

  /**
   * When a scheduled bounty will publish, as an ISO 8601 timestamp. `null` once
   * published, for bounties that were never scheduled, and for terminally failed
   * drafts parked for manual rescheduling.
   */
  scheduled_publish_at: string | null;

  /**
   * Unfilled winner capacity: `accepted_submissions_limit` minus
   * `accepted_submissions_count`, clamped to zero. Not on its own a signal that the
   * bounty accepts new claims — read `status` for that: only an `open` bounty takes
   * new submissions.
   */
  spots_remaining: number;

  /**
   * Lifecycle state. `scheduled` bounties are unpublished drafts, visible to their
   * poster and the account's authorized managers; `open` bounties accept new
   * submissions; `closed` bounties are live but no longer accept new submissions;
   * `completed` bounties paid out every winner slot; `canceled` bounties ended
   * before filling their slots.
   */
  status: 'scheduled' | 'open' | 'closed' | 'completed' | 'canceled';

  /**
   * When new submissions stopped being accepted, as an ISO 8601 timestamp. Set when
   * a cancellation is requested on a bounty with work in flight, so in-flight
   * submissions can resolve before the bounty cancels. `null` when submissions were
   * never stopped — including completed bounties that simply filled every winner
   * slot.
   */
  submissions_closed_at: string | null;

  /**
   * Short name of the task shown to workers.
   */
  title: string;

  /**
   * Submissions still awaiting an outcome: in progress or pending review.
   */
  unresolved_submissions_count: number;

  /**
   * When the bounty was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * How many winner slots the authenticated user has already won on this bounty.
   * Read against `accepted_submissions_per_user_limit` to show a worker their
   * remaining allowance. `0` when the request has no authenticated user.
   */
  viewer_accepted_submissions_count: number;
}

export namespace BountyListResponse {
  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  export interface FundingAccount {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Account hosting the bounty's forum — the one whose `route` and `experience_id`
   * address its discussion thread, and where its submissions dashboard lives. `null`
   * for a platform-wide bounty with no host. May differ from `funding_account`.
   */
  export interface HostingAccount {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account logo image URL. `null` when the account has not set one.
     */
    logo_url: string | null;

    /**
     * Account public route identifier — the `whop.com/{route}` storefront path.
     */
    route: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  export interface Poster {
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
    profile_picture: Poster.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace Poster {
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

export interface BountyCreateParams {
  /**
   * Body param: Full task instructions shown to workers.
   */
  description: string;

  /**
   * Body param: Gross bounty-pool amount (USD) escrowed per accepted submission, in
   * whole dollars. Platform fees and affiliate shares are paid from this amount.
   */
  gross_reward_amount: number;

  /**
   * Body param: Short name of the task shown to workers.
   */
  title: string;

  /**
   * Body param: Number of submissions that can be accepted (winner slots). Defaults
   * to 1. The escrowed total is `gross_reward_amount` times this limit and must be
   * at least $5.
   */
  accepted_submissions_limit?: number | null;

  /**
   * Body param: How many winner slots one worker can win. Defaults to `1`. Wins plus
   * proofs awaiting review never exceed this number, and a worker runs one attempt
   * at a time. Cannot exceed `accepted_submissions_limit`.
   */
  accepted_submissions_per_user_limit?: number | null;

  /**
   * Body param: Account whose balance funds the bounty pool (`biz_` tag). Defaults
   * to the caller's personal balance. Requires permission to move the account's
   * funds.
   */
  account_id?: string | null;

  /**
   * Body param: Countries whose residents can work the bounty, as ISO 3166 alpha-2
   * codes. Empty means worldwide.
   */
  allowed_country_codes?: Array<string> | null;

  /**
   * Body param: What the poster wants the work to achieve, declared once here.
   */
  business_goal_type?:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'data_capture'
    | 'other';

  /**
   * Body param: Per-bounty overrides of the served capture contract. Only accepted
   * when `business_goal_type` is `data_capture`; omitted fields keep the platform
   * defaults, and the resulting contract is echoed back as `capture_spec` on the
   * bounty.
   */
  capture_spec?: BountyCreateParams.CaptureSpec;

  /**
   * Body param: Experience to host the bounty in (`exp_` tag). Any visibility —
   * public for an open bounty, private for an invited one. Required unless
   * account_id is set, in which case the bounty anchors in that account's public
   * forum.
   */
  experience_id?: string | null;

  /**
   * Body param: How often the schedule creates a new bounty. Each occurrence is a
   * separate bounty. Defaults to `once`; only applies with `publish_at`.
   */
  frequency?: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly';

  /**
   * Body param: ISO 8601 time to publish the bounty. When set, the bounty is created
   * as a hidden draft and funded + published at this time instead of immediately.
   */
  publish_at?: string | null;

  /**
   * Body param: IANA timezone for recurring occurrences. Required when publish_at is
   * set.
   */
  publish_at_timezone?: string | null;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace BountyCreateParams {
  /**
   * Per-bounty overrides of the served capture contract. Only accepted when
   * `business_goal_type` is `data_capture`; omitted fields keep the platform
   * defaults, and the resulting contract is echoed back as `capture_spec` on the
   * bounty.
   */
  export interface CaptureSpec {
    /**
     * Average bitrate the recorder encodes at, in megabits per second. Must sit within
     * the served floor and ceiling.
     */
    bitrate_target_mbps?: number;

    /**
     * Whether the recorder also writes camera make and model into the video
     * container's metadata.
     */
    embed_camera_metadata?: boolean;

    /**
     * Longest stall between consecutive frames a clip may contain before the client
     * rejects it, in milliseconds. Unlike the recording fields this one can also be
     * tuned after the bounty is created, since it bounds what is accepted rather than
     * how footage is captured.
     */
    frame_gap_tolerance_ms?: number;

    /**
     * Minimum length of a single clip, in seconds.
     */
    min_clip_duration_seconds?: number;

    /**
     * Total verified footage a submission must accumulate across all its clips before
     * it can be submitted, in seconds. Must be a whole number of hours between 1
     * and 12. Editable after create, until someone starts an attempt.
     */
    min_total_verified_duration_seconds?: number;

    /**
     * How the recorder configures video stabilization. `off` preserves raw motion for
     * pose extraction.
     */
    stabilization_mode?: 'off' | 'on' | 'any';
  }
}

export interface BountyRetrieveParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface BountyListParams extends CursorPageParams {
  /**
   * Query param: Scope the list to this account (`biz_` tag). Requires read access
   * to the account; account API keys may pass their own account or a connected
   * account.
   */
  account_id?: string;

  /**
   * Query param: Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Query param: Filter by the poster's declared goal. Bounties created before the
   * goal taxonomy carry no goal and never match this filter.
   */
  business_goal_type?:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'data_capture'
    | 'other';

  /**
   * Query param: Only bounties workable from this country, as an ISO 3166-1 alpha-2
   * code. Bounties with no country targeting are workable worldwide and always
   * match.
   */
  country?: string;

  /**
   * Query param: Only bounties created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only bounties created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Query param: Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Only bounties posted to this forum experience, prefixed `exp_`. An
   * unknown experience, or one outside the caller's scope, matches nothing.
   */
  experience_id?: string;

  /**
   * Query param: Number of bounties to return from the start of the window.
   */
  first?: number;

  /**
   * Query param: Number of bounties to return from the end of the window.
   */
  last?: number;

  /**
   * Query param: Sort field.
   */
  order?: 'created_at' | 'gross_paid_out_amount' | 'gross_reward_amount';

  /**
   * Query param: Substring match on the bounty title or ID.
   */
  query?: string;

  /**
   * Query param: Filter by lifecycle state.
   */
  status?: 'scheduled' | 'open' | 'closed' | 'completed' | 'canceled';

  /**
   * Query param: List the bounties this user participated in (`user_` tag). Must be
   * the authenticated user.
   */
  user_id?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export declare namespace Bounties {
  export {
    type BountyCreateResponse as BountyCreateResponse,
    type BountyRetrieveResponse as BountyRetrieveResponse,
    type BountyListResponse as BountyListResponse,
    type BountyListResponsesCursorPage as BountyListResponsesCursorPage,
    type BountyCreateParams as BountyCreateParams,
    type BountyRetrieveParams as BountyRetrieveParams,
    type BountyListParams as BountyListParams,
  };
}
