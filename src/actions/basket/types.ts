import { BasketItem } from '../../types';

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const EMPTY_BASKET = 'EMPTY_BASKET';

interface AddToBasketAction {
  type: typeof ADD_TO_BASKET,
  payload: BasketItem
}

interface RemoveFromBasketAction {
  type: typeof REMOVE_FROM_BASKET,
  payload: BasketItem
}

interface EmptyBasketAction {
  type: typeof EMPTY_BASKET
}

export type BasketActionTypes = (
  AddToBasketAction | RemoveFromBasketAction | EmptyBasketAction
);
