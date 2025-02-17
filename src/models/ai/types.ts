import { ISpeechGenerated } from '../pte';

export interface IScoreAIWordParams {
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
