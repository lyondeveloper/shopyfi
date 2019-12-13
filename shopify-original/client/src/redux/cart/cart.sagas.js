import { put, all, call, takeLatest } from 'redux-saga/effects';

import userTypes from '../user/userTypes';

import cartTypes from './cartTypes';

import { clearCart, saveCartSuccess, saveCartFailure } from './cartActions';

import {firestore} from '../../firebase/utils';

import { toast } from 'react-toastify';

// In this case, we are just listen whenever a user signs out, we want to dispatch the clearCart action to
// clear the items from the cart
export function* clearCartExecute() {
  yield put(clearCart());
}

export function* saveCart({ cartItems }) {
  try {
    const cartRef = yield firestore.collection('cart').doc();
    const cart = yield cartRef.get();
    // debugger
  } catch(err) {
    yield put(saveCartFailure(err))
  }
}

export function* saveCartListener() {
  yield takeLatest(cartTypes.SAVE_CART, saveCart)
}

export function* clearCartListener() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartExecute);
}

export default function* cartSagas() {
  yield all([call(clearCartListener), call(saveCartListener)]);
}
