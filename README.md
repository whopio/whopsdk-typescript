# Whop TypeScript SDK

Call the Whop API from TypeScript or JavaScript.

## Install

Use Node.js 18 or later.

```sh
npm install @whop/sdk@2.8.1
```

## Read products

Set `WHOP_API_KEY` to your sandbox API key.
Save this example as `read-products.mjs`.
It reads public products from the test environment.

```javascript
import { WhopClient, WhopEnvironment } from "@whop/sdk";

const client = new WhopClient({
    environment: WhopEnvironment.Sandbox,
    token: process.env.WHOP_API_KEY,
});
const products = await client.products.list({ first: 1 });
console.log(products.data.length);
```

Run the example:

```sh
node read-products.mjs
```

Pass your API key as `token` to create products.
Keep business API keys on your server.

[API reference](reference.md) · [API guide](https://docs.whop.com/developer/quickstart)
