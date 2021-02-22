import React, { useState } from 'react';

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
      <form id="form" class="form">
        <h2>Sign In</h2>
        <div class="form-control">
          <label for="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={usernameHandlerChange}
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={passwordHandlerChange}
          />
        </div>
        <div>
          <button
            onClick={(event) => {
              event.preventDefault();
              verifyLogin();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
