import { DateType, IdType as IdTypeJfw } from 'jfw-js';
import { IdType } from '../base';

export interface IBaseObject {
  id: IdType;

  createdBy: IdTypeJfw;
  createdDate: DateType;
  modifiedBy: IdTypeJfw;
  modifiedDate: DateType;
}

export interface IById {
  id: IdType;
}

export interface IByCode {
  code: string;
}

export interface IPageable {
  pageSize?: number;
  pageNumber?: number;
}

export interface ISortable {
  sortDataField?: string;
  sortOrder?: string;
}
