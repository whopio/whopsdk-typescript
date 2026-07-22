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
   * Lists ad groups for the account, newest first.
   */
  list(
    query: AdGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdGroupsCursorPage, AdGroup> {
    return this._client.getAPIList('/ad_groups', CursorPage<AdGroup>, { query, ...options });
  }

  /**
   * Creates an ad group (ad set) in a campaign.
   */
  create(params: AdGroupCreateParams, options?: RequestOptions): APIPromise<AdGroup> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ad_groups', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a single ad group.
   */
  retrieve(
    id: string,
    query: AdGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    return this._client.get(path`/ad_groups/${id}`, { query, ...options });
  }

  /**
   * Updates an ad group's editable fields. Only the keys you send are changed.
   */
  update(id: string, body: AdGroupUpdateParams, options?: RequestOptions): APIPromise<AdGroup> {
    return this._client.patch(path`/ad_groups/${id}`, { body, ...options });
  }

  /**
   * Deletes an ad group. Returns true on success.
   */
  delete(id: string, options?: RequestOptions): APIPromise<AdGroupDeleteResponse> {
    return this._client.delete(path`/ad_groups/${id}`, options);
  }

  /**
   * Pauses delivery of an ad group.
   */
  pause(
    id: string,
    params: AdGroupPauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ad_groups/${id}/pause`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Resumes delivery of a paused ad group.
   */
  unpause(
    id: string,
    params: AdGroupUnpauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdGroup> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ad_groups/${id}/unpause`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Searches the ad platform's targeting taxonomy for options to target an ad group
   * with. Each result comes back in the exact shape the ad-group body accepts for
   * its `type`, so it can be used in `detailed_targeting`, `regions`, or `languages`
   * as-is. A blank `query` browses the small fixed lists (behaviors, demographic
   * categories, languages); interests and locations need a search term.
   */
  searchTargetingOptions(
    query: AdGroupSearchTargetingOptionsParams,
    options?: RequestOptions,
  ): APIPromise<AdGroupSearchTargetingOptionsResponse> {
    return this._client.get('/ad_groups/targeting_options', { query, ...options });
  }

  /**
   * Estimates how many people a draft targeting spec can reach, before an ad group
   * is created. The body takes the same targeting fields as creating an ad group —
   * `regions`, `demographics`, `detailed_targeting`, `audiences`, `languages`, and
   * `devices` — and nothing is persisted.
   */
  estimateReach(params: AdGroupEstimateReachParams, options?: RequestOptions): APIPromise<ReachEstimate> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ad_groups/estimate_reach', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
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
   * How delivery bids in the ad auction: `minimum_cost` gets the most results for
   * the budget, `average_target` keeps the average cost per result near
   * `desired_cost_per_result`, and `maximum_target` never bids above it.
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
   * Where the result you're optimizing for happens: `website` (your site), `profile`
   * (your social media profile), `instagram_and_facebook` or `instagram_profile`
   * (visits to your Instagram profile), `messaging` (a direct-message conversation),
   * `on_ad` (engagement with the ad itself), or a lead form (`instant_forms`,
   * `instant_forms_and_messenger`, `website_and_instant_forms`).
   */
  conversion_location:
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
   * platform's targeting taxonomy. Can't be combined with automatic audience
   * targeting, and unavailable to campaigns with special_ad_categories.
   */
  detailed_targeting: AdGroup.DetailedTargeting;

  /**
   * Device platforms and operating systems targeted.
   */
  devices: AdGroup.Devices;

  /**
   * Whether the ad platform automatically mixes and matches this ad group's
   * creatives and copy to find the best-performing combinations.
   */
  dynamic_creative: boolean;

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
   * Cap on how often one person sees ads from this ad group. Only available with
   * `reach` optimization; `null` when uncapped.
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

  message_apps: Array<'messenger' | 'instagram' | 'whatsapp'>;

  /**
   * Minimum the ad group tries to spend each day. `null` when no floor is set.
   */
  minimum_daily_spend: number | null;

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
   * `rejected` means it failed ad review.
   */
  status: 'active' | 'paused' | 'rejected';

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
   * platform's targeting taxonomy. Can't be combined with automatic audience
   * targeting, and unavailable to campaigns with special_ad_categories.
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
       * Category name, such as `Movies`.
       */
      name?: string;
    }

    /**
     * Demographic categories targeted, such as life events or industries.
     */
    export interface Demographic {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Kind of demographic the category belongs to.
       */
      type: 'life_events' | 'industries' | 'income' | 'family_statuses';

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
   * Cap on how often one person sees ads from this ad group. Only available with
   * `reach` optimization; `null` when uncapped.
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
     * Platform the ads run on: `facebook`, `instagram`, `messenger`,
     * `audience_network`, `threads`, or `whatsapp`.
     */
    platform: string;

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

export interface ReachEstimate {
  /**
   * Low end of how many people the targeting can reach. Null when the platform
   * couldn't produce an estimate.
   */
  users_lower_bound: number | null;

  /**
   * High end of how many people the targeting can reach. Null when the platform
   * couldn't produce an estimate.
   */
  users_upper_bound: number | null;
}

/**
 * One result from the ad-group targeting-options search. `type` picks the shape:
 * detailed-targeting taxonomy options carry the ad platform's `id`, languages
 * carry an ISO 639 `code`, and locations carry the platform `key` plus geographic
 * context.
 */
export type TargetingOption =
  | TargetingOption.DetailedTargetingOption
  | TargetingOption.LanguageTargetingOption
  | TargetingOption.LocationTargetingOption;

export namespace TargetingOption {
  export interface DetailedTargetingOption {
    /**
     * The ad platform's ID for the option in its targeting taxonomy. Use it as the
     * `id` of a `detailed_targeting` entry.
     */
    id: string;

    /**
     * Low end of the ad platform's estimate of how many people this option can reach.
     * Null when the platform doesn't publish one.
     */
    audience_size_lower_bound: number | null;

    /**
     * High end of the ad platform's estimate of how many people this option can reach.
     * Null when the platform doesn't publish one.
     */
    audience_size_upper_bound: number | null;

    /**
     * The ad platform's description of who the option covers, when it publishes one.
     */
    description: string | null;

    /**
     * Display name, such as `Movies`.
     */
    name: string;

    /**
     * Which detailed-targeting field the option belongs in: `interests`/`behaviors` go
     * in `detailed_targeting.interests`/`.behaviors`; the demographic categories go in
     * `detailed_targeting.demographics` with this value as the entry's `type`.
     */
    type: 'interests' | 'behaviors' | 'life_events' | 'industries' | 'income' | 'family_statuses';
  }

  export interface LanguageTargetingOption {
    /**
     * ISO 639 code the ad-group `languages` field takes, such as `en`.
     */
    code: string;

    /**
     * Display name, such as `English`.
     */
    name: string;

    /**
     * Always `languages`. The option goes in the ad-group `languages` field.
     */
    type: 'languages';
  }

  export interface LocationTargetingOption {
    /**
     * The standardized code the ad-group `regions` field takes: an ISO 3166-1 code for
     * countries (`US`) or an ISO 3166-2 code for states and provinces (`US-CA`). Null
     * for locations without one, such as cities — target those by `key` instead.
     */
    code: string | null;

    /**
     * ISO 3166-1 code of the country the location sits in.
     */
    country_code: string | null;

    /**
     * Name of the country the location sits in.
     */
    country_name: string | null;

    /**
     * The ad platform's key for the location in its location taxonomy. Use it as the
     * `key` of a `regions` city or zip entry.
     */
    key: string;

    /**
     * Kind of location: `country`, `region`, `city`, or `zip`.
     */
    location_type: 'country' | 'region' | 'city' | 'zip';

    /**
     * Display name, such as `California`.
     */
    name: string;

    /**
     * Name of the state or province a city sits in. Null for everything but cities.
     */
    region: string | null;

    /**
     * Always `locations`. The option goes in the ad-group `regions` field.
     */
    type: 'locations';
  }
}

export type AdGroupDeleteResponse = boolean;

export interface AdGroupSearchTargetingOptionsResponse {
  data: Array<TargetingOption>;
}

export interface AdGroupListParams extends CursorPageParams {
  /**
   * Account whose ad groups to list. Defaults to the authenticated account.
   */
  account_id?: string;

  /**
   * Filter to ad groups in this campaign.
   */
  ad_campaign_id?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only return ad groups created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return ad groups created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of ad groups to return.
   */
  first?: number;

  /**
   * The number of ad groups to return from the end of the range.
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
   * Filter ad groups by a title or ID substring.
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
   * Filter to ad groups with this status.
   */
  status?: 'active' | 'paused' | 'rejected';

  /**
   * IANA timezone (e.g. America/New_York) the stats window is interpreted in. Bare
   * stats_from/stats_to dates resolve to day boundaries on this clock. Defaults to
   * UTC.
   */
  time_zone?: string;
}

export interface AdGroupCreateParams {
  /**
   * Body param: The ad campaign to create the ad group in, prefixed `adcamp_`.
   */
  ad_campaign_id: string;

  /**
   * Body param: Saved audiences to deliver to or exclude. Can't be combined with
   * demographics.automatic.
   */
  audiences?: AdGroupCreateParams.Audiences;

  /**
   * Body param: How delivery bids in the ad auction: `minimum_cost` gets the most
   * results for the budget, `average_target` keeps the average cost per result near
   * desired_cost_per_result, and `maximum_target` never bids above it.
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
   * Body param: Where the result you're optimizing for happens: `website` (your
   * site), `profile` (your social media profile), `messaging` (a direct-message
   * conversation), `on_ad` (engagement with the ad itself), or a lead form
   * (`instant_forms`, `instant_forms_and_messenger`, `website_and_instant_forms`).
   * The lead form itself is set on the ad.
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
  demographics?: AdGroupCreateParams.Demographics;

  /**
   * Body param: Cost per result to aim for (`average_target`) or never exceed
   * (`maximum_target`).
   */
  desired_cost_per_result?: number;

  /**
   * Body param: Interest, behavior, and demographic targeting, using categories from
   * the ad platform's targeting taxonomy. At most 100 entries per section. Can't be
   * combined with demographics.automatic, and unavailable to campaigns with
   * special_ad_categories. Send the complete intended state — a section you omit is
   * cleared.
   */
  detailed_targeting?: AdGroupCreateParams.DetailedTargeting;

  /**
   * Body param: Device platforms and operating systems to target.
   */
  devices?: AdGroupCreateParams.Devices;

  /**
   * Body param: Let the ad platform automatically mix and match this ad group's
   * creatives and copy to find the best-performing combinations. Set at creation;
   * can't be changed afterward.
   */
  dynamic_creative?: boolean;

  /**
   * Body param: When the ad group stops delivering, as an ISO 8601 timestamp. Omit
   * to run until paused.
   */
  ends_at?: string;

  /**
   * Body param: Cap on how often one person sees ads from this ad group. Only
   * available with `reach` optimization.
   */
  frequency_cap?: AdGroupCreateParams.FrequencyCap;

  /**
   * Body param: Languages to target, as ISO 639 codes such as `en` or `es`. Empty or
   * omitted targets all languages.
   */
  languages?: Array<string>;

  /**
   * Body param: Apps the conversation opens in. Required when conversion_location is
   * `messaging`.
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
    | 'thruplay'
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
  placements?: 'automatic' | Array<AdGroupCreateParams.UnionMember1>;

  /**
   * Body param: Locations to target and exclude.
   */
  regions?: AdGroupCreateParams.Regions;

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
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AdGroupCreateParams {
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
   * platform's targeting taxonomy. At most 100 entries per section. Can't be
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
     * Demographic categories to target, such as life events or industries.
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
       * Category name, such as `Movies`.
       */
      name?: string;
    }

    export interface Demographic {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Kind of demographic the category belongs to.
       */
      type: 'life_events' | 'industries' | 'income' | 'family_statuses';

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
   * Cap on how often one person sees ads from this ad group. Only available with
   * `reach` optimization.
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
       * States and provinces, as ISO 3166-2 codes such as `US-CA`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, as bare strings or objects with a key.
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
         * The ZIP or postal code.
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
       * States and provinces, as ISO 3166-2 codes such as `US-CA`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, as bare strings or objects with a key.
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
         * The ZIP or postal code.
         */
        key: string;
      }
    }
  }
}

