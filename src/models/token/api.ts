import { post } from '../../utils/axiosHelper';
import { RawAxiosRequestHeaders } from 'axios';
import { TOKEN_PATH } from './path';
import { IGetTokenPayload, ITokenResponse } from './types';

export const getTokenAPI = async (
  payload: IGetTokenPayload,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ITokenResponse> => {
  const url = TOKEN_PATH.GET;
  const response = await post(url, payload, null, userHeaders);
  return response.data;
};

export const refreshTokenAPI = async (userHeaders?: RawAxiosRequestHeaders) => {
  const url = TOKEN_PATH.REFRESH_TOKEN;
  const response = await post(url, null, null, userHeaders);
  return response.data;
};
