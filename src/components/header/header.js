import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/utils';

import CartIcon from '../cart-icon/cart-icon';

import Cart from '../cart/cart';

import './header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {currentUser !== null ? (
          <div
            className='option'
            onClick={() => {
              auth.signOut();
            }}
          >
            {' '}
            SIGN OUT{' '}
          </div>
        ) : (
          <Link className='option' to='/auth'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? '' : <Cart />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
