import { IdType as JfwIdType } from '@jframework/jfw-js';
import {
    IBaseObject,
    IdType,
    IPageable,
    ISortable,
    StripCreateFields,
    StripUpdateFields,
} from '../base';
import { ICreateMediaParams, IMedia } from '../media';
import { ICreateQuestionGroupParams, IQuestionGroup } from '../questionGroup';
import { IQuestionType } from '../questionType';
import { LessonStatus, TranslationStatus } from './constants';

export interface IBaseLesson extends IBaseObject {
    sourceId?: IdType | null;
    languageCode?: string | null;
    title?: string | null;
    content?: string | null;
    description?: string | null;
    transcript?: string | null;
    privateNotes?: string | null;
    preparationTime?: number | null;
    allowSkipPreparationTime?: boolean | null;
    duration?: number | null;
    allowSkipDuration?: boolean | null;
    allowSkipAnswer?: boolean | null;
    soundBeep?: boolean | null;
    shared?: boolean | null;
    reviewBy?: JfwIdType | null;
    approveBy?: JfwIdType | null;
    isSystem?: boolean | null;

    status?: LessonStatus | null;
    zorder?: number | null;
    isFree?: boolean;

    questionTypes: IQuestionType[];
}

export interface ILesson extends IBaseLesson {
    orderChapterLesson?: number | null;
    questionGroups: IQuestionGroup[];
    medias: IMedia[];
    priorities: IPriority[];
    practiced: boolean;
    translations: ITranslation[];
    lessonsSeeAlso: ILesson[];
    source?: ISource | null;
}

export interface ITranslation extends IBaseObject {
    lessonId: IdType;
    languageCode: string;
    transcriptTranslated: string;
    description: string;
    zOrder?: string | null;
    status?: TranslationStatus | null;
}

export interface IPriority extends IBaseObject {
    categoryId: IdType;
    lessonId: IdType;
}

export interface ISource extends IBaseObject {
    sourceName: string;
    sourceWebsite: string;
    description: string;
}

export interface ICreateLessonParams
    extends Omit<StripCreateFields<ILesson>, 'questionGroups' | 'medias'> {
    questionGroups: ICreateQuestionGroupParams[];
    medias: ICreateMediaParams[];
}

export interface IUpdateLessonParams extends StripUpdateFields<IBaseLesson> {}

export interface ILessonVocab extends IBaseObject {
    lessonId: IdType;
    vocabId: IdType;
}

/**
 * @deprecated
 * Use IQueryLessonParams instead
 */
export type IGetListLessonsParams = IGetLessonFilterParams;

export interface IGetLessonFilterParams
    extends IPageable,
        ISortable<'zOrder' | 'title'> {
    categoryIds?: string;
    questionTypeId?: IdType;

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
    // #REFACTOR_VDT
    medias: unknown[];
}

export interface ICreateLessonVocabParams {
    id: IdType;
    vocabIds: IdType[];
}
export interface IDeleteLessonVocabParams extends ICreateLessonVocabParams {}

export interface ICreateLessonPriorityParams {
    lessonId: IdType;
    categoryId: IdType;
    userId: JfwIdType;
}

export type IDeleteLessonPriorityParams = ICreateLessonPriorityParams;
