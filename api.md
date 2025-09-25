# Shared

Types:

- <code><a href="./src/resources/shared.ts">AccessPass</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteraction</a></code>
- <code><a href="./src/resources/shared.ts">Invoice</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">CollectionMethod</a></code>
- <code><a href="./src/resources/invoices.ts">Currency</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceStatus</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse | null</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> Invoice</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>
- <code title="post /invoices/{id}/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>(id) -> InvoiceVoidResponse | null</code>

# CourseLessonInteractions

Types:

- <code><a href="./src/resources/course-lesson-interactions.ts">CourseLessonInteractionListResponse</a></code>

Methods:

- <code title="get /course_lesson_interactions/{id}">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">retrieve</a>(id) -> CourseLessonInteraction</code>
- <code title="get /course_lesson_interactions">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">list</a>({ ...params }) -> CourseLessonInteractionListResponse</code>

# AccessPasses

Types:

- <code><a href="./src/resources/access-passes.ts">BusinessTypes</a></code>
- <code><a href="./src/resources/access-passes.ts">IndustryTypes</a></code>
- <code><a href="./src/resources/access-passes.ts">AccessPassListResponse</a></code>

Methods:

- <code title="get /access_passes/{id}">client.accessPasses.<a href="./src/resources/access-passes.ts">retrieve</a>(id) -> AccessPass</code>
- <code title="get /access_passes">client.accessPasses.<a href="./src/resources/access-passes.ts">list</a>({ ...params }) -> AccessPassListResponse</code>

# Companies

Methods:

- <code title="get /companies/{id}">client.companies.<a href="./src/resources/companies.ts">retrieve</a>(id) -> Company</code>
