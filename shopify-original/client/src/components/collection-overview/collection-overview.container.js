import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shopSelectors';
import { compose } from 'redux';
import WithSpinner from '../with-spinner/withSpinner';
import CollectionOverview from './collection-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
