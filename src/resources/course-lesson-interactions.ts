// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseLessonInteractions extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<CourseLessonInteractionRetrieveResponse> {
    return this._client.get(path`/course_lesson_interactions/${id}`, options);
  }

  list(
    query: CourseLessonInteractionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CourseLessonInteractionListResponse> {
    return this._client.get('/course_lesson_interactions', { query, ...options });
  }
}

/**
 * A lesson interaction tracking user progress in courses
 */
export interface CourseLessonInteractionRetrieveResponse {
  /**
   * The ID of the lesson interaction
   */
  id: string;

  /**
   * Whether the lesson has been completed by the user
   */
  completed: boolean;

  /**
   * When the interaction was created
   */
  created_at: number;

  /**
   * The lesson this interaction is for
   */
  lesson: CourseLessonInteractionRetrieveResponse.Lesson;

  /**
   * The user who interacted with the lesson
   */
  user: CourseLessonInteractionRetrieveResponse.User;
}

export namespace CourseLessonInteractionRetrieveResponse {
  /**
   * The lesson this interaction is for
   */
  export interface Lesson {
    /**
     * The ID of the lesson
     */
    id: string;

    /**
     * The title of the lesson
     */
    title: string;
  }

  /**
   * The user who interacted with the lesson
   */
  export interface User {
    /**
     * The internal ID of the user.
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
 * The connection type for LessonInteraction.
 */
export interface CourseLessonInteractionListResponse {
  /**
   * A list of nodes.
   */
  data: Array<CourseLessonInteractionListResponse.Data | null> | null;

  /**
   * Information to aid in pagination.
   */
  page_info: CourseLessonInteractionListResponse.PageInfo;
}

export namespace CourseLessonInteractionListResponse {
  /**
   * A lesson interaction tracking user progress in courses
   */
  export interface Data {
    /**
     * The ID of the lesson interaction
     */
    id: string;

    /**
     * Whether the lesson has been completed by the user
     */
    completed: boolean;

    /**
     * When the interaction was created
     */
    created_at: number;

    /**
     * The lesson this interaction is for
     */
    lesson: Data.Lesson;

    /**
     * The user who interacted with the lesson
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * The lesson this interaction is for
     */
    export interface Lesson {
      /**
       * The ID of the lesson
       */
      id: string;

      /**
       * The title of the lesson
       */
      title: string;
    }

    /**
     * The user who interacted with the lesson
     */
    export interface User {
      /**
       * The internal ID of the user.
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
   * Information to aid in pagination.
   */
  export interface PageInfo {
    /**
     * When paginating forwards, the cursor to continue.
     */
    end_cursor: string | null;

    /**
     * When paginating forwards, are there more items?
     */
    has_next_page: boolean;

    /**
     * When paginating backwards, are there more items?
     */
    has_previous_page: boolean;

    /**
     * When paginating backwards, the cursor to continue.
     */
    start_cursor: string | null;
  }
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
    type CourseLessonInteractionRetrieveResponse as CourseLessonInteractionRetrieveResponse,
    type CourseLessonInteractionListResponse as CourseLessonInteractionListResponse,
    type CourseLessonInteractionListParams as CourseLessonInteractionListParams,
  };
}
