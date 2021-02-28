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

export const loginAsync = (username, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    const credentials = { username: `Shayo`, password: `1234` };
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      dispatch(loginSuccess(credentials));
    } else {
      dispatch(loginFailure('Incorrect details, please try again'));
    }
  };
};
