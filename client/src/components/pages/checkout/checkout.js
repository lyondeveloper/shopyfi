import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal
} from '../../../redux/cart/cartSelectors';

import CheckoutItem from '../../checkout-item/checkout-item';
import StripeButton from '../../stripe-button/stripe-button';

// import './checkout.scss';

import {
  ButtonStyles,
  WarningStyles,
  TotalStyles,
  HeaderBlockStyles,
  CheckoutHeaderStyles,
  CheckoutPageStyles
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageStyles>
    <CheckoutHeaderStyles>
      <HeaderBlockStyles>
        <span>Product</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Description</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Quantity</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Price</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Remove</span>
      </HeaderBlockStyles>
    </CheckoutHeaderStyles>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalStyles className='total'>
      <span>TOTAL: ${total}</span>
    </TotalStyles>

    <WarningStyles className='test-warning'>
      * Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningStyles>

    <StripeButton price={total} />
  </CheckoutPageStyles>

  // <div className='checkout-page'>
  //   <div className='checkout-header'>
  //     <div className='header-block'>
  //       <span>Product</span>
  //     </div>

  //     <div className='header-block'>
  //       <span>Description</span>
  //     </div>

  //     <div className='header-block'>
  //       <span>Quantity</span>
  //     </div>

  //     <div className='header-block'>
  //       <span>Price</span>
  //     </div>

  //     <div className='header-block'>
  //       <span>Remove</span>
  //     </div>
  //   </div>
  //   {cartItems.map(cartItem => (
  //     <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  //   ))}
  //   <div className='total'>
  //     <span>TOTAL: ${total}</span>
  //   </div>

  //   <div className='test-warning'>
  //     * Please use the following test credit card for payments*
  //     <br />
  //     4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
  //   </div>

  //   <StripeButton price={total} />
  // </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
