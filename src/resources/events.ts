// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * An Event records conversion or engagement activity for an account, such as page views, purchases, or leads. Each event ties the action to the [person](/api-reference/beta/people/person) who took it, so activity can be attributed to the ads and links that drove it.
 *
 * Use the Events API to send new tracking events, list recent identity-linked events for an account, and inspect the events recorded for a person.
 */
export class Events extends APIResource {
  /**
   * Lists identity-linked events, most recent first. Pass identifier for one
   * person's journey, or omit it to list events for an account within an explicit
   * time range. Events are shaped like the POST /events intake: attribution in
   * context, identity in user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const eventListResponse of client.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventListResponsesCursorPage, EventListResponse> {
    return this._client.getAPIList('/events', CursorPage<EventListResponse>, { query, ...options });
  }

  /**
   * Tracks a conversion or engagement event for an account.
   *
   * @example
   * ```ts
   * const event = await client.events.create({
   *   account_id: 'account_id',
   *   event_name: 'course_completed',
   * });
   * ```
   */
  create(params: EventCreateParams, options?: RequestOptions): APIPromise<EventCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/events', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type EventListResponsesCursorPage = CursorPage<EventListResponse>;

export interface EventCreateResponse {
  id: string;
}

export interface EventListResponse {
  id: string;

  event_id: string;

  event_name: string;

  event_time: string;

  person_id: string;

  context?: EventListResponse.Context | null;

  currency?: string | null;

  custom_name?: string | null;

  path?: string | null;

  questions?: Array<EventListResponse.Question> | null;

  referrer_url?: string | null;

  /**
   * Hydrated details for the records this event references. Only present keys
   * resolved.
   */
  related?: EventListResponse.Related | null;

  total_usd_amount?: number | null;

  url?: string | null;

  user?: EventListResponse.User | null;

  value?: number | null;
}

export namespace EventListResponse {
  export interface Context {
    ad_campaign_id?: string | null;

    ad_id?: string | null;

    ad_set_id?: string | null;

    utm_campaign?: string | null;

    utm_content?: string | null;

    utm_medium?: string | null;

    utm_source?: string | null;

    utm_term?: string | null;
  }

  export interface Question {
    id?: string | null;

    answer?: string | null;

    key?: string | null;

    options?: Array<string> | null;

    question?: string | null;

    type?: string | null;
  }

  /**
   * Hydrated details for the records this event references. Only present keys
   * resolved.
   */
  export interface Related {
    account?: Related.Account | null;

    app?: Related.App | null;

    payment?: Related.Payment | null;

    plan?: Related.Plan | null;

    product?: Related.Product | null;

    user?: Related.User | null;
  }

  export namespace Related {
    export interface Account {
      id?: string;

      logo_url?: string | null;

      route?: string | null;

      title?: string | null;
    }

    export interface App {
      id?: string;

      domain_id?: string | null;

      icon_url?: string | null;

      title?: string | null;
    }

    export interface Payment {
      id?: string;

      card_brand?: string | null;

      card_last4?: string | null;

      provider?: string | null;
    }

    export interface Plan {
      id?: string;

      billing_period?: number | null;

      currency?: string | null;

      initial_price?: number | null;

      renewal_price?: number | null;

      title?: string | null;
    }

    export interface Product {
      id?: string;

      route?: string | null;

      title?: string | null;
    }

    export interface User {
      id?: string;

      avatar_url?: string | null;

      name?: string | null;

      username?: string | null;
    }
  }

  export interface User {
    city?: string | null;

    country?: string | null;

    email?: string | null;

    first_name?: string | null;

    last_name?: string | null;

    name?: string | null;

    phone?: string | null;
  }
}

export interface EventListParams extends CursorPageParams {
  /**
   * The ID of the account, which will look like biz\_******\*******. Optional for
   * account API keys; required for credentials that can access multiple accounts.
   */
  account_id?: string;

  /**
   * A cursor for fetching events before a later page.
   */
  before?: string;

  /**
   * The number of events to return.
   */
  first?: number;

  /**
   * Start of the time range as an ISO 8601 timestamp. Required when identifier is
   * omitted.
   */
  from?: string;

  /**
   * Any hard identifier of the person: a person ID (prsn\_\*), user ID, email, phone
   * number, or a tracking cookie value (wuid, anonymous ID, fbp/fbc/ttp/ga). Omit to
   * list recent events for the account.
   */
  identifier?: string;

  /**
   * End of the time range as an ISO 8601 timestamp. Required when identifier is
   * omitted; otherwise defaults to now.
   */
  to?: string;
}

export interface EventCreateParams {
  /**
   * Body param: The account to associate with this event.
   */
  account_id: string;

  /**
   * Body param: The type of event.
   *
   * Use a standard event (lead, submit_application, contact, complete_registration,
   * schedule, view_content, add_to_cart) or pass your own name directly for a custom
   * event.
   */
  event_name: string;

  /**
   * Body param: The channel where an event originated
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
   * Body param: Tracking and attribution context.
   */
  context?: EventCreateParams.Context | null;

  /**
   * Body param: The available currencies on the platform
   */
  currency?:
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
    | 'eth'
    | 'ape'
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
    | 'btc'
    | 'cny'
    | 'usdt'
    | 'kzt'
    | 'awg'
    | 'whop_usd'
    | 'xau'
    | null;

  /**
   * Body param: Custom event name when event_name is 'custom'. Maximum 35 chars for
   * this value.
   */
  custom_name?: string | null;

  /**
   * Body param: For 'leave' events: milliseconds the visitor spent on the page.
   */
  duration?: number | null;

  /**
   * Body param: Client-provided identifier for deduplication. Generated if omitted.
   */
  event_id?: string | null;

  /**
   * Body param: When the event occurred. Defaults to now.
   */
  event_time?: string | null;

  /**
   * Body param: The plan associated with the event.
   */
  plan_id?: string | null;

  /**
   * Body param: The product associated with the event.
   */
  product_id?: string | null;

  /**
   * Body param: The referring URL.
   */
  referrer_url?: string | null;

  /**
   * Body param: For 'page' events: true when the page was restored from the
   * back/forward cache.
   */
  resumed?: boolean | null;

  /**
   * Body param: For 'identify' events: where the identity was captured (url, form,
   * manual, iframe).
   */
  source?: string | null;

  /**
   * Body param: For 'page' events: the document title.
   */
  title?: string | null;

  /**
   * Body param: The URL where the event occurred.
   */
  url?: string | null;

  /**
   * Body param: User identity and profile data.
   */
  user?: EventCreateParams.User | null;

  /**
   * Body param: Monetary value associated with the event.
   */
  value?: number | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace EventCreateParams {
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

export declare namespace Events {
  export {
    type EventCreateResponse as EventCreateResponse,
    type EventListResponse as EventListResponse,
    type EventListResponsesCursorPage as EventListResponsesCursorPage,
    type EventListParams as EventListParams,
    type EventCreateParams as EventCreateParams,
  };
}
