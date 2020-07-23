import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProducts } from './../../../actions/products';
import ProductsListItem from '../ProductsListItem';
import ProductListSelector from './selector';
import TotalPrice from './../TotalPrice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, filter, error } = useSelector(ProductListSelector);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>Loading products...</div>
    );
  }

  if (error) {
    return (
      <div>{error}</div>
    );
  }

  const visibleProducts =
    filter ? products.filter(product => product.colour === filter) : products;

  return (
    <>
      <div className="col">
        {visibleProducts.map(product => (
          <ProductsListItem key={product.id} product={product} />
        ))}
      </div>

      <div className="col-2 offset-10">
        <div className="col-4 offset-4">
          <TotalPrice/>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
