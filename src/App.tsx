import React from 'react';
import ProductsList from './components/Products/ProductsList';
import TotalPrice from './components/Products/TotalPrice/index';

function App() {
  return (
    <div className="container">
      <ProductsList />
      <div className="row">
        <div className="col-2 offset-10">
          <div className="col-4 offset-4"><TotalPrice/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
