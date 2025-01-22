import { IBaseObject } from './common';

export interface IVoiceConfig extends IBaseObject {
  authCode: string;
  description: string;
  isHuman: boolean;
  pitch: number;
  speed: number;
  status: string;
  voiceLanguage: string;
  voiceName: string;
  zOrder: number;
}
