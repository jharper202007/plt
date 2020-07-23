import { createSelector } from 'reselect';

import { AppState } from './../../../reducers';

const getProducts = (state: AppState) => state.products;
const getBasket = (state: AppState) => state.basket;

export default createSelector(
  [getProducts, getBasket],
  (products, basket) => ({
    products: products.items,
    isLoading: products.isLoading,
    filter: products.filters.colour,
    total: basket.total,
    basket: basket.items,
    error: products.error
  })
);
