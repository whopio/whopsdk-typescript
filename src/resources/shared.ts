// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import * as AppsAPI from './apps';
import * as CheckoutConfigurationsAPI from './checkout-configurations';
import * as MembershipsAPI from './memberships';
import * as PaymentsAPI from './payments';
import { CursorPage } from '../core/pagination';

/**
 * The access level a given user (or company) has to a product or company.
 */
export type AccessLevel = 'no_access' | 'admin' | 'customer';

/**
 * The different types an product can be. Only use 'regular'. The rest are for
 * internal use
 */
export type AccessPassType = 'regular' | 'app' | 'experience_upsell' | 'api_only';

/**
 * An app is an integration built on Whop. Apps can serve consumers as experiences
 * within products, or serve companies as business tools.
 */
export interface App {
  /**
   * The unique identifier for the app.
   */
  id: string;

  /**
   * The API key used to authenticate requests on behalf of this app. Null if no API
   * key has been generated. Requires the 'developer:manage_api_key' permission.
   */
  api_key: App.APIKey | null;

  /**
   * The target audience classification for this app (e.g., 'b2b_app', 'b2c_app',
   * 'company_app', 'component').
   */
  app_type: AppsAPI.AppType;

  /**
   * The production base URL where the app is hosted. Null if no base URL is
   * configured.
   */
  base_url: string | null;

  /**
   * The company that owns and publishes this app.
   */
  company: App.Company;

  /**
   * The user who created and owns the company that published this app.
   */
  creator: App.Creator;

  /**
   * The URL path template for a specific view of this app, appended to the base
   * domain (e.g., '/experiences/[experienceId]'). Null if the specified view type is
   * not configured.
   */
  dashboard_path: string | null;

  /**
   * A written description of what this app does, displayed on the app store listing
   * page. Null if no description has been set.
   */
  description: string | null;

  /**
   * The URL path template for a specific view of this app, appended to the base
   * domain (e.g., '/experiences/[experienceId]'). Null if the specified view type is
   * not configured.
   */
  discover_path: string | null;

  /**
   * The unique subdomain identifier for this app's proxied URL on the Whop platform.
   * Forms the URL pattern https://{domain_id}.apps.whop.com.
   */
  domain_id: string;

  /**
   * The URL path template for a specific view of this app, appended to the base
   * domain (e.g., '/experiences/[experienceId]'). Null if the specified view type is
   * not configured.
   */
  experience_path: string | null;

  /**
   * The icon image for this app, displayed on the app store, product pages,
   * checkout, and as the default icon for experiences using this app.
   */
  icon: App.Icon | null;

  /**
   * The display name of this app shown on the app store and in experience
   * navigation. Maximum 30 characters.
   */
  name: string;

  /**
   * The whitelisted OAuth callback URLs that users are redirected to after
   * authorizing the app.
   */
  redirect_uris: Array<string>;

  /**
   * The list of permissions this app requests when installed, including both
   * required and optional permissions with justifications.
   */
  requested_permissions: Array<App.RequestedPermission>;

  /**
   * Aggregate usage statistics for this app, including daily, weekly, and monthly
   * active user counts.
   */
  stats: App.Stats | null;

  /**
   * The current visibility status of this app on the Whop app store. 'live' means
   * publicly discoverable, 'unlisted' means accessible only via direct link, and
   * 'hidden' means not visible anywhere.
   */
  status: AppStatuses;

  /**
   * Whether this app has been verified by Whop. Verified apps are endorsed by Whop
   * and displayed in the featured apps section of the app store.
   */
  verified: boolean;
}

export namespace App {
  /**
   * The API key used to authenticate requests on behalf of this app. Null if no API
   * key has been generated. Requires the 'developer:manage_api_key' permission.
   */
  export interface APIKey {
    /**
     * The unique identifier for the private api key.
     */
    id: string;

    /**
     * This is the API key used to authenticate requests
     */
    token: string;

    /**
     * The datetime the private api key was created.
     */
    created_at: string;
  }

  /**
   * The company that owns and publishes this app.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The user who created and owns the company that published this app.
   */
  export interface Creator {
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

  /**
   * The icon image for this app, displayed on the app store, product pages,
   * checkout, and as the default icon for experiences using this app.
   */
  export interface Icon {
    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
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
   * Aggregate usage statistics for this app, including daily, weekly, and monthly
   * active user counts.
   */
  export interface Stats {
    /**
     * The number of unique users who have spent time in this app in the last 24 hours.
     * Returns 0 if no usage data is available.
     */
    dau: number;

    /**
     * The number of unique users who have spent time in this app in the last 28 days.
     * Returns 0 if no usage data is available.
     */
    mau: number;

    /**
     * The total time, in seconds, that all users have spent in this app over the last
     * 24 hours. Returns 0 if no usage data is available.
     */
    time_spent_last24_hours: number;

    /**
     * The number of unique users who have spent time in this app in the last 7 days.
     * Returns 0 if no usage data is available.
     */
    wau: number;
  }
}

/**
 * A versioned build artifact for a Whop React Native App, submitted for review and
 * deployment to a specific platform.
 */
export interface AppBuild {
  /**
   * The unique identifier for the app build.
   */
  id: string;

  /**
   * A SHA-256 hash of the uploaded build file, generated by the client and used to
   * verify file integrity.
   */
  checksum: string;

  /**
   * The datetime the app build was created.
   */
  created_at: string;

  /**
   * A URL to download the app build as a .zip archive.
   */
  file_url: string;

  /**
   * Whether this build is the currently active production build for its platform.
   */
  is_production: boolean;

  /**
   * The target platform for this build.
   */
  platform: AppBuildPlatforms;

  /**
   * Feedback from the reviewer explaining why the build was rejected. Null if the
   * build has not been reviewed or was approved.
   */
  review_message: string | null;

  /**
   * The current review status of this build.
   */
  status: AppBuildStatuses;

  /**
   * The list of view types this build supports, as declared by the developer.
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
  | 'services'
  | 'gig_economy'
  | 'marketplace'
  | 'telehealth'
  | 'class_action_settlement'
  | 'physical_product'
  | 'saas'
  | 'course'
  | 'community';

/**
 * A real-time chat feed attached to an experience, with configurable moderation
 * and posting permissions.
 */
export interface ChatChannel {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Whether media uploads such as images and videos are blocked in this chat.
   */
  ban_media: boolean;

  /**
   * Whether URL links are blocked from being posted in this chat.
   */
  ban_urls: boolean;

  /**
   * A list of words that are automatically filtered from messages in this chat.
   */
  banned_words: Array<string>;

  /**
   * The experience this chat feed is attached to.
   */
  experience: ChatChannel.Experience;

  /**
   * The minimum number of seconds a user must wait between consecutive messages.
   * Null if no cooldown is enforced.
   */
  user_posts_cooldown_seconds: number | null;

  /**
   * The permission level controlling which users can send messages in this chat.
   */
  who_can_post: WhoCanPost;

  /**
   * The permission level controlling which users can add reactions in this chat.
   */
  who_can_react: WhoCanReact;
}

export namespace ChatChannel {
  /**
   * The experience this chat feed is attached to.
   */
  export interface Experience {
    /**
     * The unique identifier for the experience.
     */
    id: string;

    /**
     * The display name of this experience shown to users in the product navigation.
     * Maximum 255 characters.
     */
    name: string;
  }
}

/**
 * A checkout configuration is a reusable configuration for a checkout, including
 * the plan, affiliate, and custom metadata. Payments and memberships created from
 * a checkout session inherit its metadata.
 */
export interface CheckoutConfiguration {
  /**
   * The unique identifier for the checkout session.
   */
  id: string;

  /**
   * The affiliate code to use for the checkout configuration
   */
  affiliate_code: string | null;

  /**
   * The ID of the company to use for the checkout configuration
   */
  company_id: string;

  /**
   * The available currencies on the platform
   */
  currency: Currency | null;

  /**
   * The metadata to use for the checkout configuration
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The mode of the checkout session.
   */
  mode: CheckoutConfigurationsAPI.CheckoutModes;

  /**
   * The explicit payment method configuration for the session, if any. This
   * currently only works in 'setup' mode. Use the plan's
   * payment_method_configuration for payment method.
   */
  payment_method_configuration: CheckoutConfiguration.PaymentMethodConfiguration | null;

  /**
   * The plan to use for the checkout configuration
   */
  plan: CheckoutConfiguration.Plan | null;

  /**
   * A URL you can send to customers to complete a checkout. It looks like
   * `/checkout/plan_xxxx?session={id}`
   */
  purchase_url: string;

  /**
   * The URL to redirect the user to after the checkout configuration is created
   */
  redirect_url: string | null;
}

export namespace CheckoutConfiguration {
  /**
   * The explicit payment method configuration for the session, if any. This
   * currently only works in 'setup' mode. Use the plan's
   * payment_method_configuration for payment method.
   */
  export interface PaymentMethodConfiguration {
    /**
     * An array of payment method identifiers that are explicitly disabled. Only
     * applies if the include_platform_defaults is true.
     */
    disabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * An array of payment method identifiers that are explicitly enabled. This means
     * these payment methods will be shown on checkout. Example use case is to only
     * enable a specific payment method like cashapp, or extending the platform
     * defaults with additional methods.
     */
    enabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * Whether Whop's platform default payment method enablement settings are included
     * in this configuration. The full list of default payment methods can be found in
     * the documentation at docs.whop.com/payments.
     */
    include_platform_defaults: boolean;
  }

  /**
   * The plan to use for the checkout configuration
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;

    /**
     * The number of days between each recurring charge. Null for one-time plans. For
     * example, 30 for monthly or 365 for annual billing.
     */
    billing_period: number | null;

    /**
     * The currency used for all prices on this plan (e.g., 'usd', 'eur'). All monetary
     * amounts on the plan are denominated in this currency.
     */
    currency: Shared.Currency;

    /**
     * The number of days until the membership expires (for expiration-based plans).
     * For example, 365 for a one-year access pass.
     */
    expiration_days: number | null;

    /**
     * The initial purchase price in the plan's base_currency (e.g., 49.99 for $49.99).
     * For one-time plans, this is the full price. For renewal plans, this is charged
     * on top of the first renewal_price.
     */
    initial_price: number;

    /**
     * The billing model for this plan: 'renewal' for recurring subscriptions or
     * 'one_time' for single payments.
     */
    plan_type: Shared.PlanType;

    /**
     * The method used to sell this plan: 'buy_now' for immediate purchase or
     * 'waitlist' for waitlist-based access.
     */
    release_method: Shared.ReleaseMethod;

    /**
     * The recurring price charged every billing_period in the plan's base_currency
     * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
     */
    renewal_price: number;

    /**
     * The number of free trial days before the first charge on a renewal plan. Null if
     * no trial is configured or the current user has already used a trial for this
     * plan.
     */
    trial_period_days: number | null;

    /**
     * Controls whether the plan is visible to customers. When set to 'hidden', the
     * plan is only accessible via direct link.
     */
    visibility: Shared.Visibility;
  }
}

/**
 * The method of collection for an invoice.
 */
export type CollectionMethod = 'send_invoice' | 'charge_automatically';

/**
 * A company is a seller on Whop. Companies own products, manage members, and
 * receive payouts.
 */
export interface Company {
  /**
   * The unique identifier for the company.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: BusinessTypes | null;

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
  industry_type: IndustryTypes | null;

  /**
   * The company's logo.
   */
  logo: Company.Logo | null;

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
  owner_user: Company.OwnerUser;

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
   * The list of social media accounts and external links associated with this
   * company.
   */
  social_links: Array<Company.SocialLink>;

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

export namespace Company {
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

  /**
   * A social link attached to a resource on the site.
   */
  export interface SocialLink {
    /**
     * The unique identifier for the social link.
     */
    id: string;

    /**
     * The URL of the social media profile or external link.
     */
    url: string;

    /**
     * The website
     */
    website:
      | 'x'
      | 'instagram'
      | 'facebook'
      | 'tiktok'
      | 'youtube'
      | 'linkedin'
      | 'twitch'
      | 'website'
      | 'custom';
  }
}

/**
 * A record of a user's progress on a specific lesson, tracking whether they have
 * completed it.
 */
export interface CourseLessonInteraction {
  /**
   * The unique identifier for the lesson interaction.
   */
  id: string;

  /**
   * Whether the user has finished this lesson.
   */
  completed: boolean;

  /**
   * The course that contains the tracked lesson.
   */
  course: CourseLessonInteraction.Course;

  /**
   * The datetime the lesson interaction was created.
   */
  created_at: string;

  /**
   * The lesson that this progress record belongs to.
   */
  lesson: CourseLessonInteraction.Lesson;

  /**
   * The user whose progress is being tracked.
   */
  user: CourseLessonInteraction.User;
}

export namespace CourseLessonInteraction {
  /**
   * The course that contains the tracked lesson.
   */
  export interface Course {
    /**
     * The unique identifier for the course.
     */
    id: string;

    /**
     * The parent experience that this course belongs to.
     */
    experience: Course.Experience;

    /**
     * The display name of the course shown to students. Null if no title has been set.
     */
    title: string | null;
  }

  export namespace Course {
    /**
     * The parent experience that this course belongs to.
     */
    export interface Experience {
      /**
       * The unique identifier for the experience.
       */
      id: string;
    }
  }

  /**
   * The lesson that this progress record belongs to.
   */
  export interface Lesson {
    /**
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The parent chapter that contains this lesson.
     */
    chapter: Lesson.Chapter;

    /**
     * The display name of the lesson shown to students. Maximum 120 characters.
     */
    title: string;
  }

  export namespace Lesson {
    /**
     * The parent chapter that contains this lesson.
     */
    export interface Chapter {
      /**
       * The unique identifier for the chapter.
       */
      id: string;
    }
  }

  /**
   * The user whose progress is being tracked.
   */
  export interface User {
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

/**
 * A record of a user's progress on a specific lesson, tracking whether they have
 * completed it.
 */
export interface CourseLessonInteractionListItem {
  /**
   * The unique identifier for the lesson interaction.
   */
  id: string;

  /**
   * Whether the user has finished this lesson.
   */
  completed: boolean;

  /**
   * The datetime the lesson interaction was created.
   */
  created_at: string;

  /**
   * The lesson that this progress record belongs to.
   */
  lesson: CourseLessonInteractionListItem.Lesson;

  /**
   * The user whose progress is being tracked.
   */
  user: CourseLessonInteractionListItem.User;
}

export namespace CourseLessonInteractionListItem {
  /**
   * The lesson that this progress record belongs to.
   */
  export interface Lesson {
    /**
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The parent chapter that contains this lesson.
     */
    chapter: Lesson.Chapter;

