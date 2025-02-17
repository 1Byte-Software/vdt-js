import { IUser, IdType as JfwIdType } from 'jfw-js';
import { IdType, IPageable, ISortable } from '../base';

export interface IQueryClassUserParams extends IPageable, ISortable {
  classId?: IdType;

  startDate: string;
  endDate: string;
}

export interface IClassUser extends IUser {
  classId: number;
  userStatus: string;
  user: IUser;
}

export interface ICreateClassUserParams {
  userId: JfwIdType;
  classId: IdType;

  status: string;
}

export interface IUpdateClassUserParams {
  status: string;
  description: string;
}
