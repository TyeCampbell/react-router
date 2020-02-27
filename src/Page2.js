import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Page.css';

class Page2 extends Component {
  render(){
    return(
        <div className="Page">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              React Router pointing to <code>Page 2</code>.
            </p>
          </header>
        </div>
    )
  }
}

export default Page2;