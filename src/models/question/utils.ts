import {
  embedUserResponseTypes,
  USER_RESPONSE_TYPE,
  userResponseTypes,
} from './constants';
import { UserResponseTypeItem } from './types';

export const getUserResponseType = (
  type: UserResponseTypeItem['type'],
): UserResponseTypeItem | undefined => {
  return userResponseTypes.find(
    (userResponseType) => userResponseType.type === type,
  );
};

export const checkIsEmbeddedUserResponseType = (type: USER_RESPONSE_TYPE) => {
  return embedUserResponseTypes.includes(type);
};
