// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * An App is software you build on Whop. It can be a hosted web app served at `<route>.whop.app` or an API integration installed as an experience, and it belongs to the account that owns its credentials, settings, builds, and runtime logs.
 *
 * Use the Apps API to manage app configuration and, for hosted apps, read server runtime logs for console output, uncaught exceptions, and failed requests. Logs are retained for 7 days and can be filtered by build, level, time window, and message text.
 */
export class Apps extends APIResource {
  /**
   * Lists apps on the Whop platform: the app store's live apps, or — with
   * `account_id` and developer access to that account — every app the account owns.
   */
  list(
    query: AppListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AppListResponsesCursorPage, AppListResponse> {
    return this._client.getAPIList('/apps', CursorPage<AppListResponse>, { query, ...options });
  }

  /**
   * Registers a new app on the Whop developer platform. Apps provide custom
   * experiences that can be added to products.
   */
  create(params: AppCreateParams, options?: RequestOptions): APIPromise<Shared.App> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/apps', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves an app by ID, claimed route, or proxy domain id. Credential fields
   * (api_key, default_api_key, secrets) render `null` unless the caller has the
   * corresponding developer permission on the owning company.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.App> {
    return this._client.get(path`/apps/${id}`, options);
  }

  /**
   * Updates the settings, metadata, or status of an app. Fields that are omitted
   * keep their current value.
   */
  update(id: string, body: AppUpdateParams, options?: RequestOptions): APIPromise<Shared.App> {
    return this._client.patch(path`/apps/${id}`, { body, ...options });
  }

  /**
   * Replaces the set of permissions the app requests from users when they install
   * it. Requires a user session: the `developer:update_app_authorization` scope
   * cannot be delegated to API keys.
   */
  updatePermissions(
    id: string,
    body: AppUpdatePermissionsParams,
    options?: RequestOptions,
  ): APIPromise<Shared.App> {
    return this._client.patch(path`/apps/${id}/permissions`, { body, ...options });
  }

  /**
   * Lists a hosted app's server runtime logs, most recent first: console output,
   * uncaught exceptions, and failed-request summaries captured on whop.app hosting.
   * Logs are retained for 7 days.
   */
  logs(
    id: string,
    query: AppLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppLogsResponse> {
    return this._client.get(path`/apps/${id}/logs`, { query, ...options });
  }
}

export type AppListResponsesCursorPage = CursorPage<AppListResponse>;

/**
 * The type of end-user an app is built for
 */
export type AppType = 'b2b_app' | 'b2c_app' | 'company_app' | 'component';

export interface AppListResponse {
  /**
   * App ID, prefixed `app_`.
   */
  id: string;

  /**
   * The account that owns the app.
   */
  account: AppListResponse.Account;

  /**
   * The type of end-user the app is built for.
   */
  app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component';

  /**
   * Production base URL where the app is hosted, or `null` if none is configured.
   */
  base_url: string | null;

  /**
   * The user who owns the publishing company.
   */
  creator: AppListResponse.Creator;

  /**
   * URL path for the company dashboard view, or `null` when not configured.
   */
  dashboard_path: string | null;

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
  icon: AppListResponse.Icon;

  /**
   * Display name shown on the app store and in experience navigation.
   */
  name: string;

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
   * Claimed subdomain route where hosted web builds are served (`myapp` for
   * myapp.whop.app), or `null` if no route is claimed.
   */
  route: string | null;

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

export namespace AppListResponse {
  /**
   * The account that owns the app.
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
   * The user who owns the publishing company.
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
   * The app's icon. Falls back to the default app icon when none is uploaded.
   */
  export interface Icon {
    /**
     * Icon image URL. Always present — the default app icon when none is uploaded.
     */
    url: string;
  }
}

export interface AppLogsResponse {
  data: Array<AppLogsResponse.Data>;

  page_info: AppLogsResponse.PageInfo;
}

export namespace AppLogsResponse {
  export interface Data {
    app_build_id: string;

    app_id: string;

    created_at: string;

    level: string;

    message: string;

    request_id: string;

    source: 'console' | 'exception' | 'request';

    cpu_time_ms?: number;

    outcome?: string | null;

    request_method?: string | null;

    request_path?: string | null;

    response_status?: number | null;

    stack?: string | null;

    truncated?: boolean;

    wall_time_ms?: number;
  }

  export interface PageInfo {
    has_next_page: boolean;

    has_previous_page: boolean;

    end_cursor?: string | null;

    start_cursor?: string | null;
  }
}

export interface AppListParams extends CursorPageParams {
  /**
   * Only return apps created by this account (`biz_` tag). With developer access to
   * the account this includes its unlisted and hidden apps.
   */
  account_id?: string;

  /**
   * Filter apps by the type of end-user they are built for.
   */
  app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component';

  /**
   * A cursor; returns apps before this position.
   */
  before?: string;

  /**
   * Sort direction.
   */
  direction?: 'asc' | 'desc';

  /**
   * The number of apps to return (default 20, max 100).
   */
  first?: number;

  /**
   * The number of apps to return from the end of the range.
   */
  last?: number;

  /**
   * The field to sort apps by. Defaults to discoverable_at, showing the most
   * recently published apps first.
   */
  order?: 'created_at' | 'discoverable_at' | 'total_installs_last_30_days' | 'total_installs_last_7_days';

  /**
   * A search string matched against app names.
   */
  query?: string;

  /**
   * Whether to only return apps verified by Whop.
   */
  verified_apps_only?: boolean;

  /**
   * Only return apps supporting this view type, such as `dashboard` or `hub`.
   */
  view_type?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi';
}

export interface AppCreateParams {
  /**
   * Body param: The display name for the app, shown to users on the app store and
   * product pages.
   */
  name: string;

  /**
   * Body param: The account to create the app for (`biz_` tag). Defaults to the
   * account behind the presented credential.
   */
  account_id?: string;

  /**
   * Body param: The base production URL where the app is hosted, such as
   * `https://myapp.example.com`.
   */
  base_url?: string | null;

  /**
   * Body param: The icon image for the app in PNG, JPEG, or GIF format, referencing
   * an uploaded file: `{ id }` for an existing attachment or `{ direct_upload_id }`
   * for a new direct upload.
   */
  icon?: AppCreateParams.Icon;

  /**
   * Body param: The whitelisted OAuth callback URLs that users are redirected to
   * after authorizing the app.
   */
  redirect_uris?: Array<string>;

  /**
   * Body param: The subdomain route where the app's hosted web builds are served,
   * such as `myapp` for myapp.whop.app.
   */
  route?: string | null;

  /**
   * Header param: A unique key that makes this request safe to retry. See
   * [Idempotent requests](https://docs.whop.com/developer/api/idempotency).
   */
  'Idempotency-Key'?: string;
}

export namespace AppCreateParams {
  /**
   * The icon image for the app in PNG, JPEG, or GIF format, referencing an uploaded
   * file: `{ id }` for an existing attachment or `{ direct_upload_id }` for a new
   * direct upload.
   */
  export interface Icon {
    /**
     * The tag of an already-uploaded attachment.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }
}

export interface AppUpdateParams {
  /**
   * The detailed description shown on the app store's in-depth app view page.
   */
  app_store_description?: string;

  /**
   * The type of end-user the app is built for.
   */
  app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component';

  /**
   * The base production URL where the app is hosted.
   */
  base_url?: string;

  /**
   * The URL path for the company dashboard view.
   */
  dashboard_path?: string | null;

  /**
   * A short description of the app shown in listings and search results.
   */
  description?: string;

  /**
   * The URL path for the discover view.
   */
  discover_path?: string | null;

  /**
   * The URL path for the member-facing hub view, such as
   * `/experiences/[experienceId]`.
   */
  experience_path?: string | null;

  /**
   * The icon image for the app in PNG, JPEG, or GIF format, referencing an uploaded
   * file: `{ id }` for an existing attachment or `{ direct_upload_id }` for a new
   * direct upload.
   */
  icon?: AppUpdateParams.Icon;

  /**
   * The display name for the app, shown to users on the app store and product pages.
   */
  name?: string;

  /**
   * How the app authenticates at the OAuth token endpoint.
   */
  oauth_client_type?: 'public' | 'confidential';

  /**
   * The URL path to the app's OpenAPI spec file (requires the ai_chat capability).
   */
  openapi_path?: string | null;

  /**
   * The app build (`abld_` tag) to serve as the Android production build, or `null`
   * to unassign it. Same rules as `production_web_build_id`.
   */
  production_android_build_id?: string | null;

  /**
   * The app build (`abld_` tag) to serve as the iOS production build, or `null` to
   * unassign it. Same rules as `production_web_build_id`.
   */
  production_ios_build_id?: string | null;

  /**
   * The app build (`abld_` tag) to serve as the web production build, or `null` to
   * unassign it. The build must belong to this app, target web, and be in the draft
   * or approved status; a draft build is queued for approval and takes over once
   * approved. Requires the `developer:manage_builds` scope.
   */
  production_web_build_id?: string | null;

  /**
   * The whitelisted OAuth callback URLs users are redirected to after authorizing
   * the app.
   */
  redirect_uris?: Array<string>;

  /**
   * The OAuth scopes the app requests from users when they install it.
   */
  required_scopes?: Array<string>;

  /**
   * The subdomain route where the app's hosted web builds are served.
   */
  route?: string;

  /**
   * Secrets to add or overwrite on the app, as an object of string values. Keys not
   * included are left untouched; pass null or an empty string as the value to delete
   * a secret. Encrypted at rest and injected into the app's hosted server runtime.
   */
  secrets?: unknown;

  /**
   * The URL path to the app's skills directory (requires the ai_chat capability).
   */
  skills_path?: string | null;

  /**
   * Controls the app's visibility. `live` publishes on Whop discovery (requires
   * name, icon, and description); `unlisted` hides it from discovery while keeping
   * direct-link access.
   */
  status?: 'live' | 'unlisted' | 'hidden';
}

export namespace AppUpdateParams {
  /**
   * The icon image for the app in PNG, JPEG, or GIF format, referencing an uploaded
   * file: `{ id }` for an existing attachment or `{ direct_upload_id }` for a new
   * direct upload.
   */
  export interface Icon {
    /**
     * The tag of an already-uploaded attachment.
     */
    id?: string;

    /**
     * The signed id of a completed direct upload.
     */
    direct_upload_id?: string;
  }
}

export interface AppUpdatePermissionsParams {
  /**
   * The full set of permissions the app requests on install; permissions not listed
   * are removed.
   */
  requested_permissions: Array<AppUpdatePermissionsParams.RequestedPermission>;
}

export namespace AppUpdatePermissionsParams {
  export interface RequestedPermission {
    /**
     * The permission action, for example `company:basic:read`.
     */
    action: string;

    /**
     * Whether installing the app requires granting this permission.
     */
    is_required: boolean;

    /**
     * Why the app needs this permission (20-512 characters), shown to the installing
     * user.
     */
    justification: string;
  }
}

export interface AppLogsParams {
  /**
   * A cursor for fetching logs after a previous page.
   */
  after?: string;

  /**
   * Only return logs from this build.
   */
  app_build_id?: string;

  /**
   * A cursor for fetching logs before a later page.
   */
  before?: string;

  /**
   * Start of the time window as an ISO 8601 timestamp. Defaults to 7 days before
   * created_before.
   */
  created_after?: string;

  /**
   * End of the time window as an ISO 8601 timestamp. Defaults to now.
   */
  created_before?: string;

  /**
   * The number of log lines to return (max 500).
   */
  first?: number;

  /**
   * Only return console lines of this level.
   */
  level?: 'log' | 'debug' | 'info' | 'warn' | 'error';

  /**
   * Only return logs whose message contains this text (case-insensitive).
   */
  query?: string;
}

export declare namespace Apps {
  export {
    type AppType as AppType,
    type AppListResponse as AppListResponse,
    type AppLogsResponse as AppLogsResponse,
    type AppListResponsesCursorPage as AppListResponsesCursorPage,
    type AppListParams as AppListParams,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppUpdatePermissionsParams as AppUpdatePermissionsParams,
    type AppLogsParams as AppLogsParams,
  };
}
