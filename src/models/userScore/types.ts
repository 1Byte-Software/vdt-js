import { DateType, IIssue, IUser, IdType as JfwIdType } from '@jframework/jfw-js';
import { IdType, IPageable } from '../base';
import { SCORE_COMPONENTS, TYPE_QUERY } from './constants';

export interface IGetCountPracticeAIScoreParams {
  userId?: JfwIdType;
  dateFrom: string;
  dateTo: string;
  codeSkill?: string;
}

export interface IGetUserScoreAnswerParams extends IPageable {
  lessonId: IdType;
  responseGroupId?: IdType;
  responseGroupCode?: string;

  typeQuery?: TYPE_QUERY;
  communityIds?: string | number | undefined;
}

export interface IResultOverview {
  maxScore?: number;
  media?: string;
  score?: number;
  showScoreInfo: boolean;
  valueResponses?: string[];
  displayScore?: number;

  // #REFACTOR_VDT
  // medias?: IMedia[];
  // medias?: any[];

  numberDecimalPlace?: number;
}

export interface ILessonResponseUsers {
  id: IdType;
  responseGroupId: IdType;
  responseGroupCode: string;
  resultScores?: IResultScores[];
  valueText: string | null;
  valueMedia: string | null;
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

export interface IScoreDetail {
  component: SCORE_COMPONENTS;
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

export interface IUserScoreAnswer {
  user?: IUser;
  questionResponseUsers: ILessonResponseUsers[];
  resultOverview: IResultOverview;

  issueId: string;
  discussionSubs: IIssue[];
  issue?: IIssue;
  description: string | null;

  status: string;
  createdDate: DateType;
}

export interface ICreateScoreHumanParams {
  responseGroupId: IdType;

  userId: JfwIdType;
  scoringSystemName: string;
  scoringSystemVersion: string;
  questionId: IdType;
  scoreDetails: IScoreHumanDetail[];
  description?: string;
  sourceUrl?: string;
}

export interface IScoreHumanDetail {
  component: string;
  score: number;
  suggestion: string;
}

export interface ISystemScore {
  systemName: string;
  quantity: string;
}

export interface ILessonOfAnswer {
  id: IdType;
  name?: string;
}

export interface IResponseUserValue {
  valueText?: string;
  url?: string;
  timeTaken?: number;
}

export interface IAnswer {
  pathSpeech?: string | null;
  question: ILessonOfAnswer;
  questionResponseUsers: IResponseUserValue[];
}

export interface IScoreAIParams {
  lessonId: IdType;
  responseGroupId: IdType;
}