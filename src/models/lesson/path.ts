const REST = 'lessons';
const REST_VOCAB = 'vocabs';
const REST_QUESTION_TYPE = 'question-type';
const REST_LESSON_SEE_ALSO = 'lesson-see-also';
const REST_PRIORITY = 'priorities';

export const LESSON_PATH = {
  QUERY: REST,
  FILTER: `${REST}/filter`,
  GET_BY_ID: `${REST}/:id`,
  EXPORT: `${REST}/export`,
  CREATE: REST,
  UPDATE: `${REST}/:id`,
  DELETE: `${REST}/:id`,

  VOCAB: {
    QUERY_VOCAB: `${REST}/:id/${REST_VOCAB}`,
    CREATE_VOCAB: `${REST}/:id/${REST_VOCAB}`,
    DELETE_VOCAB: `${REST}/:id/${REST_VOCAB}`,
  },

  QUESTION_TYPE: {
    UPDATE_QUESTION_TYPE: `${REST}/${REST_QUESTION_TYPE}/:questionTypeId/:lessonId`,
  },

  LESSON_SEE_ALSO: {
    CREATE_LESSON_SEE_ALSO: `${REST}/:id/${REST_LESSON_SEE_ALSO}`,
    UPDATE_LESSON_SEE_ALSO: `${REST}/:id/${REST_LESSON_SEE_ALSO}`,
  },

  PRIORITY: {
    CREATE: `${REST}/:id/${REST_PRIORITY}/:priorityId/:userId`,
    DELETE: `${REST}/:id/${REST_PRIORITY}/:priorityId/:userId`,
  },
};
