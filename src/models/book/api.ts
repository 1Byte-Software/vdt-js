import { get, post, put, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/path';
import {
    IPageable,
    IResponse,
    IdType as JfwIdType
} from '@jframeworks/jfw-js';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType, IListResponseVDT } from '../base';
import { IChapter } from '../chapter';
import { BOOK_PATH } from './path';
import {
    IAddChaptersIntoBookParams,
    IBook,
    IBookExam,
    IBookForm,
    ICheckResultBookExamRecordParams,
    IContinueBookExamSubmissionParams,
    IContinueExam,
    ICreateBookExamRecordForBookParams,
    IGetBookExamRecordByUserId,
    IGetResultBookExamRecordParams,
    IGetScoreDetailBookExamRecordParams,
    IQueryBookParams,
    IResultOverall,
    IScoreReport,
    ISubmitBookExamRecordParams,
    IUpdateChaptersOfBookParams,
    IUserResult,
} from './types';

export const queryBookAPI = async (
    params: IQueryBookParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IBook>> => {
    const url = BOOK_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);

    const { contents, ...rest } = response.data;

    return {
        contents,
        pagination: rest,
    };
};

export const getBookByIdAPI = async (
    bookId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IBook> => {
    const url = generatePath(BOOK_PATH.GET_BY_ID, {
        id: bookId,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

export const createBookAPI = async (
    book: IBookForm,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IdType> => {
    const url = BOOK_PATH.CREATE;

    const response = await post(url, book, null, userHeaders);

    return response.data;
};

export const updateBookAPI = async (
    book: IBookForm,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(BOOK_PATH.UPDATE_BY_ID, {
        id: book.id,
    });

    return await put(url, book, null, userHeaders);
};

export const deleteBookAPI = async (
    bookId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(BOOK_PATH.DELETE_BY_ID, {
        id: bookId,
    });

    return await remove(url, userHeaders);
};

export const getBookExamRecordByUserIdAPI = async (
    userId: JfwIdType,
    params?: IGetBookExamRecordByUserId,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IBookExam>> => {
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.GET_BY_USER_ID, {
        userId,
    });

    const response = await get(url, { params }, userHeaders);

    return response.data;
};

export const createBookExamRecordForBookAPI = async (
    params: ICreateBookExamRecordForBookParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<IBookExam>> => {
    const { userId, bookId } = params;
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.CREATE, {
        userId,
        bookId,
    });

    const response = await post(url, null, null, userHeaders);

    return response.data;
};

export const deleteBookExamRecordAPI = async (
    bookExamId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.DELETE_BY_ID, {
        bookExamId,
    });
    return await remove(url, userHeaders);
};

export const submitBookExamRecordAPI = (
    params: ISubmitBookExamRecordParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = BOOK_PATH.BOOK_EXAM_RECORD.BOOK_EXAM_SUBMISSION.SUBMIT;

    return post(url, params, null, userHeaders);
};

export const continueBookExamSubmissionAPI = async (
    params: IContinueBookExamSubmissionParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IContinueExam> => {
    const url = BOOK_PATH.BOOK_EXAM_RECORD.BOOK_EXAM_SUBMISSION.CONTINUE;

    const response = await get(url, { params }, userHeaders);

    return response.data;
};

export const finishBookExamRecordAPI = async (
    bookExamId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.FINISH, {
        id: bookExamId,
    });

    return await put(url, null, null, userHeaders);
};

export const processingBookExamRecordAPI = async (
    bookExamId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.PROCESSING, {
        id: bookExamId,
    });

    return await put(url, null, null, userHeaders);
};

export const checkResultBookExamRecordAPI = async (
    params: ICheckResultBookExamRecordParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const { bookExamId, userId } = params;
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.CHECK_RESULT, {
        bookExamId,
        userId,
    });

    return await post(url, null, null, userHeaders);
};

/**
 * @deprecated Xoá sau khi đã giải quyết xong issue #VDT-114
 */
export const getResultBookExamRecordAPI = async (
    path: IGetResultBookExamRecordParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResultOverall> => {
    const { bookExamId, userId } = path;
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.RESULT, {
        bookExamId,
        userId,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

/**
 * @deprecated Xoá sau khi đã giải quyết xong issue #VDT-114
 */
export const getBookExamReportAPI = async (
    bookExamId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IScoreReport[]> => {
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.BOOK_EXAM_REPORT.GET, {
        id: bookExamId,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

export const getScoreDetailBookExamRecordAPI = async (
    path: IGetScoreDetailBookExamRecordParams,
    params?: IPageable,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IUserResult>> => {
    const { bookExamRecordId, userId, categoryId } = path;
    const url = generatePath(BOOK_PATH.BOOK_EXAM_RECORD.SCORE_DETAIL, {
        bookExamRecordId,
        userId,
        categoryId,
    });

    const response = await get(url, { params }, userHeaders);

    const { contents, ...rest } = response.data;

    return {
        contents,
        pagination: rest,
    };
};

export const getChapterOfBookAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IChapter[]> => {
    const url = generatePath(BOOK_PATH.CHAPTERS.GET, {
        id,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

export const addChapterIntoBookAPI = async (
    params: IAddChaptersIntoBookParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const { bookId, chapterIds } = params;

    const url = generatePath(BOOK_PATH.CHAPTERS.ADD, {
        id: bookId,
    });

    return await post(url, chapterIds, null, userHeaders);
};

export const updateChapterInBookAPI = async (
    path: IUpdateChaptersOfBookParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const { bookId, chapterIds } = path;
    const url = generatePath(BOOK_PATH.CHAPTERS.UPDATE, {
        id: bookId,
    });

    return await put(url, chapterIds, null, userHeaders);
};