    /**
     * The display name of the lesson shown to students. Maximum 120 characters.
     */
    title: string;
  }

  export namespace Lesson {
    /**
     * The parent chapter that contains this lesson.
     */
    export interface Chapter {
      /**
       * The unique identifier for the chapter.
       */
      id: string;
    }
  }

  /**
   * The user whose progress is being tracked.
   */
  export interface User {
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
  | 'btc'
  | 'cny';

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
 * The types of post
 */
export type DmsPostTypes = 'regular' | 'system' | 'automated';

/**
 * Email notification preference option for a forum feed
 */
export type EmailNotificationPreferences = 'all_admin_posts' | 'only_weekly_summary' | 'none';

/**
 * An entry represents a user's signup for a waitlisted plan.
 */
export interface Entry {
  /**
   * The unique identifier for the entry.
   */
  id: string;

  /**
   * The datetime the entry was created.
   */
  created_at: string | null;

  /**
   * The list of responses collected from the user when submitting their waitlist
   * entry.
   */
  custom_field_responses: Array<Entry.CustomFieldResponse> | null;

  /**
   * The waitlisted plan that this entry is a signup for.
   */
  plan: Entry.Plan | null;

  /**
   * The product associated with this entry's waitlisted plan. Null if the plan is
   * not tied to a product.
   */
  product: Entry.Product | null;

  /**
   * The current status of the waitlist entry (e.g., drafted, pending, approved,
   * denied).
   */
  status: EntryStatus;

  /**
   * The user who submitted this waitlist entry.
   */
  user: Entry.User;
}

export namespace Entry {
  /**
   * The response from a custom field on checkout
   */
  export interface CustomFieldResponse {
    /**
     * The unique identifier for the custom field response.
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
   * The waitlisted plan that this entry is a signup for.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product associated with this entry's waitlisted plan. Null if the plan is
   * not tied to a product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The user who submitted this waitlist entry.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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

/**
 * The status of an entry to a waitlist.
 */
export type EntryStatus = 'drafted' | 'pending' | 'approved' | 'denied' | 'any';

/**
 * An experience is a feature or content module within a product, such as a chat,
 * course, or custom app.
 */
export interface Experience {
  /**
   * The unique identifier for the experience.
   */
  id: string;

  /**
   * The app that powers this experience, defining its interface and behavior.
   */
  app: Experience.App;

  /**
   * The company that owns this experience.
   */
  company: Experience.Company;

  /**
   * The datetime the experience was created.
   */
  created_at: string;

  /**
   * The custom logo image for this experience. Null if no custom logo has been
   * uploaded.
   */
  image: Experience.Image | null;

  /**
   * Whether this experience is publicly visible to all users, including those
   * without a membership.
   */
  is_public: boolean;

  /**
   * The display name of this experience shown to users in the product navigation.
   * Maximum 255 characters.
   */
  name: string;

  /**
   * The sort position of this experience within its section. Lower values appear
   * first. Null if no position has been set.
   */
  order: string | null;

  /**
   * The list of products this experience is attached to, which determines which
   * customers have access. Empty if the experience is only visible to authorized
   * company team members.
   */
  products: Array<Experience.Product>;
}

export namespace Experience {
  /**
   * The app that powers this experience, defining its interface and behavior.
   */
  export interface App {
    /**
     * The unique identifier for the app.
     */
    id: string;

    /**
     * The icon image for this app, displayed on the app store, product pages,
     * checkout, and as the default icon for experiences using this app.
     */
    icon: App.Icon | null;

    /**
     * The display name of this app shown on the app store and in experience
     * navigation. Maximum 30 characters.
     */
    name: string;
  }

  export namespace App {
    /**
     * The icon image for this app, displayed on the app store, product pages,
     * checkout, and as the default icon for experiences using this app.
     */
    export interface Icon {
      /**
       * A pre-optimized URL for rendering this attachment on the client. This should be
       * used for displaying attachments in apps.
       */
      url: string | null;
    }
  }

  /**
   * The company that owns this experience.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
     */
    route: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The custom logo image for this experience. Null if no custom logo has been
   * uploaded.
   */
  export interface Image {
    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * A product is a digital good or service sold on Whop. Products contain plans for
   * pricing and experiences for content delivery.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * A discussion forum where members can create posts, comment, and react, belonging
 * to an experience.
 */
export interface Forum {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The email notification setting that controls which posts trigger email alerts.
   * One of: all_admin_posts, only_weekly_summary, none.
   */
  email_notification_preference: EmailNotificationPreferences;

  /**
   * The parent experience that this forum belongs to.
   */
  experience: Forum.Experience;

  /**
   * The permission level controlling who can comment on posts. One of: everyone,
   * admins.
   */
  who_can_comment: WhoCanCommentTypes;

  /**
   * The permission level controlling who can create new posts. One of: everyone,
   * admins.
   */
  who_can_post: WhoCanPostTypes;
}

export namespace Forum {
  /**
   * The parent experience that this forum belongs to.
   */
  export interface Experience {
    /**
     * The unique identifier for the experience.
     */
    id: string;

    /**
     * The display name of this experience shown to users in the product navigation.
     * Maximum 255 characters.
     */
    name: string;
  }
}

/**
 * A post or comment in a forum feed, supporting rich text, attachments, polls, and
 * reactions.
 */
export interface ForumPost {
  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  id: string;

  /**
   * The total number of direct comments on this post.
   */
  comment_count: number;

  /**
   * The body of the forum post in Markdown format. Null if the post is paywalled and
   * the current user does not have access.
   */
  content: string | null;

  /**
   * The time this post was created, as a Unix timestamp.
   */
  created_at: string;

  /**
   * Whether this post has been edited after its initial creation.
   */
  is_edited: boolean;

  /**
   * Whether this post is pinned to the top of the forum feed.
   */
  is_pinned: boolean;

  /**
   * Whether the author of this post is an admin of the company that owns the forum.
   */
  is_poster_admin: boolean;

  /**
   * The total number of like reactions this post has received.
   */
  like_count: number | null;

  /**
   * The unique identifier of the parent post. Null if this is a top-level post.
   */
  parent_id: string | null;

  /**
   * The headline of the forum post. Null if the post has no title.
   */
  title: string | null;

  /**
   * The time this post was last updated, as a Unix timestamp.
   */
  updated_at: string;

  /**
   * The user who authored this forum post.
   */
  user: ForumPost.User;

