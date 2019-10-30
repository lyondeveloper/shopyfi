import { takeLatest, put, all, call } from 'redux-saga/effects';
import types from './userTypes';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from './userActions';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/utils';

import { toast } from 'react-toastify';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );

    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* googleSignInExecute() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* emailSignInExecute({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpExecute(action) {
  try {
    const {
      payload: { email, password, displayName }
    } = action;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccess({ user, additionalData: { displayName } }));  

    toast.success('You have sign up, signing in...');
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

export function* signUpSuccessExecute({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signOutExecute() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* checkUserSessionListener() {
  yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* googleSignInListener() {
  yield takeLatest(types.GOOGLE_SIGN_IN_START, googleSignInExecute);
}

export function* emailSignInListener() {
  yield takeLatest(types.EMAIL_SIGN_IN_START, emailSignInExecute);
}

export function* signOutListener() {
  yield takeLatest(types.SIGN_OUT, signOutExecute);
}

export function* signUpListener() {
  yield takeLatest(types.SIGN_UP, signUpExecute);
}

export function* signUpSuccessListener() {
  yield takeLatest(types.SIGN_UP_SUCCESS, signUpSuccessExecute);
}

export default function* userSagas() {
  yield all([
    call(googleSignInListener),
    call(emailSignInListener),
    call(isUserAuthenticated),
    call(signOutListener),
    call(signUpListener),
    call(signUpSuccessListener)
  ]);
}
