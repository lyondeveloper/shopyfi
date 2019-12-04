import React from 'react';
import { toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = 'pk_test_HIdraAeWb9qjmOjvt4hzU7X7';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        toast.success('Payment Successful');
      })
      .catch(err => {
        console.log('Payment Error: ', JSON.parse(err));
        toast.error(
          'There was an unexpected error, please be sure you use the provided credit card properly'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Shopify'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeButton;
