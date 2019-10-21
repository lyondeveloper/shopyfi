import shopActionTypes from './shopTypes';

const initialState = {
  collections: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload
      };

    default:
      return state;
  }
}
