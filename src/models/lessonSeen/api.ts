import { get, post, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/common';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType, IListResponseVDT } from '../base';
import { LESSON_SEEN_PATH } from './paths';
import {
  ICreateLessonSeenParams,
  IGetLessonSeenByUserParams,
  ILessonSeen,
} from './types';

export const getLessonSeenByLessonAPI = async (
  lessonId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
  const url = generatePath(LESSON_SEEN_PATH.TESTED.LESSON.GET, {
    lessonId,
  });
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getLessonSeenByUser = async (
  params: IGetLessonSeenByUserParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILessonSeen>> => {
  const { lessonId, userId } = params;

  const url = generatePath(LESSON_SEEN_PATH.TESTED.GET_BY_USER, {
    lessonId,
    userId,
  });

  const response = await get(url, null, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const createLessonSeenAPI = async (
  payload: ICreateLessonSeenParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = LESSON_SEEN_PATH.TESTED.CREATE;

  return await post(url, payload, null, userHeaders);
};

export const deleteLessonSeenAPI = async (
  lessonId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = generatePath(LESSON_SEEN_PATH.TESTED.DELETE_BY_ID, {
    lessonId,
  });

  return await remove(url, userHeaders);
};
