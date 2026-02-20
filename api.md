# Shared

Types:

- <code><a href="./src/resources/shared.ts">AccessLevel</a></code>
- <code><a href="./src/resources/shared.ts">AccessPassType</a></code>
- <code><a href="./src/resources/shared.ts">App</a></code>
- <code><a href="./src/resources/shared.ts">AppBuild</a></code>
- <code><a href="./src/resources/shared.ts">AppBuildPlatforms</a></code>
- <code><a href="./src/resources/shared.ts">AppBuildStatuses</a></code>
- <code><a href="./src/resources/shared.ts">AppStatuses</a></code>
- <code><a href="./src/resources/shared.ts">AppViewType</a></code>
- <code><a href="./src/resources/shared.ts">AuthorizedUserRoles</a></code>
- <code><a href="./src/resources/shared.ts">BusinessTypes</a></code>
- <code><a href="./src/resources/shared.ts">ChatChannel</a></code>
- <code><a href="./src/resources/shared.ts">CheckoutConfiguration</a></code>
- <code><a href="./src/resources/shared.ts">CollectionMethod</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteraction</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteractionListItem</a></code>
- <code><a href="./src/resources/shared.ts">Currency</a></code>
- <code><a href="./src/resources/shared.ts">CustomCta</a></code>
- <code><a href="./src/resources/shared.ts">Direction</a></code>
- <code><a href="./src/resources/shared.ts">DmsPostTypes</a></code>
- <code><a href="./src/resources/shared.ts">EmailNotificationPreferences</a></code>
- <code><a href="./src/resources/shared.ts">Entry</a></code>
- <code><a href="./src/resources/shared.ts">EntryStatus</a></code>
- <code><a href="./src/resources/shared.ts">Experience</a></code>
- <code><a href="./src/resources/shared.ts">Forum</a></code>
- <code><a href="./src/resources/shared.ts">ForumPost</a></code>
- <code><a href="./src/resources/shared.ts">FriendlyReceiptStatus</a></code>
- <code><a href="./src/resources/shared.ts">GlobalAffiliateStatus</a></code>
- <code><a href="./src/resources/shared.ts">IndustryTypes</a></code>
- <code><a href="./src/resources/shared.ts">Invoice</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceListItem</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceStatus</a></code>
- <code><a href="./src/resources/shared.ts">MemberMostRecentActions</a></code>
- <code><a href="./src/resources/shared.ts">MemberStatuses</a></code>
- <code><a href="./src/resources/shared.ts">Membership</a></code>
- <code><a href="./src/resources/shared.ts">MembershipStatus</a></code>
- <code><a href="./src/resources/shared.ts">Message</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>
- <code><a href="./src/resources/shared.ts">Payment</a></code>
- <code><a href="./src/resources/shared.ts">Plan</a></code>
- <code><a href="./src/resources/shared.ts">PlanType</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductListItem</a></code>
- <code><a href="./src/resources/shared.ts">PromoType</a></code>
- <code><a href="./src/resources/shared.ts">Reaction</a></code>
- <code><a href="./src/resources/shared.ts">ReceiptStatus</a></code>
- <code><a href="./src/resources/shared.ts">ReleaseMethod</a></code>
- <code><a href="./src/resources/shared.ts">Shipment</a></code>
- <code><a href="./src/resources/shared.ts">ShipmentCarrier</a></code>
- <code><a href="./src/resources/shared.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/shared.ts">ShipmentSubstatus</a></code>
- <code><a href="./src/resources/shared.ts">SupportChannel</a></code>
- <code><a href="./src/resources/shared.ts">TaxType</a></code>
- <code><a href="./src/resources/shared.ts">Transfer</a></code>
- <code><a href="./src/resources/shared.ts">Visibility</a></code>
- <code><a href="./src/resources/shared.ts">VisibilityFilter</a></code>
- <code><a href="./src/resources/shared.ts">WhoCanCommentTypes</a></code>
- <code><a href="./src/resources/shared.ts">WhoCanPost</a></code>
- <code><a href="./src/resources/shared.ts">WhoCanPostTypes</a></code>
- <code><a href="./src/resources/shared.ts">WhoCanReact</a></code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppType</a></code>
- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>

Methods:

- <code title="post /apps">client.apps.<a href="./src/resources/apps.ts">create</a>({ ...params }) -> App</code>
- <code title="get /apps/{id}">client.apps.<a href="./src/resources/apps.ts">retrieve</a>(id) -> App</code>
- <code title="patch /apps/{id}">client.apps.<a href="./src/resources/apps.ts">update</a>(id, { ...params }) -> App</code>
- <code title="get /apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponsesCursorPage</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> Invoice</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> Invoice</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListItemsCursorPage</code>
- <code title="post /invoices/{id}/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>(id) -> InvoiceVoidResponse</code>

# CourseLessonInteractions

Methods:

- <code title="get /course_lesson_interactions/{id}">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">retrieve</a>(id) -> CourseLessonInteraction</code>
- <code title="get /course_lesson_interactions">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">list</a>({ ...params }) -> CourseLessonInteractionListItemsCursorPage</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">IndustryGroups</a></code>
- <code><a href="./src/resources/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> Product</code>
- <code title="patch /products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListItemsCursorPage</code>
- <code title="delete /products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(id) -> ProductDeleteResponse</code>

