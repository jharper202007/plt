import React from 'react';

import { Product } from '../../../types';

import QuantityControls from '../QuantityControls';

export interface ProductsListItemProps {
  product: Product;
}

const ProductsListItem = ({ product }: ProductsListItemProps) => (
  <div className="card mb-1">
    <div className="row">
      <div className="col-2">
        <img src={product.img} height={150} width={150} alt={product.name} />
      </div>
      <div className="col-8">
        <div className="card-block p-2">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">£{product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="col-2">
        <QuantityControls product={product} />
      </div>
    </div>
  </div>
);

export default ProductsListItem;
