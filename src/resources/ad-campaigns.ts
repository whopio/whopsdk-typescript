// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An Ad Campaign is the top-level container for paid ads on an ad network. It sets the platform, objective, and budget strategy shared by its [ad groups](/api-reference/beta/ad-groups/ad-group) and ads.
 *
 * Use the Ad Campaigns API to create campaigns, list campaigns for an account, retrieve or update campaign settings, and pause or resume campaign delivery.
 */
export class AdCampaigns extends APIResource {
  /**
   * Retrieves a single ad campaign with stats over the requested window.
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: AdCampaignRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaign> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.get(path`/ad_campaigns/${id}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an ad campaign's editable fields (title, budget, schedule, bid strategy,
   * special ad categories, and, before launch, budget type and budget optimization),
   * and launches a draft campaign by setting status to active. Objective and desired
   * cost per result are fixed at creation and cannot be changed.
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.update('id');
   * ```
   */
  update(id: string, params: AdCampaignUpdateParams, options?: RequestOptions): APIPromise<AdCampaign> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/ad_campaigns/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the ad campaigns for an account, with stats over the requested window.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const adCampaign of client.adCampaigns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AdCampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdCampaignsCursorPage, AdCampaign> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/ad_campaigns', CursorPage<AdCampaign>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Pauses an active ad campaign.
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.pause('id');
   * ```
   */
  pause(
    id: string,
    params: AdCampaignPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaign> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ad_campaigns/${id}/pause`, {
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
   * Resumes a paused ad campaign.
   *
   * @example
   * ```ts
   * const adCampaign = await client.adCampaigns.unpause('id');
   * ```
   */
  unpause(
    id: string,
    params: AdCampaignUnpauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaign> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ad_campaigns/${id}/unpause`, {
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
}

export type AdCampaignsCursorPage = CursorPage<AdCampaign>;

export interface AdCampaign {
  /**
   * Unique identifier for the ad campaign, prefixed `adcamp_`.
   */
  id: string;

  /**
   * USD value attributed to add-to-cart events. Sums the value sent with each event,
   * normalized to USD; events without a value contribute 0.
   */
  added_to_cart_value: number;

  /**
   * Whop pixel-attributed add-to-cart events, last-click.
   */
  added_to_carts: number;

  /**
   * The campaign's budget, in the ad account's currency. `null` when each ad group
   * sets its own budget instead.
   */
  budget_amount: number | null;

  /**
   * Which level owns the budget: the whole campaign (`ad_campaign`) or each ad group
   * individually (`ad_group`).
   */
  budget_optimization: 'ad_campaign' | 'ad_group' | null;

  /**
   * Whether `budget_amount` is spent per day (`daily`) or over the campaign's full
   * run (`lifetime`).
   */
  budget_type: 'daily' | 'lifetime' | null;

  /**
   * Clicks divided by impressions, between 0 and 1.
   */
  click_through_rate: number;

  /**
   * The number of clicks.
   */
  clicks: number;

  /**
   * USD value attributed to complete-registration events. Sums the value sent with
   * each event, normalized to USD; events without a value contribute 0.
   */
  completed_registration_value: number;

  /**
   * Whop pixel-attributed complete-registration events, last-click.
   */
  completed_registrations: number;

  /**
   * USD value attributed to contact events. Sums the value sent with each event,
   * normalized to USD; events without a value contribute 0.
   */
  contact_value: number;

  /**
   * Whop pixel-attributed contact events, last-click.
   */
  contacts: number;

  /**
   * Spend divided by attributed add-to-cart events; null when they are not the goal
   * and none are attributed.
   */
  cost_per_added_to_cart: number | null;

  /**
   * Spend divided by clicks; 0 when there are no clicks.
   */
  cost_per_click: number;

  /**
   * Spend divided by attributed complete-registration events; null when they are not
   * the goal and none are attributed.
   */
  cost_per_completed_registration: number | null;

  /**
   * Spend divided by attributed contact events; null when contacts are not the goal
   * and none are attributed.
   */
  cost_per_contact: number | null;

  /**
   * Spend divided by attributed leads; null when leads are not a goal and none are
   * attributed.
   */
  cost_per_lead: number | null;

  /**
   * Spend per 1,000 impressions; 0 when there are no impressions.
   */
  cost_per_mille: number;

  /**
   * Spend divided by attributed purchases; null when purchases are not a goal and
   * none are attributed.
   */
  cost_per_purchase: number | null;

  /**
   * Spend divided by Whop pixel-attributed results; null when nothing
   * Whop-attributable is being optimized for.
   */
  cost_per_result: number | null;

  /**
   * Spend divided by attributed schedule events; null when schedules are not the
   * goal and none are attributed.
   */
  cost_per_schedule: number | null;

  /**
   * Spend divided by attributed submit-application events; null when they are not
   * the goal and none are attributed.
   */
  cost_per_submitted_application: number | null;

  /**
   * Spend divided by unique clicks; null when there are no unique clicks.
   */
  cost_per_unique_click: number | null;

  /**
   * Spend divided by attributed view-content events; null when they are not the goal
   * and none are attributed.
   */
  cost_per_viewed_content: number | null;

  /**
   * When the campaign was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Whop pixel-attributed custom (merchant-defined) conversion events, last-click,
   * across all custom event names.
   */
  custom_conversions: number;

  /**
   * Whop pixel-attributed custom conversions, keyed by your event name with its
   * last-click count as the value. Empty when no named custom events are attributed.
   * Custom events fired without a name are counted in custom_conversions but omitted
   * here, so these values sum to at most custom_conversions.
   */
  custom_event_counts: unknown;

  /**
   * Conversion value attributed to each custom event, keyed by event name like
   * custom_event_counts. Sums the value passed to whop.track, normalized to USD;
   * events fired without a value contribute 0.
   */
  custom_event_values: unknown;

  /**
   * Whether the campaign's ads are delivering right now, and if not, why. When
   * several states apply at once, the highest-precedence one is returned.
   */
  delivery_status:
    | 'payment_failed'
    | 'all_ads_rejected'
    | 'draft'
    | 'no_ad_groups'
    | 'no_ads'
    | 'paused'
    | 'processing'
    | 'issues'
    | 'scheduled'
    | 'completed'
    | 'ad_groups_off'
    | 'active';

  /**
   * Platform-reported impressions divided by reach.
   */
  frequency: number | null;

  /**
   * The number of impressions.
   */
  impressions: number;

  issues: Array<AdCampaign.Issue>;

  /**
   * USD value attributed to lead events. Sums the value sent with each event,
   * normalized to USD; events without a value contribute 0.
   */
  lead_value: number;

  /**
   * Whop pixel-attributed leads, last-click.
   */
  leads: number;

  /**
   * Clicks on links in the ad that lead to your destination, as reported by the ad
   * platform. A subset of clicks, which also counts likes, comments, and other
   * interactions with the ad.
   */
  link_clicks: number;

  /**
   * The goal the campaign optimizes toward.
   */
  objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

  /**
   * The event the campaign optimizes for when a single goal is set campaign-wide.
   * `null` when each ad group sets its own optimization_goal.
   */
  optimization_goal: string | null;

  /**
   * The ad network the campaign runs on.
   */
  platform: 'meta' | 'tiktok';

  /**
   * USD value of pixel-attributed purchases.
   */
  purchase_value: number;

  /**
   * Whop pixel-attributed purchases, last-click.
   */
  purchases: number;

  /**
   * The number of unique people who saw this.
   */
  reach: number;

  /**
   * The Whop pixel conversion event whose attributed count represents results — the
   * optimization goal, or the highest-volume attributed event for campaigns that
   * budget per ad group. Null when the goal isn't a Whop-attributed event.
   */
  result_event:
    | 'purchase'
    | 'lead'
    | 'schedule'
    | 'submit_application'
    | 'contact'
    | 'complete_registration'
    | 'view_content'
    | 'add_to_cart'
    | 'custom'
    | 'messaging_conversation'
    | null;

  /**
   * The merchant-defined event name when result_event is custom; null for the
   * standard events.
   */
  result_event_name: string | null;

  /**
   * The Whop pixel-attributed count behind result_event. When a campaign's ad groups
   * optimize different goals there is no single result_event (it is null), and this
   * is instead the sum of each ad group's own attributed results. Null when nothing
   * Whop-attributable is being optimized for.
   */
  results: number | null;

  /**
   * Purchase value divided by spend, both in USD (a currency-neutral ratio); 0 when
   * there is no spend.
   */
  return_on_ad_spend: number;

  /**
   * USD value attributed to schedule events. Sums the value sent with each event,
   * normalized to USD; events without a value contribute 0.
   */
  schedule_value: number;

  /**
   * Whop pixel-attributed schedule events, last-click.
   */
  schedules: number;

  special_ad_categories: Array<'housing' | 'employment' | 'financial_products' | 'politics'>;

  /**
   * The amount charged, in spend_currency.
   */
  spend: number;

  /**
   * The ISO 4217 currency code of all monetary metrics.
   */
  spend_currency: string | null;

  /**
   * The lifecycle status of the ad campaign.
   */
  status:
    | 'active'
    | 'paused'
    | 'inactive'
    | 'stale'
    | 'pending_refund'
    | 'payment_failed'
    | 'draft'
    | 'in_review'
    | 'flagged'
    | 'importing'
    | 'imported'
    | 'duplicating';

  /**
   * USD value attributed to submit-application events. Sums the value sent with each
   * event, normalized to USD; events without a value contribute 0.
   */
  submitted_application_value: number;

  /**
   * Whop pixel-attributed submit-application events, last-click.
   */
  submitted_applications: number;

  /**
   * Display name of the ad campaign.
   */
  title: string;

  /**
   * Unique clicks divided by impressions, between 0 and 1.
   */
  unique_click_through_rate: number | null;

  /**
   * People who clicked, reported by the Whop pixel, counted once per person.
   */
  unique_clicks: number;

  /**
   * When the campaign was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * USD value attributed to view-content events. Sums the value sent with each
   * event, normalized to USD; events without a value contribute 0.
   */
  viewed_content_value: number;

  /**
   * Whop pixel-attributed view-content events, last-click.
   */
  viewed_contents: number;

  /**
   * How delivery bids in the ad auction: `minimum_cost` gets the most results for
   * the budget, `average_target` holds an average cost per result, and
   * `maximum_target` never bids above a cap.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target' | null;
}

export namespace AdCampaign {
  /**
   * Open issues affecting the campaign and its descendant ad groups and ads.
   */
  export interface Issue {
    /**
     * Unique identifier for the issue.
     */
    id: string;

    /**
     * A description of what the issue is and how it can be resolved.
     */
    message: string;

    /**
     * The ID of the campaign, ad group, or ad the issue is attached to.
     */
    resource_id: string | null;

    /**
     * The type of resource the issue is attached to.
     */
    resource_type: 'ad_campaign' | 'ad_group' | 'ad';
  }
}

export interface AdCampaignRetrieveParams {
  /**
   * Query param: Attribution model the conversion stats count under (defaults to
   * last_touch). Under both models a journey with any whop ad touch attributes to
   * whop; the model picks which whop touch credits the entity and which non-whop
   * source wins otherwise.
   */
  attribution_model?: 'last_touch' | 'first_touch';

  /**
   * Query param: Start of the stats window.
   */
  stats_from?: string;

  /**
   * Query param: End of the stats window.
   */
  stats_to?: string;

  /**
   * Query param: IANA timezone the stats window is interpreted in. Defaults to UTC.
   */
  time_zone?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface AdCampaignUpdateParams {
  /**
   * Body param: How delivery bids in the ad auction: `minimum_cost` gets the most
   * results for the budget, `average_target` holds an average cost per result,
   * `maximum_target` never bids above a cap. Switching to `minimum_cost` clears the
   * cap amounts stored on the campaign's ad groups. Only for campaigns that own the
   * budget.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * Body param: The campaign budget, in the account's currency. Interpreted as daily
   * or lifetime per the campaign's budget type, including a budget_type sent in the
   * same request.
   */
  budget_amount?: number;

  /**
   * Body param: Which level owns the budget: the whole campaign (`ad_campaign`) or
   * each ad group individually (`ad_group`). Only changeable before the campaign is
   * live on the ad network; switching to `ad_campaign` requires budget_amount in the
   * same request, and switching to `ad_group` clears the campaign budget.
   */
  budget_optimization?: 'ad_campaign' | 'ad_group';

  /**
   * Body param: Whether `budget_amount` is spent per day (`daily`) or over the
   * campaign's full run (`lifetime`). Only changeable while the campaign is a draft;
   * send budget_amount in the same request so the amount lands on the new type.
   */
  budget_type?: 'daily' | 'lifetime';

  /**
   * Body param: When the campaign stops delivering, as an ISO 8601 timestamp. Only
   * for campaigns that own the budget.
   */
  ends_at?: string;

  /**
   * Body param: Regulated categories the campaign falls under. Editable on any
   * campaign, draft or launched; pass an empty array to clear.
   */
  special_ad_categories?: Array<'housing' | 'employment' | 'financial_products' | 'politics'>;

  /**
   * Body param: When the campaign starts delivering, as an ISO 8601 timestamp. Only
   * for campaigns that own the budget.
   */
  starts_at?: string;

  /**
   * Body param: Set to active to launch a draft campaign (moderates and pushes it
   * live). Live-campaign pause and resume use the pause and unpause actions.
   */
  status?: 'active';

  /**
   * Body param: The name of the campaign.
   */
  title?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface AdCampaignListParams extends CursorPageParams {
  /**
   * Query param: The account the campaigns belong to. Defaults to the account-scoped
   * key's own account.
   */
  account_id?: string;

  /**
   * Query param: Attribution model the conversion stats count under (defaults to
   * last_touch). Under both models a journey with any whop ad touch attributes to
   * whop; the model picks which whop touch credits the entity and which non-whop
   * source wins otherwise.
   */
  attribution_model?: 'last_touch' | 'first_touch';

  /**
   * Query param: Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Query param: Only return campaigns created after this timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only return campaigns created before this timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of campaigns to return.
   */
  first?: number;

  /**
   * Query param: The number of campaigns to return from the end of the range.
   */
  last?: number;

  /**
   * Query param: The field to sort by. Defaults to created_at. Stat columns (spend,
   * impressions, …) rank over the stats_from/stats_to window across the whole list,
   * not just the current page. results, cost_per_result and return_on_ad_spend rank
   * by the same Whop pixel-attributed values the response reports.
   */
  order?:
    | 'created_at'
    | 'updated_at'
    | 'spend'
    | 'impressions'
    | 'reach'
    | 'clicks'
    | 'link_clicks'
    | 'unique_clicks'
    | 'frequency'
    | 'click_through_rate'
    | 'results'
    | 'cost_per_mille'
    | 'cost_per_click'
    | 'cost_per_result'
    | 'return_on_ad_spend';

  /**
   * Query param: Filter campaigns by a title or ID substring.
   */
  query?: string;

  /**
   * Query param: Start of the stats window. Defaults to all-time.
   */
  stats_from?: string;

  /**
   * Query param: End of the stats window. Defaults to now.
   */
  stats_to?: string;

  /**
   * Query param: Only return campaigns with this status.
   */
  status?: 'draft' | 'active' | 'paused' | 'payment_failed';

  /**
   * Query param: IANA timezone (e.g. America/New_York) the stats window is
   * interpreted in. Bare stats_from/stats_to dates resolve to day boundaries on this
   * clock. Defaults to UTC.
   */
  time_zone?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface AdCampaignPauseParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface AdCampaignUnpauseParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;

  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace AdCampaigns {
  export {
    type AdCampaign as AdCampaign,
    type AdCampaignsCursorPage as AdCampaignsCursorPage,
    type AdCampaignRetrieveParams as AdCampaignRetrieveParams,
    type AdCampaignUpdateParams as AdCampaignUpdateParams,
    type AdCampaignListParams as AdCampaignListParams,
    type AdCampaignPauseParams as AdCampaignPauseParams,
    type AdCampaignUnpauseParams as AdCampaignUnpauseParams,
  };
}
