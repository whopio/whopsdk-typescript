// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import { CursorPage } from '../core/pagination';

/**
 * The different types an access pass can be.
 */
export type AccessPassType = 'regular' | 'app' | 'experience_upsell' | 'api_only';

/**
 * An object representing an app
 */
export interface App {
  /**
   * The ID of the app
   */
  id: string;

  /**
   * The API key for the app
   */
  api_key: App.APIKey | null;

  /**
   * The base url of the app
   */
  base_url: string | null;

  /**
   * The company that owns the app
   */
  company: App.Company;

  /**
   * The creator of the app
   */
  creator: App.Creator;

  /**
   * The path part for a specific view of the app. This is the template part of the
   * url after the base domain. Eg: /experiences/[experienceId]
   */
  dashboard_path: string | null;

  /**
   * The description of the app
   */
  description: string | null;

  /**
   * The path part for a specific view of the app. This is the template part of the
   * url after the base domain. Eg: /experiences/[experienceId]
   */
  discover_path: string | null;

  /**
   * The unique part of the proxied domain for this app. Used to generate the base
   * url used to display the app inside the whop platform. Refers to the id part in
   * the final url: https://{domain_id}.apps.whop.com
   */
  domain_id: string;

  /**
   * The path part for a specific view of the app. This is the template part of the
   * url after the base domain. Eg: /experiences/[experienceId]
   */
  experience_path: string | null;

  /**
   * The name of the app
   */
  name: string;

  /**
   * The set of permissions that an app requests to be granted when a user installs
   * the app.
   */
  requested_permissions: Array<App.RequestedPermission>;

  /**
   * A collection of stats for the app.
   */
  stats: App.Stats | null;

  /**
   * If the status is live, the app is visible on Whop discovery. In order to be
   * live, you need to set the name, icon, and description. Being unlisted or hidden
   * means it's not visible on Whop but you can still install the app via direct
   * link. To remove the app from whop discovery, you should set the status to
   * unlisted.
   */
  status: AppStatuses;

  /**
   * Whether this app has been verified by Whop. Verified apps are endorsed by whop
   * and are shown in the 'featured apps' section of the app store.
   */
  verified: boolean;
}

export namespace App {
  /**
   * The API key for the app
   */
  export interface APIKey {
    /**
     * The ID of this API key
     */
    id: string;

    /**
     * This is the API key used to authenticate requests
     */
    token: string;

    /**
     * When this API key was created at
     */
    created_at: number;
  }

  /**
   * The company that owns the app
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * The creator of the app
   */
  export interface Creator {
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
   * A permission that the app requests from the admin of a company during the oauth
   * flow.
   */
  export interface RequestedPermission {
    /**
     * Whether the action is required for the app to function.
     */
    is_required: boolean;

    /**
     * The reason for requesting the action.
     */
    justification: string;

    /**
     * The action that the app will request off of users when a user installs the app.
     */
    permission_action: RequestedPermission.PermissionAction;
  }

  export namespace RequestedPermission {
    /**
     * The action that the app will request off of users when a user installs the app.
     */
    export interface PermissionAction {
      /**
       * The identifier of the action.
       */
      action: string;

      /**
       * The human readable name of the action.
       */
      name: string;
    }
  }

  /**
   * A collection of stats for the app.
   */
  export interface Stats {
    /**
     * This is the number of users that have spent time in this app in the last 24
     * hours.
     */
    dau: number;

    /**
     * This is the number of users that have spent time in this app in the last 28
     * days.
     */
    mau: number;

    /**
     * This how much time, in seconds, users have spent in this app in the last 24
     * hours.
     */
    time_spent_last24_hours: number;

    /**
     * This is the number of users that have spent time in this app in the last 7 days.
     */
    wau: number;
  }
}

/**
 * An App Build object representing a build of an application
 */
export interface AppBuild {
  /**
   * The ID of the app build. It will look like apbu_xxxxx.
   */
  id: string;

  /**
   * This is generated by the client and used to verify the integrity of the file
   * that is submitted. It is a SHA256 hash of the app build file.
   */
  checksum: string;

  /**
   * When this app build was created.
   */
  created_at: number;

