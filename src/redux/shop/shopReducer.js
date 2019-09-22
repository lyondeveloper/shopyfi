import ShopData from './shop.data';

const initialState = {
  collections: ShopData
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
