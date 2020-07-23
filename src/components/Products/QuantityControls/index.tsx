import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from './../../../reducers';
import basketDataSelector from './selector';
import { addToBasket, removeFromBasket } from './../../../actions/basket';
import { Product } from './../../../types';

export interface QuantityControlsProps {
  product: Product
}

const QuantityControls = (props : QuantityControlsProps) => {
  const { id, price } = props.product;
  const dispatch = useDispatch();
  const basketData = useSelector(
    (state: AppState) => basketDataSelector(state, props)
  );

  const quantity = basketData ? basketData.quantity : 0;

  const increment = () => dispatch(addToBasket(id, 1, price));
  const decrement = () => dispatch(removeFromBasket(id, 1, price));
  const removeAll = () => dispatch(removeFromBasket(id, quantity, price));

  return (
    <div className="row h-100 align-items-center">
      <div className="col">
        <button
          className="btn btn-default"
          onClick={decrement}
          disabled={quantity === 0}
        >
          -
        </button>
      </div>
      <div className="col text-center">
        <div>{quantity}</div>
        {quantity > 0 && (
          <button style={{ fontSize: 10 }} onClick={removeAll}>Remove</button>
        )}
      </div>
      <div className="col">
        <button
          className="btn btn-default"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityControls;
