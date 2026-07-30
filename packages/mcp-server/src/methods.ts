// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.apps.list',
    fullyQualifiedName: 'apps.list',
    httpMethod: 'get',
    httpPath: '/apps',
  },
  {
    clientCallName: 'client.apps.create',
    fullyQualifiedName: 'apps.create',
    httpMethod: 'post',
    httpPath: '/apps',
  },
  {
    clientCallName: 'client.apps.retrieve',
    fullyQualifiedName: 'apps.retrieve',
    httpMethod: 'get',
    httpPath: '/apps/{id}',
  },
  {
    clientCallName: 'client.apps.update',
    fullyQualifiedName: 'apps.update',
    httpMethod: 'patch',
    httpPath: '/apps/{id}',
  },
  {
    clientCallName: 'client.apps.updatePermissions',
    fullyQualifiedName: 'apps.updatePermissions',
    httpMethod: 'patch',
    httpPath: '/apps/{id}/permissions',
  },
  {
    clientCallName: 'client.apps.logs',
    fullyQualifiedName: 'apps.logs',
    httpMethod: 'get',
    httpPath: '/apps/{id}/logs',
  },
  {
    clientCallName: 'client.apiKeys.list',
    fullyQualifiedName: 'apiKeys.list',
    httpMethod: 'get',
    httpPath: '/api_keys',
  },
  {
    clientCallName: 'client.apiKeys.create',
    fullyQualifiedName: 'apiKeys.create',
    httpMethod: 'post',
    httpPath: '/api_keys',
  },
  {
    clientCallName: 'client.apiKeys.retrieve',
    fullyQualifiedName: 'apiKeys.retrieve',
    httpMethod: 'get',
    httpPath: '/api_keys/{id}',
  },
  {
    clientCallName: 'client.apiKeys.update',
    fullyQualifiedName: 'apiKeys.update',
    httpMethod: 'patch',
    httpPath: '/api_keys/{id}',
  },
  {
    clientCallName: 'client.apiKeys.delete',
    fullyQualifiedName: 'apiKeys.delete',
    httpMethod: 'delete',
    httpPath: '/api_keys/{id}',
  },
  {
    clientCallName: 'client.apiKeys.rotate',
    fullyQualifiedName: 'apiKeys.rotate',
    httpMethod: 'post',
    httpPath: '/api_keys/{id}/rotate',
  },
  {
    clientCallName: 'client.apiKeys.listPermissions',
    fullyQualifiedName: 'apiKeys.listPermissions',
    httpMethod: 'get',
    httpPath: '/api_keys/permissions',
  },
  {
    clientCallName: 'client.invoices.list',
    fullyQualifiedName: 'invoices.list',
    httpMethod: 'get',
    httpPath: '/invoices',
  },
  {
    clientCallName: 'client.invoices.create',
    fullyQualifiedName: 'invoices.create',
    httpMethod: 'post',
    httpPath: '/invoices',
  },
  {
    clientCallName: 'client.invoices.retrieve',
    fullyQualifiedName: 'invoices.retrieve',
    httpMethod: 'get',
    httpPath: '/invoices/{id}',
  },
  {
    clientCallName: 'client.invoices.void',
    fullyQualifiedName: 'invoices.void',
    httpMethod: 'post',
    httpPath: '/invoices/{id}/void',
  },
  {
    clientCallName: 'client.invoices.markPaid',
    fullyQualifiedName: 'invoices.markPaid',
    httpMethod: 'post',
    httpPath: '/invoices/{id}/mark_paid',
  },
  {
    clientCallName: 'client.invoices.markUncollectible',
    fullyQualifiedName: 'invoices.markUncollectible',
    httpMethod: 'post',
    httpPath: '/invoices/{id}/mark_uncollectible',
  },
  {
    clientCallName: 'client.invoices.update',
    fullyQualifiedName: 'invoices.update',
    httpMethod: 'patch',
    httpPath: '/invoices/{id}',
  },
  {
    clientCallName: 'client.invoices.delete',
    fullyQualifiedName: 'invoices.delete',
    httpMethod: 'delete',
    httpPath: '/invoices/{id}',
  },
  {
    clientCallName: 'client.courseLessonInteractions.list',
    fullyQualifiedName: 'courseLessonInteractions.list',
    httpMethod: 'get',
    httpPath: '/course_lesson_interactions',
  },
  {
    clientCallName: 'client.courseLessonInteractions.retrieve',
    fullyQualifiedName: 'courseLessonInteractions.retrieve',
    httpMethod: 'get',
    httpPath: '/course_lesson_interactions/{id}',
  },
  {
    clientCallName: 'client.products.list',
    fullyQualifiedName: 'products.list',
    httpMethod: 'get',
    httpPath: '/products',
  },
  {
    clientCallName: 'client.products.retrieve',
    fullyQualifiedName: 'products.retrieve',
    httpMethod: 'get',
    httpPath: '/products/{id}',
  },
  {
    clientCallName: 'client.products.create',
    fullyQualifiedName: 'products.create',
    httpMethod: 'post',
    httpPath: '/products',
  },
  {
    clientCallName: 'client.products.update',
    fullyQualifiedName: 'products.update',
    httpMethod: 'patch',
    httpPath: '/products/{id}',
  },
  {
    clientCallName: 'client.products.delete',
    fullyQualifiedName: 'products.delete',
    httpMethod: 'delete',
    httpPath: '/products/{id}',
  },
  {
    clientCallName: 'client.socialAccounts.list',
    fullyQualifiedName: 'socialAccounts.list',
    httpMethod: 'get',
    httpPath: '/social_accounts',
  },
  {
    clientCallName: 'client.socialAccounts.create',
    fullyQualifiedName: 'socialAccounts.create',
    httpMethod: 'post',
    httpPath: '/social_accounts',
  },
  {
    clientCallName: 'client.socialAccounts.connect',
    fullyQualifiedName: 'socialAccounts.connect',
    httpMethod: 'post',
    httpPath: '/social_accounts/connect',
  },
  {
    clientCallName: 'client.socialAccounts.delete',
    fullyQualifiedName: 'socialAccounts.delete',
    httpMethod: 'delete',
    httpPath: '/social_accounts/{id}',
  },
  {
    clientCallName: 'client.socialAccounts.posts',
    fullyQualifiedName: 'socialAccounts.posts',
    httpMethod: 'get',
    httpPath: '/social_accounts/{id}/posts',
  },
  {
    clientCallName: 'client.socialAccounts.leadForms',
    fullyQualifiedName: 'socialAccounts.leadForms',
    httpMethod: 'get',
    httpPath: '/social_accounts/{id}/lead_forms',
  },
  {
    clientCallName: 'client.audiences.list',
    fullyQualifiedName: 'audiences.list',
    httpMethod: 'get',
    httpPath: '/audiences',
  },
  {
    clientCallName: 'client.audiences.create',
    fullyQualifiedName: 'audiences.create',
    httpMethod: 'post',
    httpPath: '/audiences',
  },
  {
    clientCallName: 'client.audiences.delete',
    fullyQualifiedName: 'audiences.delete',
    httpMethod: 'delete',
    httpPath: '/audiences/{audience_id}',
  },
  {
    clientCallName: 'client.media.generate',
    fullyQualifiedName: 'media.generate',
    httpMethod: 'post',
    httpPath: '/media/generate',
  },
  {
    clientCallName: 'client.media.retrieve',
    fullyQualifiedName: 'media.retrieve',
    httpMethod: 'get',
    httpPath: '/media/{id}',
  },
  {
    clientCallName: 'client.people.list',
    fullyQualifiedName: 'people.list',
    httpMethod: 'get',
    httpPath: '/people',
  },
  {
    clientCallName: 'client.people.retrieve',
    fullyQualifiedName: 'people.retrieve',
    httpMethod: 'get',
    httpPath: '/people/{person_id}',
  },
  {
    clientCallName: 'client.events.list',
    fullyQualifiedName: 'events.list',
    httpMethod: 'get',
    httpPath: '/events',
  },
  {
    clientCallName: 'client.events.create',
    fullyQualifiedName: 'events.create',
    httpMethod: 'post',
    httpPath: '/events',
  },
  {
    clientCallName: 'client.companies.retrieve',
    fullyQualifiedName: 'companies.retrieve',
    httpMethod: 'get',
    httpPath: '/companies/{id}',
  },
  {
    clientCallName: 'client.companies.list',
    fullyQualifiedName: 'companies.list',
    httpMethod: 'get',
    httpPath: '/companies',
  },
  {
    clientCallName: 'client.companies.create',
    fullyQualifiedName: 'companies.create',
    httpMethod: 'post',
    httpPath: '/companies',
  },
  {
    clientCallName: 'client.companies.update',
    fullyQualifiedName: 'companies.update',
    httpMethod: 'patch',
    httpPath: '/companies/{id}',
  },
  {
    clientCallName: 'client.companies.createAPIKey',
    fullyQualifiedName: 'companies.createAPIKey',
    httpMethod: 'post',
    httpPath: '/companies/{parent_company_id}/api_keys',
  },
  { clientCallName: 'client.webhooks.unwrap', fullyQualifiedName: 'webhooks.unwrap' },
  {
    clientCallName: 'client.webhooks.list',
    fullyQualifiedName: 'webhooks.list',
    httpMethod: 'get',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.create',
    fullyQualifiedName: 'webhooks.create',
    httpMethod: 'post',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.retrieve',
    fullyQualifiedName: 'webhooks.retrieve',
    httpMethod: 'get',
    httpPath: '/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.update',
    fullyQualifiedName: 'webhooks.update',
    httpMethod: 'patch',
    httpPath: '/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.delete',
    fullyQualifiedName: 'webhooks.delete',
    httpMethod: 'delete',
    httpPath: '/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.test',
    fullyQualifiedName: 'webhooks.test',
    httpMethod: 'post',
    httpPath: '/webhooks/{id}/test',
  },
  {
    clientCallName: 'client.webhooks.listDeliveries',
    fullyQualifiedName: 'webhooks.listDeliveries',
    httpMethod: 'get',
    httpPath: '/webhooks/{id}/deliveries',
  },
  {
    clientCallName: 'client.plans.list',
    fullyQualifiedName: 'plans.list',
    httpMethod: 'get',
    httpPath: '/plans',
  },
  {
    clientCallName: 'client.plans.create',
    fullyQualifiedName: 'plans.create',
    httpMethod: 'post',
    httpPath: '/plans',
  },
  {
    clientCallName: 'client.plans.retrieve',
    fullyQualifiedName: 'plans.retrieve',
    httpMethod: 'get',
    httpPath: '/plans/{id}',
  },
  {
    clientCallName: 'client.plans.update',
    fullyQualifiedName: 'plans.update',
    httpMethod: 'patch',
    httpPath: '/plans/{id}',
  },
  {
    clientCallName: 'client.plans.delete',
    fullyQualifiedName: 'plans.delete',
    httpMethod: 'delete',
    httpPath: '/plans/{id}',
  },
  {
    clientCallName: 'client.plans.calculateTax',
    fullyQualifiedName: 'plans.calculateTax',
    httpMethod: 'post',
    httpPath: '/plans/{id}/calculate_tax',
  },
  {
    clientCallName: 'client.entries.list',
    fullyQualifiedName: 'entries.list',
    httpMethod: 'get',
    httpPath: '/entries',
  },
  {
    clientCallName: 'client.entries.retrieve',
    fullyQualifiedName: 'entries.retrieve',
    httpMethod: 'get',
    httpPath: '/entries/{id}',
  },
  {
    clientCallName: 'client.entries.approve',
    fullyQualifiedName: 'entries.approve',
    httpMethod: 'post',
    httpPath: '/entries/{id}/approve',
  },
  {
    clientCallName: 'client.entries.deny',
    fullyQualifiedName: 'entries.deny',
    httpMethod: 'post',
    httpPath: '/entries/{id}/deny',
  },
  {
    clientCallName: 'client.forumPosts.list',
    fullyQualifiedName: 'forumPosts.list',
    httpMethod: 'get',
    httpPath: '/forum_posts',
  },
  {
    clientCallName: 'client.forumPosts.create',
    fullyQualifiedName: 'forumPosts.create',
    httpMethod: 'post',
    httpPath: '/forum_posts',
  },
  {
    clientCallName: 'client.forumPosts.retrieve',
    fullyQualifiedName: 'forumPosts.retrieve',
    httpMethod: 'get',
    httpPath: '/forum_posts/{id}',
  },
  {
    clientCallName: 'client.forumPosts.update',
    fullyQualifiedName: 'forumPosts.update',
    httpMethod: 'patch',
    httpPath: '/forum_posts/{id}',
  },
  {
    clientCallName: 'client.transfers.list',
    fullyQualifiedName: 'transfers.list',
    httpMethod: 'get',
    httpPath: '/transfers',
  },
  {
    clientCallName: 'client.transfers.create',
    fullyQualifiedName: 'transfers.create',
    httpMethod: 'post',
    httpPath: '/transfers',
  },
  {
    clientCallName: 'client.transfers.listRecipients',
    fullyQualifiedName: 'transfers.listRecipients',
    httpMethod: 'get',
    httpPath: '/transfers/recipients',
  },
  {
    clientCallName: 'client.transfers.retrieve',
    fullyQualifiedName: 'transfers.retrieve',
    httpMethod: 'get',
    httpPath: '/transfers/{id}',
  },
  {
    clientCallName: 'client.ledgerAccounts.retrieve',
    fullyQualifiedName: 'ledgerAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/ledger_accounts/{id}',
  },
  {
    clientCallName: 'client.memberships.list',
    fullyQualifiedName: 'memberships.list',
    httpMethod: 'get',
    httpPath: '/memberships',
  },
  {
    clientCallName: 'client.memberships.retrieve',
    fullyQualifiedName: 'memberships.retrieve',
    httpMethod: 'get',
    httpPath: '/memberships/{id}',
  },
  {
    clientCallName: 'client.memberships.update',
    fullyQualifiedName: 'memberships.update',
    httpMethod: 'patch',
    httpPath: '/memberships/{id}',
  },
  {
    clientCallName: 'client.memberships.cancel',
    fullyQualifiedName: 'memberships.cancel',
    httpMethod: 'post',
    httpPath: '/memberships/{id}/cancel',
  },
  {
    clientCallName: 'client.memberships.pause',
    fullyQualifiedName: 'memberships.pause',
    httpMethod: 'post',
    httpPath: '/memberships/{id}/pause',
  },
  {
    clientCallName: 'client.memberships.resume',
    fullyQualifiedName: 'memberships.resume',
    httpMethod: 'post',
    httpPath: '/memberships/{id}/resume',
  },
  {
    clientCallName: 'client.memberships.extend',
    fullyQualifiedName: 'memberships.extend',
    httpMethod: 'post',
    httpPath: '/memberships/{id}/extend',
  },
  {
    clientCallName: 'client.authorizedUsers.list',
    fullyQualifiedName: 'authorizedUsers.list',
    httpMethod: 'get',
    httpPath: '/authorized_users',
  },
  {
    clientCallName: 'client.authorizedUsers.retrieve',
    fullyQualifiedName: 'authorizedUsers.retrieve',
    httpMethod: 'get',
    httpPath: '/authorized_users/{id}',
  },
  {
    clientCallName: 'client.authorizedUsers.create',
    fullyQualifiedName: 'authorizedUsers.create',
    httpMethod: 'post',
    httpPath: '/authorized_users',
  },
  {
    clientCallName: 'client.authorizedUsers.delete',
    fullyQualifiedName: 'authorizedUsers.delete',
    httpMethod: 'delete',
    httpPath: '/authorized_users/{id}',
  },
  {
    clientCallName: 'client.teamMembers.list',
    fullyQualifiedName: 'teamMembers.list',
    httpMethod: 'get',
    httpPath: '/team_members',
  },
  {
    clientCallName: 'client.teamMembers.retrieve',
    fullyQualifiedName: 'teamMembers.retrieve',
    httpMethod: 'get',
    httpPath: '/team_members/{id}',
  },
  {
    clientCallName: 'client.teamMembers.create',
    fullyQualifiedName: 'teamMembers.create',
    httpMethod: 'post',
    httpPath: '/team_members',
  },
  {
    clientCallName: 'client.teamMembers.update',
    fullyQualifiedName: 'teamMembers.update',
    httpMethod: 'patch',
    httpPath: '/team_members/{id}',
  },
  {
    clientCallName: 'client.teamMembers.delete',
    fullyQualifiedName: 'teamMembers.delete',
    httpMethod: 'delete',
    httpPath: '/team_members/{id}',
  },
  {
    clientCallName: 'client.appBuilds.list',
    fullyQualifiedName: 'appBuilds.list',
    httpMethod: 'get',
    httpPath: '/app_builds',
  },
  {
    clientCallName: 'client.appBuilds.create',
    fullyQualifiedName: 'appBuilds.create',
    httpMethod: 'post',
    httpPath: '/app_builds',
  },
  {
    clientCallName: 'client.appBuilds.retrieve',
    fullyQualifiedName: 'appBuilds.retrieve',
    httpMethod: 'get',
    httpPath: '/app_builds/{id}',
  },
  {
    clientCallName: 'client.appBuilds.promote',
    fullyQualifiedName: 'appBuilds.promote',
    httpMethod: 'post',
    httpPath: '/app_builds/{id}/promote',
  },
  {
    clientCallName: 'client.shipments.list',
    fullyQualifiedName: 'shipments.list',
    httpMethod: 'get',
    httpPath: '/shipments',
  },
  {
    clientCallName: 'client.shipments.create',
    fullyQualifiedName: 'shipments.create',
    httpMethod: 'post',
    httpPath: '/shipments',
  },
  {
    clientCallName: 'client.shipments.retrieve',
    fullyQualifiedName: 'shipments.retrieve',
    httpMethod: 'get',
    httpPath: '/shipments/{id}',
  },
  {
    clientCallName: 'client.checkoutConfigurations.list',
    fullyQualifiedName: 'checkoutConfigurations.list',
    httpMethod: 'get',
    httpPath: '/checkout_configurations',
  },
  {
    clientCallName: 'client.checkoutConfigurations.create',
    fullyQualifiedName: 'checkoutConfigurations.create',
    httpMethod: 'post',
    httpPath: '/checkout_configurations',
  },
  {
    clientCallName: 'client.checkoutConfigurations.retrieve',
    fullyQualifiedName: 'checkoutConfigurations.retrieve',
    httpMethod: 'get',
    httpPath: '/checkout_configurations/{id}',
  },
  {
    clientCallName: 'client.checkoutConfigurations.delete',
    fullyQualifiedName: 'checkoutConfigurations.delete',
    httpMethod: 'delete',
    httpPath: '/checkout_configurations/{id}',
  },
  {
    clientCallName: 'client.messages.list',
    fullyQualifiedName: 'messages.list',
    httpMethod: 'get',
    httpPath: '/messages',
  },
  {
    clientCallName: 'client.messages.retrieve',
    fullyQualifiedName: 'messages.retrieve',
    httpMethod: 'get',
    httpPath: '/messages/{id}',
  },
  {
    clientCallName: 'client.messages.create',
    fullyQualifiedName: 'messages.create',
    httpMethod: 'post',
    httpPath: '/messages',
  },
  {
    clientCallName: 'client.messages.update',
    fullyQualifiedName: 'messages.update',
    httpMethod: 'patch',
    httpPath: '/messages/{id}',
  },
  {
    clientCallName: 'client.messages.delete',
    fullyQualifiedName: 'messages.delete',
    httpMethod: 'delete',
    httpPath: '/messages/{id}',
  },
  {
    clientCallName: 'client.chatChannels.list',
    fullyQualifiedName: 'chatChannels.list',
    httpMethod: 'get',
    httpPath: '/chat_channels',
  },
  {
    clientCallName: 'client.chatChannels.retrieve',
    fullyQualifiedName: 'chatChannels.retrieve',
    httpMethod: 'get',
    httpPath: '/chat_channels/{id}',
  },
  {
    clientCallName: 'client.chatChannels.update',
    fullyQualifiedName: 'chatChannels.update',
    httpMethod: 'patch',
    httpPath: '/chat_channels/{id}',
  },
  {
    clientCallName: 'client.users.me',
    fullyQualifiedName: 'users.me',
    httpMethod: 'get',
    httpPath: '/users/me',
  },
  {
    clientCallName: 'client.users.retrieve',
    fullyQualifiedName: 'users.retrieve',
    httpMethod: 'get',
    httpPath: '/users/{id}',
  },
  {
    clientCallName: 'client.users.checkAccess',
    fullyQualifiedName: 'users.checkAccess',
    httpMethod: 'get',
    httpPath: '/users/{id}/access/{resource_id}',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'patch',
    httpPath: '/users/{id}',
  },
  {
    clientCallName: 'client.users.updateMe',
    fullyQualifiedName: 'users.updateMe',
    httpMethod: 'patch',
    httpPath: '/users/me',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.recommendActions',
    fullyQualifiedName: 'users.recommendActions',
    httpMethod: 'get',
    httpPath: '/users/{id}/recommend_actions',
  },
  {
    clientCallName: 'client.payments.list',
    fullyQualifiedName: 'payments.list',
    httpMethod: 'get',
    httpPath: '/payments',
  },
  {
    clientCallName: 'client.payments.retrieve',
    fullyQualifiedName: 'payments.retrieve',
    httpMethod: 'get',
    httpPath: '/payments/{id}',
  },
  {
    clientCallName: 'client.payments.refund',
    fullyQualifiedName: 'payments.refund',
    httpMethod: 'post',
    httpPath: '/payments/{id}/refund',
  },
  {
    clientCallName: 'client.payments.retry',
    fullyQualifiedName: 'payments.retry',
    httpMethod: 'post',
    httpPath: '/payments/{id}/retry',
  },
  {
    clientCallName: 'client.payments.void',
    fullyQualifiedName: 'payments.void',
    httpMethod: 'post',
    httpPath: '/payments/{id}/void',
  },
  {
    clientCallName: 'client.payments.create',
    fullyQualifiedName: 'payments.create',
    httpMethod: 'post',
    httpPath: '/payments',
  },
  {
    clientCallName: 'client.payments.listFees',
    fullyQualifiedName: 'payments.listFees',
    httpMethod: 'get',
    httpPath: '/payments/{id}/fees',
  },
  {
    clientCallName: 'client.supportChannels.list',
    fullyQualifiedName: 'supportChannels.list',
    httpMethod: 'get',
    httpPath: '/support_channels',
  },
  {
    clientCallName: 'client.supportChannels.retrieve',
    fullyQualifiedName: 'supportChannels.retrieve',
    httpMethod: 'get',
    httpPath: '/support_channels/{id}',
  },
  {
    clientCallName: 'client.supportChannels.create',
    fullyQualifiedName: 'supportChannels.create',
    httpMethod: 'post',
    httpPath: '/support_channels',
  },
  {
    clientCallName: 'client.experiences.list',
    fullyQualifiedName: 'experiences.list',
    httpMethod: 'get',
    httpPath: '/experiences',
  },
  {
    clientCallName: 'client.experiences.create',
    fullyQualifiedName: 'experiences.create',
    httpMethod: 'post',
    httpPath: '/experiences',
  },
  {
    clientCallName: 'client.experiences.retrieve',
    fullyQualifiedName: 'experiences.retrieve',
    httpMethod: 'get',
    httpPath: '/experiences/{id}',
  },
  {
    clientCallName: 'client.experiences.update',
    fullyQualifiedName: 'experiences.update',
    httpMethod: 'patch',
    httpPath: '/experiences/{id}',
  },
  {
    clientCallName: 'client.experiences.delete',
    fullyQualifiedName: 'experiences.delete',
    httpMethod: 'delete',
    httpPath: '/experiences/{id}',
  },
  {
    clientCallName: 'client.experiences.attach',
    fullyQualifiedName: 'experiences.attach',
    httpMethod: 'post',
    httpPath: '/experiences/{id}/attach',
  },
  {
    clientCallName: 'client.experiences.detach',
    fullyQualifiedName: 'experiences.detach',
    httpMethod: 'post',
    httpPath: '/experiences/{id}/detach',
  },
  {
    clientCallName: 'client.experiences.duplicate',
    fullyQualifiedName: 'experiences.duplicate',
    httpMethod: 'post',
    httpPath: '/experiences/{id}/duplicate',
  },
  {
    clientCallName: 'client.reactions.list',
    fullyQualifiedName: 'reactions.list',
    httpMethod: 'get',
    httpPath: '/reactions',
  },
  {
    clientCallName: 'client.reactions.create',
    fullyQualifiedName: 'reactions.create',
    httpMethod: 'post',
    httpPath: '/reactions',
  },
  {
    clientCallName: 'client.reactions.retrieve',
    fullyQualifiedName: 'reactions.retrieve',
    httpMethod: 'get',
    httpPath: '/reactions/{id}',
  },
  {
    clientCallName: 'client.reactions.delete',
    fullyQualifiedName: 'reactions.delete',
    httpMethod: 'delete',
    httpPath: '/reactions/{id}',
  },
  {
    clientCallName: 'client.members.list',
    fullyQualifiedName: 'members.list',
    httpMethod: 'get',
    httpPath: '/members',
  },
  {
    clientCallName: 'client.members.retrieve',
    fullyQualifiedName: 'members.retrieve',
    httpMethod: 'get',
    httpPath: '/members/{id}',
  },
  {
    clientCallName: 'client.forums.list',
    fullyQualifiedName: 'forums.list',
    httpMethod: 'get',
    httpPath: '/forums',
  },
  {
    clientCallName: 'client.forums.retrieve',
    fullyQualifiedName: 'forums.retrieve',
    httpMethod: 'get',
    httpPath: '/forums/{id}',
  },
  {
    clientCallName: 'client.forums.update',
    fullyQualifiedName: 'forums.update',
    httpMethod: 'patch',
    httpPath: '/forums/{id}',
  },
  {
    clientCallName: 'client.promoCodes.list',
    fullyQualifiedName: 'promoCodes.list',
    httpMethod: 'get',
    httpPath: '/promo_codes',
  },
  {
    clientCallName: 'client.promoCodes.create',
    fullyQualifiedName: 'promoCodes.create',
    httpMethod: 'post',
    httpPath: '/promo_codes',
  },
  {
    clientCallName: 'client.promoCodes.retrieve',
    fullyQualifiedName: 'promoCodes.retrieve',
    httpMethod: 'get',
    httpPath: '/promo_codes/{id}',
  },
  {
    clientCallName: 'client.promoCodes.delete',
    fullyQualifiedName: 'promoCodes.delete',
    httpMethod: 'delete',
    httpPath: '/promo_codes/{id}',
  },
  {
    clientCallName: 'client.courses.list',
    fullyQualifiedName: 'courses.list',
    httpMethod: 'get',
    httpPath: '/courses',
  },
  {
    clientCallName: 'client.courses.create',
    fullyQualifiedName: 'courses.create',
    httpMethod: 'post',
    httpPath: '/courses',
  },
  {
    clientCallName: 'client.courses.retrieve',
    fullyQualifiedName: 'courses.retrieve',
    httpMethod: 'get',
    httpPath: '/courses/{id}',
  },
  {
    clientCallName: 'client.courses.update',
    fullyQualifiedName: 'courses.update',
    httpMethod: 'patch',
    httpPath: '/courses/{id}',
  },
  {
    clientCallName: 'client.courses.delete',
    fullyQualifiedName: 'courses.delete',
    httpMethod: 'delete',
    httpPath: '/courses/{id}',
  },
  {
    clientCallName: 'client.courseChapters.list',
    fullyQualifiedName: 'courseChapters.list',
    httpMethod: 'get',
    httpPath: '/course_chapters',
  },
  {
    clientCallName: 'client.courseChapters.create',
    fullyQualifiedName: 'courseChapters.create',
    httpMethod: 'post',
    httpPath: '/course_chapters',
  },
  {
    clientCallName: 'client.courseChapters.retrieve',
    fullyQualifiedName: 'courseChapters.retrieve',
    httpMethod: 'get',
    httpPath: '/course_chapters/{id}',
  },
  {
    clientCallName: 'client.courseChapters.update',
    fullyQualifiedName: 'courseChapters.update',
    httpMethod: 'patch',
    httpPath: '/course_chapters/{id}',
  },
  {
    clientCallName: 'client.courseChapters.delete',
    fullyQualifiedName: 'courseChapters.delete',
    httpMethod: 'delete',
    httpPath: '/course_chapters/{id}',
  },
  {
    clientCallName: 'client.courseLessons.list',
    fullyQualifiedName: 'courseLessons.list',
    httpMethod: 'get',
    httpPath: '/course_lessons',
  },
  {
    clientCallName: 'client.courseLessons.create',
    fullyQualifiedName: 'courseLessons.create',
    httpMethod: 'post',
    httpPath: '/course_lessons',
  },
  {
    clientCallName: 'client.courseLessons.retrieve',
    fullyQualifiedName: 'courseLessons.retrieve',
    httpMethod: 'get',
    httpPath: '/course_lessons/{id}',
  },
  {
    clientCallName: 'client.courseLessons.update',
    fullyQualifiedName: 'courseLessons.update',
    httpMethod: 'patch',
    httpPath: '/course_lessons/{id}',
  },
  {
    clientCallName: 'client.courseLessons.delete',
    fullyQualifiedName: 'courseLessons.delete',
    httpMethod: 'delete',
    httpPath: '/course_lessons/{id}',
  },
  {
    clientCallName: 'client.courseLessons.markAsCompleted',
    fullyQualifiedName: 'courseLessons.markAsCompleted',
    httpMethod: 'post',
    httpPath: '/course_lessons/{lesson_id}/mark_as_completed',
  },
  {
    clientCallName: 'client.courseLessons.start',
    fullyQualifiedName: 'courseLessons.start',
    httpMethod: 'post',
    httpPath: '/course_lessons/{lesson_id}/start',
  },
  {
    clientCallName: 'client.courseLessons.submitAssessment',
    fullyQualifiedName: 'courseLessons.submitAssessment',
    httpMethod: 'post',
    httpPath: '/course_lessons/{lesson_id}/submit_assessment',
  },
  {
    clientCallName: 'client.reviews.list',
    fullyQualifiedName: 'reviews.list',
    httpMethod: 'get',
    httpPath: '/reviews',
  },
  {
    clientCallName: 'client.reviews.retrieve',
    fullyQualifiedName: 'reviews.retrieve',
    httpMethod: 'get',
    httpPath: '/reviews/{id}',
  },
  {
    clientCallName: 'client.courseStudents.list',
    fullyQualifiedName: 'courseStudents.list',
    httpMethod: 'get',
    httpPath: '/course_students',
  },
  {
    clientCallName: 'client.courseStudents.retrieve',
    fullyQualifiedName: 'courseStudents.retrieve',
    httpMethod: 'get',
    httpPath: '/course_students/{id}',
  },
  {
    clientCallName: 'client.accessTokens.create',
    fullyQualifiedName: 'accessTokens.create',
    httpMethod: 'post',
    httpPath: '/access_tokens',
  },
  {
    clientCallName: 'client.notifications.create',
    fullyQualifiedName: 'notifications.create',
    httpMethod: 'post',
    httpPath: '/notifications',
  },
  {
    clientCallName: 'client.disputes.list',
    fullyQualifiedName: 'disputes.list',
    httpMethod: 'get',
    httpPath: '/disputes',
  },
  {
    clientCallName: 'client.disputes.retrieve',
    fullyQualifiedName: 'disputes.retrieve',
    httpMethod: 'get',
    httpPath: '/disputes/{id}',
  },
  {
    clientCallName: 'client.disputes.submitEvidence',
    fullyQualifiedName: 'disputes.submitEvidence',
    httpMethod: 'post',
    httpPath: '/disputes/{id}/submit_evidence',
  },
  {
    clientCallName: 'client.disputes.updateEvidence',
    fullyQualifiedName: 'disputes.updateEvidence',
    httpMethod: 'post',
    httpPath: '/disputes/{id}/update_evidence',
  },
  {
    clientCallName: 'client.refunds.list',
    fullyQualifiedName: 'refunds.list',
    httpMethod: 'get',
    httpPath: '/refunds',
  },
  {
    clientCallName: 'client.refunds.retrieve',
    fullyQualifiedName: 'refunds.retrieve',
    httpMethod: 'get',
    httpPath: '/refunds/{id}',
  },
  {
    clientCallName: 'client.withdrawals.list',
    fullyQualifiedName: 'withdrawals.list',
    httpMethod: 'get',
    httpPath: '/withdrawals',
  },
  {
    clientCallName: 'client.withdrawals.retrieve',
    fullyQualifiedName: 'withdrawals.retrieve',
    httpMethod: 'get',
    httpPath: '/withdrawals/{id}',
  },
  {
    clientCallName: 'client.withdrawals.create',
    fullyQualifiedName: 'withdrawals.create',
    httpMethod: 'post',
    httpPath: '/withdrawals',
  },
  {
    clientCallName: 'client.withdrawals.generatePdf',
    fullyQualifiedName: 'withdrawals.generatePdf',
    httpMethod: 'post',
    httpPath: '/withdrawals/{id}/generate_pdf',
  },
  {
    clientCallName: 'client.accountLinks.create',
    fullyQualifiedName: 'accountLinks.create',
    httpMethod: 'post',
    httpPath: '/account_links',
  },
  {
    clientCallName: 'client.accounts.list',
    fullyQualifiedName: 'accounts.list',
    httpMethod: 'get',
    httpPath: '/accounts',
  },
  {
    clientCallName: 'client.accounts.create',
    fullyQualifiedName: 'accounts.create',
    httpMethod: 'post',
    httpPath: '/accounts',
  },
  {
    clientCallName: 'client.accounts.me',
    fullyQualifiedName: 'accounts.me',
    httpMethod: 'get',
    httpPath: '/accounts/me',
  },
  {
    clientCallName: 'client.accounts.retrieve',
    fullyQualifiedName: 'accounts.retrieve',
    httpMethod: 'get',
    httpPath: '/accounts/{account_id}',
  },
  {
    clientCallName: 'client.accounts.update',
    fullyQualifiedName: 'accounts.update',
    httpMethod: 'patch',
    httpPath: '/accounts/{account_id}',
  },
  {
    clientCallName: 'client.accounts.recommendActions',
    fullyQualifiedName: 'accounts.recommendActions',
    httpMethod: 'get',
    httpPath: '/accounts/{account_id}/recommend_actions',
  },
  {
    clientCallName: 'client.accounts.registerLlc',
    fullyQualifiedName: 'accounts.registerLlc',
    httpMethod: 'post',
    httpPath: '/accounts/{account_id}/llc',
  },
  {
    clientCallName: 'client.accounts.preferences.retrieve',
    fullyQualifiedName: 'accounts.preferences.retrieve',
    httpMethod: 'get',
    httpPath: '/accounts/{account_id}/preferences',
  },
  {
    clientCallName: 'client.accounts.preferences.update',
    fullyQualifiedName: 'accounts.preferences.update',
    httpMethod: 'patch',
    httpPath: '/accounts/{account_id}/preferences',
  },
  {
    clientCallName: 'client.financialActivity.list',
    fullyQualifiedName: 'financialActivity.list',
    httpMethod: 'get',
    httpPath: '/financial-activity',
  },
  {
    clientCallName: 'client.stats.list',
    fullyQualifiedName: 'stats.list',
    httpMethod: 'get',
    httpPath: '/stats',
  },
  {
    clientCallName: 'client.stats.retrieve',
    fullyQualifiedName: 'stats.retrieve',
    httpMethod: 'get',
    httpPath: '/stats/{metric}',
  },
  {
    clientCallName: 'client.payouts.list',
    fullyQualifiedName: 'payouts.list',
    httpMethod: 'get',
    httpPath: '/payouts',
  },
  {
    clientCallName: 'client.payouts.create',
    fullyQualifiedName: 'payouts.create',
    httpMethod: 'post',
    httpPath: '/payouts',
  },
  {
    clientCallName: 'client.payouts.methods.list',
    fullyQualifiedName: 'payouts.methods.list',
    httpMethod: 'get',
    httpPath: '/payouts/methods',
  },
  {
    clientCallName: 'client.payouts.methods.create',
    fullyQualifiedName: 'payouts.methods.create',
    httpMethod: 'post',
    httpPath: '/payouts/methods',
  },
  {
    clientCallName: 'client.partners.referredUsers',
    fullyQualifiedName: 'partners.referredUsers',
    httpMethod: 'get',
    httpPath: '/partners/referred_users',
  },
  {
    clientCallName: 'client.partners.create',
    fullyQualifiedName: 'partners.create',
    httpMethod: 'post',
    httpPath: '/partners',
  },
  {
    clientCallName: 'client.partners.leaderboard',
    fullyQualifiedName: 'partners.leaderboard',
    httpMethod: 'get',
    httpPath: '/partners/leaderboard',
  },
  {
    clientCallName: 'client.partners.businesses.list',
    fullyQualifiedName: 'partners.businesses.list',
    httpMethod: 'get',
    httpPath: '/partners/businesses',
  },
  {
    clientCallName: 'client.partners.businesses.retrieve',
    fullyQualifiedName: 'partners.businesses.retrieve',
    httpMethod: 'get',
    httpPath: '/partners/businesses/{id}',
  },
  {
    clientCallName: 'client.partners.businesses.earnings.list',
    fullyQualifiedName: 'partners.businesses.earnings.list',
    httpMethod: 'get',
    httpPath: '/partners/businesses/{id}/earnings',
  },
  {
    clientCallName: 'client.cards.list',
    fullyQualifiedName: 'cards.list',
    httpMethod: 'get',
    httpPath: '/cards',
  },
  {
    clientCallName: 'client.cards.create',
    fullyQualifiedName: 'cards.create',
    httpMethod: 'post',
    httpPath: '/cards',
  },
  {
    clientCallName: 'client.cards.retrieve',
    fullyQualifiedName: 'cards.retrieve',
    httpMethod: 'get',
    httpPath: '/cards/{card_id}',
  },
  {
    clientCallName: 'client.cards.update',
    fullyQualifiedName: 'cards.update',
    httpMethod: 'patch',
    httpPath: '/cards/{card_id}',
  },
  {
    clientCallName: 'client.swaps.createQuote',
    fullyQualifiedName: 'swaps.createQuote',
    httpMethod: 'post',
    httpPath: '/swaps/quote',
  },
  {
    clientCallName: 'client.swaps.create',
    fullyQualifiedName: 'swaps.create',
    httpMethod: 'post',
    httpPath: '/swaps',
  },
  {
    clientCallName: 'client.swaps.list',
    fullyQualifiedName: 'swaps.list',
    httpMethod: 'get',
    httpPath: '/swaps',
  },
  {
    clientCallName: 'client.swaps.retrieve',
    fullyQualifiedName: 'swaps.retrieve',
    httpMethod: 'get',
    httpPath: '/swaps/{id}',
  },
  {
    clientCallName: 'client.deposits.create',
    fullyQualifiedName: 'deposits.create',
    httpMethod: 'post',
    httpPath: '/deposits',
  },
  {
    clientCallName: 'client.setupIntents.list',
    fullyQualifiedName: 'setupIntents.list',
    httpMethod: 'get',
    httpPath: '/setup_intents',
  },
  {
    clientCallName: 'client.setupIntents.retrieve',
    fullyQualifiedName: 'setupIntents.retrieve',
    httpMethod: 'get',
    httpPath: '/setup_intents/{id}',
  },
  {
    clientCallName: 'client.paymentMethods.list',
    fullyQualifiedName: 'paymentMethods.list',
    httpMethod: 'get',
    httpPath: '/payment_methods',
  },
  {
    clientCallName: 'client.paymentMethods.retrieve',
    fullyQualifiedName: 'paymentMethods.retrieve',
    httpMethod: 'get',
    httpPath: '/payment_methods/{id}',
  },
  {
    clientCallName: 'client.feeMarkups.list',
    fullyQualifiedName: 'feeMarkups.list',
    httpMethod: 'get',
    httpPath: '/fee_markups',
  },
  {
    clientCallName: 'client.feeMarkups.create',
    fullyQualifiedName: 'feeMarkups.create',
    httpMethod: 'post',
    httpPath: '/fee_markups',
  },
  {
    clientCallName: 'client.feeMarkups.delete',
    fullyQualifiedName: 'feeMarkups.delete',
    httpMethod: 'delete',
    httpPath: '/fee_markups/{id}',
  },
  {
    clientCallName: 'client.verifications.list',
    fullyQualifiedName: 'verifications.list',
    httpMethod: 'get',
    httpPath: '/verifications',
  },
  {
    clientCallName: 'client.verifications.retrieve',
    fullyQualifiedName: 'verifications.retrieve',
    httpMethod: 'get',
    httpPath: '/verifications/{verification_id}',
  },
  {
    clientCallName: 'client.verifications.create',
    fullyQualifiedName: 'verifications.create',
    httpMethod: 'post',
    httpPath: '/verifications',
  },
  {
    clientCallName: 'client.verifications.update',
    fullyQualifiedName: 'verifications.update',
    httpMethod: 'patch',
    httpPath: '/verifications/{verification_id}',
  },
  {
    clientCallName: 'client.leads.list',
    fullyQualifiedName: 'leads.list',
    httpMethod: 'get',
    httpPath: '/leads',
  },
  {
    clientCallName: 'client.leads.create',
    fullyQualifiedName: 'leads.create',
    httpMethod: 'post',
    httpPath: '/leads',
  },
  {
    clientCallName: 'client.leads.retrieve',
    fullyQualifiedName: 'leads.retrieve',
    httpMethod: 'get',
    httpPath: '/leads/{id}',
  },
  {
    clientCallName: 'client.leads.update',
    fullyQualifiedName: 'leads.update',
    httpMethod: 'patch',
    httpPath: '/leads/{id}',
  },
  {
    clientCallName: 'client.topups.create',
    fullyQualifiedName: 'topups.create',
    httpMethod: 'post',
    httpPath: '/topups',
  },
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/files/{id}',
  },
  {
    clientCallName: 'client.files.create',
    fullyQualifiedName: 'files.create',
    httpMethod: 'post',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.companyTokenTransactions.list',
    fullyQualifiedName: 'companyTokenTransactions.list',
    httpMethod: 'get',
    httpPath: '/company_token_transactions',
  },
  {
    clientCallName: 'client.companyTokenTransactions.create',
    fullyQualifiedName: 'companyTokenTransactions.create',
    httpMethod: 'post',
    httpPath: '/company_token_transactions',
  },
  {
    clientCallName: 'client.companyTokenTransactions.retrieve',
    fullyQualifiedName: 'companyTokenTransactions.retrieve',
    httpMethod: 'get',
    httpPath: '/company_token_transactions/{id}',
  },
  {
    clientCallName: 'client.dmMembers.list',
    fullyQualifiedName: 'dmMembers.list',
    httpMethod: 'get',
    httpPath: '/dm_members',
  },
  {
    clientCallName: 'client.dmMembers.create',
    fullyQualifiedName: 'dmMembers.create',
    httpMethod: 'post',
    httpPath: '/dm_members',
  },
  {
    clientCallName: 'client.dmMembers.retrieve',
    fullyQualifiedName: 'dmMembers.retrieve',
    httpMethod: 'get',
    httpPath: '/dm_members/{id}',
  },
  {
    clientCallName: 'client.dmMembers.update',
    fullyQualifiedName: 'dmMembers.update',
    httpMethod: 'patch',
    httpPath: '/dm_members/{id}',
  },
  {
    clientCallName: 'client.dmMembers.delete',
    fullyQualifiedName: 'dmMembers.delete',
    httpMethod: 'delete',
    httpPath: '/dm_members/{id}',
  },
  {
    clientCallName: 'client.aiChats.list',
    fullyQualifiedName: 'aiChats.list',
    httpMethod: 'get',
    httpPath: '/ai_chats',
  },
  {
    clientCallName: 'client.aiChats.create',
    fullyQualifiedName: 'aiChats.create',
    httpMethod: 'post',
    httpPath: '/ai_chats',
  },
  {
    clientCallName: 'client.aiChats.retrieve',
    fullyQualifiedName: 'aiChats.retrieve',
    httpMethod: 'get',
    httpPath: '/ai_chats/{id}',
  },
  {
    clientCallName: 'client.aiChats.update',
    fullyQualifiedName: 'aiChats.update',
    httpMethod: 'patch',
    httpPath: '/ai_chats/{id}',
  },
  {
    clientCallName: 'client.aiChats.delete',
    fullyQualifiedName: 'aiChats.delete',
    httpMethod: 'delete',
    httpPath: '/ai_chats/{id}',
  },
  {
    clientCallName: 'client.dmChannels.list',
    fullyQualifiedName: 'dmChannels.list',
    httpMethod: 'get',
    httpPath: '/dm_channels',
  },
  {
    clientCallName: 'client.dmChannels.create',
    fullyQualifiedName: 'dmChannels.create',
    httpMethod: 'post',
    httpPath: '/dm_channels',
  },
  {
    clientCallName: 'client.dmChannels.retrieve',
    fullyQualifiedName: 'dmChannels.retrieve',
    httpMethod: 'get',
    httpPath: '/dm_channels/{id}',
  },
  {
    clientCallName: 'client.dmChannels.update',
    fullyQualifiedName: 'dmChannels.update',
    httpMethod: 'patch',
    httpPath: '/dm_channels/{id}',
  },
  {
    clientCallName: 'client.dmChannels.delete',
    fullyQualifiedName: 'dmChannels.delete',
    httpMethod: 'delete',
    httpPath: '/dm_channels/{id}',
  },
  {
    clientCallName: 'client.disputeAlerts.list',
    fullyQualifiedName: 'disputeAlerts.list',
    httpMethod: 'get',
    httpPath: '/dispute_alerts',
  },
  {
    clientCallName: 'client.disputeAlerts.retrieve',
    fullyQualifiedName: 'disputeAlerts.retrieve',
    httpMethod: 'get',
    httpPath: '/dispute_alerts/{id}',
  },
  {
    clientCallName: 'client.resolutionCenterCases.list',
    fullyQualifiedName: 'resolutionCenterCases.list',
    httpMethod: 'get',
    httpPath: '/resolution_center_cases',
  },
  {
    clientCallName: 'client.resolutionCenterCases.retrieve',
    fullyQualifiedName: 'resolutionCenterCases.retrieve',
    httpMethod: 'get',
    httpPath: '/resolution_center_cases/{id}',
  },
  {
    clientCallName: 'client.payoutAccounts.retrieve',
    fullyQualifiedName: 'payoutAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/payout_accounts/{id}',
  },
  {
    clientCallName: 'client.affiliates.list',
    fullyQualifiedName: 'affiliates.list',
    httpMethod: 'get',
    httpPath: '/affiliates',
  },
  {
    clientCallName: 'client.affiliates.create',
    fullyQualifiedName: 'affiliates.create',
    httpMethod: 'post',
    httpPath: '/affiliates',
  },
  {
    clientCallName: 'client.affiliates.retrieve',
    fullyQualifiedName: 'affiliates.retrieve',
    httpMethod: 'get',
    httpPath: '/affiliates/{id}',
  },
  {
    clientCallName: 'client.affiliates.archive',
    fullyQualifiedName: 'affiliates.archive',
    httpMethod: 'post',
    httpPath: '/affiliates/{id}/archive',
  },
  {
    clientCallName: 'client.affiliates.unarchive',
    fullyQualifiedName: 'affiliates.unarchive',
    httpMethod: 'post',
    httpPath: '/affiliates/{id}/unarchive',
  },
  {
    clientCallName: 'client.affiliates.overrides.list',
    fullyQualifiedName: 'affiliates.overrides.list',
    httpMethod: 'get',
    httpPath: '/affiliates/{id}/overrides',
  },
  {
    clientCallName: 'client.affiliates.overrides.create',
    fullyQualifiedName: 'affiliates.overrides.create',
    httpMethod: 'post',
    httpPath: '/affiliates/{id}/overrides',
  },
  {
    clientCallName: 'client.affiliates.overrides.retrieve',
    fullyQualifiedName: 'affiliates.overrides.retrieve',
    httpMethod: 'get',
    httpPath: '/affiliates/{id}/overrides/{override_id}',
  },
  {
    clientCallName: 'client.affiliates.overrides.update',
    fullyQualifiedName: 'affiliates.overrides.update',
    httpMethod: 'patch',
    httpPath: '/affiliates/{id}/overrides/{override_id}',
  },
  {
    clientCallName: 'client.affiliates.overrides.delete',
    fullyQualifiedName: 'affiliates.overrides.delete',
    httpMethod: 'delete',
    httpPath: '/affiliates/{id}/overrides/{override_id}',
  },
  {
    clientCallName: 'client.bounties.list',
    fullyQualifiedName: 'bounties.list',
    httpMethod: 'get',
    httpPath: '/bounties',
  },
  {
    clientCallName: 'client.bounties.create',
    fullyQualifiedName: 'bounties.create',
    httpMethod: 'post',
    httpPath: '/bounties',
  },
  {
    clientCallName: 'client.bounties.retrieve',
    fullyQualifiedName: 'bounties.retrieve',
    httpMethod: 'get',
    httpPath: '/bounties/{id}',
  },
  {
    clientCallName: 'client.bounties.update',
    fullyQualifiedName: 'bounties.update',
    httpMethod: 'patch',
    httpPath: '/bounties/{id}',
  },
  {
    clientCallName: 'client.bounties.cancel',
    fullyQualifiedName: 'bounties.cancel',
    httpMethod: 'post',
    httpPath: '/bounties/{id}/cancel',
  },
  {
    clientCallName: 'client.bountySubmissions.list',
    fullyQualifiedName: 'bountySubmissions.list',
    httpMethod: 'get',
    httpPath: '/bounty_submissions',
  },
  {
    clientCallName: 'client.bountySubmissions.create',
    fullyQualifiedName: 'bountySubmissions.create',
    httpMethod: 'post',
    httpPath: '/bounty_submissions',
  },
  {
    clientCallName: 'client.bountySubmissions.retrieve',
    fullyQualifiedName: 'bountySubmissions.retrieve',
    httpMethod: 'get',
    httpPath: '/bounty_submissions/{bounty_submission_id}',
  },
  {
    clientCallName: 'client.bountySubmissions.delete',
    fullyQualifiedName: 'bountySubmissions.delete',
    httpMethod: 'delete',
    httpPath: '/bounty_submissions/{bounty_submission_id}',
  },
  {
    clientCallName: 'client.bountySubmissions.submit',
    fullyQualifiedName: 'bountySubmissions.submit',
    httpMethod: 'post',
    httpPath: '/bounty_submissions/{bounty_submission_id}/submit',
  },
  {
    clientCallName: 'client.adCampaigns.list',
    fullyQualifiedName: 'adCampaigns.list',
    httpMethod: 'get',
    httpPath: '/ad_campaigns',
  },
  {
    clientCallName: 'client.adCampaigns.create',
    fullyQualifiedName: 'adCampaigns.create',
    httpMethod: 'post',
    httpPath: '/ad_campaigns',
  },
  {
    clientCallName: 'client.adCampaigns.retrieve',
    fullyQualifiedName: 'adCampaigns.retrieve',
    httpMethod: 'get',
    httpPath: '/ad_campaigns/{id}',
  },
  {
    clientCallName: 'client.adCampaigns.update',
    fullyQualifiedName: 'adCampaigns.update',
    httpMethod: 'patch',
    httpPath: '/ad_campaigns/{id}',
  },
  {
    clientCallName: 'client.adCampaigns.delete',
    fullyQualifiedName: 'adCampaigns.delete',
    httpMethod: 'delete',
    httpPath: '/ad_campaigns/{id}',
  },
  {
    clientCallName: 'client.adCampaigns.pause',
    fullyQualifiedName: 'adCampaigns.pause',
    httpMethod: 'post',
    httpPath: '/ad_campaigns/{id}/pause',
  },
  {
    clientCallName: 'client.adCampaigns.unpause',
    fullyQualifiedName: 'adCampaigns.unpause',
    httpMethod: 'post',
    httpPath: '/ad_campaigns/{id}/unpause',
  },
  {
    clientCallName: 'client.adCampaigns.duplicate',
    fullyQualifiedName: 'adCampaigns.duplicate',
    httpMethod: 'post',
    httpPath: '/ad_campaigns/{id}/duplicate',
  },
  {
    clientCallName: 'client.adCampaigns.retryPayment',
    fullyQualifiedName: 'adCampaigns.retryPayment',
    httpMethod: 'post',
    httpPath: '/ad_campaigns/{id}/retry_payment',
  },
  {
    clientCallName: 'client.adGroups.list',
    fullyQualifiedName: 'adGroups.list',
    httpMethod: 'get',
    httpPath: '/ad_groups',
  },
  {
    clientCallName: 'client.adGroups.create',
    fullyQualifiedName: 'adGroups.create',
    httpMethod: 'post',
    httpPath: '/ad_groups',
  },
  {
    clientCallName: 'client.adGroups.retrieve',
    fullyQualifiedName: 'adGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/ad_groups/{id}',
  },
  {
    clientCallName: 'client.adGroups.update',
    fullyQualifiedName: 'adGroups.update',
    httpMethod: 'patch',
    httpPath: '/ad_groups/{id}',
  },
  {
    clientCallName: 'client.adGroups.delete',
    fullyQualifiedName: 'adGroups.delete',
    httpMethod: 'delete',
    httpPath: '/ad_groups/{id}',
  },
  {
    clientCallName: 'client.adGroups.pause',
    fullyQualifiedName: 'adGroups.pause',
    httpMethod: 'post',
    httpPath: '/ad_groups/{id}/pause',
  },
  {
    clientCallName: 'client.adGroups.unpause',
    fullyQualifiedName: 'adGroups.unpause',
    httpMethod: 'post',
    httpPath: '/ad_groups/{id}/unpause',
  },
  {
    clientCallName: 'client.adGroups.duplicate',
    fullyQualifiedName: 'adGroups.duplicate',
    httpMethod: 'post',
    httpPath: '/ad_groups/{id}/duplicate',
  },
  {
    clientCallName: 'client.adGroups.searchTargetingOptions',
    fullyQualifiedName: 'adGroups.searchTargetingOptions',
    httpMethod: 'get',
    httpPath: '/ad_groups/targeting_options',
  },
  {
    clientCallName: 'client.adGroups.estimateReach',
    fullyQualifiedName: 'adGroups.estimateReach',
    httpMethod: 'post',
    httpPath: '/ad_groups/estimate_reach',
  },
  {
    clientCallName: 'client.ads.list',
    fullyQualifiedName: 'ads.list',
    httpMethod: 'get',
    httpPath: '/ads',
  },
  {
    clientCallName: 'client.ads.create',
    fullyQualifiedName: 'ads.create',
    httpMethod: 'post',
    httpPath: '/ads',
  },
  {
    clientCallName: 'client.ads.retrieve',
    fullyQualifiedName: 'ads.retrieve',
    httpMethod: 'get',
    httpPath: '/ads/{id}',
  },
  {
    clientCallName: 'client.ads.update',
    fullyQualifiedName: 'ads.update',
    httpMethod: 'patch',
    httpPath: '/ads/{id}',
  },
  {
    clientCallName: 'client.ads.delete',
    fullyQualifiedName: 'ads.delete',
    httpMethod: 'delete',
    httpPath: '/ads/{id}',
  },
  {
    clientCallName: 'client.ads.pause',
    fullyQualifiedName: 'ads.pause',
    httpMethod: 'post',
    httpPath: '/ads/{id}/pause',
  },
  {
    clientCallName: 'client.ads.unpause',
    fullyQualifiedName: 'ads.unpause',
    httpMethod: 'post',
    httpPath: '/ads/{id}/unpause',
  },
  {
    clientCallName: 'client.ads.duplicate',
    fullyQualifiedName: 'ads.duplicate',
    httpMethod: 'post',
    httpPath: '/ads/{id}/duplicate',
  },
  {
    clientCallName: 'client.adReports.retrieve',
    fullyQualifiedName: 'adReports.retrieve',
    httpMethod: 'get',
    httpPath: '/ad_reports',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
