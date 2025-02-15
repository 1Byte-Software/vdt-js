import { IPagination } from 'jfw-js';

export type IdType = number;

export interface IListResponseVDT<T> {
  contents: T[];
  pagination: IPagination | null;
}
export interface IResponse<T> {
  statusCode?: number;
  data: T | null;
}

export interface IError {
  code: string | null;
  description: string | null;
  httpCode: number;
  message: string;
  path: string | null;
}