export interface AdGroupRetrieveParams {
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

export interface AdGroupUpdateParams {
  /**
   * Saved audiences to deliver to or exclude. Can't be combined with
   * demographics.automatic.
   */
  audiences?: AdGroupUpdateParams.Audiences;

  /**
   * How delivery bids in the ad auction: `minimum_cost` gets the most results for
   * the budget, `average_target` keeps the average cost per result near
   * desired_cost_per_result, and `maximum_target` never bids above it.
   */
  bid_type?: 'minimum_cost' | 'average_target' | 'maximum_target';

  /**
   * This ad group's budget, in the ad account's currency. Omit when the budget is
   * set on the campaign instead.
   */
  budget_amount?: number;

  /**
   * Whether budget_amount is spent per day (`daily`) or over the ad group's full run
   * (`lifetime`).
   */
  budget_type?: 'daily' | 'lifetime';

  /**
   * The pixel event optimized for. A standard event, or any custom pixel event name.
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
   * Where the result you're optimizing for happens: `website` (your site), `profile`
   * (your social media profile), `messaging` (a direct-message conversation),
   * `on_ad` (engagement with the ad itself), or a lead form (`instant_forms`,
   * `instant_forms_and_messenger`, `website_and_instant_forms`). The lead form
   * itself is set on the ad.
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
   * Age, gender, and automatic-audience targeting.
   */
  demographics?: AdGroupUpdateParams.Demographics;

