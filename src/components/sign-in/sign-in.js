import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions';

import './sign-in.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  function handleChange({ target: { name, value } }) {
    setCredentials({ ...userCredentials, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password
    };

    emailSignInStart(data);
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          value={email}
          required
          label='Email'
          handleChange={handleChange}
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          required
          label='Password'
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign In </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {' '}
            Sign In With Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: data => dispatch(emailSignInStart(data))
});

export default connect(null, mapDispatchToProps)(SignIn);
