import { IdType as IdTypeJfw } from '@jframework/jfw-js';
import { SortOrder } from '../../core/query/constants';

export type IdType = number;
export type IdHashType = string;

export type DateType = string;

export interface IBaseObject {
    id: IdType;
    _id?: IdHashType | null;

    modifiedDate?: DateType | null;

    modifiedBy?: IdTypeJfw | null;
    _modifiedBy?: IdTypeJfw | null;

    createdDate: DateType;

    createdBy?: IdTypeJfw | null;
    _createdBy?: IdTypeJfw | null;
}

export interface IPageable {
    pageSize?: number;
    pageNumber?: number;
}

export interface ISortable<T extends string = string> {
    /**
     * The sort data field of the data.
     */
    sortDataField?: 'id' | 'created_date' | T;

    /**
     * The sort order of the data.
     */
    sortOrder?: SortOrder;
}

export interface IPagination {
    totalItems: number;
    totalPractices?: number;
    totalPages?: number;
    pageNumber?: number;
    pageSize?: number;
}

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

export type StripCreateFields<T extends IBaseObject> = Omit<
    T,
    keyof IBaseObject
> & {
    createdDate?: IBaseObject['createdDate'];
    createdBy?: IBaseObject['createdBy'];
    _createdBy?: IBaseObject['_createdBy'];
};
export type StripUpdateFields<T extends IBaseObject> = Omit<
    T,
    keyof IBaseObject
> & {
    modifiedDate?: IBaseObject['modifiedDate'];
    modifiedBy?: IBaseObject['modifiedBy'];
    _modifiedBy?: IBaseObject['_modifiedBy'];
};
