// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
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

export interface App {
  /**
   * App ID, prefixed `app_`.
   */
  id: string;

  /**
   * The account that owns the app.
   */
  account: App.Account;

  /**
   * Legacy app API key used to authenticate requests on the app's behalf. `null`
   * when no key exists or the caller lacks the `developer:manage_api_key`
   * permission.
   */
  api_key: App.APIKey | null;

  /**
   * Detailed description shown on the app store's in-depth app page, or `null` when
   * none has been set.
   */
  app_store_description: string | null;

  /**
   * The type of end-user the app is built for.
   */
  app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component' | 'website';

  /**
   * Banner image from the app's product listing, or `null` when none is uploaded.
   */
  banner_image: App.BannerImage | null;

  /**
   * The production base URL where the app is hosted. `null` if no base URL is
   * configured, if the caller lacks the `developer:basic:read` permission on the
   * app's account, or on list responses, which never expose it.
   */
  base_url: string | null;

  /**
   * Website businesses created from this app as a template.
   */
  businesses_created_count: number;

  businesses_created_logo_urls: Array<string>;

  /**
   * The user who owns the publishing account.
   */
  creator: App.Creator;

  /**
   * URL path for the account dashboard view, or `null` when not configured.
   */
  dashboard_path: string | null;

  /**
   * The app's default API key. `null` when the app has no default key or the caller
   * lacks the `developer:manage_api_key` permission; `secret_key` is additionally
   * `null` unless the caller could have created the key themselves.
   */
  default_api_key: App.DefaultAPIKey | null;

  /**
   * What the app has left to publish, and how a publish in flight is going —
   * `status` is only ever `unpublished`, `publishing`, or `failed` here. `null`
   * means there is nothing to report: the app is fully published, there is no
   * working copy to publish from, or the caller cannot deploy this app. Tell those
   * apart from the app's own `production_web_build`.
   */
  deployment: App.Deployment | null;

  /**
   * Short description shown in listings and search results, or `null` if none has
   * been set.
   */
  description: string | null;

  /**
   * URL path for the discover view, or `null` when not configured.
   */
  discover_path: string | null;

  /**
   * Subdomain identifier for the app's proxied URL, forming
   * https://{domain_id}.apps.whop.com.
   */
  domain_id: string;

  elements_used: Array<
    | 'ads'
    | 'ads.billing-setup'
    | 'ads.campaign-creator'
    | 'ads.reporting'
    | 'ads.reporting.chart'
    | 'ads.reporting.table'
    | 'checkout'
    | 'checkout.checkout'
    | 'checkout.expressCheckout'
    | 'payments'
    | 'payments.address'
    | 'payments.branding'
    | 'payments.card'
    | 'payments.cardFields'
    | 'payments.cardFields.cardCvc'
    | 'payments.cardFields.cardExpiry'
    | 'payments.cardFields.cardNumber'
    | 'payments.email'
    | 'payments.payment'
    | 'payments.taxId'
    | 'tracking'
    | 'tracking.events'
    | 'tracking.people'
    | 'wallet'
    | 'wallet.activity'
    | 'wallet.balances'
    | 'wallet.balances.balance'
    | 'wallet.balances.list'
    | 'wallet.cards'
    | 'wallet.deposit'
    | 'wallet.send'
    | 'wallet.withdraw'
    | 'websites'
    | 'websites.pixel-setup'
    | 'websites.websites'
  >;

  /**
   * URL path for the member-facing hub view, or `null` when not configured.
   */
  experience_path: string | null;

  /**
   * Full URL where the app's hosted web build is served, or `null` if no route is
   * claimed.
   */
  hosted_url: string | null;

  /**
   * The app's icon. Falls back to the default app icon when none is uploaded.
   */
  icon: App.Icon;

  /**
   * Approval status of the app's product listing on the Whop app store, or `null`
   * when the app has no associated product.
   */
  marketplace_status: 'not_available' | 'pending_review' | 'live_marketplace' | null;

  /**
   * Display name shown on the app store and in experience navigation.
   */
  name: string;

  /**
   * How the app authenticates at the OAuth token endpoint.
   */
  oauth_client_type: 'public' | 'confidential';

  /**
   * URL path to the app's OpenAPI spec file, or `null` when not configured.
   */
  openapi_path: string | null;

  /**
   * Full origin URL of the app's proxied domain, for example
   * https://ab1c2d3e4f.apps.whop.com.
   */
  origin: string | null;

  /**
   * A short-lived signed pass scoping the caller to this app's gated preview hosts —
   * every build preview and the live dev-server sandbox. Add it to a preview host as
   * the `__whop_preview` query param (or `x-whop-preview-token` header). `null`
   * unless the caller is a team member who can read the app's developer settings.
   */
  preview_token: string | null;

  previous_hosted_urls: Array<string>;

  /**
   * ID of the app's product listing on the Whop app store, or `null` when the app
   * has no associated product.
   */
  product_id: string | null;

  /**
   * The approved build currently served on Android, or `null` when none is deployed.
   */
  production_android_build: App.ProductionAndroidBuild | null;

  /**
   * The approved build currently served on iOS, or `null` when none is deployed.
   */
  production_ios_build: App.ProductionIosBuild | null;

  /**
   * The approved build currently served on web, or `null` when none is deployed.
   */
  production_web_build: App.ProductionWebBuild | null;

  redirect_uris: Array<string>;

  requested_permissions: Array<App.RequestedPermission>;

  required_scopes: Array<'read_user'>;

  /**
   * Claimed subdomain route where hosted web builds are served (`myapp` for
   * myapp.whop.site), or `null` if no route is claimed.
   */
  route: string | null;

  /**
   * The app's production secrets as an object of string values, injected into the
   * hosted server runtime. `null` when the caller lacks the `developer:update_app`
   * permission.
   */
  secrets: unknown | null;

  /**
   * URL path to the app's skills directory, or `null` when not configured.
   */
  skills_path: string | null;

  /**
   * Visibility on the Whop app store: `live` is publicly discoverable, `unlisted` is
   * accessible only via direct link, `hidden` is not visible anywhere.
   */
  status: 'live' | 'unlisted' | 'hidden';

  /**
   * Whether the app has been verified by Whop and is eligible for the featured apps
   * section.
   */
  verified: boolean;
}

export namespace App {
  /**
   * The account that owns the app.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account logo image URL.
     */
    logo_url: string | null;

    /**
     * Account public route identifier.
     */
    route: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Legacy app API key used to authenticate requests on the app's behalf. `null`
   * when no key exists or the caller lacks the `developer:manage_api_key`
   * permission.
   */
  export interface APIKey {
    /**
     * The key's secret token, sent as a bearer token to authenticate requests on the
     * app's behalf.
     */
    token: string;

    /**
     * When the key was created, as an ISO 8601 timestamp.
     */
    created_at: string;
  }

  /**
   * Banner image from the app's product listing, or `null` when none is uploaded.
   */
  export interface BannerImage {
    /**
     * Banner image URL, taken from the app's product listing.
     */
    url: string;
  }

  /**
   * The user who owns the publishing account.
   */
  export interface Creator {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Public username.
     */
    username: string;
  }

  /**
   * The app's default API key. `null` when the app has no default key or the caller
   * lacks the `developer:manage_api_key` permission; `secret_key` is additionally
   * `null` unless the caller could have created the key themselves.
   */
  export interface DefaultAPIKey {
    /**
     * API key ID, prefixed `apik_`.
     */
    id: string;

    /**
     * Human-readable name identifying the API key, or `null` when none was set.
     */
    name: string | null;

    /**
     * Masked version of the secret key, so the key can be recognized without revealing
     * the full secret.
     */
    obfuscated_secret_key: string;

    /**
     * The full secret used to authenticate requests. `null` unless the caller could
     * have created the key themselves.
     */
    secret_key: string | null;
  }

