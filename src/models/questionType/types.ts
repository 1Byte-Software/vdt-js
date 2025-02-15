import { IBaseObject } from '../base';

export interface IQuestionType extends IBaseObject {
  code: string | null;
  parentCode: string | null;
  name: string | null;
  description: string | null;
}

export interface IGetQuestionTypesParams {}
