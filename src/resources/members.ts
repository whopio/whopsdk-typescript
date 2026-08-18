// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Members
 */
export class Members extends APIResource {
  /**
   * Retrieves the details of an existing member.
   *
   * Required permissions:
   *
   * - `member:basic:read`
   * - `member:email:read`
   * - `member:phone:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MemberRetrieveResponse> {
    return this._client.get(path`/members/${id}`, options);
  }

  /**
   * Returns a paginated list of members for a company, with extensive filtering by
   * product, plan, status, access level, and more.
   *
   * Required permissions:
   *
   * - `member:basic:read`
   * - `member:email:read`
   * - `member:phone:read`
   */
  list(
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MemberListResponsesCursorPage, MemberListResponse> {
    return this._client.getAPIList('/members', CursorPage<MemberListResponse>, { query, ...options });
  }
}

export type MemberListResponsesCursorPage = CursorPage<MemberListResponse>;

/**
 * A member represents a user's relationship with a company on Whop, including
 * their access level, status, and spending history.
 */
export interface MemberRetrieveResponse {
  /**
   * The unique identifier for the company member.
   */
  id: string;

  /**
   * The member's content access level. `admin` means their team role grants
   * administrative content access, `customer` means they hold a valid product
   * membership, and `no_access` means they cannot access company content.
   */
  access_level: Shared.AccessLevel;

  /**
   * The company for the member.
   */
  company: MemberRetrieveResponse.Company;

  /**
   * The member's token balance for this company. Computed live from the ledger, not
   * from a cache.
   */
  company_token_balance: number;

  /**
   * The datetime the company member was created.
   */
  created_at: string;

  /**
   * When the member joined the company
   */
  joined_at: string;

  /**
   * The different most recent actions a member can have.
   */
  most_recent_action: Shared.MemberMostRecentActions | null;

  /**
   * The time for the most recent action, if applicable.
   */
  most_recent_action_at: string | null;

  /**
   * The phone number for the member, if available.
   */
  phone: string | null;

  /**
   * The status of the member
   */
  status: Shared.MemberStatuses;

  /**
   * The datetime the company member was last updated.
   */
  updated_at: string;

  /**
   * How much money this customer has spent on the company's products and plans
   */
  usd_total_spent: number;

  /**
   * The user for this member, if any.
   */
  user: MemberRetrieveResponse.User | null;
}

export namespace MemberRetrieveResponse {
  /**
   * The company for the member.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The written name of the company.
     */
    title: string;
  }

  /**
   * The user for this member, if any.
   */
  export interface User {
    /**
     * The unique identifier for the company member user.
     */
    id: string;

    /**
     * The digital mailing address of the user.
     */
    email: string | null;

    /**
     * The user's full name.
     */
    name: string | null;

    /**
     * The whop username.
     */
    username: string;
  }
}

/**
 * A member represents a user's relationship with a company on Whop, including
 * their access level, status, and spending history.
 */
export interface MemberListResponse {
  /**
   * The unique identifier for the company member.
   */
  id: string;

  /**
   * The member's content access level. `admin` means their team role grants
   * administrative content access, `customer` means they hold a valid product
   * membership, and `no_access` means they cannot access company content.
   */
  access_level: Shared.AccessLevel;

  /**
   * The member's token balance for this company. Computed live from the ledger, not
   * from a cache.
   */
  company_token_balance: number;

  /**
   * The datetime the company member was created.
   */
  created_at: string;

  /**
   * When the member joined the company
   */
  joined_at: string;

  /**
   * The different most recent actions a member can have.
   */
  most_recent_action: Shared.MemberMostRecentActions | null;

  /**
   * The time for the most recent action, if applicable.
   */
  most_recent_action_at: string | null;

  /**
   * The phone number for the member, if available.
   */
  phone: string | null;

  /**
   * The status of the member
   */
  status: Shared.MemberStatuses;

  /**
   * The datetime the company member was last updated.
   */
  updated_at: string;

  /**
   * How much money this customer has spent on the company's products and plans
   */
  usd_total_spent: number;

  /**
   * The user for this member, if any.
   */
  user: MemberListResponse.User | null;
}

export namespace MemberListResponse {
  /**
   * The user for this member, if any.
   */
  export interface User {
    /**
     * The unique identifier for the company member user.
     */
    id: string;

    /**
     * The digital mailing address of the user.
     */
    email: string | null;

    /**
     * The user's full name.
     */
    name: string | null;

    /**
     * The whop username.
     */
    username: string;
  }
}

export interface MemberListParams extends CursorPageParams {
  /**
   * Filter members by their current access level to the product.
   */
  access_level?: Shared.AccessLevel;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string;

  /**
   * The unique identifier of the company to list members for.
   */
  company_id?: string;

  /**
   * Only return members created after this timestamp.
   */
  created_after?: string;

  /**
   * Only return members created before this timestamp.
   */
  created_before?: string;

  /**
   * The sort direction for results. Defaults to descending.
   */
  direction?: Shared.Direction;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number;

  /**
   * Filter members by their most recent activity type.
   */
  most_recent_actions?: Array<Shared.MemberMostRecentActions>;

  /**
   * The column to sort members by, such as creation date or revenue.
   */
  order?: 'id' | 'usd_total_spent' | 'created_at' | 'joined_at' | 'most_recent_action';

  /**
   * Filter members to only those subscribed to these specific plans.
   */
  plan_ids?: Array<string>;

  /**
   * Filter members to only those belonging to these specific products.
   */
  product_ids?: Array<string>;

  /**
   * Filter members to only those who used these specific promo codes.
   */
  promo_code_ids?: Array<string>;

  /**
   * Search members by name, username, or email. Email filtering requires the
   * member:email:read permission.
   */
  query?: string;

  /**
   * Filter members by their current subscription status.
   */
  statuses?: Array<Shared.MemberStatuses>;

  /**
   * Filter members to only those matching these specific user identifiers.
   */
  user_ids?: Array<string>;
}

export declare namespace Members {
  export {
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberListResponse as MemberListResponse,
    type MemberListResponsesCursorPage as MemberListResponsesCursorPage,
    type MemberListParams as MemberListParams,
  };
}
