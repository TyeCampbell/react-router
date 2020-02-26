import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Page.css';


function App() {
  return (
    <div className="Page">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Router pointing to <code>Page 2</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
