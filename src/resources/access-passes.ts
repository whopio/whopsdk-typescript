// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessPasses extends APIResource {
  /**
   * Retrieves an access pass by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccessPassRetrieveResponse> {
    return this._client.get(path`/access_passes/${id}`, options);
  }

  /**
   * Lists access passes for a company
   */
  list(query: AccessPassListParams, options?: RequestOptions): APIPromise<AccessPassListResponse> {
    return this._client.get('/access_passes', { query, ...options });
  }
}

/**
 * An object representing a (sanitized) access pass.
 */
export interface AccessPassRetrieveResponse {
  /**
   * The internal ID of the public access pass.
   */
  id: string;

  /**
   * The type of business the company is.
   */
  business_type:
    | 'education_program'
    | 'coaching'
    | 'software'
    | 'paid_group'
    | 'newsletter'
    | 'agency'
    | 'physical_products'
    | 'brick_and_mortar'
    | 'events'
    | 'coaching_and_courses'
    | 'other'
    | 'saas'
    | 'course'
    | 'community'
    | null;

  /**
   * When the access pass was created.
   */
  created_at: number;

  /**
   * The specific industry the company operates in.
   */
  industry_type:
    | 'trading'
    | 'sports_betting'
    | 'reselling'
    | 'fitness'
    | 'amazon_fba'
    | 'real_estate'
    | 'kindle_book_publishing'
    | 'dating'
    | 'agencies'
    | 'health_and_wellness'
    | 'social_media'
    | 'sales'
    | 'business'
    | 'ecommerce'
    | 'video_games'
    | 'home_services'
    | 'ai'
    | 'public_speaking'
    | 'personal_finance'
    | 'careers'
    | 'travel'
    | 'clipping'
    | 'spirituality'
    | 'vas'
    | 'personal_development'
    | 'software'
    | 'other'
    | 'marketing_agency'
    | 'sales_agency'
    | 'ai_agency'
    | 'design_agency'
    | 'coaching_agency'
    | 'development_agency'
    | 'recruiting_agency'
    | 'customer_support_agency'
    | 'clipping_agency'
    | 'clothing'
    | 'supplements'
    | 'beauty_and_personal_care'
    | 'fitness_gear'
    | 'accessories'
    | 'home_goods'
    | 'electronics_and_gadgets'
    | 'food_and_beverages'
    | 'gym'
    | 'restaurant'
    | 'retail_store'
    | 'coffee_shop'
    | 'salon_spa'
    | 'medical_dentist_office'
    | 'hotel_lodging'
    | 'auto_repair_shop'
    | 'masterminds'
    | 'webinars'
    | 'bootcamps'
    | 'convention'
    | 'concerts'
    | 'meetups'
    | 'parties'
    | null;

  /**
   * The number of active users for this access pass.
   */
  member_count: number;

  /**
   * The user that owns the access pass (company owner).
   */
  owner_user: AccessPassRetrieveResponse.OwnerUser;

  /**
   * The number of reviews that have been published for the access pass.
   */
  published_reviews_count: number;

  /**
   * The route of the access pass.
   */
  route: string;

  /**
   * The title of the access pass. Use for Whop 4.0.
   */
  title: string;

  /**
   * When the access pass was updated.
   */
  updated_at: number;

  /**
   * Whether this product is Whop verified.
   */
  verified: boolean;
}

export namespace AccessPassRetrieveResponse {
  /**
   * The user that owns the access pass (company owner).
   */
  export interface OwnerUser {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * The connection type for PublicAccessPass.
 */
export interface AccessPassListResponse {
  /**
   * A list of nodes.
   */
  data: Array<AccessPassListResponse.Data | null> | null;

  /**
   * Information to aid in pagination.
   */
  page_info: AccessPassListResponse.PageInfo;
}

export namespace AccessPassListResponse {
  /**
   * An object representing a (sanitized) access pass.
   */
  export interface Data {
    /**
     * The internal ID of the public access pass.
     */
    id: string;

    /**
     * The type of business the company is.
     */
    business_type:
      | 'education_program'
      | 'coaching'
      | 'software'
      | 'paid_group'
      | 'newsletter'
      | 'agency'
      | 'physical_products'
      | 'brick_and_mortar'
      | 'events'
      | 'coaching_and_courses'
      | 'other'
      | 'saas'
      | 'course'
      | 'community'
      | null;

    /**
     * When the access pass was created.
     */
    created_at: number;

    /**
     * The specific industry the company operates in.
     */
    industry_type:
      | 'trading'
      | 'sports_betting'
      | 'reselling'
      | 'fitness'
      | 'amazon_fba'
      | 'real_estate'
      | 'kindle_book_publishing'
      | 'dating'
      | 'agencies'
      | 'health_and_wellness'
      | 'social_media'
      | 'sales'
      | 'business'
      | 'ecommerce'
      | 'video_games'
      | 'home_services'
      | 'ai'
      | 'public_speaking'
      | 'personal_finance'
      | 'careers'
      | 'travel'
      | 'clipping'
      | 'spirituality'
      | 'vas'
      | 'personal_development'
      | 'software'
      | 'other'
      | 'marketing_agency'
      | 'sales_agency'
      | 'ai_agency'
      | 'design_agency'
      | 'coaching_agency'
      | 'development_agency'
      | 'recruiting_agency'
      | 'customer_support_agency'
      | 'clipping_agency'
      | 'clothing'
      | 'supplements'
      | 'beauty_and_personal_care'
      | 'fitness_gear'
      | 'accessories'
      | 'home_goods'
      | 'electronics_and_gadgets'
      | 'food_and_beverages'
      | 'gym'
      | 'restaurant'
      | 'retail_store'
      | 'coffee_shop'
      | 'salon_spa'
      | 'medical_dentist_office'
      | 'hotel_lodging'
      | 'auto_repair_shop'
      | 'masterminds'
      | 'webinars'
      | 'bootcamps'
      | 'convention'
      | 'concerts'
      | 'meetups'
      | 'parties'
      | null;

    /**
     * The number of active users for this access pass.
     */
    member_count: number;

    /**
     * The number of reviews that have been published for the access pass.
     */
    published_reviews_count: number;

    /**
     * The route of the access pass.
     */
    route: string;

    /**
     * The title of the access pass. Use for Whop 4.0.
     */
    title: string;

    /**
     * When the access pass was updated.
     */
    updated_at: number;

    /**
     * Whether this product is Whop verified.
     */
    verified: boolean;
  }

  /**
   * Information to aid in pagination.
   */
  export interface PageInfo {
    /**
     * When paginating forwards, the cursor to continue.
     */
    end_cursor: string | null;

    /**
     * When paginating forwards, are there more items?
     */
    has_next_page: boolean;

    /**
     * When paginating backwards, are there more items?
     */
    has_previous_page: boolean;

    /**
     * When paginating backwards, the cursor to continue.
     */
    start_cursor: string | null;
  }
}

export interface AccessPassListParams {
  /**
   * The ID of the company to filter access passes by
   */
  company_id: string;

  /**
   * The type of access passes to filter by
   */
  access_pass_type?: 'regular' | 'app' | 'experience_upsell' | 'api_only' | null;

  /**
   * Returns the elements in the list that come after the specified cursor.
   */
  after?: string | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace AccessPasses {
  export {
    type AccessPassRetrieveResponse as AccessPassRetrieveResponse,
    type AccessPassListResponse as AccessPassListResponse,
    type AccessPassListParams as AccessPassListParams,
  };
}
