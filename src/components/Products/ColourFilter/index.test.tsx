import React from 'react';
import { render } from '@testing-library/react';

import ColourFilter from '.';
import { Colour } from '../../../types';

describe('ColourFilter test', () => {
  it('renders', () => {
    const colours = [Colour.Black, Colour.Red, Colour.Stone];
    const component = render(
      <ColourFilter colours={colours} />
    );

    expect(component.getAllByRole('combobox').length).toEqual(1);

    const options = component.getAllByRole('option');
    expect(options.length).toEqual(colours.length + 1);
  });
});