  /**
   * The total number of times this post has been viewed by users.
   */
  view_count: number | null;
}

export namespace ForumPost {
  /**
   * The user who authored this forum post.
   */
  export interface User {
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

/**
 * The friendly status of a payment. This is a derived status that provides a
 * human-readable summary of the payment state, combining the underlying status and
 * substatus fields.
 */
export type FriendlyReceiptStatus =
  | 'succeeded'
  | 'pending'
  | 'failed'
  | 'past_due'
  | 'canceled'
  | 'price_too_low'
  | 'uncollectible'
  | 'refunded'
  | 'auto_refunded'
  | 'partially_refunded'
  | 'dispute_warning'
  | 'dispute_needs_response'
  | 'dispute_warning_needs_response'
  | 'resolution_needs_response'
  | 'dispute_under_review'
  | 'dispute_warning_under_review'
  | 'resolution_under_review'
  | 'dispute_won'
  | 'dispute_warning_closed'
  | 'resolution_won'
  | 'dispute_lost'
  | 'dispute_closed'
  | 'resolution_lost'
  | 'drafted'
  | 'incomplete'
  | 'unresolved'
  | 'open_dispute'
  | 'open_resolution';

/**
 * The different statuses of the global affiliate program for a product.
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
  | 'parties'
  | 'forex_trading'
  | 'stock_trading'
  | 'options_trading'
  | 'crypto_trading'
  | 'futures_trading'
  | 'day_trading'
  | 'swing_trading'
  | 'algorithmic_trading'
  | 'prop_firm_trading'
  | 'value_investing'
  | 'real_estate_investing'
  | 'alternative_investments'
  | 'penny_stock_trading'
  | 'dividend_investing'
  | 'index_fund_investing'
  | 'gold_precious_metals'
  | 'venture_capital_education'
  | 'private_equity_education'
  | 'technical_analysis'
  | 'forex_scalping'
  | 'ict_smc_trading'
  | 'personalized_investment_advice'
  | 'sports_betting_picks'
  | 'fantasy_sports'
  | 'horse_racing'
  | 'poker_coaching'
  | 'esports_betting'
  | 'sports_analytics'
  | 'nfl_betting'
  | 'nba_betting'
  | 'mlb_betting'
  | 'soccer_betting'
  | 'mma_ufc_betting'
  | 'bodybuilding_coaching'
  | 'strength_training'
  | 'weight_loss_coaching'
  | 'athletic_performance'
  | 'yoga_instruction'
  | 'martial_arts_instruction'
  | 'running_coaching'
  | 'calisthenics'
  | 'flexibility_mobility'
  | 'nutrition_coaching'
  | 'swimming_coaching'
  | 'cycling_coaching'
  | 'boxing_coaching'
  | 'mma_coaching'
  | 'jiu_jitsu_coaching'
  | 'wrestling_coaching'
  | 'gymnastics_coaching'
  | 'pilates_instruction'
  | 'sports_nutrition'
  | 'body_recomposition'
  | 'golf_coaching'
  | 'tennis_coaching'
  | 'basketball_training'
  | 'soccer_training'
  | 'mental_health_coaching'
  | 'life_coaching'
  | 'biohacking'
  | 'holistic_health'
  | 'addiction_recovery_coaching'
  | 'breathwork'
  | 'meditation_mindfulness'
  | 'gut_health_coaching'
  | 'longevity_coaching'
  | 'womens_health_coaching'
  | 'mens_health_coaching'
  | 'fertility_wellness'
  | 'stress_management'
  | 'grief_coaching'
  | 'trauma_recovery_coaching'
  | 'adhd_coaching'
  | 'biomarker_health_coaching'
  | 'fitness_newsletter'
  | 'mental_health_newsletter'
  | 'longevity_newsletter'
  | 'medical_newsletter'
  | 'biohacking_newsletter'
  | 'womens_health_newsletter'
  | 'mens_health_newsletter'
  | 'pharma_biotech_newsletter'
  | 'ecommerce_education'
  | 'amazon_fba_coaching'
  | 'dropshipping_coaching'
  | 'print_on_demand_coaching'
  | 'retail_arbitrage'
  | 'wholesale_coaching'
  | 'startup_coaching'
  | 'business_strategy'
  | 'agency_building'
  | 'smma_coaching'
  | 'consulting_business'
  | 'saas_entrepreneurship'
  | 'local_business_coaching'
  | 'cleaning_business_coaching'
  | 'trucking_business_coaching'
  | 'vending_machine_business'
  | 'atm_business_coaching'
  | 'car_wash_business'
  | 'airbnb_business_coaching'
  | 'private_label_coaching'
  | 'etsy_coaching'
  | 'merch_business_coaching'
  | 'licensing_business'
  | 'business_acquisition'
  | 'women_entrepreneurship'
  | 'affiliate_marketing_education'
  | 'coaching_business_coaching'
  | 'dark_pattern_subscriptions'
  | 'income_guarantee_scheme'
  | 'lifetime_access_offers'
  | 'mlm_pyramid_scheme'
  | 'negative_option_billing'
  | 'startup_newsletter'
  | 'ecommerce_newsletter'
  | 'marketing_newsletter'
  | 'sales_newsletter'
  | 'small_business_newsletter'
  | 'leadership_newsletter'
  | 'agency_newsletter'
  | 'saas_newsletter'
  | 'hr_people_newsletter'
  | 'legal_business_newsletter'
  | 'real_estate_business_newsletter'
  | 'solopreneur_newsletter'
  | 'high_ticket_sales'
  | 'b2b_sales_coaching'
  | 'door_to_door_sales'
  | 'sales_funnel_coaching'
  | 'appointment_setting_coaching'
  | 'insurance_sales_coaching'
  | 'car_sales_coaching'
  | 'retail_sales_coaching'
  | 'solar_sales_coaching'
  | 'facebook_ads'
  | 'google_ads'
  | 'tiktok_marketing'
  | 'youtube_marketing'
  | 'instagram_growth'
  | 'seo_coaching'
  | 'email_marketing_coaching'
  | 'copywriting_coaching'
  | 'affiliate_marketing'
  | 'local_seo'
  | 'ai_marketing'
  | 'webinar_marketing'
  | 'event_marketing'
  | 'saas_marketing_coaching'
  | 'video_editing_education'
  | 'photography_coaching'
  | 'music_production'
  | 'ui_ux_design_education'
  | 'clipping_education'
  | 'ugc_creation'
  | '3d_modeling_education'
  | 'dj_education'
  | 'youtube_automation'
  | 'blog_monetization'
  | 'wedding_photography_education'
  | 'calligraphy_lettering'
  | 'illustration_education'
  | 'fashion_design_education'
  | 'interior_design_education'
  | 'influencer_education'
  | 'ai_content_creator_education'
  | 'web_development_education'
  | 'ai_ml_education'
  | 'data_science_education'
  | 'cybersecurity_education'
  | 'cloud_computing_education'
  | 'blockchain_education'
  | 'no_code_education'
  | 'automation_education'
  | 'game_development_education'
  | 'prompt_engineering'
  | 'python_programming'
  | 'javascript_programming'
  | 'react_development'
  | 'database_engineering'
  | 'aws_certification'
  | 'data_engineering'
  | 'robotics_education'
  | 'vr_ar_development'
  | 'linux_sysadmin'
  | 'wordpress_development'
  | 'ai_agent_building'
  | 'real_estate_wholesaling'
  | 'house_flipping'
  | 'property_development'
  | 'rental_property'
  | 'airbnb_str'
  | 'commercial_real_estate'
  | 'land_investing'
  | 'section_8_housing'
  | 'mobile_home_investing'
  | 'multifamily_investing'
  | 'self_storage_investing'
  | 'property_management_education'
  | 'vacation_rental_management'
  | 'credit_repair_education'
  | 'budgeting_coaching'
  | 'tax_strategy_education'
  | 'wealth_building'
  | 'student_loan_strategy'
  | 'credit_card_optimization'
  | 'career_coaching'
  | 'executive_coaching'
  | 'management_coaching'
  | 'tech_career_coaching'
  | 'medical_career_coaching'
  | 'trade_skills_education'
  | 'va_training'
  | 'bookkeeping_education'
  | 'data_career_coaching'
  | 'cybersecurity_career'
  | 'consulting_career'
  | 'investment_banking_career'
  | 'law_career_coaching'
  | 'nursing_career_coaching'
  | 'teaching_career_coaching'
  | 'personal_branding_career'
  | 'mens_dating_coaching'
  | 'womens_dating_coaching'
  | 'relationship_coaching'
  | 'marriage_coaching'
  | 'communication_coaching'
  | 'masculinity_coaching'
  | 'femininity_coaching'
  | 'breakup_recovery'
  | 'manifestation_coaching'
  | 'astrology_coaching'
  | 'energy_healing'
  | 'spiritual_coaching'
  | 'faith_based_coaching'
  | 'psychic_development'
  | 'numerology_coaching'
  | 'chakra_healing'
  | 'shamanic_healing'
  | 'biblical_coaching'
  | 'islamic_coaching'
  | 'productivity_coaching'
  | 'public_speaking_coaching'
  | 'mindset_coaching'
  | 'stoicism_philosophy'
  | 'mens_self_improvement'
  | 'womens_self_improvement'
  | 'leadership_development'
  | 'anger_management'
  | 'neurolinguistic_programming'
  | 'kindle_publishing'
  | 'amazon_kdp'
  | 'self_publishing'
  | 'audiobook_publishing'
  | 'course_creation'
  | 'digital_product_creation'
  | 'ghostwriting_business'
  | 'template_creation'
  | 'ai_book_publishing'
  | 'language_learning'
  | 'tutoring'
  | 'college_admissions_coaching'
  | 'cpa_exam_prep'
  | 'bar_exam_prep'
  | 'real_estate_exam_prep'
  | 'medical_board_prep'
  | 'pmp_certification_prep'
  | 'aws_certification_prep'
  | 'comptia_certification'
  | 'ap_exam_prep'
  | 'graduate_school_prep'
  | 'scholarship_coaching'
  | 'homeschool_education'
  | 'stem_education'
  | 'financial_certification'
  | 'coding_bootcamp_prep'
  | 'cooking_culinary'
  | 'travel_coaching'
  | 'parenting_coaching'
  | 'pet_training'
  | 'gardening_education'
  | 'diy_crafts'
  | 'survival_prepping'
  | 'baking_pastry'
  | 'wine_sommelier'
  | 'beer_brewing'
  | 'mixology_bartending'
  | 'woodworking'
  | 'pottery_ceramics'
  | 'knitting_crocheting'
  | 'jewelry_making'
  | 'aquarium_fishkeeping'
  | 'bird_watching'
  | 'astronomy_education'
  | 'magic_illusion'
  | 'car_restoration'
  | 'motorcycle_riding'
  | 'sailing_boating'
  | 'scuba_diving'
  | 'rock_climbing'
  | 'skiing_snowboarding'
  | 'surfing_education'
  | 'homesteading'
  | 'tiny_house_living'
  | 'van_life'
  | 'fashion_styling'
  | 'floral_design'
  | 'travel_planning_service'
  | 'esports_coaching'
  | 'game_specific_coaching'
  | 'legal_education'
  | 'music_theory'
  | 'music_business'
  | 'acting_coaching'
  | 'dance_instruction'
  | 'voice_acting'
  | 'english_coaching'
  | 'spanish_coaching'
  | 'mandarin_coaching'
  | 'french_coaching'
  | 'german_coaching'
  | 'japanese_coaching'
  | 'korean_coaching'
  | 'arabic_coaching'
  | 'sign_language_education'
  | 'accent_reduction'
  | 'business_english'
  | 'smma'
  | 'performance_marketing_agency'
  | 'seo_agency'
  | 'content_marketing_agency'
  | 'email_marketing_agency'
  | 'influencer_marketing_agency'
  | 'pr_agency'
  | 'branding_agency'
  | 'video_marketing_agency'
  | 'amazon_marketing_agency'
  | 'podcast_production_agency'
  | 'tiktok_agency'
  | 'linkedin_agency'
  | 'local_marketing_agency'
  | 'dental_marketing_agency'
  | 'real_estate_marketing_agency'
  | 'restaurant_marketing_agency'
  | 'ecommerce_marketing_agency'
  | 'b2b_marketing_agency'
  | 'growth_marketing_agency'
  | 'affiliate_management_agency'
  | 'conversion_optimization_agency'
  | 'event_marketing_agency'
  | 'click_farm_service'
  | 'data_scraping_service'
  | 'lead_list_sales'
  | 'social_media_bot_farm'
  | 'lead_generation_agency'
  | 'cold_email_agency'
  | 'cold_calling_agency'
  | 'sales_outsourcing'
  | 'crm_implementation'
  | 'appointment_setting_agency'
  | 'sales_training_agency'
  | 'revenue_operations_agency'
  | 'inbound_teleservices'
  | 'outbound_telemarketing'
  | 'ai_chatbot_agency'
  | 'ai_automation_agency'
  | 'ai_consulting'
  | 'workflow_automation_agency'
  | 'data_analytics_agency'
  | 'ai_voice_agent_agency'
  | 'ai_content_agency'
  | 'machine_learning_agency'
  | 'computer_vision_agency'
  | 'web_design_agency'
  | 'graphic_design_agency'
  | 'ui_ux_agency'
  | 'motion_design_agency'
  | 'product_design_agency'
  | 'logo_design_agency'
  | 'presentation_design_agency'
  | '3d_visualization_agency'
  | 'fashion_design_agency'
  | 'web_development_agency'
  | 'mobile_app_agency'
  | 'saas_development_agency'
  | 'ecommerce_development'
  | 'blockchain_development_agency'
  | 'game_development_agency'
  | 'devops_agency'
  | 'ai_development_agency'
  | 'wordpress_agency'
  | 'shopify_agency'
  | 'api_integration_agency'
  | 'cybersecurity_agency'
  | 'data_engineering_agency'
  | 'vr_ar_development_agency'
  | 'hacking_tools_malware'
  | 'stalkerware_monitoring'
  | 'tech_recruiting_agency'
  | 'executive_recruiting'
  | 'staffing_agency'
  | 'remote_staffing'
  | 'healthcare_recruiting'
  | 'va_placement_agency'
  | 'sales_recruiting'
  | 'creative_recruiting'
  | 'finance_recruiting'
  | 'legal_recruiting'
  | 'construction_staffing'
  | 'hospitality_staffing'
  | 'customer_support_outsourcing'
  | 'live_chat_agency'
  | 'technical_support_agency'
  | 'call_center_agency'
  | 'multilingual_support_agency'
  | 'community_management_agency'
  | 'video_clipping_agency'
  | 'ugc_agency'
  | 'content_writing_agency'
  | 'translation_agency'
  | 'social_media_management'
  | 'ghostwriting_agency'
  | 'podcast_editing_agency'
  | 'thumbnail_design_agency'
  | 'scriptwriting_agency'
  | 'seo_content_agency'
  | 'technical_writing_agency'
  | 'management_consulting'
  | 'financial_consulting'
  | 'hr_consulting'
  | 'operations_consulting'
  | 'it_consulting'
  | 'sustainability_consulting'
  | 'legal_consulting'
  | 'compliance_consulting'
  | 'supply_chain_consulting'
  | 'change_management_consulting'
  | 'digital_transformation_consulting'
  | 'healthcare_consulting'
  | 'real_estate_consulting'
  | 'franchise_consulting'
  | 'export_trade_consulting'
  | 'nonprofit_consulting'
  | 'education_consulting'
  | 'cannabis_consulting'
  | 'restaurant_consulting'
  | 'm_and_a_consulting'
  | 'pricing_strategy_consulting'
  | 'brand_strategy_consulting'
  | 'saas_marketing_consulting'
  | 'done_for_you_services'
  | 'prop_firm_passing_service'
  | 'trading_account_management'
  | 'done_for_you_trading'
  | 'accounting_bookkeeping'
  | 'tax_preparation'
  | 'legal_services'
  | 'notary_services'
  | 'insurance_brokerage'
  | 'financial_planning_service'
  | 'real_estate_services'
  | 'property_management'
  | 'mortgage_brokerage'
  | 'immigration_services'
  | 'patent_trademark_services'
  | 'business_formation_services'
  | 'shell_company_formation'
  | 'payroll_services'
  | 'audit_services'
  | 'forensic_accounting'
  | 'actuarial_services'
  | 'appraisal_services'
  | 'mediation_arbitration'
  | 'background_check_services'
  | 'bail_bond_services'
  | 'bnpl_service'
  | 'check_cashing_service'
  | 'cloud_mining_schemes'
  | 'consumer_lending'
  | 'credit_repair_service'
  | 'crowdfunding_platform'
  | 'crypto_exchange_brokerage'
  | 'debt_collection_agency'
  | 'debt_relief_settlement'
  | 'document_falsification'
  | 'escrow_service'
  | 'essay_mill_paper_mill'
  | 'fake_id_services'
  | 'fake_reference_services'
  | 'foreign_exchange_service'
  | 'government_service_facilitation'
  | 'immigration_services_unlicensed'
  | 'licensed_legal_services'
  | 'payment_facilitation'
  | 'personalized_tax_services'
  | 'prediction_market_exchange'
  | 'private_investigation'
  | 'repossession_services'
  | 'stablecoin_issuance'
  | 'standalone_tipping'
  | 'token_sales_ico'
  | 'tokenized_rwa'
  | 'unlicensed_legal_services'
  | 'yield_staking_products'
  | 'photography_service'
  | 'videography_service'
  | 'music_production_service'
  | 'voice_over_service'
  | 'event_photography'
  | 'drone_services'
  | 'commercial_photography'
  | 'portrait_photography_service'
  | 'real_estate_photography'
  | 'food_photography_service'
  | 'live_event_production'
  | 'podcast_production_service'
  | 'record_label'
  | 'book_publishing_house'
  | 'news_media_outlet'
  | 'radio_broadcasting'
  | 'tv_production_company'
  | 'film_studio'
  | 'magazine_publisher'
  | 'music_licensing_agency'
  | 'talent_management_agency'
  | 'advertising_network'
  | 'ad_tech_platform'
  | 'cleaning_service'
  | 'landscaping_service'
  | 'plumbing_service'
  | 'electrical_service'
  | 'hvac_service'
  | 'roofing_service'
  | 'painting_service'
  | 'moving_service'
  | 'handyman_service'
  | 'pest_control'
  | 'pool_service'
  | 'solar_installation'
  | 'home_renovation'
  | 'pressure_washing'
  | 'junk_removal'
  | 'garage_door_service'
  | 'fencing_service'
  | 'concrete_masonry'
  | 'tree_service'
  | 'window_cleaning'
  | 'gutter_service'
  | 'flooring_service'
  | 'cabinet_countertop'
  | 'home_inspection'
  | 'septic_service'
  | 'waterproofing_service'
  | 'insulation_service'
  | 'chimney_service'
  | 'locksmith_service'
  | 'glass_window_service'
  | 'epoxy_coating'
  | 'private_security_guard_service'
  | 'armored_car_transport'
  | 'executive_protection_bodyguard'
  | 'event_security_service'
  | 'alarm_system_installation'
  | 'cctv_installation'
  | 'private_investigation_agency'
  | 'background_check_provider'
  | 'locksmith_commercial'
  | 'bounty_hunter_bail_enforcement'
  | 'personal_styling'
  | 'personal_chef'
  | 'personal_assistant_service'
  | 'tutoring_service'
  | 'pet_services'
  | 'wedding_planning'
  | 'concierge_service'
  | 'personal_training_service'
  | 'nanny_service'
  | 'elder_care_service'
  | 'errand_service'
  | 'life_organization'
  | 'relocation_service'
  | 'adult_dating_services'
  | 'escort_services'
  | 'hotel_accommodation_bookings'
  | 'mail_order_spouse'
  | 'psychic_fortune_telling'
  | 'timeshare_sales'
  | 'freight_brokerage'
  | 'courier_service'
  | 'warehousing_service'
  | 'last_mile_delivery'
  | 'auto_transport'
  | 'international_shipping'
  | 'cold_chain_logistics'
  | 'commercial_airline_tickets'
  | 'cruise_line_bookings'
  | 'contract_manufacturing'
  | 'cnc_machining_service'
  | '3d_printing_service_commercial'
  | 'plastic_injection_molding'
  | 'metal_fabrication'
  | 'pcba_assembly'
  | 'chemical_manufacturing'
  | 'textile_manufacturing'
  | 'food_processing_facility'
  | 'packaging_manufacturing'
  | 'industrial_automation_integrator'
  | 'mining_and_extraction'
  | 'oil_and_gas_services'
  | 'renewable_energy_generation'
  | 'waste_management_recycling'
  | 'hazardous_waste_disposal'
  | 'aerospace_defense_contracting'
  | 'personal_training_studio'
  | 'nutrition_consulting'
  | 'mental_health_counseling'
  | 'physical_therapy_service'
  | 'occupational_therapy_service'
  | 'speech_therapy_service'
  | 'chiropractic_service'
  | 'acupuncture_service'
  | 'massage_therapy_service'
  | 'midwifery_doula'
  | 'lactation_consulting'
  | 'dietitian_service'
  | 'addiction_recovery_services'
  | 'dtc_lab_testing'
  | 'iv_therapy_infusion'
  | 'medspa_aesthetic_services'
  | 'prescription_delivery_services'
  | 'registered_dietitian_services'
  | 'unlicensed_therapy_counseling'
  | 'streetwear'
  | 'athleisure'
  | 'luxury_fashion'
  | 'kids_clothing'
  | 'custom_apparel'
  | 'workwear'
  | 'swimwear'
  | 'lingerie_intimates'
  | 'vintage_clothing'
  | 'plus_size_fashion'
  | 'maternity_clothing'
  | 'sleepwear_loungewear'
  | 'denim_brand'
  | 'outerwear_jackets'
  | 'socks_hosiery'
  | 'costumes_cosplay'
  | 'scrubs_medical_apparel'
  | 'dance_performance_wear'
  | 'hunting_camo_apparel'
  | 'protein_supplements'
  | 'vitamins_minerals'
  | 'pre_workout'
  | 'nootropics'
  | 'herbal_supplements'
  | 'weight_management_supplements'
  | 'gut_health'
  | 'cbd_products'
  | 'mushroom_supplements'
  | 'collagen_supplements'
  | 'testosterone_boosters'
  | 'sleep_supplements'
  | 'immune_support'
  | 'joint_bone_health'
  | 'greens_powder'
  | 'creatine_supplements'
  | 'electrolyte_hydration'
  | 'prenatal_supplements'
  | 'kids_supplements'
  | 'pet_supplements'
  | 'ayurvedic_supplements'
  | 'keto_supplements'
  | 'cannabis_thc_products'
  | 'cbd_hemp_products_compliant'
  | 'delta8_thc_products'
  | 'dietary_supplements'
  | 'drug_precursor_chemicals'
  | 'illegal_drugs'
  | 'kratom_kava_products'
  | 'medical_treatment_claims_product'
  | 'nutraceutical_products'
  | 'otc_medication_sales'
  | 'performance_enhancing_drugs'
  | 'research_chemicals_dangerous'
  | 'research_peptides'
  | 'sexual_enhancement_products'
  | 'tobacco_products'
  | 'unlicensed_rx_sales'
  | 'skincare'
  | 'haircare'
  | 'cosmetics_makeup'
  | 'mens_grooming'
  | 'fragrance'
  | 'oral_care'
  | 'sunscreen_spf'
  | 'hair_growth_products'
  | 'body_care'
  | 'deodorant'
  | 'lip_care'
  | 'acne_treatment'
  | 'men_skincare'
  | 'baby_skincare'
  | 'tattoo_aftercare'
  | 'intimate_care'
  | 'home_gym_equipment'
  | 'yoga_equipment'
  | 'combat_sports_gear'
  | 'outdoor_fitness_gear'
  | 'wearable_fitness'
  | 'recovery_equipment'
  | 'weightlifting_equipment'
  | 'cardio_equipment'
  | 'gymnastics_equipment'
  | 'swimming_gear'
  | 'jump_rope_equipment'
  | 'grip_strength_tools'
  | 'sauna_cold_plunge'
  | 'posture_correctors'
  | 'jewelry'
  | 'sunglasses_eyewear'
  | 'bags_wallets'
  | 'hats_headwear'
  | 'phone_accessories'
  | 'travel_accessories'
  | 'scarves_wraps'
  | 'belts'
  | 'hair_accessories'
  | 'tech_accessories'
  | 'keychains_charms'
  | 'custom_engraved_accessories'
  | 'cannabis_accessories_non_drug'
  | 'drug_paraphernalia'
  | 'high_value_goods_over_500'
  | 'precious_metals_stones'
  | 'replica_counterfeit_goods'
  | 'home_decor'
  | 'candles_scents'
  | 'kitchenware'
  | 'bedding_linens'
  | 'smart_home'
  | 'cleaning_products'
  | 'outdoor_furniture'
  | 'organization_storage'
  | 'wall_art_prints'
  | 'rugs_carpets'
  | 'lighting_fixtures'
  | 'planters_garden_decor'
  | 'bathroom_accessories'
  | 'luxury_home_goods'
  | 'seasonal_holiday_decor'
  | 'pet_home_products'
  | 'home_fragrance_diffusers'
  | 'hazardous_chemicals_b2c'
  | 'pre_orders_delayed_delivery'
  | 'audio_equipment'
  | 'camera_equipment'
  | 'gaming_hardware'
  | 'drones_robotics'
  | 'ev_accessories'
  | 'charging_power'
  | 'smart_wearables'
  | 'home_security_devices'
  | '3d_printers'
  | 'projectors_displays'
  | 'streaming_devices'
  | 'vr_headsets'
  | 'e_readers'
  | 'portable_tech'
  | 'hardware_wallets'
  | 'regulated_medical_devices'
  | 'signal_jamming_devices'
  | 'spy_cameras_hidden_recording'
  | 'specialty_coffee_tea'
  | 'health_food'
  | 'snacks_treats'
  | 'sauces_condiments'
  | 'alcohol_spirits'
  | 'meal_kits'
  | 'baked_goods'
  | 'beverages'
  | 'pet_food_treats'
  | 'protein_bars_snacks'
  | 'jerky_meat_snacks'
  | 'chocolate_confections'
  | 'honey_sweeteners'
  | 'olive_oil_vinegar'
  | 'hot_sauce'
  | 'dried_fruit_nuts'
  | 'baby_food'
  | 'plant_based_food'
  | 'gluten_free_food'
  | 'keto_food_products'
  | 'subscription_food_box'
  | 'kombucha_fermented'
  | 'alcohol_sales'
  | 'baby_products'
  | 'kids_toys'
  | 'kids_educational'
  | 'baby_clothing_accessories'
  | 'nursery_decor'
  | 'kids_outdoor_play'
  | 'kids_books'
  | 'baby_safety_products'
  | 'kids_arts_crafts'
  | 'camping_hiking'
  | 'fishing_gear'
  | 'hunting_gear'
  | 'cycling_gear'
  | 'water_sports_gear'
  | 'golf_equipment'
  | 'snow_sports_gear'
  | 'climbing_gear'
  | 'archery_equipment'
  | 'skateboarding_gear'
  | 'pickleball_equipment'
  | 'tennis_equipment'
  | 'equestrian_gear'
  | 'tactical_gear'
  | 'overlanding_gear'
  | 'explosives_fireworks'
  | 'firearms_sales'
  | 'self_defense_products'
  | 'weapon_components'
  | 'craft_kits'
  | 'sewing_textiles'
  | 'stationery'
  | 'scrapbooking_supplies'
  | 'beading_jewelry_supplies'
  | 'pottery_supplies'
  | 'printmaking_supplies'
  | 'car_accessories'
  | 'detailing_products'
  | 'motorcycle_gear'
  | 'truck_accessories'
  | 'off_road_parts'
  | 'car_audio_electronics'
  | 'performance_parts'
  | 'car_care_products'
  | 'ev_charging_accessories'
  | 'auto_repair_service'
  | 'auto_body_shop'
  | 'car_dealership'
  | 'car_wash'
  | 'tire_shop'
  | 'oil_change_shop'
  | 'auto_parts_store'
  | 'motorcycle_shop'
  | 'ev_charging_station'
  | 'transmission_shop'
  | 'muffler_exhaust_shop'
  | 'auto_glass_shop'
  | 'auto_upholstery_shop'
  | 'car_audio_shop'
  | 'smog_emissions_shop'
  | 'truck_repair_shop'
  | 'rv_repair_shop'
  | 'boat_repair_shop'
  | 'used_car_lot'
  | 'auto_auction'
  | 'dog_products'
  | 'cat_products'
  | 'aquarium_supplies'
  | 'bird_supplies'
  | 'reptile_supplies'
  | 'horse_supplies'
  | 'pet_apparel'
  | 'pet_tech'
  | 'pet_grooming_products'
  | 'hand_tools'
  | 'power_tools_and_accessories'
  | 'hardware_and_fasteners'
  | 'workshop_equipment_and_storage'
  | 'safety_and_work_gear'
  | 'painting_and_building_supplies'
  | 'office_supplies'
  | 'desk_accessories'
  | 'printing_supplies'
  | 'shipping_packaging'
  | 'reusable_products'
  | 'solar_powered_products'
  | 'handmade_goods_marketplace'
  | 'vintage_resale_marketplace'
  | 'electronics_marketplace'
  | 'auto_parts_marketplace'
  | 'luxury_goods_marketplace'
  | 'collectibles_marketplace'
  | 'nft_digital_marketplace'
  | 'wholesale_marketplace'
  | 'local_goods_marketplace'
  | 'sneaker_marketplace'
  | 'book_marketplace'
  | 'furniture_marketplace'
  | 'musical_instrument_marketplace'
  | 'art_marketplace'
  | 'ticket_marketplace'
  | 'industrial_equipment_marketplace'
  | 'craft_supply_marketplace'
  | 'baby_kids_marketplace'
  | 'outdoor_gear_marketplace'
  | 'pet_marketplace'
  | 'sustainable_goods_marketplace'
  | '3d_weapon_files'
  | 'cultural_artifacts_looted'
  | 'dropshipping_operations'
  | 'endangered_animal_products'
  | 'human_body_parts_tissue'
  | 'nft_marketplace'
  | 'penny_auction'
  | 'primary_event_ticketing'
  | 'freelancer_marketplace'
  | 'home_services_marketplace'
  | 'tutoring_marketplace'
  | 'legal_services_marketplace'
  | 'healthcare_marketplace'
  | 'wedding_services_marketplace'
  | 'creative_services_marketplace'
  | 'beauty_services_marketplace'
  | 'fitness_trainer_marketplace'
  | 'pet_services_marketplace'
  | 'childcare_marketplace'
  | 'elder_care_marketplace'
  | 'translation_marketplace'
  | 'coaching_marketplace'
  | 'therapy_marketplace'
  | 'photography_marketplace'
  | 'dj_entertainment_marketplace'
  | 'auto_services_marketplace'
  | 'freelance_marketplace_operator'
  | 'equipment_rental_marketplace'
  | 'vehicle_rental_marketplace'
  | 'space_rental_marketplace'
  | 'vacation_rental_marketplace'
  | 'clothing_rental_marketplace'
  | 'camera_gear_rental'
  | 'rv_camper_rental'
  | 'boat_rental_marketplace'
  | 'storage_rental_marketplace'
  | 'office_coworking_rental'
  | 'parking_rental_marketplace'
  | 'restaurant_marketplace'
  | 'grocery_marketplace'
  | 'catering_marketplace'
  | 'homemade_food_marketplace'
  | 'meal_prep_marketplace'
  | 'bakery_marketplace'
  | 'farm_produce_marketplace'
  | 'chef_booking_marketplace'
  | 'course_marketplace'
  | 'template_marketplace'
  | 'stock_media_marketplace'
  | 'music_beats_marketplace'
  | 'ebook_marketplace'
  | 'plugin_theme_marketplace'
  | '3d_model_marketplace'
  | 'prompt_marketplace'
  | 'code_snippet_marketplace'
  | 'game_account_selling'
  | 'game_cheats_hacks'
  | 'pirated_digital_content'
  | 'unauthorized_ingame_currency'
  | 'weapon_blueprint_distribution'
  | 'saas_marketplace'
  | 'agency_marketplace'
  | 'manufacturing_marketplace'
  | 'logistics_marketplace'
  | 'commercial_real_estate_marketplace'
  | 'business_for_sale_marketplace'
  | 'food_delivery'
  | 'grocery_delivery'
  | 'package_delivery'
  | 'moving_labor'
  | 'alcohol_delivery'
  | 'pharmacy_delivery'
  | 'flower_delivery_gig'
  | 'furniture_delivery_gig'
  | 'catering_delivery'
  | 'rideshare'
  | 'chauffeur_service'
  | 'bike_scooter_rental'
  | 'boat_charter_gig'
  | 'moving_truck_rental_gig'
  | 'assembly_installation'
  | 'waiting_line_service'
  | 'personal_shopping'
  | 'grocery_shopping_gig'
  | 'gift_wrapping_gig'
  | 'notary_gig'
  | 'laundry_gig'
  | 'car_wash_gig'
  | 'cleaning_gig'
  | 'lawn_care_gig'
  | 'handyman_gig'
  | 'pet_care_gig'
  | 'childcare_gig'
  | 'elder_care_gig'
  | 'painting_gig'
  | 'snow_removal_gig'
  | 'pool_cleaning_gig'
  | 'organizing_gig'
  | 'pressure_washing_gig'
  | 'junk_removal_gig'
  | 'freelance_design_gig'
  | 'freelance_writing_gig'
  | 'freelance_dev_gig'
  | 'music_performance_gig'
  | 'event_staffing_gig'
  | 'model_talent_gig'
  | 'photography_gig'
  | 'videography_gig'
  | 'voiceover_gig'
  | 'illustration_gig'
  | 'social_media_gig'
  | 'dj_gig'
  | 'face_painting_gig'
  | 'consulting_gig'
  | 'accounting_gig'
  | 'legal_gig'
  | 'healthcare_gig'
  | 'teaching_gig'
  | 'translation_gig'
  | 'data_entry_gig'
  | 'research_gig'
  | 'virtual_assistant_gig'
  | 'sales_gig'
  | 'recruiting_gig'
  | 'mystery_shopping'
  | 'focus_group_gig'
  | 'product_testing_gig'
  | 'drone_pilot_gig'
  | 'fitness_instruction_gig'
  | 'tour_guide_gig'
  | 'forex_signals_group'
  | 'stock_signals_group'
  | 'crypto_signals_group'
  | 'options_alerts_group'
  | 'futures_signals_group'
  | 'trading_education_group'
  | 'investing_community'
  | 'prediction_markets_group'
  | 'nft_alpha_group'
  | 'penny_stock_group'
  | 'dividend_investing_group'
  | 'real_estate_investing_group'
  | 'prop_firm_group'
  | 'sports_picks_group'
  | 'dfs_group'
  | 'horse_racing_group'
  | 'esports_picks_group'
  | 'nfl_picks_group'
  | 'nba_picks_group'
  | 'soccer_picks_group'
  | 'mlb_picks_group'
  | 'mma_picks_group'
  | 'prop_bets_group'
  | 'fantasy_sports_free_to_play'
  | 'licensed_gambling_operations'
  | 'unlicensed_gambling'
  | 'ecommerce_community'
  | 'agency_community'
  | 'saas_community'
  | 'saas_marketing_community'
  | 'real_estate_community'
  | 'sales_community'
  | 'affiliate_community'
  | 'reselling_community'
  | 'amazon_seller_community'
  | 'dropshipping_community'
  | 'freelancer_community'
  | 'startup_founder_community'
  | 'ceo_executive_community'
  | 'women_business_community'
  | 'marketing_community'
  | 'ai_business_community'
  | 'content_business_community'
  | 'local_business_community'
  | 'private_equity_community'
  | 'wholesaling_community'
  | 'coaching_business_community'
  | 'make_money_online_community'
  | 'fitness_accountability'
  | 'nutrition_community'
  | 'weight_loss_group'
  | 'bodybuilding_community'
  | 'running_community'
  | 'martial_arts_community'
  | 'mental_health_group'
  | 'biohacking_community'
  | 'addiction_support_group'
  | 'yoga_community'
  | 'crossfit_community'
  | 'longevity_community'
  | 'womens_fitness_community'
  | 'postpartum_fitness_group'
  | 'chronic_illness_support'
  | 'content_creator_community'
  | 'video_editing_community'
  | 'music_producer_community'
  | 'photography_community'
  | 'writing_community'
  | 'design_community'
  | 'youtube_creator_community'
  | 'tiktok_creator_community'
  | 'podcast_community'
  | 'filmmaker_community'
  | 'developer_community'
  | 'ai_community'
  | 'cybersecurity_community'
  | 'no_code_community'
  | 'indie_hacker_community'
  | 'devops_community'
  | 'data_science_community'
  | 'product_community'
  | 'open_source_community'
  | 'dating_community'
  | 'personal_development_community'
  | 'spirituality_community'
  | 'parenting_community'
  | 'travel_community'
  | 'networking_community'
  | 'faith_community'
  | 'mens_community'
  | 'womens_community'
  | 'expat_community'
  | 'adult_community_nsfw'
  | 'hate_violence_communities'
  | 'personal_fundraising'
  | 'political_fundraising'
  | 'political_organizations'
  | 'pornographic_content'
  | 'registered_501c3'
  | 'religious_organization'
  | 'unregistered_charities'
  | 'gaming_community'
  | 'car_enthusiast_community'
  | 'sneakerhead_community'
  | 'watch_collector_community'
  | 'wine_enthusiast_community'
  | 'cigar_community'
  | 'cooking_community'
  | 'gardening_community'
  | 'fishing_community'
  | 'hunting_community'
  | 'diy_maker_community'
  | 'golf_community'
  | 'sweepstakes_raffles'
  | 'forex_trading_bot'
  | 'stock_trading_platform'
  | 'crypto_trading_bot'
  | 'futures_trading_bot'
  | 'options_flow_tool'
  | 'portfolio_tracker'
  | 'financial_modeling_software'
  | 'accounting_software'
  | 'invoicing_software'
  | 'tax_software'
  | 'risk_management_software'
  | 'prop_trading_platform'
  | 'backtesting_software'
  | 'market_data_feed'
  | 'banking_software'
  | 'lending_platform'
  | 'insurance_software'
  | 'crypto_trading_tools_software'
  | 'non_custodial_wallet_tools'
  | 'ai_outreach_tool'
  | 'ai_chatbot_software'
  | 'ai_writing_tool'
  | 'ai_image_generator'
  | 'ai_video_tool'
  | 'ai_voice_tool'
  | 'ai_data_analysis'
  | 'ai_code_assistant'
  | 'ai_meeting_assistant'
  | 'workflow_automation_software'
  | 'ai_sales_tool'
  | 'ai_customer_support'
  | 'ai_recruiting_tool'
  | 'ai_translation_tool'
  | 'ai_music_tool'
  | 'ai_presentation_tool'
  | 'ai_research_tool'
  | 'ai_seo_tool'
  | 'ai_social_media_tool'
  | 'ai_phone_agent'
  | 'ai_legal_tool'
  | 'ai_healthcare_tool'
  | 'llm_api_platform'
  | 'ai_agent_platform'
  | 'generative_ai_platform'
  | 'celebrity_impersonation'
  | 'deepfake_service'
  | 'crm_software'
  | 'email_marketing_software'
  | 'sms_marketing_software'
  | 'seo_tool'
  | 'landing_page_builder'
  | 'ad_management_tool'
  | 'affiliate_tracking'
  | 'review_management'
  | 'analytics_dashboard'
  | 'lead_gen_software'
  | 'link_in_bio_tool'
  | 'influencer_platform'
  | 'webinar_platform'
  | 'ab_testing_tool'
  | 'chatbot_marketing'
  | 'video_sales_tool'
  | 'proposal_software'
  | 'competitive_intelligence'
  | 'social_listening_tool'
  | 'whatsapp_marketing_tool'
  | 'ecommerce_platform'
  | 'product_research_tool'
  | 'price_tracker'
  | 'shipping_software'
  | 'print_on_demand_software'
  | 'marketplace_seller_tool'
  | 'product_review_software'
  | 'returns_management'
  | 'product_feed_management'
  | 'checkout_optimization'
  | 'wholesale_ordering'
  | 'project_management_software'
  | 'team_communication'
  | 'video_conferencing'
  | 'document_collaboration'
  | 'time_tracking_software'
  | 'scheduling_software'
  | 'hr_software'
  | 'knowledge_base_software'
  | 'form_survey_builder'
  | 'note_taking_app'
  | 'task_management'
  | 'contract_management'
  | 'expense_management'
  | 'okr_goal_tracking'
  | 'employee_engagement'
  | 'onboarding_software'
  | 'applicant_tracking'
  | 'asset_management'
  | 'facility_management'
  | 'visitor_management'
  | 'api_management'
  | 'hosting_platform'
  | 'database_tool'
  | 'devops_tool'
  | 'monitoring_tool'
  | 'testing_tool'
  | 'code_editor'
  | 'no_code_builder'
  | 'cdn_platform'
  | 'error_tracking'
  | 'documentation_tool'
  | 'webhook_tool'
  | 'community_platform'
  | 'event_management_software'
  | 'webinar_software'
  | 'school_management'
  | 'newsletter_platform'
  | 'podcast_hosting'
  | 'forum_software'
  | 'virtual_classroom'
  | 'telehealth_platform'
  | 'ehr_software'
  | 'practice_management'
  | 'mental_health_app'
  | 'fitness_app'
  | 'nutrition_tracking_app'
  | 'wellness_app'
  | 'patient_engagement'
  | 'medical_billing_software'
  | 'pharmacy_management'
  | 'lab_management'
  | 'clinical_trial_software'
  | 'dental_software'
  | 'veterinary_software'
  | 'health_data_platform'
  | 'real_estate_crm'
  | 'property_management_software'
  | 'deal_analysis_tool'
  | 'mls_search_tool'
  | 'virtual_tour_software'
  | 'real_estate_marketing_software'
  | 'construction_management'
  | 'home_valuation_tool'
  | 'restaurant_pos'
  | 'salon_software'
  | 'gym_management_software'
  | 'auto_shop_software'
  | 'legal_practice_software'
  | 'church_management'
  | 'nonprofit_software'
  | 'logistics_software'
  | 'agriculture_software'
  | 'field_service_software'
  | 'marina_management'
  | 'hotel_pms'
  | 'childcare_management'
  | 'cleaning_business_software'
  | 'roofing_software'
  | 'landscaping_software'
  | 'pest_control_software'
  | 'tattoo_studio_software'
  | 'cannabis_software'
  | 'vpn_software'
  | 'password_manager'
  | 'cybersecurity_software'
  | 'identity_verification'
  | 'backup_recovery'
  | 'endpoint_protection'
  | 'email_security'
  | 'access_management'
  | 'compliance_software'
  | 'data_privacy_tool'
  | 'vpn_services'
  | 'game_mod_tool'
  | 'streaming_tool'
  | 'game_server_hosting'
  | 'music_software'
  | 'video_editing_software'
  | 'photo_editing_software'
  | 'animation_software'
  | 'audio_editing_software'
  | 'screen_recording_software'
  | 'fantasy_sports_paid_entry'
  | 'iptv_pirated_streaming'
  | 'loot_boxes_gacha'
  | 'skill_contests_free_entry'
  | 'skill_contests_paid_entry'
  | 'business_phone_system'
  | 'customer_messaging'
  | 'digital_key_reselling'
  | 'streaming_account_reselling'
  | 'primary_care_telehealth'
  | 'urgent_care_telehealth'
  | 'pediatric_telehealth'
  | 'geriatric_telehealth'
  | 'family_medicine_telehealth'
  | 'internal_medicine_telehealth'
  | 'preventive_care_telehealth'
  | 'licensed_online_pharmacy'
  | 'telemedicine_practitioner_services'
  | 'dermatology_telehealth'
  | 'acne_telehealth'
  | 'psoriasis_eczema_telehealth'
  | 'skin_cancer_screening_tele'
  | 'cosmetic_dermatology_tele'
  | 'therapy_telehealth'
  | 'psychiatry_telehealth'
  | 'addiction_telehealth'
  | 'couples_therapy_telehealth'
  | 'child_psychology_telehealth'
  | 'eating_disorder_telehealth'
  | 'ptsd_trauma_telehealth'
  | 'adhd_telehealth'
  | 'anxiety_depression_telehealth'
  | 'ocd_telehealth'
  | 'grief_counseling_telehealth'
  | 'anger_management_telehealth'
  | 'family_therapy_telehealth'
  | 'group_therapy_telehealth'
  | 'licensed_psychedelic_therapy'
  | 'womens_health_telehealth'
  | 'mens_health_telehealth'
  | 'sexual_health_telehealth'
  | 'fertility_telehealth'
  | 'hormone_therapy_telehealth'
  | 'menopause_telehealth'
  | 'prenatal_telehealth'
  | 'postpartum_telehealth'
  | 'erectile_dysfunction_tele'
  | 'hair_loss_telehealth'
  | 'birth_control_telehealth'
  | 'sti_testing_telehealth'
  | 'dental_telehealth'
  | 'orthodontics_telehealth'
  | 'optometry_telehealth'
  | 'oral_surgery_consultation'
  | 'vision_therapy_telehealth'
  | 'cardiology_telehealth'
  | 'endocrinology_telehealth'
  | 'neurology_telehealth'
  | 'orthopedic_telehealth'
  | 'allergy_telehealth'
  | 'ent_telehealth'
  | 'rheumatology_telehealth'
  | 'gastroenterology_telehealth'
  | 'infectious_disease_telehealth'
  | 'pulmonology_telehealth'
  | 'nephrology_telehealth'
  | 'oncology_telehealth'
  | 'hematology_telehealth'
  | 'urology_telehealth'
  | 'weight_management_telehealth'
  | 'glp1_weight_loss_tele'
  | 'diabetes_management_tele'
  | 'metabolic_health_tele'
  | 'bariatric_telehealth'
  | 'physical_therapy_telehealth'
  | 'occupational_therapy_tele'
  | 'speech_therapy_telehealth'
  | 'pain_management_telehealth'
  | 'cardiac_rehab_telehealth'
  | 'pelvic_floor_telehealth'
  | 'vestibular_telehealth'
  | 'sleep_medicine_telehealth'
  | 'chronic_disease_management'
  | 'chronic_pain_telehealth'
  | 'migraine_telehealth'
  | 'asthma_copd_telehealth'
  | 'nutrition_telehealth'
  | 'naturopathic_telehealth'
  | 'functional_medicine_telehealth'
  | 'acupuncture_telehealth'
  | 'health_coaching_telehealth'
  | 'integrative_medicine_tele'
  | 'ayurvedic_telehealth'
  | 'genetic_counseling_telehealth'
  | 'pharmacogenomics_tele'
  | 'rare_disease_telehealth'
  | 'second_opinion_telehealth'
  | 'vet_telehealth'
  | 'pet_behavior_telehealth'
  | 'exotic_pet_telehealth'
  | 'equine_telehealth'
  | 'veterinary_services'
  | 'class_action_settlement'
  | 'mastermind_event'
  | 'webinar_event'
  | 'bootcamp_event'
  | 'convention_expo'
  | 'conference_summit'
  | 'workshop_seminar'
  | 'hackathon'
  | 'pitch_competition'
  | 'training_certification_event'
  | 'product_launch_event'
  | 'investor_demo_day'
  | 'industry_awards_event'
  | 'panel_discussion_event'
  | 'virtual_summit'
  | 'corporate_training_event'
  | 'meetup_event'
  | 'dinner_event'
  | 'alumni_event'
  | 'community_gathering'
  | 'singles_event'
  | 'professional_happy_hour'
  | 'women_networking_event'
  | 'founders_dinner'
  | 'industry_mixer'
  | 'concert_event'
  | 'party_event'
  | 'comedy_show'
  | 'theater_performance'
  | 'film_screening'
  | 'art_exhibition'
  | 'food_festival'
  | 'music_festival'
  | 'cultural_festival'
  | 'fashion_show'
  | 'drag_show'
  | 'magic_show'
  | 'dance_performance'
  | 'poetry_spoken_word'
  | 'trivia_night'
  | 'wine_tasting_event'
  | 'beer_festival'
  | 'car_show'
  | 'fitness_challenge_event'
  | 'marathon_race'
  | 'tournament_event'
  | 'fight_event'
  | 'yoga_retreat_event'
  | 'outdoor_adventure_event'
  | 'esports_tournament'
  | 'obstacle_course_race'
  | 'cycling_event'
  | 'swim_meet'
  | 'golf_tournament'
  | 'pickleball_tournament'
  | 'crossfit_competition'
  | 'martial_arts_tournament'
  | 'surfing_competition'
  | 'wellness_retreat'
  | 'spiritual_retreat'
  | 'couples_retreat'
  | 'plant_medicine_retreat'
  | 'luxury_experience_event'
  | 'detox_retreat'
  | 'silent_retreat'
  | 'creative_retreat'
  | 'leadership_retreat'
  | 'mens_retreat'
  | 'womens_retreat'
  | 'digital_detox_retreat'
  | 'fundraiser_event'
  | 'awareness_event'
  | 'volunteer_event'
  | 'charity_auction'
  | 'benefit_concert'
  | 'charity_run_walk'
  | 'environmental_cleanup'
  | 'family_festival'
  | 'kids_event'
  | 'holiday_event'
  | 'farmers_market_event'
  | 'block_party'
  | 'graduation_ceremony'
  | 'memorial_event'
  | 'stock_market_newsletter'
  | 'crypto_newsletter'
  | 'personal_finance_newsletter'
  | 'real_estate_newsletter'
  | 'fintech_newsletter'
  | 'venture_capital_newsletter'
  | 'options_trading_newsletter'
  | 'forex_newsletter'
  | 'macro_economics_newsletter'
  | 'alternative_investing_newsletter'
  | 'tax_strategy_newsletter'
  | 'ai_newsletter'
  | 'tech_industry_newsletter'
  | 'cybersecurity_newsletter'
  | 'developer_newsletter'
  | 'product_newsletter'
  | 'devops_newsletter'
  | 'open_source_newsletter'
  | 'robotics_newsletter'
  | 'climate_tech_newsletter'
  | 'travel_newsletter'
  | 'fashion_newsletter'
  | 'parenting_newsletter'
  | 'sports_newsletter'
  | 'gaming_newsletter'
  | 'music_entertainment_newsletter'
  | 'book_reading_newsletter'
  | 'dating_relationships_newsletter'
  | 'home_design_newsletter'
  | 'pet_newsletter'
  | 'wine_spirits_newsletter'
  | 'automotive_newsletter'
  | 'political_newsletter'
  | 'geopolitics_newsletter'
  | 'media_journalism_newsletter'
  | 'defense_security_newsletter'
  | 'legal_policy_newsletter'
  | 'design_newsletter'
  | 'education_newsletter'
  | 'science_newsletter'
  | 'philosophy_newsletter'
  | 'sustainability_newsletter'
  | 'architecture_newsletter'
  | 'history_newsletter'
  | 'psychology_newsletter'
  | 'career_newsletter'
  | 'spirituality_newsletter'
  | 'self_improvement_newsletter'
  | 'productivity_newsletter'
  | 'faith_newsletter'
  | 'gym_facility'
  | 'crossfit_box'
  | 'yoga_studio'
  | 'pilates_studio'
  | 'martial_arts_gym'
  | 'boxing_gym'
  | 'climbing_gym'
  | 'dance_studio'
  | 'swimming_pool'
  | 'sports_facility'
  | 'golf_course'
  | 'bowling_alley'
  | 'skating_rink'
  | 'trampoline_park'
  | 'tennis_club'
  | 'pickleball_facility'
  | 'gymnastics_center'
  | 'spin_studio'
  | 'barre_studio'
  | 'personal_training_studio_bm'
  | 'recovery_studio'
  | 'indoor_soccer'
  | 'batting_cage'
  | 'shooting_range'
  | 'archery_range'
  | 'equestrian_center'
  | 'fine_dining'
  | 'fast_casual_restaurant'
  | 'fast_food'
  | 'food_truck'
  | 'bar_lounge'
  | 'brewery_taproom'
  | 'winery_tasting'
  | 'coffee_shop_cafe'
  | 'bakery'
  | 'juice_smoothie_bar'
  | 'pizza_shop'
  | 'sushi_restaurant'
  | 'ethnic_restaurant'
  | 'catering_kitchen'
  | 'ghost_kitchen'
  | 'ice_cream_shop'
  | 'donut_shop'
  | 'deli_sandwich_shop'
  | 'steakhouse'
  | 'seafood_restaurant'
  | 'bbq_restaurant'
  | 'mexican_restaurant'
  | 'italian_restaurant'
  | 'chinese_restaurant'
  | 'indian_restaurant'
  | 'thai_restaurant'
  | 'korean_restaurant'
  | 'mediterranean_restaurant'
  | 'vegan_vegetarian_restaurant'
  | 'brunch_restaurant'
  | 'ramen_noodle_shop'
  | 'poke_bowl_shop'
  | 'bubble_tea_shop'
  | 'wine_bar'
  | 'cocktail_bar'
  | 'sports_bar'
  | 'hookah_lounge'
  | 'distillery'
  | 'butcher_shop'
  | 'cheese_shop'
  | 'farmers_market_stall'
  | 'food_hall_vendor'
  | 'commercial_farming'
  | 'livestock_ranching'
  | 'hydroponic_vertical_farming'
  | 'forestry_logging'
  | 'aquaculture_fisheries'
  | 'vineyard_winery_production'
  | 'cannabis_cultivation'
  | 'hemp_farming'
  | 'grain_production'
  | 'agricultural_cooperative'
  | 'fertilizer_pesticide_sales'
  | 'farm_equipment_sales'
  | 'boutique_store'
  | 'clothing_store'
  | 'shoe_store'
  | 'jewelry_store'
  | 'electronics_store'
  | 'bookstore'
  | 'pet_store'
  | 'toy_store'
  | 'sporting_goods_store'
  | 'thrift_store'
  | 'smoke_shop'
  | 'cannabis_dispensary'
  | 'convenience_store'
  | 'grocery_store'
  | 'liquor_store'
  | 'florist'
  | 'gift_shop'
  | 'furniture_store'
  | 'home_improvement_store'
  | 'art_gallery_retail'
  | 'music_instrument_store'
  | 'outdoor_recreation_store'
  | 'phone_repair_store'
  | 'watch_store'
  | 'bridal_shop'
  | 'maternity_store'
  | 'kids_store'
  | 'sneaker_store'
  | 'vintage_store'
  | 'comic_book_store'
  | 'record_store'
  | 'craft_supply_store'
  | 'fabric_store'
  | 'health_food_store'
  | 'vitamin_supplement_store'
  | 'optical_store'
  | 'mattress_store'
  | 'appliance_store'
  | 'kitchen_bath_store'
  | 'tile_flooring_store'
  | 'paint_store'
  | 'garden_center'
  | 'gun_store'
  | 'pawn_shop'
  | 'dollar_store'
  | 'hair_salon'
  | 'nail_salon'
  | 'day_spa'
  | 'med_spa'
  | 'massage_studio'
  | 'tattoo_parlor'
  | 'tanning_salon'
  | 'beauty_supply_store'
  | 'lash_brow_studio'
  | 'waxing_studio'
  | 'sauna_bathhouse'
  | 'cryotherapy_studio'
  | 'float_sensory_studio'
  | 'iv_therapy_lounge'
  | 'teeth_whitening_studio'
  | 'microblading_studio'
  | 'spray_tan_studio'
  | 'blowout_bar'
  | 'mens_barbershop'
  | 'kids_salon'
  | 'medical_office'
  | 'dental_office'
  | 'chiropractic_office'
  | 'physical_therapy_clinic'
  | 'optometry_office'
  | 'dermatology_clinic'
  | 'urgent_care_clinic'
  | 'pharmacy'
  | 'veterinary_clinic'
  | 'mental_health_clinic'
  | 'fertility_clinic'
  | 'acupuncture_clinic'
  | 'hearing_aid_center'
  | 'orthopedic_clinic'
  | 'pediatric_clinic'
  | 'cosmetic_surgery_center'
  | 'allergy_clinic'
  | 'pain_management_clinic'
  | 'dialysis_center'
  | 'imaging_center'
  | 'lab_testing_center'
  | 'sleep_clinic'
  | 'weight_loss_clinic'
  | 'hormone_therapy_clinic'
  | 'addiction_treatment_center'
  | 'rehabilitation_center'
  | 'occupational_therapy_clinic'
  | 'speech_therapy_clinic'
  | 'wound_care_center'
  | 'funeral_home_mortuary'
  | 'crematory_service'
  | 'cemetery_memorial_park'
  | 'casket_urn_retailer'
  | 'pet_cremation_service'
  | 'biohazard_cleanup'
  | 'estate_liquidation'
  | 'hotel'
  | 'motel'
  | 'boutique_hotel'
  | 'bed_and_breakfast'
  | 'hostel'
  | 'resort'
  | 'campground_rv'
  | 'vacation_rental_property'
  | 'extended_stay'
  | 'glamping_site'
  | 'cabin_rental'
  | 'eco_lodge'
  | 'retreat_center'
  | 'tutoring_center'
  | 'daycare_center'
  | 'preschool'
  | 'learning_center'
  | 'music_school'
  | 'art_school'
  | 'driving_school'
  | 'language_school'
  | 'trade_school'
  | 'coding_bootcamp_location'
  | 'montessori_school'
  | 'after_school_program'
  | 'swim_school'
  | 'cooking_school'
  | 'test_prep_center'
  | 'special_needs_center'
  | 'adult_education_center'
  | 'flight_school'
  | 'cosmetology_school'
  | 'movie_theater'
  | 'escape_room'
  | 'arcade'
  | 'mini_golf'
  | 'laser_tag'
  | 'go_kart'
  | 'amusement_park'
  | 'museum'
  | 'zoo_aquarium'
  | 'theater_venue'
  | 'nightclub'
  | 'karaoke_bar'
  | 'comedy_club'
  | 'live_music_venue'
  | 'axe_throwing'
  | 'virtual_reality_arcade'
  | 'board_game_cafe'
  | 'cat_cafe'
  | 'haunted_house'
  | 'water_park'
  | 'indoor_playground'
  | 'trampoline_park_entertainment'
  | 'concert_venue'
  | 'drive_in_theater'
  | 'billiards_hall'
  | 'dart_bar'
  | 'batting_cage_entertainment'
  | 'indoor_skydiving'
  | 'law_office'
  | 'real_estate_office'
  | 'insurance_office'
  | 'accounting_office'
  | 'bank_credit_union'
  | 'printing_shop'
  | 'shipping_center'
  | 'dry_cleaner'
  | 'laundromat'
  | 'storage_facility'
  | 'coworking_space'
  | 'check_cashing'
  | 'title_company'
  | 'travel_agency_storefront'
  | 'staffing_office'
  | 'financial_advisor_office'
  | 'immigration_office'
  | 'bail_bonds_office'
  | 'pet_grooming'
  | 'dog_daycare'
  | 'pet_boarding'
  | 'dog_training_facility'
  | 'pet_spa'
  | 'aquatic_pet_store'
  | 'pet_bakery'
  | 'pet_photography_studio'
  | 'plumbing_showroom'
  | 'hvac_showroom'
  | 'solar_showroom'
  | 'kitchen_design_showroom'
  | 'bath_design_showroom'
  | 'window_door_showroom'
  | 'pool_spa_showroom'
  | 'fireplace_showroom'
  | 'countertop_showroom'
  | 'nonprofit_organization'
  | 'charity_foundation'
  | 'political_campaign'
  | 'community_organization'
  | 'environmental_nonprofit'
  | 'education_nonprofit'
  | 'health_nonprofit'
  | 'animal_welfare_nonprofit'
  | 'arts_culture_nonprofit'
  | 'social_justice_nonprofit'
  | 'veterans_nonprofit'
  | 'youth_nonprofit'
  | 'disaster_relief_nonprofit'
  | 'food_bank'
  | 'housing_nonprofit'
  | 'government_agency'
  | 'public_utility'
  | 'public_library'
  | 'public_school'
  | 'municipal_service'
  | 'military_installation'
  | 'embassy_consulate'
  | 'niche_service'
  | 'niche_product'
  | 'hybrid_business'
  | 'other_general'
  | 'holding_company'
  | 'family_office'
  | 'cooperative'
  | 'social_enterprise'
  | 'incubator_accelerator'
  | 'coworking_community'
  | 'media_company'
  | 'research_lab';

/**
 * An invoice represents an itemized bill sent by a company to a customer for a
 * specific product and plan, tracking the amount owed, due date, and payment
 * status.
 */
export interface Invoice {
  /**
   * The unique identifier for the invoice.
   */
  id: string;

