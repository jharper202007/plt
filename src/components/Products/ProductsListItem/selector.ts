import { createSelector } from 'reselect';

import { AppState } from './../../../reducers';
import { ProductsListItemProps } from '.';

const getBasket = (state: AppState) => state.basket;
const getProductId = (_ : AppState, props: ProductsListItemProps) => props.product.id

export default createSelector(
  [getBasket, getProductId],
  (basket, productId) => basket.items[productId]
);
