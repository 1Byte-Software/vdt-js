import { RawAxiosRequestHeaders } from 'axios';
import { IResponse, IResponseNotPermission, IById as JfwIById } from 'jfw-js';
import { axiosInstanceAI } from '../config/axios/axiosClient';
import {
  IAddScorePath,
  IAddScorePayload,
  IAIScore,
  IAnswer,
  IAnswerSpeech,
  IAnswerSpeeches,
  ICountAIParams,
  ICountAIPath,
  ICreatePriorityPath,
  IDeleteTestedPath,
  IGetComponentScoreByCodePath,
  IGetTestedCountPath,
  IGetTestedListPath,
  IGetUserAnswerParams,
  IListResponseVDT,
  IScoringVocabPayload,
  ISendTestedPayload,
  ISystemScore,
  ITested,
  IUserAnswer,
  IVocabScore,
} from '../models';
import { get, post, remove } from '../utils/axiosHelper';

const REST_TESTED = 'leaner/tested';
const REST_SCORE = 'scores';
const REST_LESSONS = 'lessons';
const REST_AI_SPEAKING = 'pte/speaking';
const REST_WORD = 'words';
const PRIORITY = 'priorities';
const LESSON = 'lesson';
const AI_SPEECH = 'ai-speech';
const AI_TEXT = 'ai-text';
const COUNT_AI = 'count-practice-ai-score';
const ANSWER = 'answers';
const BY_GROUP_CODE = 'by-response-group-code';
const AI = 'ai';
const HUMAN = 'human';
const SYSTEM_SCORE = 'list-system-score';

export const createPriorityAPI = async (
  path: ICreatePriorityPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { categoryId, lessonId, userId } = path;
  const url = `${REST_LESSONS}/${lessonId}/${PRIORITY}/${categoryId}/${userId}`;

  return await post(url, null, null, userHeaders);
};

export const deletePriorityAPI = async (
  path: ICreatePriorityPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { categoryId, lessonId, userId } = path;
  const url = `${REST_LESSONS}/${lessonId}/${PRIORITY}/${categoryId}/${userId}`;

  return await remove(url, userHeaders);
};

export const getTestedCount = async (
  path: IGetTestedCountPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
  const { id } = path;
  const url = `${REST_TESTED}/${LESSON}/${id}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getTestedList = async (
  path: IGetTestedListPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ITested>> => {
  const { lessonId } = path;
  const url = `${REST_TESTED}/${lessonId}`;
  const response = await get(url, null, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const deleteTestedAPI = async (
  path: IDeleteTestedPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST_TESTED}/${id}`;

  return await remove(url, userHeaders);
};

export const sendTestedAPI = async (
  payload: ISendTestedPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_TESTED}`;

  return await post(url, payload, null, userHeaders);
};

export const submitSpeechAPI = async (
  payload: IAnswerSpeech,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_SCORE}/${AI_SPEECH}`;

  return await post(
    url,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
    userHeaders,
  );
};

export const submitTextAPI = async (
  payload: IAnswer[],
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_SCORE}/${AI_TEXT}`;

  return await post(url, payload, null, userHeaders);
};

export const submitOtherValueAPI = async (
  payload: IAnswer[],
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_SCORE}`;

  return await post(url, payload, null, userHeaders);
};

export const submitAnswerSpeechesAPI = async (
  payload: IAnswerSpeeches[],
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_SCORE}`;

  return await post(url, payload, null, userHeaders);
};

export const countAIAPI = async (
  path: ICountAIPath,
  params: ICountAIParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<number> => {
  const { userId } = path;
  const url = `${REST_SCORE}/${COUNT_AI}/${userId}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const getUserAnswerAPI = async (
  params: IGetUserAnswerParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IUserAnswer>> => {
  const url = `${REST_SCORE}/${ANSWER}`;
  const response = await get(url, { params }, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const deleteUserAnswerAPI = async (
  path: JfwIById,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST_SCORE}/${BY_GROUP_CODE}/${id}`;

  return await remove(url, userHeaders);
};

export const scoringAIAPI = async (
  payload: FormData,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IResponse<boolean> | IResponseNotPermission> => {
  const url = `${REST_SCORE}/${AI}`;

  return await post(
    url,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
    userHeaders,
  );
};

export const scoringAISpeakingAPI = async (
  payload: FormData,
  category: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IAIScore> => {
  const url = `${REST_AI_SPEAKING}/${category}`;
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

export const addScoreAPI = async (
  path: IAddScorePath,
  payload: IAddScorePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { responseGroupId } = path;
  const url = `${REST_SCORE}/${HUMAN}/${responseGroupId}`;

  return await post(url, payload, null, userHeaders);
};

export const scoringVocabAPI = async (
  payload: IScoringVocabPayload,
): Promise<IVocabScore> => {
  const url = `${REST_WORD}`;
  const response = await axiosInstanceAI.post(url, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const getListSystemScoreAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ISystemScore[]> => {
  const url = `${REST_SCORE}/${SYSTEM_SCORE}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getComponentScoreByCodeAPI = async (
  path: IGetComponentScoreByCodePath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IUserAnswer> => {
  const { code } = path;
  const url = `${REST_SCORE}/${BY_GROUP_CODE}/${code}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};
