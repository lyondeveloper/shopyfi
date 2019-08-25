import { types } from './userTypes';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user
});
