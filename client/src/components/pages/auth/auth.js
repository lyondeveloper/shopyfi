import React from 'react';

import SignIn from '../../sign-in/sign-in';
import SignUp from '../../sign-up/sign-up';

import { AuthContainer } from './auth.styles';

const Auth = () => (
  <AuthContainer>
    <SignIn />
    <SignUp />
  </AuthContainer>
);

export default Auth;
