import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../collection-overview/collection-overview';
import Collection from '../collection/collection';

import { firestore, convertCollectionsToObj } from '../../../firebase/utils';

import { updateCollections } from '../../../redux/shop/shopActions';

import WithSpinner from '../../with-spinner/withSpinner';

import './shop.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    const { updateCollections } = this.props;

    // Whenever we want to listen to calls to the collectionRef we got from firestore
    // We use onSnapshot that returns a promise with the snapshot as the complete data
    // We convert it from an array to an object and update our redux state
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsToObj(snapshot);

      updateCollections(collections);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />{' '}
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
