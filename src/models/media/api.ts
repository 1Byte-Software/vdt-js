import { ILesson } from '@/models';
import { put } from '@/utils/axiosHelper';
import { RawAxiosRequestHeaders } from 'axios';
import { IListResponseVDT } from '../base';
import { MEDIA_PATH } from './path';
import { IMediaSaveListParams } from './types';

export const mediaSaveListAPI = async (
  params: IMediaSaveListParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ILesson>> => {
  const { medias, ...restParams } = params;
  const url = MEDIA_PATH.SAVE_LIST;

  const response = await put(
    url,
    medias,
    {
      params: restParams,
    },
    userHeaders,
  );

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};
