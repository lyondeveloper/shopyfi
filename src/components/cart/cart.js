import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart.styles';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

import './cart.scss';

const Cart = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length > 0 ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartDropdown());
      }}
    >
      {' '}
      GO TO CHECKOUT{' '}
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
