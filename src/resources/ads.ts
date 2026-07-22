// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An Ad is the individual creative unit delivered by an [ad group](/api-reference/beta/ad-groups/ad-group). It holds the copy, creative assets, and destination URL for one ad.
 *
 * Use the Ads API to list ads for an account, create ads inside ad groups, retrieve or update creative details, delete ads that should stop running, and pause or resume delivery.
 */
export class Ads extends APIResource {
  /**
   * Lists the ads for an account, with stats over the requested window.
   */
  list(
    query: AdListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdsCursorPage, Ad> {
    return this._client.getAPIList('/ads', CursorPage<Ad>, { query, ...options });
  }

  /**
   * Creates an ad in an ad group.
   */
  create(params: AdCreateParams, options?: RequestOptions): APIPromise<Ad> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ads', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a single ad with stats over the requested window.
   */
  retrieve(
    id: string,
    query: AdRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Ad> {
    return this._client.get(path`/ads/${id}`, { query, ...options });
  }

  /**
   * Updates an ad's editable fields.
   */
  update(id: string, body: AdUpdateParams, options?: RequestOptions): APIPromise<Ad> {
    return this._client.patch(path`/ads/${id}`, { body, ...options });
  }

  /**
   * Deletes an ad. Returns true on success.
   */
  delete(id: string, options?: RequestOptions): APIPromise<AdDeleteResponse> {
    return this._client.delete(path`/ads/${id}`, options);
  }

  /**
   * Pauses an active ad.
   */
  pause(id: string, params: AdPauseParams | null | undefined = {}, options?: RequestOptions): APIPromise<Ad> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ads/${id}/pause`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Resumes a paused ad.
   */
  unpause(
    id: string,
    params: AdUnpauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Ad> {
    const { 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ads/${id}/unpause`, {
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Copies the ad into its own ad group, or into target_ad_group_id (which must
   * belong to the same account and be compatible with the ad). Copies keep the
   * source ad's active/paused state.
   */
  duplicate(
    id: string,
    params: AdDuplicateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdDuplicateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/ads/${id}/duplicate`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type AdsCursorPage = CursorPage<Ad>;

export interface Ad {
  /**
   * Unique identifier for the ad, prefixed `ad_`.
   */
  id: string;

  /**
   * The ad campaign this ad belongs to.
   */
  ad_campaign: Ad.AdCampaign;

  /**
   * The ad group this ad belongs to.
   */
  ad_group: Ad.AdGroup;

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
   * The call-to-action button shown on the ad.
   */
  call_to_action:
    | 'learn_more'
    | 'shop_now'
    | 'sign_up'
    | 'subscribe'
    | 'get_started'
    | 'book_now'
    | 'apply_now'
    | 'contact_us'
    | 'download'
    | 'order_now'
    | 'buy_now'
    | 'get_quote'
    | 'message_page'
    | 'whatsapp_message'
    | 'instagram_message'
    | 'call_now'
    | 'get_directions'
    | 'send_updates'
    | 'get_offer'
    | 'watch_more'
    | 'listen_now'
    | 'play_game'
    | 'open_link'
    | 'no_button'
    | 'get_offer_view'
    | 'get_event_tickets'
    | 'see_menu'
    | 'request_time'
    | 'event_rsvp'
    | 'see_details'
    | 'view_instagram_profile'
    | null;

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
   * When the ad was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  creatives: Array<Ad.Creative>;

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
   * Whether the ad is delivering right now, and if not, why. When several states
   * apply at once, the highest-precedence one is returned.
   */
  delivery_status:
    | 'rejected'
    | 'in_review'
    | 'draft'
    | 'campaign_paused'
    | 'ad_group_paused'
    | 'paused'
    | 'processing'
    | 'issues'
    | 'learning_limited'
    | 'learning'
    | 'active';

  descriptions: Array<string>;

  /**
   * Platform-reported impressions divided by reach.
   */
  frequency: number | null;

  headlines: Array<string>;

  /**
   * The number of impressions.
   */
  impressions: number;

  issues: Array<Ad.Issue>;

  /**
   * The instant lead form shown when someone taps this ad. `null` when the ad
   * group's conversion_location is not an instant-form destination.
   */
  lead_form: Ad.LeadForm | null;

  /**
   * The ad platform's ID for the instant form the ad uses. Set when the ad
   * references an existing form via `lead_form_id`, or once a form built from
   * `lead_form` has been created on the platform.
   */
  lead_form_id: string | null;

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
   * Welcome message for click-to-message ads, shown when the conversation opens.
   * `null` when the ad has none.
   */
  messaging_config: Ad.MessagingConfig | null;

  /**
   * Whether the ad can appear alongside other advertisers' ads in the same unit.
   * Defaults to true.
   */
  multi_advertiser_ads: boolean;

  /**
   * The existing post this ad promotes — a Facebook post or Instagram media ID.
   * `null` when the ad uses uploaded creatives.
   */
  post_id: string | null;

  /**
   * Which network `post_id` refers to: `facebook` (a page post) or `instagram` (a
   * media ID). `null` when the ad uses uploaded creatives.
   */
  post_source: 'facebook' | 'instagram' | null;

  /**
   * Preview image of the existing post this ad promotes. `null` for ads that use
   * uploaded creatives, or until the post's media has been fetched from the network.
   */
  post_thumbnail_url: string | null;

  primary_texts: Array<string>;

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

  social_accounts: Array<Ad.SocialAccount>;

  /**
   * The amount charged, in spend_currency.
   */
  spend: number;

  /**
   * The ISO 4217 currency code of all monetary metrics.
   */
  spend_currency: string | null;

  /**
   * Whether the ad is enabled. `active` and `paused` are set by you; `in_review` and
   * `rejected` come from ad review.
   */
  status: 'active' | 'paused' | 'in_review' | 'rejected';

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
   * Display title of the ad.
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
   * When the ad was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * The URL the ad links to.
   */
  url: string | null;

  /**
   * Query parameters appended to the URL, keyed by parameter name.
   */
  url_parameters: unknown;

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

export namespace Ad {
  /**
   * The ad campaign this ad belongs to.
   */
  export interface AdCampaign {
    /**
     * The referenced entity's id.
     */
    id: string;
  }

  /**
   * The ad group this ad belongs to.
   */
  export interface AdGroup {
    /**
     * The referenced entity's id.
     */
    id: string;
  }

  /**
   * The creative assets used by this ad. The original asset has a null format;
   * square, vertical, and horizontal entries are placement-specific variants. A
   * carousel ad returns one format-null entry per attachment, in order.
   */
  export interface Creative {
    /**
     * The creative attachment's file id.
     */
    id: string;

    /**
     * The saved crop window for this creative, in source image pixels. Null for the
     * original asset or a format that has not been cropped.
     */
    crop: Creative.Crop | null;

    /**
     * The placement variant this asset covers, or null for the original asset.
     */
    format: 'square' | 'vertical' | 'horizontal' | null;

    /**
     * The kind of asset, image or video.
     */
    media_type: string | null;

    /**
     * CDN url of the asset.
     */
    url: string | null;
  }

  export namespace Creative {
    /**
     * The saved crop window for this creative, in source image pixels. Null for the
     * original asset or a format that has not been cropped.
     */
    export interface Crop {
      /**
       * Height of the crop window in source pixels.
       */
      height: number;

      /**
       * Width of the crop window in source pixels.
       */
      width: number;

      /**
       * Left edge of the crop window in source pixels.
       */
      x: number;

      /**
       * Top edge of the crop window in source pixels.
       */
      y: number;
    }
  }

  /**
   * Open issues affecting this ad. Empty when there are none.
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
   * The instant lead form shown when someone taps this ad. `null` when the ad
   * group's conversion_location is not an instant-form destination.
   */
  export interface LeadForm {
    /**
     * Screen shown after the form is submitted. `null` when the form uses the default.
     */
    completion: LeadForm.Completion | null;

    /**
     * Custom consent disclaimer shown before submission. `null` when the form has
     * none.
     */
    disclaimer: LeadForm.Disclaimer | null;

    /**
     * `more_volume` is quickest to submit; `higher_intent` adds a confirmation step
     * before submission.
     */
    form_type: 'more_volume' | 'higher_intent';

    /**
     * Intro screen shown before the questions. `null` when the form has none.
     */
    intro: LeadForm.Intro | null;

    /**
     * Internal name of the form.
     */
    name: string | null;

    /**
     * Whether the phone number must be verified by SMS before submitting.
     */
    phone_verification: boolean;

    /**
     * Your privacy policy, linked from the form. `null` when unset.
     */
    privacy_policy: LeadForm.PrivacyPolicy | null;

    questions: Array<LeadForm.Question>;
  }

  export namespace LeadForm {
    /**
     * Screen shown after the form is submitted. `null` when the form uses the default.
     */
    export interface Completion {
      /**
       * Text of the follow-up button.
       */
      button_text: string | null;

      /**
       * Body text under the headline.
       */
      description: string | null;

      /**
       * Headline of the completion screen.
       */
      headline: string | null;

      /**
       * Website the follow-up button opens. `null` when the screen has no button.
       */
      url: string | null;
    }

    /**
     * Custom consent disclaimer shown before submission. `null` when the form has
     * none.
     */
    export interface Disclaimer {
      /**
       * Disclaimer text.
       */
      body: string | null;

      checkboxes: Array<Disclaimer.Checkbox>;

      /**
       * Disclaimer title.
       */
      title: string | null;
    }

    export namespace Disclaimer {
      /**
       * Consent checkboxes the person can tick. Empty when the disclaimer is text-only.
       */
      export interface Checkbox {
        /**
         * Whether the checkbox starts ticked.
         */
        checked_by_default: boolean | null;

        /**
         * Stable identifier consent responses are stored under.
         */
        key: string | null;

        /**
         * Whether the checkbox must be ticked to submit the form.
         */
        required: boolean | null;

        /**
         * Consent text next to the checkbox.
         */
        text: string;
      }
    }

    /**
     * Intro screen shown before the questions. `null` when the form has none.
     */
    export interface Intro {
      /**
       * Body text under the headline.
       */
      description: string | null;

      /**
       * Headline of the intro screen.
       */
      headline: string | null;
    }

    /**
     * Your privacy policy, linked from the form. `null` when unset.
     */
    export interface PrivacyPolicy {
      /**
       * Link text shown for the policy. `null` uses the platform default.
       */
      link_text: string | null;

      /**
       * URL of your privacy policy.
       */
      url: string;
    }

    /**
     * Questions on the form, in order.
     */
    export interface Question {
      /**
       * Question type: a standard prefill type such as `email`, `phone`, or `full_name`,
       * or `custom` for your own question.
       */
      type: string;

      /**
       * Answer format for `custom` questions: `short_answer`, `multiple_choice`, or
       * `appointment`. Absent otherwise.
       */
      format?: string;

      /**
       * Question text for `custom` questions. Absent for standard prefill questions.
       */
      label?: string;

      options?: Array<Question.Option>;
    }

    export namespace Question {
      /**
       * Choices for `multiple_choice` questions. Absent for other formats.
       */
      export interface Option {
        /**
         * Choice text shown to the person.
         */
        value: string;

        /**
         * Stable identifier the choice's answers are stored under. Absent for simple
         * choices.
         */
        key?: string | null;

        /**
         * Where the form goes when this choice is selected. Absent when the form just
         * continues to the next question.
         */
        logic?: Option.Logic;
      }

      export namespace Option {
        /**
         * Where the form goes when this choice is selected. Absent when the form just
         * continues to the next question.
         */
        export interface Logic {
          /**
           * What happens when the choice is selected.
           */
          action: 'go_to_question' | 'submit_form' | 'close_form';

          /**
           * Zero-based index of the ending screen to jump to.
           */
          target_end_page_index?: number;

          /**
           * Zero-based index of the question to jump to, for `go_to_question`.
           */
          target_question_index?: number;
        }
      }
    }
  }

  /**
   * Welcome message for click-to-message ads, shown when the conversation opens.
   * `null` when the ad has none.
   */
  export interface MessagingConfig {
    /**
     * Suggested reply the person can tap to start the conversation.
     */
    keyword: string | null;

    /**
     * Greeting shown when the conversation opens.
     */
    message: string | null;
  }

  /**
   * The social accounts the ad runs under — its Facebook page and Instagram profile
   * — each referenced by ID, prefixed `sacc_`.
   */
  export interface SocialAccount {
    /**
     * The referenced entity's id.
     */
    id: string;
  }
}

export type AdDeleteResponse = boolean;

export interface AdDuplicateResponse {
  data: Array<Ad>;
}

export interface AdListParams extends CursorPageParams {
  /**
   * The account the ads belong to. Defaults to the account-scoped key's own account.
   */
  account_id?: string;

  /**
   * Only return ads in this ad campaign.
   */
  ad_campaign_id?: string;

  /**
   * Only return ads in this ad group.
   */
  ad_group_id?: string;

  /**
   * Cursor to fetch the page before (from page_info.start_cursor).
   */
  before?: string;

  /**
   * Only return ads created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return ads created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of ads to return.
   */
  first?: number;

  /**
   * The number of ads to return from the end of the range.
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
   * Filter ads by a title or ID substring.
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
   * Only return ads with this status.
   */
  status?: 'active' | 'paused' | 'in_review' | 'rejected';

  /**
   * IANA timezone (e.g. America/New_York) the stats window is interpreted in. Bare
   * stats_from/stats_to dates resolve to day boundaries on this clock. Defaults to
   * UTC.
   */
  time_zone?: string;
}

export interface AdCreateParams {
  /**
   * Body param: An inline ad group to create (same shape as POST /ad_groups,
   * including ad_campaign_id). Creates the ad group and the ad together. Provide
   * this OR ad_group_id.
   */
  ad_group?: unknown;

  /**
   * Body param: The existing ad group to create the ad in. Provide this OR ad_group,
   * not both.
   */
  ad_group_id?: string;

  /**
   * Body param: The call-to-action button shown on the ad.
   */
  call_to_action?:
    | 'apply_now'
    | 'book_now'
    | 'call_now'
    | 'contact_us'
    | 'download'
    | 'get_directions'
    | 'get_offer'
    | 'get_quote'
    | 'learn_more'
    | 'listen_now'
    | 'message_page'
    | 'no_button'
    | 'open_link'
    | 'order_now'
    | 'request_time'
    | 'see_details'
    | 'see_menu'
    | 'send_updates'
    | 'shop_now'
    | 'sign_up'
    | 'subscribe'
    | 'watch_more';

  /**
   * Body param: The ad's creative assets. Each entry is an uploaded file id with an
   * optional format; omit format for the original asset. Two or more entries with no
   * format become a carousel (2-10 attachments), in order, sharing the ad's copy.
   */
  creatives?: Array<AdCreateParams.Creative>;

  /**
   * Body param: The description variants shown on the ad.
   */
  descriptions?: Array<string>;

  /**
   * Body param: The headline variants shown on the ad.
   */
  headlines?: Array<string>;

  /**
   * Body param: Instant lead form for the ad. Only allowed when the ad group's
   * conversion_location is an instant-form destination (instant_forms,
   * instant_forms_and_messenger, website_and_instant_forms). Mutually exclusive with
   * lead_form_id.
   */
  lead_form?: AdCreateParams.LeadForm;

  /**
   * Body param: Use an existing instant form instead of creating one — the form's
   * platform ID, from a form already on the ad's Facebook page. Only allowed when
   * the ad group's conversion_location is an instant-form destination. Mutually
   * exclusive with lead_form.
   */
  lead_form_id?: string;

  /**
   * Body param: Click-to-message welcome copy: the greeting (message) and the
   * ice-breaker prompt (keyword).
   */
  messaging_config?: AdCreateParams.MessagingConfig;

  /**
   * Body param: Whether the ad can appear alongside other advertisers' ads in the
   * same unit. Defaults to true.
   */
  multi_advertiser_ads?: boolean;

  /**
   * Body param: Promote an existing post instead of uploading creatives — a Facebook
   * post or Instagram media id. Mutually exclusive with creatives. Pair with
   * post_source.
   */
  post_id?: string;

  /**
   * Body param: Which network post_id refers to — facebook (a page post) or
   * instagram (a media id). Authoritative; when omitted the source is inferred from
   * the id shape.
   */
  post_source?: 'facebook' | 'instagram';

  /**
   * Body param: The primary text variants shown in the ad body.
   */
  primary_texts?: Array<string>;

  /**
   * Body param: The social accounts the ad runs under — a connected Facebook page
   * and, optionally, an Instagram profile.
   */
  social_accounts?: Array<AdCreateParams.SocialAccount>;

  /**
   * Body param: The display name of the ad.
   */
  title?: string;

  /**
   * Body param: The URL the ad links to.
   */
  url?: string;

  /**
   * Body param: Query parameters appended to the destination URL, keyed by parameter
   * name.
   */
  url_parameters?: unknown;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AdCreateParams {
  export interface Creative {
    /**
     * Uploaded file ID, prefixed `file_`.
     */
    id?: string;

    /**
     * The saved crop window for this creative, in source image pixels. Omit it for the
     * original asset or for a format that has not been cropped.
     */
    crop?: Creative.Crop;

    format?: 'square' | 'vertical' | 'horizontal';
  }

  export namespace Creative {
    /**
     * The saved crop window for this creative, in source image pixels. Omit it for the
     * original asset or for a format that has not been cropped.
     */
    export interface Crop {
      height?: number;

      width?: number;

      x?: number;

      y?: number;
    }
  }

  /**
   * Instant lead form for the ad. Only allowed when the ad group's
   * conversion_location is an instant-form destination (instant_forms,
   * instant_forms_and_messenger, website_and_instant_forms). Mutually exclusive with
   * lead_form_id.
   */
  export interface LeadForm {
    /**
     * Optional completion screen shown after submission; url sets the follow-up
     * website button.
     */
    completion?: LeadForm.Completion;

    /**
     * Optional custom consent disclaimer with checkboxes.
     */
    disclaimer?: LeadForm.Disclaimer;

    /**
     * more_volume (default) is quickest to submit; higher_intent adds a confirmation
     * step.
     */
    form_type?: 'more_volume' | 'higher_intent';

    /**
     * Optional intro screen shown before the questions.
     */
    intro?: LeadForm.Intro;

    /**
     * Internal name for the form. Auto-generated if omitted.
     */
    name?: string;

    /**
     * Require SMS verification of the phone number (higher_intent forms).
     */
    phone_verification?: boolean;

    /**
     * Your privacy policy. url is required by the ad platform.
     */
    privacy_policy?: LeadForm.PrivacyPolicy;

    /**
     * The questions on the form. Standard prefill types need only a type; a custom
     * question needs a label and a format (plus options for multiple_choice). Options
     * carry an optional key and answer-routing logic.
     */
    questions?: Array<LeadForm.Question>;
  }

  export namespace LeadForm {
    /**
     * Optional completion screen shown after submission; url sets the follow-up
     * website button.
     */
    export interface Completion {
      button_text?: string;

      description?: string;

      headline?: string;

      url?: string;
    }

    /**
     * Optional custom consent disclaimer with checkboxes.
     */
    export interface Disclaimer {
      body?: string;

      checkboxes?: Array<Disclaimer.Checkbox>;

      title?: string;
    }

    export namespace Disclaimer {
      export interface Checkbox {
        checked_by_default?: boolean;

        key?: string;

        required?: boolean;

        text?: string;
      }
    }

    /**
     * Optional intro screen shown before the questions.
     */
    export interface Intro {
      description?: string;

      headline?: string;
    }

    /**
     * Your privacy policy. url is required by the ad platform.
     */
    export interface PrivacyPolicy {
      link_text?: string;

      url?: string;
    }

    export interface Question {
      format?: 'short_answer' | 'multiple_choice' | 'appointment';

      label?: string;

      options?: Array<Question.Option>;

      type?:
        | 'email'
        | 'phone'
        | 'full_name'
        | 'first_name'
        | 'last_name'
        | 'city'
        | 'state'
        | 'zip'
        | 'country'
        | 'street_address'
        | 'job_title'
        | 'company_name'
        | 'work_email'
        | 'work_phone_number'
        | 'dob'
        | 'gender'
        | 'marital_status'
        | 'relationship_status'
        | 'military_status'
        | 'date_time'
        | 'custom';
    }

    export namespace Question {
      export interface Option {
        key?: string;

        logic?: Option.Logic;

        value?: string;
      }

      export namespace Option {
        export interface Logic {
          action?: 'go_to_question' | 'submit_form' | 'close_form';

          target_end_page_index?: number;

          target_question_index?: number;
        }
      }
    }
  }

  /**
   * Click-to-message welcome copy: the greeting (message) and the ice-breaker prompt
   * (keyword).
   */
  export interface MessagingConfig {
    keyword?: string;

    message?: string;
  }

  export interface SocialAccount {
    /**
     * Social account ID, prefixed `sacc_`.
     */
    id?: string;
  }
}

export interface AdRetrieveParams {
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

export interface AdUpdateParams {
  /**
   * The call-to-action button shown on the ad.
   */
  call_to_action?:
    | 'apply_now'
    | 'book_now'
    | 'call_now'
    | 'contact_us'
    | 'download'
    | 'get_directions'
    | 'get_offer'
    | 'get_quote'
    | 'learn_more'
    | 'listen_now'
    | 'message_page'
    | 'no_button'
    | 'open_link'
    | 'order_now'
    | 'request_time'
    | 'see_details'
    | 'see_menu'
    | 'send_updates'
    | 'shop_now'
    | 'sign_up'
    | 'subscribe'
    | 'watch_more';

  /**
   * The ad's creative assets. Each entry is an uploaded file id with an optional
   * format; omit format for the original asset. Replaces a live ad's creative on the
   * platform. Two or more entries with no format replace it with a carousel (2-10
   * attachments), in order, sharing the ad's copy.
   */
  creatives?: Array<AdUpdateParams.Creative>;

  /**
   * The description variants shown on the ad.
   */
  descriptions?: Array<string>;

  /**
   * The headline variants shown on the ad.
   */
  headlines?: Array<string>;

  /**
   * Instant lead form for the ad. Only allowed when the ad group's
   * conversion_location is an instant-form destination (instant_forms,
   * instant_forms_and_messenger, website_and_instant_forms). Mutually exclusive with
   * lead_form_id.
   */
  lead_form?: AdUpdateParams.LeadForm;

  /**
   * Use an existing instant form instead of creating one — the form's platform ID,
   * from a form already on the ad's Facebook page. Only allowed when the ad group's
   * conversion_location is an instant-form destination. Mutually exclusive with
   * lead_form. Replaces a stored lead_form.
   */
  lead_form_id?: string;

  /**
   * Click-to-message welcome copy: the greeting (message) and the ice-breaker prompt
   * (keyword).
   */
  messaging_config?: AdUpdateParams.MessagingConfig;

  /**
   * Whether the ad can appear alongside other advertisers' ads in the same unit.
   * Defaults to true.
   */
  multi_advertiser_ads?: boolean;

  /**
   * Promote an existing post instead of uploading creatives — a Facebook post or
   * Instagram media id. Mutually exclusive with creatives. Pair with post_source.
   */
  post_id?: string;

  /**
   * Which network post_id refers to — facebook (a page post) or instagram (a media
   * id). Authoritative; when omitted the source is inferred from the id shape.
   */
  post_source?: 'facebook' | 'instagram';

  /**
   * The primary text variants shown in the ad body.
   */
  primary_texts?: Array<string>;

  /**
   * The social accounts the ad runs under — a connected Facebook page and,
   * optionally, an Instagram profile.
   */
  social_accounts?: Array<AdUpdateParams.SocialAccount>;

  /**
   * The display name of the ad.
   */
  title?: string;

  /**
   * The URL the ad links to.
   */
  url?: string;

  /**
   * Query parameters appended to the destination URL, keyed by parameter name.
   */
  url_parameters?: unknown;
}

export namespace AdUpdateParams {
  export interface Creative {
    /**
     * Uploaded file ID, prefixed `file_`.
     */
    id?: string;

    /**
     * The saved crop window for this creative, in source image pixels. Omit it for the
     * original asset or for a format that has not been cropped.
     */
    crop?: Creative.Crop;

    format?: 'square' | 'vertical' | 'horizontal';
  }

  export namespace Creative {
    /**
     * The saved crop window for this creative, in source image pixels. Omit it for the
     * original asset or for a format that has not been cropped.
     */
    export interface Crop {
      height?: number;

      width?: number;

      x?: number;

      y?: number;
    }
  }

  /**
   * Instant lead form for the ad. Only allowed when the ad group's
   * conversion_location is an instant-form destination (instant_forms,
   * instant_forms_and_messenger, website_and_instant_forms). Mutually exclusive with
   * lead_form_id.
   */
  export interface LeadForm {
    /**
     * Optional completion screen shown after submission; url sets the follow-up
     * website button.
     */
    completion?: LeadForm.Completion;

    /**
     * Optional custom consent disclaimer with checkboxes.
     */
    disclaimer?: LeadForm.Disclaimer;

    /**
     * more_volume (default) is quickest to submit; higher_intent adds a confirmation
     * step.
     */
    form_type?: 'more_volume' | 'higher_intent';

    /**
     * Optional intro screen shown before the questions.
     */
    intro?: LeadForm.Intro;

    /**
     * Internal name for the form. Auto-generated if omitted.
     */
    name?: string;

    /**
     * Require SMS verification of the phone number (higher_intent forms).
     */
    phone_verification?: boolean;

    /**
     * Your privacy policy. url is required by the ad platform.
     */
    privacy_policy?: LeadForm.PrivacyPolicy;

    /**
     * The questions on the form. Standard prefill types need only a type; a custom
     * question needs a label and a format (plus options for multiple_choice). Options
     * carry an optional key and answer-routing logic.
     */
    questions?: Array<LeadForm.Question>;
  }

  export namespace LeadForm {
    /**
     * Optional completion screen shown after submission; url sets the follow-up
     * website button.
     */
    export interface Completion {
      button_text?: string;

      description?: string;

      headline?: string;

      url?: string;
    }

    /**
     * Optional custom consent disclaimer with checkboxes.
     */
    export interface Disclaimer {
      body?: string;

      checkboxes?: Array<Disclaimer.Checkbox>;

      title?: string;
    }

    export namespace Disclaimer {
      export interface Checkbox {
        checked_by_default?: boolean;

        key?: string;

        required?: boolean;

        text?: string;
      }
    }

    /**
     * Optional intro screen shown before the questions.
     */
    export interface Intro {
      description?: string;

      headline?: string;
    }

    /**
     * Your privacy policy. url is required by the ad platform.
     */
    export interface PrivacyPolicy {
      link_text?: string;

      url?: string;
    }

    export interface Question {
      format?: 'short_answer' | 'multiple_choice' | 'appointment';

      label?: string;

      options?: Array<Question.Option>;

      type?:
        | 'email'
        | 'phone'
        | 'full_name'
        | 'first_name'
        | 'last_name'
        | 'city'
        | 'state'
        | 'zip'
        | 'country'
        | 'street_address'
        | 'job_title'
        | 'company_name'
        | 'work_email'
        | 'work_phone_number'
        | 'dob'
        | 'gender'
        | 'marital_status'
        | 'relationship_status'
        | 'military_status'
        | 'date_time'
        | 'custom';
    }

    export namespace Question {
      export interface Option {
        key?: string;

        logic?: Option.Logic;

        value?: string;
      }

      export namespace Option {
        export interface Logic {
          action?: 'go_to_question' | 'submit_form' | 'close_form';

          target_end_page_index?: number;

          target_question_index?: number;
        }
      }
    }
  }

  /**
   * Click-to-message welcome copy: the greeting (message) and the ice-breaker prompt
   * (keyword).
   */
  export interface MessagingConfig {
    keyword?: string;

    message?: string;
  }

  export interface SocialAccount {
    /**
     * Social account ID, prefixed `sacc_`.
     */
    id?: string;
  }
}

export interface AdPauseParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface AdUnpauseParams {
  /**
   * A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export interface AdDuplicateParams {
  /**
   * Body param: Number of copies to create (1-10). Defaults to 1.
   */
  count?: number;

  /**
   * Body param: Whether the copies keep the original post's engagement (likes,
   * comments, shares). Defaults to false.
   */
  preserve_engagement?: boolean;

  /**
   * Body param: Ad group to duplicate into. Defaults to the ad's own ad group.
   */
  target_ad_group_id?: string;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export declare namespace Ads {
  export {
    type Ad as Ad,
    type AdDeleteResponse as AdDeleteResponse,
    type AdDuplicateResponse as AdDuplicateResponse,
    type AdsCursorPage as AdsCursorPage,
    type AdListParams as AdListParams,
    type AdCreateParams as AdCreateParams,
    type AdRetrieveParams as AdRetrieveParams,
    type AdUpdateParams as AdUpdateParams,
    type AdPauseParams as AdPauseParams,
    type AdUnpauseParams as AdUnpauseParams,
    type AdDuplicateParams as AdDuplicateParams,
  };
}
