import { takeLatest, put, all, call } from 'redux-saga/effects';
import types from './userTypes';
import { googleSignInSuccess, googleSignInFailure } from './userActions';
import {
  googleProvider,
  auth,
  createUserProfileDocument
} from '../../firebase/utils';

export function* googleSignInExecute() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    const userRef = yield call(createUserProfileDocument, user);

    const snapshot = yield userRef.get();

    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(googleSignInFailure(err));
  }
}

export function* googleSignInListener() {
  yield takeLatest(types.GOOGLE_SIGN_IN_START, googleSignInExecute);
}

export default function* userSagas() {
  yield all([call(googleSignInListener)]);
}