  /**
   * The URL to download the app build .zip file.
   */
  file_url: string;

  /**
   * Whether this app build is currently being used in production.
   */
  is_production: boolean;

  /**
   * The platform of the app build (ios, android, web)
   */
  platform: AppBuildPlatforms;

  /**
   * The review message for the app build, if any. This is populated when the build
   * is rejected and there is a reason specified by the reviewer.
   */
  review_message: string | null;

  /**
   * The status of the app build (draft, approved, rejected, pending, etc)
   */
  status: AppBuildStatuses;

  /**
   * The supported app view types for the app build. These are the views that the
   * developer has specified that this build supports.
   */
  supported_app_view_types: Array<AppViewType>;
}

/**
 * The different platforms an app build can target.
 */
export type AppBuildPlatforms = 'ios' | 'android' | 'web';

/**
 * The different statuses an AppBuild can be in.
 */
export type AppBuildStatuses = 'draft' | 'pending' | 'approved' | 'rejected';

/**
 * The status of an experience interface
 */
export type AppStatuses = 'live' | 'unlisted' | 'hidden';

/**
 * The different types of an app view
 */
export type AppViewType = 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics';

/**
 * Possible roles an authorized user can have
 */
export type AuthorizedUserRoles =
  | 'owner'
  | 'admin'
  | 'sales_manager'
  | 'moderator'
  | 'app_manager'
  | 'support'
  | 'manager';

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
  | 'community';

/**
 * The method of collection for an invoice.
 */
export type CollectionMethod = 'send_invoice' | 'charge_automatically';

/**
 * An object representing a (sanitized) company.
 */
export interface Company {
  /**
   * The ID (tag) of the company.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: BusinessTypes | null;

  /**
   * When the company was created (signed up)
   */
  created_at: number;

  /**
   * The different industry types a company can be in.
   */
  industry_type: IndustryTypes | null;

  /**
   * The number of members in the company.
   */
  member_count: number;

  /**
   * The user who owns this company
   */
  owner_user: Company.OwnerUser;

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
  social_links: Array<Company.SocialLink>;

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

export namespace Company {
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
    website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website';
  }
}

/**
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteraction {
  /**
   * The ID of the lesson interaction
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * When the interaction was created
   */
  created_at: number;

  /**
   * The lesson this interaction is for
   */
  lesson: CourseLessonInteraction.Lesson;

  /**
   * The user who interacted with the lesson
   */
  user: CourseLessonInteraction.User;
}

export namespace CourseLessonInteraction {
  /**
   * The lesson this interaction is for
   */
  export interface Lesson {
    /**
     * The ID of the lesson
     */
    id: string;

    /**
     * The title of the lesson
     */
    title: string;
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
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
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteractionListItem {
  /**
   * The ID of the lesson interaction
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * When the interaction was created
   */
  created_at: number;

  /**
   * The lesson this interaction is for
   */
  lesson: CourseLessonInteractionListItem.Lesson;

  /**
   * The user who interacted with the lesson
   */
  user: CourseLessonInteractionListItem.User;
}

export namespace CourseLessonInteractionListItem {
  /**
   * The lesson this interaction is for
   */
  export interface Lesson {
    /**
     * The ID of the lesson
     */
    id: string;

    /**
     * The title of the lesson
     */
    title: string;
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
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
 * The available currencies on the platform
 */
export type Currency =
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
  | 'btc';

/**
 * The different types of custom CTAs that can be selected.
 */
export type CustomCta =
  | 'get_access'
  | 'join'
  | 'order_now'
  | 'shop_now'
  | 'call_now'
  | 'donate_now'
  | 'contact_us'
  | 'sign_up'
  | 'subscribe'
  | 'purchase'
  | 'get_offer'
  | 'apply_now'
  | 'complete_order';

/**
 * The direction of the sort.
 */
export type Direction = 'asc' | 'desc';

/**
 * An object representing an entry in a waitlist.
 */
export interface Entry {
  /**
   * The internal ID of the entry.
   */
  id: string;

  /**
   * When the entry was created.
   */
  created_at: number | null;

