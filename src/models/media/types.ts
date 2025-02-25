import { IMedia } from '@jframeworks/jfw-js';
import { IdType } from '../base';

export interface IMediaSaveListParams {
  lessonId: IdType;
  medias: IMedia[];
  type: string;
}
