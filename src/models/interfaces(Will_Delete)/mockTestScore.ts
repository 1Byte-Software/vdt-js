import { DateType } from 'jfw-js';
import { IdType } from '../base';;
import { ILesson } from '../lesson';
import { IUserScoreAnswer } from '../userScore';

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
  resultAnswerUser: IUserScoreAnswer | null;
}
