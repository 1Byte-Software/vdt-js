import { IPaginationParams, ISortParams } from 'jfw-js';
import { IdType } from '../types';
import { IBaseObject } from './common';
import { ILesson } from './lesson';

export interface IGetListChaptersParams extends IPaginationParams, ISortParams {
  name?: string;
  status?: string;
  categoryId?: number;
}
export interface IChapter extends IBaseObject {
  id: IdType;
  name: string;
  description: string;
  duration: number;
  categoryId: IdType;
  // orderBookChapter: number;
  status: string;
  statusValue: string;
  lessons: ILesson[] | null;
}
export interface IChapterForm {
  id?: IdType;
  categoryId?: IdType;
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
export interface IDeleteChapterPath {
  chapterId: IdType;
}
export interface IAddLessonsIntoChapterParams {
  chapterId: IdType;
  lessonIds: ILessonFormOfChapter[];
}
export interface IEditLessonOfChapterParams
  extends IAddLessonsIntoChapterParams {}
