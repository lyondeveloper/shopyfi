import React from 'react';

import SignIn from '../../sign-in/sign-in';
import SignUp from '../../sign-up/sign-up';

import './auth.scss';

const Auth = () => (
  <div className='auth'>
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
