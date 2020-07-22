interface BasketState {
  items: any[], // @TODO create basket item type
  total: number
}

const initialState : BasketState = {
  items: [],
  total: 0
};

export default function filters(state = initialState, action: any) {
  return state;
};
