import {
    IBaseObject,
    IdType,
    StripCreateFields,
    StripUpdateFields,
} from '../base';
import { IQuestion } from '../question';
export interface IQuestionGroup extends IBaseObject {
    lessonId: IdType;
    title: string;
    content?: string | null;
    description: string;
    mediaSegmentFrom: string;
    isEmbeddedQuestions?: boolean | null;
    isShuffle?: boolean | null;
    zOrder?: number | null;
    questions: IQuestion[];
}

export interface ICreateQuestionGroupParams
    extends StripCreateFields<IQuestionGroup> {}
export interface IUpdateQuestionGroupParams
    extends StripUpdateFields<IQuestionGroup> {}
