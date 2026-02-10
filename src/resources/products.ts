// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ProductListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Create a new product for a company. The product serves as the top-level
   * container for plans and experiences.
   *
   * Required permissions:
   *
   * - `access_pass:create`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const product = await client.products.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   title: 'title',
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Retrieves the details of an existing product.
   *
   * Required permissions:
   *
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const product = await client.products.retrieve(
   *   'prod_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Product> {
    return this._client.get(path`/products/${id}`, options);
  }

  /**
   * Update a product's title, description, visibility, and other settings.
   *
   * Required permissions:
   *
   * - `access_pass:update`
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * const product = await client.products.update(
   *   'prod_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: ProductUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.Product> {
    return this._client.patch(path`/products/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of products belonging to a company, with optional
   * filtering by type, visibility, and creation date.
   *
   * Required permissions:
   *
   * - `access_pass:basic:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const productListItem of client.products.list({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ProductListParams,
    options?: RequestOptions,
  ): PagePromise<ProductListItemsCursorPage, Shared.ProductListItem> {
    return this._client.getAPIList('/products', CursorPage<Shared.ProductListItem>, { query, ...options });
  }

  /**
   * Permanently delete a product and remove it from the company's catalog.
   *
   * Required permissions:
   *
   * - `access_pass:delete`
   *
   * @example
   * ```ts
   * const product = await client.products.delete(
   *   'prod_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/products/${id}`, options);
  }
}

/**
 * Represents `true` or `false` values.
 */
export type ProductDeleteResponse = boolean;

export interface ProductCreateParams {
  /**
   * The unique identifier of the company to create this product for.
   */
  company_id: string;

  /**
   * The display name of the product. Maximum 40 characters.
   */
  title: string;

  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * Whether the checkout flow collects a shipping address from the customer.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The different types of custom CTAs that can be selected.
   */
  custom_cta?: Shared.CustomCta | null;

  /**
   * A URL that the call-to-action button links to instead of the default checkout
   * flow.
   */
  custom_cta_url?: string | null;

  /**
   * A custom text label that appears on the customer's bank statement. Must be 5-22
   * characters, contain at least one letter, and not contain <, >, \, ', or "
   * characters.
   */
  custom_statement_descriptor?: string | null;

  /**
   * A written description of the product displayed on its product page.
   */
  description?: string | null;

  /**
   * The unique identifiers of experiences to connect to this product.
   */
  experience_ids?: Array<string> | null;

  /**
   * The commission rate as a percentage that affiliates earn through the global
   * affiliate program.
   */
  global_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  global_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * A short marketing headline displayed prominently on the product page.
   */
  headline?: string | null;

  /**
   * The different industry groups a company can be in.
   */
  industry_group?:
    | 'academic_and_test_prep'
    | 'accessories'
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
    | 'home_services_gigs'
    | 'hospitality_and_lodging'
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
   * The commission rate as a percentage that members earn through the member
   * affiliate program.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  member_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * Configuration for an automatically generated plan to attach to this product.
   */
  plan_options?: ProductCreateParams.PlanOptions | null;

  /**
   * Key features and benefits to display on the product page.
   */
  product_highlights?: Array<ProductCreateParams.ProductHighlight> | null;

  /**
   * The unique identifier of the tax classification code to apply to this product.
   */
  product_tax_code_id?: string | null;

  /**
   * A URL to redirect the customer to after completing a purchase.
   */
  redirect_purchase_url?: string | null;

  /**
   * The URL slug for the product's public link.
   */
  route?: string | null;

  /**
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace ProductCreateParams {
  /**
   * Configuration for an automatically generated plan to attach to this product.
   */
  export interface PlanOptions {
    /**
     * The available currencies on the platform
     */
    base_currency?: Shared.Currency | null;

    /**
     * The interval at which the plan charges (renewal plans).
     */
    billing_period?: number | null;

    /**
     * An array of custom field objects.
     */
    custom_fields?: Array<PlanOptions.CustomField> | null;

    /**
     * An additional amount charged upon first purchase. Provided as a number in the
     * specified currency. Eg: 10.43 for $10.43 USD.
     */
    initial_price?: number | null;

    /**
     * The type of plan that can be attached to a product
     */
    plan_type?: Shared.PlanType | null;

    /**
     * The methods of how a plan can be released.
     */
    release_method?: Shared.ReleaseMethod | null;

