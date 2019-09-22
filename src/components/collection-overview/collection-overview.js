import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
