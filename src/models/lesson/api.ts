import {
  IAddSeeAlsoPayload,
  ICreateLessonPriorityParams,
  ICreateLessonVocabParams,
  IDeleteLessonPriorityParams,
  IDeleteLessonVocabParams,
  IGetLessonExportParams,
  IGetLessonFilterParams,
  ILesson,
  ILessonForm,
  ILessonVocab,
  IQueryLessonParams,
} from '@/models';
import { get, post, put, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/common';
import { AxiosError, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { IdType, IError, IListResponseVDT } from '../base';
import { LESSON_PATH } from './path';

/**
 * @note Need change queryLessonAPI to getLessonByZOrderAndQuestionTypeCode
 */
export const queryLessonAPI = async (
  params: IQueryLessonParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson> => {
  try {
    const url = LESSON_PATH.QUERY;
    const response: AxiosResponse<ILesson, IError> = await get(
      url,
      { params },
      userHeaders,
    );

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw (err as AxiosError<IError>).response.data;
    }

    throw err;
  }
};

export const getLessonFilterAPI = async (
  params: IGetLessonFilterParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILesson>> => {
  const url = LESSON_PATH.FILTER;

  const response = await get(url, { params }, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const getLessonByIdAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson> => {
  const url = generatePath(LESSON_PATH.GET_BY_ID, {
    id,
  });

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const createLessonAPI = async (
  payload: ILessonForm,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
  const url = LESSON_PATH.CREATE;

  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const deleteLessonAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = generatePath(LESSON_PATH.DELETE, { id });

  return await remove(url, userHeaders);
};

export const updateLessonAPI = async (
  id: IdType,
  payload: ILessonForm,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<null> => {
  const url = generatePath(LESSON_PATH.UPDATE, { id });

  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

/**
 * @note This name of function violation of naming convention of Restful
 */
export const getLessonExportAPI = async (
  params: IGetLessonExportParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = LESSON_PATH.EXPORT;

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

export const createLessonSeeAlsoForLessonAPI = async (
  lessonId: IdType,
  payload: IAddSeeAlsoPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const url = generatePath(LESSON_PATH.LESSON_SEE_ALSO.CREATE_LESSON_SEE_ALSO, {
    id: lessonId,
  });
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const updateLessonSeeAlsoForLessonAPI = async (
  lessonId: IdType,
  payload: IAddSeeAlsoPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const url = generatePath(LESSON_PATH.LESSON_SEE_ALSO.UPDATE_LESSON_SEE_ALSO, {
    id: lessonId,
  });
  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const updateLessonQuestionTypeAPI = async (
  lessonId: IdType,
  questionTypeId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = generatePath(LESSON_PATH.QUESTION_TYPE.UPDATE_QUESTION_TYPE, {
    lessonId,
    questionTypeId,
  });

  return await put(url, null, null, userHeaders);
};

export const getLessonVocabAPI = async (
  lessonId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILessonVocab>> => {
  const url = generatePath(LESSON_PATH.VOCAB.QUERY_VOCAB, {
    id: lessonId,
  });
  const response = await get(url, null, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const createLessonVocabAPI = async (
  payload: ICreateLessonVocabParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const { id, vocabIds } = payload;

  const url = generatePath(LESSON_PATH.VOCAB.CREATE_VOCAB, {
    id,
  });

  const response = await post(
    url,
    null,
    {
      params: { vocabIds },
      paramsSerializer: {
        indexes: null,
      },
    },
    userHeaders,
  );

  return response.data;
};

export const deleteLessonVocabAPI = async (
  payload: IDeleteLessonVocabParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const { id, vocabIds } = payload;

  const url = generatePath(LESSON_PATH.VOCAB.DELETE_VOCAB, {
    id,
  });

  const response = await remove(url, userHeaders, {
    params: {
      vocabIds,
    },
    paramsSerializer: {
      indexes: null,
    },
  });

  return response.data;
};

export const createLessonPriorityAPI = async (
  path: ICreateLessonPriorityParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { categoryId, lessonId, userId } = path;
  const url = generatePath(LESSON_PATH.PRIORITY.CREATE, {
    id: lessonId,
    priorityId: categoryId,
    userId,
  });

  return await post(url, null, null, userHeaders);
};

export const deleteLessonPriorityAPI = async (
  path: IDeleteLessonPriorityParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { categoryId, lessonId, userId } = path;
  const url = generatePath(LESSON_PATH.PRIORITY.DELETE, {
    id: lessonId,
    priorityId: categoryId,
    userId,
  });

  return await remove(url, userHeaders);
};
