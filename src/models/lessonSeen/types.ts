import { IdType } from '../base';
import { DateType, IdType as JfwIdType } from '@jframeworks/jfw-js';

export interface ILessonSeen {
  description: string;
  examDate: DateType;
  id: IdType;
  lessonId: IdType;
  recordTime: string;
  userId: JfwIdType;
}

export interface IGetLessonSeenByUserParams {
  lessonId: IdType;
  userId: JfwIdType;
}

export interface ICreateLessonSeenParams {
  lessonId: IdType;
  userId: JfwIdType;

  examDate: string;
  description: string;
}
