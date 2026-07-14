// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
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
  create(body: AdCreateParams, options?: RequestOptions): APIPromise<Ad> {
    return this._client.post('/ads', { body, ...options });
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
  pause(id: string, options?: RequestOptions): APIPromise<Ad> {
    return this._client.post(path`/ads/${id}/pause`, options);
  }

  /**
   * Resumes a paused ad.
   */
  unpause(id: string, options?: RequestOptions): APIPromise<Ad> {
    return this._client.post(path`/ads/${id}/unpause`, options);
  }
}

export type AdsCursorPage = CursorPage<Ad>;

export interface Ad {
  /**
   * Unique identifier for the ad.
   */
  id: string;

  /**
   * The ad campaign this ad belongs to, an object with an id.
   */
  ad_campaign: Ad.AdCampaign;

  /**
   * The ad group this ad belongs to, an object with an id.
   */
  ad_group: Ad.AdGroup;

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
   * The current delivery state, mirroring the Delivery column in the ads dashboard.
   * When several states apply at once, the highest-precedence one is returned.
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
   * The instant lead form on the ad (Meta lead ads), or null when the ad group's
   * conversion_location is not an instant-form destination. An object with name,
   * form_type (more_volume or higher_intent), an optional intro, questions, a
   * privacy_policy, an optional completion screen, and phone_verification.
   */
  lead_form: unknown | null;

  /**
   * The Meta lead form the ad uses. Set when the ad references an existing form via
   * lead_form_id, or once a form built from lead_form has been created on Meta at
   * launch.
   */
  lead_form_id: string | null;

  /**
   * Whop pixel-attributed leads, last-click.
   */
  leads: number;

  /**
   * The click-to-message welcome copy, an object with message and keyword, or null
   * when the ad has none.
   */
  messaging_config: unknown | null;

  /**
   * Whether the ad can appear alongside other advertisers' ads in the same unit.
   * Defaults to true.
   */
  multi_advertiser_ads: boolean;

  /**
   * The existing post this ad promotes (a Facebook post or Instagram media), or null
   * when it uses uploaded creatives.
   */
  post_id: string | null;

  /**
   * Which network post_id refers to — facebook (a page post) or instagram (a media
   * id) — or null when the ad uses uploaded creatives.
   */
  post_source: 'facebook' | 'instagram' | null;

  /**
   * Preview image of the existing post this ad promotes. Null for ads that use
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
   * Purchase value divided by spend, both in USD (a currency-neutral ratio); 0 when
   * there is no spend.
   */
  return_on_ad_spend: number;

  /**
   * Whop pixel-attributed schedule events, last-click.
   */
  schedules: number;

  social_accounts: Array<unknown>;

  /**
   * The amount charged, in spend_currency.
   */
  spend: number;

  /**
   * The ISO 4217 currency code of all monetary metrics.
   */
  spend_currency: string | null;

  /**
   * The delivery status of the ad.
   */
  status: 'active' | 'paused' | 'in_review' | 'rejected';

  /**
   * Whop pixel-attributed submit-application events, last-click.
   */
  submitted_applications: number;

  /**
   * The display title of the ad. Falls back to the creative set caption when unset.
   */
  title: string | null;

  /**
   * Unique clicks divided by impressions, between 0 and 1.
   */
  unique_click_through_rate: number | null;

  /**
   * The number of unique clicks.
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
   * Query parameters appended to the URL, as a string-to-string map.
   */
  url_parameters: unknown;

  /**
   * Whop pixel-attributed view-content events, last-click.
   */
  viewed_contents: number;
}

export namespace Ad {
  /**
   * The ad campaign this ad belongs to, an object with an id.
   */
  export interface AdCampaign {
    /**
     * The referenced entity's id.
     */
    id: string;
  }

  /**
   * The ad group this ad belongs to, an object with an id.
   */
  export interface AdGroup {
    /**
     * The referenced entity's id.
     */
    id: string;
  }

  /**
   * The creative assets used by this ad. The original asset has a null format;
   * square, vertical, and horizontal entries are placement-specific variants.
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
}

export type AdDeleteResponse = boolean;

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
   * An inline ad group to create (same shape as POST /ad_groups, including
   * ad_campaign_id). Creates the ad group and the ad together. Provide this OR
   * ad_group_id.
   */
  ad_group?: unknown;

  /**
   * The existing ad group to create the ad in. Provide this OR ad_group, not both.
   */
  ad_group_id?: string;

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
   * format; omit format for the original asset.
   */
  creatives?: Array<AdCreateParams.Creative>;

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
  lead_form?: AdCreateParams.LeadForm;

  /**
   * Use an existing Meta instant form instead of creating one — the form's Meta id,
   * from a form already on the ad's Facebook page. Only allowed when the ad group's
   * conversion_location is an instant-form destination. Mutually exclusive with
   * lead_form.
   */
  lead_form_id?: string;

  /**
   * Click-to-message welcome copy: the greeting (message) and the ice-breaker prompt
   * (keyword).
   */
  messaging_config?: AdCreateParams.MessagingConfig;

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
   * The social accounts (Facebook page, Instagram profile) the ad runs under.
   */
  social_accounts?: Array<AdCreateParams.SocialAccount>;

  /**
   * The display name of the ad.
   */
  title?: string;

  /**
   * The URL the ad links to.
   */
  url?: string;

  /**
   * Query parameters appended to the destination URL, as a string-to-string map.
   */
  url_parameters?: unknown;
}

export namespace AdCreateParams {
  export interface Creative {
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
     * Your privacy policy. url is required by Meta.
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
     * Your privacy policy. url is required by Meta.
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
   * platform.
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
   * Use an existing Meta instant form instead of creating one — the form's Meta id,
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
   * The social accounts the ad runs under.
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
   * Query parameters appended to the destination URL, as a string-to-string map.
   */
  url_parameters?: unknown;
}

export namespace AdUpdateParams {
  export interface Creative {
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
     * Your privacy policy. url is required by Meta.
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
     * Your privacy policy. url is required by Meta.
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
    id?: string;
  }
}

export declare namespace Ads {
  export {
    type Ad as Ad,
    type AdDeleteResponse as AdDeleteResponse,
    type AdsCursorPage as AdsCursorPage,
    type AdListParams as AdListParams,
    type AdCreateParams as AdCreateParams,
    type AdRetrieveParams as AdRetrieveParams,
    type AdUpdateParams as AdUpdateParams,
  };
}
