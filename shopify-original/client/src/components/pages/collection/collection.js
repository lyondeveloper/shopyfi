import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../../redux/shop/shopSelectors';

import CollectionItem from '../../collection-item/collection-item';

import {
  CollectionContainer,
  TitleContainer,
  ItemsContainer
} from './collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer className='collection'>
      <TitleContainer className='title'>{title}</TitleContainer>
      <ItemsContainer className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
