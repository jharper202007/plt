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
  const basketData = useSelector((state: AppState) => basketDataSelector(state, props));

  const add = () => dispatch(addToBasket(id, 1, price));
  const remove = () => dispatch(removeFromBasket(id, 1, price));

  const quantity = basketData ? basketData.quantity : 0;

  return (
    <div className="row h-100 align-items-center">
      <div className="col">
        <button className="btn btn-default" onClick={remove} disabled={quantity === 0}>-</button>
      </div>
      <div className="col">{quantity}</div>
      <div className="col">
        <button className="btn btn-default" onClick={add}>+</button>
      </div>
    </div>
  );
};

export default QuantityControls;
