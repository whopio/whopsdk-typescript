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
    clientCallName: 'client.apps.list',
    fullyQualifiedName: 'apps.list',
    httpMethod: 'get',
    httpPath: '/apps',
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
    clientCallName: 'client.invoices.list',
    fullyQualifiedName: 'invoices.list',
    httpMethod: 'get',
    httpPath: '/invoices',
  },
  {
    clientCallName: 'client.invoices.void',
    fullyQualifiedName: 'invoices.void',
    httpMethod: 'post',
    httpPath: '/invoices/{id}/void',
  },
  {
    clientCallName: 'client.courseLessonInteractions.retrieve',
    fullyQualifiedName: 'courseLessonInteractions.retrieve',
    httpMethod: 'get',
    httpPath: '/course_lesson_interactions/{id}',
  },
  {
    clientCallName: 'client.courseLessonInteractions.list',
    fullyQualifiedName: 'courseLessonInteractions.list',
    httpMethod: 'get',
    httpPath: '/course_lesson_interactions',
  },
  {
    clientCallName: 'client.products.create',
    fullyQualifiedName: 'products.create',
    httpMethod: 'post',
    httpPath: '/products',
  },
  {
    clientCallName: 'client.products.retrieve',
    fullyQualifiedName: 'products.retrieve',
    httpMethod: 'get',
    httpPath: '/products/{id}',
  },
  {
    clientCallName: 'client.products.update',
    fullyQualifiedName: 'products.update',
    httpMethod: 'patch',
    httpPath: '/products/{id}',
  },
  {
    clientCallName: 'client.products.list',
    fullyQualifiedName: 'products.list',
    httpMethod: 'get',
    httpPath: '/products',
  },
  {
    clientCallName: 'client.products.delete',
    fullyQualifiedName: 'products.delete',
    httpMethod: 'delete',
    httpPath: '/products/{id}',
  },
  {
    clientCallName: 'client.companies.create',
    fullyQualifiedName: 'companies.create',
    httpMethod: 'post',
    httpPath: '/companies',
  },
  {
    clientCallName: 'client.companies.retrieve',
    fullyQualifiedName: 'companies.retrieve',
    httpMethod: 'get',
    httpPath: '/companies/{id}',
  },
  {
    clientCallName: 'client.companies.update',
    fullyQualifiedName: 'companies.update',
    httpMethod: 'patch',
    httpPath: '/companies/{id}',
  },
  {
    clientCallName: 'client.companies.list',
    fullyQualifiedName: 'companies.list',
    httpMethod: 'get',
    httpPath: '/companies',
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
    clientCallName: 'client.webhooks.list',
    fullyQualifiedName: 'webhooks.list',
    httpMethod: 'get',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.delete',
    fullyQualifiedName: 'webhooks.delete',
    httpMethod: 'delete',
    httpPath: '/webhooks/{id}',
  },
  { clientCallName: 'client.webhooks.unwrap', fullyQualifiedName: 'webhooks.unwrap' },
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
    clientCallName: 'client.plans.list',
    fullyQualifiedName: 'plans.list',
    httpMethod: 'get',
    httpPath: '/plans',
  },
  {
    clientCallName: 'client.plans.delete',
    fullyQualifiedName: 'plans.delete',
    httpMethod: 'delete',
    httpPath: '/plans/{id}',
  },
  {
    clientCallName: 'client.entries.retrieve',
    fullyQualifiedName: 'entries.retrieve',
    httpMethod: 'get',
    httpPath: '/entries/{id}',
  },
  {
    clientCallName: 'client.entries.list',
    fullyQualifiedName: 'entries.list',
    httpMethod: 'get',
    httpPath: '/entries',
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
    clientCallName: 'client.forumPosts.list',
    fullyQualifiedName: 'forumPosts.list',
    httpMethod: 'get',
    httpPath: '/forum_posts',
  },
  {
    clientCallName: 'client.transfers.create',
    fullyQualifiedName: 'transfers.create',
    httpMethod: 'post',
    httpPath: '/transfers',
  },
  {
    clientCallName: 'client.transfers.retrieve',
    fullyQualifiedName: 'transfers.retrieve',
    httpMethod: 'get',
    httpPath: '/transfers/{id}',
  },
  {
    clientCallName: 'client.transfers.list',
    fullyQualifiedName: 'transfers.list',
    httpMethod: 'get',
    httpPath: '/transfers',
  },
  {
    clientCallName: 'client.ledgerAccounts.retrieve',
    fullyQualifiedName: 'ledgerAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/ledger_accounts/{id}',
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
    clientCallName: 'client.memberships.list',
    fullyQualifiedName: 'memberships.list',
    httpMethod: 'get',
    httpPath: '/memberships',
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
    clientCallName: 'client.memberships.uncancel',
    fullyQualifiedName: 'memberships.uncancel',
    httpMethod: 'post',
    httpPath: '/memberships/{id}/uncancel',
  },
  {
    clientCallName: 'client.authorizedUsers.retrieve',
    fullyQualifiedName: 'authorizedUsers.retrieve',
    httpMethod: 'get',
    httpPath: '/authorized_users/{id}',
  },
  {
    clientCallName: 'client.authorizedUsers.list',
    fullyQualifiedName: 'authorizedUsers.list',
    httpMethod: 'get',
    httpPath: '/authorized_users',
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
    clientCallName: 'client.appBuilds.list',
    fullyQualifiedName: 'appBuilds.list',
    httpMethod: 'get',
    httpPath: '/app_builds',
  },
  {
    clientCallName: 'client.appBuilds.promote',
    fullyQualifiedName: 'appBuilds.promote',
    httpMethod: 'post',
    httpPath: '/app_builds/{id}/promote',
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
    clientCallName: 'client.shipments.list',
    fullyQualifiedName: 'shipments.list',
    httpMethod: 'get',
    httpPath: '/shipments',
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
    clientCallName: 'client.checkoutConfigurations.list',
    fullyQualifiedName: 'checkoutConfigurations.list',
    httpMethod: 'get',
    httpPath: '/checkout_configurations',
  },
  {
    clientCallName: 'client.messages.create',
    fullyQualifiedName: 'messages.create',
    httpMethod: 'post',
    httpPath: '/messages',
  },
  {
    clientCallName: 'client.messages.retrieve',
    fullyQualifiedName: 'messages.retrieve',
    httpMethod: 'get',
    httpPath: '/messages/{id}',
  },
  {
    clientCallName: 'client.messages.update',
    fullyQualifiedName: 'messages.update',
    httpMethod: 'patch',
    httpPath: '/messages/{id}',
  },
  {
    clientCallName: 'client.messages.list',
    fullyQualifiedName: 'messages.list',
    httpMethod: 'get',
    httpPath: '/messages',
  },
  {
    clientCallName: 'client.messages.delete',
    fullyQualifiedName: 'messages.delete',
    httpMethod: 'delete',
    httpPath: '/messages/{id}',
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
    clientCallName: 'client.chatChannels.list',
    fullyQualifiedName: 'chatChannels.list',
    httpMethod: 'get',
    httpPath: '/chat_channels',
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
    clientCallName: 'client.users.updateProfile',
    fullyQualifiedName: 'users.updateProfile',
    httpMethod: 'patch',
    httpPath: '/users/me',
  },
  {
    clientCallName: 'client.payments.create',
    fullyQualifiedName: 'payments.create',
    httpMethod: 'post',
    httpPath: '/payments',
  },
  {
    clientCallName: 'client.payments.retrieve',
    fullyQualifiedName: 'payments.retrieve',
    httpMethod: 'get',
    httpPath: '/payments/{id}',
  },
  {
    clientCallName: 'client.payments.list',
    fullyQualifiedName: 'payments.list',
    httpMethod: 'get',
    httpPath: '/payments',
  },
  {
    clientCallName: 'client.payments.listFees',
    fullyQualifiedName: 'payments.listFees',
    httpMethod: 'get',
    httpPath: '/payments/{id}/fees',
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
    clientCallName: 'client.supportChannels.create',
    fullyQualifiedName: 'supportChannels.create',
    httpMethod: 'post',
    httpPath: '/support_channels',
  },
  {
    clientCallName: 'client.supportChannels.retrieve',
    fullyQualifiedName: 'supportChannels.retrieve',
    httpMethod: 'get',
    httpPath: '/support_channels/{id}',
  },
  {
    clientCallName: 'client.supportChannels.list',
    fullyQualifiedName: 'supportChannels.list',
    httpMethod: 'get',
    httpPath: '/support_channels',
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
    clientCallName: 'client.experiences.list',
    fullyQualifiedName: 'experiences.list',
    httpMethod: 'get',
    httpPath: '/experiences',
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
    clientCallName: 'client.reactions.list',
    fullyQualifiedName: 'reactions.list',
    httpMethod: 'get',
    httpPath: '/reactions',
  },
  {
    clientCallName: 'client.reactions.delete',
    fullyQualifiedName: 'reactions.delete',
    httpMethod: 'delete',
    httpPath: '/reactions/{id}',
  },
  {
    clientCallName: 'client.members.retrieve',
    fullyQualifiedName: 'members.retrieve',
    httpMethod: 'get',
    httpPath: '/members/{id}',
  },
  {
    clientCallName: 'client.members.list',
    fullyQualifiedName: 'members.list',
    httpMethod: 'get',
    httpPath: '/members',
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
    clientCallName: 'client.forums.list',
    fullyQualifiedName: 'forums.list',
    httpMethod: 'get',
    httpPath: '/forums',
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
    clientCallName: 'client.promoCodes.list',
    fullyQualifiedName: 'promoCodes.list',
    httpMethod: 'get',
    httpPath: '/promo_codes',
  },
  {
    clientCallName: 'client.promoCodes.delete',
    fullyQualifiedName: 'promoCodes.delete',
    httpMethod: 'delete',
    httpPath: '/promo_codes/{id}',
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
    clientCallName: 'client.courses.list',
    fullyQualifiedName: 'courses.list',
    httpMethod: 'get',
    httpPath: '/courses',
  },
  {
    clientCallName: 'client.courses.delete',
    fullyQualifiedName: 'courses.delete',
    httpMethod: 'delete',
    httpPath: '/courses/{id}',
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
    clientCallName: 'client.courseChapters.list',
    fullyQualifiedName: 'courseChapters.list',
    httpMethod: 'get',
    httpPath: '/course_chapters',
  },
  {
    clientCallName: 'client.courseChapters.delete',
    fullyQualifiedName: 'courseChapters.delete',
    httpMethod: 'delete',
    httpPath: '/course_chapters/{id}',
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
    clientCallName: 'client.courseLessons.list',
    fullyQualifiedName: 'courseLessons.list',
    httpMethod: 'get',
    httpPath: '/course_lessons',
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
    clientCallName: 'client.reviews.retrieve',
    fullyQualifiedName: 'reviews.retrieve',
    httpMethod: 'get',
    httpPath: '/reviews/{id}',
  },
  {
    clientCallName: 'client.reviews.list',
    fullyQualifiedName: 'reviews.list',
    httpMethod: 'get',
    httpPath: '/reviews',
  },
  {
    clientCallName: 'client.courseStudents.retrieve',
    fullyQualifiedName: 'courseStudents.retrieve',
    httpMethod: 'get',
    httpPath: '/course_students/{id}',
  },
  {
    clientCallName: 'client.courseStudents.list',
    fullyQualifiedName: 'courseStudents.list',
    httpMethod: 'get',
    httpPath: '/course_students',
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
    clientCallName: 'client.disputes.retrieve',
    fullyQualifiedName: 'disputes.retrieve',
    httpMethod: 'get',
    httpPath: '/disputes/{id}',
  },
  {
    clientCallName: 'client.disputes.list',
    fullyQualifiedName: 'disputes.list',
    httpMethod: 'get',
    httpPath: '/disputes',
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
    clientCallName: 'client.refunds.retrieve',
    fullyQualifiedName: 'refunds.retrieve',
    httpMethod: 'get',
    httpPath: '/refunds/{id}',
  },
  {
    clientCallName: 'client.refunds.list',
    fullyQualifiedName: 'refunds.list',
    httpMethod: 'get',
    httpPath: '/refunds',
  },
  {
    clientCallName: 'client.withdrawals.create',
    fullyQualifiedName: 'withdrawals.create',
    httpMethod: 'post',
    httpPath: '/withdrawals',
  },
  {
    clientCallName: 'client.withdrawals.retrieve',
    fullyQualifiedName: 'withdrawals.retrieve',
    httpMethod: 'get',
    httpPath: '/withdrawals/{id}',
  },
  {
    clientCallName: 'client.withdrawals.list',
    fullyQualifiedName: 'withdrawals.list',
    httpMethod: 'get',
    httpPath: '/withdrawals',
  },
  {
    clientCallName: 'client.accountLinks.create',
    fullyQualifiedName: 'accountLinks.create',
    httpMethod: 'post',
    httpPath: '/account_links',
  },
  {
    clientCallName: 'client.setupIntents.retrieve',
    fullyQualifiedName: 'setupIntents.retrieve',
    httpMethod: 'get',
    httpPath: '/setup_intents/{id}',
  },
  {
    clientCallName: 'client.setupIntents.list',
    fullyQualifiedName: 'setupIntents.list',
    httpMethod: 'get',
    httpPath: '/setup_intents',
  },
  {
    clientCallName: 'client.paymentMethods.retrieve',
    fullyQualifiedName: 'paymentMethods.retrieve',
    httpMethod: 'get',
    httpPath: '/payment_methods/{id}',
  },
  {
    clientCallName: 'client.paymentMethods.list',
    fullyQualifiedName: 'paymentMethods.list',
    httpMethod: 'get',
    httpPath: '/payment_methods',
  },
  {
    clientCallName: 'client.feeMarkups.create',
    fullyQualifiedName: 'feeMarkups.create',
    httpMethod: 'post',
    httpPath: '/fee_markups',
  },
  {
    clientCallName: 'client.feeMarkups.list',
    fullyQualifiedName: 'feeMarkups.list',
    httpMethod: 'get',
    httpPath: '/fee_markups',
  },
  {
    clientCallName: 'client.feeMarkups.delete',
    fullyQualifiedName: 'feeMarkups.delete',
    httpMethod: 'delete',
    httpPath: '/fee_markups/{id}',
  },
  {
    clientCallName: 'client.payoutMethods.retrieve',
    fullyQualifiedName: 'payoutMethods.retrieve',
    httpMethod: 'get',
    httpPath: '/payout_methods/{id}',
  },
  {
    clientCallName: 'client.payoutMethods.list',
    fullyQualifiedName: 'payoutMethods.list',
    httpMethod: 'get',
    httpPath: '/payout_methods',
  },
  {
    clientCallName: 'client.verifications.retrieve',
    fullyQualifiedName: 'verifications.retrieve',
    httpMethod: 'get',
    httpPath: '/verifications/{id}',
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
    clientCallName: 'client.leads.list',
    fullyQualifiedName: 'leads.list',
    httpMethod: 'get',
    httpPath: '/leads',
  },
  {
    clientCallName: 'client.topups.create',
    fullyQualifiedName: 'topups.create',
    httpMethod: 'post',
    httpPath: '/topups',
  },
  {
    clientCallName: 'client.files.create',
    fullyQualifiedName: 'files.create',
    httpMethod: 'post',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/files/{id}',
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
    clientCallName: 'client.companyTokenTransactions.list',
    fullyQualifiedName: 'companyTokenTransactions.list',
    httpMethod: 'get',
    httpPath: '/company_token_transactions',
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
    clientCallName: 'client.dmMembers.list',
    fullyQualifiedName: 'dmMembers.list',
    httpMethod: 'get',
    httpPath: '/dm_members',
  },
  {
    clientCallName: 'client.dmMembers.delete',
    fullyQualifiedName: 'dmMembers.delete',
    httpMethod: 'delete',
    httpPath: '/dm_members/{id}',
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
    clientCallName: 'client.aiChats.list',
    fullyQualifiedName: 'aiChats.list',
    httpMethod: 'get',
    httpPath: '/ai_chats',
  },
  {
    clientCallName: 'client.aiChats.delete',
    fullyQualifiedName: 'aiChats.delete',
    httpMethod: 'delete',
    httpPath: '/ai_chats/{id}',
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
    clientCallName: 'client.dmChannels.list',
    fullyQualifiedName: 'dmChannels.list',
    httpMethod: 'get',
    httpPath: '/dm_channels',
  },
  {
    clientCallName: 'client.dmChannels.delete',
    fullyQualifiedName: 'dmChannels.delete',
    httpMethod: 'delete',
    httpPath: '/dm_channels/{id}',
  },
  {
    clientCallName: 'client.disputeAlerts.retrieve',
    fullyQualifiedName: 'disputeAlerts.retrieve',
    httpMethod: 'get',
    httpPath: '/dispute_alerts/{id}',
  },
  {
    clientCallName: 'client.disputeAlerts.list',
    fullyQualifiedName: 'disputeAlerts.list',
    httpMethod: 'get',
    httpPath: '/dispute_alerts',
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
