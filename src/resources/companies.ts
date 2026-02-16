// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create a new company. Pass parent_company_id to create a connected account under
   * a platform, or omit it to create a company for the current user.
   *
   * Required permissions:
   *
   * - `company:create`
   * - `company:basic:read`
   */
  create(body: CompanyCreateParams, options?: RequestOptions): APIPromise<Shared.Company> {
    return this._client.post('/companies', { body, ...options });
  }

  /**
   * Retrieves the details of an existing company.
   *
   * Required permissions:
   *
   * - `company:basic:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Company> {
    return this._client.get(path`/companies/${id}`, options);
  }

  /**
   * Update a company's title, description, logo, and other settings.
   *
   * Required permissions:
   *
   * - `company:update`
   * - `company:basic:read`
   */
  update(
    id: string,
    body: CompanyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Company> {
    return this._client.patch(path`/companies/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of companies. When parent_company_id is provided, lists
   * connected accounts under that platform. When omitted, lists companies the
   * current user has access to.
   *
   * Required permissions:
   *
   * - `company:basic:read`
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompanyListResponsesCursorPage, CompanyListResponse> {
    return this._client.getAPIList('/companies', CursorPage<CompanyListResponse>, { query, ...options });
  }
}

export type CompanyListResponsesCursorPage = CursorPage<CompanyListResponse>;

/**
 * A company is a seller on Whop. Companies own products, manage members, and
 * receive payouts.
 */
export interface CompanyListResponse {
  /**
   * The unique identifier for the company.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: Shared.BusinessTypes | null;

  /**
   * The datetime the company was created.
   */
  created_at: string;

  /**
   * A promotional pitch written by the company creator, displayed to potential
   * customers on the store page.
   */
  description: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: Shared.IndustryTypes | null;

  /**
   * The company's logo.
   */
  logo: CompanyListResponse.Logo | null;

  /**
   * The total number of users who currently hold active memberships across all of
   * this company's products.
   */
  member_count: number;

  /**
   * A key-value JSON object of custom metadata for this company, managed by the
   * platform that created the account.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The user who owns and has full administrative control over this company.
   */
  owner_user: CompanyListResponse.OwnerUser;

  /**
   * The total number of published customer reviews across all products for this
   * company.
   */
  published_reviews_count: number;

  /**
   * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
   */
  route: string;

  /**
   * Whether Whop sends transactional emails (receipts, updates) to customers on
   * behalf of this company.
   */
  send_customer_emails: boolean;

  /**
   * The display name of the company shown to customers.
   */
  title: string;

  /**
   * The datetime the company was last updated.
   */
  updated_at: string;

  /**
   * Whether this company has been verified by Whop's trust and safety team.
   */
  verified: boolean;
}

export namespace CompanyListResponse {
  /**
   * The company's logo.
   */
  export interface Logo {
    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The user who owns and has full administrative control over this company.
   */
  export interface OwnerUser {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

export interface CompanyCreateParams {
  /**
   * The display name of the company shown to customers.
   */
  title: string;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * A promotional pitch displayed to potential customers on the company's store
   * page.
   */
  description?: string | null;

  /**
   * The email address of the user who will own the connected account. Required when
   * parent_company_id is provided.
   */
  email?: string | null;

  /**
   * The different industry groups a company can be in.
   */
  industry_group?:
    | 'academic_and_test_prep'
    | 'accessories'
    | 'agriculture_and_farming'
    | 'ai_and_automation_agencies'
    | 'ai_and_automation_software'
    | 'arts_and_crafts'
    | 'automotive'
    | 'b2b_and_professional_marketplaces'
    | 'baby_and_kids'
    | 'beauty_and_personal_care'
    | 'beauty_and_wellness'
    | 'business_and_entrepreneurship'
    | 'business_and_money_groups'
    | 'career_and_professional'
    | 'charity_and_cause_events'
    | 'class_action_settlement'
    | 'clothing_and_apparel'
    | 'communication_and_messaging_software'
    | 'community_and_education_software'
    | 'consulting'
    | 'content_and_clipping_agencies'
    | 'creative_and_content_creation'
    | 'creative_and_content_groups'
    | 'creative_and_education'
    | 'creative_gigs'
    | 'creative_services'
    | 'customer_support_agencies'
    | 'dating_and_relationships'
    | 'delivery_and_logistics'
    | 'dental_and_vision'
    | 'dermatology_and_skin'
    | 'design_and_creative_agencies'
    | 'developer_and_technical_tools'
    | 'development_agencies'
    | 'digital_and_education_marketplaces'
    | 'digital_goods_and_accounts'
    | 'e_commerce_software'
    | 'education_and_business_events'
    | 'education_and_childcare'
    | 'electronics_and_gadgets'
    | 'entertainment_and_leisure'
    | 'entertainment_events'
    | 'family_and_community_events'
    | 'finance_and_investing'
    | 'fitness_and_athletics'
    | 'fitness_and_health_groups'
    | 'fitness_and_recreation'
    | 'fitness_equipment_and_gear'
    | 'food_and_beverage'
    | 'food_and_beverages'
    | 'food_and_hospitality_marketplaces'
    | 'funeral_and_death_care'
    | 'gaming_and_entertainment_software'
    | 'gaming_groups'
    | 'genetic_and_specialized'
    | 'government_and_public'
    | 'health_and_wellness'
    | 'health_and_wellness_services'
    | 'healthcare'
    | 'healthcare_and_wellness_software'
    | 'hobbies_and_lifestyle'
    | 'hobby_and_interest_groups'
    | 'home_and_living'
    | 'home_and_trade_services'
    | 'home_and_trade_storefronts'
    | 'home_improvement_and_tools'
    | 'home_services_gigs'
    | 'hospitality_and_lodging'
    | 'industrial_and_manufacturing'
    | 'industry_specific_software'
    | 'language_and_communication'
    | 'legal_and_compliance'
    | 'lifestyle_and_culture'
    | 'lifestyle_and_personal_growth_groups'
    | 'lifestyle_and_wellness_events'
    | 'logistics_and_transportation_services'
    | 'marketing_agencies'
    | 'marketing_and_advertising'
    | 'marketing_and_sales_software'
    | 'media_and_publishing_companies'
    | 'mental_health_and_behavioral'
    | 'miscellaneous'
    | 'music_and_performing_arts'
    | 'news_and_politics'
    | 'nonprofit_and_charity'
    | 'office_and_business_supplies'
    | 'outdoor_and_sports'
    | 'personal_development'
    | 'personal_finance'
    | 'personal_services'
    | 'pet_services'
    | 'pets_and_animals'
    | 'primary_and_general_care'
    | 'product_marketplaces'
    | 'productivity_and_business_ops'
    | 'professional_gigs'
    | 'professional_services'
    | 'professional_services_storefront'
    | 'publishing_and_info_products'
    | 'real_estate'
    | 'real_estate_software'
    | 'recruiting_and_staffing'
    | 'rehabilitation_and_therapy'
    | 'rental_marketplaces'
    | 'retail'
    | 'sales_agencies'
    | 'sales_and_revenue'
    | 'security_and_investigations'
    | 'security_and_privacy_software'
    | 'service_marketplaces'
    | 'sleep_and_chronic_conditions'
    | 'social_and_networking_events'
    | 'specialized_gigs'
    | 'specialty_medical_care'
    | 'spirituality_and_mindfulness'
    | 'spirituality_and_personal_growth'
    | 'sports_and_fitness_events'
    | 'sports_betting_and_gambling'
    | 'sports_betting_groups'
    | 'supplements_and_nutrition'
    | 'sustainability_and_eco_products'
    | 'task_and_errands'
    | 'tech_and_ai'
    | 'tech_and_dev_groups'
    | 'tech_and_development'
    | 'trading_and_finance_software'
    | 'trading_and_investing'
    | 'trading_and_investing_groups'
    | 'transportation'
    | 'veterinary'
    | 'video_games_and_esports'
    | 'weight_and_metabolic_health'
    | 'wellness_and_alternative'
    | 'womens_and_mens_health'
    | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
   */
  logo?: CompanyCreateParams.Logo | null;

  /**
   * A key-value JSON object of custom metadata to store on the company.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The unique identifier of the parent platform company. When provided, creates a
   * connected account under that platform. Omit to create a company for the current
   * user.
   */
  parent_company_id?: string | null;

  /**
   * Whether Whop sends transactional emails to customers on behalf of this company.
   * Only applies when creating a connected account.
   */
  send_customer_emails?: boolean | null;
}

export namespace CompanyCreateParams {
  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
   */
  export interface Logo {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CompanyUpdateParams {
  /**
   * The company's banner image. Accepts PNG or JPEG format.
   */
  banner_image?: CompanyUpdateParams.BannerImage | null;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * A promotional pitch displayed to potential customers on the company's store
   * page.
   */
  description?: string | null;

  /**
   * The different industry groups a company can be in.
   */
  industry_group?:
    | 'academic_and_test_prep'
    | 'accessories'
    | 'agriculture_and_farming'
    | 'ai_and_automation_agencies'
    | 'ai_and_automation_software'
    | 'arts_and_crafts'
    | 'automotive'
    | 'b2b_and_professional_marketplaces'
    | 'baby_and_kids'
    | 'beauty_and_personal_care'
    | 'beauty_and_wellness'
    | 'business_and_entrepreneurship'
    | 'business_and_money_groups'
    | 'career_and_professional'
    | 'charity_and_cause_events'
    | 'class_action_settlement'
    | 'clothing_and_apparel'
    | 'communication_and_messaging_software'
    | 'community_and_education_software'
    | 'consulting'
    | 'content_and_clipping_agencies'
    | 'creative_and_content_creation'
    | 'creative_and_content_groups'
    | 'creative_and_education'
    | 'creative_gigs'
    | 'creative_services'
    | 'customer_support_agencies'
    | 'dating_and_relationships'
    | 'delivery_and_logistics'
    | 'dental_and_vision'
    | 'dermatology_and_skin'
    | 'design_and_creative_agencies'
    | 'developer_and_technical_tools'
    | 'development_agencies'
    | 'digital_and_education_marketplaces'
    | 'digital_goods_and_accounts'
    | 'e_commerce_software'
    | 'education_and_business_events'
    | 'education_and_childcare'
    | 'electronics_and_gadgets'
    | 'entertainment_and_leisure'
    | 'entertainment_events'
    | 'family_and_community_events'
    | 'finance_and_investing'
    | 'fitness_and_athletics'
    | 'fitness_and_health_groups'
    | 'fitness_and_recreation'
    | 'fitness_equipment_and_gear'
    | 'food_and_beverage'
    | 'food_and_beverages'
    | 'food_and_hospitality_marketplaces'
    | 'funeral_and_death_care'
    | 'gaming_and_entertainment_software'
    | 'gaming_groups'
    | 'genetic_and_specialized'
    | 'government_and_public'
    | 'health_and_wellness'
    | 'health_and_wellness_services'
    | 'healthcare'
    | 'healthcare_and_wellness_software'
    | 'hobbies_and_lifestyle'
    | 'hobby_and_interest_groups'
    | 'home_and_living'
    | 'home_and_trade_services'
    | 'home_and_trade_storefronts'
    | 'home_improvement_and_tools'
    | 'home_services_gigs'
    | 'hospitality_and_lodging'
    | 'industrial_and_manufacturing'
    | 'industry_specific_software'
    | 'language_and_communication'
    | 'legal_and_compliance'
    | 'lifestyle_and_culture'
    | 'lifestyle_and_personal_growth_groups'
    | 'lifestyle_and_wellness_events'
    | 'logistics_and_transportation_services'
    | 'marketing_agencies'
    | 'marketing_and_advertising'
    | 'marketing_and_sales_software'
    | 'media_and_publishing_companies'
    | 'mental_health_and_behavioral'
    | 'miscellaneous'
    | 'music_and_performing_arts'
    | 'news_and_politics'
    | 'nonprofit_and_charity'
    | 'office_and_business_supplies'
    | 'outdoor_and_sports'
    | 'personal_development'
    | 'personal_finance'
    | 'personal_services'
    | 'pet_services'
    | 'pets_and_animals'
    | 'primary_and_general_care'
    | 'product_marketplaces'
    | 'productivity_and_business_ops'
    | 'professional_gigs'
    | 'professional_services'
    | 'professional_services_storefront'
    | 'publishing_and_info_products'
    | 'real_estate'
    | 'real_estate_software'
    | 'recruiting_and_staffing'
    | 'rehabilitation_and_therapy'
    | 'rental_marketplaces'
    | 'retail'
    | 'sales_agencies'
    | 'sales_and_revenue'
    | 'security_and_investigations'
    | 'security_and_privacy_software'
    | 'service_marketplaces'
    | 'sleep_and_chronic_conditions'
    | 'social_and_networking_events'
    | 'specialized_gigs'
    | 'specialty_medical_care'
    | 'spirituality_and_mindfulness'
    | 'spirituality_and_personal_growth'
    | 'sports_and_fitness_events'
    | 'sports_betting_and_gambling'
    | 'sports_betting_groups'
    | 'supplements_and_nutrition'
    | 'sustainability_and_eco_products'
    | 'task_and_errands'
    | 'tech_and_ai'
    | 'tech_and_dev_groups'
    | 'tech_and_development'
    | 'trading_and_finance_software'
    | 'trading_and_investing'
    | 'trading_and_investing_groups'
    | 'transportation'
    | 'veterinary'
    | 'video_games_and_esports'
    | 'weight_and_metabolic_health'
    | 'wellness_and_alternative'
    | 'womens_and_mens_health'
    | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type?: Shared.IndustryTypes | null;

  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
   */
  logo?: CompanyUpdateParams.Logo | null;

  /**
   * Whether Whop sends transactional emails (receipts, renewals, cancelations) to
   * customers on behalf of this company.
   */
  send_customer_emails?: boolean | null;

  /**
   * The display name of the company shown to customers.
   */
  title?: string | null;
}

export namespace CompanyUpdateParams {
  /**
   * The company's banner image. Accepts PNG or JPEG format.
   */
  export interface BannerImage {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The company's logo image. Accepts PNG, JPEG, or GIF format.
   */
  export interface Logo {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CompanyListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return companies created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return companies created before this timestamp.
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
   * The unique identifier of the parent platform company. When provided, lists
   * connected accounts under that platform. Omit to list the current user's own
   * companies.
   */
  parent_company_id?: string | null;
}

export declare namespace Companies {
  export {
    type CompanyListResponse as CompanyListResponse,
    type CompanyListResponsesCursorPage as CompanyListResponsesCursorPage,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
  };
}
