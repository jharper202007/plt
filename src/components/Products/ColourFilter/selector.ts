import { AppState } from './../../../reducers';

export default (state: AppState) => ({
  selected: state.products.filters.colour,
  // No point showing if there are no products to filter
  shouldShow: state.products.items.length
});
