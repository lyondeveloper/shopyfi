import { takeLatest, put, all, call } from 'redux-saga/effects';
import types from './userTypes';
import { signInSuccess, signInFailure } from './userActions';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);

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

export function* emailSignInExecute(action) {
  try {
    const {
      payload: { data }
    } = action;

    const user = yield auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
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

export default function* userSagas() {
  yield all([
    call(googleSignInListener),
    call(emailSignInListener),
    call(isUserAuthenticated)
  ]);
}
