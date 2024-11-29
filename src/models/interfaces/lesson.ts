import { DateType, IMedia, IdType as JfwIdType } from 'jfw-js';
import { IdType } from '../types';
import { ICategory } from './category';
import { QUESTION_TYPE } from '../constants';

export interface ILessonType {
  code: string;
  createdBy: number;
  createdDate: string;
  description: string | null;
  id: IdType;
  modifiedBy: number;
  modifiedDate: string;
  name: string;
}
export interface ILessonSolution {
  explanation: string | null;
  id: IdType;
  valueMedia: string | null;
  valueText: string;
}
export interface ILessonOption {
  code: string;
  description: string | null;
  id?: IdType | null;
  name: string;
  zOrder?: number;
}
export interface IPriority {
  categoryId: IdType;
  createdBy: JfwIdType;
  createdDate: DateType;
  id: IdType;
  lessonId: IdType;
  modifiedBy: JfwIdType;
  modifiedDate: DateType;
}
export interface IInnerLesson {
  code: string;
  description: string | null;
  explanation: string;
  id?: IdType | null;
  name: string;
  zOrder: number;
  questionOptions: ILessonOption[];
  questionSolutions: ILessonSolution[];
  questionType?: ILessonType;
  userResponseType: QUESTION_TYPE;
  medias?: IMedia[];
}
export interface ILessonGroup {
  content?: string;
  createdBy?: number;
  createdDate?: string;
  description: string | null;
  id: IdType;
  lessonId?: IdType;
  isEmbeddedQuestions: boolean;
  isShuffle: boolean;
  modifiedBy?: number;
  modifiedDate?: string;
  questions: IInnerLesson[];
  title?: string | null;
  mediaSegmentFrom?: '';
  zOrder?: number;
}
export interface ISource {
  id: IdType;
  sourceName?: string;
  sourceWebsite?: string;
  description?: string;
}
export interface ILesson {
  soundBeep: false;
  categories: ICategory[];
  content: string;
  createdBy: number;
  createdDate: string;
  duration: number;
  explanation: string;
  isFree: boolean;
  id: number;
  languageId: number;
  medias: IMedia[];
  lessonOriginalSourceLink?: string;
  lessonOriginalSourceMediaLink?: string;
  modifiedBy: number;
  modifiedDate: string;
  practiced: boolean;
  preparationTime: number;
  priorities: IPriority[];
  questionGroups: ILessonGroup[];
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
  // UserId?: number;
  // LanguageCode?: string;
  // Title?: string;
  // Content?: string;
  // Description?: string;
  // Transcript?: string;
  // PrivateNotes?: string;
  // PreparationTime?: number;
  // AllowSkipPreparationTime?: boolean;
  // Duration?: number;
  // AllowSkipDuration?: boolean;
  // AllowSkipAnswer?: boolean;
  // SoundBeep?: boolean;
  // Shared?: boolean;
  // SourceId?: number;
  // ReviewedBy?: number;
  // ApprovedBy?: number;
  // IsSystem?: boolean;
  // Status?: string;
  // ZOrder?: number;
  // IsFree?: boolean;
  // IsPracticed?: boolean;
  // Keyword?: string;
  // Uncategorized?: boolean;
  // BothPracticed?: boolean;
  // ModifiedBy?: string;
  // CreatedBy?: string;
  // CreatedDateFilter?: string;
  // ParamPageNumber?: string;
  // ParamePageSize?: string;
  // ParamSortDataField?: string;
  // ParamSortDirection?: string;
  // PageNumber?: string;
  // PageSize?: string;
  // SortDataField?: string;
  // SortOrder?: string;
}

export enum LESSON_STATUS {
  DRAFT = 'Draft',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export interface ILessonForm {
  id?: IdType;

  soundBeep: boolean;

  // categoryId?: IdType;
  categories?: ICategory[];

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
  questionGroups: ILessonGroup[];
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

export interface IGetListLessonsParams {
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
