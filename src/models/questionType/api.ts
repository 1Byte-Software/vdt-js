import { get, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType } from '../base';
import { QUESTION_TYPE_PATH } from './path';
import {
    IGetQuestionTypesParams,
    IQuestionType,
    IQuestionTypeForm,
} from './types';

export const getQuestionTypesAPI = async (
    params?: IGetQuestionTypesParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionType[]> => {
    const url = QUESTION_TYPE_PATH.QUERY;
    const response = await get(url, { params }, userHeaders);
    return response.data;
};

export const getQuestionTypeByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionType> => {
    const url = generatePath(QUESTION_TYPE_PATH.GET_BY_ID, {
        id,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

export const createQuestionTypeAPI = async (
    params: IQuestionTypeForm,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
    const url = QUESTION_TYPE_PATH.CREATE;

    const response = await post(url, params, null, userHeaders);

    return response.data;
};

export const deleteQuestionTypeByIdAPI = async (
    id: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(QUESTION_TYPE_PATH.DELETE, { id });

    return await remove(url, userHeaders);
};

export const updateQuestionTypeAPI = async (
    id: IdType,
    params: IQuestionTypeForm,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<null> => {
    const url = generatePath(QUESTION_TYPE_PATH.UPDATE, { id });

    const response = await put(url, params, null, userHeaders);

    return response.data;
};
