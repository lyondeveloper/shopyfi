import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../collection-overview/collection-overview';
import Collection from '../collection/collection';

import './shop.scss';

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />{' '}
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
