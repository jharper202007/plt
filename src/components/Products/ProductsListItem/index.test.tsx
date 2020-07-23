import React from 'react';
import { render } from '@testing-library/react';

import ProductListItem from '.';
import { Colour } from '../../../types';

describe('ProductListItem test', () => {
  const inc = jest.fn();
  const dec = jest.fn();
  const removeAll = jest.fn();

  const product = {
    id: 1,
    name: 'Test Product',
    img: 'https://via.placeholder.com/150',
    price: 10,
    colour: Colour.Black
  };

  it('renders', () => {
    const { container } = render(
      <ProductListItem
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantityInBasket={1}
      />
    );

    expect(container.firstChild).toHaveClass('card');
  });

  it('has correct product details', () => {
    const { getByRole, getByText } = render(
      <ProductListItem
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantityInBasket={1}
      />
    );

    const img = getByRole('img');
    expect(img).toHaveAttribute('src', product.img);

    const title = getByRole('heading');
    expect(title).toHaveTextContent(product.name);

    const price = getByText(/£10/i)
    expect(price).toBeInTheDocument();
  });

  it('renders price in the correct format', () => {
    const { getByText } = render(
      <ProductListItem
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantityInBasket={1}
      />
    );

    const price = getByText(/£10.00/i)
    expect(price).toBeInTheDocument();
  })
});
