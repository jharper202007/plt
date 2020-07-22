import { combineReducers } from 'redux';
import products, { ProductState } from './products';
import basket, { BasketState } from './basket';

export interface AppState {
  products: ProductState,
  basket: BasketState
};

export default combineReducers({
  products,
  basket
});
