import shopActionTypes from './shopTypes';
import { firestore, convertCollectionsToObj } from '../../firebase/utils';

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collections = convertCollectionsToObj(snapshot);
        dispatch(fetchCollectionSuccess(collections));
      })
      .catch(err => dispatch(fetchCollectionFailure(err.message)));
  };
};

export const fetchCollectionFailure = message => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: message
});
