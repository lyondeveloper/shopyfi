import { all, call } from 'redux-saga/effects';

import { fetchCollectionsListener } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsListener)]);
}
