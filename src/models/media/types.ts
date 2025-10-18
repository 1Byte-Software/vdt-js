import { IdType } from '../base';
import { MediaStatus } from './constants';

export interface IMediaSaveListParams {
    lessonId: IdType;
    // #REFACTOR_VDT
    medias: unknown[];
    type: string;
}

export interface IMedia {
    cdnLink: string;
    description: string;
    status: MediaStatus;
    id?: IdType;
    mimeType: string;
    relativePath: string;
}
