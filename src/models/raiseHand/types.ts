import { IUser, IdType as JfwIdType } from '@jframework/jfw-js';
import { IBaseObject, IdType } from '../base';
export interface IRaiseHand extends IBaseObject {
  lessonId: IdType;
  categoryId: IdType;
  referenceId: IdType;
  userRequest: JfwIdType;

  user?: IUser;

  categoryCode: string;

  content: string | null;
  discussionStatusEnum: string;
  dateRequest: string;
  link?: string;

  zorder: number;
}

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

export interface IGetRaiseHandParams {
  userId: JfwIdType;

  pageNumber: number;
  pageSize: number;
  type: string;
}
