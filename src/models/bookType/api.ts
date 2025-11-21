import { RawAxiosRequestHeaders } from 'axios';
import { get } from '../../utils/axiosHelper';
import { BOOK_TYPE_PATH } from './path';
import { IBookType } from './types';

export const getCurrentBookTypes = async (
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IBookType[]> => {
    const url = BOOK_TYPE_PATH.GET_CURRENT;
    const response = await get(url, null, userHeaders);

    return response.data;
};
