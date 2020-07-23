import React from 'react';

interface TotalPriceProps {
  total: number;
}

const TotalPrice = ({ total }: TotalPriceProps) => (
  <span>
    <strong>Total: </strong>
    £{total.toFixed(2)}
  </span>
);

export default TotalPrice;
