// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Register a new app on the Whop developer platform. Apps provide custom
   * experiences that can be added to products.
   *
   * Required permissions:
   *
   * - `developer:create_app`
   * - `developer:manage_api_key`
   *
   * @example
   * ```ts
   * const app = await client.apps.create({
   *   company_id: 'biz_xxxxxxxxxxxxxx',
   *   name: 'name',
   * });
   * ```
   */
  create(body: AppCreateParams, options?: RequestOptions): APIPromise<Shared.App> {
    return this._client.post('/apps', { body, ...options });
  }

  /**
   * Retrieves the details of an existing app.
   *
   * Required permissions:
   *
   * - `developer:manage_api_key`
   *
   * @example
   * ```ts
   * const app = await client.apps.retrieve(
   *   'app_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.App> {
    return this._client.get(path`/apps/${id}`, options);
  }

  /**
   * Update the settings, metadata, or status of an existing app on the Whop
   * developer platform.
   *
   * Required permissions:
   *
   * - `developer:update_app`
   * - `developer:manage_api_key`
   *
   * @example
   * ```ts
   * const app = await client.apps.update('app_xxxxxxxxxxxxxx');
   * ```
   */
  update(
    id: string,
    body: AppUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.App> {
    return this._client.patch(path`/apps/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of apps on the Whop platform, with optional filtering
   * by company, type, view support, and search query.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const appListResponse of client.apps.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AppListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AppListResponsesCursorPage, AppListResponse> {
    return this._client.getAPIList('/apps', CursorPage<AppListResponse>, { query, ...options });
  }
}

export type AppListResponsesCursorPage = CursorPage<AppListResponse>;

/**
 * The type of end-user an app is built for
 */
export type AppType = 'b2b_app' | 'b2c_app' | 'company_app' | 'component';

/**
 * An app is an integration built on Whop. Apps can serve consumers as experiences
 * within products, or serve companies as business tools.
 */
export interface AppListResponse {
  /**
   * The unique identifier for the app.
   */
  id: string;

  /**
   * The target audience classification for this app (e.g., 'b2b_app', 'b2c_app',
   * 'company_app', 'component').
   */
  app_type: AppType;

  /**
   * The production base URL where the app is hosted. Null if no base URL is
   * configured.
   */
  base_url: string | null;

  /**
   * The company that owns and publishes this app.
   */
  company: AppListResponse.Company;

  /**
   * The user who created and owns the company that published this app.
   */
  creator: AppListResponse.Creator;

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
  icon: AppListResponse.Icon | null;

  /**
   * The display name of this app shown on the app store and in experience
   * navigation. Maximum 30 characters.
   */
  name: string;

  /**
   * The current visibility status of this app on the Whop app store. 'live' means
   * publicly discoverable, 'unlisted' means accessible only via direct link, and
   * 'hidden' means not visible anywhere.
   */
  status: Shared.AppStatuses;

  /**
   * Whether this app has been verified by Whop. Verified apps are endorsed by Whop
   * and displayed in the featured apps section of the app store.
   */
  verified: boolean;
}

export namespace AppListResponse {
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
}

export interface AppCreateParams {
  /**
   * The unique identifier of the company to create the app for, starting with
   * 'biz\_'.
   */
  company_id: string;

  /**
   * The display name for the app, shown to users on the app store and product pages.
   */
  name: string;

  /**
   * The base production URL where the app is hosted, such as
   * 'https://myapp.example.com'.
   */
  base_url?: string | null;

  /**
   * The icon image for the app in PNG, JPEG, or GIF format.
   */
  icon?: AppCreateParams.Icon | null;

  /**
   * The whitelisted OAuth callback URLs that users are redirected to after
   * authorizing the app.
   */
  redirect_uris?: Array<string> | null;
}

export namespace AppCreateParams {
  /**
   * The icon image for the app in PNG, JPEG, or GIF format.
   */
  export interface Icon {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface AppUpdateParams {
  /**
   * The detailed description shown on the app store's in-depth app view page.
   */
  app_store_description?: string | null;

  /**
   * The type of end-user an app is built for
   */
  app_type?: AppType | null;

  /**
   * The base production URL where the app is hosted, such as
   * 'https://myapp.example.com'.
   */
  base_url?: string | null;

  /**
   * The URL path for the company dashboard view of the app, such as '/dashboard'.
   */
  dashboard_path?: string | null;

  /**
   * A short description of the app shown in listings and search results.
   */
  description?: string | null;

  /**
   * The URL path for the discover view of the app, such as '/discover'.
   */
  discover_path?: string | null;

  /**
   * The URL path for the member-facing hub view of the app, such as
   * '/experiences/[experienceId]'.
   */
  experience_path?: string | null;

  /**
   * The icon image for the app, used in listings and navigation.
   */
  icon?: AppUpdateParams.Icon | null;

  /**
   * The display name for the app, shown to users on the app store and product pages.
   */
  name?: string | null;

  /**
   * The whitelisted OAuth callback URLs that users are redirected to after
   * authorizing the app
   */
  redirect_uris?: Array<string> | null;

  /**
   * The permission scopes the app will request from users when they install it.
   */
  required_scopes?: Array<'read_user'> | null;

  /**
   * The status of an experience interface
   */
  status?: Shared.AppStatuses | null;
}

export namespace AppUpdateParams {
  /**
   * The icon image for the app, used in listings and navigation.
   */
  export interface Icon {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface AppListParams extends CursorPageParams {
  /**
   * The type of end-user an app is built for
   */
  app_type?: AppType | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Filter apps to only those created by this company, starting with 'biz\_'.
   */
  company_id?: string | null;

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
   * The order to fetch the apps in for discovery.
   */
  order?:
    | 'created_at'
    | 'discoverable_at'
    | 'total_installs_last_30_days'
    | 'total_installs_last_7_days'
    | 'time_spent'
    | 'time_spent_last_24_hours'
    | 'daily_active_users'
    | 'ai_prompt_count'
    | 'total_ai_cost_usd'
    | 'total_ai_tokens'
    | 'last_ai_prompt_at'
    | 'ai_average_rating'
    | null;

  /**
   * A search string to filter apps by name, such as 'chat' or 'analytics'.
   */
  query?: string | null;

  /**
   * Whether to only return apps that have been verified by Whop. Useful for
   * populating a featured apps section.
   */
  verified_apps_only?: boolean | null;

  /**
   * The different types of an app view
   */
  view_type?: Shared.AppViewType | null;
}

export declare namespace Apps {
  export {
    type AppType as AppType,
    type AppListResponse as AppListResponse,
    type AppListResponsesCursorPage as AppListResponsesCursorPage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
  };
}
