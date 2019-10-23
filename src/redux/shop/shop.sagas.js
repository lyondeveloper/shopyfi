import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsToObj } from '../../firebase/utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shopActions';

import shopActionsTypes from './shopTypes';

export function* fetchCollectionsExecute() {
  try {
    const collectionRef = firestore.collection('collections');

    // We get the snapshot from firestore with yield
    const snapshot = yield collectionRef.get();

    // call is a function that obviously calls a function with its respective arguments
    // is optional to use it but it's recommended for asynchronous tasks
    const collectionsMap = yield call(convertCollectionsToObj, snapshot);

    // put is the dispatch of redux thunk, we use put to call functions that dispatches actions and pass the data to reducer state
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

// take every is a effect that listen to all sagas calls concurrently
export function* fetchCollectionsListener() {
  yield takeLatest(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsExecute
  );
}
