// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * A Person represents a visitor or customer of an account, assembled from [pixel events](/api-reference/beta/events/event) and purchase activity — ad clicks, storefront visits, and checkouts.
 *
 * Use the People API to list the people of an account and retrieve a single person.
 */
export class People extends APIResource {
  /**
   * Lists the people (visitors and customers) of an account, aggregated from pixel
   * events. The account is inferred from an account API key; other credentials must
   * pass account_id.
   */
  list(
    query: PersonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PersonListResponsesCursorPage, PersonListResponse> {
    return this._client.getAPIList('/people', CursorPage<PersonListResponse>, { query, ...options });
  }

  /**
   * Retrieves one person for an account, aggregated from pixel events.
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

export interface PersonRetrieveResponse {
  data: PersonRetrieveResponse.Data;
}

export namespace PersonRetrieveResponse {
  export interface Data {
    id: string;

    account_id: string;

    first_seen_at: number;

    last_seen_at: number;

    person_id: string;

    purchase_count: number;

    ad_sets?: Array<Data.AdSet>;

    ads?: Array<Data.Ad>;

    aov?: number;

    campaigns?: Array<Data.Campaign>;

    email?: string | null;

    has_failed_payment?: boolean;

    ltv?: number;

    name?: string | null;

    phone?: string | null;
  }

  export namespace Data {
    export interface AdSet {
      id: string;

      name?: string | null;

      thumbnail_url?: string | null;
    }

    export interface Ad {
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
}

export interface PersonListResponse {
  id: string;

  account_id: string;

  first_seen_at: number;

  last_seen_at: number;

  person_id: string;

  purchase_count: number;

  ad_sets?: Array<PersonListResponse.AdSet>;

  ads?: Array<PersonListResponse.Ad>;

  aov?: number;

  campaigns?: Array<PersonListResponse.Campaign>;

  email?: string | null;

  has_failed_payment?: boolean;

  ltv?: number;

  name?: string | null;

  phone?: string | null;
}

export namespace PersonListResponse {
  export interface AdSet {
    id: string;

    name?: string | null;

    thumbnail_url?: string | null;
  }

  export interface Ad {
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

export interface PersonListParams extends CursorPageParams {
  /**
   * The ID of the account, which will look like biz\_******\*******. Optional for
   * account API keys; required for credentials that can access multiple accounts.
   */
  account_id?: string;

  /**
   * A cursor for fetching people before a later page.
   */
  before?: string;

  /**
   * Sort direction. Defaults to desc.
   */
  direction?: 'asc' | 'desc';

  /**
   * A JSON-encoded array of filters, each with field, operator, and value keys.
   */
  filters?: string;

  /**
   * The number of people to return (default 100, max 100).
   */
  first?: number;

  /**
   * Start of the time range as a Unix timestamp. Defaults to 366 days before `to`.
   */
  from?: number;

  /**
   * Column to sort by (e.g. last_seen_at, ltv, purchase_count). Defaults to
   * last_seen_at.
   */
  sort?: string;

  /**
   * End of the time range as a Unix timestamp. Defaults to now.
   */
  to?: number;
}

export interface PersonRetrieveParams {
  /**
   * The ID of the account, which will look like biz\_******\*******. Optional for
   * account API keys; required for credentials that can access multiple accounts.
   */
  account_id?: string;

  /**
   * Start of the time range as a Unix timestamp.
   */
  from?: number;

  /**
   * End of the time range as a Unix timestamp. Defaults to now.
   */
  to?: number;
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
