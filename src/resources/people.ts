// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Person is an identity-linked profile of a visitor or customer of an account, assembled from every [event](/api-reference/beta/events/event) the person generated — pixel page views, ad clicks, leads, identifies, and payments. Each profile carries the person's known identities (names, emails, phones, user IDs), purchase history and LTV, geo/device profile, traffic sources, and the first and last marketing touches that reached them.
 *
 * Use the People API to list and segment the people of an account — filter by activity, purchases, traffic source, location, or marketing touch, and sort by value — or retrieve one person by person ID, user ID, email address, or phone number.
 */
export class People extends APIResource {
  /**
   * Lists the people (visitors and customers) of an account: the identity-linked
   * person profiles aggregated from every pixel, payment, and platform event —
   * identities, purchases and LTV, geo/device profile, traffic sources, and
   * first/last marketing touches.
   */
  list(
    query: PersonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PersonListResponsesCursorPage, PersonListResponse> {
    return this._client.getAPIList('/people', CursorPage<PersonListResponse>, { query, ...options });
  }

  /**
   * Retrieves one person for an account. The identifier can be a person ID
   * (prsn*******\*******), a user ID (user*******\*******), an email address, or a
   * phone number — merged people resolve to the surviving profile.
   */
  retrieve(
    personID: string,
    query: PersonRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PersonRetrieveResponse> {
    return this._client.get(path`/people/${personID}`, { query, ...options });
  }
}

export type PersonListResponsesCursorPage = CursorPage<PersonListResponse>;

/**
 * The full profile a retrieve returns: the summary plus every linked identity,
 * purchase rows, all acquisition sources, and exact usage breakdowns.
 */
export interface PersonRetrieveResponse {
  id: string;

  account_id: string;

  event_count: number;

  first_seen_at: string;

  last_seen_at: string;

  purchase_count: number;

  aov?: number;

  audience_ids?: Array<string>;

  custom_event_names?: Array<string>;

  device?: PersonRetrieveResponse.Device;

  /**
   * The email from the person's most recent event that carried one.
   */
  email?: string | null;

  /**
   * Every linked email, primary first.
   */
  emails?: Array<string>;

  event_names?: Array<string>;

  first_purchase_at?: string | null;

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  first_source?: PersonRetrieveResponse.FirstSource | null;

  last_ip?: string | null;

  last_purchase_at?: string | null;

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  last_source?: PersonRetrieveResponse.LastSource | null;

  location?: PersonRetrieveResponse.Location;

  ltv?: number;

  /**
   * The user's member record at this account, when they are a member of it.
   */
  member?: PersonRetrieveResponse.Member | null;

  /**
   * The name from the person's most recent event that carried one.
   */
  name?: string | null;

  /**
   * Every name the person's linked identities carried, primary first.
   */
  names?: Array<string>;

  /**
   * The phone from the person's most recent event that carried one.
   */
  phone?: string | null;

  /**
   * Every linked phone, primary first.
   */
  phones?: Array<string>;

  purchases?: Array<PersonRetrieveResponse.Purchase>;

  roles?: Array<string>;

  /**
   * Every distinct acquisition signal the person ever carried, ad entities hydrated.
   */
  sources?: Array<PersonRetrieveResponse.Source>;

  timezone?: string | null;

  /**
   * Exact usage breakdowns for the person's browser traffic (distinct events per
   * value).
   */
  usage?: PersonRetrieveResponse.Usage;

  /**
   * The person's primary whop user, when one of their identities is a whop account.
   */
  user?: PersonRetrieveResponse.User | null;

  /**
   * Every linked whop account, the most used one first.
   */
  user_ids?: Array<string>;
}

export namespace PersonRetrieveResponse {
  export interface Device {
    browser?: string | null;

    device?: string | null;

    os?: string | null;
  }

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  export interface FirstSource {
    type: 'ad_click' | 'lead_form' | 'external_ad_click' | 'referrer' | 'utm';

    ad?: FirstSource.Ad | null;

    ad_group?: FirstSource.AdGroup | null;

    campaign?: FirstSource.Campaign | null;

    domain?: string | null;

    occurred_at?: string | null;

    platform?: string | null;

    utm_source?: string | null;
  }

  export namespace FirstSource {
    export interface Ad {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface AdGroup {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface Campaign {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }
  }

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  export interface LastSource {
    type: 'ad_click' | 'lead_form' | 'external_ad_click' | 'referrer' | 'utm';

    ad?: LastSource.Ad | null;

    ad_group?: LastSource.AdGroup | null;

    campaign?: LastSource.Campaign | null;

    domain?: string | null;

    occurred_at?: string | null;

    platform?: string | null;

    utm_source?: string | null;
  }

  export namespace LastSource {
    export interface Ad {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface AdGroup {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface Campaign {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }
  }

  export interface Location {
    city?: string | null;

    continent?: string | null;

    country?: string | null;
  }

  /**
   * The user's member record at this account, when they are a member of it.
   */
  export interface Member {
    id: string;

    joined_at?: string | null;

    status?: string | null;

    usd_total_spend?: number;
  }

  export interface Purchase {
    event_id: string;

    occurred_at: string;

    usd_value: number;
  }

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  export interface Source {
    type: 'ad_click' | 'lead_form' | 'external_ad_click' | 'referrer' | 'utm';

    ad?: Source.Ad | null;

    ad_group?: Source.AdGroup | null;

    campaign?: Source.Campaign | null;

    domain?: string | null;

    occurred_at?: string | null;

    platform?: string | null;

    utm_source?: string | null;
  }

  export namespace Source {
    export interface Ad {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface AdGroup {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface Campaign {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }
  }

  /**
   * Exact usage breakdowns for the person's browser traffic (distinct events per
   * value).
   */
  export interface Usage {
    browser?: Array<Usage.Browser>;

    city?: Array<Usage.City>;

    country?: Array<Usage.Country>;

    device?: Array<Usage.Device>;

    ip?: Array<Usage.IP>;

    os?: Array<Usage.O>;

    referrer?: Array<Usage.Referrer>;

    timezone?: Array<Usage.Timezone>;
  }

  export namespace Usage {
    export interface Browser {
      events: number;

      value: string;
    }

    export interface City {
      events: number;

      value: string;
    }

    export interface Country {
      events: number;

      value: string;
    }

    export interface Device {
      events: number;

      value: string;
    }

    export interface IP {
      events: number;

      value: string;
    }

    export interface O {
      events: number;

      value: string;
    }

    export interface Referrer {
      events: number;

      value: string;
    }

    export interface Timezone {
      events: number;

      value: string;
    }
  }

  /**
   * The person's primary whop user, when one of their identities is a whop account.
   */
  export interface User {
    id: string;

    username: string;

    name?: string | null;

    profile_pic_url?: string | null;
  }
}

export interface PersonListResponse {
  id: string;

  account_id: string;

  event_count: number;

  first_seen_at: string;

  last_seen_at: string;

  purchase_count: number;

  aov?: number;

  device?: PersonListResponse.Device;

  /**
   * The email from the person's most recent event that carried one.
   */
  email?: string | null;

  first_purchase_at?: string | null;

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  first_source?: PersonListResponse.FirstSource | null;

  last_ip?: string | null;

  last_purchase_at?: string | null;

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  last_source?: PersonListResponse.LastSource | null;

  location?: PersonListResponse.Location;

  ltv?: number;

  /**
   * The user's member record at this account, when they are a member of it.
   */
  member?: PersonListResponse.Member | null;

  /**
   * The name from the person's most recent event that carried one.
   */
  name?: string | null;

  /**
   * The phone from the person's most recent event that carried one.
   */
  phone?: string | null;

  timezone?: string | null;

  /**
   * The person's primary whop user, when one of their identities is a whop account.
   */
  user?: PersonListResponse.User | null;
}

export namespace PersonListResponse {
  export interface Device {
    browser?: string | null;

    device?: string | null;

    os?: string | null;
  }

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  export interface FirstSource {
    type: 'ad_click' | 'lead_form' | 'external_ad_click' | 'referrer' | 'utm';

    ad?: FirstSource.Ad | null;

    ad_group?: FirstSource.AdGroup | null;

    campaign?: FirstSource.Campaign | null;

    domain?: string | null;

    occurred_at?: string | null;

    platform?: string | null;

    utm_source?: string | null;
  }

  export namespace FirstSource {
    export interface Ad {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface AdGroup {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface Campaign {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }
  }

  /**
   * Where a visit came from: a whop ad click, a lead form, an external ad, or a
   * referring site.
   */
  export interface LastSource {
    type: 'ad_click' | 'lead_form' | 'external_ad_click' | 'referrer' | 'utm';

    ad?: LastSource.Ad | null;

    ad_group?: LastSource.AdGroup | null;

    campaign?: LastSource.Campaign | null;

    domain?: string | null;

    occurred_at?: string | null;

    platform?: string | null;

    utm_source?: string | null;
  }

  export namespace LastSource {
    export interface Ad {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface AdGroup {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface Campaign {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }
  }

  export interface Location {
    city?: string | null;

    continent?: string | null;

    country?: string | null;
  }

  /**
   * The user's member record at this account, when they are a member of it.
   */
  export interface Member {
    id: string;

    joined_at?: string | null;

    status?: string | null;

    usd_total_spend?: number;
  }

  /**
   * The person's primary whop user, when one of their identities is a whop account.
   */
  export interface User {
    id: string;

    username: string;

    name?: string | null;

    profile_pic_url?: string | null;
  }
}

export interface PersonListParams extends CursorPageParams {
  /**
   * The ID of the account, which will look like biz\_******\*******. Optional for
   * account API keys; required for credentials that can access multiple accounts.
   */
  account_id?: string;

  /**
   * Only include people in this audience.
   */
  audience_id?: string;

  /**
   * A cursor for fetching people before a later page.
   */
  before?: string;

  /**
   * Only include people whose most recent visit came from this ISO 3166-1 alpha-2
   * country code.
   */
  country?: string;

  /**
   * Only include people who fired this custom pixel event.
   */
  custom_event?: string;

  /**
   * Sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * Only include the person linked to this email address.
   */
  email?: string;

  /**
   * Only include people who fired any of these events, e.g. payment.completed or
   * page.checkout.view.
   */
  event_name?: Array<string>;

  /**
   * The number of people to return (default 100, max 100).
   */
  first?: number;

  /**
   * Only include people first seen at or after this ISO 8601 timestamp.
   */
  first_seen_after?: string;

  /**
   * Only include people first seen before this ISO 8601 timestamp.
   */
  first_seen_before?: string;

  /**
   * true for customers only, false for people who have never purchased.
   */
  has_purchased?: boolean;

  /**
   * Only include people last seen at or after this ISO 8601 timestamp.
   */
  last_seen_after?: string;

  /**
   * Only include people last seen before this ISO 8601 timestamp.
   */
  last_seen_before?: string;

  /**
   * Column to sort by. Defaults to last_seen_at.
   */
  order?:
    | 'first_seen_at'
    | 'last_seen_at'
    | 'first_purchase_at'
    | 'last_purchase_at'
    | 'purchase_count'
    | 'event_count'
    | 'ltv'
    | 'aov'
    | 'name'
    | 'email';

  /**
   * Only include the person linked to this phone number.
   */
  phone?: string;

  /**
   * Search people by name, email, phone, or whop user ID (case-insensitive substring
   * match).
   */
  query?: string;

  /**
   * Only include people acquired from any of these sources. A source is a platform
   * (google, meta, whop, direct), custom:<utm source>, an ad entity tag
   * (adcamp* /adgrp* /ad\_), or a referrer domain like example.com.
   */
  source?: Array<string>;

  /**
   * Only include the person linked to this whop user ID.
   */
  user_id?: string;
}

export interface PersonRetrieveParams {
  /**
   * The ID of the account, which will look like biz\_******\*******. Optional for
   * account API keys; required for credentials that can access multiple accounts.
   */
  account_id?: string;
}

export declare namespace People {
  export {
    type PersonRetrieveResponse as PersonRetrieveResponse,
    type PersonListResponse as PersonListResponse,
    type PersonListResponsesCursorPage as PersonListResponsesCursorPage,
    type PersonListParams as PersonListParams,
    type PersonRetrieveParams as PersonRetrieveParams,
  };
}
