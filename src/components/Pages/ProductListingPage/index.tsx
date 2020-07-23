import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProducts } from './../../../actions/products';
import { addToBasket, removeFromBasket } from './../../../actions/basket';
import { applyColourFilter } from './../../../helpers/products';
import ColourFilter from '../../Products/ColourFilter';
import ProductsListItem from '../../Products/ProductsListItem';
import ProductListSelector from './selector';
import TotalPrice from './../../Products/TotalPrice';
import { colours } from './../../../types';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const { products, basket, isLoading, filter, total, error } = useSelector(ProductListSelector);

  const increment = (productId: number) => {
    const product = products.find(product => product.id === productId);
    dispatch(addToBasket(productId, 1, product ? product.price : 0));
  };

  const decrement = (productId: number) => {
    const product = products.find(product => product.id === productId);
    dispatch(removeFromBasket(productId, 1, product ? product.price : 0));
  };

  const removeAll = (productId: number) => {
    // Since price stays the same for each item
    // The price from the basket can just be used here to simplify things
    const { quantity, price } = basket[productId];
    dispatch(removeFromBasket(productId, quantity, price));
  };

  // componentDidMount()
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
      <div className="alert alert-danger">{error}</div>
    );
  }

  const visibleProducts = applyColourFilter(products, filter);

  return (
    <>
      <div className="row mb-2">
        <div className="col-4">
          {products.length > 0 && (
            <ColourFilter colours={colours} />
          )}
        </div>
      </div>

      <div className="row">
        <div className="col">
          {visibleProducts.map(product => (
            <ProductsListItem
              key={product.id}
              product={product}
              increment={increment}
              decrement={decrement}
              removeAll={removeAll}
              quantityInBasket={basket[product.id] ? basket[product.id].quantity : 0}
            />
          ))}
        </div>

        <div className="col-2 offset-10">
          <div className="col-4 offset-4">
            <TotalPrice total={total} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListingPage;
