// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An Ad Group sits inside an [ad campaign](/api-reference/beta/ad-campaigns/ad-campaign) and controls delivery for [ads](/api-reference/beta/ads/ad). It sets the audience, placements, schedule, budget, and optimization goal for its ads.
 *
 * Use the Ad Groups API to create ad groups in campaigns, list or retrieve targeting and delivery settings, update budgets or targeting, delete groups that should stop running, and pause or resume delivery. It can also search the ad platform's targeting taxonomy for options to target and estimate how many people a draft targeting spec can reach.
 */
export class AdGroups extends APIResource {
  /**
   * Retrieves a single ad group.
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: AdGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.get(path`/ad_groups/${id}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an ad group's editable fields. Only the keys you send are changed.
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.update('id');
   * ```
   */
  update(id: string, params: AdGroupUpdateParams, options?: RequestOptions): APIPromise<AdGroup> {
    const { 'Api-Version-Date': apiVersionDate, ...body } = params;
    return this._client.patch(path`/ad_groups/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists ad groups for the account, newest first.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const adGroup of client.adGroups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AdGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdGroupsCursorPage, AdGroup> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/ad_groups', CursorPage<AdGroup>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deletes an ad group.
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.delete('id');
   * ```
   */
  delete(
    id: string,
    params: AdGroupDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroupDeleteResponse> {
    const { 'Api-Version-Date': apiVersionDate } = params ?? {};
    return this._client.delete(path`/ad_groups/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Pauses delivery of an ad group.
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.pause('id');
   * ```
   */
  pause(
    id: string,
    params: AdGroupPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ad_groups/${id}/pause`, {
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
   * Resumes delivery of a paused ad group.
   *
   * @example
   * ```ts
   * const adGroup = await client.adGroups.unpause('id');
   * ```
   */
  unpause(
    id: string,
    params: AdGroupUnpauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ad_groups/${id}/unpause`, {
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

export type AdGroupsCursorPage = CursorPage<AdGroup>;

export interface AdGroup {
  /**
   * Unique identifier for the ad group, prefixed `adgrp_`.
   */
  id: string;

  /**
   * The ad campaign this ad group belongs to.
   */
  ad_campaign: AdGroup.AdCampaign;

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
   * Saved audiences this ad group delivers to or excludes.
   */
  audiences: AdGroup.Audiences;

  /**
   * How delivery bids are set in the ad auction. Target-based strategies use
   * `desired_cost_per_result`.
   */
  bid_type: 'minimum_cost' | 'average_target' | 'maximum_target' | null;

  /**
   * This ad group's budget, in the ad account's currency. `null` when the budget is
   * set on the campaign instead.
   */
  budget_amount: number | null;

  /**
   * Whether `budget_amount` is spent per day (`daily`) or over the ad group's full
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
   * The pixel event optimized for. A standard event, or any custom pixel event name.
   */
  conversion_event:
    | 'purchase'
    | 'add_to_cart'
    | 'initiated_checkout'
    | 'add_payment_info'
    | 'complete_registration'
    | 'lead'
    | 'content_view'
    | 'search'
    | 'contact'
    | 'customize_product'
    | 'donate'
    | 'find_location'
    | 'schedule'
    | 'start_trial'
    | 'submit_application'
    | 'subscribe'
    | (string & {})
    | null;

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
   * When the ad group was created, as an ISO 8601 timestamp.
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
   * Whether ads in this ad group are delivering right now, and if not, why. When
   * several states apply at once, the highest-precedence one is returned.
   */
  delivery_status:
    | 'all_ads_rejected'
    | 'rejected'
    | 'draft'
    | 'no_ads'
    | 'campaign_paused'
    | 'paused'
    | 'processing'
    | 'issues'
    | 'scheduled'
    | 'completed'
    | 'ads_off'
    | 'learning_limited'
    | 'learning'
    | 'active';

  /**
   * Age, gender, and automatic-audience targeting.
   */
  demographics: AdGroup.Demographics;

  /**
   * Cost per result to aim for (`average_target`) or never exceed
   * (`maximum_target`). `null` for `minimum_cost` bidding.
   */
  desired_cost_per_result: number | null;

  /**
   * Interest, behavior, and demographic targeting, using categories from the ad
   * platform's targeting taxonomy. Entries across interests, behaviors, and
   * demographics are OR'd together (anyone matching any entry is reached), matching
   * Ads Manager's detailed-targeting box. Can't be combined with automatic audience
   * targeting. Special ad category campaigns are limited to approved interests.
   */
  detailed_targeting: AdGroup.DetailedTargeting;

  /**
   * Device platforms and operating systems targeted.
   */
  devices: AdGroup.Devices;

  /**
   * When the ad group stops delivering, as an ISO 8601 timestamp. `null` when it
   * runs until paused.
   */
  ends_at: string | null;

  /**
   * Platform-reported impressions divided by reach.
   */
  frequency: number | null;

  /**
   * Cap on how often one person sees ads from this ad group. Only available on
   * campaigns with the `awareness` objective; `null` when uncapped.
   */
  frequency_cap: AdGroup.FrequencyCap | null;

  /**
   * The number of impressions.
   */
  impressions: number;

  issues: Array<AdGroup.Issue>;

  languages: Array<string>;

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
   * The result the ad group's delivery is optimized to get the most of.
   */
  optimization_goal:
    | 'conversions'
    | 'link_clicks'
    | 'landing_page_views'
    | 'reach'
    | 'impressions'
    | 'engagement'
    | 'conversations'
    | 'video_views'
    | 'two_second_views'
    | 'page_likes'
    | 'social_profile'
    | 'ad_recall_lift'
    | 'event_responses'
    | 'reminders_set'
    | 'lead_generation'
    | 'quality_lead'
    | 'value'
    | 'profile_and_page_engagement'
    | null;

  placements: Array<AdGroup.Placement>;

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
   * Locations targeted and excluded.
   */
  regions: AdGroup.Regions;

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

  /**
   * The amount charged, in spend_currency.
   */
  spend: number;

  /**
   * The ISO 4217 currency code of all monetary metrics.
   */
  spend_currency: string | null;

  /**
   * When the ad group starts delivering, as an ISO 8601 timestamp. `null` when it
   * starts as soon as it's active.
   */
  starts_at: string | null;

  /**
   * Whether the ad group is enabled. `active` and `paused` are set by you;
   * `rejected` means it failed ad review; `duplicating` is a copy still being filled
   * in.
   */
  status: 'active' | 'paused' | 'rejected' | 'duplicating';

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
   * Display name of the ad group.
   */
  title: string | null;

  /**
   * Unique clicks divided by impressions, between 0 and 1.
   */
  unique_click_through_rate: number | null;

  /**
   * People who clicked, reported by the Whop pixel, counted once per person.
   */
  unique_clicks: number;

  /**
   * When the ad group was last updated, as an ISO 8601 timestamp.
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
   * Where the outcome being optimized for occurs, such as a website visit,
   * social-profile visit, messaging conversation, ad interaction, or lead-form
   * submission.
   */
  conversion_location?:
    | 'website'
    | 'profile'
    | 'instagram_and_facebook'
    | 'instagram_profile'
    | 'messaging'
    | 'on_ad'
    | 'instant_forms'
    | 'instant_forms_and_messenger'
    | 'website_and_instant_forms'
    | null;

  /**
   * Whether the ad platform automatically mixes and matches this ad group's
   * creatives and copy to find the best-performing combinations.
   */
  dynamic_creative?: boolean;

  message_apps?: Array<'messenger' | 'instagram' | 'whatsapp'>;

  /**
   * Minimum the ad group tries to spend each day. `null` when no floor is set.
   */
  minimum_daily_spend?: number | null;
}

export namespace AdGroup {
  /**
   * The ad campaign this ad group belongs to.
   */
  export interface AdCampaign {
    /**
     * The referenced entity's id.
     */
    id: string;
  }

  /**
   * Saved audiences this ad group delivers to or excludes.
   */
  export interface Audiences {
    exclude: Array<string>;

    include: Array<string>;
  }

  /**
   * Age, gender, and automatic-audience targeting.
   */
  export interface Demographics {
    /**
     * Whether automatic audience targeting is on (Advantage+ on Meta). When `true`,
     * the platform can deliver beyond the ages, genders, and detailed targeting you
     * set, treating them as suggestions.
     */
    automatic: boolean;

    /**
     * Gender targeted.
     */
    gender: 'all' | 'male' | 'female';

    /**
     * Oldest age targeted. `null` when no maximum is set.
     */
    maximum_age: number | null;

    /**
     * Youngest age targeted. `null` when no minimum is set.
     */
    minimum_age: number | null;
  }

  /**
   * Interest, behavior, and demographic targeting, using categories from the ad
   * platform's targeting taxonomy. Entries across interests, behaviors, and
   * demographics are OR'd together (anyone matching any entry is reached), matching
   * Ads Manager's detailed-targeting box. Can't be combined with automatic audience
   * targeting. Special ad category campaigns are limited to approved interests.
   */
  export interface DetailedTargeting {
    behaviors: Array<DetailedTargeting.Behavior>;

    demographics: Array<DetailedTargeting.Demographic>;

    interests: Array<DetailedTargeting.Interest>;
  }

  export namespace DetailedTargeting {
    /**
     * Behavior categories targeted, such as frequent travelers.
     */
    export interface Behavior {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * On ad platforms that scope behavior categories, what this one is measured on.
       * Send back the value the targeting_options endpoint returned alongside the id.
       * Absent on platforms that don't scope them.
       */
      behavior_type?: 'video' | 'creator' | 'hashtag';

      /**
       * Category name, such as `Frequent travelers`.
       */
      name?: string;

      /**
       * On ad platforms that scope behavior categories, how many days of activity the
       * category covers. Absent on platforms that don't scope them.
       */
      period?: number;
    }

    /**
     * Demographic categories targeted, such as life events, industries, work
     * employers, job titles, schools, or majors. OR'd with interests and behaviors.
     */
    export interface Demographic {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Kind of demographic the category belongs to.
       */
      type:
        | 'life_events'
        | 'industries'
        | 'income'
        | 'family_statuses'
        | 'work_employers'
        | 'work_positions'
        | 'education_schools'
        | 'education_majors';

      /**
       * Category name, such as `Recently moved`.
       */
      name?: string;
    }

    /**
     * Interest categories targeted, such as an interest in movies.
     */
    export interface Interest {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Category name, such as `Movies`.
       */
      name?: string;
    }
  }

  /**
   * Device platforms and operating systems targeted.
   */
  export interface Devices {
    operating_systems: Array<Devices.OperatingSystem>;

    platforms: Array<'mobile' | 'desktop'>;
  }

  export namespace Devices {
    /**
     * Operating systems targeted. Empty targets all operating systems.
     */
    export interface OperatingSystem {
      /**
       * Operating system targeted.
       */
      os: 'ios' | 'android';

      /**
       * Lowest OS version targeted, such as `18.0`. Absent when any version qualifies.
       */
      minimum_version?: string;
    }
  }

  /**
   * Cap on how often one person sees ads from this ad group. Only available on
   * campaigns with the `awareness` objective; `null` when uncapped.
   */
  export interface FrequencyCap {
    /**
     * Most times one person can be shown ads from this ad group within the window.
     */
    maximum_impressions: number;

    /**
     * Length of the rolling window, in days.
     */
    per_days: number | null;
  }

  /**
   * Open issues affecting this ad group and its ads. Empty when there are none.
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

  /**
   * Where ads can appear, per platform. Empty when placements are chosen
   * automatically.
   */
  export interface Placement {
    /**
     * Publisher platform where the ad is eligible to appear.
     */
    platform: 'facebook' | 'instagram' | 'messenger' | 'audience_network' | 'threads' | 'whatsapp';

    positions: Array<string>;
  }

  /**
   * Locations targeted and excluded.
   */
  export interface Regions {
    /**
     * Locations excluded from targeting. Country groups can't be excluded.
     */
    exclude: Regions.Exclude;

    /**
     * Locations the ad group targets.
     */
    include: Regions.Include;
  }

  export namespace Regions {
    /**
     * Locations excluded from targeting. Country groups can't be excluded.
     */
    export interface Exclude {
      cities: Array<Exclude.City>;

      countries: Array<string>;

      country_groups: Array<string>;

      custom_locations: Array<Exclude.CustomLocation>;

      regions: Array<string>;

      zips: Array<string>;
    }

    export namespace Exclude {
      /**
       * Cities, keyed by the ad platform's location taxonomy.
       */
      export interface City {
        /**
         * The ad platform's key for the city in its location taxonomy.
         */
        key: string;

        /**
         * City name, such as `Austin`. Absent when the platform doesn't return one.
         */
        name?: string;
      }

      /**
       * Circular areas, each a coordinate plus a radius.
       */
      export interface CustomLocation {
        /**
         * Unit for `radius`.
         */
        distance_unit: 'mile' | 'kilometer';

        /**
         * Latitude of the center point.
         */
        latitude: number;

        /**
         * Longitude of the center point.
         */
        longitude: number;

        /**
         * Radius around the center point, in `distance_unit`.
         */
        radius: number;

        /**
         * Label for the location, such as a city or address. Absent when the location has
         * no label.
         */
        name?: string;
      }
    }

    /**
     * Locations the ad group targets.
     */
    export interface Include {
      cities: Array<Include.City>;

      countries: Array<string>;

      country_groups: Array<string>;

      custom_locations: Array<Include.CustomLocation>;

      regions: Array<string>;

      zips: Array<string>;
    }

    export namespace Include {
      /**
       * Cities, keyed by the ad platform's location taxonomy.
       */
      export interface City {
        /**
         * The ad platform's key for the city in its location taxonomy.
         */
        key: string;

        /**
         * City name, such as `Austin`. Absent when the platform doesn't return one.
         */
        name?: string;
      }

      /**
       * Circular areas, each a coordinate plus a radius.
       */
      export interface CustomLocation {
        /**
         * Unit for `radius`.
         */
        distance_unit: 'mile' | 'kilometer';

        /**
         * Latitude of the center point.
         */
        latitude: number;

        /**
         * Longitude of the center point.
         */
        longitude: number;

        /**
         * Radius around the center point, in `distance_unit`.
         */
        radius: number;

        /**
         * Label for the location, such as a city or address. Absent when the location has
         * no label.
         */
        name?: string;
      }
    }
  }
}

export interface AdGroupDeleteResponse {
  /**
   * ID of the deleted ad group.
   */
  id: string;

  /**
   * Always true.
   */
  deleted: boolean;
}

export interface AdGroupRetrieveParams {
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

export interface AdGroupUpdateParams {
  /**
   * Body param: Saved audiences to deliver to or exclude. Can't be combined with
   * demographics.automatic.
   */
  audiences?: AdGroupUpdateParams.Audiences;

  /**
   * Body param: How delivery bids are set in the ad auction. Target-based strategies
   * use `desired_cost_per_result`.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * Body param: This ad group's budget, in the ad account's currency. Omit when the
   * budget is set on the campaign instead.
   */
  budget_amount?: number;

  /**
   * Body param: Whether budget_amount is spent per day (`daily`) or over the ad
   * group's full run (`lifetime`).
   */
  budget_type?: 'daily' | 'lifetime';

  /**
   * Body param: The pixel event optimized for. A standard event, or any custom pixel
   * event name.
   */
  conversion_event?:
    | 'purchase'
    | 'add_to_cart'
    | 'initiated_checkout'
    | 'add_payment_info'
    | 'complete_registration'
    | 'lead'
    | 'content_view'
    | 'search'
    | 'contact'
    | 'customize_product'
    | 'donate'
    | 'find_location'
    | 'schedule'
    | 'start_trial'
    | 'submit_application'
    | 'subscribe'
    | (string & {})
    | null;

  /**
   * Body param: Where the outcome being optimized for occurs, such as a website
   * visit, social-profile visit, messaging conversation, ad interaction, or
   * lead-form submission. The lead form itself is set on the ad.
   */
  conversion_location?:
    | 'website'
    | 'profile'
    | 'instagram_and_facebook'
    | 'instagram_profile'
    | 'messaging'
    | 'on_ad'
    | 'instant_forms'
    | 'instant_forms_and_messenger'
    | 'website_and_instant_forms';

  /**
   * Body param: Age, gender, and automatic-audience targeting.
   */
  demographics?: AdGroupUpdateParams.Demographics;

  /**
   * Body param: Cost per result to aim for (`average_target`) or never exceed
   * (`maximum_target`).
   */
  desired_cost_per_result?: number;

  /**
   * Body param: Interest, behavior, and demographic targeting, using categories from
   * the ad platform's targeting taxonomy. Entries across interests, behaviors, and
   * demographics are OR'd together (anyone matching any entry is reached), matching
   * Ads Manager's detailed-targeting box. At most 100 entries per section. Can't be
   * combined with demographics.automatic, and unavailable to campaigns with
   * special_ad_categories. Send the complete intended state — a section you omit is
   * cleared.
   */
  detailed_targeting?: AdGroupUpdateParams.DetailedTargeting;

  /**
   * Body param: Device platforms and operating systems to target.
   */
  devices?: AdGroupUpdateParams.Devices;

  /**
   * Body param: When the ad group stops delivering, as an ISO 8601 timestamp. Omit
   * to run until paused.
   */
  ends_at?: string;

  /**
   * Body param: Cap on how often one person sees ads from this ad group. Only
   * available on campaigns with the `awareness` objective.
   */
  frequency_cap?: AdGroupUpdateParams.FrequencyCap;

  /**
   * Body param: Languages to target, as ISO 639 codes such as `en` or `es`. Empty or
   * omitted targets all languages.
   */
  languages?: Array<string>;

  /**
   * Body param: Apps the conversation opens in. Required when setting
   * `conversion_location` to `messaging`, and rejected unless the ad group's
   * conversion location is `messaging`.
   */
  message_apps?: Array<'messenger' | 'instagram' | 'whatsapp'>;

  /**
   * Body param: Minimum the ad group tries to spend each day.
   */
  minimum_daily_spend?: number;

  /**
   * Body param: The result the ad group's delivery is optimized to get the most of.
   */
  optimization_goal?:
    | 'conversions'
    | 'link_clicks'
    | 'landing_page_views'
    | 'reach'
    | 'impressions'
    | 'engagement'
    | 'conversations'
    | 'video_views'
    | 'two_second_views'
    | 'page_likes'
    | 'social_profile'
    | 'ad_recall_lift'
    | 'event_responses'
    | 'reminders_set'
    | 'lead_generation'
    | 'quality_lead'
    | 'value'
    | 'profile_and_page_engagement';

  /**
   * Body param: `automatic` to let the ad platform choose placements, or the list of
   * platforms and positions to target. Omit a platform's positions to target all of
   * them.
   *
   * Valid positions per platform:
   *
   * - `facebook`: `feed`, `right_hand_column`, `marketplace`, `search`,
   *   `profile_feed`, `notification`, `story`, `instream_video`, `facebook_reels`,
   *   `facebook_reels_overlay`, `biz_disco_feed`
   * - `instagram`: `stream`, `story`, `explore`, `explore_home`, `reels`,
   *   `profile_feed`, `profile_reels`, `ig_search`
   * - `messenger`: `story`
   * - `audience_network`: `classic`, `rewarded_video`
   * - `threads`: `threads_stream`
   * - `whatsapp`: `status`
   */
  placements?: 'automatic' | Array<AdGroupUpdateParams.UnionMember1>;

  /**
   * Body param: Locations to target and exclude.
   */
  regions?: AdGroupUpdateParams.Regions;

  /**
   * Body param: When the ad group starts delivering, as an ISO 8601 timestamp. Omit
   * to start as soon as it's active.
   */
  starts_at?: string;

  /**
   * Body param: Initial status (default: `active`).
   */
  status?: 'active' | 'paused';

  /**
   * Body param: The display name of the ad group.
   */
  title?: string;

  /**
   * Header param: Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export namespace AdGroupUpdateParams {
  /**
   * Saved audiences to deliver to or exclude. Can't be combined with
   * demographics.automatic.
   */
  export interface Audiences {
    /**
     * IDs of saved audiences to exclude from delivery, prefixed `adaud_`.
     */
    exclude?: Array<string>;

    /**
     * IDs of saved audiences to deliver to, prefixed `adaud_`.
     */
    include?: Array<string>;
  }

  /**
   * Age, gender, and automatic-audience targeting.
   */
  export interface Demographics {
    /**
     * Turn on automatic audience targeting (Advantage+ on Meta): the platform can
     * deliver beyond the ages, genders, and detailed targeting you set, treating them
     * as suggestions.
     */
    automatic?: boolean;

    /**
     * Gender to target.
     */
    gender?: 'all' | 'male' | 'female';

    /**
     * Oldest age to target.
     */
    maximum_age?: number;

    /**
     * Youngest age to target.
     */
    minimum_age?: number;
  }

  /**
   * Interest, behavior, and demographic targeting, using categories from the ad
   * platform's targeting taxonomy. Entries across interests, behaviors, and
   * demographics are OR'd together (anyone matching any entry is reached), matching
   * Ads Manager's detailed-targeting box. At most 100 entries per section. Can't be
   * combined with demographics.automatic, and unavailable to campaigns with
   * special_ad_categories. Send the complete intended state — a section you omit is
   * cleared.
   */
  export interface DetailedTargeting {
    /**
     * Behavior categories to target, such as frequent travelers.
     */
    behaviors?: Array<DetailedTargeting.Behavior>;

    /**
     * Demographic categories to target, such as life events, industries, work
     * employers, job titles, schools, or majors.
     */
    demographics?: Array<DetailedTargeting.Demographic>;

    /**
     * Interest categories to target, such as an interest in movies.
     */
    interests?: Array<DetailedTargeting.Interest>;
  }

  export namespace DetailedTargeting {
    export interface Behavior {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * On ad platforms that scope behavior categories, what this one is measured on.
       * Send back the value the targeting_options endpoint returned alongside the id.
       */
      behavior_type?: 'video' | 'creator' | 'hashtag';

      /**
       * Category name, such as `Frequent travelers`.
       */
      name?: string;

      /**
       * On ad platforms that scope behavior categories, how many days of activity the
       * category covers.
       */
      period?: number;
    }

    export interface Demographic {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Kind of demographic the category belongs to.
       */
      type:
        | 'life_events'
        | 'industries'
        | 'income'
        | 'family_statuses'
        | 'work_employers'
        | 'work_positions'
        | 'education_schools'
        | 'education_majors';

      /**
       * Category name, such as `Recently moved`.
       */
      name?: string;
    }

    export interface Interest {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Category name, such as `Movies`.
       */
      name?: string;
    }
  }

  /**
   * Device platforms and operating systems to target.
   */
  export interface Devices {
    /**
     * Operating systems to target. Empty targets all operating systems.
     */
    operating_systems?: Array<Devices.OperatingSystem>;

    /**
     * Device types to target. Empty targets all devices.
     */
    platforms?: Array<'mobile' | 'desktop'>;
  }

  export namespace Devices {
    export interface OperatingSystem {
      /**
       * Operating system to target.
       */
      os: 'ios' | 'android';

      /**
       * Lowest OS version to target, such as `18.0`. Omit to target any version.
       */
      minimum_version?: string;
    }
  }

  /**
   * Cap on how often one person sees ads from this ad group. Only available on
   * campaigns with the `awareness` objective.
   */
  export interface FrequencyCap {
    /**
     * Most times one person can be shown ads from this ad group within the window.
     */
    maximum_impressions?: number;

    /**
     * Length of the rolling window, in days.
     */
    per_days?: number;
  }

  export interface UnionMember1 {
    /**
     * Platform the ads run on.
     */
    platform: 'facebook' | 'instagram' | 'messenger' | 'audience_network' | 'threads' | 'whatsapp';

    /**
     * Positions to target within the platform, such as `feed` or `story`. Omit to
     * target all of the platform's positions.
     */
    positions?: Array<string>;
  }

  /**
   * Locations to target and exclude.
   */
  export interface Regions {
    /**
     * Locations excluded from targeting. Country groups can't be excluded.
     */
    exclude?: Regions.Exclude;

    /**
     * Locations the ad group targets.
     */
    include?: Regions.Include;
  }

  export namespace Regions {
    /**
     * Locations excluded from targeting. Country groups can't be excluded.
     */
    export interface Exclude {
      /**
       * Cities, keyed by the ad platform's location taxonomy.
       */
      cities?: Array<Exclude.City>;

      /**
       * Countries, as ISO 3166-1 alpha-2 codes such as `US`.
       */
      countries?: Array<string>;

      /**
       * Multi-country groups such as `worldwide` or `europe`. Include-only — groups
       * can't be excluded.
       */
      country_groups?: Array<string>;

      /**
       * Circular areas, each a coordinate plus a radius. At most 200 across include and
       * exclude.
       */
      custom_locations?: Array<Exclude.CustomLocation>;

      /**
       * US states and DC, as ISO 3166-2 codes such as `US-CA`. US territories (`PR`,
       * `GU`, `VI`, `AS`, `MP`) and everywhere outside the US are targeted through
       * `countries`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, keyed by the ad platform's location taxonomy. Meta keys
       * these `COUNTRY:CODE`, as `US:78756` — a bare code is ambiguous, because the same
       * one exists in several countries. TikTok takes the bare code.
       */
      zips?: Array<string | Exclude.Key>;
    }

    export namespace Exclude {
      export interface City {
        /**
         * The ad platform's key for the city in its location taxonomy.
         */
        key: string;

        /**
         * City name, such as `Austin`.
         */
        name?: string;
      }

      export interface CustomLocation {
        /**
         * Latitude of the center point.
         */
        latitude: number;

        /**
         * Longitude of the center point.
         */
        longitude: number;

        /**
         * Radius around the center point: 1-50 miles or 1-80 kilometers.
         */
        radius: number;

        /**
         * Unit for `radius`. Defaults to `mile`.
         */
        distance_unit?: 'mile' | 'kilometer';

        /**
         * Label for the location, such as a city or address.
         */
        name?: string;
      }

      export interface Key {
        /**
         * The ad platform's key for the ZIP or postal code.
         */
        key: string;
      }
    }

    /**
     * Locations the ad group targets.
     */
    export interface Include {
      /**
       * Cities, keyed by the ad platform's location taxonomy.
       */
      cities?: Array<Include.City>;

      /**
       * Countries, as ISO 3166-1 alpha-2 codes such as `US`.
       */
      countries?: Array<string>;

      /**
       * Multi-country groups such as `worldwide` or `europe`. Include-only — groups
       * can't be excluded.
       */
      country_groups?: Array<string>;

      /**
       * Circular areas, each a coordinate plus a radius. At most 200 across include and
       * exclude.
       */
      custom_locations?: Array<Include.CustomLocation>;

      /**
       * US states and DC, as ISO 3166-2 codes such as `US-CA`. US territories (`PR`,
       * `GU`, `VI`, `AS`, `MP`) and everywhere outside the US are targeted through
       * `countries`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, keyed by the ad platform's location taxonomy. Meta keys
       * these `COUNTRY:CODE`, as `US:78756` — a bare code is ambiguous, because the same
       * one exists in several countries. TikTok takes the bare code.
       */
      zips?: Array<string | Include.Key>;
    }

    export namespace Include {
      export interface City {
        /**
         * The ad platform's key for the city in its location taxonomy.
         */
        key: string;

        /**
         * City name, such as `Austin`.
         */
        name?: string;
      }

      export interface CustomLocation {
        /**
         * Latitude of the center point.
         */
        latitude: number;

        /**
         * Longitude of the center point.
         */
        longitude: number;

        /**
         * Radius around the center point: 1-50 miles or 1-80 kilometers.
         */
        radius: number;

        /**
         * Unit for `radius`. Defaults to `mile`.
         */
        distance_unit?: 'mile' | 'kilometer';

        /**
         * Label for the location, such as a city or address.
         */
        name?: string;
      }

      export interface Key {
        /**
         * The ad platform's key for the ZIP or postal code.
         */
        key: string;
      }
    }
  }
}

export interface AdGroupListParams extends CursorPageParams {
  /**
   * Query param: Account whose ad groups to list. Defaults to the authenticated
   * account.
   */
  account_id?: string;

  /**
   * Query param: Filter to ad groups in this campaign.
   */
  ad_campaign_id?: string;

  /**
   * Query param: Filter to ad groups in these campaigns (max 100). Repeat the
   * parameter for each id (ad_campaign_ids=a&ad_campaign_ids=b).
   */
  ad_campaign_ids?: Array<string>;

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
   * Query param: Only return ad groups created after this timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only return ad groups created before this timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of ad groups to return.
   */
  first?: number;

  /**
   * Query param: The number of ad groups to return from the end of the range.
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
   * Query param: Filter ad groups by a title or ID substring.
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
   * Query param: Filter to ad groups with this status.
   */
  status?: 'active' | 'paused' | 'rejected' | 'duplicating';

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

export interface AdGroupDeleteParams {
  /**
   * Pins the request to a dated API version.
   */
  'Api-Version-Date'?: string;
}

export interface AdGroupPauseParams {
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

export interface AdGroupUnpauseParams {
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

export declare namespace AdGroups {
  export {
    type AdGroup as AdGroup,
    type AdGroupDeleteResponse as AdGroupDeleteResponse,
    type AdGroupsCursorPage as AdGroupsCursorPage,
    type AdGroupRetrieveParams as AdGroupRetrieveParams,
    type AdGroupUpdateParams as AdGroupUpdateParams,
    type AdGroupListParams as AdGroupListParams,
    type AdGroupDeleteParams as AdGroupDeleteParams,
    type AdGroupPauseParams as AdGroupPauseParams,
    type AdGroupUnpauseParams as AdGroupUnpauseParams,
  };
}
