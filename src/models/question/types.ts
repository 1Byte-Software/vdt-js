import { IBaseObject, IdType } from '../base';
import { IMedia } from '../media';
import { IQuestionType } from '../questionType';
import { GROUP_USER_RESPONSE_TYPE, USER_RESPONSE_TYPE } from './constants';

export interface IQuestion extends IBaseObject {
    questionGroupId?: IdType | null;
    code: string;
    name: string;
    description: string;
    explanation: string;
    lessonSourceMediaLink: string;
    lessonSourceImageLink: string;
    duration?: number | null;
    medias: IMedia[];
    zOrder: number;
    userResponseType: USER_RESPONSE_TYPE;

    isShuffleOptions?: boolean | null;
    questionType: IQuestionType;
    questionOptions: IQuestionOption[];
    questionSolutions: IQuestionSolution[];
}

export interface IQuestionSolution {
    id?: IdType | null;
    questionId?: IdType | null;
    valueText: string;
    valueMedia?: string | null;
    explanation?: string | null;
    description?: string | null;
}

export interface IQuestionOption {
    id?: IdType | null;
    questionId?: IdType | null;
    code: string;
    name?: string | null;
    description?: string | null;
    zOrder?: number | null;
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
    icon: any;
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
