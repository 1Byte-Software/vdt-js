import { RawAxiosRequestHeaders } from 'axios';
import { IPaginationParams } from 'jfw-js';
import {
  IAddChaptersIntoBookParams,
  IBook,
  IBookExam,
  IBookForm,
  IById,
  IChapter,
  ICheckCanStartParams,
  ICheckResultMockTestPath,
  IContinueExam,
  ICreateBookExamPath,
  IDeleteBookExamPath,
  IDeleteBookPath,
  IdType,
  IEditChaptersOfBookParams,
  IFinishMockTestPath,
  IGetBookByIdPath,
  IGetContinueExamParams,
  IGetListBooksExamPath,
  IGetListBooksParams,
  IGetScoreReportPath,
  IGetUserResultPath,
  ILesson,
  IListResponseVDT,
  IResultOverall,
  IScoreReport,
  ISubmitOtherPayload,
  ISubmitSpeakingPayload,
  IUserResult,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';
import { formatStringByObj } from '../utils/common';

const REST_BOOK = 'books';
const REST_CHAPTER = 'chapters';
const REST_BOOK_EXAM = `${REST_BOOK}/book-exam-record`;
const REST_SUBMIT = `${REST_BOOK_EXAM}/book-exam-submissions`;
const SUBMIT = 'submit';
const CONTINUE = 'continue';
const FINISH = 'finish';
const PROCESSING = 'processing';
const CHECK_RESULT = 'check-result';
const RESULT = 'result';
const BOOK_EXAM_REPORT = 'book-exam-report';
const SCORE_DETAIL = 'score-detail';
const PERMISSION = 'permissions';
const LESSON = 'lessons';

const REST_CHAPTERS_OF_BOOK = `${REST_BOOK}/{id}/${REST_CHAPTER}`;

export const getListBooksAPI = async (
  params: IGetListBooksParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IBook>> => {
  const url = REST_BOOK;
  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const getBookByIdAPI = async (
  path: IGetBookByIdPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IBook> => {
  const { bookId } = path;
  const url = `${REST_BOOK}/${bookId}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListBooksExamAPI = async (
  path: IGetListBooksExamPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IBookExam>> => {
  const { userId } = path;
  const url = `${REST_BOOK_EXAM}/${userId}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const createBookExamAPI = async (
  path: ICreateBookExamPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { userId, bookId } = path;
  const url = `${REST_BOOK_EXAM}/${userId}/${bookId}`;

  const response = await post(url, null, null, userHeaders);

  return response.data;
};

export const submitSpeakingAPI = (
  payload: ISubmitSpeakingPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_SUBMIT}/${SUBMIT}`;

  return post(url, payload, null, userHeaders);
};

export const submitOtherAPI = (
  payload: ISubmitOtherPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_SUBMIT}/${SUBMIT}`;

  return post(url, payload, null, userHeaders);
};

export const deleteBookExamAPI = async (
  path: IDeleteBookExamPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookExamId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamId}`;
  return await remove(url, userHeaders);
};

export const deleteBookAPI = async (
  path: IDeleteBookPath,

  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookId } = path;
  const url = `${REST_BOOK}/${bookId}`;
  return await remove(url, userHeaders);
};

export const getContinueExamAPI = async (
  params: IGetContinueExamParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IContinueExam> => {
  const url = `${REST_SUBMIT}/${CONTINUE}`;

  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const finishMockTestAPI = async (
  path: IFinishMockTestPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookExamId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamId}/${FINISH}`;

  return await put(url, null, null, userHeaders);
};

export const processingMockTestAPI = async (
  path: IFinishMockTestPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookExamId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamId}/${PROCESSING}`;

  return await put(url, null, null, userHeaders);
};

export const checkResultMockTestAPI = async (
  path: ICheckResultMockTestPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookExamId, userId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamId}/${userId}/${CHECK_RESULT}`;

  return await post(url, null, null, userHeaders);
};

export const getResultOverallAPI = async (
  path: ICheckResultMockTestPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResultOverall> => {
  const { bookExamId, userId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamId}/${userId}/${RESULT}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getScoreReportAPI = async (
  path: IGetScoreReportPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IScoreReport> => {
  const { bookExamId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamId}/${BOOK_EXAM_REPORT}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getUserResultAPI = async (
  path: IGetUserResultPath,
  params: IPaginationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IUserResult>> => {
  const { bookExamRecordId, userId, categoryId } = path;
  const url = `${REST_BOOK_EXAM}/${bookExamRecordId}/${userId}/${categoryId}/${SCORE_DETAIL}`;

  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const checkCanStartAPI = async (
  params: ICheckCanStartParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const url = `${REST_BOOK_EXAM}/${PERMISSION}`;

  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const getListQuestionsOfChapterAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const { id } = path;
  const url = `${REST_CHAPTER}/${id}/${LESSON}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const editBookAPI = async (
  book: IBookForm,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_BOOK}/${book.id}`;

  return await put(url, book, null, userHeaders);
};

export const createBookAPI = async (
  book: IBookForm,

  userHeaders?: RawAxiosRequestHeaders,
): Promise<IdType> => {
  const url = `${REST_BOOK}`;

  const response = await post(url, book, null, userHeaders);

  return response.data;
};

export const getChaptersOfBookAPI = async (
  path: IById,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IChapter[]> => {
  const url = formatStringByObj(REST_CHAPTERS_OF_BOOK, {
    id: path.id,
  });

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const addChapterIntoBookAPI = async (
  path: IAddChaptersIntoBookParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookId, chapterIds } = path;
  const url = formatStringByObj(REST_CHAPTERS_OF_BOOK, {
    id: bookId,
  });

  return await post(url, chapterIds, null, userHeaders);
};

export const editChapterInBookAPI = async (
  path: IEditChaptersOfBookParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { bookId, chapterIds } = path;
  const url = formatStringByObj(REST_CHAPTERS_OF_BOOK, {
    id: bookId,
  });

  return await put(url, chapterIds, null, userHeaders);
};
