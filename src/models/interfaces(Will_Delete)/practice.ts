import { IdType } from '../base';
;

export interface IAIScoringPayload {
  audioUrl: string;
  transcription: string;
  questionId?: IdType;
}
// export interface IAIComponentScore {
//   name: string;
//   score: number;
// }
// export interface IAIScore {
//   components: IAIComponentScore[];
//   words: ISpeechGenerated[];
// }
// export interface ISystemScore {
//   systemName: string;
//   quantity: string;
// }
// For vocab

// export interface IVocabScore {
//   words: ISpeechGenerated[];
//   overall: number;
//   pronunciation: number;
//   isCorrectStress: boolean;
// }
// ---
