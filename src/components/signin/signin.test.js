import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from './signin';

describe('SignIn testing', () => {
  it('contains username placeholder', () => {
    render(<SignIn />);
    screen.getByPlaceholderText('Enter Username');
  });

  it('contains password placeholder', () => {
    render(<SignIn />);
    screen.getByPlaceholderText(`Enter Password`);
  });
});
