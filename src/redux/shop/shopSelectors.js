import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collection =>
    collection ? Object.keys(collection).map(key => collection[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

// !! is a shorthand of checking whether the value is null of undefined
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
