import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionOverview from '../../collection-overview/collection-overview';
import Collection from '../collection/collection';

import { selectCollectionFetching } from '../../../redux/shop/shopSelectors';

import { fetchCollectionStartAsync } from '../../../redux/shop/shopActions';

import WithSpinner from '../../with-spinner/withSpinner';

import './shop.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;

    fetchCollectionStartAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />{' '}
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionFetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
