import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../../redux/shop/shopSelectors';

import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../with-spinner/withSpinner';

import Collection from './collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
