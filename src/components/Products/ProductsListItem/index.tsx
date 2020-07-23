import React from 'react';

import { Product } from '../../../types';

interface ProductsListItemProps {
  product: Product;
}

const ProductsListItem = ({ product }: ProductsListItemProps) => {
  return (
    <div>
      {product.name}
    </div>
  )
};

export default ProductsListItem;
