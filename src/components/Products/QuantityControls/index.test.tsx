import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import QuantityControls from '.';
import { Colour } from '../../../types';

describe('QuantityControls test', () => {
  const inc = jest.fn();
  const dec = jest.fn();
  const removeAll = jest.fn();

  beforeEach(() => {
    inc.mockClear();
    dec.mockClear();
    removeAll.mockClear();
  });

  const product = {
    id: 1,
    name: 'Test Product',
    img: 'https://via.placeholder.com/150',
    price: 10,
    colour: Colour.Black
  };

  it('renders', () => {
    const { container } = render(
      <QuantityControls
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantity={1}
      />
    );

    expect(container.firstChild).toHaveClass('row');
  });

  it('shows remove button when quantity is greater than zero', () => {
    const { getAllByRole } = render(
      <QuantityControls
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantity={1}
      />
    );

    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(3);
    expect(buttons[1]).toHaveTextContent('Remove');
  });

  it('does not show remove button when quantity is zero', () => {
    const { getAllByRole } = render(
      <QuantityControls
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantity={0}
      />
    );

    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(buttons.map(button => button.innerHTML)).toEqual(['-', '+']);
  });

  it('fires appropriate events when buttons are clicked', () => {
    const { getAllByRole } = render(
      <QuantityControls
        product={product}
        increment={inc}
        decrement={dec}
        removeAll={removeAll}
        quantity={1}
      />
    );

    const [decrementBtn, removeBtn, incrementBtn] = getAllByRole('button');
    fireEvent.click(incrementBtn);
    expect(inc).toHaveBeenCalledTimes(1);
    expect(inc).toHaveBeenCalledWith(1, 10);
    fireEvent.click(incrementBtn);
    expect(inc).toHaveBeenCalledTimes(2);

    fireEvent.click(decrementBtn);
    expect(dec).toHaveBeenCalledTimes(1);
    expect(dec).toHaveBeenCalledWith(1, 10);

    fireEvent.click(removeBtn);
    expect(removeAll).toHaveBeenCalledTimes(1);
  });
});
