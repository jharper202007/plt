import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from './../../../reducers';

const TotalPrice = () => {
  const total = useSelector((state: AppState) => state.basket.total);

  return (
    <span>
      <strong>Total: </strong>
      £{total.toFixed(2)}
    </span>
  );
};

export default TotalPrice;