  /**
   * The datetime the invoice was created.
   */
  created_at: string;

  /**
   * The plan that this invoice charges for.
   */
  current_plan: Invoice.CurrentPlan;

  /**
   * The deadline by which payment is expected. Null if the invoice is collected
   * automatically.
   */
  due_date: string | null;

  /**
   * The email address of the customer this invoice is addressed to. Null if no email
   * is on file.
   */
  email_address: string | null;

  /**
   * A signed token that allows fetching invoice data publicly without
   * authentication.
   */
  fetch_invoice_token: string;

  /**
   * The sequential invoice number for display purposes.
   */
  number: string;

  /**
   * The current payment status of the invoice, such as draft, open, paid, or void.
   */
  status: InvoiceStatus;

  /**
   * The user this invoice is addressed to. Null if the user account has been
   * removed.
   */
  user: Invoice.User | null;
}

export namespace Invoice {
  /**
   * The plan that this invoice charges for.
   */
  export interface CurrentPlan {
    /**
     * The unique identifier for the plan.
     */
    id: string;

    /**
     * The currency used for all prices on this plan (e.g., 'usd', 'eur'). All monetary
     * amounts on the plan are denominated in this currency.
     */
    currency: Shared.Currency;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * The user this invoice is addressed to. Null if the user account has been
   * removed.
   */
  export interface User {
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

/**
 * An invoice represents an itemized bill sent by a company to a customer for a
 * specific product and plan, tracking the amount owed, due date, and payment
 * status.
 */
export interface InvoiceListItem {
  /**
   * The unique identifier for the invoice.
   */
  id: string;

