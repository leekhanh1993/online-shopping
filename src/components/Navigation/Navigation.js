import React, { Component } from 'react';

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
                            <a className="navbar-brand" href="#">LK Store</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Deals</a></li>
                                <li><a href="#">Stores</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user" /> Your Account</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-shopping-cart" /> Cart</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;