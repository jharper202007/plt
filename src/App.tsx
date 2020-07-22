import React from 'react';
import './App.css';
import ProductsList from './components/Products/ProductsList';

function App() {
  return (
    <div className="App">
      <ProductsList />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
