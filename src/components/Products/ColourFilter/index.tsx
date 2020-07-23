import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { applyFilter, resetFilter } from '../../../actions/products';
import { Colour } from '../../../types';

import colourSelector from './selector';

const colours : Colour[] = [Colour.Black, Colour.Red, Colour.Stone];

function isColour(value: string): value is Colour {
  return colours.includes(value as Colour);
}

const ColourFilter = () => {
  const dispatch = useDispatch();
  const selected = useSelector(colourSelector) || '';

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>  {
    if (isColour(e.target.value)) {
      dispatch(
        applyFilter('colour', e.target.value)
      );
    } else {
      dispatch(
        resetFilter('colour')
      );
    }
  };

  return (
    <select className="form-control selectpicker" onChange={onChange} value={selected}>
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
