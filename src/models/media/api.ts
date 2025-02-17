import { ILesson } from '@/models';
import { put } from '@/utils/axiosHelper';
import { formatStringByObj } from '@/utils/common';
import { RawAxiosRequestHeaders } from 'axios';
import { IMedia } from 'jfw-js';
import { IdType, IListResponseVDT } from '../base';

/* ========================================= Path =========================================  */
const REST = 'medias';
const MEDIA_SAVE_LIST_PATH = `${REST}/save-list?&type={type}&refId={lessonId}`;
/* ========================================= End path =========================================  */

/**
 * @deprecated Use mediaSaveListAPI instead
 */
export const updateMediaAPI = () => {};

export const mediaSaveListAPI = async (
  medias: IMedia[],
  type: string,
  lessonId: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILesson>> => {
  const url = formatStringByObj(MEDIA_SAVE_LIST_PATH, { type, lessonId });
  const response = await put(url, medias, null, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};
