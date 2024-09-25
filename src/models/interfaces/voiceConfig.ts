import { DateType } from 'jfw-js';

export interface IVoiceConfig {
  authCode: string;
  createdBy: number;
  createdDate: DateType;
  description: string;
  id: number;
  isHuman: boolean;
  modifiedBy: number;
  modifiedDate: DateType;
  pitch: number;
  speed: number;
  status: string;
  voiceLanguage: string;
  voiceName: string;
  zOrder: number;
  _createdBy: any;
  _id: string;
  _modifiedBy: any;
}
