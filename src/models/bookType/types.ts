import { IPageable } from '@jframework/jfw-js';
import { IBaseObject, IdType, ISortable } from '../base';

export interface IBookType extends IBaseObject {
    parentBookTypeId: number | null;
    name: string;
    description: string | null;
    zOrder: number;
    status: 'Active' | 'Inactive' | string;
    items: IBookType[];
}
