import { get, post, put } from '@/utils/axiosHelper';
import { RawAxiosRequestHeaders } from 'axios';
import { IdType, IListResponseVDT } from '../base';
import { CLASS_USER_PATH } from './path';
import {
  IClassUser,
  ICreateClassUserParams,
  IQueryClassUserParams,
  IUpdateClassUserParams,
} from './types';

const REST = 'class-users';

export const queryClassUserAPI = async (
  params?: IQueryClassUserParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IClassUser>> => {
  const url = CLASS_USER_PATH.QUERY;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const crateClassUserAPI = async (
  payload: ICreateClassUserParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}`;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const updateClassUserAPI = async (
  id: IdType,
  payload: IUpdateClassUserParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${id}`;
  const response = await put(url, payload, null, userHeaders);

  return response.data;
};
