import React from 'react';
import { greeting } from 'shared-hello';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
