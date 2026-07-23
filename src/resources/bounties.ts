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
   * Lists bounties visible to the credential — for an account API key, the account's
   * bounties including scheduled drafts; for a user token, the bounties the user can
   * see and work.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bountyListItem of client.bounties.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BountyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BountyListItemsCursorPage, BountyListItem> {
    return this._client.getAPIList('/bounties', CursorPage<BountyListItem>, { query, ...options });
  }

  /**
   * Creates a bounty and escrows its reward pool. Publishes immediately, or as a
   * scheduled draft when you set `publish_at`.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.create({
   *   description: 'description',
   *   gross_reward_amount: 0,
   *   title: 'title',
   * });
   * ```
   */
  create(params: BountyCreateParams, options?: RequestOptions): APIPromise<Bounty> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/bounties', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a bounty by ID. Bounties outside the caller's scope return `404`.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Bounty> {
    return this._client.get(path`/bounties/${id}`, options);
  }

  /**
   * Updates a bounty. A published bounty accepts title, description, and country
   * targeting while it is still open with nothing under review. A scheduled
   * (not-yet-published) draft additionally accepts the reward, winner slots, and
   * schedule.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.update('id');
   * ```
   */
  update(
    id: string,
    body: BountyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Bounty> {
    return this._client.patch(path`/bounties/${id}`, { body, ...options });
  }

  /**
   * Cancels a bounty. With no in-flight work, it cancels immediately and refunds the
   * funder. Otherwise it stops new submissions and cancels once the in-flight work
   * resolves and pays out. Repeating the request is a no-op. A bounty that already
   * paid out every slot returns `400`.
   *
   * @example
   * ```ts
   * const bounty = await client.bounties.cancel('id');
   * ```
   */
  cancel(
    id: string,
    params: BountyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Bounty> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/bounties/${id}/cancel`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type BountyListItemsCursorPage = CursorPage<BountyListItem>;

export interface Bounty {
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

  allowed_country_codes: Array<string>;

  /**
   * Total gross budget committed to the bounty: `gross_reward_amount` times
   * `accepted_submissions_limit`.
   */
  budget_amount: number;

  /**
   * What the poster wants the work to achieve, declared once at create. The server
   * derives `accepted_deliverable_types` from it; posters never set deliverable
   * types directly. `null` for bounties created before the taxonomy rolled out.
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
  capture_spec: Bounty.CaptureSpec | null;

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
   * Full task instructions shown to workers.
   */
  description: string;

  /**
   * Experience the bounty is hosted in, prefixed `exp_`. `null` for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: Bounty.FundingAccount | null;

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
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  poster: Bounty.Poster;

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
   * `accepted_submissions_count`, clamped to zero. Not a signal that the bounty
   * currently accepts new claims.
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
}

export namespace Bounty {
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

export interface BountyListItem {
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

  allowed_country_codes: Array<string>;

  /**
   * Total gross budget committed to the bounty: `gross_reward_amount` times
   * `accepted_submissions_limit`.
   */
  budget_amount: number;

  /**
   * What the poster wants the work to achieve, declared once at create. The server
   * derives `accepted_deliverable_types` from it; posters never set deliverable
   * types directly. `null` for bounties created before the taxonomy rolled out.
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
   * Experience the bounty is hosted in, prefixed `exp_`. `null` for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * Account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: BountyListItem.FundingAccount | null;

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
   * User who posted the bounty — the account owner when created with an account API
   * key.
   */
  poster: BountyListItem.Poster;

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
   * `accepted_submissions_count`, clamped to zero. Not a signal that the bounty
   * currently accepts new claims.
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
}

export namespace BountyListItem {
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

export interface BountyListParams extends CursorPageParams {
  /**
   * Scope the list to this account (`biz_` tag). Requires read access to the
   * account; account API keys may pass their own account or a connected account.
   */
  account_id?: string;

  /**
   * Cursor to paginate backwards from.
   */
  before?: string;

  /**
   * Only bounties created after this ISO 8601 timestamp.
   */
  created_after?: string;

  /**
   * Only bounties created before this ISO 8601 timestamp.
   */
  created_before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * Number of bounties to return from the start of the window.
   */
  first?: number;

  /**
   * Number of bounties to return from the end of the window.
   */
  last?: number;

  /**
   * Sort field.
   */
  order?: 'created_at' | 'gross_paid_out_amount';

  /**
   * Substring match on the bounty title or ID.
   */
  query?: string;

  /**
   * Filter by lifecycle state.
   */
  status?: 'scheduled' | 'open' | 'closed' | 'completed' | 'canceled';

  /**
   * List the bounties this user participated in (`user_` tag). Must be the
   * authenticated user.
   */
  user_id?: string;
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
   * Body param: What the poster wants the work to achieve. Declare the goal once
   * here; the server derives `accepted_deliverable_types` from it, and each
   * submission reports which shape it used as `deliverable_type`.
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
     * Minimum length of a single clip, in seconds.
     */
    min_clip_duration_seconds?: number;

    /**
     * How the recorder configures video stabilization. `off` preserves raw motion for
     * pose extraction.
     */
    stabilization_mode?: 'off' | 'on' | 'any';
  }
}

export interface BountyUpdateParams {
  /**
   * Scheduled drafts only. Number of submissions that can be accepted (winner
   * slots).
   */
  accepted_submissions_limit?: number | null;

  /**
   * Replace the countries whose residents can work the bounty, as ISO 3166 alpha-2
   * codes. Empty means worldwide.
   */
  allowed_country_codes?: Array<string> | null;

  /**
   * What the poster wants the work to achieve. Declare the goal once here; the
   * server derives `accepted_deliverable_types` from it, and each submission reports
   * which shape it used as `deliverable_type`.
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
   * New full task instructions.
   */
  description?: string;

  /**
   * Scheduled drafts only. How often the schedule creates a new bounty.
   */
  frequency?: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly';

  /**
   * Scheduled drafts only. Gross bounty-pool amount (USD) escrowed per accepted
   * submission. The escrowed total (this times accepted_submissions_limit) must stay
   * at least $5.
   */
  gross_reward_amount?: number | null;

  /**
   * Scheduled drafts only. New ISO 8601 time to publish the draft. Must be in the
   * future.
   */
  publish_at?: string | null;

  /**
   * Scheduled drafts only. IANA timezone for recurring occurrences.
   */
  publish_at_timezone?: string | null;

  /**
   * New short name of the task.
   */
  title?: string;
}

export interface BountyCancelParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace Bounties {
  export {
    type Bounty as Bounty,
    type BountyListItem as BountyListItem,
    type BountyListItemsCursorPage as BountyListItemsCursorPage,
    type BountyListParams as BountyListParams,
    type BountyCreateParams as BountyCreateParams,
    type BountyUpdateParams as BountyUpdateParams,
    type BountyCancelParams as BountyCancelParams,
  };
}
