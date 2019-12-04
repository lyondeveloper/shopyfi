import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartActions';

import {
  PriceStyles,
  NameStyles,
  CollectionFooterStyles,
  CollectionItemStyles,
  ImageStyles,
  ButtonStyles
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemStyles>
      <ImageStyles className='image' imageUrl={imageUrl} />
      <CollectionFooterStyles>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>{price} $</PriceStyles>
      </CollectionFooterStyles>
      <ButtonStyles onClick={() => addItem(item)} inverted>
        Add to cart
      </ButtonStyles>
    </CollectionItemStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