  /**
   * Cost per result to aim for (`average_target`) or never exceed
   * (`maximum_target`).
   */
  desired_cost_per_result?: number;

  /**
   * Interest, behavior, and demographic targeting, using categories from the ad
   * platform's targeting taxonomy. At most 100 entries per section. Can't be
   * combined with demographics.automatic, and unavailable to campaigns with
   * special_ad_categories. Send the complete intended state — a section you omit is
   * cleared.
   */
  detailed_targeting?: AdGroupUpdateParams.DetailedTargeting;

  /**
   * Device platforms and operating systems to target.
   */
  devices?: AdGroupUpdateParams.Devices;

  /**
   * When the ad group stops delivering, as an ISO 8601 timestamp. Omit to run until
   * paused.
   */
  ends_at?: string;

  /**
   * Cap on how often one person sees ads from this ad group. Only available with
   * `reach` optimization.
   */
  frequency_cap?: AdGroupUpdateParams.FrequencyCap;

  /**
   * Languages to target, as ISO 639 codes such as `en` or `es`. Empty or omitted
   * targets all languages.
   */
  languages?: Array<string>;

  /**
   * Apps the conversation opens in. Required when conversion_location is
   * `messaging`.
   */
  message_apps?: Array<'messenger' | 'instagram' | 'whatsapp'>;