  /**
   * Responses collected from the user when submitting their entry.
   */
  custom_field_responses: Array<Entry.CustomFieldResponse> | null;

  /**
   * The waitlist plan the entry if for.
   */
  plan: Entry.Plan | null;

  /**
   * The access pass tied to this entry, if there is one.
   */
  product: Entry.Product | null;

  /**
   * The status of the entry.
   */
  status: EntryStatus;

  /**
   * The user who created the entry.
   */
  user: Entry.User;
}

export namespace Entry {
  /**
   * The response from a custom field on checkout
   */
  export interface CustomFieldResponse {
    /**
     * The ID of the custom field item
     */
    id: string;

    /**
     * The response a user gave to the specific question or field.
     */
    answer: string;

    /**
     * The question asked by the custom field
     */
    question: string;
  }

  /**
   * The waitlist plan the entry if for.
   */
  export interface Plan {
    /**
     * The internal ID of the plan.
     */
    id: string;
  }

  /**
   * The access pass tied to this entry, if there is one.
   */
  export interface Product {
    /**
     * The internal ID of the public access pass.
     */
    id: string;

    /**
     * The title of the access pass. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The user who created the entry.
   */
  export interface User {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The email of the user
     */
    email: string | null;

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
 * The status of an entry to a waitlist.
 */
export type EntryStatus = 'drafted' | 'pending' | 'approved' | 'denied' | 'any';

/**
 * Represents a post in forum
 */
export interface ForumPost {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The amount of comments on this post
   */
  comment_count: number;

  /**
   * The content of the forum post in Markdown format
   */
  content: string | null;

  /**
   * Whether the forum post has been edited
   */
  is_edited: boolean;

  /**
   * Whether this forum post is pinned
   */
  is_pinned: boolean;

  /**
   * Whether the user that sent the post is an admin of the bot
   */
  is_poster_admin: boolean;

  /**
   * The number of likes this post has received
   */
  like_count: number | null;

  /**
   * The ID of the parent forum post, if applicable
   */
  parent_id: string | null;

  /**
   * The title of the forum post
   */
  title: string | null;

  /**
   * The user who created this forum post
   */
  user: ForumPost.User;

  /**
   * The number of times this message has been viewed
   */
  view_count: number | null;
}

export namespace ForumPost {
  /**
   * The user who created this forum post
   */
  export interface User {
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
 * The different statuses of the global affiliate program for an access pass.
 */
export type GlobalAffiliateStatus = 'enabled' | 'disabled';

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
  | 'parties';

/**
 * A statement that defines an amount due by a customer.
 */
export interface Invoice {
  /**
   * The ID of the invoice.
   */
  id: string;

  /**
   * The date the invoice was created.
   */
  created_at: number;

  /**
   * The plan that the invoice was created for.
   */
  current_plan: Invoice.CurrentPlan;

  /**
   * The date the invoice is due.
   */
  due_date: number | null;

  /**
   * The email address that the invoice was created for.
   */
  email_address: string | null;

  /**
   * The token to fetch the invoice.
   */
  fetch_invoice_token: string;

  /**
   * The number of the invoice.
   */
  number: string;

  /**
   * The status of the invoice.
   */
  status: InvoiceStatus;

  /**
   * The user that the invoice was created for.
   */
  user: Invoice.User | null;
}

export namespace Invoice {
  /**
   * The plan that the invoice was created for.
   */
  export interface CurrentPlan {
    /**
     * The internal ID of the plan.
     */
    id: string;

    /**
     * The respective currency identifier for the plan.
     */
    currency: Shared.Currency;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * The user that the invoice was created for.
   */
  export interface User {
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
 * A statement that defines an amount due by a customer.
 */
export interface InvoiceListItem {
  /**
   * The ID of the invoice.
   */
  id: string;

  /**
   * The date the invoice was created.
   */
  created_at: number;

  /**
   * The plan that the invoice was created for.
   */
  current_plan: InvoiceListItem.CurrentPlan;

  /**
   * The date the invoice is due.
   */
  due_date: number | null;

  /**
   * The email address that the invoice was created for.
   */
  email_address: string | null;

  /**
   * The token to fetch the invoice.
   */
  fetch_invoice_token: string;

