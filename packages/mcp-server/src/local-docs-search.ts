// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/apps',
    httpMethod: 'get',
    summary: 'List apps',
    description:
      'Returns a paginated list of apps on the Whop platform, with optional filtering by company, type, view support, and search query.',
    stainlessPath: '(resource) apps > (method) list',
    qualified: 'client.apps.list',
    params: [
      'after?: string;',
      "app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component';",
      'before?: string;',
      'company_id?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'order?: string;',
      'query?: string;',
      'verified_apps_only?: boolean;',
      "view_type?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi';",
    ],
    response:
      "{ id: string; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; skills_path: string; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }",
    markdown:
      "## list\n\n`client.apps.list(after?: string, app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component', before?: string, company_id?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: string, query?: string, verified_apps_only?: boolean, view_type?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'): { id: string; app_type: app_type; base_url: string; company: object; creator: object; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: object; name: string; openapi_path: string; origin: string; skills_path: string; status: app_statuses; verified: boolean; }`\n\n**get** `/apps`\n\nReturns a paginated list of apps on the Whop platform, with optional filtering by company, type, view support, and search query.\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'`\n  The type of end-user an app is built for\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  Filter apps to only those created by this company, starting with 'biz_'.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: string`\n  The order to fetch the apps in for discovery.\n\n- `query?: string`\n  A search string to filter apps by name, such as 'chat' or 'analytics'.\n\n- `verified_apps_only?: boolean`\n  Whether to only return apps that have been verified by Whop. Useful for populating a featured apps section.\n\n- `view_type?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'`\n  The different types of an app view\n\n### Returns\n\n- `{ id: string; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; skills_path: string; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }`\n  An app is an integration built on Whop. Apps can serve consumers as experiences within products, or serve companies as business tools.\n\n  - `id: string`\n  - `app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'`\n  - `base_url: string`\n  - `company: { id: string; title: string; }`\n  - `creator: { id: string; name: string; username: string; }`\n  - `dashboard_path: string`\n  - `description: string`\n  - `discover_path: string`\n  - `domain_id: string`\n  - `experience_path: string`\n  - `icon: { url: string; }`\n  - `name: string`\n  - `openapi_path: string`\n  - `origin: string`\n  - `skills_path: string`\n  - `status: 'live' | 'unlisted' | 'hidden'`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const appListResponse of client.apps.list()) {\n  console.log(appListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const appListResponse of client.apps.list()) {\n  console.log(appListResponse.id);\n}",
      },
      python: {
        method: 'apps.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.apps.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'apps.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.apps.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/apps \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/apps',
    httpMethod: 'post',
    summary: 'Create app',
    description:
      'Register a new app on the Whop developer platform. Apps provide custom experiences that can be added to products.\n\nRequired permissions:\n - `developer:create_app`\n - `developer:manage_api_key`',
    stainlessPath: '(resource) apps > (method) create',
    qualified: 'client.apps.create',
    params: [
      'company_id: string;',
      'name: string;',
      'base_url?: string;',
      'icon?: { id: string; };',
      'redirect_uris?: string[];',
    ],
    response:
      "{ id: string; api_key: { id: string; token: string; created_at: string; }; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]; skills_path: string; stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }",
    markdown:
      "## create\n\n`client.apps.create(company_id: string, name: string, base_url?: string, icon?: { id: string; }, redirect_uris?: string[]): { id: string; api_key: object; app_type: app_type; base_url: string; company: object; creator: object; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: object; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: object[]; skills_path: string; stats: object; status: app_statuses; verified: boolean; }`\n\n**post** `/apps`\n\nRegister a new app on the Whop developer platform. Apps provide custom experiences that can be added to products.\n\nRequired permissions:\n - `developer:create_app`\n - `developer:manage_api_key`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create the app for, starting with 'biz_'.\n\n- `name: string`\n  The display name for the app, shown to users on the app store and product pages.\n\n- `base_url?: string`\n  The base production URL where the app is hosted, such as 'https://myapp.example.com'.\n\n- `icon?: { id: string; }`\n  The icon image for the app in PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `redirect_uris?: string[]`\n  The whitelisted OAuth callback URLs that users are redirected to after authorizing the app.\n\n### Returns\n\n- `{ id: string; api_key: { id: string; token: string; created_at: string; }; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]; skills_path: string; stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }`\n  An app is an integration built on Whop. Apps can serve consumers as experiences within products, or serve companies as business tools.\n\n  - `id: string`\n  - `api_key: { id: string; token: string; created_at: string; }`\n  - `app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'`\n  - `base_url: string`\n  - `company: { id: string; title: string; }`\n  - `creator: { id: string; name: string; username: string; }`\n  - `dashboard_path: string`\n  - `description: string`\n  - `discover_path: string`\n  - `domain_id: string`\n  - `experience_path: string`\n  - `icon: { url: string; }`\n  - `name: string`\n  - `openapi_path: string`\n  - `origin: string`\n  - `redirect_uris: string[]`\n  - `requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]`\n  - `skills_path: string`\n  - `stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }`\n  - `status: 'live' | 'unlisted' | 'hidden'`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst app = await client.apps.create({ company_id: 'biz_xxxxxxxxxxxxxx', name: 'name' });\n\nconsole.log(app);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst app = await client.apps.create({ company_id: 'biz_xxxxxxxxxxxxxx', name: 'name' });\n\nconsole.log(app.id);",
      },
      python: {
        method: 'apps.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\napp = client.apps.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    name="name",\n)\nprint(app.id)',
      },
      ruby: {
        method: 'apps.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\napp = whop.apps.create(company_id: "biz_xxxxxxxxxxxxxx", name: "name")\n\nputs(app)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/apps \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "name": "name"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/apps/{id}',
    httpMethod: 'get',
    summary: 'Retrieve app',
    description:
      'Retrieves the details of an existing app.\n\nRequired permissions:\n - `developer:manage_api_key`',
    stainlessPath: '(resource) apps > (method) retrieve',
    qualified: 'client.apps.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; api_key: { id: string; token: string; created_at: string; }; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]; skills_path: string; stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }",
    markdown:
      "## retrieve\n\n`client.apps.retrieve(id: string): { id: string; api_key: object; app_type: app_type; base_url: string; company: object; creator: object; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: object; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: object[]; skills_path: string; stats: object; status: app_statuses; verified: boolean; }`\n\n**get** `/apps/{id}`\n\nRetrieves the details of an existing app.\n\nRequired permissions:\n - `developer:manage_api_key`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; api_key: { id: string; token: string; created_at: string; }; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]; skills_path: string; stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }`\n  An app is an integration built on Whop. Apps can serve consumers as experiences within products, or serve companies as business tools.\n\n  - `id: string`\n  - `api_key: { id: string; token: string; created_at: string; }`\n  - `app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'`\n  - `base_url: string`\n  - `company: { id: string; title: string; }`\n  - `creator: { id: string; name: string; username: string; }`\n  - `dashboard_path: string`\n  - `description: string`\n  - `discover_path: string`\n  - `domain_id: string`\n  - `experience_path: string`\n  - `icon: { url: string; }`\n  - `name: string`\n  - `openapi_path: string`\n  - `origin: string`\n  - `redirect_uris: string[]`\n  - `requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]`\n  - `skills_path: string`\n  - `stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }`\n  - `status: 'live' | 'unlisted' | 'hidden'`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst app = await client.apps.retrieve('app_xxxxxxxxxxxxxx');\n\nconsole.log(app);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst app = await client.apps.retrieve('app_xxxxxxxxxxxxxx');\n\nconsole.log(app.id);",
      },
      python: {
        method: 'apps.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\napp = client.apps.retrieve(\n    "app_xxxxxxxxxxxxxx",\n)\nprint(app.id)',
      },
      ruby: {
        method: 'apps.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\napp = whop.apps.retrieve("app_xxxxxxxxxxxxxx")\n\nputs(app)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/apps/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/apps/{id}',
    httpMethod: 'patch',
    summary: 'Update app',
    description:
      'Update the settings, metadata, or status of an existing app on the Whop developer platform.\n\nRequired permissions:\n - `developer:update_app`\n - `developer:manage_api_key`',
    stainlessPath: '(resource) apps > (method) update',
    qualified: 'client.apps.update',
    params: [
      'id: string;',
      'app_store_description?: string;',
      "app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component';",
      'base_url?: string;',
      'dashboard_path?: string;',
      'description?: string;',
      'discover_path?: string;',
      'experience_path?: string;',
      'icon?: { id: string; };',
      'name?: string;',
      "oauth_client_type?: 'public' | 'confidential';",
      'openapi_path?: string;',
      'redirect_uris?: string[];',
      "required_scopes?: 'read_user'[];",
      'skills_path?: string;',
      "status?: 'live' | 'unlisted' | 'hidden';",
    ],
    response:
      "{ id: string; api_key: { id: string; token: string; created_at: string; }; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]; skills_path: string; stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }",
    markdown:
      "## update\n\n`client.apps.update(id: string, app_store_description?: string, app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component', base_url?: string, dashboard_path?: string, description?: string, discover_path?: string, experience_path?: string, icon?: { id: string; }, name?: string, oauth_client_type?: 'public' | 'confidential', openapi_path?: string, redirect_uris?: string[], required_scopes?: 'read_user'[], skills_path?: string, status?: 'live' | 'unlisted' | 'hidden'): { id: string; api_key: object; app_type: app_type; base_url: string; company: object; creator: object; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: object; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: object[]; skills_path: string; stats: object; status: app_statuses; verified: boolean; }`\n\n**patch** `/apps/{id}`\n\nUpdate the settings, metadata, or status of an existing app on the Whop developer platform.\n\nRequired permissions:\n - `developer:update_app`\n - `developer:manage_api_key`\n\n### Parameters\n\n- `id: string`\n\n- `app_store_description?: string`\n  The detailed description shown on the app store's in-depth app view page.\n\n- `app_type?: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'`\n  The type of end-user an app is built for\n\n- `base_url?: string`\n  The base production URL where the app is hosted, such as 'https://myapp.example.com'.\n\n- `dashboard_path?: string`\n  The URL path for the company dashboard view of the app, such as '/dashboard'.\n\n- `description?: string`\n  A short description of the app shown in listings and search results.\n\n- `discover_path?: string`\n  The URL path for the discover view of the app, such as '/discover'.\n\n- `experience_path?: string`\n  The URL path for the member-facing hub view of the app, such as '/experiences/[experienceId]'.\n\n- `icon?: { id: string; }`\n  The icon image for the app, used in listings and navigation.\n  - `id: string`\n    The ID of an existing file object.\n\n- `name?: string`\n  The display name for the app, shown to users on the app store and product pages.\n\n- `oauth_client_type?: 'public' | 'confidential'`\n  How this app authenticates at the OAuth token endpoint.\n\n- `openapi_path?: string`\n  The URL path to the OpenAPI spec file of the app, such as '/assets/openapi.json'.\n\n- `redirect_uris?: string[]`\n  The whitelisted OAuth callback URLs that users are redirected to after authorizing the app\n\n- `required_scopes?: 'read_user'[]`\n  The permission scopes the app will request from users when they install it.\n\n- `skills_path?: string`\n  The URL path to the skills directory of the app, such as '/assets/skills/'.\n\n- `status?: 'live' | 'unlisted' | 'hidden'`\n  The status of an experience interface\n\n### Returns\n\n- `{ id: string; api_key: { id: string; token: string; created_at: string; }; app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'; base_url: string; company: { id: string; title: string; }; creator: { id: string; name: string; username: string; }; dashboard_path: string; description: string; discover_path: string; domain_id: string; experience_path: string; icon: { url: string; }; name: string; openapi_path: string; origin: string; redirect_uris: string[]; requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]; skills_path: string; stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }; status: 'live' | 'unlisted' | 'hidden'; verified: boolean; }`\n  An app is an integration built on Whop. Apps can serve consumers as experiences within products, or serve companies as business tools.\n\n  - `id: string`\n  - `api_key: { id: string; token: string; created_at: string; }`\n  - `app_type: 'b2b_app' | 'b2c_app' | 'company_app' | 'component'`\n  - `base_url: string`\n  - `company: { id: string; title: string; }`\n  - `creator: { id: string; name: string; username: string; }`\n  - `dashboard_path: string`\n  - `description: string`\n  - `discover_path: string`\n  - `domain_id: string`\n  - `experience_path: string`\n  - `icon: { url: string; }`\n  - `name: string`\n  - `openapi_path: string`\n  - `origin: string`\n  - `redirect_uris: string[]`\n  - `requested_permissions: { is_required: boolean; justification: string; permission_action: { action: string; name: string; }; }[]`\n  - `skills_path: string`\n  - `stats: { dau: number; mau: number; time_spent_last24_hours: number; wau: number; }`\n  - `status: 'live' | 'unlisted' | 'hidden'`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst app = await client.apps.update('app_xxxxxxxxxxxxxx');\n\nconsole.log(app);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst app = await client.apps.update('app_xxxxxxxxxxxxxx');\n\nconsole.log(app.id);",
      },
      python: {
        method: 'apps.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\napp = client.apps.update(\n    id="app_xxxxxxxxxxxxxx",\n)\nprint(app.id)',
      },
      ruby: {
        method: 'apps.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\napp = whop.apps.update("app_xxxxxxxxxxxxxx")\n\nputs(app)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/apps/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/invoices',
    httpMethod: 'get',
    summary: 'List invoices',
    description:
      'Returns a paginated list of invoices for a company, with optional filtering by product, status, collection method, and creation date.\n\nRequired permissions:\n - `invoice:basic:read`',
    stainlessPath: '(resource) invoices > (method) list',
    qualified: 'client.invoices.list',
    params: [
      'after?: string;',
      'before?: string;',
      "collection_methods?: 'send_invoice' | 'charge_automatically'[];",
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'id' | 'created_at' | 'due_date';",
      'product_ids?: string[];',
      "statuses?: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'[];",
    ],
    response:
      "{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.invoices.list(after?: string, before?: string, collection_methods?: 'send_invoice' | 'charge_automatically'[], company_id?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'id' | 'created_at' | 'due_date', product_ids?: string[], statuses?: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'[]): { id: string; created_at: string; current_plan: object; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: invoice_status; user: object; }`\n\n**get** `/invoices`\n\nReturns a paginated list of invoices for a company, with optional filtering by product, status, collection method, and creation date.\n\nRequired permissions:\n - `invoice:basic:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `collection_methods?: 'send_invoice' | 'charge_automatically'[]`\n  Filter invoices by their collection method.\n\n- `company_id?: string`\n  The unique identifier of the company to list invoices for.\n\n- `created_after?: string`\n  Only return invoices created after this timestamp.\n\n- `created_before?: string`\n  Only return invoices created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'id' | 'created_at' | 'due_date'`\n  Which columns can be used to sort.\n\n- `product_ids?: string[]`\n  Filter invoices to only those associated with these specific product identifiers.\n\n- `statuses?: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'[]`\n  Filter invoices by their current status.\n\n### Returns\n\n- `{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }`\n  An invoice represents an itemized bill sent by a company to a customer for a specific product and plan, tracking the amount owed, due date, and payment status.\n\n  - `id: string`\n  - `created_at: string`\n  - `current_plan: { id: string; currency: string; formatted_price: string; }`\n  - `due_date: string`\n  - `email_address: string`\n  - `fetch_invoice_token: string`\n  - `number: string`\n  - `status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const invoiceListItem of client.invoices.list()) {\n  console.log(invoiceListItem);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const invoiceListItem of client.invoices.list()) {\n  console.log(invoiceListItem.id);\n}",
      },
      python: {
        method: 'invoices.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.invoices.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'invoices.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.invoices.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/invoices \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/invoices',
    httpMethod: 'post',
    summary: 'Create invoice',
    description:
      'Create an invoice for a customer. The invoice can be charged automatically using a stored payment method, or sent to the customer for manual payment.\n\nRequired permissions:\n - `invoice:create`',
    stainlessPath: '(resource) invoices > (method) create',
    qualified: 'client.invoices.create',
    params: [
      "{ collection_method: 'send_invoice' | 'charge_automatically'; company_id: string; plan: { billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; description?: string; expiration_days?: number; initial_price?: number; internal_notes?: string; legacy_payment_method_controls?: boolean; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; stock?: number; trial_period_days?: number; unlimited_stock?: boolean; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; product: { title: string; product_tax_code_id?: string; }; automatically_finalizes_at?: string; billing_address?: { city?: string; country?: string; line1?: string; line2?: string; name?: string; phone?: string; postal_code?: string; state?: string; tax_id_type?: string; tax_id_value?: string; }; charge_buyer_fee?: boolean; customer_name?: string; due_date?: string; email_address?: string; line_items?: { label: string; unit_price: number; quantity?: number; }[]; mailing_address_id?: string; member_id?: string; payment_method_id?: string; payment_token_id?: string; save_as_draft?: boolean; subscription_billing_anchor_at?: string; } | { collection_method: 'send_invoice' | 'charge_automatically'; company_id: string; plan: { billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; description?: string; expiration_days?: number; initial_price?: number; internal_notes?: string; legacy_payment_method_controls?: boolean; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; stock?: number; trial_period_days?: number; unlimited_stock?: boolean; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; product_id: string; automatically_finalizes_at?: string; billing_address?: { city?: string; country?: string; line1?: string; line2?: string; name?: string; phone?: string; postal_code?: string; state?: string; tax_id_type?: string; tax_id_value?: string; }; charge_buyer_fee?: boolean; customer_name?: string; due_date?: string; email_address?: string; line_items?: { label: string; unit_price: number; quantity?: number; }[]; mailing_address_id?: string; member_id?: string; payment_method_id?: string; payment_token_id?: string; save_as_draft?: boolean; subscription_billing_anchor_at?: string; };",
    ],
    response:
      "{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }",
    perLanguage: {
      typescript: {
        method: 'client.invoices.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst invoice = await client.invoices.create({\n  collection_method: 'send_invoice',\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  plan: {},\n  product: { title: 'title' },\n});\n\nconsole.log(invoice.id);",
      },
      python: {
        method: 'invoices.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ninvoice = client.invoices.create(\n    collection_method="send_invoice",\n    company_id="biz_xxxxxxxxxxxxxx",\n    plan={},\n    product={\n        "title": "title"\n    },\n)\nprint(invoice.id)',
      },
      ruby: {
        method: 'invoices.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ninvoice = whop.invoices.create(\n  body: {collection_method: :send_invoice, company_id: "biz_xxxxxxxxxxxxxx", plan: {}, product: {title: "title"}}\n)\n\nputs(invoice)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "collection_method": "send_invoice",\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "plan": {},\n          "product": {\n            "title": "title"\n          },\n          "automatically_finalizes_at": "2023-12-01T05:00:00.401Z",\n          "due_date": "2023-12-01T05:00:00.401Z",\n          "mailing_address_id": "ma_xxxxxxxxxxxxxxx",\n          "member_id": "mber_xxxxxxxxxxxxx",\n          "payment_method_id": "pmt_xxxxxxxxxxxxxx",\n          "payment_token_id": "payt_xxxxxxxxxxxxx",\n          "subscription_billing_anchor_at": "2023-12-01T05:00:00.401Z"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/invoices/{id}',
    httpMethod: 'get',
    summary: 'Retrieve invoice',
    description:
      'Retrieves the details of an existing invoice.\n\nRequired permissions:\n - `invoice:basic:read`',
    stainlessPath: '(resource) invoices > (method) retrieve',
    qualified: 'client.invoices.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.invoices.retrieve(id: string): { id: string; created_at: string; current_plan: object; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: invoice_status; user: object; }`\n\n**get** `/invoices/{id}`\n\nRetrieves the details of an existing invoice.\n\nRequired permissions:\n - `invoice:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }`\n  An invoice represents an itemized bill sent by a company to a customer for a specific product and plan, tracking the amount owed, due date, and payment status.\n\n  - `id: string`\n  - `created_at: string`\n  - `current_plan: { id: string; currency: string; formatted_price: string; }`\n  - `due_date: string`\n  - `email_address: string`\n  - `fetch_invoice_token: string`\n  - `number: string`\n  - `status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst invoice = await client.invoices.retrieve('inv_xxxxxxxxxxxxxx');\n\nconsole.log(invoice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst invoice = await client.invoices.retrieve('inv_xxxxxxxxxxxxxx');\n\nconsole.log(invoice.id);",
      },
      python: {
        method: 'invoices.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ninvoice = client.invoices.retrieve(\n    "inv_xxxxxxxxxxxxxx",\n)\nprint(invoice.id)',
      },
      ruby: {
        method: 'invoices.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ninvoice = whop.invoices.retrieve("inv_xxxxxxxxxxxxxx")\n\nputs(invoice)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'void',
    endpoint: '/invoices/{id}/void',
    httpMethod: 'post',
    summary: 'Void invoice',
    description:
      'Void an open invoice so it can no longer be paid. Voiding is permanent and cannot be undone.\n\nRequired permissions:\n - `invoice:update`',
    stainlessPath: '(resource) invoices > (method) void',
    qualified: 'client.invoices.void',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## void\n\n`client.invoices.void(id: string): boolean`\n\n**post** `/invoices/{id}/void`\n\nVoid an open invoice so it can no longer be paid. Voiding is permanent and cannot be undone.\n\nRequired permissions:\n - `invoice:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.invoices.void('inv_xxxxxxxxxxxxxx');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.void',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.invoices.void('inv_xxxxxxxxxxxxxx');\n\nconsole.log(response);",
      },
      python: {
        method: 'invoices.void',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.invoices.void(\n    "inv_xxxxxxxxxxxxxx",\n)\nprint(response)',
      },
      ruby: {
        method: 'invoices.void',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.invoices.void("inv_xxxxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices/$ID/void \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'mark_paid',
    endpoint: '/invoices/{id}/mark_paid',
    httpMethod: 'post',
    summary: 'Mark paid invoice',
    description:
      'Mark an open invoice as paid when payment was collected outside of Whop.\n\nRequired permissions:\n - `invoice:update`',
    stainlessPath: '(resource) invoices > (method) mark_paid',
    qualified: 'client.invoices.markPaid',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## mark_paid\n\n`client.invoices.markPaid(id: string): boolean`\n\n**post** `/invoices/{id}/mark_paid`\n\nMark an open invoice as paid when payment was collected outside of Whop.\n\nRequired permissions:\n - `invoice:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.invoices.markPaid('inv_xxxxxxxxxxxxxx');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.markPaid',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.invoices.markPaid('inv_xxxxxxxxxxxxxx');\n\nconsole.log(response);",
      },
      python: {
        method: 'invoices.mark_paid',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.invoices.mark_paid(\n    "inv_xxxxxxxxxxxxxx",\n)\nprint(response)',
      },
      ruby: {
        method: 'invoices.mark_paid',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.invoices.mark_paid("inv_xxxxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices/$ID/mark_paid \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'mark_uncollectible',
    endpoint: '/invoices/{id}/mark_uncollectible',
    httpMethod: 'post',
    summary: 'Mark uncollectible invoice',
    description:
      'Mark an open invoice as uncollectible when payment is not expected.\n\nRequired permissions:\n - `invoice:update`',
    stainlessPath: '(resource) invoices > (method) mark_uncollectible',
    qualified: 'client.invoices.markUncollectible',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## mark_uncollectible\n\n`client.invoices.markUncollectible(id: string): boolean`\n\n**post** `/invoices/{id}/mark_uncollectible`\n\nMark an open invoice as uncollectible when payment is not expected.\n\nRequired permissions:\n - `invoice:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.invoices.markUncollectible('inv_xxxxxxxxxxxxxx');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.markUncollectible',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.invoices.markUncollectible('inv_xxxxxxxxxxxxxx');\n\nconsole.log(response);",
      },
      python: {
        method: 'invoices.mark_uncollectible',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.invoices.mark_uncollectible(\n    "inv_xxxxxxxxxxxxxx",\n)\nprint(response)',
      },
      ruby: {
        method: 'invoices.mark_uncollectible',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.invoices.mark_uncollectible("inv_xxxxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices/$ID/mark_uncollectible \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/invoices/{id}',
    httpMethod: 'patch',
    summary: 'Update invoice',
    description: "Update a draft invoice's details.\n\nRequired permissions:\n - `invoice:update`",
    stainlessPath: '(resource) invoices > (method) update',
    qualified: 'client.invoices.update',
    params: [
      'id: string;',
      'automatically_finalizes_at?: string;',
      'billing_address?: { city?: string; country?: string; line1?: string; line2?: string; name?: string; phone?: string; postal_code?: string; state?: string; tax_id_type?: string; tax_id_value?: string; };',
      'charge_buyer_fee?: boolean;',
      "collection_method?: 'send_invoice' | 'charge_automatically';",
      'customer_name?: string;',
      'due_date?: string;',
      'email_address?: string;',
      'line_items?: { label: string; unit_price: number; quantity?: number; }[];',
      'mailing_address_id?: string;',
      'member_id?: string;',
      'payment_method_id?: string;',
      "plan?: { billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; description?: string; expiration_days?: number; initial_price?: number; internal_notes?: string; legacy_payment_method_controls?: boolean; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; stock?: number; trial_period_days?: number; unlimited_stock?: boolean; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; };",
      'subscription_billing_anchor_at?: string;',
    ],
    response:
      "{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## update\n\n`client.invoices.update(id: string, automatically_finalizes_at?: string, billing_address?: { city?: string; country?: string; line1?: string; line2?: string; name?: string; phone?: string; postal_code?: string; state?: string; tax_id_type?: string; tax_id_value?: string; }, charge_buyer_fee?: boolean, collection_method?: 'send_invoice' | 'charge_automatically', customer_name?: string, due_date?: string, email_address?: string, line_items?: { label: string; unit_price: number; quantity?: number; }[], mailing_address_id?: string, member_id?: string, payment_method_id?: string, plan?: { billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; description?: string; expiration_days?: number; initial_price?: number; internal_notes?: string; legacy_payment_method_controls?: boolean; payment_method_configuration?: { disabled: payment_method_types[]; enabled: payment_method_types[]; include_platform_defaults?: boolean; }; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; stock?: number; trial_period_days?: number; unlimited_stock?: boolean; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }, subscription_billing_anchor_at?: string): { id: string; created_at: string; current_plan: object; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: invoice_status; user: object; }`\n\n**patch** `/invoices/{id}`\n\nUpdate a draft invoice's details.\n\nRequired permissions:\n - `invoice:update`\n\n### Parameters\n\n- `id: string`\n\n- `automatically_finalizes_at?: string`\n  The date and time when the invoice will be automatically finalized. For charge_automatically, triggers an automatic charge. For send_invoice, sends the invoice email at the specified time.\n\n- `billing_address?: { city?: string; country?: string; line1?: string; line2?: string; name?: string; phone?: string; postal_code?: string; state?: string; tax_id_type?: string; tax_id_value?: string; }`\n  Inline billing address to create or update a mailing address for this invoice.\n  - `city?: string`\n    The city of the address.\n  - `country?: string`\n    The country of the address.\n  - `line1?: string`\n    The line 1 of the address.\n  - `line2?: string`\n    The line 2 of the address.\n  - `name?: string`\n    The name of the customer.\n  - `phone?: string`\n    The phone number of the customer.\n  - `postal_code?: string`\n    The postal code of the address.\n  - `state?: string`\n    The state of the address.\n  - `tax_id_type?: string`\n    The type of tax identifier\n  - `tax_id_value?: string`\n    The value of the tax identifier.\n\n- `charge_buyer_fee?: boolean`\n  Whether to charge the customer a buyer fee on this invoice.\n\n- `collection_method?: 'send_invoice' | 'charge_automatically'`\n  The method of collection for an invoice.\n\n- `customer_name?: string`\n  The name of the customer.\n\n- `due_date?: string`\n  The date by which the invoice must be paid.\n\n- `email_address?: string`\n  The email address of the customer.\n\n- `line_items?: { label: string; unit_price: number; quantity?: number; }[]`\n  Line items that break down the invoice total.\n\n- `mailing_address_id?: string`\n  The unique identifier of an existing mailing address to attach.\n\n- `member_id?: string`\n  The unique identifier of a member to assign as the customer.\n\n- `payment_method_id?: string`\n  The unique identifier of the payment method to charge.\n\n- `plan?: { billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; description?: string; expiration_days?: number; initial_price?: number; internal_notes?: string; legacy_payment_method_controls?: boolean; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; stock?: number; trial_period_days?: number; unlimited_stock?: boolean; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  Updated plan attributes.\n  - `billing_period?: number`\n    The interval in days at which the plan charges (renewal plans).\n  - `custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]`\n    An array of custom field objects.\n  - `description?: string`\n    The description of the plan.\n  - `expiration_days?: number`\n    The number of days until the membership expires and revokes access (expiration plans). For example, 365 for a one-year access period.\n  - `initial_price?: number`\n    An additional amount charged upon first purchase. Use only if a one time payment OR you want to charge an additional amount on top of the renewal price. Provided as a number in the specified currency. Eg: 10.43 for $10.43\n  - `internal_notes?: string`\n    A personal description or notes section for the business.\n  - `legacy_payment_method_controls?: boolean`\n    Whether this plan uses legacy payment method controls\n  - `payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }`\n    The explicit payment method configuration for the plan. If not provided, the platform or company's defaults will apply.\n  - `plan_type?: 'renewal' | 'one_time'`\n    The type of plan that can be attached to a product\n  - `release_method?: 'buy_now' | 'waitlist'`\n    The methods of how a plan can be released.\n  - `renewal_price?: number`\n    The amount the customer is charged every billing period. Use only if a recurring payment. Provided as a number in the specified currency. Eg: 10.43 for $10.43\n  - `stock?: number`\n    The number of units available for purchase.\n  - `trial_period_days?: number`\n    The number of free trial days added before a renewal plan.\n  - `unlimited_stock?: boolean`\n    When true, the plan has unlimited stock (stock field is ignored). When false, purchases are limited by the stock field.\n  - `visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n    Visibility of a resource\n\n- `subscription_billing_anchor_at?: string`\n  The date that defines when the subscription billing cycle should start.\n\n### Returns\n\n- `{ id: string; created_at: string; current_plan: { id: string; currency: string; formatted_price: string; }; due_date: string; email_address: string; fetch_invoice_token: string; number: string; status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'; user: { id: string; name: string; username: string; }; }`\n  An invoice represents an itemized bill sent by a company to a customer for a specific product and plan, tracking the amount owed, due date, and payment status.\n\n  - `id: string`\n  - `created_at: string`\n  - `current_plan: { id: string; currency: string; formatted_price: string; }`\n  - `due_date: string`\n  - `email_address: string`\n  - `fetch_invoice_token: string`\n  - `number: string`\n  - `status: 'draft' | 'open' | 'paid' | 'past_due' | 'uncollectible' | 'void'`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst invoice = await client.invoices.update('inv_xxxxxxxxxxxxxx');\n\nconsole.log(invoice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst invoice = await client.invoices.update('inv_xxxxxxxxxxxxxx');\n\nconsole.log(invoice.id);",
      },
      python: {
        method: 'invoices.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ninvoice = client.invoices.update(\n    id="inv_xxxxxxxxxxxxxx",\n)\nprint(invoice.id)',
      },
      ruby: {
        method: 'invoices.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ninvoice = whop.invoices.update("inv_xxxxxxxxxxxxxx")\n\nputs(invoice)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/invoices/{id}',
    httpMethod: 'delete',
    summary: 'Delete invoice',
    description: 'Delete a draft invoice.\n\nRequired permissions:\n - `invoice:update`',
    stainlessPath: '(resource) invoices > (method) delete',
    qualified: 'client.invoices.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.invoices.delete(id: string): boolean`\n\n**delete** `/invoices/{id}`\n\nDelete a draft invoice.\n\nRequired permissions:\n - `invoice:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst invoice = await client.invoices.delete('inv_xxxxxxxxxxxxxx');\n\nconsole.log(invoice);\n```",
    perLanguage: {
      typescript: {
        method: 'client.invoices.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst invoice = await client.invoices.delete('inv_xxxxxxxxxxxxxx');\n\nconsole.log(invoice);",
      },
      python: {
        method: 'invoices.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ninvoice = client.invoices.delete(\n    "inv_xxxxxxxxxxxxxx",\n)\nprint(invoice)',
      },
      ruby: {
        method: 'invoices.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ninvoice = whop.invoices.delete("inv_xxxxxxxxxxxxxx")\n\nputs(invoice)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/invoices/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/course_lesson_interactions',
    httpMethod: 'get',
    summary: 'List course lesson interactions',
    description:
      'Returns a paginated list of lesson interactions, filtered by lesson, course, user, or completion status.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`',
    stainlessPath: '(resource) course_lesson_interactions > (method) list',
    qualified: 'client.courseLessonInteractions.list',
    params: [
      'after?: string;',
      'before?: string;',
      'completed?: boolean;',
      'course_id?: string;',
      'first?: number;',
      'last?: number;',
      'lesson_id?: string;',
      'user_id?: string;',
    ],
    response:
      '{ id: string; completed: boolean; created_at: string; lesson: { id: string; chapter: { id: string; }; title: string; }; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## list\n\n`client.courseLessonInteractions.list(after?: string, before?: string, completed?: boolean, course_id?: string, first?: number, last?: number, lesson_id?: string, user_id?: string): { id: string; completed: boolean; created_at: string; lesson: object; user: object; }`\n\n**get** `/course_lesson_interactions`\n\nReturns a paginated list of lesson interactions, filtered by lesson, course, user, or completion status.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `completed?: boolean`\n  Whether to filter for completed or in-progress lesson interactions.\n\n- `course_id?: string`\n  The unique identifier of the course to filter interactions for.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `lesson_id?: string`\n  The unique identifier of the lesson to filter interactions for.\n\n- `user_id?: string`\n  The unique identifier of the user to filter lesson interactions for.\n\n### Returns\n\n- `{ id: string; completed: boolean; created_at: string; lesson: { id: string; chapter: { id: string; }; title: string; }; user: { id: string; name: string; username: string; }; }`\n  A record of a user's progress on a specific lesson, tracking whether they have completed it.\n\n  - `id: string`\n  - `completed: boolean`\n  - `created_at: string`\n  - `lesson: { id: string; chapter: { id: string; }; title: string; }`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const courseLessonInteractionListItem of client.courseLessonInteractions.list()) {\n  console.log(courseLessonInteractionListItem);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessonInteractions.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const courseLessonInteractionListItem of client.courseLessonInteractions.list()) {\n  console.log(courseLessonInteractionListItem.id);\n}",
      },
      python: {
        method: 'course_lesson_interactions.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.course_lesson_interactions.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'course_lesson_interactions.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.course_lesson_interactions.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lesson_interactions \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/course_lesson_interactions/{id}',
    httpMethod: 'get',
    summary: 'Retrieve course lesson interaction',
    description:
      'Retrieves the details of an existing course lesson interaction.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`',
    stainlessPath: '(resource) course_lesson_interactions > (method) retrieve',
    qualified: 'client.courseLessonInteractions.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; completed: boolean; course: { id: string; experience: { id: string; }; title: string; }; created_at: string; lesson: { id: string; chapter: { id: string; }; title: string; }; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## retrieve\n\n`client.courseLessonInteractions.retrieve(id: string): { id: string; completed: boolean; course: object; created_at: string; lesson: object; user: object; }`\n\n**get** `/course_lesson_interactions/{id}`\n\nRetrieves the details of an existing course lesson interaction.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; completed: boolean; course: { id: string; experience: { id: string; }; title: string; }; created_at: string; lesson: { id: string; chapter: { id: string; }; title: string; }; user: { id: string; name: string; username: string; }; }`\n  A record of a user's progress on a specific lesson, tracking whether they have completed it.\n\n  - `id: string`\n  - `completed: boolean`\n  - `course: { id: string; experience: { id: string; }; title: string; }`\n  - `created_at: string`\n  - `lesson: { id: string; chapter: { id: string; }; title: string; }`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst courseLessonInteraction = await client.courseLessonInteractions.retrieve('crsli_xxxxxxxxxxxx');\n\nconsole.log(courseLessonInteraction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessonInteractions.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseLessonInteraction = await client.courseLessonInteractions.retrieve(\n  'crsli_xxxxxxxxxxxx',\n);\n\nconsole.log(courseLessonInteraction.id);",
      },
      python: {
        method: 'course_lesson_interactions.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_lesson_interaction = client.course_lesson_interactions.retrieve(\n    "crsli_xxxxxxxxxxxx",\n)\nprint(course_lesson_interaction.id)',
      },
      ruby: {
        method: 'course_lesson_interactions.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_lesson_interaction = whop.course_lesson_interactions.retrieve("crsli_xxxxxxxxxxxx")\n\nputs(course_lesson_interaction)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lesson_interactions/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/products',
    httpMethod: 'get',
    summary: 'List products',
    description:
      'Returns a paginated list of products belonging to a company, with optional filtering by type, visibility, and creation date.\n\nRequired permissions:\n - `access_pass:basic:read`',
    stainlessPath: '(resource) products > (method) list',
    qualified: 'client.products.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'active_memberships_count' | 'created_at' | 'usd_gmv' | 'usd_gmv_30_days';",
      "product_types?: 'regular' | 'app' | 'experience_upsell' | 'api_only'[];",
      "visibilities?: 'visible' | 'hidden' | 'archived' | 'quick_link' | 'all' | 'not_quick_link' | 'not_archived'[];",
    ],
    response:
      "{ id: string; created_at: string; external_identifier: string; headline: string; member_count: number; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## list\n\n`client.products.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'active_memberships_count' | 'created_at' | 'usd_gmv' | 'usd_gmv_30_days', product_types?: 'regular' | 'app' | 'experience_upsell' | 'api_only'[], visibilities?: 'visible' | 'hidden' | 'archived' | 'quick_link' | 'all' | 'not_quick_link' | 'not_archived'[]): { id: string; created_at: string; external_identifier: string; headline: string; member_count: number; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: visibility; }`\n\n**get** `/products`\n\nReturns a paginated list of products belonging to a company, with optional filtering by type, visibility, and creation date.\n\nRequired permissions:\n - `access_pass:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list products for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return products created after this timestamp.\n\n- `created_before?: string`\n  Only return products created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'active_memberships_count' | 'created_at' | 'usd_gmv' | 'usd_gmv_30_days'`\n  The ways a relation of AccessPasses can be ordered\n\n- `product_types?: 'regular' | 'app' | 'experience_upsell' | 'api_only'[]`\n  Filter to only products matching these type classifications.\n\n- `visibilities?: 'visible' | 'hidden' | 'archived' | 'quick_link' | 'all' | 'not_quick_link' | 'not_archived'[]`\n  Filter to only products matching these visibility states.\n\n### Returns\n\n- `{ id: string; created_at: string; external_identifier: string; headline: string; member_count: number; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A product is a digital good or service sold on Whop. Products contain plans for pricing and experiences for content delivery.\n\n  - `id: string`\n  - `created_at: string`\n  - `external_identifier: string`\n  - `headline: string`\n  - `member_count: number`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const productListItem of client.products.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(productListItem);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.products.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const productListItem of client.products.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(productListItem.id);\n}",
      },
      python: {
        method: 'products.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.products.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'products.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.products.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/products \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/products/{id}',
    httpMethod: 'get',
    summary: 'Retrieve product',
    description:
      'Retrieves the details of an existing product.\n\nRequired permissions:\n - `access_pass:basic:read`',
    stainlessPath: '(resource) products > (method) retrieve',
    qualified: 'client.products.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; company: { id: string; route: string; title: string; }; created_at: string; custom_cta: string; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: { id: string; url: string; }[]; global_affiliate_percentage: number; global_affiliate_status: 'enabled' | 'disabled'; headline: string; member_affiliate_percentage: number; member_affiliate_status: 'enabled' | 'disabled'; member_count: number; owner_user: { id: string; name: string; username: string; }; product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## retrieve\n\n`client.products.retrieve(id: string): { id: string; company: object; created_at: string; custom_cta: custom_cta; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: object[]; global_affiliate_percentage: number; global_affiliate_status: global_affiliate_status; headline: string; member_affiliate_percentage: number; member_affiliate_status: global_affiliate_status; member_count: number; owner_user: object; product_tax_code: object; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: visibility; }`\n\n**get** `/products/{id}`\n\nRetrieves the details of an existing product.\n\nRequired permissions:\n - `access_pass:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; company: { id: string; route: string; title: string; }; created_at: string; custom_cta: string; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: { id: string; url: string; }[]; global_affiliate_percentage: number; global_affiliate_status: 'enabled' | 'disabled'; headline: string; member_affiliate_percentage: number; member_affiliate_status: 'enabled' | 'disabled'; member_count: number; owner_user: { id: string; name: string; username: string; }; product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A product is a digital good or service sold on Whop. Products contain plans for pricing and experiences for content delivery.\n\n  - `id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `custom_cta: string`\n  - `custom_cta_url: string`\n  - `custom_statement_descriptor: string`\n  - `description: string`\n  - `external_identifier: string`\n  - `gallery_images: { id: string; url: string; }[]`\n  - `global_affiliate_percentage: number`\n  - `global_affiliate_status: 'enabled' | 'disabled'`\n  - `headline: string`\n  - `member_affiliate_percentage: number`\n  - `member_affiliate_status: 'enabled' | 'disabled'`\n  - `member_count: number`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst product = await client.products.retrieve('prod_xxxxxxxxxxxxx');\n\nconsole.log(product);\n```",
    perLanguage: {
      typescript: {
        method: 'client.products.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.products.retrieve('prod_xxxxxxxxxxxxx');\n\nconsole.log(product.id);",
      },
      python: {
        method: 'products.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.products.retrieve(\n    "prod_xxxxxxxxxxxxx",\n)\nprint(product.id)',
      },
      ruby: {
        method: 'products.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nproduct = whop.products.retrieve("prod_xxxxxxxxxxxxx")\n\nputs(product)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/products/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/products',
    httpMethod: 'post',
    summary: 'Create product',
    description:
      'Create a new product for a company. The product serves as the top-level container for plans and experiences.\n\nRequired permissions:\n - `access_pass:create`\n - `access_pass:basic:read`',
    stainlessPath: '(resource) products > (method) create',
    qualified: 'client.products.create',
    params: [
      'company_id: string;',
      'title: string;',
      'collect_shipping_address?: boolean;',
      'custom_cta?: string;',
      'custom_cta_url?: string;',
      'custom_statement_descriptor?: string;',
      'description?: string;',
      'experience_ids?: string[];',
      'global_affiliate_percentage?: number;',
      "global_affiliate_status?: 'enabled' | 'disabled';",
      'headline?: string;',
      'member_affiliate_percentage?: number;',
      "member_affiliate_status?: 'enabled' | 'disabled';",
      "plan_options?: { base_currency?: string; billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; initial_price?: number; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; };",
      'product_tax_code_id?: string;',
      'redirect_purchase_url?: string;',
      'route?: string;',
      'send_welcome_message?: boolean;',
      "visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link';",
    ],
    response:
      "{ id: string; company: { id: string; route: string; title: string; }; created_at: string; custom_cta: string; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: { id: string; url: string; }[]; global_affiliate_percentage: number; global_affiliate_status: 'enabled' | 'disabled'; headline: string; member_affiliate_percentage: number; member_affiliate_status: 'enabled' | 'disabled'; member_count: number; owner_user: { id: string; name: string; username: string; }; product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## create\n\n`client.products.create(company_id: string, title: string, collect_shipping_address?: boolean, custom_cta?: string, custom_cta_url?: string, custom_statement_descriptor?: string, description?: string, experience_ids?: string[], global_affiliate_percentage?: number, global_affiliate_status?: 'enabled' | 'disabled', headline?: string, member_affiliate_percentage?: number, member_affiliate_status?: 'enabled' | 'disabled', plan_options?: { base_currency?: string; billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; initial_price?: number; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }, product_tax_code_id?: string, redirect_purchase_url?: string, route?: string, send_welcome_message?: boolean, visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'): { id: string; company: object; created_at: string; custom_cta: custom_cta; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: object[]; global_affiliate_percentage: number; global_affiliate_status: global_affiliate_status; headline: string; member_affiliate_percentage: number; member_affiliate_status: global_affiliate_status; member_count: number; owner_user: object; product_tax_code: object; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: visibility; }`\n\n**post** `/products`\n\nCreate a new product for a company. The product serves as the top-level container for plans and experiences.\n\nRequired permissions:\n - `access_pass:create`\n - `access_pass:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create this product for.\n\n- `title: string`\n  The display name of the product. Maximum 80 characters.\n\n- `collect_shipping_address?: boolean`\n  Whether the checkout flow collects a shipping address from the customer.\n\n- `custom_cta?: string`\n  The different types of custom CTAs that can be selected.\n\n- `custom_cta_url?: string`\n  A URL that the call-to-action button links to instead of the default checkout flow.\n\n- `custom_statement_descriptor?: string`\n  A custom text label that appears on the customer's bank statement. Must be 5-22 characters, contain at least one letter, and not contain <, >, \\, ', or \" characters.\n\n- `description?: string`\n  A written description of the product displayed on its product page.\n\n- `experience_ids?: string[]`\n  The unique identifiers of experiences to connect to this product.\n\n- `global_affiliate_percentage?: number`\n  The commission rate as a percentage that affiliates earn through the global affiliate program.\n\n- `global_affiliate_status?: 'enabled' | 'disabled'`\n  The different statuses of the global affiliate program for a product.\n\n- `headline?: string`\n  A short marketing headline displayed prominently on the product page.\n\n- `member_affiliate_percentage?: number`\n  The commission rate as a percentage that members earn through the member affiliate program.\n\n- `member_affiliate_status?: 'enabled' | 'disabled'`\n  The different statuses of the global affiliate program for a product.\n\n- `plan_options?: { base_currency?: string; billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; initial_price?: number; plan_type?: 'renewal' | 'one_time'; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  Configuration for an automatically generated plan to attach to this product.\n  - `base_currency?: string`\n    The available currencies on the platform\n  - `billing_period?: number`\n    The interval at which the plan charges (renewal plans).\n  - `custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]`\n    An array of custom field objects.\n  - `initial_price?: number`\n    An additional amount charged upon first purchase. Provided as a number in the specified currency. Eg: 10.43 for $10.43 USD.\n  - `plan_type?: 'renewal' | 'one_time'`\n    The type of plan that can be attached to a product\n  - `release_method?: 'buy_now' | 'waitlist'`\n    The methods of how a plan can be released.\n  - `renewal_price?: number`\n    The amount the customer is charged every billing period. Provided as a number in the specified currency. Eg: 10.43 for $10.43 USD.\n  - `visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n    Visibility of a resource\n\n- `product_tax_code_id?: string`\n  The unique identifier of the tax classification code to apply to this product.\n\n- `redirect_purchase_url?: string`\n  A URL to redirect the customer to after completing a purchase.\n\n- `route?: string`\n  The URL slug for the product's public link.\n\n- `send_welcome_message?: boolean`\n  Whether to send an automated welcome message via support chat when a user joins this product. Defaults to true.\n\n- `visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n  Visibility of a resource\n\n### Returns\n\n- `{ id: string; company: { id: string; route: string; title: string; }; created_at: string; custom_cta: string; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: { id: string; url: string; }[]; global_affiliate_percentage: number; global_affiliate_status: 'enabled' | 'disabled'; headline: string; member_affiliate_percentage: number; member_affiliate_status: 'enabled' | 'disabled'; member_count: number; owner_user: { id: string; name: string; username: string; }; product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A product is a digital good or service sold on Whop. Products contain plans for pricing and experiences for content delivery.\n\n  - `id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `custom_cta: string`\n  - `custom_cta_url: string`\n  - `custom_statement_descriptor: string`\n  - `description: string`\n  - `external_identifier: string`\n  - `gallery_images: { id: string; url: string; }[]`\n  - `global_affiliate_percentage: number`\n  - `global_affiliate_status: 'enabled' | 'disabled'`\n  - `headline: string`\n  - `member_affiliate_percentage: number`\n  - `member_affiliate_status: 'enabled' | 'disabled'`\n  - `member_count: number`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst product = await client.products.create({ company_id: 'biz_xxxxxxxxxxxxxx', title: 'title' });\n\nconsole.log(product);\n```",
    perLanguage: {
      typescript: {
        method: 'client.products.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.products.create({ company_id: 'biz_xxxxxxxxxxxxxx', title: 'title' });\n\nconsole.log(product.id);",
      },
      python: {
        method: 'products.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.products.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    title="title",\n)\nprint(product.id)',
      },
      ruby: {
        method: 'products.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nproduct = whop.products.create(company_id: "biz_xxxxxxxxxxxxxx", title: "title")\n\nputs(product)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/products \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "title": "title",\n          "global_affiliate_percentage": 6.9,\n          "member_affiliate_percentage": 6.9,\n          "product_tax_code_id": "ptc_xxxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/products/{id}',
    httpMethod: 'patch',
    summary: 'Update product',
    description:
      "Update a product's title, description, visibility, and other settings.\n\nRequired permissions:\n - `access_pass:update`\n - `access_pass:basic:read`",
    stainlessPath: '(resource) products > (method) update',
    qualified: 'client.products.update',
    params: [
      'id: string;',
      'collect_shipping_address?: boolean;',
      'custom_cta?: string;',
      'custom_cta_url?: string;',
      'custom_statement_descriptor?: string;',
      'description?: string;',
      'gallery_images?: { id: string; }[];',
      'global_affiliate_percentage?: number;',
      "global_affiliate_status?: 'enabled' | 'disabled';",
      'headline?: string;',
      'member_affiliate_percentage?: number;',
      "member_affiliate_status?: 'enabled' | 'disabled';",
      'product_tax_code_id?: string;',
      'redirect_purchase_url?: string;',
      'route?: string;',
      'send_welcome_message?: boolean;',
      'store_page_config?: { custom_cta?: string; show_price?: boolean; };',
      'title?: string;',
      "visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link';",
    ],
    response:
      "{ id: string; company: { id: string; route: string; title: string; }; created_at: string; custom_cta: string; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: { id: string; url: string; }[]; global_affiliate_percentage: number; global_affiliate_status: 'enabled' | 'disabled'; headline: string; member_affiliate_percentage: number; member_affiliate_status: 'enabled' | 'disabled'; member_count: number; owner_user: { id: string; name: string; username: string; }; product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## update\n\n`client.products.update(id: string, collect_shipping_address?: boolean, custom_cta?: string, custom_cta_url?: string, custom_statement_descriptor?: string, description?: string, gallery_images?: { id: string; }[], global_affiliate_percentage?: number, global_affiliate_status?: 'enabled' | 'disabled', headline?: string, member_affiliate_percentage?: number, member_affiliate_status?: 'enabled' | 'disabled', product_tax_code_id?: string, redirect_purchase_url?: string, route?: string, send_welcome_message?: boolean, store_page_config?: { custom_cta?: string; show_price?: boolean; }, title?: string, visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'): { id: string; company: object; created_at: string; custom_cta: custom_cta; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: object[]; global_affiliate_percentage: number; global_affiliate_status: global_affiliate_status; headline: string; member_affiliate_percentage: number; member_affiliate_status: global_affiliate_status; member_count: number; owner_user: object; product_tax_code: object; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: visibility; }`\n\n**patch** `/products/{id}`\n\nUpdate a product's title, description, visibility, and other settings.\n\nRequired permissions:\n - `access_pass:update`\n - `access_pass:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `collect_shipping_address?: boolean`\n  Whether the checkout flow collects a shipping address from the customer.\n\n- `custom_cta?: string`\n  The different types of custom CTAs that can be selected.\n\n- `custom_cta_url?: string`\n  A URL that the call-to-action button links to instead of the default checkout flow.\n\n- `custom_statement_descriptor?: string`\n  A custom text label that appears on the customer's bank statement. Must be 5-22 characters, contain at least one letter, and not contain <, >, \\, ', or \" characters.\n\n- `description?: string`\n  A written description of the product displayed on its product page.\n\n- `gallery_images?: { id: string; }[]`\n  The gallery images for the product.\n\n- `global_affiliate_percentage?: number`\n  The commission rate as a percentage that affiliates earn through the global affiliate program.\n\n- `global_affiliate_status?: 'enabled' | 'disabled'`\n  The different statuses of the global affiliate program for a product.\n\n- `headline?: string`\n  A short marketing headline displayed prominently on the product page.\n\n- `member_affiliate_percentage?: number`\n  The commission rate as a percentage that members earn through the member affiliate program.\n\n- `member_affiliate_status?: 'enabled' | 'disabled'`\n  The different statuses of the global affiliate program for a product.\n\n- `product_tax_code_id?: string`\n  The unique identifier of the tax classification code to apply to this product.\n\n- `redirect_purchase_url?: string`\n  A URL to redirect the customer to after completing a purchase.\n\n- `route?: string`\n  The URL slug for the product's public link.\n\n- `send_welcome_message?: boolean`\n  Whether to send an automated welcome message via support chat when a user joins this product.\n\n- `store_page_config?: { custom_cta?: string; show_price?: boolean; }`\n  Layout and display configuration for this product on the company's store page.\n  - `custom_cta?: string`\n    Custom call-to-action text for the product's store page.\n  - `show_price?: boolean`\n    Whether or not to show the price on the product's store page.\n\n- `title?: string`\n  The display name of the product. Maximum 80 characters.\n\n- `visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n  Visibility of a resource\n\n### Returns\n\n- `{ id: string; company: { id: string; route: string; title: string; }; created_at: string; custom_cta: string; custom_cta_url: string; custom_statement_descriptor: string; description: string; external_identifier: string; gallery_images: { id: string; url: string; }[]; global_affiliate_percentage: number; global_affiliate_status: 'enabled' | 'disabled'; headline: string; member_affiliate_percentage: number; member_affiliate_status: 'enabled' | 'disabled'; member_count: number; owner_user: { id: string; name: string; username: string; }; product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }; published_reviews_count: number; route: string; title: string; updated_at: string; verified: boolean; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A product is a digital good or service sold on Whop. Products contain plans for pricing and experiences for content delivery.\n\n  - `id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `custom_cta: string`\n  - `custom_cta_url: string`\n  - `custom_statement_descriptor: string`\n  - `description: string`\n  - `external_identifier: string`\n  - `gallery_images: { id: string; url: string; }[]`\n  - `global_affiliate_percentage: number`\n  - `global_affiliate_status: 'enabled' | 'disabled'`\n  - `headline: string`\n  - `member_affiliate_percentage: number`\n  - `member_affiliate_status: 'enabled' | 'disabled'`\n  - `member_count: number`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `product_tax_code: { id: string; name: string; product_type: 'physical' | 'digital' | 'services'; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst product = await client.products.update('prod_xxxxxxxxxxxxx');\n\nconsole.log(product);\n```",
    perLanguage: {
      typescript: {
        method: 'client.products.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.products.update('prod_xxxxxxxxxxxxx');\n\nconsole.log(product.id);",
      },
      python: {
        method: 'products.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.products.update(\n    id="prod_xxxxxxxxxxxxx",\n)\nprint(product.id)',
      },
      ruby: {
        method: 'products.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nproduct = whop.products.update("prod_xxxxxxxxxxxxx")\n\nputs(product)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/products/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/products/{id}',
    httpMethod: 'delete',
    summary: 'Delete product',
    description:
      "Permanently delete a product and remove it from the company's catalog.\n\nRequired permissions:\n - `access_pass:delete`",
    stainlessPath: '(resource) products > (method) delete',
    qualified: 'client.products.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.products.delete(id: string): boolean`\n\n**delete** `/products/{id}`\n\nPermanently delete a product and remove it from the company's catalog.\n\nRequired permissions:\n - `access_pass:delete`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst product = await client.products.delete('prod_xxxxxxxxxxxxx');\n\nconsole.log(product);\n```",
    perLanguage: {
      typescript: {
        method: 'client.products.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst product = await client.products.delete('prod_xxxxxxxxxxxxx');\n\nconsole.log(product);",
      },
      python: {
        method: 'products.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nproduct = client.products.delete(\n    "prod_xxxxxxxxxxxxx",\n)\nprint(product)',
      },
      ruby: {
        method: 'products.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nproduct = whop.products.delete("prod_xxxxxxxxxxxxx")\n\nputs(product)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/products/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/companies/{id}',
    httpMethod: 'get',
    summary: 'Retrieve company',
    description:
      'Retrieves the details of an existing company.\n\nRequired permissions:\n - `company:basic:read`',
    stainlessPath: '(resource) companies > (method) retrieve',
    qualified: 'client.companies.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: { id: string; name: string; }; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]; target_audience: string; title: string; updated_at: string; verified: boolean; }",
    markdown:
      "## retrieve\n\n`client.companies.retrieve(id: string): { id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: object; logo: object; member_count: number; metadata: object; owner_user: object; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: object[]; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n\n**get** `/companies/{id}`\n\nRetrieves the details of an existing company.\n\nRequired permissions:\n - `company:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: { id: string; name: string; }; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n  A company is a seller on Whop. Companies own products, manage members, and receive payouts.\n\n  - `id: string`\n  - `affiliate_instructions: string`\n  - `created_at: string`\n  - `description: string`\n  - `featured_affiliate_product: { id: string; name: string; }`\n  - `logo: { url: string; }`\n  - `member_count: number`\n  - `metadata: object`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `send_customer_emails: boolean`\n  - `social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]`\n  - `target_audience: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst company = await client.companies.retrieve('biz_xxxxxxxxxxxxxx');\n\nconsole.log(company);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst company = await client.companies.retrieve('biz_xxxxxxxxxxxxxx');\n\nconsole.log(company.id);",
      },
      python: {
        method: 'companies.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncompany = client.companies.retrieve(\n    "biz_xxxxxxxxxxxxxx",\n)\nprint(company.id)',
      },
      ruby: {
        method: 'companies.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncompany = whop.companies.retrieve("biz_xxxxxxxxxxxxxx")\n\nputs(company)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/companies/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/companies',
    httpMethod: 'get',
    summary: 'List companies',
    description:
      'Returns a paginated list of companies. When parent_company_id is provided, lists connected accounts under that platform. When omitted, lists companies the current user has access to.\n\nRequired permissions:\n - `company:basic:read`',
    stainlessPath: '(resource) companies > (method) list',
    qualified: 'client.companies.list',
    params: [
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'parent_company_id?: string;',
    ],
    response:
      '{ id: string; created_at: string; description: string; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; target_audience: string; title: string; updated_at: string; verified: boolean; }',
    markdown:
      "## list\n\n`client.companies.list(after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, parent_company_id?: string): { id: string; created_at: string; description: string; logo: object; member_count: number; metadata: object; owner_user: object; published_reviews_count: number; route: string; send_customer_emails: boolean; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n\n**get** `/companies`\n\nReturns a paginated list of companies. When parent_company_id is provided, lists connected accounts under that platform. When omitted, lists companies the current user has access to.\n\nRequired permissions:\n - `company:basic:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return companies created after this timestamp.\n\n- `created_before?: string`\n  Only return companies created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `parent_company_id?: string`\n  The unique identifier of the parent platform company. When provided, lists connected accounts under that platform. Omit to list the current user's own companies.\n\n### Returns\n\n- `{ id: string; created_at: string; description: string; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n  A company is a seller on Whop. Companies own products, manage members, and receive payouts.\n\n  - `id: string`\n  - `created_at: string`\n  - `description: string`\n  - `logo: { url: string; }`\n  - `member_count: number`\n  - `metadata: object`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `send_customer_emails: boolean`\n  - `target_audience: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const companyListResponse of client.companies.list()) {\n  console.log(companyListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyListResponse of client.companies.list()) {\n  console.log(companyListResponse.id);\n}",
      },
      python: {
        method: 'companies.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.companies.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'companies.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.companies.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/companies \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/companies',
    httpMethod: 'post',
    summary: 'Create company',
    description:
      'Create a new company. Pass parent_company_id to create a connected account under a platform, or omit it to create a company for the current user.\n\nRequired permissions:\n - `company:create`\n - `company:basic:read`',
    stainlessPath: '(resource) companies > (method) create',
    qualified: 'client.companies.create',
    params: [
      'title: string;',
      'description?: string;',
      'email?: string;',
      'logo?: { id: string; };',
      'metadata?: object;',
      'parent_company_id?: string;',
      'send_customer_emails?: boolean;',
    ],
    response:
      "{ id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: { id: string; name: string; }; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]; target_audience: string; title: string; updated_at: string; verified: boolean; }",
    markdown:
      "## create\n\n`client.companies.create(title: string, description?: string, email?: string, logo?: { id: string; }, metadata?: object, parent_company_id?: string, send_customer_emails?: boolean): { id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: object; logo: object; member_count: number; metadata: object; owner_user: object; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: object[]; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n\n**post** `/companies`\n\nCreate a new company. Pass parent_company_id to create a connected account under a platform, or omit it to create a company for the current user.\n\nRequired permissions:\n - `company:create`\n - `company:basic:read`\n\n### Parameters\n\n- `title: string`\n  The display name of the company shown to customers.\n\n- `description?: string`\n  A promotional pitch displayed to potential customers on the company's store page.\n\n- `email?: string`\n  The email address of the user who will own the connected account. Required when parent_company_id is provided.\n\n- `logo?: { id: string; }`\n  The company's logo image. Accepts PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `metadata?: object`\n  A key-value JSON object of custom metadata to store on the company.\n\n- `parent_company_id?: string`\n  The unique identifier of the parent platform company. When provided, creates a connected account under that platform. Omit to create a company for the current user.\n\n- `send_customer_emails?: boolean`\n  Whether Whop sends transactional emails to customers on behalf of this company. Only applies when creating a connected account.\n\n### Returns\n\n- `{ id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: { id: string; name: string; }; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n  A company is a seller on Whop. Companies own products, manage members, and receive payouts.\n\n  - `id: string`\n  - `affiliate_instructions: string`\n  - `created_at: string`\n  - `description: string`\n  - `featured_affiliate_product: { id: string; name: string; }`\n  - `logo: { url: string; }`\n  - `member_count: number`\n  - `metadata: object`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `send_customer_emails: boolean`\n  - `social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]`\n  - `target_audience: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst company = await client.companies.create({ title: 'title' });\n\nconsole.log(company);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst company = await client.companies.create({ title: 'title' });\n\nconsole.log(company.id);",
      },
      python: {
        method: 'companies.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncompany = client.companies.create(\n    title="title",\n)\nprint(company.id)',
      },
      ruby: {
        method: 'companies.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncompany = whop.companies.create(title: "title")\n\nputs(company)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/companies \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "title": "title"\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/companies/{id}',
    httpMethod: 'patch',
    summary: 'Update company',
    description:
      "Update a company's title, description, logo, and other settings.\n\nRequired permissions:\n - `company:update`\n - `company:basic:read`",
    stainlessPath: '(resource) companies > (method) update',
    qualified: 'client.companies.update',
    params: [
      'id: string;',
      'affiliate_application_required?: boolean;',
      'affiliate_instructions?: string;',
      'banner_image?: { id: string; };',
      'description?: string;',
      'featured_affiliate_product_id?: string;',
      'logo?: { id: string; };',
      'route?: string;',
      'send_customer_emails?: boolean;',
      "social_links?: { url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; image?: { id: string; }; order?: string; title?: string; website_order?: string; }[];",
      'target_audience?: string;',
      'title?: string;',
    ],
    response:
      "{ id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: { id: string; name: string; }; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]; target_audience: string; title: string; updated_at: string; verified: boolean; }",
    markdown:
      "## update\n\n`client.companies.update(id: string, affiliate_application_required?: boolean, affiliate_instructions?: string, banner_image?: { id: string; }, description?: string, featured_affiliate_product_id?: string, logo?: { id: string; }, route?: string, send_customer_emails?: boolean, social_links?: { url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; image?: { id: string; }; order?: string; title?: string; website_order?: string; }[], target_audience?: string, title?: string): { id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: object; logo: object; member_count: number; metadata: object; owner_user: object; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: object[]; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n\n**patch** `/companies/{id}`\n\nUpdate a company's title, description, logo, and other settings.\n\nRequired permissions:\n - `company:update`\n - `company:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `affiliate_application_required?: boolean`\n  Whether prospective affiliates must submit an application before they can promote this company.\n\n- `affiliate_instructions?: string`\n  Guidelines and instructions shown to affiliates explaining how to promote this company's products.\n\n- `banner_image?: { id: string; }`\n  The company's banner image. Accepts PNG or JPEG format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `description?: string`\n  A promotional pitch displayed to potential customers on the company's store page.\n\n- `featured_affiliate_product_id?: string`\n  The ID of the product to feature on this company's affiliate page. Pass null to clear.\n\n- `logo?: { id: string; }`\n  The company's logo image. Accepts PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `route?: string`\n  The unique URL slug for the company's store page. Must be lowercase and can include hyphens (e.g., 'my-company'). If not provided, the route will remain unchanged.\n\n- `send_customer_emails?: boolean`\n  Whether Whop sends transactional emails (receipts, renewals, cancelations) to customers on behalf of this company.\n\n- `social_links?: { url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; image?: { id: string; }; order?: string; title?: string; website_order?: string; }[]`\n  The social media links to display on the company's store page. Pass the full list of desired social links — any existing links not included will be removed.\n\n- `target_audience?: string`\n  The target audience for this company (e.g., 'beginner day traders aged 18-25 looking to learn options').\n\n- `title?: string`\n  The display name of the company shown to customers.\n\n### Returns\n\n- `{ id: string; affiliate_instructions: string; created_at: string; description: string; featured_affiliate_product: { id: string; name: string; }; logo: { url: string; }; member_count: number; metadata: object; owner_user: { id: string; name: string; username: string; }; published_reviews_count: number; route: string; send_customer_emails: boolean; social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]; target_audience: string; title: string; updated_at: string; verified: boolean; }`\n  A company is a seller on Whop. Companies own products, manage members, and receive payouts.\n\n  - `id: string`\n  - `affiliate_instructions: string`\n  - `created_at: string`\n  - `description: string`\n  - `featured_affiliate_product: { id: string; name: string; }`\n  - `logo: { url: string; }`\n  - `member_count: number`\n  - `metadata: object`\n  - `owner_user: { id: string; name: string; username: string; }`\n  - `published_reviews_count: number`\n  - `route: string`\n  - `send_customer_emails: boolean`\n  - `social_links: { id: string; url: string; website: 'x' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin' | 'twitch' | 'website' | 'custom'; }[]`\n  - `target_audience: string`\n  - `title: string`\n  - `updated_at: string`\n  - `verified: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst company = await client.companies.update('biz_xxxxxxxxxxxxxx');\n\nconsole.log(company);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst company = await client.companies.update('biz_xxxxxxxxxxxxxx');\n\nconsole.log(company.id);",
      },
      python: {
        method: 'companies.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncompany = client.companies.update(\n    id="biz_xxxxxxxxxxxxxx",\n)\nprint(company.id)',
      },
      ruby: {
        method: 'companies.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncompany = whop.companies.update("biz_xxxxxxxxxxxxxx")\n\nputs(company)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/companies/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'unwrap',
    endpoint: '',
    httpMethod: '',
    summary: '',
    description: '',
    stainlessPath: '(resource) webhooks > (method) unwrap',
    qualified: 'client.webhooks.unwrap',
    perLanguage: {
      typescript: {
        method: 'client.webhooks.unwrap',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.webhooks.unwrap();",
      },
      python: {
        method: 'webhooks.unwrap',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nclient.webhooks.unwrap()',
      },
      ruby: {
        method: 'webhooks.unwrap',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresult = whop.webhooks.unwrap\n\nputs(result)',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/webhooks',
    httpMethod: 'get',
    summary: 'List webhooks',
    description:
      'Returns a paginated list of webhook endpoints configured for a company, ordered by most recently created.\n\nRequired permissions:\n - `developer:manage_webhook`',
    stainlessPath: '(resource) webhooks > (method) list',
    qualified: 'client.webhooks.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; url: string; }",
    markdown:
      "## list\n\n`client.webhooks.list(company_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; api_version: api_version; child_resource_events: boolean; created_at: string; enabled: boolean; events: webhook_event[]; url: string; }`\n\n**get** `/webhooks`\n\nReturns a paginated list of webhook endpoints configured for a company, ordered by most recently created.\n\nRequired permissions:\n - `developer:manage_webhook`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list webhooks for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; url: string; }`\n  A webhook endpoint that receives event notifications for a company via HTTP POST.\n\n  - `id: string`\n  - `api_version: 'v1' | 'v2' | 'v5'`\n  - `child_resource_events: boolean`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const webhookListResponse of client.webhooks.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(webhookListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const webhookListResponse of client.webhooks.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(webhookListResponse.id);\n}",
      },
      python: {
        method: 'webhooks.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.webhooks.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'webhooks.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.webhooks.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/webhooks \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/webhooks',
    httpMethod: 'post',
    summary: 'Create webhook',
    description: 'Creates a new webhook\n\nRequired permissions:\n - `developer:manage_webhook`',
    stainlessPath: '(resource) webhooks > (method) create',
    qualified: 'client.webhooks.create',
    params: [
      'url: string;',
      "api_version?: 'v1' | 'v2' | 'v5';",
      'child_resource_events?: boolean;',
      'enabled?: boolean;',
      'events?: string[];',
      'resource_id?: string;',
    ],
    response:
      "{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; resource_id: string; testable_events: string[]; url: string; webhook_secret: string; }",
    markdown:
      "## create\n\n`client.webhooks.create(url: string, api_version?: 'v1' | 'v2' | 'v5', child_resource_events?: boolean, enabled?: boolean, events?: string[], resource_id?: string): { id: string; api_version: api_version; child_resource_events: boolean; created_at: string; enabled: boolean; events: webhook_event[]; resource_id: string; testable_events: webhook_event[]; url: string; webhook_secret: string; }`\n\n**post** `/webhooks`\n\nCreates a new webhook\n\nRequired permissions:\n - `developer:manage_webhook`\n\n### Parameters\n\n- `url: string`\n  The URL to send the webhook to.\n\n- `api_version?: 'v1' | 'v2' | 'v5'`\n  The different API versions\n\n- `child_resource_events?: boolean`\n  Whether or not to send events for child resources. For example, if the webhook is created for a Company, enabling this will only send events from the Company's sub-merchants (child companies).\n\n- `enabled?: boolean`\n  Whether or not the webhook is enabled.\n\n- `events?: string[]`\n  The events to send the webhook for.\n\n- `resource_id?: string`\n  The resource to create the webhook for. By default this will use current company\n\n### Returns\n\n- `{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; resource_id: string; testable_events: string[]; url: string; webhook_secret: string; }`\n  A webhook endpoint that receives event notifications for a company via HTTP POST.\n\n  - `id: string`\n  - `api_version: 'v1' | 'v2' | 'v5'`\n  - `child_resource_events: boolean`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `resource_id: string`\n  - `testable_events: string[]`\n  - `url: string`\n  - `webhook_secret: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/path' });\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/path' });\n\nconsole.log(webhook.id);",
      },
      python: {
        method: 'webhooks.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.create(\n    url="https://example.com/path",\n)\nprint(webhook.id)',
      },
      ruby: {
        method: 'webhooks.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nwebhook = whop.webhooks.create(url: "https://example.com/path")\n\nputs(webhook)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/webhooks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "url": "https://example.com/path"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/webhooks/{id}',
    httpMethod: 'get',
    summary: 'Retrieve webhook',
    description:
      'Retrieves the details of an existing webhook.\n\nRequired permissions:\n - `developer:manage_webhook`',
    stainlessPath: '(resource) webhooks > (method) retrieve',
    qualified: 'client.webhooks.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; resource_id: string; testable_events: string[]; url: string; }",
    markdown:
      "## retrieve\n\n`client.webhooks.retrieve(id: string): { id: string; api_version: api_version; child_resource_events: boolean; created_at: string; enabled: boolean; events: webhook_event[]; resource_id: string; testable_events: webhook_event[]; url: string; }`\n\n**get** `/webhooks/{id}`\n\nRetrieves the details of an existing webhook.\n\nRequired permissions:\n - `developer:manage_webhook`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; resource_id: string; testable_events: string[]; url: string; }`\n  A webhook endpoint that receives event notifications for a company via HTTP POST.\n\n  - `id: string`\n  - `api_version: 'v1' | 'v2' | 'v5'`\n  - `child_resource_events: boolean`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `resource_id: string`\n  - `testable_events: string[]`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst webhook = await client.webhooks.retrieve('hook_xxxxxxxxxxxxx');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.retrieve('hook_xxxxxxxxxxxxx');\n\nconsole.log(webhook.id);",
      },
      python: {
        method: 'webhooks.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.retrieve(\n    "hook_xxxxxxxxxxxxx",\n)\nprint(webhook.id)',
      },
      ruby: {
        method: 'webhooks.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nwebhook = whop.webhooks.retrieve("hook_xxxxxxxxxxxxx")\n\nputs(webhook)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/webhooks/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/webhooks/{id}',
    httpMethod: 'patch',
    summary: 'Update webhook',
    description: 'Updates a webhook\n\nRequired permissions:\n - `developer:manage_webhook`',
    stainlessPath: '(resource) webhooks > (method) update',
    qualified: 'client.webhooks.update',
    params: [
      'id: string;',
      "api_version?: 'v1' | 'v2' | 'v5';",
      'child_resource_events?: boolean;',
      'enabled?: boolean;',
      'events?: string[];',
      'url?: string;',
    ],
    response:
      "{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; resource_id: string; testable_events: string[]; url: string; }",
    markdown:
      "## update\n\n`client.webhooks.update(id: string, api_version?: 'v1' | 'v2' | 'v5', child_resource_events?: boolean, enabled?: boolean, events?: string[], url?: string): { id: string; api_version: api_version; child_resource_events: boolean; created_at: string; enabled: boolean; events: webhook_event[]; resource_id: string; testable_events: webhook_event[]; url: string; }`\n\n**patch** `/webhooks/{id}`\n\nUpdates a webhook\n\nRequired permissions:\n - `developer:manage_webhook`\n\n### Parameters\n\n- `id: string`\n\n- `api_version?: 'v1' | 'v2' | 'v5'`\n  The different API versions\n\n- `child_resource_events?: boolean`\n  Whether or not to send events for child resources.\n\n- `enabled?: boolean`\n  Whether or not the webhook is enabled.\n\n- `events?: string[]`\n  The events to send the webhook for.\n\n- `url?: string`\n  The URL to send the webhook to.\n\n### Returns\n\n- `{ id: string; api_version: 'v1' | 'v2' | 'v5'; child_resource_events: boolean; created_at: string; enabled: boolean; events: string[]; resource_id: string; testable_events: string[]; url: string; }`\n  A webhook endpoint that receives event notifications for a company via HTTP POST.\n\n  - `id: string`\n  - `api_version: 'v1' | 'v2' | 'v5'`\n  - `child_resource_events: boolean`\n  - `created_at: string`\n  - `enabled: boolean`\n  - `events: string[]`\n  - `resource_id: string`\n  - `testable_events: string[]`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst webhook = await client.webhooks.update('hook_xxxxxxxxxxxxx');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.update('hook_xxxxxxxxxxxxx');\n\nconsole.log(webhook.id);",
      },
      python: {
        method: 'webhooks.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.update(\n    id="hook_xxxxxxxxxxxxx",\n)\nprint(webhook.id)',
      },
      ruby: {
        method: 'webhooks.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nwebhook = whop.webhooks.update("hook_xxxxxxxxxxxxx")\n\nputs(webhook)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/webhooks/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/webhooks/{id}',
    httpMethod: 'delete',
    summary: 'Delete webhook',
    description: 'Deletes a webhook\n\nRequired permissions:\n - `developer:manage_webhook`',
    stainlessPath: '(resource) webhooks > (method) delete',
    qualified: 'client.webhooks.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.webhooks.delete(id: string): boolean`\n\n**delete** `/webhooks/{id}`\n\nDeletes a webhook\n\nRequired permissions:\n - `developer:manage_webhook`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst webhook = await client.webhooks.delete('hook_xxxxxxxxxxxxx');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.webhooks.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.delete('hook_xxxxxxxxxxxxx');\n\nconsole.log(webhook);",
      },
      python: {
        method: 'webhooks.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nwebhook = client.webhooks.delete(\n    "hook_xxxxxxxxxxxxx",\n)\nprint(webhook)',
      },
      ruby: {
        method: 'webhooks.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nwebhook = whop.webhooks.delete("hook_xxxxxxxxxxxxx")\n\nputs(webhook)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/webhooks/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/plans',
    httpMethod: 'get',
    summary: 'List plans',
    description:
      'Returns a paginated list of plans belonging to a company, with optional filtering by visibility, type, release method, and product.\n\nRequired permissions:\n - `plan:basic:read`',
    stainlessPath: '(resource) plans > (method) list',
    qualified: 'client.plans.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expires_at';",
      "plan_types?: 'renewal' | 'one_time'[];",
      'product_ids?: string[];',
      "release_methods?: 'buy_now' | 'waitlist'[];",
      "visibilities?: 'visible' | 'hidden' | 'archived' | 'quick_link' | 'all' | 'not_quick_link' | 'not_archived'[];",
    ],
    response:
      "{ id: string; billing_period: number; company: { id: string; title: string; }; created_at: string; currency: string; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## list\n\n`client.plans.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expires_at', plan_types?: 'renewal' | 'one_time'[], product_ids?: string[], release_methods?: 'buy_now' | 'waitlist'[], visibilities?: 'visible' | 'hidden' | 'archived' | 'quick_link' | 'all' | 'not_quick_link' | 'not_archived'[]): { id: string; billing_period: number; company: object; created_at: string; currency: currency; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: object; member_count: number; payment_method_configuration: object; plan_type: plan_type; product: object; purchase_url: string; release_method: release_method; renewal_price: number; split_pay_required_payments: number; stock: number; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: visibility; }`\n\n**get** `/plans`\n\nReturns a paginated list of plans belonging to a company, with optional filtering by visibility, type, release method, and product.\n\nRequired permissions:\n - `plan:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list plans for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return plans created after this timestamp.\n\n- `created_before?: string`\n  Only return plans created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'id' | 'active_members_count' | 'created_at' | 'internal_notes' | 'expires_at'`\n  The ways a relation of Plans can be ordered\n\n- `plan_types?: 'renewal' | 'one_time'[]`\n  Filter to only plans matching these billing types.\n\n- `product_ids?: string[]`\n  Filter to only plans belonging to these product identifiers.\n\n- `release_methods?: 'buy_now' | 'waitlist'[]`\n  Filter to only plans matching these release methods.\n\n- `visibilities?: 'visible' | 'hidden' | 'archived' | 'quick_link' | 'all' | 'not_quick_link' | 'not_archived'[]`\n  Filter to only plans matching these visibility states.\n\n### Returns\n\n- `{ id: string; billing_period: number; company: { id: string; title: string; }; created_at: string; currency: string; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A plan defines pricing and billing terms for a checkout. Plans can optionally belong to a product, where they represent different pricing options such as one-time payments, recurring subscriptions, or free trials.\n\n  - `id: string`\n  - `billing_period: number`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `description: string`\n  - `expiration_days: number`\n  - `initial_price: number`\n  - `internal_notes: string`\n  - `invoice: { id: string; }`\n  - `member_count: number`\n  - `payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }`\n  - `plan_type: 'renewal' | 'one_time'`\n  - `product: { id: string; title: string; }`\n  - `purchase_url: string`\n  - `release_method: 'buy_now' | 'waitlist'`\n  - `renewal_price: number`\n  - `split_pay_required_payments: number`\n  - `stock: number`\n  - `title: string`\n  - `trial_period_days: number`\n  - `unlimited_stock: boolean`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const planListResponse of client.plans.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(planListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const planListResponse of client.plans.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(planListResponse.id);\n}",
      },
      python: {
        method: 'plans.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.plans.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'plans.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.plans.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/plans \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/plans',
    httpMethod: 'post',
    summary: 'Create plan',
    description:
      'Create a new pricing plan for a product. The plan defines the billing interval, price, and availability for customers.\n\nRequired permissions:\n - `plan:create`\n - `access_pass:basic:read`\n - `plan:basic:read`',
    stainlessPath: '(resource) plans > (method) create',
    qualified: 'client.plans.create',
    params: [
      'company_id: string;',
      'product_id: string;',
      'billing_period?: number;',
      "checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; };",
      'currency?: string;',
      "custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[];",
      'description?: string;',
      'expiration_days?: number;',
      'image?: { id: string; };',
      'initial_price?: number;',
      'internal_notes?: string;',
      'legacy_payment_method_controls?: boolean;',
      "override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified';",
      'payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; };',
      "plan_type?: 'renewal' | 'one_time';",
      "release_method?: 'buy_now' | 'waitlist';",
      'renewal_price?: number;',
      'split_pay_required_payments?: number;',
      'stock?: number;',
      'title?: string;',
      'trial_period_days?: number;',
      'unlimited_stock?: boolean;',
      "visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link';",
    ],
    response:
      "{ id: string; billing_period: number; collect_tax: boolean; company: { id: string; title: string; }; created_at: string; currency: string; custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: 'inclusive' | 'exclusive' | 'unspecified'; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## create\n\n`client.plans.create(company_id: string, product_id: string, billing_period?: number, checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }, currency?: string, custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[], description?: string, expiration_days?: number, image?: { id: string; }, initial_price?: number, internal_notes?: string, legacy_payment_method_controls?: boolean, override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified', payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }, plan_type?: 'renewal' | 'one_time', release_method?: 'buy_now' | 'waitlist', renewal_price?: number, split_pay_required_payments?: number, stock?: number, title?: string, trial_period_days?: number, unlimited_stock?: boolean, visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'): { id: string; billing_period: number; collect_tax: boolean; company: object; created_at: string; currency: currency; custom_fields: object[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: object; member_count: number; payment_method_configuration: object; plan_type: plan_type; product: object; purchase_url: string; release_method: release_method; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: tax_type; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: visibility; }`\n\n**post** `/plans`\n\nCreate a new pricing plan for a product. The plan defines the billing interval, price, and availability for customers.\n\nRequired permissions:\n - `plan:create`\n - `access_pass:basic:read`\n - `plan:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create this plan for.\n\n- `product_id: string`\n  The unique identifier of the product to attach this plan to.\n\n- `billing_period?: number`\n  The number of days between recurring charges. For example, 30 for monthly or 365 for yearly.\n\n- `checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }`\n  Checkout styling overrides for this plan. Pass null to inherit from the company default.\n  - `background_color?: string`\n    A hex color code for the checkout page background, applied to the order summary panel (e.g. #F4F4F5).\n  - `border_style?: 'rounded' | 'pill' | 'rectangular'`\n    The different border-radius styles available for checkout pages.\n  - `button_color?: string`\n    A hex color code for the button color (e.g. #FF5733).\n  - `font_family?: 'system' | 'roboto' | 'open_sans'`\n    The different font families available for checkout pages.\n\n- `currency?: string`\n  The available currencies on the platform\n\n- `custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]`\n  An array of custom field definitions to collect from customers at checkout.\n\n- `description?: string`\n  A text description of the plan displayed to customers on the product page.\n\n- `expiration_days?: number`\n  The number of days until the membership expires and access is revoked. Used for expiration-based plans.\n\n- `image?: { id: string; }`\n  An image displayed on the product page to represent this plan.\n  - `id: string`\n    The ID of an existing file object.\n\n- `initial_price?: number`\n  The amount charged on the first purchase. For one-time plans, this is the full price. For recurring plans, this is an additional charge on top of the renewal price. Provided in the plan's currency (e.g., 10.43 for $10.43).\n\n- `internal_notes?: string`\n  Private notes visible only to the business owner. Not shown to customers.\n\n- `legacy_payment_method_controls?: boolean`\n  Whether this plan uses legacy payment method controls.\n\n- `override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified'`\n  Whether or not the tax is included in a plan's price (or if it hasn't been set up)\n\n- `payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }`\n  Explicit payment method configuration for the plan. When not provided, the company's defaults apply.\n  - `disabled: string[]`\n    An array of payment method identifiers that are explicitly disabled. Only applies if the include_platform_defaults is true.\n  - `enabled: string[]`\n    An array of payment method identifiers that are explicitly enabled. This means these payment methods will be shown on checkout. Example use case is to only enable a specific payment method like cashapp, or extending the platform defaults with additional methods.\n  - `include_platform_defaults?: boolean`\n    Whether Whop's platform default payment method enablement settings are included in this configuration. The full list of default payment methods can be found in the documentation at docs.whop.com/payments.\n\n- `plan_type?: 'renewal' | 'one_time'`\n  The type of plan that can be attached to a product\n\n- `release_method?: 'buy_now' | 'waitlist'`\n  The methods of how a plan can be released.\n\n- `renewal_price?: number`\n  The amount charged each billing period for recurring plans. Provided in the plan's currency (e.g., 10.43 for $10.43).\n\n- `split_pay_required_payments?: number`\n  The number of installment payments required before the subscription pauses.\n\n- `stock?: number`\n  The maximum number of units available for purchase. Ignored when unlimited_stock is true.\n\n- `title?: string`\n  The display name of the plan shown to customers on the product page.\n\n- `trial_period_days?: number`\n  The number of free trial days before the first charge on a recurring plan.\n\n- `unlimited_stock?: boolean`\n  Whether the plan has unlimited stock. When true, the stock field is ignored. Defaults to true.\n\n- `visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n  Visibility of a resource\n\n### Returns\n\n- `{ id: string; billing_period: number; collect_tax: boolean; company: { id: string; title: string; }; created_at: string; currency: string; custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: 'inclusive' | 'exclusive' | 'unspecified'; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A plan defines pricing and billing terms for a checkout. Plans can optionally belong to a product, where they represent different pricing options such as one-time payments, recurring subscriptions, or free trials.\n\n  - `id: string`\n  - `billing_period: number`\n  - `collect_tax: boolean`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]`\n  - `description: string`\n  - `expiration_days: number`\n  - `initial_price: number`\n  - `internal_notes: string`\n  - `invoice: { id: string; }`\n  - `member_count: number`\n  - `payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }`\n  - `plan_type: 'renewal' | 'one_time'`\n  - `product: { id: string; title: string; }`\n  - `purchase_url: string`\n  - `release_method: 'buy_now' | 'waitlist'`\n  - `renewal_price: number`\n  - `split_pay_required_payments: number`\n  - `stock: number`\n  - `tax_type: 'inclusive' | 'exclusive' | 'unspecified'`\n  - `title: string`\n  - `trial_period_days: number`\n  - `unlimited_stock: boolean`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst plan = await client.plans.create({ company_id: 'biz_xxxxxxxxxxxxxx', product_id: 'prod_xxxxxxxxxxxxx' });\n\nconsole.log(plan);\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.plans.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  product_id: 'prod_xxxxxxxxxxxxx',\n});\n\nconsole.log(plan.id);",
      },
      python: {
        method: 'plans.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.plans.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    product_id="prod_xxxxxxxxxxxxx",\n)\nprint(plan.id)',
      },
      ruby: {
        method: 'plans.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nplan = whop.plans.create(company_id: "biz_xxxxxxxxxxxxxx", product_id: "prod_xxxxxxxxxxxxx")\n\nputs(plan)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/plans \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "product_id": "prod_xxxxxxxxxxxxx",\n          "billing_period": 42,\n          "expiration_days": 42,\n          "initial_price": 6.9,\n          "renewal_price": 6.9,\n          "split_pay_required_payments": 42,\n          "stock": 42,\n          "trial_period_days": 42\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/plans/{id}',
    httpMethod: 'get',
    summary: 'Retrieve plan',
    description: 'Retrieves the details of an existing plan.\n\nRequired permissions:\n - `plan:basic:read`',
    stainlessPath: '(resource) plans > (method) retrieve',
    qualified: 'client.plans.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; billing_period: number; collect_tax: boolean; company: { id: string; title: string; }; created_at: string; currency: string; custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: 'inclusive' | 'exclusive' | 'unspecified'; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## retrieve\n\n`client.plans.retrieve(id: string): { id: string; billing_period: number; collect_tax: boolean; company: object; created_at: string; currency: currency; custom_fields: object[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: object; member_count: number; payment_method_configuration: object; plan_type: plan_type; product: object; purchase_url: string; release_method: release_method; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: tax_type; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: visibility; }`\n\n**get** `/plans/{id}`\n\nRetrieves the details of an existing plan.\n\nRequired permissions:\n - `plan:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; billing_period: number; collect_tax: boolean; company: { id: string; title: string; }; created_at: string; currency: string; custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: 'inclusive' | 'exclusive' | 'unspecified'; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A plan defines pricing and billing terms for a checkout. Plans can optionally belong to a product, where they represent different pricing options such as one-time payments, recurring subscriptions, or free trials.\n\n  - `id: string`\n  - `billing_period: number`\n  - `collect_tax: boolean`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]`\n  - `description: string`\n  - `expiration_days: number`\n  - `initial_price: number`\n  - `internal_notes: string`\n  - `invoice: { id: string; }`\n  - `member_count: number`\n  - `payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }`\n  - `plan_type: 'renewal' | 'one_time'`\n  - `product: { id: string; title: string; }`\n  - `purchase_url: string`\n  - `release_method: 'buy_now' | 'waitlist'`\n  - `renewal_price: number`\n  - `split_pay_required_payments: number`\n  - `stock: number`\n  - `tax_type: 'inclusive' | 'exclusive' | 'unspecified'`\n  - `title: string`\n  - `trial_period_days: number`\n  - `unlimited_stock: boolean`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst plan = await client.plans.retrieve('plan_xxxxxxxxxxxxx');\n\nconsole.log(plan);\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.plans.retrieve('plan_xxxxxxxxxxxxx');\n\nconsole.log(plan.id);",
      },
      python: {
        method: 'plans.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.plans.retrieve(\n    "plan_xxxxxxxxxxxxx",\n)\nprint(plan.id)',
      },
      ruby: {
        method: 'plans.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nplan = whop.plans.retrieve("plan_xxxxxxxxxxxxx")\n\nputs(plan)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/plans/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/plans/{id}',
    httpMethod: 'patch',
    summary: 'Update plan',
    description:
      "Update a plan's pricing, billing interval, visibility, stock, and other settings.\n\nRequired permissions:\n - `plan:update`\n - `access_pass:basic:read`\n - `plan:basic:read`",
    stainlessPath: '(resource) plans > (method) update',
    qualified: 'client.plans.update',
    params: [
      'id: string;',
      'billing_period?: number;',
      "checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; };",
      'currency?: string;',
      "custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[];",
      'description?: string;',
      'expiration_days?: number;',
      'image?: { id: string; };',
      'initial_price?: number;',
      'internal_notes?: string;',
      'legacy_payment_method_controls?: boolean;',
      'offer_cancel_discount?: boolean;',
      "override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified';",
      'payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; };',
      'renewal_price?: number;',
      'stock?: number;',
      'strike_through_initial_price?: number;',
      'strike_through_renewal_price?: number;',
      'title?: string;',
      'trial_period_days?: number;',
      'unlimited_stock?: boolean;',
      "visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link';",
    ],
    response:
      "{ id: string; billing_period: number; collect_tax: boolean; company: { id: string; title: string; }; created_at: string; currency: string; custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: 'inclusive' | 'exclusive' | 'unspecified'; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }",
    markdown:
      "## update\n\n`client.plans.update(id: string, billing_period?: number, checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }, currency?: string, custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[], description?: string, expiration_days?: number, image?: { id: string; }, initial_price?: number, internal_notes?: string, legacy_payment_method_controls?: boolean, offer_cancel_discount?: boolean, override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified', payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }, renewal_price?: number, stock?: number, strike_through_initial_price?: number, strike_through_renewal_price?: number, title?: string, trial_period_days?: number, unlimited_stock?: boolean, visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'): { id: string; billing_period: number; collect_tax: boolean; company: object; created_at: string; currency: currency; custom_fields: object[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: object; member_count: number; payment_method_configuration: object; plan_type: plan_type; product: object; purchase_url: string; release_method: release_method; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: tax_type; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: visibility; }`\n\n**patch** `/plans/{id}`\n\nUpdate a plan's pricing, billing interval, visibility, stock, and other settings.\n\nRequired permissions:\n - `plan:update`\n - `access_pass:basic:read`\n - `plan:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `billing_period?: number`\n  The number of days between recurring charges. For example, 30 for monthly or 365 for yearly.\n\n- `checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }`\n  Checkout styling overrides for this plan. Pass null to remove all overrides and inherit from the company default.\n  - `background_color?: string`\n    A hex color code for the checkout page background, applied to the order summary panel (e.g. #F4F4F5).\n  - `border_style?: 'rounded' | 'pill' | 'rectangular'`\n    The different border-radius styles available for checkout pages.\n  - `button_color?: string`\n    A hex color code for the button color (e.g. #FF5733).\n  - `font_family?: 'system' | 'roboto' | 'open_sans'`\n    The different font families available for checkout pages.\n\n- `currency?: string`\n  The available currencies on the platform\n\n- `custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]`\n  An array of custom field definitions to collect from customers at checkout.\n\n- `description?: string`\n  A text description of the plan displayed to customers on the product page.\n\n- `expiration_days?: number`\n  The number of days until the membership expires and access is revoked. For example, 365 for one-year access.\n\n- `image?: { id: string; }`\n  An image displayed on the product page to represent this plan.\n  - `id: string`\n    The ID of an existing file object.\n\n- `initial_price?: number`\n  The amount charged on the first purchase. Provided in the plan's currency (e.g., 10.43 for $10.43).\n\n- `internal_notes?: string`\n  Private notes visible only to the business owner. Not shown to customers.\n\n- `legacy_payment_method_controls?: boolean`\n  Whether this plan uses legacy payment method controls.\n\n- `offer_cancel_discount?: boolean`\n  Whether to offer a retention discount when a customer attempts to cancel.\n\n- `override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified'`\n  Whether or not the tax is included in a plan's price (or if it hasn't been set up)\n\n- `payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }`\n  Explicit payment method configuration for the plan. Sending null removes any custom configuration.\n  - `disabled: string[]`\n    An array of payment method identifiers that are explicitly disabled. Only applies if the include_platform_defaults is true.\n  - `enabled: string[]`\n    An array of payment method identifiers that are explicitly enabled. This means these payment methods will be shown on checkout. Example use case is to only enable a specific payment method like cashapp, or extending the platform defaults with additional methods.\n  - `include_platform_defaults?: boolean`\n    Whether Whop's platform default payment method enablement settings are included in this configuration. The full list of default payment methods can be found in the documentation at docs.whop.com/payments.\n\n- `renewal_price?: number`\n  The amount charged each billing period for recurring plans. Provided in the plan's currency (e.g., 10.43 for $10.43).\n\n- `stock?: number`\n  The maximum number of units available for purchase. Ignored when unlimited_stock is true.\n\n- `strike_through_initial_price?: number`\n  A comparison price displayed with a strikethrough for the initial price. Provided in the plan's currency (e.g., 19.99 for $19.99).\n\n- `strike_through_renewal_price?: number`\n  A comparison price displayed with a strikethrough for the renewal price. Provided in the plan's currency (e.g., 19.99 for $19.99).\n\n- `title?: string`\n  The display name of the plan shown to customers on the product page.\n\n- `trial_period_days?: number`\n  The number of free trial days before the first charge on a recurring plan.\n\n- `unlimited_stock?: boolean`\n  Whether the plan has unlimited stock. When true, the stock field is ignored.\n\n- `visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n  Visibility of a resource\n\n### Returns\n\n- `{ id: string; billing_period: number; collect_tax: boolean; company: { id: string; title: string; }; created_at: string; currency: string; custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]; description: string; expiration_days: number; initial_price: number; internal_notes: string; invoice: { id: string; }; member_count: number; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan_type: 'renewal' | 'one_time'; product: { id: string; title: string; }; purchase_url: string; release_method: 'buy_now' | 'waitlist'; renewal_price: number; split_pay_required_payments: number; stock: number; tax_type: 'inclusive' | 'exclusive' | 'unspecified'; title: string; trial_period_days: number; unlimited_stock: boolean; updated_at: string; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  A plan defines pricing and billing terms for a checkout. Plans can optionally belong to a product, where they represent different pricing options such as one-time payments, recurring subscriptions, or free trials.\n\n  - `id: string`\n  - `billing_period: number`\n  - `collect_tax: boolean`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_fields: { id: string; field_type: 'text'; name: string; order: number; placeholder: string; required: boolean; }[]`\n  - `description: string`\n  - `expiration_days: number`\n  - `initial_price: number`\n  - `internal_notes: string`\n  - `invoice: { id: string; }`\n  - `member_count: number`\n  - `payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }`\n  - `plan_type: 'renewal' | 'one_time'`\n  - `product: { id: string; title: string; }`\n  - `purchase_url: string`\n  - `release_method: 'buy_now' | 'waitlist'`\n  - `renewal_price: number`\n  - `split_pay_required_payments: number`\n  - `stock: number`\n  - `tax_type: 'inclusive' | 'exclusive' | 'unspecified'`\n  - `title: string`\n  - `trial_period_days: number`\n  - `unlimited_stock: boolean`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst plan = await client.plans.update('plan_xxxxxxxxxxxxx');\n\nconsole.log(plan);\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.plans.update('plan_xxxxxxxxxxxxx');\n\nconsole.log(plan.id);",
      },
      python: {
        method: 'plans.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.plans.update(\n    id="plan_xxxxxxxxxxxxx",\n)\nprint(plan.id)',
      },
      ruby: {
        method: 'plans.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nplan = whop.plans.update("plan_xxxxxxxxxxxxx")\n\nputs(plan)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/plans/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/plans/{id}',
    httpMethod: 'delete',
    summary: 'Delete plan',
    description:
      'Permanently delete a plan from a product. Existing memberships on this plan will not be affected.\n\nRequired permissions:\n - `plan:delete`',
    stainlessPath: '(resource) plans > (method) delete',
    qualified: 'client.plans.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.plans.delete(id: string): boolean`\n\n**delete** `/plans/{id}`\n\nPermanently delete a plan from a product. Existing memberships on this plan will not be affected.\n\nRequired permissions:\n - `plan:delete`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst plan = await client.plans.delete('plan_xxxxxxxxxxxxx');\n\nconsole.log(plan);\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.plans.delete('plan_xxxxxxxxxxxxx');\n\nconsole.log(plan);",
      },
      python: {
        method: 'plans.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.plans.delete(\n    "plan_xxxxxxxxxxxxx",\n)\nprint(plan)',
      },
      ruby: {
        method: 'plans.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nplan = whop.plans.delete("plan_xxxxxxxxxxxxx")\n\nputs(plan)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/plans/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/entries',
    httpMethod: 'get',
    summary: 'List entries',
    description:
      'Returns a paginated list of waitlist entries for a company, with optional filtering by product, plan, status, and creation date.\n\nRequired permissions:\n - `plan:waitlist:read`\n - `member:email:read`',
    stainlessPath: '(resource) entries > (method) list',
    qualified: 'client.entries.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'id' | 'created_at';",
      'plan_ids?: string[];',
      'product_ids?: string[];',
      "statuses?: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'[];",
    ],
    response:
      "{ id: string; created_at: string; plan: { id: string; }; product: { id: string; title: string; }; status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'; user: { id: string; email: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.entries.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'id' | 'created_at', plan_ids?: string[], product_ids?: string[], statuses?: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'[]): { id: string; created_at: string; plan: object; product: object; status: entry_status; user: object; }`\n\n**get** `/entries`\n\nReturns a paginated list of waitlist entries for a company, with optional filtering by product, plan, status, and creation date.\n\nRequired permissions:\n - `plan:waitlist:read`\n - `member:email:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list waitlist entries for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return entries created after this timestamp.\n\n- `created_before?: string`\n  Only return entries created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'id' | 'created_at'`\n  Which columns can be used to sort.\n\n- `plan_ids?: string[]`\n  Filter entries to only those for specific plans.\n\n- `product_ids?: string[]`\n  Filter entries to only those for specific products.\n\n- `statuses?: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'[]`\n  Filter entries by their current status.\n\n### Returns\n\n- `{ id: string; created_at: string; plan: { id: string; }; product: { id: string; title: string; }; status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'; user: { id: string; email: string; name: string; username: string; }; }`\n  An entry represents a user's signup for a waitlisted plan.\n\n  - `id: string`\n  - `created_at: string`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const entryListResponse of client.entries.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(entryListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.entries.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const entryListResponse of client.entries.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(entryListResponse.id);\n}",
      },
      python: {
        method: 'entries.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.entries.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'entries.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.entries.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/entries \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/entries/{id}',
    httpMethod: 'get',
    summary: 'Retrieve entry',
    description:
      'Retrieves the details of an existing waitlist entry.\n\nRequired permissions:\n - `plan:waitlist:read`\n - `member:email:read`',
    stainlessPath: '(resource) entries > (method) retrieve',
    qualified: 'client.entries.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; created_at: string; custom_field_responses: { id: string; answer: string; question: string; }[]; plan: { id: string; }; product: { id: string; title: string; }; status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'; user: { id: string; email: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.entries.retrieve(id: string): { id: string; created_at: string; custom_field_responses: object[]; plan: object; product: object; status: entry_status; user: object; }`\n\n**get** `/entries/{id}`\n\nRetrieves the details of an existing waitlist entry.\n\nRequired permissions:\n - `plan:waitlist:read`\n - `member:email:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; custom_field_responses: { id: string; answer: string; question: string; }[]; plan: { id: string; }; product: { id: string; title: string; }; status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'; user: { id: string; email: string; name: string; username: string; }; }`\n  An entry represents a user's signup for a waitlisted plan.\n\n  - `id: string`\n  - `created_at: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst entry = await client.entries.retrieve('entry_xxxxxxxxxxxx');\n\nconsole.log(entry);\n```",
    perLanguage: {
      typescript: {
        method: 'client.entries.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst entry = await client.entries.retrieve('entry_xxxxxxxxxxxx');\n\nconsole.log(entry.id);",
      },
      python: {
        method: 'entries.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nentry = client.entries.retrieve(\n    "entry_xxxxxxxxxxxx",\n)\nprint(entry.id)',
      },
      ruby: {
        method: 'entries.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nentry = whop.entries.retrieve("entry_xxxxxxxxxxxx")\n\nputs(entry)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/entries/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'approve',
    endpoint: '/entries/{id}/approve',
    httpMethod: 'post',
    summary: 'Approve entry',
    description:
      'Approve a pending waitlist entry, triggering the checkout process to grant the user access to the plan.\n\nRequired permissions:\n - `plan:waitlist:manage`',
    stainlessPath: '(resource) entries > (method) approve',
    qualified: 'client.entries.approve',
    params: ['id: string;'],
    response: '{ job_id: string; }',
    markdown:
      "## approve\n\n`client.entries.approve(id: string): { job_id: string; }`\n\n**post** `/entries/{id}/approve`\n\nApprove a pending waitlist entry, triggering the checkout process to grant the user access to the plan.\n\nRequired permissions:\n - `plan:waitlist:manage`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ job_id: string; }`\n  An object representing an asynchronous job.\n\n  - `job_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.entries.approve('entry_xxxxxxxxxxxx');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.entries.approve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.entries.approve('entry_xxxxxxxxxxxx');\n\nconsole.log(response.job_id);",
      },
      python: {
        method: 'entries.approve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.entries.approve(\n    "entry_xxxxxxxxxxxx",\n)\nprint(response.job_id)',
      },
      ruby: {
        method: 'entries.approve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.entries.approve("entry_xxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/entries/$ID/approve \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'deny',
    endpoint: '/entries/{id}/deny',
    httpMethod: 'post',
    summary: 'Deny entry',
    description:
      'Deny a pending waitlist entry, preventing the user from gaining access to the plan.\n\nRequired permissions:\n - `plan:waitlist:manage`\n - `plan:basic:read`\n - `member:email:read`',
    stainlessPath: '(resource) entries > (method) deny',
    qualified: 'client.entries.deny',
    params: ['id: string;'],
    response:
      "{ id: string; created_at: string; custom_field_responses: { id: string; answer: string; question: string; }[]; plan: { id: string; }; product: { id: string; title: string; }; status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'; user: { id: string; email: string; name: string; username: string; }; }",
    markdown:
      "## deny\n\n`client.entries.deny(id: string): { id: string; created_at: string; custom_field_responses: object[]; plan: object; product: object; status: entry_status; user: object; }`\n\n**post** `/entries/{id}/deny`\n\nDeny a pending waitlist entry, preventing the user from gaining access to the plan.\n\nRequired permissions:\n - `plan:waitlist:manage`\n - `plan:basic:read`\n - `member:email:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; custom_field_responses: { id: string; answer: string; question: string; }[]; plan: { id: string; }; product: { id: string; title: string; }; status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'; user: { id: string; email: string; name: string; username: string; }; }`\n  An entry represents a user's signup for a waitlisted plan.\n\n  - `id: string`\n  - `created_at: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `status: 'drafted' | 'pending' | 'approved' | 'denied' | 'any'`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst entry = await client.entries.deny('entry_xxxxxxxxxxxx');\n\nconsole.log(entry);\n```",
    perLanguage: {
      typescript: {
        method: 'client.entries.deny',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst entry = await client.entries.deny('entry_xxxxxxxxxxxx');\n\nconsole.log(entry.id);",
      },
      python: {
        method: 'entries.deny',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nentry = client.entries.deny(\n    "entry_xxxxxxxxxxxx",\n)\nprint(entry.id)',
      },
      ruby: {
        method: 'entries.deny',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nentry = whop.entries.deny("entry_xxxxxxxxxxxx")\n\nputs(entry)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/entries/$ID/deny \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/forum_posts',
    httpMethod: 'get',
    summary: 'List forum posts',
    description:
      'Returns a paginated list of forum posts within a specific experience, with optional filtering by parent post or pinned status.\n\nRequired permissions:\n - `forum:read`',
    stainlessPath: '(resource) forum_posts > (method) list',
    qualified: 'client.forumPosts.list',
    params: [
      'experience_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'include_bounty_anchors?: boolean;',
      'last?: number;',
      'parent_id?: string;',
      'pinned?: boolean;',
    ],
    response:
      '{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }',
    markdown:
      "## list\n\n`client.forumPosts.list(experience_id: string, after?: string, before?: string, first?: number, include_bounty_anchors?: boolean, last?: number, parent_id?: string, pinned?: boolean): { id: string; attachments: object[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: object; view_count: number; }`\n\n**get** `/forum_posts`\n\nReturns a paginated list of forum posts within a specific experience, with optional filtering by parent post or pinned status.\n\nRequired permissions:\n - `forum:read`\n\n### Parameters\n\n- `experience_id: string`\n  The unique identifier of the experience to list forum posts for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `include_bounty_anchors?: boolean`\n  Whether to include top-level bounty discussion anchors as rich forum items.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `parent_id?: string`\n  The unique identifier of a parent post to list comments for. When set, returns replies to that post.\n\n- `pinned?: boolean`\n  Whether to filter for only pinned posts. Set to true to return only pinned posts.\n\n### Returns\n\n- `{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A post or comment in a forum feed, supporting rich text, attachments, polls, and reactions.\n\n  - `id: string`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `comment_count: number`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `is_poster_admin: boolean`\n  - `like_count: number`\n  - `parent_id: string`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const forumPostListResponse of client.forumPosts.list({ experience_id: 'exp_xxxxxxxxxxxxxx' })) {\n  console.log(forumPostListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.forumPosts.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const forumPostListResponse of client.forumPosts.list({\n  experience_id: 'exp_xxxxxxxxxxxxxx',\n})) {\n  console.log(forumPostListResponse.id);\n}",
      },
      python: {
        method: 'forum_posts.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.forum_posts.list(\n    experience_id="exp_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'forum_posts.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.forum_posts.list(experience_id: "exp_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/forum_posts \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/forum_posts',
    httpMethod: 'post',
    summary: 'Create forum post',
    description:
      "Create a new forum post or comment within an experience. Supports text content, attachments, polls, paywalling, and pinning. Pass experience_id 'public' with a company_id to post to a company's public forum.\n\nRequired permissions:\n - `forum:post:create`",
    stainlessPath: '(resource) forum_posts > (method) create',
    qualified: 'client.forumPosts.create',
    params: [
      'experience_id: string;',
      'attachments?: { id: string; }[];',
      'company_id?: string;',
      'content?: string;',
      'is_mention?: boolean;',
      'parent_id?: string;',
      'paywall_amount?: number;',
      'paywall_currency?: string;',
      'pinned?: boolean;',
      'poll?: { options: { id: string; text: string; }[]; };',
      'rich_content?: string;',
      'title?: string;',
      "visibility?: 'members_only' | 'globally_visible';",
    ],
    response:
      '{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }',
    markdown:
      "## create\n\n`client.forumPosts.create(experience_id: string, attachments?: { id: string; }[], company_id?: string, content?: string, is_mention?: boolean, parent_id?: string, paywall_amount?: number, paywall_currency?: string, pinned?: boolean, poll?: { options: { id: string; text: string; }[]; }, rich_content?: string, title?: string, visibility?: 'members_only' | 'globally_visible'): { id: string; attachments: object[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: object; view_count: number; }`\n\n**post** `/forum_posts`\n\nCreate a new forum post or comment within an experience. Supports text content, attachments, polls, paywalling, and pinning. Pass experience_id 'public' with a company_id to post to a company's public forum.\n\nRequired permissions:\n - `forum:post:create`\n\n### Parameters\n\n- `experience_id: string`\n  The unique identifier of the experience to create this post in. For example, 'exp_xxxxx'. Pass 'public' along with company_id to automatically use the company's public forum.\n\n- `attachments?: { id: string; }[]`\n  A list of file attachments to include with the post, such as images or videos.\n\n- `company_id?: string`\n  The unique identifier of the company whose public forum to post in. Required when experience_id is 'public'. For example, 'biz_xxxxx'.\n\n- `content?: string`\n  The main body of the post in Markdown format. For example, 'Check out this **update**'. Hidden if the post is paywalled and the viewer has not purchased access.\n\n- `is_mention?: boolean`\n  Whether to send this post as a mention notification to all users in the experience who have mentions enabled.\n\n- `parent_id?: string`\n  The unique identifier of the parent post to comment on. Omit this field to create a top-level post.\n\n- `paywall_amount?: number`\n  The price to unlock this post in the specified paywall currency. For example, 5.00 for $5.00. When set, users must purchase access to view the post content.\n\n- `paywall_currency?: string`\n  The available currencies on the platform\n\n- `pinned?: boolean`\n  Whether this post should be pinned to the top of the forum.\n\n- `poll?: { options: { id: string; text: string; }[]; }`\n  A poll to attach to this post, allowing members to vote on options.\n  - `options: { id: string; text: string; }[]`\n    The options for the poll. Must have sequential IDs starting from 1\n\n- `rich_content?: string`\n  The rich content of the post in Tiptap JSON format. When provided, takes priority over the markdown content field for rendering.\n\n- `title?: string`\n  The title of the post, displayed prominently at the top. Required for paywalled posts as it remains visible to non-purchasers.\n\n- `visibility?: 'members_only' | 'globally_visible'`\n  The visibility types for forum posts\n\n### Returns\n\n- `{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A post or comment in a forum feed, supporting rich text, attachments, polls, and reactions.\n\n  - `id: string`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `comment_count: number`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `is_poster_admin: boolean`\n  - `like_count: number`\n  - `parent_id: string`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst forumPost = await client.forumPosts.create({ experience_id: 'exp_xxxxxxxxxxxxxx' });\n\nconsole.log(forumPost);\n```",
    perLanguage: {
      typescript: {
        method: 'client.forumPosts.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst forumPost = await client.forumPosts.create({ experience_id: 'exp_xxxxxxxxxxxxxx' });\n\nconsole.log(forumPost.id);",
      },
      python: {
        method: 'forum_posts.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nforum_post = client.forum_posts.create(\n    experience_id="exp_xxxxxxxxxxxxxx",\n)\nprint(forum_post.id)',
      },
      ruby: {
        method: 'forum_posts.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nforum_post = whop.forum_posts.create(experience_id: "exp_xxxxxxxxxxxxxx")\n\nputs(forum_post)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/forum_posts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "experience_id": "exp_xxxxxxxxxxxxxx",\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "paywall_amount": 6.9\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/forum_posts/{id}',
    httpMethod: 'get',
    summary: 'Retrieve forum post',
    description: 'Retrieves the details of an existing forum post.\n\nRequired permissions:\n - `forum:read`',
    stainlessPath: '(resource) forum_posts > (method) retrieve',
    qualified: 'client.forumPosts.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }',
    markdown:
      "## retrieve\n\n`client.forumPosts.retrieve(id: string): { id: string; attachments: object[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: object; view_count: number; }`\n\n**get** `/forum_posts/{id}`\n\nRetrieves the details of an existing forum post.\n\nRequired permissions:\n - `forum:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A post or comment in a forum feed, supporting rich text, attachments, polls, and reactions.\n\n  - `id: string`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `comment_count: number`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `is_poster_admin: boolean`\n  - `like_count: number`\n  - `parent_id: string`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst forumPost = await client.forumPosts.retrieve('id');\n\nconsole.log(forumPost);\n```",
    perLanguage: {
      typescript: {
        method: 'client.forumPosts.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst forumPost = await client.forumPosts.retrieve('id');\n\nconsole.log(forumPost.id);",
      },
      python: {
        method: 'forum_posts.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nforum_post = client.forum_posts.retrieve(\n    "id",\n)\nprint(forum_post.id)',
      },
      ruby: {
        method: 'forum_posts.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nforum_post = whop.forum_posts.retrieve("id")\n\nputs(forum_post)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/forum_posts/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/forum_posts/{id}',
    httpMethod: 'patch',
    summary: 'Update forum post',
    description:
      'Edit the content, attachments, pinned status, or visibility of an existing forum post or comment.',
    stainlessPath: '(resource) forum_posts > (method) update',
    qualified: 'client.forumPosts.update',
    params: [
      'id: string;',
      'attachments?: { id: string; }[];',
      'content?: string;',
      'is_pinned?: boolean;',
      'title?: string;',
      "visibility?: 'members_only' | 'globally_visible';",
    ],
    response:
      '{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }',
    markdown:
      "## update\n\n`client.forumPosts.update(id: string, attachments?: { id: string; }[], content?: string, is_pinned?: boolean, title?: string, visibility?: 'members_only' | 'globally_visible'): { id: string; attachments: object[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: object; view_count: number; }`\n\n**patch** `/forum_posts/{id}`\n\nEdit the content, attachments, pinned status, or visibility of an existing forum post or comment.\n\n### Parameters\n\n- `id: string`\n\n- `attachments?: { id: string; }[]`\n  A replacement list of file attachments for this post, such as images or videos.\n\n- `content?: string`\n  The updated body of the post in Markdown format. For example, 'Check out this **update**'. Hidden if the post is paywalled and the viewer has not purchased access.\n\n- `is_pinned?: boolean`\n  Whether this post should be pinned to the top of the forum. Only top-level posts can be pinned, not comments.\n\n- `title?: string`\n  The updated title of the post, displayed prominently at the top. Required for paywalled posts as it remains visible to non-purchasers.\n\n- `visibility?: 'members_only' | 'globally_visible'`\n  The visibility types for forum posts\n\n### Returns\n\n- `{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; comment_count: number; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; is_poster_admin: boolean; like_count: number; parent_id: string; title: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A post or comment in a forum feed, supporting rich text, attachments, polls, and reactions.\n\n  - `id: string`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `comment_count: number`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `is_poster_admin: boolean`\n  - `like_count: number`\n  - `parent_id: string`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst forumPost = await client.forumPosts.update('id');\n\nconsole.log(forumPost);\n```",
    perLanguage: {
      typescript: {
        method: 'client.forumPosts.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst forumPost = await client.forumPosts.update('id');\n\nconsole.log(forumPost.id);",
      },
      python: {
        method: 'forum_posts.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nforum_post = client.forum_posts.update(\n    id="id",\n)\nprint(forum_post.id)',
      },
      ruby: {
        method: 'forum_posts.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nforum_post = whop.forum_posts.update("id")\n\nputs(forum_post)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/forum_posts/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/transfers',
    httpMethod: 'get',
    summary: 'List transfers',
    description:
      'Returns a paginated list of fund transfers, filtered by origin or destination account, with optional sorting and date filtering.\n\nRequired permissions:\n - `payout:transfer:read`',
    stainlessPath: '(resource) transfers > (method) list',
    qualified: 'client.transfers.list',
    params: [
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'destination_id?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'amount' | 'created_at';",
      'origin_id?: string;',
    ],
    response:
      '{ id: string; amount: number; created_at: string; currency: string; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin_ledger_account_id: string; }',
    markdown:
      "## list\n\n`client.transfers.list(after?: string, before?: string, created_after?: string, created_before?: string, destination_id?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'amount' | 'created_at', origin_id?: string): { id: string; amount: number; created_at: string; currency: currency; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin_ledger_account_id: string; }`\n\n**get** `/transfers`\n\nReturns a paginated list of fund transfers, filtered by origin or destination account, with optional sorting and date filtering.\n\nRequired permissions:\n - `payout:transfer:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return transfers created after this timestamp.\n\n- `created_before?: string`\n  Only return transfers created before this timestamp.\n\n- `destination_id?: string`\n  Filter to transfers received by this account. Accepts a user, company, or ledger account ID.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'amount' | 'created_at'`\n  Which columns can be used to sort.\n\n- `origin_id?: string`\n  Filter to transfers sent from this account. Accepts a user, company, or ledger account ID.\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin_ledger_account_id: string; }`\n  A transfer of credit between two ledger accounts.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `destination_ledger_account_id: string`\n  - `fee_amount: number`\n  - `metadata: object`\n  - `notes: string`\n  - `origin_ledger_account_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const transferListResponse of client.transfers.list()) {\n  console.log(transferListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.transfers.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const transferListResponse of client.transfers.list()) {\n  console.log(transferListResponse.id);\n}",
      },
      python: {
        method: 'transfers.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.transfers.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'transfers.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.transfers.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/transfers \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/transfers',
    httpMethod: 'post',
    summary: 'Create transfer',
    description:
      'Transfer funds between two ledger accounts, such as from a company balance to a user balance.\n\nRequired permissions:\n - `payout:transfer_funds`',
    stainlessPath: '(resource) transfers > (method) create',
    qualified: 'client.transfers.create',
    params: [
      'amount: number;',
      'currency: string;',
      'destination_id: string;',
      'origin_id: string;',
      'idempotence_key?: string;',
      'metadata?: object;',
      'notes?: string;',
    ],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; destination: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; origin_ledger_account_id: string; }",
    markdown:
      "## create\n\n`client.transfers.create(amount: number, currency: string, destination_id: string, origin_id: string, idempotence_key?: string, metadata?: object, notes?: string): { id: string; amount: number; created_at: string; currency: currency; destination: object | object; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin: object | object; origin_ledger_account_id: string; }`\n\n**post** `/transfers`\n\nTransfer funds between two ledger accounts, such as from a company balance to a user balance.\n\nRequired permissions:\n - `payout:transfer_funds`\n\n### Parameters\n\n- `amount: number`\n  The amount to transfer in the specified currency. For example, 25.00 for $25.00 USD.\n\n- `currency: string`\n  The currency of the transfer amount, such as 'usd'.\n\n- `destination_id: string`\n  The identifier of the account receiving the funds. Accepts a user ID ('user_xxx'), company ID ('biz_xxx'), or ledger account ID ('ldgr_xxx').\n\n- `origin_id: string`\n  The identifier of the account sending the funds. Accepts a user ID ('user_xxx'), company ID ('biz_xxx'), or ledger account ID ('ldgr_xxx').\n\n- `idempotence_key?: string`\n  A unique key to prevent duplicate transfers. Use a UUID or similar unique string.\n\n- `metadata?: object`\n  A JSON object of custom metadata to attach to the transfer for tracking purposes.\n\n- `notes?: string`\n  A short note describing the transfer, up to 50 characters.\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; destination: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; origin_ledger_account_id: string; }`\n  A transfer of credit between two ledger accounts.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `destination: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }`\n  - `destination_ledger_account_id: string`\n  - `fee_amount: number`\n  - `metadata: object`\n  - `notes: string`\n  - `origin: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }`\n  - `origin_ledger_account_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst transfer = await client.transfers.create({\n  amount: 6.9,\n  currency: 'usd',\n  destination_id: 'destination_id',\n  origin_id: 'origin_id',\n});\n\nconsole.log(transfer);\n```",
    perLanguage: {
      typescript: {
        method: 'client.transfers.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst transfer = await client.transfers.create({\n  amount: 6.9,\n  currency: 'usd',\n  destination_id: 'destination_id',\n  origin_id: 'origin_id',\n});\n\nconsole.log(transfer.id);",
      },
      python: {
        method: 'transfers.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ntransfer = client.transfers.create(\n    amount=6.9,\n    currency="usd",\n    destination_id="destination_id",\n    origin_id="origin_id",\n)\nprint(transfer.id)',
      },
      ruby: {
        method: 'transfers.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ntransfer = whop.transfers.create(\n  amount: 6.9,\n  currency: :usd,\n  destination_id: "destination_id",\n  origin_id: "origin_id"\n)\n\nputs(transfer)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/transfers \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "amount": 6.9,\n          "currency": "usd",\n          "destination_id": "destination_id",\n          "origin_id": "origin_id"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/transfers/{id}',
    httpMethod: 'get',
    summary: 'Retrieve transfer',
    description:
      'Retrieves the details of an existing transfer.\n\nRequired permissions:\n - `payout:transfer:read`',
    stainlessPath: '(resource) transfers > (method) retrieve',
    qualified: 'client.transfers.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; destination: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; origin_ledger_account_id: string; }",
    markdown:
      "## retrieve\n\n`client.transfers.retrieve(id: string): { id: string; amount: number; created_at: string; currency: currency; destination: object | object; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin: object | object; origin_ledger_account_id: string; }`\n\n**get** `/transfers/{id}`\n\nRetrieves the details of an existing transfer.\n\nRequired permissions:\n - `payout:transfer:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; destination: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; destination_ledger_account_id: string; fee_amount: number; metadata: object; notes: string; origin: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; origin_ledger_account_id: string; }`\n  A transfer of credit between two ledger accounts.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `destination: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }`\n  - `destination_ledger_account_id: string`\n  - `fee_amount: number`\n  - `metadata: object`\n  - `notes: string`\n  - `origin: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }`\n  - `origin_ledger_account_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst transfer = await client.transfers.retrieve('ctt_xxxxxxxxxxxxxx');\n\nconsole.log(transfer);\n```",
    perLanguage: {
      typescript: {
        method: 'client.transfers.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst transfer = await client.transfers.retrieve('ctt_xxxxxxxxxxxxxx');\n\nconsole.log(transfer.id);",
      },
      python: {
        method: 'transfers.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ntransfer = client.transfers.retrieve(\n    "ctt_xxxxxxxxxxxxxx",\n)\nprint(transfer.id)',
      },
      ruby: {
        method: 'transfers.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ntransfer = whop.transfers.retrieve("ctt_xxxxxxxxxxxxxx")\n\nputs(transfer)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/transfers/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/ledger_accounts/{id}',
    httpMethod: 'get',
    summary: 'Retrieve ledger account',
    description:
      'Retrieves the details of an existing ledger account.\n\nRequired permissions:\n - `company:balance:read`\n - `payout:account:read`',
    stainlessPath: '(resource) ledger_accounts > (method) retrieve',
    qualified: 'client.ledgerAccounts.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; balances: { balance: number; currency: string; pending_balance: number; reserve_balance: number; }[]; ledger_type: 'primary' | 'pool'; owner: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; payments_approval_status: 'pending' | 'approved' | 'monitoring' | 'rejected'; payout_account_details: { id: string; address: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; }; business_name: string; business_representative: { date_of_birth: string; first_name: string; last_name: string; middle_name: string; }; email: string; latest_verification: { id: string; last_error_code: verification_error_code; last_error_reason: string; status: verification_status; }; phone: string; status: string; }; transfer_fee: number; }",
    markdown:
      "## retrieve\n\n`client.ledgerAccounts.retrieve(id: string): { id: string; balances: object[]; ledger_type: 'primary' | 'pool'; owner: object | object; payments_approval_status: 'pending' | 'approved' | 'monitoring' | 'rejected'; payout_account_details: object; transfer_fee: number; }`\n\n**get** `/ledger_accounts/{id}`\n\nRetrieves the details of an existing ledger account.\n\nRequired permissions:\n - `company:balance:read`\n - `payout:account:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; balances: { balance: number; currency: string; pending_balance: number; reserve_balance: number; }[]; ledger_type: 'primary' | 'pool'; owner: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }; payments_approval_status: 'pending' | 'approved' | 'monitoring' | 'rejected'; payout_account_details: { id: string; address: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; }; business_name: string; business_representative: { date_of_birth: string; first_name: string; last_name: string; middle_name: string; }; email: string; latest_verification: { id: string; last_error_code: verification_error_code; last_error_reason: string; status: verification_status; }; phone: string; status: string; }; transfer_fee: number; }`\n  A ledger account represents a financial account on Whop that can hold many balances.\n\n  - `id: string`\n  - `balances: { balance: number; currency: string; pending_balance: number; reserve_balance: number; }[]`\n  - `ledger_type: 'primary' | 'pool'`\n  - `owner: { id: string; name: string; typename: 'User'; username: string; } | { id: string; route: string; title: string; typename: 'Company'; }`\n  - `payments_approval_status: 'pending' | 'approved' | 'monitoring' | 'rejected'`\n  - `payout_account_details: { id: string; address: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; }; business_name: string; business_representative: { date_of_birth: string; first_name: string; last_name: string; middle_name: string; }; email: string; latest_verification: { id: string; last_error_code: string; last_error_reason: string; status: string; }; phone: string; status: string; }`\n  - `transfer_fee: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst ledgerAccount = await client.ledgerAccounts.retrieve('ldgr_xxxxxxxxxxxxx');\n\nconsole.log(ledgerAccount);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ledgerAccounts.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst ledgerAccount = await client.ledgerAccounts.retrieve('ldgr_xxxxxxxxxxxxx');\n\nconsole.log(ledgerAccount.id);",
      },
      python: {
        method: 'ledger_accounts.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nledger_account = client.ledger_accounts.retrieve(\n    "ldgr_xxxxxxxxxxxxx",\n)\nprint(ledger_account.id)',
      },
      ruby: {
        method: 'ledger_accounts.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nledger_account = whop.ledger_accounts.retrieve("ldgr_xxxxxxxxxxxxx")\n\nputs(ledger_account)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/ledger_accounts/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/memberships',
    httpMethod: 'get',
    summary: 'List memberships',
    description:
      'Returns a paginated list of memberships, with optional filtering by product, plan, status, and user.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`',
    stainlessPath: '(resource) memberships > (method) list',
    qualified: 'client.memberships.list',
    params: [
      'after?: string;',
      'before?: string;',
      'cancel_options?: string[];',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'id' | 'created_at' | 'status' | 'canceled_at' | 'date_joined' | 'total_spend';",
      'plan_ids?: string[];',
      'product_ids?: string[];',
      'promo_code_ids?: string[];',
      'statuses?: string[];',
      'user_ids?: string[];',
    ],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## list\n\n`client.memberships.list(after?: string, before?: string, cancel_options?: string[], company_id?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'id' | 'created_at' | 'status' | 'canceled_at' | 'date_joined' | 'total_spend', plan_ids?: string[], product_ids?: string[], promo_code_ids?: string[], statuses?: string[], user_ids?: string[]): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**get** `/memberships`\n\nReturns a paginated list of memberships, with optional filtering by product, plan, status, and user.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `cancel_options?: string[]`\n  Filter to only memberships matching these cancellation reasons.\n\n- `company_id?: string`\n  The unique identifier of the company to list memberships for. Required when using an API key.\n\n- `created_after?: string`\n  Only return memberships created after this timestamp.\n\n- `created_before?: string`\n  Only return memberships created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'id' | 'created_at' | 'status' | 'canceled_at' | 'date_joined' | 'total_spend'`\n  Which columns can be used to sort.\n\n- `plan_ids?: string[]`\n  Filter to only memberships belonging to these plan identifiers.\n\n- `product_ids?: string[]`\n  Filter to only memberships belonging to these product identifiers.\n\n- `promo_code_ids?: string[]`\n  Filter to only memberships that used these promo code identifiers.\n\n- `statuses?: string[]`\n  Filter to only memberships matching these statuses.\n\n- `user_ids?: string[]`\n  Filter to only memberships belonging to these user identifiers.\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const membershipListResponse of client.memberships.list()) {\n  console.log(membershipListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const membershipListResponse of client.memberships.list()) {\n  console.log(membershipListResponse.id);\n}",
      },
      python: {
        method: 'memberships.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.memberships.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'memberships.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.memberships.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/memberships/{id}',
    httpMethod: 'get',
    summary: 'Retrieve membership',
    description:
      'Retrieves the details of an existing membership.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`',
    stainlessPath: '(resource) memberships > (method) retrieve',
    qualified: 'client.memberships.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## retrieve\n\n`client.memberships.retrieve(id: string): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**get** `/memberships/{id}`\n\nRetrieves the details of an existing membership.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.retrieve('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.retrieve('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.retrieve(\n    "mem_xxxxxxxxxxxxxx",\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.retrieve("mem_xxxxxxxxxxxxxx")\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/memberships/{id}',
    httpMethod: 'patch',
    summary: 'Update membership',
    description:
      "Update a membership's metadata or other mutable properties.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`",
    stainlessPath: '(resource) memberships > (method) update',
    qualified: 'client.memberships.update',
    params: ['id: string;', 'metadata?: object;'],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## update\n\n`client.memberships.update(id: string, metadata?: object): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**patch** `/memberships/{id}`\n\nUpdate a membership's metadata or other mutable properties.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `metadata?: object`\n  A JSON object of key-value pairs to store on the membership. Replaces any existing metadata.\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.update('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.update('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.update(\n    id="mem_xxxxxxxxxxxxxx",\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.update("mem_xxxxxxxxxxxxxx")\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'cancel',
    endpoint: '/memberships/{id}/cancel',
    httpMethod: 'post',
    summary: 'Cancel membership',
    description:
      'Cancel a membership either immediately or at the end of the current billing period. Immediate cancellation revokes access right away.\n\nRequired permissions:\n - `membership:cancel`\n - `member:email:read`\n - `member:basic:read`',
    stainlessPath: '(resource) memberships > (method) cancel',
    qualified: 'client.memberships.cancel',
    params: ['id: string;', "cancellation_mode?: 'at_period_end' | 'immediate';"],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## cancel\n\n`client.memberships.cancel(id: string, cancellation_mode?: 'at_period_end' | 'immediate'): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**post** `/memberships/{id}/cancel`\n\nCancel a membership either immediately or at the end of the current billing period. Immediate cancellation revokes access right away.\n\nRequired permissions:\n - `membership:cancel`\n - `member:email:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `cancellation_mode?: 'at_period_end' | 'immediate'`\n  The mode of cancellation for a membership\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.cancel('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.cancel',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.cancel('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.cancel',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.cancel(\n    id="mem_xxxxxxxxxxxxxx",\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.cancel',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.cancel("mem_xxxxxxxxxxxxxx")\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID/cancel \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'pause',
    endpoint: '/memberships/{id}/pause',
    httpMethod: 'post',
    summary: 'Pause membership',
    description:
      "Pause a membership's recurring payments. The customer retains access but will not be charged until the membership is resumed.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`",
    stainlessPath: '(resource) memberships > (method) pause',
    qualified: 'client.memberships.pause',
    params: ['id: string;', 'void_payments?: boolean;'],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## pause\n\n`client.memberships.pause(id: string, void_payments?: boolean): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**post** `/memberships/{id}/pause`\n\nPause a membership's recurring payments. The customer retains access but will not be charged until the membership is resumed.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `void_payments?: boolean`\n  Whether to void any outstanding past-due payments on this membership, preventing future collection attempts.\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.pause('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.pause',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.pause('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.pause',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.pause(\n    id="mem_xxxxxxxxxxxxxx",\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.pause',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.pause("mem_xxxxxxxxxxxxxx")\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID/pause \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'resume',
    endpoint: '/memberships/{id}/resume',
    httpMethod: 'post',
    summary: 'Resume membership',
    description:
      "Resume a previously paused membership's recurring payments. Billing resumes on the next cycle.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`",
    stainlessPath: '(resource) memberships > (method) resume',
    qualified: 'client.memberships.resume',
    params: ['id: string;'],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## resume\n\n`client.memberships.resume(id: string): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**post** `/memberships/{id}/resume`\n\nResume a previously paused membership's recurring payments. Billing resumes on the next cycle.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.resume('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.resume',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.resume('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.resume',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.resume(\n    "mem_xxxxxxxxxxxxxx",\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.resume',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.resume("mem_xxxxxxxxxxxxxx")\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID/resume \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'uncancel',
    endpoint: '/memberships/{id}/uncancel',
    httpMethod: 'post',
    summary: 'Uncancel membership',
    description:
      'Reverse a pending cancellation for a membership that was scheduled to cancel at period end.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`',
    stainlessPath: '(resource) memberships > (method) uncancel',
    qualified: 'client.memberships.uncancel',
    params: ['id: string;'],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## uncancel\n\n`client.memberships.uncancel(id: string): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**post** `/memberships/{id}/uncancel`\n\nReverse a pending cancellation for a membership that was scheduled to cancel at period end.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.uncancel('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.uncancel',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.uncancel('mem_xxxxxxxxxxxxxx');\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.uncancel',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.uncancel(\n    "mem_xxxxxxxxxxxxxx",\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.uncancel',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.uncancel("mem_xxxxxxxxxxxxxx")\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID/uncancel \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'add_free_days',
    endpoint: '/memberships/{id}/add_free_days',
    httpMethod: 'post',
    summary: 'Add free days membership',
    description:
      "Add free days to extend a membership's current billing period, expiration date, or Stripe trial.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`",
    stainlessPath: '(resource) memberships > (method) add_free_days',
    qualified: 'client.memberships.addFreeDays',
    params: ['id: string;', 'free_days: number;'],
    response:
      '{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## add_free_days\n\n`client.memberships.addFreeDays(id: string, free_days: number): { id: string; cancel_at_period_end: boolean; cancel_option: cancel_options; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; custom_field_responses: object[]; joined_at: string; license_key: string; manage_url: string; member: object; metadata: object; payment_collection_paused: boolean; plan: object; product: object; promo_code: object; renewal_period_end: string; renewal_period_start: string; status: membership_status; updated_at: string; user: object; }`\n\n**post** `/memberships/{id}/add_free_days`\n\nAdd free days to extend a membership's current billing period, expiration date, or Stripe trial.\n\nRequired permissions:\n - `member:manage`\n - `member:email:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `free_days: number`\n  The number of free days to add (1-1095). Extends the billing period, expiration date, or Stripe trial depending on plan type.\n\n### Returns\n\n- `{ id: string; cancel_at_period_end: boolean; cancel_option: string; canceled_at: string; cancellation_reason: string; checkout_configuration_id: string; company: { id: string; title: string; }; created_at: string; currency: string; custom_field_responses: { id: string; answer: string; question: string; }[]; joined_at: string; license_key: string; manage_url: string; member: { id: string; }; metadata: object; payment_collection_paused: boolean; plan: { id: string; }; product: { id: string; title: string; }; promo_code: { id: string; }; renewal_period_end: string; renewal_period_start: string; status: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A membership represents an active relationship between a user and a product. It tracks the user's access, billing status, and renewal schedule.\n\n  - `id: string`\n  - `cancel_at_period_end: boolean`\n  - `cancel_option: string`\n  - `canceled_at: string`\n  - `cancellation_reason: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `custom_field_responses: { id: string; answer: string; question: string; }[]`\n  - `joined_at: string`\n  - `license_key: string`\n  - `manage_url: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `payment_collection_paused: boolean`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `promo_code: { id: string; }`\n  - `renewal_period_end: string`\n  - `renewal_period_start: string`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst membership = await client.memberships.addFreeDays('mem_xxxxxxxxxxxxxx', { free_days: 42 });\n\nconsole.log(membership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memberships.addFreeDays',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst membership = await client.memberships.addFreeDays('mem_xxxxxxxxxxxxxx', { free_days: 42 });\n\nconsole.log(membership.id);",
      },
      python: {
        method: 'memberships.add_free_days',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmembership = client.memberships.add_free_days(\n    id="mem_xxxxxxxxxxxxxx",\n    free_days=42,\n)\nprint(membership.id)',
      },
      ruby: {
        method: 'memberships.add_free_days',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmembership = whop.memberships.add_free_days("mem_xxxxxxxxxxxxxx", free_days: 42)\n\nputs(membership)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/memberships/$ID/add_free_days \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "free_days": 42\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/authorized_users',
    httpMethod: 'get',
    summary: 'List authorized users',
    description:
      'Returns a paginated list of authorized team members for a company, with optional filtering by user, role, and creation date.\n\nRequired permissions:\n - `company:authorized_user:read`\n - `member:email:read`',
    stainlessPath: '(resource) authorized_users > (method) list',
    qualified: 'client.authorizedUsers.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'first?: number;',
      'last?: number;',
      'role?: string;',
      'user_id?: string;',
    ],
    response:
      '{ id: string; company: { id: string; title: string; }; role: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## list\n\n`client.authorizedUsers.list(after?: string, before?: string, company_id?: string, created_after?: string, created_before?: string, first?: number, last?: number, role?: string, user_id?: string): { id: string; company: object; role: authorized_user_roles; user: object; }`\n\n**get** `/authorized_users`\n\nReturns a paginated list of authorized team members for a company, with optional filtering by user, role, and creation date.\n\nRequired permissions:\n - `company:authorized_user:read`\n - `member:email:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of the company to list authorized users for.\n\n- `created_after?: string`\n  Only return authorized users created after this timestamp.\n\n- `created_before?: string`\n  Only return authorized users created before this timestamp.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `role?: string`\n  Possible roles an authorized user can have\n\n- `user_id?: string`\n  Filter results to a specific user to check if they are an authorized team member.\n\n### Returns\n\n- `{ id: string; company: { id: string; title: string; }; role: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A user who has been granted administrative access to manage a company's dashboard and settings.\n\n  - `id: string`\n  - `company: { id: string; title: string; }`\n  - `role: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const authorizedUserListResponse of client.authorizedUsers.list()) {\n  console.log(authorizedUserListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.authorizedUsers.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const authorizedUserListResponse of client.authorizedUsers.list()) {\n  console.log(authorizedUserListResponse.id);\n}",
      },
      python: {
        method: 'authorized_users.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.authorized_users.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'authorized_users.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.authorized_users.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/authorized_users \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/authorized_users/{id}',
    httpMethod: 'get',
    summary: 'Retrieve authorized user',
    description:
      'Retrieves the details of an existing authorized user.\n\nRequired permissions:\n - `company:authorized_user:read`\n - `member:email:read`',
    stainlessPath: '(resource) authorized_users > (method) retrieve',
    qualified: 'client.authorizedUsers.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; company: { id: string; title: string; }; role: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## retrieve\n\n`client.authorizedUsers.retrieve(id: string): { id: string; company: object; role: authorized_user_roles; user: object; }`\n\n**get** `/authorized_users/{id}`\n\nRetrieves the details of an existing authorized user.\n\nRequired permissions:\n - `company:authorized_user:read`\n - `member:email:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; company: { id: string; title: string; }; role: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A user who has been granted administrative access to manage a company's dashboard and settings.\n\n  - `id: string`\n  - `company: { id: string; title: string; }`\n  - `role: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst authorizedUser = await client.authorizedUsers.retrieve('ausr_xxxxxxxxxxxxx');\n\nconsole.log(authorizedUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.authorizedUsers.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst authorizedUser = await client.authorizedUsers.retrieve('ausr_xxxxxxxxxxxxx');\n\nconsole.log(authorizedUser.id);",
      },
      python: {
        method: 'authorized_users.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nauthorized_user = client.authorized_users.retrieve(\n    "ausr_xxxxxxxxxxxxx",\n)\nprint(authorized_user.id)',
      },
      ruby: {
        method: 'authorized_users.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nauthorized_user = whop.authorized_users.retrieve("ausr_xxxxxxxxxxxxx")\n\nputs(authorized_user)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/authorized_users/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/authorized_users',
    httpMethod: 'post',
    summary: 'Create authorized user',
    description:
      'Add a new authorized user to a company.\n\nRequired permissions:\n - `authorized_user:create`\n - `member:email:read`',
    stainlessPath: '(resource) authorized_users > (method) create',
    qualified: 'client.authorizedUsers.create',
    params: ['company_id: string;', 'role: string;', 'user_id: string;', 'send_emails?: boolean;'],
    response:
      '{ id: string; company: { id: string; title: string; }; role: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## create\n\n`client.authorizedUsers.create(company_id: string, role: string, user_id: string, send_emails?: boolean): { id: string; company: object; role: authorized_user_roles; user: object; }`\n\n**post** `/authorized_users`\n\nAdd a new authorized user to a company.\n\nRequired permissions:\n - `authorized_user:create`\n - `member:email:read`\n\n### Parameters\n\n- `company_id: string`\n  The ID of the company to add the authorized user to.\n\n- `role: string`\n  The role to assign to the authorized user within the company. Supported roles: 'moderator', 'sales_manager'.\n\n- `user_id: string`\n  The ID of the user to add as an authorized user.\n\n- `send_emails?: boolean`\n  Whether to send notification emails to the user on creation.\n\n### Returns\n\n- `{ id: string; company: { id: string; title: string; }; role: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A user who has been granted administrative access to manage a company's dashboard and settings.\n\n  - `id: string`\n  - `company: { id: string; title: string; }`\n  - `role: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst authorizedUser = await client.authorizedUsers.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  role: 'owner',\n  user_id: 'user_xxxxxxxxxxxxx',\n});\n\nconsole.log(authorizedUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.authorizedUsers.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst authorizedUser = await client.authorizedUsers.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  role: 'owner',\n  user_id: 'user_xxxxxxxxxxxxx',\n});\n\nconsole.log(authorizedUser.id);",
      },
      python: {
        method: 'authorized_users.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nauthorized_user = client.authorized_users.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    role="owner",\n    user_id="user_xxxxxxxxxxxxx",\n)\nprint(authorized_user.id)',
      },
      ruby: {
        method: 'authorized_users.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nauthorized_user = whop.authorized_users.create(\n  company_id: "biz_xxxxxxxxxxxxxx",\n  role: :owner,\n  user_id: "user_xxxxxxxxxxxxx"\n)\n\nputs(authorized_user)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/authorized_users \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "role": "owner",\n          "user_id": "user_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/authorized_users/{id}',
    httpMethod: 'delete',
    summary: 'Delete authorized user',
    description:
      'Remove an authorized user from a company.\n\nRequired permissions:\n - `authorized_user:delete`',
    stainlessPath: '(resource) authorized_users > (method) delete',
    qualified: 'client.authorizedUsers.delete',
    params: ['id: string;', 'company_id?: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.authorizedUsers.delete(id: string, company_id?: string): boolean`\n\n**delete** `/authorized_users/{id}`\n\nRemove an authorized user from a company.\n\nRequired permissions:\n - `authorized_user:delete`\n\n### Parameters\n\n- `id: string`\n\n- `company_id?: string`\n  The ID of the company the authorized user belongs to. Optional if the authorized user ID is provided.\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst authorizedUser = await client.authorizedUsers.delete('ausr_xxxxxxxxxxxxx');\n\nconsole.log(authorizedUser);\n```",
    perLanguage: {
      typescript: {
        method: 'client.authorizedUsers.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst authorizedUser = await client.authorizedUsers.delete('ausr_xxxxxxxxxxxxx');\n\nconsole.log(authorizedUser);",
      },
      python: {
        method: 'authorized_users.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nauthorized_user = client.authorized_users.delete(\n    id="ausr_xxxxxxxxxxxxx",\n)\nprint(authorized_user)',
      },
      ruby: {
        method: 'authorized_users.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nauthorized_user = whop.authorized_users.delete("ausr_xxxxxxxxxxxxx")\n\nputs(authorized_user)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/authorized_users/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/app_builds',
    httpMethod: 'get',
    summary: 'List app builds',
    description:
      'Returns a paginated list of build artifacts for a given app, with optional filtering by platform, status, and creation date.\n\nRequired permissions:\n - `developer:manage_builds`',
    stainlessPath: '(resource) app_builds > (method) list',
    qualified: 'client.appBuilds.list',
    params: [
      'app_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'first?: number;',
      'last?: number;',
      "platform?: 'ios' | 'android' | 'web';",
      "status?: 'draft' | 'pending' | 'approved' | 'rejected';",
    ],
    response:
      "{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }",
    markdown:
      "## list\n\n`client.appBuilds.list(app_id: string, after?: string, before?: string, created_after?: string, created_before?: string, first?: number, last?: number, platform?: 'ios' | 'android' | 'web', status?: 'draft' | 'pending' | 'approved' | 'rejected'): { id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: app_build_platforms; review_message: string; status: app_build_statuses; supported_app_view_types: app_view_type[]; }`\n\n**get** `/app_builds`\n\nReturns a paginated list of build artifacts for a given app, with optional filtering by platform, status, and creation date.\n\nRequired permissions:\n - `developer:manage_builds`\n\n### Parameters\n\n- `app_id: string`\n  The unique identifier of the app to list builds for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return builds created after this timestamp.\n\n- `created_before?: string`\n  Only return builds created before this timestamp.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `platform?: 'ios' | 'android' | 'web'`\n  The different platforms an app build can target.\n\n- `status?: 'draft' | 'pending' | 'approved' | 'rejected'`\n  The different statuses an AppBuild can be in.\n\n### Returns\n\n- `{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }`\n  A versioned build artifact for a Whop React Native App, submitted for review and deployment to a specific platform.\n\n  - `id: string`\n  - `checksum: string`\n  - `created_at: string`\n  - `file_url: string`\n  - `is_production: boolean`\n  - `platform: 'ios' | 'android' | 'web'`\n  - `review_message: string`\n  - `status: 'draft' | 'pending' | 'approved' | 'rejected'`\n  - `supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const appBuildListResponse of client.appBuilds.list({ app_id: 'app_xxxxxxxxxxxxxx' })) {\n  console.log(appBuildListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.appBuilds.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const appBuildListResponse of client.appBuilds.list({ app_id: 'app_xxxxxxxxxxxxxx' })) {\n  console.log(appBuildListResponse.id);\n}",
      },
      python: {
        method: 'app_builds.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.app_builds.list(\n    app_id="app_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'app_builds.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.app_builds.list(app_id: "app_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/app_builds \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/app_builds',
    httpMethod: 'post',
    summary: 'Create app build',
    description:
      'Upload a new build artifact for an app. The build must include a compiled code bundle for the specified platform.\n\nRequired permissions:\n - `developer:manage_builds`',
    stainlessPath: '(resource) app_builds > (method) create',
    qualified: 'client.appBuilds.create',
    params: [
      'attachment: { id: string; };',
      'checksum: string;',
      "platform: 'ios' | 'android' | 'web';",
      'ai_prompt_id?: string;',
      'app_id?: string;',
      "supported_app_view_types?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[];",
    ],
    response:
      "{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }",
    markdown:
      "## create\n\n`client.appBuilds.create(attachment: { id: string; }, checksum: string, platform: 'ios' | 'android' | 'web', ai_prompt_id?: string, app_id?: string, supported_app_view_types?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]): { id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: app_build_platforms; review_message: string; status: app_build_statuses; supported_app_view_types: app_view_type[]; }`\n\n**post** `/app_builds`\n\nUpload a new build artifact for an app. The build must include a compiled code bundle for the specified platform.\n\nRequired permissions:\n - `developer:manage_builds`\n\n### Parameters\n\n- `attachment: { id: string; }`\n  The build file to upload. For iOS and Android, this should be a .zip archive containing a main_js_bundle.hbc file and an optional assets folder. For web, this should be a JavaScript file.\n  - `id: string`\n    The ID of an existing file object.\n\n- `checksum: string`\n  A client-generated checksum of the build file, used to verify file integrity when unpacked on a device.\n\n- `platform: 'ios' | 'android' | 'web'`\n  The target platform for the build. Accepted values: ios, android, web.\n\n- `ai_prompt_id?: string`\n  The identifier of the AI prompt that generated this build, if applicable.\n\n- `app_id?: string`\n  The unique identifier of the app to create the build for. Defaults to the app associated with the current API key.\n\n- `supported_app_view_types?: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]`\n  The view types this build supports. A build can support multiple view types but should only list the ones its code implements.\n\n### Returns\n\n- `{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }`\n  A versioned build artifact for a Whop React Native App, submitted for review and deployment to a specific platform.\n\n  - `id: string`\n  - `checksum: string`\n  - `created_at: string`\n  - `file_url: string`\n  - `is_production: boolean`\n  - `platform: 'ios' | 'android' | 'web'`\n  - `review_message: string`\n  - `status: 'draft' | 'pending' | 'approved' | 'rejected'`\n  - `supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst appBuild = await client.appBuilds.create({\n  attachment: { id: 'id' },\n  checksum: 'checksum',\n  platform: 'ios',\n});\n\nconsole.log(appBuild);\n```",
    perLanguage: {
      typescript: {
        method: 'client.appBuilds.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst appBuild = await client.appBuilds.create({\n  attachment: { id: 'id' },\n  checksum: 'checksum',\n  platform: 'ios',\n});\n\nconsole.log(appBuild.id);",
      },
      python: {
        method: 'app_builds.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\napp_build = client.app_builds.create(\n    attachment={\n        "id": "id"\n    },\n    checksum="checksum",\n    platform="ios",\n)\nprint(app_build.id)',
      },
      ruby: {
        method: 'app_builds.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\napp_build = whop.app_builds.create(attachment: {id: "id"}, checksum: "checksum", platform: :ios)\n\nputs(app_build)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/app_builds \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "attachment": {\n            "id": "id"\n          },\n          "checksum": "checksum",\n          "platform": "ios",\n          "ai_prompt_id": "prmt_xxxxxxxxxxxxx",\n          "app_id": "app_xxxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/app_builds/{id}',
    httpMethod: 'get',
    summary: 'Retrieve app build',
    description:
      'Retrieves the details of an existing app build.\n\nRequired permissions:\n - `developer:manage_builds`',
    stainlessPath: '(resource) app_builds > (method) retrieve',
    qualified: 'client.appBuilds.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }",
    markdown:
      "## retrieve\n\n`client.appBuilds.retrieve(id: string): { id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: app_build_platforms; review_message: string; status: app_build_statuses; supported_app_view_types: app_view_type[]; }`\n\n**get** `/app_builds/{id}`\n\nRetrieves the details of an existing app build.\n\nRequired permissions:\n - `developer:manage_builds`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }`\n  A versioned build artifact for a Whop React Native App, submitted for review and deployment to a specific platform.\n\n  - `id: string`\n  - `checksum: string`\n  - `created_at: string`\n  - `file_url: string`\n  - `is_production: boolean`\n  - `platform: 'ios' | 'android' | 'web'`\n  - `review_message: string`\n  - `status: 'draft' | 'pending' | 'approved' | 'rejected'`\n  - `supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst appBuild = await client.appBuilds.retrieve('apbu_xxxxxxxxxxxxx');\n\nconsole.log(appBuild);\n```",
    perLanguage: {
      typescript: {
        method: 'client.appBuilds.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst appBuild = await client.appBuilds.retrieve('apbu_xxxxxxxxxxxxx');\n\nconsole.log(appBuild.id);",
      },
      python: {
        method: 'app_builds.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\napp_build = client.app_builds.retrieve(\n    "apbu_xxxxxxxxxxxxx",\n)\nprint(app_build.id)',
      },
      ruby: {
        method: 'app_builds.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\napp_build = whop.app_builds.retrieve("apbu_xxxxxxxxxxxxx")\n\nputs(app_build)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/app_builds/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'promote',
    endpoint: '/app_builds/{id}/promote',
    httpMethod: 'post',
    summary: 'Promote app build',
    description:
      'Promote an approved or draft app build to production so it becomes the active version served to users.\n\nRequired permissions:\n - `developer:manage_builds`',
    stainlessPath: '(resource) app_builds > (method) promote',
    qualified: 'client.appBuilds.promote',
    params: ['id: string;'],
    response:
      "{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }",
    markdown:
      "## promote\n\n`client.appBuilds.promote(id: string): { id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: app_build_platforms; review_message: string; status: app_build_statuses; supported_app_view_types: app_view_type[]; }`\n\n**post** `/app_builds/{id}/promote`\n\nPromote an approved or draft app build to production so it becomes the active version served to users.\n\nRequired permissions:\n - `developer:manage_builds`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; checksum: string; created_at: string; file_url: string; is_production: boolean; platform: 'ios' | 'android' | 'web'; review_message: string; status: 'draft' | 'pending' | 'approved' | 'rejected'; supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]; }`\n  A versioned build artifact for a Whop React Native App, submitted for review and deployment to a specific platform.\n\n  - `id: string`\n  - `checksum: string`\n  - `created_at: string`\n  - `file_url: string`\n  - `is_production: boolean`\n  - `platform: 'ios' | 'android' | 'web'`\n  - `review_message: string`\n  - `status: 'draft' | 'pending' | 'approved' | 'rejected'`\n  - `supported_app_view_types: 'hub' | 'discover' | 'dash' | 'dashboard' | 'analytics' | 'skills' | 'openapi'[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst appBuild = await client.appBuilds.promote('apbu_xxxxxxxxxxxxx');\n\nconsole.log(appBuild);\n```",
    perLanguage: {
      typescript: {
        method: 'client.appBuilds.promote',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst appBuild = await client.appBuilds.promote('apbu_xxxxxxxxxxxxx');\n\nconsole.log(appBuild.id);",
      },
      python: {
        method: 'app_builds.promote',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\napp_build = client.app_builds.promote(\n    "apbu_xxxxxxxxxxxxx",\n)\nprint(app_build.id)',
      },
      ruby: {
        method: 'app_builds.promote',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\napp_build = whop.app_builds.promote("apbu_xxxxxxxxxxxxx")\n\nputs(app_build)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/app_builds/$ID/promote \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/shipments',
    httpMethod: 'get',
    summary: 'List shipments',
    description:
      'Returns a paginated list of shipments, with optional filtering by payment, company, or user.\n\nRequired permissions:\n - `shipment:basic:read`\n - `payment:basic:read`',
    stainlessPath: '(resource) shipments > (method) list',
    qualified: 'client.shipments.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'first?: number;',
      'last?: number;',
      'payment_id?: string;',
      'user_id?: string;',
    ],
    response:
      '{ id: string; carrier: string; created_at: string; delivery_estimate: string; payment: { id: string; }; service: string; status: string; substatus: string; tracking_code: string; updated_at: string; }',
    markdown:
      "## list\n\n`client.shipments.list(after?: string, before?: string, company_id?: string, first?: number, last?: number, payment_id?: string, user_id?: string): { id: string; carrier: shipment_carrier; created_at: string; delivery_estimate: string; payment: object; service: string; status: shipment_status; substatus: shipment_substatus; tracking_code: string; updated_at: string; }`\n\n**get** `/shipments`\n\nReturns a paginated list of shipments, with optional filtering by payment, company, or user.\n\nRequired permissions:\n - `shipment:basic:read`\n - `payment:basic:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  Filter shipments to only those belonging to this company.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `payment_id?: string`\n  Filter shipments to only those associated with this specific payment.\n\n- `user_id?: string`\n  Filter shipments to only those for this specific user.\n\n### Returns\n\n- `{ id: string; carrier: string; created_at: string; delivery_estimate: string; payment: { id: string; }; service: string; status: string; substatus: string; tracking_code: string; updated_at: string; }`\n  A physical shipment associated with a payment, including carrier details and tracking information.\n\n  - `id: string`\n  - `carrier: string`\n  - `created_at: string`\n  - `delivery_estimate: string`\n  - `payment: { id: string; }`\n  - `service: string`\n  - `status: string`\n  - `substatus: string`\n  - `tracking_code: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const shipmentListResponse of client.shipments.list()) {\n  console.log(shipmentListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.shipments.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const shipmentListResponse of client.shipments.list()) {\n  console.log(shipmentListResponse.id);\n}",
      },
      python: {
        method: 'shipments.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.shipments.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'shipments.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.shipments.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/shipments \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/shipments',
    httpMethod: 'post',
    summary: 'Create shipment',
    description:
      'Create a new shipment with a tracking code for a specific payment within a company.\n\nRequired permissions:\n - `shipment:create`\n - `payment:basic:read`',
    stainlessPath: '(resource) shipments > (method) create',
    qualified: 'client.shipments.create',
    params: ['company_id: string;', 'payment_id: string;', 'tracking_code: string;'],
    response:
      '{ id: string; carrier: string; created_at: string; delivery_estimate: string; payment: { id: string; }; service: string; status: string; substatus: string; tracking_code: string; updated_at: string; }',
    markdown:
      "## create\n\n`client.shipments.create(company_id: string, payment_id: string, tracking_code: string): { id: string; carrier: shipment_carrier; created_at: string; delivery_estimate: string; payment: object; service: string; status: shipment_status; substatus: shipment_substatus; tracking_code: string; updated_at: string; }`\n\n**post** `/shipments`\n\nCreate a new shipment with a tracking code for a specific payment within a company.\n\nRequired permissions:\n - `shipment:create`\n - `payment:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create the shipment for, starting with 'biz_'.\n\n- `payment_id: string`\n  The unique identifier of the payment to associate the shipment with.\n\n- `tracking_code: string`\n  The carrier tracking code for the shipment, such as a USPS, UPS, or FedEx tracking number.\n\n### Returns\n\n- `{ id: string; carrier: string; created_at: string; delivery_estimate: string; payment: { id: string; }; service: string; status: string; substatus: string; tracking_code: string; updated_at: string; }`\n  A physical shipment associated with a payment, including carrier details and tracking information.\n\n  - `id: string`\n  - `carrier: string`\n  - `created_at: string`\n  - `delivery_estimate: string`\n  - `payment: { id: string; }`\n  - `service: string`\n  - `status: string`\n  - `substatus: string`\n  - `tracking_code: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst shipment = await client.shipments.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  payment_id: 'pay_xxxxxxxxxxxxxx',\n  tracking_code: 'tracking_code',\n});\n\nconsole.log(shipment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.shipments.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst shipment = await client.shipments.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  payment_id: 'pay_xxxxxxxxxxxxxx',\n  tracking_code: 'tracking_code',\n});\n\nconsole.log(shipment.id);",
      },
      python: {
        method: 'shipments.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nshipment = client.shipments.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    payment_id="pay_xxxxxxxxxxxxxx",\n    tracking_code="tracking_code",\n)\nprint(shipment.id)',
      },
      ruby: {
        method: 'shipments.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nshipment = whop.shipments.create(\n  company_id: "biz_xxxxxxxxxxxxxx",\n  payment_id: "pay_xxxxxxxxxxxxxx",\n  tracking_code: "tracking_code"\n)\n\nputs(shipment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/shipments \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "payment_id": "pay_xxxxxxxxxxxxxx",\n          "tracking_code": "tracking_code"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/shipments/{id}',
    httpMethod: 'get',
    summary: 'Retrieve shipment',
    description:
      'Retrieves the details of an existing shipment.\n\nRequired permissions:\n - `shipment:basic:read`\n - `payment:basic:read`',
    stainlessPath: '(resource) shipments > (method) retrieve',
    qualified: 'client.shipments.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; carrier: string; created_at: string; delivery_estimate: string; payment: { id: string; }; service: string; status: string; substatus: string; tracking_code: string; updated_at: string; }',
    markdown:
      "## retrieve\n\n`client.shipments.retrieve(id: string): { id: string; carrier: shipment_carrier; created_at: string; delivery_estimate: string; payment: object; service: string; status: shipment_status; substatus: shipment_substatus; tracking_code: string; updated_at: string; }`\n\n**get** `/shipments/{id}`\n\nRetrieves the details of an existing shipment.\n\nRequired permissions:\n - `shipment:basic:read`\n - `payment:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; carrier: string; created_at: string; delivery_estimate: string; payment: { id: string; }; service: string; status: string; substatus: string; tracking_code: string; updated_at: string; }`\n  A physical shipment associated with a payment, including carrier details and tracking information.\n\n  - `id: string`\n  - `carrier: string`\n  - `created_at: string`\n  - `delivery_estimate: string`\n  - `payment: { id: string; }`\n  - `service: string`\n  - `status: string`\n  - `substatus: string`\n  - `tracking_code: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst shipment = await client.shipments.retrieve('ship_xxxxxxxxxxxxx');\n\nconsole.log(shipment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.shipments.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst shipment = await client.shipments.retrieve('ship_xxxxxxxxxxxxx');\n\nconsole.log(shipment.id);",
      },
      python: {
        method: 'shipments.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nshipment = client.shipments.retrieve(\n    "ship_xxxxxxxxxxxxx",\n)\nprint(shipment.id)',
      },
      ruby: {
        method: 'shipments.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nshipment = whop.shipments.retrieve("ship_xxxxxxxxxxxxx")\n\nputs(shipment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/shipments/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/checkout_configurations',
    httpMethod: 'get',
    summary: 'List checkout configurations',
    description:
      'Returns a paginated list of checkout configurations for a company, with optional filtering by plan and creation date.\n\nRequired permissions:\n - `checkout_configuration:basic:read`',
    stainlessPath: '(resource) checkout_configurations > (method) list',
    qualified: 'client.checkoutConfigurations.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'plan_id?: string;',
    ],
    response:
      "{ id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: string; metadata: object; mode: 'payment' | 'setup'; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; purchase_url: string; redirect_url: string; }",
    markdown:
      "## list\n\n`client.checkoutConfigurations.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, plan_id?: string): { id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: currency; metadata: object; mode: checkout_modes; payment_method_configuration: object; plan: object; purchase_url: string; redirect_url: string; }`\n\n**get** `/checkout_configurations`\n\nReturns a paginated list of checkout configurations for a company, with optional filtering by plan and creation date.\n\nRequired permissions:\n - `checkout_configuration:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list checkout configurations for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return checkout configurations created after this timestamp.\n\n- `created_before?: string`\n  Only return checkout configurations created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `plan_id?: string`\n  Filter checkout configurations to only those associated with this plan identifier.\n\n### Returns\n\n- `{ id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: string; metadata: object; mode: 'payment' | 'setup'; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; purchase_url: string; redirect_url: string; }`\n  A checkout configuration is a reusable configuration for a checkout, including the plan, affiliate, and custom metadata. Payments and memberships created from a checkout session inherit its metadata.\n\n  - `id: string`\n  - `affiliate_code: string`\n  - `allow_promo_codes: boolean`\n  - `company_id: string`\n  - `currency: string`\n  - `metadata: object`\n  - `mode: 'payment' | 'setup'`\n  - `payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }`\n  - `plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  - `purchase_url: string`\n  - `redirect_url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const checkoutConfigurationListResponse of client.checkoutConfigurations.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(checkoutConfigurationListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.checkoutConfigurations.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const checkoutConfigurationListResponse of client.checkoutConfigurations.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(checkoutConfigurationListResponse.id);\n}",
      },
      python: {
        method: 'checkout_configurations.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.checkout_configurations.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'checkout_configurations.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.checkout_configurations.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/checkout_configurations \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/checkout_configurations',
    httpMethod: 'post',
    summary: 'Create checkout configuration',
    description:
      'Creates a new checkout configuration\n\nRequired permissions:\n - `checkout_configuration:create`\n - `plan:create`\n - `access_pass:create`\n - `access_pass:update`\n - `checkout_configuration:basic:read`',
    stainlessPath: '(resource) checkout_configurations > (method) create',
    qualified: 'client.checkoutConfigurations.create',
    params: [
      "{ plan: { company_id: string; currency: string; application_fee_amount?: number; billing_period?: number; custom_fields?: { field_type: 'text'; name: string; id?: string; order?: number; placeholder?: string; required?: boolean; }[]; description?: string; expiration_days?: number; force_create_new_plan?: boolean; image?: { id: string; }; initial_price?: number; internal_notes?: string; override_tax_type?: 'inclusive' | 'exclusive' | 'unspecified'; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; plan_type?: 'renewal' | 'one_time'; product?: { external_identifier: string; title: string; collect_shipping_address?: boolean; custom_statement_descriptor?: string; description?: string; global_affiliate_percentage?: number; global_affiliate_status?: 'enabled' | 'disabled'; headline?: string; product_tax_code_id?: string; redirect_purchase_url?: string; route?: string; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; product_id?: string; release_method?: 'buy_now' | 'waitlist'; renewal_price?: number; split_pay_required_payments?: number; stock?: number; title?: string; trial_period_days?: number; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; affiliate_code?: string; allow_promo_codes?: boolean; checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }; currency?: string; metadata?: object; mode?: 'payment'; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; redirect_url?: string; source_url?: string; } | { plan_id: string; affiliate_code?: string; allow_promo_codes?: boolean; checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }; currency?: string; metadata?: object; mode?: 'payment'; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; redirect_url?: string; source_url?: string; } | { company_id: string; mode: 'setup'; allow_promo_codes?: boolean; checkout_styling?: { background_color?: string; border_style?: 'rounded' | 'pill' | 'rectangular'; button_color?: string; font_family?: 'system' | 'roboto' | 'open_sans'; }; currency?: string; metadata?: object; payment_method_configuration?: { disabled: string[]; enabled: string[]; include_platform_defaults?: boolean; }; redirect_url?: string; source_url?: string; };",
    ],
    response:
      "{ id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: string; metadata: object; mode: 'payment' | 'setup'; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; purchase_url: string; redirect_url: string; }",
    perLanguage: {
      typescript: {
        method: 'client.checkoutConfigurations.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst checkoutConfiguration = await client.checkoutConfigurations.create({\n  plan: { company_id: 'biz_xxxxxxxxxxxxxx', currency: 'usd' },\n});\n\nconsole.log(checkoutConfiguration.id);",
      },
      python: {
        method: 'checkout_configurations.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncheckout_configuration = client.checkout_configurations.create(\n    plan={\n        "company_id": "biz_xxxxxxxxxxxxxx",\n        "currency": "usd",\n    },\n)\nprint(checkout_configuration.id)',
      },
      ruby: {
        method: 'checkout_configurations.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncheckout_configuration = whop.checkout_configurations.create(body: {plan: {company_id: "biz_xxxxxxxxxxxxxx", currency: :usd}})\n\nputs(checkout_configuration)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/checkout_configurations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "plan": {\n            "company_id": "biz_xxxxxxxxxxxxxx",\n            "currency": "usd"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/checkout_configurations/{id}',
    httpMethod: 'get',
    summary: 'Retrieve checkout configuration',
    description:
      'Retrieves the details of an existing checkout configuration.\n\nRequired permissions:\n - `checkout_configuration:basic:read`',
    stainlessPath: '(resource) checkout_configurations > (method) retrieve',
    qualified: 'client.checkoutConfigurations.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: string; metadata: object; mode: 'payment' | 'setup'; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; purchase_url: string; redirect_url: string; }",
    markdown:
      "## retrieve\n\n`client.checkoutConfigurations.retrieve(id: string): { id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: currency; metadata: object; mode: checkout_modes; payment_method_configuration: object; plan: object; purchase_url: string; redirect_url: string; }`\n\n**get** `/checkout_configurations/{id}`\n\nRetrieves the details of an existing checkout configuration.\n\nRequired permissions:\n - `checkout_configuration:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; affiliate_code: string; allow_promo_codes: boolean; company_id: string; currency: string; metadata: object; mode: 'payment' | 'setup'; payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }; plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; purchase_url: string; redirect_url: string; }`\n  A checkout configuration is a reusable configuration for a checkout, including the plan, affiliate, and custom metadata. Payments and memberships created from a checkout session inherit its metadata.\n\n  - `id: string`\n  - `affiliate_code: string`\n  - `allow_promo_codes: boolean`\n  - `company_id: string`\n  - `currency: string`\n  - `metadata: object`\n  - `mode: 'payment' | 'setup'`\n  - `payment_method_configuration: { disabled: string[]; enabled: string[]; include_platform_defaults: boolean; }`\n  - `plan: { id: string; billing_period: number; currency: string; expiration_days: number; initial_price: number; plan_type: 'renewal' | 'one_time'; release_method: 'buy_now' | 'waitlist'; renewal_price: number; trial_period_days: number; visibility: 'visible' | 'hidden' | 'archived' | 'quick_link'; }`\n  - `purchase_url: string`\n  - `redirect_url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst checkoutConfiguration = await client.checkoutConfigurations.retrieve('ch_xxxxxxxxxxxxxxx');\n\nconsole.log(checkoutConfiguration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.checkoutConfigurations.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst checkoutConfiguration = await client.checkoutConfigurations.retrieve('ch_xxxxxxxxxxxxxxx');\n\nconsole.log(checkoutConfiguration.id);",
      },
      python: {
        method: 'checkout_configurations.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncheckout_configuration = client.checkout_configurations.retrieve(\n    "ch_xxxxxxxxxxxxxxx",\n)\nprint(checkout_configuration.id)',
      },
      ruby: {
        method: 'checkout_configurations.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncheckout_configuration = whop.checkout_configurations.retrieve("ch_xxxxxxxxxxxxxxx")\n\nputs(checkout_configuration)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/checkout_configurations/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/messages',
    httpMethod: 'get',
    summary: 'List messages',
    description:
      'Returns a paginated list of messages within a specific experience chat, DM, or group chat channel, sorted by creation time.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) messages > (method) list',
    qualified: 'client.messages.list',
    params: [
      'channel_id: string;',
      'after?: string;',
      'before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }",
    markdown:
      "## list\n\n`client.messages.list(channel_id: string, after?: string, before?: string, direction?: 'asc' | 'desc', first?: number, last?: number): { id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: dms_post_types; poll: object; poll_votes: object[]; reaction_counts: object[]; replying_to_message_id: string; updated_at: string; user: object; view_count: number; }`\n\n**get** `/messages`\n\nReturns a paginated list of messages within a specific experience chat, DM, or group chat channel, sorted by creation time.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `channel_id: string`\n  The unique identifier of the channel or experience to list messages for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A message sent within an experience chat, direct message, or group chat.\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `mentions: string[]`\n  - `mentions_everyone: boolean`\n  - `message_type: 'regular' | 'system' | 'automated'`\n  - `poll: { options: { id: string; text: string; }[]; }`\n  - `poll_votes: { count: number; option_id: string; }[]`\n  - `reaction_counts: { count: number; emoji: string; }[]`\n  - `replying_to_message_id: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const messageListResponse of client.messages.list({ channel_id: 'channel_id' })) {\n  console.log(messageListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.messages.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const messageListResponse of client.messages.list({ channel_id: 'channel_id' })) {\n  console.log(messageListResponse.id);\n}",
      },
      python: {
        method: 'messages.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.messages.list(\n    channel_id="channel_id",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'messages.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.messages.list(channel_id: "channel_id")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/messages \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/messages/{id}',
    httpMethod: 'get',
    summary: 'Retrieve message',
    description: 'Retrieves the details of an existing message.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) messages > (method) retrieve',
    qualified: 'client.messages.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }",
    markdown:
      "## retrieve\n\n`client.messages.retrieve(id: string): { id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: dms_post_types; poll: object; poll_votes: object[]; reaction_counts: object[]; replying_to_message_id: string; updated_at: string; user: object; view_count: number; }`\n\n**get** `/messages/{id}`\n\nRetrieves the details of an existing message.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A message sent within an experience chat, direct message, or group chat.\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `mentions: string[]`\n  - `mentions_everyone: boolean`\n  - `message_type: 'regular' | 'system' | 'automated'`\n  - `poll: { options: { id: string; text: string; }[]; }`\n  - `poll_votes: { count: number; option_id: string; }[]`\n  - `reaction_counts: { count: number; emoji: string; }[]`\n  - `replying_to_message_id: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst message = await client.messages.retrieve('id');\n\nconsole.log(message);\n```",
    perLanguage: {
      typescript: {
        method: 'client.messages.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst message = await client.messages.retrieve('id');\n\nconsole.log(message.id);",
      },
      python: {
        method: 'messages.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmessage = client.messages.retrieve(\n    "id",\n)\nprint(message.id)',
      },
      ruby: {
        method: 'messages.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmessage = whop.messages.retrieve("id")\n\nputs(message)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/messages/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/messages',
    httpMethod: 'post',
    summary: 'Create message',
    description:
      'Send a new message in an experience chat, DM, or group chat channel. Supports text content, attachments, polls, and replies.\n\nRequired permissions:\n - `chat:message:create`',
    stainlessPath: '(resource) messages > (method) create',
    qualified: 'client.messages.create',
    params: [
      'channel_id: string;',
      'content: string;',
      'attachments?: { id: string; }[];',
      'auto_detect_links?: boolean;',
      'poll?: { options: { id: string; text: string; }[]; };',
      'replying_to_message_id?: string;',
    ],
    response:
      "{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }",
    markdown:
      "## create\n\n`client.messages.create(channel_id: string, content: string, attachments?: { id: string; }[], auto_detect_links?: boolean, poll?: { options: { id: string; text: string; }[]; }, replying_to_message_id?: string): { id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: dms_post_types; poll: object; poll_votes: object[]; reaction_counts: object[]; replying_to_message_id: string; updated_at: string; user: object; view_count: number; }`\n\n**post** `/messages`\n\nSend a new message in an experience chat, DM, or group chat channel. Supports text content, attachments, polls, and replies.\n\nRequired permissions:\n - `chat:message:create`\n\n### Parameters\n\n- `channel_id: string`\n  The unique identifier of the channel or experience to send the message in. For example, 'exp_xxxxx' or 'feed_xxxxx'.\n\n- `content: string`\n  The body of the message in Markdown format. For example, 'Hello **world**'.\n\n- `attachments?: { id: string; }[]`\n  A list of file attachments to include with the message, such as images or videos.\n\n- `auto_detect_links?: boolean`\n  Automatically detect URLs in the message and generate link previews.\n\n- `poll?: { options: { id: string; text: string; }[]; }`\n  A poll to attach to this message, allowing recipients to vote on options.\n  - `options: { id: string; text: string; }[]`\n    The options for the poll. Must have sequential IDs starting from 1\n\n- `replying_to_message_id?: string`\n  The unique identifier of the message this is replying to, creating a threaded reply.\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A message sent within an experience chat, direct message, or group chat.\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `mentions: string[]`\n  - `mentions_everyone: boolean`\n  - `message_type: 'regular' | 'system' | 'automated'`\n  - `poll: { options: { id: string; text: string; }[]; }`\n  - `poll_votes: { count: number; option_id: string; }[]`\n  - `reaction_counts: { count: number; emoji: string; }[]`\n  - `replying_to_message_id: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst message = await client.messages.create({ channel_id: 'channel_id', content: 'content' });\n\nconsole.log(message);\n```",
    perLanguage: {
      typescript: {
        method: 'client.messages.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst message = await client.messages.create({ channel_id: 'channel_id', content: 'content' });\n\nconsole.log(message.id);",
      },
      python: {
        method: 'messages.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmessage = client.messages.create(\n    channel_id="channel_id",\n    content="content",\n)\nprint(message.id)',
      },
      ruby: {
        method: 'messages.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmessage = whop.messages.create(channel_id: "channel_id", content: "content")\n\nputs(message)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/messages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "channel_id": "channel_id",\n          "content": "content"\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/messages/{id}',
    httpMethod: 'patch',
    summary: 'Update message',
    description:
      'Edit the content, attachments, or pinned status of an existing message in an experience chat, DM, or group chat channel.',
    stainlessPath: '(resource) messages > (method) update',
    qualified: 'client.messages.update',
    params: ['id: string;', 'attachments?: { id: string; }[];', 'content?: string;', 'is_pinned?: boolean;'],
    response:
      "{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }",
    markdown:
      "## update\n\n`client.messages.update(id: string, attachments?: { id: string; }[], content?: string, is_pinned?: boolean): { id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: dms_post_types; poll: object; poll_votes: object[]; reaction_counts: object[]; replying_to_message_id: string; updated_at: string; user: object; view_count: number; }`\n\n**patch** `/messages/{id}`\n\nEdit the content, attachments, or pinned status of an existing message in an experience chat, DM, or group chat channel.\n\n### Parameters\n\n- `id: string`\n\n- `attachments?: { id: string; }[]`\n  A replacement list of file attachments for this message, such as images or videos.\n\n- `content?: string`\n  The updated body of the message in Markdown format. For example, 'Hello **world**'.\n\n- `is_pinned?: boolean`\n  Whether this message should be pinned to the top of the channel.\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; is_edited: boolean; is_pinned: boolean; mentions: string[]; mentions_everyone: boolean; message_type: 'regular' | 'system' | 'automated'; poll: { options: { id: string; text: string; }[]; }; poll_votes: { count: number; option_id: string; }[]; reaction_counts: { count: number; emoji: string; }[]; replying_to_message_id: string; updated_at: string; user: { id: string; name: string; username: string; }; view_count: number; }`\n  A message sent within an experience chat, direct message, or group chat.\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `is_edited: boolean`\n  - `is_pinned: boolean`\n  - `mentions: string[]`\n  - `mentions_everyone: boolean`\n  - `message_type: 'regular' | 'system' | 'automated'`\n  - `poll: { options: { id: string; text: string; }[]; }`\n  - `poll_votes: { count: number; option_id: string; }[]`\n  - `reaction_counts: { count: number; emoji: string; }[]`\n  - `replying_to_message_id: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n  - `view_count: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst message = await client.messages.update('id');\n\nconsole.log(message);\n```",
    perLanguage: {
      typescript: {
        method: 'client.messages.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst message = await client.messages.update('id');\n\nconsole.log(message.id);",
      },
      python: {
        method: 'messages.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmessage = client.messages.update(\n    id="id",\n)\nprint(message.id)',
      },
      ruby: {
        method: 'messages.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmessage = whop.messages.update("id")\n\nputs(message)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/messages/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/messages/{id}',
    httpMethod: 'delete',
    summary: 'Delete message',
    description:
      'Permanently delete a message from an experience chat, DM, or group chat channel. Only the message author or a channel admin can delete a message.\n\nRequired permissions:\n - `chat:message:create`',
    stainlessPath: '(resource) messages > (method) delete',
    qualified: 'client.messages.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.messages.delete(id: string): boolean`\n\n**delete** `/messages/{id}`\n\nPermanently delete a message from an experience chat, DM, or group chat channel. Only the message author or a channel admin can delete a message.\n\nRequired permissions:\n - `chat:message:create`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst message = await client.messages.delete('id');\n\nconsole.log(message);\n```",
    perLanguage: {
      typescript: {
        method: 'client.messages.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst message = await client.messages.delete('id');\n\nconsole.log(message);",
      },
      python: {
        method: 'messages.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmessage = client.messages.delete(\n    "id",\n)\nprint(message)',
      },
      ruby: {
        method: 'messages.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmessage = whop.messages.delete("id")\n\nputs(message)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/messages/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/chat_channels',
    httpMethod: 'get',
    summary: 'List chat channels',
    description:
      'Returns a paginated list of chat channels within a specific company, with optional filtering by product.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) chat_channels > (method) list',
    qualified: 'client.chatChannels.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
      'product_id?: string;',
    ],
    response:
      "{ id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: { id: string; name: string; }; user_posts_cooldown_seconds: number; who_can_post: 'everyone' | 'admins'; who_can_react: 'everyone' | 'no_one'; }",
    markdown:
      "## list\n\n`client.chatChannels.list(company_id: string, after?: string, before?: string, first?: number, last?: number, product_id?: string): { id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: object; user_posts_cooldown_seconds: number; who_can_post: who_can_post; who_can_react: who_can_react; }`\n\n**get** `/chat_channels`\n\nReturns a paginated list of chat channels within a specific company, with optional filtering by product.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list chat channels for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `product_id?: string`\n  The unique identifier of a product to filter by. When set, only chat channels connected to this product are returned.\n\n### Returns\n\n- `{ id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: { id: string; name: string; }; user_posts_cooldown_seconds: number; who_can_post: 'everyone' | 'admins'; who_can_react: 'everyone' | 'no_one'; }`\n  A real-time chat feed attached to an experience, with configurable moderation and posting permissions.\n\n  - `id: string`\n  - `ban_media: boolean`\n  - `ban_urls: boolean`\n  - `banned_words: string[]`\n  - `experience: { id: string; name: string; }`\n  - `user_posts_cooldown_seconds: number`\n  - `who_can_post: 'everyone' | 'admins'`\n  - `who_can_react: 'everyone' | 'no_one'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const chatChannelListResponse of client.chatChannels.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(chatChannelListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.chatChannels.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const chatChannelListResponse of client.chatChannels.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(chatChannelListResponse.id);\n}",
      },
      python: {
        method: 'chat_channels.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.chat_channels.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'chat_channels.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.chat_channels.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/chat_channels \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/chat_channels/{id}',
    httpMethod: 'get',
    summary: 'Retrieve chat channel',
    description:
      'Retrieves the details of an existing chat channel.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) chat_channels > (method) retrieve',
    qualified: 'client.chatChannels.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: { id: string; name: string; }; user_posts_cooldown_seconds: number; who_can_post: 'everyone' | 'admins'; who_can_react: 'everyone' | 'no_one'; }",
    markdown:
      "## retrieve\n\n`client.chatChannels.retrieve(id: string): { id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: object; user_posts_cooldown_seconds: number; who_can_post: who_can_post; who_can_react: who_can_react; }`\n\n**get** `/chat_channels/{id}`\n\nRetrieves the details of an existing chat channel.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: { id: string; name: string; }; user_posts_cooldown_seconds: number; who_can_post: 'everyone' | 'admins'; who_can_react: 'everyone' | 'no_one'; }`\n  A real-time chat feed attached to an experience, with configurable moderation and posting permissions.\n\n  - `id: string`\n  - `ban_media: boolean`\n  - `ban_urls: boolean`\n  - `banned_words: string[]`\n  - `experience: { id: string; name: string; }`\n  - `user_posts_cooldown_seconds: number`\n  - `who_can_post: 'everyone' | 'admins'`\n  - `who_can_react: 'everyone' | 'no_one'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst chatChannel = await client.chatChannels.retrieve('id');\n\nconsole.log(chatChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.chatChannels.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst chatChannel = await client.chatChannels.retrieve('id');\n\nconsole.log(chatChannel.id);",
      },
      python: {
        method: 'chat_channels.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nchat_channel = client.chat_channels.retrieve(\n    "id",\n)\nprint(chat_channel.id)',
      },
      ruby: {
        method: 'chat_channels.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nchat_channel = whop.chat_channels.retrieve("id")\n\nputs(chat_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/chat_channels/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/chat_channels/{id}',
    httpMethod: 'patch',
    summary: 'Update chat channel',
    description:
      'Update moderation settings for a chat channel, such as who can post, banned words, and media restrictions.\n\nRequired permissions:\n - `chat:moderate`',
    stainlessPath: '(resource) chat_channels > (method) update',
    qualified: 'client.chatChannels.update',
    params: [
      'id: string;',
      'ban_media?: boolean;',
      'ban_urls?: boolean;',
      'banned_words?: string[];',
      'user_posts_cooldown_seconds?: number;',
      "who_can_post?: 'everyone' | 'admins';",
      "who_can_react?: 'everyone' | 'no_one';",
    ],
    response:
      "{ id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: { id: string; name: string; }; user_posts_cooldown_seconds: number; who_can_post: 'everyone' | 'admins'; who_can_react: 'everyone' | 'no_one'; }",
    markdown:
      "## update\n\n`client.chatChannels.update(id: string, ban_media?: boolean, ban_urls?: boolean, banned_words?: string[], user_posts_cooldown_seconds?: number, who_can_post?: 'everyone' | 'admins', who_can_react?: 'everyone' | 'no_one'): { id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: object; user_posts_cooldown_seconds: number; who_can_post: who_can_post; who_can_react: who_can_react; }`\n\n**patch** `/chat_channels/{id}`\n\nUpdate moderation settings for a chat channel, such as who can post, banned words, and media restrictions.\n\nRequired permissions:\n - `chat:moderate`\n\n### Parameters\n\n- `id: string`\n\n- `ban_media?: boolean`\n  Whether media uploads such as images and videos are banned in this chat channel.\n\n- `ban_urls?: boolean`\n  Whether URLs and links are banned from being posted in this chat channel.\n\n- `banned_words?: string[]`\n  A list of words that are automatically blocked from messages in this chat channel. For example, ['spam', 'scam'].\n\n- `user_posts_cooldown_seconds?: number`\n  The minimum number of seconds a user must wait between sending messages in this chat channel.\n\n- `who_can_post?: 'everyone' | 'admins'`\n  Who can post on a chat feed\n\n- `who_can_react?: 'everyone' | 'no_one'`\n  Who can react on a chat feed\n\n### Returns\n\n- `{ id: string; ban_media: boolean; ban_urls: boolean; banned_words: string[]; experience: { id: string; name: string; }; user_posts_cooldown_seconds: number; who_can_post: 'everyone' | 'admins'; who_can_react: 'everyone' | 'no_one'; }`\n  A real-time chat feed attached to an experience, with configurable moderation and posting permissions.\n\n  - `id: string`\n  - `ban_media: boolean`\n  - `ban_urls: boolean`\n  - `banned_words: string[]`\n  - `experience: { id: string; name: string; }`\n  - `user_posts_cooldown_seconds: number`\n  - `who_can_post: 'everyone' | 'admins'`\n  - `who_can_react: 'everyone' | 'no_one'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst chatChannel = await client.chatChannels.update('id');\n\nconsole.log(chatChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.chatChannels.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst chatChannel = await client.chatChannels.update('id');\n\nconsole.log(chatChannel.id);",
      },
      python: {
        method: 'chat_channels.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nchat_channel = client.chat_channels.update(\n    id="id",\n)\nprint(chat_channel.id)',
      },
      ruby: {
        method: 'chat_channels.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nchat_channel = whop.chat_channels.update("id")\n\nputs(chat_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/chat_channels/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/users/{id}',
    httpMethod: 'get',
    summary: 'Retrieve user',
    description: 'Retrieves the details of an existing user.',
    stainlessPath: '(resource) users > (method) retrieve',
    qualified: 'client.users.retrieve',
    params: ['id: string;', 'company_id?: string;'],
    response:
      '{ id: string; bio: string; created_at: string; name: string; profile_picture: { url: string; }; username: string; }',
    markdown:
      "## retrieve\n\n`client.users.retrieve(id: string, company_id?: string): { id: string; bio: string; created_at: string; name: string; profile_picture: object; username: string; }`\n\n**get** `/users/{id}`\n\nRetrieves the details of an existing user.\n\n### Parameters\n\n- `id: string`\n\n- `company_id?: string`\n  When provided, returns the user's company-specific profile overrides (name, profile picture) instead of their global profile.\n\n### Returns\n\n- `{ id: string; bio: string; created_at: string; name: string; profile_picture: { url: string; }; username: string; }`\n  A user account on Whop. Contains profile information, identity details, and social connections.\n\n  - `id: string`\n  - `bio: string`\n  - `created_at: string`\n  - `name: string`\n  - `profile_picture: { url: string; }`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst user = await client.users.retrieve('user_xxxxxxxxxxxxx');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.users.retrieve('user_xxxxxxxxxxxxx');\n\nconsole.log(user.id);",
      },
      python: {
        method: 'users.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.users.retrieve(\n    id="user_xxxxxxxxxxxxx",\n)\nprint(user.id)',
      },
      ruby: {
        method: 'users.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nuser = whop.users.retrieve("user_xxxxxxxxxxxxx")\n\nputs(user)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/users/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'check_access',
    endpoint: '/users/{id}/access/{resource_id}',
    httpMethod: 'get',
    summary: 'Check access',
    description: 'Check whether a user has access to a specific resource, and return their access level.',
    stainlessPath: '(resource) users > (method) check_access',
    qualified: 'client.users.checkAccess',
    params: ['id: string;', 'resource_id: string;'],
    response: "{ access_level: 'no_access' | 'admin' | 'customer'; has_access: boolean; }",
    markdown:
      "## check_access\n\n`client.users.checkAccess(id: string, resource_id: string): { access_level: access_level; has_access: boolean; }`\n\n**get** `/users/{id}/access/{resource_id}`\n\nCheck whether a user has access to a specific resource, and return their access level.\n\n### Parameters\n\n- `id: string`\n\n- `resource_id: string`\n\n### Returns\n\n- `{ access_level: 'no_access' | 'admin' | 'customer'; has_access: boolean; }`\n  The result of a has access check for the developer API\n\n  - `access_level: 'no_access' | 'admin' | 'customer'`\n  - `has_access: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.users.checkAccess('resource_id', { id: 'user_xxxxxxxxxxxxx' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.checkAccess',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.users.checkAccess('resource_id', { id: 'user_xxxxxxxxxxxxx' });\n\nconsole.log(response.access_level);",
      },
      python: {
        method: 'users.check_access',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.users.check_access(\n    resource_id="resource_id",\n    id="user_xxxxxxxxxxxxx",\n)\nprint(response.access_level)',
      },
      ruby: {
        method: 'users.check_access',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.users.check_access("resource_id", id: "user_xxxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/users/$ID/access/$RESOURCE_ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/users/{id}',
    httpMethod: 'patch',
    summary: 'Update user',
    description: "Update a user's profile by their ID.\n\nRequired permissions:\n - `user:profile:update`",
    stainlessPath: '(resource) users > (method) update',
    qualified: 'client.users.update',
    params: [
      'id: string;',
      'bio?: string;',
      'company_id?: string;',
      'name?: string;',
      'profile_picture?: { id: string; };',
      'username?: string;',
    ],
    response:
      '{ id: string; bio: string; created_at: string; name: string; profile_picture: { url: string; }; username: string; }',
    markdown:
      "## update\n\n`client.users.update(id: string, bio?: string, company_id?: string, name?: string, profile_picture?: { id: string; }, username?: string): { id: string; bio: string; created_at: string; name: string; profile_picture: object; username: string; }`\n\n**patch** `/users/{id}`\n\nUpdate a user's profile by their ID.\n\nRequired permissions:\n - `user:profile:update`\n\n### Parameters\n\n- `id: string`\n\n- `bio?: string`\n  A short biography displayed on the user's public profile.\n\n- `company_id?: string`\n  When provided, updates the user's profile overrides for this company instead of the global profile. Pass name and profile_picture to set overrides, or null to clear them.\n\n- `name?: string`\n  The user's display name shown on their public profile. Maximum 100 characters.\n\n- `profile_picture?: { id: string; }`\n  The user's profile picture image attachment.\n  - `id: string`\n    The ID of an existing file object.\n\n- `username?: string`\n  The user's unique username. Alphanumeric characters and hyphens only. Maximum 42 characters.\n\n### Returns\n\n- `{ id: string; bio: string; created_at: string; name: string; profile_picture: { url: string; }; username: string; }`\n  A user account on Whop. Contains profile information, identity details, and social connections.\n\n  - `id: string`\n  - `bio: string`\n  - `created_at: string`\n  - `name: string`\n  - `profile_picture: { url: string; }`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst user = await client.users.update('user_xxxxxxxxxxxxx');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.users.update('user_xxxxxxxxxxxxx');\n\nconsole.log(user.id);",
      },
      python: {
        method: 'users.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nuser = client.users.update(\n    id="user_xxxxxxxxxxxxx",\n)\nprint(user.id)',
      },
      ruby: {
        method: 'users.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nuser = whop.users.update("user_xxxxxxxxxxxxx")\n\nputs(user)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/users/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/users',
    httpMethod: 'get',
    summary: 'List users',
    description:
      'Search for users by name or username, ranked by social proximity to the authenticated user.',
    stainlessPath: '(resource) users > (method) list',
    qualified: 'client.users.list',
    params: ['after?: string;', 'before?: string;', 'first?: number;', 'last?: number;', 'query?: string;'],
    response:
      '{ id: string; bio: string; created_at: string; name: string; profile_picture: { url: string; }; username: string; }',
    markdown:
      "## list\n\n`client.users.list(after?: string, before?: string, first?: number, last?: number, query?: string): { id: string; bio: string; created_at: string; name: string; profile_picture: object; username: string; }`\n\n**get** `/users`\n\nSearch for users by name or username, ranked by social proximity to the authenticated user.\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `query?: string`\n  Search term to filter by name or username.\n\n### Returns\n\n- `{ id: string; bio: string; created_at: string; name: string; profile_picture: { url: string; }; username: string; }`\n  A user account on Whop. Contains profile information, identity details, and social connections.\n\n  - `id: string`\n  - `bio: string`\n  - `created_at: string`\n  - `name: string`\n  - `profile_picture: { url: string; }`\n  - `username: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const userListResponse of client.users.list()) {\n  console.log(userListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const userListResponse of client.users.list()) {\n  console.log(userListResponse.id);\n}",
      },
      python: {
        method: 'users.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.users.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'users.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.users.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/users \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/payments',
    httpMethod: 'get',
    summary: 'List payments',
    description:
      'Returns a paginated list of payments for the actor in context, with optional filtering by product, plan, status, billing reason, currency, and creation date.\n\nRequired permissions:\n - `payment:basic:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`',
    stainlessPath: '(resource) payments > (method) list',
    qualified: 'client.payments.list',
    params: [
      'after?: string;',
      'before?: string;',
      'billing_reasons?: string[];',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'currencies?: string[];',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'include_free?: boolean;',
      'last?: number;',
      "order?: 'final_amount' | 'created_at' | 'paid_at';",
      'plan_ids?: string[];',
      'product_ids?: string[];',
      'query?: string;',
      "statuses?: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'[];",
      'substatuses?: string[];',
      'updated_after?: string;',
      'updated_before?: string;',
    ],
    response:
      '{ id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; failure_message: string; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }',
    markdown:
      "## list\n\n`client.payments.list(after?: string, before?: string, billing_reasons?: string[], company_id?: string, created_after?: string, created_before?: string, currencies?: string[], direction?: 'asc' | 'desc', first?: number, include_free?: boolean, last?: number, order?: 'final_amount' | 'created_at' | 'paid_at', plan_ids?: string[], product_ids?: string[], query?: string, statuses?: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'[], substatuses?: string[], updated_after?: string, updated_before?: string): { id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; failure_message: string; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }`\n\n**get** `/payments`\n\nReturns a paginated list of payments for the actor in context, with optional filtering by product, plan, status, billing reason, currency, and creation date.\n\nRequired permissions:\n - `payment:basic:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `billing_reasons?: string[]`\n  Filter payments by their billing reason.\n\n- `company_id?: string`\n  The unique identifier of the company to list payments for.\n\n- `created_after?: string`\n  Only return payments created after this timestamp.\n\n- `created_before?: string`\n  Only return payments created before this timestamp.\n\n- `currencies?: string[]`\n  Filter payments by their currency code.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `include_free?: boolean`\n  Whether to include payments with a zero amount.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'final_amount' | 'created_at' | 'paid_at'`\n  The order to sort the results by.\n\n- `plan_ids?: string[]`\n  Filter payments to only those associated with these specific plan identifiers.\n\n- `product_ids?: string[]`\n  Filter payments to only those associated with these specific product identifiers.\n\n- `query?: string`\n  Search payments by user ID, membership ID, user email, name, or username. Email filtering requires the member:email:read permission.\n\n- `statuses?: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'[]`\n  Filter payments by their current status.\n\n- `substatuses?: string[]`\n  Filter payments by their current substatus for more granular filtering.\n\n- `updated_after?: string`\n  Only return payments last updated after this timestamp.\n\n- `updated_before?: string`\n  Only return payments last updated before this timestamp.\n\n### Returns\n\n- `{ id: string; amount_after_fees: number; application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }; auto_refunded: boolean; billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; billing_reason: string; card_brand: string; card_last4: string; checkout_configuration_id: string; company: { id: string; route: string; title: string; }; created_at: string; currency: string; dispute_alerted_at: string; failure_message: string; last_payment_attempt: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }; payment_method_type: string; payments_failed: number; plan: { id: string; internal_notes: string; }; product: { id: string; route: string; title: string; }; promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }; refundable: boolean; refunded_amount: number; refunded_at: string; retryable: boolean; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; substatus: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; total: number; updated_at: string; usd_total: number; user: { id: string; email: string; name: string; username: string; }; voidable: boolean; }`\n  A payment represents a completed or attempted charge. Payments track the amount, status, currency, and payment method used.\n\n  - `id: string`\n  - `amount_after_fees: number`\n  - `application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }`\n  - `auto_refunded: boolean`\n  - `billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }`\n  - `billing_reason: string`\n  - `card_brand: string`\n  - `card_last4: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute_alerted_at: string`\n  - `failure_message: string`\n  - `last_payment_attempt: string`\n  - `member: { id: string; phone: string; }`\n  - `membership: { id: string; status: string; }`\n  - `metadata: object`\n  - `next_payment_attempt: string`\n  - `paid_at: string`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }`\n  - `payment_method_type: string`\n  - `payments_failed: number`\n  - `plan: { id: string; internal_notes: string; }`\n  - `product: { id: string; route: string; title: string; }`\n  - `promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }`\n  - `refundable: boolean`\n  - `refunded_amount: number`\n  - `refunded_at: string`\n  - `retryable: boolean`\n  - `status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'`\n  - `substatus: string`\n  - `subtotal: number`\n  - `tax_amount: number`\n  - `tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'`\n  - `total: number`\n  - `updated_at: string`\n  - `usd_total: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n  - `voidable: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const paymentListResponse of client.payments.list()) {\n  console.log(paymentListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.payments.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const paymentListResponse of client.payments.list()) {\n  console.log(paymentListResponse.id);\n}",
      },
      python: {
        method: 'payments.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.payments.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'payments.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.payments.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/payments \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/payments/{id}',
    httpMethod: 'get',
    summary: 'Retrieve payment',
    description:
      'Retrieves the details of an existing payment.\n\nRequired permissions:\n - `payment:basic:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) payments > (method) retrieve',
    qualified: 'client.payments.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }',
    markdown:
      "## retrieve\n\n`client.payments.retrieve(id: string): { id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }`\n\n**get** `/payments/{id}`\n\nRetrieves the details of an existing payment.\n\nRequired permissions:\n - `payment:basic:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount_after_fees: number; application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }; auto_refunded: boolean; billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; billing_reason: string; card_brand: string; card_last4: string; checkout_configuration_id: string; company: { id: string; route: string; title: string; }; created_at: string; currency: string; dispute_alerted_at: string; disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]; failure_message: string; financing_installments_count: number; financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]; last_payment_attempt: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }; payment_method_type: string; payments_failed: number; plan: { id: string; internal_notes: string; }; product: { id: string; route: string; title: string; }; promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]; retryable: boolean; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; substatus: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: { id: string; email: string; name: string; username: string; }; voidable: boolean; }`\n  A payment represents a completed or attempted charge. Payments track the amount, status, currency, and payment method used.\n\n  - `id: string`\n  - `amount_after_fees: number`\n  - `application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }`\n  - `auto_refunded: boolean`\n  - `billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }`\n  - `billing_reason: string`\n  - `card_brand: string`\n  - `card_last4: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute_alerted_at: string`\n  - `disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]`\n  - `failure_message: string`\n  - `financing_installments_count: number`\n  - `financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]`\n  - `last_payment_attempt: string`\n  - `member: { id: string; phone: string; }`\n  - `membership: { id: string; status: string; }`\n  - `metadata: object`\n  - `next_payment_attempt: string`\n  - `paid_at: string`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }`\n  - `payment_method_type: string`\n  - `payments_failed: number`\n  - `plan: { id: string; internal_notes: string; }`\n  - `product: { id: string; route: string; title: string; }`\n  - `promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }`\n  - `refundable: boolean`\n  - `refunded_amount: number`\n  - `refunded_at: string`\n  - `resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]`\n  - `retryable: boolean`\n  - `status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'`\n  - `substatus: string`\n  - `subtotal: number`\n  - `tax_amount: number`\n  - `tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'`\n  - `tax_refunded_amount: number`\n  - `total: number`\n  - `updated_at: string`\n  - `usd_total: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n  - `voidable: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst payment = await client.payments.retrieve('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.payments.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payment = await client.payments.retrieve('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment.id);",
      },
      python: {
        method: 'payments.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayment = client.payments.retrieve(\n    "pay_xxxxxxxxxxxxxx",\n)\nprint(payment.id)',
      },
      ruby: {
        method: 'payments.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayment = whop.payments.retrieve("pay_xxxxxxxxxxxxxx")\n\nputs(payment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payments/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'refund',
    endpoint: '/payments/{id}/refund',
    httpMethod: 'post',
    summary: 'Refund payment',
    description:
      'Issue a full or partial refund for a payment. The refund is processed through the original payment processor and the membership status is updated accordingly.\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) payments > (method) refund',
    qualified: 'client.payments.refund',
    params: ['id: string;', 'partial_amount?: number;'],
    response:
      '{ id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }',
    markdown:
      "## refund\n\n`client.payments.refund(id: string, partial_amount?: number): { id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }`\n\n**post** `/payments/{id}/refund`\n\nIssue a full or partial refund for a payment. The refund is processed through the original payment processor and the membership status is updated accordingly.\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`\n\n### Parameters\n\n- `id: string`\n\n- `partial_amount?: number`\n  The amount to refund in the payment currency. If omitted, the full payment amount is refunded.\n\n### Returns\n\n- `{ id: string; amount_after_fees: number; application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }; auto_refunded: boolean; billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; billing_reason: string; card_brand: string; card_last4: string; checkout_configuration_id: string; company: { id: string; route: string; title: string; }; created_at: string; currency: string; dispute_alerted_at: string; disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]; failure_message: string; financing_installments_count: number; financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]; last_payment_attempt: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }; payment_method_type: string; payments_failed: number; plan: { id: string; internal_notes: string; }; product: { id: string; route: string; title: string; }; promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]; retryable: boolean; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; substatus: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: { id: string; email: string; name: string; username: string; }; voidable: boolean; }`\n  A payment represents a completed or attempted charge. Payments track the amount, status, currency, and payment method used.\n\n  - `id: string`\n  - `amount_after_fees: number`\n  - `application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }`\n  - `auto_refunded: boolean`\n  - `billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }`\n  - `billing_reason: string`\n  - `card_brand: string`\n  - `card_last4: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute_alerted_at: string`\n  - `disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]`\n  - `failure_message: string`\n  - `financing_installments_count: number`\n  - `financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]`\n  - `last_payment_attempt: string`\n  - `member: { id: string; phone: string; }`\n  - `membership: { id: string; status: string; }`\n  - `metadata: object`\n  - `next_payment_attempt: string`\n  - `paid_at: string`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }`\n  - `payment_method_type: string`\n  - `payments_failed: number`\n  - `plan: { id: string; internal_notes: string; }`\n  - `product: { id: string; route: string; title: string; }`\n  - `promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }`\n  - `refundable: boolean`\n  - `refunded_amount: number`\n  - `refunded_at: string`\n  - `resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]`\n  - `retryable: boolean`\n  - `status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'`\n  - `substatus: string`\n  - `subtotal: number`\n  - `tax_amount: number`\n  - `tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'`\n  - `tax_refunded_amount: number`\n  - `total: number`\n  - `updated_at: string`\n  - `usd_total: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n  - `voidable: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst payment = await client.payments.refund('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.payments.refund',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payment = await client.payments.refund('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment.id);",
      },
      python: {
        method: 'payments.refund',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayment = client.payments.refund(\n    id="pay_xxxxxxxxxxxxxx",\n)\nprint(payment.id)',
      },
      ruby: {
        method: 'payments.refund',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayment = whop.payments.refund("pay_xxxxxxxxxxxxxx")\n\nputs(payment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payments/$ID/refund \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retry',
    endpoint: '/payments/{id}/retry',
    httpMethod: 'post',
    summary: 'Retry payment',
    description:
      'Retry a failed or pending payment. This re-attempts the charge using the original payment method and plan details.\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) payments > (method) retry',
    qualified: 'client.payments.retry',
    params: ['id: string;'],
    response:
      '{ id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }',
    markdown:
      "## retry\n\n`client.payments.retry(id: string): { id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }`\n\n**post** `/payments/{id}/retry`\n\nRetry a failed or pending payment. This re-attempts the charge using the original payment method and plan details.\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount_after_fees: number; application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }; auto_refunded: boolean; billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; billing_reason: string; card_brand: string; card_last4: string; checkout_configuration_id: string; company: { id: string; route: string; title: string; }; created_at: string; currency: string; dispute_alerted_at: string; disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]; failure_message: string; financing_installments_count: number; financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]; last_payment_attempt: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }; payment_method_type: string; payments_failed: number; plan: { id: string; internal_notes: string; }; product: { id: string; route: string; title: string; }; promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]; retryable: boolean; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; substatus: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: { id: string; email: string; name: string; username: string; }; voidable: boolean; }`\n  A payment represents a completed or attempted charge. Payments track the amount, status, currency, and payment method used.\n\n  - `id: string`\n  - `amount_after_fees: number`\n  - `application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }`\n  - `auto_refunded: boolean`\n  - `billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }`\n  - `billing_reason: string`\n  - `card_brand: string`\n  - `card_last4: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute_alerted_at: string`\n  - `disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]`\n  - `failure_message: string`\n  - `financing_installments_count: number`\n  - `financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]`\n  - `last_payment_attempt: string`\n  - `member: { id: string; phone: string; }`\n  - `membership: { id: string; status: string; }`\n  - `metadata: object`\n  - `next_payment_attempt: string`\n  - `paid_at: string`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }`\n  - `payment_method_type: string`\n  - `payments_failed: number`\n  - `plan: { id: string; internal_notes: string; }`\n  - `product: { id: string; route: string; title: string; }`\n  - `promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }`\n  - `refundable: boolean`\n  - `refunded_amount: number`\n  - `refunded_at: string`\n  - `resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]`\n  - `retryable: boolean`\n  - `status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'`\n  - `substatus: string`\n  - `subtotal: number`\n  - `tax_amount: number`\n  - `tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'`\n  - `tax_refunded_amount: number`\n  - `total: number`\n  - `updated_at: string`\n  - `usd_total: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n  - `voidable: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst payment = await client.payments.retry('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.payments.retry',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payment = await client.payments.retry('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment.id);",
      },
      python: {
        method: 'payments.retry',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayment = client.payments.retry(\n    "pay_xxxxxxxxxxxxxx",\n)\nprint(payment.id)',
      },
      ruby: {
        method: 'payments.retry_',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayment = whop.payments.retry_("pay_xxxxxxxxxxxxxx")\n\nputs(payment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payments/$ID/retry \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'void',
    endpoint: '/payments/{id}/void',
    httpMethod: 'post',
    summary: 'Void payment',
    description:
      'Void a payment that has not yet been settled. Voiding cancels the payment before it is captured by the payment processor.\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) payments > (method) void',
    qualified: 'client.payments.void',
    params: ['id: string;'],
    response:
      '{ id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }',
    markdown:
      "## void\n\n`client.payments.void(id: string): { id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }`\n\n**post** `/payments/{id}/void`\n\nVoid a payment that has not yet been settled. Voiding cancels the payment before it is captured by the payment processor.\n\nRequired permissions:\n - `payment:manage`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount_after_fees: number; application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }; auto_refunded: boolean; billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; billing_reason: string; card_brand: string; card_last4: string; checkout_configuration_id: string; company: { id: string; route: string; title: string; }; created_at: string; currency: string; dispute_alerted_at: string; disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]; failure_message: string; financing_installments_count: number; financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]; last_payment_attempt: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }; payment_method_type: string; payments_failed: number; plan: { id: string; internal_notes: string; }; product: { id: string; route: string; title: string; }; promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]; retryable: boolean; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; substatus: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: { id: string; email: string; name: string; username: string; }; voidable: boolean; }`\n  A payment represents a completed or attempted charge. Payments track the amount, status, currency, and payment method used.\n\n  - `id: string`\n  - `amount_after_fees: number`\n  - `application_fee: { id: string; amount: number; amount_captured: number; amount_refunded: number; created_at: string; currency: string; }`\n  - `auto_refunded: boolean`\n  - `billing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }`\n  - `billing_reason: string`\n  - `card_brand: string`\n  - `card_last4: string`\n  - `checkout_configuration_id: string`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute_alerted_at: string`\n  - `disputes: { id: string; amount: number; currency: string; editable: boolean; needs_response_by: string; notes: string; reason: string; status: string; }[]`\n  - `failure_message: string`\n  - `financing_installments_count: number`\n  - `financing_transactions: { id: string; amount: number; created_at: string; status: string; transaction_type: string; }[]`\n  - `last_payment_attempt: string`\n  - `member: { id: string; phone: string; }`\n  - `membership: { id: string; status: string; }`\n  - `metadata: object`\n  - `next_payment_attempt: string`\n  - `paid_at: string`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; }`\n  - `payment_method_type: string`\n  - `payments_failed: number`\n  - `plan: { id: string; internal_notes: string; }`\n  - `product: { id: string; route: string; title: string; }`\n  - `promo_code: { id: string; amount_off: number; base_currency: string; code: string; number_of_intervals: number; promo_type: 'percentage' | 'flat_amount'; }`\n  - `refundable: boolean`\n  - `refunded_amount: number`\n  - `refunded_at: string`\n  - `resolutions: { id: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; platform_response_actions: string[]; status: string; }[]`\n  - `retryable: boolean`\n  - `status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'`\n  - `substatus: string`\n  - `subtotal: number`\n  - `tax_amount: number`\n  - `tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'`\n  - `tax_refunded_amount: number`\n  - `total: number`\n  - `updated_at: string`\n  - `usd_total: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n  - `voidable: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst payment = await client.payments.void('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.payments.void',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payment = await client.payments.void('pay_xxxxxxxxxxxxxx');\n\nconsole.log(payment.id);",
      },
      python: {
        method: 'payments.void',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayment = client.payments.void(\n    "pay_xxxxxxxxxxxxxx",\n)\nprint(payment.id)',
      },
      ruby: {
        method: 'payments.void',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayment = whop.payments.void("pay_xxxxxxxxxxxxxx")\n\nputs(payment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payments/$ID/void \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/payments',
    httpMethod: 'post',
    summary: 'Create payment',
    description:
      'Charge an existing member off-session using one of their stored payment methods. You can provide an existing plan, or create a new one in-line. This endpoint will respond with a payment object immediately, but the payment is processed asynchronously in the background. Use webhooks to be notified when the payment succeeds or fails.\n\nRequired permissions:\n - `payment:charge`\n - `plan:create`\n - `access_pass:create`\n - `access_pass:update`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `promo_code:basic:read`\n - `payment:dispute:read`\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) payments > (method) create',
    qualified: 'client.payments.create',
    params: [
      "{ company_id: string; member_id: string; payment_method_id: string; plan: { currency: string; application_fee_amount?: number; billing_period?: number; description?: string; expiration_days?: number; force_create_new_plan?: boolean; initial_price?: number; internal_notes?: string; plan_type?: 'renewal' | 'one_time'; product?: { external_identifier: string; title: string; collect_shipping_address?: boolean; custom_statement_descriptor?: string; description?: string; global_affiliate_percentage?: number; global_affiliate_status?: 'enabled' | 'disabled'; headline?: string; product_tax_code_id?: string; redirect_purchase_url?: string; route?: string; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; product_id?: string; renewal_price?: number; title?: string; trial_period_days?: number; visibility?: 'visible' | 'hidden' | 'archived' | 'quick_link'; }; metadata?: object; } | { company_id: string; member_id: string; payment_method_id: string; plan_id: string; metadata?: object; };",
    ],
    response:
      '{ id: string; amount_after_fees: number; application_fee: object; auto_refunded: boolean; billing_address: object; billing_reason: billing_reasons; card_brand: card_brands; card_last4: string; checkout_configuration_id: string; company: object; created_at: string; currency: currency; dispute_alerted_at: string; disputes: object[]; failure_message: string; financing_installments_count: number; financing_transactions: object[]; last_payment_attempt: string; member: object; membership: object; metadata: object; next_payment_attempt: string; paid_at: string; payment_method: object; payment_method_type: payment_method_types; payments_failed: number; plan: object; product: object; promo_code: object; refundable: boolean; refunded_amount: number; refunded_at: string; resolutions: object[]; retryable: boolean; status: receipt_status; substatus: friendly_receipt_status; subtotal: number; tax_amount: number; tax_behavior: receipt_tax_behavior; tax_refunded_amount: number; total: number; updated_at: string; usd_total: number; user: object; voidable: boolean; }',
    perLanguage: {
      typescript: {
        method: 'client.payments.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payment = await client.payments.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  member_id: 'mber_xxxxxxxxxxxxx',\n  payment_method_id: 'pmt_xxxxxxxxxxxxxx',\n  plan: { currency: 'usd' },\n});\n\nconsole.log(payment.id);",
      },
      python: {
        method: 'payments.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayment = client.payments.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    member_id="mber_xxxxxxxxxxxxx",\n    payment_method_id="pmt_xxxxxxxxxxxxxx",\n    plan={\n        "currency": "usd"\n    },\n)\nprint(payment.id)',
      },
      ruby: {
        method: 'payments.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayment = whop.payments.create(\n  body: {\n    company_id: "biz_xxxxxxxxxxxxxx",\n    member_id: "mber_xxxxxxxxxxxxx",\n    payment_method_id: "pmt_xxxxxxxxxxxxxx",\n    plan: {currency: :usd}\n  }\n)\n\nputs(payment)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payments \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "member_id": "mber_xxxxxxxxxxxxx",\n          "payment_method_id": "pmt_xxxxxxxxxxxxxx",\n          "plan": {\n            "currency": "usd"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'list_fees',
    endpoint: '/payments/{id}/fees',
    httpMethod: 'get',
    summary: 'List fees',
    description:
      'Returns the list of fees associated with a specific payment, including platform fees and processing fees.\n\nRequired permissions:\n - `payment:basic:read`',
    stainlessPath: '(resource) payments > (method) list_fees',
    qualified: 'client.payments.listFees',
    params: ['id: string;', 'after?: string;', 'before?: string;', 'first?: number;', 'last?: number;'],
    response: '{ amount: number; currency: string; name: string; type: string; }',
    markdown:
      "## list_fees\n\n`client.payments.listFees(id: string, after?: string, before?: string, first?: number, last?: number): { amount: number; currency: currency; name: string; type: string; }`\n\n**get** `/payments/{id}/fees`\n\nReturns the list of fees associated with a specific payment, including platform fees and processing fees.\n\nRequired permissions:\n - `payment:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ amount: number; currency: string; name: string; type: string; }`\n  Represents a fee related to a payment\n\n  - `amount: number`\n  - `currency: string`\n  - `name: string`\n  - `type: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const paymentListFeesResponse of client.payments.listFees('pay_xxxxxxxxxxxxxx')) {\n  console.log(paymentListFeesResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.payments.listFees',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const paymentListFeesResponse of client.payments.listFees('pay_xxxxxxxxxxxxxx')) {\n  console.log(paymentListFeesResponse.amount);\n}",
      },
      python: {
        method: 'payments.list_fees',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.payments.list_fees(\n    id="pay_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.amount)',
      },
      ruby: {
        method: 'payments.list_fees',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.payments.list_fees("pay_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payments/$ID/fees \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/support_channels',
    httpMethod: 'get',
    summary: 'List support channels',
    description:
      'Returns a paginated list of support channels for a specific company, with optional filtering by resolution status and custom sorting.\n\nRequired permissions:\n - `support_chat:read`',
    stainlessPath: '(resource) support_channels > (method) list',
    qualified: 'client.supportChannels.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'open?: boolean;',
      "order?: 'created_at' | 'last_post_sent_at';",
      "view?: 'all' | 'admin' | 'customer';",
    ],
    response:
      '{ id: string; company_id: string; custom_name: string; customer_user: { id: string; name: string; username: string; }; last_message_at: string; resolved_at: string; }',
    markdown:
      "## list\n\n`client.supportChannels.list(after?: string, before?: string, company_id?: string, direction?: 'asc' | 'desc', first?: number, last?: number, open?: boolean, order?: 'created_at' | 'last_post_sent_at', view?: 'all' | 'admin' | 'customer'): { id: string; company_id: string; custom_name: string; customer_user: object; last_message_at: string; resolved_at: string; }`\n\n**get** `/support_channels`\n\nReturns a paginated list of support channels for a specific company, with optional filtering by resolution status and custom sorting.\n\nRequired permissions:\n - `support_chat:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of the company to list support channels for. Includes channels of child companies. When omitted, returns support channels across all companies the user has access to.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `open?: boolean`\n  Whether to filter by open or resolved support channels. Set to true to only return channels awaiting a response, or false for resolved channels.\n\n- `order?: 'created_at' | 'last_post_sent_at'`\n  Sort options for message channels\n\n- `view?: 'all' | 'admin' | 'customer'`\n  The perspective to filter support channels by.\n\n### Returns\n\n- `{ id: string; company_id: string; custom_name: string; customer_user: { id: string; name: string; username: string; }; last_message_at: string; resolved_at: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `company_id: string`\n  - `custom_name: string`\n  - `customer_user: { id: string; name: string; username: string; }`\n  - `last_message_at: string`\n  - `resolved_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const supportChannelListResponse of client.supportChannels.list()) {\n  console.log(supportChannelListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.supportChannels.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const supportChannelListResponse of client.supportChannels.list()) {\n  console.log(supportChannelListResponse.id);\n}",
      },
      python: {
        method: 'support_channels.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.support_channels.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'support_channels.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.support_channels.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/support_channels \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/support_channels/{id}',
    httpMethod: 'get',
    summary: 'Retrieve support channel',
    description:
      'Retrieves the details of an existing support channel.\n\nRequired permissions:\n - `support_chat:read`',
    stainlessPath: '(resource) support_channels > (method) retrieve',
    qualified: 'client.supportChannels.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; company_id: string; custom_name: string; customer_user: { id: string; name: string; username: string; }; last_message_at: string; resolved_at: string; }',
    markdown:
      "## retrieve\n\n`client.supportChannels.retrieve(id: string): { id: string; company_id: string; custom_name: string; customer_user: object; last_message_at: string; resolved_at: string; }`\n\n**get** `/support_channels/{id}`\n\nRetrieves the details of an existing support channel.\n\nRequired permissions:\n - `support_chat:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; company_id: string; custom_name: string; customer_user: { id: string; name: string; username: string; }; last_message_at: string; resolved_at: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `company_id: string`\n  - `custom_name: string`\n  - `customer_user: { id: string; name: string; username: string; }`\n  - `last_message_at: string`\n  - `resolved_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst supportChannel = await client.supportChannels.retrieve('id');\n\nconsole.log(supportChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.supportChannels.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst supportChannel = await client.supportChannels.retrieve('id');\n\nconsole.log(supportChannel.id);",
      },
      python: {
        method: 'support_channels.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nsupport_channel = client.support_channels.retrieve(\n    "id",\n)\nprint(support_channel.id)',
      },
      ruby: {
        method: 'support_channels.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nsupport_channel = whop.support_channels.retrieve("id")\n\nputs(support_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/support_channels/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/support_channels',
    httpMethod: 'post',
    summary: 'Create support channel',
    description:
      'Open a new support channel between a company team member and a customer. Returns the existing channel if one already exists for that user.\n\nRequired permissions:\n - `support_chat:create`',
    stainlessPath: '(resource) support_channels > (method) create',
    qualified: 'client.supportChannels.create',
    params: ['company_id: string;', 'user_id: string;', 'custom_name?: string;'],
    response:
      '{ id: string; company_id: string; custom_name: string; customer_user: { id: string; name: string; username: string; }; last_message_at: string; resolved_at: string; }',
    markdown:
      "## create\n\n`client.supportChannels.create(company_id: string, user_id: string, custom_name?: string): { id: string; company_id: string; custom_name: string; customer_user: object; last_message_at: string; resolved_at: string; }`\n\n**post** `/support_channels`\n\nOpen a new support channel between a company team member and a customer. Returns the existing channel if one already exists for that user.\n\nRequired permissions:\n - `support_chat:create`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create the support channel in.\n\n- `user_id: string`\n  The user ID (e.g. 'user_xxxxx') or username of the customer to open a support channel for.\n\n- `custom_name?: string`\n  Optional custom display name for the support channel.\n\n### Returns\n\n- `{ id: string; company_id: string; custom_name: string; customer_user: { id: string; name: string; username: string; }; last_message_at: string; resolved_at: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `company_id: string`\n  - `custom_name: string`\n  - `customer_user: { id: string; name: string; username: string; }`\n  - `last_message_at: string`\n  - `resolved_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst supportChannel = await client.supportChannels.create({ company_id: 'biz_xxxxxxxxxxxxxx', user_id: 'user_xxxxxxxxxxxxx' });\n\nconsole.log(supportChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.supportChannels.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst supportChannel = await client.supportChannels.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  user_id: 'user_xxxxxxxxxxxxx',\n});\n\nconsole.log(supportChannel.id);",
      },
      python: {
        method: 'support_channels.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nsupport_channel = client.support_channels.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    user_id="user_xxxxxxxxxxxxx",\n)\nprint(support_channel.id)',
      },
      ruby: {
        method: 'support_channels.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nsupport_channel = whop.support_channels.create(company_id: "biz_xxxxxxxxxxxxxx", user_id: "user_xxxxxxxxxxxxx")\n\nputs(support_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/support_channels \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "user_id": "user_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/experiences',
    httpMethod: 'get',
    summary: 'List experiences',
    description:
      'Returns a paginated list of experiences belonging to a company, with optional filtering by product and app.',
    stainlessPath: '(resource) experiences > (method) list',
    qualified: 'client.experiences.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'app_id?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'first?: number;',
      'last?: number;',
      'product_id?: string;',
    ],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; }',
    markdown:
      "## list\n\n`client.experiences.list(company_id: string, after?: string, app_id?: string, before?: string, created_after?: string, created_before?: string, first?: number, last?: number, product_id?: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; }`\n\n**get** `/experiences`\n\nReturns a paginated list of experiences belonging to a company, with optional filtering by product and app.\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list experiences for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `app_id?: string`\n  Filter to only experiences powered by this app identifier.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return experiences created after this timestamp.\n\n- `created_before?: string`\n  Only return experiences created before this timestamp.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `product_id?: string`\n  Filter to only experiences attached to this product identifier.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const experienceListResponse of client.experiences.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(experienceListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const experienceListResponse of client.experiences.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(experienceListResponse.id);\n}",
      },
      python: {
        method: 'experiences.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.experiences.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'experiences.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.experiences.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/experiences',
    httpMethod: 'post',
    summary: 'Create experience',
    description: 'Required permissions:\n - `experience:create`',
    stainlessPath: '(resource) experiences > (method) create',
    qualified: 'client.experiences.create',
    params: [
      'app_id: string;',
      'company_id: string;',
      'is_public?: boolean;',
      'logo?: { id: string; };',
      'name?: string;',
      'section_id?: string;',
    ],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }',
    markdown:
      "## create\n\n`client.experiences.create(app_id: string, company_id: string, is_public?: boolean, logo?: { id: string; }, name?: string, section_id?: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; products: object[]; }`\n\n**post** `/experiences`\n\nRequired permissions:\n - `experience:create`\n\n### Parameters\n\n- `app_id: string`\n  The unique identifier of the app that powers this experience.\n\n- `company_id: string`\n  The unique identifier of the company to create this experience for.\n\n- `is_public?: boolean`\n  Whether the experience is publicly accessible without a membership.\n\n- `logo?: { id: string; }`\n  A logo image displayed alongside the experience name.\n  - `id: string`\n    The ID of an existing file object.\n\n- `name?: string`\n  The display name of the experience. Defaults to the app's name if not provided.\n\n- `section_id?: string`\n  The unique identifier of the section to place the experience in.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n  - `products: { id: string; route: string; title: string; }[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.create({ app_id: 'app_xxxxxxxxxxxxxx', company_id: 'biz_xxxxxxxxxxxxxx' });\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.create({\n  app_id: 'app_xxxxxxxxxxxxxx',\n  company_id: 'biz_xxxxxxxxxxxxxx',\n});\n\nconsole.log(experience.id);",
      },
      python: {
        method: 'experiences.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.create(\n    app_id="app_xxxxxxxxxxxxxx",\n    company_id="biz_xxxxxxxxxxxxxx",\n)\nprint(experience.id)',
      },
      ruby: {
        method: 'experiences.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.create(app_id: "app_xxxxxxxxxxxxxx", company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "app_id": "app_xxxxxxxxxxxxxx",\n          "company_id": "biz_xxxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/experiences/{id}',
    httpMethod: 'get',
    summary: 'Retrieve experience',
    description: 'Retrieves the details of an existing experience.',
    stainlessPath: '(resource) experiences > (method) retrieve',
    qualified: 'client.experiences.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }',
    markdown:
      "## retrieve\n\n`client.experiences.retrieve(id: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; products: object[]; }`\n\n**get** `/experiences/{id}`\n\nRetrieves the details of an existing experience.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n  - `products: { id: string; route: string; title: string; }[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.retrieve('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.retrieve('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience.id);",
      },
      python: {
        method: 'experiences.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.retrieve(\n    "exp_xxxxxxxxxxxxxx",\n)\nprint(experience.id)',
      },
      ruby: {
        method: 'experiences.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.retrieve("exp_xxxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/experiences/{id}',
    httpMethod: 'patch',
    summary: 'Update experience',
    description: 'Required permissions:\n - `experience:update`',
    stainlessPath: '(resource) experiences > (method) update',
    qualified: 'client.experiences.update',
    params: [
      'id: string;',
      "access_level?: 'public' | 'private';",
      'is_public?: boolean;',
      'logo?: { id: string; };',
      'name?: string;',
      'order?: string;',
      'section_id?: string;',
    ],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }',
    markdown:
      "## update\n\n`client.experiences.update(id: string, access_level?: 'public' | 'private', is_public?: boolean, logo?: { id: string; }, name?: string, order?: string, section_id?: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; products: object[]; }`\n\n**patch** `/experiences/{id}`\n\nRequired permissions:\n - `experience:update`\n\n### Parameters\n\n- `id: string`\n\n- `access_level?: 'public' | 'private'`\n  The different access levels for experiences (PUBLIC IS NEVER USED ANYMORE).\n\n- `is_public?: boolean`\n  Whether the experience is publicly accessible without a membership.\n\n- `logo?: { id: string; }`\n  A logo image displayed alongside the experience name.\n  - `id: string`\n    The ID of an existing file object.\n\n- `name?: string`\n  The display name of the experience.\n\n- `order?: string`\n  The position of the experience within its section for display ordering.\n\n- `section_id?: string`\n  The unique identifier of the section to move the experience into.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n  - `products: { id: string; route: string; title: string; }[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.update('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.update('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience.id);",
      },
      python: {
        method: 'experiences.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.update(\n    id="exp_xxxxxxxxxxxxxx",\n)\nprint(experience.id)',
      },
      ruby: {
        method: 'experiences.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.update("exp_xxxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/experiences/{id}',
    httpMethod: 'delete',
    summary: 'Delete experience',
    description: 'Required permissions:\n - `experience:delete`',
    stainlessPath: '(resource) experiences > (method) delete',
    qualified: 'client.experiences.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.experiences.delete(id: string): boolean`\n\n**delete** `/experiences/{id}`\n\nRequired permissions:\n - `experience:delete`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.delete('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.delete('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience);",
      },
      python: {
        method: 'experiences.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.delete(\n    "exp_xxxxxxxxxxxxxx",\n)\nprint(experience)',
      },
      ruby: {
        method: 'experiences.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.delete("exp_xxxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'attach',
    endpoint: '/experiences/{id}/attach',
    httpMethod: 'post',
    summary: 'Attach experience',
    description:
      "Attach an experience to a product, making it accessible to the product's customers.\n\nRequired permissions:\n - `experience:attach`",
    stainlessPath: '(resource) experiences > (method) attach',
    qualified: 'client.experiences.attach',
    params: ['id: string;', 'product_id: string;'],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }',
    markdown:
      "## attach\n\n`client.experiences.attach(id: string, product_id: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; products: object[]; }`\n\n**post** `/experiences/{id}/attach`\n\nAttach an experience to a product, making it accessible to the product's customers.\n\nRequired permissions:\n - `experience:attach`\n\n### Parameters\n\n- `id: string`\n\n- `product_id: string`\n  The unique identifier of the product to attach the experience to.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n  - `products: { id: string; route: string; title: string; }[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.attach('exp_xxxxxxxxxxxxxx', { product_id: 'prod_xxxxxxxxxxxxx' });\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.attach',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.attach('exp_xxxxxxxxxxxxxx', {\n  product_id: 'prod_xxxxxxxxxxxxx',\n});\n\nconsole.log(experience.id);",
      },
      python: {
        method: 'experiences.attach',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.attach(\n    id="exp_xxxxxxxxxxxxxx",\n    product_id="prod_xxxxxxxxxxxxx",\n)\nprint(experience.id)',
      },
      ruby: {
        method: 'experiences.attach',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.attach("exp_xxxxxxxxxxxxxx", product_id: "prod_xxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences/$ID/attach \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "product_id": "prod_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'detach',
    endpoint: '/experiences/{id}/detach',
    httpMethod: 'post',
    summary: 'Detach experience',
    description:
      'Detach an experience from a product, removing customer access to it through that product.\n\nRequired permissions:\n - `experience:detach`',
    stainlessPath: '(resource) experiences > (method) detach',
    qualified: 'client.experiences.detach',
    params: ['id: string;', 'product_id: string;'],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }',
    markdown:
      "## detach\n\n`client.experiences.detach(id: string, product_id: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; products: object[]; }`\n\n**post** `/experiences/{id}/detach`\n\nDetach an experience from a product, removing customer access to it through that product.\n\nRequired permissions:\n - `experience:detach`\n\n### Parameters\n\n- `id: string`\n\n- `product_id: string`\n  The unique identifier of the product to detach the experience from.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n  - `products: { id: string; route: string; title: string; }[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.detach('exp_xxxxxxxxxxxxxx', { product_id: 'prod_xxxxxxxxxxxxx' });\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.detach',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.detach('exp_xxxxxxxxxxxxxx', {\n  product_id: 'prod_xxxxxxxxxxxxx',\n});\n\nconsole.log(experience.id);",
      },
      python: {
        method: 'experiences.detach',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.detach(\n    id="exp_xxxxxxxxxxxxxx",\n    product_id="prod_xxxxxxxxxxxxx",\n)\nprint(experience.id)',
      },
      ruby: {
        method: 'experiences.detach',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.detach("exp_xxxxxxxxxxxxxx", product_id: "prod_xxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences/$ID/detach \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "product_id": "prod_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'duplicate',
    endpoint: '/experiences/{id}/duplicate',
    httpMethod: 'post',
    summary: 'Duplicate experience',
    description:
      'Duplicates an existing experience. The name will be copied, unless provided. The new experience will be attached to the same products as the original experience.\nIf duplicating a Forum or Chat experience, the new experience will have the same settings as the original experience, e.g. who can post, who can comment, etc.\nNo content, e.g. posts, messages, lessons from within the original experience will be copied.\n\n\nRequired permissions:\n - `experience:create`',
    stainlessPath: '(resource) experiences > (method) duplicate',
    qualified: 'client.experiences.duplicate',
    params: ['id: string;', 'name?: string;'],
    response:
      '{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }',
    markdown:
      "## duplicate\n\n`client.experiences.duplicate(id: string, name?: string): { id: string; app: object; company: object; created_at: string; image: object; is_public: boolean; name: string; order: string; products: object[]; }`\n\n**post** `/experiences/{id}/duplicate`\n\nDuplicates an existing experience. The name will be copied, unless provided. The new experience will be attached to the same products as the original experience.\nIf duplicating a Forum or Chat experience, the new experience will have the same settings as the original experience, e.g. who can post, who can comment, etc.\nNo content, e.g. posts, messages, lessons from within the original experience will be copied.\n\n\nRequired permissions:\n - `experience:create`\n\n### Parameters\n\n- `id: string`\n\n- `name?: string`\n  The display name for the duplicated experience. Defaults to the original experience's name.\n\n### Returns\n\n- `{ id: string; app: { id: string; icon: { url: string; }; name: string; }; company: { id: string; route: string; title: string; }; created_at: string; image: { url: string; }; is_public: boolean; name: string; order: string; products: { id: string; route: string; title: string; }[]; }`\n  An experience is a feature or content module within a product, such as a chat, course, or custom app.\n\n  - `id: string`\n  - `app: { id: string; icon: { url: string; }; name: string; }`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `image: { url: string; }`\n  - `is_public: boolean`\n  - `name: string`\n  - `order: string`\n  - `products: { id: string; route: string; title: string; }[]`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst experience = await client.experiences.duplicate('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience);\n```",
    perLanguage: {
      typescript: {
        method: 'client.experiences.duplicate',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst experience = await client.experiences.duplicate('exp_xxxxxxxxxxxxxx');\n\nconsole.log(experience.id);",
      },
      python: {
        method: 'experiences.duplicate',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nexperience = client.experiences.duplicate(\n    id="exp_xxxxxxxxxxxxxx",\n)\nprint(experience.id)',
      },
      ruby: {
        method: 'experiences.duplicate',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nexperience = whop.experiences.duplicate("exp_xxxxxxxxxxxxxx")\n\nputs(experience)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/experiences/$ID/duplicate \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/reactions',
    httpMethod: 'get',
    summary: 'List reactions',
    description:
      'Returns a paginated list of emoji reactions on a specific message or forum post, sorted by most recent.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) reactions > (method) list',
    qualified: 'client.reactions.list',
    params: [
      'resource_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      '{ id: string; emoji: string; resource_id: string; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## list\n\n`client.reactions.list(resource_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; emoji: string; resource_id: string; user: object; }`\n\n**get** `/reactions`\n\nReturns a paginated list of emoji reactions on a specific message or forum post, sorted by most recent.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `resource_id: string`\n  The unique identifier of the message or forum post to list reactions for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; emoji: string; resource_id: string; user: { id: string; name: string; username: string; }; }`\n  A single reaction left by a user on a feed post, such as a like or emoji.\n\n  - `id: string`\n  - `emoji: string`\n  - `resource_id: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const reactionListResponse of client.reactions.list({ resource_id: 'resource_id' })) {\n  console.log(reactionListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reactions.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const reactionListResponse of client.reactions.list({ resource_id: 'resource_id' })) {\n  console.log(reactionListResponse.id);\n}",
      },
      python: {
        method: 'reactions.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.reactions.list(\n    resource_id="resource_id",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'reactions.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.reactions.list(resource_id: "resource_id")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/reactions \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/reactions',
    httpMethod: 'post',
    summary: 'Create reaction',
    description:
      'Add an emoji reaction or poll vote to a message or forum post. In forums, the reaction is always a like.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) reactions > (method) create',
    qualified: 'client.reactions.create',
    params: ['resource_id: string;', 'emoji?: string;', 'poll_option_id?: string;'],
    response:
      '{ id: string; emoji: string; resource_id: string; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## create\n\n`client.reactions.create(resource_id: string, emoji?: string, poll_option_id?: string): { id: string; emoji: string; resource_id: string; user: object; }`\n\n**post** `/reactions`\n\nAdd an emoji reaction or poll vote to a message or forum post. In forums, the reaction is always a like.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `resource_id: string`\n  The unique identifier of the message or forum post to react to.\n\n- `emoji?: string`\n  The emoji to react with, in shortcode or unicode format. For example, ':heart:' or a unicode emoji. Ignored in forums where reactions are always likes.\n\n- `poll_option_id?: string`\n  The unique identifier of a poll option to vote for. Only valid when the target message or post contains a poll.\n\n### Returns\n\n- `{ id: string; emoji: string; resource_id: string; user: { id: string; name: string; username: string; }; }`\n  A single reaction left by a user on a feed post, such as a like or emoji.\n\n  - `id: string`\n  - `emoji: string`\n  - `resource_id: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst reaction = await client.reactions.create({ resource_id: 'resource_id' });\n\nconsole.log(reaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reactions.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst reaction = await client.reactions.create({ resource_id: 'resource_id' });\n\nconsole.log(reaction.id);",
      },
      python: {
        method: 'reactions.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nreaction = client.reactions.create(\n    resource_id="resource_id",\n)\nprint(reaction.id)',
      },
      ruby: {
        method: 'reactions.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nreaction = whop.reactions.create(resource_id: "resource_id")\n\nputs(reaction)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/reactions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "resource_id": "resource_id"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/reactions/{id}',
    httpMethod: 'get',
    summary: 'Retrieve reaction',
    description: 'Retrieves the details of an existing reaction.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) reactions > (method) retrieve',
    qualified: 'client.reactions.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; emoji: string; resource_id: string; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## retrieve\n\n`client.reactions.retrieve(id: string): { id: string; emoji: string; resource_id: string; user: object; }`\n\n**get** `/reactions/{id}`\n\nRetrieves the details of an existing reaction.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; emoji: string; resource_id: string; user: { id: string; name: string; username: string; }; }`\n  A single reaction left by a user on a feed post, such as a like or emoji.\n\n  - `id: string`\n  - `emoji: string`\n  - `resource_id: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst reaction = await client.reactions.retrieve('reac_xxxxxxxxxxxxxxxxxxxxxx');\n\nconsole.log(reaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reactions.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst reaction = await client.reactions.retrieve('reac_xxxxxxxxxxxxxxxxxxxxxx');\n\nconsole.log(reaction.id);",
      },
      python: {
        method: 'reactions.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nreaction = client.reactions.retrieve(\n    "reac_xxxxxxxxxxxxxxxxxxxxxx",\n)\nprint(reaction.id)',
      },
      ruby: {
        method: 'reactions.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nreaction = whop.reactions.retrieve("reac_xxxxxxxxxxxxxxxxxxxxxx")\n\nputs(reaction)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/reactions/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/reactions/{id}',
    httpMethod: 'delete',
    summary: 'Delete reaction',
    description:
      'Remove an emoji reaction from a message or forum post. Only the reaction author or a channel admin can remove a reaction.\n\nRequired permissions:\n - `chat:read`',
    stainlessPath: '(resource) reactions > (method) delete',
    qualified: 'client.reactions.delete',
    params: ['id: string;', 'emoji?: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.reactions.delete(id: string, emoji?: string): boolean`\n\n**delete** `/reactions/{id}`\n\nRemove an emoji reaction from a message or forum post. Only the reaction author or a channel admin can remove a reaction.\n\nRequired permissions:\n - `chat:read`\n\n### Parameters\n\n- `id: string`\n\n- `emoji?: string`\n  The emoji to remove, in shortcode or unicode format. For example, ':heart:' or a unicode emoji. Required when the id refers to a message or post instead of a reaction.\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst reaction = await client.reactions.delete('reac_xxxxxxxxxxxxxxxxxxxxxx');\n\nconsole.log(reaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reactions.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst reaction = await client.reactions.delete('reac_xxxxxxxxxxxxxxxxxxxxxx');\n\nconsole.log(reaction);",
      },
      python: {
        method: 'reactions.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nreaction = client.reactions.delete(\n    id="reac_xxxxxxxxxxxxxxxxxxxxxx",\n)\nprint(reaction)',
      },
      ruby: {
        method: 'reactions.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nreaction = whop.reactions.delete("reac_xxxxxxxxxxxxxxxxxxxxxx")\n\nputs(reaction)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/reactions/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/members',
    httpMethod: 'get',
    summary: 'List members',
    description:
      'Returns a paginated list of members for a company, with extensive filtering by product, plan, status, access level, and more.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n - `member:phone:read`',
    stainlessPath: '(resource) members > (method) list',
    qualified: 'client.members.list',
    params: [
      "access_level?: 'no_access' | 'admin' | 'customer';",
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'most_recent_actions?: string[];',
      "order?: 'id' | 'usd_total_spent' | 'created_at' | 'joined_at' | 'most_recent_action';",
      'plan_ids?: string[];',
      'product_ids?: string[];',
      'promo_code_ids?: string[];',
      'query?: string;',
      "statuses?: 'drafted' | 'joined' | 'left'[];",
      'user_ids?: string[];',
    ],
    response:
      "{ id: string; access_level: 'no_access' | 'admin' | 'customer'; company_token_balance: number; created_at: string; joined_at: string; most_recent_action: string; most_recent_action_at: string; phone: string; status: 'drafted' | 'joined' | 'left'; updated_at: string; usd_total_spent: number; user: { id: string; email: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.members.list(access_level?: 'no_access' | 'admin' | 'customer', after?: string, before?: string, company_id?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, most_recent_actions?: string[], order?: 'id' | 'usd_total_spent' | 'created_at' | 'joined_at' | 'most_recent_action', plan_ids?: string[], product_ids?: string[], promo_code_ids?: string[], query?: string, statuses?: 'drafted' | 'joined' | 'left'[], user_ids?: string[]): { id: string; access_level: access_level; company_token_balance: number; created_at: string; joined_at: string; most_recent_action: member_most_recent_actions; most_recent_action_at: string; phone: string; status: member_statuses; updated_at: string; usd_total_spent: number; user: object; }`\n\n**get** `/members`\n\nReturns a paginated list of members for a company, with extensive filtering by product, plan, status, access level, and more.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n - `member:phone:read`\n\n### Parameters\n\n- `access_level?: 'no_access' | 'admin' | 'customer'`\n  The access level a given user (or company) has to a product or company.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of the company to list members for.\n\n- `created_after?: string`\n  Only return members created after this timestamp.\n\n- `created_before?: string`\n  Only return members created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `most_recent_actions?: string[]`\n  Filter members by their most recent activity type.\n\n- `order?: 'id' | 'usd_total_spent' | 'created_at' | 'joined_at' | 'most_recent_action'`\n  Which columns can be used to sort.\n\n- `plan_ids?: string[]`\n  Filter members to only those subscribed to these specific plans.\n\n- `product_ids?: string[]`\n  Filter members to only those belonging to these specific products.\n\n- `promo_code_ids?: string[]`\n  Filter members to only those who used these specific promo codes.\n\n- `query?: string`\n  Search members by name, username, or email. Email filtering requires the member:email:read permission.\n\n- `statuses?: 'drafted' | 'joined' | 'left'[]`\n  Filter members by their current subscription status.\n\n- `user_ids?: string[]`\n  Filter members to only those matching these specific user identifiers.\n\n### Returns\n\n- `{ id: string; access_level: 'no_access' | 'admin' | 'customer'; company_token_balance: number; created_at: string; joined_at: string; most_recent_action: string; most_recent_action_at: string; phone: string; status: 'drafted' | 'joined' | 'left'; updated_at: string; usd_total_spent: number; user: { id: string; email: string; name: string; username: string; }; }`\n  A member represents a user's relationship with a company on Whop, including their access level, status, and spending history.\n\n  - `id: string`\n  - `access_level: 'no_access' | 'admin' | 'customer'`\n  - `company_token_balance: number`\n  - `created_at: string`\n  - `joined_at: string`\n  - `most_recent_action: string`\n  - `most_recent_action_at: string`\n  - `phone: string`\n  - `status: 'drafted' | 'joined' | 'left'`\n  - `updated_at: string`\n  - `usd_total_spent: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const memberListResponse of client.members.list()) {\n  console.log(memberListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.members.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const memberListResponse of client.members.list()) {\n  console.log(memberListResponse.id);\n}",
      },
      python: {
        method: 'members.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.members.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'members.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.members.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/members \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/members/{id}',
    httpMethod: 'get',
    summary: 'Retrieve member',
    description:
      'Retrieves the details of an existing member.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n - `member:phone:read`',
    stainlessPath: '(resource) members > (method) retrieve',
    qualified: 'client.members.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; access_level: 'no_access' | 'admin' | 'customer'; company: { id: string; route: string; title: string; }; company_token_balance: number; created_at: string; joined_at: string; most_recent_action: string; most_recent_action_at: string; phone: string; status: 'drafted' | 'joined' | 'left'; updated_at: string; usd_total_spent: number; user: { id: string; email: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.members.retrieve(id: string): { id: string; access_level: access_level; company: object; company_token_balance: number; created_at: string; joined_at: string; most_recent_action: member_most_recent_actions; most_recent_action_at: string; phone: string; status: member_statuses; updated_at: string; usd_total_spent: number; user: object; }`\n\n**get** `/members/{id}`\n\nRetrieves the details of an existing member.\n\nRequired permissions:\n - `member:basic:read`\n - `member:email:read`\n - `member:phone:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; access_level: 'no_access' | 'admin' | 'customer'; company: { id: string; route: string; title: string; }; company_token_balance: number; created_at: string; joined_at: string; most_recent_action: string; most_recent_action_at: string; phone: string; status: 'drafted' | 'joined' | 'left'; updated_at: string; usd_total_spent: number; user: { id: string; email: string; name: string; username: string; }; }`\n  A member represents a user's relationship with a company on Whop, including their access level, status, and spending history.\n\n  - `id: string`\n  - `access_level: 'no_access' | 'admin' | 'customer'`\n  - `company: { id: string; route: string; title: string; }`\n  - `company_token_balance: number`\n  - `created_at: string`\n  - `joined_at: string`\n  - `most_recent_action: string`\n  - `most_recent_action_at: string`\n  - `phone: string`\n  - `status: 'drafted' | 'joined' | 'left'`\n  - `updated_at: string`\n  - `usd_total_spent: number`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst member = await client.members.retrieve('id');\n\nconsole.log(member);\n```",
    perLanguage: {
      typescript: {
        method: 'client.members.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst member = await client.members.retrieve('id');\n\nconsole.log(member.id);",
      },
      python: {
        method: 'members.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nmember = client.members.retrieve(\n    "id",\n)\nprint(member.id)',
      },
      ruby: {
        method: 'members.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nmember = whop.members.retrieve("id")\n\nputs(member)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/members/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/forums',
    httpMethod: 'get',
    summary: 'List forums',
    description:
      'Returns a paginated list of forums within a specific company, with optional filtering by product.\n\nRequired permissions:\n - `forum:read`',
    stainlessPath: '(resource) forums > (method) list',
    qualified: 'client.forums.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
      'product_id?: string;',
    ],
    response:
      "{ id: string; email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'; experience: { id: string; name: string; }; who_can_comment: 'everyone' | 'admins'; who_can_post: 'everyone' | 'admins'; }",
    markdown:
      "## list\n\n`client.forums.list(company_id: string, after?: string, before?: string, first?: number, last?: number, product_id?: string): { id: string; email_notification_preference: email_notification_preferences; experience: object; who_can_comment: who_can_comment_types; who_can_post: who_can_post_types; }`\n\n**get** `/forums`\n\nReturns a paginated list of forums within a specific company, with optional filtering by product.\n\nRequired permissions:\n - `forum:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list forums for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `product_id?: string`\n  The unique identifier of a product to filter by. When set, only forums connected to this product are returned.\n\n### Returns\n\n- `{ id: string; email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'; experience: { id: string; name: string; }; who_can_comment: 'everyone' | 'admins'; who_can_post: 'everyone' | 'admins'; }`\n  A discussion forum where members can create posts, comment, and react, belonging to an experience.\n\n  - `id: string`\n  - `email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'`\n  - `experience: { id: string; name: string; }`\n  - `who_can_comment: 'everyone' | 'admins'`\n  - `who_can_post: 'everyone' | 'admins'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const forumListResponse of client.forums.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(forumListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.forums.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const forumListResponse of client.forums.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(forumListResponse.id);\n}",
      },
      python: {
        method: 'forums.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.forums.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'forums.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.forums.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/forums \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/forums/{id}',
    httpMethod: 'get',
    summary: 'Retrieve forum',
    description: 'Retrieves the details of an existing forum.\n\nRequired permissions:\n - `forum:read`',
    stainlessPath: '(resource) forums > (method) retrieve',
    qualified: 'client.forums.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'; experience: { id: string; name: string; }; who_can_comment: 'everyone' | 'admins'; who_can_post: 'everyone' | 'admins'; }",
    markdown:
      "## retrieve\n\n`client.forums.retrieve(id: string): { id: string; email_notification_preference: email_notification_preferences; experience: object; who_can_comment: who_can_comment_types; who_can_post: who_can_post_types; }`\n\n**get** `/forums/{id}`\n\nRetrieves the details of an existing forum.\n\nRequired permissions:\n - `forum:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'; experience: { id: string; name: string; }; who_can_comment: 'everyone' | 'admins'; who_can_post: 'everyone' | 'admins'; }`\n  A discussion forum where members can create posts, comment, and react, belonging to an experience.\n\n  - `id: string`\n  - `email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'`\n  - `experience: { id: string; name: string; }`\n  - `who_can_comment: 'everyone' | 'admins'`\n  - `who_can_post: 'everyone' | 'admins'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst forum = await client.forums.retrieve('id');\n\nconsole.log(forum);\n```",
    perLanguage: {
      typescript: {
        method: 'client.forums.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst forum = await client.forums.retrieve('id');\n\nconsole.log(forum.id);",
      },
      python: {
        method: 'forums.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nforum = client.forums.retrieve(\n    "id",\n)\nprint(forum.id)',
      },
      ruby: {
        method: 'forums.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nforum = whop.forums.retrieve("id")\n\nputs(forum)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/forums/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/forums/{id}',
    httpMethod: 'patch',
    summary: 'Update forum',
    description:
      'Update moderation and notification settings for a forum, such as who can post, who can comment, and email notification preferences.\n\nRequired permissions:\n - `forum:moderate`',
    stainlessPath: '(resource) forums > (method) update',
    qualified: 'client.forums.update',
    params: [
      'id: string;',
      'banned_words?: string[];',
      'banner_image?: { id: string; };',
      "email_notification_preference?: 'all_admin_posts' | 'only_weekly_summary' | 'none';",
      "who_can_comment?: 'everyone' | 'admins';",
      "who_can_post?: 'everyone' | 'admins';",
    ],
    response:
      "{ id: string; email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'; experience: { id: string; name: string; }; who_can_comment: 'everyone' | 'admins'; who_can_post: 'everyone' | 'admins'; }",
    markdown:
      "## update\n\n`client.forums.update(id: string, banned_words?: string[], banner_image?: { id: string; }, email_notification_preference?: 'all_admin_posts' | 'only_weekly_summary' | 'none', who_can_comment?: 'everyone' | 'admins', who_can_post?: 'everyone' | 'admins'): { id: string; email_notification_preference: email_notification_preferences; experience: object; who_can_comment: who_can_comment_types; who_can_post: who_can_post_types; }`\n\n**patch** `/forums/{id}`\n\nUpdate moderation and notification settings for a forum, such as who can post, who can comment, and email notification preferences.\n\nRequired permissions:\n - `forum:moderate`\n\n### Parameters\n\n- `id: string`\n\n- `banned_words?: string[]`\n  A list of words that are automatically blocked from posts in this forum. For example, ['spam', 'scam'].\n\n- `banner_image?: { id: string; }`\n  The banner image displayed at the top of the forum page. Pass null to remove the existing banner.\n  - `id: string`\n    The ID of an existing file object.\n\n- `email_notification_preference?: 'all_admin_posts' | 'only_weekly_summary' | 'none'`\n  Email notification preference option for a forum feed\n\n- `who_can_comment?: 'everyone' | 'admins'`\n  Who can comment on a forum feed\n\n- `who_can_post?: 'everyone' | 'admins'`\n  Who can post on a forum feed\n\n### Returns\n\n- `{ id: string; email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'; experience: { id: string; name: string; }; who_can_comment: 'everyone' | 'admins'; who_can_post: 'everyone' | 'admins'; }`\n  A discussion forum where members can create posts, comment, and react, belonging to an experience.\n\n  - `id: string`\n  - `email_notification_preference: 'all_admin_posts' | 'only_weekly_summary' | 'none'`\n  - `experience: { id: string; name: string; }`\n  - `who_can_comment: 'everyone' | 'admins'`\n  - `who_can_post: 'everyone' | 'admins'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst forum = await client.forums.update('id');\n\nconsole.log(forum);\n```",
    perLanguage: {
      typescript: {
        method: 'client.forums.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst forum = await client.forums.update('id');\n\nconsole.log(forum.id);",
      },
      python: {
        method: 'forums.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nforum = client.forums.update(\n    id="id",\n)\nprint(forum.id)',
      },
      ruby: {
        method: 'forums.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nforum = whop.forums.update("id")\n\nputs(forum)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/forums/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/promo_codes',
    httpMethod: 'get',
    summary: 'List promo codes',
    description:
      'Returns a paginated list of promo codes belonging to a company, with optional filtering by product, plan, and status.\n\nRequired permissions:\n - `promo_code:basic:read`\n - `access_pass:basic:read`',
    stainlessPath: '(resource) promo_codes > (method) list',
    qualified: 'client.promoCodes.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'first?: number;',
      'last?: number;',
      'plan_ids?: string[];',
      'product_ids?: string[];',
      "status?: 'active' | 'inactive' | 'archived';",
    ],
    response:
      "{ id: string; amount_off: number; churned_users_only: boolean; code: string; created_at: string; currency: string; duration: 'forever' | 'once' | 'repeating'; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: { id: string; title: string; }; promo_duration_months: number; promo_type: 'percentage' | 'flat_amount'; status: 'active' | 'inactive' | 'archived'; stock: number; unlimited_stock: boolean; uses: number; }",
    markdown:
      "## list\n\n`client.promoCodes.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, first?: number, last?: number, plan_ids?: string[], product_ids?: string[], status?: 'active' | 'inactive' | 'archived'): { id: string; amount_off: number; churned_users_only: boolean; code: string; created_at: string; currency: currency; duration: promo_duration; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: object; promo_duration_months: number; promo_type: promo_type; status: promo_code_status; stock: number; unlimited_stock: boolean; uses: number; }`\n\n**get** `/promo_codes`\n\nReturns a paginated list of promo codes belonging to a company, with optional filtering by product, plan, and status.\n\nRequired permissions:\n - `promo_code:basic:read`\n - `access_pass:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list promo codes for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return promo codes created after this timestamp.\n\n- `created_before?: string`\n  Only return promo codes created before this timestamp.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `plan_ids?: string[]`\n  Filter to only promo codes scoped to these plan identifiers.\n\n- `product_ids?: string[]`\n  Filter to only promo codes scoped to these product identifiers.\n\n- `status?: 'active' | 'inactive' | 'archived'`\n  Statuses for promo codes\n\n### Returns\n\n- `{ id: string; amount_off: number; churned_users_only: boolean; code: string; created_at: string; currency: string; duration: 'forever' | 'once' | 'repeating'; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: { id: string; title: string; }; promo_duration_months: number; promo_type: 'percentage' | 'flat_amount'; status: 'active' | 'inactive' | 'archived'; stock: number; unlimited_stock: boolean; uses: number; }`\n  A promo code applies a discount to a plan during checkout. Promo codes can be percentage-based or fixed-amount, and can have usage limits and expiration dates.\n\n  - `id: string`\n  - `amount_off: number`\n  - `churned_users_only: boolean`\n  - `code: string`\n  - `created_at: string`\n  - `currency: string`\n  - `duration: 'forever' | 'once' | 'repeating'`\n  - `existing_memberships_only: boolean`\n  - `expires_at: string`\n  - `new_users_only: boolean`\n  - `one_per_customer: boolean`\n  - `product: { id: string; title: string; }`\n  - `promo_duration_months: number`\n  - `promo_type: 'percentage' | 'flat_amount'`\n  - `status: 'active' | 'inactive' | 'archived'`\n  - `stock: number`\n  - `unlimited_stock: boolean`\n  - `uses: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const promoCodeListResponse of client.promoCodes.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(promoCodeListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.promoCodes.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const promoCodeListResponse of client.promoCodes.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(promoCodeListResponse.id);\n}",
      },
      python: {
        method: 'promo_codes.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.promo_codes.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'promo_codes.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.promo_codes.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/promo_codes \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/promo_codes',
    httpMethod: 'post',
    summary: 'Create promo code',
    description:
      'Create a new promo code that applies a discount at checkout. Can be scoped to specific products or plans.\n\nRequired permissions:\n - `promo_code:create`\n - `access_pass:basic:read`',
    stainlessPath: '(resource) promo_codes > (method) create',
    qualified: 'client.promoCodes.create',
    params: [
      'amount_off: number;',
      'base_currency: string;',
      'code: string;',
      'company_id: string;',
      'new_users_only: boolean;',
      'promo_duration_months: number;',
      "promo_type: 'percentage' | 'flat_amount';",
      'churned_users_only?: boolean;',
      'existing_memberships_only?: boolean;',
      'expires_at?: string;',
      'one_per_customer?: boolean;',
      'plan_ids?: string[];',
      'product_id?: string;',
      'stock?: number;',
      'unlimited_stock?: boolean;',
    ],
    response:
      "{ id: string; amount_off: number; churned_users_only: boolean; code: string; company: { id: string; title: string; }; created_at: string; currency: string; duration: 'forever' | 'once' | 'repeating'; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: { id: string; title: string; }; promo_duration_months: number; promo_type: 'percentage' | 'flat_amount'; status: 'active' | 'inactive' | 'archived'; stock: number; unlimited_stock: boolean; uses: number; }",
    markdown:
      "## create\n\n`client.promoCodes.create(amount_off: number, base_currency: string, code: string, company_id: string, new_users_only: boolean, promo_duration_months: number, promo_type: 'percentage' | 'flat_amount', churned_users_only?: boolean, existing_memberships_only?: boolean, expires_at?: string, one_per_customer?: boolean, plan_ids?: string[], product_id?: string, stock?: number, unlimited_stock?: boolean): { id: string; amount_off: number; churned_users_only: boolean; code: string; company: object; created_at: string; currency: currency; duration: promo_duration; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: object; promo_duration_months: number; promo_type: promo_type; status: promo_code_status; stock: number; unlimited_stock: boolean; uses: number; }`\n\n**post** `/promo_codes`\n\nCreate a new promo code that applies a discount at checkout. Can be scoped to specific products or plans.\n\nRequired permissions:\n - `promo_code:create`\n - `access_pass:basic:read`\n\n### Parameters\n\n- `amount_off: number`\n  The discount amount. When promo_type is percentage, this is the percent off (e.g., 20 for 20% off). When promo_type is flat_amount, this is the currency amount off (e.g., 10.00 for $10.00 off).\n\n- `base_currency: string`\n  The three-letter ISO currency code for the promo code discount.\n\n- `code: string`\n  The alphanumeric code customers enter at checkout to apply the discount.\n\n- `company_id: string`\n  The unique identifier of the company to create this promo code for.\n\n- `new_users_only: boolean`\n  Whether to restrict this promo code to only users who have never purchased from the company before.\n\n- `promo_duration_months: number`\n  The number of billing months the discount remains active. For example, 3 means the discount applies to the first 3 billing cycles.\n\n- `promo_type: 'percentage' | 'flat_amount'`\n  The discount type, either percentage or flat_amount.\n\n- `churned_users_only?: boolean`\n  Whether to restrict this promo code to only users who have previously churned from the company.\n\n- `existing_memberships_only?: boolean`\n  Whether this promo code can only be applied to existing memberships, such as for cancellation retention offers.\n\n- `expires_at?: string`\n  The datetime when the promo code expires and can no longer be used. Null means it never expires.\n\n- `one_per_customer?: boolean`\n  Whether each customer can only use this promo code once.\n\n- `plan_ids?: string[]`\n  The identifiers of plans this promo code applies to. When product_id is also provided, only plans attached to that product are included.\n\n- `product_id?: string`\n  The identifier of the product to scope this promo code to. When provided, the promo code only applies to plans attached to this product.\n\n- `stock?: number`\n  The maximum number of times this promo code can be used. Ignored when unlimited_stock is true.\n\n- `unlimited_stock?: boolean`\n  Whether the promo code can be used an unlimited number of times.\n\n### Returns\n\n- `{ id: string; amount_off: number; churned_users_only: boolean; code: string; company: { id: string; title: string; }; created_at: string; currency: string; duration: 'forever' | 'once' | 'repeating'; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: { id: string; title: string; }; promo_duration_months: number; promo_type: 'percentage' | 'flat_amount'; status: 'active' | 'inactive' | 'archived'; stock: number; unlimited_stock: boolean; uses: number; }`\n  A promo code applies a discount to a plan during checkout. Promo codes can be percentage-based or fixed-amount, and can have usage limits and expiration dates.\n\n  - `id: string`\n  - `amount_off: number`\n  - `churned_users_only: boolean`\n  - `code: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `duration: 'forever' | 'once' | 'repeating'`\n  - `existing_memberships_only: boolean`\n  - `expires_at: string`\n  - `new_users_only: boolean`\n  - `one_per_customer: boolean`\n  - `product: { id: string; title: string; }`\n  - `promo_duration_months: number`\n  - `promo_type: 'percentage' | 'flat_amount'`\n  - `status: 'active' | 'inactive' | 'archived'`\n  - `stock: number`\n  - `unlimited_stock: boolean`\n  - `uses: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst promoCode = await client.promoCodes.create({\n  amount_off: 6.9,\n  base_currency: 'usd',\n  code: 'code',\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  new_users_only: true,\n  promo_duration_months: 42,\n  promo_type: 'percentage',\n});\n\nconsole.log(promoCode);\n```",
    perLanguage: {
      typescript: {
        method: 'client.promoCodes.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst promoCode = await client.promoCodes.create({\n  amount_off: 6.9,\n  base_currency: 'usd',\n  code: 'code',\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  new_users_only: true,\n  promo_duration_months: 42,\n  promo_type: 'percentage',\n});\n\nconsole.log(promoCode.id);",
      },
      python: {
        method: 'promo_codes.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npromo_code = client.promo_codes.create(\n    amount_off=6.9,\n    base_currency="usd",\n    code="code",\n    company_id="biz_xxxxxxxxxxxxxx",\n    new_users_only=True,\n    promo_duration_months=42,\n    promo_type="percentage",\n)\nprint(promo_code.id)',
      },
      ruby: {
        method: 'promo_codes.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npromo_code = whop.promo_codes.create(\n  amount_off: 6.9,\n  base_currency: :usd,\n  code: "code",\n  company_id: "biz_xxxxxxxxxxxxxx",\n  new_users_only: true,\n  promo_duration_months: 42,\n  promo_type: :percentage\n)\n\nputs(promo_code)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/promo_codes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "amount_off": 6.9,\n          "base_currency": "usd",\n          "code": "code",\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "new_users_only": true,\n          "promo_duration_months": 42,\n          "promo_type": "percentage",\n          "expires_at": "2023-12-01T05:00:00.401Z",\n          "product_id": "prod_xxxxxxxxxxxxx",\n          "stock": 42\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/promo_codes/{id}',
    httpMethod: 'get',
    summary: 'Retrieve promo code',
    description:
      'Retrieves the details of an existing promo code.\n\nRequired permissions:\n - `promo_code:basic:read`\n - `access_pass:basic:read`',
    stainlessPath: '(resource) promo_codes > (method) retrieve',
    qualified: 'client.promoCodes.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; amount_off: number; churned_users_only: boolean; code: string; company: { id: string; title: string; }; created_at: string; currency: string; duration: 'forever' | 'once' | 'repeating'; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: { id: string; title: string; }; promo_duration_months: number; promo_type: 'percentage' | 'flat_amount'; status: 'active' | 'inactive' | 'archived'; stock: number; unlimited_stock: boolean; uses: number; }",
    markdown:
      "## retrieve\n\n`client.promoCodes.retrieve(id: string): { id: string; amount_off: number; churned_users_only: boolean; code: string; company: object; created_at: string; currency: currency; duration: promo_duration; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: object; promo_duration_months: number; promo_type: promo_type; status: promo_code_status; stock: number; unlimited_stock: boolean; uses: number; }`\n\n**get** `/promo_codes/{id}`\n\nRetrieves the details of an existing promo code.\n\nRequired permissions:\n - `promo_code:basic:read`\n - `access_pass:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount_off: number; churned_users_only: boolean; code: string; company: { id: string; title: string; }; created_at: string; currency: string; duration: 'forever' | 'once' | 'repeating'; existing_memberships_only: boolean; expires_at: string; new_users_only: boolean; one_per_customer: boolean; product: { id: string; title: string; }; promo_duration_months: number; promo_type: 'percentage' | 'flat_amount'; status: 'active' | 'inactive' | 'archived'; stock: number; unlimited_stock: boolean; uses: number; }`\n  A promo code applies a discount to a plan during checkout. Promo codes can be percentage-based or fixed-amount, and can have usage limits and expiration dates.\n\n  - `id: string`\n  - `amount_off: number`\n  - `churned_users_only: boolean`\n  - `code: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `duration: 'forever' | 'once' | 'repeating'`\n  - `existing_memberships_only: boolean`\n  - `expires_at: string`\n  - `new_users_only: boolean`\n  - `one_per_customer: boolean`\n  - `product: { id: string; title: string; }`\n  - `promo_duration_months: number`\n  - `promo_type: 'percentage' | 'flat_amount'`\n  - `status: 'active' | 'inactive' | 'archived'`\n  - `stock: number`\n  - `unlimited_stock: boolean`\n  - `uses: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst promoCode = await client.promoCodes.retrieve('promo_xxxxxxxxxxxx');\n\nconsole.log(promoCode);\n```",
    perLanguage: {
      typescript: {
        method: 'client.promoCodes.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst promoCode = await client.promoCodes.retrieve('promo_xxxxxxxxxxxx');\n\nconsole.log(promoCode.id);",
      },
      python: {
        method: 'promo_codes.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npromo_code = client.promo_codes.retrieve(\n    "promo_xxxxxxxxxxxx",\n)\nprint(promo_code.id)',
      },
      ruby: {
        method: 'promo_codes.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npromo_code = whop.promo_codes.retrieve("promo_xxxxxxxxxxxx")\n\nputs(promo_code)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/promo_codes/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/promo_codes/{id}',
    httpMethod: 'delete',
    summary: 'Delete promo code',
    description:
      'Archive a promo code, preventing it from being used in future checkouts. Existing memberships are not affected.\n\nRequired permissions:\n - `promo_code:delete`',
    stainlessPath: '(resource) promo_codes > (method) delete',
    qualified: 'client.promoCodes.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.promoCodes.delete(id: string): boolean`\n\n**delete** `/promo_codes/{id}`\n\nArchive a promo code, preventing it from being used in future checkouts. Existing memberships are not affected.\n\nRequired permissions:\n - `promo_code:delete`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst promoCode = await client.promoCodes.delete('promo_xxxxxxxxxxxx');\n\nconsole.log(promoCode);\n```",
    perLanguage: {
      typescript: {
        method: 'client.promoCodes.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst promoCode = await client.promoCodes.delete('promo_xxxxxxxxxxxx');\n\nconsole.log(promoCode);",
      },
      python: {
        method: 'promo_codes.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npromo_code = client.promo_codes.delete(\n    "promo_xxxxxxxxxxxx",\n)\nprint(promo_code)',
      },
      ruby: {
        method: 'promo_codes.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npromo_code = whop.promo_codes.delete("promo_xxxxxxxxxxxx")\n\nputs(promo_code)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/promo_codes/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/courses',
    httpMethod: 'get',
    summary: 'List courses',
    description:
      'Returns a paginated list of courses, filtered by either an experience or a company.\n\nRequired permissions:\n - `courses:read`',
    stainlessPath: '(resource) courses > (method) list',
    qualified: 'client.courses.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'experience_id?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; certificate_after_completion_enabled: boolean; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## list\n\n`client.courses.list(after?: string, before?: string, company_id?: string, experience_id?: string, first?: number, last?: number): { id: string; certificate_after_completion_enabled: boolean; cover_image: string; created_at: string; description: string; language: languages; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: object; title: string; updated_at: string; visibility: course_visibilities; }`\n\n**get** `/courses`\n\nReturns a paginated list of courses, filtered by either an experience or a company.\n\nRequired permissions:\n - `courses:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of the company to list courses for.\n\n- `experience_id?: string`\n  The unique identifier of the experience to list courses for.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; certificate_after_completion_enabled: boolean; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }`\n  A structured learning module containing chapters and lessons, belonging to an experience.\n\n  - `id: string`\n  - `certificate_after_completion_enabled: boolean`\n  - `cover_image: string`\n  - `created_at: string`\n  - `description: string`\n  - `language: string`\n  - `order: string`\n  - `require_completing_lessons_in_order: boolean`\n  - `tagline: string`\n  - `thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }`\n  - `title: string`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const courseListResponse of client.courses.list()) {\n  console.log(courseListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.courses.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const courseListResponse of client.courses.list()) {\n  console.log(courseListResponse.id);\n}",
      },
      python: {
        method: 'courses.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.courses.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'courses.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.courses.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/courses \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/courses',
    httpMethod: 'post',
    summary: 'Create course',
    description:
      'Create a new course within an experience, with optional chapters, lessons, and a certificate.\n\nRequired permissions:\n - `courses:update`',
    stainlessPath: '(resource) courses > (method) create',
    qualified: 'client.courses.create',
    params: [
      'experience_id: string;',
      'title: string;',
      'certificate_after_completion_enabled?: boolean;',
      'order?: string;',
      'require_completing_lessons_in_order?: boolean;',
      'tagline?: string;',
      'thumbnail?: { id: string; };',
      "visibility?: 'visible' | 'hidden';",
    ],
    response:
      "{ id: string; certificate_after_completion_enabled: boolean; chapters: { id: string; lessons: { id: string; lesson_type: lesson_types; order: number; thumbnail: object; title: string; video_asset: object; }[]; order: number; title: string; }[]; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## create\n\n`client.courses.create(experience_id: string, title: string, certificate_after_completion_enabled?: boolean, order?: string, require_completing_lessons_in_order?: boolean, tagline?: string, thumbnail?: { id: string; }, visibility?: 'visible' | 'hidden'): { id: string; certificate_after_completion_enabled: boolean; chapters: object[]; cover_image: string; created_at: string; description: string; language: languages; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: object; title: string; updated_at: string; visibility: course_visibilities; }`\n\n**post** `/courses`\n\nCreate a new course within an experience, with optional chapters, lessons, and a certificate.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `experience_id: string`\n  The unique identifier of the experience to create the course in (e.g., \"exp_XXXXX\").\n\n- `title: string`\n  The display title of the course (e.g., \"Introduction to Web Development\").\n\n- `certificate_after_completion_enabled?: boolean`\n  Whether the course awards students a PDF certificate after completing all lessons.\n\n- `order?: string`\n  The decimal order position of the course within its experience. Use fractional values (e.g., \"1.5\") to place between existing courses.\n\n- `require_completing_lessons_in_order?: boolean`\n  Whether students must complete each lesson sequentially before advancing to the next one.\n\n- `tagline?: string`\n  A short tagline displayed beneath the course title (e.g., \"Master the fundamentals of design\").\n\n- `thumbnail?: { id: string; }`\n  The thumbnail image for the course in PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `visibility?: 'visible' | 'hidden'`\n  The available visibilities for a course. Determines how / whether a course is visible to users.\n\n### Returns\n\n- `{ id: string; certificate_after_completion_enabled: boolean; chapters: { id: string; lessons: { id: string; lesson_type: lesson_types; order: number; thumbnail: object; title: string; video_asset: object; }[]; order: number; title: string; }[]; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }`\n  A structured learning module containing chapters and lessons, belonging to an experience.\n\n  - `id: string`\n  - `certificate_after_completion_enabled: boolean`\n  - `chapters: { id: string; lessons: { id: string; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; order: number; thumbnail: { url: string; }; title: string; video_asset: { duration_seconds: number; signed_playback_id: string; signed_thumbnail_playback_token: string; }; }[]; order: number; title: string; }[]`\n  - `cover_image: string`\n  - `created_at: string`\n  - `description: string`\n  - `language: string`\n  - `order: string`\n  - `require_completing_lessons_in_order: boolean`\n  - `tagline: string`\n  - `thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }`\n  - `title: string`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst course = await client.courses.create({ experience_id: 'exp_xxxxxxxxxxxxxx', title: 'title' });\n\nconsole.log(course);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courses.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst course = await client.courses.create({ experience_id: 'exp_xxxxxxxxxxxxxx', title: 'title' });\n\nconsole.log(course.id);",
      },
      python: {
        method: 'courses.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse = client.courses.create(\n    experience_id="exp_xxxxxxxxxxxxxx",\n    title="title",\n)\nprint(course.id)',
      },
      ruby: {
        method: 'courses.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse = whop.courses.create(experience_id: "exp_xxxxxxxxxxxxxx", title: "title")\n\nputs(course)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/courses \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "experience_id": "exp_xxxxxxxxxxxxxx",\n          "title": "title",\n          "order": "123.45"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/courses/{id}',
    httpMethod: 'get',
    summary: 'Retrieve course',
    description: 'Retrieves the details of an existing course.\n\nRequired permissions:\n - `courses:read`',
    stainlessPath: '(resource) courses > (method) retrieve',
    qualified: 'client.courses.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; certificate_after_completion_enabled: boolean; chapters: { id: string; lessons: { id: string; lesson_type: lesson_types; order: number; thumbnail: object; title: string; video_asset: object; }[]; order: number; title: string; }[]; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## retrieve\n\n`client.courses.retrieve(id: string): { id: string; certificate_after_completion_enabled: boolean; chapters: object[]; cover_image: string; created_at: string; description: string; language: languages; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: object; title: string; updated_at: string; visibility: course_visibilities; }`\n\n**get** `/courses/{id}`\n\nRetrieves the details of an existing course.\n\nRequired permissions:\n - `courses:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; certificate_after_completion_enabled: boolean; chapters: { id: string; lessons: { id: string; lesson_type: lesson_types; order: number; thumbnail: object; title: string; video_asset: object; }[]; order: number; title: string; }[]; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }`\n  A structured learning module containing chapters and lessons, belonging to an experience.\n\n  - `id: string`\n  - `certificate_after_completion_enabled: boolean`\n  - `chapters: { id: string; lessons: { id: string; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; order: number; thumbnail: { url: string; }; title: string; video_asset: { duration_seconds: number; signed_playback_id: string; signed_thumbnail_playback_token: string; }; }[]; order: number; title: string; }[]`\n  - `cover_image: string`\n  - `created_at: string`\n  - `description: string`\n  - `language: string`\n  - `order: string`\n  - `require_completing_lessons_in_order: boolean`\n  - `tagline: string`\n  - `thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }`\n  - `title: string`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst course = await client.courses.retrieve('cors_xxxxxxxxxxxxx');\n\nconsole.log(course);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courses.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst course = await client.courses.retrieve('cors_xxxxxxxxxxxxx');\n\nconsole.log(course.id);",
      },
      python: {
        method: 'courses.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse = client.courses.retrieve(\n    "cors_xxxxxxxxxxxxx",\n)\nprint(course.id)',
      },
      ruby: {
        method: 'courses.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse = whop.courses.retrieve("cors_xxxxxxxxxxxxx")\n\nputs(course)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/courses/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/courses/{id}',
    httpMethod: 'patch',
    summary: 'Update course',
    description:
      "Update a course's title, description, visibility, thumbnail, or chapter ordering.\n\nRequired permissions:\n - `courses:update`",
    stainlessPath: '(resource) courses > (method) update',
    qualified: 'client.courses.update',
    params: [
      'id: string;',
      'certificate_after_completion_enabled?: boolean;',
      'chapters?: { id: string; order: number; title: string; lessons?: { id: string; chapter_id: string; order: number; title: string; }[]; }[];',
      'description?: string;',
      'language?: string;',
      'order?: string;',
      'require_completing_lessons_in_order?: boolean;',
      'tagline?: string;',
      'thumbnail?: { id: string; };',
      'title?: string;',
      "visibility?: 'visible' | 'hidden';",
    ],
    response:
      "{ id: string; certificate_after_completion_enabled: boolean; chapters: { id: string; lessons: { id: string; lesson_type: lesson_types; order: number; thumbnail: object; title: string; video_asset: object; }[]; order: number; title: string; }[]; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## update\n\n`client.courses.update(id: string, certificate_after_completion_enabled?: boolean, chapters?: { id: string; order: number; title: string; lessons?: { id: string; chapter_id: string; order: number; title: string; }[]; }[], description?: string, language?: string, order?: string, require_completing_lessons_in_order?: boolean, tagline?: string, thumbnail?: { id: string; }, title?: string, visibility?: 'visible' | 'hidden'): { id: string; certificate_after_completion_enabled: boolean; chapters: object[]; cover_image: string; created_at: string; description: string; language: languages; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: object; title: string; updated_at: string; visibility: course_visibilities; }`\n\n**patch** `/courses/{id}`\n\nUpdate a course's title, description, visibility, thumbnail, or chapter ordering.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `id: string`\n\n- `certificate_after_completion_enabled?: boolean`\n  Whether the course awards students a PDF certificate after completing all lessons.\n\n- `chapters?: { id: string; order: number; title: string; lessons?: { id: string; chapter_id: string; order: number; title: string; }[]; }[]`\n  A list of chapters with nested lessons to reorder or rename in bulk.\n\n- `description?: string`\n  A short description of the course displayed to students on the course page.\n\n- `language?: string`\n  The available languages for a course\n\n- `order?: string`\n  The decimal order position of the course within its experience. Use fractional values (e.g., \"1.5\") to place between existing courses.\n\n- `require_completing_lessons_in_order?: boolean`\n  Whether students must complete each lesson sequentially before advancing to the next one.\n\n- `tagline?: string`\n  A short tagline displayed beneath the course title (e.g., \"Master the fundamentals of design\").\n\n- `thumbnail?: { id: string; }`\n  The thumbnail image for the course in PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `title?: string`\n  The display title of the course (e.g., \"Introduction to Web Development\").\n\n- `visibility?: 'visible' | 'hidden'`\n  The available visibilities for a course. Determines how / whether a course is visible to users.\n\n### Returns\n\n- `{ id: string; certificate_after_completion_enabled: boolean; chapters: { id: string; lessons: { id: string; lesson_type: lesson_types; order: number; thumbnail: object; title: string; video_asset: object; }[]; order: number; title: string; }[]; cover_image: string; created_at: string; description: string; language: string; order: string; require_completing_lessons_in_order: boolean; tagline: string; thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }; title: string; updated_at: string; visibility: 'visible' | 'hidden'; }`\n  A structured learning module containing chapters and lessons, belonging to an experience.\n\n  - `id: string`\n  - `certificate_after_completion_enabled: boolean`\n  - `chapters: { id: string; lessons: { id: string; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; order: number; thumbnail: { url: string; }; title: string; video_asset: { duration_seconds: number; signed_playback_id: string; signed_thumbnail_playback_token: string; }; }[]; order: number; title: string; }[]`\n  - `cover_image: string`\n  - `created_at: string`\n  - `description: string`\n  - `language: string`\n  - `order: string`\n  - `require_completing_lessons_in_order: boolean`\n  - `tagline: string`\n  - `thumbnail: { id: string; content_type: string; filename: string; optimized_url: string; source_url: string; }`\n  - `title: string`\n  - `updated_at: string`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst course = await client.courses.update('cors_xxxxxxxxxxxxx');\n\nconsole.log(course);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courses.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst course = await client.courses.update('cors_xxxxxxxxxxxxx');\n\nconsole.log(course.id);",
      },
      python: {
        method: 'courses.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse = client.courses.update(\n    id="cors_xxxxxxxxxxxxx",\n)\nprint(course.id)',
      },
      ruby: {
        method: 'courses.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse = whop.courses.update("cors_xxxxxxxxxxxxx")\n\nputs(course)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/courses/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/courses/{id}',
    httpMethod: 'delete',
    summary: 'Delete course',
    description:
      'Permanently delete a course and all of its chapters, lessons, and student progress.\n\nRequired permissions:\n - `courses:update`',
    stainlessPath: '(resource) courses > (method) delete',
    qualified: 'client.courses.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.courses.delete(id: string): boolean`\n\n**delete** `/courses/{id}`\n\nPermanently delete a course and all of its chapters, lessons, and student progress.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst course = await client.courses.delete('cors_xxxxxxxxxxxxx');\n\nconsole.log(course);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courses.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst course = await client.courses.delete('cors_xxxxxxxxxxxxx');\n\nconsole.log(course);",
      },
      python: {
        method: 'courses.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse = client.courses.delete(\n    "cors_xxxxxxxxxxxxx",\n)\nprint(course)',
      },
      ruby: {
        method: 'courses.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse = whop.courses.delete("cors_xxxxxxxxxxxxx")\n\nputs(course)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/courses/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/course_chapters',
    httpMethod: 'get',
    summary: 'List course chapters',
    description:
      'Returns a paginated list of chapters within a course, ordered by position.\n\nRequired permissions:\n - `courses:read`',
    stainlessPath: '(resource) course_chapters > (method) list',
    qualified: 'client.courseChapters.list',
    params: [
      'course_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response: '{ id: string; order: number; title: string; }',
    markdown:
      "## list\n\n`client.courseChapters.list(course_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; order: number; title: string; }`\n\n**get** `/course_chapters`\n\nReturns a paginated list of chapters within a course, ordered by position.\n\nRequired permissions:\n - `courses:read`\n\n### Parameters\n\n- `course_id: string`\n  The unique identifier of the course to list chapters for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; order: number; title: string; }`\n  A grouping of related lessons within a course, used to organize content into sections.\n\n  - `id: string`\n  - `order: number`\n  - `title: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const courseChapterListResponse of client.courseChapters.list({ course_id: 'cors_xxxxxxxxxxxxx' })) {\n  console.log(courseChapterListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseChapters.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const courseChapterListResponse of client.courseChapters.list({\n  course_id: 'cors_xxxxxxxxxxxxx',\n})) {\n  console.log(courseChapterListResponse.id);\n}",
      },
      python: {
        method: 'course_chapters.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.course_chapters.list(\n    course_id="cors_xxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'course_chapters.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.course_chapters.list(course_id: "cors_xxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_chapters \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/course_chapters',
    httpMethod: 'post',
    summary: 'Create course chapter',
    description:
      'Create a new chapter within a course to organize lessons into sections.\n\nRequired permissions:\n - `courses:update`',
    stainlessPath: '(resource) course_chapters > (method) create',
    qualified: 'client.courseChapters.create',
    params: ['course_id: string;', 'title?: string;'],
    response:
      '{ id: string; lessons: { id: string; order: number; title: string; }[]; order: number; title: string; }',
    markdown:
      '## create\n\n`client.courseChapters.create(course_id: string, title?: string): { id: string; lessons: object[]; order: number; title: string; }`\n\n**post** `/course_chapters`\n\nCreate a new chapter within a course to organize lessons into sections.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `course_id: string`\n  The unique identifier of the course to create the chapter in (e.g., "course_XXXXX").\n\n- `title?: string`\n  The display title of the chapter (e.g., "Module 1: Introduction").\n\n### Returns\n\n- `{ id: string; lessons: { id: string; order: number; title: string; }[]; order: number; title: string; }`\n  A grouping of related lessons within a course, used to organize content into sections.\n\n  - `id: string`\n  - `lessons: { id: string; order: number; title: string; }[]`\n  - `order: number`\n  - `title: string`\n\n### Example\n\n```typescript\nimport Whop from \'@whop/sdk\';\n\nconst client = new Whop();\n\nconst courseChapter = await client.courseChapters.create({ course_id: \'cors_xxxxxxxxxxxxx\' });\n\nconsole.log(courseChapter);\n```',
    perLanguage: {
      typescript: {
        method: 'client.courseChapters.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseChapter = await client.courseChapters.create({ course_id: 'cors_xxxxxxxxxxxxx' });\n\nconsole.log(courseChapter.id);",
      },
      python: {
        method: 'course_chapters.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_chapter = client.course_chapters.create(\n    course_id="cors_xxxxxxxxxxxxx",\n)\nprint(course_chapter.id)',
      },
      ruby: {
        method: 'course_chapters.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_chapter = whop.course_chapters.create(course_id: "cors_xxxxxxxxxxxxx")\n\nputs(course_chapter)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_chapters \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "course_id": "cors_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/course_chapters/{id}',
    httpMethod: 'get',
    summary: 'Retrieve course chapter',
    description:
      'Retrieves the details of an existing course chapter.\n\nRequired permissions:\n - `courses:read`',
    stainlessPath: '(resource) course_chapters > (method) retrieve',
    qualified: 'client.courseChapters.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; lessons: { id: string; order: number; title: string; }[]; order: number; title: string; }',
    markdown:
      "## retrieve\n\n`client.courseChapters.retrieve(id: string): { id: string; lessons: object[]; order: number; title: string; }`\n\n**get** `/course_chapters/{id}`\n\nRetrieves the details of an existing course chapter.\n\nRequired permissions:\n - `courses:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; lessons: { id: string; order: number; title: string; }[]; order: number; title: string; }`\n  A grouping of related lessons within a course, used to organize content into sections.\n\n  - `id: string`\n  - `lessons: { id: string; order: number; title: string; }[]`\n  - `order: number`\n  - `title: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst courseChapter = await client.courseChapters.retrieve('chap_xxxxxxxxxxxxx');\n\nconsole.log(courseChapter);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseChapters.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseChapter = await client.courseChapters.retrieve('chap_xxxxxxxxxxxxx');\n\nconsole.log(courseChapter.id);",
      },
      python: {
        method: 'course_chapters.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_chapter = client.course_chapters.retrieve(\n    "chap_xxxxxxxxxxxxx",\n)\nprint(course_chapter.id)',
      },
      ruby: {
        method: 'course_chapters.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_chapter = whop.course_chapters.retrieve("chap_xxxxxxxxxxxxx")\n\nputs(course_chapter)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_chapters/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/course_chapters/{id}',
    httpMethod: 'patch',
    summary: 'Update course chapter',
    description: "Update a chapter's title within a course.\n\nRequired permissions:\n - `courses:update`",
    stainlessPath: '(resource) course_chapters > (method) update',
    qualified: 'client.courseChapters.update',
    params: ['id: string;', 'title: string;'],
    response:
      '{ id: string; lessons: { id: string; order: number; title: string; }[]; order: number; title: string; }',
    markdown:
      "## update\n\n`client.courseChapters.update(id: string, title: string): { id: string; lessons: object[]; order: number; title: string; }`\n\n**patch** `/course_chapters/{id}`\n\nUpdate a chapter's title within a course.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `id: string`\n\n- `title: string`\n  The new display title of the chapter (e.g., \"Module 1: Introduction\").\n\n### Returns\n\n- `{ id: string; lessons: { id: string; order: number; title: string; }[]; order: number; title: string; }`\n  A grouping of related lessons within a course, used to organize content into sections.\n\n  - `id: string`\n  - `lessons: { id: string; order: number; title: string; }[]`\n  - `order: number`\n  - `title: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst courseChapter = await client.courseChapters.update('chap_xxxxxxxxxxxxx', { title: 'title' });\n\nconsole.log(courseChapter);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseChapters.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseChapter = await client.courseChapters.update('chap_xxxxxxxxxxxxx', { title: 'title' });\n\nconsole.log(courseChapter.id);",
      },
      python: {
        method: 'course_chapters.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_chapter = client.course_chapters.update(\n    id="chap_xxxxxxxxxxxxx",\n    title="title",\n)\nprint(course_chapter.id)',
      },
      ruby: {
        method: 'course_chapters.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_chapter = whop.course_chapters.update("chap_xxxxxxxxxxxxx", title: "title")\n\nputs(course_chapter)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_chapters/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "title": "title"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/course_chapters/{id}',
    httpMethod: 'delete',
    summary: 'Delete course chapter',
    description:
      'Permanently delete a chapter and all of its lessons from a course.\n\nRequired permissions:\n - `courses:update`',
    stainlessPath: '(resource) course_chapters > (method) delete',
    qualified: 'client.courseChapters.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.courseChapters.delete(id: string): boolean`\n\n**delete** `/course_chapters/{id}`\n\nPermanently delete a chapter and all of its lessons from a course.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst courseChapter = await client.courseChapters.delete('chap_xxxxxxxxxxxxx');\n\nconsole.log(courseChapter);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseChapters.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseChapter = await client.courseChapters.delete('chap_xxxxxxxxxxxxx');\n\nconsole.log(courseChapter);",
      },
      python: {
        method: 'course_chapters.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_chapter = client.course_chapters.delete(\n    "chap_xxxxxxxxxxxxx",\n)\nprint(course_chapter)',
      },
      ruby: {
        method: 'course_chapters.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_chapter = whop.course_chapters.delete("chap_xxxxxxxxxxxxx")\n\nputs(course_chapter)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_chapters/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/course_lessons',
    httpMethod: 'get',
    summary: 'List course lessons',
    description:
      'Returns a paginated list of lessons within a course or chapter, ordered by position.\n\nRequired permissions:\n - `courses:read`',
    stainlessPath: '(resource) course_lessons > (method) list',
    qualified: 'client.courseLessons.list',
    params: [
      'after?: string;',
      'before?: string;',
      'chapter_id?: string;',
      'course_id?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; order: number; thumbnail: { url: string; }; title: string; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## list\n\n`client.courseLessons.list(after?: string, before?: string, chapter_id?: string, course_id?: string, first?: number, last?: number): { id: string; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: embed_type; lesson_type: lesson_types; order: number; thumbnail: object; title: string; visibility: lesson_visibilities; }`\n\n**get** `/course_lessons`\n\nReturns a paginated list of lessons within a course or chapter, ordered by position.\n\nRequired permissions:\n - `courses:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `chapter_id?: string`\n  The unique identifier of a chapter to return only its lessons.\n\n- `course_id?: string`\n  The unique identifier of the course to return all lessons across all chapters.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; order: number; thumbnail: { url: string; }; title: string; visibility: 'visible' | 'hidden'; }`\n  An individual learning unit within a chapter, which can contain text, video, PDF, or assessment content.\n\n  - `id: string`\n  - `content: string`\n  - `created_at: string`\n  - `days_from_course_start_until_unlock: number`\n  - `embed_id: string`\n  - `embed_type: 'youtube' | 'loom'`\n  - `lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'`\n  - `order: number`\n  - `thumbnail: { url: string; }`\n  - `title: string`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const courseLessonListResponse of client.courseLessons.list()) {\n  console.log(courseLessonListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const courseLessonListResponse of client.courseLessons.list()) {\n  console.log(courseLessonListResponse.id);\n}",
      },
      python: {
        method: 'course_lessons.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.course_lessons.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'course_lessons.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.course_lessons.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/course_lessons',
    httpMethod: 'post',
    summary: 'Create course lesson',
    description:
      'Create a new lesson within a course chapter. Lessons can contain video, text, or assessment content.\n\nRequired permissions:\n - `courses:update`',
    stainlessPath: '(resource) course_lessons > (method) create',
    qualified: 'client.courseLessons.create',
    params: [
      'chapter_id: string;',
      "lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check';",
      'content?: string;',
      'days_from_course_start_until_unlock?: number;',
      'embed_id?: string;',
      "embed_type?: 'youtube' | 'loom';",
      'thumbnail?: { id: string; };',
      'title?: string;',
    ],
    response:
      "{ id: string; assessment_questions: { id: string; correct_answer: string; created_at: string; image: object; options: object[]; order: number; question_text: string; question_type: assessment_question_types; }[]; attachments: { id: string; content_type: string; filename: string; url: string; }[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; main_pdf: { id: string; content_type: string; filename: string; url: string; }; order: number; thumbnail: { url: string; }; title: string; video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## create\n\n`client.courseLessons.create(chapter_id: string, lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check', content?: string, days_from_course_start_until_unlock?: number, embed_id?: string, embed_type?: 'youtube' | 'loom', thumbnail?: { id: string; }, title?: string): { id: string; assessment_questions: object[]; attachments: object[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: embed_type; lesson_type: lesson_types; main_pdf: object; order: number; thumbnail: object; title: string; video_asset: object; visibility: lesson_visibilities; }`\n\n**post** `/course_lessons`\n\nCreate a new lesson within a course chapter. Lessons can contain video, text, or assessment content.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `chapter_id: string`\n  The unique identifier of the chapter to create the lesson in (e.g., \"chap_XXXXX\").\n\n- `lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'`\n  The content type of the lesson, such as video, text, quiz, or knowledge check.\n\n- `content?: string`\n  The Markdown content body of the lesson.\n\n- `days_from_course_start_until_unlock?: number`\n  The number of days after a student starts the course before this lesson becomes accessible.\n\n- `embed_id?: string`\n  The external video identifier for embedded content (e.g., a YouTube video ID or Loom share ID).\n\n- `embed_type?: 'youtube' | 'loom'`\n  The type of embed for a lesson\n\n- `thumbnail?: { id: string; }`\n  The thumbnail image for the lesson in PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `title?: string`\n  The display title of the lesson (e.g., \"Getting Started with APIs\").\n\n### Returns\n\n- `{ id: string; assessment_questions: { id: string; correct_answer: string; created_at: string; image: { id: string; content_type: string; filename: string; url: string; }; options: { id: string; is_correct: boolean; option_text: string; order: number; }[]; order: number; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; }[]; attachments: { id: string; content_type: string; filename: string; url: string; }[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; main_pdf: { id: string; content_type: string; filename: string; url: string; }; order: number; thumbnail: { url: string; }; title: string; video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }; visibility: 'visible' | 'hidden'; }`\n  An individual learning unit within a chapter, which can contain text, video, PDF, or assessment content.\n\n  - `id: string`\n  - `assessment_questions: { id: string; correct_answer: string; created_at: string; image: { id: string; content_type: string; filename: string; url: string; }; options: { id: string; is_correct: boolean; option_text: string; order: number; }[]; order: number; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; }[]`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `content: string`\n  - `created_at: string`\n  - `days_from_course_start_until_unlock: number`\n  - `embed_id: string`\n  - `embed_type: 'youtube' | 'loom'`\n  - `lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'`\n  - `main_pdf: { id: string; content_type: string; filename: string; url: string; }`\n  - `order: number`\n  - `thumbnail: { url: string; }`\n  - `title: string`\n  - `video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst lesson = await client.courseLessons.create({ chapter_id: 'chap_xxxxxxxxxxxxx', lesson_type: 'text' });\n\nconsole.log(lesson);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst lesson = await client.courseLessons.create({\n  chapter_id: 'chap_xxxxxxxxxxxxx',\n  lesson_type: 'text',\n});\n\nconsole.log(lesson.id);",
      },
      python: {
        method: 'course_lessons.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nlesson = client.course_lessons.create(\n    chapter_id="chap_xxxxxxxxxxxxx",\n    lesson_type="text",\n)\nprint(lesson.id)',
      },
      ruby: {
        method: 'course_lessons.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nlesson = whop.course_lessons.create(chapter_id: "chap_xxxxxxxxxxxxx", lesson_type: :text)\n\nputs(lesson)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "chapter_id": "chap_xxxxxxxxxxxxx",\n          "lesson_type": "text",\n          "days_from_course_start_until_unlock": 42\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/course_lessons/{id}',
    httpMethod: 'get',
    summary: 'Retrieve course lesson',
    description:
      'Retrieves the details of an existing course lesson.\n\nRequired permissions:\n - `courses:read`',
    stainlessPath: '(resource) course_lessons > (method) retrieve',
    qualified: 'client.courseLessons.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; assessment_questions: { id: string; correct_answer: string; created_at: string; image: object; options: object[]; order: number; question_text: string; question_type: assessment_question_types; }[]; attachments: { id: string; content_type: string; filename: string; url: string; }[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; main_pdf: { id: string; content_type: string; filename: string; url: string; }; order: number; thumbnail: { url: string; }; title: string; video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## retrieve\n\n`client.courseLessons.retrieve(id: string): { id: string; assessment_questions: object[]; attachments: object[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: embed_type; lesson_type: lesson_types; main_pdf: object; order: number; thumbnail: object; title: string; video_asset: object; visibility: lesson_visibilities; }`\n\n**get** `/course_lessons/{id}`\n\nRetrieves the details of an existing course lesson.\n\nRequired permissions:\n - `courses:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; assessment_questions: { id: string; correct_answer: string; created_at: string; image: { id: string; content_type: string; filename: string; url: string; }; options: { id: string; is_correct: boolean; option_text: string; order: number; }[]; order: number; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; }[]; attachments: { id: string; content_type: string; filename: string; url: string; }[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; main_pdf: { id: string; content_type: string; filename: string; url: string; }; order: number; thumbnail: { url: string; }; title: string; video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }; visibility: 'visible' | 'hidden'; }`\n  An individual learning unit within a chapter, which can contain text, video, PDF, or assessment content.\n\n  - `id: string`\n  - `assessment_questions: { id: string; correct_answer: string; created_at: string; image: { id: string; content_type: string; filename: string; url: string; }; options: { id: string; is_correct: boolean; option_text: string; order: number; }[]; order: number; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; }[]`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `content: string`\n  - `created_at: string`\n  - `days_from_course_start_until_unlock: number`\n  - `embed_id: string`\n  - `embed_type: 'youtube' | 'loom'`\n  - `lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'`\n  - `main_pdf: { id: string; content_type: string; filename: string; url: string; }`\n  - `order: number`\n  - `thumbnail: { url: string; }`\n  - `title: string`\n  - `video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst lesson = await client.courseLessons.retrieve('lesn_xxxxxxxxxxxxx');\n\nconsole.log(lesson);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst lesson = await client.courseLessons.retrieve('lesn_xxxxxxxxxxxxx');\n\nconsole.log(lesson.id);",
      },
      python: {
        method: 'course_lessons.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nlesson = client.course_lessons.retrieve(\n    "lesn_xxxxxxxxxxxxx",\n)\nprint(lesson.id)',
      },
      ruby: {
        method: 'course_lessons.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nlesson = whop.course_lessons.retrieve("lesn_xxxxxxxxxxxxx")\n\nputs(lesson)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/course_lessons/{id}',
    httpMethod: 'patch',
    summary: 'Update course lesson',
    description:
      "Update a lesson's content, type, visibility, assessment questions, or media attachments.\n\nRequired permissions:\n - `courses:update`",
    stainlessPath: '(resource) course_lessons > (method) update',
    qualified: 'client.courseLessons.update',
    params: [
      'id: string;',
      'assessment_completion_requirement?: { minimum_grade_percent?: number; minimum_questions_correct?: number; };',
      "assessment_questions?: { correct_answer: string; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; id?: string; image?: { id: string; }; options?: { is_correct: boolean; option_text: string; id?: string; }[]; }[];",
      'attachments?: { id: string; }[];',
      'content?: string;',
      'days_from_course_start_until_unlock?: number;',
      'embed_id?: string;',
      "embed_type?: 'youtube' | 'loom';",
      "lesson_type?: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check';",
      'main_pdf?: { id: string; };',
      'max_attempts?: number;',
      'mux_asset_id?: string;',
      'thumbnail?: { id: string; };',
      'title?: string;',
      "visibility?: 'visible' | 'hidden';",
    ],
    response:
      "{ id: string; assessment_questions: { id: string; correct_answer: string; created_at: string; image: object; options: object[]; order: number; question_text: string; question_type: assessment_question_types; }[]; attachments: { id: string; content_type: string; filename: string; url: string; }[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; main_pdf: { id: string; content_type: string; filename: string; url: string; }; order: number; thumbnail: { url: string; }; title: string; video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }; visibility: 'visible' | 'hidden'; }",
    markdown:
      "## update\n\n`client.courseLessons.update(id: string, assessment_completion_requirement?: { minimum_grade_percent?: number; minimum_questions_correct?: number; }, assessment_questions?: { correct_answer: string; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; id?: string; image?: { id: string; }; options?: { is_correct: boolean; option_text: string; id?: string; }[]; }[], attachments?: { id: string; }[], content?: string, days_from_course_start_until_unlock?: number, embed_id?: string, embed_type?: 'youtube' | 'loom', lesson_type?: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check', main_pdf?: { id: string; }, max_attempts?: number, mux_asset_id?: string, thumbnail?: { id: string; }, title?: string, visibility?: 'visible' | 'hidden'): { id: string; assessment_questions: object[]; attachments: object[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: embed_type; lesson_type: lesson_types; main_pdf: object; order: number; thumbnail: object; title: string; video_asset: object; visibility: lesson_visibilities; }`\n\n**patch** `/course_lessons/{id}`\n\nUpdate a lesson's content, type, visibility, assessment questions, or media attachments.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `id: string`\n\n- `assessment_completion_requirement?: { minimum_grade_percent?: number; minimum_questions_correct?: number; }`\n  The passing criteria for quiz or knowledge check lessons, such as minimum grade or correct answers.\n  - `minimum_grade_percent?: number`\n    The minimum grade percentage required to pass (0-100). Cannot be set together with minimum_questions_correct.\n  - `minimum_questions_correct?: number`\n    The minimum number of questions that must be answered correctly. Cannot be set together with minimum_grade_percent.\n\n- `assessment_questions?: { correct_answer: string; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; id?: string; image?: { id: string; }; options?: { is_correct: boolean; option_text: string; id?: string; }[]; }[]`\n  The full list of assessment questions for quiz or knowledge check lessons. Replaces all existing questions.\n\n- `attachments?: { id: string; }[]`\n  File attachments for the lesson such as PDFs or documents. Replaces all existing attachments.\n\n- `content?: string`\n  The Markdown content body of the lesson.\n\n- `days_from_course_start_until_unlock?: number`\n  The number of days after a student starts the course before this lesson becomes accessible.\n\n- `embed_id?: string`\n  The external video identifier for embedded content (e.g., a YouTube video ID or Loom share ID).\n\n- `embed_type?: 'youtube' | 'loom'`\n  The type of embed for a lesson\n\n- `lesson_type?: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'`\n  The available types for a lesson\n\n- `main_pdf?: { id: string; }`\n  The primary PDF document attached to this lesson for student reference.\n  - `id: string`\n    The ID of an existing file object.\n\n- `max_attempts?: number`\n  The maximum number of attempts a student is allowed for assessment lessons.\n\n- `mux_asset_id?: string`\n  The identifier of a Mux video asset to attach to this lesson (e.g., \"mux_XXXXX\").\n\n- `thumbnail?: { id: string; }`\n  The thumbnail image for the lesson in PNG, JPEG, or GIF format.\n  - `id: string`\n    The ID of an existing file object.\n\n- `title?: string`\n  The display title of the lesson (e.g., \"Getting Started with APIs\").\n\n- `visibility?: 'visible' | 'hidden'`\n  The available visibilities for a lesson. Determines how / whether a lesson is visible to users.\n\n### Returns\n\n- `{ id: string; assessment_questions: { id: string; correct_answer: string; created_at: string; image: { id: string; content_type: string; filename: string; url: string; }; options: { id: string; is_correct: boolean; option_text: string; order: number; }[]; order: number; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; }[]; attachments: { id: string; content_type: string; filename: string; url: string; }[]; content: string; created_at: string; days_from_course_start_until_unlock: number; embed_id: string; embed_type: 'youtube' | 'loom'; lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'; main_pdf: { id: string; content_type: string; filename: string; url: string; }; order: number; thumbnail: { url: string; }; title: string; video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }; visibility: 'visible' | 'hidden'; }`\n  An individual learning unit within a chapter, which can contain text, video, PDF, or assessment content.\n\n  - `id: string`\n  - `assessment_questions: { id: string; correct_answer: string; created_at: string; image: { id: string; content_type: string; filename: string; url: string; }; options: { id: string; is_correct: boolean; option_text: string; order: number; }[]; order: number; question_text: string; question_type: 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select'; }[]`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `content: string`\n  - `created_at: string`\n  - `days_from_course_start_until_unlock: number`\n  - `embed_id: string`\n  - `embed_type: 'youtube' | 'loom'`\n  - `lesson_type: 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check'`\n  - `main_pdf: { id: string; content_type: string; filename: string; url: string; }`\n  - `order: number`\n  - `thumbnail: { url: string; }`\n  - `title: string`\n  - `video_asset: { id: string; asset_id: string; audio_only: boolean; created_at: string; duration_seconds: number; finished_uploading_at: string; playback_id: string; signed_playback_id: string; signed_storyboard_playback_token: string; signed_thumbnail_playback_token: string; signed_video_playback_token: string; status: 'uploading' | 'created' | 'ready'; updated_at: string; }`\n  - `visibility: 'visible' | 'hidden'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst lesson = await client.courseLessons.update('lesn_xxxxxxxxxxxxx');\n\nconsole.log(lesson);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst lesson = await client.courseLessons.update('lesn_xxxxxxxxxxxxx');\n\nconsole.log(lesson.id);",
      },
      python: {
        method: 'course_lessons.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nlesson = client.course_lessons.update(\n    id="lesn_xxxxxxxxxxxxx",\n)\nprint(lesson.id)',
      },
      ruby: {
        method: 'course_lessons.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nlesson = whop.course_lessons.update("lesn_xxxxxxxxxxxxx")\n\nputs(lesson)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/course_lessons/{id}',
    httpMethod: 'delete',
    summary: 'Delete course lesson',
    description:
      'Permanently delete a lesson and remove it from its chapter.\n\nRequired permissions:\n - `courses:update`',
    stainlessPath: '(resource) course_lessons > (method) delete',
    qualified: 'client.courseLessons.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.courseLessons.delete(id: string): boolean`\n\n**delete** `/course_lessons/{id}`\n\nPermanently delete a lesson and remove it from its chapter.\n\nRequired permissions:\n - `courses:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst courseLesson = await client.courseLessons.delete('lesn_xxxxxxxxxxxxx');\n\nconsole.log(courseLesson);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseLesson = await client.courseLessons.delete('lesn_xxxxxxxxxxxxx');\n\nconsole.log(courseLesson);",
      },
      python: {
        method: 'course_lessons.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_lesson = client.course_lessons.delete(\n    "lesn_xxxxxxxxxxxxx",\n)\nprint(course_lesson)',
      },
      ruby: {
        method: 'course_lessons.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_lesson = whop.course_lessons.delete("lesn_xxxxxxxxxxxxx")\n\nputs(course_lesson)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'mark_as_completed',
    endpoint: '/course_lessons/{lesson_id}/mark_as_completed',
    httpMethod: 'post',
    summary: 'Mark as completed course lesson',
    description: 'Mark a lesson as completed for the current user after they finish the content.',
    stainlessPath: '(resource) course_lessons > (method) mark_as_completed',
    qualified: 'client.courseLessons.markAsCompleted',
    params: ['lesson_id: string;'],
    response: 'boolean',
    markdown:
      "## mark_as_completed\n\n`client.courseLessons.markAsCompleted(lesson_id: string): boolean`\n\n**post** `/course_lessons/{lesson_id}/mark_as_completed`\n\nMark a lesson as completed for the current user after they finish the content.\n\n### Parameters\n\n- `lesson_id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.courseLessons.markAsCompleted('lesson_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.markAsCompleted',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.courseLessons.markAsCompleted('lesson_id');\n\nconsole.log(response);",
      },
      python: {
        method: 'course_lessons.mark_as_completed',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.course_lessons.mark_as_completed(\n    "lesson_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'course_lessons.mark_as_completed',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.course_lessons.mark_as_completed("lesson_id")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons/$LESSON_ID/mark_as_completed \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'start',
    endpoint: '/course_lessons/{lesson_id}/start',
    httpMethod: 'post',
    summary: 'Start course lesson',
    description:
      'Record that the current user has started viewing a lesson, creating progress tracking records.',
    stainlessPath: '(resource) course_lessons > (method) start',
    qualified: 'client.courseLessons.start',
    params: ['lesson_id: string;'],
    response: 'boolean',
    markdown:
      "## start\n\n`client.courseLessons.start(lesson_id: string): boolean`\n\n**post** `/course_lessons/{lesson_id}/start`\n\nRecord that the current user has started viewing a lesson, creating progress tracking records.\n\n### Parameters\n\n- `lesson_id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.courseLessons.start('lesson_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.start',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.courseLessons.start('lesson_id');\n\nconsole.log(response);",
      },
      python: {
        method: 'course_lessons.start',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.course_lessons.start(\n    "lesson_id",\n)\nprint(response)',
      },
      ruby: {
        method: 'course_lessons.start',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.course_lessons.start("lesson_id")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons/$LESSON_ID/start \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'submit_assessment',
    endpoint: '/course_lessons/{lesson_id}/submit_assessment',
    httpMethod: 'post',
    summary: 'Submit assessment course lesson',
    description: 'Submit answers for a quiz or knowledge check lesson and receive a graded result.',
    stainlessPath: '(resource) course_lessons > (method) submit_assessment',
    qualified: 'client.courseLessons.submitAssessment',
    params: [
      'lesson_id: string;',
      'answers: { question_id: string; answer_text?: string; selected_option_ids?: string[]; }[];',
    ],
    response:
      '{ id: string; created_at: string; lesson: { id: string; title: string; }; result_correct: number; result_grade: number; result_graded_questions: object; result_passing_grade: boolean; result_question_count: number; score_percent: number; updated_at: string; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## submit_assessment\n\n`client.courseLessons.submitAssessment(lesson_id: string, answers: { question_id: string; answer_text?: string; selected_option_ids?: string[]; }[]): { id: string; created_at: string; lesson: object; result_correct: number; result_grade: number; result_graded_questions: object; result_passing_grade: boolean; result_question_count: number; score_percent: number; updated_at: string; user: object; }`\n\n**post** `/course_lessons/{lesson_id}/submit_assessment`\n\nSubmit answers for a quiz or knowledge check lesson and receive a graded result.\n\n### Parameters\n\n- `lesson_id: string`\n\n- `answers: { question_id: string; answer_text?: string; selected_option_ids?: string[]; }[]`\n  The list of answers to submit for each assessment question.\n\n### Returns\n\n- `{ id: string; created_at: string; lesson: { id: string; title: string; }; result_correct: number; result_grade: number; result_graded_questions: object; result_passing_grade: boolean; result_question_count: number; score_percent: number; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  The result of a user's assessment attempt\n\n  - `id: string`\n  - `created_at: string`\n  - `lesson: { id: string; title: string; }`\n  - `result_correct: number`\n  - `result_grade: number`\n  - `result_graded_questions: object`\n  - `result_passing_grade: boolean`\n  - `result_question_count: number`\n  - `score_percent: number`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.courseLessons.submitAssessment('lesson_id', { answers: [{ question_id: 'question_id' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseLessons.submitAssessment',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.courseLessons.submitAssessment('lesson_id', {\n  answers: [{ question_id: 'question_id' }],\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'course_lessons.submit_assessment',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.course_lessons.submit_assessment(\n    lesson_id="lesson_id",\n    answers=[{\n        "question_id": "question_id"\n    }],\n)\nprint(response.id)',
      },
      ruby: {
        method: 'course_lessons.submit_assessment',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.course_lessons.submit_assessment("lesson_id", answers: [{question_id: "question_id"}])\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_lessons/$LESSON_ID/submit_assessment \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "answers": [\n            {\n              "question_id": "question_id"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/reviews',
    httpMethod: 'get',
    summary: 'List reviews',
    description:
      'Returns a paginated list of customer reviews for a specific product, with optional filtering by star rating and creation date.',
    stainlessPath: '(resource) reviews > (method) list',
    qualified: 'client.reviews.list',
    params: [
      'product_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'first?: number;',
      'last?: number;',
      'max_stars?: number;',
      'min_stars?: number;',
    ],
    response:
      "{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; created_at: string; description: string; joined_at: string; paid_for_product: boolean; published_at: string; stars: number; status: 'pending' | 'published' | 'removed'; title: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.reviews.list(product_id: string, after?: string, before?: string, created_after?: string, created_before?: string, first?: number, last?: number, max_stars?: number, min_stars?: number): { id: string; attachments: object[]; created_at: string; description: string; joined_at: string; paid_for_product: boolean; published_at: string; stars: number; status: review_status; title: string; updated_at: string; user: object; }`\n\n**get** `/reviews`\n\nReturns a paginated list of customer reviews for a specific product, with optional filtering by star rating and creation date.\n\n### Parameters\n\n- `product_id: string`\n  The unique identifier of the product to list reviews for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return reviews created after this timestamp.\n\n- `created_before?: string`\n  Only return reviews created before this timestamp.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `max_stars?: number`\n  The maximum star rating to include in results, from 1 to 5 inclusive.\n\n- `min_stars?: number`\n  The minimum star rating to include in results, from 1 to 5 inclusive.\n\n### Returns\n\n- `{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; created_at: string; description: string; joined_at: string; paid_for_product: boolean; published_at: string; stars: number; status: 'pending' | 'published' | 'removed'; title: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  A user-submitted review of a company, including a star rating and optional text feedback.\n\n  - `id: string`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `created_at: string`\n  - `description: string`\n  - `joined_at: string`\n  - `paid_for_product: boolean`\n  - `published_at: string`\n  - `stars: number`\n  - `status: 'pending' | 'published' | 'removed'`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const reviewListResponse of client.reviews.list({ product_id: 'prod_xxxxxxxxxxxxx' })) {\n  console.log(reviewListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.reviews.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const reviewListResponse of client.reviews.list({ product_id: 'prod_xxxxxxxxxxxxx' })) {\n  console.log(reviewListResponse.id);\n}",
      },
      python: {
        method: 'reviews.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.reviews.list(\n    product_id="prod_xxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'reviews.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.reviews.list(product_id: "prod_xxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/reviews \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/reviews/{id}',
    httpMethod: 'get',
    summary: 'Retrieve review',
    description: 'Retrieves the details of an existing review.',
    stainlessPath: '(resource) reviews > (method) retrieve',
    qualified: 'client.reviews.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; company: { id: string; route: string; title: string; }; created_at: string; description: string; joined_at: string; paid_for_product: boolean; product: { id: string; title: string; }; published_at: string; stars: number; status: 'pending' | 'published' | 'removed'; title: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.reviews.retrieve(id: string): { id: string; attachments: object[]; company: object; created_at: string; description: string; joined_at: string; paid_for_product: boolean; product: object; published_at: string; stars: number; status: review_status; title: string; updated_at: string; user: object; }`\n\n**get** `/reviews/{id}`\n\nRetrieves the details of an existing review.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; attachments: { id: string; content_type: string; filename: string; url: string; }[]; company: { id: string; route: string; title: string; }; created_at: string; description: string; joined_at: string; paid_for_product: boolean; product: { id: string; title: string; }; published_at: string; stars: number; status: 'pending' | 'published' | 'removed'; title: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  A user-submitted review of a company, including a star rating and optional text feedback.\n\n  - `id: string`\n  - `attachments: { id: string; content_type: string; filename: string; url: string; }[]`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `description: string`\n  - `joined_at: string`\n  - `paid_for_product: boolean`\n  - `product: { id: string; title: string; }`\n  - `published_at: string`\n  - `stars: number`\n  - `status: 'pending' | 'published' | 'removed'`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst review = await client.reviews.retrieve('rev_xxxxxxxxxxxxxx');\n\nconsole.log(review);\n```",
    perLanguage: {
      typescript: {
        method: 'client.reviews.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst review = await client.reviews.retrieve('rev_xxxxxxxxxxxxxx');\n\nconsole.log(review.id);",
      },
      python: {
        method: 'reviews.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nreview = client.reviews.retrieve(\n    "rev_xxxxxxxxxxxxxx",\n)\nprint(review.id)',
      },
      ruby: {
        method: 'reviews.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nreview = whop.reviews.retrieve("rev_xxxxxxxxxxxxxx")\n\nputs(review)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/reviews/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/course_students',
    httpMethod: 'get',
    summary: 'List course students',
    description:
      'Returns a paginated list of students enrolled in a course, with optional name filtering.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`',
    stainlessPath: '(resource) course_students > (method) list',
    qualified: 'client.courseStudents.list',
    params: [
      'course_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'keyword?: string;',
      'last?: number;',
    ],
    response:
      '{ id: string; completed_lessons_count: number; completion_rate: number; first_interaction_at: string; last_interaction_at: string; total_lessons_count: number; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## list\n\n`client.courseStudents.list(course_id: string, after?: string, before?: string, first?: number, keyword?: string, last?: number): { id: string; completed_lessons_count: number; completion_rate: number; first_interaction_at: string; last_interaction_at: string; total_lessons_count: number; user: object; }`\n\n**get** `/course_students`\n\nReturns a paginated list of students enrolled in a course, with optional name filtering.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`\n\n### Parameters\n\n- `course_id: string`\n  The unique identifier of the course to list enrolled students for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `keyword?: string`\n  A search term to filter students by name or username.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; completed_lessons_count: number; completion_rate: number; first_interaction_at: string; last_interaction_at: string; total_lessons_count: number; user: { id: string; name: string; username: string; }; }`\n  An enrollment record for a student in a course, including progress and completion metrics.\n\n  - `id: string`\n  - `completed_lessons_count: number`\n  - `completion_rate: number`\n  - `first_interaction_at: string`\n  - `last_interaction_at: string`\n  - `total_lessons_count: number`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const courseStudentListResponse of client.courseStudents.list({ course_id: 'cors_xxxxxxxxxxxxx' })) {\n  console.log(courseStudentListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseStudents.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const courseStudentListResponse of client.courseStudents.list({\n  course_id: 'cors_xxxxxxxxxxxxx',\n})) {\n  console.log(courseStudentListResponse.id);\n}",
      },
      python: {
        method: 'course_students.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.course_students.list(\n    course_id="cors_xxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'course_students.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.course_students.list(course_id: "cors_xxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_students \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/course_students/{id}',
    httpMethod: 'get',
    summary: 'Retrieve course student',
    description:
      'Retrieves the details of an existing course student.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`',
    stainlessPath: '(resource) course_students > (method) retrieve',
    qualified: 'client.courseStudents.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; completed_lessons_count: number; completion_rate: number; course: { id: string; experience: { id: string; }; title: string; }; first_interaction_at: string; last_interaction_at: string; total_lessons_count: number; user: { id: string; name: string; username: string; }; }',
    markdown:
      "## retrieve\n\n`client.courseStudents.retrieve(id: string): { id: string; completed_lessons_count: number; completion_rate: number; course: object; first_interaction_at: string; last_interaction_at: string; total_lessons_count: number; user: object; }`\n\n**get** `/course_students/{id}`\n\nRetrieves the details of an existing course student.\n\nRequired permissions:\n - `courses:read`\n - `course_analytics:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; completed_lessons_count: number; completion_rate: number; course: { id: string; experience: { id: string; }; title: string; }; first_interaction_at: string; last_interaction_at: string; total_lessons_count: number; user: { id: string; name: string; username: string; }; }`\n  An enrollment record for a student in a course, including progress and completion metrics.\n\n  - `id: string`\n  - `completed_lessons_count: number`\n  - `completion_rate: number`\n  - `course: { id: string; experience: { id: string; }; title: string; }`\n  - `first_interaction_at: string`\n  - `last_interaction_at: string`\n  - `total_lessons_count: number`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst courseStudent = await client.courseStudents.retrieve('id');\n\nconsole.log(courseStudent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.courseStudents.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst courseStudent = await client.courseStudents.retrieve('id');\n\nconsole.log(courseStudent.id);",
      },
      python: {
        method: 'course_students.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncourse_student = client.course_students.retrieve(\n    "id",\n)\nprint(course_student.id)',
      },
      ruby: {
        method: 'course_students.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncourse_student = whop.course_students.retrieve("id")\n\nputs(course_student)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/course_students/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/access_tokens',
    httpMethod: 'post',
    summary: 'Create access token',
    description:
      "Create a short-lived access token for authenticating API requests. When using API key authentication, provide company_id or user_id. When using OAuth, the user is derived from the token. Use this token with Whop's web and mobile embedded components.",
    stainlessPath: '(resource) access_tokens > (method) create',
    qualified: 'client.accessTokens.create',
    params: [
      'company_id?: string;',
      'expires_at?: string;',
      'scoped_actions?: string[];',
      'user_id?: string;',
    ],
    response: '{ token: string; expires_at: string; }',
    markdown:
      "## create\n\n`client.accessTokens.create(company_id?: string, expires_at?: string, scoped_actions?: string[], user_id?: string): { token: string; expires_at: string; }`\n\n**post** `/access_tokens`\n\nCreate a short-lived access token for authenticating API requests. When using API key authentication, provide company_id or user_id. When using OAuth, the user is derived from the token. Use this token with Whop's web and mobile embedded components.\n\n### Parameters\n\n- `company_id?: string`\n  The unique identifier of the company to generate the token for, starting with 'biz_'. The API key must have permission to access this company.\n\n- `expires_at?: string`\n  The expiration timestamp for the access token. Defaults to 1 hour from now, with a maximum of 3 hours.\n\n- `scoped_actions?: string[]`\n  An array of permission scopes to grant to the access token. If empty or omitted, all permissions from the authenticating credential are inherited. Must be a subset of the credential's permissions.\n\n- `user_id?: string`\n  The unique identifier of the user to generate the token for, starting with 'user_'. The API key must have permission to access this user.\n\n### Returns\n\n- `{ token: string; expires_at: string; }`\n  A short-lived access token used to authenticate API requests on behalf of a user.\n\n  - `token: string`\n  - `expires_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst accessToken = await client.accessTokens.create();\n\nconsole.log(accessToken);\n```",
    perLanguage: {
      typescript: {
        method: 'client.accessTokens.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst accessToken = await client.accessTokens.create();\n\nconsole.log(accessToken.token);",
      },
      python: {
        method: 'access_tokens.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\naccess_token = client.access_tokens.create()\nprint(access_token.token)',
      },
      ruby: {
        method: 'access_tokens.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\naccess_token = whop.access_tokens.create\n\nputs(access_token)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/access_tokens \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/notifications',
    httpMethod: 'post',
    summary: 'Create notification',
    description:
      'Send a push notification to users in an experience or company team. The notification is processed asynchronously and supports targeting specific users.\n\nRequired permissions:\n - `notification:create`',
    stainlessPath: '(resource) notifications > (method) create',
    qualified: 'client.notifications.create',
    params: [
      '{ company_id: string; content: string; title: string; icon_user_id?: string; rest_path?: string; subtitle?: string; user_ids?: string[]; } | { content: string; experience_id: string; title: string; icon_user_id?: string; rest_path?: string; subtitle?: string; user_ids?: string[]; };',
    ],
    response: '{ success: boolean; }',
    perLanguage: {
      typescript: {
        method: 'client.notifications.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst notification = await client.notifications.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  content: 'content',\n  title: 'title',\n});\n\nconsole.log(notification.success);",
      },
      python: {
        method: 'notifications.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nnotification = client.notifications.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    content="content",\n    title="title",\n)\nprint(notification.success)',
      },
      ruby: {
        method: 'notifications.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nnotification = whop.notifications.create(body: {company_id: "biz_xxxxxxxxxxxxxx", content: "content", title: "title"})\n\nputs(notification)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/notifications \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "content": "content",\n          "title": "title"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/disputes',
    httpMethod: 'get',
    summary: 'List disputes',
    description:
      'Returns a paginated list of disputes for a company, with optional filtering by creation date. A dispute represents a chargeback or inquiry filed by a customer against a payment.\n\nRequired permissions:\n - `payment:dispute:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`',
    stainlessPath: '(resource) disputes > (method) list',
    qualified: 'client.disputes.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
    ],
    response:
      '{ id: string; amount: number; company: { id: string; title: string; }; created_at: string; currency: string; editable: boolean; needs_response_by: string; payment: { id: string; }; plan: { id: string; }; product: { id: string; title: string; }; reason: string; status: string; visa_rdr: boolean; }',
    markdown:
      "## list\n\n`client.disputes.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number): { id: string; amount: number; company: object; created_at: string; currency: currency; editable: boolean; needs_response_by: string; payment: object; plan: object; product: object; reason: string; status: dispute_statuses; visa_rdr: boolean; }`\n\n**get** `/disputes`\n\nReturns a paginated list of disputes for a company, with optional filtering by creation date. A dispute represents a chargeback or inquiry filed by a customer against a payment.\n\nRequired permissions:\n - `payment:dispute:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list disputes for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return disputes created after this timestamp.\n\n- `created_before?: string`\n  Only return disputes created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; amount: number; company: { id: string; title: string; }; created_at: string; currency: string; editable: boolean; needs_response_by: string; payment: { id: string; }; plan: { id: string; }; product: { id: string; title: string; }; reason: string; status: string; visa_rdr: boolean; }`\n  A dispute is a chargeback or payment challenge filed against a company, including evidence and response status.\n\n  - `id: string`\n  - `amount: number`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `editable: boolean`\n  - `needs_response_by: string`\n  - `payment: { id: string; }`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `reason: string`\n  - `status: string`\n  - `visa_rdr: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const disputeListResponse of client.disputes.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(disputeListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.disputes.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const disputeListResponse of client.disputes.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(disputeListResponse.id);\n}",
      },
      python: {
        method: 'disputes.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.disputes.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'disputes.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.disputes.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/disputes \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/disputes/{id}',
    httpMethod: 'get',
    summary: 'Retrieve dispute',
    description:
      'Retrieves the details of an existing dispute.\n\nRequired permissions:\n - `payment:dispute:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
    stainlessPath: '(resource) disputes > (method) retrieve',
    qualified: 'client.disputes.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: object; cancellation_policy_disclosure: string; company: object; created_at: string; currency: currency; customer_communication_attachment: object; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: object; plan: object; product: object; product_description: string; reason: string; refund_policy_attachment: object; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: dispute_statuses; uncategorized_attachment: object; visa_rdr: boolean; }',
    markdown:
      "## retrieve\n\n`client.disputes.retrieve(id: string): { id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: object; cancellation_policy_disclosure: string; company: object; created_at: string; currency: currency; customer_communication_attachment: object; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: object; plan: object; product: object; product_description: string; reason: string; refund_policy_attachment: object; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: dispute_statuses; uncategorized_attachment: object; visa_rdr: boolean; }`\n\n**get** `/disputes/{id}`\n\nRetrieves the details of an existing dispute.\n\nRequired permissions:\n - `payment:dispute:read`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: { id: string; content_type: string; filename: string; url: string; }; cancellation_policy_disclosure: string; company: { id: string; title: string; }; created_at: string; currency: string; customer_communication_attachment: { id: string; content_type: string; filename: string; url: string; }; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; plan: { id: string; }; product: { id: string; title: string; }; product_description: string; reason: string; refund_policy_attachment: { id: string; content_type: string; filename: string; url: string; }; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: string; uncategorized_attachment: { id: string; content_type: string; filename: string; url: string; }; visa_rdr: boolean; }`\n  A dispute is a chargeback or payment challenge filed against a company, including evidence and response status.\n\n  - `id: string`\n  - `access_activity_log: string`\n  - `amount: number`\n  - `billing_address: string`\n  - `cancellation_policy_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `cancellation_policy_disclosure: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `customer_communication_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `customer_email_address: string`\n  - `customer_name: string`\n  - `editable: boolean`\n  - `needs_response_by: string`\n  - `notes: string`\n  - `payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `product_description: string`\n  - `reason: string`\n  - `refund_policy_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `refund_policy_disclosure: string`\n  - `refund_refusal_explanation: string`\n  - `service_date: string`\n  - `status: string`\n  - `uncategorized_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `visa_rdr: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dispute = await client.disputes.retrieve('dspt_xxxxxxxxxxxxx');\n\nconsole.log(dispute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.disputes.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dispute = await client.disputes.retrieve('dspt_xxxxxxxxxxxxx');\n\nconsole.log(dispute.id);",
      },
      python: {
        method: 'disputes.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndispute = client.disputes.retrieve(\n    "dspt_xxxxxxxxxxxxx",\n)\nprint(dispute.id)',
      },
      ruby: {
        method: 'disputes.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndispute = whop.disputes.retrieve("dspt_xxxxxxxxxxxxx")\n\nputs(dispute)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/disputes/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'submit_evidence',
    endpoint: '/disputes/{id}/submit_evidence',
    httpMethod: 'post',
    summary: 'Submit evidence',
    description:
      'Submit a payment dispute to the payment processor for review. Once submitted, no further edits can be made.\n\nRequired permissions:\n - `payment:dispute`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
    stainlessPath: '(resource) disputes > (method) submit_evidence',
    qualified: 'client.disputes.submitEvidence',
    params: ['id: string;'],
    response:
      '{ id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: object; cancellation_policy_disclosure: string; company: object; created_at: string; currency: currency; customer_communication_attachment: object; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: object; plan: object; product: object; product_description: string; reason: string; refund_policy_attachment: object; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: dispute_statuses; uncategorized_attachment: object; visa_rdr: boolean; }',
    markdown:
      "## submit_evidence\n\n`client.disputes.submitEvidence(id: string): { id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: object; cancellation_policy_disclosure: string; company: object; created_at: string; currency: currency; customer_communication_attachment: object; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: object; plan: object; product: object; product_description: string; reason: string; refund_policy_attachment: object; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: dispute_statuses; uncategorized_attachment: object; visa_rdr: boolean; }`\n\n**post** `/disputes/{id}/submit_evidence`\n\nSubmit a payment dispute to the payment processor for review. Once submitted, no further edits can be made.\n\nRequired permissions:\n - `payment:dispute`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: { id: string; content_type: string; filename: string; url: string; }; cancellation_policy_disclosure: string; company: { id: string; title: string; }; created_at: string; currency: string; customer_communication_attachment: { id: string; content_type: string; filename: string; url: string; }; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; plan: { id: string; }; product: { id: string; title: string; }; product_description: string; reason: string; refund_policy_attachment: { id: string; content_type: string; filename: string; url: string; }; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: string; uncategorized_attachment: { id: string; content_type: string; filename: string; url: string; }; visa_rdr: boolean; }`\n  A dispute is a chargeback or payment challenge filed against a company, including evidence and response status.\n\n  - `id: string`\n  - `access_activity_log: string`\n  - `amount: number`\n  - `billing_address: string`\n  - `cancellation_policy_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `cancellation_policy_disclosure: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `customer_communication_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `customer_email_address: string`\n  - `customer_name: string`\n  - `editable: boolean`\n  - `needs_response_by: string`\n  - `notes: string`\n  - `payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `product_description: string`\n  - `reason: string`\n  - `refund_policy_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `refund_policy_disclosure: string`\n  - `refund_refusal_explanation: string`\n  - `service_date: string`\n  - `status: string`\n  - `uncategorized_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `visa_rdr: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dispute = await client.disputes.submitEvidence('dspt_xxxxxxxxxxxxx');\n\nconsole.log(dispute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.disputes.submitEvidence',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dispute = await client.disputes.submitEvidence('dspt_xxxxxxxxxxxxx');\n\nconsole.log(dispute.id);",
      },
      python: {
        method: 'disputes.submit_evidence',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndispute = client.disputes.submit_evidence(\n    "dspt_xxxxxxxxxxxxx",\n)\nprint(dispute.id)',
      },
      ruby: {
        method: 'disputes.submit_evidence',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndispute = whop.disputes.submit_evidence("dspt_xxxxxxxxxxxxx")\n\nputs(dispute)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/disputes/$ID/submit_evidence \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update_evidence',
    endpoint: '/disputes/{id}/update_evidence',
    httpMethod: 'post',
    summary: 'Update evidence',
    description:
      'Update a dispute with evidence data to attempt to win the dispute.\n\nRequired permissions:\n - `payment:dispute`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
    stainlessPath: '(resource) disputes > (method) update_evidence',
    qualified: 'client.disputes.updateEvidence',
    params: [
      'id: string;',
      'access_activity_log?: string;',
      'billing_address?: string;',
      'cancellation_policy_attachment?: { id: string; };',
      'cancellation_policy_disclosure?: string;',
      'customer_communication_attachment?: { id: string; };',
      'customer_email_address?: string;',
      'customer_name?: string;',
      'notes?: string;',
      'product_description?: string;',
      'refund_policy_attachment?: { id: string; };',
      'refund_policy_disclosure?: string;',
      'refund_refusal_explanation?: string;',
      'service_date?: string;',
      'uncategorized_attachment?: { id: string; };',
    ],
    response:
      '{ id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: object; cancellation_policy_disclosure: string; company: object; created_at: string; currency: currency; customer_communication_attachment: object; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: object; plan: object; product: object; product_description: string; reason: string; refund_policy_attachment: object; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: dispute_statuses; uncategorized_attachment: object; visa_rdr: boolean; }',
    markdown:
      "## update_evidence\n\n`client.disputes.updateEvidence(id: string, access_activity_log?: string, billing_address?: string, cancellation_policy_attachment?: { id: string; }, cancellation_policy_disclosure?: string, customer_communication_attachment?: { id: string; }, customer_email_address?: string, customer_name?: string, notes?: string, product_description?: string, refund_policy_attachment?: { id: string; }, refund_policy_disclosure?: string, refund_refusal_explanation?: string, service_date?: string, uncategorized_attachment?: { id: string; }): { id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: object; cancellation_policy_disclosure: string; company: object; created_at: string; currency: currency; customer_communication_attachment: object; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: object; plan: object; product: object; product_description: string; reason: string; refund_policy_attachment: object; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: dispute_statuses; uncategorized_attachment: object; visa_rdr: boolean; }`\n\n**post** `/disputes/{id}/update_evidence`\n\nUpdate a dispute with evidence data to attempt to win the dispute.\n\nRequired permissions:\n - `payment:dispute`\n - `plan:basic:read`\n - `access_pass:basic:read`\n - `company:basic:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n\n### Parameters\n\n- `id: string`\n\n- `access_activity_log?: string`\n  An IP access activity log showing the customer used the service.\n\n- `billing_address?: string`\n  The billing address associated with the customer's payment method.\n\n- `cancellation_policy_attachment?: { id: string; }`\n  A file upload containing the company's cancellation policy document.\n  - `id: string`\n    The ID of an existing file object.\n\n- `cancellation_policy_disclosure?: string`\n  The company's cancellation policy text to submit as evidence.\n\n- `customer_communication_attachment?: { id: string; }`\n  A file upload containing evidence of customer communication. Must be a JPEG, PNG, GIF, or PDF.\n  - `id: string`\n    The ID of an existing file object.\n\n- `customer_email_address?: string`\n  The email address of the customer associated with the disputed payment.\n\n- `customer_name?: string`\n  The full name of the customer associated with the disputed payment.\n\n- `notes?: string`\n  Additional notes or context to submit as part of the dispute evidence.\n\n- `product_description?: string`\n  A description of the product or service that was provided to the customer.\n\n- `refund_policy_attachment?: { id: string; }`\n  A file upload containing the company's refund policy document.\n  - `id: string`\n    The ID of an existing file object.\n\n- `refund_policy_disclosure?: string`\n  The company's refund policy text to submit as evidence.\n\n- `refund_refusal_explanation?: string`\n  An explanation of why the refund request was refused.\n\n- `service_date?: string`\n  The date when the product or service was delivered to the customer.\n\n- `uncategorized_attachment?: { id: string; }`\n  A file upload for evidence that does not fit into the other categories.\n  - `id: string`\n    The ID of an existing file object.\n\n### Returns\n\n- `{ id: string; access_activity_log: string; amount: number; billing_address: string; cancellation_policy_attachment: { id: string; content_type: string; filename: string; url: string; }; cancellation_policy_disclosure: string; company: { id: string; title: string; }; created_at: string; currency: string; customer_communication_attachment: { id: string; content_type: string; filename: string; url: string; }; customer_email_address: string; customer_name: string; editable: boolean; needs_response_by: string; notes: string; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; plan: { id: string; }; product: { id: string; title: string; }; product_description: string; reason: string; refund_policy_attachment: { id: string; content_type: string; filename: string; url: string; }; refund_policy_disclosure: string; refund_refusal_explanation: string; service_date: string; status: string; uncategorized_attachment: { id: string; content_type: string; filename: string; url: string; }; visa_rdr: boolean; }`\n  A dispute is a chargeback or payment challenge filed against a company, including evidence and response status.\n\n  - `id: string`\n  - `access_activity_log: string`\n  - `amount: number`\n  - `billing_address: string`\n  - `cancellation_policy_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `cancellation_policy_disclosure: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `customer_communication_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `customer_email_address: string`\n  - `customer_name: string`\n  - `editable: boolean`\n  - `needs_response_by: string`\n  - `notes: string`\n  - `payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }`\n  - `plan: { id: string; }`\n  - `product: { id: string; title: string; }`\n  - `product_description: string`\n  - `reason: string`\n  - `refund_policy_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `refund_policy_disclosure: string`\n  - `refund_refusal_explanation: string`\n  - `service_date: string`\n  - `status: string`\n  - `uncategorized_attachment: { id: string; content_type: string; filename: string; url: string; }`\n  - `visa_rdr: boolean`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dispute = await client.disputes.updateEvidence('dspt_xxxxxxxxxxxxx');\n\nconsole.log(dispute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.disputes.updateEvidence',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dispute = await client.disputes.updateEvidence('dspt_xxxxxxxxxxxxx');\n\nconsole.log(dispute.id);",
      },
      python: {
        method: 'disputes.update_evidence',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndispute = client.disputes.update_evidence(\n    id="dspt_xxxxxxxxxxxxx",\n)\nprint(dispute.id)',
      },
      ruby: {
        method: 'disputes.update_evidence',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndispute = whop.disputes.update_evidence("dspt_xxxxxxxxxxxxx")\n\nputs(dispute)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/disputes/$ID/update_evidence \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/refunds',
    httpMethod: 'get',
    summary: 'List refunds',
    description:
      'Returns a paginated list of refunds, with optional filtering by payment, company, user, and creation date.\n\nRequired permissions:\n - `payment:basic:read`',
    stainlessPath: '(resource) refunds > (method) list',
    qualified: 'client.refunds.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'payment_id?: string;',
      'user_id?: string;',
    ],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; payment: { id: string; }; provider: string; provider_created_at: string; reference_status: 'available' | 'pending' | 'unavailable'; reference_type: 'acquirer_reference_number' | 'retrieval_reference_number' | 'system_trace_audit_number'; reference_value: string; status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled'; }",
    markdown:
      "## list\n\n`client.refunds.list(after?: string, before?: string, company_id?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, payment_id?: string, user_id?: string): { id: string; amount: number; created_at: string; currency: currency; payment: object; provider: payment_provider; provider_created_at: string; reference_status: refund_reference_status; reference_type: refund_reference_type; reference_value: string; status: refund_status; }`\n\n**get** `/refunds`\n\nReturns a paginated list of refunds, with optional filtering by payment, company, user, and creation date.\n\nRequired permissions:\n - `payment:basic:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  Filter refunds to only those belonging to this company.\n\n- `created_after?: string`\n  Only return refunds created after this timestamp.\n\n- `created_before?: string`\n  Only return refunds created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `payment_id?: string`\n  Filter refunds to only those associated with this specific payment.\n\n- `user_id?: string`\n  Filter refunds to only those associated with this specific user.\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; payment: { id: string; }; provider: string; provider_created_at: string; reference_status: 'available' | 'pending' | 'unavailable'; reference_type: 'acquirer_reference_number' | 'retrieval_reference_number' | 'system_trace_audit_number'; reference_value: string; status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled'; }`\n  A refund represents a full or partial reversal of a payment, including the amount, status, and payment provider.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `payment: { id: string; }`\n  - `provider: string`\n  - `provider_created_at: string`\n  - `reference_status: 'available' | 'pending' | 'unavailable'`\n  - `reference_type: 'acquirer_reference_number' | 'retrieval_reference_number' | 'system_trace_audit_number'`\n  - `reference_value: string`\n  - `status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const refundListResponse of client.refunds.list()) {\n  console.log(refundListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.refunds.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const refundListResponse of client.refunds.list()) {\n  console.log(refundListResponse.id);\n}",
      },
      python: {
        method: 'refunds.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.refunds.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'refunds.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.refunds.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/refunds \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/refunds/{id}',
    httpMethod: 'get',
    summary: 'Retrieve refund',
    description:
      'Retrieves the details of an existing refund.\n\nRequired permissions:\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`',
    stainlessPath: '(resource) refunds > (method) retrieve',
    qualified: 'client.refunds.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; provider: string; provider_created_at: string; reference_status: 'available' | 'pending' | 'unavailable'; reference_type: 'acquirer_reference_number' | 'retrieval_reference_number' | 'system_trace_audit_number'; reference_value: string; status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled'; }",
    markdown:
      "## retrieve\n\n`client.refunds.retrieve(id: string): { id: string; amount: number; created_at: string; currency: currency; payment: object; provider: payment_provider; provider_created_at: string; reference_status: refund_reference_status; reference_type: refund_reference_type; reference_value: string; status: refund_status; }`\n\n**get** `/refunds/{id}`\n\nRetrieves the details of an existing refund.\n\nRequired permissions:\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; provider: string; provider_created_at: string; reference_status: 'available' | 'pending' | 'unavailable'; reference_type: 'acquirer_reference_number' | 'retrieval_reference_number' | 'system_trace_audit_number'; reference_value: string; status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled'; }`\n  A refund represents a full or partial reversal of a payment, including the amount, status, and payment provider.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; paid_at: string; payment_method_type: string; subtotal: number; tax_amount: number; tax_behavior: 'exclusive' | 'inclusive' | 'unspecified' | 'unable_to_collect'; tax_refunded_amount: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }`\n  - `provider: string`\n  - `provider_created_at: string`\n  - `reference_status: 'available' | 'pending' | 'unavailable'`\n  - `reference_type: 'acquirer_reference_number' | 'retrieval_reference_number' | 'system_trace_audit_number'`\n  - `reference_value: string`\n  - `status: 'pending' | 'requires_action' | 'succeeded' | 'failed' | 'canceled'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst refund = await client.refunds.retrieve('rf_xxxxxxxxxxxxxxx');\n\nconsole.log(refund);\n```",
    perLanguage: {
      typescript: {
        method: 'client.refunds.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst refund = await client.refunds.retrieve('rf_xxxxxxxxxxxxxxx');\n\nconsole.log(refund.id);",
      },
      python: {
        method: 'refunds.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nrefund = client.refunds.retrieve(\n    "rf_xxxxxxxxxxxxxxx",\n)\nprint(refund.id)',
      },
      ruby: {
        method: 'refunds.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nrefund = whop.refunds.retrieve("rf_xxxxxxxxxxxxxxx")\n\nputs(refund)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/refunds/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/withdrawals',
    httpMethod: 'get',
    summary: 'List withdrawals',
    description:
      'Returns a paginated list of withdrawals for a company, with optional sorting and date filtering.\n\nRequired permissions:\n - `payout:withdrawal:read`',
    stainlessPath: '(resource) withdrawals > (method) list',
    qualified: 'client.withdrawals.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; fee_amount: number; fee_type: 'exclusive' | 'inclusive'; markup_fee: number; speed: 'standard' | 'instant'; status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'; }",
    markdown:
      "## list\n\n`client.withdrawals.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number): { id: string; amount: number; created_at: string; currency: currency; fee_amount: number; fee_type: withdrawal_fee_types; markup_fee: number; speed: withdrawal_speeds; status: withdrawal_status; }`\n\n**get** `/withdrawals`\n\nReturns a paginated list of withdrawals for a company, with optional sorting and date filtering.\n\nRequired permissions:\n - `payout:withdrawal:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list withdrawals for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return withdrawals created after this timestamp.\n\n- `created_before?: string`\n  Only return withdrawals created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; fee_amount: number; fee_type: 'exclusive' | 'inclusive'; markup_fee: number; speed: 'standard' | 'instant'; status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'; }`\n  A withdrawal represents a request to transfer funds from a ledger account to an external payout method.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `fee_amount: number`\n  - `fee_type: 'exclusive' | 'inclusive'`\n  - `markup_fee: number`\n  - `speed: 'standard' | 'instant'`\n  - `status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const withdrawalListResponse of client.withdrawals.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(withdrawalListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.withdrawals.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const withdrawalListResponse of client.withdrawals.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(withdrawalListResponse.id);\n}",
      },
      python: {
        method: 'withdrawals.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.withdrawals.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'withdrawals.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.withdrawals.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/withdrawals \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/withdrawals/{id}',
    httpMethod: 'get',
    summary: 'Retrieve withdrawal',
    description:
      'Retrieves the details of an existing withdrawal.\n\nRequired permissions:\n - `payout:withdrawal:read`\n - `payout:destination:read`',
    stainlessPath: '(resource) withdrawals > (method) retrieve',
    qualified: 'client.withdrawals.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; error_code: string; error_message: string; estimated_availability: string; fee_amount: number; fee_type: 'exclusive' | 'inclusive'; ledger_account: { id: string; company_id: string; }; markup_fee: number; payout_token: { id: string; created_at: string; destination_currency_code: string; nickname: string; payer_name: string; }; speed: 'standard' | 'instant'; status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'; trace_code: string; }",
    markdown:
      "## retrieve\n\n`client.withdrawals.retrieve(id: string): { id: string; amount: number; created_at: string; currency: currency; error_code: string; error_message: string; estimated_availability: string; fee_amount: number; fee_type: withdrawal_fee_types; ledger_account: object; markup_fee: number; payout_token: object; speed: withdrawal_speeds; status: withdrawal_status; trace_code: string; }`\n\n**get** `/withdrawals/{id}`\n\nRetrieves the details of an existing withdrawal.\n\nRequired permissions:\n - `payout:withdrawal:read`\n - `payout:destination:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; error_code: string; error_message: string; estimated_availability: string; fee_amount: number; fee_type: 'exclusive' | 'inclusive'; ledger_account: { id: string; company_id: string; }; markup_fee: number; payout_token: { id: string; created_at: string; destination_currency_code: string; nickname: string; payer_name: string; }; speed: 'standard' | 'instant'; status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'; trace_code: string; }`\n  A withdrawal represents a request to transfer funds from a ledger account to an external payout method.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `error_code: string`\n  - `error_message: string`\n  - `estimated_availability: string`\n  - `fee_amount: number`\n  - `fee_type: 'exclusive' | 'inclusive'`\n  - `ledger_account: { id: string; company_id: string; }`\n  - `markup_fee: number`\n  - `payout_token: { id: string; created_at: string; destination_currency_code: string; nickname: string; payer_name: string; }`\n  - `speed: 'standard' | 'instant'`\n  - `status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'`\n  - `trace_code: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst withdrawal = await client.withdrawals.retrieve('wdrl_xxxxxxxxxxxxx');\n\nconsole.log(withdrawal);\n```",
    perLanguage: {
      typescript: {
        method: 'client.withdrawals.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawal = await client.withdrawals.retrieve('wdrl_xxxxxxxxxxxxx');\n\nconsole.log(withdrawal.id);",
      },
      python: {
        method: 'withdrawals.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nwithdrawal = client.withdrawals.retrieve(\n    "wdrl_xxxxxxxxxxxxx",\n)\nprint(withdrawal.id)',
      },
      ruby: {
        method: 'withdrawals.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nwithdrawal = whop.withdrawals.retrieve("wdrl_xxxxxxxxxxxxx")\n\nputs(withdrawal)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/withdrawals/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/withdrawals',
    httpMethod: 'post',
    summary: 'Create withdrawal',
    description:
      'Creates a withdrawal request for a ledger account\n\nRequired permissions:\n - `payout:withdraw_funds`\n - `payout:destination:read`',
    stainlessPath: '(resource) withdrawals > (method) create',
    qualified: 'client.withdrawals.create',
    params: [
      'amount: number;',
      'company_id: string;',
      'currency: string;',
      'payout_method_id?: string;',
      'platform_covers_fees?: boolean;',
      'statement_descriptor?: string;',
    ],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; error_code: string; error_message: string; estimated_availability: string; fee_amount: number; fee_type: 'exclusive' | 'inclusive'; ledger_account: { id: string; company_id: string; }; markup_fee: number; payout_token: { id: string; created_at: string; destination_currency_code: string; nickname: string; payer_name: string; }; speed: 'standard' | 'instant'; status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'; trace_code: string; }",
    markdown:
      "## create\n\n`client.withdrawals.create(amount: number, company_id: string, currency: string, payout_method_id?: string, platform_covers_fees?: boolean, statement_descriptor?: string): { id: string; amount: number; created_at: string; currency: currency; error_code: string; error_message: string; estimated_availability: string; fee_amount: number; fee_type: withdrawal_fee_types; ledger_account: object; markup_fee: number; payout_token: object; speed: withdrawal_speeds; status: withdrawal_status; trace_code: string; }`\n\n**post** `/withdrawals`\n\nCreates a withdrawal request for a ledger account\n\nRequired permissions:\n - `payout:withdraw_funds`\n - `payout:destination:read`\n\n### Parameters\n\n- `amount: number`\n  The amount to withdraw in the specified currency\n\n- `company_id: string`\n  The ID of the company to withdraw from.\n\n- `currency: string`\n  The currency that is being withdrawn.\n\n- `payout_method_id?: string`\n  The ID of the payout method to use for the withdrawal.\n\n- `platform_covers_fees?: boolean`\n  Whether the platform covers the payout fees instead of the connected account.\n\n- `statement_descriptor?: string`\n  Custom statement descriptor for the withdrawal. Must be between 5 and 22 characters and contain only alphanumeric characters.\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; error_code: string; error_message: string; estimated_availability: string; fee_amount: number; fee_type: 'exclusive' | 'inclusive'; ledger_account: { id: string; company_id: string; }; markup_fee: number; payout_token: { id: string; created_at: string; destination_currency_code: string; nickname: string; payer_name: string; }; speed: 'standard' | 'instant'; status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'; trace_code: string; }`\n  A withdrawal represents a request to transfer funds from a ledger account to an external payout method.\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `error_code: string`\n  - `error_message: string`\n  - `estimated_availability: string`\n  - `fee_amount: number`\n  - `fee_type: 'exclusive' | 'inclusive'`\n  - `ledger_account: { id: string; company_id: string; }`\n  - `markup_fee: number`\n  - `payout_token: { id: string; created_at: string; destination_currency_code: string; nickname: string; payer_name: string; }`\n  - `speed: 'standard' | 'instant'`\n  - `status: 'requested' | 'awaiting_payment' | 'in_transit' | 'completed' | 'failed' | 'canceled' | 'denied'`\n  - `trace_code: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst withdrawal = await client.withdrawals.create({\n  amount: 6.9,\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  currency: 'usd',\n});\n\nconsole.log(withdrawal);\n```",
    perLanguage: {
      typescript: {
        method: 'client.withdrawals.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst withdrawal = await client.withdrawals.create({\n  amount: 6.9,\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  currency: 'usd',\n});\n\nconsole.log(withdrawal.id);",
      },
      python: {
        method: 'withdrawals.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nwithdrawal = client.withdrawals.create(\n    amount=6.9,\n    company_id="biz_xxxxxxxxxxxxxx",\n    currency="usd",\n)\nprint(withdrawal.id)',
      },
      ruby: {
        method: 'withdrawals.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nwithdrawal = whop.withdrawals.create(amount: 6.9, company_id: "biz_xxxxxxxxxxxxxx", currency: :usd)\n\nputs(withdrawal)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/withdrawals \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "amount": 6.9,\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "currency": "usd"\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/account_links',
    httpMethod: 'post',
    summary: 'Create account link',
    description:
      'Generate a URL that directs a sub-merchant to their account portal, such as the hosted payouts dashboard or the KYC onboarding flow.',
    stainlessPath: '(resource) account_links > (method) create',
    qualified: 'client.accountLinks.create',
    params: [
      'company_id: string;',
      'refresh_url: string;',
      'return_url: string;',
      "use_case: 'account_onboarding' | 'payouts_portal';",
    ],
    response: '{ expires_at: string; url: string; }',
    markdown:
      "## create\n\n`client.accountLinks.create(company_id: string, refresh_url: string, return_url: string, use_case: 'account_onboarding' | 'payouts_portal'): { expires_at: string; url: string; }`\n\n**post** `/account_links`\n\nGenerate a URL that directs a sub-merchant to their account portal, such as the hosted payouts dashboard or the KYC onboarding flow.\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to generate the link for, starting with 'biz_'. Must be a sub-merchant of the API key's company.\n\n- `refresh_url: string`\n  The URL to redirect the user to if the session expires and needs to be re-authenticated, such as 'https://example.com/refresh'.\n\n- `return_url: string`\n  The URL to redirect the user to when they want to return to your site, such as 'https://example.com/return'.\n\n- `use_case: 'account_onboarding' | 'payouts_portal'`\n  The purpose of the account link, such as hosted payouts portal or hosted KYC onboarding.\n\n### Returns\n\n- `{ expires_at: string; url: string; }`\n  A temporary, time-limited URL that grants a user access to an external account management page.\n\n  - `expires_at: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst accountLink = await client.accountLinks.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  refresh_url: 'refresh_url',\n  return_url: 'return_url',\n  use_case: 'account_onboarding',\n});\n\nconsole.log(accountLink);\n```",
    perLanguage: {
      typescript: {
        method: 'client.accountLinks.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountLink = await client.accountLinks.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  refresh_url: 'refresh_url',\n  return_url: 'return_url',\n  use_case: 'account_onboarding',\n});\n\nconsole.log(accountLink.expires_at);",
      },
      python: {
        method: 'account_links.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\naccount_link = client.account_links.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    refresh_url="refresh_url",\n    return_url="return_url",\n    use_case="account_onboarding",\n)\nprint(account_link.expires_at)',
      },
      ruby: {
        method: 'account_links.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\naccount_link = whop.account_links.create(\n  company_id: "biz_xxxxxxxxxxxxxx",\n  refresh_url: "refresh_url",\n  return_url: "return_url",\n  use_case: :account_onboarding\n)\n\nputs(account_link)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/account_links \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "refresh_url": "refresh_url",\n          "return_url": "return_url",\n          "use_case": "account_onboarding"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/setup_intents',
    httpMethod: 'get',
    summary: 'List setup intents',
    description:
      "Returns a paginated list of setup intents for a company, with optional filtering by creation date. A setup intent securely collects and stores a member's payment method for future use without charging them immediately.\n\nRequired permissions:\n - `payment:setup_intent:read`\n - `member:basic:read`\n - `member:email:read`",
    stainlessPath: '(resource) setup_intents > (method) list',
    qualified: 'client.setupIntents.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; checkout_configuration: { id: string; }; company: { id: string; }; created_at: string; error_message: string; member: { id: string; user: { id: string; email: string; name: string; username: string; }; }; metadata: object; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; mailing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; payment_method_type: string; }; status: 'processing' | 'succeeded' | 'canceled' | 'requires_action'; }",
    markdown:
      "## list\n\n`client.setupIntents.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number): { id: string; checkout_configuration: object; company: object; created_at: string; error_message: string; member: object; metadata: object; payment_method: object; status: setup_intent_status; }`\n\n**get** `/setup_intents`\n\nReturns a paginated list of setup intents for a company, with optional filtering by creation date. A setup intent securely collects and stores a member's payment method for future use without charging them immediately.\n\nRequired permissions:\n - `payment:setup_intent:read`\n - `member:basic:read`\n - `member:email:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list setup intents for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return setup intents created after this timestamp.\n\n- `created_before?: string`\n  Only return setup intents created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; checkout_configuration: { id: string; }; company: { id: string; }; created_at: string; error_message: string; member: { id: string; user: { id: string; email: string; name: string; username: string; }; }; metadata: object; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; mailing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; payment_method_type: string; }; status: 'processing' | 'succeeded' | 'canceled' | 'requires_action'; }`\n  A setup intent allows a user to save a payment method for future use without making an immediate purchase.\n\n  - `id: string`\n  - `checkout_configuration: { id: string; }`\n  - `company: { id: string; }`\n  - `created_at: string`\n  - `error_message: string`\n  - `member: { id: string; user: { id: string; email: string; name: string; username: string; }; }`\n  - `metadata: object`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; mailing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; payment_method_type: string; }`\n  - `status: 'processing' | 'succeeded' | 'canceled' | 'requires_action'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const setupIntentListResponse of client.setupIntents.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(setupIntentListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.setupIntents.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const setupIntentListResponse of client.setupIntents.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(setupIntentListResponse.id);\n}",
      },
      python: {
        method: 'setup_intents.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.setup_intents.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'setup_intents.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.setup_intents.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/setup_intents \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/setup_intents/{id}',
    httpMethod: 'get',
    summary: 'Retrieve setup intent',
    description:
      'Retrieves the details of an existing setup intent.\n\nRequired permissions:\n - `payment:setup_intent:read`\n - `member:basic:read`\n - `member:email:read`',
    stainlessPath: '(resource) setup_intents > (method) retrieve',
    qualified: 'client.setupIntents.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; checkout_configuration: { id: string; }; company: { id: string; }; created_at: string; error_message: string; member: { id: string; user: { id: string; email: string; name: string; username: string; }; }; metadata: object; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; mailing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; payment_method_type: string; }; status: 'processing' | 'succeeded' | 'canceled' | 'requires_action'; }",
    markdown:
      "## retrieve\n\n`client.setupIntents.retrieve(id: string): { id: string; checkout_configuration: object; company: object; created_at: string; error_message: string; member: object; metadata: object; payment_method: object; status: setup_intent_status; }`\n\n**get** `/setup_intents/{id}`\n\nRetrieves the details of an existing setup intent.\n\nRequired permissions:\n - `payment:setup_intent:read`\n - `member:basic:read`\n - `member:email:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; checkout_configuration: { id: string; }; company: { id: string; }; created_at: string; error_message: string; member: { id: string; user: { id: string; email: string; name: string; username: string; }; }; metadata: object; payment_method: { id: string; card: { brand: card_brands; exp_month: number; exp_year: number; last4: string; }; created_at: string; mailing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; payment_method_type: string; }; status: 'processing' | 'succeeded' | 'canceled' | 'requires_action'; }`\n  A setup intent allows a user to save a payment method for future use without making an immediate purchase.\n\n  - `id: string`\n  - `checkout_configuration: { id: string; }`\n  - `company: { id: string; }`\n  - `created_at: string`\n  - `error_message: string`\n  - `member: { id: string; user: { id: string; email: string; name: string; username: string; }; }`\n  - `metadata: object`\n  - `payment_method: { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; mailing_address: { city: string; country: string; line1: string; line2: string; name: string; postal_code: string; state: string; }; payment_method_type: string; }`\n  - `status: 'processing' | 'succeeded' | 'canceled' | 'requires_action'`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst setupIntent = await client.setupIntents.retrieve('sint_xxxxxxxxxxxxx');\n\nconsole.log(setupIntent);\n```",
    perLanguage: {
      typescript: {
        method: 'client.setupIntents.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst setupIntent = await client.setupIntents.retrieve('sint_xxxxxxxxxxxxx');\n\nconsole.log(setupIntent.id);",
      },
      python: {
        method: 'setup_intents.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nsetup_intent = client.setup_intents.retrieve(\n    "sint_xxxxxxxxxxxxx",\n)\nprint(setup_intent.id)',
      },
      ruby: {
        method: 'setup_intents.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nsetup_intent = whop.setup_intents.retrieve("sint_xxxxxxxxxxxxx")\n\nputs(setup_intent)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/setup_intents/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/payment_methods',
    httpMethod: 'get',
    summary: 'List payment methods',
    description:
      'Returns a paginated list of payment methods for a member or company, with optional filtering by creation date. A payment method is a stored representation of how a customer intends to pay, such as a card, bank account, or digital wallet.\n\nRequired permissions:\n - `member:payment_methods:read`',
    stainlessPath: '(resource) payment_methods > (method) list',
    qualified: 'client.paymentMethods.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'member_id?: string;',
    ],
    response:
      "{ id: string; created_at: string; payment_method_type: string; typename: 'BasePaymentMethod'; } | { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; typename: 'CardPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; typename: 'UsBankAccountPaymentMethod'; us_bank_account: { account_type: string; bank_name: string; last4: string; }; } | { id: string; cashapp: { buyer_id: string; cashtag: string; }; created_at: string; payment_method_type: string; typename: 'CashappPaymentMethod'; } | { id: string; created_at: string; ideal: { bank: string; bic: string; }; payment_method_type: string; typename: 'IdealPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; sepa_debit: { bank_code: string; branch_code: string; country: string; last4: string; }; typename: 'SepaDebitPaymentMethod'; }",
    markdown:
      "## list\n\n`client.paymentMethods.list(after?: string, before?: string, company_id?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, member_id?: string): { id: string; created_at: string; payment_method_type: payment_method_types; typename: 'BasePaymentMethod'; } | { id: string; card: object; created_at: string; payment_method_type: payment_method_types; typename: 'CardPaymentMethod'; } | { id: string; created_at: string; payment_method_type: payment_method_types; typename: 'UsBankAccountPaymentMethod'; us_bank_account: object; } | { id: string; cashapp: object; created_at: string; payment_method_type: payment_method_types; typename: 'CashappPaymentMethod'; } | { id: string; created_at: string; ideal: object; payment_method_type: payment_method_types; typename: 'IdealPaymentMethod'; } | { id: string; created_at: string; payment_method_type: payment_method_types; sepa_debit: object; typename: 'SepaDebitPaymentMethod'; }`\n\n**get** `/payment_methods`\n\nReturns a paginated list of payment methods for a member or company, with optional filtering by creation date. A payment method is a stored representation of how a customer intends to pay, such as a card, bank account, or digital wallet.\n\nRequired permissions:\n - `member:payment_methods:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of the company. Provide either this or member_id, not both.\n\n- `created_after?: string`\n  Only return payment methods created after this timestamp.\n\n- `created_before?: string`\n  Only return payment methods created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `member_id?: string`\n  The unique identifier of the member to list payment methods for.\n\n### Returns\n\n- `{ id: string; created_at: string; payment_method_type: string; typename: 'BasePaymentMethod'; } | { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; typename: 'CardPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; typename: 'UsBankAccountPaymentMethod'; us_bank_account: { account_type: string; bank_name: string; last4: string; }; } | { id: string; cashapp: { buyer_id: string; cashtag: string; }; created_at: string; payment_method_type: string; typename: 'CashappPaymentMethod'; } | { id: string; created_at: string; ideal: { bank: string; bic: string; }; payment_method_type: string; typename: 'IdealPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; sepa_debit: { bank_code: string; branch_code: string; country: string; last4: string; }; typename: 'SepaDebitPaymentMethod'; }`\n  A saved payment method with no type-specific details available.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const paymentMethodListResponse of client.paymentMethods.list()) {\n  console.log(paymentMethodListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.paymentMethods.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const paymentMethodListResponse of client.paymentMethods.list()) {\n  console.log(paymentMethodListResponse);\n}",
      },
      python: {
        method: 'payment_methods.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.payment_methods.list()\npage = page.data[0]\nprint(page)',
      },
      ruby: {
        method: 'payment_methods.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.payment_methods.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payment_methods \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/payment_methods/{id}',
    httpMethod: 'get',
    summary: 'Retrieve payment method',
    description:
      'Retrieves the details of an existing payment method.\n\nRequired permissions:\n - `member:payment_methods:read`',
    stainlessPath: '(resource) payment_methods > (method) retrieve',
    qualified: 'client.paymentMethods.retrieve',
    params: ['id: string;', 'company_id?: string;', 'member_id?: string;'],
    response:
      "{ id: string; created_at: string; payment_method_type: string; typename: 'BasePaymentMethod'; } | { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; typename: 'CardPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; typename: 'UsBankAccountPaymentMethod'; us_bank_account: { account_type: string; bank_name: string; last4: string; }; } | { id: string; cashapp: { buyer_id: string; cashtag: string; }; created_at: string; payment_method_type: string; typename: 'CashappPaymentMethod'; } | { id: string; created_at: string; ideal: { bank: string; bic: string; }; payment_method_type: string; typename: 'IdealPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; sepa_debit: { bank_code: string; branch_code: string; country: string; last4: string; }; typename: 'SepaDebitPaymentMethod'; }",
    markdown:
      "## retrieve\n\n`client.paymentMethods.retrieve(id: string, company_id?: string, member_id?: string): { id: string; created_at: string; payment_method_type: payment_method_types; typename: 'BasePaymentMethod'; } | { id: string; card: object; created_at: string; payment_method_type: payment_method_types; typename: 'CardPaymentMethod'; } | { id: string; created_at: string; payment_method_type: payment_method_types; typename: 'UsBankAccountPaymentMethod'; us_bank_account: object; } | { id: string; cashapp: object; created_at: string; payment_method_type: payment_method_types; typename: 'CashappPaymentMethod'; } | { id: string; created_at: string; ideal: object; payment_method_type: payment_method_types; typename: 'IdealPaymentMethod'; } | { id: string; created_at: string; payment_method_type: payment_method_types; sepa_debit: object; typename: 'SepaDebitPaymentMethod'; }`\n\n**get** `/payment_methods/{id}`\n\nRetrieves the details of an existing payment method.\n\nRequired permissions:\n - `member:payment_methods:read`\n\n### Parameters\n\n- `id: string`\n\n- `company_id?: string`\n  The unique identifier of the company. Provide either this or member_id, not both.\n\n- `member_id?: string`\n  The unique identifier of the member. Provide either this or company_id, not both.\n\n### Returns\n\n- `{ id: string; created_at: string; payment_method_type: string; typename: 'BasePaymentMethod'; } | { id: string; card: { brand: string; exp_month: number; exp_year: number; last4: string; }; created_at: string; payment_method_type: string; typename: 'CardPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; typename: 'UsBankAccountPaymentMethod'; us_bank_account: { account_type: string; bank_name: string; last4: string; }; } | { id: string; cashapp: { buyer_id: string; cashtag: string; }; created_at: string; payment_method_type: string; typename: 'CashappPaymentMethod'; } | { id: string; created_at: string; ideal: { bank: string; bic: string; }; payment_method_type: string; typename: 'IdealPaymentMethod'; } | { id: string; created_at: string; payment_method_type: string; sepa_debit: { bank_code: string; branch_code: string; country: string; last4: string; }; typename: 'SepaDebitPaymentMethod'; }`\n  A saved payment method with no type-specific details available.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst paymentMethod = await client.paymentMethods.retrieve('payt_xxxxxxxxxxxxx');\n\nconsole.log(paymentMethod);\n```",
    perLanguage: {
      typescript: {
        method: 'client.paymentMethods.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst paymentMethod = await client.paymentMethods.retrieve('payt_xxxxxxxxxxxxx');\n\nconsole.log(paymentMethod);",
      },
      python: {
        method: 'payment_methods.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayment_method = client.payment_methods.retrieve(\n    id="payt_xxxxxxxxxxxxx",\n)\nprint(payment_method)',
      },
      ruby: {
        method: 'payment_methods.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayment_method = whop.payment_methods.retrieve("payt_xxxxxxxxxxxxx")\n\nputs(payment_method)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payment_methods/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/fee_markups',
    httpMethod: 'get',
    summary: 'List fee markups',
    description:
      'Returns a paginated list of fee markups configured for a company. If the company is a platform account, returns the platform default markups.\n\nRequired permissions:\n - `company:update_child_fees`',
    stainlessPath: '(resource) fee_markups > (method) list',
    qualified: 'client.feeMarkups.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      '{ id: string; created_at: string; fee_type: string; fixed_fee_usd: number; notes: string; percentage_fee: number; updated_at: string; }',
    markdown:
      "## list\n\n`client.feeMarkups.list(company_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; created_at: string; fee_type: fee_markup_type; fixed_fee_usd: number; notes: string; percentage_fee: number; updated_at: string; }`\n\n**get** `/fee_markups`\n\nReturns a paginated list of fee markups configured for a company. If the company is a platform account, returns the platform default markups.\n\nRequired permissions:\n - `company:update_child_fees`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list fee markups for. Pass a platform account identifier to retrieve platform default markups.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; created_at: string; fee_type: string; fixed_fee_usd: number; notes: string; percentage_fee: number; updated_at: string; }`\n  A fee markup configuration that defines additional charges applied to transactions for a platform's connected accounts.\n\n  - `id: string`\n  - `created_at: string`\n  - `fee_type: string`\n  - `fixed_fee_usd: number`\n  - `notes: string`\n  - `percentage_fee: number`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const feeMarkupListResponse of client.feeMarkups.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(feeMarkupListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.feeMarkups.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const feeMarkupListResponse of client.feeMarkups.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(feeMarkupListResponse.id);\n}",
      },
      python: {
        method: 'fee_markups.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.fee_markups.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'fee_markups.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.fee_markups.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/fee_markups \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/fee_markups',
    httpMethod: 'post',
    summary: 'Create fee markup',
    description:
      'Create or update a fee markup for a company. If a markup for the specified fee type already exists, it will be updated with the new values.\n\nRequired permissions:\n - `company:update_child_fees`',
    stainlessPath: '(resource) fee_markups > (method) create',
    qualified: 'client.feeMarkups.create',
    params: [
      'company_id: string;',
      'fee_type: string;',
      'fixed_fee_usd?: number;',
      'metadata?: object;',
      'notes?: string;',
      'percentage_fee?: number;',
    ],
    response:
      '{ id: string; created_at: string; fee_type: string; fixed_fee_usd: number; notes: string; percentage_fee: number; updated_at: string; }',
    markdown:
      "## create\n\n`client.feeMarkups.create(company_id: string, fee_type: string, fixed_fee_usd?: number, metadata?: object, notes?: string, percentage_fee?: number): { id: string; created_at: string; fee_type: fee_markup_type; fixed_fee_usd: number; notes: string; percentage_fee: number; updated_at: string; }`\n\n**post** `/fee_markups`\n\nCreate or update a fee markup for a company. If a markup for the specified fee type already exists, it will be updated with the new values.\n\nRequired permissions:\n - `company:update_child_fees`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create or update the fee markup for.\n\n- `fee_type: string`\n  The type of fee this markup applies to, such as processing or platform fees.\n\n- `fixed_fee_usd?: number`\n  The fixed fee amount in USD to charge per transaction. Must be between 0 and 50.\n\n- `metadata?: object`\n  Custom key-value metadata to attach to this fee markup.\n\n- `notes?: string`\n  Internal notes about this fee markup for record-keeping purposes.\n\n- `percentage_fee?: number`\n  The percentage fee to charge per transaction. Must be between 0 and 25.\n\n### Returns\n\n- `{ id: string; created_at: string; fee_type: string; fixed_fee_usd: number; notes: string; percentage_fee: number; updated_at: string; }`\n  A fee markup configuration that defines additional charges applied to transactions for a platform's connected accounts.\n\n  - `id: string`\n  - `created_at: string`\n  - `fee_type: string`\n  - `fixed_fee_usd: number`\n  - `notes: string`\n  - `percentage_fee: number`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst feeMarkup = await client.feeMarkups.create({ company_id: 'biz_xxxxxxxxxxxxxx', fee_type: 'crypto_withdrawal_markup' });\n\nconsole.log(feeMarkup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feeMarkups.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst feeMarkup = await client.feeMarkups.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  fee_type: 'crypto_withdrawal_markup',\n});\n\nconsole.log(feeMarkup.id);",
      },
      python: {
        method: 'fee_markups.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nfee_markup = client.fee_markups.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    fee_type="crypto_withdrawal_markup",\n)\nprint(fee_markup.id)',
      },
      ruby: {
        method: 'fee_markups.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nfee_markup = whop.fee_markups.create(company_id: "biz_xxxxxxxxxxxxxx", fee_type: :crypto_withdrawal_markup)\n\nputs(fee_markup)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/fee_markups \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "fee_type": "crypto_withdrawal_markup",\n          "fixed_fee_usd": 6.9,\n          "percentage_fee": 6.9\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/fee_markups/{id}',
    httpMethod: 'delete',
    summary: 'Delete fee markup',
    description:
      "Delete a fee markup configuration for a company. This removes the custom fee override and reverts to the parent company's default fees.\n\nRequired permissions:\n - `company:update_child_fees`",
    stainlessPath: '(resource) fee_markups > (method) delete',
    qualified: 'client.feeMarkups.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.feeMarkups.delete(id: string): boolean`\n\n**delete** `/fee_markups/{id}`\n\nDelete a fee markup configuration for a company. This removes the custom fee override and reverts to the parent company's default fees.\n\nRequired permissions:\n - `company:update_child_fees`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst feeMarkup = await client.feeMarkups.delete('id');\n\nconsole.log(feeMarkup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.feeMarkups.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst feeMarkup = await client.feeMarkups.delete('id');\n\nconsole.log(feeMarkup);",
      },
      python: {
        method: 'fee_markups.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nfee_markup = client.fee_markups.delete(\n    "id",\n)\nprint(fee_markup)',
      },
      ruby: {
        method: 'fee_markups.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nfee_markup = whop.fee_markups.delete("id")\n\nputs(fee_markup)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/fee_markups/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/payout_methods',
    httpMethod: 'get',
    summary: 'List payout methods',
    description:
      'Returns a list of active payout methods configured for a company, ordered by most recently created.\n\nRequired permissions:\n - `payout:destination:read`',
    stainlessPath: '(resource) payout_methods > (method) list',
    qualified: 'client.payoutMethods.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; account_reference: string; company: { id: string; }; created_at: string; currency: string; destination: { category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown'; country_code: string; name: string; }; institution_name: string; is_default: boolean; nickname: string; }",
    markdown:
      "## list\n\n`client.payoutMethods.list(company_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; account_reference: string; company: object; created_at: string; currency: string; destination: object; institution_name: string; is_default: boolean; nickname: string; }`\n\n**get** `/payout_methods`\n\nReturns a list of active payout methods configured for a company, ordered by most recently created.\n\nRequired permissions:\n - `payout:destination:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list payout methods for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; account_reference: string; company: { id: string; }; created_at: string; currency: string; destination: { category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown'; country_code: string; name: string; }; institution_name: string; is_default: boolean; nickname: string; }`\n  A configured payout destination where a user receives earned funds, such as a bank account or digital wallet.\n\n  - `id: string`\n  - `account_reference: string`\n  - `company: { id: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `destination: { category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown'; country_code: string; name: string; }`\n  - `institution_name: string`\n  - `is_default: boolean`\n  - `nickname: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const payoutMethodListResponse of client.payoutMethods.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(payoutMethodListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.payoutMethods.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const payoutMethodListResponse of client.payoutMethods.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(payoutMethodListResponse.id);\n}",
      },
      python: {
        method: 'payout_methods.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.payout_methods.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'payout_methods.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.payout_methods.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payout_methods \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/payout_methods/{id}',
    httpMethod: 'get',
    summary: 'Retrieve payout method',
    description:
      'Retrieves the details of an existing payout method.\n\nRequired permissions:\n - `payout:destination:read`',
    stainlessPath: '(resource) payout_methods > (method) retrieve',
    qualified: 'client.payoutMethods.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; account_reference: string; company: { id: string; }; created_at: string; currency: string; destination: { category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown'; country_code: string; name: string; }; institution_name: string; is_default: boolean; nickname: string; }",
    markdown:
      "## retrieve\n\n`client.payoutMethods.retrieve(id: string): { id: string; account_reference: string; company: object; created_at: string; currency: string; destination: object; institution_name: string; is_default: boolean; nickname: string; }`\n\n**get** `/payout_methods/{id}`\n\nRetrieves the details of an existing payout method.\n\nRequired permissions:\n - `payout:destination:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; account_reference: string; company: { id: string; }; created_at: string; currency: string; destination: { category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown'; country_code: string; name: string; }; institution_name: string; is_default: boolean; nickname: string; }`\n  A configured payout destination where a user receives earned funds, such as a bank account or digital wallet.\n\n  - `id: string`\n  - `account_reference: string`\n  - `company: { id: string; }`\n  - `created_at: string`\n  - `currency: string`\n  - `destination: { category: 'crypto' | 'rtp' | 'next_day_bank' | 'bank_wire' | 'digital_wallet' | 'unknown'; country_code: string; name: string; }`\n  - `institution_name: string`\n  - `is_default: boolean`\n  - `nickname: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst payoutMethod = await client.payoutMethods.retrieve('potk_xxxxxxxxxxxxx');\n\nconsole.log(payoutMethod);\n```",
    perLanguage: {
      typescript: {
        method: 'client.payoutMethods.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutMethod = await client.payoutMethods.retrieve('potk_xxxxxxxxxxxxx');\n\nconsole.log(payoutMethod.id);",
      },
      python: {
        method: 'payout_methods.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayout_method = client.payout_methods.retrieve(\n    "potk_xxxxxxxxxxxxx",\n)\nprint(payout_method.id)',
      },
      ruby: {
        method: 'payout_methods.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayout_method = whop.payout_methods.retrieve("potk_xxxxxxxxxxxxx")\n\nputs(payout_method)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payout_methods/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/verifications/{id}',
    httpMethod: 'get',
    summary: 'Retrieve verification',
    description:
      'Retrieves the details of an existing verification.\n\nRequired permissions:\n - `payout:account:read`',
    stainlessPath: '(resource) verifications > (method) retrieve',
    qualified: 'client.verifications.retrieve',
    params: ['id: string;'],
    response: '{ id: string; last_error_code: string; last_error_reason: string; status: string; }',
    markdown:
      "## retrieve\n\n`client.verifications.retrieve(id: string): { id: string; last_error_code: verification_error_code; last_error_reason: string; status: verification_status; }`\n\n**get** `/verifications/{id}`\n\nRetrieves the details of an existing verification.\n\nRequired permissions:\n - `payout:account:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; last_error_code: string; last_error_reason: string; status: string; }`\n  An identity verification session used to confirm a person or entity's identity for payout account eligibility.\n\n  - `id: string`\n  - `last_error_code: string`\n  - `last_error_reason: string`\n  - `status: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst verification = await client.verifications.retrieve('verf_xxxxxxxxxxxxx');\n\nconsole.log(verification);\n```",
    perLanguage: {
      typescript: {
        method: 'client.verifications.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst verification = await client.verifications.retrieve('verf_xxxxxxxxxxxxx');\n\nconsole.log(verification.id);",
      },
      python: {
        method: 'verifications.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nverification = client.verifications.retrieve(\n    "verf_xxxxxxxxxxxxx",\n)\nprint(verification.id)',
      },
      ruby: {
        method: 'verifications.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nverification = whop.verifications.retrieve("verf_xxxxxxxxxxxxx")\n\nputs(verification)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/verifications/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/verifications',
    httpMethod: 'get',
    summary: 'List verifications',
    description:
      'Returns a list of identity verifications for a payout account, ordered by most recent first.\n\nRequired permissions:\n - `payout:account:read`',
    stainlessPath: '(resource) verifications > (method) list',
    qualified: 'client.verifications.list',
    params: [
      'payout_account_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response: '{ id: string; last_error_code: string; last_error_reason: string; status: string; }',
    markdown:
      "## list\n\n`client.verifications.list(payout_account_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; last_error_code: verification_error_code; last_error_reason: string; status: verification_status; }`\n\n**get** `/verifications`\n\nReturns a list of identity verifications for a payout account, ordered by most recent first.\n\nRequired permissions:\n - `payout:account:read`\n\n### Parameters\n\n- `payout_account_id: string`\n  The unique identifier of the payout account to list verifications for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; last_error_code: string; last_error_reason: string; status: string; }`\n  An identity verification session used to confirm a person or entity's identity for payout account eligibility.\n\n  - `id: string`\n  - `last_error_code: string`\n  - `last_error_reason: string`\n  - `status: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const verificationListResponse of client.verifications.list({ payout_account_id: 'poact_xxxxxxxxxxxx' })) {\n  console.log(verificationListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.verifications.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const verificationListResponse of client.verifications.list({\n  payout_account_id: 'poact_xxxxxxxxxxxx',\n})) {\n  console.log(verificationListResponse.id);\n}",
      },
      python: {
        method: 'verifications.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.verifications.list(\n    payout_account_id="poact_xxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'verifications.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.verifications.list(payout_account_id: "poact_xxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/verifications \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/leads',
    httpMethod: 'get',
    summary: 'List leads',
    description:
      'Returns a paginated list of leads for a company, with optional filtering by product and creation date.\n\nRequired permissions:\n - `lead:basic:read`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`',
    stainlessPath: '(resource) leads > (method) list',
    qualified: 'client.leads.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      'first?: number;',
      'last?: number;',
      'product_ids?: string[];',
    ],
    response:
      '{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## list\n\n`client.leads.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, first?: number, last?: number, product_ids?: string[]): { id: string; created_at: string; member: object; metadata: object; product: object; referrer: string; updated_at: string; user: object; }`\n\n**get** `/leads`\n\nReturns a paginated list of leads for a company, with optional filtering by product and creation date.\n\nRequired permissions:\n - `lead:basic:read`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list leads for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return leads created after this timestamp.\n\n- `created_before?: string`\n  Only return leads created before this timestamp.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `product_ids?: string[]`\n  Filter leads to only those associated with these specific product identifiers.\n\n### Returns\n\n- `{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A prospective customer who has expressed interest in a company or product but has not yet purchased.\n\n  - `id: string`\n  - `created_at: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `product: { id: string; title: string; }`\n  - `referrer: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const leadListResponse of client.leads.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(leadListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.leads.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const leadListResponse of client.leads.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(leadListResponse.id);\n}",
      },
      python: {
        method: 'leads.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.leads.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'leads.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.leads.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/leads \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/leads',
    httpMethod: 'post',
    summary: 'Create lead',
    description:
      "Record a new lead for a company, capturing a potential customer's interest in a specific product.\n\nRequired permissions:\n - `lead:manage`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`",
    stainlessPath: '(resource) leads > (method) create',
    qualified: 'client.leads.create',
    params: [
      'company_id: string;',
      'metadata?: object;',
      'product_id?: string;',
      'referrer?: string;',
      'user_id?: string;',
    ],
    response:
      '{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## create\n\n`client.leads.create(company_id: string, metadata?: object, product_id?: string, referrer?: string, user_id?: string): { id: string; created_at: string; member: object; metadata: object; product: object; referrer: string; updated_at: string; user: object; }`\n\n**post** `/leads`\n\nRecord a new lead for a company, capturing a potential customer's interest in a specific product.\n\nRequired permissions:\n - `lead:manage`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to create the lead for, starting with 'biz_'.\n\n- `metadata?: object`\n  A JSON object of custom metadata to attach to the lead for tracking purposes.\n\n- `product_id?: string`\n  The unique identifier of the product the lead is interested in, starting with 'prod_'.\n\n- `referrer?: string`\n  The referral URL that brought the lead to the company, such as 'https://example.com/landing'.\n\n- `user_id?: string`\n  The unique identifier of the user to record as the lead. If authenticated as a user, that user is used automatically.\n\n### Returns\n\n- `{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A prospective customer who has expressed interest in a company or product but has not yet purchased.\n\n  - `id: string`\n  - `created_at: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `product: { id: string; title: string; }`\n  - `referrer: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst lead = await client.leads.create({ company_id: 'biz_xxxxxxxxxxxxxx' });\n\nconsole.log(lead);\n```",
    perLanguage: {
      typescript: {
        method: 'client.leads.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst lead = await client.leads.create({ company_id: 'biz_xxxxxxxxxxxxxx' });\n\nconsole.log(lead.id);",
      },
      python: {
        method: 'leads.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nlead = client.leads.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\nprint(lead.id)',
      },
      ruby: {
        method: 'leads.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nlead = whop.leads.create(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(lead)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/leads \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "product_id": "prod_xxxxxxxxxxxxx",\n          "user_id": "user_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/leads/{id}',
    httpMethod: 'get',
    summary: 'Retrieve lead',
    description:
      'Retrieves the details of an existing lead.\n\nRequired permissions:\n - `lead:basic:read`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`',
    stainlessPath: '(resource) leads > (method) retrieve',
    qualified: 'client.leads.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## retrieve\n\n`client.leads.retrieve(id: string): { id: string; created_at: string; member: object; metadata: object; product: object; referrer: string; updated_at: string; user: object; }`\n\n**get** `/leads/{id}`\n\nRetrieves the details of an existing lead.\n\nRequired permissions:\n - `lead:basic:read`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A prospective customer who has expressed interest in a company or product but has not yet purchased.\n\n  - `id: string`\n  - `created_at: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `product: { id: string; title: string; }`\n  - `referrer: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst lead = await client.leads.retrieve('lead_xxxxxxxxxxxxx');\n\nconsole.log(lead);\n```",
    perLanguage: {
      typescript: {
        method: 'client.leads.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst lead = await client.leads.retrieve('lead_xxxxxxxxxxxxx');\n\nconsole.log(lead.id);",
      },
      python: {
        method: 'leads.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nlead = client.leads.retrieve(\n    "lead_xxxxxxxxxxxxx",\n)\nprint(lead.id)',
      },
      ruby: {
        method: 'leads.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nlead = whop.leads.retrieve("lead_xxxxxxxxxxxxx")\n\nputs(lead)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/leads/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/leads/{id}',
    httpMethod: 'patch',
    summary: 'Update lead',
    description:
      'Update the metadata or referrer information on an existing lead record.\n\nRequired permissions:\n - `lead:manage`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`',
    stainlessPath: '(resource) leads > (method) update',
    qualified: 'client.leads.update',
    params: ['id: string;', 'metadata?: object;', 'referrer?: string;'],
    response:
      '{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }',
    markdown:
      "## update\n\n`client.leads.update(id: string, metadata?: object, referrer?: string): { id: string; created_at: string; member: object; metadata: object; product: object; referrer: string; updated_at: string; user: object; }`\n\n**patch** `/leads/{id}`\n\nUpdate the metadata or referrer information on an existing lead record.\n\nRequired permissions:\n - `lead:manage`\n - `member:email:read`\n - `access_pass:basic:read`\n - `member:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `metadata?: object`\n  A JSON object of custom metadata to set on the lead, replacing any existing metadata.\n\n- `referrer?: string`\n  The updated referral URL for the lead, such as 'https://example.com/landing'.\n\n### Returns\n\n- `{ id: string; created_at: string; member: { id: string; }; metadata: object; product: { id: string; title: string; }; referrer: string; updated_at: string; user: { id: string; email: string; name: string; username: string; }; }`\n  A prospective customer who has expressed interest in a company or product but has not yet purchased.\n\n  - `id: string`\n  - `created_at: string`\n  - `member: { id: string; }`\n  - `metadata: object`\n  - `product: { id: string; title: string; }`\n  - `referrer: string`\n  - `updated_at: string`\n  - `user: { id: string; email: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst lead = await client.leads.update('lead_xxxxxxxxxxxxx');\n\nconsole.log(lead);\n```",
    perLanguage: {
      typescript: {
        method: 'client.leads.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst lead = await client.leads.update('lead_xxxxxxxxxxxxx');\n\nconsole.log(lead.id);",
      },
      python: {
        method: 'leads.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nlead = client.leads.update(\n    id="lead_xxxxxxxxxxxxx",\n)\nprint(lead.id)',
      },
      ruby: {
        method: 'leads.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nlead = whop.leads.update("lead_xxxxxxxxxxxxx")\n\nputs(lead)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/leads/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/topups',
    httpMethod: 'post',
    summary: 'Create topup',
    description:
      "Add funds to a company's platform balance by charging a stored payment method. Top-ups have no fees or taxes and do not count as revenue.\n\nRequired permissions:\n - `payment:charge`",
    stainlessPath: '(resource) topups > (method) create',
    qualified: 'client.topups.create',
    params: ['amount: number;', 'company_id: string;', 'currency: string;', 'payment_method_id: string;'],
    response:
      "{ id: string; created_at: string; currency: string; failure_message: string; paid_at: string; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; total: number; }",
    markdown:
      "## create\n\n`client.topups.create(amount: number, company_id: string, currency: string, payment_method_id: string): { id: string; created_at: string; currency: currency; failure_message: string; paid_at: string; status: receipt_status; total: number; }`\n\n**post** `/topups`\n\nAdd funds to a company's platform balance by charging a stored payment method. Top-ups have no fees or taxes and do not count as revenue.\n\nRequired permissions:\n - `payment:charge`\n\n### Parameters\n\n- `amount: number`\n  The amount to add to the balance in the specified currency. For example, 50.00 for $50.00 USD.\n\n- `company_id: string`\n  The unique identifier of the company to add funds to, starting with 'biz_'.\n\n- `currency: string`\n  The currency for the top-up amount, such as 'usd'.\n\n- `payment_method_id: string`\n  The unique identifier of the stored payment method to charge for the top-up.\n\n### Returns\n\n- `{ id: string; created_at: string; currency: string; failure_message: string; paid_at: string; status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'; total: number; }`\n  A payment represents a completed or attempted charge. Payments track the amount, status, currency, and payment method used.\n\n  - `id: string`\n  - `created_at: string`\n  - `currency: string`\n  - `failure_message: string`\n  - `paid_at: string`\n  - `status: 'draft' | 'open' | 'paid' | 'pending' | 'uncollectible' | 'unresolved' | 'void'`\n  - `total: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst topup = await client.topups.create({\n  amount: 6.9,\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  currency: 'usd',\n  payment_method_id: 'pmt_xxxxxxxxxxxxxx',\n});\n\nconsole.log(topup);\n```",
    perLanguage: {
      typescript: {
        method: 'client.topups.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst topup = await client.topups.create({\n  amount: 6.9,\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  currency: 'usd',\n  payment_method_id: 'pmt_xxxxxxxxxxxxxx',\n});\n\nconsole.log(topup.id);",
      },
      python: {
        method: 'topups.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ntopup = client.topups.create(\n    amount=6.9,\n    company_id="biz_xxxxxxxxxxxxxx",\n    currency="usd",\n    payment_method_id="pmt_xxxxxxxxxxxxxx",\n)\nprint(topup.id)',
      },
      ruby: {
        method: 'topups.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ntopup = whop.topups.create(\n  amount: 6.9,\n  company_id: "biz_xxxxxxxxxxxxxx",\n  currency: :usd,\n  payment_method_id: "pmt_xxxxxxxxxxxxxx"\n)\n\nputs(topup)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/topups \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "amount": 6.9,\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "currency": "usd",\n          "payment_method_id": "pmt_xxxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/files/{id}',
    httpMethod: 'get',
    summary: 'Retrieve file',
    description: 'Retrieves the details of an existing file.',
    stainlessPath: '(resource) files > (method) retrieve',
    qualified: 'client.files.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; content_type: string; filename: string; size: string; upload_status: 'pending' | 'processing' | 'ready' | 'failed'; url: string; }",
    markdown:
      "## retrieve\n\n`client.files.retrieve(id: string): { id: string; content_type: string; filename: string; size: string; upload_status: upload_status; url: string; }`\n\n**get** `/files/{id}`\n\nRetrieves the details of an existing file.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; content_type: string; filename: string; size: string; upload_status: 'pending' | 'processing' | 'ready' | 'failed'; url: string; }`\n  A file that has been uploaded or is pending upload.\n\n  - `id: string`\n  - `content_type: string`\n  - `filename: string`\n  - `size: string`\n  - `upload_status: 'pending' | 'processing' | 'ready' | 'failed'`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst file = await client.files.retrieve('file_xxxxxxxxxxxxx');\n\nconsole.log(file);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.retrieve('file_xxxxxxxxxxxxx');\n\nconsole.log(file.id);",
      },
      python: {
        method: 'files.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.retrieve(\n    "file_xxxxxxxxxxxxx",\n)\nprint(file.id)',
      },
      ruby: {
        method: 'files.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nfile = whop.files.retrieve("file_xxxxxxxxxxxxx")\n\nputs(file)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/files/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/files',
    httpMethod: 'post',
    summary: 'Create file',
    description: 'Create a new file record and receive a presigned URL for uploading content to S3.',
    stainlessPath: '(resource) files > (method) create',
    qualified: 'client.files.create',
    params: ['filename: string;'],
    response:
      "{ id: string; content_type: string; filename: string; size: string; upload_headers: object; upload_status: 'pending' | 'processing' | 'ready' | 'failed'; upload_url: string; url: string; }",
    markdown:
      "## create\n\n`client.files.create(filename: string): { id: string; content_type: string; filename: string; size: string; upload_headers: object; upload_status: upload_status; upload_url: string; url: string; }`\n\n**post** `/files`\n\nCreate a new file record and receive a presigned URL for uploading content to S3.\n\n### Parameters\n\n- `filename: string`\n  The name of the file including its extension (e.g., \"photo.png\" or \"document.pdf\").\n\n### Returns\n\n- `{ id: string; content_type: string; filename: string; size: string; upload_headers: object; upload_status: 'pending' | 'processing' | 'ready' | 'failed'; upload_url: string; url: string; }`\n  A file that has been uploaded or is pending upload.\n\n  - `id: string`\n  - `content_type: string`\n  - `filename: string`\n  - `size: string`\n  - `upload_headers: object`\n  - `upload_status: 'pending' | 'processing' | 'ready' | 'failed'`\n  - `upload_url: string`\n  - `url: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst file = await client.files.create({ filename: 'filename' });\n\nconsole.log(file);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.create({ filename: 'filename' });\n\nconsole.log(file.id);",
      },
      python: {
        method: 'files.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.create(\n    filename="filename",\n)\nprint(file.id)',
      },
      ruby: {
        method: 'files.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nfile = whop.files.create(filename: "filename")\n\nputs(file)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/files \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "filename": "filename"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/company_token_transactions',
    httpMethod: 'get',
    summary: 'List company token transactions',
    description:
      'Returns a paginated list of token transactions for a user or company, depending on the authenticated actor, with optional filtering by user and transaction type.\n\nRequired permissions:\n - `company_token_transaction:read`\n - `member:basic:read`\n - `company:basic:read`',
    stainlessPath: '(resource) company_token_transactions > (method) list',
    qualified: 'client.companyTokenTransactions.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
      "transaction_type?: 'add' | 'subtract' | 'transfer';",
      'user_id?: string;',
    ],
    response:
      "{ id: string; amount: number; company: { id: string; route: string; title: string; }; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: { id: string; }; transaction_type: 'add' | 'subtract' | 'transfer'; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.companyTokenTransactions.list(company_id: string, after?: string, before?: string, first?: number, last?: number, transaction_type?: 'add' | 'subtract' | 'transfer', user_id?: string): { id: string; amount: number; company: object; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: object; transaction_type: company_token_transaction_type; user: object; }`\n\n**get** `/company_token_transactions`\n\nReturns a paginated list of token transactions for a user or company, depending on the authenticated actor, with optional filtering by user and transaction type.\n\nRequired permissions:\n - `company_token_transaction:read`\n - `member:basic:read`\n - `company:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list token transactions for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `transaction_type?: 'add' | 'subtract' | 'transfer'`\n  The type of token transaction\n\n- `user_id?: string`\n  Filter transactions to only those involving this specific user.\n\n### Returns\n\n- `{ id: string; amount: number; company: { id: string; route: string; title: string; }; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: { id: string; }; transaction_type: 'add' | 'subtract' | 'transfer'; user: { id: string; name: string; username: string; }; }`\n  A token transaction records a credit or debit to a member's token balance within a company, including transfers between members.\n\n  - `id: string`\n  - `amount: number`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `description: string`\n  - `idempotency_key: string`\n  - `linked_transaction_id: string`\n  - `member: { id: string; }`\n  - `transaction_type: 'add' | 'subtract' | 'transfer'`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const companyTokenTransactionListResponse of client.companyTokenTransactions.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(companyTokenTransactionListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.companyTokenTransactions.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyTokenTransactionListResponse of client.companyTokenTransactions.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(companyTokenTransactionListResponse.id);\n}",
      },
      python: {
        method: 'company_token_transactions.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.company_token_transactions.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'company_token_transactions.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.company_token_transactions.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/company_token_transactions \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/company_token_transactions',
    httpMethod: 'post',
    summary: 'Create company token transaction',
    description:
      'Create a token transaction to add, subtract, or transfer tokens for a member within a company.\n\nRequired permissions:\n - `company_token_transaction:create`\n - `member:basic:read`\n - `company:basic:read`',
    stainlessPath: '(resource) company_token_transactions > (method) create',
    qualified: 'client.companyTokenTransactions.create',
    params: [
      "{ amount: number; company_id: string; destination_user_id: string; transaction_type: 'transfer'; user_id: string; description?: string; idempotency_key?: string; } | { amount: number; company_id: string; transaction_type: 'add'; user_id: string; description?: string; idempotency_key?: string; } | { amount: number; company_id: string; transaction_type: 'subtract'; user_id: string; description?: string; idempotency_key?: string; };",
    ],
    response:
      "{ id: string; amount: number; company: { id: string; route: string; title: string; }; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: { id: string; }; transaction_type: 'add' | 'subtract' | 'transfer'; user: { id: string; name: string; username: string; }; }",
    perLanguage: {
      typescript: {
        method: 'client.companyTokenTransactions.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst companyTokenTransaction = await client.companyTokenTransactions.create({\n  amount: 6.9,\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  destination_user_id: 'destination_user_id',\n  transaction_type: 'transfer',\n  user_id: 'user_xxxxxxxxxxxxx',\n});\n\nconsole.log(companyTokenTransaction.id);",
      },
      python: {
        method: 'company_token_transactions.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncompany_token_transaction = client.company_token_transactions.create(\n    amount=6.9,\n    company_id="biz_xxxxxxxxxxxxxx",\n    destination_user_id="destination_user_id",\n    transaction_type="transfer",\n    user_id="user_xxxxxxxxxxxxx",\n)\nprint(company_token_transaction.id)',
      },
      ruby: {
        method: 'company_token_transactions.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncompany_token_transaction = whop.company_token_transactions.create(\n  body: {\n    amount: 6.9,\n    company_id: "biz_xxxxxxxxxxxxxx",\n    destination_user_id: "destination_user_id",\n    transaction_type: :transfer,\n    user_id: "user_xxxxxxxxxxxxx"\n  }\n)\n\nputs(company_token_transaction)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/company_token_transactions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "amount": 6.9,\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "destination_user_id": "destination_user_id",\n          "transaction_type": "transfer",\n          "user_id": "user_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/company_token_transactions/{id}',
    httpMethod: 'get',
    summary: 'Retrieve company token transaction',
    description:
      'Retrieves the details of an existing company token transaction.\n\nRequired permissions:\n - `company_token_transaction:read`\n - `member:basic:read`\n - `company:basic:read`',
    stainlessPath: '(resource) company_token_transactions > (method) retrieve',
    qualified: 'client.companyTokenTransactions.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; amount: number; company: { id: string; route: string; title: string; }; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: { id: string; }; transaction_type: 'add' | 'subtract' | 'transfer'; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.companyTokenTransactions.retrieve(id: string): { id: string; amount: number; company: object; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: object; transaction_type: company_token_transaction_type; user: object; }`\n\n**get** `/company_token_transactions/{id}`\n\nRetrieves the details of an existing company token transaction.\n\nRequired permissions:\n - `company_token_transaction:read`\n - `member:basic:read`\n - `company:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; amount: number; company: { id: string; route: string; title: string; }; created_at: string; description: string; idempotency_key: string; linked_transaction_id: string; member: { id: string; }; transaction_type: 'add' | 'subtract' | 'transfer'; user: { id: string; name: string; username: string; }; }`\n  A token transaction records a credit or debit to a member's token balance within a company, including transfers between members.\n\n  - `id: string`\n  - `amount: number`\n  - `company: { id: string; route: string; title: string; }`\n  - `created_at: string`\n  - `description: string`\n  - `idempotency_key: string`\n  - `linked_transaction_id: string`\n  - `member: { id: string; }`\n  - `transaction_type: 'add' | 'subtract' | 'transfer'`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst companyTokenTransaction = await client.companyTokenTransactions.retrieve('id');\n\nconsole.log(companyTokenTransaction);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companyTokenTransactions.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst companyTokenTransaction = await client.companyTokenTransactions.retrieve('id');\n\nconsole.log(companyTokenTransaction.id);",
      },
      python: {
        method: 'company_token_transactions.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ncompany_token_transaction = client.company_token_transactions.retrieve(\n    "id",\n)\nprint(company_token_transaction.id)',
      },
      ruby: {
        method: 'company_token_transactions.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ncompany_token_transaction = whop.company_token_transactions.retrieve("id")\n\nputs(company_token_transaction)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/company_token_transactions/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/dm_members',
    httpMethod: 'get',
    summary: 'List dm members',
    description:
      'Returns a paginated list of members in a specific DM channel, sorted by the date they were added.\n\nRequired permissions:\n - `dms:read`',
    stainlessPath: '(resource) dm_members > (method) list',
    qualified: 'client.dmMembers.list',
    params: [
      'channel_id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; channel_id: string; last_viewed_at: string; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }",
    markdown:
      "## list\n\n`client.dmMembers.list(channel_id: string, after?: string, before?: string, first?: number, last?: number): { id: string; channel_id: string; last_viewed_at: string; status: dm_feed_member_statuses; user_id: string; }`\n\n**get** `/dm_members`\n\nReturns a paginated list of members in a specific DM channel, sorted by the date they were added.\n\nRequired permissions:\n - `dms:read`\n\n### Parameters\n\n- `channel_id: string`\n  The unique identifier of the DM channel to list members for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; channel_id: string; last_viewed_at: string; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }`\n  A user's membership record in a messaging channel, including notification preferences and read state.\n\n  - `id: string`\n  - `channel_id: string`\n  - `last_viewed_at: string`\n  - `status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'`\n  - `user_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const dmMemberListResponse of client.dmMembers.list({ channel_id: 'channel_id' })) {\n  console.log(dmMemberListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmMembers.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const dmMemberListResponse of client.dmMembers.list({ channel_id: 'channel_id' })) {\n  console.log(dmMemberListResponse.id);\n}",
      },
      python: {
        method: 'dm_members.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.dm_members.list(\n    channel_id="channel_id",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'dm_members.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.dm_members.list(channel_id: "channel_id")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_members \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/dm_members',
    httpMethod: 'post',
    summary: 'Create dm member',
    description:
      'Add a new user to an existing DM channel. Only an admin of the channel can add members.\n\nRequired permissions:\n - `dms:channel:manage`',
    stainlessPath: '(resource) dm_members > (method) create',
    qualified: 'client.dmMembers.create',
    params: ['channel_id: string;', 'user_id: string;'],
    response:
      "{ id: string; channel_id: string; last_viewed_at: string; notification_preference: 'all' | 'mentions' | 'none'; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }",
    markdown:
      "## create\n\n`client.dmMembers.create(channel_id: string, user_id: string): { id: string; channel_id: string; last_viewed_at: string; notification_preference: dm_feed_member_notification_preferences; status: dm_feed_member_statuses; user_id: string; }`\n\n**post** `/dm_members`\n\nAdd a new user to an existing DM channel. Only an admin of the channel can add members.\n\nRequired permissions:\n - `dms:channel:manage`\n\n### Parameters\n\n- `channel_id: string`\n  The unique identifier of the DM channel to add the new member to.\n\n- `user_id: string`\n  The unique identifier of the user to add to the DM channel. For example, 'user_xxxxx'.\n\n### Returns\n\n- `{ id: string; channel_id: string; last_viewed_at: string; notification_preference: 'all' | 'mentions' | 'none'; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }`\n  A user's membership record in a messaging channel, including notification preferences and read state.\n\n  - `id: string`\n  - `channel_id: string`\n  - `last_viewed_at: string`\n  - `notification_preference: 'all' | 'mentions' | 'none'`\n  - `status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'`\n  - `user_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmMember = await client.dmMembers.create({ channel_id: 'channel_id', user_id: 'user_xxxxxxxxxxxxx' });\n\nconsole.log(dmMember);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmMembers.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmMember = await client.dmMembers.create({\n  channel_id: 'channel_id',\n  user_id: 'user_xxxxxxxxxxxxx',\n});\n\nconsole.log(dmMember.id);",
      },
      python: {
        method: 'dm_members.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_member = client.dm_members.create(\n    channel_id="channel_id",\n    user_id="user_xxxxxxxxxxxxx",\n)\nprint(dm_member.id)',
      },
      ruby: {
        method: 'dm_members.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_member = whop.dm_members.create(channel_id: "channel_id", user_id: "user_xxxxxxxxxxxxx")\n\nputs(dm_member)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_members \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "channel_id": "channel_id",\n          "user_id": "user_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/dm_members/{id}',
    httpMethod: 'get',
    summary: 'Retrieve dm member',
    description: 'Retrieves the details of an existing DM member.\n\nRequired permissions:\n - `dms:read`',
    stainlessPath: '(resource) dm_members > (method) retrieve',
    qualified: 'client.dmMembers.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; channel_id: string; last_viewed_at: string; notification_preference: 'all' | 'mentions' | 'none'; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }",
    markdown:
      "## retrieve\n\n`client.dmMembers.retrieve(id: string): { id: string; channel_id: string; last_viewed_at: string; notification_preference: dm_feed_member_notification_preferences; status: dm_feed_member_statuses; user_id: string; }`\n\n**get** `/dm_members/{id}`\n\nRetrieves the details of an existing DM member.\n\nRequired permissions:\n - `dms:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; channel_id: string; last_viewed_at: string; notification_preference: 'all' | 'mentions' | 'none'; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }`\n  A user's membership record in a messaging channel, including notification preferences and read state.\n\n  - `id: string`\n  - `channel_id: string`\n  - `last_viewed_at: string`\n  - `notification_preference: 'all' | 'mentions' | 'none'`\n  - `status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'`\n  - `user_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmMember = await client.dmMembers.retrieve('id');\n\nconsole.log(dmMember);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmMembers.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmMember = await client.dmMembers.retrieve('id');\n\nconsole.log(dmMember.id);",
      },
      python: {
        method: 'dm_members.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_member = client.dm_members.retrieve(\n    "id",\n)\nprint(dm_member.id)',
      },
      ruby: {
        method: 'dm_members.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_member = whop.dm_members.retrieve("id")\n\nputs(dm_member)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_members/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/dm_members/{id}',
    httpMethod: 'patch',
    summary: 'Update dm member',
    description:
      "Update a DM channel member's settings, such as their notification preferences or membership status.\n\nRequired permissions:\n - `dms:channel:manage`",
    stainlessPath: '(resource) dm_members > (method) update',
    qualified: 'client.dmMembers.update',
    params: [
      'id: string;',
      "notification_preference?: 'all' | 'mentions' | 'none';",
      "status?: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived';",
    ],
    response:
      "{ id: string; channel_id: string; last_viewed_at: string; notification_preference: 'all' | 'mentions' | 'none'; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }",
    markdown:
      "## update\n\n`client.dmMembers.update(id: string, notification_preference?: 'all' | 'mentions' | 'none', status?: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'): { id: string; channel_id: string; last_viewed_at: string; notification_preference: dm_feed_member_notification_preferences; status: dm_feed_member_statuses; user_id: string; }`\n\n**patch** `/dm_members/{id}`\n\nUpdate a DM channel member's settings, such as their notification preferences or membership status.\n\nRequired permissions:\n - `dms:channel:manage`\n\n### Parameters\n\n- `id: string`\n\n- `notification_preference?: 'all' | 'mentions' | 'none'`\n  The notification preferences for a DMs feed member\n\n- `status?: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'`\n   The statuses of a DMs feed member\n\n### Returns\n\n- `{ id: string; channel_id: string; last_viewed_at: string; notification_preference: 'all' | 'mentions' | 'none'; status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'; user_id: string; }`\n  A user's membership record in a messaging channel, including notification preferences and read state.\n\n  - `id: string`\n  - `channel_id: string`\n  - `last_viewed_at: string`\n  - `notification_preference: 'all' | 'mentions' | 'none'`\n  - `status: 'requested' | 'accepted' | 'hidden' | 'closed' | 'archived'`\n  - `user_id: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmMember = await client.dmMembers.update('id');\n\nconsole.log(dmMember);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmMembers.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmMember = await client.dmMembers.update('id');\n\nconsole.log(dmMember.id);",
      },
      python: {
        method: 'dm_members.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_member = client.dm_members.update(\n    id="id",\n)\nprint(dm_member.id)',
      },
      ruby: {
        method: 'dm_members.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_member = whop.dm_members.update("id")\n\nputs(dm_member)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_members/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/dm_members/{id}',
    httpMethod: 'delete',
    summary: 'Delete dm member',
    description:
      'Remove a user from a DM channel. An admin can remove any member, and a member can remove themselves.\n\nRequired permissions:\n - `dms:channel:manage`',
    stainlessPath: '(resource) dm_members > (method) delete',
    qualified: 'client.dmMembers.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.dmMembers.delete(id: string): boolean`\n\n**delete** `/dm_members/{id}`\n\nRemove a user from a DM channel. An admin can remove any member, and a member can remove themselves.\n\nRequired permissions:\n - `dms:channel:manage`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmMember = await client.dmMembers.delete('id');\n\nconsole.log(dmMember);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmMembers.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmMember = await client.dmMembers.delete('id');\n\nconsole.log(dmMember);",
      },
      python: {
        method: 'dm_members.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_member = client.dm_members.delete(\n    "id",\n)\nprint(dm_member)',
      },
      ruby: {
        method: 'dm_members.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_member = whop.dm_members.delete("id")\n\nputs(dm_member)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_members/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/ai_chats',
    httpMethod: 'get',
    summary: 'List ai chats',
    description: 'Returns a paginated list of AI chat threads for the current authenticated user.',
    stainlessPath: '(resource) ai_chats > (method) list',
    qualified: 'client.aiChats.list',
    params: [
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
      'only_active_crons?: boolean;',
    ],
    response:
      "{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }",
    markdown:
      "## list\n\n`client.aiChats.list(after?: string, before?: string, first?: number, last?: number, only_active_crons?: boolean): { id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: notification_preferences; title: string; updated_at: string; user: object; }`\n\n**get** `/ai_chats`\n\nReturns a paginated list of AI chat threads for the current authenticated user.\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `only_active_crons?: boolean`\n  When true, returns only chats with an active cron schedule\n\n### Returns\n\n- `{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }`\n  An AI-powered chat conversation belonging to a user, with optional scheduled automation.\n\n  - `id: string`\n  - `blended_token_usage: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `message_count: number`\n  - `notification_preference: 'all' | 'none'`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const aiChatListResponse of client.aiChats.list()) {\n  console.log(aiChatListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.aiChats.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const aiChatListResponse of client.aiChats.list()) {\n  console.log(aiChatListResponse.id);\n}",
      },
      python: {
        method: 'ai_chats.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.ai_chats.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'ai_chats.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.ai_chats.list\n\nputs(page)',
      },
      http: {
        example: 'curl https://api.whop.com/api/v1/ai_chats \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/ai_chats',
    httpMethod: 'post',
    summary: 'Create ai chat',
    description:
      'Create a new AI chat thread and send the first message to the AI agent.\n\nRequired permissions:\n - `ai_chat:create`',
    stainlessPath: '(resource) ai_chats > (method) create',
    qualified: 'client.aiChats.create',
    params: [
      'message_text: string;',
      'current_company_id?: string;',
      'message_attachments?: { id: string; }[];',
      "message_source?: 'manual' | 'suggestion' | 'link';",
      'suggestion_type?: string;',
      'title?: string;',
    ],
    response:
      "{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }",
    markdown:
      "## create\n\n`client.aiChats.create(message_text: string, current_company_id?: string, message_attachments?: { id: string; }[], message_source?: 'manual' | 'suggestion' | 'link', suggestion_type?: string, title?: string): { id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: notification_preferences; title: string; updated_at: string; user: object; }`\n\n**post** `/ai_chats`\n\nCreate a new AI chat thread and send the first message to the AI agent.\n\nRequired permissions:\n - `ai_chat:create`\n\n### Parameters\n\n- `message_text: string`\n  The text content of the first message to send to the AI agent.\n\n- `current_company_id?: string`\n  The unique identifier of the company to set as context for the AI chat (e.g., \"biz_XXXXX\").\n\n- `message_attachments?: { id: string; }[]`\n  A list of previously uploaded file attachments to include with the first message.\n\n- `message_source?: 'manual' | 'suggestion' | 'link'`\n  The source of an AI chat message\n\n- `suggestion_type?: string`\n  The type of suggestion prompt that was clicked, when message_source is 'suggestion'.\n\n- `title?: string`\n  An optional display title for the AI chat thread (e.g., \"Help with billing\").\n\n### Returns\n\n- `{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }`\n  An AI-powered chat conversation belonging to a user, with optional scheduled automation.\n\n  - `id: string`\n  - `blended_token_usage: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `message_count: number`\n  - `notification_preference: 'all' | 'none'`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst aiChat = await client.aiChats.create({ message_text: 'message_text' });\n\nconsole.log(aiChat);\n```",
    perLanguage: {
      typescript: {
        method: 'client.aiChats.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst aiChat = await client.aiChats.create({ message_text: 'message_text' });\n\nconsole.log(aiChat.id);",
      },
      python: {
        method: 'ai_chats.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nai_chat = client.ai_chats.create(\n    message_text="message_text",\n)\nprint(ai_chat.id)',
      },
      ruby: {
        method: 'ai_chats.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nai_chat = whop.ai_chats.create(message_text: "message_text")\n\nputs(ai_chat)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/ai_chats \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "message_text": "message_text"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/ai_chats/{id}',
    httpMethod: 'get',
    summary: 'Retrieve ai chat',
    description: 'Retrieves the details of an existing AI chat.',
    stainlessPath: '(resource) ai_chats > (method) retrieve',
    qualified: 'client.aiChats.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }",
    markdown:
      "## retrieve\n\n`client.aiChats.retrieve(id: string): { id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: notification_preferences; title: string; updated_at: string; user: object; }`\n\n**get** `/ai_chats/{id}`\n\nRetrieves the details of an existing AI chat.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }`\n  An AI-powered chat conversation belonging to a user, with optional scheduled automation.\n\n  - `id: string`\n  - `blended_token_usage: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `message_count: number`\n  - `notification_preference: 'all' | 'none'`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst aiChat = await client.aiChats.retrieve('aich_xxxxxxxxxxxxx');\n\nconsole.log(aiChat);\n```",
    perLanguage: {
      typescript: {
        method: 'client.aiChats.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst aiChat = await client.aiChats.retrieve('aich_xxxxxxxxxxxxx');\n\nconsole.log(aiChat.id);",
      },
      python: {
        method: 'ai_chats.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nai_chat = client.ai_chats.retrieve(\n    "aich_xxxxxxxxxxxxx",\n)\nprint(ai_chat.id)',
      },
      ruby: {
        method: 'ai_chats.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nai_chat = whop.ai_chats.retrieve("aich_xxxxxxxxxxxxx")\n\nputs(ai_chat)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/ai_chats/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/ai_chats/{id}',
    httpMethod: 'patch',
    summary: 'Update ai chat',
    description:
      "Update an AI chat's title, notification preferences, or associated company context.\n\nRequired permissions:\n - `ai_chat:update`",
    stainlessPath: '(resource) ai_chats > (method) update',
    qualified: 'client.aiChats.update',
    params: [
      'id: string;',
      'current_company_id?: string;',
      "notification_preference?: 'all' | 'none';",
      'title?: string;',
    ],
    response:
      "{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }",
    markdown:
      "## update\n\n`client.aiChats.update(id: string, current_company_id?: string, notification_preference?: 'all' | 'none', title?: string): { id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: notification_preferences; title: string; updated_at: string; user: object; }`\n\n**patch** `/ai_chats/{id}`\n\nUpdate an AI chat's title, notification preferences, or associated company context.\n\nRequired permissions:\n - `ai_chat:update`\n\n### Parameters\n\n- `id: string`\n\n- `current_company_id?: string`\n  The unique identifier of the company to set as context for the AI chat (e.g., \"biz_XXXXX\").\n\n- `notification_preference?: 'all' | 'none'`\n  The notification preference for an AI chat\n\n- `title?: string`\n  The new display title for the AI chat thread (e.g., \"Help with billing\").\n\n### Returns\n\n- `{ id: string; blended_token_usage: string; created_at: string; last_message_at: string; message_count: number; notification_preference: 'all' | 'none'; title: string; updated_at: string; user: { id: string; }; }`\n  An AI-powered chat conversation belonging to a user, with optional scheduled automation.\n\n  - `id: string`\n  - `blended_token_usage: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `message_count: number`\n  - `notification_preference: 'all' | 'none'`\n  - `title: string`\n  - `updated_at: string`\n  - `user: { id: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst aiChat = await client.aiChats.update('aich_xxxxxxxxxxxxx');\n\nconsole.log(aiChat);\n```",
    perLanguage: {
      typescript: {
        method: 'client.aiChats.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst aiChat = await client.aiChats.update('aich_xxxxxxxxxxxxx');\n\nconsole.log(aiChat.id);",
      },
      python: {
        method: 'ai_chats.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nai_chat = client.ai_chats.update(\n    id="aich_xxxxxxxxxxxxx",\n)\nprint(ai_chat.id)',
      },
      ruby: {
        method: 'ai_chats.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nai_chat = whop.ai_chats.update("aich_xxxxxxxxxxxxx")\n\nputs(ai_chat)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/ai_chats/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/ai_chats/{id}',
    httpMethod: 'delete',
    summary: 'Delete ai chat',
    description:
      "Delete an AI chat thread so it no longer appears in the user's chat list.\n\nRequired permissions:\n - `ai_chat:delete`",
    stainlessPath: '(resource) ai_chats > (method) delete',
    qualified: 'client.aiChats.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.aiChats.delete(id: string): boolean`\n\n**delete** `/ai_chats/{id}`\n\nDelete an AI chat thread so it no longer appears in the user's chat list.\n\nRequired permissions:\n - `ai_chat:delete`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst aiChat = await client.aiChats.delete('aich_xxxxxxxxxxxxx');\n\nconsole.log(aiChat);\n```",
    perLanguage: {
      typescript: {
        method: 'client.aiChats.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst aiChat = await client.aiChats.delete('aich_xxxxxxxxxxxxx');\n\nconsole.log(aiChat);",
      },
      python: {
        method: 'ai_chats.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nai_chat = client.ai_chats.delete(\n    "aich_xxxxxxxxxxxxx",\n)\nprint(ai_chat)',
      },
      ruby: {
        method: 'ai_chats.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nai_chat = whop.ai_chats.delete("aich_xxxxxxxxxxxxx")\n\nputs(ai_chat)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/ai_chats/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/dm_channels',
    httpMethod: 'get',
    summary: 'List dm channels',
    description:
      'Returns a paginated list of DM channels for the currently authenticated user, sorted by most recently active.\n\nRequired permissions:\n - `dms:read`',
    stainlessPath: '(resource) dm_channels > (method) list',
    qualified: 'client.dmChannels.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'first?: number;',
      'last?: number;',
    ],
    response: '{ id: string; created_at: string; last_message_at: string; name: string; }',
    markdown:
      "## list\n\n`client.dmChannels.list(after?: string, before?: string, company_id?: string, first?: number, last?: number): { id: string; created_at: string; last_message_at: string; name: string; }`\n\n**get** `/dm_channels`\n\nReturns a paginated list of DM channels for the currently authenticated user, sorted by most recently active.\n\nRequired permissions:\n - `dms:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of a company to filter DM channels by. Only returns channels scoped to this company.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; created_at: string; last_message_at: string; name: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const dmChannelListResponse of client.dmChannels.list()) {\n  console.log(dmChannelListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmChannels.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const dmChannelListResponse of client.dmChannels.list()) {\n  console.log(dmChannelListResponse.id);\n}",
      },
      python: {
        method: 'dm_channels.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.dm_channels.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'dm_channels.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.dm_channels.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_channels \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/dm_channels',
    httpMethod: 'post',
    summary: 'Create dm channel',
    description:
      'Create a new DM channel between two or more users, optionally scoped to a specific company. Returns the existing channel if one already exists.',
    stainlessPath: '(resource) dm_channels > (method) create',
    qualified: 'client.dmChannels.create',
    params: ['with_user_ids: string[];', 'company_id?: string;', 'custom_name?: string;'],
    response: '{ id: string; created_at: string; last_message_at: string; name: string; }',
    markdown:
      "## create\n\n`client.dmChannels.create(with_user_ids: string[], company_id?: string, custom_name?: string): { id: string; created_at: string; last_message_at: string; name: string; }`\n\n**post** `/dm_channels`\n\nCreate a new DM channel between two or more users, optionally scoped to a specific company. Returns the existing channel if one already exists.\n\n### Parameters\n\n- `with_user_ids: string[]`\n  The list of user identifiers to include in the DM channel. Each entry can be an email, username, or user ID (e.g. 'user_xxxxx').\n\n- `company_id?: string`\n  The unique identifier of the company to scope this DM channel to. When set, the channel is visible only within that company context.\n\n- `custom_name?: string`\n  A custom display name for the DM channel. For example, 'Project Discussion'.\n\n### Returns\n\n- `{ id: string; created_at: string; last_message_at: string; name: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmChannel = await client.dmChannels.create({ with_user_ids: ['string'] });\n\nconsole.log(dmChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmChannels.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmChannel = await client.dmChannels.create({ with_user_ids: ['string'] });\n\nconsole.log(dmChannel.id);",
      },
      python: {
        method: 'dm_channels.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_channel = client.dm_channels.create(\n    with_user_ids=["string"],\n)\nprint(dm_channel.id)',
      },
      ruby: {
        method: 'dm_channels.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_channel = whop.dm_channels.create(with_user_ids: ["string"])\n\nputs(dm_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_channels \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "with_user_ids": [\n            "string"\n          ],\n          "company_id": "biz_xxxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/dm_channels/{id}',
    httpMethod: 'get',
    summary: 'Retrieve dm channel',
    description: 'Retrieves the details of an existing DM channel.\n\nRequired permissions:\n - `dms:read`',
    stainlessPath: '(resource) dm_channels > (method) retrieve',
    qualified: 'client.dmChannels.retrieve',
    params: ['id: string;'],
    response: '{ id: string; created_at: string; last_message_at: string; name: string; }',
    markdown:
      "## retrieve\n\n`client.dmChannels.retrieve(id: string): { id: string; created_at: string; last_message_at: string; name: string; }`\n\n**get** `/dm_channels/{id}`\n\nRetrieves the details of an existing DM channel.\n\nRequired permissions:\n - `dms:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; last_message_at: string; name: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmChannel = await client.dmChannels.retrieve('id');\n\nconsole.log(dmChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmChannels.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmChannel = await client.dmChannels.retrieve('id');\n\nconsole.log(dmChannel.id);",
      },
      python: {
        method: 'dm_channels.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_channel = client.dm_channels.retrieve(\n    "id",\n)\nprint(dm_channel.id)',
      },
      ruby: {
        method: 'dm_channels.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_channel = whop.dm_channels.retrieve("id")\n\nputs(dm_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_channels/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/dm_channels/{id}',
    httpMethod: 'patch',
    summary: 'Update dm channel',
    description:
      'Update the settings of an existing DM channel, such as its display name. Only an admin of the channel can perform this action.\n\nRequired permissions:\n - `dms:channel:manage`',
    stainlessPath: '(resource) dm_channels > (method) update',
    qualified: 'client.dmChannels.update',
    params: ['id: string;', 'custom_name?: string;'],
    response: '{ id: string; created_at: string; last_message_at: string; name: string; }',
    markdown:
      "## update\n\n`client.dmChannels.update(id: string, custom_name?: string): { id: string; created_at: string; last_message_at: string; name: string; }`\n\n**patch** `/dm_channels/{id}`\n\nUpdate the settings of an existing DM channel, such as its display name. Only an admin of the channel can perform this action.\n\nRequired permissions:\n - `dms:channel:manage`\n\n### Parameters\n\n- `id: string`\n\n- `custom_name?: string`\n  A new custom display name for the DM channel. For example, 'Project Discussion'.\n\n### Returns\n\n- `{ id: string; created_at: string; last_message_at: string; name: string; }`\n  A messaging channel that can be a one-on-one DM, group chat, company support conversation, or platform-level direct message.\n\n  - `id: string`\n  - `created_at: string`\n  - `last_message_at: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmChannel = await client.dmChannels.update('id');\n\nconsole.log(dmChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmChannels.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmChannel = await client.dmChannels.update('id');\n\nconsole.log(dmChannel.id);",
      },
      python: {
        method: 'dm_channels.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_channel = client.dm_channels.update(\n    id="id",\n)\nprint(dm_channel.id)',
      },
      ruby: {
        method: 'dm_channels.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_channel = whop.dm_channels.update("id")\n\nputs(dm_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_channels/$ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/dm_channels/{id}',
    httpMethod: 'delete',
    summary: 'Delete dm channel',
    description:
      'Permanently delete a DM channel and all of its messages. Only an admin of the channel can perform this action.\n\nRequired permissions:\n - `dms:channel:manage`',
    stainlessPath: '(resource) dm_channels > (method) delete',
    qualified: 'client.dmChannels.delete',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.dmChannels.delete(id: string): boolean`\n\n**delete** `/dm_channels/{id}`\n\nPermanently delete a DM channel and all of its messages. Only an admin of the channel can perform this action.\n\nRequired permissions:\n - `dms:channel:manage`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst dmChannel = await client.dmChannels.delete('id');\n\nconsole.log(dmChannel);\n```",
    perLanguage: {
      typescript: {
        method: 'client.dmChannels.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst dmChannel = await client.dmChannels.delete('id');\n\nconsole.log(dmChannel);",
      },
      python: {
        method: 'dm_channels.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndm_channel = client.dm_channels.delete(\n    "id",\n)\nprint(dm_channel)',
      },
      ruby: {
        method: 'dm_channels.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndm_channel = whop.dm_channels.delete("id")\n\nputs(dm_channel)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dm_channels/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/dispute_alerts',
    httpMethod: 'get',
    summary: 'List dispute alerts',
    description:
      'Returns a paginated list of dispute alerts for a company, with optional filtering by creation date.\n\nRequired permissions:\n - `payment:dispute_alert:read`\n - `payment:basic:read`\n - `payment:dispute:read`',
    stainlessPath: '(resource) dispute_alerts > (method) list',
    qualified: 'client.disputeAlerts.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
    ],
    response:
      "{ id: string; alert_type: 'dispute' | 'dispute_rdr' | 'fraud'; amount: number; charge_for_alert: boolean; created_at: string; currency: string; dispute: { id: string; }; payment: { id: string; }; transaction_date: string; }",
    markdown:
      "## list\n\n`client.disputeAlerts.list(company_id: string, after?: string, before?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number): { id: string; alert_type: dispute_alert_type; amount: number; charge_for_alert: boolean; created_at: string; currency: currency; dispute: object; payment: object; transaction_date: string; }`\n\n**get** `/dispute_alerts`\n\nReturns a paginated list of dispute alerts for a company, with optional filtering by creation date.\n\nRequired permissions:\n - `payment:dispute_alert:read`\n - `payment:basic:read`\n - `payment:dispute:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list dispute alerts for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `created_after?: string`\n  Only return dispute alerts created after this timestamp.\n\n- `created_before?: string`\n  Only return dispute alerts created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n### Returns\n\n- `{ id: string; alert_type: 'dispute' | 'dispute_rdr' | 'fraud'; amount: number; charge_for_alert: boolean; created_at: string; currency: string; dispute: { id: string; }; payment: { id: string; }; transaction_date: string; }`\n  A dispute alert represents an early warning notification from a payment processor about a potential dispute or chargeback.\n\n  - `id: string`\n  - `alert_type: 'dispute' | 'dispute_rdr' | 'fraud'`\n  - `amount: number`\n  - `charge_for_alert: boolean`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute: { id: string; }`\n  - `payment: { id: string; }`\n  - `transaction_date: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const disputeAlertListResponse of client.disputeAlerts.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(disputeAlertListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.disputeAlerts.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const disputeAlertListResponse of client.disputeAlerts.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(disputeAlertListResponse.id);\n}",
      },
      python: {
        method: 'dispute_alerts.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.dispute_alerts.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'dispute_alerts.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.dispute_alerts.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dispute_alerts \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/dispute_alerts/{id}',
    httpMethod: 'get',
    summary: 'Retrieve dispute alert',
    description:
      'Retrieves the details of an existing dispute alert.\n\nRequired permissions:\n - `payment:dispute_alert:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `payment:dispute:read`',
    stainlessPath: '(resource) dispute_alerts > (method) retrieve',
    qualified: 'client.disputeAlerts.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; alert_type: 'dispute' | 'dispute_rdr' | 'fraud'; amount: number; charge_for_alert: boolean; created_at: string; currency: string; dispute: { id: string; amount: number; created_at: string; currency: string; reason: string; status: string; }; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; transaction_date: string; }",
    markdown:
      "## retrieve\n\n`client.disputeAlerts.retrieve(id: string): { id: string; alert_type: dispute_alert_type; amount: number; charge_for_alert: boolean; created_at: string; currency: currency; dispute: object; payment: object; transaction_date: string; }`\n\n**get** `/dispute_alerts/{id}`\n\nRetrieves the details of an existing dispute alert.\n\nRequired permissions:\n - `payment:dispute_alert:read`\n - `payment:basic:read`\n - `member:email:read`\n - `member:basic:read`\n - `member:phone:read`\n - `payment:dispute:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; alert_type: 'dispute' | 'dispute_rdr' | 'fraud'; amount: number; charge_for_alert: boolean; created_at: string; currency: string; dispute: { id: string; amount: number; created_at: string; currency: string; reason: string; status: string; }; payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: membership_status; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }; transaction_date: string; }`\n  A dispute alert represents an early warning notification from a payment processor about a potential dispute or chargeback.\n\n  - `id: string`\n  - `alert_type: 'dispute' | 'dispute_rdr' | 'fraud'`\n  - `amount: number`\n  - `charge_for_alert: boolean`\n  - `created_at: string`\n  - `currency: string`\n  - `dispute: { id: string; amount: number; created_at: string; currency: string; reason: string; status: string; }`\n  - `payment: { id: string; billing_reason: string; card_brand: string; card_last4: string; created_at: string; currency: string; dispute_alerted_at: string; member: { id: string; phone: string; }; membership: { id: string; status: string; }; paid_at: string; payment_method_type: string; subtotal: number; total: number; usd_total: number; user: { id: string; email: string; name: string; username: string; }; }`\n  - `transaction_date: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst disputeAlert = await client.disputeAlerts.retrieve('dspa_xxxxxxxxxxxxx');\n\nconsole.log(disputeAlert);\n```",
    perLanguage: {
      typescript: {
        method: 'client.disputeAlerts.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst disputeAlert = await client.disputeAlerts.retrieve('dspa_xxxxxxxxxxxxx');\n\nconsole.log(disputeAlert.id);",
      },
      python: {
        method: 'dispute_alerts.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\ndispute_alert = client.dispute_alerts.retrieve(\n    "dspa_xxxxxxxxxxxxx",\n)\nprint(dispute_alert.id)',
      },
      ruby: {
        method: 'dispute_alerts.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\ndispute_alert = whop.dispute_alerts.retrieve("dspa_xxxxxxxxxxxxx")\n\nputs(dispute_alert)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/dispute_alerts/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/resolution_center_cases',
    httpMethod: 'get',
    summary: 'List resolution center cases',
    description:
      'Returns a paginated list of resolution center cases, with optional filtering by company, status, and creation date.\n\nRequired permissions:\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) resolution_center_cases > (method) list',
    qualified: 'client.resolutionCenterCases.list',
    params: [
      'after?: string;',
      'before?: string;',
      'company_id?: string;',
      'created_after?: string;',
      'created_before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      'statuses?: string[];',
    ],
    response:
      "{ id: string; company: { id: string; title: string; }; created_at: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; payment: { id: string; }; status: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.resolutionCenterCases.list(after?: string, before?: string, company_id?: string, created_after?: string, created_before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, statuses?: string[]): { id: string; company: object; created_at: string; customer_appealed: boolean; customer_response_actions: resolution_center_case_customer_response[]; due_date: string; issue: resolution_center_case_issue_type; merchant_appealed: boolean; merchant_response_actions: resolution_center_case_merchant_response[]; payment: object; status: resolution_center_case_status; updated_at: string; user: object; }`\n\n**get** `/resolution_center_cases`\n\nReturns a paginated list of resolution center cases, with optional filtering by company, status, and creation date.\n\nRequired permissions:\n - `payment:resolution_center_case:read`\n\n### Parameters\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `company_id?: string`\n  The unique identifier of the company to list resolution center cases for.\n\n- `created_after?: string`\n  Only return cases created after this timestamp.\n\n- `created_before?: string`\n  Only return cases created before this timestamp.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `statuses?: string[]`\n  Filter by resolution center case status.\n\n### Returns\n\n- `{ id: string; company: { id: string; title: string; }; created_at: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; payment: { id: string; }; status: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  A resolution center case is a dispute or support case between a user and a company, tracking the issue, status, and outcome.\n\n  - `id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `customer_appealed: boolean`\n  - `customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]`\n  - `due_date: string`\n  - `issue: string`\n  - `merchant_appealed: boolean`\n  - `merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]`\n  - `payment: { id: string; }`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const resolutionCenterCaseListResponse of client.resolutionCenterCases.list()) {\n  console.log(resolutionCenterCaseListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.resolutionCenterCases.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const resolutionCenterCaseListResponse of client.resolutionCenterCases.list()) {\n  console.log(resolutionCenterCaseListResponse.id);\n}",
      },
      python: {
        method: 'resolution_center_cases.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.resolution_center_cases.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'resolution_center_cases.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.resolution_center_cases.list\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/resolution_center_cases \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/resolution_center_cases/{id}',
    httpMethod: 'get',
    summary: 'Retrieve resolution center case',
    description:
      'Retrieves the details of an existing resolution center case.\n\nRequired permissions:\n - `payment:resolution_center_case:read`',
    stainlessPath: '(resource) resolution_center_cases > (method) retrieve',
    qualified: 'client.resolutionCenterCases.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; company: { id: string; title: string; }; created_at: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; member: { id: string; }; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; payment: { id: string; created_at: string; currency: string; paid_at: string; subtotal: number; total: number; }; platform_response_actions: string[]; resolution_events: { id: string; action: string; created_at: string; details: string; reporter_type: 'merchant' | 'customer' | 'platform' | 'system'; }[]; status: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.resolutionCenterCases.retrieve(id: string): { id: string; company: object; created_at: string; customer_appealed: boolean; customer_response_actions: resolution_center_case_customer_response[]; due_date: string; issue: resolution_center_case_issue_type; member: object; merchant_appealed: boolean; merchant_response_actions: resolution_center_case_merchant_response[]; payment: object; platform_response_actions: resolution_center_case_platform_response[]; resolution_events: object[]; status: resolution_center_case_status; updated_at: string; user: object; }`\n\n**get** `/resolution_center_cases/{id}`\n\nRetrieves the details of an existing resolution center case.\n\nRequired permissions:\n - `payment:resolution_center_case:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; company: { id: string; title: string; }; created_at: string; customer_appealed: boolean; customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]; due_date: string; issue: string; member: { id: string; }; merchant_appealed: boolean; merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]; payment: { id: string; created_at: string; currency: string; paid_at: string; subtotal: number; total: number; }; platform_response_actions: string[]; resolution_events: { id: string; action: string; created_at: string; details: string; reporter_type: 'merchant' | 'customer' | 'platform' | 'system'; }[]; status: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  A resolution center case is a dispute or support case between a user and a company, tracking the issue, status, and outcome.\n\n  - `id: string`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `customer_appealed: boolean`\n  - `customer_response_actions: 'respond' | 'appeal' | 'withdraw'[]`\n  - `due_date: string`\n  - `issue: string`\n  - `member: { id: string; }`\n  - `merchant_appealed: boolean`\n  - `merchant_response_actions: 'accept' | 'deny' | 'request_more_info' | 'appeal' | 'respond'[]`\n  - `payment: { id: string; created_at: string; currency: string; paid_at: string; subtotal: number; total: number; }`\n  - `platform_response_actions: string[]`\n  - `resolution_events: { id: string; action: string; created_at: string; details: string; reporter_type: 'merchant' | 'customer' | 'platform' | 'system'; }[]`\n  - `status: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst resolutionCenterCase = await client.resolutionCenterCases.retrieve('reso_xxxxxxxxxxxxx');\n\nconsole.log(resolutionCenterCase);\n```",
    perLanguage: {
      typescript: {
        method: 'client.resolutionCenterCases.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst resolutionCenterCase = await client.resolutionCenterCases.retrieve('reso_xxxxxxxxxxxxx');\n\nconsole.log(resolutionCenterCase.id);",
      },
      python: {
        method: 'resolution_center_cases.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresolution_center_case = client.resolution_center_cases.retrieve(\n    "reso_xxxxxxxxxxxxx",\n)\nprint(resolution_center_case.id)',
      },
      ruby: {
        method: 'resolution_center_cases.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresolution_center_case = whop.resolution_center_cases.retrieve("reso_xxxxxxxxxxxxx")\n\nputs(resolution_center_case)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/resolution_center_cases/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/payout_accounts/{id}',
    httpMethod: 'get',
    summary: 'Retrieve payout account',
    description:
      'Retrieves the details of an existing payout account.\n\nRequired permissions:\n - `payout:account:read`',
    stainlessPath: '(resource) payout_accounts > (method) retrieve',
    qualified: 'client.payoutAccounts.retrieve',
    params: ['id: string;'],
    response:
      '{ id: string; address: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; }; business_name: string; business_representative: { date_of_birth: string; first_name: string; last_name: string; middle_name: string; }; email: string; latest_verification: { id: string; last_error_code: string; last_error_reason: string; status: string; }; phone: string; status: string; }',
    markdown:
      "## retrieve\n\n`client.payoutAccounts.retrieve(id: string): { id: string; address: object; business_name: string; business_representative: object; email: string; latest_verification: object; phone: string; status: payout_account_calculated_statuses; }`\n\n**get** `/payout_accounts/{id}`\n\nRetrieves the details of an existing payout account.\n\nRequired permissions:\n - `payout:account:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; address: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; }; business_name: string; business_representative: { date_of_birth: string; first_name: string; last_name: string; middle_name: string; }; email: string; latest_verification: { id: string; last_error_code: string; last_error_reason: string; status: string; }; phone: string; status: string; }`\n  An object representing an account used for payouts.\n\n  - `id: string`\n  - `address: { city: string; country: string; line1: string; line2: string; postal_code: string; state: string; }`\n  - `business_name: string`\n  - `business_representative: { date_of_birth: string; first_name: string; last_name: string; middle_name: string; }`\n  - `email: string`\n  - `latest_verification: { id: string; last_error_code: string; last_error_reason: string; status: string; }`\n  - `phone: string`\n  - `status: string`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst payoutAccount = await client.payoutAccounts.retrieve('poact_xxxxxxxxxxxx');\n\nconsole.log(payoutAccount);\n```",
    perLanguage: {
      typescript: {
        method: 'client.payoutAccounts.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutAccount = await client.payoutAccounts.retrieve('poact_xxxxxxxxxxxx');\n\nconsole.log(payoutAccount.id);",
      },
      python: {
        method: 'payout_accounts.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npayout_account = client.payout_accounts.retrieve(\n    "poact_xxxxxxxxxxxx",\n)\nprint(payout_account.id)',
      },
      ruby: {
        method: 'payout_accounts.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npayout_account = whop.payout_accounts.retrieve("poact_xxxxxxxxxxxx")\n\nputs(payout_account)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/payout_accounts/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/affiliates',
    httpMethod: 'get',
    summary: 'List affiliates',
    description:
      'Returns a paginated list of affiliates for the actor in context, with optional filtering by status, search, and sorting.\n\nRequired permissions:\n - `affiliate:basic:read`',
    stainlessPath: '(resource) affiliates > (method) list',
    qualified: 'client.affiliates.list',
    params: [
      'company_id: string;',
      'after?: string;',
      'before?: string;',
      "direction?: 'asc' | 'desc';",
      'first?: number;',
      'last?: number;',
      "order?: 'id' | 'created_at' | 'cached_total_referrals' | 'cached_total_rewards';",
      'query?: string;',
      "status?: 'active' | 'archived' | 'deleted';",
    ],
    response:
      "{ id: string; active_members_count: number; company: { id: string; title: string; }; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: 'active' | 'archived' | 'deleted'; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## list\n\n`client.affiliates.list(company_id: string, after?: string, before?: string, direction?: 'asc' | 'desc', first?: number, last?: number, order?: 'id' | 'created_at' | 'cached_total_referrals' | 'cached_total_rewards', query?: string, status?: 'active' | 'archived' | 'deleted'): { id: string; active_members_count: number; company: object; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: status; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: object; }`\n\n**get** `/affiliates`\n\nReturns a paginated list of affiliates for the actor in context, with optional filtering by status, search, and sorting.\n\nRequired permissions:\n - `affiliate:basic:read`\n\n### Parameters\n\n- `company_id: string`\n  The unique identifier of the company to list affiliates for.\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `direction?: 'asc' | 'desc'`\n  The direction of the sort.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `order?: 'id' | 'created_at' | 'cached_total_referrals' | 'cached_total_rewards'`\n  Which columns can be used to sort.\n\n- `query?: string`\n  Search affiliates by username.\n\n- `status?: 'active' | 'archived' | 'deleted'`\n  Statuses for resources\n\n### Returns\n\n- `{ id: string; active_members_count: number; company: { id: string; title: string; }; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: 'active' | 'archived' | 'deleted'; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  An affiliate tracks a user's referral performance and commission earnings for a company, including retention rates, revenue metrics, and payout configurations.\n\n  - `id: string`\n  - `active_members_count: number`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `customer_retention_rate: string`\n  - `customer_retention_rate_ninety_days: string`\n  - `monthly_recurring_revenue_usd: string`\n  - `status: 'active' | 'archived' | 'deleted'`\n  - `total_overrides_count: number`\n  - `total_referral_earnings_usd: string`\n  - `total_referrals_count: number`\n  - `total_revenue_usd: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const affiliateListResponse of client.affiliates.list({ company_id: 'biz_xxxxxxxxxxxxxx' })) {\n  console.log(affiliateListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const affiliateListResponse of client.affiliates.list({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n})) {\n  console.log(affiliateListResponse.id);\n}",
      },
      python: {
        method: 'affiliates.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.affiliates.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'affiliates.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.affiliates.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/affiliates',
    httpMethod: 'post',
    summary: 'Create affiliate',
    description:
      'Creates or finds an affiliate for a company and user.\n\nRequired permissions:\n - `affiliate:create`',
    stainlessPath: '(resource) affiliates > (method) create',
    qualified: 'client.affiliates.create',
    params: ['company_id: string;', 'user_identifier: string;'],
    response:
      "{ id: string; active_members_count: number; company: { id: string; title: string; }; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: 'active' | 'archived' | 'deleted'; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## create\n\n`client.affiliates.create(company_id: string, user_identifier: string): { id: string; active_members_count: number; company: object; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: status; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: object; }`\n\n**post** `/affiliates`\n\nCreates or finds an affiliate for a company and user.\n\nRequired permissions:\n - `affiliate:create`\n\n### Parameters\n\n- `company_id: string`\n  The ID of the company to create the affiliate for.\n\n- `user_identifier: string`\n  The user identifier (username, email, user ID, or Discord ID).\n\n### Returns\n\n- `{ id: string; active_members_count: number; company: { id: string; title: string; }; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: 'active' | 'archived' | 'deleted'; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  An affiliate tracks a user's referral performance and commission earnings for a company, including retention rates, revenue metrics, and payout configurations.\n\n  - `id: string`\n  - `active_members_count: number`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `customer_retention_rate: string`\n  - `customer_retention_rate_ninety_days: string`\n  - `monthly_recurring_revenue_usd: string`\n  - `status: 'active' | 'archived' | 'deleted'`\n  - `total_overrides_count: number`\n  - `total_referral_earnings_usd: string`\n  - `total_referrals_count: number`\n  - `total_revenue_usd: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst affiliate = await client.affiliates.create({ company_id: 'biz_xxxxxxxxxxxxxx', user_identifier: 'user_identifier' });\n\nconsole.log(affiliate);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst affiliate = await client.affiliates.create({\n  company_id: 'biz_xxxxxxxxxxxxxx',\n  user_identifier: 'user_identifier',\n});\n\nconsole.log(affiliate.id);",
      },
      python: {
        method: 'affiliates.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\naffiliate = client.affiliates.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    user_identifier="user_identifier",\n)\nprint(affiliate.id)',
      },
      ruby: {
        method: 'affiliates.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\naffiliate = whop.affiliates.create(company_id: "biz_xxxxxxxxxxxxxx", user_identifier: "user_identifier")\n\nputs(affiliate)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "company_id": "biz_xxxxxxxxxxxxxx",\n          "user_identifier": "user_identifier"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/affiliates/{id}',
    httpMethod: 'get',
    summary: 'Retrieve affiliate',
    description:
      'Retrieves the details of an existing affiliate.\n\nRequired permissions:\n - `affiliate:basic:read`',
    stainlessPath: '(resource) affiliates > (method) retrieve',
    qualified: 'client.affiliates.retrieve',
    params: ['id: string;'],
    response:
      "{ id: string; active_members_count: number; company: { id: string; title: string; }; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: 'active' | 'archived' | 'deleted'; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: { id: string; name: string; username: string; }; }",
    markdown:
      "## retrieve\n\n`client.affiliates.retrieve(id: string): { id: string; active_members_count: number; company: object; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: status; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: object; }`\n\n**get** `/affiliates/{id}`\n\nRetrieves the details of an existing affiliate.\n\nRequired permissions:\n - `affiliate:basic:read`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; active_members_count: number; company: { id: string; title: string; }; created_at: string; customer_retention_rate: string; customer_retention_rate_ninety_days: string; monthly_recurring_revenue_usd: string; status: 'active' | 'archived' | 'deleted'; total_overrides_count: number; total_referral_earnings_usd: string; total_referrals_count: number; total_revenue_usd: string; updated_at: string; user: { id: string; name: string; username: string; }; }`\n  An affiliate tracks a user's referral performance and commission earnings for a company, including retention rates, revenue metrics, and payout configurations.\n\n  - `id: string`\n  - `active_members_count: number`\n  - `company: { id: string; title: string; }`\n  - `created_at: string`\n  - `customer_retention_rate: string`\n  - `customer_retention_rate_ninety_days: string`\n  - `monthly_recurring_revenue_usd: string`\n  - `status: 'active' | 'archived' | 'deleted'`\n  - `total_overrides_count: number`\n  - `total_referral_earnings_usd: string`\n  - `total_referrals_count: number`\n  - `total_revenue_usd: string`\n  - `updated_at: string`\n  - `user: { id: string; name: string; username: string; }`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst affiliate = await client.affiliates.retrieve('aff_xxxxxxxxxxxxxx');\n\nconsole.log(affiliate);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst affiliate = await client.affiliates.retrieve('aff_xxxxxxxxxxxxxx');\n\nconsole.log(affiliate.id);",
      },
      python: {
        method: 'affiliates.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\naffiliate = client.affiliates.retrieve(\n    "aff_xxxxxxxxxxxxxx",\n)\nprint(affiliate.id)',
      },
      ruby: {
        method: 'affiliates.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\naffiliate = whop.affiliates.retrieve("aff_xxxxxxxxxxxxxx")\n\nputs(affiliate)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'archive',
    endpoint: '/affiliates/{id}/archive',
    httpMethod: 'post',
    summary: 'Archive affiliate',
    description: 'Archives an existing Affiliate\n\nRequired permissions:\n - `affiliate:update`',
    stainlessPath: '(resource) affiliates > (method) archive',
    qualified: 'client.affiliates.archive',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## archive\n\n`client.affiliates.archive(id: string): boolean`\n\n**post** `/affiliates/{id}/archive`\n\nArchives an existing Affiliate\n\nRequired permissions:\n - `affiliate:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.affiliates.archive('aff_xxxxxxxxxxxxxx');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.archive',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.affiliates.archive('aff_xxxxxxxxxxxxxx');\n\nconsole.log(response);",
      },
      python: {
        method: 'affiliates.archive',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.affiliates.archive(\n    "aff_xxxxxxxxxxxxxx",\n)\nprint(response)',
      },
      ruby: {
        method: 'affiliates.archive',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.affiliates.archive("aff_xxxxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/archive \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'unarchive',
    endpoint: '/affiliates/{id}/unarchive',
    httpMethod: 'post',
    summary: 'Unarchive affiliate',
    description: 'Unarchives an existing Affiliate\n\nRequired permissions:\n - `affiliate:update`',
    stainlessPath: '(resource) affiliates > (method) unarchive',
    qualified: 'client.affiliates.unarchive',
    params: ['id: string;'],
    response: 'boolean',
    markdown:
      "## unarchive\n\n`client.affiliates.unarchive(id: string): boolean`\n\n**post** `/affiliates/{id}/unarchive`\n\nUnarchives an existing Affiliate\n\nRequired permissions:\n - `affiliate:update`\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst response = await client.affiliates.unarchive('aff_xxxxxxxxxxxxxx');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.unarchive',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.affiliates.unarchive('aff_xxxxxxxxxxxxxx');\n\nconsole.log(response);",
      },
      python: {
        method: 'affiliates.unarchive',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.affiliates.unarchive(\n    "aff_xxxxxxxxxxxxxx",\n)\nprint(response)',
      },
      ruby: {
        method: 'affiliates.unarchive',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\nresponse = whop.affiliates.unarchive("aff_xxxxxxxxxxxxxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/unarchive \\\n    -X POST \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/affiliates/{id}/overrides',
    httpMethod: 'get',
    summary: 'List overrides',
    description:
      'Returns a paginated list of overrides for an affiliate.\n\nRequired permissions:\n - `affiliate:basic:read`',
    stainlessPath: '(resource) affiliates.overrides > (method) list',
    qualified: 'client.affiliates.overrides.list',
    params: [
      'id: string;',
      'after?: string;',
      'before?: string;',
      'first?: number;',
      'last?: number;',
      "override_type?: 'standard' | 'rev_share';",
    ],
    response:
      "{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }",
    markdown:
      "## list\n\n`client.affiliates.overrides.list(id: string, after?: string, before?: string, first?: number, last?: number, override_type?: 'standard' | 'rev_share'): { id: string; applies_to_payments: affiliate_applies_to_payments; applies_to_products: affiliate_applies_to_products; checkout_direct_link: string; commission_type: affiliate_payout_types; commission_value: number; override_type: affiliate_override_roles; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: affiliate_revenue_bases; total_referral_earnings_usd: number; }`\n\n**get** `/affiliates/{id}/overrides`\n\nReturns a paginated list of overrides for an affiliate.\n\nRequired permissions:\n - `affiliate:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `after?: string`\n  Returns the elements in the list that come after the specified cursor.\n\n- `before?: string`\n  Returns the elements in the list that come before the specified cursor.\n\n- `first?: number`\n  Returns the first _n_ elements from the list.\n\n- `last?: number`\n  Returns the last _n_ elements from the list.\n\n- `override_type?: 'standard' | 'rev_share'`\n  The role of an affiliate override (standard or rev_share)\n\n### Returns\n\n- `{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }`\n  A commission configuration for an affiliate, defining payout terms for a specific plan or revenue share\n\n  - `id: string`\n  - `applies_to_payments: 'first_payment' | 'all_payments'`\n  - `applies_to_products: 'single_product' | 'all_products'`\n  - `checkout_direct_link: string`\n  - `commission_type: 'percentage' | 'flat_fee'`\n  - `commission_value: number`\n  - `override_type: 'standard' | 'rev_share'`\n  - `plan_id: string`\n  - `product_direct_link: string`\n  - `product_id: string`\n  - `revenue_basis: 'pre_fees' | 'post_fees'`\n  - `total_referral_earnings_usd: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\n// Automatically fetches more pages as needed.\nfor await (const overrideListResponse of client.affiliates.overrides.list('aff_xxxxxxxxxxxxxx')) {\n  console.log(overrideListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.overrides.list',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const overrideListResponse of client.affiliates.overrides.list('aff_xxxxxxxxxxxxxx')) {\n  console.log(overrideListResponse.id);\n}",
      },
      python: {
        method: 'affiliates.overrides.list',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\npage = client.affiliates.overrides.list(\n    id="aff_xxxxxxxxxxxxxx",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'affiliates.overrides.list',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\npage = whop.affiliates.overrides.list("aff_xxxxxxxxxxxxxx")\n\nputs(page)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/overrides \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/affiliates/{id}/overrides',
    httpMethod: 'post',
    summary: 'Create override',
    description:
      'Creates a commission override for an affiliate.\n\nRequired permissions:\n - `affiliate:create`',
    stainlessPath: '(resource) affiliates.overrides > (method) create',
    qualified: 'client.affiliates.overrides.create',
    params: [
      'id: string;',
      "body: { id: string; commission_value: number; override_type: 'standard'; plan_id: string; applies_to_payments?: 'first_payment' | 'all_payments'; commission_type?: 'percentage' | 'flat_fee'; } | { id: string; commission_value: number; override_type: 'rev_share'; commission_type?: 'percentage' | 'flat_fee'; product_id?: string; revenue_basis?: 'pre_fees' | 'post_fees'; };",
    ],
    response:
      "{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.overrides.create',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst override = await client.affiliates.overrides.create('aff_xxxxxxxxxxxxxx', {\n  id: 'id',\n  commission_value: 6.9,\n  override_type: 'standard',\n  plan_id: 'plan_xxxxxxxxxxxxx',\n});\n\nconsole.log(override.id);",
      },
      python: {
        method: 'affiliates.overrides.create',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\noverride = client.affiliates.overrides.create(\n    path_id="aff_xxxxxxxxxxxxxx",\n    body_id="id",\n    commission_value=6.9,\n    override_type="standard",\n    plan_id="plan_xxxxxxxxxxxxx",\n)\nprint(override.id)',
      },
      ruby: {
        method: 'affiliates.overrides.create',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\noverride = whop.affiliates.overrides.create(\n  "aff_xxxxxxxxxxxxxx",\n  body: {id: "id", commission_value: 6.9, override_type: :standard, plan_id: "plan_xxxxxxxxxxxxx"}\n)\n\nputs(override)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/overrides \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $WHOP_API_KEY" \\\n    -d \'{\n          "id": "id",\n          "commission_value": 6.9,\n          "override_type": "standard",\n          "plan_id": "plan_xxxxxxxxxxxxx"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/affiliates/{id}/overrides/{override_id}',
    httpMethod: 'get',
    summary: 'Retrieve override',
    description:
      'Retrieves the details of a specific affiliate override.\n\nRequired permissions:\n - `affiliate:basic:read`',
    stainlessPath: '(resource) affiliates.overrides > (method) retrieve',
    qualified: 'client.affiliates.overrides.retrieve',
    params: ['id: string;', 'override_id: string;'],
    response:
      "{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }",
    markdown:
      "## retrieve\n\n`client.affiliates.overrides.retrieve(id: string, override_id: string): { id: string; applies_to_payments: affiliate_applies_to_payments; applies_to_products: affiliate_applies_to_products; checkout_direct_link: string; commission_type: affiliate_payout_types; commission_value: number; override_type: affiliate_override_roles; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: affiliate_revenue_bases; total_referral_earnings_usd: number; }`\n\n**get** `/affiliates/{id}/overrides/{override_id}`\n\nRetrieves the details of a specific affiliate override.\n\nRequired permissions:\n - `affiliate:basic:read`\n\n### Parameters\n\n- `id: string`\n\n- `override_id: string`\n\n### Returns\n\n- `{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }`\n  A commission configuration for an affiliate, defining payout terms for a specific plan or revenue share\n\n  - `id: string`\n  - `applies_to_payments: 'first_payment' | 'all_payments'`\n  - `applies_to_products: 'single_product' | 'all_products'`\n  - `checkout_direct_link: string`\n  - `commission_type: 'percentage' | 'flat_fee'`\n  - `commission_value: number`\n  - `override_type: 'standard' | 'rev_share'`\n  - `plan_id: string`\n  - `product_direct_link: string`\n  - `product_id: string`\n  - `revenue_basis: 'pre_fees' | 'post_fees'`\n  - `total_referral_earnings_usd: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst override = await client.affiliates.overrides.retrieve('override_id', { id: 'aff_xxxxxxxxxxxxxx' });\n\nconsole.log(override);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.overrides.retrieve',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst override = await client.affiliates.overrides.retrieve('override_id', {\n  id: 'aff_xxxxxxxxxxxxxx',\n});\n\nconsole.log(override.id);",
      },
      python: {
        method: 'affiliates.overrides.retrieve',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\noverride = client.affiliates.overrides.retrieve(\n    override_id="override_id",\n    id="aff_xxxxxxxxxxxxxx",\n)\nprint(override.id)',
      },
      ruby: {
        method: 'affiliates.overrides.retrieve',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\noverride = whop.affiliates.overrides.retrieve("override_id", id: "aff_xxxxxxxxxxxxxx")\n\nputs(override)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/overrides/$OVERRIDE_ID \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/affiliates/{id}/overrides/{override_id}',
    httpMethod: 'patch',
    summary: 'Update override',
    description: 'Updates an existing affiliate override.\n\nRequired permissions:\n - `affiliate:update`',
    stainlessPath: '(resource) affiliates.overrides > (method) update',
    qualified: 'client.affiliates.overrides.update',
    params: [
      'id: string;',
      'override_id: string;',
      "applies_to_payments?: 'first_payment' | 'all_payments';",
      "commission_type?: 'percentage' | 'flat_fee';",
      'commission_value?: number;',
      "revenue_basis?: 'pre_fees' | 'post_fees';",
    ],
    response:
      "{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }",
    markdown:
      "## update\n\n`client.affiliates.overrides.update(id: string, override_id: string, applies_to_payments?: 'first_payment' | 'all_payments', commission_type?: 'percentage' | 'flat_fee', commission_value?: number, revenue_basis?: 'pre_fees' | 'post_fees'): { id: string; applies_to_payments: affiliate_applies_to_payments; applies_to_products: affiliate_applies_to_products; checkout_direct_link: string; commission_type: affiliate_payout_types; commission_value: number; override_type: affiliate_override_roles; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: affiliate_revenue_bases; total_referral_earnings_usd: number; }`\n\n**patch** `/affiliates/{id}/overrides/{override_id}`\n\nUpdates an existing affiliate override.\n\nRequired permissions:\n - `affiliate:update`\n\n### Parameters\n\n- `id: string`\n\n- `override_id: string`\n\n- `applies_to_payments?: 'first_payment' | 'all_payments'`\n  Whether the affiliate commission applies to the first payment or all payments\n\n- `commission_type?: 'percentage' | 'flat_fee'`\n  The types of payouts an affiliate can have\n\n- `commission_value?: number`\n  The commission value (percentage 1-100 or flat fee in dollars).\n\n- `revenue_basis?: 'pre_fees' | 'post_fees'`\n  The calculation method for affiliate rev-share percentages\n\n### Returns\n\n- `{ id: string; applies_to_payments: 'first_payment' | 'all_payments'; applies_to_products: 'single_product' | 'all_products'; checkout_direct_link: string; commission_type: 'percentage' | 'flat_fee'; commission_value: number; override_type: 'standard' | 'rev_share'; plan_id: string; product_direct_link: string; product_id: string; revenue_basis: 'pre_fees' | 'post_fees'; total_referral_earnings_usd: number; }`\n  A commission configuration for an affiliate, defining payout terms for a specific plan or revenue share\n\n  - `id: string`\n  - `applies_to_payments: 'first_payment' | 'all_payments'`\n  - `applies_to_products: 'single_product' | 'all_products'`\n  - `checkout_direct_link: string`\n  - `commission_type: 'percentage' | 'flat_fee'`\n  - `commission_value: number`\n  - `override_type: 'standard' | 'rev_share'`\n  - `plan_id: string`\n  - `product_direct_link: string`\n  - `product_id: string`\n  - `revenue_basis: 'pre_fees' | 'post_fees'`\n  - `total_referral_earnings_usd: number`\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst override = await client.affiliates.overrides.update('override_id', { id: 'aff_xxxxxxxxxxxxxx' });\n\nconsole.log(override);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.overrides.update',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst override = await client.affiliates.overrides.update('override_id', {\n  id: 'aff_xxxxxxxxxxxxxx',\n});\n\nconsole.log(override.id);",
      },
      python: {
        method: 'affiliates.overrides.update',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\noverride = client.affiliates.overrides.update(\n    override_id="override_id",\n    id="aff_xxxxxxxxxxxxxx",\n)\nprint(override.id)',
      },
      ruby: {
        method: 'affiliates.overrides.update',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\noverride = whop.affiliates.overrides.update("override_id", id: "aff_xxxxxxxxxxxxxx")\n\nputs(override)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/overrides/$OVERRIDE_ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/affiliates/{id}/overrides/{override_id}',
    httpMethod: 'delete',
    summary: 'Delete override',
    description: 'Deletes an affiliate override.\n\nRequired permissions:\n - `affiliate:update`',
    stainlessPath: '(resource) affiliates.overrides > (method) delete',
    qualified: 'client.affiliates.overrides.delete',
    params: ['id: string;', 'override_id: string;'],
    response: 'boolean',
    markdown:
      "## delete\n\n`client.affiliates.overrides.delete(id: string, override_id: string): boolean`\n\n**delete** `/affiliates/{id}/overrides/{override_id}`\n\nDeletes an affiliate override.\n\nRequired permissions:\n - `affiliate:update`\n\n### Parameters\n\n- `id: string`\n\n- `override_id: string`\n\n### Returns\n\n- `boolean`\n  Represents `true` or `false` values.\n\n### Example\n\n```typescript\nimport Whop from '@whop/sdk';\n\nconst client = new Whop();\n\nconst override = await client.affiliates.overrides.delete('override_id', { id: 'aff_xxxxxxxxxxxxxx' });\n\nconsole.log(override);\n```",
    perLanguage: {
      typescript: {
        method: 'client.affiliates.overrides.delete',
        example:
          "import Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst override = await client.affiliates.overrides.delete('override_id', {\n  id: 'aff_xxxxxxxxxxxxxx',\n});\n\nconsole.log(override);",
      },
      python: {
        method: 'affiliates.overrides.delete',
        example:
          'import os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\noverride = client.affiliates.overrides.delete(\n    override_id="override_id",\n    id="aff_xxxxxxxxxxxxxx",\n)\nprint(override)',
      },
      ruby: {
        method: 'affiliates.overrides.delete',
        example:
          'require "whop_sdk"\n\nwhop = WhopSDK::Client.new(api_key: "My API Key")\n\noverride = whop.affiliates.overrides.delete("override_id", id: "aff_xxxxxxxxxxxxxx")\n\nputs(override)',
      },
      http: {
        example:
          'curl https://api.whop.com/api/v1/affiliates/$ID/overrides/$OVERRIDE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $WHOP_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Whop Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/whop-sdk.svg?label=pypi%20(stable))](https://pypi.org/project/whop-sdk/)\n\nThe Whop Python library provides convenient access to the Whop REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Whop MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40whop%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB3aG9wL21jcCJdLCJlbnYiOnsiV0hPUF9BUElfS0VZIjoiTXkgQVBJIEtleSIsIldIT1BfV0VCSE9PS19TRUNSRVQiOiJNeSBXZWJob29rIEtleSIsIldIT1BfQVBQX0lEIjoiYXBwX3h4eHh4eHh4eHh4eHh4In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40whop%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40whop%2Fmcp%22%5D%2C%22env%22%3A%7B%22WHOP_API_KEY%22%3A%22My%20API%20Key%22%2C%22WHOP_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Key%22%2C%22WHOP_APP_ID%22%3A%22app_xxxxxxxxxxxxxx%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.whop.com](https://docs.whop.com/apps). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install whop-sdk\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom whop_sdk import Whop\n\nclient = Whop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\n\npage = client.payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\nprint(page.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `WHOP_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncWhop` instead of `Whop` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom whop_sdk import AsyncWhop\n\nclient = AsyncWhop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  page = await client.payments.list(\n      company_id="biz_xxxxxxxxxxxxxx",\n  )\n  print(page.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install whop-sdk[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom whop_sdk import DefaultAioHttpClient\nfrom whop_sdk import AsyncWhop\n\nasync def main() -> None:\n  async with AsyncWhop(\n    api_key=os.environ.get("WHOP_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    page = await client.payments.list(\n        company_id="biz_xxxxxxxxxxxxxx",\n    )\n    print(page.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Whop API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom whop_sdk import Whop\n\nclient = Whop()\n\nall_payments = []\n# Automatically fetches more pages as needed.\nfor payment in client.payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n):\n    # Do something with payment here\n    all_payments.append(payment)\nprint(all_payments)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom whop_sdk import AsyncWhop\n\nclient = AsyncWhop()\n\nasync def main() -> None:\n    all_payments = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for payment in client.payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n):\n        all_payments.append(payment)\n    print(all_payments)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.data)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\n\nprint(f"next page cursor: {first_page.page_info.end_cursor}") # => "next page cursor: ..."\nfor payment in first_page.data:\n    print(payment.id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom whop_sdk import Whop\n\nclient = Whop()\n\napp = client.apps.create(\n    company_id="biz_xxxxxxxxxxxxxx",\n    name="name",\n    icon={\n        "id": "id"\n    },\n)\nprint(app.icon)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `whop_sdk.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `whop_sdk.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `whop_sdk.APIError`.\n\n```python\nimport whop_sdk\nfrom whop_sdk import Whop\n\nclient = Whop()\n\ntry:\n    client.payments.list(\n        company_id="biz_xxxxxxxxxxxxxx",\n    )\nexcept whop_sdk.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept whop_sdk.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept whop_sdk.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom whop_sdk import Whop\n\n# Configure the default for all requests:\nclient = Whop(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom whop_sdk import Whop\n\n# Configure the default for all requests:\nclient = Whop(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Whop(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).payments.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `WHOP_LOG` to `info`.\n\n```shell\n$ export WHOP_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom whop_sdk import Whop\n\nclient = Whop()\nresponse = client.payments.with_raw_response.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\npayment = response.parse()  # get the object that `payments.list()` would have returned\nprint(payment.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/whopio/whopsdk-python/tree/main/src/whop_sdk/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/whopio/whopsdk-python/tree/main/src/whop_sdk/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.payments.with_streaming_response.list(\n    company_id="biz_xxxxxxxxxxxxxx",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom whop_sdk import Whop, DefaultHttpxClient\n\nclient = Whop(\n    # Or use the `WHOP_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom whop_sdk import Whop\n\nwith Whop() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/whopio/whopsdk-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport whop_sdk\nprint(whop_sdk.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Whop Ruby API library\n\nThe Whop Ruby library provides convenient access to the Whop REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/whopio/whopsdk-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Whop MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40whop%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB3aG9wL21jcCJdLCJlbnYiOnsiV0hPUF9BUElfS0VZIjoiTXkgQVBJIEtleSIsIldIT1BfV0VCSE9PS19TRUNSRVQiOiJNeSBXZWJob29rIEtleSIsIldIT1BfQVBQX0lEIjoiYXBwX3h4eHh4eHh4eHh4eHh4In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40whop%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40whop%2Fmcp%22%5D%2C%22env%22%3A%7B%22WHOP_API_KEY%22%3A%22My%20API%20Key%22%2C%22WHOP_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Key%22%2C%22WHOP_APP_ID%22%3A%22app_xxxxxxxxxxxxxx%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/whop_sdk).\n\nThe REST API documentation can be found on [docs.whop.com](https://docs.whop.com/apps).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "whop_sdk", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "whop_sdk"\n\nwhop = WhopSDK::Client.new(\n  api_key: ENV["WHOP_API_KEY"] # This is the default and can be omitted\n)\n\npage = whop.payments.list(company_id: "biz_xxxxxxxxxxxxxx")\n\nputs(page.id)\n```\n\n\n\n### Pagination\n\nList methods in the Whop API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = whop.payments.list(company_id: "biz_xxxxxxxxxxxxxx")\n\n# Fetch single item from page.\npayment = page.data[0]\nputs(payment.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |payment|\n  puts(payment.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.data[0].id)\nend\n```\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `WhopSDK::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  payment = whop.payments.list(company_id: "biz_xxxxxxxxxxxxxx")\nrescue WhopSDK::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue WhopSDK::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue WhopSDK::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nwhop = WhopSDK::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nwhop.payments.list(company_id: "biz_xxxxxxxxxxxxxx", request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nwhop = WhopSDK::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nwhop.payments.list(company_id: "biz_xxxxxxxxxxxxxx", request_options: {timeout: 5})\n```\n\nOn timeout, `WhopSDK::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `WhopSDK::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\npage =\n  whop.payments.list(\n    company_id: "biz_xxxxxxxxxxxxxx",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(page[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `WhopSDK::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `WhopSDK::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nwhop.payments.list(company_id: "biz_xxxxxxxxxxxxxx")\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nwhop.payments.list(company_id: "biz_xxxxxxxxxxxxxx")\n\n# You can also splat a full Params class:\nparams = WhopSDK::PaymentListParams.new(company_id: "biz_xxxxxxxxxxxxxx")\nwhop.payments.list(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :b2b_app\nputs(WhopSDK::AppType::B2B_APP)\n\n# Revealed type: `T.all(WhopSDK::AppType, Symbol)`\nT.reveal_type(WhopSDK::AppType::B2B_APP)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nwhop.apps.update(\n  app_type: WhopSDK::AppType::B2B_APP,\n  # …\n)\n\n# Literal values are also permissible:\nwhop.apps.update(\n  app_type: :b2b_app,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/whopio/whopsdk-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Whop TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@whop/sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@whop/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@whop/sdk)\n\nThis library provides convenient access to the Whop REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.whop.com](https://docs.whop.com/apps). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Whop MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40whop%2Fmcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB3aG9wL21jcCJdLCJlbnYiOnsiV0hPUF9BUElfS0VZIjoiTXkgQVBJIEtleSIsIldIT1BfV0VCSE9PS19TRUNSRVQiOiJNeSBXZWJob29rIEtleSIsIldIT1BfQVBQX0lEIjoiYXBwX3h4eHh4eHh4eHh4eHh4In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40whop%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40whop%2Fmcp%22%5D%2C%22env%22%3A%7B%22WHOP_API_KEY%22%3A%22My%20API%20Key%22%2C%22WHOP_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Key%22%2C%22WHOP_APP_ID%22%3A%22app_xxxxxxxxxxxxxx%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @whop/sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst page = await client.payments.list({ company_id: 'biz_xxxxxxxxxxxxxx' });\nconst paymentListResponse = page.data[0];\n\nconsole.log(paymentListResponse.id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Whop from '@whop/sdk';\n\nconst client = new Whop({\n  apiKey: process.env['WHOP_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Whop.PaymentListParams = { company_id: 'biz_xxxxxxxxxxxxxx' };\nconst [paymentListResponse]: [Whop.PaymentListResponse] = await client.payments.list(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst page = await client.payments.list({ company_id: 'biz_xxxxxxxxxxxxxx' }).catch(async (err) => {\n  if (err instanceof Whop.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Whop({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.payments.list({ company_id: 'biz_xxxxxxxxxxxxxx' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Whop({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.payments.list({ company_id: 'biz_xxxxxxxxxxxxxx' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Whop API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllPaymentListResponses(params) {\n  const allPaymentListResponses = [];\n  // Automatically fetches more pages as needed.\n  for await (const paymentListResponse of client.payments.list({\n    company_id: 'biz_xxxxxxxxxxxxxx',\n  })) {\n    allPaymentListResponses.push(paymentListResponse);\n  }\n  return allPaymentListResponses;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.payments.list({ company_id: 'biz_xxxxxxxxxxxxxx' });\nfor (const paymentListResponse of page.data) {\n  console.log(paymentListResponse);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Whop();\n\nconst response = await client.payments.list({ company_id: 'biz_xxxxxxxxxxxxxx' }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: page, response: raw } = await client.payments\n  .list({ company_id: 'biz_xxxxxxxxxxxxxx' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nfor await (const paymentListResponse of page) {\n  console.log(paymentListResponse.id);\n}\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `WHOP_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Whop from '@whop/sdk';\n\nconst client = new Whop({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Whop from '@whop/sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Whop({\n  logger: logger.child({ name: 'Whop' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.payments.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Whop from '@whop/sdk';\nimport fetch from 'my-fetch';\n\nconst client = new Whop({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Whop from '@whop/sdk';\n\nconst client = new Whop({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Whop from '@whop/sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Whop({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Whop from '@whop/sdk';\n\nconst client = new Whop({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Whop from 'npm:@whop/sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Whop({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/whopio/whopsdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
