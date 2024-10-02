import { DateType, IdType as JfwIdType } from 'jfw-js';
import { IdType } from '../types';
import { ISpeechGenerated } from './answer';

export interface IGetTestedCountPath {
  id: IdType;
}
export interface IGetTestedListPath {
  lessonId: IdType;
}
export interface ITested {
  description: string;
  examDate: DateType;
  id: IdType;
  lessonId: IdType;
  recordTime: string;
  userId: JfwIdType;
}
export interface IDeleteTestedPath {
  id: IdType;
}
export interface ISendTestedPayload {
  examDate: string;
  description: string;
  lessonId: IdType;
  userId: JfwIdType;
}
export interface ICountAIPath {
  userId?: JfwIdType;
}
export interface ICountAIParams {
  dateFrom: string;
  dateTo: string;
  codeSkill?: string;
}
export interface IAIScoringPayload {
  audioUrl: string;
  transcription: string;
  questionId?: IdType;
}
export interface IAIComponentScore {
  name: string;
  score: number;
}
export interface IAIScore {
  components: IAIComponentScore[];
  words: ISpeechGenerated[];
}
export interface ISystemScore {
  systemName: string;
  quantity: string;
}
// For vocab
export interface IScoringVocabPayload {
  audioUrl: string;
  refText: string;
  isSaveToDatabase: boolean;
}
export interface IVocabScore {
  words: ISpeechGenerated[];
  overall: number;
  pronunciation: number;
  isCorrectStress: boolean;
}
// ---
