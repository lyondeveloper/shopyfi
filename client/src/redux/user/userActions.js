import types from './userTypes';

export const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = data => ({
  type: types.EMAIL_SIGN_IN_START,
  payload: data
});

export const signInSuccess = user => ({
  type: types.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  payload: error
});

export const signUp = data => ({
  type: types.SIGN_UP,
  payload: data
});

export const signUpSuccess = data => ({
  type: types.SIGN_UP_SUCCESS,
  payload: data
});

export const signUpFailure = error => ({
  type: types.SIGN_UP_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: types.CHECK_USER_SESSION
});

export const signOut = () => ({
  type: types.SIGN_OUT
});

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: types.SIGN_OUT_FAILURE,
  payload: error
});
