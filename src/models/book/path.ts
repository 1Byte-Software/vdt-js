const REST = 'books';
const REST_BOOK_EXAM_RECORD = 'book-exam-record';
const REST_BOOK_EXAM_SUBMISSIONS = 'book-exam-submissions';
const REST_BOOK_EXAM_REPORT = 'book-exam-report';
const REST_CHAPTERS = 'chapters';

export const BOOK_PATH = {
  /**
   * @deprecated use GET_BOOKS instead
   */
  QUERY: REST,

  GET_BOOKS: REST,

  CREATE: REST,
  GET_BY_ID: `${REST}/:id`,
  UPDATE_BY_ID: `${REST}/:id`,
  DELETE_BY_ID: `${REST}/:id`,

  BOOK_EXAM_RECORD: {
    GET_BY_USER_ID: `${REST}/${REST_BOOK_EXAM_RECORD}/:userId`,
    CREATE: `${REST}/${REST_BOOK_EXAM_RECORD}/:userId/:bookId`,
    DELETE_BY_ID: `${REST}/${REST_BOOK_EXAM_RECORD}/:bookExamId`,

    FINISH: `${REST}/${REST_BOOK_EXAM_RECORD}/:id/finish`,
    PROCESSING: `${REST}/${REST_BOOK_EXAM_RECORD}/:id/processing`,
    CHECK_RESULT: `${REST}/${REST_BOOK_EXAM_RECORD}/:bookExamId/:userId/check-result`,
    RESULT: `${REST}/${REST_BOOK_EXAM_RECORD}/:bookExamId/:userId/result`,
    SCORE_DETAIL: `${REST}/${REST_BOOK_EXAM_RECORD}/:bookExamRecordId/:userId/:categoryId/score-detail`,

    BOOK_EXAM_REPORT: {
      GET: `${REST}/${REST_BOOK_EXAM_RECORD}/:id/${REST_BOOK_EXAM_REPORT}`,
    },

    BOOK_EXAM_SUBMISSION: {
      SUBMIT: `${REST}/${REST_BOOK_EXAM_RECORD}/${REST_BOOK_EXAM_SUBMISSIONS}/submit`,
      CONTINUE: `${REST}/${REST_BOOK_EXAM_RECORD}/${REST_BOOK_EXAM_SUBMISSIONS}/continue`,
    },
  },

  CHAPTERS: {
    GET: `${REST}/:id/${REST_CHAPTERS}`,
    ADD: `${REST}/:id/${REST_CHAPTERS}`,
    UPDATE: `${REST}/:id/${REST_CHAPTERS}`,
    DELETE: `${REST}/:id/${REST_CHAPTERS}`,
  },
};
