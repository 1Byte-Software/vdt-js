import { IBaseObject, IdType } from '../base';

export interface IQuestionType extends IBaseObject {
    certificationId: IdType;

    code: string;
    parentCode: string | null;

    name: string;
    description: string | null;
    links: string | null;
    tags: string | null;
    zOrder: number | null;
}

export interface IQuestionTypeForm extends Partial<IQuestionType> {}

export interface IGetQuestionTypesParams {}