# Companies

Types:

- <code><a href="./src/resources/companies.ts">CompanyListResponse</a></code>

Methods:

- <code title="post /companies">client.companies.<a href="./src/resources/companies.ts">create</a>({ ...params }) -> Company</code>
- <code title="get /companies/{id}">client.companies.<a href="./src/resources/companies.ts">retrieve</a>(id) -> Company</code>
- <code title="patch /companies/{id}">client.companies.<a href="./src/resources/companies.ts">update</a>(id, { ...params }) -> Company</code>
- <code title="get /companies">client.companies.<a href="./src/resources/companies.ts">list</a>({ ...params }) -> CompanyListResponsesCursorPage</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">APIVersion</a></code>
- <code><a href="./src/resources/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoiceCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoicePaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoicePastDueWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoiceVoidedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MembershipActivatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MembershipDeactivatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">EntryCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">EntryApprovedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">EntryDeniedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">EntryDeletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">SetupIntentRequiresActionWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">SetupIntentSucceededWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">SetupIntentCanceledWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">WithdrawalCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">WithdrawalUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CourseLessonInteractionCompletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutMethodCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">VerificationSucceededWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PaymentCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PaymentSucceededWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PaymentFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PaymentPendingWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">DisputeCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">DisputeUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">RefundCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">RefundUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">DisputeAlertCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MembershipCancelAtPeriodEndChangedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(id) -> Webhook</code>
- <code title="patch /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> Webhook</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponsesCursorPage</code>
- <code title="delete /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id) -> WebhookDeleteResponse</code>
- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanDeleteResponse</a></code>

Methods:

- <code title="post /plans">client.plans.<a href="./src/resources/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="get /plans/{id}">client.plans.<a href="./src/resources/plans.ts">retrieve</a>(id) -> Plan</code>
- <code title="patch /plans/{id}">client.plans.<a href="./src/resources/plans.ts">update</a>(id, { ...params }) -> Plan</code>
- <code title="get /plans">client.plans.<a href="./src/resources/plans.ts">list</a>({ ...params }) -> PlanListResponsesCursorPage</code>
- <code title="delete /plans/{id}">client.plans.<a href="./src/resources/plans.ts">delete</a>(id) -> PlanDeleteResponse</code>

# Entries

Types:

- <code><a href="./src/resources/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/entries.ts">EntryApproveResponse</a></code>

Methods:

- <code title="get /entries/{id}">client.entries.<a href="./src/resources/entries.ts">retrieve</a>(id) -> Entry</code>
- <code title="get /entries">client.entries.<a href="./src/resources/entries.ts">list</a>({ ...params }) -> EntryListResponsesCursorPage</code>
- <code title="post /entries/{id}/approve">client.entries.<a href="./src/resources/entries.ts">approve</a>(id) -> EntryApproveResponse</code>
- <code title="post /entries/{id}/deny">client.entries.<a href="./src/resources/entries.ts">deny</a>(id) -> Entry</code>

# ForumPosts

Types:

- <code><a href="./src/resources/forum-posts.ts">ForumPostVisibilityType</a></code>
- <code><a href="./src/resources/forum-posts.ts">ForumPostListResponse</a></code>

Methods:

- <code title="post /forum_posts">client.forumPosts.<a href="./src/resources/forum-posts.ts">create</a>({ ...params }) -> ForumPost</code>
- <code title="get /forum_posts/{id}">client.forumPosts.<a href="./src/resources/forum-posts.ts">retrieve</a>(id) -> ForumPost</code>
- <code title="patch /forum_posts/{id}">client.forumPosts.<a href="./src/resources/forum-posts.ts">update</a>(id, { ...params }) -> ForumPost</code>
- <code title="get /forum_posts">client.forumPosts.<a href="./src/resources/forum-posts.ts">list</a>({ ...params }) -> ForumPostListResponsesCursorPage</code>

# Transfers

Types:

- <code><a href="./src/resources/transfers.ts">TransferListResponse</a></code>

Methods:

- <code title="post /transfers">client.transfers.<a href="./src/resources/transfers.ts">create</a>({ ...params }) -> Transfer</code>
- <code title="get /transfers/{id}">client.transfers.<a href="./src/resources/transfers.ts">retrieve</a>(id) -> Transfer</code>
- <code title="get /transfers">client.transfers.<a href="./src/resources/transfers.ts">list</a>({ ...params }) -> TransferListResponsesCursorPage</code>

# LedgerAccounts

Types:

- <code><a href="./src/resources/ledger-accounts.ts">LedgerAccountRetrieveResponse</a></code>

Methods:

- <code title="get /ledger_accounts/{id}">client.ledgerAccounts.<a href="./src/resources/ledger-accounts.ts">retrieve</a>(id) -> LedgerAccountRetrieveResponse</code>

# Memberships

Types:

- <code><a href="./src/resources/memberships.ts">CancelOptions</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipListResponse</a></code>

Methods:

