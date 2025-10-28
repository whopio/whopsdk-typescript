// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CourseLessonsAPI from './course-lessons';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Courses extends APIResource {
  /**
   * Creates a new course module in an experience
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const course = await client.courses.create({
   *   experience_id: 'exp_xxxxxxxxxxxxxx',
   *   title: 'title',
   * });
   * ```
   */
  create(body: CourseCreateParams, options?: RequestOptions): APIPromise<Course> {
    return this._client.post('/courses', { body, ...options });
  }

  /**
   * Retrieves a course by ID
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * const course = await client.courses.retrieve(
   *   'cors_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Course> {
    return this._client.get(path`/courses/${id}`, options);
  }

  /**
   * Updates a course
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const course = await client.courses.update(
   *   'cors_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: CourseUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Course> {
    return this._client.patch(path`/courses/${id}`, { body, ...options });
  }

  /**
   * Lists courses for an experience or company
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const courseListResponse of client.courses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CourseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CourseListResponsesCursorPage, CourseListResponse> {
    return this._client.getAPIList('/courses', CursorPage<CourseListResponse>, { query, ...options });
  }

  /**
   * Deletes a course
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const course = await client.courses.delete(
   *   'cors_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CourseDeleteResponse> {
    return this._client.delete(path`/courses/${id}`, options);
  }
}

export type CourseListResponsesCursorPage = CursorPage<CourseListResponse>;

/**
 * A course from the courses app
 */
export interface Course {
  /**
   * The ID of the course. Looks like cors_XXX
   */
  id: string;

  /**
   * Whether the course will award its students a PDF certificate after completing
   * all lessons
   */
  certificate_after_completion_enabled: boolean | null;

  /**
   * The chapters in this course
   */
  chapters: Array<Course.Chapter>;

  /**
   * The timestamp of when the course was created
   */
  created_at: string;

  /**
   * A short description of the course
   */
  description: string | null;

  /**
   * The language spoken in the video content of the course, used to generate closed
   * captions in the right language
   */
  language: Languages;

  /**
   * Whether the course requires students to complete the previous lesson before
   * moving on to the next one
   */
  require_completing_lessons_in_order: boolean;

  /**
   * A short tagline for the course. It is displayed under the course title in the UI
   */
  tagline: string | null;

  /**
   * The thumbnail for the course
   */
  thumbnail: Course.Thumbnail | null;

  /**
   * The title of the course
   */
  title: string | null;

  /**
   * The timestamp of when the course was last updated
   */
  updated_at: string;
}

export namespace Course {
  /**
   * A chapter from the courses app
   */
  export interface Chapter {
    /**
     * The ID of the chapter. Looks like chap_XXX
     */
    id: string;

    /**
     * The lessons in this chapter
     */
    lessons: Array<Chapter.Lesson>;

    /**
     * The order of the chapter within its course
     */
    order: number;

    /**
     * The title of the chapter
     */
    title: string;
  }

  export namespace Chapter {
    /**
     * A lesson from the courses app
     */
    export interface Lesson {
      /**
       * The ID of the lesson
       */
      id: string;

      /**
       * The type of the lesson (text, video, pdf, multi, quiz, knowledge_check)
       */
      lesson_type: CourseLessonsAPI.LessonTypes;

      /**
       * The order of the lesson within its chapter
       */
      order: number;

      /**
       * The title of the lesson
       */
      title: string;
    }
  }

  /**
   * The thumbnail for the course
   */
  export interface Thumbnail {
    /**
     * The ID of the attachment
     */
    id: string;

    /**
     * The attachment's content type (e.g., image/jpg, video/mp4)
     */
    content_type: string | null;

    /**
     * The name of the file
     */
    filename: string | null;

    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    optimized_url: string | null;

    /**
     * The original URL of the attachment, such as a direct link to S3. This should
     * never be displayed on the client and always passed to an Imgproxy transformer.
     */
    source_url: string | null;
  }
}

/**
 * The available languages for a course
 */
export type Languages =
  | 'en'
  | 'es'
  | 'it'
  | 'pt'
  | 'de'
  | 'fr'
  | 'pl'
  | 'ru'
  | 'nl'
  | 'ca'
  | 'tr'
  | 'sv'
  | 'uk'
  | 'no'
  | 'fi'
  | 'sk'
  | 'el'
  | 'cs'
  | 'hr'
  | 'da'
  | 'ro'
  | 'bg';

/**
 * A course from the courses app
 */
export interface CourseListResponse {
  /**
   * The ID of the course. Looks like cors_XXX
   */
  id: string;

  /**
   * Whether the course will award its students a PDF certificate after completing
   * all lessons
   */
  certificate_after_completion_enabled: boolean | null;

  /**
   * The timestamp of when the course was created
   */
  created_at: string;

  /**
   * A short description of the course
   */
  description: string | null;

  /**
   * The language spoken in the video content of the course, used to generate closed
   * captions in the right language
   */
  language: Languages;

