import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from './logo.svg';
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
            <Link to="/">Back to Page One</Link>
          </header>
        </div>
    )
  }
}

export default Page2;