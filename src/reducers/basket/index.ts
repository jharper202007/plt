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
      // Update quantity if item is already in basket
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
      const isAlreadyInBasket = existingItem !== undefined;

      // Nothing to remove
      if (!isAlreadyInBasket) {
        return state;
      }

      // @TODO: Validation to prevent quantity going below zero
      const updatedQuantity = existingItem.quantity - quantity;
      const newItems = {
        ...state.items,
        [productId]: {
          quantity: updatedQuantity,
          price
        }
      };

      if (updatedQuantity <= 0) {
        delete newItems[productId];
      }

      const newTotal = state.total - (quantity * price);

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