- <code title="get /memberships/{id}">client.memberships.<a href="./src/resources/memberships.ts">retrieve</a>(id) -> Membership</code>
- <code title="patch /memberships/{id}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(id, { ...params }) -> Membership</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipListResponsesCursorPage</code>
- <code title="post /memberships/{id}/cancel">client.memberships.<a href="./src/resources/memberships.ts">cancel</a>(id, { ...params }) -> Membership</code>
- <code title="post /memberships/{id}/pause">client.memberships.<a href="./src/resources/memberships.ts">pause</a>(id, { ...params }) -> Membership</code>
- <code title="post /memberships/{id}/resume">client.memberships.<a href="./src/resources/memberships.ts">resume</a>(id) -> Membership</code>
- <code title="post /memberships/{id}/uncancel">client.memberships.<a href="./src/resources/memberships.ts">uncancel</a>(id) -> Membership</code>

# AuthorizedUsers

Types:

- <code><a href="./src/resources/authorized-users.ts">AuthorizedUserRetrieveResponse</a></code>
- <code><a href="./src/resources/authorized-users.ts">AuthorizedUserListResponse</a></code>

Methods:

- <code title="get /authorized_users/{id}">client.authorizedUsers.<a href="./src/resources/authorized-users.ts">retrieve</a>(id) -> AuthorizedUserRetrieveResponse</code>
- <code title="get /authorized_users">client.authorizedUsers.<a href="./src/resources/authorized-users.ts">list</a>({ ...params }) -> AuthorizedUserListResponsesCursorPage</code>

# AppBuilds

Types:

- <code><a href="./src/resources/app-builds.ts">AppBuildListResponse</a></code>

Methods:

- <code title="post /app_builds">client.appBuilds.<a href="./src/resources/app-builds.ts">create</a>({ ...params }) -> AppBuild</code>
- <code title="get /app_builds/{id}">client.appBuilds.<a href="./src/resources/app-builds.ts">retrieve</a>(id) -> AppBuild</code>
- <code title="get /app_builds">client.appBuilds.<a href="./src/resources/app-builds.ts">list</a>({ ...params }) -> AppBuildListResponsesCursorPage</code>
- <code title="post /app_builds/{id}/promote">client.appBuilds.<a href="./src/resources/app-builds.ts">promote</a>(id) -> AppBuild</code>

# Shipments

Types:

- <code><a href="./src/resources/shipments.ts">ShipmentListResponse</a></code>

Methods:

- <code title="post /shipments">client.shipments.<a href="./src/resources/shipments.ts">create</a>({ ...params }) -> Shipment</code>
- <code title="get /shipments/{id}">client.shipments.<a href="./src/resources/shipments.ts">retrieve</a>(id) -> Shipment</code>
- <code title="get /shipments">client.shipments.<a href="./src/resources/shipments.ts">list</a>({ ...params }) -> ShipmentListResponsesCursorPage</code>

# CheckoutConfigurations

Types:

- <code><a href="./src/resources/checkout-configurations.ts">CheckoutModes</a></code>
- <code><a href="./src/resources/checkout-configurations.ts">CheckoutConfigurationListResponse</a></code>

Methods:

- <code title="post /checkout_configurations">client.checkoutConfigurations.<a href="./src/resources/checkout-configurations.ts">create</a>({ ...params }) -> CheckoutConfiguration</code>
- <code title="get /checkout_configurations/{id}">client.checkoutConfigurations.<a href="./src/resources/checkout-configurations.ts">retrieve</a>(id) -> CheckoutConfiguration</code>
- <code title="get /checkout_configurations">client.checkoutConfigurations.<a href="./src/resources/checkout-configurations.ts">list</a>({ ...params }) -> CheckoutConfigurationListResponsesCursorPage</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageDeleteResponse</a></code>

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> Message</code>
- <code title="get /messages/{id}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(id) -> Message</code>
- <code title="patch /messages/{id}">client.messages.<a href="./src/resources/messages.ts">update</a>(id, { ...params }) -> Message</code>
- <code title="get /messages">client.messages.<a href="./src/resources/messages.ts">list</a>({ ...params }) -> MessageListResponsesCursorPage</code>
- <code title="delete /messages/{id}">client.messages.<a href="./src/resources/messages.ts">delete</a>(id) -> MessageDeleteResponse</code>

# ChatChannels

Types:

- <code><a href="./src/resources/chat-channels.ts">ChatChannelListResponse</a></code>

Methods:

- <code title="get /chat_channels/{id}">client.chatChannels.<a href="./src/resources/chat-channels.ts">retrieve</a>(id) -> ChatChannel</code>
- <code title="patch /chat_channels/{id}">client.chatChannels.<a href="./src/resources/chat-channels.ts">update</a>(id, { ...params }) -> ChatChannel</code>
- <code title="get /chat_channels">client.chatChannels.<a href="./src/resources/chat-channels.ts">list</a>({ ...params }) -> ChatChannelListResponsesCursorPage</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserCheckAccessResponse</a></code>

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> User</code>
- <code title="get /users/{id}/access/{resource_id}">client.users.<a href="./src/resources/users.ts">checkAccess</a>(resourceID, { ...params }) -> UserCheckAccessResponse</code>
- <code title="patch /users/me">client.users.<a href="./src/resources/users.ts">updateProfile</a>({ ...params }) -> User</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">BillingReasons</a></code>
- <code><a href="./src/resources/payments.ts">CardBrands</a></code>
- <code><a href="./src/resources/payments.ts">PaymentMethodTypes</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListFeesResponse</a></code>