  /**
   * The number of the invoice.
   */
  number: string;

  /**
   * The status of the invoice.
   */
  status: InvoiceStatus;

  /**
   * The user that the invoice was created for.
   */
  user: InvoiceListItem.User | null;
}

export namespace InvoiceListItem {
  /**
   * The plan that the invoice was created for.
   */
  export interface CurrentPlan {
    /**
     * The internal ID of the plan.
     */
    id: string;

    /**
     * The respective currency identifier for the plan.
     */
    currency: Shared.Currency;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * The user that the invoice was created for.
   */
  export interface User {
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
 * The different statuses an invoice can be in
 */
export type InvoiceStatus = 'open' | 'paid' | 'past_due' | 'void';

/**
 * A membership represents a purchase between a User and a Company for a specific
 * Product.
 */
export interface Membership {
  /**
   * The ID of the membership
   */
  id: string;

  /**
   * Whether this Membership is set to cancel at the end of the current billing
   * cycle. Only applies for memberships that have a renewal plan.
   */
  cancel_at_period_end: boolean;

  /**
   * The epoch timestamp of when the customer initiated a cancellation.
   */
  canceled_at: number | null;

  /**
   * The reason that the member canceled the membership (filled out by the member).
   */
  cancellation_reason: string | null;

  /**
   * The Company this Membership belongs to.
   */
  company: Membership.Company;

  /**
   * The timestamp, in seconds, that this Membership was created at.
   */
  created_at: number;

  /**
   * The available currencies on the platform
   */
  currency: Currency | null;

  /**
   * The license key for this Membership. This is only present if the membership
   * grants access to an instance of the Whop Software app.
   */
  license_key: string | null;

  /**
   * The URL for the customer to manage their membership.
   */
  manage_url: string | null;

  /**
   * The Member that this Membership belongs to.
   */
  member: Membership.Member | null;

  /**
   * A JSON object used to store software licensing information. Ex. HWID
   */
  metadata: { [key: string]: unknown };

  /**
   * The Plan this Membership is for.
   */
  plan: Membership.Plan;

  /**
   * The Promo Code that is currently applied to this Membership.
   */
  promo_code: Membership.PromoCode | null;

  /**
   * The timestamp in seconds at which the current billing cycle for this
   * subscription ends. Only applies for memberships that have a renewal plan.
   */
  renewal_period_end: number | null;

  /**
   * The timestamp in seconds at which the current billing cycle for this
   * subscription start. Only applies for memberships that have a renewal plan.
   */
  renewal_period_start: number | null;

  /**
   * The status of the membership.
   */
  status: MembershipStatus;

  /**
   * A timestamp of when the membership was last updated
   */
  updated_at: number;

  /**
   * The user this membership belongs to
   */
  user: Membership.User | null;
}

export namespace Membership {
  /**
   * The Company this Membership belongs to.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * The Member that this Membership belongs to.
   */
  export interface Member {
    /**
     * The ID of the member
     */
    id: string;
  }

  /**
   * The Plan this Membership is for.
   */
  export interface Plan {
    /**
     * The internal ID of the plan.
     */
    id: string;
  }

  /**
   * The Promo Code that is currently applied to this Membership.
   */
  export interface PromoCode {
    /**
     * The ID of the promo.
     */
    id: string;
  }

  /**
   * The user this membership belongs to
   */
  export interface User {
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
 * The status of a membership
 */
export type MembershipStatus =
  | 'trialing'
  | 'active'
  | 'past_due'
  | 'completed'
  | 'canceled'
  | 'expired'
  | 'unresolved'
  | 'drafted';

/**
 * Information about pagination in a connection.
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

/**
 * An object representing a (sanitized) plan of an access pass.
 */
export interface Plan {
  /**
   * The internal ID of the plan.
   */
  id: string;

  /**
   * The interval at which the plan charges (renewal plans).
   */
  billing_period: number | null;

  /**
   * Whether or not the plan collects tax.
   */
  collect_tax: boolean;

  /**
   * The company for the plan.
   */
  company: Plan.Company | null;

  /**
   * When the plan was created.
   */
  created_at: number;

