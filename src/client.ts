// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type CursorPageParams, CursorPageResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { AccessTokenCreateParams, AccessTokenCreateResponse, AccessTokens } from './resources/access-tokens';
import { AccountLinkCreateParams, AccountLinkCreateResponse, AccountLinks } from './resources/account-links';
import {
  AIChat,
  AIChatCreateParams,
  AIChatDeleteResponse,
  AIChatListParams,
  AIChatListResponse,
  AIChatListResponsesCursorPage,
  AIChatUpdateParams,
  AIChats,
} from './resources/ai-chats';
import {
  AppBuildCreateParams,
  AppBuildListParams,
  AppBuildListResponse,
  AppBuildListResponsesCursorPage,
  AppBuilds,
} from './resources/app-builds';
import {
  AppCreateParams,
  AppListParams,
  AppListResponse,
  AppListResponsesCursorPage,
  AppType,
  AppUpdateParams,
  Apps,
} from './resources/apps';
import {
  AuthorizedUserListParams,
  AuthorizedUserListResponse,
  AuthorizedUserListResponsesCursorPage,
  AuthorizedUserRetrieveResponse,
  AuthorizedUsers,
} from './resources/authorized-users';
import {
  ChatChannelListParams,
  ChatChannelListResponse,
  ChatChannelListResponsesCursorPage,
  ChatChannelUpdateParams,
  ChatChannels,
} from './resources/chat-channels';
import {
  CheckoutConfigurationCreateParams,
  CheckoutConfigurationListParams,
  CheckoutConfigurationListResponse,
  CheckoutConfigurationListResponsesCursorPage,
  CheckoutConfigurations,
  CheckoutModes,
} from './resources/checkout-configurations';
import {
  Companies,
  CompanyCreateParams,
  CompanyListParams,
  CompanyListResponse,
  CompanyListResponsesCursorPage,
  CompanyUpdateParams,
} from './resources/companies';
import {
  BotTokenTransactionTypes,
  CompanyTokenTransaction,
  CompanyTokenTransactionCreateParams,
  CompanyTokenTransactionListParams,
  CompanyTokenTransactionListResponse,
  CompanyTokenTransactionListResponsesCursorPage,
  CompanyTokenTransactions,
} from './resources/company-token-transactions';
import {
  CourseChapter,
  CourseChapterCreateParams,
  CourseChapterDeleteResponse,
  CourseChapterListParams,
  CourseChapterListResponse,
  CourseChapterListResponsesCursorPage,
  CourseChapterUpdateParams,
  CourseChapters,
} from './resources/course-chapters';
import {
  CourseLessonInteractionListParams,
  CourseLessonInteractions,
} from './resources/course-lesson-interactions';
import {
  AssessmentQuestionTypes,
  CourseLessonCreateParams,
  CourseLessonDeleteResponse,
  CourseLessonListParams,
  CourseLessonListResponse,
  CourseLessonListResponsesCursorPage,
  CourseLessonMarkAsCompletedResponse,
  CourseLessonStartResponse,
  CourseLessonSubmitAssessmentParams,
  CourseLessonSubmitAssessmentResponse,
  CourseLessonUpdateParams,
  CourseLessons,
  EmbedType,
  Lesson,
  LessonTypes,
  LessonVisibilities,
} from './resources/course-lessons';
import {
  CourseStudentListParams,
  CourseStudentListResponse,
  CourseStudentListResponsesCursorPage,
  CourseStudentRetrieveResponse,
  CourseStudents,
} from './resources/course-students';
import {
  Course,
  CourseCreateParams,
  CourseDeleteResponse,
  CourseListParams,
  CourseListResponse,
  CourseListResponsesCursorPage,
  CourseUpdateParams,
  CourseVisibilities,
  Courses,
  Languages,
} from './resources/courses';
import {
  Dispute,
  DisputeListParams,
  DisputeListResponse,
  DisputeListResponsesCursorPage,
  DisputeStatuses,
  DisputeUpdateEvidenceParams,
  Disputes,
} from './resources/disputes';
import {
  DmChannel,
  DmChannelCreateParams,
  DmChannelDeleteResponse,
  DmChannelListParams,
  DmChannelListResponse,
  DmChannelListResponsesCursorPage,
  DmChannelUpdateParams,
  DmChannels,
} from './resources/dm-channels';
import {
  DmFeedMemberNotificationPreferences,
  DmFeedMemberStatuses,
  DmMember,
  DmMemberCreateParams,
  DmMemberDeleteResponse,
  DmMemberListParams,
  DmMemberListResponse,
  DmMemberListResponsesCursorPage,
  DmMemberUpdateParams,
  DmMembers,
} from './resources/dm-members';
import {
  Entries,
  EntryApproveResponse,
  EntryListParams,
  EntryListResponse,
  EntryListResponsesCursorPage,
} from './resources/entries';
import {
  ExperienceAttachParams,
  ExperienceCreateParams,
  ExperienceDeleteResponse,
  ExperienceDetachParams,
  ExperienceDuplicateParams,
  ExperienceListParams,
  ExperienceListResponse,
  ExperienceListResponsesCursorPage,
  ExperienceUpdateParams,
  Experiences,
} from './resources/experiences';
import {
  FeeMarkupCreateParams,
  FeeMarkupCreateResponse,
  FeeMarkupDeleteResponse,
  FeeMarkupListParams,
  FeeMarkupListResponse,
  FeeMarkupListResponsesCursorPage,
  FeeMarkupType,
  FeeMarkups,
} from './resources/fee-markups';
import {
  FileCreateParams,
  FileCreateResponse,
  FileRetrieveResponse,
  Files,
  UploadStatus,
} from './resources/files';
import {
  ForumPostCreateParams,
  ForumPostListParams,
  ForumPostListResponse,
  ForumPostListResponsesCursorPage,
  ForumPostUpdateParams,
  ForumPostVisibilityType,
  ForumPosts,
} from './resources/forum-posts';
import {
  ForumListParams,
  ForumListResponse,
  ForumListResponsesCursorPage,
  ForumUpdateParams,
  Forums,
} from './resources/forums';
import { InvoiceCreateParams, InvoiceListParams, InvoiceVoidResponse, Invoices } from './resources/invoices';
import {
  Lead,
  LeadCreateParams,
  LeadListParams,
  LeadListResponse,
  LeadListResponsesCursorPage,
  LeadUpdateParams,
  Leads,
} from './resources/leads';
import { LedgerAccountRetrieveResponse, LedgerAccounts } from './resources/ledger-accounts';
import {
  MemberListParams,
  MemberListResponse,
  MemberListResponsesCursorPage,
  MemberRetrieveResponse,
  Members,
} from './resources/members';
import {
  CancelOptions,
  MembershipCancelParams,
  MembershipListParams,
  MembershipListResponse,
  MembershipListResponsesCursorPage,
  MembershipPauseParams,
  MembershipUpdateParams,
  Memberships,
} from './resources/memberships';
import {
  MessageCreateParams,
  MessageDeleteResponse,
  MessageListParams,
  MessageListResponse,
  MessageListResponsesCursorPage,
  MessageUpdateParams,
  Messages,
} from './resources/messages';
import {
  NotificationCreateParams,
  NotificationCreateResponse,
  Notifications,
} from './resources/notifications';
import {
  PaymentMethodListParams,
  PaymentMethodListResponse,
  PaymentMethodListResponsesCursorPage,
  PaymentMethodRetrieveParams,
  PaymentMethodRetrieveResponse,
  PaymentMethods,
} from './resources/payment-methods';
import {
  BillingReasons,
  CardBrands,
  PaymentCreateParams,
  PaymentListFeesParams,
  PaymentListFeesResponse,
  PaymentListFeesResponsesCursorPage,
  PaymentListParams,
  PaymentListResponse,
  PaymentListResponsesCursorPage,
  PaymentMethodTypes,
  PaymentRefundParams,
  Payments,
} from './resources/payments';
import {
  PayoutDestinationCategory,
  PayoutMethodListParams,
  PayoutMethodListResponse,
  PayoutMethodListResponsesCursorPage,
  PayoutMethodRetrieveResponse,
  PayoutMethods,
} from './resources/payout-methods';
import {
  PlanCreateParams,
  PlanDeleteResponse,
  PlanListParams,
  PlanListResponse,
  PlanListResponsesCursorPage,
  PlanUpdateParams,
  Plans,
} from './resources/plans';
import {
  ProductCreateParams,
  ProductDeleteResponse,
  ProductListParams,
  ProductUpdateParams,
  Products,
} from './resources/products';
import {
  PromoCode,
  PromoCodeCreateParams,
  PromoCodeDeleteResponse,
  PromoCodeListParams,
  PromoCodeListResponse,
  PromoCodeListResponsesCursorPage,
  PromoCodeStatus,
  PromoCodes,
  PromoDuration,
} from './resources/promo-codes';
import {
  ReactionCreateParams,
  ReactionDeleteParams,
  ReactionDeleteResponse,
  ReactionListParams,
  ReactionListResponse,
  ReactionListResponsesCursorPage,
  Reactions,
} from './resources/reactions';
import {
  PaymentProvider,
  RefundListParams,
  RefundListResponse,
  RefundListResponsesCursorPage,
  RefundReferenceStatus,
  RefundReferenceType,
  RefundRetrieveResponse,
  RefundStatus,
  Refunds,
} from './resources/refunds';
import {
  ReviewListParams,
  ReviewListResponse,
  ReviewListResponsesCursorPage,
  ReviewRetrieveResponse,
  ReviewStatus,
  Reviews,
} from './resources/reviews';
import {
  SetupIntent,
  SetupIntentListParams,
  SetupIntentListResponse,
  SetupIntentListResponsesCursorPage,
  SetupIntentStatus,
  SetupIntents,
} from './resources/setup-intents';
import {
  ShipmentCreateParams,
  ShipmentListParams,
  ShipmentListResponse,
  ShipmentListResponsesCursorPage,
  Shipments,
} from './resources/shipments';
import {
  SupportChannelCreateParams,
  SupportChannelListParams,
  SupportChannelListResponse,
  SupportChannelListResponsesCursorPage,
  SupportChannels,
} from './resources/support-channels';
import { TopupCreateParams, TopupCreateResponse, Topups } from './resources/topups';
import {
  TransferCreateParams,
  TransferListParams,
  TransferListResponse,
  TransferListResponsesCursorPage,
  Transfers,
} from './resources/transfers';
import {
  User,
  UserCheckAccessParams,
  UserCheckAccessResponse,
  UserUpdateProfileParams,
  Users,
} from './resources/users';
import {
  VerificationErrorCode,
  VerificationRetrieveResponse,
  VerificationStatus,
  Verifications,
} from './resources/verifications';
import {
  APIVersion,
  CourseLessonInteractionCompletedWebhookEvent,
  DisputeCreatedWebhookEvent,
  DisputeUpdatedWebhookEvent,
  EntryApprovedWebhookEvent,
  EntryCreatedWebhookEvent,
  EntryDeletedWebhookEvent,
  EntryDeniedWebhookEvent,
  InvoiceCreatedWebhookEvent,
  InvoicePaidWebhookEvent,
  InvoicePastDueWebhookEvent,
  InvoiceVoidedWebhookEvent,
  MembershipActivatedWebhookEvent,
  MembershipCancelAtPeriodEndChangedWebhookEvent,
  MembershipDeactivatedWebhookEvent,
  PaymentCreatedWebhookEvent,
  PaymentFailedWebhookEvent,
  PaymentPendingWebhookEvent,
  PaymentSucceededWebhookEvent,
  PayoutMethodCreatedWebhookEvent,
  RefundCreatedWebhookEvent,
  RefundUpdatedWebhookEvent,
  SetupIntentCanceledWebhookEvent,
  SetupIntentRequiresActionWebhookEvent,
  SetupIntentSucceededWebhookEvent,
  UnwrapWebhookEvent,
  VerificationSucceededWebhookEvent,
  Webhook,
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteResponse,
  WebhookEvent,
  WebhookListParams,
  WebhookListResponse,
  WebhookListResponsesCursorPage,
  WebhookUpdateParams,
  Webhooks,
  WithdrawalCreatedWebhookEvent,
  WithdrawalUpdatedWebhookEvent,
} from './resources/webhooks';
import {
  Withdrawal,
  WithdrawalCreateParams,
  WithdrawalFeeTypes,
  WithdrawalListParams,
  WithdrawalListResponse,
  WithdrawalListResponsesCursorPage,
  WithdrawalSpeeds,
  WithdrawalStatus,
  Withdrawals,
} from './resources/withdrawals';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import { makeUserTokenVerifierFromSdk } from './lib/verify-user-token';

