import React, { Component } from 'react';
import { ShopData } from './shop.data';

import './shop.scss';

import CollectionPreview from '../../collection-preview/collection-preview';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
