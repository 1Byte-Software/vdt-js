const REST = 'class-users';

export const CLASS_USER_PATH = {
  QUERY: REST,
  CREATE: REST,
  UPDATE_BY_ID: `${REST}/:id`,
  DELETE_BY_ID: `${REST}/:id`,
};
