// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Course chapters
 */
export class CourseChapters extends APIResource {
  /**
   * Create a new chapter within a course to organize lessons into sections.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const courseChapter = await client.courseChapters.create({
   *   course_id: 'cors_xxxxxxxxxxxxx',
   * });
   * ```
   */
  create(body: CourseChapterCreateParams, options?: RequestOptions): APIPromise<CourseChapter> {
    return this._client.post('/course_chapters', { body, ...options });
  }

  /**
   * Retrieves the details of an existing course chapter.
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * const courseChapter = await client.courseChapters.retrieve(
   *   'chap_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CourseChapter> {
    return this._client.get(path`/course_chapters/${id}`, options);
  }

  /**
   * Update a chapter's title within a course.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const courseChapter = await client.courseChapters.update(
   *   'chap_xxxxxxxxxxxxx',
   *   { title: 'title' },
   * );
   * ```
   */
  update(id: string, body: CourseChapterUpdateParams, options?: RequestOptions): APIPromise<CourseChapter> {
    return this._client.patch(path`/course_chapters/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of chapters within a course, ordered by position.
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const courseChapterListResponse of client.courseChapters.list(
   *   { course_id: 'cors_xxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CourseChapterListParams,
    options?: RequestOptions,
  ): PagePromise<CourseChapterListResponsesCursorPage, CourseChapterListResponse> {
    return this._client.getAPIList('/course_chapters', CursorPage<CourseChapterListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently delete a chapter and all of its lessons from a course.
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const courseChapter = await client.courseChapters.delete(
   *   'chap_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CourseChapterDeleteResponse> {
    return this._client.delete(path`/course_chapters/${id}`, options);
  }
}

export type CourseChapterListResponsesCursorPage = CursorPage<CourseChapterListResponse>;

/**
 * A grouping of related lessons within a course, used to organize content into
 * sections.
 */
export interface CourseChapter {
  /**
   * The unique identifier for the chapter.
   */
  id: string;

  /**
   * An ordered list of lessons in this chapter, sorted by display position. Hidden
   * lessons are excluded for non-admin users.
   */
  lessons: Array<CourseChapter.Lesson>;

  /**
   * The sort position of this chapter within its parent course, starting from zero.
   */
  order: number;

  /**
   * The display name of the chapter shown to students. Maximum 150 characters.
   */
  title: string;
}

export namespace CourseChapter {
  /**
   * An individual learning unit within a chapter, which can contain text, video,
   * PDF, or assessment content.
   */
  export interface Lesson {
    /**
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The sort position of this lesson within its parent chapter, starting from zero.
     */
    order: number;

    /**
     * The display name of the lesson shown to students. Maximum 120 characters.
     */
    title: string;
  }
}

/**
 * A grouping of related lessons within a course, used to organize content into
 * sections.
 */
export interface CourseChapterListResponse {
  /**
   * The unique identifier for the chapter.
   */
  id: string;

  /**
   * The sort position of this chapter within its parent course, starting from zero.
   */
  order: number;

  /**
   * The display name of the chapter shown to students. Maximum 150 characters.
   */
  title: string;
}

/**
 * Represents `true` or `false` values.
 */
export type CourseChapterDeleteResponse = boolean;

export interface CourseChapterCreateParams {
  /**
   * The unique identifier of the course to create the chapter in (e.g.,
   * "course_XXXXX").
   */
  course_id: string;

  /**
   * The display title of the chapter (e.g., "Module 1: Introduction").
   */
  title?: string | null;
}

export interface CourseChapterUpdateParams {
  /**
   * The new display title of the chapter (e.g., "Module 1: Introduction").
   */
  title: string;
}

export interface CourseChapterListParams extends CursorPageParams {
  /**
   * The unique identifier of the course to list chapters for.
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
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace CourseChapters {
  export {
    type CourseChapter as CourseChapter,
    type CourseChapterListResponse as CourseChapterListResponse,
    type CourseChapterDeleteResponse as CourseChapterDeleteResponse,
    type CourseChapterListResponsesCursorPage as CourseChapterListResponsesCursorPage,
    type CourseChapterCreateParams as CourseChapterCreateParams,
    type CourseChapterUpdateParams as CourseChapterUpdateParams,
    type CourseChapterListParams as CourseChapterListParams,
  };
}
