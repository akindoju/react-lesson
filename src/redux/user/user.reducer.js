import { useReducer } from 'react';
import userTypes from './user.types';

const INITAIL_STATE = {
  currentUser: null,
  isSigningIn: false,
};

const userReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOGIN_START:
      return { ...state, isSigningIn: true };
    case userTypes.LOGIN_SUCCESS:
      return { ...state, isSigningIn: false, currentUser: action.payload };
    case userTypes.LOGIN_FAILURE:
      return { ...state, isSigningIn: false };
    case userTypes.LOGOUT:
      return INITAIL_STATE;
  }
};

export default userReducer;
