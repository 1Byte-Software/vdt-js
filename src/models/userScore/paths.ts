const REST = 'scores';

export const USER_SCORE_PATH = {
  SCORE: `${REST}`,
  COUNT_PRACTICE_AI_SCORE: `${REST}/count-practice-ai-score/:userId`,
  ANSWER: `${REST}/answers`,

  GET_BY_RESPONSE_GROUP_ID: `${REST}/by-response-group-id/:responseGroupId`,
  GET_BY_RESPONSE_GROUP_CODE: `${REST}/by-response-group-code/:responseGroupCode`,
  DELETE_BY_RESPONSE_GROUP_CODE: `${REST}/by-response-group-code/:responseGroupCode`,
  GET_LIST_SYSTEM_SCORE: `${REST}/list-system-score`,

  SCORE_AI: `${REST}/ai`,

  CREATE_SCORE_HUMAN: `${REST}/human/:responseGroupId`,
};
