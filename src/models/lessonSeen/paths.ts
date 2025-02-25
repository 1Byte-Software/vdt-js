const REST = 'learner';
const REST_TESTED = 'tested';
const REST_LESSON = 'lesson';

export const LESSON_SEEN_PATH = {
  TESTED: {
    CREATE: `${REST}/${REST_TESTED}`,
    GET_BY_USER: `${REST}/${REST_TESTED}/:lessonId/:userId`,
    DELETE_BY_ID: `${REST}/${REST_TESTED}/:lessonId`,

    LESSON: {
      GET: `${REST}/${REST_TESTED}/${REST_LESSON}/:lessonId`,
    },
  },
};
