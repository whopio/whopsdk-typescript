// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CourseLessonsAPI from './course-lessons';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CourseLessons extends APIResource {
  /**
   * Creates a new course lesson
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const lesson = await client.courseLessons.create({
   *   chapter_id: 'chap_xxxxxxxxxxxxx',
   *   lesson_type: 'text',
   * });
   * ```
   */
  create(body: CourseLessonCreateParams, options?: RequestOptions): APIPromise<Lesson> {
    return this._client.post('/course_lessons', { body, ...options });
  }

  /**
   * Retrieves a course lesson by ID
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * const lesson = await client.courseLessons.retrieve(
   *   'lesn_xxxxxxxxxxxxx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Lesson> {
    return this._client.get(path`/course_lessons/${id}`, options);
  }

  /**
   * Updates a course lesson
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const lesson = await client.courseLessons.update(
   *   'lesn_xxxxxxxxxxxxx',
   * );
   * ```
   */
  update(
    id: string,
    body: CourseLessonUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Lesson> {
    return this._client.patch(path`/course_lessons/${id}`, { body, ...options });
  }

  /**
   * Lists lessons for a course or chapter
   *
   * Required permissions:
   *
   * - `courses:read`
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const courseLessonListResponse of client.courseLessons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CourseLessonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CourseLessonListResponsesCursorPage, CourseLessonListResponse> {
    return this._client.getAPIList('/course_lessons', CursorPage<CourseLessonListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a course lesson
   *
   * Required permissions:
   *
   * - `courses:update`
   *
   * @example
   * ```ts
   * const courseLesson = await client.courseLessons.delete(
   *   'lesn_xxxxxxxxxxxxx',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CourseLessonDeleteResponse> {
    return this._client.delete(path`/course_lessons/${id}`, options);
  }
}

export type CourseLessonListResponsesCursorPage = CursorPage<CourseLessonListResponse>;

/**
 * The available types for an assessment question
 */
export type AssessmentQuestionTypes = 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select';

/**
 * A lesson from the courses app
 */
export interface Lesson {
  /**
   * The ID of the lesson
   */
  id: string;

  /**
   * Assessment questions for quiz/knowledge check lessons
   */
  assessment_questions: Array<Lesson.AssessmentQuestion>;

  /**
   * The attached files in this lesson as a flat array
   */
  attachments: Array<Lesson.Attachment>;

  /**
   * The content of the lesson
   */
  content: string | null;

  /**
   * Number of days from course start until the lesson is unlocked
   */
  days_from_course_start_until_unlock: number | null;

  /**
   * The type of the lesson (text, video, pdf, multi, quiz, knowledge_check)
   */
  lesson_type: LessonTypes;

  /**
   * The main PDF file for this lesson
   */
  main_pdf: Lesson.MainPdf | null;

  /**
   * The order of the lesson within its chapter
   */
  order: number;

  /**
   * The title of the lesson
   */
  title: string;

  /**
   * The associated Mux asset for video lessons
   */
  video_asset: Lesson.VideoAsset | null;

  /**
   * The visibility of the lesson. Determines how / whether this lesson is visible to
   * users.
   */
  visibility: LessonVisibilities;
}

export namespace Lesson {
  /**
   * An assessment question in a course quiz or knowledge check
   */
  export interface AssessmentQuestion {
    /**
     * The ID of the assessment question
     */
    id: string;

    /**
     * The correct answer for the question. Used for short answer questions
     */
    correct_answer: string;

    /**
     * When the question was created
     */
    created_at: string;

    /**
     * Optional image attachment for the question
     */
    image: AssessmentQuestion.Image | null;

    /**
     * The answer options for multiple choice/select questions
     */
    options: Array<AssessmentQuestion.Option>;

    /**
     * The order of the question within its lesson
     */
    order: number;

    /**
     * The text of the question
     */
    question_text: string;

    /**
     * The type of the question
     */
    question_type: CourseLessonsAPI.AssessmentQuestionTypes;
  }

  export namespace AssessmentQuestion {
    /**
     * Optional image attachment for the question
     */
    export interface Image {
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
      url: string | null;
    }

    /**
     * An answer option for a multiple choice or multiple select assessment question
     */
    export interface Option {
      /**
       * The ID of the assessment question option
       */
      id: string;

      /**
       * Whether this option is a correct answer
       */
      is_correct: boolean;

      /**
       * The text of the answer option
       */
      option_text: string;

      /**
       * The order of this option within the question
       */
      order: number;
    }
  }

  /**
   * Represents an image attachment
   */
  export interface Attachment {
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
    url: string | null;
  }

  /**
   * The main PDF file for this lesson
   */
  export interface MainPdf {
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
    url: string | null;
  }

  /**
   * The associated Mux asset for video lessons
   */
  export interface VideoAsset {
    /**
     * The ID of the Mux asset
     */
    id: string;

    /**
     * The Mux-provided ID of the asset
     */
    asset_id: string | null;

    /**
     * The public playback ID of the Mux asset
     */
    playback_id: string | null;
  }
}

/**
 * The available types for a lesson
 */
export type LessonTypes = 'text' | 'video' | 'pdf' | 'multi' | 'quiz' | 'knowledge_check';

/**
 * The available visibilities for a lesson. Determines how / whether a lesson is
 * visible to users.
 */
export type LessonVisibilities = 'visible' | 'hidden';

/**
 * A lesson from the courses app
 */
export interface CourseLessonListResponse {
  /**
   * The ID of the lesson
   */
  id: string;

  /**
   * The content of the lesson
   */
  content: string | null;

  /**
   * Number of days from course start until the lesson is unlocked
   */
  days_from_course_start_until_unlock: number | null;

  /**
   * The type of the lesson (text, video, pdf, multi, quiz, knowledge_check)
   */
  lesson_type: LessonTypes;

  /**
   * The order of the lesson within its chapter
   */
  order: number;

  /**
   * The title of the lesson
   */
  title: string;

  /**
   * The visibility of the lesson. Determines how / whether this lesson is visible to
   * users.
   */
  visibility: LessonVisibilities;
}

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonDeleteResponse = boolean;

export interface CourseLessonCreateParams {
  /**
   * The ID of the chapter to create the lesson in
   */
  chapter_id: string;

  /**
   * The type of the lesson
   */
  lesson_type: LessonTypes;

  /**
   * The content of the lesson
   */
  content?: string | null;

  /**
   * Days from course start until unlock
   */
  days_from_course_start_until_unlock?: number | null;

  /**
   * The title of the lesson
   */
  title?: string | null;
}

export interface CourseLessonUpdateParams {
  /**
   * Assessment questions for quiz/knowledge check lessons. Replaces all existing
   * questions.
   */
  assessment_questions?: Array<CourseLessonUpdateParams.AssessmentQuestion> | null;

  /**
   * General attachments for the lesson (PDFs, files, etc). Replaces all existing
   * attachments.
   */
  attachments?: Array<CourseLessonUpdateParams.Attachment> | null;

  /**
   * The content of the lesson
   */
  content?: string | null;

  /**
   * Days from course start until unlock
   */
  days_from_course_start_until_unlock?: number | null;

  /**
   * The available types for a lesson
   */
  lesson_type?: LessonTypes | null;

  /**
   * The main PDF file for this lesson
   */
  main_pdf?: CourseLessonUpdateParams.MainPdf | null;

  /**
   * The ID of the Mux asset to attach to this lesson for video lessons
   */
  mux_asset_id?: string | null;

  /**
   * The title of the lesson
   */
  title?: string | null;

  /**
   * The available visibilities for a lesson. Determines how / whether a lesson is
   * visible to users.
   */
  visibility?: LessonVisibilities | null;
}

export namespace CourseLessonUpdateParams {
  /**
   * Input for creating or updating an assessment question
   */
  export interface AssessmentQuestion {
    /**
     * The correct answer for the question. Used for short answer questions
     */
    correct_answer: string;

    /**
     * The text of the question
     */
    question_text: string;

    /**
     * The type of the question
     */
    question_type: CourseLessonsAPI.AssessmentQuestionTypes;

    /**
     * The ID of an existing question. If provided, the question will be updated. If
     * not provided, a new question will be created.
     */
    id?: string | null;

    /**
     * Optional image attachment for the question
     */
    image?: AssessmentQuestion.Image | null;

    /**
     * The answer options for multiple choice/select questions
     */
    options?: Array<AssessmentQuestion.Option> | null;
  }

  export namespace AssessmentQuestion {
    /**
     * Optional image attachment for the question
     */
    export interface Image {
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

    /**
     * Input for creating or updating an assessment question option
     */
    export interface Option {
      /**
       * Whether this option is a correct answer
       */
      is_correct: boolean;

      /**
       * The text of the answer option
       */
      option_text: string;

      /**
       * The ID of an existing option. If provided, the option will be updated. If not
       * provided, a new option will be created.
       */
      id?: string | null;
    }
  }

  /**
   * Input for an attachment
   */
  export interface Attachment {
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

  /**
   * The main PDF file for this lesson
   */
  export interface MainPdf {
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

export interface CourseLessonListParams extends CursorPageParams {
  /**
   * Returns the elements in the list that come before the specified cursor.
   */
  before?: string | null;

  /**
   * The ID of the chapter (returns lessons only for this chapter)
   */
  chapter_id?: string | null;

  /**
   * The ID of the course (returns all lessons across all chapters)
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
}

export declare namespace CourseLessons {
  export {
    type AssessmentQuestionTypes as AssessmentQuestionTypes,
    type Lesson as Lesson,
    type LessonTypes as LessonTypes,
    type LessonVisibilities as LessonVisibilities,
    type CourseLessonListResponse as CourseLessonListResponse,
    type CourseLessonDeleteResponse as CourseLessonDeleteResponse,
    type CourseLessonListResponsesCursorPage as CourseLessonListResponsesCursorPage,
    type CourseLessonCreateParams as CourseLessonCreateParams,
    type CourseLessonUpdateParams as CourseLessonUpdateParams,
    type CourseLessonListParams as CourseLessonListParams,
  };
}