export interface ClientOptions {
  /**
   * A company API key, company scoped JWT, app API key, or user OAuth token. You must prepend your key/token with the word 'Bearer', which will look like `Bearer ***************************`
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['WHOP_WEBHOOK_SECRET'].
   */
  webhookKey?: string | null | undefined;

  /**
   * When using the SDK in app mode pass this parameter to allow verifying user tokens
   */
  appID?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['WHOP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['WHOP_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Whop API.
 */
export class Whop {
  apiKey: string;
  webhookKey: string | null;
  appID: string | null;
  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Whop API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['WHOP_API_KEY'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookKey=process.env['WHOP_WEBHOOK_SECRET'] ?? null]
   * @param {string | null | undefined} [opts.appID=process.env['WHOP_APP_ID'] ?? null]
   * @param {string} [opts.baseURL=process.env['WHOP_BASE_URL'] ?? https://api.whop.com/api/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('WHOP_BASE_URL'),
    apiKey = readEnv('WHOP_API_KEY'),
    webhookKey = readEnv('WHOP_WEBHOOK_SECRET') ?? null,
    appID = readEnv('WHOP_APP_ID') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.WhopError(
        "The WHOP_API_KEY environment variable is missing or empty; either provide it, or instantiate the Whop client with an apiKey option, like new Whop({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      webhookKey,
      appID,
      ...opts,
      baseURL: baseURL || `https://api.whop.com/api/v1`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Whop.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('WHOP_LOG'), "process.env['WHOP_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
    this.webhookKey = webhookKey;
    this.appID = appID;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      webhookKey: this.webhookKey,
      appID: this.appID,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.whop.com/api/v1';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'brackets' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: PromiseOrValue<RequestOptions>,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(
      Page,
      opts && 'then' in opts ?
        opts.then((opts) => ({ method: 'get', path, ...opts }))
      : { method: 'get', path, ...opts },
    );
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: PromiseOrValue<FinalRequestOptions>,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Whop, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
        'X-Whop-App-Id': this.appID,
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  verifyUserToken: ReturnType<typeof makeUserTokenVerifierFromSdk> = makeUserTokenVerifierFromSdk(this);

  static Whop = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static WhopError = Errors.WhopError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  apps: API.Apps = new API.Apps(this);
  invoices: API.Invoices = new API.Invoices(this);
  courseLessonInteractions: API.CourseLessonInteractions = new API.CourseLessonInteractions(this);
  products: API.Products = new API.Products(this);
  companies: API.Companies = new API.Companies(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  plans: API.Plans = new API.Plans(this);
  entries: API.Entries = new API.Entries(this);
  forumPosts: API.ForumPosts = new API.ForumPosts(this);
  transfers: API.Transfers = new API.Transfers(this);
  ledgerAccounts: API.LedgerAccounts = new API.LedgerAccounts(this);
  memberships: API.Memberships = new API.Memberships(this);
  authorizedUsers: API.AuthorizedUsers = new API.AuthorizedUsers(this);
  appBuilds: API.AppBuilds = new API.AppBuilds(this);
  shipments: API.Shipments = new API.Shipments(this);
  checkoutConfigurations: API.CheckoutConfigurations = new API.CheckoutConfigurations(this);
  messages: API.Messages = new API.Messages(this);
  chatChannels: API.ChatChannels = new API.ChatChannels(this);
  users: API.Users = new API.Users(this);
  payments: API.Payments = new API.Payments(this);
  supportChannels: API.SupportChannels = new API.SupportChannels(this);
  experiences: API.Experiences = new API.Experiences(this);
  reactions: API.Reactions = new API.Reactions(this);
  members: API.Members = new API.Members(this);
  forums: API.Forums = new API.Forums(this);
  promoCodes: API.PromoCodes = new API.PromoCodes(this);
  courses: API.Courses = new API.Courses(this);
  courseChapters: API.CourseChapters = new API.CourseChapters(this);
  courseLessons: API.CourseLessons = new API.CourseLessons(this);
  reviews: API.Reviews = new API.Reviews(this);
  courseStudents: API.CourseStudents = new API.CourseStudents(this);
  accessTokens: API.AccessTokens = new API.AccessTokens(this);
  notifications: API.Notifications = new API.Notifications(this);
  disputes: API.Disputes = new API.Disputes(this);
  refunds: API.Refunds = new API.Refunds(this);
  withdrawals: API.Withdrawals = new API.Withdrawals(this);
  accountLinks: API.AccountLinks = new API.AccountLinks(this);
  setupIntents: API.SetupIntents = new API.SetupIntents(this);
  paymentMethods: API.PaymentMethods = new API.PaymentMethods(this);
  feeMarkups: API.FeeMarkups = new API.FeeMarkups(this);
  payoutMethods: API.PayoutMethods = new API.PayoutMethods(this);
  verifications: API.Verifications = new API.Verifications(this);
  leads: API.Leads = new API.Leads(this);
  topups: API.Topups = new API.Topups(this);
  files: API.Files = new API.Files(this);
  companyTokenTransactions: API.CompanyTokenTransactions = new API.CompanyTokenTransactions(this);
  dmMembers: API.DmMembers = new API.DmMembers(this);
  aiChats: API.AIChats = new API.AIChats(this);
  dmChannels: API.DmChannels = new API.DmChannels(this);
}

Whop.Apps = Apps;
Whop.Invoices = Invoices;
Whop.CourseLessonInteractions = CourseLessonInteractions;
Whop.Products = Products;
Whop.Companies = Companies;
Whop.Webhooks = Webhooks;
Whop.Plans = Plans;
Whop.Entries = Entries;
Whop.ForumPosts = ForumPosts;
Whop.Transfers = Transfers;
Whop.LedgerAccounts = LedgerAccounts;
Whop.Memberships = Memberships;
Whop.AuthorizedUsers = AuthorizedUsers;
Whop.AppBuilds = AppBuilds;
Whop.Shipments = Shipments;
Whop.CheckoutConfigurations = CheckoutConfigurations;
Whop.Messages = Messages;
Whop.ChatChannels = ChatChannels;
Whop.Users = Users;
Whop.Payments = Payments;
Whop.SupportChannels = SupportChannels;
Whop.Experiences = Experiences;
Whop.Reactions = Reactions;
Whop.Members = Members;
Whop.Forums = Forums;
Whop.PromoCodes = PromoCodes;
Whop.Courses = Courses;
Whop.CourseChapters = CourseChapters;
Whop.CourseLessons = CourseLessons;
Whop.Reviews = Reviews;
Whop.CourseStudents = CourseStudents;
Whop.AccessTokens = AccessTokens;
Whop.Notifications = Notifications;
Whop.Disputes = Disputes;
Whop.Refunds = Refunds;
Whop.Withdrawals = Withdrawals;
Whop.AccountLinks = AccountLinks;
Whop.SetupIntents = SetupIntents;
Whop.PaymentMethods = PaymentMethods;
Whop.FeeMarkups = FeeMarkups;
Whop.PayoutMethods = PayoutMethods;
Whop.Verifications = Verifications;
Whop.Leads = Leads;
Whop.Topups = Topups;
Whop.Files = Files;
Whop.CompanyTokenTransactions = CompanyTokenTransactions;
Whop.DmMembers = DmMembers;
Whop.AIChats = AIChats;
Whop.DmChannels = DmChannels;

export declare namespace Whop {
  export type RequestOptions = Opts.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export {
    Apps as Apps,
    type AppType as AppType,
    type AppListResponse as AppListResponse,
    type AppListResponsesCursorPage as AppListResponsesCursorPage,
    type AppCreateParams as AppCreateParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    CourseLessonInteractions as CourseLessonInteractions,
    type CourseLessonInteractionListParams as CourseLessonInteractionListParams,
  };

  export {
    Products as Products,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Companies as Companies,
    type CompanyListResponse as CompanyListResponse,
    type CompanyListResponsesCursorPage as CompanyListResponsesCursorPage,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
  };

  export {
    Webhooks as Webhooks,
    type APIVersion as APIVersion,
    type Webhook as Webhook,
    type WebhookEvent as WebhookEvent,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type InvoiceCreatedWebhookEvent as InvoiceCreatedWebhookEvent,
    type InvoicePaidWebhookEvent as InvoicePaidWebhookEvent,
    type InvoicePastDueWebhookEvent as InvoicePastDueWebhookEvent,
    type InvoiceVoidedWebhookEvent as InvoiceVoidedWebhookEvent,
    type MembershipActivatedWebhookEvent as MembershipActivatedWebhookEvent,
    type MembershipDeactivatedWebhookEvent as MembershipDeactivatedWebhookEvent,
    type EntryCreatedWebhookEvent as EntryCreatedWebhookEvent,
    type EntryApprovedWebhookEvent as EntryApprovedWebhookEvent,
    type EntryDeniedWebhookEvent as EntryDeniedWebhookEvent,
    type EntryDeletedWebhookEvent as EntryDeletedWebhookEvent,
    type SetupIntentRequiresActionWebhookEvent as SetupIntentRequiresActionWebhookEvent,
    type SetupIntentSucceededWebhookEvent as SetupIntentSucceededWebhookEvent,
    type SetupIntentCanceledWebhookEvent as SetupIntentCanceledWebhookEvent,
    type WithdrawalCreatedWebhookEvent as WithdrawalCreatedWebhookEvent,
    type WithdrawalUpdatedWebhookEvent as WithdrawalUpdatedWebhookEvent,
    type CourseLessonInteractionCompletedWebhookEvent as CourseLessonInteractionCompletedWebhookEvent,
    type PayoutMethodCreatedWebhookEvent as PayoutMethodCreatedWebhookEvent,
    type VerificationSucceededWebhookEvent as VerificationSucceededWebhookEvent,
    type PaymentCreatedWebhookEvent as PaymentCreatedWebhookEvent,
    type PaymentSucceededWebhookEvent as PaymentSucceededWebhookEvent,
    type PaymentFailedWebhookEvent as PaymentFailedWebhookEvent,
    type PaymentPendingWebhookEvent as PaymentPendingWebhookEvent,
    type DisputeCreatedWebhookEvent as DisputeCreatedWebhookEvent,
    type DisputeUpdatedWebhookEvent as DisputeUpdatedWebhookEvent,
    type RefundCreatedWebhookEvent as RefundCreatedWebhookEvent,
    type RefundUpdatedWebhookEvent as RefundUpdatedWebhookEvent,
    type MembershipCancelAtPeriodEndChangedWebhookEvent as MembershipCancelAtPeriodEndChangedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
    type WebhookListResponsesCursorPage as WebhookListResponsesCursorPage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };

  export {
    Plans as Plans,
    type PlanListResponse as PlanListResponse,
    type PlanDeleteResponse as PlanDeleteResponse,
    type PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };

  export {
    Entries as Entries,
    type EntryListResponse as EntryListResponse,
    type EntryApproveResponse as EntryApproveResponse,
    type EntryListResponsesCursorPage as EntryListResponsesCursorPage,
    type EntryListParams as EntryListParams,
  };

  export {
    ForumPosts as ForumPosts,
    type ForumPostVisibilityType as ForumPostVisibilityType,
    type ForumPostListResponse as ForumPostListResponse,
    type ForumPostListResponsesCursorPage as ForumPostListResponsesCursorPage,
    type ForumPostCreateParams as ForumPostCreateParams,
    type ForumPostUpdateParams as ForumPostUpdateParams,
    type ForumPostListParams as ForumPostListParams,
  };

  export {
    Transfers as Transfers,
    type TransferListResponse as TransferListResponse,
    type TransferListResponsesCursorPage as TransferListResponsesCursorPage,
    type TransferCreateParams as TransferCreateParams,
    type TransferListParams as TransferListParams,
  };

  export {
    LedgerAccounts as LedgerAccounts,
    type LedgerAccountRetrieveResponse as LedgerAccountRetrieveResponse,
  };

  export {
    Memberships as Memberships,
    type CancelOptions as CancelOptions,
    type MembershipListResponse as MembershipListResponse,
    type MembershipListResponsesCursorPage as MembershipListResponsesCursorPage,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
    type MembershipCancelParams as MembershipCancelParams,
    type MembershipPauseParams as MembershipPauseParams,
  };

  export {
    AuthorizedUsers as AuthorizedUsers,
    type AuthorizedUserRetrieveResponse as AuthorizedUserRetrieveResponse,
    type AuthorizedUserListResponse as AuthorizedUserListResponse,
    type AuthorizedUserListResponsesCursorPage as AuthorizedUserListResponsesCursorPage,
    type AuthorizedUserListParams as AuthorizedUserListParams,
  };

  export {
    AppBuilds as AppBuilds,
    type AppBuildListResponse as AppBuildListResponse,
    type AppBuildListResponsesCursorPage as AppBuildListResponsesCursorPage,
    type AppBuildCreateParams as AppBuildCreateParams,
    type AppBuildListParams as AppBuildListParams,
  };

  export {
    Shipments as Shipments,
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentListResponsesCursorPage as ShipmentListResponsesCursorPage,
    type ShipmentCreateParams as ShipmentCreateParams,
    type ShipmentListParams as ShipmentListParams,
  };

  export {
    CheckoutConfigurations as CheckoutConfigurations,
    type CheckoutModes as CheckoutModes,
    type CheckoutConfigurationListResponse as CheckoutConfigurationListResponse,
    type CheckoutConfigurationListResponsesCursorPage as CheckoutConfigurationListResponsesCursorPage,
    type CheckoutConfigurationCreateParams as CheckoutConfigurationCreateParams,
    type CheckoutConfigurationListParams as CheckoutConfigurationListParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageListResponsesCursorPage as MessageListResponsesCursorPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
  };

  export {
    ChatChannels as ChatChannels,
    type ChatChannelListResponse as ChatChannelListResponse,
    type ChatChannelListResponsesCursorPage as ChatChannelListResponsesCursorPage,
    type ChatChannelUpdateParams as ChatChannelUpdateParams,
    type ChatChannelListParams as ChatChannelListParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserCheckAccessResponse as UserCheckAccessResponse,
    type UserCheckAccessParams as UserCheckAccessParams,
    type UserUpdateProfileParams as UserUpdateProfileParams,
  };

  export {
    Payments as Payments,
    type BillingReasons as BillingReasons,
    type CardBrands as CardBrands,
    type PaymentMethodTypes as PaymentMethodTypes,
    type PaymentListResponse as PaymentListResponse,
    type PaymentListFeesResponse as PaymentListFeesResponse,
    type PaymentListResponsesCursorPage as PaymentListResponsesCursorPage,
    type PaymentListFeesResponsesCursorPage as PaymentListFeesResponsesCursorPage,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentListParams as PaymentListParams,
    type PaymentListFeesParams as PaymentListFeesParams,
    type PaymentRefundParams as PaymentRefundParams,
  };

  export {
    SupportChannels as SupportChannels,
    type SupportChannelListResponse as SupportChannelListResponse,
    type SupportChannelListResponsesCursorPage as SupportChannelListResponsesCursorPage,
    type SupportChannelCreateParams as SupportChannelCreateParams,
    type SupportChannelListParams as SupportChannelListParams,
  };

  export {
    Experiences as Experiences,
    type ExperienceListResponse as ExperienceListResponse,
    type ExperienceDeleteResponse as ExperienceDeleteResponse,
    type ExperienceListResponsesCursorPage as ExperienceListResponsesCursorPage,
    type ExperienceCreateParams as ExperienceCreateParams,
    type ExperienceUpdateParams as ExperienceUpdateParams,
    type ExperienceListParams as ExperienceListParams,
    type ExperienceAttachParams as ExperienceAttachParams,
    type ExperienceDetachParams as ExperienceDetachParams,
    type ExperienceDuplicateParams as ExperienceDuplicateParams,
  };

  export {
    Reactions as Reactions,
    type ReactionListResponse as ReactionListResponse,
    type ReactionDeleteResponse as ReactionDeleteResponse,
    type ReactionListResponsesCursorPage as ReactionListResponsesCursorPage,
    type ReactionCreateParams as ReactionCreateParams,
    type ReactionListParams as ReactionListParams,
    type ReactionDeleteParams as ReactionDeleteParams,
  };

  export {
    Members as Members,
    type MemberRetrieveResponse as MemberRetrieveResponse,
    type MemberListResponse as MemberListResponse,
    type MemberListResponsesCursorPage as MemberListResponsesCursorPage,
    type MemberListParams as MemberListParams,
  };

  export {
    Forums as Forums,
    type ForumListResponse as ForumListResponse,
    type ForumListResponsesCursorPage as ForumListResponsesCursorPage,
    type ForumUpdateParams as ForumUpdateParams,
    type ForumListParams as ForumListParams,
  };

  export {
    PromoCodes as PromoCodes,
    type PromoCode as PromoCode,
    type PromoCodeStatus as PromoCodeStatus,
    type PromoDuration as PromoDuration,
    type PromoCodeListResponse as PromoCodeListResponse,
    type PromoCodeDeleteResponse as PromoCodeDeleteResponse,
    type PromoCodeListResponsesCursorPage as PromoCodeListResponsesCursorPage,
    type PromoCodeCreateParams as PromoCodeCreateParams,
    type PromoCodeListParams as PromoCodeListParams,
  };

  export {
    Courses as Courses,
    type Course as Course,
    type CourseVisibilities as CourseVisibilities,
    type Languages as Languages,
    type CourseListResponse as CourseListResponse,
    type CourseDeleteResponse as CourseDeleteResponse,
    type CourseListResponsesCursorPage as CourseListResponsesCursorPage,
    type CourseCreateParams as CourseCreateParams,
    type CourseUpdateParams as CourseUpdateParams,
    type CourseListParams as CourseListParams,
  };

  export {
    CourseChapters as CourseChapters,
    type CourseChapter as CourseChapter,
    type CourseChapterListResponse as CourseChapterListResponse,
    type CourseChapterDeleteResponse as CourseChapterDeleteResponse,
    type CourseChapterListResponsesCursorPage as CourseChapterListResponsesCursorPage,
    type CourseChapterCreateParams as CourseChapterCreateParams,
    type CourseChapterUpdateParams as CourseChapterUpdateParams,
    type CourseChapterListParams as CourseChapterListParams,
  };

  export {
    CourseLessons as CourseLessons,
    type AssessmentQuestionTypes as AssessmentQuestionTypes,
    type EmbedType as EmbedType,
    type Lesson as Lesson,
    type LessonTypes as LessonTypes,
    type LessonVisibilities as LessonVisibilities,
    type CourseLessonListResponse as CourseLessonListResponse,
    type CourseLessonDeleteResponse as CourseLessonDeleteResponse,
    type CourseLessonMarkAsCompletedResponse as CourseLessonMarkAsCompletedResponse,
    type CourseLessonStartResponse as CourseLessonStartResponse,
    type CourseLessonSubmitAssessmentResponse as CourseLessonSubmitAssessmentResponse,
    type CourseLessonListResponsesCursorPage as CourseLessonListResponsesCursorPage,
    type CourseLessonCreateParams as CourseLessonCreateParams,
    type CourseLessonUpdateParams as CourseLessonUpdateParams,
    type CourseLessonListParams as CourseLessonListParams,
    type CourseLessonSubmitAssessmentParams as CourseLessonSubmitAssessmentParams,
  };

  export {
    Reviews as Reviews,
    type ReviewStatus as ReviewStatus,
    type ReviewRetrieveResponse as ReviewRetrieveResponse,
    type ReviewListResponse as ReviewListResponse,
    type ReviewListResponsesCursorPage as ReviewListResponsesCursorPage,
    type ReviewListParams as ReviewListParams,
  };

  export {
    CourseStudents as CourseStudents,
    type CourseStudentRetrieveResponse as CourseStudentRetrieveResponse,
    type CourseStudentListResponse as CourseStudentListResponse,
    type CourseStudentListResponsesCursorPage as CourseStudentListResponsesCursorPage,
    type CourseStudentListParams as CourseStudentListParams,
  };

  export {
    AccessTokens as AccessTokens,
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
  };

  export {
    Notifications as Notifications,
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationCreateParams as NotificationCreateParams,
  };

  export {
    Disputes as Disputes,
    type Dispute as Dispute,
    type DisputeStatuses as DisputeStatuses,
    type DisputeListResponse as DisputeListResponse,
    type DisputeListResponsesCursorPage as DisputeListResponsesCursorPage,
    type DisputeListParams as DisputeListParams,
    type DisputeUpdateEvidenceParams as DisputeUpdateEvidenceParams,
  };

  export {
    Refunds as Refunds,
    type PaymentProvider as PaymentProvider,
    type RefundReferenceStatus as RefundReferenceStatus,
    type RefundReferenceType as RefundReferenceType,
    type RefundStatus as RefundStatus,
    type RefundRetrieveResponse as RefundRetrieveResponse,
    type RefundListResponse as RefundListResponse,
    type RefundListResponsesCursorPage as RefundListResponsesCursorPage,
    type RefundListParams as RefundListParams,
  };

  export {
    Withdrawals as Withdrawals,
    type Withdrawal as Withdrawal,
    type WithdrawalFeeTypes as WithdrawalFeeTypes,
    type WithdrawalSpeeds as WithdrawalSpeeds,
    type WithdrawalStatus as WithdrawalStatus,
    type WithdrawalListResponse as WithdrawalListResponse,
    type WithdrawalListResponsesCursorPage as WithdrawalListResponsesCursorPage,
    type WithdrawalCreateParams as WithdrawalCreateParams,
    type WithdrawalListParams as WithdrawalListParams,
  };

  export {
    AccountLinks as AccountLinks,
    type AccountLinkCreateResponse as AccountLinkCreateResponse,
    type AccountLinkCreateParams as AccountLinkCreateParams,
  };

  export {
    SetupIntents as SetupIntents,
    type SetupIntent as SetupIntent,
    type SetupIntentStatus as SetupIntentStatus,
    type SetupIntentListResponse as SetupIntentListResponse,
    type SetupIntentListResponsesCursorPage as SetupIntentListResponsesCursorPage,
    type SetupIntentListParams as SetupIntentListParams,
  };

  export {
    PaymentMethods as PaymentMethods,
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodListResponsesCursorPage as PaymentMethodListResponsesCursorPage,
    type PaymentMethodRetrieveParams as PaymentMethodRetrieveParams,
    type PaymentMethodListParams as PaymentMethodListParams,
  };

  export {
    FeeMarkups as FeeMarkups,
    type FeeMarkupType as FeeMarkupType,
    type FeeMarkupCreateResponse as FeeMarkupCreateResponse,
    type FeeMarkupListResponse as FeeMarkupListResponse,
    type FeeMarkupDeleteResponse as FeeMarkupDeleteResponse,
    type FeeMarkupListResponsesCursorPage as FeeMarkupListResponsesCursorPage,
    type FeeMarkupCreateParams as FeeMarkupCreateParams,
    type FeeMarkupListParams as FeeMarkupListParams,
  };

  export {
    PayoutMethods as PayoutMethods,
    type PayoutDestinationCategory as PayoutDestinationCategory,
    type PayoutMethodRetrieveResponse as PayoutMethodRetrieveResponse,
    type PayoutMethodListResponse as PayoutMethodListResponse,
    type PayoutMethodListResponsesCursorPage as PayoutMethodListResponsesCursorPage,
    type PayoutMethodListParams as PayoutMethodListParams,
  };

  export {
    Verifications as Verifications,
    type VerificationErrorCode as VerificationErrorCode,
    type VerificationStatus as VerificationStatus,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
  };

  export {
    Leads as Leads,
    type Lead as Lead,
    type LeadListResponse as LeadListResponse,
    type LeadListResponsesCursorPage as LeadListResponsesCursorPage,
    type LeadCreateParams as LeadCreateParams,
    type LeadUpdateParams as LeadUpdateParams,
    type LeadListParams as LeadListParams,
  };

  export {
    Topups as Topups,
    type TopupCreateResponse as TopupCreateResponse,
    type TopupCreateParams as TopupCreateParams,
  };

  export {
    Files as Files,
    type UploadStatus as UploadStatus,
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileCreateParams as FileCreateParams,
  };

  export {
    CompanyTokenTransactions as CompanyTokenTransactions,
    type BotTokenTransactionTypes as BotTokenTransactionTypes,
    type CompanyTokenTransaction as CompanyTokenTransaction,
    type CompanyTokenTransactionListResponse as CompanyTokenTransactionListResponse,
    type CompanyTokenTransactionListResponsesCursorPage as CompanyTokenTransactionListResponsesCursorPage,
    type CompanyTokenTransactionCreateParams as CompanyTokenTransactionCreateParams,
    type CompanyTokenTransactionListParams as CompanyTokenTransactionListParams,
  };

  export {
    DmMembers as DmMembers,
    type DmFeedMemberNotificationPreferences as DmFeedMemberNotificationPreferences,
    type DmFeedMemberStatuses as DmFeedMemberStatuses,
    type DmMember as DmMember,
    type DmMemberListResponse as DmMemberListResponse,
    type DmMemberDeleteResponse as DmMemberDeleteResponse,
    type DmMemberListResponsesCursorPage as DmMemberListResponsesCursorPage,
    type DmMemberCreateParams as DmMemberCreateParams,
    type DmMemberUpdateParams as DmMemberUpdateParams,
    type DmMemberListParams as DmMemberListParams,
  };

  export {
    AIChats as AIChats,
    type AIChat as AIChat,
    type AIChatListResponse as AIChatListResponse,
    type AIChatDeleteResponse as AIChatDeleteResponse,
    type AIChatListResponsesCursorPage as AIChatListResponsesCursorPage,
    type AIChatCreateParams as AIChatCreateParams,
    type AIChatUpdateParams as AIChatUpdateParams,
    type AIChatListParams as AIChatListParams,
  };

  export {
    DmChannels as DmChannels,
    type DmChannel as DmChannel,
    type DmChannelListResponse as DmChannelListResponse,
    type DmChannelDeleteResponse as DmChannelDeleteResponse,
    type DmChannelListResponsesCursorPage as DmChannelListResponsesCursorPage,
    type DmChannelCreateParams as DmChannelCreateParams,
    type DmChannelUpdateParams as DmChannelUpdateParams,
    type DmChannelListParams as DmChannelListParams,
  };

  export type AccessLevel = API.AccessLevel;
  export type AccessPassType = API.AccessPassType;
  export type App = API.App;
  export type AppBuild = API.AppBuild;
  export type AppBuildPlatforms = API.AppBuildPlatforms;
  export type AppBuildStatuses = API.AppBuildStatuses;
  export type AppStatuses = API.AppStatuses;
  export type AppViewType = API.AppViewType;
  export type AuthorizedUserRoles = API.AuthorizedUserRoles;
  export type BusinessTypes = API.BusinessTypes;
  export type ChatChannel = API.ChatChannel;
  export type CheckoutConfiguration = API.CheckoutConfiguration;
  export type CollectionMethod = API.CollectionMethod;
  export type Company = API.Company;
  export type CourseLessonInteraction = API.CourseLessonInteraction;
  export type CourseLessonInteractionListItem = API.CourseLessonInteractionListItem;
  export type Currency = API.Currency;
  export type CustomCta = API.CustomCta;
  export type Direction = API.Direction;
  export type DmsPostTypes = API.DmsPostTypes;
  export type EmailNotificationPreferences = API.EmailNotificationPreferences;
  export type Entry = API.Entry;
  export type EntryStatus = API.EntryStatus;
  export type Experience = API.Experience;
  export type Forum = API.Forum;
  export type ForumPost = API.ForumPost;
  export type FriendlyReceiptStatus = API.FriendlyReceiptStatus;
  export type GlobalAffiliateStatus = API.GlobalAffiliateStatus;
  export type IndustryTypes = API.IndustryTypes;
  export type Invoice = API.Invoice;
  export type InvoiceListItem = API.InvoiceListItem;
  export type InvoiceStatus = API.InvoiceStatus;
  export type MemberMostRecentActions = API.MemberMostRecentActions;
  export type MemberStatuses = API.MemberStatuses;
  export type Membership = API.Membership;
  export type MembershipStatus = API.MembershipStatus;
  export type Message = API.Message;
  export type PageInfo = API.PageInfo;
  export type Payment = API.Payment;
  export type Plan = API.Plan;
  export type PlanType = API.PlanType;
  export type Product = API.Product;
  export type ProductListItem = API.ProductListItem;
  export type PromoType = API.PromoType;
  export type Reaction = API.Reaction;
  export type ReceiptStatus = API.ReceiptStatus;
  export type ReleaseMethod = API.ReleaseMethod;
  export type Shipment = API.Shipment;
  export type ShipmentCarrier = API.ShipmentCarrier;
  export type ShipmentStatus = API.ShipmentStatus;
  export type ShipmentSubstatus = API.ShipmentSubstatus;
  export type SupportChannel = API.SupportChannel;
  export type TaxType = API.TaxType;
  export type Transfer = API.Transfer;
  export type Visibility = API.Visibility;
  export type VisibilityFilter = API.VisibilityFilter;
  export type WhoCanCommentTypes = API.WhoCanCommentTypes;
  export type WhoCanPost = API.WhoCanPost;
  export type WhoCanPostTypes = API.WhoCanPostTypes;
  export type WhoCanReact = API.WhoCanReact;
}
