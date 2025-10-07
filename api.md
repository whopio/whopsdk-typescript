# Shared

Types:

- <code><a href="./src/resources/shared.ts">AccessPassType</a></code>
- <code><a href="./src/resources/shared.ts">App</a></code>
- <code><a href="./src/resources/shared.ts">AppStatuses</a></code>
- <code><a href="./src/resources/shared.ts">BusinessTypes</a></code>
- <code><a href="./src/resources/shared.ts">CollectionMethod</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteraction</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteractionListItem</a></code>
- <code><a href="./src/resources/shared.ts">Currency</a></code>
- <code><a href="./src/resources/shared.ts">CustomCta</a></code>
- <code><a href="./src/resources/shared.ts">Direction</a></code>
- <code><a href="./src/resources/shared.ts">Entry</a></code>
- <code><a href="./src/resources/shared.ts">EntryStatus</a></code>
- <code><a href="./src/resources/shared.ts">ForumPost</a></code>
- <code><a href="./src/resources/shared.ts">GlobalAffiliateStatus</a></code>
- <code><a href="./src/resources/shared.ts">IndustryTypes</a></code>
- <code><a href="./src/resources/shared.ts">Invoice</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceListItem</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceStatus</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>
- <code><a href="./src/resources/shared.ts">Plan</a></code>
- <code><a href="./src/resources/shared.ts">PlanType</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductListItem</a></code>
- <code><a href="./src/resources/shared.ts">ReleaseMethod</a></code>
- <code><a href="./src/resources/shared.ts">TaxType</a></code>
- <code><a href="./src/resources/shared.ts">Visibility</a></code>
- <code><a href="./src/resources/shared.ts">VisibilityFilter</a></code>

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