  /**
   * What the app has left to publish, and how a publish in flight is going —
   * `status` is only ever `unpublished`, `publishing`, or `failed` here. `null`
   * means there is nothing to report: the app is fully published, there is no
   * working copy to publish from, or the caller cannot deploy this app. Tell those
   * apart from the app's own `production_web_build`.
   */
  export interface Deployment {
    /**
     * The app being deployed, prefixed `app_`.
     */
    app_id: string;

    /**
     * The build the deployment produced, prefixed `abld_`, or `null` until it
     * succeeds.
     */
    build_id: string | null;

    /**
     * Whether the running or last deployment uploaded a build without making it live.
     */
    draft: boolean;

    /**
     * Why the deployment failed, or `null` when it did not.
     */
    error: string | null;

    /**
     * How long this deployment is expected to take in total, estimated from previous
     * runs.
     */
    estimated_duration_ms: number | null;

    /**
     * How much longer the deployment is expected to take. Held above zero until it
     * actually finishes.
     */
    estimated_remaining_ms: number | null;

    /**
     * When the deployment ended, in milliseconds since the epoch, or `null` while it
     * is still running.
     */
    finished_at: number | null;

    /**
     * The stage a running deployment has reached, or `null` when none is running.
     * Later phases dominate the wall clock: `process_archive` waits on the upload
     * pipeline and `promote` waits for the build to go live.
     */
    phase:
      | 'install'
      | 'build'
      | 'typecheck'
      | 'upload_build'
      | 'upload_source'
      | 'process_archive'
      | 'create_build'
      | 'promote'
      | null;

    /**
     * Fraction of the deployment estimated to be complete, from 0 to 1. Stops just
     * short of 1 until the run ends.
     */
    progress: number | null;

    /**
     * When the deployment began, in milliseconds since the epoch, or `null` when none
     * has run.
     */
    started_at: number | null;

    /**
     * Whether the app has anything to publish, and what a publish in flight is doing.
     * `unpublished` means publishing would ship something new; `no_source` means the
     * sandbox holds no copy of this app, so there is nothing to publish from.
     */
    status: 'published' | 'unpublished' | 'publishing' | 'failed' | 'no_source';

    /**
     * Where the deployed site is served, or `null` unless the deployment went live.
     */
    url: string | null;
  }

  /**
   * The app's icon. Falls back to the default app icon when none is uploaded.
   */
  export interface Icon {
    /**
     * Icon image URL. Always present — the default app icon when none is uploaded.
     */
    url: string;
  }

  /**
   * The approved build currently served on Android, or `null` when none is deployed.
   */
  export interface ProductionAndroidBuild {
    /**
     * App build ID, prefixed `abld_`.
     */
    id: string;

    /**
     * Client-generated checksum of the build file, used to verify file integrity.
     */
    checksum: string | null;

    /**
     * URL to download the uploaded build artifact.
     */
    file_url: string | null;

    /**
     * URL to download the compressed source code archive that produced this build, or
     * `null` when the build was uploaded without a source archive.
     */
    source_url: string | null;

    /**
     * The build's review status.
     */
    status: 'draft' | 'pending' | 'approved' | 'rejected';
  }

  /**
   * The approved build currently served on iOS, or `null` when none is deployed.
   */
  export interface ProductionIosBuild {
    /**
     * App build ID, prefixed `abld_`.
     */
    id: string;

    /**
     * Client-generated checksum of the build file, used to verify file integrity.
     */
    checksum: string | null;

    /**
     * URL to download the uploaded build artifact.
     */
    file_url: string | null;

    /**
     * URL to download the compressed source code archive that produced this build, or
     * `null` when the build was uploaded without a source archive.
     */
    source_url: string | null;

    /**
     * The build's review status.
     */
    status: 'draft' | 'pending' | 'approved' | 'rejected';
  }

  /**
   * The approved build currently served on web, or `null` when none is deployed.
   */
  export interface ProductionWebBuild {
    /**
     * App build ID, prefixed `abld_`.
     */
    id: string;

    /**
     * Client-generated checksum of the build file, used to verify file integrity.
     */
    checksum: string | null;

    /**
     * URL to download the uploaded build artifact.
     */
    file_url: string | null;

    /**
     * URL to download the compressed source code archive that produced this build, or
     * `null` when the build was uploaded without a source archive.
     */
    source_url: string | null;

    /**
     * The build's review status.
     */
    status: 'draft' | 'pending' | 'approved' | 'rejected';
  }

  /**
   * Permissions the app requests on install.
   */
  export interface RequestedPermission {
    /**
     * Whether the app requires the permission to be granted on install, as opposed to
     * requesting it optionally.
     */
    is_required: boolean;

    /**
     * The developer's explanation of why the app needs the permission, or `null` when
     * none was provided.
     */
    justification: string | null;

    /**
     * The permission action the app requests.
     */
    permission_action: RequestedPermission.PermissionAction;
  }

  export namespace RequestedPermission {
    /**
     * The permission action the app requests.
     */
    export interface PermissionAction {
      /**
       * The permission action's identifier, for example `company:basic:read`.
       */
      action: string;

      /**
       * Human-readable name of the action.
       */
      name: string;
    }
  }
}

export interface AppBuild {
  /**
   * App build ID, prefixed `abld_`.
   */
  id: string;

  /**
   * Client-generated checksum of the build file, used to verify file integrity.
   */
  checksum: string;

  /**
   * When the build was uploaded, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * URL to download the uploaded build artifact.
   */
  file_url: string | null;

  /**
   * Whether this build is the currently active production build for its platform.
   */
  is_production: boolean;

  /**
   * The target platform for this build.
   */
  platform: 'ios' | 'android' | 'web';

  /**
   * Feedback from the reviewer explaining a rejection, or `null` if the build has
   * not been reviewed or was approved.
   */
  review_message: string | null;

  /**
   * URL to download the compressed source code archive that produced this build, or
   * `null` when the build was uploaded without a source archive.
   */
  source_url: string | null;

  /**
   * The build's review status.
   */
  status: 'draft' | 'pending' | 'approved' | 'rejected';

  supported_app_view_types: Array<
    'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'
  >;
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
export type AppViewType = 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi';

/**
 * Possible roles an authorized user can have
 */
export type AuthorizedUserRoles =
  | 'owner'
  | 'admin'
  | 'sales_manager'
  | 'moderator'
  | 'advertiser'
  | 'app_manager'
  | 'support'
  | 'manager'
  | 'workforce'
  | 'custom';

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

export interface CheckoutConfiguration {
  id: string;

  /**
   * Account ID, prefixed `biz_`.
   */
  account_id: string;

  /**
   * Affiliate code applied at checkout, or `null` when none is set.
   */
  affiliate_code: string | null;

  /**
   * When the checkout configuration was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Currency used for setup-mode payment method availability; defaults to `usd` when
   * omitted.
   */
  currency:
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
    | 'cny'
    | 'usdt'
    | 'kzt'
    | 'awg'
    | 'whop_usd'
    | 'xau'
    | null;

  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  effective_payment_method_configuration: CheckoutConfiguration.EffectivePaymentMethodConfiguration | null;

  /**
   * Custom key-value metadata copied to payments and memberships. `null` without the
   * `checkout_configuration:basic:read` scope.
   */
  metadata: unknown | null;

  /**
   * Controls whether checkout charges the buyer immediately or saves payment details
   * for later.
   */
  mode: 'payment' | 'setup';

  /**
   * Payment method overrides for this checkout. `null` when it uses the plan or
   * platform defaults.
   */
  payment_method_configuration: unknown | null;

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  plan: CheckoutConfiguration.Plan | null;

  /**
   * Checkout URL you can send to customers.
   */
  purchase_url: string | null;

  /**
   * URL customers are sent to after checkout, or `null` when no redirect is
   * configured.
   */
  redirect_url: string | null;

  /**
   * 3D Secure behavior for this checkout, or `null` to use the account default.
   */
  three_ds_level: 'mandate_challenge' | 'frictionless' | null;

