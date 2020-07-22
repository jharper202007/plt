import { Product, Colour } from './../../types';

interface ProductState {
  items: Product[];
  filters: {
    colour: Colour[]
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
    colour: []
  },
  isLoading: false
};

export default function products(state = initialState, action: any) {
  return state;
};
