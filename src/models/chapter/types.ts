import { IPageable, ISortable } from '@jframeworks/jfw-js';
import { IBaseObject, IdType } from '../base';
import { ILesson } from '../lesson';

export interface IChapter extends IBaseObject {
  /**
   * @deprecated Use questionTypeId instead
   */
  categoryId: IdType;
  questionTypeId: IdType;

  name: string;
  description: string;
  duration: number;

  status: string;
  statusValue: string;
  lessons: ILesson[] | null;
}

export interface IQueryChapterParams extends IPageable, ISortable {
  name?: string;
  status?: string;

  /**
   * @deprecated Use questionTypeId instead
   */
  categoryId?: number;
  questionTypeId?: IdType;
}

export interface IChapterForm {
  id?: IdType;
  /**
   * @deprecated Use questionTypeId instead
   */
  categoryId?: IdType;
  questionTypeId: IdType;

  name: string;
  // description: string;
  // duration: number;
  // orderBookChapter: number;
  status: string;
  lessons: ILesson[];
}

export interface ILessonFormOfChapter {
  lessonId?: IdType;
  zOrder?: number;
}

export interface IAddLessonsIntoChapterParams {
  chapterId: IdType;
  lessonIds: ILessonFormOfChapter[];
}

export interface IEditLessonOfChapterParams
  extends IAddLessonsIntoChapterParams {}
