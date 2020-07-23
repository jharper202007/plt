import { createSelector } from 'reselect';

import { AppState } from './../../../reducers';

const getProducts = (state: AppState) => state.products;

export default createSelector(
  [getProducts],
  (products) => ({
    products: products.items,
    isLoading: products.isLoading,
    filter: products.filters.colour,
    error: products.error
  })
);
