import { DateType, IPaginationParams, IdType as JfwIdType } from 'jfw-js';
import { IdType, Nullable } from '../types';
import { IAnswer } from './answer';
import { IChapter } from './chapter';

export interface IGetListBooksParams {
  name?: string;
  pageNumber: number;
  pageSize: number;
  status?: string;
  sortBy: string;
  type?: string;
  categoryId?: IdType;
}
export interface IBook {
  id: IdType;
  type?: Nullable<string>;
  isFree: boolean;
  name: string;
  chapters?: IChapter[];
  description?: string;
  code: string;
  status: string;
  statusValue: string;
  createdBy?: IdType;
  createdDate: DateType;
  modifiedBy?: IdType;
  modifiedDate: DateType;
  zOrder?: number;
}

export interface IBookForm {
  code?: string;
  id?: IdType;
  type?: Nullable<string>;
  name?: string;
  chapters?: IChapter[];
  status: string;
  isFree?: boolean;
}
export interface IGetBookByIdPath {
  bookId: IdType;
}
export interface IDeviceTest {
  icon?: string;
  status: boolean;
  label?: string;
  text: string;
}
export interface IGetChapterByIdPath {
  chapterId: IdType;
}
export interface ICreateBookExamPath {
  userId: JfwIdType;
  bookId: IdType;
}
export interface IGetListBooksExamPath {
  userId: JfwIdType;
}
export interface IGetListBooksExamParams extends IPaginationParams {}
export interface IBookExam {
  id: IdType;
  book: IBook;
  status: string;
  name: string;
  modifiedDate: DateType;
  code: string;
}
export interface ISubmitPayload {
  bookExamRecordId: IdType;
  chapterId: IdType;
  lessonId: IdType;
  userId: JfwIdType;
}
export interface ILessonUserScore {
  id: IdType;
}
export interface IUserScoresSubmit {
  question: ILessonUserScore;
  pathSpeech: string;
}
export interface ISubmitSpeakingPayload extends ISubmitPayload {
  userScores: IUserScoresSubmit[];
}
export interface ISubmitOtherPayload extends ISubmitPayload {
  userScores: IAnswer | IAnswer[];
}
export interface IDeleteBookExamPath {
  bookExamId: IdType;
}
export interface IDeleteBookPath {
  bookId: IdType;
}
export interface IGetContinueExamParams {
  bookExamRecordId: IdType;
  userId: JfwIdType;
}
export interface IContinueExam {
  chapterId: IdType;
  lessonId: IdType;
}
export interface IFinishMockTestPath {
  bookExamId: IdType;
}
export interface ICheckResultMockTestPath {
  bookExamId: IdType;
  userId: JfwIdType;
}
export interface IResultOverall {
  id: IdType;
  speaking: number;
  writing: number;
  reading: number;
  listening: number;
  grammar: number;
  pronunciation: number;
  oralFluency: number;
  spelling: number;
  vocabulary: number;
  writtenDiscourse: number;
  overallScore: number;
  book: IBook;
  modifiedDate: DateType;
}
export interface IGetScoreReportPath {
  bookExamId: IdType;
}
export interface IScoreReport {
  actualListening: number | null;
  actualReading: number | null;
  actualSpeaking: number | null;
  actualWriting: number | null;
  categoryCode: string;
  correctRateListening: number | null;
  correctRateReading: number | null;
  correctRateSpeaking: number | null;
  correctRateWriting: number | null;
  createdBy: IdType | null;
  createdDate: DateType;
  id: IdType | null;
  maxScoreListening: number | null;
  maxScoreReading: number | null;
  maxScoreSpeaking: number | null;
  maxScoreWriting: number | null;
  modifiedBy: number | null;
  modifiedDate: DateType;
  scoreListening: number | null;
  scoreReading: number | null;
  scoreSpeaking: number | null;
  scoreWriting: number | null;
  skillName: string | null;
  contributeListening: string | null;
  contributeReading: string | null;
  contributeSpeaking: string | null;
  contributeWriting: string | null;
}
export interface ICheckCanStartParams {
  userId: IdType;
}
export interface IGetUserResultPath {
  bookExamRecordId: IdType;
  userId: JfwIdType;
  categoryId: IdType;
}
export interface IChapterFormOfBook {
  chapterId?: IdType;
  zOrder?: number;
}
export interface IAddChaptersIntoBookParams {
  bookId: IdType;
  chapterIds: IChapterFormOfBook[];
}

export interface IEditChaptersOfBookParams extends IAddChaptersIntoBookParams {}
