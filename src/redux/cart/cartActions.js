import Types from './cartTypes';

export const toggleCartDropdown = () => ({
  type: Types.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: Types.ADD_ITEM,
  payload: item
});
