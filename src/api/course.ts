import { RawAxiosRequestHeaders } from 'axios';
import { IPaginationParams } from 'jfw-js';
import {
  IByCode,
  IClassUser,
  ICourse,
  ICourseUser,
  ICourseUserMutatePath,
  ICourseUserMutatePayload,
  IDashboardCourse,
  IEditCourseRolePath,
  IEditCourseRolePayload,
  IGetCoursesOfUser,
  IGetDashboardCoursesParams,
  IGetListCoursesParams,
  IGetTimetableParams,
  IGetUsersJoinClassParams,
  IListResponseVDT,
  IMutateJoinClassPayload,
  ITimetable,
  IUpdateJoinClassPath,
  IUpdateJoinClassPayload,
} from '../models';
import { get, post, put, remove } from '../utils/axiosHelper';

const REST = 'v1/courses';
const REST_USER = 'v1/course-users';
const REST_JOIN = 'class-users';
const REST_CLASS = 'classes';
const ALL = 'all';
const SEARCH = 'search';
const COURSE = 'courses';
const LEARNER = 'learners';

export const getDashboardCoursesAPI = async (
  params: IGetDashboardCoursesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IDashboardCourse> => {
  const url = `${REST}/${ALL}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const createCourseUserAPI = async (
  payload: ICourseUserMutatePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_USER}`;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const editCourseUserAPI = async (
  params: ICourseUserMutatePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_USER}`;
  const response = await put(url, null, { params }, userHeaders);

  return response.data;
};

export const deleteCourseUserAPI = async (
  path: ICourseUserMutatePath,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { userId, courseCode } = path;
  const url = `${REST}/${courseCode}/users/${userId}`;
  const response = await remove(url, userHeaders);

  return response.data;
};

export const getListCoursesAPI = async (
  params: IGetListCoursesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ICourse>> => {
  const url = `${REST}/${SEARCH}`;
  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const getCoursesOfUserAPI = async (
  params: IGetCoursesOfUser,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ICourse>> => {
  const url = `${REST_USER}/${COURSE}`;
  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const getCourseByCodeAPI = async (
  path: IByCode,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICourse> => {
  const { code } = path;
  const url = `${REST}/${code}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListUsersOfCourseAPI = async (
  path: IByCode,
  params: IPaginationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ICourseUser>> => {
  const { code } = path;
  const url = `${REST_USER}/${code}/${LEARNER}`;

  const response = await get(url, { params }, userHeaders);

  const { contents, ...rest } = response.data;

  return {
    contents,
    pagination: rest,
  };
};

export const editCourseRoleAPI = async (
  path: IEditCourseRolePath,
  payload: IEditCourseRolePayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { courseId } = path;
  const url = `${REST_USER}/${courseId}`;
  const response = await put(url, payload, null, userHeaders);

  return response.data;
};

export const getUsersJoinClassAPI = async (
  params: IGetUsersJoinClassParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IClassUser>> => {
  const url = `${REST_JOIN}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const getTimetableAPI = async (
  params: IGetTimetableParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ITimetable> => {
  const url = `${REST_CLASS}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const joinClassAPI = async (
  payload: IMutateJoinClassPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = `${REST_JOIN}`;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const updateJoinClassAPI = async (
  path: IUpdateJoinClassPath,
  payload: IUpdateJoinClassPayload,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { id } = path;
  const url = `${REST_JOIN}/${id}`;
  const response = await put(url, payload, null, userHeaders);

  return response.data;
};
