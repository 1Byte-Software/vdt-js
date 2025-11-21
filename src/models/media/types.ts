import { IBaseObject, IdType } from '../base';
import { MediaStatus } from './constants';

export interface IMediaSaveListParams {
    lessonId: IdType;
    // #REFACTOR_VDT
    medias: unknown[];
    type: string;
}

export interface IMedia extends IBaseObject {
    nameFile?: string | null;
    tableType?: string | null;
    refId?: number | null;
    cdnLink?: string | null;
    relativePath?: string | null;
    mimeType?: string | null;
    description?: string | null;

    status?: MediaStatus | null;
    zOrder?: number | null;
}
