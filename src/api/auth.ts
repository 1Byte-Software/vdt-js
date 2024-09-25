import { RawAxiosRequestHeaders } from 'axios';
import { IGetTokenPayload, ITokenResponse } from '../models';
import { post } from '../utils/axiosHelper';

const REST_TOKEN = 'token';
const REFRESH_TOKEN = `${REST_TOKEN}/refresh-token`;

export const getToken = async (
  payload: IGetTokenPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ITokenResponse> => {
  const url = `${REST_TOKEN}`;
  const response = await post(url, payload, null, userHeaders);
  return response.data;
};

export const refreshTokenAPI = async (userHeaders?: RawAxiosRequestHeaders) => {
  const url = `${REFRESH_TOKEN}`;
  const response = await post(url, null, null, userHeaders);
  return response.data;
};
