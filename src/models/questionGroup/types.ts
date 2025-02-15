import { IBaseObject, IdType } from '../base';
import { IQuestion } from '../question';
export interface IQuestionGroup extends IBaseObject {
  lessonId?: IdType;
  content?: string;
  description?: string | null;

  /**
   * @description mark this question as embedded question
   * @default false
   */
  isEmbeddedQuestions: boolean;

  /**
   * @default false
   */
  isShuffle: boolean;
  questions: IQuestion[];
  title?: string | null;
  mediaSegmentFrom?: '';
  zOrder?: number;
}
