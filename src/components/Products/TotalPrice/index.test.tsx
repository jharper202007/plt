import React from 'react';
import { render } from '@testing-library/react';

import TotalPrice from '.';

describe('TotalPrice test', () => {
  it('renders', () => {
    const { getByText } = render(<TotalPrice total={10} />);
    const price = getByText(/£10/i)
    expect(price).toBeInTheDocument();
  });

  it('shows whole number to 2dp', () => {
    const { getByText } = render(<TotalPrice total={10} />)
    const price = getByText(/£10.00/i)
    expect(price).toBeInTheDocument();
  });

  it('rounds number to 2dp', () => {
    const { getByText } = render(<TotalPrice total={10.47898} />)
    const price = getByText(/£10.48/i)
    expect(price).toBeInTheDocument();
  })
});
