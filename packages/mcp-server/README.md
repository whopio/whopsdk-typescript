# Whopsdk TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/whopsdk-typescript.git
cd whopsdk-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export WHOP_API_KEY="My API Key"
export WHOP_WEBHOOK_SECRET="My Webhook Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y whopsdk-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "whopsdk_api": {
      "command": "node",
      "args": ["/path/to/local/whopsdk-typescript/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "WHOP_API_KEY": "My API Key",
        "WHOP_WEBHOOK_SECRET": "My Webhook Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

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
    "whopsdk_api": {
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
import { server, endpoints, init } from "whopsdk-mcp/server";

// import a specific tool
import createApps from "whopsdk-mcp/tools/apps/create-apps";

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

  - `course_lesson_interaction:read`
  - `courses:read`

- `list_course_lesson_interactions` (`read`): Lists course lesson interactions

  Required permissions:

  - `course_lesson_interaction:read`
  - `courses:read`

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

- `retrieve_companies` (`read`): Retrieves an company by ID

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

- `retrieve_ledger_accounts` (`read`): Retrieves a ledger account by ID

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

- `create_checkout_configurations` (`write`): Creates a new checkout session

  Required permissions:

  - `checkout_configuration:create`
  - `plan:create`

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

- `list_messages` (`read`): Lists messages inside a channel

  Required permissions:

  - `chat:read`

### Resource `chat_channels`:

- `retrieve_chat_channels` (`read`): Retrieves a chat channel

  Required permissions:

  - `chat:read`

- `list_chat_channels` (`read`): Lists chat channels inside a company

  Required permissions:

  - `chat:read`

### Resource `users`:

- `retrieve_users` (`read`): Retrieves a user by ID or username

### Resource `payments`:

- `retrieve_payments` (`read`): Retrieves a payment by ID

  Required permissions:

  - `payment:basic:read`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `promo_code:basic:read`

- `list_payments` (`read`): Lists payments

  Required permissions:

  - `payment:basic:read`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `promo_code:basic:read`

- `refund_payments` (`write`): Refunds a payment

  Required permissions:

  - `payment:manage`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `promo_code:basic:read`

- `retry_payments` (`write`): Retries a payment

  Required permissions:

  - `payment:manage`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `promo_code:basic:read`

- `void_payments` (`write`): Voids a payment

  Required permissions:

  - `payment:manage`
  - `plan:basic:read`
  - `access_pass:basic:read`
  - `member:email:read`
  - `member:basic:read`
  - `promo_code:basic:read`

### Resource `support_channels`:

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
