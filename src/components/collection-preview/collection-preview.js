import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ title, items, history }) => {
  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
