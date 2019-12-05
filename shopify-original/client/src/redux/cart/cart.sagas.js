import { put, all, call, takeLatest } from 'redux-saga/effects';

import types from '../user/userTypes';

import { clearCart } from './cartActions';

// In this case, we are just listen whenever a user signs out, we want to dispatch the clearCart action to
// clear the items from the cart
export function* clearCartExecute() {
  yield put(clearCart());
}

export function* clearCartListener() {
  yield takeLatest(types.SIGN_OUT_SUCCESS, clearCartExecute);
}

export default function* cartSagas() {
  yield all([call(clearCartListener)]);
}
