import { Product } from '../../types';

export const LOAD_PRODUCTS_INIT = 'LOAD_PRODUCTS/INIT';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS/SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS/ERROR';

interface LoadProductsInitAction {
  type: typeof LOAD_PRODUCTS_INIT
}

interface LoadProductsSuccessAction {
  type: typeof LOAD_PRODUCTS_SUCCESS,
  payload: Product[]
}

interface LoadProductsErrorAction {
  type: typeof LOAD_PRODUCTS_ERROR,
  payload: string|Error // error message
}

export type LoadProductsActionTypes = (
  LoadProductsInitAction | LoadProductsSuccessAction | LoadProductsErrorAction
);
