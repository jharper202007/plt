import React from 'react';

import ColourFilter from './components/Products/ColourFilter';
import ProductsList from './components/Products/ProductsList';
import TotalPrice from './components/Products/TotalPrice/index';

function App() {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-4">
          <ColourFilter />
        </div>
      </div>

      <div className="row">
        <ProductsList />
      </div>

      <div className="row">
        <div className="col-2 offset-10">
          <div className="col-4 offset-4"><TotalPrice/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
