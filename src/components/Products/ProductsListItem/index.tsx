import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../../../types';
import { AppState } from './../../../reducers';

import basketDataSelector from './selector';

export interface ProductsListItemProps {
  product: Product;
}

const ProductsListItem = (props: ProductsListItemProps) => {
  const { product } = props;
  const basketData = useSelector((state: AppState) => basketDataSelector(state, props));

  return (
    <div className="card mb-1">
      <div className="row">
        <div className="col-2">
          <img src={product.img} height={150} width={150} />
        </div>
        <div className="col-8">
          <div className="card-block p-2">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">£{product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-2">
          <div className="row h-100 align-items-center">
            <div className="col">
              <button className="btn btn-default">-</button>
            </div>
            <div className="col">{basketData ? basketData.quantity : 0}</div>
            <div className="col">
              <button className="btn btn-default">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductsListItem;
