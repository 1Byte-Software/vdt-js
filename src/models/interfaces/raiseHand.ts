import { IUser, IdType as JfwIdType } from 'jfw-js';
import { IdType } from '../types';
import { IBaseObject } from './common';

export interface ICountRaiseHandParams {
  userId: JfwIdType;
  dateFrom: string;
}
export interface ICountRaiseHand {
  userId: JfwIdType;
}
export interface ICountRaiseHandResponse {
  [key: string]: ICountRaiseHand[];
}
export interface IAssignTeacherPath {
  id: string;
}
export interface IRaiseHand extends IBaseObject {
  referenceId: IdType;
  content: string | null;
  discussionStatusEnum: string;
  categoryId: IdType;
  categoryCode: string;
  lessonId: IdType;
  zorder: number;
  dateRequest: string;
  userRequest: JfwIdType;
  user?: IUser;
  link?: string;
}
export interface IGetRaiseHandParams {
  userId: JfwIdType;
  pageNumber: number;
  pageSize: number;
  type: string;
}
