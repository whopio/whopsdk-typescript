# Shared

Types:

- <code><a href="./src/resources/shared.ts">BusinessTypes</a></code>
- <code><a href="./src/resources/shared.ts">CollectionMethod</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteraction</a></code>
- <code><a href="./src/resources/shared.ts">CourseLessonInteractionListItem</a></code>
- <code><a href="./src/resources/shared.ts">Currency</a></code>
- <code><a href="./src/resources/shared.ts">IndustryTypes</a></code>
- <code><a href="./src/resources/shared.ts">Invoice</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceListItem</a></code>
- <code><a href="./src/resources/shared.ts">InvoiceStatus</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductListItem</a></code>

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

Methods:

- <code title="get /products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> Product | null</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListItemsCursorPage</code>

# Companies

Methods:

- <code title="get /companies/{id}">client.companies.<a href="./src/resources/companies.ts">retrieve</a>(id) -> Company | null</code>
