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
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Page 3
        </a>
      </header>
    </div>
  );
}

export default App;
