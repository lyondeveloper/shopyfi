import types from './cartTypes';

export const toggleCartDropdown = () => ({
  type: types.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});
