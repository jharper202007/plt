import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  EMPTY_BASKET,
  BasketActionTypes
} from './../../actions/basket/types';

import { BasketItemData } from './../../types';

interface BasketItemMap {
  [productId: number]: BasketItemData
}

export interface BasketState {
  items: BasketItemMap,
  total: number
}

const initialState : BasketState = {
  items: {},
  total: 0
};

export default function filters(state = initialState, action: BasketActionTypes) : BasketState {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const { productId, quantity, price } = action.payload;

      const existingItem = state.items[productId];
      const isAlreadyInBasket = existingItem !== undefined;
      const updatedQuantity = isAlreadyInBasket ? (quantity + existingItem.quantity) : quantity

      return {
        total: state.total + (quantity * price),
        items: {
          ...state.items,
          [productId]: {
            quantity: updatedQuantity,
            price
          }
        }
      };
    }
    case REMOVE_FROM_BASKET: {
      const { productId, quantity, price } = action.payload;

      const existingItem = state.items[productId];

      // Nothing to remove
      if (existingItem === undefined) {
        return state;
      }

      const isRemovingAll = quantity >= existingItem.quantity;
      const priceDeduction = isRemovingAll
        ? price * existingItem.quantity
        : price * quantity;
      const newTotal = state.total - priceDeduction;

      const newItems = {
        ...state.items,
        [productId]: {
          quantity: existingItem.quantity - quantity,
          price
        }
      };

      if (isRemovingAll) {
        delete newItems[productId];
      }

      return {
        total: (newTotal > 0) ?  newTotal : 0,
        items: newItems
      };
    }
    case EMPTY_BASKET: {
      return initialState;
    }
    default:
      return state;
  }
};
