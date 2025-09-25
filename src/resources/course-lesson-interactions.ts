// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseLessonInteractions extends APIResource {
  /**
   * Retrieves a course lesson interaction by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.CourseLessonInteraction> {
    return this._client.get(path`/course_lesson_interactions/${id}`, options);
  }

  /**
   * Lists course lesson interactions
   */
  list(
    query: CourseLessonInteractionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CourseLessonInteractionListResponse> {
    return this._client.get('/course_lesson_interactions', { query, ...options });
  }
}

/**
 * The connection type for LessonInteraction.
 */
export interface CourseLessonInteractionListResponse {
  /**
   * A list of nodes.
   */
  data: Array<Shared.CourseLessonInteractionListItem | null> | null;

  /**
   * Information to aid in pagination.
   */
  page_info: Shared.PageInfo;
}

export interface CourseLessonInteractionListParams {
  /**
   * Returns the elements in the list that come after the specified cursor.
   */
  after?: string | null;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Whether the lesson has been completed by the user
   */
  completed?: boolean | null;

  /**
   * The ID of the course to list course lesson interactions for
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
   * The ID of the lesson to list course lesson interactions for
   */
  lesson_id?: string | null;

  /**
   * The ID of the user to list course lesson interactions for
   */
  user_id?: string | null;
}

export declare namespace CourseLessonInteractions {
  export {
    type CourseLessonInteractionListResponse as CourseLessonInteractionListResponse,
    type CourseLessonInteractionListParams as CourseLessonInteractionListParams,
  };
}
