// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseStudents extends APIResource {
  /**
   * Retrieves a course student by interaction ID
   *
   * Required permissions:
   *
   * - `courses:read`
   * - `course_analytics:read`
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CourseStudentRetrieveResponse> {
    return this._client.get(path`/course_students/${id}`, options);
  }

  /**
   * Lists students for a course
   *
   * Required permissions:
   *
   * - `courses:read`
   * - `course_analytics:read`
   */
  list(
    query: CourseStudentListParams,
    options?: RequestOptions,
  ): PagePromise<CourseStudentListResponsesCursorPage, CourseStudentListResponse> {
    return this._client.getAPIList('/course_students', CursorPage<CourseStudentListResponse>, {
      query,
      ...options,
    });
  }
}

export type CourseStudentListResponsesCursorPage = CursorPage<CourseStudentListResponse>;

/**
 * A course student (enrollment of a student in a course)
 */
export interface CourseStudentRetrieveResponse {
  /**
   * The unique identifier for the course student type.
   */
  id: string;

  /**
   * The number of lessons the student has completed
   */
  completed_lessons_count: number;

  /**
   * The percentage of lessons completed (0-100)
   */
  completion_rate: number;

  /**
   * The course the student is enrolled in
   */
  course: CourseStudentRetrieveResponse.Course;

  /**
   * When the student first interacted with the course
   */
  first_interaction_at: string;

  /**
   * When the student last interacted with the course
   */
  last_interaction_at: string;

  /**
   * The total number of lessons the student has access to
   */
  total_lessons_count: number;

  /**
   * The user who is enrolled in the course
   */
  user: CourseStudentRetrieveResponse.User;
}

export namespace CourseStudentRetrieveResponse {
  /**
   * The course the student is enrolled in
   */
  export interface Course {
    /**
     * The unique identifier for the course.
     */
    id: string;

    /**
     * The experience that the course belongs to
     */
    experience: Course.Experience;

    /**
     * The title of the course
     */
    title: string | null;
  }

  export namespace Course {
    /**
     * The experience that the course belongs to
     */
    export interface Experience {
      /**
       * The unique identifier for the experience.
       */
      id: string;
    }
  }

  /**
   * The user who is enrolled in the course
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

/**
 * A course student (enrollment of a student in a course)
 */
export interface CourseStudentListResponse {
  /**
   * The unique identifier for the course student type.
   */
  id: string;

  /**
   * The number of lessons the student has completed
   */
  completed_lessons_count: number;

  /**
   * The percentage of lessons completed (0-100)
   */
  completion_rate: number;

  /**
   * When the student first interacted with the course
   */
  first_interaction_at: string;

  /**
   * When the student last interacted with the course
   */
  last_interaction_at: string;

  /**
   * The total number of lessons the student has access to
   */
  total_lessons_count: number;

  /**
   * The user who is enrolled in the course
   */
  user: CourseStudentListResponse.User;
}

export namespace CourseStudentListResponse {
  /**
   * The user who is enrolled in the course
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The name of the user from their Whop account.
     */
    name: string | null;

    /**
     * The username of the user from their Whop account.
     */
    username: string;
  }
}

export interface CourseStudentListParams extends CursorPageParams {
  /**
   * The ID of the course
   */
  course_id: string;

  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Filter students by name - returns students whose names match the keyword
   */
  keyword?: string | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace CourseStudents {
  export {
    type CourseStudentRetrieveResponse as CourseStudentRetrieveResponse,
    type CourseStudentListResponse as CourseStudentListResponse,
    type CourseStudentListResponsesCursorPage as CourseStudentListResponsesCursorPage,
    type CourseStudentListParams as CourseStudentListParams,
  };
}