Methods:

- <code title="post /payments">client.payments.<a href="./src/resources/payments.ts">create</a>({ ...params }) -> Payment</code>
- <code title="get /payments/{id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(id) -> Payment</code>
- <code title="get /payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponsesCursorPage</code>
- <code title="get /payments/{id}/fees">client.payments.<a href="./src/resources/payments.ts">listFees</a>(id, { ...params }) -> PaymentListFeesResponsesCursorPage</code>
- <code title="post /payments/{id}/refund">client.payments.<a href="./src/resources/payments.ts">refund</a>(id, { ...params }) -> Payment</code>
- <code title="post /payments/{id}/retry">client.payments.<a href="./src/resources/payments.ts">retry</a>(id) -> Payment</code>
- <code title="post /payments/{id}/void">client.payments.<a href="./src/resources/payments.ts">void</a>(id) -> Payment</code>

# SupportChannels

Types:

- <code><a href="./src/resources/support-channels.ts">SupportChannelListResponse</a></code>

Methods:

- <code title="post /support_channels">client.supportChannels.<a href="./src/resources/support-channels.ts">create</a>({ ...params }) -> SupportChannel</code>
- <code title="get /support_channels/{id}">client.supportChannels.<a href="./src/resources/support-channels.ts">retrieve</a>(id) -> SupportChannel</code>
- <code title="get /support_channels">client.supportChannels.<a href="./src/resources/support-channels.ts">list</a>({ ...params }) -> SupportChannelListResponsesCursorPage</code>

# Experiences

Types:

- <code><a href="./src/resources/experiences.ts">ExperienceListResponse</a></code>
- <code><a href="./src/resources/experiences.ts">ExperienceDeleteResponse</a></code>

Methods:

- <code title="post /experiences">client.experiences.<a href="./src/resources/experiences.ts">create</a>({ ...params }) -> Experience</code>
- <code title="get /experiences/{id}">client.experiences.<a href="./src/resources/experiences.ts">retrieve</a>(id) -> Experience</code>
- <code title="patch /experiences/{id}">client.experiences.<a href="./src/resources/experiences.ts">update</a>(id, { ...params }) -> Experience</code>
- <code title="get /experiences">client.experiences.<a href="./src/resources/experiences.ts">list</a>({ ...params }) -> ExperienceListResponsesCursorPage</code>
- <code title="delete /experiences/{id}">client.experiences.<a href="./src/resources/experiences.ts">delete</a>(id) -> ExperienceDeleteResponse</code>
- <code title="post /experiences/{id}/attach">client.experiences.<a href="./src/resources/experiences.ts">attach</a>(id, { ...params }) -> Experience</code>
- <code title="post /experiences/{id}/detach">client.experiences.<a href="./src/resources/experiences.ts">detach</a>(id, { ...params }) -> Experience</code>
- <code title="post /experiences/{id}/duplicate">client.experiences.<a href="./src/resources/experiences.ts">duplicate</a>(id, { ...params }) -> Experience</code>

# Reactions

Types:

- <code><a href="./src/resources/reactions.ts">ReactionListResponse</a></code>
- <code><a href="./src/resources/reactions.ts">ReactionDeleteResponse</a></code>

Methods:

- <code title="post /reactions">client.reactions.<a href="./src/resources/reactions.ts">create</a>({ ...params }) -> Reaction</code>
- <code title="get /reactions/{id}">client.reactions.<a href="./src/resources/reactions.ts">retrieve</a>(id) -> Reaction</code>
- <code title="get /reactions">client.reactions.<a href="./src/resources/reactions.ts">list</a>({ ...params }) -> ReactionListResponsesCursorPage</code>
- <code title="delete /reactions/{id}">client.reactions.<a href="./src/resources/reactions.ts">delete</a>(id, { ...params }) -> ReactionDeleteResponse</code>

# Members

Types:

- <code><a href="./src/resources/members.ts">MemberRetrieveResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /members/{id}">client.members.<a href="./src/resources/members.ts">retrieve</a>(id) -> MemberRetrieveResponse</code>
- <code title="get /members">client.members.<a href="./src/resources/members.ts">list</a>({ ...params }) -> MemberListResponsesCursorPage</code>

# Forums

Types:

- <code><a href="./src/resources/forums.ts">ForumListResponse</a></code>

Methods:

- <code title="get /forums/{id}">client.forums.<a href="./src/resources/forums.ts">retrieve</a>(id) -> Forum</code>
- <code title="patch /forums/{id}">client.forums.<a href="./src/resources/forums.ts">update</a>(id, { ...params }) -> Forum</code>
- <code title="get /forums">client.forums.<a href="./src/resources/forums.ts">list</a>({ ...params }) -> ForumListResponsesCursorPage</code>

# PromoCodes

Types:

