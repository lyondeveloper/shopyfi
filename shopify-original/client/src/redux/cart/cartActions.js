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