import { RawAxiosRequestHeaders } from 'axios';
import { put } from '../../utils/axiosHelper';
import { IListResponseVDT } from '../base';
import { ILesson } from '../lesson';
import { MEDIA_PATH } from './path';
import { ISaveMediaListParams } from './types';

export const saveMediaListAPI = async (
    params: ISaveMediaListParams,
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
