import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  deleteItem
} from '../../redux/cart/cartActions';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, deleteItem }) => {
  const { id, name, quantity, price, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='Checkout item' />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={() => deleteItem(cartItem)}>
          {' '}
          &#10094;{' '}
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          {' '}
          &#10095;{' '}
        </div>
      </span>
      <span className='price'> {price} </span>
      <div className='remove-button' onClick={() => clearItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: id => dispatch(clearItemFromCart(id)),
  deleteItem: item => dispatch(deleteItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
