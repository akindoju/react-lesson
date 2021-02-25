import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isSigningIn: false,
  errorMessage: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOGIN_START:
      return { ...state, isSigningIn: true };
    case userTypes.LOGIN_SUCCESS:
      return { ...state, isSigningIn: false, currentUser: action.payload };
    case userTypes.LOGIN_FAILURE:
      return { ...state, isSigningIn: false, errorMessage: action.payload };
    case userTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
