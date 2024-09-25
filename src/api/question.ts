import { RawAxiosRequestHeaders } from 'axios';
import {
  IDeleteOptionByIdParams,
  IDeleteSolutionByIdParams,
  IdType,
  IInnerLesson,
  ILessonGroup,
} from '../models';
import { post, put, remove } from '../utils/axiosHelper';
import { formatStringByObj } from '../utils/common';

/* ========================================= */
const OBJECT = 'questions';

const UPDATE_QUESTION_BY_ID = `${OBJECT}/{id}`;
const DELETE_QUESTION_BY_ID = `${OBJECT}/{id}`;
const CREATE_QUESTION_BY_QUESTION_GROUP_PATH = `${OBJECT}/{questionGroupId}`;

const DELETE_OPTION_BY_ID = `${OBJECT}/{questionId}/options/{optionId}`;
const DELETE_SOLUTION_BY_ID = `${OBJECT}/{questionId}/solutions/{solutionId}`;

/* ========================================= */

export const createQuestionByQuestionGroupAPI = async (
  questionGroupId: IdType,
  questions: IInnerLesson[],
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILessonGroup> => {
  const url = formatStringByObj(CREATE_QUESTION_BY_QUESTION_GROUP_PATH, {
    questionGroupId,
  });
  const response = await post(url, questions, null, userHeaders);

  return response.data;
};

export const updateQuestionByIdAPI = async (
  id: IdType,
  question: IInnerLesson,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILessonGroup> => {
  const url = formatStringByObj(UPDATE_QUESTION_BY_ID, { id });
  const response = await put(url, question, null, userHeaders);

  return response.data;
};

export const deleteQuestionByIdAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const url = formatStringByObj(DELETE_QUESTION_BY_ID, { id });
  const response = await remove(url, userHeaders);

  return response.data;
};

export const deleteSolutionByIdAPI = async (
  { solutionId, questionId }: IDeleteSolutionByIdParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const url = formatStringByObj(DELETE_SOLUTION_BY_ID, {
    solutionId,
    questionId,
  });
  const response = await remove(url, userHeaders);

  return response.data;
};

export const deleteOptionByIdAPI = async (
  { optionId, questionId }: IDeleteOptionByIdParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<boolean> => {
  const url = formatStringByObj(DELETE_OPTION_BY_ID, { optionId, questionId });
  const response = await remove(url, userHeaders);

  return response.data;
};
