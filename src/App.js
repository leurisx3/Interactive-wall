import React from 'react';
import './App.css';
import Publication from './components/Publication';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (

    <div className="container p-4">
      <div className="row">
        <Publication />
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;
