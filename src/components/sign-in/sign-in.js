import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { connect } from 'react-redux';

import { auth } from '../../firebase/utils';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions';

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

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    const data = {
      email,
      password
    };

    emailSignInStart(data);
  };

  render() {
    const { email, password } = this.state;

    const { googleSignInStart } = this.props;

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
            type='password'
            name='password'
            value={password}
            required
            label='Password'
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: data => dispatch(emailSignInStart(data))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
