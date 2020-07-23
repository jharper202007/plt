import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './../../../reducers';
import { loadProducts } from './../../../actions/products';
import ProductsListItem from '../ProductsListItem';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (products.isLoading) {
    return (
      <div>Loading products...</div>
    );
  }

  return (
    <div>
      {products.items.map(product => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
