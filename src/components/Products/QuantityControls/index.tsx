import React from 'react';

import { Product } from './../../../types';

export interface QuantityControlsProps {
  product: Product,
  quantity: number;
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  removeAll: (productId: number) => void;
};

const QuantityControls = (props : QuantityControlsProps) => {
  const { quantity } = props;
  const { id } = props.product;

  const increment = () => props.increment(id);
  const decrement = () => props.decrement(id);
  const removeAll = () => props.removeAll(id);

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
