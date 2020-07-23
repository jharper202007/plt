import { Product, Colour, Size, ProductFilterTypes, ProductFilterValues } from './../../types';
import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_SUCCESS,
  LoadProductsActionTypes,
  APPLY_PRODUCT_FILTER,
  REMOVE_PRODUCT_FILTER,
  ProductFilterActionTypes
} from './../../actions/products/types';


export interface ProductState {
  items: Product[];
  filters: {
    colour: Colour[],
    size?: Size[]
  },
  isLoading: boolean
}

const initialState : ProductState = {
  items: [],
  /*
   * Initial filter design: values get pushed to arrays of pre-defined types to
   * apply filters. (eg { colour: ['Black'], size: ['Small', 'XS']}).
   * Empty array means no filters are applied.
   *
   * May adjust slightly later, but should work for now.
   */
  filters: {
    colour: [],
  },
  isLoading: false
};

type ProductActionTypes = LoadProductsActionTypes|ProductFilterActionTypes;

/**
 * Helper function which will add a filter value only if it does not already exist
 */
function addFilterIfMissing(newFilter: ProductFilterValues, existingFilters?: ProductFilterValues[]) {
  if (existingFilters === undefined) {
    return [newFilter];
  }

  const isFilterAlreadyApplied = existingFilters.find((filter) => filter === newFilter);
  return isFilterAlreadyApplied ? existingFilters : [...existingFilters, newFilter];
}

function removeFilter(filterToRemove: ProductFilterValues, existingFilters?: ProductFilterValues[]) {
  if (existingFilters === undefined) {
    return [];
  }

  return existingFilters.filter(f => f !== filterToRemove);
}

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
      const currentFilters = state.filters[type];

      return {
        ...state,
        filters: {
          ...state.filters,
          [type]: addFilterIfMissing(value, currentFilters)
        }
      }
    }
    case REMOVE_PRODUCT_FILTER: {
      const { type, value } = action.payload;
      const currentFilters = state.filters[type];

      return {
        ...state,
        filters: {
          ...state.filters,
          [type]: removeFilter(value, currentFilters)
        }
      }
    }
    default:
      return state;
  };
};
