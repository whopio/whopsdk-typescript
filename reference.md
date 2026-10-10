# Reference
## AccessTokens
<details><summary><code>client.accessTokens.<a href="/src/api/resources/accessTokens/client/Client.ts">create</a>({ ...params }) -> Whop.AccessToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a short-lived access token for Whop's web and mobile embedded components. With API key authentication, pass `account_id` or `user_id`; with OAuth, the token is issued for the OAuth user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accessTokens.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAccessTokensRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccessTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AccountLinks
<details><summary><code>client.accountLinks.<a href="/src/api/resources/accountLinks/client/Client.ts">create</a>({ ...params }) -> Whop.AccountLink</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a URL that sends a sub-merchant to a hosted Whop page, such as the payouts dashboard or the KYC onboarding flow. Requires an API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountLinks.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    refresh_url: "refresh_url",
    return_url: "return_url",
    use_case: "account_onboarding"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAccountLinksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountLinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts
<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Account, Whop.ListAccountsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists accounts visible to the credential. User tokens return the user's business accounts; Account API keys return the requesting account and its connected accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">create</a>({ ...params }) -> Whop.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an account. User tokens create business accounts; Account API keys create connected accounts. Tax fields (`tax_remitted_by`, `tax_type`, `product_tax_code_id`, `business_address`, `tax_identifiers`) are configured with Update Account, not at creation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">me</a>({ ...params }) -> Whop.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the account associated with the current Account API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.me();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.MeAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an account visible to the credential by ID or public route, including its crypto wallet.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a connected account directly owned by the authenticated platform account. The account must have no settled, pending, or reserved balance in any currency and no active, trialing, or past-due memberships. The account stops resolving immediately, and its products, plans, and team access are removed in the background; payment history is retained. Deletion cannot be undone through the API. This cannot delete the platform account itself or an account owned by another platform.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">update</a>({ ...params }) -> Whop.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an account. User tokens can update business accounts; Account API keys can update connected accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">formCompany</a>({ ...params }) -> Whop.FormCompanyAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts an LLC or C-Corp formation for a business account. The application is validated and the response returns a hosted checkout URL; once paid, the filing is submitted. Track progress through the account's [`company_formation`](/api-reference/beta/accounts/retrieve-account) field on Retrieve Account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.formCompany({
    id: "id",
    business_address: {
        city: "Austin",
        country: "US",
        line1: "4180 Burnet Rd",
        line2: "Suite 2",
        postal_code: "78756",
        state: "TX"
    },
    business_name: "Shine Time Auto Detailing",
    business_phone: "+15125550142",
    business_type: "brick_and_mortar",
    business_website: "https://shinetime.example",
    entity_suffix: "LLC",
    entity_type: "llc",
    expedite_ein: true,
    formation_state: "WY",
    founders: [{
            address: {
                city: "Austin",
                country: "US",
                line1: "907 Ridgemont Dr",
                line2: "Apt 4",
                postal_code: "78704",
                state: "TX"
            },
            date_of_birth: "1988-03-14",
            email: "marcus@shinetime.example",
            first_name: "Marcus",
            is_primary: true,
            last_name: "Webb",
            ownership_percentage: 100,
            phone: "+15125550142",
            roles: ["president"],
            ssn: "123-45-6789"
        }],
    industry_group: "automotive",
    industry_type: "car_wash",
    share_structure: {
        number_of_shares: 123,
        value: 123
    },
    use_registered_agent: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.FormCompanyAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">retryAdsPayment</a>({ ...params }) -> Whop.RetryAdsPaymentAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Queues one background retry of the account's failed ads payments across its campaigns, using the account's configured ads payment methods. A queued response does not mean payment succeeded; read each campaign's `delivery_status` and `issues` for the outcome. Successful settlement clears the payment block without changing a configured `active` or `paused` status; a legacy `payment_failed` status becomes `paused`. Returns an error when the account has no failed ads payments, or while a previous retry for the account is queued or running.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.retryAdsPayment({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetryAdsPaymentAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">suspend</a>({ ...params }) -> Whop.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Suspends a connected account directly owned by the authenticated platform account. This cannot suspend the platform account itself or an account owned by another platform.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.suspend({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SuspendAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">transferOwnership</a>({ ...params }) -> Whop.TransferOwnershipAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Transfers ownership of the account to another user, identified by user ID or email address. If the recipient already holds the owner role, ownership moves immediately; otherwise they get an invite and ownership moves when they accept.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.transferOwnership({
    id: "id",
    identifier: "marcus@shinetime.example"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.TransferOwnershipAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ad Campaigns
<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AdCampaign, Whop.ListAdCampaignsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the ad campaigns for an account, with stats over the requested window.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.adCampaigns.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.adCampaigns.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">create</a>({ ...params }) -> Whop.AdCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an ad campaign in `draft` status for an account. Nothing runs until you launch it by setting `status` to `active` with `PATCH /ad_campaigns/:id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.create({
    objective: "awareness",
    platform: "meta",
    title: "Now hiring mobile detailers \u2014 Austin"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AdCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single ad campaign with stats over the requested window.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAdCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an ad campaign and archives it on the ad platform (cascades to ad groups and ads).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">update</a>({ ...params }) -> Whop.AdCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an ad campaign's settings, or launches a draft campaign by setting `status` to `active`. The objective and desired cost per result are fixed at creation and cannot be changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">duplicate</a>({ ...params }) -> Whop.DuplicateAdCampaignsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates copies of the campaign in `duplicating` status and returns them; each copy transitions to `draft` once duplication completes. Poll each returned campaign until it leaves `duplicating` — a copy that could not be completed is deleted and returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.duplicate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DuplicateAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">pause</a>({ ...params }) -> Whop.AdCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses an active ad campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.pause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PauseAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">unpause</a>({ ...params }) -> Whop.AdCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes a paused ad campaign. Requires an ads payment method on the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.unpause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnpauseAdCampaignsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdCampaignsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ad Conversion Value Rules
<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AdConversionValueRule, Whop.ListAdConversionValueRulesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the conversion value rules you can read.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.adConversionValueRules.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.adConversionValueRules.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">create</a>({ ...params }) -> Whop.AdConversionValueRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates one rule covering every selected target and event combination. Active rules cannot overlap for the same platform and event. Customer prices and Whop revenue stay unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adConversionValueRules.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    adjustment_type: "fixed",
    events: [{
            event_name: "purchase"
        }],
    targets: [{
            platform: "tiktok",
            scope: "business"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AdConversionValueRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a conversion value rule with its targets, events, and value adjustment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adConversionValueRules.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAdConversionValueRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a rule and deactivates all its coverage. The rule's stored settings are preserved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adConversionValueRules.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">update</a>({ ...params }) -> Whop.AdConversionValueRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edits a rule without changing its status. Supplied `targets` or `events` replace that selection in full, and omitted fields stay unchanged. All changes succeed or fail together.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adConversionValueRules.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">pause</a>({ ...params }) -> Whop.AdConversionValueRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses the rule across all selected targets and events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adConversionValueRules.pause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PauseAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adConversionValueRules.<a href="/src/api/resources/adConversionValueRules/client/Client.ts">unpause</a>({ ...params }) -> Whop.AdConversionValueRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes the rule and automatically replaces overlapping selections in the same transaction. Other selections keep their values, and broader rules remain as defaults. Rules with no remaining selections are paused. Resuming an already-active rule makes no changes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adConversionValueRules.unpause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnpauseAdConversionValueRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdConversionValueRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ad Groups
<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AdGroup, Whop.ListAdGroupsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists ad groups for the account, newest first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.adGroups.list({
    ad_campaign_ids: ["adcamp_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.adGroups.list({
    ad_campaign_ids: ["adcamp_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">create</a>({ ...params }) -> Whop.AdGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an ad group (ad set) in a campaign.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.create({
    ad_campaign_id: "adcamp_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">estimateReach</a>({ ...params }) -> Whop.ReachEstimate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Estimates how many people a draft targeting spec can reach, before an ad group is created. The body takes the same targeting fields as creating an ad group, and nothing is persisted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.estimateReach({
    platform: "meta"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.EstimateReachAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">searchTargetingOptions</a>({ ...params }) -> Whop.SearchTargetingOptionsAdGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches the ad platform's targeting taxonomy for options to target an ad group with. Each result comes back in the exact shape the ad-group body accepts for its `type`, so it can be used in `detailed_targeting`, `regions`, or `languages` as-is.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.searchTargetingOptions({
    platform: "meta"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SearchTargetingOptionsAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AdGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an ad group, with performance stats for the window set by `stats_from` and `stats_to`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAdGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an ad group, removing it from the ad platform so it stops delivering.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">update</a>({ ...params }) -> Whop.AdGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an ad group's editable fields. Only the keys you send are changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">duplicate</a>({ ...params }) -> Whop.DuplicateAdGroupsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts copying an ad group and returns the copies in `duplicating` status. Poll each returned ad group until it leaves `duplicating`: it then takes the source's `active` or `paused` status, or, if the copy could not be completed, is deleted and returns 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.duplicate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DuplicateAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">pause</a>({ ...params }) -> Whop.AdGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses delivery of an ad group.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.pause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PauseAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adGroups.<a href="/src/api/resources/adGroups/client/Client.ts">unpause</a>({ ...params }) -> Whop.AdGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes delivery of a paused ad group.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adGroups.unpause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnpauseAdGroupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ad Pixels
<details><summary><code>client.adPixels.<a href="/src/api/resources/adPixels/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AdPixel, Whop.ListAdPixelsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the pixels you added for businesses whose campaigns you claimed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.adPixels.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.adPixels.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAdPixelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdPixelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adPixels.<a href="/src/api/resources/adPixels/client/Client.ts">create</a>({ ...params }) -> Whop.AdPixel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add your pixel for a business whose campaigns you claimed. Whop checks the access token with the ad platform, then sends the pixel the conversions credited to your claimed campaigns for that business. Each business takes one pixel, and each pixel can serve one business.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adPixels.create({
    access_token: "new-token",
    account_id: "biz_xxxxxxxxxxxxxx",
    external_id: "998877665544",
    platform: "meta"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAdPixelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdPixelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adPixels.<a href="/src/api/resources/adPixels/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AdPixel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adPixels.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAdPixelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdPixelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adPixels.<a href="/src/api/resources/adPixels/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAdPixelsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove the pixel and its access token. Whop stops sending it conversions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adPixels.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAdPixelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdPixelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.adPixels.<a href="/src/api/resources/adPixels/client/Client.ts">update</a>({ ...params }) -> Whop.AdPixel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the pixel's access token. Whop checks the new token with the ad platform and resumes deliveries to an `errored` pixel.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adPixels.update({
    id: "id",
    access_token: "new-token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAdPixelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdPixelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ads
<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Ad, Whop.ListAdsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the ads for an account, with stats over the requested window.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ads.list({
    ad_campaign_ids: ["adcamp_xxxxxxxxxxxxxx"],
    ad_group_ids: ["adgrp_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ads.list({
    ad_campaign_ids: ["adcamp_xxxxxxxxxxxxxx"],
    ad_group_ids: ["adgrp_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">create</a>({ ...params }) -> Whop.Ad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an ad in an ad group. Any campaign status other than `draft` launches the campaign, which requires an ads payment method on the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Ad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single ad with stats over the requested window.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAdsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an ad.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">update</a>({ ...params }) -> Whop.Ad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an ad's editable fields.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">duplicate</a>({ ...params }) -> Whop.DuplicateAdsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Copies an ad into its own ad group or into another one. Copies keep the source ad's active or paused state.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.duplicate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DuplicateAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">pause</a>({ ...params }) -> Whop.Ad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses an active ad.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.pause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PauseAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ads.<a href="/src/api/resources/ads/client/Client.ts">unpause</a>({ ...params }) -> Whop.Ad</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes a paused ad.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ads.unpause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnpauseAdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Affiliates
<details><summary><code>client.affiliates.<a href="/src/api/resources/affiliates/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AffiliateListItem, Whop.ListAffiliatesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the affiliates of an account.

Required permissions:
 - `affiliate:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.affiliates.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.affiliates.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAffiliatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AffiliatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.<a href="/src/api/resources/affiliates/client/Client.ts">create</a>({ ...params }) -> Whop.Affiliate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an affiliate for a user on an account. If the user is already an affiliate of the account, returns that affiliate, reactivating it if it was archived.

Required permissions:
 - `affiliate:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    user_identifier: "user_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAffiliatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AffiliatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.<a href="/src/api/resources/affiliates/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Affiliate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing affiliate.

Required permissions:
 - `affiliate:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.retrieve({
    id: "aff_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAffiliatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AffiliatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.<a href="/src/api/resources/affiliates/client/Client.ts">archive</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archives an affiliate. The affiliate that handles Whop marketplace referrals cannot be archived.

Required permissions:
 - `affiliate:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.archive({
    id: "aff_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ArchiveAffiliatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AffiliatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.<a href="/src/api/resources/affiliates/client/Client.ts">unarchive</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unarchives an archived affiliate.

Required permissions:
 - `affiliate:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.unarchive({
    id: "aff_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnarchiveAffiliatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AffiliatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AiChats
<details><summary><code>client.aiChats.<a href="/src/api/resources/aiChats/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AiChatListItem, Whop.ListAiChatsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of AI chat threads for the current authenticated user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.aiChats.list({
    first: 42,
    last: 42
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.aiChats.list({
    first: 42,
    last: 42
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAiChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiChats.<a href="/src/api/resources/aiChats/client/Client.ts">create</a>({ ...params }) -> Whop.AiChat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new AI chat thread and send the first message to the AI agent.

Required permissions:
 - `ai_chat:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiChats.create({
    message_text: "message_text"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAiChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiChats.<a href="/src/api/resources/aiChats/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AiChat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing AI chat.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiChats.retrieve({
    id: "aich_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAiChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiChats.<a href="/src/api/resources/aiChats/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an AI chat thread so it no longer appears in the user's chat list.

Required permissions:
 - `ai_chat:delete`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiChats.delete({
    id: "aich_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAiChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiChats.<a href="/src/api/resources/aiChats/client/Client.ts">update</a>({ ...params }) -> Whop.AiChat</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an AI chat's title, notification preferences, or associated account context.

Required permissions:
 - `ai_chat:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiChats.update({
    id: "aich_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAiChatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiChatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## API Keys
<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ApiKey, Whop.ListApiKeysResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the API keys of an account or app, newest first. Responses never include the full secret — only its obfuscated form.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.apiKeys.list({
    resource_id: "resource_id",
    resource_type: "account"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.apiKeys.list({
    resource_id: "resource_id",
    resource_type: "account"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">create</a>({ ...params }) -> Whop.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an API key for an account or app. The response is the only place the full `secret_key` is returned — store it immediately. Requires a user session; API keys cannot manage API keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.create({
    name: "Shine Time Booking (production)",
    permissions: {},
    resource_id: "biz_xxxxxxxxxxxxxx",
    resource_type: "account"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">listPermissions</a>() -> Whop.ListPermissionsApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the catalog of permission actions that can be granted to users, apps, and API keys. Use it to choose the `permissions` for an API key or to build a permission picker. Small and returned in full on one page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.listPermissions();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">retrieve</a>({ ...params }) -> Whop.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an API key with its effective permission grants. The full secret is never returned — rotate the key if it was lost.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently revokes an API key; requests using its secret stop authenticating immediately. Default and agent-backend keys cannot be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">update</a>({ ...params }) -> Whop.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an API key's name, permissions, API version, expiration, or IP allowlist. Fields that are omitted keep their current value; default keys cannot be modified.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">rotate</a>({ ...params }) -> Whop.ApiKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rotates the API key's secret, invalidating the previous secret immediately. The response is the only place the new `secret_key` is returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.rotate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RotateApiKeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Api Logs
<details><summary><code>client.apiLogs.<a href="/src/api/resources/apiLogs/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListApiLogsResponse.Data.Item, Whop.ListApiLogsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the requests served by Whop's API with the account's API keys, newest first — every surface (GraphQL, REST, and native /api/v1), reads and failed requests included.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.apiLogs.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.apiLogs.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListApiLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiLogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## App Builds
<details><summary><code>client.appBuilds.<a href="/src/api/resources/appBuilds/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AppBuild, Whop.ListAppBuildsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of build artifacts for an app, newest first, with optional platform, status, and creation-date filters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.appBuilds.list({
    app_id: "app_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.appBuilds.list({
    app_id: "app_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAppBuildsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppBuildsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.appBuilds.<a href="/src/api/resources/appBuilds/client/Client.ts">create</a>({ ...params }) -> Whop.AppBuild</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uploads a new build artifact for an app. Upload the file first with `POST /files` or a direct upload, then reference it in `attachment`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appBuilds.create({
    attachment: {},
    checksum: "xxxxxxxxxxxxxxx",
    platform: "ios"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAppBuildsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppBuildsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.appBuilds.<a href="/src/api/resources/appBuilds/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AppBuild</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing app build.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appBuilds.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAppBuildsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppBuildsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.appBuilds.<a href="/src/api/resources/appBuilds/client/Client.ts">promote</a>({ ...params }) -> Whop.AppBuild</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Promotes a draft or approved app build to production so it becomes the active version served to users. Draft builds enter review first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appBuilds.promote({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PromoteAppBuildsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppBuildsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Apps
<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AppListItem, Whop.ListAppsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists apps on the Whop platform: the app store's live apps, or — with `account_id` and developer access to that account — every app the account owns. Requires authentication except for Whop's public app and website discovery lists. Public website discovery includes built official blueprints (verified apps with a product) and built, live community blueprints that Whop recommends.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.apps.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.apps.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">create</a>({ ...params }) -> Whop.App</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a new app on the Whop developer platform. Apps provide custom experiences that can be added to products.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.create({
    name: "Shine Time Booking"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">retrieve</a>({ ...params }) -> Whop.App</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an app by ID, claimed route, active verified custom hostname, or proxy domain id. Authentication is optional; credential fields stay `null` unless you have the matching developer permission on the owning account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAppsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an app. The app stops resolving within seconds — a website's site stops serving, and any claimed subdomain is reserved for a month before it can be claimed again.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">update</a>({ ...params }) -> Whop.App</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the settings, metadata, or status of an app. Fields that are omitted keep their current value.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">deploy</a>({ ...params }) -> Whop.AppDeployment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Builds the app's current source and ships it. Returns the run it started, so the caller can render progress from this response and then follow it on the app's `deployment` field. Only one deployment runs per app at a time — calling this while one is in flight reports that run rather than starting a second, and calling it with nothing to publish reports that instead of starting one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.deploy({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeployAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">logs</a>({ ...params }) -> core.Page&lt;Whop.LogsAppsResponse.Data.Item, Whop.LogsAppsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a hosted app's server runtime logs, most recent first: console output, uncaught exceptions, and failed-request summaries captured on whop.site hosting. Logs are retained for 7 days.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.apps.logs({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.apps.logs({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.LogsAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">updatePermissions</a>({ ...params }) -> Whop.App</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the set of permissions the app requests from users when they install it. Requires a user session: the `developer:update_app_authorization` scope cannot be delegated to API keys. Sensitive permissions require step-up verification.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.updatePermissions({
    id: "id",
    requested_permissions: [{
            action: "company:basic:read",
            is_required: true,
            justification: "Reads basic account info to render the dashboard home."
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdatePermissionsAppsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Audiences
<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Audience, Whop.ListAudiencesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's custom and lookalike audiences.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.audiences.list({
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.audiences.list({
    account_id: "account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAudiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">create</a>({ ...params }) -> Whop.CreateAudiencesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom audience from a customer list, your account's Whop People data, or engagement with videos, lead forms, Instagram profiles, or Facebook pages, or a lookalike audience that reaches people similar to an existing one. Processing runs asynchronously. A custom audience returns one audience; a lookalike returns the requested similarity bands in `data`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    engagement: {
        include: [{
                object: "facebook_page",
                event: "engaged",
                external_account_id: "sacc_xxxxxxxxxxxxxx",
                retention_days: 30
            }],
        platform: "meta"
    },
    name: "Page engagers",
    source_type: "engagement"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAudiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteAudiencesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an audience so it is no longer available for targeting.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAudiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">update</a>({ ...params }) -> Whop.Audience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Renames an audience. For an audience built from People filters that keeps itself up to date, pass `filters` to replace them, which rebuilds membership immediately. Whether an audience auto refreshes is set when it is created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateAudiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">addPeople</a>({ ...params }) -> Whop.Audience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds users from a new CSV file to an existing uploaded custom audience. The file uses the audience's saved column mapping, processing happens in the background, and existing audience members remain unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.addPeople({
    id: "id",
    file_id: "file_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AddPeopleAudiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AuthorizedUsers
<details><summary><code>client.authorizedUsers.<a href="/src/api/resources/authorizedUsers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.AuthorizedUserListItem, Whop.ListAuthorizedUsersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authorized users on an account's team.

Required permissions:
 - `company:authorized_user:read`
 - `member:email:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.authorizedUsers.list({
    first: 42,
    last: 42,
    user_id: "user_xxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.authorizedUsers.list({
    first: 42,
    last: 42,
    user_id: "user_xxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListAuthorizedUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizedUsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.authorizedUsers.<a href="/src/api/resources/authorizedUsers/client/Client.ts">create</a>({ ...params }) -> Whop.AuthorizedUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a user to an account's team as an authorized user with the given role.

Required permissions:
 - `authorized_user:create`
 - `member:email:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authorizedUsers.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    role: "owner",
    user_id: "user_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateAuthorizedUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizedUsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.authorizedUsers.<a href="/src/api/resources/authorizedUsers/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AuthorizedUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing authorized user.

Required permissions:
 - `company:authorized_user:read`
 - `member:email:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authorizedUsers.retrieve({
    id: "ausr_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAuthorizedUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizedUsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.authorizedUsers.<a href="/src/api/resources/authorizedUsers/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes an authorized user from an account's team.

Required permissions:
 - `authorized_user:delete`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authorizedUsers.delete({
    id: "ausr_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteAuthorizedUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthorizedUsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Bounties
<details><summary><code>client.bounties.<a href="/src/api/resources/bounties/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.BountyListItem, Whop.ListBountiesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists bounties visible to the credential — for an account API key, the account's bounties including scheduled drafts; for a user token, the bounties the user can see and work.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.bounties.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.bounties.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListBountiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bounties.<a href="/src/api/resources/bounties/client/Client.ts">create</a>({ ...params }) -> Whop.Bounty</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a bounty and escrows its reward pool. Publishes immediately, or as a scheduled draft when you set `publish_at`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bounties.create({
    description: "Record one continuous pass of a full interior detail, dash to trunk, on a customer vehicle.",
    gross_reward_amount: 40,
    title: "Record interior detailing passes"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateBountiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bounties.<a href="/src/api/resources/bounties/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Bounty</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a bounty by ID. Authentication is optional: a request with no credential reads the bounty when it is publicly visible — published or completed, and not restricted to a private experience's members. Bounties outside the caller's scope, and bounties not publicly visible to an anonymous caller, return `404`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bounties.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveBountiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bounties.<a href="/src/api/resources/bounties/client/Client.ts">update</a>({ ...params }) -> Whop.Bounty</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a bounty. A published bounty accepts title, description, and country targeting while it is still open with nothing under review. A scheduled (not-yet-published) draft additionally accepts the reward, winner slots, and schedule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bounties.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateBountiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bounties.<a href="/src/api/resources/bounties/client/Client.ts">cancel</a>({ ...params }) -> Whop.Bounty</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a bounty. With no in-flight work, it cancels immediately and refunds the funder. Otherwise it stops new submissions and cancels once the in-flight work resolves and pays out. Repeating the request is a no-op. A bounty that already paid out every slot returns `400`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bounties.cancel({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CancelBountiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Bounty Submissions
<details><summary><code>client.bountySubmissions.<a href="/src/api/resources/bountySubmissions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.BountySubmission, Whop.ListBountySubmissionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists bounty submissions visible to the credential — for a user token, the submissions they authored plus those on bounties they posted; for an account API key, the submissions on the account's bounties. For the anonymous view of one bounty's reviewed work, use the submissions list under the bounty instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.bountySubmissions.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.bountySubmissions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListBountySubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountySubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bountySubmissions.<a href="/src/api/resources/bountySubmissions/client/Client.ts">create</a>({ ...params }) -> Whop.BountySubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a submission on a workforce bounty. Include a `deliverable` and the submission goes straight to review; create is the only step. For `data_capture` bounties, omit the deliverable: this starts a claimed attempt whose proof accumulates server-side, and `POST /bounty_submissions/:id/submit` sends it to review once complete. Requires a user credential — account API keys cannot author submissions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bountySubmissions.create({
    bounty_id: "bnty_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateBountySubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountySubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bountySubmissions.<a href="/src/api/resources/bountySubmissions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.BountySubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves one bounty submission the credential can see — one the caller authored, or one on a bounty they posted or their account owns. Reading another member's work on an account's bounty takes `account_id`, the same way the list does.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bountySubmissions.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveBountySubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountySubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bountySubmissions.<a href="/src/api/resources/bountySubmissions/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteBountySubmissionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels the caller's own active attempt on a bounty and discards any accumulated capture clips. Only the worker who started the attempt can cancel it — account API keys cannot.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bountySubmissions.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteBountySubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountySubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bountySubmissions.<a href="/src/api/resources/bountySubmissions/client/Client.ts">submit</a>({ ...params }) -> Whop.BountySubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a claimed attempt for review. A livestream attempt needs an ended proof stream and can attach a `deliverable`; a data capture attempt instead needs enough validated clip time and takes no payload. Only the worker who started the attempt can submit it — account API keys cannot.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bountySubmissions.submit({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SubmitBountySubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BountySubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CardTransactions
<details><summary><code>client.cardTransactions.<a href="/src/api/resources/cardTransactions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CardTransaction, Whop.ListCardTransactionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the card transactions of an account or a user, newest first. Covers every card the owner has ever had, including canceled cards and spend that predates a re-application, and team members only see transactions on the cards assigned to them. Pass `transaction_ids` to fetch specific transactions instead of paging for them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.cardTransactions.list({
    transaction_ids: ["citx_xxxxxxxxxxxxxx"],
    card_id: ["icrd_xxxxxxxxxxxxxx"],
    cardholder_id: ["user_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.cardTransactions.list({
    transaction_ids: ["citx_xxxxxxxxxxxxxx"],
    card_id: ["icrd_xxxxxxxxxxxxxx"],
    cardholder_id: ["user_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCardTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CardTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cardTransactions.<a href="/src/api/resources/cardTransactions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.CardTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single card transaction from any card the owner has ever had, including canceled cards. Team members can retrieve only transactions on the cards assigned to them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cardTransactions.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCardTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CardTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cards
<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">list</a>({ ...params }) -> Whop.ListCardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the Whop cards of an account or user, including ones still being set up. Team members only see the cards assigned to them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">create</a>({ ...params }) -> Whop.CreateCardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Issues a virtual card, or applies for card issuing. An account with no application files one here and gets back a `202`; call again to issue the card once it is approved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveCardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single card, including its `secrets` (card number, CVC, and PIN), which List Cards does not return.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cards.<a href="/src/api/resources/cards/client/Client.ts">update</a>({ ...params }) -> Whop.UpdateCardsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates, freezes, or cancels a card. Updating the card's name, billing address, or limits requires both `payout:account:update` and `company:balance:read`; a card's assigned holder may update their own card's pin and frozen state with any user token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cards.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateCardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cashback Rules
<details><summary><code>client.cashbackRules.<a href="/src/api/resources/cashbackRules/client/Client.ts">create</a>({ ...params }) -> Whop.CashbackRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a future-dated card cashback rule for your direct connected accounts, funded by the authenticated platform account. Creating a rule does not transfer funds; pay cashback out with `POST /cashback_rules/payout`. Requires `payout:transfer_funds`. Supports `Idempotency-Key` for safe retries.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashbackRules.create({
    rate_bps: 500,
    starts_at: "2026-01-01T12:00:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCashbackRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashbackRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cashbackRules.<a href="/src/api/resources/cashbackRules/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CashbackRule, Whop.ListCashbackRulesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the cashback rules funded by the authenticated platform account, including scheduled, expired, and discarded rules. Requires an account-scoped credential with `payout:transfer:read`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.cashbackRules.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.cashbackRules.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCashbackRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashbackRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cashbackRules.<a href="/src/api/resources/cashbackRules/client/Client.ts">payout</a>({ ...params }) -> Whop.CashbackPayout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pays out cashback on demand from the authenticated platform's available USD balance to its direct connected accounts. Covers completed, unpaid card transactions created before the request, each under its latest matching rule, which must be funded by the authenticated platform. Filters combine, and an empty body includes every eligible transaction. Payouts process in the background and amounts are calculated then, so the response confirms queuing, not payment. If a payout fails for insufficient funds, add USD to the platform's balance. Requires `payout:transfer_funds`. Supports `Idempotency-Key`, and overlapping requests cannot pay the same card transaction twice.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashbackRules.payout();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PayoutCashbackRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashbackRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cashbackRules.<a href="/src/api/resources/cashbackRules/client/Client.ts">update</a>({ ...params }) -> Whop.CashbackRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the merchant filters, description, or expiration of a cashback rule funded by the authenticated platform account; its start, rate, and accounts can't change. Omitted fields stay unchanged. Scheduled, active, and expired rules can be updated, but discarded rules can't. Updating a rule does not transfer funds. Requires `payout:transfer_funds`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cashbackRules.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateCashbackRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashbackRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ChatChannels
<details><summary><code>client.chatChannels.<a href="/src/api/resources/chatChannels/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ChatChannelListItem, Whop.ListChatChannelsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the chat channels in an account.

Required permissions:
 - `chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.chatChannels.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.chatChannels.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListChatChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chatChannels.<a href="/src/api/resources/chatChannels/client/Client.ts">retrieve</a>({ ...params }) -> Whop.ChatChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing chat channel.

Required permissions:
 - `chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatChannels.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveChatChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chatChannels.<a href="/src/api/resources/chatChannels/client/Client.ts">update</a>({ ...params }) -> Whop.ChatChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a chat channel's moderation settings, such as who can post, banned words, and media restrictions.

Required permissions:
 - `chat:moderate`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatChannels.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateChatChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Checkout Configurations
<details><summary><code>client.checkoutConfigurations.<a href="/src/api/resources/checkoutConfigurations/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListCheckoutConfigurationsResponse.Data.Item, Whop.ListCheckoutConfigurationsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists checkout configurations for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.checkoutConfigurations.list({
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.checkoutConfigurations.list({
    account_id: "account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCheckoutConfigurationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutConfigurationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkoutConfigurations.<a href="/src/api/resources/checkoutConfigurations/client/Client.ts">create</a>({ ...params }) -> Whop.CreateCheckoutConfigurationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a reusable checkout configuration for an existing or inline variant. Send customers to its `purchase_url` to check out.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutConfigurations.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    plan_id: "plan_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCheckoutConfigurationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutConfigurationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkoutConfigurations.<a href="/src/api/resources/checkoutConfigurations/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveCheckoutConfigurationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a checkout configuration by ID. This endpoint is public so a checkout page can load from the configuration URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutConfigurations.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCheckoutConfigurationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutConfigurationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkoutConfigurations.<a href="/src/api/resources/checkoutConfigurations/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteCheckoutConfigurationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a checkout configuration so its checkout URL can no longer be used.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutConfigurations.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteCheckoutConfigurationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutConfigurationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ClaimLinks
<details><summary><code>client.claimLinks.<a href="/src/api/resources/claimLinks/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveClaimLinksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a funded claim link by ID or by its public claim code. By ID, the caller needs `airdrop_link:basic:read` on the funding account, or must own the funding personal account; `code` and `claim_url` are `null` without `airdrop_link:manage` on the funding account or `payout:withdraw_funds` on the personal account. A claim code previews the sender, amount, expiry, and claim availability without authentication. Treat codes as secrets: anyone holding one can claim after signing in.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.claimLinks.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveClaimLinksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClaimLinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.claimLinks.<a href="/src/api/resources/claimLinks/client/Client.ts">claim</a>({ ...params }) -> Whop.ClaimClaimLinksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Claims a funded link into the authenticated user's personal balance and returns the updated link. Requires a signed-in user and the public claim code; account API keys cannot claim on a recipient's behalf. Each user can claim a link once. Reuse the same `Idempotency-Key` when retrying the same request. On-chain claims may take several minutes to complete.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.claimLinks.claim({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ClaimClaimLinksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClaimLinksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CompanyTokenTransactions
<details><summary><code>client.companyTokenTransactions.<a href="/src/api/resources/companyTokenTransactions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CompanyTokenTransactionListItem, Whop.ListCompanyTokenTransactionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's token transactions, newest first.

Required permissions:
 - `company_token_transaction:read`
 - `member:basic:read`
 - `company:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.companyTokenTransactions.list({
    first: 42,
    last: 42,
    user_id: "user_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companyTokenTransactions.list({
    first: 42,
    last: 42,
    user_id: "user_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCompanyTokenTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompanyTokenTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companyTokenTransactions.<a href="/src/api/resources/companyTokenTransactions/client/Client.ts">create</a>({ ...params }) -> Whop.CompanyTokenTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a token transaction that adds, subtracts, or transfers tokens for a member of an account.

Required permissions:
 - `company_token_transaction:create`
 - `member:basic:read`
 - `company:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companyTokenTransactions.create({
    transaction_type: "transfer",
    account_id: "biz_xxxxxxxxxxxxxx",
    amount: 6.9,
    destination_user_id: "destination_user_id",
    user_id: "user_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCompanyTokenTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompanyTokenTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companyTokenTransactions.<a href="/src/api/resources/companyTokenTransactions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.CompanyTokenTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a token transaction.

Required permissions:
 - `company_token_transaction:read`
 - `member:basic:read`
 - `company:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companyTokenTransactions.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCompanyTokenTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompanyTokenTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Confirmation Tokens
<details><summary><code>client.confirmationTokens.<a href="/src/api/resources/confirmationTokens/client/Client.ts">retrieve</a>({ ...params }) -> Whop.ConfirmationToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a confirmation token's payment method and billing details, never the underlying payment credential, to display what the buyer chose or check that the token is still usable. Requires no authentication and is rate-limited.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.confirmationTokens.retrieve({
    id: "id",
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveConfirmationTokensRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConfirmationTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CourseChapters
<details><summary><code>client.courseChapters.<a href="/src/api/resources/courseChapters/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CourseChapterListItem, Whop.ListCourseChaptersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of chapters within a course, ordered by position.

Required permissions:
 - `courses:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.courseChapters.list({
    first: 42,
    last: 42,
    course_id: "cors_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.courseChapters.list({
    first: 42,
    last: 42,
    course_id: "cors_xxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCourseChaptersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseChaptersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseChapters.<a href="/src/api/resources/courseChapters/client/Client.ts">create</a>({ ...params }) -> Whop.CourseChapter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new chapter within a course to organize lessons into sections.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseChapters.create({
    course_id: "cors_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCourseChaptersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseChaptersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseChapters.<a href="/src/api/resources/courseChapters/client/Client.ts">retrieve</a>({ ...params }) -> Whop.CourseChapter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing course chapter.

Required permissions:
 - `courses:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseChapters.retrieve({
    id: "chap_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCourseChaptersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseChaptersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseChapters.<a href="/src/api/resources/courseChapters/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a chapter and all of its lessons from a course.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseChapters.delete({
    id: "chap_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteCourseChaptersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseChaptersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseChapters.<a href="/src/api/resources/courseChapters/client/Client.ts">update</a>({ ...params }) -> Whop.CourseChapter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a chapter's title within a course.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseChapters.update({
    id: "chap_xxxxxxxxxxxxx",
    title: "title"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateCourseChaptersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseChaptersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CourseLessonInteractions
<details><summary><code>client.courseLessonInteractions.<a href="/src/api/resources/courseLessonInteractions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CourseLessonInteractionListItem, Whop.ListCourseLessonInteractionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of lesson interactions for a lesson or course. Callers without admin access to the course's experience see only their own interactions.

Required permissions:
 - `courses:read`
 - `course_analytics:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.courseLessonInteractions.list({
    first: 42,
    last: 42,
    user_id: "user_xxxxxxxxxxxxx",
    lesson_id: "lesn_xxxxxxxxxxxxx",
    course_id: "cors_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.courseLessonInteractions.list({
    first: 42,
    last: 42,
    user_id: "user_xxxxxxxxxxxxx",
    lesson_id: "lesn_xxxxxxxxxxxxx",
    course_id: "cors_xxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCourseLessonInteractionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonInteractionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessonInteractions.<a href="/src/api/resources/courseLessonInteractions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.CourseLessonInteraction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing course lesson interaction.

Required permissions:
 - `courses:read`
 - `course_analytics:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessonInteractions.retrieve({
    id: "crsli_xxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCourseLessonInteractionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonInteractionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CourseLessons
<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CourseLessonListItem, Whop.ListCourseLessonsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of lessons within a course or chapter, ordered by position.

Required permissions:
 - `courses:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.courseLessons.list({
    first: 42,
    last: 42,
    course_id: "cors_xxxxxxxxxxxxx",
    chapter_id: "chap_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.courseLessons.list({
    first: 42,
    last: 42,
    course_id: "cors_xxxxxxxxxxxxx",
    chapter_id: "chap_xxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">create</a>({ ...params }) -> Whop.CourseLesson</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new lesson within a course chapter. Lessons can contain video, text, or assessment content.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.create({
    chapter_id: "chap_xxxxxxxxxxxxx",
    lesson_type: "text"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">retrieve</a>({ ...params }) -> Whop.CourseLesson</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing course lesson.

Required permissions:
 - `courses:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.retrieve({
    id: "lesn_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a lesson and remove it from its chapter.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.delete({
    id: "lesn_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">update</a>({ ...params }) -> Whop.CourseLesson</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a lesson's content, type, visibility, assessment questions, or media attachments.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.update({
    id: "lesn_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">markAsCompleted</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark a lesson as completed for the current user after they finish the content.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.markAsCompleted({
    lesson_id: "lesson_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.MarkAsCompletedCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">start</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Record that the current user has started viewing a lesson, creating progress tracking records.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.start({
    lesson_id: "lesson_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.StartCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseLessons.<a href="/src/api/resources/courseLessons/client/Client.ts">submitAssessment</a>({ ...params }) -> Whop.SubmitAssessmentCourseLessonsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit answers for a quiz or knowledge check lesson and receive a graded result.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseLessons.submitAssessment({
    lesson_id: "lesson_id",
    answers: [{
            question_id: "question_id"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SubmitAssessmentCourseLessonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseLessonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CourseStudents
<details><summary><code>client.courseStudents.<a href="/src/api/resources/courseStudents/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CourseStudentListItem, Whop.ListCourseStudentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of students enrolled in a course, with optional name filtering.

Required permissions:
 - `courses:read`
 - `course_analytics:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.courseStudents.list({
    first: 42,
    last: 42,
    course_id: "cors_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.courseStudents.list({
    first: 42,
    last: 42,
    course_id: "cors_xxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCourseStudentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseStudentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courseStudents.<a href="/src/api/resources/courseStudents/client/Client.ts">retrieve</a>({ ...params }) -> Whop.CourseStudent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing course student.

Required permissions:
 - `courses:read`
 - `course_analytics:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courseStudents.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCourseStudentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourseStudentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Courses
<details><summary><code>client.courses.<a href="/src/api/resources/courses/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CourseListItem, Whop.ListCoursesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of the courses in an experience or an account. `hidden` courses are included only for callers with `courses:update`.

Required permissions:
 - `courses:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.courses.list({
    first: 42,
    last: 42,
    experience_id: "exp_xxxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.courses.list({
    first: 42,
    last: 42,
    experience_id: "exp_xxxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListCoursesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CoursesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courses.<a href="/src/api/resources/courses/client/Client.ts">create</a>({ ...params }) -> Whop.Course</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new course within an experience, with optional chapters, lessons, and a certificate.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courses.create({
    experience_id: "exp_xxxxxxxxxxxxxx",
    title: "title"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateCoursesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CoursesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courses.<a href="/src/api/resources/courses/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Course</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing course. A `hidden` course is returned only to callers with `courses:update`.

Required permissions:
 - `courses:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courses.retrieve({
    id: "cors_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCoursesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CoursesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courses.<a href="/src/api/resources/courses/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a course and all of its chapters, lessons, and student progress.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courses.delete({
    id: "cors_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteCoursesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CoursesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.courses.<a href="/src/api/resources/courses/client/Client.ts">update</a>({ ...params }) -> Whop.Course</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a course's title, description, visibility, thumbnail, or chapter ordering.

Required permissions:
 - `courses:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.courses.update({
    id: "cors_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateCoursesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CoursesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Deposits
<details><summary><code>client.deposits.<a href="/src/api/resources/deposits/client/Client.ts">create</a>({ ...params }) -> Whop.CreateDepositsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the deposit methods for an account or user, including crypto addresses, bank transfer instructions, and, for a business, a hosted deposit page. Bitcoin deposits are converted to USDT on Plasma in the destination's wallet. Business destinations require no authentication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deposits.create({
    destination: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateDepositsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DepositsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Dispute alerts
<details><summary><code>client.disputeAlerts.<a href="/src/api/resources/disputeAlerts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.DisputeAlert, Whop.ListDisputeAlertsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the dispute alerts and early fraud warnings across the accounts you can read.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.disputeAlerts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.disputeAlerts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListDisputeAlertsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputeAlertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.disputeAlerts.<a href="/src/api/resources/disputeAlerts/client/Client.ts">retrieve</a>({ ...params }) -> Whop.DisputeAlert</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single dispute alert or early fraud warning by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputeAlerts.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveDisputeAlertsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputeAlertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Disputes
<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Dispute, Whop.ListDisputesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the disputes across the accounts you can read.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.disputes.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.disputes.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListDisputesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">summary</a>({ ...params }) -> Whop.SummaryDisputesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Totals up the same disputes the list returns, so you can build status tabs and totals without paging through them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.summary();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SummaryDisputesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single dispute.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveDisputesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">update</a>({ ...params }) -> Whop.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edits a dispute's evidence while it is still editable. When the evidence is ready, send it to the payment processor with `POST /disputes/:id/submit`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateDisputesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">submit</a>({ ...params }) -> Whop.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a dispute's evidence to the payment processor. This is final — it cannot be edited or sent again.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.submit({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SubmitDisputesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">uploadEvidence</a>({ ...params }) -> Whop.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces the full set of uploaded evidence documents on a dispute, beyond the four fixed evidence slots. Prefer `PATCH /disputes/:id` with `evidence.documents`, which does the same replace alongside every other evidence field in one call.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.uploadEvidence({
    id: "id",
    documents: [{
            document_type: "return_policy"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UploadEvidenceDisputesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DisputesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DmChannels
<details><summary><code>client.dmChannels.<a href="/src/api/resources/dmChannels/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.DmChannelListItem, Whop.ListDmChannelsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's DM channels, most recently active first.

Required permissions:
 - `dms:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.dmChannels.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dmChannels.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListDmChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmChannels.<a href="/src/api/resources/dmChannels/client/Client.ts">create</a>({ ...params }) -> Whop.DmChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a DM channel between two or more users, optionally scoped to an account. Returns the existing channel if one already exists.

Required permissions:
 - `dms:channel:manage`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmChannels.create({
    with_user_ids: ["with_user_ids"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateDmChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmChannels.<a href="/src/api/resources/dmChannels/client/Client.ts">retrieve</a>({ ...params }) -> Whop.DmChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing DM channel.

Required permissions (one of):
 - `dms:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmChannels.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveDmChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmChannels.<a href="/src/api/resources/dmChannels/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently deletes a DM channel and all of its messages. Only a channel admin can delete it.

Required permissions (one of):
 - `dms:channel:manage`
 - `support_chat:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmChannels.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteDmChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmChannels.<a href="/src/api/resources/dmChannels/client/Client.ts">update</a>({ ...params }) -> Whop.DmChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a DM channel's settings, such as its display name. Only a channel admin can update it.

Required permissions (one of):
 - `dms:channel:manage`
 - `support_chat:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmChannels.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateDmChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DmMembers
<details><summary><code>client.dmMembers.<a href="/src/api/resources/dmMembers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.DmMemberListItem, Whop.ListDmMembersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of members in a specific DM channel, sorted by the date they were added.

Required permissions (one of):
 - `dms:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.dmMembers.list({
    first: 42,
    last: 42,
    channel_id: "channel_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dmMembers.list({
    first: 42,
    last: 42,
    channel_id: "channel_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListDmMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmMembers.<a href="/src/api/resources/dmMembers/client/Client.ts">create</a>({ ...params }) -> Whop.DmMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new user to an existing DM channel. Only an admin of the channel can add members.

Required permissions (one of):
 - `dms:message:manage`
 - `support_chat:message:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmMembers.create({
    channel_id: "channel_id",
    user_id: "user_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateDmMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmMembers.<a href="/src/api/resources/dmMembers/client/Client.ts">retrieve</a>({ ...params }) -> Whop.DmMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing DM member.

Required permissions (one of):
 - `dms:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmMembers.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveDmMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmMembers.<a href="/src/api/resources/dmMembers/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a user from a DM channel. An admin can remove any member, and a member can remove themselves.

Required permissions (one of):
 - `dms:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmMembers.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteDmMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dmMembers.<a href="/src/api/resources/dmMembers/client/Client.ts">update</a>({ ...params }) -> Whop.DmMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a DM channel member's settings, such as their notification preferences or membership status.

Required permissions (one of):
 - `dms:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dmMembers.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateDmMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DmMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Domains
<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.DomainListItem, Whop.ListDomainsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists your domains. Filter by account, app, status, hostname, or the state of a capability.

Pass `search` to find domains to buy instead: the exact domain first, even when taken, then your name on popular extensions, then suggestions. Pass `tlds` to check only the extensions you choose. Results aren't reserved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.domains.list({
    tlds: ["com"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.domains.list({
    tlds: ["com"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">create</a>({ ...params }) -> Whop.Domain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a domain to your account with the capabilities you want.

Pass `registration` to buy the domain through Whop; it's the default when you pass no capability. Pay its `amount_due` at `purchase_url`, or pass `registration.payment_method_id` to charge a saved card. Whop then registers it, runs its DNS, and renews it every year while `auto_renew` is on.

Pass `verification` to connect a domain you registered elsewhere: its `issues` list the TXT and routing records to publish. Pass `website` with an `app_id` to serve that app on the domain.

To change a domain you already have, update it instead. Adding a domain this account deleted revives it under its original ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.create({
    domain: "store.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Domain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a domain by ID or hostname. Both return the same domain, shown as fully as you can see it: everything for your own accounts, and only who has it and what it serves for anyone else.

A hostname no domain on Whop has comes back with its `availability` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">delete</a>({ ...params }) -> Whop.Domain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes the domain from your account and releases its capabilities in the background. Deleting an unpaid purchase cancels it. A registered domain can't be deleted; turn off `auto_renew` and it's released after it expires. Adding the domain to this account again revives it under the same ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">update</a>({ ...params }) -> Whop.Domain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes a domain's capabilities or metadata. Pass a capability to add it or change its settings, or `null` to release it; capabilities you leave out don't change. Passing a capability that needs action again retries it. Releasing every capability keeps the domain, `idle`; delete it to remove it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">check</a>({ ...params }) -> Whop.Domain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks the domain's DNS, payment, and provider state again now instead of at its next scheduled check. Returns the domain as saved; retrieve it again to see the result.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.check({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CheckDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Economic Intelligence
<details><summary><code>client.economicIntelligence.<a href="/src/api/resources/economicIntelligence/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.EconomicIntelligence, Whop.ListEconomicIntelligenceResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's recommendations and generation requests, newest first by default. When no recommendations are ready or in progress and you have `company:update` permission, listing queues generation, with a ten-minute cooldown after an unsuccessful request; unsuccessful requests are not listed. An account's executed recommendations and runs stay listed after Economic Intelligence turns off, but new recommendations are offered only while it is on. For visitor countries, page views, ad impressions and clicks, or payment volume over a time range, use `GET /stats/time_series/:metric`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.economicIntelligence.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.economicIntelligence.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListEconomicIntelligenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EconomicIntelligenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.economicIntelligence.<a href="/src/api/resources/economicIntelligence/client/Client.ts">update</a>({ ...params }) -> Whop.EconomicIntelligence</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a recommendation status, records feedback, or both. Send `sentiment` to rate it. Include `status: superseded` to retire a ready recommendation and request replacements; a rating alone leaves its status unchanged. To run a recommendation yourself, send `status: running` to start, then `status: executed` when it is carried out (with `result_id` naming what it changed, or `result_page` naming where it worked, so the result links there) or `status: incomplete` if the run ended without carrying it out. Whop AI reports its own runs the same way. Send `status: acknowledged` once an executed run's result has been seen.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.economicIntelligence.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateEconomicIntelligenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EconomicIntelligenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Events
<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListEventsResponse.Data.Item, Whop.ListEventsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists identity-linked events, most recent first by default. Pass `identifier` for one person's journey, or omit it to list an account's events within a time range. Events have the same shape as the `POST /events` intake: attribution in `context`, identity in `user`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.events.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.events.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">create</a>({ ...params }) -> Whop.CreateEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Tracks a conversion or engagement event for an account, such as a lead or a sign-up, so it can be attributed to the ads and links that drove it. Send server-side events with an API key that has `event:create`; the browser pixel calls this without authentication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    event_name: "coating_deposit_paid"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">pulse</a>({ ...params }) -> core.Page&lt;Whop.PulseEventsResponse.Data.Item, Whop.PulseEventsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a fully anonymized feed of recent money movement across Whop, most recent first, such as purchases, card spend, and transfers between accounts. Each item carries only its `type`, a USD amount, a coarse location, and a timestamp coarsened to the minute. The payload is identical for every caller and requires no authentication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.events.pulse();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.events.pulse();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PulseEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">validatePixel</a>({ ...params }) -> Whop.PixelValidation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks whether the Whop pixel is installed for an account, or on one page when you pass a `url`. Use it before launching an ad to confirm its destination is tracked, or in a setup flow to tell a merchant whether their install is live.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.validatePixel();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ValidatePixelEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Experiences
<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ExperienceListItem, Whop.ListExperiencesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the experiences in an account, optionally filtered to those attached to one product or powered by one app.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.experiences.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    app_id: "app_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.experiences.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    app_id: "app_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">create</a>({ ...params }) -> Whop.Experience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an experience for an account, powered by an app such as courses, forums, or chat. Attach it to a product with `POST /experiences/:id/attach` to give that product's customers access.

Required permissions:
 - `experience:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    app_id: "app_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Experience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing experience.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.retrieve({
    id: "exp_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an experience and detaches it from every product, removing customer access to it. Returns `true` on success.

Required permissions:
 - `experience:delete`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.delete({
    id: "exp_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">update</a>({ ...params }) -> Whop.Experience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an experience's name, logo, visibility, or notification setting, or moves it to another section or position.

Required permissions:
 - `experience:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.update({
    id: "exp_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">attach</a>({ ...params }) -> Whop.Experience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attaches an experience to a product, giving the product's customers access to it.

Required permissions:
 - `experience:attach`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.attach({
    id: "exp_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AttachExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">detach</a>({ ...params }) -> Whop.Experience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detaches an experience from a product, removing customer access to it through that product.

Required permissions:
 - `experience:detach`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.detach({
    id: "exp_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DetachExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiences.<a href="/src/api/resources/experiences/client/Client.ts">duplicate</a>({ ...params }) -> Whop.Experience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Duplicates an experience and attaches the copy to the same products as the original. Forum and chat copies keep the original's settings, such as who can post or comment. No content, such as posts, messages, or lessons, is copied.

Required permissions:
 - `experience:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiences.duplicate({
    id: "exp_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DuplicateExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Experiments
<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Experiment, Whop.ListExperimentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the experiments and feature flags owned by an account. Requires `experiment:read` on the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.experiments.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.experiments.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">create</a>({ ...params }) -> Whop.Experiment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an experiment or feature flag in `draft` status for an account. Nothing is served until you activate it with `POST /experiments/:id/activate`. Requires `experiment:manage` on the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    flag_key: "checkout_redesign_v2"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">exposures</a>({ ...params }) -> Whop.ExposuresExperimentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Evaluates experiments and feature flags for a subject and records an exposure. Pass `flag_key` to evaluate one flag, or omit it to evaluate every active flag in the account and related resource scope. Requires no authentication; when a credential resolves, its authentication method, API key ID, and signed-in user ID are recorded on the exposure event.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.exposures();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ExposuresExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Experiment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an experiment or feature flag by its `expt_` ID or `flag_key` handle. Requires `experiment:read` on the owning account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">update</a>({ ...params }) -> Whop.Experiment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the targeting rules, treatment allocation, or hypothesis of an existing experiment or feature flag. To change its lifecycle, use the `activate`, `pause`, and `end` endpoints instead. Requires `experiment:manage` on the owning account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">activate</a>({ ...params }) -> Whop.Experiment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts (or resumes) an experiment or feature flag so evaluation begins serving it. Activating a draft stamps `started_at`; resuming a paused experiment keeps the original start. Only drafts and paused experiments can be activated. Requires `experiment:manage` on the owning account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.activate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ActivateExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">end</a>({ ...params }) -> Whop.Experiment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Concludes the experiment and records required `findings`. Pass `winning_arm` to serve the winning treatment to everyone; omit it when control won. Ended experiments cannot restart, but may be ended again to correct the winner. Requires `experiment:manage` on the owning account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.end({
    id: "id",
    findings: "Treatment lifted signups 12%, shipping it to everyone."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.EndExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.experiments.<a href="/src/api/resources/experiments/client/Client.ts">pause</a>({ ...params }) -> Whop.Experiment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses an active experiment or feature flag: evaluation stops serving it and exposures stop flowing. Assignments are keyed on stable identity, so users return to their original arm when the experiment resumes. Requires `experiment:manage` on the owning account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.experiments.pause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PauseExperimentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperimentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Exports
<details><summary><code>client.exports.<a href="/src/api/resources/exports/client/Client.ts">list</a>({ ...params }) -> Whop.ListExportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the exports requested for an account, newest first. Only exports of resources the credential is allowed to export are returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.exports.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.exports.<a href="/src/api/resources/exports/client/Client.ts">create</a>({ ...params }) -> Whop.Export</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts an asynchronous export of a resource for an account. Returns the export in `pending`; poll `GET /exports/:id` until `download_url` is set.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.exports.create({
    resource: "ad_campaigns"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.exports.<a href="/src/api/resources/exports/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Export</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches an export's status and, once complete, its download link.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.exports.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## External Accounts
<details><summary><code>client.externalAccounts.<a href="/src/api/resources/externalAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ExternalAccount, Whop.ListExternalAccountsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the external accounts linked to an account or user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.externalAccounts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.externalAccounts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListExternalAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.externalAccounts.<a href="/src/api/resources/externalAccounts/client/Client.ts">create</a>({ ...params }) -> Whop.ExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or returns a Whop-managed Facebook page or TikTok account for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.create({
    platform: "facebook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateExternalAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.externalAccounts.<a href="/src/api/resources/externalAccounts/client/Client.ts">connect</a>({ ...params }) -> Whop.ConnectExternalAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts an OAuth connection flow and returns an `authorize_url` to send the user to, where they connect an external account. Personal profile connections must be completed in a browser signed in as the Whop user who started the flow.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.connect({
    platform: "meta_business",
    redirect_url: "https://example.com/settings/social-accounts"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ConnectExternalAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.externalAccounts.<a href="/src/api/resources/externalAccounts/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteExternalAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnects an external account from an account or user without deleting the underlying platform account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteExternalAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.externalAccounts.<a href="/src/api/resources/externalAccounts/client/Client.ts">refresh</a>({ ...params }) -> Whop.ExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refreshes the state of an external account. Use it to clear an `error` that has been resolved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.refresh({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RefreshExternalAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FeeMarkups
<details><summary><code>client.feeMarkups.<a href="/src/api/resources/feeMarkups/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.FeeMarkupListItem, Whop.ListFeeMarkupsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the fee markups configured for an account. For a platform account, returns the platform's default markups.

Required permissions:
 - `company:update_child_fees`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.feeMarkups.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.feeMarkups.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListFeeMarkupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeMarkupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.feeMarkups.<a href="/src/api/resources/feeMarkups/client/Client.ts">create</a>({ ...params }) -> Whop.FeeMarkup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates an account's markup for one fee type. If the account already has a markup for that `fee_type`, it is updated with the new values.

Required permissions:
 - `company:update_child_fees`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeMarkups.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    fee_type: "crypto_withdrawal_markup"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateFeeMarkupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeMarkupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.feeMarkups.<a href="/src/api/resources/feeMarkups/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a fee markup, removing the custom fee override so the account reverts to its parent account's default fees.

Required permissions:
 - `company:update_child_fees`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feeMarkups.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteFeeMarkupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeeMarkupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FeedbackSubmissions
<details><summary><code>client.feedbackSubmissions.<a href="/src/api/resources/feedbackSubmissions/client/Client.ts">create</a>({ ...params }) -> Whop.CreateFeedbackSubmissionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits an issue or an unanswered question to Whop for review, recorded under the authenticated user, account, or app. Returns a receipt once the submission is accepted; processing is asynchronous and no reply is sent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.feedbackSubmissions.create({
    content: "The docs omit the required permission",
    source: "mcp_report_feedback"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateFeedbackSubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeedbackSubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Files
<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.File_, Whop.ListFilesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the files with the given IDs, newest first — fetch a batch in one request instead of retrieving each file individually. Only files you created are returned; IDs that do not exist, or that another credential created, are omitted. For a batch larger than one page, follow `page_info` with the same `file_ids` to walk the rest.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.files.list({
    file_ids: ["file_xxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.files.list({
    file_ids: ["file_xxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">create</a>({ ...params }) -> Whop.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a file and returns a presigned destination to upload its bytes to. PUT the bytes to `upload_url` (single-part), or to each of `multipart_upload_urls` and then call Complete File Multipart Upload. Once the bytes land the file becomes `ready`, and its ID can be attached wherever a file is accepted — account legal documents, dispute evidence documents. For a step-by-step walkthrough of single-part and multipart uploads, see the [direct file uploads guide](/developer/guides/direct-file-uploads).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.create({
    filename: "terms.pdf"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">retrieve</a>({ ...params }) -> Whop.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a file you uploaded — poll it after uploading the bytes to see `upload_status` become `ready`. Only the creator can retrieve a file this way; a file attached to another resource is read through that resource.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">complete</a>({ ...params }) -> Whop.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assembles the parts of a multipart upload after every part has been PUT to its presigned URL. Pass the `multipart_upload_id` from Create File and each part's `ETag` response header. For a step-by-step walkthrough of multipart uploads, see the [direct file uploads guide](/developer/guides/direct-file-uploads).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.complete({
    id: "id",
    multipart_parts: [{
            etag: "etag-1",
            part_number: 1
        }],
    multipart_upload_id: "upload-id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CompleteFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FinancialActivity
<details><summary><code>client.financialActivity.<a href="/src/api/resources/financialActivity/client/Client.ts">list</a>({ ...params }) -> Whop.ListFinancialActivityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an account's or user's activity feed: every movement of money in or out.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialActivity.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListFinancialActivityRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialActivityClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FinancialReports
<details><summary><code>client.financialReports.<a href="/src/api/resources/financialReports/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveFinancialReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a financial report — balance activity, income statement, or balance summary — for an account over a date range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialReports.retrieve({
    account_id: "account_id",
    report_type: "balance_summary"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveFinancialReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancialReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ForumPosts
<details><summary><code>client.forumPosts.<a href="/src/api/resources/forumPosts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ForumPostListItem, Whop.ListForumPostsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of forum posts within a specific experience, with optional filtering by parent post or pinned status.

Required permissions:
 - `forum:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.forumPosts.list({
    first: 42,
    last: 42,
    experience_id: "exp_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.forumPosts.list({
    first: 42,
    last: 42,
    experience_id: "exp_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListForumPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumPostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forumPosts.<a href="/src/api/resources/forumPosts/client/Client.ts">create</a>({ ...params }) -> Whop.ForumPost</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new forum post or comment within an experience. Supports text content, attachments, polls, paywalling, and pinning.

Required permissions:
 - `forum:post:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forumPosts.create({
    experience_id: "exp_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateForumPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumPostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forumPosts.<a href="/src/api/resources/forumPosts/client/Client.ts">retrieve</a>({ ...params }) -> Whop.ForumPost</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing forum post.

Required permissions:
 - `forum:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forumPosts.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveForumPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumPostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forumPosts.<a href="/src/api/resources/forumPosts/client/Client.ts">update</a>({ ...params }) -> Whop.ForumPost</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit the content, attachments, pinned status, or visibility of an existing forum post or comment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forumPosts.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateForumPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumPostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Forums
<details><summary><code>client.forums.<a href="/src/api/resources/forums/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ForumListItem, Whop.ListForumsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of forums for an account, with optional filtering by product.

Required permissions:
 - `forum:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.forums.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.forums.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListForumsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forums.<a href="/src/api/resources/forums/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Forum</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing forum.

Required permissions:
 - `forum:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forums.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveForumsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.forums.<a href="/src/api/resources/forums/client/Client.ts">update</a>({ ...params }) -> Whop.Forum</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update moderation and notification settings for a forum, such as who can post, who can comment, and email notification preferences.

Required permissions:
 - `forum:moderate`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.forums.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateForumsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForumsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## IdentityProfiles
<details><summary><code>client.identityProfiles.<a href="/src/api/resources/identityProfiles/client/Client.ts">listIdentityProfile</a>({ ...params }) -> core.Page&lt;Whop.IdentityProfileListItem, Whop.ListIdentityProfileResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the identity profiles currently linked to an account, or to every account you can read when `account_id` is omitted.

Required permissions:
 - `identity:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.identityProfiles.listIdentityProfile({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.identityProfiles.listIdentityProfile({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListIdentityProfileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identityProfiles.<a href="/src/api/resources/identityProfiles/client/Client.ts">retrieveIdentityProfile</a>({ ...params }) -> Whop.IdentityProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing identity profile.

Required permissions:
 - `identity:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identityProfiles.retrieveIdentityProfile({
    id: "idpf_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveIdentityProfileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identityProfiles.<a href="/src/api/resources/identityProfiles/client/Client.ts">unlinkIdentityProfile</a>({ ...params }) -> Whop.IdentityProfile</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks an identity profile from the account or user that owns `ledger_account_id`. Requires `identity:write` on that account or user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identityProfiles.unlinkIdentityProfile({
    id: "idpf_xxxxxxxxxxxxx",
    ledger_account_id: "ldgr_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnlinkIdentityProfileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.identityProfiles.<a href="/src/api/resources/identityProfiles/client/Client.ts">listVerificationsIdentityProfile</a>({ ...params }) -> core.Page&lt;Whop.ListVerificationsIdentityProfileResponse.Data.Item, Whop.ListVerificationsIdentityProfileResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of verifications attached to an identity profile, ordered by most recent first.

Required permissions:
 - `identity:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.identityProfiles.listVerificationsIdentityProfile({
    id: "idpf_xxxxxxxxxxxxx",
    first: 42,
    last: 42
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.identityProfiles.listVerificationsIdentityProfile({
    id: "idpf_xxxxxxxxxxxxx",
    first: 42,
    last: 42
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListVerificationsIdentityProfileRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityProfilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Invoices
<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.InvoiceListItem, Whop.ListInvoicesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of invoices for an account, with optional filtering by product, status, collection method, and creation date.

Required permissions:
 - `invoice:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.invoices.list({
    first: 42,
    last: 42,
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.invoices.list({
    first: 42,
    last: 42,
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">create</a>({ ...params }) -> Whop.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an invoice for a customer. The invoice can be charged automatically using a stored payment method, or sent to the customer for manual payment.

Required permissions:
 - `invoice:create`
 - `member:email:read`
 - `member:basic:read`
 - `payment:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    collection_method: "send_invoice",
    plan: {},
    product: {
        title: "title"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing invoice.

Required permissions:
 - `invoice:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `payment:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.retrieve({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a draft invoice.

Required permissions:
 - `invoice:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.delete({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">update</a>({ ...params }) -> Whop.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a draft invoice's details.

Required permissions:
 - `invoice:update`
 - `member:email:read`
 - `member:basic:read`
 - `payment:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.update({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">markPaid</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark an open invoice as paid when payment was collected outside of Whop.

Required permissions:
 - `invoice:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.markPaid({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.MarkPaidInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">markUncollectible</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark an open invoice as uncollectible when payment is not expected.

Required permissions:
 - `invoice:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.markUncollectible({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.MarkUncollectibleInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">resend</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resend the notification email for an existing invoice to the customer.

Required permissions:
 - `invoice:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.resend({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ResendInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">void</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Void an open invoice so it can no longer be paid. Voiding is permanent and cannot be undone.

Required permissions:
 - `invoice:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.void({
    id: "inv_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.VoidInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Leads
<details><summary><code>client.leads.<a href="/src/api/resources/leads/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.LeadListItem, Whop.ListLeadsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's leads, newest first.

Required permissions:
 - `lead:basic:read`
 - `member:email:read`
 - `access_pass:basic:read`
 - `member:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.leads.list({
    first: 42,
    last: 42,
    created_after: "2023-12-01T05:00:00Z",
    created_before: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.leads.list({
    first: 42,
    last: 42,
    created_after: "2023-12-01T05:00:00Z",
    created_before: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListLeadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.leads.<a href="/src/api/resources/leads/client/Client.ts">create</a>({ ...params }) -> Whop.Lead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records a lead: a potential customer's interest in an account or one of its products.

Required permissions:
 - `lead:manage`
 - `member:email:read`
 - `access_pass:basic:read`
 - `member:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.leads.create({
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateLeadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.leads.<a href="/src/api/resources/leads/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Lead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing lead.

Required permissions:
 - `lead:basic:read`
 - `member:email:read`
 - `access_pass:basic:read`
 - `member:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.leads.retrieve({
    id: "lead_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveLeadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.leads.<a href="/src/api/resources/leads/client/Client.ts">update</a>({ ...params }) -> Whop.Lead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a lead's `metadata` or `referrer`.

Required permissions:
 - `lead:manage`
 - `member:email:read`
 - `access_pass:basic:read`
 - `member:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.leads.update({
    id: "lead_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateLeadsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## LedgerAccounts
<details><summary><code>client.ledgerAccounts.<a href="/src/api/resources/ledgerAccounts/client/Client.ts">retrieve</a>({ ...params }) -> Whop.LedgerAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing ledger account.

Required permissions:
 - `company:balance:read`
 - `payout:account:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ledgerAccounts.retrieve({
    id: "ldgr_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveLedgerAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgerAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Media
<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">generate</a>({ ...params }) -> Whop.MediaAsset</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts an AI media generation job billed from the account's balance. Generation is asynchronous — poll `GET /media/{id}` until the asset is `ready`, then use `file.id` anywhere attachments are accepted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.generate({
    prompt: "A 9:16 product showcase of a cordless power scrubber",
    type: "video"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.GenerateMediaRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MediaClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">retrieve</a>({ ...params }) -> Whop.MediaAsset</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a media asset by ID. Poll this while the asset is `processing`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveMediaRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MediaClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Members
<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Member, Whop.ListMembersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the members of an account. A member is one buyer's relationship with the account, regardless of how many memberships they hold.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.members.list({
    user_ids: ["user_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.members.list({
    user_ids: ["user_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.members.<a href="/src/api/resources/members/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Member</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a member by ID. Accessible to the account and to the member's own user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.members.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Memberships
<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Membership, Whop.ListMembershipsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists every membership the caller can read: an account API key its account's; a user credential their own plus those of every account they manage. `account_id` and `user_id` only narrow that list — values outside the caller's reach return fewer results, not an error.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.memberships.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.memberships.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">invite</a>({ ...params }) -> Whop.InviteMembershipsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Emails one recipient an invitation to a free variant's membership. The invitation is bound to that recipient; after signing in, accepting it immediately grants the membership without checkout. This Experimental endpoint is available only to accounts enabled for membership invitations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.invite({
    plan_id: "plan_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.InviteMembershipsRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a membership by ID or license key. Accessible to the account and to the membership's own user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">update</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a membership's metadata, scheduled cancellation, renewal payment method, or renewal cadence.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.update({
    id: "id",
    billing_period_days: 45
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">applyPromoCode</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Applies a promo code to an `active` or `trialing` membership that does not already have one and has exactly one recurring item, for Stripe-billed memberships and memberships billed by Whop's billing engine. The discount lands on the next invoice and follows the code's duration (`once`, `repeating`, or `forever`).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.applyPromoCode({
    id: "id",
    promo_code: "SAVE20"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ApplyPromoCodeMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">assignAffiliate</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assigns an affiliate to a membership and pays them the commission you set on its future payments; past payments are not recalculated. A user who is not yet an affiliate of your account becomes one, which also requires `affiliate:create`. Send a new `commission_type` or `commission_value` for the membership's current affiliate to change their commission; a membership that already has a different affiliate returns a conflict. Works for active or trialing memberships with one recurring variant that bill through Stripe or Whop's billing engine, and not for marketplace memberships, paused payments, or a scheduled cancellation. You cannot assign yourself.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.assignAffiliate({
    id: "id",
    commission_type: "flat_fee",
    commission_value: 5,
    email: "affiliate@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AssignAffiliateMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">cancel</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a membership, either immediately or at the end of the current billing period. Buyers cannot cancel buy-now-pay-later (`splitit`, `sezzle`) or non-trial split-pay memberships.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.cancel({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CancelMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">extend</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds free days to a membership, extending its current billing period, expiration date, or trial depending on the plan type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.extend({
    id: "id",
    days: 7
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ExtendMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">pause</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses a membership's recurring payment collection. The customer keeps access but is not charged until the membership is resumed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.pause({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PauseMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">reactivate</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Restores access to a `canceled` or `expired` membership that contains only one-time purchases and sets its `status` to `completed`. Lifetime memberships regain lifetime access; for memberships with an expiration, `days` sets the new `current_period_end`. Active and recurring memberships cannot be reactivated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.reactivate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ReactivateMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">resume</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes a previously paused membership's recurring payment collection. Billing resumes on the next cycle.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.resume({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ResumeMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">resyncAccess</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-runs access fulfillment for a membership: recomputes the member's content access on Whop, re-validates their Discord link (re-adding them to the server and re-assigning roles if needed), and re-fulfills TradingView indicator access. Telegram access is invite-based and is not resynced. The work runs in the background and the outcome is written to the membership's logs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.resyncAccess({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ResyncAccessMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">transfer</a>({ ...params }) -> Whop.TransferMembershipsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a one-use transfer URL for a membership. Opening the URL while logged into a different Whop account claims the membership onto that account. The membership's buyer can generate a link for their own membership with `membership:transfer` when the product allows transfers and the membership is `trialing`, `active`, or `completed`. An account credential with `membership:update` bypasses both restrictions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.memberships.transfer({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.TransferMembershipsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MembershipsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Messages
<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.MessageListItem, Whop.ListMessagesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists messages in an experience chat, DM, or group chat channel, sorted by creation time.

Required permissions (one of):
 - `chat:read`
 - `dms:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.messages.list({
    first: 42,
    last: 42,
    channel_id: "channel_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.messages.list({
    first: 42,
    last: 42,
    channel_id: "channel_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">create</a>({ ...params }) -> Whop.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a message in an experience chat, DM, or group chat channel. Supports text content, attachments, polls, and replies.

Required permissions (one of):
 - `chat:message:create`
 - `dms:message:manage`
 - `livestream:chat:write`
 - `support_chat:message:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.create({
    channel_id: "channel_id",
    content: "content"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing message.

Required permissions (one of):
 - `chat:read`
 - `dms:read`
 - `livestream:chat:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently deletes a message from an experience chat, DM, or group chat channel. Only the message author or a channel admin can delete a message.

Required permissions (one of):
 - `chat:message:create` and `chat:read`
 - `dms:message:manage` and `dms:read`
 - `livestream:chat:write` and `livestream:chat:read`
 - `support_chat:message:create` and `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">update</a>({ ...params }) -> Whop.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edits the content, attachments, or pinned status of a message in an experience chat, DM, or group chat channel.

Required permissions (one of):
 - `chat:message:create`
 - `dms:message:manage`
 - `livestream:chat:write`
 - `support_chat:message:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notifications
<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Notification, Whop.ListNotificationsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's notifications, newest first. Without filters the feed spans every experience the user belongs to plus the teams they are a member of. Requires a user credential — an account API key has no notification feed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.notifications.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.notifications.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">create</a>({ ...params }) -> Whop.CreateNotificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Queues a notification to every user of an experience or to an account's team, processed asynchronously. Every send is attributed to an app: use an app API key, or a credential acting on behalf of an app. Narrow the audience with `user_ids` to send a mention.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.create({
    content: "Drop off at 4180 Burnet Rd. Plan on two days for the full coating.",
    title: "Your ceramic coating is booked"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">badges</a>({ ...params }) -> Whop.BadgesNotificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's per-experience unread badge state. Requires a user credential. Returns one row per experience the user belongs to (or per requested experience).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.badges({
    experience_ids: ["exp_xxxxxxxxxxxxxx"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.BadgesNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">markRead</a>({ ...params }) -> Whop.MarkReadNotificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks the authenticated user's notifications as read, for one experience or all of them, and returns the refreshed badge rows for that scope. Requires a user credential.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.markRead();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.MarkReadNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Notification</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single notification, from the feed or from a push or websocket event. Requires a user credential.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partner Referral Requests
<details><summary><code>client.partnerReferralRequests.<a href="/src/api/resources/partnerReferralRequests/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PartnerReferralRequest, Whop.ListPartnerReferralRequestsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists your referral links and attribution requests, including incoming requests for you or businesses you own, with filters for recipient, partner, type, and status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.partnerReferralRequests.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.partnerReferralRequests.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPartnerReferralRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerReferralRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partnerReferralRequests.<a href="/src/api/resources/partnerReferralRequests/client/Client.ts">create</a>({ ...params }) -> Whop.PartnerReferralRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a referral link, or sends an attribution request to an existing business or user for approval. Links require an enrolled partner who is not suspended; attribution requests require an enrolled, verified partner. Recipients do not need to join the partner program.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partnerReferralRequests.create({
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePartnerReferralRequestsRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerReferralRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partnerReferralRequests.<a href="/src/api/resources/partnerReferralRequests/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PartnerReferralRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a referral link or attribution request by ID, including its partner, recipient, approval status, and referral code when present.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partnerReferralRequests.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePartnerReferralRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerReferralRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partnerReferralRequests.<a href="/src/api/resources/partnerReferralRequests/client/Client.ts">accept</a>({ ...params }) -> Whop.PartnerReferralRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Accepts a pending attribution request as the receiving user or business owner, assigning the requesting partner as that user's or business's referrer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partnerReferralRequests.accept({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AcceptPartnerReferralRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerReferralRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partnerReferralRequests.<a href="/src/api/resources/partnerReferralRequests/client/Client.ts">cancel</a>({ ...params }) -> Whop.PartnerReferralRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a pending attribution request you sent so the recipient can no longer accept it, and returns the cancelled request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partnerReferralRequests.cancel({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CancelPartnerReferralRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerReferralRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partnerReferralRequests.<a href="/src/api/resources/partnerReferralRequests/client/Client.ts">decline</a>({ ...params }) -> Whop.PartnerReferralRequest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Declines a pending attribution request for you or a business you own, marking it as denied without assigning the requesting partner as a referrer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partnerReferralRequests.decline({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeclinePartnerReferralRequestsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnerReferralRequestsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partners
<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">create</a>() -> Whop.CreatePartnersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enrolls the calling user in the Whop partner program, making their partner businesses eligible for earnings. Idempotent — enrolling again keeps the original enrollment time.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">leaderboard</a>({ ...params }) -> Whop.LeaderboardPartnersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ranks referrers by partner business earnings over the chosen `period`, all-time by default. Authentication is optional: authenticated callers also get their own standing, anonymous callers get the rankings alone.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.leaderboard();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.LeaderboardPartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">referredUsers</a>({ ...params }) -> core.Page&lt;Whop.ReferredUsersPartnersResponse.Data.Item, Whop.ReferredUsersPartnersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the users the caller referred onto Whop, newest first by default, each with the caller's total affiliate earnings from that user across all tiers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.partners.referredUsers();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.partners.referredUsers();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ReferredUsersPartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.<a href="/src/api/resources/partners/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Partner</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the authenticated user's partner profile: enrollment and verification status, certification completion, active direct business referral count, and default payout rates. Other users' profiles are not accessible. To create and manage referral links, use `/partner_referral_requests`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.retrieve({
    id: "me"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payment Method Domains
<details><summary><code>client.paymentMethodDomains.<a href="/src/api/resources/paymentMethodDomains/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PaymentMethodDomain, Whop.ListPaymentMethodDomainsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the payment method domains registered for your account and its connected accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.paymentMethodDomains.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.paymentMethodDomains.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPaymentMethodDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomains.<a href="/src/api/resources/paymentMethodDomains/client/Client.ts">create</a>({ ...params }) -> Whop.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a hostname with the wallet provider and attempts verification inline. Returns `verified` when the provider fetched the domain-association file (for Apple Pay, `/.well-known/apple-developer-merchantid-domain-association`), or `pending` when it could not: host the file, then retry with `POST /payment_method_domains/:id/verify`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomains.create({
    hostname: "pending.shinetime.example"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePaymentMethodDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomains.<a href="/src/api/resources/paymentMethodDomains/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payment method domain to check its verification status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomains.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePaymentMethodDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomains.<a href="/src/api/resources/paymentMethodDomains/client/Client.ts">delete</a>({ ...params }) -> Whop.DeletePaymentMethodDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unregisters a payment method domain so its wallet payment methods stop rendering there.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomains.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeletePaymentMethodDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomains.<a href="/src/api/resources/paymentMethodDomains/client/Client.ts">verify</a>({ ...params }) -> Whop.PaymentMethodDomain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-attempts provider verification of a pending domain once the association file is hosted. Fails with a `bad_request` explaining what to fix; verifying an already `verified` domain is a no-op.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomains.verify({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.VerifyPaymentMethodDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PaymentMethods
<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PaymentMethodListItem, Whop.ListPaymentMethodsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of saved payment methods for a member or account, or for the authenticated user when you pass neither.

Required permissions:
 - `member:payment_methods:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.paymentMethods.list({
    first: 42,
    last: 42,
    member_id: "mber_xxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.paymentMethods.list({
    first: 42,
    last: 42,
    member_id: "mber_xxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPaymentMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a saved payment method from a member's wallet when you pass `member_id` or `account_id`, or from your own otherwise.

Required permissions:
 - `member:payment_methods:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.retrieve({
    id: "payt_xxxxxxxxxxxxx",
    member_id: "mber_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePaymentMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">deletePaymentMethod</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a saved payment method. Cannot delete a payment method attached to an active subscription.

Required permissions:
 - `member:payment_methods:manage`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.deletePaymentMethod({
    id: "payt_xxxxxxxxxxxxx",
    member_id: "mber_xxxxxxxxxxxxx",
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeletePaymentMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payment Quotes
<details><summary><code>client.paymentQuotes.<a href="/src/api/resources/paymentQuotes/client/Client.ts">create</a>({ ...params }) -> Whop.PaymentQuote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Prices a purchase the way a payment for it will be charged. The body is the `PaymentInput` a payment takes plus where the buyer is, which a seller that collects no tax on the purchase can leave out. The purchase is priced from exactly what you send: no buyer is looked up, so no stored registration or purchase history applies. Pass the quote's `id` as `quote_id` when you create the payment to charge exactly the purchase, promo code, and tax shown here. A quote is priced once and may be consumed by one payment before `expires_at`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentQuotes.create({
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePaymentQuotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentQuotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentQuotes.<a href="/src/api/resources/paymentQuotes/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PaymentQuote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payment quote. Use it to check which payment holds the quote, through `payment_id`, and when it expires.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentQuotes.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePaymentQuotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentQuotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payment Rules
<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PaymentRule, Whop.ListPaymentRulesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the payment rules on an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.paymentRules.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.paymentRules.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">create</a>({ ...params }) -> Whop.PaymentRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a payment rule. It is created `active` and applies its `action` to new payments that match all of its `conditions`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.create({
    action: "allow",
    conditions: {
        all: [{
                field: "risk_score",
                operator: "gte",
                value: 70
            }]
    },
    name: "Review risky cards"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">listFields</a>() -> Whop.ListFieldsPaymentRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the payment attributes a rule condition can read, with the operators and values each one accepts. Small and returned in full on one page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.listFields();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PaymentRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payment rule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a payment rule. It stops applying to new payments but is kept, so the payments it already decided still name it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeletePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">update</a>({ ...params }) -> Whop.PaymentRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a payment rule's name or metadata, keeping its ID and everything recorded against it. A rule's `action` and `conditions` are fixed once created, so the payments it decided keep naming the rule that decided them; use `POST /payment_rules/:id/replace` to change them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdatePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">activate</a>({ ...params }) -> Whop.PaymentRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Activates an inactive payment rule so it applies to new payments again. A deleted rule cannot be activated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.activate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ActivatePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">deactivate</a>({ ...params }) -> Whop.PaymentRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deactivates a payment rule so it stops applying to new payments. It keeps its ID and can be activated again.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.deactivate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeactivatePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentRules.<a href="/src/api/resources/paymentRules/client/Client.ts">replace</a>({ ...params }) -> Whop.PaymentRule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes a payment rule's `action` and `conditions` by deleting it and creating its successor in one step. The successor has a new ID and keeps the replaced rule's name, metadata, and `active` or `inactive` status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentRules.replace({
    id: "id",
    action: "allow",
    conditions: {
        all: [{
                field: "risk_score",
                operator: "gte",
                value: 70
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ReplacePaymentRulesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentRulesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payments
<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Payment, Whop.ListPaymentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists payments, newest first. By default, returns sales for the accounts your credential can read: an account credential's own account, or every account a user can read payments for. Set `mode` to `user_sales` to list the sales the signed-in user received personally, outside any account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.payments.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payments.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">create</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Charges a buyer for one or more variants with a payment method already on file (`member_id` and `payment_method_id`), or with a `confirmation_token` for a method the buyer just supplied. Collection runs in the background, so the response is the payment as created, not its outcome: poll Retrieve payment status for how far it has got and what the buyer must still do.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.create({
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one payment, including every purchased line item with its quantity and subtotal. Related records are ids — resolve a variant, membership, member or shipment on its own endpoint, and list this payment's refunds, disputes or Resolution Center cases with `?payment_id=`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">update</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a payment's `shipping_address` or `return_url`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdatePaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">capture</a>({ ...params }) -> Whop.PaymentStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Captures the full amount of a card payment created with `capture: false`. The payment must still be in `requires_capture` before `capture_expires_at`. Partial capture, multiple captures, capturing more than the authorized amount, and tips are not supported.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.capture({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CapturePaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">listFees</a>({ ...params }) -> Whop.ListFeesPaymentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the fee breakdown of one payment — Whop's fee, processing, affiliate and other lines — each in the currency it was collected in and converted to the payment's settlement currency. The list is complete in one page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.listFees({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListFeesPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">generatePdf</a>({ ...params }) -> Whop.PaymentPdf</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates the payment's receipt (invoice) as a PDF and returns a short-lived link to download it. Each call generates a new file and link, so this endpoint does not replay `Idempotency-Key` responses.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.generatePdf({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.GeneratePdfPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">refund</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refunds all or part of a payment through the processor that charged it, and updates its membership to match. The buyer is emailed, the affiliate commission on the payment is clawed back, and any open Resolution Center case on the payment is closed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.refund({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RefundPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">retry</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Charges an unpaid payment again with its original payment method and variant. A payment can typically be retried once, and only while its membership is active, trialing or past due, or when it is a membership's failed first payment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.retry({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetryPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">void</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Voids or cancels an eligible payment. The request is rejected if the payment is no longer eligible. Some processors confirm the release of a card authorization asynchronously: the payment is then returned still `authorized`, and a `payment.canceled` webhook follows once the hold is released.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.void({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.VoidPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">resume</a>({ ...params }) -> Whop.PaymentStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts a fresh on-session attempt with the saved card for a subscription renewal that is waiting on the customer to authenticate; the bank's step then arrives in `next_action` on the following status reads. Only the payment's own customer may call it — with the payment's `client_secret` or their own session — and it is a no-op for any payment that is not a parked renewal.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.resume({
    payment_id: "payment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ResumePaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">updateReturnUrl</a>({ ...params }) -> Whop.PaymentStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes where the buyer lands after completing an off-site step, up until they return. Accepts either a secret key or the payment's own `client_secret`, so the surface that knows the final destination can set it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.updateReturnUrl({
    payment_id: "payment_id",
    return_url: "https://shinetime.example/checkout/thanks"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateReturnUrlPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">retrieveStatus</a>({ ...params }) -> Whop.PaymentStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves how far a payment has got and what the buyer must do next, if anything. A payment is collected in the background, so poll this rather than reading the create response. Accepts either a secret key or the payment's own `client_secret`, so the surface collecting the payment can poll it directly.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.retrieveStatus({
    payment_id: "payment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveStatusPaymentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PayoutAccounts
<details><summary><code>client.payoutAccounts.<a href="/src/api/resources/payoutAccounts/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PayoutAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing payout account.

Required permissions:
 - `payout:account:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payoutAccounts.retrieve({
    id: "poact_xxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePayoutAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PayoutMethods
<details><summary><code>client.payoutMethods.<a href="/src/api/resources/payoutMethods/client/Client.ts">listPayoutMethod</a>({ ...params }) -> core.Page&lt;Whop.PayoutMethodListItem, Whop.ListPayoutMethodResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the active payout methods configured for an account, newest first.

Required permissions:
 - `payout:destination:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.payoutMethods.listPayoutMethod({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payoutMethods.listPayoutMethod({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPayoutMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payoutMethods.<a href="/src/api/resources/payoutMethods/client/Client.ts">retrievePayoutMethod</a>({ ...params }) -> Whop.PayoutMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing payout method.

Required permissions:
 - `payout:destination:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payoutMethods.retrievePayoutMethod({
    id: "potk_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePayoutMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payouts
<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListPayoutsResponse.Data.Item, Whop.ListPayoutsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's or user's payouts, newest first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.payouts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payouts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">create</a>({ ...params }) -> Whop.CreatePayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends money from an account or user balance to a saved payout method for that owner.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.create({
    amount: 50,
    payout_method_id: "potk_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">createQuote</a>({ ...params }) -> Whop.CreateQuotePayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a short-lived, provider-backed quote of a payout's fee, exchange rate, and destination amount. No funds move until you submit the returned `quote_token` to `POST /payouts`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.createQuote({
    amount: 6762.41,
    payout_method_id: "potk_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateQuotePayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrievePayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payout by its `wdrl_` ID, or by the `cofr_` conversion request ID a stablecoin payout carries as `payout_request_id`. Authentication is optional: anyone with the ID can view tracking details, including notes, trace code, exchange rate, and payout request ID, while accounting fields require `payout:withdrawal:read` on the account or user that owns the payout. A supplied invalid credential returns 401.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">cancel</a>({ ...params }) -> Whop.CancelPayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a payout whose `status` is `in_review` and returns the funds, fees included, to the balance. A `requested` payout is still being prepared (its funds may be converting) and returns 409 until it reaches review; from `processing` on, the money is on its way and the response is 409 with error type `not_cancelable`. Canceling an already-canceled payout succeeds and returns it unchanged.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.cancel({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CancelPayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## People
<details><summary><code>client.people.<a href="/src/api/resources/people/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListPeopleResponse.Data.Item, Whop.ListPeopleResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the people (visitors and customers) of an account: identity-linked profiles assembled from every pixel, payment, and platform event. Filter and sort them to segment an account's audience.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.people.list({
    source: ["direct"],
    event_name: ["payment.completed"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.people.list({
    source: ["direct"],
    event_name: ["payment.completed"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPeopleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PeopleClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.people.<a href="/src/api/resources/people/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrievePeopleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves one person for an account, looked up by person ID, user ID, email address, or phone number.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.people.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePeopleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PeopleClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Permissions
<details><summary><code>client.permissions.<a href="/src/api/resources/permissions/client/Client.ts">list</a>({ ...params }) -> Whop.ListPermissionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists permission actions and whether the calling credential is granted each one for a resource. Answers for whichever identity authenticated the request — a user session, an OAuth token, or an account or app API key — so it never describes who else can reach the resource.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.list({
    resource_id: "resource_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPermissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PermissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Plans
<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PlanListItem, Whop.ListPlansResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. List variants with `GET /variants` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.plans.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.plans.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">create</a>({ ...params }) -> Whop.Plan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Create variants with `POST /variants` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plans.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Plan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Retrieve variants with `GET /variants/{id}` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plans.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">delete</a>({ ...params }) -> Whop.DeletePlansResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Delete variants with `DELETE /variants/{id}` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plans.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeletePlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">update</a>({ ...params }) -> Whop.Plan</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Update variants with `PATCH /variants/{id}` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plans.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdatePlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.plans.<a href="/src/api/resources/plans/client/Client.ts">calculateTax</a>({ ...params }) -> Whop.CalculateTaxPlansResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Preview variant tax with `POST /variants/{id}/calculate_tax` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plans.calculateTax({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CalculateTaxPlansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PlansClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Product Affiliates
<details><summary><code>client.productAffiliates.<a href="/src/api/resources/productAffiliates/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ProductAffiliate, Whop.ListProductAffiliatesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists affiliate enrollments for an account's products, newest first, including affiliates who have not made a referral. Requires `affiliate:basic:read` on the account. Email addresses and email search also require `member:email:read`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.productAffiliates.list({
    account_id: "account_id",
    product_ids: ["prod_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.productAffiliates.list({
    account_id: "account_id",
    product_ids: ["prod_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListProductAffiliatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductAffiliatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Products
<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ProductListItem, Whop.ListProductsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's products, or searches the public marketplace when you omit `account_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.products.list({
    visibilities: ["visible"],
    access_pass_types: ["regular"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.products.list({
    visibilities: ["visible"],
    access_pass_types: ["regular"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">create</a>({ ...params }) -> Whop.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new product for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.create({
    title: "Interior Deep Clean"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a product. Requires no authentication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteProductsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a product. Only products with no memberships, entries, reviews, or invoices can be deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">update</a>({ ...params }) -> Whop.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">publish</a>({ ...params }) -> Whop.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a product to the whop.com marketplace for review. The product moves to `pending_review`; a Whop reviewer approves it before it goes live. Requires a logo, a headline, and at least one gallery image or video; the request fails naming whichever is missing.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.publish({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PublishProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">unpublish</a>({ ...params }) -> Whop.Product</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a product from the whop.com marketplace. The product moves to `not_available`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.unpublish({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UnpublishProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Promo Codes
<details><summary><code>client.promoCodes.<a href="/src/api/resources/promoCodes/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PromoCodeListItem, Whop.ListPromoCodesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's promo codes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.promoCodes.list({
    account_id: "account_id",
    product_ids: ["prod_xxxxxxxxxxxxxx"],
    plan_ids: ["plan_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.promoCodes.list({
    account_id: "account_id",
    product_ids: ["prod_xxxxxxxxxxxxxx"],
    plan_ids: ["plan_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListPromoCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromoCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promoCodes.<a href="/src/api/resources/promoCodes/client/Client.ts">create</a>({ ...params }) -> Whop.PromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a promo code for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promoCodes.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    amount_off: 25,
    base_currency: "usd",
    code: "AFFILIATE25",
    new_users_only: true,
    promo_duration_months: 3,
    promo_type: "percentage"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePromoCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromoCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promoCodes.<a href="/src/api/resources/promoCodes/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a promo code by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promoCodes.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrievePromoCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromoCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promoCodes.<a href="/src/api/resources/promoCodes/client/Client.ts">delete</a>({ ...params }) -> Whop.DeletePromoCodesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archives a promo code so it cannot be used in future checkouts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promoCodes.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeletePromoCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromoCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promoCodes.<a href="/src/api/resources/promoCodes/client/Client.ts">activate</a>({ ...params }) -> Whop.PromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Turns an inactive promo code back on so it can be redeemed at checkout.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promoCodes.activate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ActivatePromoCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromoCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promoCodes.<a href="/src/api/resources/promoCodes/client/Client.ts">deactivate</a>({ ...params }) -> Whop.PromoCode</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Turns off an active promo code so it can no longer be redeemed at checkout.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promoCodes.deactivate({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeactivatePromoCodesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromoCodesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Reactions
<details><summary><code>client.reactions.<a href="/src/api/resources/reactions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ReactionListItem, Whop.ListReactionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of emoji reactions on a specific message or forum post, sorted by most recent.

Required permissions (one of):
 - `chat:read`
 - `dms:read`
 - `forum:read`
 - `livestream:chat:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reactions.list({
    first: 42,
    last: 42,
    resource_id: "resource_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reactions.list({
    first: 42,
    last: 42,
    resource_id: "resource_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reactions.<a href="/src/api/resources/reactions/client/Client.ts">create</a>({ ...params }) -> Whop.Reaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add an emoji reaction or poll vote to a message or forum post. In forums, the reaction is always a like.

Required permissions (one of):
 - `chat:read`
 - `dms:read`
 - `forum:read`
 - `livestream:chat:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactions.create({
    resource_id: "resource_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reactions.<a href="/src/api/resources/reactions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Reaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing reaction.

Required permissions (one of):
 - `chat:read`
 - `dms:read`
 - `forum:read`
 - `livestream:chat:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactions.retrieve({
    id: "reac_xxxxxxxxxxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reactions.<a href="/src/api/resources/reactions/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove an emoji reaction from a message or forum post. Only the reaction author or a channel admin can remove a reaction.

Required permissions (one of):
 - `chat:read`
 - `dms:read`
 - `forum:read`
 - `livestream:chat:read`
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactions.delete({
    id: "reac_xxxxxxxxxxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteReactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Refunds
<details><summary><code>client.refunds.<a href="/src/api/resources/refunds/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Refund, Whop.ListRefundsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists refunds the caller can read, newest first. Filter by payment, account, or buyer to narrow the results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.refunds.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.refunds.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListRefundsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RefundsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.refunds.<a href="/src/api/resources/refunds/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Refund</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one refund.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refunds.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveRefundsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RefundsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Resolution Center Cases
<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ResolutionCenterCase, Whop.ListResolutionCenterCasesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists resolution center cases. Without `account_id` you get every case you can read — the ones you opened as a buyer and every account you are a team member of; the filters narrow that list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.resolutionCenterCases.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.resolutionCenterCases.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">create</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Opens a case, as the customer, against one of your own payments. Provide the payment (`receipt_id`), the `reason`, and a `message`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.create({
    message: "The mobile detailer never showed up for the Ceramic Coating appointment.",
    reason: "fraudulent",
    receipt_id: "pay_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">summary</a>({ ...params }) -> Whop.SummaryResolutionCenterCasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Aggregates the same cases `GET /resolution_center_cases` lists, using the same filters. Use it to build status tabs and issue filters without paging the whole list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.summary();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SummaryResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">retrieve</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single resolution center case with its full event timeline.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">accept</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Accepts the case in the customer's favor, as the merchant: refunds the payment in full and closes the case.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.accept({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AcceptResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">appeal</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Appeals a decision, as the customer, on a case that closed in the merchant's favor. Escalates the case to Whop for platform review. A case can be appealed once.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.appeal({
    id: "id",
    message: "The coating is already flaking on the hood two weeks later."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AppealResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">deny</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Denies the case, as the merchant: rejects the claim and closes the case with no refund.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.deny({
    id: "id",
    message: "The ceramic coating was applied and the vehicle was collected on 2026-01-05."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DenyResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">events</a>({ ...params }) -> core.Page&lt;Whop.ResolutionEvent, Whop.EventsResolutionCenterCasesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the case timeline, newest first. Events the viewer is not allowed to see are omitted — a customer reads the customer-visible timeline, the merchant reads the full one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.resolutionCenterCases.events({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.resolutionCenterCases.events({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.EventsResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">reply</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replies to an open request for information on the case. As the merchant this answers Whop's request (valid while the case awaits your information); as the customer it provides the information requested from you. The actor is resolved from the credential.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.reply({
    id: "id",
    message: "Here are the before and after photos from the Burnet Rd bay."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ReplyResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">requestInfo</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asks the customer for more information, as the merchant. Allowed up to 3 times per case before you must accept or deny it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.requestInfo({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RequestInfoResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.resolutionCenterCases.<a href="/src/api/resources/resolutionCenterCases/client/Client.ts">withdraw</a>({ ...params }) -> Whop.ResolutionCenterCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Withdraws (cancels) a case you opened, as the customer. Only possible while the case is still open.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.resolutionCenterCases.withdraw({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.WithdrawResolutionCenterCasesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResolutionCenterCasesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Reviews
<details><summary><code>client.reviews.<a href="/src/api/resources/reviews/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ReviewListItem, Whop.ListReviewsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the customer reviews for a product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reviews.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    min_stars: 42,
    max_stars: 42,
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reviews.list({
    first: 42,
    last: 42,
    product_id: "prod_xxxxxxxxxxxxx",
    min_stars: 42,
    max_stars: 42,
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListReviewsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReviewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reviews.<a href="/src/api/resources/reviews/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Review</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing review.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reviews.retrieve({
    id: "rev_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveReviewsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReviewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Setup Intents
<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.SetupIntent, Whop.ListSetupIntentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists setup intents newest first. An account API key lists its own account; a user token lists every account it can read, or one account with `account_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.setupIntents.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.setupIntents.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListSetupIntentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">create</a>({ ...params }) -> Whop.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Saves a buyer's payment method for later without charging it — one the buyer just supplied through the payment elements in setup mode, or one already on file to re-verify. The setup completes in the background, so the response is the setup intent as created, not its outcome: hand `client_secret` to the elements' `handleNextAction`, or poll Retrieve setup status. A buyer's own token holding `member:payment_methods:use` may create a setup intent for itself from a confirmation token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntents.create({
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateSetupIntentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">retrieve</a>({ ...params }) -> Whop.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a setup intent. Once its `status` is `succeeded`, charge the saved method by its `payment_method_id`. The buyer's own token may retrieve a setup intent that belongs to it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntents.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveSetupIntentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">updateReturnUrl</a>({ ...params }) -> Whop.SetupStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes where the buyer lands after completing an off-site step, up until they return. Accepts either a secret key or the setup's own `client_secret`, so the surface that knows the final destination can set it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntents.updateReturnUrl({
    setup_intent_id: "setup_intent_id",
    return_url: "https://shinetime.example/checkout/thanks"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateReturnUrlSetupIntentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">retrieveStatus</a>({ ...params }) -> Whop.SetupStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves how far a setup has got and what the buyer must do next, if anything. Collection runs in the background, so poll this rather than reading the create response. Accepts either a secret key or the setup's own `client_secret`, so the surface collecting the payment method can poll it directly.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntents.retrieveStatus({
    setup_intent_id: "setup_intent_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveStatusSetupIntentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Shipments
<details><summary><code>client.shipments.<a href="/src/api/resources/shipments/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Shipment, Whop.ListShipmentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's shipments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.shipments.list({
    payment_id: ["pay_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.shipments.list({
    payment_id: ["pay_xxxxxxxxxxxxxx"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListShipmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShipmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shipments.<a href="/src/api/resources/shipments/client/Client.ts">create</a>({ ...params }) -> Whop.Shipment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attaches a carrier tracking number to a payment and begins tracking it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shipments.create({
    payment_id: "pay_xxxxxxxxxxxxxx",
    tracking_number: "1Z999AA10123456784"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateShipmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShipmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shipments.<a href="/src/api/resources/shipments/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Shipment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a shipment by its ID, or by the ID of the payment it fulfills.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shipments.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveShipmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShipmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shipments.<a href="/src/api/resources/shipments/client/Client.ts">update</a>({ ...params }) -> Whop.Shipment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a shipment's tracking number and re-tracks it with the carrier.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shipments.update({
    id: "id",
    tracking_number: "9400111899223456789012"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateShipmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShipmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Social Accounts
<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.SocialAccount, Whop.ListSocialAccountsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. List external accounts with `GET /external_accounts` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.socialAccounts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.socialAccounts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">create</a>({ ...params }) -> Whop.SocialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Create external accounts with `POST /external_accounts` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.create({
    platform: "facebook"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">connect</a>({ ...params }) -> Whop.ConnectSocialAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Connect external accounts with `POST /external_accounts/connect` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.connect({
    platform: "meta_business",
    redirect_url: "https://example.com/settings/social-accounts"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ConnectSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteSocialAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Disconnect external accounts with `DELETE /external_accounts/{id}` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">leadForms</a>({ ...params }) -> Whop.LeadFormsSocialAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. List lead forms with `GET /external_accounts/{id}/lead_forms` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.leadForms({
    id: "id",
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.LeadFormsSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">partners</a>({ ...params }) -> core.Page&lt;Whop.SocialAccount, Whop.PartnersSocialAccountsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. List partners with `GET /external_accounts/{external_account_id}/partners` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.socialAccounts.partners({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.socialAccounts.partners({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PartnersSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">addPartner</a>({ ...params }) -> Whop.SocialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Add partners with `POST /external_accounts/{external_account_id}/partners` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.addPartner({
    id: "id",
    username: "@luverahealth"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AddPartnerSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">removePartner</a>({ ...params }) -> Whop.RemovePartnerSocialAccountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Remove partners with `DELETE /external_accounts/{external_account_id}/partners/{id}` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.removePartner({
    id: "id",
    partner_id: "partner_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RemovePartnerSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">posts</a>({ ...params }) -> core.Page&lt;Whop.SocialAccountPost, Whop.PostsSocialAccountsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. List posts with `GET /external_accounts/{id}/posts` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.socialAccounts.posts({
    id: "id",
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.socialAccounts.posts({
    id: "id",
    account_id: "account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.PostsSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">refresh</a>({ ...params }) -> Whop.SocialAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Refresh external accounts with `POST /external_accounts/{id}/refresh` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.socialAccounts.refresh({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RefreshSocialAccountsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SocialAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Stats
<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">list</a>() -> Whop.ListStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated. Lists every metric without saying which ones you can chart. List chartable metrics with `GET /stats/time_series`, and aggregates that are not bucketed over time with `GET /stats/reports`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `StatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deprecated compatibility endpoint. Retrieve a metric's time series with `GET /stats/time_series/{metric}` instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.retrieve({
    metric: "metric",
    from: "from",
    to: "to",
    ad_campaign_ids: ["adcamp_xxxxxxxxxxxxxx"],
    ad_group_ids: ["adgrp_xxxxxxxxxxxxxx"],
    ad_ids: ["ad_xxxxxxxxxxxxxx"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveStatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SupportChannels
<details><summary><code>client.supportChannels.<a href="/src/api/resources/supportChannels/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.SupportChannelListItem, Whop.ListSupportChannelsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists support channels between an account's team and its customers, most recently active first by default. Pass `open=true` to find channels awaiting a support response.

Required permissions:
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.supportChannels.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.supportChannels.list({
    first: 42,
    last: 42,
    account_id: "biz_xxxxxxxxxxxxxx"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListSupportChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SupportChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.supportChannels.<a href="/src/api/resources/supportChannels/client/Client.ts">create</a>({ ...params }) -> Whop.SupportChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Opens a support channel between an account's team and a customer. Returns the existing channel if that customer already has one.

Required permissions:
 - `support_chat:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.supportChannels.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateSupportChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SupportChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.supportChannels.<a href="/src/api/resources/supportChannels/client/Client.ts">retrieve</a>({ ...params }) -> Whop.SupportChannel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing support channel.

Required permissions:
 - `support_chat:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.supportChannels.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveSupportChannelsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SupportChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Swaps
<details><summary><code>client.swaps.<a href="/src/api/resources/swaps/client/Client.ts">list</a>({ ...params }) -> Whop.ListSwapsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the completed or pending swaps for an account or user — currently only the most recent one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.swaps.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListSwapsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SwapsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.swaps.<a href="/src/api/resources/swaps/client/Client.ts">create</a>({ ...params }) -> Whop.CreateSwapsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Swaps one token for another in an account or user's wallet, or converts between their fiat balances at the mid-market rate. Crypto swaps finish in the background — retrieve the swap to follow its status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.swaps.create({
    from_token: "usd",
    to_token: "cad"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateSwapsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SwapsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.swaps.<a href="/src/api/resources/swaps/client/Client.ts">createQuote</a>({ ...params }) -> Whop.CreateQuoteSwapsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Previews the price of a swap before you create it. Fiat pairs quote the mid-market rate — the same rate creating the swap fills at. No funds move, nothing is saved, and no authentication is required.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.swaps.createQuote({
    amount: "100",
    from_token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    to_token: "0x1b64b9025eebb9a6239575df9ea4b9ac46d4d193"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateQuoteSwapsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SwapsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.swaps.<a href="/src/api/resources/swaps/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveSwapsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a swap and its status. Poll it after creating a crypto swap, which finishes in the background.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.swaps.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveSwapsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SwapsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Team Members
<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.TeamMember, Whop.ListTeamMembersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's team members, including pending invites. A user credential with `company:basic:read` may list only its own joined membership by passing its own `user_id` and `status=joined`. Listing `role=workforce` is also allowed with the `bounty:create` scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.teamMembers.list({
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.teamMembers.list({
    account_id: "account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListTeamMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">create</a>({ ...params }) -> Whop.TeamMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a member to an account's team with a system role. Identify them by exactly one of `user_id` or `email`. If the person has not yet accepted — or the email does not belong to a Whop account yet — an invitation is sent instead and the response is `202` with an `object` of `team_member_invite`. If they already have a pending invite, the request fails with a `400`. Granting the `workforce` role is also allowed with the `bounty:create` scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    role: "owner"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateTeamMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">retrieve</a>({ ...params }) -> Whop.TeamMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a team member or pending invite by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveTeamMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteTeamMembersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a team member from the account, or revokes a pending invite when given an `ausri_` ID. A user session may delete its own membership to leave the team without the delete scope. Removing a member on the `workforce` role is also allowed with the `bounty:create` scope. The account owner cannot be removed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteTeamMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teamMembers.<a href="/src/api/resources/teamMembers/client/Client.ts">update</a>({ ...params }) -> Whop.TeamMember</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes a team member's system role. Requires a user session — account API keys cannot change member roles. The account owner's role cannot be changed, and you cannot change your own role.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teamMembers.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateTeamMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamMembersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Topups
<details><summary><code>client.topups.<a href="/src/api/resources/topups/client/Client.ts">create</a>({ ...params }) -> Whop.Topup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add funds to an account's platform balance by charging a stored payment method. Top-ups have no fees or taxes and do not count as revenue.

Required permissions:
 - `payment:charge`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.topups.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    amount: 6.9,
    currency: "usd",
    payment_method_id: "pmt_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateTopupsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TopupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Trades
<details><summary><code>client.trades.<a href="/src/api/resources/trades/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Trade, Whop.ListTradesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists trades you can access, newest first. User credentials see their own trades and those of accounts they belong to, including connected accounts; account credentials see their account and its connected accounts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.trades.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.trades.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListTradesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TradesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.trades.<a href="/src/api/resources/trades/client/Client.ts">create</a>({ ...params }) -> Whop.Trade</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Opens or closes a perpetual position from the Whop-managed wallet of an account or user. Answers `201` with the trade in `pending`; it runs in the background, so read it with `GET /trades/:id` until its `status` is `completed`, `failed` or `in_review`. One trade runs at a time for each wallet, and a retry with the same `Idempotency-Key` returns the same trade.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.trades.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    market: "BTC",
    type: "buy"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateTradesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TradesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.trades.<a href="/src/api/resources/trades/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Trade</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a trade. Read it until its `status` is `completed`, `failed` or `in_review`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.trades.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveTradesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TradesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Transfers
<details><summary><code>client.transfers.<a href="/src/api/resources/transfers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListTransfersResponse.Data.Item, Whop.ListTransfersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the transfers you can see, sent or received, newest first by default. Optional account filters narrow the results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfers.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfers.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransfersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfers.<a href="/src/api/resources/transfers/client/Client.ts">create</a>({ ...params }) -> Whop.CreateTransfersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Moves money between Whop balances, sends USDT from an account's wallet, or funds a claim link anyone with the URL can redeem. The `type` you send decides which object comes back.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfers.create({
    type: "balance",
    amount: 25,
    currency: "usd",
    destination_id: "user_xxxxxxxxxxxxxx",
    origin_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateTransfersRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransfersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfers.<a href="/src/api/resources/transfers/client/Client.ts">listRecipients</a>({ ...params }) -> core.Page&lt;Whop.ListRecipientsTransfersResponseDataItem, Whop.ListRecipientsTransfersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the people and accounts you can send money to from a balance. Pass a result's ID as `destination_id` when creating a transfer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.transfers.listRecipients({
    origin_id: "origin_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.transfers.listRecipients({
    origin_id: "origin_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListRecipientsTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransfersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.transfers.<a href="/src/api/resources/transfers/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveTransfersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single transfer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfers.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransfersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.User, Whop.ListUsersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for users by name or username, ranked by social proximity to the authenticated user. Without a `query`, returns the user's most recently followed users.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.users.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">me</a>({ ...params }) -> Whop.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the authenticated user. Same as `GET /users/:id` with the reserved id `me`: the self view, where self-only fields such as `email`, `balance`, and `cards` can be populated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.me();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.MeUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateMe</a>({ ...params }) -> Whop.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the authenticated user's global profile, or their profile override for an account when `account_id` is given. Not available to API keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateMe();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateMeUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">retrieve</a>({ ...params }) -> Whop.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a user by `user_` tag or username, or the authenticated user with the reserved id `me`. Self-only fields such as `email`, `balance`, and `earnings_usd` are populated only when the id is `me`, and are always `null` when addressing a user by tag or username.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>({ ...params }) -> Whop.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a user, addressed by `user_` tag, username, or the reserved id `me` for the authenticated user. A user token updates their own global profile; an API key updates the user's profile override for the account in `account_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">checkAccess</a>({ ...params }) -> Whop.CheckAccessUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks whether a user has access to an account, product, or experience the caller can reach.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.checkAccess({
    id: "id",
    resource_id: "resource_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CheckAccessUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">recommendActions</a>({ ...params }) -> Whop.RecommendActionsUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the recommended actions computed for the authenticated user: personal suggestions, such as starting a business or becoming an affiliate, pooled with the highest-impact actions across the accounts the user owns. You can only list your own recommended actions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.recommendActions({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RecommendActionsUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Variants
<details><summary><code>client.variants.<a href="/src/api/resources/variants/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.VariantListItem, Whop.ListVariantsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's variants. To list a product's public, buyable variants without authentication, omit `account_id` and pass `product_ids`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.variants.list({
    release_methods: ["buy_now"],
    visibilities: ["visible"],
    plan_types: ["renewal"],
    product_ids: ["prod_xxxxxxxxxxxxxx"],
    presentment_currency: "auto",
    ip_address: "203.0.113.7",
    presentment_country: "JP"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.variants.list({
    release_methods: ["buy_now"],
    visibilities: ["visible"],
    plan_types: ["renewal"],
    product_ids: ["prod_xxxxxxxxxxxxxx"],
    presentment_currency: "auto",
    ip_address: "203.0.113.7",
    presentment_country: "JP"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListVariantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VariantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.variants.<a href="/src/api/resources/variants/client/Client.ts">create</a>({ ...params }) -> Whop.Variant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a pricing variant for a product, defining the billing interval, price, and availability customers buy it with.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.variants.create();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateVariantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VariantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.variants.<a href="/src/api/resources/variants/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Variant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a variant. Requires no authentication; fields that need a permission are `null` for callers without it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.variants.retrieve({
    id: "id",
    presentment_currency: "auto",
    ip_address: "203.0.113.7",
    presentment_country: "JP"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveVariantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VariantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.variants.<a href="/src/api/resources/variants/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteVariantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a variant from a product. It stops selling immediately; existing memberships on it are unaffected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.variants.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteVariantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VariantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.variants.<a href="/src/api/resources/variants/client/Client.ts">update</a>({ ...params }) -> Whop.Variant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a variant's pricing, billing interval, visibility, stock, and other settings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.variants.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateVariantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VariantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.variants.<a href="/src/api/resources/variants/client/Client.ts">calculateTax</a>({ ...params }) -> Whop.CalculateTaxVariantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Previews tax for a variant before checkout, based on the buyer's location.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.variants.calculateTax({
    id: "id",
    address: {
        country: "DE",
        postal_code: "10115"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CalculateTaxVariantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VariantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Verifications
<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">list</a>({ ...params }) -> Whop.ListVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the verifications for an account or user, including their status and any required actions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListVerificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">create</a>({ ...params }) -> Whop.CreateVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts a hosted verification session for an account or user, or returns the active session when one already exists; any fields you send prefill it. To skip the hosted session, send `documents` to verify the person from files in this request, `share_token` to reuse a verification another Sumsub account completed, or `verification_id` to reuse one the signed-in user completed on Whop. Once the account has an `approved` verification, every mode except `verification_id` is rejected — unlink it first to start a new one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.create({
    body: {
        kind: "individual"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateVerificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a verification by ID, including its status and any information or documents still required.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveVerificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">update</a>({ ...params }) -> Whop.UpdateVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates editable profile details or submits answers for items returned in `requested_information`. Once a verification is `approved` its profile details are locked and can no longer be edited.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.update({
    id: "id",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateVerificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Waitlist Entries
<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.WaitlistEntry, Whop.ListWaitlistEntriesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the waitlist signups you can see. `waitlist_entry:read` returns the user's own signups and `plan:waitlist:read` returns signups to the seller accounts they are authorized on; with both, you get both sets. Account credentials see only their own account's signups.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.waitlistEntries.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.waitlistEntries.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">create</a>({ ...params }) -> Whop.WaitlistEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Joins a free waitlist variant as the authenticated user. Requires `waitlist_entry:create`. Joining again returns the existing pending signup, or the approved one while its membership is valid. Paid variants are rejected; joining collects no payment method and grants no membership.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.waitlistEntries.create({
    plan_id: "plan_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">approveAll</a>({ ...params }) -> Whop.ApproveAllWaitlistEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Queues approval of every pending signup for an account, optionally narrowed to a variant. Requires `plan:waitlist:manage`. Paid signups may charge saved payment methods. Approval runs asynchronously: list signups with `status` set to `pending` to follow progress, and retrieve a signup to read its outcome. Signups created after this request are excluded.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.waitlistEntries.approveAll({
    account_id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ApproveAllWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">retrieve</a>({ ...params }) -> Whop.WaitlistEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a signup the caller owns, with `waitlist_entry:read`, or one submitted to an account they can read, with `plan:waitlist:read`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.waitlistEntries.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">approve</a>({ ...params }) -> Whop.WaitlistEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Queues approval of a pending signup. Requires `plan:waitlist:manage` on its seller account. Paid signups may charge their saved payment method. Returns the signup's current state; retrieve it to read `status` and `approval_failure_reason` after processing.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.waitlistEntries.approve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ApproveWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">cancel</a>({ ...params }) -> Whop.WaitlistEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Withdraws the caller's own pending signup. Requires `waitlist_entry:cancel`. Does not cancel an approved membership.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.waitlistEntries.cancel({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CancelWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.waitlistEntries.<a href="/src/api/resources/waitlistEntries/client/Client.ts">deny</a>({ ...params }) -> Whop.WaitlistEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Denies a pending signup. Requires `plan:waitlist:manage` on its seller account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.waitlistEntries.deny({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DenyWaitlistEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WaitlistEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Webhooks
<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.WebhookListItem, Whop.ListWebhooksResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of webhook endpoints configured for an account, ordered by most recently created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.webhooks.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.webhooks.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>({ ...params }) -> Whop.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a webhook endpoint that receives event notifications via HTTP POST.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create({
    url: "https://example.com/hooks"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing webhook.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently deletes a webhook endpoint. To stop deliveries without deleting it, set `enabled` to `false` with `PATCH /webhooks/:id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DeleteWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">update</a>({ ...params }) -> Whop.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a webhook endpoint's URL, subscribed events, pinned payload version, or enabled state.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listDeliveries</a>({ ...params }) -> core.Page&lt;Whop.WebhookDelivery, Whop.ListDeliveriesWebhooksResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of delivery attempts for a webhook, ordered by most recent first. Includes the request payload, response body, response code, and timing for each attempt.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.webhooks.listDeliveries({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.webhooks.listDeliveries({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListDeliveriesWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">replayDelivery</a>({ ...params }) -> Whop.ReplayDeliveryWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-sends the exact payload of a past delivery to the webhook's current URL and returns the delivery result. The replay keeps the original `webhook-id` unless you pass `regenerate_id`, so consumers that deduplicate on it can drop events they already processed. Only available for enabled webhooks on API version `v1`; deliveries are retained for 30 days.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.replayDelivery({
    id: "id",
    delivery_id: "delivery_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ReplayDeliveryWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">replay</a>({ ...params }) -> Whop.ReplayWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-sends the webhook's past deliveries within a time window, optionally limited to specific events or to failed deliveries. Use it to recover events your endpoint missed. The replay runs asynchronously and nothing about it is stored: each re-send appears as a new entry in the webhook's delivery log. Each matching message is re-sent once, with its original `webhook-id` unless you pass `regenerate_ids`. Only available for enabled webhooks on API version `v1`; deliveries are retained for 30 days.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.replay({
    id: "id",
    sent_after: "2026-01-01T12:00:00.000Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ReplayWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">test</a>({ ...params }) -> Whop.TestWebhooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a sample payload for the given event to the webhook's URL and returns the delivery result.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.test({
    id: "id",
    event: "payment.succeeded"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.TestWebhooksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhooksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts Fees
<details><summary><code>client.accounts.fees.<a href="/src/api/resources/accounts/resources/fees/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AccountFees</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the account's fees as a single document keyed by fee, with any markups its platform adds. Connected accounts see the rates in effect for them. `adjustable` on each fee says what you may change with Update Account Fees.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.fees.retrieve({
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.RetrieveFeesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.fees.<a href="/src/api/resources/accounts/resources/fees/client/Client.ts">update</a>({ ...params }) -> Whop.AccountFees</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the account's fees. Each key present in the body is replaced; omitted keys are left untouched. Only fees that Retrieve Account Fees reports as `adjustable` can be changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.fees.update({
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.UpdateFeesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts FinancingApplications
<details><summary><code>client.accounts.financingApplications.<a href="/src/api/resources/accounts/resources/financingApplications/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.FinancingApplication, Whop.ListFinancingApplicationsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists payment-financing applications for an account. Account credentials can list their own account and its direct connected accounts, but not deeper descendants; user credentials need read access to the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounts.financingApplications.list({
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounts.financingApplications.list({
    account_id: "account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.ListFinancingApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancingApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.financingApplications.<a href="/src/api/resources/accounts/resources/financingApplications/client/Client.ts">create</a>({ ...params }) -> Whop.FinancingApplication</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts an application for payment-financing approval, or returns the account's open one: an application in `awaiting_review` takes precedence over one in `requires_collection`, and the open application is reused across different `Idempotency-Key` values. Creating an application does not submit it for review. The account must have a Whop balance set up, and accounts in restricted industries cannot apply. Once an application closes, the account can apply again.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.financingApplications.create({
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.CreateFinancingApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancingApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.financingApplications.<a href="/src/api/resources/accounts/resources/financingApplications/client/Client.ts">retrieve</a>({ ...params }) -> Whop.FinancingApplication</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payment-financing application with its review state, requirements, saved answers, documents, current terms, and review feedback. Requires read access to the account that owns it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.financingApplications.retrieve({
    account_id: "account_id",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.RetrieveFinancingApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancingApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.financingApplications.<a href="/src/api/resources/accounts/resources/financingApplications/client/Client.ts">update</a>({ ...params }) -> Whop.FinancingApplication</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Saves merchant answers to an application in `requires_collection`. The batch is atomic: if any answer is rejected, none are saved. Omitted requirements and answer fields are left unchanged. Saving answers does not submit the application; call Submit Financing Application when it is complete.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.financingApplications.update({
    account_id: "account_id",
    id: "id",
    answers: [{
            requirement_id: "inrqi_xxxxxxxxxxxxxx"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.UpdateFinancingApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancingApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.financingApplications.<a href="/src/api/resources/accounts/resources/financingApplications/client/Client.ts">submit</a>({ ...params }) -> Whop.FinancingApplication</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a complete application for financing review, recording the merchant's acceptance, who submitted, and when, then moving it to `awaiting_review`. Before calling, present the application's `terms.content`, policies, and disclosure to the merchant and collect affirmative acceptance; every resubmission needs acceptance again. Only an application in `requires_collection` can be submitted, including after a reviewer requests more information. Retry with the same `Idempotency-Key`: submitting an application already in review without a replay returns an error. Approval does not by itself enable financing payment methods.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.financingApplications.submit({
    account_id: "account_id",
    id: "id",
    merchant_acceptance: {
        accepted: true,
        terms_version: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.SubmitFinancingApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinancingApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts Preferences
<details><summary><code>client.accounts.preferences.<a href="/src/api/resources/accounts/resources/preferences/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrievePreferencesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the account's preferences: a singleton settings document keyed by preference name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.preferences.retrieve({
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.RetrievePreferencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PreferencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounts.preferences.<a href="/src/api/resources/accounts/resources/preferences/client/Client.ts">update</a>({ ...params }) -> Whop.UpdatePreferencesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the account's preferences. Each top-level key present in the body is replaced as a whole; omitted keys are left untouched.

Required scopes depend on the preferences being updated:

| Preferences | Required scope |
| --- | --- |
| `ads_payment_methods`, `ads_reporting_currency`, `ads_scheduling_timezone`, `ads_triple_whale_integration`, `ads_certifications` | `ad_campaign:create` |
| `cards_auto_top_up`, `cards_notifications` | `payout:account:update` |
| `dispute_fighter_enabled` | `payment:dispute` |
| `economic_intelligence_duration_key`, `economic_intelligence_auto_renew` | `company:update` |

When updating preferences from multiple rows, all corresponding scopes are required for the account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.preferences.update({
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.UpdatePreferencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PreferencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounts Reserves
<details><summary><code>client.accounts.reserves.<a href="/src/api/resources/accounts/resources/reserves/client/Client.ts">list</a>({ ...params }) -> Whop.ListReservesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists what the account's held balance is made of, one entry per currency: the total held, why each part is held, and the days it unlocks.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.reserves.list({
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.accounts.ListReservesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReservesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Affiliates Overrides
<details><summary><code>client.affiliates.overrides.<a href="/src/api/resources/affiliates/resources/overrides/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListOverridesResponse.Data.Item, Whop.ListOverridesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of overrides for an affiliate.

Required permissions:
 - `affiliate:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.affiliates.overrides.list({
    id: "aff_xxxxxxxxxxxxxx",
    first: 42,
    last: 42
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.affiliates.overrides.list({
    id: "aff_xxxxxxxxxxxxxx",
    first: 42,
    last: 42
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.affiliates.ListOverridesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverridesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.overrides.<a href="/src/api/resources/affiliates/resources/overrides/client/Client.ts">create</a>({ ...params }) -> Whop.CreateOverridesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a commission override for an affiliate.

Required permissions:
 - `affiliate:create`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.overrides.create({
    id: "aff_xxxxxxxxxxxxxx",
    body: {
        override_type: "standard",
        commission_value: 6.9,
        id: "id",
        plan_id: "plan_xxxxxxxxxxxxx"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.affiliates.CreateOverridesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverridesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.overrides.<a href="/src/api/resources/affiliates/resources/overrides/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveOverridesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of a specific affiliate override.

Required permissions:
 - `affiliate:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.overrides.retrieve({
    id: "aff_xxxxxxxxxxxxxx",
    override_id: "override_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.affiliates.RetrieveOverridesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverridesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.overrides.<a href="/src/api/resources/affiliates/resources/overrides/client/Client.ts">delete</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an affiliate override.

Required permissions:
 - `affiliate:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.overrides.delete({
    id: "aff_xxxxxxxxxxxxxx",
    override_id: "override_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.affiliates.DeleteOverridesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverridesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.affiliates.overrides.<a href="/src/api/resources/affiliates/resources/overrides/client/Client.ts">update</a>({ ...params }) -> Whop.UpdateOverridesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing affiliate override.

Required permissions:
 - `affiliate:update`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.affiliates.overrides.update({
    id: "aff_xxxxxxxxxxxxxx",
    override_id: "override_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.affiliates.UpdateOverridesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OverridesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Bounties Submissions
<details><summary><code>client.bounties.submissions.<a href="/src/api/resources/bounties/resources/submissions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PublicBountySubmission, Whop.ListSubmissionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a bounty's publicly visible work — submitted, approved, and denied submissions in the reduced public shape. Authentication is optional; a bounty that is not publicly visible returns `404`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.bounties.submissions.list({
    bounty_id: "bounty_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.bounties.submissions.list({
    bounty_id: "bounty_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.bounties.ListSubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bounties.submissions.<a href="/src/api/resources/bounties/resources/submissions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.PublicBountySubmission</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves one of a bounty's publicly visible submissions in the reduced public shape — the read behind a shared proof link, whose submission is usually outside the bounty page's capped preview. Authentication is optional; a bounty that is not publicly visible, and a submission that is not publicly visible work on it, both return `404`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bounties.submissions.retrieve({
    bounty_id: "bounty_id",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.bounties.RetrieveSubmissionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubmissionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ExternalAccounts Partners
<details><summary><code>client.externalAccounts.partners.<a href="/src/api/resources/externalAccounts/resources/partners/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ExternalAccount, Whop.ListPartnersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the creators an Instagram account runs partnership ads with, and where each creator's permission stands.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.externalAccounts.partners.list({
    external_account_id: "external_account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.externalAccounts.partners.list({
    external_account_id: "external_account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.externalAccounts.ListPartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.externalAccounts.partners.<a href="/src/api/resources/externalAccounts/resources/partners/client/Client.ts">create</a>({ ...params }) -> Whop.ExternalAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Invites an Instagram creator to run partnership ads with an Instagram account. The creator approves the invitation in the Instagram app, and `partnership_status` stays `pending` until they do; [refresh](/api-reference/beta/external-accounts/refresh) the partner to pick up their answer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.partners.create({
    external_account_id: "external_account_id",
    username: "@luverahealth"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.externalAccounts.CreatePartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.externalAccounts.partners.<a href="/src/api/resources/externalAccounts/resources/partners/client/Client.ts">delete</a>({ ...params }) -> Whop.DeletePartnersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revokes a creator's permission to run partnership ads with an Instagram account. Every account that advertises as the Instagram account loses the partner, since the permission belongs to the Instagram account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.partners.delete({
    external_account_id: "external_account_id",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.externalAccounts.DeletePartnersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PartnersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ExternalAccounts LeadForms
<details><summary><code>client.externalAccounts.leadForms.<a href="/src/api/resources/externalAccounts/resources/leadForms/client/Client.ts">list</a>({ ...params }) -> Whop.ListLeadFormsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the active lead (instant) forms that already exist on a connected Facebook page, so an ad can reuse one as its `lead_gen_form_id` instead of authoring a new form. Every active form comes back in a single response — the list is not paginated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.externalAccounts.leadForms.list({
    id: "id",
    account_id: "account_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.externalAccounts.ListLeadFormsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadFormsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ExternalAccounts Posts
<details><summary><code>client.externalAccounts.posts.<a href="/src/api/resources/externalAccounts/resources/posts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ExternalAccountPost, Whop.ListPostsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the existing posts of a connected Facebook page, Instagram account, or TikTok account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.externalAccounts.posts.list({
    id: "id",
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.externalAccounts.posts.list({
    id: "id",
    account_id: "account_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.externalAccounts.ListPostsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PostsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## FinancialReports Breakdown
<details><summary><code>client.financialReports.breakdown.<a href="/src/api/resources/financialReports/resources/breakdown/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveBreakdownResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Breaks one bucket of a financial report, such as payments received or card spend, into the customers, accounts, merchants, or campaigns that contributed most, with the rest summed as a remainder. Use it to explain a total from `GET /financial_reports`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.financialReports.breakdown.retrieve({
    account_id: "account_id",
    bucket: "transfers",
    direction: "money_in",
    currency: "currency",
    from: "2024-01-15T09:30:00Z",
    to: "2024-01-15T09:30:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.financialReports.RetrieveBreakdownRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BreakdownClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Members Logs
<details><summary><code>client.members.logs.<a href="/src/api/resources/members/resources/logs/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListLogsResponse.Data.Item, Whop.ListLogsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists activity for a member and all of their memberships that are not `drafted`, most recent first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.members.logs.list({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.members.logs.list({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.members.ListLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notifications Topics
<details><summary><code>client.notifications.topics.<a href="/src/api/resources/notifications/resources/topics/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.NotificationTopic, Whop.ListTopicsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the platform's visible notification topics — the categories users can set notification preferences on. App-created topics are not returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.notifications.topics.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.notifications.topics.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.notifications.ListTopicsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TopicsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partners Businesses
<details><summary><code>client.partners.businesses.<a href="/src/api/resources/partners/resources/businesses/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListBusinessesResponse.Data.Item, Whop.ListBusinessesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the businesses the authenticated user referred onto Whop, most recent first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.partners.businesses.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.partners.businesses.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.partners.ListBusinessesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.partners.businesses.<a href="/src/api/resources/partners/resources/businesses/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveBusinessesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single referred business and its referral terms.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.partners.businesses.retrieve({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.partners.RetrieveBusinessesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Partners Businesses Earnings
<details><summary><code>client.partners.businesses.earnings.<a href="/src/api/resources/partners/resources/businesses/resources/earnings/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListEarningsResponse.Data.Item, Whop.ListEarningsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the earnings Whop pays out for one referred business's activity, most recent first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.partners.businesses.earnings.list({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.partners.businesses.earnings.list({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.partners.businesses.ListEarningsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EarningsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payments Direct
<details><summary><code>client.payments.direct.<a href="/src/api/resources/payments/resources/direct/client/Client.ts">create</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Charges a buyer for a variant from card details you hold yourself, for integrators whose own systems are PCI compliant. Card details are accepted only on the vault host, which tokenizes the card before it reaches Whop; the official SDKs route this operation there, and raw card details sent to the regular host are refused. Collection runs in the background, so the response is the payment as created, not its outcome: poll Retrieve payment status for how far it has got and what the buyer must still do, such as 3D Secure.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.direct.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    billing_details: {
        address: {
            country: "US",
            postal_code: "94105"
        },
        email: "dana@shinetime.example",
        name: "Dana Shine"
    },
    payment_method: {
        type: "card"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.payments.CreateDirectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DirectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payouts Methods
<details><summary><code>client.payouts.methods.<a href="/src/api/resources/payouts/resources/methods/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListMethodsResponse.Data.Item, Whop.ListMethodsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the bank accounts, wallets, and crypto addresses an account or user can pay out to, newest first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.payouts.methods.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payouts.methods.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.payouts.ListMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.methods.<a href="/src/api/resources/payouts/resources/methods/client/Client.ts">create</a>({ ...params }) -> Whop.CreateMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Saves a bank account, wallet, or crypto address an account or user can pay out to, from a method listed by `GET /payouts/supported_methods`. Sensitive details are vaulted in transit and never stored raw.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.methods.create({
    supported_payout_method_id: "podst_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.payouts.CreateMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.methods.<a href="/src/api/resources/payouts/resources/methods/client/Client.ts">delete</a>({ ...params }) -> Whop.DeleteMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a saved payout method so it can no longer receive payouts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.methods.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.payouts.DeleteMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.methods.<a href="/src/api/resources/payouts/resources/methods/client/Client.ts">update</a>({ ...params }) -> Whop.UpdateMethodsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes the label used to identify a saved payout method or makes it the account's default payout method.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.methods.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.payouts.UpdateMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payouts SupportedMethods
<details><summary><code>client.payouts.supportedMethods.<a href="/src/api/resources/payouts/resources/supportedMethods/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListSupportedMethodsResponse.Data.Item, Whop.ListSupportedMethodsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the payout methods an account or user is eligible to add. Pass a result's ID as `supported_payout_method_id` to `POST /payouts/methods` to save one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.payouts.supportedMethods.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payouts.supportedMethods.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.payouts.ListSupportedMethodsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SupportedMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SetupIntents Direct
<details><summary><code>client.setupIntents.direct.<a href="/src/api/resources/setupIntents/resources/direct/client/Client.ts">create</a>({ ...params }) -> Whop.SetupIntent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Saves a card for later charges from card details you hold yourself, for integrators whose own systems are PCI compliant. Send this operation to the vault host, which tokenizes the card before it reaches Whop; the official SDKs route it there, and raw card details sent to the regular host are refused. The setup runs in the background: poll Retrieve setup status for its outcome and for anything the buyer must still do, such as 3D Secure. Once it succeeds, the saved payment method arrives on the `setup_intent.succeeded` webhook and in List payment methods for the member.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.setupIntents.direct.create({
    account_id: "biz_xxxxxxxxxxxxxx",
    billing_details: {
        address: {
            country: "US",
            postal_code: "94105"
        },
        email: "dana@shinetime.example",
        name: "Dana Shine"
    },
    payment_method: {
        type: "card"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.setupIntents.CreateDirectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DirectClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Stats Reports
<details><summary><code>client.stats.reports.<a href="/src/api/resources/stats/resources/reports/client/Client.ts">list</a>() -> Whop.ListReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists every report: the aggregates that are not bucketed over time, with the breakdowns and columns each one accepts. Use it to discover what a report can return before you retrieve it. For a bucketed series, use `GET /stats/time_series`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.reports.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.stats.reports.<a href="/src/api/resources/stats/resources/reports/client/Client.ts">platformTrends</a>({ ...params }) -> Whop.PlatformTrendsReportsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves payments across all of Whop for up to four windows at once, optionally broken down by business type, industry type, account country or customer country. The report covers the whole platform, so it takes no `account_id` and any authenticated caller can read it.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.reports.platformTrends();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.stats.PlatformTrendsReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Stats TimeSeries
<details><summary><code>client.stats.timeSeries.<a href="/src/api/resources/stats/resources/timeSeries/client/Client.ts">list</a>() -> Whop.ListTimeSeriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the metrics you can chart over time, with the unit each reports and the properties you can filter or break it down by. Aggregates that are not bucketed over time are reports, listed at `GET /stats/reports`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.timeSeries.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TimeSeriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.stats.timeSeries.<a href="/src/api/resources/stats/resources/timeSeries/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveTimeSeriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a metric as a series of points over a time range for an account or user. For an aggregate that is not bucketed over time, use a report from `GET /stats/reports`. The `market_prices` metric is public and requires no authentication.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.timeSeries.retrieve({
    metric: "metric",
    from: "from",
    to: "to",
    ad_campaign_ids: ["adcamp_xxxxxxxxxxxxxx"],
    ad_group_ids: ["adgrp_xxxxxxxxxxxxxx"],
    ad_ids: ["ad_xxxxxxxxxxxxxx"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.stats.RetrieveTimeSeriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimeSeriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users OauthGrants
<details><summary><code>client.users.oauthGrants.<a href="/src/api/resources/users/resources/oauthGrants/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.OauthGrant, Whop.ListOauthGrantsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's own OAuth grants: one per app they have authorized, per account they authorized it for. You cannot read another user's grants. Requires a user session: an API key or an OAuth token is refused, so an app can never enumerate the other apps a user has authorized.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.users.oauthGrants.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.oauthGrants.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.ListOauthGrantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OauthGrantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.oauthGrants.<a href="/src/api/resources/users/resources/oauthGrants/client/Client.ts">create</a>({ ...params }) -> Whop.OauthGrant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Completes the OAuth authorization step for the authenticated user: records their consent to the scopes an app asked for and mints an authorization code. Returns the grant plus a `redirect_url` carrying the code, which is returned only this once; the app exchanges it at `POST /oauth/token`. Requires a user session, because consent has to come from the account holder: an API key or an OAuth token is refused, so an app can never authorize itself. Send an `Idempotency-Key` so a retry returns the original `redirect_url` and code instead of issuing a second one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.oauthGrants.create({
    client_id: "app_xxxxxxxxxxxxxx",
    redirect_uri: "https://Booking.Shinetime.example:8443/oauth/Callback/",
    requested_scopes: ["profile"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.CreateOauthGrantsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OauthGrantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Passkeys
<details><summary><code>client.users.passkeys.<a href="/src/api/resources/users/resources/passkeys/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.Passkey, Whop.ListPasskeysResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's own passkeys, newest first. You cannot read another user's passkeys. Requires a user session: an API key or an OAuth token is refused, because a passkey confirms the account holder before a sensitive action and no app may enumerate one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.users.passkeys.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.passkeys.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.ListPasskeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PasskeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.passkeys.<a href="/src/api/resources/users/resources/passkeys/client/Client.ts">create</a>({ ...params }) -> Whop.Passkey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Registers a passkey for the authenticated user from the attestation a browser produced for a `registration` challenge. Mint that challenge first with `POST /users/me/passkeys/challenge`; it is single-use and expires 5 minutes after it is issued. Requires a user session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.passkeys.create({
    attestation_object: "YXR0ZXN0YXRpb24",
    client_data_json: "Y2xpZW50LWRhdGE",
    credential_id: "bmV3LWNyZWRlbnRpYWw",
    nickname: "Work laptop"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.CreatePasskeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PasskeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.passkeys.<a href="/src/api/resources/users/resources/passkeys/client/Client.ts">challenge</a>({ ...params }) -> Whop.ChallengePasskeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mints the challenge a browser needs to run a WebAuthn ceremony against the authenticated user's own passkeys. A `registration` challenge enrolls a new passkey; a `deletion` challenge is bound to the one passkey named by `passkey_id` and proves the user still holds it. Challenges are single-use and expire 5 minutes after they are issued, so send a fresh `Idempotency-Key` per ceremony — a replayed key returns the original challenge, which may already have expired. Requires a user session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.passkeys.challenge({
    challenge_type: "registration"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.ChallengePasskeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PasskeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.passkeys.<a href="/src/api/resources/users/resources/passkeys/client/Client.ts">delete</a>({ ...params }) -> Whop.DeletePasskeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes one of the authenticated user's own passkeys. The request body carries a WebAuthn assertion from the passkey being deleted, so possession of the credential is proven before it is removed: mint a `deletion` challenge for it first, run the ceremony with that passkey, and send the result here. Deleting the user's last passkey is allowed — their other step-up factors remain. Requires a user session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.passkeys.delete({
    id: "id",
    authenticator_data: "YXV0aGVudGljYXRvci1kYXRh",
    client_data_json: "Y2xpZW50LWRhdGE",
    signature: "c2lnbmF0dXJl"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.DeletePasskeysRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PasskeysClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Preferences
<details><summary><code>client.users.preferences.<a href="/src/api/resources/users/resources/preferences/client/Client.ts">retrieve</a>() -> Whop.UserPreferences</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the authenticated user's settings document.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preferences.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PreferencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.preferences.<a href="/src/api/resources/users/resources/preferences/client/Client.ts">update</a>({ ...params }) -> Whop.UserPreferences</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the authenticated user's settings document. Replaces the top-level keys it is given and leaves the rest untouched.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preferences.update();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.UpdatePreferencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PreferencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Preferences Notifications
<details><summary><code>client.users.preferences.notifications.<a href="/src/api/resources/users/resources/preferences/resources/notifications/client/Client.ts">set</a>({ ...params }) -> Whop.SetNotificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets the authenticated user's notification preferences, each addressed by `scope` rather than by ID. The batch is applied in one transaction: if any entry is rejected, none are written. Experience levels are applied before topic overrides, because setting a level replaces every topic preference for that experience, so an override sent alongside a level wins. The response reports what each scope now resolves to, in the order the entries were sent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preferences.notifications.set({
    preferences: [{
            scope: {}
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.preferences.SetNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Preferences Notifications Experiences
<details><summary><code>client.users.preferences.notifications.experiences.<a href="/src/api/resources/users/resources/preferences/resources/notifications/resources/experiences/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ExperienceNotificationPreference, Whop.ListExperiencesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's per-experience notification levels. Experiences the user never set a level for are omitted — their effective level is `all`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.users.preferences.notifications.experiences.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.preferences.notifications.experiences.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.preferences.notifications.ListExperiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExperiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users Preferences Notifications Topics
<details><summary><code>client.users.preferences.notifications.topics.<a href="/src/api/resources/users/resources/preferences/resources/notifications/resources/topics/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.UserNotificationPreference, Whop.ListTopicsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's topic-scoped notification preferences, plus user-agnostic platform defaults. Per-experience levels are listed separately, by `GET /users/me/preferences/notifications/experiences`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.users.preferences.notifications.topics.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.preferences.notifications.topics.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.users.preferences.notifications.ListTopicsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TopicsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

