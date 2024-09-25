import { DateType } from 'jfw-js';
import { IdType } from '../types';

export interface IBaseObject {
  id: IdType;
  createdBy: string;
  createdDate: DateType;
  modifiedBy: string;
  modifiedDate: DateType;
}
export interface IById {
  id: IdType;
}
