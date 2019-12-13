import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item';

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  ButtonContainer
} from './cart.styles';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown, saveCart } from '../../redux/cart/cartActions';

const Cart = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length > 0 ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <ButtonContainer
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartDropdown());
      }}
    >
      {' '}
      GO TO CHECKOUT{' '}
    </ButtonContainer>
    {/* <ButtonContainer
      onClick={() => {
        history.push('/checkout');
        dispatch(saveCart(cartItems));
      }}
    >
      {' '}
      SAVE CART{' '}
    </ButtonContainer> */}
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