  /**
   * The respective currency identifier for the plan.
   */
  currency: Currency;

  /**
   * The custom fields for the plan.
   */
  custom_fields: Array<Plan.CustomField>;

  /**
   * The description of the plan.
   */
  description: string | null;

  /**
   * The interval at which the plan charges (expiration plans).
   */
  expiration_days: number | null;

  /**
   * The price a person has to pay for a plan on the initial purchase.
   */
  initial_price: number;

  /**
   * A personal description or notes section for the business.
   */
  internal_notes: string | null;

  /**
   * The invoice associated with this plan.
   */
  invoice: Plan.Invoice | null;

  /**
   * The number of members for the plan.
   */
  member_count: number | null;

  /**
   * Indicates if the plan is a one time payment or recurring.
   */
  plan_type: PlanType;

  /**
   * The access pass for the plan.
   */
  product: Plan.Product | null;

  /**
   * The direct link to purchase the access pass.
   */
  purchase_url: string;

  /**
   * This is the release method the business uses to sell this plan.
   */
  release_method: ReleaseMethod;

  /**
   * The price a person has to pay for a plan on the renewal purchase.
   */
  renewal_price: number;

  /**
   * The tax type for the plan.
   */
  tax_type: TaxType;

  /**
   * The number of free trial days added before a renewal plan.
   */
  trial_period_days: number | null;

  /**
   * When the plan was last updated.
   */
  updated_at: number;

  /**
   * Shows or hides the plan from public/business view.
   */
  visibility: Visibility;
}

export namespace Plan {
  /**
   * The company for the plan.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * An object representing a custom field for a plan.
   */
  export interface CustomField {
    /**
     * The internal ID of the given custom field
     */
    id: string;

    /**
     * What type of input field to use.
     */
    field_type: 'text';

    /**
     * The title/header of the custom field.
     */
    name: string;

    /**
     * How the custom field should be ordered when rendered on the checkout page.
     */
    order: number | null;

    /**
     * An example response displayed in the input field.
     */
    placeholder: string | null;

    /**
     * Whether or not the custom field is required.
     */
    required: boolean;
  }

  /**
   * The invoice associated with this plan.
   */
  export interface Invoice {
    /**
     * The ID of the invoice.
     */
    id: string;
  }

  /**
   * The access pass for the plan.
   */
  export interface Product {
    /**
     * The internal ID of the public access pass.
     */
    id: string;

    /**
     * The title of the access pass. Use for Whop 4.0.
     */
    title: string;
  }
}

/**
 * The type of plan that can be attached to an access pass
 */
export type PlanType = 'renewal' | 'one_time';

/**
 * An object representing a (sanitized) access pass.
 */
export interface Product {
  /**
   * The internal ID of the public access pass.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: BusinessTypes | null;

  /**
   * A short type of the company that this access pass belongs to.
   */
  company: Product.Company;

  /**
   * When the access pass was created.
   */
  created_at: number;

  /**
   * The custom call to action for the access pass.
   */
  custom_cta: CustomCta;

  /**
   * The custom call to action URL for the access pass, if any.
   */
  custom_cta_url: string | null;

  /**
   * The custom statement descriptor for the access pass.
   */
  custom_statement_descriptor: string | null;

  /**
   * A short description of what the company offers or does.
   */
  description: string | null;

  /**
   * The percentage of a transaction a user is eligible to earn from the whop
   * marketplace global affiliate program.
   */
  global_affiliate_percentage: number | null;

  /**
   * The status of the global affiliate program for this access pass.
   */
  global_affiliate_status: GlobalAffiliateStatus;

  /**
   * The headline of the access pass.
   */
  headline: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: IndustryTypes | null;

  /**
   * The percentage of a transaction a user is eligible to earn from the whop
   * marketplace member affiliate program.
   */
  member_affiliate_percentage: number | null;

  /**
   * The status of the member affiliate program for this access pass.
   */
  member_affiliate_status: GlobalAffiliateStatus;

  /**
   * The number of active users for this access pass.
   */
  member_count: number;

  /**
   * The user that owns the access pass (company owner).
   */
  owner_user: Product.OwnerUser;

