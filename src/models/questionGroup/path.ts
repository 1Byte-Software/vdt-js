const REST = 'question-groups';

export const QUESTION_GROUP_PATH = {
    CREATE: `${REST}/:lessonId`,
    UPDATE: `${REST}/:id`,
    DELETE: `${REST}/:id`,
};
