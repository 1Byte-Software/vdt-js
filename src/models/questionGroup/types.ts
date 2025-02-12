import { IBaseObject } from '../interfaces(Will_Delete)';
import { IQuestion } from '../question';
import { IdType } from '../types(Will_Delete)';;

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
