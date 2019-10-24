import types from './userTypes';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user
});

// Google sign in actions
export const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = error => ({
  type: types.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

// Base authentication actions
export const emailSignInStart = data => ({
  type: types.EMAIL_SIGN_IN_START,
  payload: data
});

export const emailSignInSuccess = user => ({
  type: types.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error => ({
  type: types.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
