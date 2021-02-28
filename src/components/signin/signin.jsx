import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { loginAsync } from '../../redux/user/user.actions';
import {
  FormContainer,
  SignInTitle,
  FormItem,
  FormButton,
  FormLabel,
  FormInput,
  ErrorMessage,
} from './signin.styles';

const SignIn = (props) => {
  const { errorMessage, login } = props;
  console.log(props);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  // const { loginStart, loginFailure, loginSuccess } = props;
  // const dispatch = useDispatch();
  // const errorMessage = useSelector((state) => state.user.errorMessage);

  const usernameHandlerChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
  };

  // const verifyLogin = () => {
  //   const isVerified = username === 'Shayo' && password === '1234';
  //   if (isVerified) {
  //     //dispatch login success
  //     dispatch(loginSuccess({ username: 'Shayo', password: 1234 }));
  //     history.push('/mainpage');
  //   } else {
  //     //dispatch login failure
  //     dispatch(loginFailure('Failure'));
  //     alert('Incorrect details, better try again');
  //   }
  // };

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
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <div>
          <FormButton
            className="btn"
            onClick={(event) => {
              event.preventDefault();
              login(username, password);
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

export default SignIn;
