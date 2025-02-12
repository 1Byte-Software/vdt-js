const REST = 'categories';

export const CATEGORY_PATH = {
  QUERY: REST,
  CREATE: REST,
  GET_BY_ID: `${REST}/:id`,
  UPDATE_BY_ID: `${REST}/:id`,
  DELETE_BY_ID: `${REST}/:id`,

  GET_BY_MENU: `${REST}/menu/:codeCategory`
};
