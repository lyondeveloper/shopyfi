import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../collection-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.container';

import { fetchCollectionStartAsync } from '../../../redux/shop/shopActions';

import './shop.scss';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;

    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />{' '}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
