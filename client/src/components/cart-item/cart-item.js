import React from 'react';

import {
  CartItemStyles,
  ImgStyles,
  ItemDetailsStyles
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemStyles>
    <ImgStyles src={imageUrl} alt='Item' />
    <ItemDetailsStyles className='item-details'>
      <span> {name} </span>
      <span className='price'>
        {' '}
        {quantity} x ${price}{' '}
      </span>
    </ItemDetailsStyles>
  </CartItemStyles>
);

export default CartItem;