  /**
   * The datetime the invoice was created.
   */
  created_at: string;

  /**
   * The plan that this invoice charges for.
   */
  current_plan: InvoiceListItem.CurrentPlan;

  /**
   * The deadline by which payment is expected. Null if the invoice is collected
   * automatically.
   */
  due_date: string | null;

  /**
   * The email address of the customer this invoice is addressed to. Null if no email
   * is on file.
   */
  email_address: string | null;

  /**
   * A signed token that allows fetching invoice data publicly without
   * authentication.
   */
  fetch_invoice_token: string;

  /**
   * The sequential invoice number for display purposes.
   */
  number: string;

  /**
   * The current payment status of the invoice, such as draft, open, paid, or void.
   */
  status: InvoiceStatus;

  /**
   * The user this invoice is addressed to. Null if the user account has been
   * removed.
   */
  user: InvoiceListItem.User | null;
}

export namespace InvoiceListItem {
  /**
   * The plan that this invoice charges for.
   */
  export interface CurrentPlan {
    /**
     * The unique identifier for the plan.
     */
    id: string;

    /**
     * The currency used for all prices on this plan (e.g., 'usd', 'eur'). All monetary
     * amounts on the plan are denominated in this currency.
     */
    currency: Shared.Currency;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * The user this invoice is addressed to. Null if the user account has been
   * removed.
   */
  export interface User {
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

/**
 * The different statuses an invoice can be in
 */
export type InvoiceStatus = 'draft' | 'open' | 'paid' | 'past_due' | 'void';

/**
 * The different most recent actions a member can have.
 */
export type MemberMostRecentActions =
  | 'canceling'
  | 'churned'
  | 'finished_split_pay'
  | 'paused'
  | 'paid_subscriber'
  | 'paid_once'
  | 'expiring'
  | 'joined'
  | 'drafted'
  | 'left'
  | 'trialing'
  | 'pending_entry'
  | 'renewing'
  | 'past_due';

/**
 * The different statuses a Member can have.
 */
export type MemberStatuses = 'drafted' | 'joined' | 'left';

/**
 * A membership represents an active relationship between a user and a product. It
 * tracks the user's access, billing status, and renewal schedule.
 */
export interface Membership {
  /**
   * The unique identifier for the membership.
   */
  id: string;

