import { IdType as JfwIdType } from '@jframework/jfw-js';
import { RawAxiosRequestHeaders } from 'axios';
import { get, post, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IListResponseVDT, IResponse } from '../base';
import { USER_SCORE_PATH } from './paths';
import {
    IAnswer,
    ICreateScoreHumanParams,
    IGetCountPracticeAIScoreParams,
    IGetUserScoreAnswerParams,
    IScoreAIParams,
    ISystemScore,
    IUserScoreAnswer,
} from './types';

export const scoreAPI = async (
    payload: IAnswer[],
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = USER_SCORE_PATH.SCORE;

    return await post(url, payload, null, userHeaders);
};

export const getCountPracticeAIScoreAPI = async (
    params: IGetCountPracticeAIScoreParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
    const { userId, ...restParams } = params;

    const url = generatePath(USER_SCORE_PATH.COUNT_PRACTICE_AI_SCORE, {
        userId,
    });

    const response = await get(url, { params: restParams }, userHeaders);

    return response.data;
};

export const getUserScoreAnswerAPI = async (
    params: IGetUserScoreAnswerParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IUserScoreAnswer>> => {
    const url = USER_SCORE_PATH.ANSWER;

    const response = await get(url, { params }, userHeaders);
    const { contents, ...rest } = response.data;

    return {
        contents,
        pagination: rest,
    };
};

export const getUserScoreByResponseGroupCodeAPI = async (
    responseGroupCode: string,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IUserScoreAnswer> => {
    const url = generatePath(USER_SCORE_PATH.GET_BY_RESPONSE_GROUP_CODE, {
        responseGroupCode,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

export const deleteUserScoreByResponseGroupCodeAPI = async (
    responseGroupCode: JfwIdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(USER_SCORE_PATH.DELETE_BY_RESPONSE_GROUP_CODE, {
        responseGroupCode,
    });

    return await remove(url, userHeaders);
};

export const scoreAIAPI = async (
    params: IScoreAIParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<boolean>> => {
    const url = USER_SCORE_PATH.SCORE_AI;
    const formData = new FormData();

    if (params) {
        Object.keys(params).forEach((key) => {
            formData.append(key, params[key] as string);
        });
    }

    return await post(
        url,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
        userHeaders,
    );
};

export const createScoreHumanAPI = async (
    params: ICreateScoreHumanParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const { responseGroupId, ...restParams } = params;
    const url = generatePath(USER_SCORE_PATH.CREATE_SCORE_HUMAN, {
        responseGroupId,
    });

    return await post(url, restParams, null, userHeaders);
};

export const getListSystemScoreAPI = async (
    userHeaders?: RawAxiosRequestHeaders,
): Promise<ISystemScore[]> => {
    const url = USER_SCORE_PATH.GET_LIST_SYSTEM_SCORE;

    const response = await get(url, null, userHeaders);

    return response.data;
};