- <code><a href="./src/resources/promo-codes.ts">PromoCode</a></code>
- <code><a href="./src/resources/promo-codes.ts">PromoCodeStatus</a></code>
- <code><a href="./src/resources/promo-codes.ts">PromoDuration</a></code>
- <code><a href="./src/resources/promo-codes.ts">PromoCodeListResponse</a></code>
- <code><a href="./src/resources/promo-codes.ts">PromoCodeDeleteResponse</a></code>

Methods:

- <code title="post /promo_codes">client.promoCodes.<a href="./src/resources/promo-codes.ts">create</a>({ ...params }) -> PromoCode</code>
- <code title="get /promo_codes/{id}">client.promoCodes.<a href="./src/resources/promo-codes.ts">retrieve</a>(id) -> PromoCode</code>
- <code title="get /promo_codes">client.promoCodes.<a href="./src/resources/promo-codes.ts">list</a>({ ...params }) -> PromoCodeListResponsesCursorPage</code>
- <code title="delete /promo_codes/{id}">client.promoCodes.<a href="./src/resources/promo-codes.ts">delete</a>(id) -> PromoCodeDeleteResponse</code>

# Courses

Types:

- <code><a href="./src/resources/courses.ts">Course</a></code>
- <code><a href="./src/resources/courses.ts">CourseVisibilities</a></code>
- <code><a href="./src/resources/courses.ts">Languages</a></code>
- <code><a href="./src/resources/courses.ts">CourseListResponse</a></code>
- <code><a href="./src/resources/courses.ts">CourseDeleteResponse</a></code>

Methods:

- <code title="post /courses">client.courses.<a href="./src/resources/courses.ts">create</a>({ ...params }) -> Course</code>
- <code title="get /courses/{id}">client.courses.<a href="./src/resources/courses.ts">retrieve</a>(id) -> Course</code>
- <code title="patch /courses/{id}">client.courses.<a href="./src/resources/courses.ts">update</a>(id, { ...params }) -> Course</code>
- <code title="get /courses">client.courses.<a href="./src/resources/courses.ts">list</a>({ ...params }) -> CourseListResponsesCursorPage</code>
- <code title="delete /courses/{id}">client.courses.<a href="./src/resources/courses.ts">delete</a>(id) -> CourseDeleteResponse</code>

# CourseChapters

Types:

- <code><a href="./src/resources/course-chapters.ts">CourseChapter</a></code>
- <code><a href="./src/resources/course-chapters.ts">CourseChapterListResponse</a></code>
- <code><a href="./src/resources/course-chapters.ts">CourseChapterDeleteResponse</a></code>

Methods:

- <code title="post /course_chapters">client.courseChapters.<a href="./src/resources/course-chapters.ts">create</a>({ ...params }) -> CourseChapter</code>
- <code title="get /course_chapters/{id}">client.courseChapters.<a href="./src/resources/course-chapters.ts">retrieve</a>(id) -> CourseChapter</code>
- <code title="patch /course_chapters/{id}">client.courseChapters.<a href="./src/resources/course-chapters.ts">update</a>(id, { ...params }) -> CourseChapter</code>
- <code title="get /course_chapters">client.courseChapters.<a href="./src/resources/course-chapters.ts">list</a>({ ...params }) -> CourseChapterListResponsesCursorPage</code>
- <code title="delete /course_chapters/{id}">client.courseChapters.<a href="./src/resources/course-chapters.ts">delete</a>(id) -> CourseChapterDeleteResponse</code>

# CourseLessons

Types:

- <code><a href="./src/resources/course-lessons.ts">AssessmentQuestionTypes</a></code>
- <code><a href="./src/resources/course-lessons.ts">EmbedType</a></code>
- <code><a href="./src/resources/course-lessons.ts">Lesson</a></code>
- <code><a href="./src/resources/course-lessons.ts">LessonTypes</a></code>
- <code><a href="./src/resources/course-lessons.ts">LessonVisibilities</a></code>
- <code><a href="./src/resources/course-lessons.ts">CourseLessonListResponse</a></code>
- <code><a href="./src/resources/course-lessons.ts">CourseLessonDeleteResponse</a></code>
- <code><a href="./src/resources/course-lessons.ts">CourseLessonMarkAsCompletedResponse</a></code>
- <code><a href="./src/resources/course-lessons.ts">CourseLessonStartResponse</a></code>
- <code><a href="./src/resources/course-lessons.ts">CourseLessonSubmitAssessmentResponse</a></code>

Methods:

