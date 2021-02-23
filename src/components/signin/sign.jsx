import React, { useState } from 'react';
import {
  FormContainer,
  SignInTitle,
  FormItem,
  FormButton,
  FormLabel,
  FormInput,
} from './signin.styles';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandlerChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyLogin = () => {
    username === 'Shayo' && password === '1234'
      ? alert('Sign In successful')
      : alert('Incorrect Sign In details');
  };

  return (
    <div>
      <FormContainer>
        <SignInTitle>Sign In</SignInTitle>
        <FormItem>
          <FormLabel for="username">Username</FormLabel>
          <FormInput
            type="text"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={usernameHandlerChange}
          />
        </FormItem>
        <div class="form-control">
          <FormLabel for="password">Password</FormLabel>
          <FormInput
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={passwordHandlerChange}
          />
        </div>
        <div>
          <FormButton
            className="btn"
            onClick={(event) => {
              event.preventDefault();
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

export default SignIn;
