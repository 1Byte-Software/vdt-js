import { DateType, IPageable, IdType as JfwIdType } from '@jframeworks/jfw-js';
import {
    IBaseObject,
    IdType,
    IPageable as IVDTPageable,
    ISortable,
} from '../base';
import { IChapter } from '../chapter';
import { ILesson } from '../lesson';
import { IAnswer, IUserScoreAnswer } from '../userScore';

export interface IBook extends IBaseObject {
    chapters?: IChapter[];

    type?: string | null;
    code: string;

    name: string;
    description?: string;
    isFree: boolean;

    zOrder?: number;
    status: string;
    statusValue: string;
}

export interface IQueryBookParams extends IPageable, ISortable {
    /**
     * @deprecated Use questionTypeId instead
     */
    categoryId?: IdType;
    questionTypeId?: IdType;

    name?: string;
    type?: string;

    status?: string;
}

export interface IBookForm {
    id?: IdType;

    chapters?: IChapter[];

    code?: string;

    name?: string;
    type?: string | null;

    isFree?: boolean;
    status: string;
}

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

export interface IUserScoresSubmit {
    question: ILessonUserScore;
    pathSpeech: string;
}

export interface ISubmitBookExamRecordParams extends ISubmitPayload {
    userScores: IAnswer | IAnswer[] | IUserScoresSubmit[];
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
export interface IChapterFormOfBook {
    chapterId?: IdType;
    zOrder?: number;
}
export interface IAddChaptersIntoBookParams {
    bookId: IdType;
    chapterIds: IChapterFormOfBook[];
}

export interface IUpdateChaptersOfBookParams
    extends IAddChaptersIntoBookParams {}

export interface IUserResult {
    chapterId: IdType;
    lesson: ILesson;
    practiceTime: DateType;
    resultAnswerUser: IUserScoreAnswer | null;
}
