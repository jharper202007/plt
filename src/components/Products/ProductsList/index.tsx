import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './../../../reducers';
import { loadProducts } from './../../../actions/products';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: AppState) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div>
      Products List
    </div>
  );
};

export default ProductsList;
