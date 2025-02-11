import { get } from '@/utils/axiosHelper';
import { RawAxiosRequestHeaders } from 'axios';
import { IGetQuestionTypesParams, IQuestionType } from './types';

const REST = 'question-types';

export const getQuestionTypesAPI = async (
  params?: IGetQuestionTypesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionType[]> => {
  const url = `v1/${REST}`;
  const response = await get(url, { params }, userHeaders);
  return response.data;
};
