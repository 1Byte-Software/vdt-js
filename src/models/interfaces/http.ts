import { IPagination } from 'jfw-js';

export interface IListResponseVDT<T> {
  contents: T[];
  pagination: IPagination | null;
}
export interface IResponse<T> {
  statusCode?: number;
  data: T | null;
}
