import { DateType, IPageable, IdType as JfwIdType } from '@jframework/jfw-js';
import {
    IBaseObject,
    IdType,
    ISortable,
    IPageable as IVDTPageable,
    StripCreateFields,
    StripUpdateFields,
} from '../base';
import { BookExamStatus } from '../bookExam';
import { IBookType } from '../bookType';
import { IChapter } from '../chapter';
import { ILesson } from '../lesson';
import { IAnswer, IUserScoreAnswer } from '../userScore';
import { BookStatus, BookType } from './constants';

export interface IBook extends IBaseObject {
    bookType?: IBookType | null;

    code?: string | null;
    name?: string | null;

    /**
     * @deprecated Use BookType instead
     */
    type?: BookType | null;
    thumbnailUrl?: string | null;
    description?: string | null;
    zOrder?: number | null;
    status?: BookStatus | null;
    isFree?: boolean | null;
}

/**
 * Represents an exam record associated with a specific book.
 *
 * @remarks
 * This interface is **based on inferred data** rather than official backend documentation.
 * The types (especially for score-related fields) are assumed to be `number | null`
 * based on observed data patterns and naming conventions.
 */
export interface IBookExamRecord extends IBaseObject {
    bookId: IdType;
    code: string;
    status: BookExamStatus;

    speaking?: number | null;
    writing?: number | null;
    reading?: number | null;
    listening?: number | null;
    grammar?: number | null;
    pronunciation?: number | null;
    oralFluency?: number | null;
    writtenDiscourse?: number | null;
    spelling?: number | null;
    vocabulary?: number | null;
    overallScore?: number | null;
}

/**
 * @deprecated use IGetBooksParams instead
 */
export type IQueryBookParams = IGetBooksParams;

export interface IGetBooksParams extends IPageable, ISortable {
    /**
     * @deprecated Use questionTypeId instead
     */
    categoryId?: IdType;
    questionTypeId?: IdType;

    name?: string;

    bookTypeId?: string;

    status?: BookStatus;
}

export interface ICreateBookParams {
    bookTypeId?: IdType | null;

    code?: string | null;
    name?: string | null;

    thumbnailUrl?: string | null;
    description?: string | null;
    zOrder?: number | null;
    status?: BookStatus | null;
    isFree?: boolean | null;
}
export interface IUpdateBookParams extends ICreateBookParams {}

export interface IDeviceTest {
    icon?: string;
    status: boolean;
    label?: string;
    text: string;
}

export interface ICreateBookExamRecordForBookParams {
    userId: JfwIdType;
    bookId: IdType;
}

/**
 * @deprecated Use ICreateBookExamRecordForBookParams instead
 */
export interface ICreateBookExamPath {
    userId: JfwIdType;
    bookId: IdType;
}

export interface IGetListBooksExamPath {
    userId: JfwIdType;
}

export interface IGetBookExamRecordByUserId extends IVDTPageable {}

export interface IBookExam {
    id: IdType;
    book: IBook;
    status: string;
    name: string;
    modifiedDate: DateType;
    code: string;
}

export interface ISubmitPayload {
    bookExamRecordId: IdType;
    chapterId: IdType;
    lessonId: IdType;
    userId: JfwIdType;
}

export interface ILessonUserScore {
    id: IdType;
}

export interface ISubmitBookExamRecordParams extends ISubmitPayload {
    userScores?: IAnswer[] | null;
}

export interface IContinueBookExamSubmissionParams {
    bookExamRecordId: IdType;
    userId: JfwIdType;
}
export interface IContinueExam {
    chapterId: IdType;
    lessonId: IdType;
}
export interface ICheckResultBookExamRecordParams {
    bookExamId: IdType;
    userId: JfwIdType;
}
export interface IGetResultBookExamRecordParams {
    bookExamId: IdType;
    userId: JfwIdType;
}
export interface ICheckResultMockTestPath {
    bookExamId: IdType;
    userId: JfwIdType;
}

/**
 * @deprecated Xử lý tại issue #VDT-114 do bị fix cứng chỉ dùng cho tiếng anh
 */
export interface IResultOverall {
    id: IdType;
    speaking: number;
    writing: number;
    reading: number;
    listening: number;
    grammar: number;
    pronunciation: number;
    oralFluency: number;
    spelling: number;
    vocabulary: number;
    writtenDiscourse: number;
    overallScore: number;
    book: IBook;
    modifiedDate: DateType;
}

/**
 * @deprecated Xoá sau khi đã giải quyết xong issue #VDT-114
 */
export interface IGetScoreReportPath {
    bookExamId: IdType;
}

/**
 * @deprecated Xoá sau khi đã giải quyết xong issue #VDT-114
 */
export interface IScoreReport {
    actualListening: number | null;
    actualReading: number | null;
    actualSpeaking: number | null;
    actualWriting: number | null;
    categoryCode: string;
    correctRateListening: number | null;
    correctRateReading: number | null;
    correctRateSpeaking: number | null;
    correctRateWriting: number | null;
    createdBy: IdType | null;
    createdDate: DateType;
    id: IdType | null;
    maxScoreListening: number | null;
    maxScoreReading: number | null;
    maxScoreSpeaking: number | null;
    maxScoreWriting: number | null;
    modifiedBy: number | null;
    modifiedDate: DateType;
    scoreListening: number | null;
    scoreReading: number | null;
    scoreSpeaking: number | null;
    scoreWriting: number | null;
    skillName: string | null;
    contributeListening: string | null;
    contributeReading: string | null;
    contributeSpeaking: string | null;
    contributeWriting: string | null;
}
export interface ICheckCanStartParams {
    userId: IdType;
}
export interface IGetScoreDetailBookExamRecordParams {
    bookExamRecordId: IdType;
    userId: JfwIdType;
    categoryId: IdType;
}

export interface IChapterItemParams {
    chapterId?: IdType;
    zOrder?: number;
}

export interface IUserResult {
    chapterId: IdType;
    lesson: ILesson;
    practiceTime: DateType;
    resultAnswerUser: IUserScoreAnswer | null;
}
