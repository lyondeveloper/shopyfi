import React from 'react';

import SignIn from '../../sign-in/sign-in';

import './auth.scss';

const Auth = () => (
  <div className='auth'>
    <SignIn />
    <div className='sign-up'>SIGN UP</div>
  </div>
);

export default Auth;
