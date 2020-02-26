import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './NavMenu.css';

class NavMenu extends Component {
    render() {
        return (
        <div className="NavMenu">
            <nav>
                <NavLink exact activeClassName='active-link' to='/Page1'>Page One</NavLink>
                <NavLink exact activeClassName='active-link' to='/Page2'>Page Two</NavLink>
                <NavLink exact activeClassName='active-link' to='/Page3'>Page Three</NavLink>
            </nav>
        </div>
        )
    }
}

export default NavMenu;