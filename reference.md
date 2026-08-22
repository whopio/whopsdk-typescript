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

Create a short-lived access token for authenticating API requests. When using API key authentication, provide company_id or user_id. When using OAuth, the user is derived from the token. Use this token with Whop's web and mobile embedded components.
</dd>
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

Generate a URL that directs a sub-merchant to their account portal, such as the hosted payouts dashboard or the KYC onboarding flow.
</dd>
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
    company_id: "biz_xxxxxxxxxxxxxx",
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

Lists accounts visible to the credential. User tokens return the user's business accounts; Account API keys return the requesting account and its connected accounts. Pass `parent_account_id` to return only that parent account's connected accounts.
</dd>
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

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">me</a>() -> Whop.Account</code></summary>
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

Retrieves a single account by ID or public route when it is visible to the credential, including its crypto wallet. The reserved id `me` retrieves the account associated with the current Account API key; user tokens have no single account, so they must address one by ID or route.
</dd>
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

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">update</a>({ ...params }) -> Whop.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an account. User tokens can update business accounts; Account API keys can update connected accounts. The reserved id `me` — accepted on Retrieve Account — resolves to the requesting account, which an Account API key cannot edit, so updates must name the connected account by its `biz_` id.
</dd>
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

Starts an LLC or C-Corp formation for a business account. Defaults to an LLC; set `entity_type` to `c_corp` to form a C-Corp, which additionally requires `share_structure` and officer `roles` on every founder. On submission, the application is validated and the response returns a hosted checkout URL. Once paid, the filing is submitted. Track progress through the account's [`company_formation`](/api-reference/beta/accounts/retrieve-account) field on Retrieve Account.
</dd>
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
    formation_state: "TX",
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

Creates an ad campaign for an account.
</dd>
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

Updates an ad campaign's editable fields (title, budget, schedule, bid strategy, special ad categories, and, before launch, budget optimization), and launches a draft campaign by setting status to active. Objective, budget type and desired cost per result are fixed at creation and cannot be changed.
</dd>
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

