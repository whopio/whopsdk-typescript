// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Create a new App
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
   * Retrieves an app by ID
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
   * Update an existing App
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
   * Fetches a list of apps
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
 * An object representing an app
 */
export interface AppListResponse {
  /**
   * The ID of the app
   */
  id: string;

  /**
   * The base url of the app
   */
  base_url: string | null;

  /**
   * The company that owns the app
   */
  company: AppListResponse.Company;

  /**
   * The creator of the app
   */
  creator: AppListResponse.Creator;

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
   * If the status is live, the app is visible on Whop discovery. In order to be
   * live, you need to set the name, icon, and description. Being unlisted or hidden
   * means it's not visible on Whop but you can still install the app via direct
   * link. To remove the app from whop discovery, you should set the status to
   * unlisted.
   */
  status: Shared.AppStatuses;

  /**
   * Whether this app has been verified by Whop. Verified apps are endorsed by whop
   * and are shown in the 'featured apps' section of the app store.
   */
  verified: boolean;
}

export namespace AppListResponse {
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
}

export interface AppCreateParams {
  /**
   * The ID of the company to create the app for
   */
  company_id: string;

  /**
   * The name of the app to be created
   */
  name: string;

  /**
   * The base URL of the app to be created
   */
  base_url?: string | null;
}

export interface AppUpdateParams {
  /**
   * The description of the app for the app store in-depth app view.
   */
  app_store_description?: string | null;

  /**
   * The base production url of the app
   */
  base_url?: string | null;

  /**
   * The path for the dashboard view of the app
   */
  dashboard_path?: string | null;

  /**
   * The description of the app
   */
  description?: string | null;

  /**
   * The path for the discover view of the app
   */
  discover_path?: string | null;

  /**
   * The path for the hub view of the app
   */
  experience_path?: string | null;

  /**
   * The icon for the app
   */
  icon?: AppUpdateParams.Icon | null;

  /**
   * The name of the app
   */
  name?: string | null;

  /**
   * The scopes that the app will request off of users when a user installs the app.
   */
  required_scopes?: Array<'read_user'> | null;

  /**
   * The status of an experience interface
   */
  status?: Shared.AppStatuses | null;
}

export namespace AppUpdateParams {
  /**
   * The icon for the app
   */
  export interface Icon {
    /**
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
  }
}

export interface AppListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The ID of the company to filter apps by
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
    | 'discoverable_at'
    | 'total_installs_last_30_days'
    | 'time_spent'
    | 'time_spent_last_24_hours'
    | 'daily_active_users'
    | null;

  /**
   * The query to search for apps by name.
   */
  query?: string | null;

  /**
   * If true, you will only get apps that are verified by Whop. Use this to populate
   * a 'featured apps' section on the app store.
   */
  verified_apps_only?: boolean | null;

  /**
   * The different types of an app view
   */
  view_type?: Shared.AppViewType | null;
}

export declare namespace Apps {
  export {
    type AppListResponse as AppListResponse,
    type AppListResponsesCursorPage as AppListResponsesCursorPage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
  };
}