  /**
   * When the checkout configuration was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;
}

export namespace CheckoutConfiguration {
  /**
   * The configuration governing a checkout mounted from this configuration, resolved
   * through every layer (its own overrides, the plan's, and the account's) — the
   * shape a session's `payment_method_configuration` carries. Apply it over the
   * payment method types catalogue for the offerable set. `null` means platform
   * defaults; `payment_method_configuration` stays this configuration's own editable
   * override.
   */
  export interface EffectivePaymentMethodConfiguration {
    disabled: Array<string>;

    enabled: Array<string>;

    /**
     * Whether Whop's default set is the starting point. When `false`, only `enabled`
     * is offered.
     */
    include_platform_defaults: boolean;
  }

  /**
   * Plan used for payment checkout. `null` in setup mode.
   */
  export interface Plan {
    /**
     * Plan ID, prefixed `plan_`.
     */
    id: string;

    /**
     * Whether this plan accepts local currency payments via adaptive pricing.
     */
    adaptive_pricing_enabled: boolean;

    /**
     * Recurring billing interval in days.
     */
    billing_period: number | null;

    /**
     * Three-letter ISO currency code for the plan's prices.
     */
    currency: string;

    /**
     * Access duration in days for expiration-based plans.
     */
    expiration_days: number | null;

    /**
     * Initial purchase price in the plan currency.
     */
    initial_price: number;

    /**
     * Billing model for the plan.
     */
    plan_type: 'renewal' | 'one_time';

    /**
     * Sales method for the plan.
     */
    release_method: 'buy_now' | 'waitlist';

    /**
     * Recurring price charged each billing period.
     */
    renewal_price: number;

    /**
     * 3D Secure behavior for this plan, or `null` to use the account default.
     */
    three_ds_level: 'mandate_challenge' | 'frictionless' | null;

    /**
     * Free trial days before the first renewal charge.
     */
    trial_period_days: number | null;

    /**
     * Whether the plan is visible to customers or hidden from public view.
     */
    visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
  }
}

/**
 * The method of collection for an invoice.
 */
export type CollectionMethod = 'send_invoice' | 'charge_automatically';

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
  | 'cny'
  | 'usdt'
  | 'kzt'
  | 'awg'
  | 'whop_usd'
  | 'xau';

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
     * URL slug for the account's store page, e.g. `pickaxe` in whop.com/pickaxe.
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
     * URL slug in the product's public link, e.g. `pickaxe-analytics` in
     * whop.com/company/pickaxe-analytics.
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
     * Whether this experience is publicly visible to all users, including those
     * without a membership.
     */
    is_public: boolean;

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
   * All file attachments on this post, such as images, documents, and videos.
   */
  attachments: Array<ForumPost.Attachment>;

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
   * Represents an image attachment
   */
  export interface Attachment {
    /**
     * Represents a unique identifier that is Base64 obfuscated. It is often used to
     * refetch an object or as key for a cache. The ID type appears in a JSON response
     * as a String; however, it is not intended to be human-readable. When expected as
     * an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`)
     * input value will be accepted as an ID.
     */
    id: string;

    /**
     * Uploaded file MIME type, such as image/jpeg, video/mp4, or audio/mpeg.
     */
    content_type: string | null;

    /**
     * The original filename of the uploaded attachment, including its file extension.
     */
    filename: string | null;

    /**
     * A pre-optimized URL for rendering this attachment on the client. This should be
     * used for displaying attachments in apps.
     */
    url: string | null;
  }

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
  | 'requires_capture'
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
   * The date and time when the invoice will be automatically finalized. For
   * charge_automatically, triggers an automatic charge. For send_invoice, sends the
   * invoice email at the specified time.
   */
  automatically_finalizes_at: string | null;

  /**
   * Whether the invoice includes a buyer processing fee on top of the plan price.
   */
  charge_buyer_fee: boolean;

  /**
   * The method used to collect payment for this invoice, such as automatic charging
   * or manual payment.
   */
  collection_method: CollectionMethod;

  /**
   * The company that issued this invoice.
   */
  company: Invoice.Company;

  /**
   * The datetime the invoice was created.
   */
  created_at: string;

  /**
   * The plan that this invoice charges for.
   */
  current_plan: Invoice.CurrentPlan;

  /**
   * The full name of the customer this invoice is addressed to. Null if no name is
   * on file.
   */
  customer_name: string | null;

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
   * Optional line items that break down the invoice total into individual charges.
   */
  line_items: Array<Invoice.LineItem>;

  /**
   * The billing/mailing address associated with this invoice, if one was provided at
   * creation time.
   */
  mailing_address: Invoice.MailingAddress | null;

  /**
   * The member that the invoice was created for. Null when the invoice is addressed
   * to an email address with no member record behind it.
   */
  member: Invoice.Member | null;

  /**
   * The sequential invoice number for display purposes.
   */
  number: string;

  /**
   * The checkout URL where the customer can pay this invoice online, with their
   * email address pre-filled and locked.
   */
  pay_online_url: string | null;

  /**
   * The payment that settled this invoice. Null while the invoice is unpaid, when
   * the invoice was marked paid manually, and on a subscription renewal invoice,
   * where the settling payment cannot yet be identified.
   */
  payment: Invoice.Payment | null;

  /**
   * Whether a payment on this invoice is still clearing. True while a delayed
   * payment method such as ACH or SEPA settles, during which the invoice stays open
   * and is not marked past due.
   */
  payment_processing: boolean;

  /**
   * The product that this invoice was generated for.
   */
  product: Invoice.Product;

  /**
   * The current payment status of the invoice, such as draft, open, paid, or void.
   */
  status: InvoiceStatus;

  /**
   * The date that defines when the subscription billing cycle starts. When set on a
   * renewal plan invoice, all future billing periods anchor to this date.
   */
  subscription_billing_anchor_at: string | null;

  /**
   * The datetime the invoice was last updated.
   */
  updated_at: string;

  /**
   * The user this invoice is addressed to. Null if the user account has been
   * removed.
   */
  user: Invoice.User | null;
}

export namespace Invoice {
  /**
   * The company that issued this invoice.
   */
  export interface Company {
    /**
     * The unique identifier for the company.
     */
    id: string;
  }

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
     * A text description of the plan visible to customers. Maximum 1000 characters.
     * Null if no description is set.
     */
    description: string | null;

