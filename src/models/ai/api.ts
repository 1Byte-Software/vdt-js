import { axiosInstanceAI } from '../../config/axios/axiosClient';
import { AI_PATH } from './path';
import { IScoreAIWordParams, IVocabScore } from './types';

export const scoreAIWordAPI = async (
    params: IScoreAIWordParams,
): Promise<IVocabScore> => {
    const url = AI_PATH.WORDS;
    const response = await axiosInstanceAI.post(url, params, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
