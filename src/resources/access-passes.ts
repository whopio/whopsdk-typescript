// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessPasses extends APIResource {
  /**
   * Retrieves an access pass by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.AccessPass> {
    return this._client.get(path`/access_passes/${id}`, options);
  }

  /**
   * Lists access passes for a company
   */
  list(
    query: AccessPassListParams,
    options?: RequestOptions,
  ): PagePromise<AccessPassListItemsCursorPage, Shared.AccessPassListItem | null> {
    return this._client.getAPIList('/access_passes', CursorPage<Shared.AccessPassListItem | null>, {
      query,
      ...options,
    });
  }
}

export type AccessPassListItemsCursorPage = CursorPage<Shared.AccessPassListItem | null>;

/**
 * The different business types a company can be.
 */
export type BusinessTypes =
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
 * The different industry types a company can be in.
 */
export type IndustryTypes =
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

export interface AccessPassListParams extends CursorPageParams {
  /**
   * The ID of the company to filter access passes by
   */
  company_id: string;

  /**
   * The type of access passes to filter by
   */
  access_pass_type?: 'regular' | 'app' | 'experience_upsell' | 'api_only' | null;

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
    type BusinessTypes as BusinessTypes,
    type IndustryTypes as IndustryTypes,
    type AccessPassListItemsCursorPage as AccessPassListItemsCursorPage,
    type AccessPassListParams as AccessPassListParams,
  };
}
