import { IdType } from '../base';

export interface IMediaSaveListParams {
    lessonId: IdType;
    // #REFACTOR_VDT
    medias: unknown[];
    type: string;
}