    /**
     * The formatted price (including currency) for the plan.
     */
    formatted_price: string;
  }

  /**
   * A line item on an invoice, representing a single charge with a label, quantity,
   * and unit price.
   */
  export interface LineItem {
    /**
     * The label or description for this line item.
     */
    label: string;

    /**
     * The display order of this line item within the invoice.
     */
    position: number;

    /**
     * The quantity of this line item.
     */
    quantity: number;

    /**
     * The computed total for this line item (quantity \* unit_price).
     */
    total: number;

    /**
     * The unit price for this line item. Negative for a credit or deduction.
     */
    unit_price: number;
  }

  /**
   * The billing/mailing address associated with this invoice, if one was provided at
   * creation time.
   */
  export interface MailingAddress {
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
     * The phone number of the customer.
     */
    phone: string | null;

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
   * The member that the invoice was created for. Null when the invoice is addressed
   * to an email address with no member record behind it.
   */
  export interface Member {
    /**
     * The unique identifier for the company member.
     */
    id: string;
  }

  /**
   * The payment that settled this invoice. Null while the invoice is unpaid, when
   * the invoice was marked paid manually, and on a subscription renewal invoice,
   * where the settling payment cannot yet be identified.
   */
  export interface Payment {
    /**
     * The unique identifier for the payment.
     */
    id: string;
  }

  /**
   * The product that this invoice was generated for.
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
   * The user this invoice is addressed to. Null if the user account has been
   * removed.
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
   * Optional line items that break down the invoice total into individual charges.
   */
  line_items: Array<InvoiceListItem.LineItem>;

  /**
   * The sequential invoice number for display purposes.
   */
  number: string;

  /**
   * Whether a payment on this invoice is still clearing. True while a delayed
   * payment method such as ACH or SEPA settles, during which the invoice stays open
   * and is not marked past due.
   */
  payment_processing: boolean;

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
   * A line item on an invoice, representing a single charge with a label, quantity,
   * and unit price.
   */
  export interface LineItem {
    /**
     * The label or description for this line item.
     */
    label: string;

    /**
     * The display order of this line item within the invoice.
     */
    position: number;

    /**
     * The quantity of this line item.
     */
    quantity: number;

    /**
     * The computed total for this line item (quantity \* unit_price).
     */
    total: number;

    /**
     * The unit price for this line item. Negative for a credit or deduction.
     */
    unit_price: number;
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
export type InvoiceStatus = 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void';

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

export interface Membership {
  /**
   * Membership ID, prefixed `mem_`.
   */
  id: string;

  /**
   * The account (seller) this membership belongs to.
   */
  account: Membership.Account;

  /**
   * Whether the membership is set to cancel when the current billing period ends.
   * Only meaningful for recurring plans.
   */
  cancel_at_period_end: boolean;

  /**
   * When the membership was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * When the current billing period renews, or when a non-renewing membership
   * expires, as an ISO 8601 timestamp. `null` for one-time purchases with no
   * expiration.
   */
  current_period_end: string | null;

  /**
   * The software license key for this membership. Only present when the product
   * includes a software licensing experience.
   */
  license_key: string | null;

  /**
   * The caller's member row on the account. Present only when the membership belongs
   * to the caller; `null` on seller-side reads.
   */
  member: Membership.Member | null;

  /**
   * Custom key-value pairs stored on the membership, commonly used for software
   * licensing.
   */
  metadata: unknown;

  /**
   * The buyer's phone number recorded for this membership, or `null`. The number
   * collected (or verified) at checkout when the seller's phone collection is on;
   * falls back to the buyer's account number when they have shared one with this
   * seller.
   */
  phone_number: string | null;

  /**
   * The plan the buyer purchased, prefixed `plan_`.
   */
  plan_id: string;

  /**
   * The product this membership grants access to, prefixed `prod_`.
   */
  product_id: string;

  /**
   * Billing state of the membership. `active`/`trialing` memberships grant access;
   * `past_due` is the grace period after a failed payment; `completed` one-time
   * purchases keep access; `canceled`/`expired` do not.
   */
  status: 'trialing' | 'active' | 'past_due' | 'completed' | 'canceled' | 'expired' | 'unresolved';

  /**
   * The buyer, prefixed `user_`. `null` when the buyer is another business or the
   * membership is unclaimed.
   */
  user_id: string | null;
}

export namespace Membership {
  /**
   * The account (seller) this membership belongs to.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account logo image URL. `null` when the account has not set one.
     */
    logo_url: string | null;

    /**
     * Account public route identifier — the `whop.com/{route}` storefront path.
     */
    route: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * The caller's member row on the account. Present only when the membership belongs
   * to the caller; `null` on seller-side reads.
   */
  export interface Member {
    /**
     * What the member can reach on the account: `customer` for paying members, `admin`
     * for team members, `no_access` once every grant has lapsed.
     */
    access_level: 'no_access' | 'admin' | 'customer';

    /**
     * When the member last opened the account's content, as an ISO 8601 timestamp.
     * `null` if they never have.
     */
    last_accessed_at: string | null;

    /**
     * The member's sort position in the buyer's own account list. `null` until they
     * arrange it.
     */
    position: number | null;
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
   * A list of user IDs that are explicitly mentioned in this message.
   */
  mentions: Array<string>;

  /**
   * Whether the message includes an @everyone mention that notifies all channel
   * members.
   */
  mentions_everyone: boolean;

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

export interface Payment {
  /**
   * Payment ID, prefixed `pay_`.
   */
  id: string;

  /**
   * The account that received the payment, prefixed `biz_`.
   */
  account_id: string | null;

  /**
   * What the account keeps: the total less Whop's fees.
   */
  amount_after_fees: Payment.AmountAfterFees;

  /**
   * True when Whop refunded the payment automatically, for example on a dispute
   * alert.
   */
  auto_refunded: boolean;

  /**
   * The billing address the buyer entered, or null.
   */
  billing_address: Payment.BillingAddress | null;

  /**
   * The reason why a specific payment was billed
   */
  billing_reason: PaymentsAPI.BillingReasons | null;

  /**
   * The checkout configuration the buyer paid through, prefixed `ch_`, or null.
   */
  checkout_configuration_id: string | null;

  /**
   * The credential a buyer's surface presents to poll this payment and set its
   * return URL. Only on payments created from a confirmation token, and always null
   * in list responses — retrieve the payment for it.
   */
  client_secret: string | null;

  /**
   * When the payment was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * The currency the payment settles in, lowercase ISO 4217. Every money field below
   * is stated in it unless it says otherwise.
   */
  currency: Currency;

  /**
   * The phone number the buyer gave at checkout, when one was collected.
   */
  customer_phone: string | null;

  /**
   * The reason a payment was declined.
   */
  decline_code:
    | 'insufficient_funds'
    | 'lost_card'
    | 'stolen_card'
    | 'expired_card'
    | 'suspected_fraud'
    | 'invalid_card_number'
    | 'invalid_cvc'
    | 'invalid_cvc_or_expiration'
    | 'incorrect_pin'
    | 'authentication_required'
    | 'card_not_supported'
    | 'currency_not_supported'
    | 'duplicate_transaction'
    | 'generic_decline'
    | 'invalid_account'
    | 'invalid_amount'
    | 'processing_error'
    | 'restricted_card'
    | 'card_velocity_exceeded'
    | 'contact_issuer'
    | 'bank_declined'
    | 'regulatory_blocked'
    | 'transaction_not_permitted'
    | 'transaction_stopped'
    | 'card_type_not_supported'
    | 'issuer_not_found'
    | 'closed_account'
    | 'issuer_unavailable'
    | 'invalid_zip'
    | 'invalid_expiry_month'
    | 'invalid_expiry_year'
    | 'invalid_expiry'
    | 'invalid_transaction'
    | 'cannot_authorize'
    | 'pin_required'
    | 'pin_try_exceeded'
    | 'provider_declined'
    | 'high_risk'
    | 'test_mode_decline'
    | 'merchant_blacklist'
    | 'reenter_transaction'
    | 'invalid_pin'
    | 'pin_required_as'
    | 'withdrawal_count_limit_exceeded'
    | 'invalid_country'
    | 'issuer_error'
    | 'invalid_card_holder_name'
    | 'no_accounts'
    | 'transaction_cancelled'
    | 'three_d_secure_success'
    | 'three_d_secure_canceled'
    | 'three_d_secure_invalid_card_number'
    | 'three_d_secure_generic_error'
    | 'three_d_secure_timeout'
    | 'three_d_secure_failed'
    | 'three_d_secure_card_not_enrolled'
    | 'three_d_secure_fraud'
    | 'three_d_secure_too_many_attempts'
    | 'three_d_secure_rejected_by_bank'
    | 'three_d_secure_reported_lost_or_stolen'
    | 'blocked_by_cardholder'
    | 'test_mode_test_card'
    | 'try_again_later'
    | 'transaction_not_allowed'
    | 'bank_insufficient_funds'
    | 'bank_account_not_found'
    | 'bank_account_closed'
    | 'bank_account_frozen'
    | 'bank_invalid_routing_number'
    | 'bank_non_transaction_account'
    | 'bank_authorization_revoked'
    | 'bank_payment_stopped'
    | 'bank_not_authorized'
    | 'bank_account_holder_deceased'
    | 'bank_duplicate'
    | 'bank_amount_error'
    | 'bank_regulatory_blocked'
    | 'bank_details_invalid'
    | 'bank_processing_error'
    | 'bank_generic_decline'
    | 'sepa_invalid_iban'
    | 'sepa_no_mandate'
    | 'sepa_mandate_data_invalid'
    | 'sepa_disputed'
    | 'sepa_refused_by_customer'
    | 'sepa_generic_decline'
    | null;

  /**
   * When an issuer warned that this payment will be disputed, or null.
   */
  dispute_alerted_at: string | null;

  /**
   * Why the most recent attempt failed, in plain words, or null.
   */
  failure_message: string | null;

  /**
   * For installment methods, how many payments the charge splits into.
   */
  financing_installments_count: number | null;

  /**
   * When the most recent charge attempt ran, or null.
   */
  last_payment_attempt_at: string | null;

  /**
   * The buyer's member record on the account, prefixed `mber_`. Null without the
   * member:basic:read permission.
   */
  member_id: string | null;

  /**
   * The membership this payment is billed against, prefixed `mem_`. Null for one-off
   * purchases or without the member:basic:read permission.
   */
  membership_id: string | null;

  /**
   * Your own key-value data attached when the payment was created.
   */
  metadata: unknown | null;

  /**
   * True when funds are held until the order ships and no tracking number has been
   * added yet. Null without the shipment:basic:read permission.
   */
  needs_tracking: boolean | null;

  /**
   * When the next automatic retry is scheduled, or null.
   */
  next_payment_attempt_at: string | null;

  /**
   * When the money was collected, or null while it has not been.
   */
  paid_at: string | null;

  /**
   * The instrument shaped for display: a buyer-facing name, the standard icon set,
   * and the card's brand and last four when it was a card.
   */
  payment_instrument: Payment.PaymentInstrument | null;

  /**
   * The stored payment method that was charged, prefixed `payt_`. Null when the
   * method was not saved.
   */
  payment_method_id: string | null;

  /**
   * The different types of payment methods that can be used.
   */
  payment_method_type: PaymentsAPI.PaymentMethodTypes | null;

  /**
   * How many charge attempts have failed on this payment.
   */
  payments_failed: number;

  /**
   * The plan that was charged, prefixed `plan_`.
   */
  plan_id: string | null;

  /**
   * The product the plan belongs to, prefixed `prod_`. Null for a plan with no
   * product.
   */
  product_id: string | null;

  /**
   * The promo code applied at checkout, prefixed `promo_`, or null.
   */
  promo_code_id: string | null;

  /**
   * True when the payment is `paid`, not yet fully refunded, and its processor
   * supports refunds.
   */
  refundable: boolean;

  /**
   * How much has been refunded so far, as it settled — refunds convert at the rate
   * in force when each one was issued, not the payment's original rate.
   */
  refunded_amount: Payment.RefundedAmount | null;

  /**
   * When the payment was refunded, or null.
   */
  refunded_at: string | null;

  /**
   * True when the payment is `open` and Whop can attempt the charge again — see
   * `POST /payments/{id}/retry`.
   */
  retryable: boolean;

  /**
   * Whop's fraud risk score from 0 (lowest) to 100 (highest), or null when the
   * payment was not scored.
   */
  risk_score: number | null;

  /**
   * The factors behind `risk_score`, grouped by category, or null.
   */
  risk_signals: unknown | null;

  /**
   * When the funds post to the account's available balance, at midnight UTC. The
   * `ledger_account.funds_available` webhook carries the same value. Null until the
   * payment is paid, and always null in list responses — retrieve the payment for
   * it.
   */
  settlement_time_at: string | null;

  /**
   * The shipment fulfilling this payment, prefixed `ship_`. Null when nothing ships
   * or without the shipment:basic:read permission.
   */
  shipment_id: string | null;

  /**
   * The shipping address for physical goods, or null.
   */
  shipping_address: Payment.ShippingAddress | null;

  /**
   * The lifecycle state of the charge: `open` while collection is outstanding,
   * `paid` once the money moved, `pending` while a settlement rail clears,
   * `void`/`uncollectible` when it ended without collecting.
   */
  status: ReceiptStatus;

  /**
   * The dashboard's finer-grained reading of the payment, folding in refunds,
   * disputes and Resolution Center cases.
   */
  substatus: FriendlyReceiptStatus;

  /**
   * The price before discounts, tax and fees.
   */
  subtotal: Payment.Subtotal | null;

  /**
   * The sales tax or VAT collected. Null when no tax applied.
   */
  tax_amount: Payment.TaxAmount | null;

  /**
   * The type of tax inclusivity applied to the receipt, for determining whether the
   * tax is included in the final price, or paid on top.
   */
  tax_behavior: PaymentsAPI.ReceiptTaxBehavior | null;

  /**
   * How much of the collected tax has been returned to the buyer so far. Zero when
   * the payment carried no tax, or when nothing has been refunded.
   */
  tax_refunded_amount: Payment.TaxRefundedAmount;

  /**
   * True when the buyer completed 3D Secure for this payment.
   */
  three_ds_verified: boolean;

  /**
   * The account-facing total: the price after discounts, plus any tax added on top.
   * Excludes buyer fees, which the buyer pays above this amount — so this is not
   * necessarily what the buyer's statement shows.
   */
  total: Payment.Total | null;

  /**
   * When the payment last changed, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * The total converted to USD at the time of the charge, for reporting across
   * currencies. Excludes the adaptive pricing FX markup, which the account does not
   * keep.
   */
  usd_total: Payment.UsdTotal | null;

  /**
   * The buyer. Null when the payment belongs to a company buyer rather than a user.
   */
  user: Payment.User | null;

  /**
   * The issuer's address and security code check results, or null when the processor
   * returned none.
   */
  verification_checks: Payment.VerificationChecks | null;

  /**
   * True when the payment is `open` on a past-due membership and its processor
   * supports voiding — see `POST /payments/{id}/void`.
   */
  voidable: boolean;
}

export namespace Payment {
  /**
   * What the account keeps: the total less Whop's fees.
   */
  export interface AmountAfterFees {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The billing address the buyer entered, or null.
   */
  export interface BillingAddress {
    /**
     * The city.
     */
    city: string | null;

    /**
     * The ISO 3166-1 alpha-2 country code.
     */
    country: string | null;

    /**
     * The first street address line.
     */
    line1: string | null;

    /**
     * The second street address line.
     */
    line2: string | null;

    /**
     * The name on the address.
     */
    name: string | null;

    /**
     * The postal or ZIP code.
     */
    postal_code: string | null;

    /**
     * The state, province or region.
     */
    state: string | null;
  }

  /**
   * The instrument shaped for display: a buyer-facing name, the standard icon set,
   * and the card's brand and last four when it was a card.
   */
  export interface PaymentInstrument {
    /**
     * Card payments only: the card's network and last four.
     */
    card: PaymentInstrument.Card | null;

    /**
     * Buyer-facing instrument name — "Visa •••• 4242" when the card surfaced, else the
     * method's own name ("Klarna").
     */
    display_name: string;

    /**
     * The standard icon set: square and card shapes, each in light and dark colorways.
     */
    icons: PaymentInstrument.Icons;

    /**
     * Installment methods only: how many payments the charge splits into. Data, not
     * copy — compose and translate the label client-side.
     */
    installment_count: number | null;

    /**
     * The payment method type identifier, e.g. `card`, `klarna`, `apple_pay`.
     */
    payment_method_type: string;
  }

  export namespace PaymentInstrument {
    /**
     * Card payments only: the card's network and last four.
     */
    export interface Card {
      /**
       * The network identifier (`visa`, `amex`, …), matching `card.networks` entries and
       * saved card payment methods.
       */
      brand: string;

      /**
       * The card's last four digits, when captured.
       */
      last4: string | null;
    }

    /**
     * The standard icon set: square and card shapes, each in light and dark colorways.
     */
    export interface Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      card: Icons.Card;

      /**
       * The square tile (32x32).
       */
      square: Icons.Square;
    }

    export namespace Icons {
      /**
       * The credit-card-proportioned tile (48x30).
       */
      export interface Card {
        /**
         * The colorway for dark surfaces.
         */
        dark: Card.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Card.Light;
      }

      export namespace Card {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }

      /**
       * The square tile (32x32).
       */
      export interface Square {
        /**
         * The colorway for dark surfaces.
         */
        dark: Square.Dark;

        /**
         * The colorway for light surfaces.
         */
        light: Square.Light;
      }

      export namespace Square {
        /**
         * The colorway for dark surfaces.
         */
        export interface Dark {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }

        /**
         * The colorway for light surfaces.
         */
        export interface Light {
          /**
           * Raster fallback at the shape's native size.
           */
          png_1x: string;

          /**
           * Raster fallback at double density.
           */
          png_2x: string;

          /**
           * Raster fallback at quadruple density.
           */
          png_4x: string;

          /**
           * The vector file. Prefer this everywhere SVG renders.
           */
          svg: string;
        }
      }
    }
  }

  /**
   * How much has been refunded so far, as it settled — refunds convert at the rate
   * in force when each one was issued, not the payment's original rate.
   */
  export interface RefundedAmount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The shipping address for physical goods, or null.
   */
  export interface ShippingAddress {
    /**
     * The city.
     */
    city: string | null;

    /**
     * The ISO 3166-1 alpha-2 country code.
     */
    country: string | null;

    /**
     * The first street address line.
     */
    line1: string | null;

    /**
     * The second street address line.
     */
    line2: string | null;

    /**
     * The name on the address.
     */
    name: string | null;

    /**
     * The postal or ZIP code.
     */
    postal_code: string | null;

    /**
     * The state, province or region.
     */
    state: string | null;
  }

  /**
   * The price before discounts, tax and fees.
   */
  export interface Subtotal {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The sales tax or VAT collected. Null when no tax applied.
   */
  export interface TaxAmount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * How much of the collected tax has been returned to the buyer so far. Zero when
   * the payment carried no tax, or when nothing has been refunded.
   */
  export interface TaxRefundedAmount {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The account-facing total: the price after discounts, plus any tax added on top.
   * Excludes buyer fees, which the buyer pays above this amount — so this is not
   * necessarily what the buyer's statement shows.
   */
  export interface Total {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The total converted to USD at the time of the charge, for reporting across
   * currencies. Excludes the adaptive pricing FX markup, which the account does not
   * keep.
   */
  export interface UsdTotal {
    /**
     * The amount in major units, as an exact decimal string — `"10.00"` is ten
     * dollars. A string so no float rounds it in transit.
     */
    amount: string;

    /**
     * Three-letter ISO 4217 currency code, lowercase.
     */
    currency: string;

    /**
     * How many decimal places the amount CARRIES — the precision the charge itself
     * runs at.
     */
    decimals: number;

    /**
     * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
     * not always: COP is charged in centavos but written in whole pesos, so it is `2`
     * and `0`. Format the number in your own locale using this.
     */
    display_decimals: number;
  }

  /**
   * The buyer. Null when the payment belongs to a company buyer rather than a user.
   */
  export interface User {
    /**
     * User ID, prefixed `user_`.
     */
    id: string;

    /**
     * Display name.
     */
    name: string | null;

    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    profile_picture: User.ProfilePicture;

    /**
     * Public username.
     */
    username: string;
  }

  export namespace User {
    /**
     * Avatar wrapper; its `url` is always present, using a generated placeholder when
     * the user set no picture.
     */
    export interface ProfilePicture {
      /**
       * Avatar image URL. Always present — a generated placeholder when the user set no
       * picture.
       */
      url: string;
    }
  }

  /**
   * The issuer's address and security code check results, or null when the processor
   * returned none.
   */
  export interface VerificationChecks {
    /**
     * Whether the billing street address the customer entered matched the issuer's
     * records.
     */
    address_line1: string | null;

    /**
     * Whether the cardholder name matched the issuer's records.
     */
    card_holder_name: string | null;

    /**
     * Whether the CVV / CVC matched the card.
     */
    card_security_code: string | null;

    /**
     * Whether the billing postal code matched the issuer's records.
     */
    zip_code: string | null;
  }
}

export interface Plan {
  /**
   * Plan ID, prefixed `plan_`.
   */
  id: string;

  /**
   * Account that sells this plan; `null` for standalone invoice plans.
   */
  account: Plan.Account | null;

  /**
   * Whether adaptive pricing is enabled for this plan. Raw setting — does not check
   * processor compatibility or feature flags.
   */
  adaptive_pricing_enabled: boolean;

  /**
   * Number of days between recurring charges, such as 30 for monthly or 365 for
   * annual. `null` for one-time plans.
   */
  billing_period: number | null;

  /**
   * Billing intervals the cancellation discount applies to (`0` forever, `1` first
   * payment, or a month count). `null` when none is offered or the actor lacks the
   * `plan:basic:read` scope.
   */
  cancel_discount_intervals: number | null;

  /**
   * Cancellation discount as a whole-number percentage. `null` when none is offered
   * or the actor lacks the `plan:basic:read` scope.
   */
  cancel_discount_percentage: number | null;

  /**
   * Plan-level checkout styling (`background_color`, `button_color`, `font_family`,
   * `border_style`); `null` inherits the account default.
   */
  checkout_styling: unknown | null;

  /**
   * Whether tax is collected on purchases of this plan, based on the account's tax
   * configuration.
   */
  collect_tax: boolean;

  /**
   * When the plan was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Three-letter ISO currency code for this plan's prices.
   */
  currency:
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
    | 'cny'
    | 'usdt'
    | 'kzt'
    | 'awg'
    | 'whop_usd'
    | 'xau';

  custom_fields: Array<Plan.CustomField>;

  /**
   * Whether the plan can be deleted (it has no memberships or waitlist entries).
   * `null` unless the actor has the `plan:basic:read` scope on the plan's account.
   */
  deletable: boolean | null;

  /**
   * Customer-visible plan description. Maximum 1000 characters. `null` if no
   * description is set.
   */
  description: string | null;

  /**
   * The configuration governing a checkout for this plan, resolved through every
   * layer (the plan's own and the account's) — the shape a session's
   * `payment_method_configuration` carries. Apply it over the payment method types
   * catalogue for the offerable set. `null` means platform defaults;
   * `payment_method_configuration` stays the plan's own editable override.
   */
  effective_payment_method_configuration: Plan.EffectivePaymentMethodConfiguration | null;

  /**
   * Access duration in days for expiration-based plans, such as 365 for a one-year
   * pass. `null` for plans without an expiration.
   */
  expiration_days: number | null;

  /**
   * Human-readable price for display (currency + interval), e.g. "$10 / month".
   */
  formatted_price: string;

  /**
   * Pricing-tier image (`url`, `blurhash`) shown on the product page; `null` when no
   * image is set.
   */
  image: unknown | null;

  /**
   * Initial purchase price in plan currency.
   */
  initial_price: number;

  /**
   * Private notes not shown to customers. `null` unless the actor has the
   * `plan:basic:read` scope on the plan's account.
   */
  internal_notes: string | null;

  /**
   * Invoice this plan was generated for; `null` unless created for an invoice.
   */
  invoice: unknown | null;

  /**
   * Active memberships through this plan. `null` unless the actor has the
   * `plan:basic:read` scope on the plan's account.
   */
  member_count: number | null;

  /**
   * Custom key-value pairs stored on the plan. Included in webhook payloads for
   * payment and membership events. Maximum 50 keys, 100 characters per key, 500
   * characters per value. The reserved keys `custom_cta` and `custom_cta_url`, when
   * set, override the product's checkout call to action for this plan.
   */
  metadata: unknown | null;

  /**
   * Whether a cancellation discount is offered. `null` unless the actor has the
   * `plan:basic:read` scope on the plan's account.
   */
  offer_cancel_discount: boolean | null;

  /**
   * Payment method configuration (`enabled`, `disabled`,
   * `include_platform_defaults`); `null` when plan uses default settings.
   */
  payment_method_configuration: unknown | null;

  /**
   * Billing model for this plan.
   */
  plan_type: 'renewal' | 'one_time';

  /**
   * Product this plan belongs to; `null` for standalone plans.
   */
  product: unknown | null;

  /**
   * URL where customers can purchase this plan directly.
   */
  purchase_url: string;

  /**
   * Sales method for this plan.
   */
  release_method: 'buy_now' | 'waitlist';

  /**
   * Recurring price charged every billing period.
   */
  renewal_price: number;

  /**
   * Installment payments required before the subscription pauses. Must be greater
   * than 1. `null` if split pay is not configured.
   */
  split_pay_required_payments: number | null;

  /**
   * Units available for purchase. `null` unless the actor has the `plan:basic:read`
   * scope on the plan's account.
   */
  stock: number | null;

  /**
   * Original initial price shown with a strikethrough, in the plan's currency.
   * `null` when no strikethrough is set.
   */
  strike_through_initial_price: number | null;

  /**
   * Original renewal price shown with a strikethrough, in the plan's currency.
   * `null` when no strikethrough is set.
   */
  strike_through_renewal_price: number | null;

  /**
   * How tax is handled for this plan, including whether tax is included in the
   * price, added at checkout, or not configured.
   */
  tax_type: 'inclusive' | 'exclusive' | 'unspecified';

  /**
   * 3D Secure behavior for this plan; `null` inherits the account default.
   */
  three_ds_level: 'mandate_challenge' | 'frictionless' | null;

  /**
   * Plan display name shown to customers. Maximum 30 characters. `null` if no title
   * has been set.
   */
  title: string | null;

  /**
   * Free trial days before the first renewal charge. `null` if no trial is
   * configured or the user has already used a trial for this plan.
   */
  trial_period_days: number | null;

  /**
   * Whether the plan has unlimited stock. When `true`, the `stock` field is ignored;
   * waitlist plans always report `true`.
   */
  unlimited_stock: boolean;

  /**
   * When the plan was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Controls where this plan can be seen. When `hidden`, the plan is reachable only
   * by its direct link.
   */
  visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
}

export namespace Plan {
  /**
   * Account that sells this plan; `null` for standalone invoice plans.
   */
  export interface Account {
    /**
     * Account ID, prefixed `biz_`.
     */
    id: string;

    /**
     * Account display name.
     */
    title: string;
  }

  /**
   * Custom input fields collected on the checkout form.
   */
  export interface CustomField {
    /**
     * Custom field ID, prefixed `field_`.
     */
    id: string;

    /**
     * Custom field input type.
     */
    field_type: 'text';

    /**
     * Field label shown to customer at checkout.
     */
    name: string;

    /**
     * Field position on checkout form.
     */
    order: number;

    /**
     * Placeholder text shown in the empty field. `null` if none is set.
     */
    placeholder: string | null;

    /**
     * Whether the customer must complete this field to check out.
     */
    required: boolean;
  }

  /**
   * The configuration governing a checkout for this plan, resolved through every
   * layer (the plan's own and the account's) — the shape a session's
   * `payment_method_configuration` carries. Apply it over the payment method types
   * catalogue for the offerable set. `null` means platform defaults;
   * `payment_method_configuration` stays the plan's own editable override.
   */
  export interface EffectivePaymentMethodConfiguration {
    disabled: Array<string>;

    enabled: Array<string>;

    /**
     * Whether Whop's default set is the starting point. When `false`, only `enabled`
     * is offered.
     */
    include_platform_defaults: boolean;
  }
}

/**
 * The type of plan that can be attached to a product
 */
export type PlanType = 'renewal' | 'one_time';

export interface Product {
  /**
   * Product ID, prefixed `prod_`.
   */
  id: string;

  /**
   * Account that sells this product.
   */
  account: unknown | null;

  /**
   * When the product was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Call-to-action button label shown on the product purchase page.
   */
  custom_cta:
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
    | 'complete_order'
    | null;

  /**
   * URL the call-to-action button links to instead of checkout.
   */
  custom_cta_url: string | null;

  /**
   * Custom text label on customer's bank statement.
   */
  custom_statement_descriptor: string | null;

  /**
   * Buyable plan to show and check out with. The configured default when that plan
   * is buyable, otherwise the first buyable plan in product-page order. `null` when
   * none is buyable.
   */
  default_plan: Product.DefaultPlan | null;

  /**
   * Written description displayed on the product page. `null` if none is set.
   */
  description: string | null;

  /**
   * External identifier stored on the product for your own reference.
   */
  external_identifier: string | null;

  gallery_images: Array<Product.GalleryImage>;

  /**
   * Commission rate affiliates earn through the global affiliate program.
   */
  global_affiliate_percentage: number | null;

  /**
   * Enrollment status in the global affiliate program.
   */
  global_affiliate_status: 'enabled' | 'disabled' | null;

  /**
   * Short marketing headline displayed on product page.
   */
  headline: string | null;

  labels: Array<string>;

  /**
   * Listing state on the whop.com marketplace. `pending_review` means submitted and
   * awaiting review; `live_marketplace` means approved and discoverable.
   */
  marketplace_status: 'not_available' | 'pending_review' | 'live_marketplace';

  /**
   * Commission rate members earn through the member affiliate program.
   */
  member_affiliate_percentage: number | null;

  /**
   * Enrollment status in the member affiliate program.
   */
  member_affiliate_status: 'enabled' | 'disabled' | null;

  /**
   * Active memberships for this product; 0 if public member counts are disabled.
   */
  member_count: number;

  /**
   * Custom key-value pairs stored on the product.
   */
  metadata: unknown | null;

  /**
   * User who owns the account selling this product.
   */
  owner_user: unknown | null;

  /**
   * Tax classification code for this product, or `null` if no tax code is set.
   */
  product_tax_code: unknown | null;

  /**
   * Published customer reviews for this product.
   */
  published_reviews_count: number;

  /**
   * URL slug for the product's public link.
   */
  route: string;

  /**
   * Product display name shown to customers.
   */
  title: string;

  /**
   * When the product was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Whether the product has been verified by Whop.
   */
  verified: boolean;

  /**
   * Whether the product is publicly visible, hidden, or archived.
   */
  visibility: string | null;
}

export namespace Product {
  /**
   * Buyable plan to show and check out with. The configured default when that plan
   * is buyable, otherwise the first buyable plan in product-page order. `null` when
   * none is buyable.
   */
  export interface DefaultPlan {
    /**
     * Plan ID, prefixed `plan_`.
     */
    id: string;

    /**
     * Number of days between recurring charges, such as 30 for monthly or 365 for
     * annual. `null` for one-time plans.
     */
    billing_period: number | null;

    /**
     * Access duration in days for expiration-based plans. `null` for plans without an
     * expiration.
     */
    expiration_days: number | null;

    /**
     * What checkout charges up front. `amount` is `"0.00"` when the first charge is
     * free, such as a trial.
     */
    initial_price: DefaultPlan.InitialPrice;

    /**
     * Billing model for this plan: `one_time` or `renewal`.
     */
    plan_type: 'renewal' | 'one_time';

    /**
     * The recurring charge every `billing_period` days. `amount` is `"0.00"` for
     * one-time plans.
     */
    renewal_price: DefaultPlan.RenewalPrice;

    /**
     * Plan display name shown to customers. `null` if no title has been set.
     */
    title: string | null;

    /**
     * Whether the plan has unlimited stock.
     */
    unlimited_stock: boolean;

    /**
     * Where this plan can be seen. `visible` plans appear on the product page.
     */
    visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
  }

  export namespace DefaultPlan {
    /**
     * What checkout charges up front. `amount` is `"0.00"` when the first charge is
     * free, such as a trial.
     */
    export interface InitialPrice {
      /**
       * The amount in major units, as an exact decimal string — `"10.00"` is ten
       * dollars. A string so no float rounds it in transit.
       */
      amount: string;

      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;

      /**
       * How many decimal places the amount CARRIES — the precision the charge itself
       * runs at.
       */
      decimals: number;

      /**
       * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
       * not always: COP is charged in centavos but written in whole pesos, so it is `2`
       * and `0`. Format the number in your own locale using this.
       */
      display_decimals: number;
    }

    /**
     * The recurring charge every `billing_period` days. `amount` is `"0.00"` for
     * one-time plans.
     */
    export interface RenewalPrice {
      /**
       * The amount in major units, as an exact decimal string — `"10.00"` is ten
       * dollars. A string so no float rounds it in transit.
       */
      amount: string;

      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;

      /**
       * How many decimal places the amount CARRIES — the precision the charge itself
       * runs at.
       */
      decimals: number;

      /**
       * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
       * not always: COP is charged in centavos but written in whole pesos, so it is `2`
       * and `0`. Format the number in your own locale using this.
       */
      display_decimals: number;
    }
  }

  /**
   * Gallery images for this product, ordered by position.
   */
  export interface GalleryImage {
    /**
     * Gallery image ID.
     */
    id: string;

    /**
     * Uploaded file MIME type, such as image/jpeg.
     */
    content_type: string | null;

    /**
     * Pre-optimized URL for rendering this image on the client.
     */
    url: string | null;
  }
}

export interface ProductListItem {
  /**
   * Product ID, prefixed `prod_`.
   */
  id: string;

  /**
   * Account that sells this product.
   */
  account: unknown | null;

  /**
   * When the product was created, as an ISO 8601 timestamp.
   */
  created_at: string;

  /**
   * Buyable plan to show and check out with. The configured default when that plan
   * is buyable, otherwise the first buyable plan in product-page order. `null` when
   * none is buyable.
   */
  default_plan: ProductListItem.DefaultPlan | null;

  /**
   * Written description displayed on the product page. `null` if none is set.
   */
  description: string | null;

  /**
   * External identifier stored on the product for your own reference.
   */
  external_identifier: string | null;

  gallery_images: Array<ProductListItem.GalleryImage>;

  /**
   * Short marketing headline displayed on product page.
   */
  headline: string | null;

  labels: Array<string>;

  /**
   * Active memberships for this product; 0 if public member counts are disabled.
   */
  member_count: number;

  /**
   * Custom key-value pairs stored on the product.
   */
  metadata: unknown | null;

  /**
   * Published customer reviews for this product.
   */
  published_reviews_count: number;

  /**
   * URL slug for the product's public link.
   */
  route: string;

  /**
   * Product display name shown to customers.
   */
  title: string;

  /**
   * When the product was last updated, as an ISO 8601 timestamp.
   */
  updated_at: string;

  /**
   * Whether the product has been verified by Whop.
   */
  verified: boolean;

  /**
   * Whether the product is publicly visible, hidden, or archived.
   */
  visibility: string | null;
}

export namespace ProductListItem {
  /**
   * Buyable plan to show and check out with. The configured default when that plan
   * is buyable, otherwise the first buyable plan in product-page order. `null` when
   * none is buyable.
   */
  export interface DefaultPlan {
    /**
     * Plan ID, prefixed `plan_`.
     */
    id: string;

    /**
     * Number of days between recurring charges, such as 30 for monthly or 365 for
     * annual. `null` for one-time plans.
     */
    billing_period: number | null;

    /**
     * Access duration in days for expiration-based plans. `null` for plans without an
     * expiration.
     */
    expiration_days: number | null;

    /**
     * What checkout charges up front. `amount` is `"0.00"` when the first charge is
     * free, such as a trial.
     */
    initial_price: DefaultPlan.InitialPrice;

    /**
     * Billing model for this plan: `one_time` or `renewal`.
     */
    plan_type: 'renewal' | 'one_time';

    /**
     * The recurring charge every `billing_period` days. `amount` is `"0.00"` for
     * one-time plans.
     */
    renewal_price: DefaultPlan.RenewalPrice;

    /**
     * Plan display name shown to customers. `null` if no title has been set.
     */
    title: string | null;

    /**
     * Whether the plan has unlimited stock.
     */
    unlimited_stock: boolean;

    /**
     * Where this plan can be seen. `visible` plans appear on the product page.
     */
    visibility: 'visible' | 'hidden' | 'archived' | 'quick_link';
  }

  export namespace DefaultPlan {
    /**
     * What checkout charges up front. `amount` is `"0.00"` when the first charge is
     * free, such as a trial.
     */
    export interface InitialPrice {
      /**
       * The amount in major units, as an exact decimal string — `"10.00"` is ten
       * dollars. A string so no float rounds it in transit.
       */
      amount: string;

      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;

      /**
       * How many decimal places the amount CARRIES — the precision the charge itself
       * runs at.
       */
      decimals: number;

      /**
       * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
       * not always: COP is charged in centavos but written in whole pesos, so it is `2`
       * and `0`. Format the number in your own locale using this.
       */
      display_decimals: number;
    }

    /**
     * The recurring charge every `billing_period` days. `amount` is `"0.00"` for
     * one-time plans.
     */
    export interface RenewalPrice {
      /**
       * The amount in major units, as an exact decimal string — `"10.00"` is ten
       * dollars. A string so no float rounds it in transit.
       */
      amount: string;

      /**
       * Three-letter ISO 4217 currency code, lowercase.
       */
      currency: string;

      /**
       * How many decimal places the amount CARRIES — the precision the charge itself
       * runs at.
       */
      decimals: number;

      /**
       * How many decimal places to SHOW. Usually equal to `decimals`, and deliberately
       * not always: COP is charged in centavos but written in whole pesos, so it is `2`
       * and `0`. Format the number in your own locale using this.
       */
      display_decimals: number;
    }
  }

  /**
   * Gallery images for this product, ordered by position.
   */
  export interface GalleryImage {
    /**
     * Gallery image ID.
     */
    id: string;

    /**
     * Uploaded file MIME type, such as image/jpeg.
     */
    content_type: string | null;

    /**
     * Pre-optimized URL for rendering this image on the client.
     */
    url: string | null;
  }
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
export type ReceiptStatus =
  | 'draft'
  | 'open'
  | 'authorized'
  | 'paid'
  | 'pending'
  | 'uncollectible'
  | 'unresolved'
  | 'void';

/**
 * The methods of how a plan can be released.
 */
export type ReleaseMethod = 'buy_now' | 'waitlist';

export interface Shipment {
  /**
   * Shipment ID, prefixed `ship_`.
   */
  id: string;

  /**
   * The account that owns this shipment, prefixed `biz_`.
   */
  account_id: string;

  /**
   * The shipping carrier detected for this shipment. Null until a tracking update
   * identifies it.
   */
  carrier: string | null;

  checkpoints: Array<Shipment.Checkpoint>;

  /**
   * The datetime the shipment was created (ISO 8601).
   */
  created_at: string;

  /**
   * The payment this shipment fulfills, prefixed `pay_`.
   */
  payment_id: string;

  /**
   * The current delivery status of this shipment.
   */
  status:
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
   * The carrier-assigned tracking number used to look up shipment progress.
   */
  tracking_number: string;

  /**
   * A customer-facing URL to track this shipment's progress.
   */
  tracking_url: string;

  /**
   * The datetime the shipment was last updated (ISO 8601).
   */
  updated_at: string;
}

export namespace Shipment {
  /**
   * Carrier scan history for this shipment, oldest scan first. Empty until the
   * carrier reports its first scan.
   */
  export interface Checkpoint {
    /**
     * Where the carrier recorded the scan, such as `PHILADELPHIA, PA`. Null when the
     * carrier sent none.
     */
    location: string | null;

    /**
     * Carrier's description of the scan, such as `Departed USPS Regional Facility`.
     * Null when the carrier sent none.
     */
    message: string | null;

    /**
     * Delivery status this carrier scan maps to.
     */
    status:
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
     * When the carrier recorded the scan, as an ISO 8601 timestamp. Null when the
     * carrier sent no scan time.
     */
    timestamp: string | null;
  }
}

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
   * The unique identifier of the account associated with this channel. Null if this
   * is not a support or account-scoped conversation.
   */
  account_id: string | null;

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

export type MembershipsCursorPage = CursorPage<Membership>;

export type AppBuildsCursorPage = CursorPage<AppBuild>;

export type ShipmentsCursorPage = CursorPage<Shipment>;

export type PaymentsCursorPage = CursorPage<Payment>;
