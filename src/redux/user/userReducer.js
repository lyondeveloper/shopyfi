import types from './userTypes';

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMAIL_SIGN_IN_SUCCESS:
    case types.GOOGLE_SIGN_IN_SUCCESS:
      debugger;
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case types.GOOGLE_SIGN_IN_FAILURE:
    case types.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