- <code title="post /course_lessons">client.courseLessons.<a href="./src/resources/course-lessons.ts">create</a>({ ...params }) -> Lesson</code>
- <code title="get /course_lessons/{id}">client.courseLessons.<a href="./src/resources/course-lessons.ts">retrieve</a>(id) -> Lesson</code>
- <code title="patch /course_lessons/{id}">client.courseLessons.<a href="./src/resources/course-lessons.ts">update</a>(id, { ...params }) -> Lesson</code>
- <code title="get /course_lessons">client.courseLessons.<a href="./src/resources/course-lessons.ts">list</a>({ ...params }) -> CourseLessonListResponsesCursorPage</code>
- <code title="delete /course_lessons/{id}">client.courseLessons.<a href="./src/resources/course-lessons.ts">delete</a>(id) -> CourseLessonDeleteResponse</code>
- <code title="post /course_lessons/{lesson_id}/mark_as_completed">client.courseLessons.<a href="./src/resources/course-lessons.ts">markAsCompleted</a>(lessonID) -> CourseLessonMarkAsCompletedResponse</code>
- <code title="post /course_lessons/{lesson_id}/start">client.courseLessons.<a href="./src/resources/course-lessons.ts">start</a>(lessonID) -> CourseLessonStartResponse</code>
- <code title="post /course_lessons/{lesson_id}/submit_assessment">client.courseLessons.<a href="./src/resources/course-lessons.ts">submitAssessment</a>(lessonID, { ...params }) -> CourseLessonSubmitAssessmentResponse</code>

# Reviews

Types:

- <code><a href="./src/resources/reviews.ts">ReviewStatus</a></code>
- <code><a href="./src/resources/reviews.ts">ReviewRetrieveResponse</a></code>
- <code><a href="./src/resources/reviews.ts">ReviewListResponse</a></code>

Methods:

- <code title="get /reviews/{id}">client.reviews.<a href="./src/resources/reviews.ts">retrieve</a>(id) -> ReviewRetrieveResponse</code>
- <code title="get /reviews">client.reviews.<a href="./src/resources/reviews.ts">list</a>({ ...params }) -> ReviewListResponsesCursorPage</code>

# CourseStudents

Types:

- <code><a href="./src/resources/course-students.ts">CourseStudentRetrieveResponse</a></code>
- <code><a href="./src/resources/course-students.ts">CourseStudentListResponse</a></code>

Methods:

- <code title="get /course_students/{id}">client.courseStudents.<a href="./src/resources/course-students.ts">retrieve</a>(id) -> CourseStudentRetrieveResponse</code>
- <code title="get /course_students">client.courseStudents.<a href="./src/resources/course-students.ts">list</a>({ ...params }) -> CourseStudentListResponsesCursorPage</code>

# AccessTokens

Types:

- <code><a href="./src/resources/access-tokens.ts">AccessTokenCreateResponse</a></code>

Methods:

- <code title="post /access_tokens">client.accessTokens.<a href="./src/resources/access-tokens.ts">create</a>({ ...params }) -> AccessTokenCreateResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">NotificationCreateResponse</a></code>

Methods:

- <code title="post /notifications">client.notifications.<a href="./src/resources/notifications.ts">create</a>({ ...params }) -> NotificationCreateResponse</code>

# Disputes

Types:

- <code><a href="./src/resources/disputes.ts">Dispute</a></code>
- <code><a href="./src/resources/disputes.ts">DisputeStatuses</a></code>
- <code><a href="./src/resources/disputes.ts">DisputeListResponse</a></code>

Methods:

- <code title="get /disputes/{id}">client.disputes.<a href="./src/resources/disputes.ts">retrieve</a>(id) -> Dispute</code>
- <code title="get /disputes">client.disputes.<a href="./src/resources/disputes.ts">list</a>({ ...params }) -> DisputeListResponsesCursorPage</code>
- <code title="post /disputes/{id}/submit_evidence">client.disputes.<a href="./src/resources/disputes.ts">submitEvidence</a>(id) -> Dispute</code>
- <code title="post /disputes/{id}/update_evidence">client.disputes.<a href="./src/resources/disputes.ts">updateEvidence</a>(id, { ...params }) -> Dispute</code>

# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">PaymentProvider</a></code>
- <code><a href="./src/resources/refunds.ts">RefundReferenceStatus</a></code>
- <code><a href="./src/resources/refunds.ts">RefundReferenceType</a></code>
- <code><a href="./src/resources/refunds.ts">RefundStatus</a></code>
- <code><a href="./src/resources/refunds.ts">RefundRetrieveResponse</a></code>
- <code><a href="./src/resources/refunds.ts">RefundListResponse</a></code>

Methods:

- <code title="get /refunds/{id}">client.refunds.<a href="./src/resources/refunds.ts">retrieve</a>(id) -> RefundRetrieveResponse</code>
- <code title="get /refunds">client.refunds.<a href="./src/resources/refunds.ts">list</a>({ ...params }) -> RefundListResponsesCursorPage</code>

# Withdrawals

Types:

- <code><a href="./src/resources/withdrawals.ts">Withdrawal</a></code>
- <code><a href="./src/resources/withdrawals.ts">WithdrawalFeeTypes</a></code>
- <code><a href="./src/resources/withdrawals.ts">WithdrawalSpeeds</a></code>
- <code><a href="./src/resources/withdrawals.ts">WithdrawalStatus</a></code>
- <code><a href="./src/resources/withdrawals.ts">WithdrawalListResponse</a></code>

Methods:

- <code title="post /withdrawals">client.withdrawals.<a href="./src/resources/withdrawals.ts">create</a>({ ...params }) -> Withdrawal</code>
- <code title="get /withdrawals/{id}">client.withdrawals.<a href="./src/resources/withdrawals.ts">retrieve</a>(id) -> Withdrawal</code>
- <code title="get /withdrawals">client.withdrawals.<a href="./src/resources/withdrawals.ts">list</a>({ ...params }) -> WithdrawalListResponsesCursorPage</code>

