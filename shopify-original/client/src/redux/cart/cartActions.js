import types from './cartTypes';

export const toggleCartDropdown = () => ({
  type: types.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: types.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const deleteItem = item => ({
  type: types.DELETE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: types.CLEAR_CART
});

export const saveCart = (cartItems) => ({
  type: types.SAVE_CART,
  payload: cartItems
});

export const saveCartSuccess = () => ({
  type: types.SAVE_CART_SUCCESS
});

export const saveCartFailure = (err) => ({
  type: types.SAVE_CART_FAILURE,
  payload: err
});
