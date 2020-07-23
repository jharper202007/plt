import { Product, Colour } from './../../types';
import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_SUCCESS,
  LoadProductsActionTypes,
  APPLY_PRODUCT_FILTER,
  RESET_PRODUCT_FILTER,
  ProductFilterActionTypes
} from './../../actions/products/types';


export interface ProductState {
  items: Product[];
  filters: {
    colour?: Colour,
  },
  isLoading: boolean
}

const initialState : ProductState = {
  items: [],
  filters: {
    colour: undefined,
  },
  isLoading: false
};

type ProductActionTypes = LoadProductsActionTypes|ProductFilterActionTypes;

export default function products(state = initialState, action: ProductActionTypes) : ProductState {
  switch (action.type) {
    case LOAD_PRODUCTS_INIT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    }
    case APPLY_PRODUCT_FILTER: {
      const { type, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [type]: value
        }
      }
    }
    case RESET_PRODUCT_FILTER: {
      const { type } = action.payload;

      return {
        ...state,
        filters: {
          [type]: undefined
        }
      }
    }
    default:
      return state;
  };
};
