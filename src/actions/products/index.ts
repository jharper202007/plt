import axios from 'axios';
import { Dispatch } from 'redux';

import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_SUCCESS,
  LoadProductsActionTypes
} from './types';

import { Product } from '../../types';

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
