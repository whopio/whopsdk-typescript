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
   * The API key for the app
   */
  api_key: App.APIKey | null;

  /**
   * The type of end-user an app is built for
   */
  app_type: AppsAPI.AppType;

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
   * The icon for the app. This icon is shown on discovery, on the product page, on
   * checkout, and as a default icon for the experiences.
   */
  icon: App.Icon | null;

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
   * The company that owns the app
   */
  export interface Company {
    /**
     * The unique identifier for the company.
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
     * The unique identifier for the user.
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
   * The icon for the app. This icon is shown on discovery, on the product page, on
   * checkout, and as a default icon for the experiences.
   */
  export interface Icon {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
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
   * The unique identifier for the app build.
   */
  id: string;

  /**
   * This is generated by the client and used to verify the integrity of the file
   * that is submitted. It is a SHA256 hash of the app build file.
   */
  checksum: string;

  /**
   * The datetime the app build was created.
   */
  created_at: string;

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
 * Represents a Chat feed
 */
export interface ChatChannel {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * Whether or not media is banned in this chat
   */
  ban_media: boolean;

  /**
   * Whether or not URLs are banned in this chat
   */
  ban_urls: boolean;

  /**
   * List of banned words in this chat
   */
  banned_words: Array<string>;

  /**
   * The experience for this chat
   */
  experience: ChatChannel.Experience;

  /**
   * The number of seconds a user needs to wait before posting again, if any
   */
  user_posts_cooldown_seconds: number | null;

  /**
   * Who can post on this chat
   */
  who_can_post: WhoCanPost;

  /**
   * Who can react on this chat
   */
  who_can_react: WhoCanReact;
}

export namespace ChatChannel {
  /**
   * The experience for this chat
   */
  export interface Experience {
    /**
     * The unique identifier for the experience.
     */
    id: string;

    /**
     * The written name of the description.
     */
    name: string;
  }
}

/**
 * A checkout session is a reusable configuration for a checkout, including the
 * plan, affiliate, and custom metadata. Payments and memberships created from a
 * checkout session inherit its metadata.
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
     * The interval in days at which the plan charges (renewal plans).
     */
    billing_period: number | null;

    /**
     * The respective currency identifier for the plan.
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
     * Indicates if the plan is a one time payment or recurring.
     */
    plan_type: Shared.PlanType;

    /**
     * This is the release method the business uses to sell this plan.
     */
    release_method: Shared.ReleaseMethod;

    /**
     * The recurring price charged every billing_period in the plan's base_currency
     * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
     */
    renewal_price: number;

    /**
     * The number of free trial days added before a renewal plan.
     */
    trial_period_days: number | null;

    /**
     * Shows or hides the plan from public/business view.
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
   * The creator pitch for the company.
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
   * The number of members in the company.
   */
  member_count: number;

  /**
   * A key-value store of data for the account, created/updated by the platform that
   * made the account.
   */
  metadata: { [key: string]: unknown } | null;

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
   * Whether Whop sends transactional emails to customers on behalf of this company.
   */
  send_customer_emails: boolean;

  /**
   * The social media accounts of the company
   */
  social_links: Array<Company.SocialLink>;

  /**
   * The title of the company.
   */
  title: string;

  /**
   * The datetime the company was last updated.
   */
  updated_at: string;

  /**
   * If the company is Whop Verified
   */
  verified: boolean;
}

export namespace Company {
  /**
   * The company's logo.
   */
  export interface Logo {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
  }

  /**
   * The user who owns this company
   */
  export interface OwnerUser {
    /**
     * The unique identifier for the user.
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
     * The unique identifier for the social link.
     */
    id: string;

    /**
     * The URL
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
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteraction {
  /**
   * The unique identifier for the lesson interaction.
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * The course for this lesson interaction
   */
  course: CourseLessonInteraction.Course;

  /**
   * The datetime the lesson interaction was created.
   */
  created_at: string;

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
   * The course for this lesson interaction
   */
  export interface Course {
    /**
     * The unique identifier for the course.
     */
    id: string;

    /**
     * The experience that the course belongs to
     */
    experience: Course.Experience;

    /**
     * The title of the course
     */
    title: string | null;
  }

  export namespace Course {
    /**
     * The experience that the course belongs to
     */
    export interface Experience {
      /**
       * The unique identifier for the experience.
       */
      id: string;
    }
  }

  /**
   * The lesson this interaction is for
   */
  export interface Lesson {
    /**
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The chapter this lesson belongs to
     */
    chapter: Lesson.Chapter;

    /**
     * The title of the lesson
     */
    title: string;
  }

  export namespace Lesson {
    /**
     * The chapter this lesson belongs to
     */
    export interface Chapter {
      /**
       * The unique identifier for the chapter.
       */
      id: string;
    }
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
    /**
     * The unique identifier for the user.
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
   * The unique identifier for the lesson interaction.
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * The datetime the lesson interaction was created.
   */
  created_at: string;

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
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The chapter this lesson belongs to
     */
    chapter: Lesson.Chapter;

    /**
     * The title of the lesson
     */
    title: string;
  }

  export namespace Lesson {
    /**
     * The chapter this lesson belongs to
     */
    export interface Chapter {
      /**
       * The unique identifier for the chapter.
       */
      id: string;
    }
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
    /**
     * The unique identifier for the user.
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
   * Responses collected from the user when submitting their entry.
   */
  custom_field_responses: Array<Entry.CustomFieldResponse> | null;

  /**
   * The waitlist plan the entry if for.
   */
  plan: Entry.Plan | null;

  /**
   * The product tied to this entry, if there is one.
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
   * The waitlist plan the entry if for.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The product tied to this entry, if there is one.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The user who created the entry.
   */
  export interface User {
    /**
     * The unique identifier for the user.
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
 * An experience is a feature or content module within a product, such as a chat,
 * course, or app.
 */
export interface Experience {
  /**
   * The unique identifier for the experience.
   */
  id: string;

  /**
   * The experience interface for this experience.
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
   * The logo for the experience.
   */
  image: Experience.Image | null;

  /**
   * Whether the experience is visible to the public
   */
  is_public: boolean;

  /**
   * The written name of the description.
   */
  name: string;

  /**
   * The order of the experience in the section
   */
  order: string | null;

  /**
   * The products that this experience is attached to. This defines which set of
   * customers have access and can view this experience. If empty, this experience is
   * only visible to authorized users of the company
   */
  products: Array<Experience.Product>;
}

export namespace Experience {
  /**
   * The experience interface for this experience.
   */
  export interface App {
    /**
     * The unique identifier for the app.
     */
    id: string;

    /**
     * The icon for the app. This icon is shown on discovery, on the product page, on
     * checkout, and as a default icon for the experiences.
     */
    icon: App.Icon | null;

    /**
     * The name of the app
     */
    name: string;
  }

  export namespace App {
    /**
     * The icon for the app. This icon is shown on discovery, on the product page, on
     * checkout, and as a default icon for the experiences.
     */
    export interface Icon {
      /**
       * This is the URL you use to render optimized attachments on the client. This
       * should be used for apps.
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
     * The slug/route of the company on the Whop site.
     */
    route: string;

    /**
     * The title of the company.
     */
    title: string;
  }

  /**
   * The logo for the experience.
   */
  export interface Image {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
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
     * The route of the product.
     */
    route: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }
}

/**
 * Represents a forum feed
 */
export interface Forum {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The email notification preference for this forum
   */
  email_notification_preference: EmailNotificationPreferences;

  /**
   * The experience for this forum
   */
  experience: Forum.Experience;

  /**
   * Who can comment on this forum
   */
  who_can_comment: WhoCanCommentTypes;

  /**
   * Who can post on this forum
   */
  who_can_post: WhoCanPostTypes;
}

export namespace Forum {
  /**
   * The experience for this forum
   */
  export interface Experience {
    /**
     * The unique identifier for the experience.
     */
    id: string;

    /**
     * The written name of the description.
     */
    name: string;
  }
}

/**
 * Represents a post in forum
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
   * The amount of comments on this post
   */
  comment_count: number;

  /**
   * The content of the forum post in Markdown format
   */
  content: string | null;

  /**
   * The timestamp when the post was created
   */
  created_at: string;

  /**
   * Whether the forum post has been edited
   */
  is_edited: boolean;

  /**
   * Whether this forum post is pinned
   */
  is_pinned: boolean;

  /**
   * Whether the user that sent the post is an admin of the company
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
   * The timestamp when the post was last updated
   */
  updated_at: string;

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
     * The unique identifier for the user.
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
 * A statement that defines an amount due by a customer.
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
   * The plan that the invoice was created for.
   */
  current_plan: Invoice.CurrentPlan;

  /**
   * The date the invoice is due.
   */
  due_date: string | null;

  /**
   * The email address that the invoice was created for.
   */
  email_address: string | null;

  /**
   * A signed token that allows fetching the invoice data publically without being
   * authenticated.
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
     * The unique identifier for the plan.
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
     * The unique identifier for the user.
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
   * The unique identifier for the invoice.
   */
  id: string;

  /**
   * The datetime the invoice was created.
   */
  created_at: string;

  /**
   * The plan that the invoice was created for.
   */
  current_plan: InvoiceListItem.CurrentPlan;

  /**
   * The date the invoice is due.
   */
  due_date: string | null;

  /**
   * The email address that the invoice was created for.
   */
  email_address: string | null;

  /**
   * A signed token that allows fetching the invoice data publically without being
   * authenticated.
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
     * The unique identifier for the plan.
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
     * The unique identifier for the user.
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
   * Whether this Membership is set to cancel at the end of the current billing
   * cycle. Only applies for memberships that have a renewal plan.
   */
  cancel_at_period_end: boolean;

  /**
   * The different reasons a user can choose for why they are canceling their
   * membership.
   */
  cancel_option: MembershipsAPI.CancelOptions | null;

  /**
   * The epoch timestamp of when the customer initiated a cancellation.
   */
  canceled_at: string | null;

  /**
   * The reason that the member canceled the membership (filled out by the member).
   */
  cancellation_reason: string | null;

  /**
   * The Company this Membership belongs to.
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
   * The responses to custom checkout questions for this membership.
   */
  custom_field_responses: Array<Membership.CustomFieldResponse>;

  /**
   * When the member joined the company.
   */
  joined_at: string | null;

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
   * Custom key-value pairs for the membership (commonly used for software licensing,
   * e.g., HWID). Max 50 keys, 500 chars per key, 5000 chars per value.
   */
  metadata: { [key: string]: unknown };

  /**
   * Whether the membership's payments are currently paused.
   */
  payment_collection_paused: boolean;

  /**
   * The Plan this Membership is for.
   */
  plan: Membership.Plan;

  /**
   * The Product this Membership grants access to.
   */
  product: Membership.Product;

  /**
   * The Promo Code that is currently applied to this Membership.
   */
  promo_code: Membership.PromoCode | null;

  /**
   * The timestamp in seconds at which the current billing cycle for this
   * subscription ends. Only applies for memberships that have a renewal plan.
   */
  renewal_period_end: string | null;

  /**
   * The timestamp in seconds at which the current billing cycle for this
   * subscription start. Only applies for memberships that have a renewal plan.
   */
  renewal_period_start: string | null;

  /**
   * The status of the membership.
   */
  status: MembershipStatus;

  /**
   * The datetime the membership was last updated.
   */
  updated_at: string;

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
     * The unique identifier for the company.
     */
    id: string;

    /**
     * The title of the company.
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
   * The Member that this Membership belongs to.
   */
  export interface Member {
    /**
     * The unique identifier for the member.
     */
    id: string;
  }

  /**
   * The Plan this Membership is for.
   */
  export interface Plan {
    /**
     * The unique identifier for the plan.
     */
    id: string;
  }

  /**
   * The Product this Membership grants access to.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
     */
    title: string;
  }

  /**
   * The Promo Code that is currently applied to this Membership.
   */
  export interface PromoCode {
    /**
     * The unique identifier for the promo code.
     */
    id: string;
  }

  /**
   * The user this membership belongs to
   */
  export interface User {
    /**
     * The unique identifier for the user.
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
 * Represents a message in a DM channel
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
   * The content of the message in Markdown format
   */
  content: string | null;

  /**
   * The timestamp when the post was created
   */
  created_at: string;

  /**
   * Whether the message has been edited
   */
  is_edited: boolean;

  /**
   * Whether this message is pinned
   */
  is_pinned: boolean;

  /**
   * The type of post
   */
  message_type: DmsPostTypes;

  /**
   * The poll for this message
   */
  poll: Message.Poll | null;

  /**
   * The reaction counts for this message
   */
  poll_votes: Array<Message.PollVote>;

  /**
   * The reaction counts for this message
   */
  reaction_counts: Array<Message.ReactionCount>;

  /**
   * The ID of the message this is replying to, if applicable
   */
  replying_to_message_id: string | null;

  /**
   * The timestamp when the post was last updated
   */
  updated_at: string;

  /**
   * The user who sent this message
   */
  user: Message.User;

  /**
   * The number of times this message has been viewed
   */
  view_count: number | null;
}

export namespace Message {
  /**
   * The poll for this message
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
   * The user who sent this message
   */
  export interface User {
    /**
     * The unique identifier for the user.
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
   * The last 4 digits of the card used to make the payment.
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
   * The datetime the payment was paid
   */
  paid_at: string | null;

  /**
   * The payment method used for the payment, if available.
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
   * The payment method used for the payment, if available.
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
       * Card expiration month, like 03 for March.
       */
      exp_month: number | null;

      /**
       * Card expiration year, like 27 for 2027.
       */
      exp_year: number | null;

      /**
       * Last four digits of the card.
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
     * The route of the product.
     */
    route: string;

    /**
     * The title of the product. Use for Whop 4.0.
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
   * The interval in days at which the plan charges (renewal plans).
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
   * The datetime the plan was created.
   */
  created_at: string;

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
   * The explicit payment method configuration for the plan, if any.
   */
  payment_method_configuration: Plan.PaymentMethodConfiguration | null;

  /**
   * Indicates if the plan is a one time payment or recurring.
   */
  plan_type: PlanType;

  /**
   * The product that this plan belongs to.
   */
  product: Plan.Product | null;

  /**
   * The direct link to purchase the product.
   */
  purchase_url: string;

  /**
   * This is the release method the business uses to sell this plan.
   */
  release_method: ReleaseMethod;

  /**
   * The recurring price charged every billing_period in the plan's base_currency
   * (e.g., 9.99 for $9.99/period). Zero for one-time plans.
   */
  renewal_price: number;

  /**
   * The number of payments required before pausing the subscription.
   */
  split_pay_required_payments: number | null;

  /**
   * The number of units available for purchase. Only displayed to authorized actors
   */
  stock: number | null;

  /**
   * The tax type for the plan.
   */
  tax_type: TaxType;

  /**
   * The title of the plan. This will be visible on the product page to customers.
   */
  title: string | null;

  /**
   * The number of free trial days added before a renewal plan.
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
     * The unique identifier for the company.
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
   * The invoice associated with this plan.
   */
  export interface Invoice {
    /**
     * The unique identifier for the invoice.
     */
    id: string;
  }

  /**
   * The explicit payment method configuration for the plan, if any.
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
   * The product that this plan belongs to.
   */
  export interface Product {
    /**
     * The unique identifier for the product.
     */
    id: string;

    /**
     * The title of the product. Use for Whop 4.0.
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
   * A short type of the company that this product belongs to.
   */
  company: Product.Company;

  /**
   * The datetime the product was created.
   */
  created_at: string;

  /**
   * The custom call to action for the product.
   */
  custom_cta: CustomCta;

  /**
   * The custom call to action URL for the product, if any.
   */
  custom_cta_url: string | null;

  /**
   * The custom statement descriptor for the product.
   */
  custom_statement_descriptor: string | null;

  /**
   * A short description of what the company offers or does.
   */
  description: string | null;

  /**
   * A unique identifier used to create or update products. When provided on product
   * creation endpoints, we’ll look up an existing product by this identifier — if it
   * exists, we’ll update it; if not, we’ll create a new one.
   */
  external_identifier: string | null;

  /**
   * The percentage of a transaction a user is eligible to earn from the whop
   * marketplace global affiliate program.
   */
  global_affiliate_percentage: number | null;

  /**
   * The status of the global affiliate program for this product.
   */
  global_affiliate_status: GlobalAffiliateStatus;

  /**
   * The headline of the product.
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
   * The status of the member affiliate program for this product.
   */
  member_affiliate_status: GlobalAffiliateStatus;

  /**
   * The number of active users for this product.
   */
  member_count: number;

  /**
   * The user that owns the product (company owner).
   */
  owner_user: Product.OwnerUser;

  /**
   * The product tax code for the product, if any.
   */
  product_tax_code: Product.ProductTaxCode | null;

  /**
   * The number of reviews that have been published for the product.
   */
  published_reviews_count: number;

  /**
   * The route of the product.
   */
  route: string;

  /**
   * The title of the product. Use for Whop 4.0.
   */
  title: string;

  /**
   * The datetime the product was last updated.
   */
  updated_at: string;

  /**
   * Whether this product is Whop verified.
   */
  verified: boolean;

  /**
   * This product will/will not be displayed publicly.
   */
  visibility: Visibility;
}

export namespace Product {
  /**
   * A short type of the company that this product belongs to.
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
     * The title of the company.
     */
    title: string;
  }

  /**
   * The user that owns the product (company owner).
   */
  export interface OwnerUser {
    /**
     * The unique identifier for the user.
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
   * The product tax code for the product, if any.
   */
  export interface ProductTaxCode {
    /**
     * The unique identifier for the product tax code.
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
   * A unique identifier used to create or update products. When provided on product
   * creation endpoints, we’ll look up an existing product by this identifier — if it
   * exists, we’ll update it; if not, we’ll create a new one.
   */
  external_identifier: string | null;

  /**
   * The headline of the product.
   */
  headline: string | null;

  /**
   * The different industry types a company can be in.
   */
  industry_type: IndustryTypes | null;

  /**
   * The number of active users for this product.
   */
  member_count: number;

  /**
   * The number of reviews that have been published for the product.
   */
  published_reviews_count: number;

  /**
   * The route of the product.
   */
  route: string;

  /**
   * The title of the product. Use for Whop 4.0.
   */
  title: string;

  /**
   * The datetime the product was last updated.
   */
  updated_at: string;

  /**
   * Whether this product is Whop verified.
   */
  verified: boolean;

  /**
   * This product will/will not be displayed publicly.
   */
  visibility: Visibility;
}

/**
 * The type of promo code used to discount a plan
 */
export type PromoType = 'percentage' | 'flat_amount';

/**
 * Represents a reaction to a feed post
 */
export interface Reaction {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The emoji that was used in shortcode format (:heart:)
   */
  emoji: string | null;

  /**
   * The ID of the post this reaction belongs to
   */
  resource_id: string;

  /**
   * The user who reacted to the post
   */
  user: Reaction.User;
}

export namespace Reaction {
  /**
   * The user who reacted to the post
   */
  export interface User {
    /**
     * The unique identifier for the user.
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
 * The status of a receipt
 */
export type ReceiptStatus = 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void';

/**
 * The methods of how a plan can be released.
 */
export type ReleaseMethod = 'buy_now' | 'waitlist';

/**
 * A shipment
 */
export interface Shipment {
  /**
   * The unique identifier for the shipment.
   */
  id: string;

  /**
   * The carrier of the shipment
   */
  carrier: ShipmentCarrier;

  /**
   * The datetime the shipment was created.
   */
  created_at: string;

  /**
   * The delivery estimate of the shipment
   */
  delivery_estimate: string | null;

  /**
   * The payment of the shipment
   */
  payment: Shipment.Payment | null;

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
   * The datetime the shipment was last updated.
   */
  updated_at: string;
}

export namespace Shipment {
  /**
   * The payment of the shipment
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
 * Represents a DM channel
 */
export interface SupportChannel {
  /**
   * The unique identifier for the entity
   */
  id: string;

  /**
   * The bot ID if this is a support chat
   */
  company_id: string | null;

  /**
   * The custom name of the DM channel, if any
   */
  custom_name: string | null;

  /**
   * The customer user if this is a support chat
   */
  customer_user: SupportChannel.CustomerUser | null;

  /**
   * When the last message was sent
   */
  last_message_at: string | null;

  /**
   * When the support ticket was resolved (null if unresolved)
   */
  resolved_at: string | null;
}

export namespace SupportChannel {
  /**
   * The customer user if this is a support chat
   */
  export interface CustomerUser {
    /**
     * The unique identifier for the user.
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
 * Whether or not the tax is included in a plan's price (or if it hasn't been set
 * up)
 */
export type TaxType = 'inclusive' | 'exclusive' | 'unspecified';

/**
 * Credit Transaction Transfer
 */
export interface Transfer {
  /**
   * The unique identifier for the credit transaction transfer.
   */
  id: string;

  /**
   * The amount of the transfer. Provided as a number in the specified currency. Eg:
   * 10.43 for $10.43 USD.
   */
  amount: number;

  /**
   * The datetime the credit transaction transfer was created.
   */
  created_at: string;

  /**
   * The currency of the credit transaction transfer
   */
  currency: Currency;

  /**
   * The recipient of the credit transaction transfer
   */
  destination: Transfer.User | null | Transfer.Company | null;

  /**
   * The ID of the destination ledger account
   */
  destination_ledger_account_id: string;

  /**
   * The decimal fee of the credit transaction transfer
   */
  fee_amount: number | null;

  /**
   * Custom key-value pairs attached to the transfer. Max 50 keys, 500 chars per key,
   * 5000 chars per value.
   */
  metadata: { [key: string]: unknown } | null;

  /**
   * The notes of the credit transaction transfer
   */
  notes: string | null;

  /**
   * The sender of the credit transaction transfer
   */
  origin: Transfer.User | null | Transfer.Company | null;

  /**
   * The ID of the origin ledger account
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
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'User';

    /**
     * The username of the user from their Whop account.
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
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The typename of this object
     */
    typename: 'User';

    /**
     * The username of the user from their Whop account.
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
