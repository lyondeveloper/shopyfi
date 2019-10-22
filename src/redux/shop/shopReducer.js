import shopActionTypes from './shopTypes';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };

    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}
