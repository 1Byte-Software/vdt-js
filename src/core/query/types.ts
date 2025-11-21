import { JFWError } from '@jframework/jfw-js';
import { HttpStatusCode } from 'axios';
import { DateType, IdType } from '../../models';

//#region Query params types
export interface ICreatedDateFilter {
    /**
     * The created date from.
     *
     * @remarks date-time
     */
    createdDateFrom?: DateType;

    /**
     * The created date to.
     *
     * @remarks date-time
     */
    createdDateTo?: DateType;
}

export interface JFWBaseFilter {
    modifiedUserBy?: IdType;
    modifiedDateFrom?: DateType;
    modifiedDateTo?: DateType;
    createdUserBy?: IdType;
    createdDateFrom?: DateType;
    createdDateTo?: DateType;

    limit?: number;
}
//#endregion

//#region Query response types
export interface HttpResponse<T = unknown> {
    /**
     * @readonly
     */
    success: boolean;

    /**
     * @remarks int32
     * @readonly
     */
    statusCode: HttpStatusCode;

    /**
     * @readonly
     */
    message: string;

    /**
     * @readonly
     */
    errors: JFWError[];

    /**
     * @readonly
     */
    data: T | null;
}

export interface ListData<T = unknown> {
    items: T[];

    /**
     * @remarks int32
     */
    totalItems: number;

    /**
     * @remarks int32
     */
    pageNumber: number;

    /**
     * @remarks int32
     */
    pageSize: number;
}

export type HttpResponseList<T = unknown, U = {}> = HttpResponse<
    ListData<T> & U
>;
//#endregion
