// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An Ad Campaign is the top-level container for paid ads on an ad network. It sets the platform, objective, and budget strategy shared by its [ad groups](/api-reference/beta/ad-groups/ad-group) and ads.
 *
 * Use the Ad Campaigns API to create campaigns, list campaigns for an account, retrieve or update campaign settings, and pause or resume campaign delivery.
 */
export class AdCampaigns extends APIResource {
  /**
   * Lists the ad campaigns for an account, with stats over the requested window.
   */
  list(
    query: AdCampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdCampaignsCursorPage, AdCampaign> {
    return this._client.getAPIList('/ad_campaigns', CursorPage<AdCampaign>, { query, ...options });
  }

  /**
   * Creates an ad campaign for an account.
   */
  create(body: AdCampaignCreateParams, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.post('/ad_campaigns', { body, ...options });
  }

  /**
   * Retrieves a single ad campaign with stats over the requested window.
   */
  retrieve(
    id: string,
    query: AdCampaignRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdCampaign> {
    return this._client.get(path`/ad_campaigns/${id}`, { query, ...options });
  }

  /**
   * Updates an ad campaign's editable fields (title, budget, schedule, bid strategy,
   * and — before launch — budget optimization), and launches a draft campaign by
   * setting status to active. Objective, budget type, special ad categories and
   * desired cost per result are fixed at creation and cannot be changed.
   */
  update(id: string, body: AdCampaignUpdateParams, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.patch(path`/ad_campaigns/${id}`, { body, ...options });
  }

  /**
   * Deletes an ad campaign and archives it on the ad platform (cascades to ad groups
   * and ads). Returns true on success.
   */
  delete(id: string, options?: RequestOptions): APIPromise<AdCampaignDeleteResponse> {
    return this._client.delete(path`/ad_campaigns/${id}`, options);
  }

  /**
   * Pauses an active ad campaign.
   */
  pause(id: string, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.post(path`/ad_campaigns/${id}/pause`, options);
  }

  /**
   * Resumes a paused ad campaign.
   */
  unpause(id: string, options?: RequestOptions): APIPromise<AdCampaign> {
    return this._client.post(path`/ad_campaigns/${id}/unpause`, options);
  }
}

export type AdCampaignsCursorPage = CursorPage<AdCampaign>;

export interface AdCampaign {
  /**
   * Unique identifier for the ad campaign.
   */
  id: string;

  /**
   * Whop pixel-attributed add-to-cart events, last-click.
   */
  added_to_carts: number;

  /**
   * The bidding strategy the campaign uses.
   */
  bid_type: 'minimum_cost' | 'average_target' | 'maximum_target' | null;

  /**
   * The campaign budget in USD. Null when budget is set at the ad group level (ABO).
   */
  budget_amount: number | null;

  /**
   * Which level owns the budget — the campaign (CBO) or each ad group (ABO).
   */
  budget_optimization: 'ad_campaign' | 'ad_group' | null;

  /**
   * Whether the budget is spent per day or over the campaign's lifetime.
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
   * Whop pixel-attributed complete-registration events, last-click.
   */
  completed_registrations: number;

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
   * The current delivery state, mirroring the Delivery column in the ads dashboard.
   * When several states apply at once, the highest-precedence one is returned.
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
   * Whop pixel-attributed leads, last-click.
   */
  leads: number;

  /**
   * The goal the campaign optimizes toward.
   */
  objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales' | null;

  /**
   * The specific event the campaign optimizes for. If the campaign is CBO, then all
   * ad groups will have the same optimization goal, which will be returned here.
   */
  optimization_goal: string | null;

  /**
   * The ad network the campaign runs on.
   */
  platform: 'meta';

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
    | null;

  /**
   * The merchant-defined event name when result_event is custom; null for the
   * standard events.
   */
  result_event_name: string | null;

  /**
   * Purchase value divided by spend, both in USD (a currency-neutral ratio); 0 when
   * there is no spend.
   */
  return_on_ad_spend: number;

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
    | 'imported';

  /**
   * Whop pixel-attributed submit-application events, last-click.
   */
  submitted_applications: number;

  /**
   * The title of the ad campaign.
   */
  title: string;

  /**
   * Unique clicks divided by impressions, between 0 and 1.
   */
  unique_click_through_rate: number | null;

  /**
   * The number of unique clicks.
   */
  unique_clicks: number;

  /**
   * When the campaign was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Whop pixel-attributed view-content events, last-click.
   */
  viewed_contents: number;
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

export type AdCampaignDeleteResponse = boolean;

export interface AdCampaignListParams extends CursorPageParams {
  /**
   * The account the campaigns belong to. Defaults to the account-scoped key's own
   * account.
   */
  account_id?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only return campaigns created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return campaigns created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of campaigns to return.
   */
  first?: number;

  /**
   * The number of campaigns to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort by. Defaults to created_at. Stat columns (spend, impressions,
   * …) rank over the stats_from/stats_to window across the whole list, not just the
   * current page. results, cost_per_result and return_on_ad_spend rank by the same
   * Whop pixel-attributed values the response reports.
   */
  order?:
    | 'created_at'
    | 'updated_at'
    | 'spend'
    | 'impressions'
    | 'reach'
    | 'clicks'
    | 'unique_clicks'
    | 'frequency'
    | 'click_through_rate'
    | 'results'
    | 'cost_per_mille'
    | 'cost_per_click'
    | 'cost_per_result'
    | 'return_on_ad_spend';

  /**
   * Filter campaigns by a title or ID substring.
   */
  query?: string;

  /**
   * Start of the stats window. Defaults to all-time.
   */
  stats_from?: string;

  /**
   * End of the stats window. Defaults to now.
   */
  stats_to?: string;

  /**
   * Only return campaigns with this status.
   */
  status?: 'draft' | 'active' | 'paused' | 'payment_failed';

  /**
   * IANA timezone (e.g. America/New_York) the stats window is interpreted in. Bare
   * stats_from/stats_to dates resolve to day boundaries on this clock. Defaults to
   * UTC.
   */
  time_zone?: string;
}

export interface AdCampaignCreateParams {
  /**
   * The goal the campaign optimizes toward.
   */
  objective: 'awareness' | 'traffic' | 'engagement' | 'leads' | 'sales';

  /**
   * The ad network the campaign runs on.
   */
  platform: 'meta';

  /**
   * The title of the campaign.
   */
  title: string;

  /**
   * The account to create the campaign under. Defaults to the account-scoped key's
   * own account.
   */
  account_id?: string;

  /**
   * CBO bid strategy: minimum_cost (lowest cost), average_target (cost cap), or
   * maximum_target (bid cap). CBO only.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * The campaign budget, in USD. Required for CBO (budget_optimization:
   * ad_campaign); omit for ABO.
   */
  budget_amount?: number;

  /**
   * Which level owns the budget — the campaign (CBO) or each ad group (ABO).
   * Defaults to ad_group.
   */
  budget_optimization?: 'ad_campaign' | 'ad_group';

  /**
   * Whether the budget is spent per day or over the campaign's lifetime. Defaults to
   * daily.
   */
  budget_type?: 'daily' | 'lifetime';

  /**
   * Target/cap cost per result in USD for average_target / maximum_target bidding.
   * CBO only.
   */
  desired_cost_per_result?: number;

  /**
   * Campaign schedule end (ISO 8601). CBO only.
   */
  ends_at?: string;

  /**
   * Regulated categories the campaign falls under. Ads in these categories are
   * subject to extra targeting restrictions.
   */
  special_ad_categories?: Array<'housing' | 'employment' | 'financial_products' | 'politics'>;

  /**
   * Campaign schedule start (ISO 8601). CBO only.
   */
  starts_at?: string;
}

export interface AdCampaignRetrieveParams {
  /**
   * Start of the stats window.
   */
  stats_from?: string;

  /**
   * End of the stats window.
   */
  stats_to?: string;

  /**
   * IANA timezone the stats window is interpreted in. Defaults to UTC.
   */
  time_zone?: string;
}

export interface AdCampaignUpdateParams {
  /**
   * CBO bid strategy: minimum_cost (lowest cost), average_target (cost cap), or
   * maximum_target (bid cap). Switching to minimum_cost clears the cap amounts
   * stored on the campaign's ad groups. CBO only.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * The campaign budget, in the account's currency. Interpreted as daily or lifetime
   * per the campaign's existing budget type.
   */
  budget_amount?: number;

  /**
   * Which level owns the budget — the campaign (CBO) or each ad group (ABO). Only
   * changeable before the campaign is live on Meta; switching to ad_campaign
   * requires budget_amount in the same request, and switching to ad_group clears the
   * campaign budget.
   */
  budget_optimization?: 'ad_campaign' | 'ad_group';

  /**
   * Campaign schedule end (ISO 8601). CBO only.
   */
  ends_at?: string;

  /**
   * Campaign schedule start (ISO 8601). CBO only.
   */
  starts_at?: string;

  /**
   * Set to active to launch a draft campaign (moderates and pushes it live).
   * Live-campaign pause and resume use the pause and unpause actions.
   */
  status?: 'active';

  /**
   * The name of the campaign.
   */
  title?: string;
}

export declare namespace AdCampaigns {
  export {
    type AdCampaign as AdCampaign,
    type AdCampaignDeleteResponse as AdCampaignDeleteResponse,
    type AdCampaignsCursorPage as AdCampaignsCursorPage,
    type AdCampaignListParams as AdCampaignListParams,
    type AdCampaignCreateParams as AdCampaignCreateParams,
    type AdCampaignRetrieveParams as AdCampaignRetrieveParams,
    type AdCampaignUpdateParams as AdCampaignUpdateParams,
  };
}
