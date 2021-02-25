import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from '../../redux/user/user.actions';
import {
  FormContainer,
  SignInTitle,
  FormItem,
  FormButton,
  FormLabel,
  FormInput,
} from './signin.styles';

const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  //const { loginStart, loginFailure, loginSuccess } = props;
  const dispatch = useDispatch();

  const usernameHandlerChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyLogin = () => {
    const isVerified = username === 'Shayo' && password === '1234';
    if (isVerified) {
      //dispatch login success
      dispatch(loginSuccess());
      history.push('/mainpage');
    } else {
      //dispatch login failure
      dispatch(loginFailure());
      alert('Incorrect details, better try again');
    }
    // ? history.push('/mainpage')
    // : alert('Incorrect Sign In details');
  };

  return (
    <div>
      <FormContainer>
        <SignInTitle>Sign In</SignInTitle>
        <FormItem>
          <FormLabel htmlfor="username">Username</FormLabel>
          <FormInput
            type="text"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={usernameHandlerChange}
          />
          <FormLabel htmlfor="password">Password</FormLabel>
          <FormInput
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={passwordHandlerChange}
          />
        </FormItem>
        <div>
          <FormButton
            className="btn"
            onClick={(event) => {
              event.preventDefault();
              dispatch(loginStart());
              verifyLogin();
            }}
          >
            Submit
          </FormButton>
        </div>
      </FormContainer>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   loginStart: () => {
//     dispatch(loginStart());
//   },
//   loginSuccess: (user) => {
//     dispatch(loginSuccess(user));
//   },
//   loginFailure: (errorMessage) => {
//     dispatch(loginFailure(errorMessage));
//   },
// });

// const mapStateToProps = (state) => ({
//   userReal: state.user.currentUser
// })

export default SignIn;