# AccountLinks

Types:

- <code><a href="./src/resources/account-links.ts">AccountLinkCreateResponse</a></code>

Methods:

- <code title="post /account_links">client.accountLinks.<a href="./src/resources/account-links.ts">create</a>({ ...params }) -> AccountLinkCreateResponse</code>

# SetupIntents

Types:

- <code><a href="./src/resources/setup-intents.ts">SetupIntent</a></code>
- <code><a href="./src/resources/setup-intents.ts">SetupIntentStatus</a></code>
- <code><a href="./src/resources/setup-intents.ts">SetupIntentListResponse</a></code>

Methods:

- <code title="get /setup_intents/{id}">client.setupIntents.<a href="./src/resources/setup-intents.ts">retrieve</a>(id) -> SetupIntent</code>
- <code title="get /setup_intents">client.setupIntents.<a href="./src/resources/setup-intents.ts">list</a>({ ...params }) -> SetupIntentListResponsesCursorPage</code>

# PaymentMethods

Types:

- <code><a href="./src/resources/payment-methods.ts">PaymentMethodRetrieveResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodListResponse</a></code>

Methods:

- <code title="get /payment_methods/{id}">client.paymentMethods.<a href="./src/resources/payment-methods.ts">retrieve</a>(id, { ...params }) -> PaymentMethodRetrieveResponse</code>
- <code title="get /payment_methods">client.paymentMethods.<a href="./src/resources/payment-methods.ts">list</a>({ ...params }) -> PaymentMethodListResponsesCursorPage</code>

# FeeMarkups

Types:

- <code><a href="./src/resources/fee-markups.ts">FeeMarkupType</a></code>
- <code><a href="./src/resources/fee-markups.ts">FeeMarkupCreateResponse</a></code>
- <code><a href="./src/resources/fee-markups.ts">FeeMarkupListResponse</a></code>
- <code><a href="./src/resources/fee-markups.ts">FeeMarkupDeleteResponse</a></code>

Methods:

- <code title="post /fee_markups">client.feeMarkups.<a href="./src/resources/fee-markups.ts">create</a>({ ...params }) -> FeeMarkupCreateResponse</code>
- <code title="get /fee_markups">client.feeMarkups.<a href="./src/resources/fee-markups.ts">list</a>({ ...params }) -> FeeMarkupListResponsesCursorPage</code>
- <code title="delete /fee_markups/{id}">client.feeMarkups.<a href="./src/resources/fee-markups.ts">delete</a>(id) -> FeeMarkupDeleteResponse</code>

# PayoutMethods

Types:

- <code><a href="./src/resources/payout-methods.ts">PayoutDestinationCategory</a></code>
- <code><a href="./src/resources/payout-methods.ts">PayoutMethodRetrieveResponse</a></code>
- <code><a href="./src/resources/payout-methods.ts">PayoutMethodListResponse</a></code>

Methods:

- <code title="get /payout_methods/{id}">client.payoutMethods.<a href="./src/resources/payout-methods.ts">retrieve</a>(id) -> PayoutMethodRetrieveResponse</code>
- <code title="get /payout_methods">client.payoutMethods.<a href="./src/resources/payout-methods.ts">list</a>({ ...params }) -> PayoutMethodListResponsesCursorPage</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">VerificationErrorCode</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationStatus</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationRetrieveResponse</a></code>

Methods:

- <code title="get /verifications/{id}">client.verifications.<a href="./src/resources/verifications.ts">retrieve</a>(id) -> VerificationRetrieveResponse</code>

# Leads

Types:

- <code><a href="./src/resources/leads.ts">Lead</a></code>
- <code><a href="./src/resources/leads.ts">LeadListResponse</a></code>

Methods:

- <code title="post /leads">client.leads.<a href="./src/resources/leads.ts">create</a>({ ...params }) -> Lead</code>
- <code title="get /leads/{id}">client.leads.<a href="./src/resources/leads.ts">retrieve</a>(id) -> Lead</code>
- <code title="patch /leads/{id}">client.leads.<a href="./src/resources/leads.ts">update</a>(id, { ...params }) -> Lead</code>
- <code title="get /leads">client.leads.<a href="./src/resources/leads.ts">list</a>({ ...params }) -> LeadListResponsesCursorPage</code>

# Topups

Types:

- <code><a href="./src/resources/topups.ts">TopupCreateResponse</a></code>

Methods:

- <code title="post /topups">client.topups.<a href="./src/resources/topups.ts">create</a>({ ...params }) -> TopupCreateResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">UploadStatus</a></code>
- <code><a href="./src/resources/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>

Methods:

- <code title="post /files">client.files.<a href="./src/resources/files.ts">create</a>({ ...params }) -> FileCreateResponse</code>
- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(id) -> FileRetrieveResponse</code>

# CompanyTokenTransactions

Types:

- <code><a href="./src/resources/company-token-transactions.ts">CompanyTokenTransaction</a></code>
- <code><a href="./src/resources/company-token-transactions.ts">CompanyTokenTransactionType</a></code>
- <code><a href="./src/resources/company-token-transactions.ts">CompanyTokenTransactionListResponse</a></code>

