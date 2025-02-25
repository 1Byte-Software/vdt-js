import { post } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/path';
import { RawAxiosRequestHeaders } from 'axios';
import { PTE_PATH } from './path';
import { IPteSpeaking } from './types';

export const scorePTESpeakingAPI = async (
  payload: FormData,
  questionTypeCode: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IPteSpeaking> => {
  const url = generatePath(PTE_PATH.SCORE, {
    questionTypeCode,
  });
  const response = await post(
    url,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
    userHeaders,
  );
  return response.data;
};
