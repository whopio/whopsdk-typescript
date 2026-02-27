// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { CourseLessonInteractionListItemsCursorPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Course lesson interactions
 */
export class CourseLessonInteractions extends APIResource {
  /**
   * Retrieves the details of an existing course lesson interaction.
   *
   * Required permissions:
   *
   * - `courses:read`
   * - `course_analytics:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.CourseLessonInteraction> {
    return this._client.get(path`/course_lesson_interactions/${id}`, options);
  }

  /**
   * Returns a paginated list of lesson interactions, filtered by lesson, course,
   * user, or completion status.
   *
   * Required permissions:
   *
   * - `courses:read`
   * - `course_analytics:read`
   */
  list(
    query: CourseLessonInteractionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CourseLessonInteractionListItemsCursorPage, Shared.CourseLessonInteractionListItem> {
    return this._client.getAPIList(
      '/course_lesson_interactions',
      CursorPage<Shared.CourseLessonInteractionListItem>,
      { query, ...options },
    );
  }
}

export interface CourseLessonInteractionListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Whether to filter for completed or in-progress lesson interactions.
   */
  completed?: boolean | null;

  /**
   * The unique identifier of the course to filter interactions for.
   */
  course_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;

  /**
   * The unique identifier of the lesson to filter interactions for.
   */
  lesson_id?: string | null;

  /**
   * The unique identifier of the user to filter lesson interactions for.
   */
  user_id?: string | null;
}

export declare namespace CourseLessonInteractions {
  export { type CourseLessonInteractionListParams as CourseLessonInteractionListParams };
}

export { type CourseLessonInteractionListItemsCursorPage };
