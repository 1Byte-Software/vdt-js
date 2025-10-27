import { IBaseObject, IdType } from '../base';
import { IMedia } from '../media';
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
    medias: IMedia[];
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
    questionOptionId: IdType;
}

export interface IDeleteSolutionByIdParams {
    questionId: IdType;
    questionSolutionId: IdType;
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

export interface ICreateQuestionByQuestionGroupParams {
    questionGroupId: IdType;
    questions: IQuestion[];
}
