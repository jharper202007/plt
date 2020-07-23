import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import Filter from '.';
import { Colour } from '../../types';

describe('Filter tests', () => {
  it('renders all of the expected options', () => {
    const colours = [Colour.Black, Colour.Red];
    const component = render(
      <Filter options={colours} onChange={()=>{}} />
    );

    const options = component.getAllByRole('option');
    expect(options.length).toEqual(colours.length + 1); // +1 for 'Show All'
    expect(options[0].innerHTML).toMatch(/- Show All -/i);
    expect(options[1].innerHTML).toMatch(/Black/i);
    expect(options[2].innerHTML).toMatch(/Red/i);
  });

  it('fires onChange event when options are changed', () => {
    const onChange = jest.fn(() => {});

    const colours = [Colour.Black, Colour.Red];
    const component = render(
      <Filter options={colours} onChange={onChange} />
    );

    const filter = component.getByRole('combobox');
    fireEvent.change(filter, {
      target: {value: 'Red'}
    });

    expect(onChange).toBeCalledTimes(1);
  });
});
