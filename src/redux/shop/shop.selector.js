import { createSelector } from "reselect";

const selectItemsCollections = (state) => state.items;

export const selectCollections = createSelector(
  [selectItemsCollections],
  (items) => items.collections
);

export const selectIsFetching = createSelector(
  [selectItemsCollections],
  (items) => items.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectCollections],
  (collections) => !!collections
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (UrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[UrlParam] : null
  );
