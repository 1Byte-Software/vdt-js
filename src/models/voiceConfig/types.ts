import { IBaseObject } from '../interfaces(Will_Delete)';

export interface IVoiceConfig extends IBaseObject {
  authCode: string;

  voiceLanguage: string;
  voiceName: string;
  description: string;
  isHuman: boolean;
  pitch: number;
  speed: number;
  
  zOrder: number;
  status: string;
}
