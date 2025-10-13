import { IdType as IdTypeJfw } from '@jframework/jfw-js';

export type IdType = number;

export type DateType = Date | string;

export interface IBaseObject {
    id: IdType;

    createdBy: IdTypeJfw;
    createdDate: DateType;
    modifiedBy: IdTypeJfw;
    modifiedDate: DateType;
}

export interface IPageable {
    pageSize?: number;
    pageNumber?: number;
}

export interface ISortable {
    sortDataField?: string;
    sortOrder?: string;
}

export interface IListResponseVDT<T> {
    contents: T[];
    pagination: IPageable | null;
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
