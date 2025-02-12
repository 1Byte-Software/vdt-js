const REST = 'lessons';
const REST_VOCAB = 'vocabs';
const REST_QUESTION_TYPE = 'question-type';
const REST_LESSON_SEE_ALSO = 'lesson-see-also';

export const LESSON_PATH = {
  QUERY_LESSON: REST,
  GET_LESSON_FILTER: `${REST}/filter`,
  GET_LESSON_BY_ID: `${REST}/:id`,
  GET_EXPORT: `${REST}/export`,
  CREATE_LESSON: REST,
  UPDATE_LESSON: `${REST}/:id`,
  DELETE_LESSON: `${REST}/:id`,

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
};
