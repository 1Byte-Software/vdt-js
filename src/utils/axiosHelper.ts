import { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { axiosInstanceVdt } from '../config/axios/axiosClient';

export const get = (
  url: string,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceVdt.get(url, config);
};

export const post = (
  url: string,
  payload?: any,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceVdt.post(url, payload, config);
};

export const put = (
  url: string,
  payload?: any,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceVdt.put(url, payload, config);
};

export const patch = (
  url: string,
  payload?: any,
  configArg: AxiosRequestConfig = {},
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const config: AxiosRequestConfig = { ...configArg };

  if (userHeaders) {
    config.headers = userHeaders;
  }

  return axiosInstanceVdt.patch(url, payload, config);
};

export const remove = (
  url: string,
  userHeaders?: RawAxiosRequestHeaders,
  configArg: AxiosRequestConfig = {},
) => {
  const config = {
    ...configArg,
    headers: userHeaders,
  };

  return axiosInstanceVdt.delete(url, config);
};
