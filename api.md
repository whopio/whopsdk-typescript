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
- <code><a href="./src/resources/shared.ts">GlobalAffiliateStatus</a></code>
- <code><a href="./src/resources/shared.ts">IndustryTypes</a></code>
- <code><a href="./src/resources/shared.ts">Invoice</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceListItem</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceStatus</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>
- <code><a href="./src/resources/shared.ts">PlanType</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductListItem</a></code>
- <code><a href="./src/resources/shared.ts">ReleaseMethod</a></code>
- <code><a href="./src/resources/shared.ts">Visibility</a></code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>

Methods:

- <code title="post /apps">client.apps.<a href="./src/resources/apps.ts">create</a>({ ...params }) -> App | null</code>
- <code title="get /apps/{id}">client.apps.<a href="./src/resources/apps.ts">retrieve</a>(id) -> App | null</code>
- <code title="patch /apps/{id}">client.apps.<a href="./src/resources/apps.ts">update</a>(id, { ...params }) -> App | null</code>
- <code title="get /apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponsesCursorPage</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse | null</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> Invoice | null</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListItemsCursorPage</code>
- <code title="post /invoices/{id}/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>(id) -> InvoiceVoidResponse | null</code>

# CourseLessonInteractions

Methods:

- <code title="get /course_lesson_interactions/{id}">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">retrieve</a>(id) -> CourseLessonInteraction | null</code>
- <code title="get /course_lesson_interactions">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">list</a>({ ...params }) -> CourseLessonInteractionListItemsCursorPage</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductDeleteResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> Product | null</code>
- <code title="get /products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> Product | null</code>
- <code title="patch /products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> Product | null</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListItemsCursorPage</code>
- <code title="delete /products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(id) -> ProductDeleteResponse | null</code>

# Companies

Methods:

- <code title="get /companies/{id}">client.companies.<a href="./src/resources/companies.ts">retrieve</a>(id) -> Company | null</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">InvoiceCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoicePaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoicePastDueWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InvoiceVoidedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>