  /**
   * Minimum the ad group tries to spend each day.
   */
  minimum_daily_spend?: number;

  /**
   * The result the ad group's delivery is optimized to get the most of.
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
    | 'thruplay'
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
   * `automatic` to let the ad platform choose placements, or the list of platforms
   * and positions to target. Omit a platform's positions to target all of them.
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
   * Locations to target and exclude.
   */
  regions?: AdGroupUpdateParams.Regions;

  /**
   * When the ad group starts delivering, as an ISO 8601 timestamp. Omit to start as
   * soon as it's active.
   */
  starts_at?: string;

  /**
   * Initial status (default: `active`).
   */
  status?: 'active' | 'paused';

  /**
   * The display name of the ad group.
   */
  title?: string;
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
   * platform's targeting taxonomy. At most 100 entries per section. Can't be
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
     * Demographic categories to target, such as life events or industries.
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
       * Category name, such as `Movies`.
       */
      name?: string;
    }

    export interface Demographic {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Kind of demographic the category belongs to.
       */
      type: 'life_events' | 'industries' | 'income' | 'family_statuses';

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
   * Cap on how often one person sees ads from this ad group. Only available with
   * `reach` optimization.
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
       * States and provinces, as ISO 3166-2 codes such as `US-CA`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, as bare strings or objects with a key.
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
         * The ZIP or postal code.
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
       * States and provinces, as ISO 3166-2 codes such as `US-CA`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, as bare strings or objects with a key.
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
         * The ZIP or postal code.
         */
        key: string;
      }
    }
  }
}

export interface AdGroupPauseParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface AdGroupUnpauseParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface AdGroupSearchTargetingOptionsParams {
  /**
   * The ad network whose targeting taxonomy to search.
   */
  platform: 'meta';

