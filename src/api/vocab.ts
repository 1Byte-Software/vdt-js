import { RawAxiosRequestHeaders } from 'axios';
import {
  ICreateVocabPayload,
  ICreateVocabUserPayload,
  IGetExactlyVocabPath,
  IGetVocabParams,
  IGetVocabUserParams,
  IListResponseVDT,
  IUpdateVocabUserPath,
  IVocab,
  IVocabUser,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'vocabs';
const REST_VOCAB_USER = 'vocab-users';
const BY_VOCAB = 'by-vocab';

export const getVocabAPI = async (
  params: IGetVocabParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IVocab>> => {
  const url = `${REST}`;

  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const createVocabAPI = async (
  payload: ICreateVocabPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IVocab> => {
  const url = `${REST}`;

  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const getVocabUserAPI = async (
  params: IGetVocabUserParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IVocabUser>> => {
  const url = `${REST_VOCAB_USER}`;
  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const createVocabUserAPI = async (
  payload: ICreateVocabUserPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_VOCAB_USER}`;

  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const updateVocabUserAPI = async (
  path: IUpdateVocabUserPath,
  payload: ICreateVocabUserPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { vocabUserId } = path;
  const url = `${REST_VOCAB_USER}/${vocabUserId}`;

  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const deleteVocabUserAPI = async (
  path: IUpdateVocabUserPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { vocabUserId } = path;
  const url = `${REST_VOCAB_USER}/${vocabUserId}`;

  return await remove(url, userHeaders);
};

export const getExactlyVocab = async (
  path: IGetExactlyVocabPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IVocab> => {
  const { vocab } = path;
  const url = `${REST}/${BY_VOCAB}/${vocab}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};
