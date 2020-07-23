import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  EMPTY_BASKET,
  BasketActionTypes
} from './types';

/*
 * Basket Actions
 */
export function addToBasket(productId: number, quantity: number, price: number) : BasketActionTypes {
  return {
    type: ADD_TO_BASKET,
    payload: {
      productId,
      quantity,
      price
    }
  };
};

export function removeFromBasket(productId: number, quantity: number, price: number) : BasketActionTypes {
  return {
    type: REMOVE_FROM_BASKET,
    payload: {
      productId,
      quantity,
      price
    }
  };
};

export function emptyBasket() : BasketActionTypes {
  return {
    type: EMPTY_BASKET
  };
};
