import { ILesson } from '@/models';
import { get, post, put, remove } from '@/utils/axiosHelper';
import { formatStringByObj } from '@/utils/common';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType, IListResponseVDT } from '../base';
import {
  IAddLessonsIntoChapterParams,
  IChapter,
  IChapterForm,
  IDeleteChapterPath,
  IEditLessonOfChapterParams,
  IGetListChaptersParams,
} from './types';

const REST_CHAPTER = 'chapters';
const REST_LESSONS = 'lessons';

const REST_LESSONS_OF_BOOK = `${REST_CHAPTER}/{id}/${REST_LESSONS}`;

export const getListChaptersAPI = async (
  params: IGetListChaptersParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IChapter>> => {
  const url = REST_CHAPTER;
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
  const url = `${REST_CHAPTER}/${chapterId}`;

  const response = await get(url, null, userHeaders);
  return response.data;
};

export const editChapterAPI = async (
  chapter: IChapterForm,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_CHAPTER}/${chapter.id}`;

  return await put(url, chapter, null, userHeaders);
};

export const createChapterAPI = async (
  chapter: IChapterForm,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IdType> => {
  const url = `${REST_CHAPTER}`;

  const response = await post(url, chapter, null, userHeaders);

  return response.data;
};

export const deleteChapterAPI = async (
  path: IDeleteChapterPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { chapterId } = path;
  const url = `${REST_CHAPTER}/${chapterId}`;
  return await remove(url, userHeaders);
};

export const getLessonsOfChapterAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILesson[]> => {
  const url = formatStringByObj(REST_LESSONS_OF_BOOK, {
    id,
  });

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const addLessonIntoChapterAPI = async (
  path: IAddLessonsIntoChapterParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { chapterId, lessonIds } = path;
  const url = formatStringByObj(REST_LESSONS_OF_BOOK, {
    id: chapterId,
  });

  return await post(url, lessonIds, null, userHeaders);
};

export const editLessonInChapterAPI = async (
  path: IEditLessonOfChapterParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { chapterId, lessonIds } = path;
  const url = formatStringByObj(REST_LESSONS_OF_BOOK, {
    id: chapterId,
  });

  return await put(url, lessonIds, null, userHeaders);
};