<details><summary><code>client.adCampaigns.<a href="/src/api/resources/adCampaigns/client/Client.ts">retryPayment</a>({ ...params }) -> Whop.AdCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retries billing for an ad campaign whose payment previously failed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adCampaigns.retryPayment({
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

**request:** `Whop.RetryPaymentAdCampaignsRequest` 
    
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

Resumes a paused ad campaign.
</dd>
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

Estimates how many people a draft targeting spec can reach, before an ad group is created. The body takes the same targeting fields as creating an ad group — `regions`, `demographics`, `detailed_targeting`, `audiences`, `languages`, and `devices` — and nothing is persisted.
</dd>
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

Searches the ad platform's targeting taxonomy for options to target an ad group with. Each result comes back in the exact shape the ad-group body accepts for its `type`, so it can be used in `detailed_targeting`, `regions`, or `languages` as-is. A blank `query` browses the small fixed lists (behaviors, browse demographic categories, languages); interests, work employers, job titles, schools, majors, and locations need a search term.
</dd>
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

Retrieves a single ad group.
</dd>
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

Deletes an ad group.
</dd>
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

Creates copies of the ad group in `duplicating` status and returns them — into its own campaign, or into target_ad_campaign_id (which must belong to the same account and be compatible with the ad group's targeting and goals); each copy transitions to its final status (matching the source's active/paused state) once duplication completes. Poll each returned ad group until it leaves `duplicating` — a copy that could not be completed is deleted and returns 404.
</dd>
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

## AdReports
<details><summary><code>client.adReports.<a href="/src/api/resources/adReports/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AdReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performance report for a company, ad campaigns, ad groups, or ads. Always returns aggregate `summary` totals summed across the scope. Set `granularity` to additionally get a time series, or set `breakdown` (`campaign`/`ad_group`/`ad`) to additionally get per-entity rows inside the requested scope. Exactly one of `companyId`, `adCampaignIds`, `adGroupIds`, or `adIds` must be provided.

Required permissions:
 - `ad_campaign:stats:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adReports.retrieve({
    company_id: "biz_xxxxxxxxxxxxxx",
    from: "2023-12-01T05:00:00Z",
    to: "2023-12-01T05:00:00Z"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveAdReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdReportsClient.RequestOptions` 
    
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

Creates an ad in an ad group.
</dd>
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

Copies the ad into its own ad group, or into target_ad_group_id (which must belong to the same account and be compatible with the ad). Copies keep the source ad's active/paused state.
</dd>
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

Returns a paginated list of affiliates for the actor in context, with optional filtering by status, search, and sorting.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.affiliates.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx"
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

Creates or finds an affiliate for a company and user.

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
    company_id: "biz_xxxxxxxxxxxxxx",
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

Archives an existing Affiliate

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

Unarchives an existing Affiliate

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

Update an AI chat's title, notification preferences, or associated company context.

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

Lists the catalog of permission actions that can be granted to users, apps, and API keys — the source for the dashboard's permission pickers. Small and returned in full on one page.
</dd>
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

Uploads a new build artifact for an app. Upload the file first (POST /files or a direct upload), then reference it here; iOS and Android take a .zip bundle, web takes a JavaScript file or a .zip archive of the hosted site.
</dd>
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

Lists apps on the Whop platform: the app store's live apps, or — with `account_id` and developer access to that account — every app the account owns. Requires authentication, except for the publicly readable lists: `verified_apps_only=true`, and `app_type=website` with no `account_id`, which returns every live deployed website that Whop has not verified — verified templates are the curated `verified_apps_only=true` list instead.
</dd>
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

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">updatePermissionsApp</a>({ ...params }) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the permission requirements for an app

Required permissions:
 - `developer:update_app_authorization`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.updatePermissionsApp({
    app_id: "app_id",
    requested_permissions: [{
            action: "action",
            is_required: true,
            justification: "justification"
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

**request:** `Whop.UpdatePermissionsAppRequest` 
    
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

Retrieves an app by ID, claimed route, or proxy domain id. Credential fields (api_key, default_api_key, secrets) render `null` unless the caller has the corresponding developer permission on the owning account.
</dd>
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

Lists a hosted app's server runtime logs, most recent first: console output, uncaught exceptions, and failed-request summaries captured on whop.app hosting. Logs are retained for 7 days.
</dd>
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

Lists uploaded customer-list audiences for an account. Pass `audience_id` to return a specific audience.
</dd>
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

Creates an audience. Default (`audience_type` omitted or `custom`): creates one audience from an uploaded customer identity CSV file (`name`, `column_mapping`, and `file_id` required) and starts processing it; responds with the audience object. With `filters`: creates an audience from saved People filters (`name` required) — membership is built from the account's People data, and `auto_refresh` decides whether it keeps tracking the filters or keeps whoever matched at creation. With `audience_type: lookalike`: creates a ladder of Meta lookalike audiences from an existing ready custom audience (`source_audience_id`, `count`, and `percentage` required) — `count` equal similarity bands slicing the top `percentage`% (3 audiences at 6% = 0–2%, 2–4%, 4–6%), each returned as its own audience in a `{ data: [...] }` envelope.
</dd>
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

Returns a paginated list of authorized team members for a company, with optional filtering by user, role, and creation date.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.authorizedUsers.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx",
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

Add a new authorized user to a company.

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
    company_id: "biz_xxxxxxxxxxxxxx",
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

Remove an authorized user from a company.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});

```
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

Creates a submission on a workforce bounty. Include a `deliverable` payload — any combination of links and uploaded files, with at least one of the two — and the submission goes straight to review; create is the only step. For `data_capture` bounties, omit the deliverable: this starts a claimed attempt whose proof accumulates server-side, and the separate submit endpoint sends it to review once complete. Requires a user credential — account API keys cannot author submissions.
</dd>
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

Submits a claimed attempt for review. A livestream attempt needs an ended proof stream and can attach an optional `deliverable` — links, files, and a caption in any combination; if the attempt already went to review when its stream ended, the payload attaches to it once, until reviewers start voting. A data capture attempt instead needs enough validated clip time and takes no payload. Only the worker who started the attempt can submit it — account API keys cannot.
</dd>
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

Lists an account's card transactions, newest first. Defaults to the account the credential belongs to. Covers every card the owner has ever had, including canceled cards and spend that predates a re-application, and team members only see transactions on the cards assigned to them. Pass `transaction_ids` to fetch specific transactions instead of paging for them.
</dd>
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

Fetches a single card transaction by its `citx_` identifier. The owner defaults to the account the credential belongs to.
</dd>
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

Issue a virtual card, or apply for card issuing.
</dd>
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

Retrieve a single card.
</dd>
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

Update, freeze, or cancel a card. Updating the card's name, billing address, or limits requires both `payout:account:update` and `company:balance:read`; a card's assigned holder may update their own card's pin and frozen state with any user token.
</dd>
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

## ChatChannels
<details><summary><code>client.chatChannels.<a href="/src/api/resources/chatChannels/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ChatChannelListItem, Whop.ListChatChannelsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of chat channels within a specific company, with optional filtering by product.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.chatChannels.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx"
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

Update moderation settings for a chat channel, such as who can post, banned words, and media restrictions.

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

Creates a reusable checkout configuration for an existing or inline plan.
</dd>
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

## Companies
<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.CompanyListItem, Whop.ListCompaniesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of companies. When parent_company_id is provided, lists connected accounts under that platform. When omitted, lists companies the current user has access to.

Required permissions:
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
const pageableResponse = await client.companies.list({
    first: 42,
    last: 42,
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companies.list({
    first: 42,
    last: 42,
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

**request:** `Whop.ListCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">create</a>({ ...params }) -> Whop.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new company. Pass parent_company_id to create a connected account under a platform, or omit it to create a company for the current user.

Required permissions:
 - `company:create`
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
await client.companies.create({
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

**request:** `Whop.CreateCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing company.

Required permissions:
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
await client.companies.retrieve({
    id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">update</a>({ ...params }) -> Whop.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a company's title, description, logo, and other settings.

Required permissions:
 - `company:update`
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
await client.companies.update({
    id: "biz_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">createApiKey</a>({ ...params }) -> Whop.CreateApiKeyCompaniesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an API key for a connected account (child company) owned by a parent company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.createApiKey({
    parent_company_id: "parent_company_id",
    child_company_id: "child_company_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateApiKeyCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
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

Returns a paginated list of token transactions for a user or company, depending on the authenticated actor, with optional filtering by user and transaction type.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companyTokenTransactions.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx"
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

Create a token transaction to add, subtract, or transfer tokens for a member within a company.

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
    amount: 6.9,
    company_id: "biz_xxxxxxxxxxxxxx",
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

Retrieves the details of an existing company token transaction.

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

Returns a paginated list of lesson interactions, filtered by lesson, course, user, or completion status.

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

Returns a paginated list of courses, filtered by either an experience or a company.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.courses.list({
    first: 42,
    last: 42,
    experience_id: "exp_xxxxxxxxxxxxxx",
    company_id: "biz_xxxxxxxxxxxxxx"
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

Retrieves the details of an existing course.

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

Retrieve the deposit methods for an account, including crypto and bank transfer.
</dd>
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
    destination: "destination"
});

```
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

Edits a dispute's evidence, while it is still editable. Sending it is a separate call.
</dd>
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

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">submitEvidenceDispute</a>({ ...params }) -> Whop.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit a payment dispute to the payment processor for review. Once submitted, no further edits can be made.

Required permissions:
 - `payment:dispute`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `company:basic:read`
 - `payment:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.submitEvidenceDispute({
    id: "dspt_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.SubmitEvidenceDisputeRequest` 
    
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

<details><summary><code>client.disputes.<a href="/src/api/resources/disputes/client/Client.ts">updateEvidenceDispute</a>({ ...params }) -> Whop.Dispute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a dispute with evidence data to attempt to win the dispute.

Required permissions:
 - `payment:dispute`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `company:basic:read`
 - `payment:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.disputes.updateEvidenceDispute({
    id: "dspt_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UpdateEvidenceDisputeRequest` 
    
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

Replaces the full set of uploaded evidence documents on a dispute, beyond the four fixed evidence slots. Send the files as multipart file parts to upload and attach in one call, or reference files already stored by `id`/`direct_upload_id`. Send every document the packet should carry — up to 10, 10MB each and 25MB in total; an empty list removes them all. Accepted content types: application/pdf, application/json, image/jpeg, image/png, image/webp — any other type is rejected.
</dd>
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

Returns a paginated list of DM channels for the currently authenticated user, sorted by most recently active.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dmChannels.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx"
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

Create a new DM channel between two or more users, optionally scoped to a specific company. Returns the existing channel if one already exists.

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

Permanently delete a DM channel and all of its messages. Only an admin of the channel can perform this action.

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

Update the settings of an existing DM channel, such as its display name. Only an admin of the channel can perform this action.

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

## Entries
<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.EntryListItem, Whop.ListEntriesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of waitlist entries for a company, with optional filtering by product, plan, status, and creation date.

Required permissions:
 - `plan:waitlist:read`
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
const pageableResponse = await client.entries.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.entries.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
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

**request:** `Whop.ListEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Entry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing waitlist entry.

Required permissions:
 - `plan:waitlist:read`
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
await client.entries.retrieve({
    id: "entry_xxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">approve</a>({ ...params }) -> Whop.ApproveEntriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Approve a pending waitlist entry, triggering the checkout process to grant the user access to the plan.

Required permissions:
 - `plan:waitlist:manage`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entries.approve({
    id: "entry_xxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ApproveEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.entries.<a href="/src/api/resources/entries/client/Client.ts">deny</a>({ ...params }) -> Whop.Entry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deny a pending waitlist entry, preventing the user from gaining access to the plan.

Required permissions:
 - `plan:waitlist:manage`
 - `plan:basic:read`
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
await client.entries.deny({
    id: "entry_xxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.DenyEntriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntriesClient.RequestOptions` 
    
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

Lists identity-linked events, most recent first by default. Pass identifier for one person's journey, or omit it to list events for an account within an explicit time range. Pass direction=asc to read a journey forwards from where it starts. Events are shaped like the POST /events intake: attribution in context, identity in user.
</dd>
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

Tracks a conversion or engagement event for an account.
</dd>
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

Returns a fully anonymized feed of recent platform-wide money movement, most recent first: purchases, affiliate commissions, card and ad spend, app revenue, off-platform sales, wallet deposits, card loads, claimed drops, transfers between accounts, and referral bonuses. Items carry only a `type`, the underlying event name, a USD amount, a coarse location under `user`, and a timestamp coarsened to the start of the minute; missing fields are omitted, not nulled. The payload is identical for every caller; no auth is required.
</dd>
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

Checks whether the Whop pixel is installed for an account. Recent pixel events count as proof on their own, so an account that has sent data lately comes back installed without a `url`. Pass a `url` and events from that page settle it; conversion events are also read across the hostname because they commonly fire on a later confirmation page. If the requested page hasn't sent any events lately, it is fetched and read for the pixel and conversion events wired on it. `installed` is only true when the pixel was actually seen — in the account's events or in the page.
</dd>
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

Returns a paginated list of experiences belonging to a company, with optional filtering by product and app.
</dd>
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
    company_id: "biz_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx",
    app_id: "app_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.experiences.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx",
    app_id: "app_xxxxxxxxxxxxxx",
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
    app_id: "app_xxxxxxxxxxxxxx",
    company_id: "biz_xxxxxxxxxxxxxx"
});

```
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

Attach an experience to a product, making it accessible to the product's customers.

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

Detach an experience from a product, removing customer access to it through that product.

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

Duplicates an existing experience. The name will be copied, unless provided. The new experience will be attached to the same products as the original experience.
If duplicating a Forum or Chat experience, the new experience will have the same settings as the original experience, e.g. who can post, who can comment, etc.
No content, e.g. posts, messages, lessons from within the original experience will be copied.


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

Starts an asynchronous CSV export of a resource for an account. Returns the export in `pending`; poll `GET /exports/{id}` until `download_url` is set.
</dd>
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

## FeeMarkups
<details><summary><code>client.feeMarkups.<a href="/src/api/resources/feeMarkups/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.FeeMarkupListItem, Whop.ListFeeMarkupsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of fee markups configured for a company. If the company is a platform account, returns the platform default markups.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.feeMarkups.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx"
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

Create or update a fee markup for a company. If a markup for the specified fee type already exists, it will be updated with the new values.

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
    company_id: "biz_xxxxxxxxxxxxxx",
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

Delete a fee markup configuration for a company. This removes the custom fee override and reverts to the parent company's default fees.

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

## Files
<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">create</a>({ ...params }) -> Whop.CreateFilesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new file record and receive a presigned URL for uploading content to S3.
</dd>
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
    filename: "filename"
});

```
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

Retrieves the details of an existing file.
</dd>
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
    id: "file_xxxxxxxxxxxxx"
});

```
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

## Ledgers
<details><summary><code>client.ledgers.<a href="/src/api/resources/ledgers/client/Client.ts">getFinancialReport</a>({ ...params }) -> Whop.GetFinancialReportResponse</code></summary>
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
await client.ledgers.getFinancialReport({
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

**request:** `Whop.GetFinancialReportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LedgersClient.RequestOptions` 
    
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

Create a new forum post or comment within an experience. Supports text content, attachments, polls, paywalling, and pinning. Pass experience_id 'public' with a company_id to post to a company's public forum.

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

Returns a paginated list of forums within a specific company, with optional filtering by product.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.forums.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    product_id: "prod_xxxxxxxxxxxxx"
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

Returns a paginated list of identity profiles. When company_id is provided, lists IPs currently linked to that company's ledger. When omitted, lists IPs linked to any ledger the actor can read (including child companies under a parent).

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.identityProfiles.listIdentityProfile({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx"
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

Unlinks an IdentityProfile from a LedgerAccount (flips the matching link to is_current=false).
</dd>
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

Returns a paginated list of invoices for a company, with optional filtering by product, status, collection method, and creation date.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.invoices.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
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
    collection_method: "send_invoice",
    company_id: "biz_xxxxxxxxxxxxxx",
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

Returns a paginated list of leads for a company, with optional filtering by product and creation date.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    created_after: "2023-12-01T05:00:00Z",
    created_before: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.leads.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    created_after: "2023-12-01T05:00:00Z",
    created_before: "2023-12-01T05:00:00Z"
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

Record a new lead for a company, capturing a potential customer's interest in a specific product.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});

```
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

Update the metadata or referrer information on an existing lead record.

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
const pageableResponse = await client.members.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.members.list();
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

Sends an email inviting one recipient to join the account through a free plan. Identify the recipient by exactly one of `user_id` or `email`. The invitation is bound to that recipient; after signing in, accepting it immediately grants the membership without checkout. This Experimental endpoint is available only to accounts enabled for membership invitations.
</dd>
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

Updates a membership: merge metadata key-value pairs, or toggle `cancel_at_period_end` — `true` schedules the cancellation for the end of the current billing period, `false` reverses a pending one.
</dd>
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

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">addFreeDaysMembership</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add free days to extend a membership's current billing period, expiration date, or Stripe trial.

Required permissions:
 - `member:manage`
 - `member:email:read`
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
await client.memberships.addFreeDaysMembership({
    id: "mem_xxxxxxxxxxxxxx",
    free_days: 42
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.AddFreeDaysMembershipRequest` 
    
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

Cancels a membership. Pass `cancel_at_period_end: true` to stop auto-renewal and keep access until the current billing period ends. Omit it (or pass `false`) to revoke access immediately. Buyers cannot cancel buy-now-pay-later (`splitit`, `sezzle`) or non-trial split-pay memberships.
</dd>
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

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">resyncAccessMembership</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-run access fulfillment for a membership. Recomputes the member's content access on Whop, re-validates their Discord link (re-adding them to the server and re-assigning roles if needed), and re-fulfills TradingView indicator access. Telegram access is invite-based and cannot be resynced here. The outcome is written to the membership's logs.

Required permissions:
 - `membership:resync_access`
 - `member:email:read`
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
await client.memberships.resyncAccessMembership({
    id: "mem_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ResyncAccessMembershipRequest` 
    
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

<details><summary><code>client.memberships.<a href="/src/api/resources/memberships/client/Client.ts">uncancelMembership</a>({ ...params }) -> Whop.Membership</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reverse a pending cancellation for a membership that was scheduled to cancel at period end.

Required permissions:
 - `member:manage`
 - `member:email:read`
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
await client.memberships.uncancelMembership({
    id: "mem_xxxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.UncancelMembershipRequest` 
    
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

Returns a paginated list of messages within a specific experience chat, DM, or group chat channel, sorted by creation time.

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

Send a new message in an experience chat, DM, or group chat channel. Supports text content, attachments, polls, and replies.

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

Permanently delete a message from an experience chat, DM, or group chat channel. Only the message author or a channel admin can delete a message.

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

Edit the content, attachments, or pinned status of an existing message in an experience chat, DM, or group chat channel.

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

Lists the authenticated user's notifications, newest first. Requires a user credential — an account API key has no notification feed. Without filters the feed spans every experience the user belongs to plus the teams they are a member of.
</dd>
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

Marks the authenticated user's notifications as read: one experience's (`experience_id`) or everything (`all: true`) — exactly one of the two. Requires a user credential. Responds with the refreshed badge rows for the affected scope.
</dd>
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

Retrieves a single notification by id — either an `id` returned by List Notifications, or the ephemeral id delivered with a push/websocket event. Requires a user credential.
</dd>
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

Ranks referrers by partner business earnings — all-time by default, or over the current day, month, year, or trailing 30 days. Authentication is optional: authenticated callers also get their own standing, anonymous callers get the rankings alone.
</dd>
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

Lists the users the caller referred onto Whop (newest first), each with the second-tier earnings the caller has made from that user's businesses.
</dd>
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

## Payment Method Domains
<details><summary><code>client.paymentMethodDomains.<a href="/src/api/resources/paymentMethodDomains/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PaymentMethodDomain, Whop.ListPaymentMethodDomainsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists payment method domains. Without `account_id`, returns the caller's own domains and those of every connected account.
</dd>
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

Registers a hostname with the wallet provider and attempts verification inline. Returns `verified` when the provider fetched the domain-association file (for Apple Pay, `/.well-known/apple-developer-merchantid-domain-association`), or `pending` when it could not — host the file, then retry with the verify endpoint.
</dd>
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

Returns a paginated list of payment methods for a member or company, or for the authenticated user when neither is given, with optional filtering by creation date. A payment method is a stored representation of how a customer intends to pay, such as a card, bank account, or digital wallet.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.paymentMethods.list({
    first: 42,
    last: 42,
    member_id: "mber_xxxxxxxxxxxxx",
    company_id: "biz_xxxxxxxxxxxxxx",
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

Retrieves the details of an existing payment method. Addresses a member's wallet when member_id or company_id is given, otherwise your own.

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
    company_id: "biz_xxxxxxxxxxxxxx",
    member_id: "mber_xxxxxxxxxxxxx"
});

```
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
    company_id: "biz_xxxxxxxxxxxxxx",
    member_id: "mber_xxxxxxxxxxxxx"
});

```
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

## Payments
<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.PaymentListItem, Whop.ListPaymentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of payments for the actor in context, with optional filtering by product, plan, status, billing reason, currency, and creation date.

Required permissions:
 - `payment:basic:read`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
 - `promo_code:basic:read`
 - `shipment:basic:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.payments.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    updated_before: "2023-12-01T05:00:00Z",
    updated_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payments.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z",
    updated_before: "2023-12-01T05:00:00Z",
    updated_after: "2023-12-01T05:00:00Z"
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

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">create</a>({ ...params }) -> Whop.CreatePaymentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Charge an existing member off-session using one of their stored payment methods. You can provide an existing plan, or create a new one in-line. This endpoint will respond with a payment object immediately, but the payment is processed asynchronously in the background. Use webhooks to be notified when the payment succeeds or fails.

Required permissions:
 - `payment:charge`
 - `plan:create`
 - `access_pass:create`
 - `access_pass:update`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
 - `promo_code:basic:read`
 - `shipment:basic:read`
 - `payment:dispute:read`
 - `payment:resolution_center_case:read`
</dd>
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
    company_id: "biz_xxxxxxxxxxxxxx",
    confirmation_token: "confirmation_token",
    plan: {
        currency: "usd"
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

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrievePaymentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing payment.

Required permissions:
 - `payment:basic:read`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
 - `promo_code:basic:read`
 - `shipment:basic:read`
 - `payment:dispute:read`
 - `payment:resolution_center_case:read`
</dd>
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
    id: "pay_xxxxxxxxxxxxxx"
});

```
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

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">listFees</a>({ ...params }) -> core.Page&lt;Whop.ListFeesPaymentsResponse.Data.Item, Whop.ListFeesPaymentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the list of fees associated with a specific payment, including platform fees and processing fees.

Required permissions:
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
const pageableResponse = await client.payments.listFees({
    id: "pay_xxxxxxxxxxxxxx",
    first: 42,
    last: 42
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payments.listFees({
    id: "pay_xxxxxxxxxxxxxx",
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

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">refund</a>({ ...params }) -> Whop.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Issue a full or partial refund for a payment. The refund is processed through the original payment processor and the membership status is updated accordingly.

Required permissions:
 - `payment:manage`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
 - `promo_code:basic:read`
 - `shipment:basic:read`
 - `payment:dispute:read`
 - `payment:resolution_center_case:read`
</dd>
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
    id: "pay_xxxxxxxxxxxxxx"
});

```
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

Retry a failed or pending payment. This re-attempts the charge using the original payment method and plan details.

Required permissions:
 - `payment:manage`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
 - `promo_code:basic:read`
 - `shipment:basic:read`
 - `payment:dispute:read`
 - `payment:resolution_center_case:read`
</dd>
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
    id: "pay_xxxxxxxxxxxxxx"
});

```
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

Void a payment that has not yet been settled. Voiding cancels the payment before it is captured by the payment processor.

Required permissions:
 - `payment:manage`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
 - `promo_code:basic:read`
 - `shipment:basic:read`
 - `payment:dispute:read`
 - `payment:resolution_center_case:read`
</dd>
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
    id: "pay_xxxxxxxxxxxxxx"
});

```
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

Returns a list of active payout methods configured for a company, ordered by most recently created.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.payoutMethods.listPayoutMethod({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx"
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
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreatePayoutsRequestBody` 
    
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

Fetches one payout by its `wdrl_` ID, or by the `cofr_` conversion request ID a stablecoin payout carries as `payout_request_id` — both ids answer with the same payout object.
</dd>
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

## People
<details><summary><code>client.people.<a href="/src/api/resources/people/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListPeopleResponse.Data.Item, Whop.ListPeopleResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the people (visitors and customers) of an account: the identity-linked person profiles aggregated from every pixel, payment, and platform event — identities, purchases and LTV, geo/device profile, traffic sources, and first/last marketing touches.
</dd>
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

Retrieves one person for an account. The identifier can be a person ID (prefixed `prsn_`), a user ID (prefixed `user_`), an email address, or a phone number — merged people resolve to the surviving profile.
</dd>
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

Returns a paginated list of plans belonging to an account, with optional filtering by visibility, type, release method, and product.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.plans.list({
    account_id: "account_id",
    release_methods: ["buy_now"],
    visibilities: ["visible"],
    plan_types: ["renewal"],
    product_ids: ["prod_xxxxxxxxxxxxxx"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.plans.list({
    account_id: "account_id",
    release_methods: ["buy_now"],
    visibilities: ["visible"],
    plan_types: ["renewal"],
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

Create a new pricing plan for a product. The plan defines the billing interval, price, and availability for customers.
</dd>
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

Retrieves the details of an existing plan.
</dd>
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

Permanently delete a plan from a product. Existing memberships on this plan will not be affected.
</dd>
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

Update a plan's pricing, billing interval, visibility, stock, and other settings.
</dd>
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

Previews tax for a plan before checkout, based on the buyer's location.
</dd>
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

## Products
<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ProductListItem, Whop.ListProductsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of products belonging to an account.
</dd>
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
    account_id: "account_id",
    visibilities: ["visible"],
    access_pass_types: ["regular"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.products.list({
    account_id: "account_id",
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

Retrieves the details of an existing product. This endpoint is publicly accessible.
</dd>
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

Submits a product to the whop.com marketplace for review. The product moves to `pending_review`; a Whop reviewer approves it before it goes live.
</dd>
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

Lists promo codes for an account with cursor pagination, filters, and sorting.
</dd>
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

Creates a promo code for an account. First-party sessions may attach an affiliate.
</dd>
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

## Recommended Actions
<details><summary><code>client.recommendedActions.<a href="/src/api/resources/recommendedActions/client/Client.ts">list</a>({ ...params }) -> Whop.ListRecommendedActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the recommended action chains for an account — short sequences of actions (create a product, price it, publish it) the account should run next, gated on what it already has.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recommendedActions.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.ListRecommendedActionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecommendedActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.recommendedActions.<a href="/src/api/resources/recommendedActions/client/Client.ts">retrieve</a>({ ...params }) -> Whop.AccountRecommendedActionChain</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a recommended action chain by id, including chains that have already been run. Seeded chains are reconstructed from their hard-coded chain; generated chains are read from the account's stored chain, with each step's filled-in input.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recommendedActions.retrieve({
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

**request:** `Whop.RetrieveRecommendedActionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecommendedActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.recommendedActions.<a href="/src/api/resources/recommendedActions/client/Client.ts">run</a>({ ...params }) -> Whop.RunRecommendedActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records that the caller ran a recommended action chain. Nothing is executed server-side yet — the client follows the chain's step CTAs itself; this writes the `recommended_action_chain.executed` analytics event.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recommendedActions.run({
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

**request:** `Whop.RunRecommendedActionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecommendedActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.recommendedActions.<a href="/src/api/resources/recommendedActions/client/Client.ts">listExecutions</a>({ ...params }) -> Whop.ListExecutionsRecommendedActionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the per-step record of a recommended action chain the server ran — one entry per step in position order, each carrying its current status and, once the step completed, the API response it produced. A chain that was never run server-side returns an empty list.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.recommendedActions.listExecutions({
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

**request:** `Whop.ListExecutionsRecommendedActionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RecommendedActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Refunds
<details><summary><code>client.refunds.<a href="/src/api/resources/refunds/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.RefundListItem, Whop.ListRefundsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of refunds, with optional filtering by payment, company, user, and creation date.

Required permissions:
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
const pageableResponse = await client.refunds.list({
    first: 42,
    last: 42,
    payment_id: "pay_xxxxxxxxxxxxxx",
    company_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.refunds.list({
    first: 42,
    last: 42,
    payment_id: "pay_xxxxxxxxxxxxxx",
    company_id: "biz_xxxxxxxxxxxxxx",
    user_id: "user_xxxxxxxxxxxxx",
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

Retrieves the details of an existing refund.

Required permissions:
 - `payment:basic:read`
 - `plan:basic:read`
 - `access_pass:basic:read`
 - `member:email:read`
 - `member:basic:read`
 - `member:phone:read`
</dd>
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
    id: "rf_xxxxxxxxxxxxxxx"
});

```
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

Returns a paginated list of customer reviews for a specific product, with optional filtering by star rating and creation date.
</dd>
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
<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.SetupIntentListItem, Whop.ListSetupIntentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of setup intents for a company, with optional filtering by creation date. A setup intent securely collects and stores a member's payment method for future use without charging them immediately.

Required permissions:
 - `payment:setup_intent:read`
 - `member:basic:read`
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
const pageableResponse = await client.setupIntents.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.setupIntents.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
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

<details><summary><code>client.setupIntents.<a href="/src/api/resources/setupIntents/client/Client.ts">create</a>({ ...params }) -> Whop.CreateSetupIntentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Save a buyer's payment method for later without charging it. Provide a confirmation token for a method the buyer just supplied, or an existing payment method to re-verify. The buyer may still have a step to complete — 3D Secure, a hosted enrollment, linking a bank account — so poll the setup intent's status endpoint for what to do next.

Required permissions:
 - `payment:charge`
 - `member:basic:read`
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
await client.setupIntents.create({
    company_id: "biz_xxxxxxxxxxxxxx",
    confirmation_token: "ctok_xxxxxxxxxxxxxx"
});

```
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

Retrieves the details of an existing setup intent.

Required permissions:
 - `payment:setup_intent:read`
 - `member:basic:read`
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
await client.setupIntents.retrieve({
    id: "sint_xxxxxxxxxxxxx"
});

```
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

Returns a paginated list of shipments for an account.
</dd>
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

Retrieves a shipment by its id, or by the payment id it fulfills.
</dd>
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

Lists the social accounts linked to an account or user.
</dd>
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

Creates or returns a Whop-managed Facebook page for an account.
</dd>
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

Starts an OAuth connection flow and returns an authorize_url where the user can connect a social account.
</dd>
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
    platform: "meta_business"
});

```
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

Disconnects a social account from an account or user without deleting the underlying platform account.
</dd>
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

<details><summary><code>client.socialAccounts.<a href="/src/api/resources/socialAccounts/client/Client.ts">posts</a>({ ...params }) -> core.Page&lt;Whop.SocialAccountPost, Whop.PostsSocialAccountsResponse&gt;</code></summary>
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

## Stats
<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">list</a>() -> Whop.ListStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists every metric you can query, with its unit and the properties you can filter or break it down by.
</dd>
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

<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">describeStats</a>({ ...params }) -> Whop.DescribeStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Describe available stats schema. Without resource returns root nodes and metrics. With resource returns node columns, associations, and available metrics.

Required permissions:
 - `stats:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.describeStats({
    company_id: "biz_xxxxxxxxxxxxxx",
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

**request:** `Whop.DescribeStatsRequest` 
    
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

<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">metricStats</a>({ ...params }) -> Whop.MetricStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query an aggregated metric. Returns data grouped by period with optional breakdowns.

Required permissions:
 - `stats:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.metricStats({
    resource: "resource",
    from: "2023-12-01T05:00:00Z",
    to: "2023-12-01T05:00:00Z",
    company_id: "biz_xxxxxxxxxxxxxx",
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

**request:** `Whop.MetricStatsRequest` 
    
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

<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">rawStats</a>({ ...params }) -> Whop.RawStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query raw data from a resource. Returns paginated rows with all columns.

Required permissions:
 - `stats:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.stats.rawStats({
    resource: "resource",
    from: "2023-12-01T05:00:00Z",
    to: "2023-12-01T05:00:00Z",
    limit: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
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

**request:** `Whop.RawStatsRequest` 
    
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

<details><summary><code>client.stats.<a href="/src/api/resources/stats/client/Client.ts">retrieve</a>({ ...params }) -> Whop.RetrieveStatsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a metric as a time series of points for an account or user over a time range. The `market_prices` metric is public and requires no authentication.
</dd>
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

Returns a paginated list of support channels for a specific company, with optional filtering by resolution status and custom sorting.

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
    company_id: "biz_xxxxxxxxxxxxxx"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.supportChannels.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx"
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

Open a new support channel between a company team member and a customer. Returns the existing channel if one already exists for that user.

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
    company_id: "biz_xxxxxxxxxxxxxx",
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

Retrieve the account's completed or pending swaps — currently just the latest one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.swaps.list({
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

Swaps one token for another from the account's wallet, or converts between fiat currencies in the account's ledger at the mid-market rate. Crypto swaps finish in the background — check the swap for its status.
</dd>
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
    account_id: "biz_xxxxxxxxxxxxxx",
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

Previews the price of a swap. Fiat pairs quote the in-ledger mid-market conversion — the same rate creating the swap fills at. No funds move and nothing is saved.
</dd>
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

Retrieves a single swap and its status.
</dd>
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

Lists an account's team members, including pending invites (`status: "pending"`, `ausri_` ids; `user` is `null` for invites sent to an email with no Whop account yet). For accepted members, `email` requires the `company:authorized_user:email:read` scope and is `null` otherwise. Listing `role=workforce` is also allowed with the `bounty:create` scope.
</dd>
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

Adds a member to an account's team with a system role. Identify them by exactly one of `user_id` or `email`. If the person has not yet accepted — or the email does not belong to a Whop account yet — an invitation is sent instead and the response is `202` with `{ "object": "team_member_invite", "invitation_sent": true }`. If they already have a pending invite, the request fails with a `400`. Custom roles cannot be granted via the API. Granting the `workforce` role is also allowed with the `bounty:create` scope.
</dd>
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

Retrieves a team member by ID. `email` requires the `company:authorized_user:email:read` scope and is `null` otherwise.
</dd>
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
    id: "id",
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

Add funds to a company's platform balance by charging a stored payment method. Top-ups have no fees or taxes and do not count as revenue.

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
    amount: 6.9,
    company_id: "biz_xxxxxxxxxxxxxx",
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

## Transfers
<details><summary><code>client.transfers.<a href="/src/api/resources/transfers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListTransfersResponse.Data.Item, Whop.ListTransfersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists an account's transfers.
</dd>
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

Moves money between accounts, or into a claim link anyone with the URL can redeem.
</dd>
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
    amount: 25,
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

**request:** `Whop.CreateTransfersRequest` 
    
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

Lists the people and accounts you can send money to.
</dd>
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

Search for users by name or username, ranked by social proximity to the authenticated user. Returns the user's most recently followed users when no query is given.
</dd>
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

Retrieves the authenticated user — the self view of the user object. Same shape as `GET /users/{id}`, with the self-only fields populated: `email` (email-read scope), `staff` (Whop staff only, staff-read scope), `balance` and `earnings_usd` (balance-read scope), the opt-in `balance_history`, and every linked social account.
</dd>
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

Updates the authenticated user's global profile, or their profile override for an account when account_id is given. Not available to API keys.
</dd>
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

Retrieves a user by `user_` tag or username, or the authenticated user with the reserved id `me`. Profiles include linked social accounts — reading your own profile returns every linked account, other profiles only what is public on Whop (the primary Discord and the X account). The self-only fields are populated only when the id is `me`: `email` (email-read scope), `staff` (Whop staff only, staff-read scope), `balance` and `earnings_usd` (balance-read scope), and the opt-in `balance_history`. They are always `null` when addressing a user by tag or username.
</dd>
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

Updates a user, addressed by `user_` tag, username, or the reserved id `me` for the authenticated user. A user token updates their own global profile; an API key updates the user's account-specific profile override (account_id required).
</dd>
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

Lists the recommended actions computed for the user: personal suggestions (e.g. start a business or become an affiliate) pooled with the highest-impact actions across the accounts the user owns. Business actions are tagged with their `account_id`/`account_name`; personal actions leave those `null`. Self-only: `id` must be `me` or the authenticated user's own tag/username.
</dd>
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

## Verifications
<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">list</a>({ ...params }) -> Whop.ListVerificationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns verifications for an account, including their status and any required actions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.list({
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

Starts a hosted verification session for an account or user, or returns the active session when one already exists. Any fields you include in the request body are used to prefill the session. Send `documents` (with `document_type`) to instead verify the person from identity documents included in this request — no hosted session involved. Send `share_token` to reuse a verification another Sumsub account has already completed for this person, instead of verifying them again. If the account already has an `approved` verification the request is rejected; unlink it first to start a new one.
</dd>
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
    account_id: "account_id",
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

Returns verifications for an account, including their status and any required actions.
</dd>
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
const pageableResponse = await client.webhooks.list({
    account_id: "account_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.webhooks.list({
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

Permanently deletes a webhook endpoint. Returns `true` on success, matching the legacy proxy response.
</dd>
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

Re-sends the exact payload of a past delivery to the webhook's current URL and returns the delivery result. By default the replay keeps the original `webhook-id`, so consumers that deduplicate on it can drop events they already processed. Pass `regenerate_id` to re-send under a freshly generated `webhook-id` instead, so a deduplicating consumer processes the replay as a new message. Only available for enabled webhooks on API version v1; deliveries are retained for 30 days.
</dd>
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

Re-sends the webhook's past deliveries within a time window, optionally limited to specific events or to messages whose most recent delivery attempt failed. Fire and forget: nothing about the replay is stored, and each re-send appears as a new entry in the webhook's delivery log. Each matching message is re-sent once, by default with its original `webhook-id`, so consumers that deduplicate are unaffected; pass `regenerate_ids` to re-send under freshly generated ids instead. Only available for enabled webhooks on API version v1; deliveries are retained for 30 days.
</dd>
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

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">deliveriesWebhook</a>({ ...params }) -> core.Page&lt;Whop.DeliveriesWebhookResponse.Data.Item, Whop.DeliveriesWebhookResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of delivery attempts for a webhook, ordered by most recent first. Includes the request payload, response body, response code, and timing for each attempt.

Required permissions:
 - `developer:manage_webhook`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.webhooks.deliveriesWebhook({
    webhook_id: "webhook_id",
    first: 42,
    last: 42
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.webhooks.deliveriesWebhook({
    webhook_id: "webhook_id",
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

**request:** `Whop.DeliveriesWebhookRequest` 
    
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

## Withdrawals
<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.WithdrawalListItem, Whop.ListWithdrawalsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of withdrawals for a company, with optional sorting and date filtering.

Required permissions:
 - `payout:withdrawal:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.withdrawals.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
    created_before: "2023-12-01T05:00:00Z",
    created_after: "2023-12-01T05:00:00Z"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.withdrawals.list({
    first: 42,
    last: 42,
    company_id: "biz_xxxxxxxxxxxxxx",
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

**request:** `Whop.ListWithdrawalsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">create</a>({ ...params }) -> Whop.Withdrawal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a withdrawal request for a ledger account

Required permissions:
 - `payout:withdraw_funds`
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
await client.withdrawals.create({
    amount: 6.9,
    company_id: "biz_xxxxxxxxxxxxxx",
    currency: "usd"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.CreateWithdrawalsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">retrieve</a>({ ...params }) -> Whop.Withdrawal</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details of an existing withdrawal.

Required permissions:
 - `payout:withdrawal:read`
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
await client.withdrawals.retrieve({
    id: "wdrl_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.RetrieveWithdrawalsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.withdrawals.<a href="/src/api/resources/withdrawals/client/Client.ts">generatePdf</a>({ ...params }) -> Whop.GeneratePdfWithdrawalsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a withdrawal PDF invoice and returns a temporary download URL.

Required permissions:
 - `payout:withdrawal:read`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.withdrawals.generatePdf({
    id: "wdrl_xxxxxxxxxxxxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Whop.GeneratePdfWithdrawalsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WithdrawalsClient.RequestOptions` 
    
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

Updates the account's preferences. Each top-level key present in the body is replaced as a whole; omitted keys are left untouched. `ads_triple_whale_integration` takes the Data-In API key to connect with, or `null` to disconnect. `ads_payment_methods` always requires a `primary` entry. `backup` is optional and any pairing is allowed — two cards, `card`+`platform_balance`, or a single method — so a card-only advertiser can fund ads without a platform balance. The `primary` and `backup` must be different sources. A `platform_balance` entry may omit `id` to use the account's default Whop balance. Configuring a `card` requires a user token; account API keys can set up platform-balance billing only.
</dd>
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

## Members Logs
<details><summary><code>client.members.logs.<a href="/src/api/resources/members/resources/logs/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListLogsResponse.Data.Item, Whop.ListLogsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists activity for a member and all of their non-drafted memberships, most recent first.
</dd>
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

Lists the platform's visible notification topics — the categories users can set notification preferences on. App-created topics are internal and not returned.
</dd>
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

## Payouts Methods
<details><summary><code>client.payouts.methods.<a href="/src/api/resources/payouts/resources/methods/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.ListMethodsResponse.Data.Item, Whop.ListMethodsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the bank accounts, wallets, and crypto addresses an account or user can withdraw to, newest first.
</dd>
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

Saves a new place an account or user can withdraw to. Sensitive details are vaulted in transit and never stored raw.
</dd>
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

Changes the label used to identify a saved payout method.
</dd>
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
    id: "id",
    nickname: "Primary checking"
});

```
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

Lists the payout methods an account or user is eligible to add.
</dd>
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

## Users OauthGrants
<details><summary><code>client.users.oauthGrants.<a href="/src/api/resources/users/resources/oauthGrants/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Whop.OauthGrant, Whop.ListOauthGrantsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the authenticated user's own OAuth grants — one per app they have authorized, per account they authorized it for. The list is always the caller's own; there is no parameter for reading another user's grants. Requires a user session: an API key or an OAuth token is refused, so an app can never enumerate the other apps a user has authorized.
</dd>
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

Completes the OAuth authorization step for the authenticated user: records their consent for the scopes an app asked for and mints the authorization code to hand back to it. Returns the grant, plus a `redirect_url` carrying that code — the one and only time it is returned. Exchange the code at `POST /oauth/token` with the verifier for `code_challenge`. Requires a user session, because consent has to come from the account holder: an API key or an OAuth token is refused, so an app can never authorize itself. Send an `Idempotency-Key` to make a retry safe — a replay returns the original `redirect_url` and its code rather than issuing a second one.
</dd>
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
    code_challenge: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    code_challenge_method: "S256",
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

Lists the authenticated user's own passkeys, newest first. The list is always the caller's own; there is no parameter for reading another user's passkeys. Requires a user session: an API key or an OAuth token is refused, because a passkey confirms the account holder before a sensitive action and no app may enumerate one.
</dd>
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

Retrieves the authenticated user's settings document. Addressed only as `me` — the document always belongs to the session user.
</dd>
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

Sets the authenticated user's notification preferences. Each preference is addressed by `scope`, not by id, so a scope read back from either list endpoint can be sent straight here.

A scope naming an experience with no topic sets that experience's level, and accepts all three levels. Any other scope sets a topic override, which is binary — `all` or `nothing` — and requires a `channel`.

`level: null` clears the preference. Preferences are stored as overrides, so clearing one means the scope inherits its default again rather than being switched off.

The batch is applied in one transaction: if any entry is rejected, none are written. Experience levels are applied before topic overrides, because setting a level replaces every topic preference for that experience — so an override sent alongside a level wins. The response reports what each scope now resolves to, in the order the entries were sent.
</dd>
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

Lists the authenticated user's topic-scoped notification preferences, plus user-agnostic platform defaults. Each filter matches preferences scoped to its value or not narrowed on that dimension. Per-experience levels are listed separately, by `GET /users/me/preferences/notifications/experiences`.
</dd>
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

