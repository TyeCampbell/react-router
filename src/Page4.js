import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from './logo.svg';
import './Page.css';

class Page4 extends Component {

    render() {

    return(
        <div className="Page">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React Router pointing to <code>{this.props.name}</code>.
                </p>
                    <Link to="/">Back to Page One</Link>
            </header>
        </div>
    );
    }
}

export default Page4;
