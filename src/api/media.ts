import { IMedia } from 'jfw-js';
import { IdType, ILesson, IListResponseVDT } from '../models';
import { formatStringByObj } from '../utils/common';
import { put } from '../utils/axiosHelper';
import { RawAxiosRequestHeaders } from 'axios';

/* ========================================= Path =========================================  */
const REST = 'medias';
const UPDATE_MEDIA_PATH = `${REST}/save-list?&type={type}&refId={lessonId}`;
/* ========================================= End path =========================================  */

export const updateMedia = async (
  medias: IMedia[],
  type: string,
  lessonId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILesson>> => {
  const url = formatStringByObj(UPDATE_MEDIA_PATH, { type, lessonId });
  const response = await put(url, medias, null, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};
