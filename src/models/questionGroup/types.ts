import { IBaseObject, IdType } from '../base';
import { IQuestion } from '../question';
export interface IQuestionGroup extends IBaseObject {
    lessonId: IdType;
    title: string;
    content: string;
    description: string;
    mediaSegmentFrom: string;
    isEmbeddedQuestions?: boolean | null;
    isShuffle?: boolean | null;
    zOrder?: number | null;
    questions: IQuestion[];
}
