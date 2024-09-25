import { DateType } from 'jfw-js';
import { IdType } from '../types';
import { IUserAnswer } from './answer';
import { ILesson } from './lesson';

export interface IValueScoringType {
  scoringSystemName: string | null;
  scoringSystemVersion: string | null;
}
export interface IScoringType {
  scoringSystemName: string | null;
  scoringSystemVersion: string | null;
}
export interface IScoreTableRecord {
  createdDate?: DateType;
  overall?: number;
  fluency?: number;
  lexical?: number;
  grammar?: number;
  pronunciation?: number;
  media?: string | number;
}
export interface IUserResult {
  chapterId: IdType;
  lesson: ILesson;
  practiceTime: DateType;
  resultAnswerUser: IUserAnswer | null;
}
