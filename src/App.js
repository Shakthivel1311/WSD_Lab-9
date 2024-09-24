import React from 'react';
import DogImages from './components/DogImages';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Login App & Dog API</h1>
        <Login />
        <DogImages />
      </header>
    </div>
  );
}

export default App;
