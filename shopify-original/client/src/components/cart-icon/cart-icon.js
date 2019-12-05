import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIconContainer>
        <ShoppingIcon />
      </ShoppingIconContainer>
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
