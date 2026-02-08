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

  /**
   * Marks a course lesson as completed
   *
   * @example
   * ```ts
   * const response = await client.courseLessons.markAsCompleted(
   *   'lesson_id',
   * );
   * ```
   */
  markAsCompleted(
    lessonID: string,
    options?: RequestOptions,
  ): APIPromise<CourseLessonMarkAsCompletedResponse> {
    return this._client.post(path`/course_lessons/${lessonID}/mark_as_completed`, options);
  }

  /**
   * Starts a course lesson
   *
   * @example
   * ```ts
   * const response = await client.courseLessons.start(
   *   'lesson_id',
   * );
   * ```
   */
  start(lessonID: string, options?: RequestOptions): APIPromise<CourseLessonStartResponse> {
    return this._client.post(path`/course_lessons/${lessonID}/start`, options);
  }

  /**
   * Submits answers for a course assessment
   *
   * @example
   * ```ts
   * const response =
   *   await client.courseLessons.submitAssessment('lesson_id', {
   *     answers: [{ question_id: 'question_id' }],
   *   });
   * ```
   */
  submitAssessment(
    lessonID: string,
    body: CourseLessonSubmitAssessmentParams,
    options?: RequestOptions,
  ): APIPromise<CourseLessonSubmitAssessmentResponse> {
    return this._client.post(path`/course_lessons/${lessonID}/submit_assessment`, { body, ...options });
  }
}

export type CourseLessonListResponsesCursorPage = CursorPage<CourseLessonListResponse>;

/**
 * The available types for an assessment question
 */
export type AssessmentQuestionTypes = 'short_answer' | 'true_false' | 'multiple_choice' | 'multiple_select';

/**
 * The type of embed for a lesson
 */
export type EmbedType = 'youtube' | 'loom';

/**
 * A lesson from the courses app
 */
export interface Lesson {
  /**
   * The unique identifier for the lesson.
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
   * The datetime the lesson was created.
   */
  created_at: string;

  /**
   * Number of days from course start until the lesson is unlocked
   */
  days_from_course_start_until_unlock: number | null;

  /**
   * ID for the embed (YouTube video ID or Loom share ID)
   */
  embed_id: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type: EmbedType | null;

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
   * The thumbnail for the lesson
   */
  thumbnail: Lesson.Thumbnail | null;

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
     * The unique identifier for the assessment question.
     */
    id: string;

    /**
     * The correct answer for the question. Used for short answer questions. Only
     * visible to admins (users with courses:update permission)
     */
    correct_answer: string | null;

    /**
     * The datetime the assessment question was created.
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
       * The unique identifier for the assessment question option.
       */
      id: string;

      /**
       * Whether this option is a correct answer. Only visible to admins (users with
       * courses:update permission)
       */
      is_correct: boolean | null;

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
   * The thumbnail for the lesson
   */
  export interface Thumbnail {
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
     * The unique identifier for the mux asset.
     */
    id: string;

    /**
     * The Mux-provided ID of the asset
     */
    asset_id: string | null;

    /**
     * Whether this asset contains only audio
     */
    audio_only: boolean;

    /**
     * The datetime the mux asset was created.
     */
    created_at: string;

    /**
     * The duration of the video in seconds
     */
    duration_seconds: number | null;

    /**
     * The time at which the video finished uploading
     */
    finished_uploading_at: string | null;

    /**
     * The public playback ID of the Mux asset
     */
    playback_id: string | null;

    /**
     * The signed playback ID of the Mux asset
     */
    signed_playback_id: string | null;

    /**
     * The signed storyboard playback token of the Mux asset
     */
    signed_storyboard_playback_token: string | null;

    /**
     * The signed thumbnail playback token of the Mux asset
     */
    signed_thumbnail_playback_token: string | null;

    /**
     * The signed video playback token of the Mux asset
     */
    signed_video_playback_token: string | null;

    /**
     * The status of the Mux asset
     */
    status: 'uploading' | 'created' | 'ready';

    /**
     * The datetime the mux asset was last updated.
     */
    updated_at: string;
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
   * The unique identifier for the lesson.
   */
  id: string;

  /**
   * The content of the lesson
   */
  content: string | null;

  /**
   * The datetime the lesson was created.
   */
  created_at: string;

  /**
   * Number of days from course start until the lesson is unlocked
   */
  days_from_course_start_until_unlock: number | null;

  /**
   * ID for the embed (YouTube video ID or Loom share ID)
   */
  embed_id: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type: EmbedType | null;

  /**
   * The type of the lesson (text, video, pdf, multi, quiz, knowledge_check)
   */
  lesson_type: LessonTypes;

  /**
   * The order of the lesson within its chapter
   */
  order: number;

  /**
   * The thumbnail for the lesson
   */
  thumbnail: CourseLessonListResponse.Thumbnail | null;

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

export namespace CourseLessonListResponse {
  /**
   * The thumbnail for the lesson
   */
  export interface Thumbnail {
    /**
     * This is the URL you use to render optimized attachments on the client. This
     * should be used for apps.
     */
    url: string | null;
  }
}

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonDeleteResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonMarkAsCompletedResponse = boolean;

/**
 * Represents `true` or `false` values.
 */
export type CourseLessonStartResponse = boolean;

/**
 * The result of a user's assessment attempt
 */
export interface CourseLessonSubmitAssessmentResponse {
  /**
   * The unique identifier for the assessment result.
   */
  id: string;

