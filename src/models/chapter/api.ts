import { ILesson } from '@/models';
import { get, post, put, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/path';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType, IListResponseVDT } from '../base';
import { CHAPTER_PATH } from './path';
import {
  IAddLessonsIntoChapterParams,
  IChapter,
  IChapterForm,
  IEditLessonOfChapterParams,
  IQueryChapterParams,
} from './types';

export const queryChapterAPI = async (
  params: IQueryChapterParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IChapter>> => {
  const url = CHAPTER_PATH.QUERY;
  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const getChapterByIdAPI = async (
  chapterId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IChapter> => {
  const url = generatePath(CHAPTER_PATH.GET_BY_ID, {
    id: chapterId,
  });

  const response = await get(url, null, userHeaders);
  return response.data;
};

export const updateChapterAPI = async (
  chapter: IChapterForm,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = generatePath(CHAPTER_PATH.UPDATE_BY_ID, {
    id: chapter.id,
  });

  return await put(url, chapter, null, userHeaders);
};

export const createChapterAPI = async (
  chapter: IChapterForm,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IdType> => {
  const url = CHAPTER_PATH.CREATE;

  const response = await post(url, chapter, null, userHeaders);

  return response.data;
};

export const deleteChapterAPI = async (
  chapterId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = generatePath(CHAPTER_PATH.GET_BY_ID, {
    id: chapterId,
  });
  return await remove(url, userHeaders);
};

export const getLessonsOfChapterAPI = async (
  chapterId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const url = generatePath(CHAPTER_PATH.LESSON.GET_BY_CHAPTER_ID, {
    chapterId,
  });

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const addLessonIntoChapterAPI = async (
  path: IAddLessonsIntoChapterParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { chapterId, lessonIds } = path;
  const url = generatePath(CHAPTER_PATH.LESSON.ADD_INTO_CHAPTER, {
    chapterId,
  });

  return await post(url, lessonIds, null, userHeaders);
};

export const editLessonInChapterAPI = async (
  path: IEditLessonOfChapterParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { chapterId, lessonIds } = path;
  const url = generatePath(CHAPTER_PATH.LESSON.EDIT_IN_CHAPTER, {
    chapterId,
  });

  return await put(url, lessonIds, null, userHeaders);
};
