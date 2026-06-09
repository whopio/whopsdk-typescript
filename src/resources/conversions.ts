// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Conversions
 */
export class Conversions extends APIResource {
  /**
   * Track a conversion or engagement event for a company.
   *
   * Required permissions:
   *
   * - `event:create`
   *
   * @example
   * ```ts
   * const conversion = await client.conversions.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   event_name: 'lead',
   * });
   * ```
   */
  create(body: ConversionCreateParams, options?: RequestOptions): APIPromise<ConversionCreateResponse> {
    return this._client.post('/conversions', { body, ...options });
  }
}

/**
 * A tracked conversion event
 */
export interface ConversionCreateResponse {
  /**
   * The unique identifier for the conversion
   */
  id: string;
}

export interface ConversionCreateParams {
  /**
   * The company to associate with this event.
   */
  company_id: string;

  /**
   * The type of event.
   */
  event_name:
    | 'lead'
    | 'submit_application'
    | 'contact'
    | 'complete_registration'
    | 'schedule'
    | 'custom'
    | 'page'
    | 'leave'
    | 'identify';

  /**
   * The channel where an event originated
   */
  action_source?:
    | 'email'
    | 'website'
    | 'app'
    | 'phone_call'
    | 'chat'
    | 'physical_store'
    | 'system_generated'
    | 'business_messaging'
    | 'other'
    | null;

  /**
   * Tracking and attribution context.
   */
  context?: ConversionCreateParams.Context | null;

  /**
   * The available currencies on the platform
   */
  currency?: Shared.Currency | null;

  /**
   * Custom event name when event_name is 'custom'. Maximum 35 chars for this value.
   */
  custom_name?: string | null;

  /**
   * For 'leave' events: milliseconds the visitor spent on the page.
   */
  duration?: number | null;

  /**
   * Client-provided identifier for deduplication. Generated if omitted.
   */
  event_id?: string | null;

  /**
   * When the event occurred. Defaults to now.
   */
  event_time?: string | null;

  /**
   * The plan associated with the event.
   */
  plan_id?: string | null;

  /**
   * The product associated with the event.
   */
  product_id?: string | null;

  /**
   * The referring URL.
   */
  referrer_url?: string | null;

  /**
   * For 'page' events: true when the page was restored from the back/forward cache.
   */
  resumed?: boolean | null;

  /**
   * For 'identify' events: where the identity was captured (url, form, manual,
   * iframe).
   */
  source?: string | null;

  /**
   * For 'page' events: the document title.
   */
  title?: string | null;

  /**
   * The URL where the event occurred.
   */
  url?: string | null;

  /**
   * User identity and profile data.
   */
  user?: ConversionCreateParams.User | null;

  /**
   * Monetary value associated with the event.
   */
  value?: number | null;
}

export namespace ConversionCreateParams {
  /**
   * Tracking and attribution context.
   */
  export interface Context {
    /**
     * Ad campaign ID.
     */
    ad_campaign_id?: string | null;

    /**
     * Ad ID.
     */
    ad_id?: string | null;

    /**
     * Ad set ID.
     */
    ad_set_id?: string | null;

    /**
     * Facebook click cookie (\_fbc, format fb.1.{timestamp}.{fbclid}).
     */
    fbc?: string | null;

    /**
     * Facebook click ID.
     */
    fbclid?: string | null;

    /**
     * Facebook browser pixel ID.
     */
    fbp?: string | null;

    /**
     * Client-side device fingerprint.
     */
    fingerprint?: string | null;

    /**
     * Confidence score (0-1) for the device fingerprint.
     */
    fingerprint_confidence?: number | null;

    /**
     * Google Analytics client ID.
     */
    ga?: string | null;

    /**
     * Google Ads gbraid click ID (iOS privacy).
     */
    gbraid?: string | null;

    /**
     * Google click ID.
     */
    gclid?: string | null;

    /**
     * Instagram session ID.
     */
    ig_sid?: string | null;

    /**
     * IP address.
     */
    ip_address?: string | null;

    /**
     * Browser language (e.g. en-US).
     */
    language?: string | null;

    /**
     * LinkedIn click ID.
     */
    li_fat_id?: string | null;

    /**
     * Microsoft Advertising (Bing) click ID.
     */
    msclkid?: string | null;

    /**
     * Reddit click ID.
     */
    rdt_cid?: string | null;

    /**
     * Snapchat click ID.
     */
    sccid?: string | null;

    /**
     * Screen resolution (e.g. 1920x1080).
     */
    screen_resolution?: string | null;

    /**
     * IANA timezone (e.g. America/New_York).
     */
    timezone?: string | null;

    /**
     * TikTok click ID.
     */
    ttclid?: string | null;

    /**
     * TikTok pixel ID.
     */
    ttp?: string | null;

    /**
     * X (Twitter) click ID.
     */
    twclid?: string | null;

    /**
     * Browser user agent string.
     */
    user_agent?: string | null;

    /**
     * UTM campaign parameter.
     */
    utm_campaign?: string | null;

    /**
     * UTM content parameter.
     */
    utm_content?: string | null;

    /**
     * UTM ID parameter.
     */
    utm_id?: string | null;

    /**
     * UTM medium parameter.
     */
    utm_medium?: string | null;

    /**
     * UTM source parameter.
     */
    utm_source?: string | null;

    /**
     * UTM term parameter.
     */
    utm_term?: string | null;

    /**
     * Google Ads wbraid click ID (iOS privacy).
     */
    wbraid?: string | null;
  }

  /**
   * User identity and profile data.
   */
  export interface User {
    /**
     * An anonymous identifier for the user.
     */
    anonymous_id?: string | null;

    /**
     * Date of birth (YYYY-MM-DD).
     */
    birthdate?: string | null;

    /**
     * City.
     */
    city?: string | null;

    /**
     * Country.
     */
    country?: string | null;

    /**
     * Email address.
     */
    email?: string | null;

    /**
     * An external identifier for the user.
     */
    external_id?: string | null;

    /**
     * First name.
     */
    first_name?: string | null;

    /**
     * Gender
     */
    gender?: 'male' | 'female' | null;

    /**
     * Last name.
     */
    last_name?: string | null;

    /**
     * A second anonymous identifier to link to this user (e.g. captured across an
     * iframe boundary).
     */
    linked_anonymous_id?: string | null;

    /**
     * A wuid from a linked frame, captured across an iframe boundary.
     */
    linked_wuid?: string | null;

    /**
     * The Whop member ID.
     */
    member_id?: string | null;

    /**
     * The Whop membership ID.
     */
    membership_id?: string | null;

    /**
     * Full display name.
     */
    name?: string | null;

    /**
     * Phone number.
     */
    phone?: string | null;

    /**
     * Postal code.
     */
    postal_code?: string | null;

    /**
     * State or region.
     */
    state?: string | null;

    /**
     * The Whop user ID.
     */
    user_id?: string | null;

    /**
     * Username.
     */
    username?: string | null;
  }
}

export declare namespace Conversions {
  export {
    type ConversionCreateResponse as ConversionCreateResponse,
    type ConversionCreateParams as ConversionCreateParams,
  };
}
