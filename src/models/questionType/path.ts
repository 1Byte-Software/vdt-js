const REST = 'v1/question-types';

export const QUESTION_TYPE_PATH = {
    QUERY: REST,

    GET_BY_ID: `${REST}/:id`,
    CREATE: REST,
    UPDATE: `${REST}/:id`,
    DELETE: `${REST}/:id`,
};
