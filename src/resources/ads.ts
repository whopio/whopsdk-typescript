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
   * Retrieves a single ad with stats over the requested window.
   */
  retrieve(
    id: string,
    params: AdRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Ad> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.get(path`/ads/${id}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the ads for an account, with stats over the requested window.
   */
  list(
    params: AdListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdsCursorPage, Ad> {
    const { 'Api-Version-Date': apiVersionDate, ...query } = params ?? {};
    return this._client.getAPIList('/ads', CursorPage<Ad>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(apiVersionDate != null ? { 'Api-Version-Date': apiVersionDate } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Pauses an active ad.
   */
  pause(id: string, params: AdPauseParams | null | undefined = {}, options?: RequestOptions): APIPromise<Ad> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ads/${id}/pause`, {
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
   * Resumes a paused ad.
   */
  unpause(
    id: string,
    params: AdUnpauseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Ad> {
    const { 'Api-Version-Date': apiVersionDate, 'Idempotency-Key': idempotencyKey } = params ?? {};
    return this._client.post(path`/ads/${id}/unpause`, {
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
    | 'scheduled'
    | 'learning_limited'
    | 'learning'
    | 'active';

  descriptions: Array<string>;

  /**
   * The post you pointed this ad at, when it promotes one you already published — a
   * Facebook post, Instagram media, or TikTok video ID. `null` when the ad uses
   * uploaded creatives.
   */
  existing_post_id: string | null;

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
   * The post the ad network serves for this ad, as `pageID_postID` on Meta — the
   * post Meta created for an uploaded creative, or the post being promoted. Use it
   * to open the live post, or to promote the same post from another ad. `null` until
   * the network has created the post.
   */
  post_id: string | null;

  /**
   * Identifies the network that owns `existing_post_id`; `null` when the ad uses
   * uploaded creatives.
   */
  post_source: 'facebook' | 'instagram' | null;

  /**
   * Preview image of the post named by `existing_post_id`. `null` for ads that use
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
   * The URL the ad links to, without its query string. Parameters belong in
   * `url_parameters`; any you send on `url` are moved there.
   */
  url: string | null;

  /**
   * Every query parameter appended to the URL, keyed by parameter name — including
   * any you sent on `url` itself. Whop adds its own click-attribution parameters on
   * top; those are reserved and rejected if you set them. Which keys are reserved
   * depends on the ad's network — Meta: utm_meta_ad_id, utm_meta_adset_id,
   * utm_meta_campaign_id, utm_source, utm_placement, utm_medium, utm_content,
   * utm_adset, utm_whop, wacid, wasid, waid, tw_source, tw_adid; TikTok: waid,
   * wasid, wacid, ad_id, adset_id, campaign_id, utm_source, utm_medium,
   * utm_placement, utm_whop, tw_source, tw_adid.
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

  /**
   * The instant lead form shown when someone taps this ad. `null` when the ad
   * group's conversion_location is not an instant-form destination.
   */
  lead_form?: Ad.LeadForm | null;

  /**
   * The ad platform's ID for the instant form the ad uses. Set when the ad
   * references an existing form via `lead_form_id`, or once a form built from
   * `lead_form` has been created on the platform.
   */
  lead_form_id?: string | null;

  /**
   * Welcome message for click-to-message ads, shown when the conversation opens.
   * `null` when the ad has none.
   */
  messaging_config?: Ad.MessagingConfig | null;

  /**
   * Whether the ad can appear alongside other advertisers' ads in the same unit.
   * Defaults to true.
   */
  multi_advertiser_ads?: boolean;

  /**
   * The advertiser-uploaded MP3 a TikTok carousel ad plays. TikTok-only; `null`
   * elsewhere and for non-carousel ads.
   */
  music?: Ad.Music | null;
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
   * The social accounts the ad runs under — its Facebook page and Instagram profile
   * — each referenced by ID, prefixed `sacc_`.
   */
  export interface SocialAccount {
    /**
     * The referenced entity's id.
     */
    id: string;
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
   * The advertiser-uploaded MP3 a TikTok carousel ad plays. TikTok-only; `null`
   * elsewhere and for non-carousel ads.
   */
  export interface Music {
    /**
     * The music attachment's file id.
     */
    id: string;

    /**
     * The uploaded file's name.
     */
    name: string | null;

    /**
     * CDN url of the MP3.
     */
    url: string | null;
  }
}

export interface AdRetrieveParams {
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

export interface AdListParams extends CursorPageParams {
  /**
   * Query param: The account the ads belong to. Defaults to the account-scoped key's
   * own account.
   */
  account_id?: string;

  /**
   * Query param: Only return ads in this ad campaign.
   */
  ad_campaign_id?: string;

  /**
   * Query param: Only return ads in these ad campaigns (max 100). Repeat the
   * parameter for each id (ad_campaign_ids=a&ad_campaign_ids=b).
   */
  ad_campaign_ids?: Array<string>;

  /**
   * Query param: Only return ads in this ad group.
   */
  ad_group_id?: string;

  /**
   * Query param: Only return ads in these ad groups (max 100). Repeat the parameter
   * for each id (ad_group_ids=a&ad_group_ids=b).
   */
  ad_group_ids?: Array<string>;

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
   * Query param: Only return ads created after this timestamp.
   */
  created_after?: string;

  /**
   * Query param: Only return ads created before this timestamp.
   */
  created_before?: string;

  /**
   * Query param: The sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: The number of ads to return.
   */
  first?: number;

  /**
   * Query param: The number of ads to return from the end of the range.
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
   * Query param: Filter ads by a title or ID substring.
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
   * Query param: Only return ads with this status.
   */
  status?: 'active' | 'paused' | 'in_review' | 'rejected';

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

export interface AdPauseParams {
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

export interface AdUnpauseParams {
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

export declare namespace Ads {
  export {
    type Ad as Ad,
    type AdsCursorPage as AdsCursorPage,
    type AdRetrieveParams as AdRetrieveParams,
    type AdListParams as AdListParams,
    type AdPauseParams as AdPauseParams,
    type AdUnpauseParams as AdUnpauseParams,
  };
}
