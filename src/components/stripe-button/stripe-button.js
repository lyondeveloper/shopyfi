import React from 'react';
import { toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = 'pk_test_HIdraAeWb9qjmOjvt4hzU7X7';

  const onToken = token => {
    console.log(token);
    toast.success('Payment Successful');
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
