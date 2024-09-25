import { RawAxiosRequestHeaders } from 'axios';
import {
  IAssignTeacherPath,
  ICountRaiseHandParams,
  ICountRaiseHandResponse,
  IGetRaiseHandParams,
  IListResponseVDT,
  IRaiseHand,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const RAISE_HAND = 'raise-hands';
const REST_DISCUSSION = 'discussions';
const REST = `${REST_DISCUSSION}/${RAISE_HAND}`;
const COUNT_RAISE_HAND = 'raise-hand/count';
const QUEUE = 'queue';
const DONE = 'done';
const SUPPORTING = 'supporting';
const REJECTED = 'rejected';

export const countRaiseHandAPI = async (
  params: ICountRaiseHandParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICountRaiseHandResponse> => {
  const url = `${REST_DISCUSSION}/${COUNT_RAISE_HAND}`;

  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const createRaiseHandAPI = async (
  payload: FormData,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${QUEUE}`;

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

export const createRaiseHandFeedbackAPI = async (
  payload: FormData,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST}/${DONE}`;

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

export const assignTeacherAPI = async (
  path: IAssignTeacherPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${SUPPORTING}/${id}`;

  return await put(url, null, null, userHeaders);
};

export const rejectRaiseHandAPI = async (
  path: IAssignTeacherPath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST}/${REJECTED}/${id}`;

  return await remove(url, userHeaders);
};

export const getRaiseHandAPI = async (
  params: IGetRaiseHandParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IRaiseHand>> => {
  const url = `${REST_DISCUSSION}/${RAISE_HAND}`;
  const response = await get(url, { params }, userHeaders);
  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};
