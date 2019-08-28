import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';

import './cart.scss';
import CartItem from '../cart-item/cart-item';

const Cart = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton> GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(Cart);
