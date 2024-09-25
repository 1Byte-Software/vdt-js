import { RawAxiosRequestHeaders } from 'axios';
import { IdType, ILessonGroup } from '../models';
import { post, put, remove } from '../utils/axiosHelper';
import { formatStringByObj } from '../utils/common';

/* ========================================= */
const OBJECT = 'question-groups';

const CREATE_QUESTION_GROUP_PATH = `${OBJECT}/{lessonId}`;
const UPDATE_QUESTION_GROUP_PATH = `${OBJECT}/{id}`;
const DELETE_QUESTION_GROUP_PATH = `${OBJECT}/{id}`;
/* ========================================= */

export const createQuestionGroupAPI = async (
  lessonId: IdType,
  questionGroupData: ILessonGroup,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILessonGroup> => {
  const url = formatStringByObj(CREATE_QUESTION_GROUP_PATH, { lessonId });
  const response = await post(url, questionGroupData, null, userHeaders);

  return response.data;
};

export const updateQuestionGroupAPI = async (
  id: IdType,
  questionGroupData: ILessonGroup,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILessonGroup> => {
  const url = formatStringByObj(UPDATE_QUESTION_GROUP_PATH, { id });
  const response = await put(url, questionGroupData, null, userHeaders);

  return response.data;
};

export const deleteQuestionGroupAPI = async (
  id: IdType,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ILessonGroup> => {
  const url = formatStringByObj(DELETE_QUESTION_GROUP_PATH, { id });
  const response = await remove(url, userHeaders);

  return response.data;
};