    /**
     * The amount the customer is charged every billing period. Provided as a number in
     * the specified currency. Eg: 10.43 for $10.43 USD.
     */
    renewal_price?: number | null;

    /**
     * Visibility of a resource
     */
    visibility?: Shared.Visibility | null;
  }

  export namespace PlanOptions {
    export interface CustomField {
      /**
       * The type of the custom field.
       */
      field_type: 'text';

      /**
       * The name of the custom field.
       */
      name: string;

      /**
       * The ID of the custom field (if being updated)
       */
      id?: string | null;

      /**
       * The order of the field.
       */
      order?: number | null;

      /**
       * The placeholder value of the field.
       */
      placeholder?: string | null;

      /**
       * Whether or not the field is required.
       */
      required?: boolean | null;
    }
  }

  /**
   * Input for creating a product highlight
   */
  export interface ProductHighlight {
    /**
     * Text to display to describe the product highlight (max length 250 for
     * qualification or benefits, 170 for who this is for, 140 for pricing features).
     */
    content: string;

    /**
     * The type of this highlight.
     */
    highlight_type: 'qualification' | 'benefit' | 'who_this_is_for' | 'pricing_feature';

    /**
     * The title of the product highlight, if applicable.
     */
    title?: string | null;
  }
}

export interface ProductUpdateParams {
  /**
   * The different business types a company can be.
   */
  business_type?: Shared.BusinessTypes | null;

  /**
   * Whether the checkout flow collects a shipping address from the customer.
   */
  collect_shipping_address?: boolean | null;

  /**
   * The different types of custom CTAs that can be selected.
   */
  custom_cta?: Shared.CustomCta | null;

  /**
   * A URL that the call-to-action button links to instead of the default checkout
   * flow.
   */
  custom_cta_url?: string | null;

  /**
   * A custom text label that appears on the customer's bank statement. Must be 5-22
   * characters, contain at least one letter, and not contain <, >, \, ', or "
   * characters.
   */
  custom_statement_descriptor?: string | null;

  /**
   * A written description of the product displayed on its product page.
   */
  description?: string | null;

  /**
   * The commission rate as a percentage that affiliates earn through the global
   * affiliate program.
   */
  global_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  global_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * A short marketing headline displayed prominently on the product page.
   */
  headline?: string | null;

  /**
   * The different industry groups a company can be in.
   */
  industry_group?:
    | 'academic_and_test_prep'
    | 'accessories'
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
    | 'home_services_gigs'
    | 'hospitality_and_lodging'
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
   * The commission rate as a percentage that members earn through the member
   * affiliate program.
   */
  member_affiliate_percentage?: number | null;

  /**
   * The different statuses of the global affiliate program for a product.
   */
  member_affiliate_status?: Shared.GlobalAffiliateStatus | null;

  /**
   * The unique identifier of the tax classification code to apply to this product.
   */
  product_tax_code_id?: string | null;

  /**
   * A URL to redirect the customer to after completing a purchase.
   */
  redirect_purchase_url?: string | null;

  /**
   * The URL slug for the product's public link.
   */
  route?: string | null;

  /**
   * Layout and display configuration for this product on the company's store page.
   */
  store_page_config?: ProductUpdateParams.StorePageConfig | null;

  /**
   * The display name of the product. Maximum 40 characters.
   */
  title?: string | null;

  /**
   * Visibility of a resource
   */
  visibility?: Shared.Visibility | null;
}

export namespace ProductUpdateParams {
  /**
   * Layout and display configuration for this product on the company's store page.
   */
  export interface StorePageConfig {
    /**
     * Custom call-to-action text for the product's store page.
     */
    custom_cta?: string | null;

    /**
     * Whether or not to show the price on the product's store page.
     */
    show_price?: boolean | null;
  }
}

export interface ProductListParams extends CursorPageParams {
  /**
   * The unique identifier of the company to list products for.
   */
  company_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Only return products created after this timestamp.
   */
  created_after?: string | null;

  /**
   * Only return products created before this timestamp.
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
   * The ways a relation of AccessPasses can be ordered
   */
  order?: 'active_memberships_count' | 'created_at' | 'usd_gmv' | 'usd_gmv_30_days' | null;

  /**
   * Filter to only products matching these type classifications.
   */
  product_types?: Array<Shared.AccessPassType> | null;

  /**
   * Filter to only products matching these visibility states.
   */
  visibilities?: Array<Shared.VisibilityFilter> | null;
}

export declare namespace Products {
  export {
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}

export { type ProductListItemsCursorPage };