  /**
   * The datetime the assessment result was created.
   */
  created_at: string;

  /**
   * The lesson this assessment result is for
   */
  lesson: CourseLessonSubmitAssessmentResponse.Lesson;

  /**
   * The number of correct answers
   */
  result_correct: number;

  /**
   * The grade achieved on the assessment
   */
  result_grade: number;

  /**
   * Array of graded questions with details
   */
  result_graded_questions: { [key: string]: unknown };

  /**
   * Whether the user achieved a passing grade
   */
  result_passing_grade: boolean;

  /**
   * The total number of questions in the assessment
   */
  result_question_count: number;

  /**
   * The percentage score achieved on the assessment
   */
  score_percent: number;

  /**
   * The datetime the assessment result was last updated.
   */
  updated_at: string;

  /**
   * The user who took the assessment
   */
  user: CourseLessonSubmitAssessmentResponse.User;
}

export namespace CourseLessonSubmitAssessmentResponse {
  /**
   * The lesson this assessment result is for
   */
  export interface Lesson {
    /**
     * The unique identifier for the lesson.
     */
    id: string;

    /**
     * The title of the lesson
     */
    title: string;
  }

  /**
   * The user who took the assessment
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
   * ID for the embed (YouTube video ID or Loom share ID)
   */
  embed_id?: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type?: EmbedType | null;

  /**
   * The thumbnail for the lesson in png, jpeg, or gif format
   */
  thumbnail?: CourseLessonCreateParams.Thumbnail | null;

  /**
   * The title of the lesson
   */
  title?: string | null;
}

export namespace CourseLessonCreateParams {
  /**
   * The thumbnail for the lesson in png, jpeg, or gif format
   */
  export interface Thumbnail {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }
}

export interface CourseLessonUpdateParams {
  /**
   * Completion requirements for quiz/knowledge check lessons
   */
  assessment_completion_requirement?: CourseLessonUpdateParams.AssessmentCompletionRequirement | null;

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
   * ID for the embed (YouTube video ID or Loom share ID)
   */
  embed_id?: string | null;

  /**
   * The type of embed for a lesson
   */
  embed_type?: EmbedType | null;

  /**
   * The available types for a lesson
   */
  lesson_type?: LessonTypes | null;

  /**
   * The main PDF file for this lesson
   */
  main_pdf?: CourseLessonUpdateParams.MainPdf | null;

  /**
   * Maximum number of attempts allowed for assessments
   */
  max_attempts?: number | null;

  /**
   * The ID of the Mux asset to attach to this lesson for video lessons
   */
  mux_asset_id?: string | null;

  /**
   * The thumbnail for the lesson in png, jpeg, or gif format
   */
  thumbnail?: CourseLessonUpdateParams.Thumbnail | null;

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
   * Completion requirements for quiz/knowledge check lessons
   */
  export interface AssessmentCompletionRequirement {
    /**
     * The minimum grade percentage required to pass (0-100). Cannot be set together
     * with minimum_questions_correct.
     */
    minimum_grade_percent?: number | null;

    /**
     * The minimum number of questions that must be answered correctly. Cannot be set
     * together with minimum_grade_percent.
     */
    minimum_questions_correct?: number | null;
  }

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
       * The ID of an existing file object.
       */
      id: string;
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
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The main PDF file for this lesson
   */
  export interface MainPdf {
    /**
     * The ID of an existing file object.
     */
    id: string;
  }

  /**
   * The thumbnail for the lesson in png, jpeg, or gif format
   */
  export interface Thumbnail {
    /**
     * The ID of an existing file object.
     */
    id: string;
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

export interface CourseLessonSubmitAssessmentParams {
  /**
   * The answers to the assessment questions
   */
  answers: Array<CourseLessonSubmitAssessmentParams.Answer>;
}

export namespace CourseLessonSubmitAssessmentParams {
  /**
   * Input for a single question's answer in an assessment submission
   */
  export interface Answer {
    /**
     * The ID of the question being answered
     */
    question_id: string;

    /**
     * The text answer provided by the user (for short answer questions)
     */
    answer_text?: string | null;

    /**
     * The IDs of the selected options (for multiple choice/select questions)
     */
    selected_option_ids?: Array<string> | null;
  }
}

export declare namespace CourseLessons {
  export {
    type AssessmentQuestionTypes as AssessmentQuestionTypes,
    type EmbedType as EmbedType,
    type Lesson as Lesson,
    type LessonTypes as LessonTypes,
    type LessonVisibilities as LessonVisibilities,
    type CourseLessonListResponse as CourseLessonListResponse,
    type CourseLessonDeleteResponse as CourseLessonDeleteResponse,
    type CourseLessonMarkAsCompletedResponse as CourseLessonMarkAsCompletedResponse,
    type CourseLessonStartResponse as CourseLessonStartResponse,
    type CourseLessonSubmitAssessmentResponse as CourseLessonSubmitAssessmentResponse,
    type CourseLessonListResponsesCursorPage as CourseLessonListResponsesCursorPage,
    type CourseLessonCreateParams as CourseLessonCreateParams,
    type CourseLessonUpdateParams as CourseLessonUpdateParams,
    type CourseLessonListParams as CourseLessonListParams,
    type CourseLessonSubmitAssessmentParams as CourseLessonSubmitAssessmentParams,
  };
}
