// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_apps from './apps/create-apps';
import retrieve_apps from './apps/retrieve-apps';
import update_apps from './apps/update-apps';
import list_apps from './apps/list-apps';
import create_invoices from './invoices/create-invoices';
import retrieve_invoices from './invoices/retrieve-invoices';
import list_invoices from './invoices/list-invoices';
import void_invoices from './invoices/void-invoices';
import retrieve_course_lesson_interactions from './course-lesson-interactions/retrieve-course-lesson-interactions';
import list_course_lesson_interactions from './course-lesson-interactions/list-course-lesson-interactions';
import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import delete_products from './products/delete-products';
import create_companies from './companies/create-companies';
import retrieve_companies from './companies/retrieve-companies';
import list_companies from './companies/list-companies';
import create_plans from './plans/create-plans';
import retrieve_plans from './plans/retrieve-plans';
import update_plans from './plans/update-plans';
import list_plans from './plans/list-plans';
import delete_plans from './plans/delete-plans';
import retrieve_entries from './entries/retrieve-entries';
import list_entries from './entries/list-entries';
import approve_entries from './entries/approve-entries';
import deny_entries from './entries/deny-entries';
import create_forum_posts from './forum-posts/create-forum-posts';
import retrieve_forum_posts from './forum-posts/retrieve-forum-posts';
import update_forum_posts from './forum-posts/update-forum-posts';
import list_forum_posts from './forum-posts/list-forum-posts';
import create_transfers from './transfers/create-transfers';
import retrieve_transfers from './transfers/retrieve-transfers';
import list_transfers from './transfers/list-transfers';
import retrieve_ledger_accounts from './ledger-accounts/retrieve-ledger-accounts';
import retrieve_memberships from './memberships/retrieve-memberships';
import update_memberships from './memberships/update-memberships';
import list_memberships from './memberships/list-memberships';
import cancel_memberships from './memberships/cancel-memberships';
import pause_memberships from './memberships/pause-memberships';
import resume_memberships from './memberships/resume-memberships';
import retrieve_authorized_users from './authorized-users/retrieve-authorized-users';
import list_authorized_users from './authorized-users/list-authorized-users';
import create_app_builds from './app-builds/create-app-builds';
import retrieve_app_builds from './app-builds/retrieve-app-builds';
import list_app_builds from './app-builds/list-app-builds';
import promote_app_builds from './app-builds/promote-app-builds';
import create_shipments from './shipments/create-shipments';
import retrieve_shipments from './shipments/retrieve-shipments';
import list_shipments from './shipments/list-shipments';
import create_checkout_configurations from './checkout-configurations/create-checkout-configurations';
import retrieve_checkout_configurations from './checkout-configurations/retrieve-checkout-configurations';
import list_checkout_configurations from './checkout-configurations/list-checkout-configurations';
import create_messages from './messages/create-messages';
import retrieve_messages from './messages/retrieve-messages';
import update_messages from './messages/update-messages';
import list_messages from './messages/list-messages';
import retrieve_chat_channels from './chat-channels/retrieve-chat-channels';
import update_chat_channels from './chat-channels/update-chat-channels';
import list_chat_channels from './chat-channels/list-chat-channels';
import retrieve_users from './users/retrieve-users';
import check_access_users from './users/check-access-users';
import retrieve_payments from './payments/retrieve-payments';
import list_payments from './payments/list-payments';
import refund_payments from './payments/refund-payments';
import retry_payments from './payments/retry-payments';
import void_payments from './payments/void-payments';
import create_support_channels from './support-channels/create-support-channels';
import retrieve_support_channels from './support-channels/retrieve-support-channels';
import list_support_channels from './support-channels/list-support-channels';
import create_experiences from './experiences/create-experiences';
import retrieve_experiences from './experiences/retrieve-experiences';
import update_experiences from './experiences/update-experiences';
import list_experiences from './experiences/list-experiences';
import delete_experiences from './experiences/delete-experiences';
import attach_experiences from './experiences/attach-experiences';
import detach_experiences from './experiences/detach-experiences';
import duplicate_experiences from './experiences/duplicate-experiences';
import create_reactions from './reactions/create-reactions';
import retrieve_reactions from './reactions/retrieve-reactions';
import list_reactions from './reactions/list-reactions';
import retrieve_members from './members/retrieve-members';
import list_members from './members/list-members';
import retrieve_forums from './forums/retrieve-forums';
import update_forums from './forums/update-forums';
import list_forums from './forums/list-forums';
import create_promo_codes from './promo-codes/create-promo-codes';
import retrieve_promo_codes from './promo-codes/retrieve-promo-codes';
import list_promo_codes from './promo-codes/list-promo-codes';
import delete_promo_codes from './promo-codes/delete-promo-codes';
import create_courses from './courses/create-courses';
import retrieve_courses from './courses/retrieve-courses';
import update_courses from './courses/update-courses';
import list_courses from './courses/list-courses';
import delete_courses from './courses/delete-courses';
import create_course_chapters from './course-chapters/create-course-chapters';
import retrieve_course_chapters from './course-chapters/retrieve-course-chapters';
import update_course_chapters from './course-chapters/update-course-chapters';
import list_course_chapters from './course-chapters/list-course-chapters';
import delete_course_chapters from './course-chapters/delete-course-chapters';
import create_course_lessons from './course-lessons/create-course-lessons';
import retrieve_course_lessons from './course-lessons/retrieve-course-lessons';
import update_course_lessons from './course-lessons/update-course-lessons';
import list_course_lessons from './course-lessons/list-course-lessons';
import delete_course_lessons from './course-lessons/delete-course-lessons';
import mark_as_completed_course_lessons from './course-lessons/mark-as-completed-course-lessons';
import start_course_lessons from './course-lessons/start-course-lessons';
import submit_assessment_course_lessons from './course-lessons/submit-assessment-course-lessons';
import retrieve_reviews from './reviews/retrieve-reviews';
import list_reviews from './reviews/list-reviews';
import retrieve_course_students from './course-students/retrieve-course-students';
import list_course_students from './course-students/list-course-students';
import create_access_tokens from './access-tokens/create-access-tokens';
import create_notifications from './notifications/create-notifications';
import retrieve_disputes from './disputes/retrieve-disputes';
import list_disputes from './disputes/list-disputes';
import submit_evidence_disputes from './disputes/submit-evidence-disputes';
import update_evidence_disputes from './disputes/update-evidence-disputes';
import retrieve_refunds from './refunds/retrieve-refunds';
import list_refunds from './refunds/list-refunds';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_apps);
addEndpoint(retrieve_apps);
addEndpoint(update_apps);
addEndpoint(list_apps);
addEndpoint(create_invoices);
addEndpoint(retrieve_invoices);
addEndpoint(list_invoices);
addEndpoint(void_invoices);
addEndpoint(retrieve_course_lesson_interactions);
addEndpoint(list_course_lesson_interactions);
addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(delete_products);
addEndpoint(create_companies);
addEndpoint(retrieve_companies);
addEndpoint(list_companies);
addEndpoint(create_plans);
addEndpoint(retrieve_plans);
addEndpoint(update_plans);
addEndpoint(list_plans);
addEndpoint(delete_plans);
addEndpoint(retrieve_entries);
addEndpoint(list_entries);
addEndpoint(approve_entries);
addEndpoint(deny_entries);
addEndpoint(create_forum_posts);
addEndpoint(retrieve_forum_posts);
addEndpoint(update_forum_posts);
addEndpoint(list_forum_posts);
addEndpoint(create_transfers);
addEndpoint(retrieve_transfers);
addEndpoint(list_transfers);
addEndpoint(retrieve_ledger_accounts);
addEndpoint(retrieve_memberships);
addEndpoint(update_memberships);
addEndpoint(list_memberships);
addEndpoint(cancel_memberships);
addEndpoint(pause_memberships);
addEndpoint(resume_memberships);
addEndpoint(retrieve_authorized_users);
addEndpoint(list_authorized_users);
addEndpoint(create_app_builds);
addEndpoint(retrieve_app_builds);
addEndpoint(list_app_builds);
addEndpoint(promote_app_builds);
addEndpoint(create_shipments);
addEndpoint(retrieve_shipments);
addEndpoint(list_shipments);
addEndpoint(create_checkout_configurations);
addEndpoint(retrieve_checkout_configurations);
addEndpoint(list_checkout_configurations);
addEndpoint(create_messages);
addEndpoint(retrieve_messages);
addEndpoint(update_messages);
addEndpoint(list_messages);
addEndpoint(retrieve_chat_channels);
addEndpoint(update_chat_channels);
addEndpoint(list_chat_channels);
addEndpoint(retrieve_users);
addEndpoint(check_access_users);
addEndpoint(retrieve_payments);
addEndpoint(list_payments);
addEndpoint(refund_payments);
addEndpoint(retry_payments);
addEndpoint(void_payments);
addEndpoint(create_support_channels);
addEndpoint(retrieve_support_channels);
addEndpoint(list_support_channels);
addEndpoint(create_experiences);
addEndpoint(retrieve_experiences);
addEndpoint(update_experiences);
addEndpoint(list_experiences);
addEndpoint(delete_experiences);
addEndpoint(attach_experiences);
addEndpoint(detach_experiences);
addEndpoint(duplicate_experiences);
addEndpoint(create_reactions);
addEndpoint(retrieve_reactions);
addEndpoint(list_reactions);
addEndpoint(retrieve_members);
addEndpoint(list_members);
addEndpoint(retrieve_forums);
addEndpoint(update_forums);
addEndpoint(list_forums);
addEndpoint(create_promo_codes);
addEndpoint(retrieve_promo_codes);
addEndpoint(list_promo_codes);
addEndpoint(delete_promo_codes);
addEndpoint(create_courses);
addEndpoint(retrieve_courses);
addEndpoint(update_courses);
addEndpoint(list_courses);
addEndpoint(delete_courses);
addEndpoint(create_course_chapters);
addEndpoint(retrieve_course_chapters);
addEndpoint(update_course_chapters);
addEndpoint(list_course_chapters);
addEndpoint(delete_course_chapters);
addEndpoint(create_course_lessons);
addEndpoint(retrieve_course_lessons);
addEndpoint(update_course_lessons);
addEndpoint(list_course_lessons);
addEndpoint(delete_course_lessons);
addEndpoint(mark_as_completed_course_lessons);
addEndpoint(start_course_lessons);
addEndpoint(submit_assessment_course_lessons);
addEndpoint(retrieve_reviews);
addEndpoint(list_reviews);
addEndpoint(retrieve_course_students);
addEndpoint(list_course_students);
addEndpoint(create_access_tokens);
addEndpoint(create_notifications);
addEndpoint(retrieve_disputes);
addEndpoint(list_disputes);
addEndpoint(submit_evidence_disputes);
addEndpoint(update_evidence_disputes);
addEndpoint(retrieve_refunds);
addEndpoint(list_refunds);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
