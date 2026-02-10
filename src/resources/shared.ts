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
 * course, or app.
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
  | 'parties';

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
export type InvoiceStatus = 'open' | 'paid' | 'past_due' | 'void';

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
 * A payment represents a completed or attempted charge for a membership. Payments
 * track the amount, status, currency, and payment method used.
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
 * A plan defines pricing and billing terms for a product. Each product can have
 * multiple plans representing different pricing options, such as one-time
 * payments, recurring subscriptions, or free trials.
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
