import { Product, Filter } from '../../types';

export const LOAD_PRODUCTS_INIT = 'LOAD_PRODUCTS/INIT';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS/SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS/ERROR';

export const APPLY_PRODUCT_FILTER = 'APPLY_FILTER/PRODUCT';
export const REMOVE_PRODUCT_FILTER = 'REMOVE_FILTER/PRODUCT';

interface LoadProductsInitAction {
  type: typeof LOAD_PRODUCTS_INIT
}

interface LoadProductsSuccessAction {
  type: typeof LOAD_PRODUCTS_SUCCESS,
  payload: Product[]
}

interface LoadProductsErrorAction {
  type: typeof LOAD_PRODUCTS_ERROR,
  payload: string // error message
}

export type LoadProductsActionTypes = (
  LoadProductsInitAction | LoadProductsSuccessAction | LoadProductsErrorAction
);

interface ApplyProductFilterAction {
  type: typeof APPLY_PRODUCT_FILTER,
  payload: Filter
}

interface RemoveProductFilterAction {
  type: typeof REMOVE_PRODUCT_FILTER,
  payload: Filter
}

export type ProductFilterActionTypes = (
  ApplyProductFilterAction | RemoveProductFilterAction
);