  /**
   * The product tax code for the access pass, if any.
   */
  product_tax_code: Product.ProductTaxCode | null;

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

  /**
   * This access pass will/will not be displayed publicly.
   */
  visibility: Visibility;
}

export namespace Product {
  /**
   * A short type of the company that this access pass belongs to.
   */
  export interface Company {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The title of the company.
     */
    title: string;
  }

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

  /**
   * The product tax code for the access pass, if any.
   */
  export interface ProductTaxCode {
    /**
     * The internal ID of the product tax code.
     */
    id: string;

    /**
     * The name of the product tax code.
     */
    name: string;

    /**
     * The type of product this tax code applies to.
     */
    product_type: 'physical' | 'digital' | 'services';
  }
}

/**
 * An object representing a (sanitized) access pass.
 */
export interface ProductListItem {
  /**
   * The internal ID of the public access pass.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: BusinessTypes | null;

  /**
   * When the access pass was created.
   */
  created_at: number;

  /**
   * The headline of the access pass.
   */
  headline: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: IndustryTypes | null;

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

  /**
   * This access pass will/will not be displayed publicly.
   */
  visibility: Visibility;
}

/**
 * The methods of how a plan can be released.
 */
export type ReleaseMethod = 'buy_now' | 'waitlist';

/**
 * A shipment
 */
export interface Shipment {
  /**
   * The ID of the shipment
   */
  id: string;

  /**
   * The carrier of the shipment
   */
  carrier: ShipmentCarrier;

  /**
   * The date and time the shipment was created
   */
  created_at: number;

  /**
   * The delivery estimate of the shipment
   */
  delivery_estimate: number | null;

  /**
   * The payment of the shipment
   */
  payment: Shipment.Payment;

  /**
   * The service of the shipment
   */
  service: string | null;

  /**
   * The status of the shipment
   */
  status: ShipmentStatus;

  /**
   * The substatus of a shipment
   */
  substatus: ShipmentSubstatus | null;

  /**
   * The tracking code of the shipment
   */
  tracking_code: string;

  /**
   * The date and time the shipment was last updated
   */
  updated_at: number;
}

export namespace Shipment {
  /**
   * The payment of the shipment
   */
  export interface Payment {
    /**
     * The receipt ID
     */
    id: string;
  }
}

/**
 * The carrier of a shipment
 */
export type ShipmentCarrier =
  | 'accurate'
  | 'amazon_mws'
  | 'amazon_shipping'
  | 'apc'
  | 'asendia_usa'
  | 'australia_post'
  | 'axlehire_v3'
  | 'better_trucks'
  | 'canada_post'
  | 'canpar'
  | 'columbus_last_mile'
  | 'chronopost'
  | 'cloud_sort'
  | 'courier_express'
  | 'couriers_please'
  | 'cs_logistics'
  | 'dai_post'
  | 'deutsche_post_uk'
  | 'deutsche_post'
  | 'dhl_ecommerce_asia'
  | 'dhl_ecs'
  | 'dhl_express'
  | 'dhl_paket'
  | 'door_dash'
  | 'dpd_nl'
  | 'dpd_uk'
  | 'dpd'
  | 'epost_global'
  | 'estafeta'
  | 'evri'
  | 'fastway'
  | 'fedex_cross_border'
  | 'fedex_default'
  | 'fedex_mailview'
  | 'fedex_smartpost'
  | 'fedex'
  | 'first_choice'
  | 'first_mile'
  | 'flexport'
  | 'gio'
  | 'gio_express'
  | 'gso'
  | 'hailify'
  | 'henry'
  | 'interlink_express'
  | 'jet'
  | 'kuroneko_yamato'
  | 'la_post'
  | 'lasership_v2'
  | 'loomis_express'
  | 'lso'
  | 'ontrac'
  | 'optima'
  | 'osm_worldwide'
  | 'parcelforce'
  | 'parcll'
  | 'passport_global'
  | 'post_nl'
  | 'purolator'
  | 'quick'
  | 'royal_mail'
  | 'omni_parcel'
  | 'sendle'
  | 'sf_express'
  | 'smart_kargo'
  | 'sonic'
  | 'spee_dee'
  | 'swyft'
  | 'tforce'
  | 'uds'
  | 'ups_iparcel'
  | 'ups_mail_innovations'
  | 'ups'
  | 'usps'
  | 'veho'
  | 'yanwen';

/**
 * The status of a shipment
 */
export type ShipmentStatus =
  | 'unknown'
  | 'pre_transit'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'available_for_pickup'
  | 'return_to_sender'
  | 'failure'
  | 'cancelled'
  | 'error';

/**
 * The substatus of a shipment
 */
export type ShipmentSubstatus =
  | 'address_correction'
  | 'arrived_at_destination'
  | 'arrived_at_facility'
  | 'arrived_at_pickup_location'
  | 'awaiting_information'
  | 'substatus_cancelled'
  | 'damaged'
  | 'delayed'
  | 'delivery_exception'
  | 'departed_facility'
  | 'departed_origin_facility'
  | 'expired'
  | 'substatus_failure'
  | 'held'
  | 'substatus_in_transit'
  | 'label_created'
  | 'lost'
  | 'missorted'
  | 'substatus_out_for_delivery'
  | 'received_at_destination_facility'
  | 'received_at_origin_facility'
  | 'refused'
  | 'return'
  | 'status_update'
  | 'transferred_to_destination_carrier'
  | 'transit_exception'
  | 'substatus_unknown'
  | 'weather_delay';

/**
 * Whether or not the tax is included in a plan's price (or if it hasn't been set
 * up)
 */
export type TaxType = 'inclusive' | 'exclusive' | 'unspecified';

/**
 * Credit Transaction Transfer
 */
export interface Transfer {
  /**
   * The unique identifier of the credit transaction transfer
   */
  id: string;

