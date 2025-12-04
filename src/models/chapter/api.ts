import { RawAxiosRequestHeaders } from 'axios';
import { get, post, put, remove } from '../../utils/axiosHelper';
import { generatePath } from '../../utils/path';
import { IdType, IListResponseVDT } from '../base';
import { IBaseLesson } from '../lesson';
import { CHAPTER_PATH } from './path';
import {
    IChapter,
    ICreateChapterParams,
    IGetChaptersParams,
    ILessonItemParams,
    IUpdateChapterParams
} from './types';

export const getChaptersAPI = async (
    params: IGetChaptersParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IListResponseVDT<IChapter>> => {
    const url = CHAPTER_PATH.GET_CHAPTERS;
    const response = await get(url, { params }, userHeaders);

    const { contents, ...rest } = response.data;

    return {
        contents,
        pagination: rest,
    };
};

export const getChapterByIdAPI = async (
    chapterId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IChapter> => {
    const url = generatePath(CHAPTER_PATH.GET_BY_ID, {
        id: chapterId,
    });

    const response = await get(url, null, userHeaders);
    return response.data;
};

export const updateChapterAPI = async (
    chapterId: IdType,
    params: IUpdateChapterParams,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(CHAPTER_PATH.UPDATE_BY_ID, {
        id: chapterId,
    });

    return await put(url, params, null, userHeaders);
};

export const createChapterAPI = async (
    params: ICreateChapterParams,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IdType> => {
    const url = CHAPTER_PATH.CREATE;

    const response = await post(url, params, null, userHeaders);

    return response.data;
};

export const deleteChapterAPI = async (
    chapterId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(CHAPTER_PATH.GET_BY_ID, {
        id: chapterId,
    });
    return await remove(url, userHeaders);
};

export const getLessonsOfChapterAPI = async (
    chapterId: IdType,
    userHeaders?: RawAxiosRequestHeaders,
): Promise<IBaseLesson[]> => {
    const url = generatePath(CHAPTER_PATH.LESSON.GET_BY_CHAPTER_ID, {
        chapterId,
    });

    const response = await get(url, null, userHeaders);

    return response.data;
};

export const addLessonsIntoChapterAPI = async (
    chapterId: IdType,
    lessonIds: IdType[],
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(CHAPTER_PATH.LESSON.ADD_INTO_CHAPTER, {
        chapterId,
    });

    return await post(
        url,
        null,
        {
            params: { lessonIds },
            paramsSerializer: {
                indexes: true,
            },
        },
        userHeaders,
    );
};

export const updateLessonsOfChapterAPI = async (
    chapterId: IdType,
    lessonItems: ILessonItemParams[],
    userHeaders?: RawAxiosRequestHeaders,
) => {
    const url = generatePath(CHAPTER_PATH.LESSON.EDIT_IN_CHAPTER, {
        chapterId,
    });

    return await put(url, lessonItems, null, userHeaders);
};
