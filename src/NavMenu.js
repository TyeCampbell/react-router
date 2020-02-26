import React, {Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import './NavMenu.css';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";


class NavMenu extends Component {
    render() {
        return (
        <div className="NavMenu">
            <nav>
                <Link to='/Page1'>Page One</Link>
                <Link to='/Page2'>Page Two</Link>
                <Link to='/Page3'>Page Three</Link>
            </nav>
        </div>
        )
    }
}

export default NavMenu;