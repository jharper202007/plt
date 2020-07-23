import React from 'react';

import ColourFilter from './components/Products/ColourFilter';
import ProductsList from './components/Products/ProductsList';
import { colours } from './types';

const App = () => (
  <div className="container mt-2">
    <div className="row mb-2">
      <div className="col-4">
        <ColourFilter colours={colours} />
      </div>
    </div>

    <div className="row">
      <ProductsList />
    </div>
  </div>
);

export default App;
