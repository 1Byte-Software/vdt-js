import { DateType, IIssue, IMedia, IUser, IdType as JfwIdType } from 'jfw-js';
import { IdType } from '../types';

export interface ILessonOfAnswer {
  id: IdType;
  name?: string;
}
export interface IResponseUser {
  valueText: string;
  timeTaken?: number;
}
export interface IAnswer {
  question: ILessonOfAnswer;
  questionResponseUsers: IResponseUser[];
}
export interface ILessonDragDrop {
  id: string;
  value: string;
}
export interface IAnswerEmbed {
  id: number;
  value: string;
}
export interface IAnswerHIW {
  id: number;
  value: string;
  isOther?: boolean;
}
export interface ILessonReorder {
  id: number;
  value: string;
  questionId: number;
}
export interface IAnswerSpeech {
  question: number;
  speech: File;
}
export interface IAnswerSpeeches {
  question: {
    id: number;
  };
  questionResponseUsers: {
    url: string;
  }[];
}
export interface IAnswerSpeechesBlob {
  question: {
    id: number;
  };
  questionResponseUsers: {
    blob: Blob | null;
  }[];
}

export interface IGetUserAnswerParams {
  lessonId: number;
  pageNumber: number;
  pageSize: number;
  typeQuery?: string;
  communityIds?: string | number | undefined;
  responseGroupId?: IdType;
  responseGroupCode?: string;
}
export interface IResultOverview {
  maxScore?: number;
  media?: string;
  score?: number;
  showScoreInfo: boolean;
  valueResponses?: string[];
  displayScore?: number;
  medias?: IMedia[];
  numberDecimalPlace?: number;
}
export interface IScoreDetail {
  component: string;
  score: number | string;
  suggestion: string | null;
  description: string | null;
  maxScore?: number;
  status: string;
  privateNotes: string;
  displayScore: number;
  name: string;
}
export interface IAIDetails {
  data: string;
}
export interface IResultScores {
  id: IdType;
  displayScore: number;
  scoreDetails: IScoreDetail[];
  score: number;
  scoringSystemName: string | null;
  scoringSystemVersion: string | null;
  description?: string | null;
  status: string;
  createdDate: DateType;
  sourceUrl?: string;
  responseAIDetails?: IAIDetails[];
}
export interface ILessonResponseUsers {
  id: IdType;
  responseGroupId: IdType;
  responseGroupCode: string;
  resultScores?: IResultScores[];
  valueText: string | null;
  valueMedia: string | null;
}
export interface IUserAnswer {
  createdDate: DateType;
  issueId: string;
  resultOverview: IResultOverview;
  questionResponseUsers: ILessonResponseUsers[];
  discussionSubs: IIssue[];
  status: string;
  user?: IUser;
  description: string | null;
  issue?: IIssue;
}
export interface IScoringAIPayload {
  lessonId: IdType;
  responseGroupId: IdType;
}
export interface IPhoneme {
  value: string;
  pronunciation: number;
}
export interface IPhonic {
  spell: string;
  phoneme: string[];
  overall: number;
}
export interface ISpeechGenerated {
  word: string;
  label: string;
  phonemes?: IPhoneme[];
  phonics?: IPhonic[];
  pronunciation: number;
}
export interface IWFDGenerated {
  value: string;
  label: string;
}
export interface IAddScoreDetail {
  component: string;
  score: number;
  suggestion: string;
}
export interface IAddScorePath {
  responseGroupId: IdType;
}
export interface IAddScorePayload {
  userId: JfwIdType;
  scoringSystemName: string;
  scoringSystemVersion: string;
  questionId: IdType;
  scoreDetails: IAddScoreDetail[];
  description?: string;
  sourceUrl?: string;
}
export interface IGetComponentScoreByCodePath {
  code: string;
}
