import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <NavLink activeClassName="selected" to="/" className="navbar-brand" href="#">LK Store</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink activeClassName="selected" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected" to="/Product">Product</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="selected" to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;