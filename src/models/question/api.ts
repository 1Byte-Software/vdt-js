import {
  ICreateQuestionByQuestionGroupParams,
  IDeleteOptionByIdParams,
  IDeleteSolutionByIdParams,
  IQuestion,
  IQuestionGroup,
} from '@/models';
import { post, put, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/path';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType } from '../base';
import { QUESTION_PATH } from './path';

export const createQuestionByQuestionGroupAPI = async (
  params: ICreateQuestionByQuestionGroupParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionGroup> => {
  const { questionGroupId, questions } = params;
  const url = generatePath(QUESTION_PATH.CREATE_BY_QUESTION_GROUP_ID, {
    questionGroupId,
  });
  const response = await post(url, questions, null, userHeaders);

  return response.data;
};

export const updateQuestionByIdAPI = async (
  id: IdType,
  question: IQuestion,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IQuestionGroup> => {
  const url = generatePath(QUESTION_PATH.UPDATE_BY_ID, {
    id,
  });

  const response = await put(url, question, null, userHeaders);

  return response.data;
};

export const deleteQuestionByIdAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const url = generatePath(QUESTION_PATH.DELETE_BY_ID, { id });
  const response = await remove(url, userHeaders);

  return response.data;
};

export const deleteSolutionByIdAPI = async (
  params: IDeleteSolutionByIdParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const { questionId, questionSolutionId } = params;
  const url = generatePath(QUESTION_PATH.SOLUTION.DELETE_BY_ID, {
    questionId,
    questionSolutionId,
  });

  const response = await remove(url, userHeaders);

  return response.data;
};

export const deleteOptionByIdAPI = async (
  params: IDeleteOptionByIdParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const { questionOptionId, questionId } = params;

  const url = generatePath(QUESTION_PATH.OPTION.DELETE_BY_ID, {
    questionId,
    questionOptionId,
  });

  const response = await remove(url, userHeaders);

  return response.data;
};
