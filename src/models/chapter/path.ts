const REST = 'chapters';
const REST_LESSON = 'lessons';

export const CHAPTER_PATH = {
  QUERY: `${REST}`,

  CREATE: `${REST}`,
  GET_BY_ID: `${REST}/:id`,
  UPDATE_BY_ID: `${REST}/:id`,
  DELETE_BY_ID: `${REST}/:id`,

  LESSON: {
    GET_BY_CHAPTER_ID: `${REST}/:chapterId/${REST_LESSON}`,
    ADD_INTO_CHAPTER: `${REST}/:chapterId/${REST_LESSON}`,
    EDIT_IN_CHAPTER: `${REST}/:chapterId/${REST_LESSON}`,
  },
};
