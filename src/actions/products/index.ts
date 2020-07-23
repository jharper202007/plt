import axios from 'axios';
import { Dispatch } from 'redux';

import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_SUCCESS,
  LoadProductsActionTypes,
  APPLY_PRODUCT_FILTER,
  RESET_PRODUCT_FILTER,
  ProductFilterActionTypes
} from './types';

import { Product, ProductFilterTypes, ProductFilterValues } from '../../types';

// Would probably separate into base_api_url + products_endpoint
// if there were more endpoints, but since this is the only one
// will just keep it simple
const PRODUCTS_ENDPOINT = 'https://my-json-server.typicode.com/benirvingplt/products/products';

function loadProductsInit() : LoadProductsActionTypes {
  return {
    type: LOAD_PRODUCTS_INIT
  };
};

function loadProductsSuccess(products: Product[]) : LoadProductsActionTypes {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    payload: products
  };
};

function loadProductsError(message: string) : LoadProductsActionTypes {
  return {
    type: LOAD_PRODUCTS_ERROR,
    payload: message
  };
};

export const loadProducts = () => async (dispatch: Dispatch) => {
  dispatch(loadProductsInit());

  try {
    const res = await axios.get(PRODUCTS_ENDPOINT);
    return dispatch(loadProductsSuccess(res.data));
  } catch(err) {
    return dispatch(loadProductsError(err.message));
  }
}

export function applyFilter(type: ProductFilterTypes, value: ProductFilterValues) : ProductFilterActionTypes {
  return {
    type: APPLY_PRODUCT_FILTER,
    payload: {
      type,
      value
    }
  };
}

export function resetFilter(type: ProductFilterTypes) : ProductFilterActionTypes {
  return {
    type: RESET_PRODUCT_FILTER,
    payload: {
      type
    }
  };
}
