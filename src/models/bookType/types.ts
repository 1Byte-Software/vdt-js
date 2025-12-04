import { IBaseObject } from '../base';
import { BookTypeStatus } from './constants';

export interface IBookType extends IBaseObject {
    parentBookTypeId?: number | null;
    name: string;
    description?: string | null;
    zOrder: number;
    status?: BookTypeStatus | null;
    items: IBookType[];
}
