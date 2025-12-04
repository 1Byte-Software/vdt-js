import { IPageable, ISortable } from '@jframework/jfw-js';
import {
    IBaseObject,
    IdType,
    StripCreateFields,
    StripUpdateFields,
} from '../base';
import { IBaseLesson } from '../lesson';
import { ChapterStatus } from './constants';

export interface IChapter extends IBaseObject {
    questionTypeId: IdType;

    name?: string | null;
    duration?: number | null;
    status?: number | null;
    statusValue?: ChapterStatus | null;
    description?: string | null;
    orderBookChapter: number;
    lessons: IBaseLesson[];
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

export interface ICreateChapterParams
    extends Omit<
        StripCreateFields<IChapter>,
        'lessons' | 'orderBookChapter' | 'status'
    > {
    status?: ChapterStatus | null;
}

export interface IUpdateChapterParams
    extends Omit<
        StripUpdateFields<IChapter>,
        'lessons' | 'orderBookChapter' | 'status'
    > {
    status?: ChapterStatus | null;
}

export interface ILessonItemParams {
    lessonId: IdType;
    zOrder?: number | null;
}
