# Shared

Types:

- <code><a href="./src/resources/shared.ts">AccessPassType</a></code>
- <code><a href="./src/resources/shared.ts">App</a></code>
- <code><a href="./src/resources/shared.ts">AppBuild</a></code>
- <code><a href="./src/resources/shared.ts">AppBuildPlatforms</a></code>
- <code><a href="./src/resources/shared.ts">AppBuildStatuses</a></code>
- <code><a href="./src/resources/shared.ts">AppStatuses</a></code>
- <code><a href="./src/resources/shared.ts">AppViewType</a></code>
- <code><a href="./src/resources/shared.ts">AuthorizedUserRoles</a></code>
- <code><a href="./src/resources/shared.ts">BusinessTypes</a></code>
- <code><a href="./src/resources/shared.ts">CheckoutConfiguration</a></code>
- <code><a href="./src/resources/shared.ts">CollectionMethod</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteraction</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteractionListItem</a></code>
- <code><a href="./src/resources/shared.ts">Currency</a></code>
- <code><a href="./src/resources/shared.ts">CustomCta</a></code>
- <code><a href="./src/resources/shared.ts">Direction</a></code>
- <code><a href="./src/resources/shared.ts">DmsPostTypes</a></code>
- <code><a href="./src/resources/shared.ts">Entry</a></code>
- <code><a href="./src/resources/shared.ts">EntryStatus</a></code>
- <code><a href="./src/resources/shared.ts">ForumPost</a></code>
- <code><a href="./src/resources/shared.ts">FriendlyReceiptStatus</a></code>
- <code><a href="./src/resources/shared.ts">GlobalAffiliateStatus</a></code>
- <code><a href="./src/resources/shared.ts">IndustryTypes</a></code>
- <code><a href="./src/resources/shared.ts">Invoice</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceListItem</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceStatus</a></code>
- <code><a href="./src/resources/shared.ts">Membership</a></code>
- <code><a href="./src/resources/shared.ts">MembershipStatus</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>
- <code><a href="./src/resources/shared.ts">Payment</a></code>
- <code><a href="./src/resources/shared.ts">Plan</a></code>
- <code><a href="./src/resources/shared.ts">PlanType</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductListItem</a></code>
- <code><a href="./src/resources/shared.ts">PromoType</a></code>
- <code><a href="./src/resources/shared.ts">ReceiptStatus</a></code>
- <code><a href="./src/resources/shared.ts">ReleaseMethod</a></code>
- <code><a href="./src/resources/shared.ts">Shipment</a></code>
- <code><a href="./src/resources/shared.ts">ShipmentCarrier</a></code>
- <code><a href="./src/resources/shared.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/shared.ts">ShipmentSubstatus</a></code>
- <code><a href="./src/resources/shared.ts">TaxType</a></code>
- <code><a href="./src/resources/shared.ts">Transfer</a></code>
- <code><a href="./src/resources/shared.ts">Visibility</a></code>
- <code><a href="./src/resources/shared.ts">VisibilityFilter</a></code>
- <code><a href="./src/resources/shared.ts">WhoCanPost</a></code>
- <code><a href="./src/resources/shared.ts">WhoCanReact</a></code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>

Methods:

- <code title="post /apps">client.apps.<a href="./src/resources/apps.ts">create</a>({ ...params }) -> App</code>
- <code title="get /apps/{id}">client.apps.<a href="./src/resources/apps.ts">retrieve</a>(id) -> App</code>
- <code title="patch /apps/{id}">client.apps.<a href="./src/resources/apps.ts">update</a>(id, { ...params }) -> App</code>
- <code title="get /apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponsesCursorPage</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> Invoice</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListItemsCursorPage</code>
- <code title="post /invoices/{id}/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>(id) -> InvoiceVoidResponse</code>

# CourseLessonInteractions

Methods:

- <code title="get /course_lesson_interactions/{id}">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">retrieve</a>(id) -> CourseLessonInteraction</code>
- <code title="get /course_lesson_interactions">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">list</a>({ ...params }) -> CourseLessonInteractionListItemsCursorPage</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> Product</code>
- <code title="patch /products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListItemsCursorPage</code>
- <code title="delete /products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(id) -> ProductDeleteResponse</code>

# Companies

Methods:

- <code title="get /companies/{id}">client.companies.<a href="./src/resources/companies.ts">retrieve</a>(id) -> Company</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">InvoiceCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoicePaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoicePastDueWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoiceVoidedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

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

- <code><a href="./src/resources/forum-posts.ts">ForumPostListResponse</a></code>

Methods:

- <code title="post /forum_posts">client.forumPosts.<a href="./src/resources/forum-posts.ts">create</a>({ ...params }) -> ForumPost</code>
- <code title="get /forum_posts/{id}">client.forumPosts.<a href="./src/resources/forum-posts.ts">retrieve</a>(id) -> ForumPost</code>
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

- <code><a href="./src/resources/memberships.ts">MembershipListResponse</a></code>

Methods:

- <code title="get /memberships/{id}">client.memberships.<a href="./src/resources/memberships.ts">retrieve</a>(id) -> Membership</code>
- <code title="patch /memberships/{id}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(id, { ...params }) -> Membership</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipListResponsesCursorPage</code>
- <code title="post /memberships/{id}/cancel">client.memberships.<a href="./src/resources/memberships.ts">cancel</a>(id, { ...params }) -> Membership</code>

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

- <code><a href="./src/resources/checkout-configurations.ts">CheckoutConfigurationListResponse</a></code>

Methods:

- <code title="post /checkout_configurations">client.checkoutConfigurations.<a href="./src/resources/checkout-configurations.ts">create</a>({ ...params }) -> CheckoutConfiguration</code>
- <code title="get /checkout_configurations/{id}">client.checkoutConfigurations.<a href="./src/resources/checkout-configurations.ts">retrieve</a>(id) -> CheckoutConfiguration</code>
- <code title="get /checkout_configurations">client.checkoutConfigurations.<a href="./src/resources/checkout-configurations.ts">list</a>({ ...params }) -> CheckoutConfigurationListResponsesCursorPage</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /messages/{id}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(id) -> MessageRetrieveResponse</code>
- <code title="get /messages">client.messages.<a href="./src/resources/messages.ts">list</a>({ ...params }) -> MessageListResponsesCursorPage</code>

# ChatChannels

Types:

- <code><a href="./src/resources/chat-channels.ts">ChatChannelRetrieveResponse</a></code>
- <code><a href="./src/resources/chat-channels.ts">ChatChannelListResponse</a></code>

Methods:

- <code title="get /chat_channels/{id}">client.chatChannels.<a href="./src/resources/chat-channels.ts">retrieve</a>(id) -> ChatChannelRetrieveResponse</code>
- <code title="get /chat_channels">client.chatChannels.<a href="./src/resources/chat-channels.ts">list</a>({ ...params }) -> ChatChannelListResponsesCursorPage</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="get /payments/{id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(id) -> Payment</code>
- <code title="get /payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponsesCursorPage</code>
- <code title="post /payments/{id}/refund">client.payments.<a href="./src/resources/payments.ts">refund</a>(id, { ...params }) -> Payment</code>
- <code title="post /payments/{id}/retry">client.payments.<a href="./src/resources/payments.ts">retry</a>(id) -> Payment</code>
