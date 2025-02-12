import { IMedia } from 'jfw-js';
import { IBaseObject } from '../interfaces(Will_Delete)';
import { IdType } from '../types(Will_Delete)';;
import { GROUP_USER_RESPONSE_TYPE, USER_RESPONSE_TYPE } from './constants';

export interface IQuestion extends IBaseObject {
  code: string;
  description: string | null;
  explanation: string;
  name: string;
  zOrder: number;
  questionOptions: IQuestionOption[];
  questionSolutions: IQuestionSolution[];
  userResponseType: USER_RESPONSE_TYPE;
  medias?: IMedia[];
}

export interface IQuestionSolution extends IBaseObject {
  explanation: string | null;
  valueMedia: string | null;
  valueText: string;
}

export interface IQuestionOption {
  code: string;
  description: string | null;
  id: IdType;
  name: string;
  zOrder?: number;
}

export interface IDeleteOptionByIdParams {
  questionId: IdType;
  optionId: IdType;
}

export interface IDeleteSolutionByIdParams {
  questionId: IdType;
  solutionId: IdType;
}

export type UserResponseTypeGroup = {
  key: GROUP_USER_RESPONSE_TYPE;
  items: UserResponseTypeItem[];
};

export type UserResponseTypeItem = {
  type: USER_RESPONSE_TYPE;
  scope: SCOPE_USER_RESPONSE_TYPE;
  icon: string;
  disabled?: boolean;
};

export enum SCOPE_USER_RESPONSE_TYPE {
  question = 'question',
  questionGroup = 'questionGroup',
}
