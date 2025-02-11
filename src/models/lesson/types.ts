import { IMedia, IdType as JfwIdType } from 'jfw-js';
import { IBaseObject, IPageable, ISortable } from '../interfaces(Will_Delete)';
import { IQuestionGroup } from '../questionGroup';
import { IdType } from '../types(Will_Delete)';
import { LESSON_STATUS } from './constants';
import { IQuestionType } from '../questionType';
import { ICategory } from '../category';

export interface ILesson extends IBaseObject {
  soundBeep: false;

  userIdAsAppover?: JfwIdType;
  languageId: number;

  /**
   * @deprecated Use questionTypes instead
   */
  categories: ICategory[];
  questionTypes: IQuestionType[];
  medias: IMedia[];
  priorities: IPriority[];
  questionGroups: IQuestionGroup[];
  lessonsSeeAlso: ILesson[];
  translations: ILesson[];
  source?: ISource;

  title: string;
  content: string;
  duration: number;
  explanation: string;
  isFree: boolean;
  transcript: string;
  transcriptTranslated?: string;
  description: string | null;
  preparationTime: number;

  lessonOriginalSourceLink?: string;
  lessonOriginalSourceMediaLink?: string;
  practiced: boolean;
  shared: boolean;
  allowSkipAnswer: boolean;
  allowSkipPreparationTime: boolean;
  allowSkipDuration: boolean;
  isSystem: boolean;
  privateNotes: string;

  zorder: number;
  status: LESSON_STATUS;
  statusValue: string;
}

export interface IPriority extends IBaseObject {
  categoryId: IdType;
  lessonId: IdType;
}

export interface ISource {
  id: IdType;
  sourceName?: string;
  sourceWebsite?: string;
  description?: string;
}

export interface ILessonFilter
  extends Partial<
    Omit<
      ILesson,
      | 'id'
      | 'createdDate'
      | 'modifiedDate'
      | 'categories'
      | 'medias'
      | 'translations'
      | 'lessonsSeeAlso'
      | 'lessonOriginalSourceLink'
      | 'lessonOriginalSourceMediaLink'
      | 'userIdAsAppover'
    >
  > {
  ids?: string;
  categoryIds?: string;
  groupCategoryCode?: string;
}

export interface ILessonForm extends Partial<IBaseObject> {
  questionTypes: IQuestionType[];
  questionGroups: IQuestionGroup[];
  medias: IMedia[];

  title?: string;
  content?: string;
  duration: number;
  description?: string;
  explanation?: string;
  isFree: boolean;
  preparationTime: number;
  transcript?: string;
  allowSkipAnswer: boolean;
  allowSkipPreparationTime: boolean;
  allowSkipDuration: boolean;
  soundBeep: boolean;

  isSystem: boolean;
  privateNotes?: string;
  status: LESSON_STATUS;
  zOrder?: number | null;
}

export interface ILessonVocab extends IBaseObject {
  lessonId: IdType;
  vocabId: IdType;
}

/**
 * @deprecated
 * Use IQueryLessonParams instead
 */
export type IGetListLessonsParams = IGetLessonFilterParams;

export interface IGetLessonFilterParams extends IPageable, ISortable {
  /**
   * @deprecated
   * Use IGetLessonsFilterParams instead
   */
  categoryIds?: string;
  questionTypeIds?: string;

  languageCode?: string;

  title?: string;
  content?: string;
  keyword?: string;
  status?: string;
  isFree?: boolean;
  isPracticed?: boolean;
  shared?: boolean;
  timeType?: string;
  zOrder?: number;
}

export interface IQueryLessonParams {
  /**
   * @deprecated Use questionTypeCode instead
   */
  categoryCode?: string;

  questionTypeCode: string;
  zOrder: number;
}

export interface ICreatePriorityPath {
  lessonId: number;
  categoryId: number;
  userId: JfwIdType;
}
export interface IGetLessonExportParams {
  categoryCode: string;
}
export interface IAddSeeAlsoPayload {
  content: string;
  countryId: JfwIdType;
  categories: [
    {
      id: IdType;
    },
  ];
  languageCode?: string;
  description?: string;
  medias?: IMedia[];
}

export interface ICreateLessonVocabParams {
  id: IdType;
  vocabIds: IdType[];
}
export interface IDeleteLessonVocabParams extends ICreateLessonVocabParams {}