Methods:

- <code title="post /company_token_transactions">client.companyTokenTransactions.<a href="./src/resources/company-token-transactions.ts">create</a>({ ...params }) -> CompanyTokenTransaction</code>
- <code title="get /company_token_transactions/{id}">client.companyTokenTransactions.<a href="./src/resources/company-token-transactions.ts">retrieve</a>(id) -> CompanyTokenTransaction</code>
- <code title="get /company_token_transactions">client.companyTokenTransactions.<a href="./src/resources/company-token-transactions.ts">list</a>({ ...params }) -> CompanyTokenTransactionListResponsesCursorPage</code>

# DmMembers

Types:

- <code><a href="./src/resources/dm-members.ts">DmFeedMemberNotificationPreferences</a></code>
- <code><a href="./src/resources/dm-members.ts">DmFeedMemberStatuses</a></code>
- <code><a href="./src/resources/dm-members.ts">DmMember</a></code>
- <code><a href="./src/resources/dm-members.ts">DmMemberListResponse</a></code>
- <code><a href="./src/resources/dm-members.ts">DmMemberDeleteResponse</a></code>

Methods:

- <code title="post /dm_members">client.dmMembers.<a href="./src/resources/dm-members.ts">create</a>({ ...params }) -> DmMember</code>
- <code title="get /dm_members/{id}">client.dmMembers.<a href="./src/resources/dm-members.ts">retrieve</a>(id) -> DmMember</code>
- <code title="patch /dm_members/{id}">client.dmMembers.<a href="./src/resources/dm-members.ts">update</a>(id, { ...params }) -> DmMember</code>
- <code title="get /dm_members">client.dmMembers.<a href="./src/resources/dm-members.ts">list</a>({ ...params }) -> DmMemberListResponsesCursorPage</code>
- <code title="delete /dm_members/{id}">client.dmMembers.<a href="./src/resources/dm-members.ts">delete</a>(id) -> DmMemberDeleteResponse</code>

# AIChats

Types:

- <code><a href="./src/resources/ai-chats.ts">AIChat</a></code>
- <code><a href="./src/resources/ai-chats.ts">AIChatListResponse</a></code>
- <code><a href="./src/resources/ai-chats.ts">AIChatDeleteResponse</a></code>

Methods:

- <code title="post /ai_chats">client.aiChats.<a href="./src/resources/ai-chats.ts">create</a>({ ...params }) -> AIChat</code>
- <code title="get /ai_chats/{id}">client.aiChats.<a href="./src/resources/ai-chats.ts">retrieve</a>(id) -> AIChat</code>
- <code title="patch /ai_chats/{id}">client.aiChats.<a href="./src/resources/ai-chats.ts">update</a>(id, { ...params }) -> AIChat</code>
- <code title="get /ai_chats">client.aiChats.<a href="./src/resources/ai-chats.ts">list</a>({ ...params }) -> AIChatListResponsesCursorPage</code>
- <code title="delete /ai_chats/{id}">client.aiChats.<a href="./src/resources/ai-chats.ts">delete</a>(id) -> AIChatDeleteResponse</code>

# DmChannels

Types:

- <code><a href="./src/resources/dm-channels.ts">DmChannel</a></code>
- <code><a href="./src/resources/dm-channels.ts">DmChannelListResponse</a></code>
- <code><a href="./src/resources/dm-channels.ts">DmChannelDeleteResponse</a></code>

Methods:

- <code title="post /dm_channels">client.dmChannels.<a href="./src/resources/dm-channels.ts">create</a>({ ...params }) -> DmChannel</code>
- <code title="get /dm_channels/{id}">client.dmChannels.<a href="./src/resources/dm-channels.ts">retrieve</a>(id) -> DmChannel</code>
- <code title="patch /dm_channels/{id}">client.dmChannels.<a href="./src/resources/dm-channels.ts">update</a>(id, { ...params }) -> DmChannel</code>
- <code title="get /dm_channels">client.dmChannels.<a href="./src/resources/dm-channels.ts">list</a>({ ...params }) -> DmChannelListResponsesCursorPage</code>
- <code title="delete /dm_channels/{id}">client.dmChannels.<a href="./src/resources/dm-channels.ts">delete</a>(id) -> DmChannelDeleteResponse</code>

# DisputeAlerts

Types:

- <code><a href="./src/resources/dispute-alerts.ts">DisputeAlertType</a></code>
- <code><a href="./src/resources/dispute-alerts.ts">DisputeAlertRetrieveResponse</a></code>
- <code><a href="./src/resources/dispute-alerts.ts">DisputeAlertListResponse</a></code>

Methods:

- <code title="get /dispute_alerts/{id}">client.disputeAlerts.<a href="./src/resources/dispute-alerts.ts">retrieve</a>(id) -> DisputeAlertRetrieveResponse</code>
- <code title="get /dispute_alerts">client.disputeAlerts.<a href="./src/resources/dispute-alerts.ts">list</a>({ ...params }) -> DisputeAlertListResponsesCursorPage</code>
