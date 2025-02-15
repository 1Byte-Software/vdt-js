export interface IPteSpeaking {
  components: IAIComponentScore[];
  words: ISpeechGenerated[];
}

export interface IAIComponentScore {
  name: string;
  score: number;
}
export interface ISpeechGenerated {
  word: string;
  label: string;
  phonemes?: IPhoneme[];
  phonics?: IPhonic[];
  pronunciation: number;
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
