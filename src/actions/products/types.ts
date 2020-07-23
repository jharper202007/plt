import { Product, Filter, ProductFilterTypes } from '../../types';

export const LOAD_PRODUCTS_INIT = 'LOAD_PRODUCTS/INIT';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS/SUCCESS';
export const LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS/ERROR';

export const APPLY_PRODUCT_FILTER = 'APPLY_FILTER/PRODUCT';
export const RESET_PRODUCT_FILTER = 'RESET_FILTER/PRODUCT';

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

interface ResetProductFilterAction {
  type: typeof RESET_PRODUCT_FILTER,
  payload: {
    type: ProductFilterTypes
  }
}

export type ProductFilterActionTypes = (
  ApplyProductFilterAction | ResetProductFilterAction
);