  /**
   * The amount of the credit transaction transfer
   */
  amount: number;

  /**
   * The timestamp when the credit transaction transfer was created
   */
  created_at: number;

  /**
   * The currency of the credit transaction transfer
   */
  currency: Currency;

  /**
   * The recipient of the credit transaction transfer
   */
  destination: Transfer.UnionMember0 | null | Transfer.UnionMember1 | null;

  /**
   * The ID of the destination ledger account
   */
  destination_ledger_account_id: string;

  /**
   * The decimal fee of the credit transaction transfer
   */
  fee_amount: number | null;

  /**
   * The notes of the credit transaction transfer
   */
  notes: string | null;

  /**
   * The sender of the credit transaction transfer
   */
  origin: Transfer.UnionMember0 | null | Transfer.UnionMember1 | null;

  /**
   * The ID of the origin ledger account
   */
  origin_ledger_account_id: string;
}

export namespace Transfer {
  /**
   * An object representing a (sanitized) user of the site.
   */
  export interface UnionMember0 {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'PublicProfileUser';

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }

  /**
   * An object representing a (sanitized) company.
   */
  export interface UnionMember1 {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The title of the company.
     */
    title: string;

    /**
     * The typename of this object
     */
    typename: 'PublicCompany';
  }

  /**
   * An object representing a (sanitized) user of the site.
   */
  export interface UnionMember0 {
    /**
     * The internal ID of the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'PublicProfileUser';

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }

  /**
   * An object representing a (sanitized) company.
   */
  export interface UnionMember1 {
    /**
     * The ID (tag) of the company.
     */
    id: string;

    /**
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The title of the company.
     */
    title: string;

    /**
     * The typename of this object
     */
    typename: 'PublicCompany';
  }
}

/**
 * Visibility of a resource
 */
export type Visibility = 'visible' | 'hidden' | 'archived' | 'quick_link';

/**
 * The different levels of visibility for resources
 */
export type VisibilityFilter =
  | 'visible'
  | 'hidden'
  | 'archived'
  | 'quick_link'
  | 'all'
  | 'not_quick_link'
  | 'not_archived';

export type InvoiceListItemsCursorPage = CursorPage<InvoiceListItem>;

export type CourseLessonInteractionListItemsCursorPage = CursorPage<CourseLessonInteractionListItem>;

export type ProductListItemsCursorPage = CursorPage<ProductListItem>;
