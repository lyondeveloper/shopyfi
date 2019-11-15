import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  deleteItem
} from '../../redux/cart/cartActions';

import {
  RemoveButtonStyles,
  CheckoutItemStyles,
  ImageStyles,
  TextStyles,
  QuantityStyles
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, deleteItem }) => {
  const { id, name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemStyles className='checkout-item'>
      <ImageStyles className='image-container'>
        <img src={imageUrl} alt='Checkout item' />
      </ImageStyles>
      <TextStyles className='name'> {name} </TextStyles>
      <QuantityStyles className='quantity'>
        <div className='arrow' onClick={() => deleteItem(cartItem)}>
          {' '}
          &#10094;{' '}
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          {' '}
          &#10095;{' '}
        </div>
      </QuantityStyles>
      <TextStyles className='price'> {price} </TextStyles>
      <RemoveButtonStyles
        className='remove-button'
        onClick={() => clearItemFromCart(id)}
      >
        &#10005;
      </RemoveButtonStyles>
    </CheckoutItemStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: id => dispatch(clearItemFromCart(id)),
  deleteItem: item => dispatch(deleteItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
