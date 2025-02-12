const REST = 'courses';
const REST_V1 = `v1/${REST}`;
const REST_COURSE_USER = 'v1/course-users';
const REST_USERS = 'users';

export const COURSE_PATH = {
  CREATE: REST,
  GET_BY_ID: `${REST}/:id`,
  UPDATE_BY_ID: `${REST}/:id`,
  DELETE_BY_ID: `${REST}/:id`,

  ALL: `${REST_V1}/all`,

  V1: {
    QUERY: REST_V1,

    COURSE_USER: {
      CREATE: REST_COURSE_USER,
      UPDATE: REST_COURSE_USER,
      DELETE: `${REST_V1}/:courseCode/${REST_USERS}/:userId`,
    },
  },
};
