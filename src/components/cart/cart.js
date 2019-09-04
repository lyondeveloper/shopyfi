import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

import './cart.scss';

const Cart = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length > 0 ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className='empty-message'>Your Cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartDropdown());
      }}
    >
      {' '}
      GO TO CHECKOUT{' '}
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