  /**
   * Whether the course requires students to complete the previous lesson before
   * moving on to the next one
   */
  require_completing_lessons_in_order: boolean;

  /**
   * A short tagline for the course. It is displayed under the course title in the UI
   */
  tagline: string | null;

  /**
   * The thumbnail for the course
   */
  thumbnail: CourseListResponse.Thumbnail | null;

  /**
   * The title of the course
   */
  title: string | null;

  /**
   * The timestamp of when the course was last updated
   */
  updated_at: string;
}

export namespace CourseListResponse {
  /**
   * The thumbnail for the course
   */
  export interface Thumbnail {
    /**
     * The ID of the attachment
     */
    id: string;

    /**
     * The attachment's content type (e.g., image/jpg, video/mp4)
     */
    content_type: string | null;

    /**
     * The name of the file
     */
    filename: string | null;

    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    optimized_url: string | null;

    /**
     * The original URL of the attachment, such as a direct link to S3. This should
     * never be displayed on the client and always passed to an Imgproxy transformer.
     */
    source_url: string | null;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type CourseDeleteResponse = boolean;

export interface CourseCreateParams {
  /**
   * The ID of the experience to create the course in
   */
  experience_id: string;

  /**
   * The title of the course
   */
  title: string;

  /**
   * The cover image URL of the course
   */
  cover_image?: string | null;

  /**
   * The tagline of the course
   */
  tagline?: string | null;

  /**
   * The thumbnail for the course in png, jpeg, or gif format
   */
  thumbnail?: CourseCreateParams.Thumbnail | null;
}

export namespace CourseCreateParams {
  /**
   * The thumbnail for the course in png, jpeg, or gif format
   */
  export interface Thumbnail {
    /**
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
  }
}

export interface CourseUpdateParams {
  /**
   * Whether the course will award its students a PDF certificate after completing
   * all lessons
   */
  certificate_after_completion_enabled?: boolean | null;

  /**
   * The chapters and lessons to update
   */
  chapters?: Array<CourseUpdateParams.Chapter> | null;

  /**
   * The cover image URL of the course
   */
  cover_image?: string | null;

  /**
   * A short description of the course
   */
  description?: string | null;

  /**
   * The available languages for a course
   */
  language?: Languages | null;

  /**
   * Whether the course requires students to complete the previous lesson before
   * moving on to the next one
   */
  require_completing_lessons_in_order?: boolean | null;

  /**
   * A short tagline for the course
   */
  tagline?: string | null;

  /**
   * The thumbnail for the course in png, jpeg, or gif format
   */
  thumbnail?: CourseUpdateParams.Thumbnail | null;

  /**
   * The title of the course
   */
  title?: string | null;
}

export namespace CourseUpdateParams {
  /**
   * Input for updating a chapter while updating a course
   */
  export interface Chapter {
    /**
     * The ID of the chapter to update
     */
    id: string;

    /**
     * The order of the chapter within its course
     */
    order: number;

    /**
     * The title of the chapter
     */
    title: string;

    /**
     * The lessons to update within this chapter
     */
    lessons?: Array<Chapter.Lesson> | null;
  }

  export namespace Chapter {
    /**
     * Input for updating a lesson while updating a course
     */
    export interface Lesson {
      /**
       * The ID of the lesson to update
       */
      id: string;

      /**
       * The ID of the chapter this lesson belongs to (for moving between chapters)
       */
      chapter_id: string;

      /**
       * The order of the lesson within its chapter
       */
      order: number;

      /**
       * The title of the lesson
       */
      title: string;
    }
  }

  /**
   * The thumbnail for the course in png, jpeg, or gif format
   */
  export interface Thumbnail {
    /**
     * The ID of an existing attachment object. Use this when updating a resource and
     * keeping a subset of the attachments. Don't use this unless you know what you're
     * doing.
     */
    id?: string | null;

    /**
     * This ID should be used the first time you upload an attachment. It is the ID of
     * the direct upload that was created when uploading the file to S3 via the
     * mediaDirectUpload mutation.
     */
    direct_upload_id?: string | null;
  }
}

export interface CourseListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The ID of the company
   */
  company_id?: string | null;

  /**
   * The ID of the experience
   */
  experience_id?: string | null;

  /**
   * Returns the first _n_ elements from the list.
   */
  first?: number | null;

  /**
   * Returns the last _n_ elements from the list.
   */
  last?: number | null;
}

export declare namespace Courses {
  export {
    type Course as Course,
    type Languages as Languages,
    type CourseListResponse as CourseListResponse,
    type CourseDeleteResponse as CourseDeleteResponse,
    type CourseListResponsesCursorPage as CourseListResponsesCursorPage,
    type CourseCreateParams as CourseCreateParams,
    type CourseUpdateParams as CourseUpdateParams,
    type CourseListParams as CourseListParams,
  };
}
