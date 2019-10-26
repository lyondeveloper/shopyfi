import React, { Component } from 'react';

import FormInput from '../form-input/form-input';

import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { signUp } from '../../redux/user/userActions';

import CustomButton from '../custom-button/custom-button';

import './sign-up.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    const { email, password, confirmPassword, displayName } = this.state;

    const { signUp } = this.props;

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
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign Up with your email and password</span>

        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUp(data))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
