import { IdType } from '../base';

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
  question: ILessonOfAnswer;
  questionResponseUsers: IResponseUserValue[];
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

/**
 * @deprecated Use IAnswer instead
 */
export interface IAnswerSpeech {
  question: {
    id: number;
  };
  questionResponseUsers: {
    url: string;
  };
}

export interface IAnswerSpeechesBlob {
  question: {
    id: number;
  };
  questionResponseUsers: {
    blob: Blob | null;
  }[];
}

export interface IWFDGenerated {
  value: string;
  label: string;
}
