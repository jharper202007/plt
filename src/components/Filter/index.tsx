import React, { ChangeEvent } from 'react';

interface FilterProps {
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Filter = ({ options, onChange}: FilterProps) => {
  return (
    <select className="form-control" onChange={onChange}>
      <option value="">- Show All -</option>
      {options.map(opt => (
        <option
          key={opt}
          value={opt}
        >
          {opt}
        </option>
      ))}
    </select>
  )
};

export default Filter;
