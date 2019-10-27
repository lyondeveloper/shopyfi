import React, { useState } from 'react';

import FormInput from '../form-input/form-input';

import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { signUp } from '../../redux/user/userActions';

import CustomButton from '../custom-button/custom-button';

import './sign-up.scss';

const SignUp = ({ signUp }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });

  const { email, password, confirmPassword, displayName } = userCredentials;

  function handleChange({ target: { name, value } }) {
    setCredentials({ ...userCredentials, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    const data = {
      email,
      password,
      displayName
    };

    signUp(data);
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUp(data))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
