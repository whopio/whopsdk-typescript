# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse | null</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>
- <code title="post /invoices/{id}/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>(id) -> InvoiceVoidResponse | null</code>

# CourseLessonInteractions

Types:

- <code><a href="./src/resources/course-lesson-interactions.ts">CourseLessonInteractionRetrieveResponse</a></code>
- <code><a href="./src/resources/course-lesson-interactions.ts">CourseLessonInteractionListResponse</a></code>

Methods:

- <code title="get /course_lesson_interactions/{id}">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">retrieve</a>(id) -> CourseLessonInteractionRetrieveResponse</code>
- <code title="get /course_lesson_interactions">client.courseLessonInteractions.<a href="./src/resources/course-lesson-interactions.ts">list</a>({ ...params }) -> CourseLessonInteractionListResponse</code>
