import reducer, { ProductState } from '.';
import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  LoadProductsActionTypes,
  APPLY_PRODUCT_FILTER,
  RESET_PRODUCT_FILTER,
  ProductFilterActionTypes
} from './../../actions/products/types';
import { Product, Colour, ProductFilterTypes } from './../../types';

let initialState : ProductState;

const exampleProducts : Product[] = [
  {
    id:1,
    name: 'Example product 1',
    img: 'https://example.com/test.png',
    colour: Colour.Black,
    price: 1
  },
  {
    id:2,
    name: 'Example product 2',
    img: 'https://example.com/test2.png',
    colour: Colour.Stone,
    price: 2
  },
  {
    id:3,
    name: 'Example product 3',
    img: 'https://example.com/test3.png',
    colour: Colour.Black,
    price: 3
  },
  {
    id:4,
    name: 'Example product 4',
    img: 'https://example.com/test4.png',
    colour: Colour.Red,
    price: 5
  }
];

describe('Load products reducer tests', () => {
  beforeEach(() => {
    // reset state
    initialState = {
      items: [],
      filters: {
        colour: undefined,
      },
      isLoading: false
    };
  });

  it('sets loading flag when initiating loading of products', () => {
    const action : LoadProductsActionTypes = {
      type: LOAD_PRODUCTS_INIT
    };

    const state = reducer(initialState, action);
    expect(state.isLoading).toEqual(true);
  });

  it('loads products as expected', () => {
    const action : LoadProductsActionTypes = {
      type: LOAD_PRODUCTS_SUCCESS,
      payload: exampleProducts
    };

    const state = reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.error).toBeUndefined();
    expect(state.items.length).toEqual(4);
    expect(state.items).toEqual(exampleProducts);
  });

  it('sets error message when loading products fails', () => {
    const errorMessage = 'Oops, there was a problem';
    const initAction : LoadProductsActionTypes = {
      type: LOAD_PRODUCTS_INIT
    };

    const errorAction : LoadProductsActionTypes = {
      type: LOAD_PRODUCTS_ERROR,
      payload: errorMessage
    };

    let state = reducer(initialState, initAction);
    expect(state.isLoading).toEqual(true);

    state = reducer(state, errorAction);
    expect(state.isLoading).toEqual(false);
    expect(state.items).toEqual([]);
    expect(state.error).toEqual(errorMessage);
  });
});

describe('Product filter reducer tests', () => {
  beforeEach(() => {
    // reset state
    initialState = {
      items: exampleProducts,
      filters: {
        colour: undefined,
      },
      isLoading: false
    };
  });

  it('Applies and Removes colour filters as expected', () => {
    function createFilterAction(colour: Colour) : ProductFilterActionTypes {
      return {
        type: APPLY_PRODUCT_FILTER,
        payload: {
          type: ProductFilterTypes.Colour,
          value: colour
        }
      };
    };

    const resetFilterAction : ProductFilterActionTypes = {
      type: RESET_PRODUCT_FILTER,
      payload: {
        type: ProductFilterTypes.Colour
      }
    };

    const setBlack = createFilterAction(Colour.Black);
    const setRed = createFilterAction(Colour.Red);

    let state = reducer(initialState, setBlack);
    expect(state.filters.colour).toEqual(Colour.Black);
    state = reducer(state, setRed);
    expect(state.filters.colour).toEqual(Colour.Red);

    state = reducer(state, resetFilterAction);
    expect(state.filters.colour).toBeUndefined;
    expect(state.filters).toEqual({});

    state = reducer(state, setRed);
    expect(state.filters.colour).toEqual(Colour.Red);
  });
});
