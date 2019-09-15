import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../redux/cart/cartActions';

import './checkout-item.scss';

const CheckoutItem = ({
  cartItem: { id, name, quantity, price, imageUrl },
  deleteItem
}) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='Checkout item' />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'> {quantity} </span>
      <span className='price'> {price} </span>
      <div className='remove-button' onClick={() => deleteItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
