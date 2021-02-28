import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../redux/user/user.actions';
import SignIn from './signin';

const SignInContainer = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const login = (username, password) => {
    dispatch(loginAsync(username, password));
  };

  return <SignIn login={login} errorMessage={errorMessage} />;
};

export default SignInContainer;
