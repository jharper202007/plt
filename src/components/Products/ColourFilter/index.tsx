import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { applyFilter, resetFilter } from '../../../actions/products';
import { Colour, isColour, ProductFilterTypes } from '../../../types';

import colourSelector from './selector';

interface ColourFilterProps {
  colours: Colour[];
}

const ColourFilter = ({ colours }: ColourFilterProps) => {
  const dispatch = useDispatch();
  const selected = useSelector(colourSelector) || '';

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
    <select className="form-control" onChange={onChange} value={selected}>
      <option value="">- Show All -</option>
      {colours.map((colour: Colour) => (
        <option
          key={colour}
          value={colour}
        >
          {colour}
        </option>
      ))}
    </select>
  )
};

export default ColourFilter;
