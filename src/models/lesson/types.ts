import { IMedia, IdType as JfwIdType } from 'jfw-js';
import { IBaseObject, ICategory } from '../interfaces';
import { IQuestionGroup } from '../questionGroup';
import { IdType } from '../types';
import { LESSON_STATUS } from './constants';

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

export interface ILesson extends IBaseObject {
  soundBeep: false;
  categories: ICategory[];
  content: string;
  duration: number;
  explanation: string;
  isFree: boolean;
  languageId: number;
  medias: IMedia[];
  lessonOriginalSourceLink?: string;
  lessonOriginalSourceMediaLink?: string;
  practiced: boolean;
  preparationTime: number;
  priorities: IPriority[];
  questionGroups: IQuestionGroup[];
  shared: boolean;
  source?: ISource;
  status: LESSON_STATUS;
  statusValue: string;
  title: string;
  userIdAsAppover?: JfwIdType;
  zorder: number;
  allowSkipAnswer: boolean;
  allowSkipPreparationTime: boolean;
  allowSkipDuration: boolean;
  transcript: string;
  lessonsSeeAlso: ILesson[];
  translations: ILesson[];
  transcriptTranslated?: string;
  description: string | null;
  isSystem: boolean;
  privateNotes: string;
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

export interface ILessonForm {
  id?: IdType;

  soundBeep: boolean;

  // categoryId?: IdType;
  categories: ICategory[];

  content?: string;
  duration: number;
  // explanation: string;
  isFree: boolean;
  // languageId: number;
  medias: IMedia[];
  // lessonOriginalSourceLink?: string;
  // lessonOriginalSourceMediaLink?: string;
  // practiced: boolean;
  preparationTime: number;
  // priorities: IPriority[];
  questionGroups: IQuestionGroup[];
  // shared: boolean;
  // source?: ISource;
  status: LESSON_STATUS;
  // statusValue: string;
  title?: string;
  // userIdAsAppover?: IdType;
  zOrder?: number | null;
  allowSkipAnswer: boolean;
  allowSkipPreparationTime: boolean;
  allowSkipDuration: boolean;
  transcript?: string;
  // lessonsSeeAlso: ILesson[];
  // translations: ILesson[];
  // transcriptTranslated?: string;
  description?: string;
  isSystem: boolean;
  privateNotes?: string;
}

export interface ILessonVocab extends IBaseObject {
  lessonId: IdType;
  vocabId: IdType;
}

/**
 * @deprecated
 * Use IGetLessonsFilterParams instead
 */
export type IGetListLessonsParams = IGetLessonsFilterParams;

export interface IGetLessonsFilterParams {
  categoryIds?: string;
  title?: string;
  content?: string;
  keyword?: string;
  languageCode?: string;
  zOrder?: number;
  status?: string;
  isFree?: boolean;
  isPracticed?: boolean;
  shared?: boolean;
  timeType?: string;
  sortDataField?: string;
  sortOrder?: string;
  pageSize?: number;
  pageNumber?: number;
}

export interface IGetLessonDetailPath {
  questionId: IdType;
}
export interface IGetLessonDetailByZOrderParams {
  categoryCode: string;
  zOrder: number;
}
export interface ISetPriorityRequest {
  priority: string;
  lessonId: number;
}
export interface ICreatePriorityPath {
  lessonId: number;
  categoryId: number;
  userId: JfwIdType;
}
export interface IDeletePriorityPath {
  id: IdType;
}
export interface IDownloadLessonParams {
  categoryCode: string;
}
export interface IAddSeeAlsoPath {
  questionId?: number;
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

export interface IGetLessonVocabParams {
  id: IdType;
}

export interface ICreateLessonVocabParams extends IGetLessonVocabParams {
  vocabIds: IdType[];
}
export interface IDeleteLessonVocabParams extends ICreateLessonVocabParams {}
