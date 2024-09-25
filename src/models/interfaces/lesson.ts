import { DateType, IMedia, IdType as JfwIdType } from 'jfw-js';
import { IdType } from '../types';
import { ICategory } from './category';

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
  id: IdType;
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
  id: IdType;
  name: string;
  zOrder: number;
  questionOptions: ILessonOption[];
  questionSolutions: ILessonSolution[];
  questionType?: ILessonType;
  userResponseType: string;
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
  title: string | null;
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
  status: string;
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

export interface ILessonForm {
  id?: IdType;

  soundBeep: boolean;

  categoryId?: IdType;
  // categories?: ICategory[];

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
  status: string;
  // statusValue: string;
  title?: string;
  // userIdAsAppover?: IdType;
  zorder: number;
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

export interface IGetListQuestionsParams {
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
