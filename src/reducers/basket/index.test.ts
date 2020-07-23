import React from 'react';

import reducer, { BasketState } from '.';
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  EMPTY_BASKET,
  BasketActionTypes
} from './../../actions/basket/types';
import { BasketItem } from './../../types';

let initialState : BasketState;

// create dummy basket item
function makeBasketItem({productId = 1, quantity = 1, price = 1} = {}) : BasketItem {
  return {
    productId,
    quantity,
    price
  };
}

describe('Basket Reducer tests', () => {
  beforeEach(() => {
    // reset state
    initialState = {
      items: {},
      total: 0
    };
  });

  it('adds a product to the basket', () => {
    const action : BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem()
    };

    let state = reducer(initialState, action);
    expect(state.items).toEqual({
      1: {quantity: 1, price: 1}
    });

    expect(state.total).toEqual(1);
  });

  it('adds the same product to the basket multiple times', () => {
    const action1: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem()
    };

    const ADD_AMOUNT = 2;
    const action2: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem({ quantity: ADD_AMOUNT})
    };

    let state = reducer(initialState, action1);
    expect(state.items).toEqual({
      1: {quantity: 1, price: 1}
    });
    expect(state.total).toEqual(1);

    const newQuantity = 1 + ADD_AMOUNT;
    state = reducer(state, action2);
    expect(state.items).toEqual({
      1: {quantity: newQuantity, price: 1}
    });
    expect(state.total).toEqual(newQuantity * 1);
  });

  it('removes a product from the basket', () => {
    const item = makeBasketItem();
    const addAction: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: item
    };

    const removeAction: BasketActionTypes = {
      type: REMOVE_FROM_BASKET,
      payload: item
    };

    let state = reducer(initialState, addAction);
    expect(state.items).toEqual({
      1: {quantity: 1, price: 1}
    });

    state = reducer(state, removeAction);
    expect(state.items).toEqual({});
    expect(state.items[1]).toBeUndefined();
    expect(state.total).toEqual(0);
  });

  it('removes a product from the basket by different quantities', () => {
    const INITIAL_COUNT = 10;
    const REMOVE_AMOUNT = 1;
    const REMOVE_AMOUNT_2 = 3;

    const PRICE = 2.50;

    const addAction: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem({ quantity: INITIAL_COUNT, price: PRICE})
    };

    const removeAction1: BasketActionTypes = {
      type: REMOVE_FROM_BASKET,
      payload: makeBasketItem({ quantity: REMOVE_AMOUNT, price: PRICE})
    };

    const removeAction2: BasketActionTypes = {
      type: REMOVE_FROM_BASKET,
      payload: makeBasketItem({ quantity: REMOVE_AMOUNT_2, price: PRICE})
    };

    let state = reducer(initialState, addAction);
    expect(state.items).toEqual({
      1: {quantity: INITIAL_COUNT, price: PRICE}
    });

    state = reducer(state, removeAction1);
    const qty1 = INITIAL_COUNT - REMOVE_AMOUNT;
    expect(state.items).toEqual({
      1: {quantity: qty1, price: PRICE}
    });
    expect(state.total).toEqual(qty1 * PRICE);

    state = reducer(state, removeAction2);
    const qty2 = INITIAL_COUNT - REMOVE_AMOUNT - REMOVE_AMOUNT_2;
    expect(state.items).toEqual({
      1: {quantity: qty2, price: PRICE}
    });
    expect(state.total).toEqual(qty2 * PRICE);
  });

  it('makes no changes if trying to remove a product that is not in basket', () => {
    const item = makeBasketItem();
    const item2 = makeBasketItem({ productId: 123, price: 5 });

    const addAction: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: item
    };

    const addAction2: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: item2
    };

    let state = reducer(initialState, addAction);
    state = reducer(state, addAction2);

    const expected = {
      1: {quantity: 1, price: 1},
      123: {quantity: 1, price: 5}
    };
    expect(state.items).toEqual(expected);
    expect(state.total).toEqual(1 + 5);

    const removeAction: BasketActionTypes = {
      type: REMOVE_FROM_BASKET,
      payload: makeBasketItem({ productId: 50})
    };

    state = reducer(state, removeAction);
    expect(state.items).toEqual(expected);
    expect(state.total).toEqual(1 + 5);
  });

  it('does not have negative price/total when subtracting a quantity greater than the current quantity', () => {
    const addAction: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem({ quantity: 3, price: 5})
    };

    let state = reducer(initialState, addAction);
    expect(state).toEqual({
      items: {
        1: {quantity: 3, price: 5}
      },
      total: 3 * 5
    });

    const removeAction: BasketActionTypes = {
      type: REMOVE_FROM_BASKET,
      payload: makeBasketItem({ quantity: 5, price: 5})
    };

    state = reducer(state, removeAction);
    expect(state.items).toEqual({});
    expect(state.total).toEqual(0);
  });

  it('empties basket as expected', () => {
    const emptyAction: BasketActionTypes = {
      type: EMPTY_BASKET
    };

    const addAction: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem({ quantity: 3, price: 5})
    };

    const addAction2: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem({ productId: 2, price: 2})
    };

    const addAction3: BasketActionTypes = {
      type: ADD_TO_BASKET,
      payload: makeBasketItem({ productId: 3, quantity: 20})
    };

    let state = reducer(initialState, addAction);
    state = reducer(state, addAction2);
    state = reducer(state, addAction3);

    const expected = {
      1: {quantity: 3, price: 5},
      2: {quantity: 1, price: 2},
      3: {quantity: 20, price: 1},
    };

    expect(state.items).toEqual(expected);
    expect(state.total).toEqual(15 + 2 + 20);

    state = reducer(state, emptyAction);
    expect(state).toEqual({
      items: {},
      total: 0
    });
  });
});
