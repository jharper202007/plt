import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './../../../types';
import { loadProducts } from './../../../actions/products';
import ProductsListItem from '../ProductsListItem';
import ProductListSelector from './selector';

const ProductsList = () => {
  const dispatch = useDispatch();
  const {products, isLoading, filter} = useSelector(ProductListSelector);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>Loading products...</div>
    );
  }

  const visibleProducts = filter ? products.filter(product => product.colour === filter) : products;

  return (
    <div className="col">
      {visibleProducts.map(product => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
