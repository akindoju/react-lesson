import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('sends correct credentials', async () => {
    const mockLogin = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn login={mockLogin} errorMessage={''} />
    );
    const usernameField = getByPlaceholderText('Enter Username');
    const passwordField = getByPlaceholderText('Enter Password');

    await userEvent.type(usernameField, 'Shayo');
    await userEvent.type(passwordField, '1234');
    await userEvent.click(getByText('Submit'));

    expect(mockLogin).toBeCalledWith('Shayo', '1234');
  });
});
