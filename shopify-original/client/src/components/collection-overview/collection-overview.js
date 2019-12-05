import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../collection-preview/collection-preview';

import { CollectionOverviewStyles } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewStyles className='collection-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
