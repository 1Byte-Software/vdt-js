const REST = 'questions';
const REST_OPTIONS = 'options';
const REST_SOLUTIONS = 'solutions';

export const QUESTION_PATH = {
  CREATE_BY_QUESTION_GROUP_ID: `${REST}/:questionGroupId`,
  UPDATE_BY_ID: `${REST}/:id`,
  DELETE_BY_ID: `${REST}/:id`,

  OPTION: {
    DELETE_BY_ID: `${REST}/:questionId/${REST_OPTIONS}/:questionOptionId`,
  },
  SOLUTION: {
    DELETE_BY_ID: `${REST}/:questionId/${REST_SOLUTIONS}/:questionSolutionId`,
  },
};
