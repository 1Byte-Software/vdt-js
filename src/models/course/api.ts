import { get, post, put, remove } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/common';
import { RawAxiosRequestHeaders } from 'axios';
import { IPaginationParams } from 'jfw-js';
import { IListResponseVDT } from '../base';
import { COURSE_PATH } from './path';
import {
  ICourse,
  ICourseUser,
  ICreateCourseUserParams,
  IDashboardCourse,
  IDeleteCourseUserParams,
  IEditCourseRolePath,
  IEditCourseRolePayload,
  IGetCoursesAllParams,
  IGetCoursesOfUser,
  IGetListCoursesParams,
  IGetTimetableParams,
  ITimetable,
  IUpdateCourseUserParams,
} from './types';

const REST = 'v1/courses';
const REST_USER = 'v1/course-users';
const REST_CLASS = 'classes';
const SEARCH = 'search';
const COURSE = 'courses';
const LEARNER = 'learners';

export const geCourseAllAPI = async (
  params: IGetCoursesAllParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IDashboardCourse> => {
  const url = COURSE_PATH.ALL;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};

export const createCourseUserAPI = async (
  payload: ICreateCourseUserParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = COURSE_PATH.V1.COURSE_USER.CREATE;
  const response = await post(url, payload, null, userHeaders);

  return response.data;
};

export const updateCourseUserAPI = async (
  params: IUpdateCourseUserParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const url = COURSE_PATH.V1.COURSE_USER.UPDATE;
  const response = await put(url, null, { params }, userHeaders);

  return response.data;
};

export const deleteCourseUserAPI = async (
  params: IDeleteCourseUserParams,
  userHeaders?: RawAxiosRequestHeaders,
) => {
  const { userId, courseCode } = params;
  const url = generatePath(COURSE_PATH.V1.COURSE_USER.DELETE, {
    courseCode,
    userId,
  });
  const response = await remove(url, userHeaders);

  return response.data;
};

export const getListCoursesAPI = async (
  params?: IGetListCoursesParams,
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
  params?: IGetCoursesOfUser,
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
  code: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICourse> => {
  const url = `${REST}/${code}`;

  const response = await get(url, null, userHeaders);

  return response.data;
};

export const getListUsersOfCourseAPI = async (
  code: string,
  params?: IPaginationParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<ICourseUser>> => {
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

export const getTimetableAPI = async (
  params?: IGetTimetableParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ITimetable> => {
  const url = `${REST_CLASS}`;
  const response = await get(url, { params }, userHeaders);

  return response.data;
};