  /**
   * Whether this membership is set to cancel at the end of the current billing
   * cycle. Only applies to memberships with a recurring plan.
   */
  cancel_at_period_end: boolean;

  /**
   * The different reasons a user can choose for why they are canceling their
   * membership.
   */
  cancel_option: MembershipsAPI.CancelOptions | null;

  /**
   * The time the customer initiated cancellation of this membership. As a Unix
   * timestamp. Null if the membership has not been canceled.
   */
  canceled_at: string | null;

  /**
   * Free-text explanation provided by the customer when canceling. Null if the
   * customer did not provide a reason.
   */
  cancellation_reason: string | null;

  /**
   * The company this membership belongs to.
   */
  company: Membership.Company;

  /**
   * The datetime the membership was created.
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Currency | null;

  /**
   * The customer's responses to custom checkout questions configured on the product
   * at the time of purchase.
   */
  custom_field_responses: Array<Membership.CustomFieldResponse>;

  /**
   * The time the user first joined the company associated with this membership. As a
   * Unix timestamp. Null if the member record does not exist.
   */
  joined_at: string | null;

  /**
   * The software license key associated with this membership. Only present if the
   * product includes a Whop Software Licensing experience. Null otherwise.
   */
  license_key: string | null;

  /**
   * The URL where the customer can view and manage this membership, including
   * cancellation and plan changes. Null if no member record exists.
   */
  manage_url: string | null;

