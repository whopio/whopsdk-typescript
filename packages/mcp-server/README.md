# Whop TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export WHOP_API_KEY="My API Key"
export WHOP_WEBHOOK_SECRET="My Webhook Key"
export WHOP_APP_ID="app_xxxxxxxxxxxxxx"
npx -y @whop/mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "whop_sdk_api": {
      "command": "npx",
      "args": ["-y", "@whop/mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "WHOP_API_KEY": "My API Key",
        "WHOP_WEBHOOK_SECRET": "My Webhook Key",
        "WHOP_APP_ID": "app_xxxxxxxxxxxxxx"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=@whop/mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB3aG9wL21jcCJdLCJlbnYiOnsiV0hPUF9BUElfS0VZIjoiU2V0IHlvdXIgV0hPUF9BUElfS0VZIGhlcmUuIiwiV0hPUF9XRUJIT09LX1NFQ1JFVCI6IlNldCB5b3VyIFdIT1BfV0VCSE9PS19TRUNSRVQgaGVyZS4iLCJXSE9QX0FQUF9JRCI6IlNldCB5b3VyIFdIT1BfQVBQX0lEIGhlcmUuIn19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40whop%2Fmcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40whop%2Fmcp%22%5D%2C%22env%22%3A%7B%22WHOP_API_KEY%22%3A%22Set%20your%20WHOP_API_KEY%20here.%22%2C%22WHOP_WEBHOOK_SECRET%22%3A%22Set%20your%20WHOP_WEBHOOK_SECRET%20here.%22%2C%22WHOP_APP_ID%22%3A%22Set%20your%20WHOP_APP_ID%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add --transport stdio whop_sdk_api --env WHOP_API_KEY="Your WHOP_API_KEY here." WHOP_WEBHOOK_SECRET="Your WHOP_WEBHOOK_SECRET here." WHOP_APP_ID="Your WHOP_APP_ID here." -- npx -y @whop/mcp
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ---------------- | ------------------------ | --------------- |
| `x-whop-api-key` | `apiKey` | AppApiKey |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "whop_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@whop/mcp/server";

// import a specific tool
import createApps from "@whop/mcp/tools/apps/create-apps";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createApps, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `apps`:

- `create_apps` (`write`): Create a new App

  Required permissions:

  - `developer:create_app`
  - `developer:manage_api_key`

- `retrieve_apps` (`read`): Retrieves an app by ID

  Required permissions:

  - `developer:manage_api_key`

- `update_apps` (`write`): Update an existing App

  Required permissions:

  - `developer:update_app`
  - `developer:manage_api_key`

- `list_apps` (`read`): Fetches a list of apps

### Resource `invoices`:

- `create_invoices` (`write`): Creates an invoice

  Required permissions:

  - `invoice:create`
  - `plan:basic:read`

- `retrieve_invoices` (`read`): Retrieves an invoice by ID or token

  Required permissions:

  - `invoice:basic:read`
  - `plan:basic:read`

- `list_invoices` (`read`): Lists invoices

  Required permissions:

  - `invoice:basic:read`
  - `plan:basic:read`

- `void_invoices` (`write`): Void an invoice

  Required permissions:

  - `invoice:update`

### Resource `course_lesson_interactions`:

- `retrieve_course_lesson_interactions` (`read`): Retrieves a course lesson interaction by ID

  Required permissions:

  - `courses:read`
  - `course_analytics:read`

- `list_course_lesson_interactions` (`read`): Lists course lesson interactions

  Required permissions:

  - `courses:read`
  - `course_analytics:read`

### Resource `products`:

- `create_products` (`write`): Creates a new Product

  Required permissions:

  - `access_pass:create`
  - `access_pass:basic:read`

- `retrieve_products` (`read`): Retrieves a product by ID or route

  Required permissions:

  - `access_pass:basic:read`

- `update_products` (`write`): Updates an existing Product

  Required permissions:

  - `access_pass:update`
  - `access_pass:basic:read`

- `list_products` (`read`): Lists products for a company

  Required permissions:

  - `access_pass:basic:read`

- `delete_products` (`write`): Deletes an existing Product

  Required permissions:

  - `access_pass:delete`

### Resource `companies`:

- `create_companies` (`write`): Create a new sub company for your platform

  Required permissions:

  - `company:create_child`
  - `company:basic:read`

- `retrieve_companies` (`read`): Retrieves an company by ID or its url route

  Required permissions:

  - `company:basic:read`

- `list_companies` (`read`): Lists companies the current user has access to

  Required permissions:

  - `company:basic:read`

### Resource `plans`:

- `create_plans` (`write`): Create a new Plan

  Required permissions:

  - `plan:create`
  - `access_pass:basic:read`
  - `plan:basic:read`

- `retrieve_plans` (`read`): Retrieves a plan by ID

  Required permissions:

  - `plan:basic:read`

- `update_plans` (`write`): Update an existing Plan

  Required permissions:

  - `plan:update`
  - `access_pass:basic:read`
  - `plan:basic:read`

- `list_plans` (`read`): Lists plans for a company

  Required permissions:

  - `plan:basic:read`

- `delete_plans` (`write`): Delete an existing Plan

  Required permissions:

  - `plan:delete`

### Resource `entries`:

- `retrieve_entries` (`read`): Retrieves an entry by ID

  Required permissions:

  - `plan:waitlist:read`
  - `member:email:read`

- `list_entries` (`read`): Lists entries for a company

  Required permissions:

  - `plan:waitlist:read`
  - `member:email:read`

- `approve_entries` (`write`): Approve an entry

  Required permissions:

  - `plan:waitlist:manage`

- `deny_entries` (`write`): Deny an entry

  Required permissions:

  - `plan:waitlist:manage`
  - `plan:basic:read`
  - `member:email:read`

### Resource `forum_posts`:

- `create_forum_posts` (`write`): Create a new forum post

  Required permissions:

  - `forum:post:create`

- `retrieve_forum_posts` (`read`): Retrieves a forum post by ID

  Required permissions:

  - `forum:read`

- `update_forum_posts` (`write`): Update an existing forum post
- `list_forum_posts` (`read`): Lists forum posts

  Required permissions:

  - `forum:read`

### Resource `transfers`:

- `create_transfers` (`write`): Creates a new transfer between ledger accounts

  Required permissions:

  - `payout:transfer_funds`

- `retrieve_transfers` (`read`): Retrieves a transfer by ID

  Required permissions:

  - `payout:transfer:read`

- `list_transfers` (`read`): Lists transfers

  Required permissions:

  - `payout:transfer:read`

### Resource `ledger_accounts`:

- `retrieve_ledger_accounts` (`read`): Retrieves a ledger account by its ID, company ID or user ID

  Required permissions:

  - `company:balance:read`

### Resource `memberships`:

- `retrieve_memberships` (`read`): Retrieves a membership by ID or license key

  Required permissions:

  - `member:basic:read`

- `update_memberships` (`write`): Update a membership

  Required permissions:

  - `member:manage`
  - `member:basic:read`

- `list_memberships` (`read`): Lists memberships

  Required permissions:

  - `member:basic:read`

- `cancel_memberships` (`write`): Cancels a membership either immediately or at the end of the current billing period

  Required permissions:

  - `member:manage`
  - `member:basic:read`

- `pause_memberships` (`write`): Pauses a membership's payments

  Required permissions:

  - `member:manage`
  - `member:basic:read`

- `resume_memberships` (`write`): Resumes a membership's payments

  Required permissions:

  - `member:manage`
  - `member:basic:read`

### Resource `authorized_users`:

- `retrieve_authorized_users` (`read`): Retrieves a authorized user by ID

  Required permissions:

  - `company:authorized_user:read`
  - `member:email:read`

- `list_authorized_users` (`read`): Lists authorized users

  Required permissions:

  - `company:authorized_user:read`
  - `member:email:read`

### Resource `app_builds`:

- `create_app_builds` (`write`): Creates a new app build

  Required permissions:

  - `developer:manage_builds`

- `retrieve_app_builds` (`read`): Retrieves an app build by ID

  Required permissions:

  - `developer:manage_builds`

- `list_app_builds` (`read`): Lists app builds for an app

  Required permissions:

  - `developer:manage_builds`

- `promote_app_builds` (`write`): Promotes an app build to production

  Required permissions:

  - `developer:manage_builds`

### Resource `shipments`:

- `create_shipments` (`write`): Creates a new shipment

  Required permissions:

  - `shipment:create`
  - `payment:basic:read`

- `retrieve_shipments` (`read`): Retrieves a shipment by ID

  Required permissions:

  - `shipment:basic:read`
  - `payment:basic:read`

- `list_shipments` (`read`): Lists shipments for a payment

  Required permissions:

  - `shipment:basic:read`
  - `payment:basic:read`

### Resource `checkout_configurations`:

- `create_checkout_configurations` (`write`): Creates a new checkout configuration

  Required permissions:

  - `checkout_configuration:create`
  - `plan:create`
  - `access_pass:create`
  - `access_pass:update`
  - `checkout_configuration:basic:read`

- `retrieve_checkout_configurations` (`read`): Retrieves a checkout configuration by ID

  Required permissions:

  - `checkout_configuration:basic:read`

- `list_checkout_configurations` (`read`): Lists checkout configurations

  Required permissions:

  - `checkout_configuration:basic:read`

### Resource `messages`:

- `create_messages` (`write`): Creates a new message

  Required permissions:

  - `chat:message:create`

- `retrieve_messages` (`read`): Retrieves a message

  Required permissions:

  - `chat:read`

- `update_messages` (`write`): Updates an existing message
- `list_messages` (`read`): Lists messages inside a channel

  Required permissions:

  - `chat:read`

### Resource `chat_channels`:

- `retrieve_chat_channels` (`read`): Retrieves a chat channel

  Required permissions:

  - `chat:read`

- `update_chat_channels` (`write`): Updates a chat channel

  Required permissions:

  - `chat:moderate`

- `list_chat_channels` (`read`): Lists chat channels inside a company

  Required permissions:

  - `chat:read`

### Resource `users`:

- `retrieve_users` (`read`): Retrieves a user by ID or username
- `check_access_users` (`read`): Check if a user has access (and their access level) to a resource

### Resource `payments`:

- `retrieve_payments` (`read`): Retrieves a payment by ID

  Required permissions:

  - `payment:basic:read`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`
  - `promo_code:basic:read`

- `list_payments` (`read`): Lists payments

  Required permissions:

  - `payment:basic:read`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`
  - `promo_code:basic:read`

- `refund_payments` (`write`): Refunds a payment

  Required permissions:

  - `payment:manage`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`
  - `promo_code:basic:read`

- `retry_payments` (`write`): Retries a payment

  Required permissions:

  - `payment:manage`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`
  - `promo_code:basic:read`

- `void_payments` (`write`): Voids a payment

  Required permissions:

  - `payment:manage`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`
  - `promo_code:basic:read`

### Resource `support_channels`:

- `create_support_channels` (`write`): Create a new support channel for a user in a company. If one already exists, it will return the existing one.

  Required permissions:

  - `support_chat:create`

- `retrieve_support_channels` (`read`): Retrieves a support channel

  Required permissions:

  - `support_chat:read`

- `list_support_channels` (`read`): Lists chat channels inside a company

  Required permissions:

  - `support_chat:read`

### Resource `experiences`:

- `create_experiences` (`write`): Required permissions:
  - `experience:create`
- `retrieve_experiences` (`read`): Retrieves an experience by ID
- `update_experiences` (`write`): Required permissions:
  - `experience:update`
- `list_experiences` (`read`): Lists experiences for a company

  Required permissions:

  - `experience:hidden_experience:read`

- `delete_experiences` (`write`): Required permissions:
  - `experience:delete`
- `attach_experiences` (`write`): Adds an experience to an product, making it accessible to the product's customers.

  Required permissions:

  - `experience:attach`

- `detach_experiences` (`write`): Removes an experience from an product, making it inaccessible to the product's customers.

  Required permissions:

  - `experience:detach`

- `duplicate_experiences` (`write`): Duplicates an existing experience. The name will be copied, unless provided. The new experience will be attached to the same products as the original experience.
  If duplicating a Forum or Chat experience, the new experience will have the same settings as the original experience, e.g. who can post, who can comment, etc.
  No content, e.g. posts, messages, lessons from within the original experience will be copied.

  Required permissions:

  - `experience:create`

### Resource `reactions`:

- `create_reactions` (`write`): Creates a new reaction

  Required permissions:

  - `chat:read`

- `retrieve_reactions` (`read`): Retrieves a reaction

  Required permissions:

  - `chat:read`

- `list_reactions` (`read`): Lists reactions for a post or a message

  Required permissions:

  - `chat:read`

### Resource `members`:

- `retrieve_members` (`read`): Retrieves a member of a company by ID

  Required permissions:

  - `member:basic:read`
  - `member:email:read`
  - `member:phone:read`

- `list_members` (`read`): List the members of a company

  Required permissions:

  - `member:basic:read`
  - `member:email:read`
  - `member:phone:read`

### Resource `forums`:

- `retrieve_forums` (`read`): Retrieves a forum

  Required permissions:

  - `forum:read`

- `update_forums` (`write`): Updates a forum

  Required permissions:

  - `forum:moderate`

- `list_forums` (`read`): Lists forums inside a company

  Required permissions:

  - `forum:read`

### Resource `promo_codes`:

- `create_promo_codes` (`write`): Create a new promo code for a product or plan

  Required permissions:

  - `promo_code:create`
  - `access_pass:basic:read`

- `retrieve_promo_codes` (`read`): Retrieves a promo code by ID

  Required permissions:

  - `promo_code:basic:read`
  - `access_pass:basic:read`

- `list_promo_codes` (`read`): Lists promo codes for a company

  Required permissions:

  - `promo_code:basic:read`
  - `access_pass:basic:read`

- `delete_promo_codes` (`write`): Archive a promo code, preventing further use

  Required permissions:

  - `promo_code:delete`

### Resource `courses`:

- `create_courses` (`write`): Creates a new course module in an experience

  Required permissions:

  - `courses:update`

- `retrieve_courses` (`read`): Retrieves a course by ID

  Required permissions:

  - `courses:read`

- `update_courses` (`write`): Updates a course

  Required permissions:

  - `courses:update`

- `list_courses` (`read`): Lists courses for an experience or company

  Required permissions:

  - `courses:read`

- `delete_courses` (`write`): Deletes a course

  Required permissions:

  - `courses:update`

### Resource `course_chapters`:

- `create_course_chapters` (`write`): Creates a new course chapter

  Required permissions:

  - `courses:update`

- `retrieve_course_chapters` (`read`): Retrieves a course chapter by ID

  Required permissions:

  - `courses:read`

- `update_course_chapters` (`write`): Updates a course chapter

  Required permissions:

  - `courses:update`

- `list_course_chapters` (`read`): Lists chapters for a course

  Required permissions:

  - `courses:read`

- `delete_course_chapters` (`write`): Deletes a course chapter

  Required permissions:

  - `courses:update`

### Resource `course_lessons`:

- `create_course_lessons` (`write`): Creates a new course lesson

  Required permissions:

  - `courses:update`

- `retrieve_course_lessons` (`read`): Retrieves a course lesson by ID

  Required permissions:

  - `courses:read`

- `update_course_lessons` (`write`): Updates a course lesson

  Required permissions:

  - `courses:update`

- `list_course_lessons` (`read`): Lists lessons for a course or chapter

  Required permissions:

  - `courses:read`

- `delete_course_lessons` (`write`): Deletes a course lesson

  Required permissions:

  - `courses:update`

- `mark_as_completed_course_lessons` (`write`): Marks a course lesson as completed
- `start_course_lessons` (`write`): Starts a course lesson
- `submit_assessment_course_lessons` (`write`): Submits answers for a course assessment

### Resource `reviews`:

- `retrieve_reviews` (`read`): Retrieve a review by its ID
- `list_reviews` (`read`): List all reviews

### Resource `course_students`:

- `retrieve_course_students` (`read`): Retrieves a course student by interaction ID

  Required permissions:

  - `courses:read`
  - `course_analytics:read`

- `list_course_students` (`read`): Lists students for a course

  Required permissions:

  - `courses:read`
  - `course_analytics:read`

### Resource `access_tokens`:

- `create_access_tokens` (`write`): Create a short-lived access token to authenticate API requests on behalf of a Company or User. This token should be used with Whop's web and mobile embedded components. You must provide either a company_id or a user_id argument, but not both.

### Resource `notifications`:

- `create_notifications` (`write`): Queues a notification to be sent to users in an experience or company team

### Resource `disputes`:

- `retrieve_disputes` (`read`): Retrieves a Dispute by ID

  Required permissions:

  - `payment:dispute:read`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `company:basic:read`
  - `payment:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`

- `list_disputes` (`read`): Lists disputes the current actor has access to

  Required permissions:

  - `payment:dispute:read`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `company:basic:read`
  - `payment:basic:read`

- `submit_evidence_disputes` (`write`): Submit a payment dispute to the payment processor for review. Once submitted, no further edits can be made.

  Required permissions:

  - `payment:dispute`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `company:basic:read`
  - `payment:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`

- `update_evidence_disputes` (`write`): Update a dispute with evidence data to attempt to win the dispute.

  Required permissions:

  - `payment:dispute`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `company:basic:read`
  - `payment:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`

### Resource `refunds`:

- `retrieve_refunds` (`read`): Retrieves a Refund by ID

  Required permissions:

  - `payment:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `member:phone:read`

- `list_refunds` (`read`): Lists Refunds for a payment.

  Required permissions:

  - `payment:basic:read`

### Resource `withdrawals`:

- `retrieve_withdrawals` (`read`): Retrieves a withdrawal by ID

  Required permissions:

  - `payout:withdrawal:read`

- `list_withdrawals` (`read`): Lists withdrawals

  Required permissions:

  - `payout:withdrawal:read`

### Resource `account_links`:

- `create_account_links` (`write`): Generates a url that a user can be directed to in order to access their sub-merchant account. For example, they can visit the hosted payouts portal or the hosted KYC onboarding flow.
