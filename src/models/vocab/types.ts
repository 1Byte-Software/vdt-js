import { IdType as JfwIdType } from '@jframework/jfw-js';
import { IBaseObject, IdType } from '../base';

export interface IVocab extends IBaseObject {
    vocab: string;
    definitions: IDefinition[];
    phonetics: IPhonetic[];
}
export interface ILicense {
    name: string;
    url: string;
}
// export interface IDefinition {
//     antonyms: string[];
//     synonyms: string[];
//     definition: string;
//     example?: string;
// }

export interface IDefinition extends IBaseObject {
    vocabId: IdType;
    partOfSpeech: string | null;
    languageCode: string | null;
    value: string | null;
    synonyms: string | null;
    antonyms: string | null;
    example: string | null;
    tags: string | null;
    revisedCount: number | null;
    isDefault: boolean | null;
    status: string | null;
    zOrder: number | null;
}

export interface IPhonetic extends IBaseObject {
    vocabId: IdType;
    languageCode: string | null;
    audioPath: string | null;
    ipa: string | null;
    stressOrder: number | null;
}

// export interface IPhonetic {
//     audio: string;
//     license: ILicense[];
//     sourceUrl: string;
//     text: string;
// }

export interface IMeaning {
    antonyms: string[];
    synonyms: string[];
    partOfSpeech: string;
    definitions: IDefinition[];
}

export interface IExternalVocab {
    license: ILicense;
    meanings: IMeaning[];
    phonetic: string;
    phonetics: IPhonetic[];
    sourceUrls: string[];
    word: string;
}
export interface ICreatePhonetic {
    languageCode: string;
    ipa: string;
    audioPath: string;
    stressOrder: number | null;
}
export interface ICreateDefinition {
    partOfSpeech: string;
    languageCode: string;
    value: string | null;
    synonyms: string | null;
    antonyms: string | null;
    example: string | null;
}
export interface ICreateVocabPayload {
    vocab: string;
    phonetics: ICreatePhonetic[];
    definitions: ICreateDefinition[];
}
export interface IGetVocabParams {
    vocab: string;
    pageSize: number;
}
export interface IGetVocabUserParams {
    categoryId: IdType;
    keyword?: string;
}
export interface ICreateVocabUserPayload {
    categoryId: IdType;
    vocabId: IdType;
    definitionUser?: string;
    priority: number;
    exampleUser?: string;
}
export interface IVocabUser {
    id: IdType;
    categoryId: IdType;
    vocabId: IdType;
    userId: JfwIdType;
    definitionUser: string;
    priority: number;
    revisedCount: number;
    exampleUser: string;
    status: string;
    vocab: IVocab;
}
export interface IUpdateVocabUserPath {
    vocabUserId: IdType;
}
export interface ITranslateParams {
    text: string;
    languageCode: string;
}
export interface IGetExactlyVocabPath {
    vocab: string;
}
