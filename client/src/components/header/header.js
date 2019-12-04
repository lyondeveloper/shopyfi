import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon';

import Cart from '../cart/cart';
import { signOut } from '../../redux/user/userActions';

import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>

        {currentUser !== null ? (
          <OptionLink as='div' onClick={signOut}>
            {' '}
            SIGN OUT{' '}
          </OptionLink>
        ) : (
          <OptionLink to='/auth'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? '' : <Cart />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
