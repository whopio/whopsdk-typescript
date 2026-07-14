// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * A Workforce Bounty is a paid task posted by an account or user. The reward is held in escrow when the bounty publishes, workers submit proof of completed work, and each accepted submission is paid out until every winner slot fills.
 *
 * Use the Workforce Bounties API to list an account's bounties for reporting or dashboards, list the bounties a user can work or has participated in, and retrieve a single bounty by ID.
 */
export class Bounties extends APIResource {
  /**
   * Lists workforce bounties visible to the credential. Account API keys return the
   * account's bounties, scheduled drafts included; user tokens return the bounties
   * the user can see and work. Pass account_id to view one account's bounties as a
   * team member (or a connected account of the caller's), or user_id (your own) to
   * list the bounties you participated in.
   */
  list(
    query: BountyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WorkforceBountyListItemsCursorPage, WorkforceBountyListItem> {
    return this._client.getAPIList('/workforce/bounties', CursorPage<WorkforceBountyListItem>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves one workforce bounty by ID. The bounty must be visible to the
   * credential; bounties outside the caller's scope return 404.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WorkforceBounty> {
    return this._client.get(path`/workforce/bounties/${id}`, options);
  }
}

export type WorkforceBountyListItemsCursorPage = CursorPage<WorkforceBountyListItem>;

export interface WorkforceBounty {
  /**
   * Bounty ID, prefixed `bnty_`.
   */
  id: string;

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
   * What the poster wants the work to achieve.
   */
  business_goal_type:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'other'
    | null;

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
   * Experience the bounty is hosted in, prefixed `exp_`. Null for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * The account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: WorkforceBounty.FundingAccount | null;

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
   * The user who posted the bounty.
   */
  poster: WorkforceBounty.Poster;

  /**
   * How often the schedule creates a new bounty. Each occurrence is a separate
   * bounty; the original is not republished.
   */
  scheduled_frequency: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly' | null;

  /**
   * When a scheduled bounty will publish, as an ISO 8601 timestamp. Null once
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
   * When new submissions were explicitly stopped, as an ISO 8601 timestamp. Null
   * when submissions were never explicitly stopped — including closed or completed
   * bounties that simply filled every winner slot.
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

export namespace WorkforceBounty {
  /**
   * The account whose balance funds the bounty pool, or `null` when a user funds it
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
   * The user who posted the bounty.
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

export interface WorkforceBountyListItem {
  /**
   * Bounty ID, prefixed `bnty_`.
   */
  id: string;

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
   * What the poster wants the work to achieve.
   */
  business_goal_type:
    | 'clipping'
    | 'post_engagement'
    | 'owned_account_growth'
    | 'ugc_content'
    | 'local_activation'
    | 'other'
    | null;

  /**
   * When the bounty was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency for all amounts on the bounty, as a lowercase ISO 4217 code.
   */
  currency: string;

  /**
   * Experience the bounty is hosted in, prefixed `exp_`. Null for platform-wide
   * bounties; may belong to a different account than the funder.
   */
  experience_id: string | null;

  /**
   * The account whose balance funds the bounty pool, or `null` when a user funds it
   * personally. May differ from the account hosting `experience_id`.
   */
  funding_account: WorkforceBountyListItem.FundingAccount | null;

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
   * The user who posted the bounty.
   */
  poster: WorkforceBountyListItem.Poster;

  /**
   * How often the schedule creates a new bounty. Each occurrence is a separate
   * bounty; the original is not republished.
   */
  scheduled_frequency: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly' | null;

  /**
   * When a scheduled bounty will publish, as an ISO 8601 timestamp. Null once
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
   * When new submissions were explicitly stopped, as an ISO 8601 timestamp. Null
   * when submissions were never explicitly stopped — including closed or completed
   * bounties that simply filled every winner slot.
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

export namespace WorkforceBountyListItem {
  /**
   * The account whose balance funds the bounty pool, or `null` when a user funds it
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
   * The user who posted the bounty.
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

export declare namespace Bounties {
  export {
    type WorkforceBounty as WorkforceBounty,
    type WorkforceBountyListItem as WorkforceBountyListItem,
    type WorkforceBountyListItemsCursorPage as WorkforceBountyListItemsCursorPage,
    type BountyListParams as BountyListParams,
  };
}
