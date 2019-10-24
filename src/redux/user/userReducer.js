import types from './userTypes';

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case types.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
