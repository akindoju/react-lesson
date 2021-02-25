import userTypes from './user.types';

export const loginStart = () => {
  return {
    type: userTypes.LOGIN_START,
  };
};

export const loginSuccess = (user) => {
  return {
    type: userTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (errorMessage) => {
  return {
    type: userTypes.LOGIN_FAILURE,
    payload: errorMessage,
  };
};

export const logout = () => {
  return { type: userTypes.LOGOUT };
};
