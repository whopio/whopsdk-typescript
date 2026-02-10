// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseStudents extends APIResource {
  /**
   * Retrieves the details of an existing course student.
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
   * Returns a paginated list of students enrolled in a course, with optional name
   * filtering.
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
 * An enrollment record for a student in a course, including progress and
 * completion metrics.
 */
export interface CourseStudentRetrieveResponse {
  /**
   * The unique identifier for the course student type.
   */
  id: string;

  /**
   * The total number of lessons this student has marked as completed in the course.
   */
  completed_lessons_count: number;

  /**
   * The percentage of available lessons the student has completed, as a value from 0
   * to 100 rounded to two decimal places.
   */
  completion_rate: number;

  /**
   * The course this student is enrolled in.
   */
  course: CourseStudentRetrieveResponse.Course;

  /**
   * The timestamp when the student first interacted with this course, as a Unix
   * timestamp.
   */
  first_interaction_at: string;

  /**
   * The timestamp when the student most recently interacted with this course, as a
   * Unix timestamp.
   */
  last_interaction_at: string;

  /**
   * The total number of visible lessons available to this student in the course.
   */
  total_lessons_count: number;

  /**
   * The user profile of the enrolled student.
   */
  user: CourseStudentRetrieveResponse.User;
}

export namespace CourseStudentRetrieveResponse {
  /**
   * The course this student is enrolled in.
   */
  export interface Course {
    /**
     * The unique identifier for the course.
     */
    id: string;

    /**
     * The parent experience that this course belongs to.
     */
    experience: Course.Experience;

    /**
     * The display name of the course shown to students. Null if no title has been set.
     */
    title: string | null;
  }

  export namespace Course {
    /**
     * The parent experience that this course belongs to.
     */
    export interface Experience {
      /**
       * The unique identifier for the experience.
       */
      id: string;
    }
  }

  /**
   * The user profile of the enrolled student.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

/**
 * An enrollment record for a student in a course, including progress and
 * completion metrics.
 */
export interface CourseStudentListResponse {
  /**
   * The unique identifier for the course student type.
   */
  id: string;

  /**
   * The total number of lessons this student has marked as completed in the course.
   */
  completed_lessons_count: number;

  /**
   * The percentage of available lessons the student has completed, as a value from 0
   * to 100 rounded to two decimal places.
   */
  completion_rate: number;

  /**
   * The timestamp when the student first interacted with this course, as a Unix
   * timestamp.
   */
  first_interaction_at: string;

  /**
   * The timestamp when the student most recently interacted with this course, as a
   * Unix timestamp.
   */
  last_interaction_at: string;

  /**
   * The total number of visible lessons available to this student in the course.
   */
  total_lessons_count: number;

  /**
   * The user profile of the enrolled student.
   */
  user: CourseStudentListResponse.User;
}

export namespace CourseStudentListResponse {
  /**
   * The user profile of the enrolled student.
   */
  export interface User {
    /**
     * The unique identifier for the user.
     */
    id: string;

    /**
     * The user's display name shown on their public profile.
     */
    name: string | null;

    /**
     * The user's unique username shown on their public profile.
     */
    username: string;
  }
}

export interface CourseStudentListParams extends CursorPageParams {
  /**
   * The unique identifier of the course to list enrolled students for.
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
   * A search term to filter students by name or username.
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
