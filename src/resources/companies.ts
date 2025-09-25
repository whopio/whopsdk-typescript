// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Retrieves an company by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CompanyRetrieveResponse> {
    return this._client.get(path`/companies/${id}`, options);
  }
}

/**
 * An object representing a (sanitized) company.
 */
export interface CompanyRetrieveResponse {
  /**
   * The ID (tag) of the company.
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
   * When the company was created (signed up)
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
   * The number of members in the company.
   */
  member_count: number;

  /**
   * The user who owns this company
   */
  owner_user: CompanyRetrieveResponse.OwnerUser;

  /**
   * The number of reviews that have been published for the company.
   */
  published_reviews_count: number;

  /**
   * The slug/route of the company on the Whop site.
   */
  route: string;

  /**
   * The social media accounts of the company
   */
  social_links: Array<CompanyRetrieveResponse.SocialLink>;

  /**
   * The title of the company.
   */
  title: string;

  /**
   * The time the company was last updated.
   */
  updated_at: number;

  /**
   * If the company is Whop Verified
   */
  verified: boolean;
}

export namespace CompanyRetrieveResponse {
  /**
   * The user who owns this company
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

  /**
   * A social link attached to a resource on the site.
   */
  export interface SocialLink {
    /**
     * The ID
     */
    id: string;

    /**
     * The URL
     */
    url: string;

    /**
     * The website
     */
    website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | null;
  }
}

export declare namespace Companies {
  export { type CompanyRetrieveResponse as CompanyRetrieveResponse };
}
