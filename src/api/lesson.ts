import { RawAxiosRequestHeaders } from 'axios';
import {
  IAddSeeAlsoPath,
  IAddSeeAlsoPayload,
  IDownloadLessonParams,
  IdType,
  IGetLessonDetailByZOrderParams,
  IGetLessonDetailPath,
  IGetListQuestionsParams,
  ILesson,
  ILessonForm,
  IListResponseVDT,
  IResponse,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';
import { IResponseNotPermission } from 'jfw-js';
import { formatStringByObj } from '../utils/common';

const REST = 'lessons';
const FILTER = 'filter';
const EXPORT = 'export';
const LESSON_SEE_ALSO = 'lesson-see-also';
/* ========================================= */
const REST_QUESTION = 'lessons';
const REST_A_QUESTION = 'lesson';
const UPDATE_LESSON_CATEGORY_PATH = `${REST_QUESTION}/category/{categoryId}/{lessonId}`;

/* ========================================= */

export const getListLessonsAPI = async (
  params: IGetListQuestionsParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILesson>> => {
  const url = `${REST}/${FILTER}`;
  const response = await get(url, { params }, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const getLessonDetailAPI = async (
  path: IGetLessonDetailPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson> => {
  const { questionId } = path;
  const url = `${REST}/${questionId}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getLessonDetailByZOrderAPI = async (
  params: IGetLessonDetailByZOrderParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<ILesson> | IResponseNotPermission> => {
  const url = `${REST}`;
  const response = await get(url, { params }, userHeaders);

  return response;
};

export const downloadLessonAPI = async (
  params: IDownloadLessonParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${EXPORT}`;
  const response = await get(
    url,
    {
      params,
      responseType: 'blob',
    },
    userHeaders,
  );

  return response;
};

export const addExplanationAPI = async (
  path: IAddSeeAlsoPath,
  payload: IAddSeeAlsoPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const { questionId } = path;
  const url = `${REST}/${questionId}/${LESSON_SEE_ALSO}`;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const editExplanationAPI = async (
  path: IAddSeeAlsoPath,
  payload: IAddSeeAlsoPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const { questionId } = path;
  const url = `${REST}/${questionId}/${LESSON_SEE_ALSO}`;
  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const createLessonAPI = async (
  payload: ILessonForm,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
  const url = `${REST_A_QUESTION}`;

  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const deleteLessonAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_A_QUESTION}/${id}`;

  return await remove(url, userHeaders);
};

export const getLessonByIdAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson> => {
  const url = `${REST_A_QUESTION}/${id}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const updateLessonAPI = async (
  id: IdType,
  payload: ILessonForm,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<null> => {
  const url = `${REST_A_QUESTION}/${id}`;

  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const updateLessonCategoryAPI = async (
  lessonId: IdType,
  categoryId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = formatStringByObj(UPDATE_LESSON_CATEGORY_PATH, {
    lessonId,
    categoryId,
  });

  return await put(url, null, null, userHeaders);
};
