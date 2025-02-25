import { IQuestionGroup } from '@/models';
import { post, put, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/path';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType } from '../base';
import { QUESTION_GROUP_PATH } from './path';

export const createQuestionGroupAPI = async (
  lessonId: IdType,
  questionGroupData: IQuestionGroup,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionGroup> => {
  const url = generatePath(QUESTION_GROUP_PATH.CREATE, {
    lessonId,
  });
  const response = await post(url, questionGroupData, null, userHeaders);

  return response.data;
};

export const updateQuestionGroupAPI = async (
  id: IdType,
  questionGroupData: IQuestionGroup,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionGroup> => {
  const url = generatePath(QUESTION_GROUP_PATH.UPDATE, { id });
  const response = await put(url, questionGroupData, null, userHeaders);

  return response.data;
};

export const deleteQuestionGroupAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionGroup> => {
  const url = generatePath(QUESTION_GROUP_PATH.DELETE, { id });
  const response = await remove(url, userHeaders);

  return response.data;
};
