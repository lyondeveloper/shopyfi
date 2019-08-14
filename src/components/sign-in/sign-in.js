import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/utils';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={email}
            required
            label='Email'
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            value={password}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign In With Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
