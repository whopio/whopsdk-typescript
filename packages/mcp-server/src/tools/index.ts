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
import retrieve_companies from './companies/retrieve-companies';
import create_plans from './plans/create-plans';
import retrieve_plans from './plans/retrieve-plans';
import update_plans from './plans/update-plans';
import list_plans from './plans/list-plans';
import delete_plans from './plans/delete-plans';
import retrieve_entries from './entries/retrieve-entries';
import list_entries from './entries/list-entries';
import approve_entries from './entries/approve-entries';
import deny_entries from './entries/deny-entries';

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
addEndpoint(retrieve_companies);
addEndpoint(create_plans);
addEndpoint(retrieve_plans);
addEndpoint(update_plans);
addEndpoint(list_plans);
addEndpoint(delete_plans);
addEndpoint(retrieve_entries);
addEndpoint(list_entries);
addEndpoint(approve_entries);
addEndpoint(deny_entries);

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