  /**
   * The member record linking the user to the company for this membership. Null if
   * the member record has not been created yet.
   */
  member: Membership.Member | null;

  /**
   * Custom key-value pairs for the membership (commonly used for software licensing,
   * e.g., HWID). Max 50 keys, 500 chars per key, 5000 chars per value.
   */
  metadata: { [key: string]: unknown };

  /**
   * Whether recurring payment collection for this membership is temporarily paused
   * by the company.
   */
  payment_collection_paused: boolean;

  /**
   * The plan the customer purchased to create this membership.
   */
  plan: Membership.Plan;

  /**
   * The product this membership grants access to.
   */
  product: Membership.Product;

  /**
   * The promotional code currently applied to this membership's billing. Null if no
   * promo code is active.
   */
  promo_code: Membership.PromoCode | null;

  /**
   * The end of the current billing period for this recurring membership. As a Unix
   * timestamp. Null if the membership is not recurring.
   */
  renewal_period_end: string | null;

  /**
   * The start of the current billing period for this recurring membership. As a Unix
   * timestamp. Null if the membership is not recurring.
   */
  renewal_period_start: string | null;

  /**
   * The current lifecycle status of the membership (e.g., active, trialing,
   * past_due, canceled, expired, completed).
   */
  status: MembershipStatus;

  /**
   * The datetime the membership was last updated.
   */
  updated_at: string;

  /**
   * The user who owns this membership. Null if the user account has been deleted.
   */
  user: Membership.User | null;
}

export namespace Membership {
  /**
   * The company this membership belongs to.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * The response from a custom field on checkout
   */
  export interface CustomFieldResponse {
    /**
     * The unique identifier for the custom field response.
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
   * The member record linking the user to the company for this membership. Null if
   * the member record has not been created yet.
   */
  export interface Member {
    /**
     * The unique identifier for the member.
     */
    id: string;
  }

  /**
   * The plan the customer purchased to create this membership.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product this membership grants access to.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The promotional code currently applied to this membership's billing. Null if no
   * promo code is active.
   */
  export interface PromoCode {
    /**
     * The unique identifier for the promo code.
     */
    id: string;
  }

  /**
   * The user who owns this membership. Null if the user account has been deleted.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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
  | 'drafted'
  | 'canceling';

/**
 * A message sent within an experience chat, direct message, or group chat.
 */
export interface Message {
  /**
   * Represents a unique identifier that is Base64 obfuscated. It is often used to
   * refetch an object or as key for a cache. The ID type appears in a JSON response
   * as a String; however, it is not intended to be human-readable. When expected as
   * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
   * input value will be accepted as an ID.
   */
  id: string;

  /**
   * The message content formatted as Markdown. Null if the message has no text
   * content.
   */
  content: string | null;

  /**
   * The timestamp when this message was originally created.
   */
  created_at: string;

  /**
   * Whether the message content has been edited after it was originally sent.
   */
  is_edited: boolean;

  /**
   * Whether this message is pinned to the top of the channel for easy access.
   */
  is_pinned: boolean;

  /**
   * The classification of this message: regular, system, or automated.
   */
  message_type: DmsPostTypes;

  /**
   * A poll attached to this message. Null if the message does not contain a poll.
   */
  poll: Message.Poll | null;

  /**
   * Aggregated reaction counts on this message, filtered to a specific reaction
   * type.
   */
  poll_votes: Array<Message.PollVote>;

  /**
   * Aggregated reaction counts on this message, filtered to a specific reaction
   * type.
   */
  reaction_counts: Array<Message.ReactionCount>;

  /**
   * The unique identifier of the message this post is replying to. Null if this is
   * not a reply.
   */
  replying_to_message_id: string | null;

  /**
   * The timestamp when this message was last modified.
   */
  updated_at: string;

  /**
   * The user who authored this message.
   */
  user: Message.User;

  /**
   * The number of unique views this message has received. Null if view tracking is
   * not enabled for this channel.
   */
  view_count: number | null;
}

export namespace Message {
  /**
   * A poll attached to this message. Null if the message does not contain a poll.
   */
  export interface Poll {
    /**
     * The options for the poll
     */
    options: Array<Poll.Option> | null;
  }

  export namespace Poll {
    /**
     * Represents a single poll option
     */
    export interface Option {
      /**
       * The unique identifier for the poll option.
       */
      id: string;

      /**
       * The text of the poll option
       */
      text: string;
    }
  }

  /**
   * Represents a reaction count for a feed post
   */
  export interface PollVote {
    /**
     * The number of users who reacted
     */
    count: number;

    /**
     * The reaction that was used
     */
    option_id: string | null;
  }

  /**
   * Represents a reaction count for a feed post
   */
  export interface ReactionCount {
    /**
     * The number of users who reacted
     */
    count: number;

    /**
     * The emoji that was used in shortcode format (:heart:)
     */
    emoji: string | null;
  }

  /**
   * The user who authored this message.
   */
  export interface User {
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
 * A payment represents a completed or attempted charge. Payments track the amount,
 * status, currency, and payment method used.
 */
export interface Payment {
  /**
   * The unique identifier for the payment.
   */
  id: string;

  /**
   * How much the payment is for after fees
   */
  amount_after_fees: number;

  /**
   * The application fee charged on this payment.
   */
  application_fee: Payment.ApplicationFee | null;

  /**
   * Whether this payment was auto refunded or not
   */
  auto_refunded: boolean;

  /**
   * The address of the user who made the payment.
   */
  billing_address: Payment.BillingAddress | null;

  /**
   * The reason why a specific payment was billed
   */
  billing_reason: PaymentsAPI.BillingReasons | null;

  /**
   * Possible card brands that a payment token can have
   */
  card_brand: PaymentsAPI.CardBrands | null;

  /**
   * The last four digits of the card used to make this payment. Null if the payment
   * was not made with a card.
   */
  card_last4: string | null;

  /**
   * The company for the payment.
   */
  company: Payment.Company | null;

  /**
   * The datetime the payment was created.
   */
  created_at: string;

  /**
   * The available currencies on the platform
   */
  currency: Currency | null;

  /**
   * When an alert came in that this transaction will be disputed
   */
  dispute_alerted_at: string | null;

  /**
   * If the payment failed, the reason for the failure.
   */
  failure_message: string | null;

  /**
   * The time of the last payment attempt.
   */
  last_payment_attempt: string | null;

  /**
   * The member attached to this payment.
   */
  member: Payment.Member | null;

  /**
   * The membership attached to this payment.
   */
  membership: Payment.Membership | null;

  /**
   * The custom metadata stored on this payment. This will be copied over to the
   * checkout configuration for which this payment was made
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The time of the next schedule payment retry.
   */
  next_payment_attempt: string | null;

  /**
   * The time at which this payment was successfully collected. Null if the payment
   * has not yet succeeded. As a Unix timestamp.
   */
  paid_at: string | null;

  /**
   * The tokenized payment method reference used for this payment. Null if no token
   * was used.
   */
  payment_method: Payment.PaymentMethod | null;

  /**
   * The different types of payment methods that can be used.
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

  /**
   * The number of failed payment attempts for the payment.
   */
  payments_failed: number | null;

  /**
   * The plan attached to this payment.
   */
  plan: Payment.Plan | null;

  /**
   * The product this payment was made for
   */
  product: Payment.Product | null;

  /**
   * The promo code used for this payment.
   */
  promo_code: Payment.PromoCode | null;

  /**
   * True only for payments that are `paid`, have not been fully refunded, and were
   * processed by a payment processor that allows refunds.
   */
  refundable: boolean;

  /**
   * The payment refund amount(if applicable).
   */
  refunded_amount: number | null;

  /**
   * When the payment was refunded (if applicable).
   */
  refunded_at: string | null;

  /**
   * True when the payment status is `open` and its membership is in one of the
   * retry-eligible states (`active`, `trialing`, `completed`, or `past_due`);
   * otherwise false. Used to decide if Whop can attempt the charge again.
   */
  retryable: boolean;

  /**
   * The status of a receipt
   */
  status: ReceiptStatus | null;

  /**
   * The friendly status of the payment.
   */
  substatus: FriendlyReceiptStatus;

  /**
   * The subtotal to show to the creator (excluding buyer fees).
   */
  subtotal: number | null;

  /**
   * The total to show to the creator (excluding buyer fees).
   */
  total: number | null;

  /**
   * The total in USD to show to the creator (excluding buyer fees).
   */
  usd_total: number | null;

  /**
   * The user that made this payment.
   */
  user: Payment.User | null;

  /**
   * True when the payment is tied to a membership in `past_due`, the payment status
   * is `open`, and the processor allows voiding payments; otherwise false.
   */
  voidable: boolean;
}

export namespace Payment {
  /**
   * The application fee charged on this payment.
   */
  export interface ApplicationFee {
    /**
     * The unique identifier for the application fee.
     */
    id: string;

    /**
     * The application fee amount.
     */
    amount: number;

    /**
     * The amount of the application fee that has been captured.
     */
    amount_captured: number;

    /**
     * The amount of the application fee that has been refunded.
     */
    amount_refunded: number;

    /**
     * The datetime the application fee was created.
     */
    created_at: string;

    /**
     * The currency of the application fee.
     */
    currency: Shared.Currency;
  }

  /**
   * The address of the user who made the payment.
   */
  export interface BillingAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The country of the address.
     */
    country: string | null;

    /**
     * The line 1 of the address.
     */
    line1: string | null;

    /**
     * The line 2 of the address.
     */
    line2: string | null;

    /**
     * The name of the customer.
     */
    name: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state of the address.
     */
    state: string | null;
  }

  /**
   * The company for the payment.
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
   * The member attached to this payment.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;

    /**
     * The phone number for the member, if available.
     */
    phone: string | null;
  }

  /**
   * The membership attached to this payment.
   */
  export interface Membership {
    /**
     * The unique identifier for the membership.
     */
    id: string;

    /**
     * The state of the membership.
     */
    status: Shared.MembershipStatus;
  }

  /**
   * The tokenized payment method reference used for this payment. Null if no token
   * was used.
   */
  export interface PaymentMethod {
    /**
     * The unique identifier for the payment token.
     */
    id: string;

    /**
     * The card data associated with the payment method, if its a debit or credit card.
     */
    card: PaymentMethod.Card | null;

    /**
     * The datetime the payment token was created.
     */
    created_at: string;

    /**
     * The payment method type of the payment method
     */
    payment_method_type: PaymentsAPI.PaymentMethodTypes;
  }

  export namespace PaymentMethod {
    /**
     * The card data associated with the payment method, if its a debit or credit card.
     */
    export interface Card {
      /**
       * Possible card brands that a payment token can have
       */
      brand: PaymentsAPI.CardBrands | null;

      /**
       * The two-digit expiration month of the card (1-12). Null if not available.
       */
      exp_month: number | null;

      /**
       * The two-digit expiration year of the card (e.g., 27 for 2027). Null if not
       * available.
       */
      exp_year: number | null;

      /**
       * The last four digits of the card number. Null if not available.
       */
      last4: string | null;
    }
  }

  /**
   * The plan attached to this payment.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product this payment was made for
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The URL slug used in the product's public link (e.g., 'my-product' in
     * whop.com/company/my-product).
     */
    route: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }

  /**
   * The promo code used for this payment.
   */
  export interface PromoCode {
    /**
     * The unique identifier for the promo code.
     */
    id: string;

    /**
     * The discount amount. Interpretation depends on promo_type: if 'percentage', this
     * is the percentage (e.g., 20 means 20% off); if 'flat_amount', this is dollars
     * off (e.g., 10.00 means $10.00 off).
     */
    amount_off: number;

    /**
     * The monetary currency of the promo code.
     */
    base_currency: Shared.Currency;

    /**
     * The specific code used to apply the promo at checkout.
     */
    code: string | null;

    /**
     * The number of months the promo is applied for.
     */
    number_of_intervals: number | null;

    /**
     * The type (% or flat amount) of the promo.
     */
    promo_type: Shared.PromoType;
  }

  /**
   * The user that made this payment.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's email address. Requires the member:email:read permission to access.
     * Null if not authorized.
     */
    email: string | null;

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

/**
 * A plan defines pricing and billing terms for a checkout. Plans can optionally
 * belong to a product, where they represent different pricing options such as
 * one-time payments, recurring subscriptions, or free trials.
 */
export interface Plan {
  /**
   * The unique identifier for the plan.
   */
  id: string;

  /**
   * The number of days between each recurring charge. Null for one-time plans. For
   * example, 30 for monthly or 365 for annual billing.
   */
  billing_period: number | null;

  /**
   * Whether tax is collected on purchases of this plan, based on the company's tax
   * configuration.
   */
  collect_tax: boolean;

  /**
   * The company that sells this plan. Null for standalone invoice plans not linked
   * to a company.
   */
  company: Plan.Company | null;

  /**
   * The datetime the plan was created.
   */
  created_at: string;

  /**
   * The currency used for all prices on this plan (e.g., 'usd', 'eur'). All monetary
   * amounts on the plan are denominated in this currency.
   */
  currency: Currency;

  /**
   * Custom input fields displayed on the checkout form that collect additional
   * information from the buyer.
   */
  custom_fields: Array<Plan.CustomField>;

  /**
   * A text description of the plan visible to customers. Maximum 500 characters.
   * Null if no description is set.
   */
  description: string | null;

  /**
   * The number of days until the membership expires (for expiration-based plans).
   * For example, 365 for a one-year access pass.
   */
  expiration_days: number | null;

  /**
   * The initial purchase price in the plan's base_currency (e.g., 49.99 for $49.99).
   * For one-time plans, this is the full price. For renewal plans, this is charged
   * on top of the first renewal_price.
   */
  initial_price: number;

  /**
   * Private notes visible only to the company owner and team members. Not shown to
   * customers. Null if no notes have been added.
   */
  internal_notes: string | null;

  /**
   * The invoice this plan was generated for. Null if the plan was not created for a
   * specific invoice.
   */
  invoice: Plan.Invoice | null;

  /**
   * The number of users who currently hold an active membership through this plan.
   * Only visible to authorized team members.
   */
  member_count: number | null;

  /**
   * The explicit payment method configuration specifying which payment methods are
   * enabled or disabled for this plan. Null if the plan uses default settings.
   */
  payment_method_configuration: Plan.PaymentMethodConfiguration | null;

  /**
   * The billing model for this plan: 'renewal' for recurring subscriptions or
   * 'one_time' for single payments.
   */
  plan_type: PlanType;

