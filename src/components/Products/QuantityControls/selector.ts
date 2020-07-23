import { createSelector } from 'reselect';

import { AppState } from './../../../reducers';
import { QuantityControlsProps } from '.';

const getBasket = (state: AppState) => state.basket;
const getProductId = (_ : AppState, props: QuantityControlsProps) => props.product.id;

export default createSelector(
  [getBasket, getProductId],
  (basket, productId) => basket.items[productId]
);
