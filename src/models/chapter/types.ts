import { IPageable, ISortable } from '@jframework/jfw-js';
import { IBaseObject, IdType } from '../base';
import { ILesson } from '../lesson';
import { ChapterStatus } from './constants';

export interface IChapter extends IBaseObject {
    /**
     * @deprecated Use questionTypeId instead
     */
    categoryId: IdType;
    questionTypeId: IdType;

    name: string;
    description: string;
    duration: number;

    status: ChapterStatus;
    statusValue: string;
    lessons: ILesson[] | null;
}

export interface IGetChaptersParams extends IPageable, ISortable {
    name?: string;
    status?: ChapterStatus;

    /**
     * @deprecated Use questionTypeId instead
     */
    categoryId?: number;
    questionTypeId?: IdType;
}

/**
 * @deprecated use IGetChapterParams instead
 */
export type IQueryChapterParams = IGetChaptersParams;

export interface IChapterForm {
    id?: IdType;
    /**
     * @deprecated Use questionTypeId instead
     */
    categoryId?: IdType;
    questionTypeId: IdType;

    name: string;
    // description: string;
    // duration: number;
    // orderBookChapter: number;
    status: ChapterStatus;
    lessons: ILesson[];
}

export interface ILessonFormOfChapter {
    lessonId?: IdType;
    zOrder?: number;
}

export interface IAddLessonsIntoChapterParams {
    chapterId: IdType;
    lessonIds: ILessonFormOfChapter[];
}

export interface IEditLessonOfChapterParams
    extends IAddLessonsIntoChapterParams {}