  /**
   * Account to search on behalf of. Defaults to the authenticated account.
   */
  account_id?: string;

  /**
   * Narrow location results to one country, as an ISO 3166-1 code such as `US`. Only
   * applies when `types` includes `locations`.
   */
  country?: string;

  /**
   * Maximum number of results per requested type.
   */
  limit?: number;

  /**
   * Narrow location results to these kinds of places. Only applies when `types`
   * includes `locations`.
   */
  location_types?: Array<'country' | 'region' | 'city' | 'zip'>;

  /**
   * The search term. Blank browses the fixed lists; interests and locations return
   * nothing without one.
   */
  query?: string;

  /**
   * Kinds of targeting options to search. Defaults to all of them.
   */
  types?: Array<
    | 'interests'
    | 'behaviors'
    | 'life_events'
    | 'industries'
    | 'income'
    | 'family_statuses'
    | 'languages'
    | 'locations'
  >;
}

export interface AdGroupEstimateReachParams {
  /**
   * Body param: The ad network the estimate runs on.
   */
  platform: 'meta';

  /**
   * Body param: Account to estimate on behalf of. Defaults to the authenticated
   * account.
   */
  account_id?: string;

  /**
   * Body param: Saved audiences to deliver to or exclude. Can't be combined with
   * demographics.automatic.
   */
  audiences?: AdGroupEstimateReachParams.Audiences;

  /**
   * Body param: Age, gender, and automatic-audience targeting.
   */
  demographics?: AdGroupEstimateReachParams.Demographics;

  /**
   * Body param: Interest, behavior, and demographic targeting, using categories from
   * the ad platform's targeting taxonomy. At most 100 entries per section.
   */
  detailed_targeting?: AdGroupEstimateReachParams.DetailedTargeting;

  /**
   * Body param: Device platforms and operating systems to target.
   */
  devices?: AdGroupEstimateReachParams.Devices;

  /**
   * Body param: Languages to target, as ISO 639 codes such as `en` or `es`. Empty or
   * omitted targets all languages.
   */
  languages?: Array<string>;

  /**
   * Body param: Locations to target and exclude.
   */
  regions?: AdGroupEstimateReachParams.Regions;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AdGroupEstimateReachParams {
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
   * platform's targeting taxonomy. At most 100 entries per section.
   */
  export interface DetailedTargeting {
    /**
     * Behavior categories to target, such as frequent travelers.
     */
    behaviors?: Array<DetailedTargeting.Behavior>;

    /**
     * Demographic categories to target, such as life events or industries.
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
       * Category name, such as `Movies`.
       */
      name?: string;
    }

    export interface Demographic {
      /**
       * The ad platform's ID for the category in its targeting taxonomy.
       */
      id: string;

      /**
       * Kind of demographic the category belongs to.
       */
      type: 'life_events' | 'industries' | 'income' | 'family_statuses';

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
       * States and provinces, as ISO 3166-2 codes such as `US-CA`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, as bare strings or objects with a key.
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
         * The ZIP or postal code.
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
       * States and provinces, as ISO 3166-2 codes such as `US-CA`.
       */
      regions?: Array<string>;

      /**
       * ZIP and postal codes, as bare strings or objects with a key.
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
         * The ZIP or postal code.
         */
        key: string;
      }
    }
  }
}

export declare namespace AdGroups {
  export {
    type AdGroup as AdGroup,
    type ReachEstimate as ReachEstimate,
    type TargetingOption as TargetingOption,
    type AdGroupDeleteResponse as AdGroupDeleteResponse,
    type AdGroupSearchTargetingOptionsResponse as AdGroupSearchTargetingOptionsResponse,
    type AdGroupsCursorPage as AdGroupsCursorPage,
    type AdGroupListParams as AdGroupListParams,
    type AdGroupCreateParams as AdGroupCreateParams,
    type AdGroupRetrieveParams as AdGroupRetrieveParams,
    type AdGroupUpdateParams as AdGroupUpdateParams,
    type AdGroupPauseParams as AdGroupPauseParams,
    type AdGroupUnpauseParams as AdGroupUnpauseParams,
    type AdGroupSearchTargetingOptionsParams as AdGroupSearchTargetingOptionsParams,
    type AdGroupEstimateReachParams as AdGroupEstimateReachParams,
  };
}
