// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Members extends APIResource {
  /**
   * Retrieves a member of a company by ID
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
   * List the members of a company
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
 * An object representing a connection between a creator and a user/company_buyer.
 * This type should only be made visible to the user/company_buyer who is a part of
 * the connection.
 */
export interface MemberRetrieveResponse {
  /**
   * The unique identifier for the company member.
   */
  id: string;

  /**
   * The access level of the product member. If its admin, the member is an
   * authorized user of the company. If its customer, the member has a valid
   * membership to any product on the company. If its no_access, the member does not
   * have access to the product.
   */
  access_level: Shared.AccessLevel;

  /**
   * The company for the member.
   */
  company: MemberRetrieveResponse.Company;

  /**
   * The member's token balance for this company
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
 * An object representing a connection between a creator and a user/company_buyer.
 * This type should only be made visible to the user/company_buyer who is a part of
 * the connection.
 */
export interface MemberListResponse {
  /**
   * The unique identifier for the company member.
   */
  id: string;

  /**
   * The access level of the product member. If its admin, the member is an
   * authorized user of the company. If its customer, the member has a valid
   * membership to any product on the company. If its no_access, the member does not
   * have access to the product.
   */
  access_level: Shared.AccessLevel;

  /**
   * The member's token balance for this company
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
   * The access level a given user (or company) has to a product or company.
   */
  access_level?: Shared.AccessLevel | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The ID of the company to list members for
   */
  company_id?: string | null;

  /**
   * The minimum creation date to filter by
   */
  created_after?: string | null;

  /**
   * The maximum creation date to filter by
   */
  created_before?: string | null;

  /**
   * The direction of the sort.
   */
  direction?: Shared.Direction | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The most recent actions to filter the members by
   */
  most_recent_actions?: Array<Shared.MemberMostRecentActions> | null;

  /**
   * Which columns can be used to sort.
   */
  order?: 'id' | 'usd_total_spent' | 'created_at' | 'joined_at' | 'most_recent_action' | null;

  /**
   * The plan IDs to filter the members by
   */
  plan_ids?: Array<string> | null;

  /**
   * The product IDs to filter the members by
   */
  product_ids?: Array<string> | null;

  /**
   * The promo code IDs to filter the members by
   */
  promo_code_ids?: Array<string> | null;

  /**
   * The name, username, or email to filter the members by. The email filter will
   * only apply if the current actor has the `member:email:read` permission.
   */
  query?: string | null;

  /**
   * The statuses to filter the members by
   */
  statuses?: Array<Shared.MemberStatuses> | null;

  /**
   * The user IDs to filter the members by
   */
  user_ids?: Array<string> | null;
}

export declare namespace Members {
  export {
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberListResponse as MemberListResponse,
    type MemberListResponsesCursorPage as MemberListResponsesCursorPage,
    type MemberListParams as MemberListParams,
  };
}
