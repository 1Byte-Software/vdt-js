import {
    IBaseObject,
    IdType,
    StripCreateFields,
    StripUpdateFields,
} from '../base';
import { MediaStatus } from './constants';

export interface ISaveMediaListParams {
    refId: IdType;
    medias: IUpdateMediaParams[];
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

export interface ICreateMediaParams extends StripCreateFields<IMedia> {}
export interface IUpdateMediaParams extends Omit<StripUpdateFields<IMedia>, 'status'> {}
