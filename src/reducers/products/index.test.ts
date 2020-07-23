import reducer, { ProductState } from '.';
import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_SUCCESS,
  LoadProductsActionTypes,
  APPLY_PRODUCT_FILTER,
  RESET_PRODUCT_FILTER,
  ProductFilterActionTypes
} from './../../actions/products/types';
import { Product, Colour } from './../../types';

let initialState : ProductState;
type ProductActionTypes = ProductFilterActionTypes|LoadProductsActionTypes;

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

describe('Product reducer tests', () => {
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
});
