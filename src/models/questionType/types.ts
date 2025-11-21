import { IBaseObject, IdType } from '../base';

export interface IQuestionType extends IBaseObject {
    certificationId: IdType;
    parentCode?: string | null;
    code: string;
    name: string;
    description: string;
    links?: string | null;
    tags?: string | null;
    zOrder?: number | null;
}

export interface IQuestionTypeForm extends Partial<IQuestionType> {}

export interface IGetQuestionTypesParams {}
