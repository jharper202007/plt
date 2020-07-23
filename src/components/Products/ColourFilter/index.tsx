import React from 'react';
import { useDispatch } from 'react-redux';

import { applyFilter, resetFilter } from '../../../actions/products';
import { Colour, isColour, ProductFilterTypes } from '../../../types';
import Filter from '../../Filter';

interface ColourFilterProps {
  colours: Colour[];
}

const ColourFilter = ({ colours }: ColourFilterProps) => {
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>  {
    if (isColour(e.target.value)) {
      dispatch(
        applyFilter(ProductFilterTypes.Colour, e.target.value)
      );
    } else {
      dispatch(
        resetFilter(ProductFilterTypes.Colour)
      );
    }
  };

  return (
    <Filter options={colours} onChange={onChange} />
  );
};

export default ColourFilter;