  /**
   * The product that this plan belongs to. Null for standalone one-off purchases not
   * linked to a product.
   */
  product: Plan.Product | null;

  /**
   * The full URL where customers can purchase this plan directly, bypassing the
   * product page.
   */
  purchase_url: string;

  /**
   * The method used to sell this plan: 'buy_now' for immediate purchase or
   * 'waitlist' for waitlist-based access.
   */
  release_method: ReleaseMethod;

  /**
   * The recurring price charged every billing_period in the plan's base_currency
   * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
   */
  renewal_price: number;

  /**
   * The total number of installment payments required before the subscription
   * pauses. Null if split pay is not configured. Must be greater than 1.
   */
  split_pay_required_payments: number | null;

  /**
   * The number of units available for purchase. Only visible to authorized team
   * members. Null if the requester lacks permission.
   */
  stock: number | null;

  /**
   * How tax is handled for this plan: 'inclusive' (tax included in price),
   * 'exclusive' (tax added at checkout), or 'unspecified' (tax not configured).
   */
  tax_type: TaxType;

  /**
   * The display name of the plan shown to customers on the product page and at
   * checkout. Maximum 30 characters. Null if no title has been set.
   */
  title: string | null;

  /**
   * The number of free trial days before the first charge on a renewal plan. Null if
   * no trial is configured or the current user has already used a trial for this
   * plan.
   */
  trial_period_days: number | null;

  /**
   * When true, the plan has unlimited stock (stock field is ignored). When false,
   * purchases are limited by the stock field.
   */
  unlimited_stock: boolean;

  /**
   * The datetime the plan was last updated.
   */
  updated_at: string;

  /**
   * Controls whether the plan is visible to customers. When set to 'hidden', the
   * plan is only accessible via direct link.
   */
  visibility: Visibility;
}

export namespace Plan {
  /**
   * The company that sells this plan. Null for standalone invoice plans not linked
   * to a company.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * An object representing a custom field for a plan.
   */
  export interface CustomField {
    /**
     * The unique identifier for the custom field.
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
   * The invoice this plan was generated for. Null if the plan was not created for a
   * specific invoice.
   */
  export interface Invoice {
    /**
     * The unique identifier for the invoice.
     */
    id: string;
  }

  /**
   * The explicit payment method configuration specifying which payment methods are
   * enabled or disabled for this plan. Null if the plan uses default settings.
   */
  export interface PaymentMethodConfiguration {
    /**
     * An array of payment method identifiers that are explicitly disabled. Only
     * applies if the include_platform_defaults is true.
     */
    disabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * An array of payment method identifiers that are explicitly enabled. This means
     * these payment methods will be shown on checkout. Example use case is to only
     * enable a specific payment method like cashapp, or extending the platform
     * defaults with additional methods.
     */
    enabled: Array<PaymentsAPI.PaymentMethodTypes>;

    /**
     * Whether Whop's platform default payment method enablement settings are included
     * in this configuration. The full list of default payment methods can be found in
     * the documentation at docs.whop.com/payments.
     */
    include_platform_defaults: boolean;
  }

  /**
   * The product that this plan belongs to. Null for standalone one-off purchases not
   * linked to a product.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The display name of the product shown to customers on the product page and in
     * search results.
     */
    title: string;
  }
}

/**
 * The type of plan that can be attached to a product
 */
export type PlanType = 'renewal' | 'one_time';

/**
 * A product is a digital good or service sold on Whop. Products contain plans for
 * pricing and experiences for content delivery.
 */
export interface Product {
  /**
   * The unique identifier for the product.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: BusinessTypes | null;

  /**
   * The company this product belongs to.
   */
  company: Product.Company;

  /**
   * The datetime the product was created.
   */
  created_at: string;

  /**
   * The call-to-action button label displayed on the product's purchase page (e.g.,
   * 'join', 'buy', 'subscribe').
   */
  custom_cta: CustomCta;

  /**
   * An optional URL that the call-to-action button links to instead of the default
   * checkout flow. Null if no custom URL is set.
   */
  custom_cta_url: string | null;

  /**
   * A custom text label that appears on the customer's bank or credit card statement
   * for purchases of this product. Maximum 22 characters, including the required
   * prefix WHOP\*.
   */
  custom_statement_descriptor: string | null;

  /**
   * A brief summary of what the product offers, displayed on product pages and
   * search results.
   */
  description: string | null;

  /**
   * A unique identifier used to create or update products via the API. When provided
   * on product creation endpoints, an existing product with this identifier will be
   * updated instead of creating a new one.
   */
  external_identifier: string | null;

  /**
   * The gallery images for this product, ordered by position.
   */
  gallery_images: Array<Product.GalleryImage>;

  /**
   * The commission rate (as a percentage) that affiliates earn on sales through the
   * Whop marketplace global affiliate program. Null if the program is not active.
   */
  global_affiliate_percentage: number | null;

  /**
   * The enrollment status of this product in the Whop marketplace global affiliate
   * program.
   */
  global_affiliate_status: GlobalAffiliateStatus;

  /**
   * A short marketing headline displayed prominently on the product's product page.
   */
  headline: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: IndustryTypes | null;

  /**
   * The commission rate (as a percentage) that existing members earn when referring
   * new customers through the member affiliate program. Null if the program is not
   * active.
   */
  member_affiliate_percentage: number | null;

  /**
   * The enrollment status of this product in the member affiliate program.
   */
  member_affiliate_status: GlobalAffiliateStatus;

  /**
   * The number of users who currently hold an active membership to this product.
   * Returns 0 if the company has disabled public member counts.
   */
  member_count: number;

  /**
   * The user who owns the company that sells this product.
   */
  owner_user: Product.OwnerUser;

  /**
   * The tax classification code applied to purchases of this product for sales tax
   * calculation. Null if no tax code is assigned.
   */
  product_tax_code: Product.ProductTaxCode | null;

  /**
   * The total number of published customer reviews for this product's company.
   */
  published_reviews_count: number;

  /**
   * The URL slug used in the product's public link (e.g., 'my-product' in
   * whop.com/company/my-product).
   */
  route: string;

  /**
   * The display name of the product shown to customers on the product page and in
   * search results.
   */
  title: string;

  /**
   * The datetime the product was last updated.
   */
  updated_at: string;

  /**
   * Whether this company has been verified by Whop's trust and safety team.
   */
  verified: boolean;

  /**
   * Controls whether the product is visible to customers. When set to 'hidden', the
   * product is only accessible via direct link.
   */
  visibility: Visibility;
}

export namespace Product {
  /**
   * The company this product belongs to.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
     */
    route: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;
  }

  /**
   * Represents an image attachment
   */
  export interface GalleryImage {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

  /**
   * The user who owns the company that sells this product.
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

  /**
   * The tax classification code applied to purchases of this product for sales tax
   * calculation. Null if no tax code is assigned.
   */
  export interface ProductTaxCode {
    /**
     * The unique identifier for the product tax code.
     */
    id: string;

    /**
     * The human-readable name of this tax classification (e.g., 'Digital - SaaS').
     */
    name: string;

    /**
     * The broad product category this tax code covers (e.g., physical goods, digital
     * services).
     */
    product_type: 'physical' | 'digital' | 'services';
  }
}

/**
 * A product is a digital good or service sold on Whop. Products contain plans for
 * pricing and experiences for content delivery.
 */
export interface ProductListItem {
  /**
   * The unique identifier for the product.
   */
  id: string;

  /**
   * The different business types a company can be.
   */
  business_type: BusinessTypes | null;

  /**
   * The datetime the product was created.
   */
  created_at: string;

  /**
   * A unique identifier used to create or update products via the API. When provided
   * on product creation endpoints, an existing product with this identifier will be
   * updated instead of creating a new one.
   */
  external_identifier: string | null;

  /**
   * A short marketing headline displayed prominently on the product's product page.
   */
  headline: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: IndustryTypes | null;

  /**
   * The number of users who currently hold an active membership to this product.
   * Returns 0 if the company has disabled public member counts.
   */
  member_count: number;

  /**
   * The total number of published customer reviews for this product's company.
   */
  published_reviews_count: number;

  /**
   * The URL slug used in the product's public link (e.g., 'my-product' in
   * whop.com/company/my-product).
   */
  route: string;

  /**
   * The display name of the product shown to customers on the product page and in
   * search results.
   */
  title: string;

  /**
   * The datetime the product was last updated.
   */
  updated_at: string;

  /**
   * Whether this company has been verified by Whop's trust and safety team.
   */
  verified: boolean;

  /**
   * Controls whether the product is visible to customers. When set to 'hidden', the
   * product is only accessible via direct link.
   */
  visibility: Visibility;
}

/**
 * The type of promo code used to discount a plan
 */
export type PromoType = 'percentage' | 'flat_amount';

/**
 * A single reaction left by a user on a feed post, such as a like or emoji.
 */
export interface Reaction {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The emoji used for this reaction in shortcode format. Null if the reaction type
   * is not emoji.
   */
  emoji: string | null;

  /**
   * The unique identifier of the post this reaction was left on.
   */
  resource_id: string;

  /**
   * The user who left this reaction on the post.
   */
  user: Reaction.User;
}

export namespace Reaction {
  /**
   * The user who left this reaction on the post.
   */
  export interface User {
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

/**
 * The status of a receipt
 */
export type ReceiptStatus = 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void';

/**
 * The methods of how a plan can be released.
 */
export type ReleaseMethod = 'buy_now' | 'waitlist';

/**
 * A physical shipment associated with a payment, including carrier details and
 * tracking information.
 */
export interface Shipment {
  /**
   * The unique identifier for the shipment.
   */
  id: string;

  /**
   * The shipping carrier responsible for delivering this shipment.
   */
  carrier: ShipmentCarrier;

  /**
   * The datetime the shipment was created.
   */
  created_at: string;

  /**
   * The estimated delivery date for this shipment. Null if the carrier has not
   * provided an estimate.
   */
  delivery_estimate: string | null;

  /**
   * The payment associated with this shipment. Null if the payment has been deleted
   * or is inaccessible.
   */
  payment: Shipment.Payment | null;

  /**
   * The shipping service level used for this shipment. Null if the carrier does not
   * specify a service tier.
   */
  service: string | null;

  /**
   * The current delivery status of this shipment.
   */
  status: ShipmentStatus;

  /**
   * The substatus of a shipment
   */
  substatus: ShipmentSubstatus | null;

  /**
   * The carrier-assigned tracking number used to look up shipment progress.
   */
  tracking_code: string;

  /**
   * The datetime the shipment was last updated.
   */
  updated_at: string;
}

export namespace Shipment {
  /**
   * The payment associated with this shipment. Null if the payment has been deleted
   * or is inaccessible.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
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
 * A messaging channel that can be a one-on-one DM, group chat, company support
 * conversation, or platform-level direct message.
 */
export interface SupportChannel {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The unique identifier of the company associated with this channel. Null if this
   * is not a support or company-scoped conversation.
   */
  company_id: string | null;

  /**
   * A custom display name assigned to this channel by the user. Null if no custom
   * name has been set.
   */
  custom_name: string | null;

  /**
   * The customer who initiated this support conversation. Null if this is not a
   * support chat.
   */
  customer_user: SupportChannel.CustomerUser | null;

  /**
   * The timestamp when the most recent message was sent in this channel. Null if no
   * messages have been sent.
   */
  last_message_at: string | null;

  /**
   * The timestamp when the linked support ticket was marked as resolved. Null if
   * unresolved or not a support chat.
   */
  resolved_at: string | null;
}

export namespace SupportChannel {
  /**
   * The customer who initiated this support conversation. Null if this is not a
   * support chat.
   */
  export interface CustomerUser {
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

/**
 * Whether or not the tax is included in a plan's price (or if it hasn't been set
 * up)
 */
export type TaxType = 'inclusive' | 'exclusive' | 'unspecified';

/**
 * A transfer of credit between two ledger accounts.
 */
export interface Transfer {
  /**
   * The unique identifier for the credit transaction transfer.
   */
  id: string;

  /**
   * The transfer amount in the currency specified by the currency field. For
   * example, 10.43 represents $10.43 USD.
   */
  amount: number;

  /**
   * The datetime the credit transaction transfer was created.
   */
  created_at: string;

  /**
   * The currency in which this transfer amount is denominated.
   */
  currency: Currency;

  /**
   * The entity receiving the transferred funds.
   */
  destination: Transfer.User | null | Transfer.Company | null;

  /**
   * The unique identifier of the ledger account receiving the funds.
   */
  destination_ledger_account_id: string;

  /**
   * The flat fee amount deducted from this transfer, in the transfer's currency.
   * Null if no flat fee was applied.
   */
  fee_amount: number | null;

  /**
   * Custom key-value pairs attached to this transfer. Maximum 50 keys, 500
   * characters per key, 5000 characters per value.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * A free-text note attached to this transfer by the sender. Null if no note was
   * provided.
   */
  notes: string | null;

  /**
   * The entity that sent the transferred funds.
   */
  origin: Transfer.User | null | Transfer.Company | null;

  /**
   * The unique identifier of the ledger account that sent the funds.
   */
  origin_ledger_account_id: string;
}

export namespace Transfer {
  /**
   * A user account on Whop. Contains profile information, identity details, and
   * social connections.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'User';

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A company is a seller on Whop. Companies own products, manage members, and
   * receive payouts.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
     */
    route: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;

    /**
     * The typename of this object
     */
    typename: 'Company';
  }

  /**
   * A user account on Whop. Contains profile information, identity details, and
   * social connections.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'User';

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }

  /**
   * A company is a seller on Whop. Companies own products, manage members, and
   * receive payouts.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The URL slug for the company's store page (e.g., 'pickaxe' in whop.com/pickaxe).
     */
    route: string;

    /**
     * The display name of the company shown to customers.
     */
    title: string;

    /**
     * The typename of this object
     */
    typename: 'Company';
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

/**
 * Who can comment on a forum feed
 */
export type WhoCanCommentTypes = 'everyone' | 'admins';

/**
 * Who can post on a chat feed
 */
export type WhoCanPost = 'everyone' | 'admins';

/**
 * Who can post on a forum feed
 */
export type WhoCanPostTypes = 'everyone' | 'admins';

/**
 * Who can react on a chat feed
 */
export type WhoCanReact = 'everyone' | 'no_one';

export type InvoiceListItemsCursorPage = CursorPage<InvoiceListItem>;

export type CourseLessonInteractionListItemsCursorPage = CursorPage<CourseLessonInteractionListItem>;

export type ProductListItemsCursorPage = CursorPage<ProductListItem>;
